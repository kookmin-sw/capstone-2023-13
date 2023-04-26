from server.my_socket import web_server
from server.message import Message as M
from aiohttp import web


def open_server_client(test_func):
    async def wrapper(aiohttp_client, event_loop):
        app = await web_server()
        client = await aiohttp_client(app)
        await test_func(app, client)
    return wrapper

@open_server_client
async def test_running_server(app, client):
    res = await client.get('/')
    data = await res.json()
    assert data == {"rsp": "success"} and res.status == 200

@open_server_client
async def test_single_socket(app, client):
    async with client.ws_connect('/ws') as ws:
        await ws.send_json(M.set_init_data("test", "test", 0, 0))
        res = await ws.receive_json()
        assert res.get("type") == "connect" and res.get("user_id") == "test" and res.get("status") == 200
        count = 0
        mq = list()
        rq = list()
        async for msg in ws:
            if msg.type == web.WSMsgType.text:
                res = msg.json()
                rq.append(res)
                if not count:
                    assert res == M.chat("SERVER", f"[test] enter chat room")
                if count == 3:
                    rq.pop(0)
                    assert mq == rq
                    break
                test_msg = M.chat("test", "Hello World!")
                mq.append(test_msg)
                await ws.send_json(test_msg)
                count += 1
        await ws.close()

@open_server_client
async def test_multi_socket(app, client):
    user_list = [M.set_init_data("test1", "test", 0, 1),
                 M.set_init_data("test2", "test", 1, 0)]
    mq = list()
    rq = list()
    for user in range(6):
        async with client.ws_connect('/ws') as ws:
            user_idx = user % 2
            user_id = user_list[user_idx]["user_id"]
            await ws.send_json(user_list[user_idx])
            res = await ws.receive_json()
            assert res.get("type") == "connect" and res.get("user_id") == user_id and res.get("status") == 200
            flag = 0
            async for msg in ws:
                if msg.type == web.WSMsgType.text:
                    res = msg.json()
                    if flag:
                        rq.append(res)
                        break
                    assert res == M.chat("SERVER", f"[{user_id}] enter chat room")
                    test_msg = M.chat(user_id, f"{user_id}'s message {user}")
                    await ws.send_json(test_msg)
                    mq.append(test_msg)
                    flag = 1
            await ws.close()
    assert mq == rq
                    