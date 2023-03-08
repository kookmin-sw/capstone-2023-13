from server.server import web_server
from aiohttp import web
from aiohttp.test_utils import TestClient, TestServer


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
async def test_socket(app, client):
    async with client.ws_connect('/ws') as ws:
        await ws.send_json({"user": "test", "room": "main"})
        res = await ws.receive_json()
        assert res["status"] == 200 and res["user"] == "test"
        count = 0
        mq = list()
        rq = list()
        async for msg in ws:
            if msg.type == web.WSMsgType.text:
                res = msg.json()
                rq.append(res)
                if count == 5:
                    rq.pop(0)
                    assert mq == rq
                    break
                test_msg = {'test': 'test'}
                mq.append(test_msg)
                await ws.send_json(test_msg)
                count += 1
