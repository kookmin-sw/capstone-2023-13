from server.main import web_server
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
async def test_connect_socket(app, client):
    async with client.ws_connect('/ws') as ws:
        custom = { "hair" : "hair1", "body": "body1", "eye": "eye1", "outfit": "outfit1" }
        await ws.send_json(M.set_init_data(user_id="test",
                                           nickname="test",
                                           custom=custom,
                                           channel_id="test",
                                           X=0, Y=0, Z=0))
        res = await ws.receive_json()
        assert res.get("type") == "connect" and res.get("user_id") == "test" and res.get("status") == 200
        res = await ws.receive_json()
        assert res == M.action(user_id="test",
                               custom=custom,
                               direction="down",
                               X=0, Y=0, Z=0)
        res = await ws.receive_json()
        assert res == M.chat("SERVER", "SERVER", f"[test] enter chat room")

@open_server_client
async def test_multi_socket(app, client):
    custom1 = { "hair" : "hair1", "body": "body1", "eye": "eye1", "outfit": "outfit1" }
    custom2 = { "hair" : "hair2", "body2": "body2", "eye": "eye2", "outfit": "outfit2" }
    user_list = [M.set_init_data(user_id="test1", 
                                 nickname="test1", 
                                 custom=custom1,
                                 channel_id="test", 
                                 X=0, Y=1, Z=0),
                 M.set_init_data(user_id="test2", 
                                 nickname="test2", 
                                 custom=custom2,
                                 channel_id="test", 
                                 X=1, Y=0, Z=1)]
    mq = list()
    rq = list()
    for user in range(100):
        async with client.ws_connect('/ws') as ws:
            user_idx = user % 2
            user_id = user_list[user_idx]["user_id"]
            user_dir = 'down'
            user_custom = user_list[user_idx]["custom"]
            user_X = user_list[user_idx]["X"]
            user_Y = user_list[user_idx]["Y"]
            user_Z = user_list[user_idx]["Z"]
            await ws.send_json(user_list[user_idx])
            res = await ws.receive_json()
            assert res.get("type") == "connect" and res.get("user_id") == user_id and res.get("status") == 200
            res = await ws.receive_json()
            assert res == M.action(user_id,
                                   user_custom,
                                   user_dir,
                                   user_X,
                                   user_Y,
                                   user_Z)
            res = await ws.receive_json()
            assert res == M.chat("SERVER", "SERVER", f"[{user_id}] enter chat room")
            test_msg = M.chat(user_id, user_id, f"{user_id}'s message {user}")
            await ws.send_json(test_msg)
            mq.append(test_msg)
            async for msg in ws:
                if msg.type == web.WSMsgType.text:
                    res = msg.json()
                    rq.append(res)
                    break
            await ws.close()
    assert mq == rq
                    