from aiohttp import web
from .message import Message as M


routes = web.RouteTableDef()


@routes.get('/')
async def return_success(request):
    return web.json_response({'rsp': 'success'})


@routes.get('/ws')
async def websocket_handler(request):
    ws = web.WebSocketResponse()
    await ws.prepare(request)
    
    data = await ws.receive_json()
    user, channel, X, Y = M.get_init_data(data)
    
    for user_id, socket in request.app['websockets'][channel].items():
        if user_id == user:
            print("Aready Exist User")
            await ws.send_json(M.connect(user, 400))
            await ws.close()
            return ws
    await ws.send_json(M.connect(user, 200))
    await M.broadcast(request.app,
                      channel,
                      M.action(user, X, Y))
    request.app['websockets'][channel][user] = ws
    await M.broadcast(request.app,
                      channel,
                      M.chat("SERVER", f"[{user}] enter chat room"))
    async for msg in ws:
        if msg.type == web.WSMsgType.text:
            req = msg.json()
            if req.get('type') == 'action':
                X = req.get('X')
                Y = req.get('Y')
                await M.broadcast(request.app,
                                  channel,
                                  M.action(user, X, Y))
            elif req.get('type') == 'chat':
                await M.broadcast(request.app,
                                  channel,
                                  M.chat(user, req.get('msg')))

    del request.app['websockets'][channel][user]
    print(f"Disconnect {user}")
    return ws

def router():
    return routes
