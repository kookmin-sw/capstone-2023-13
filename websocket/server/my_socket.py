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
    user, nickname, channel, X, Y = M.get_init_data(data)
    log = request.app['logging']
    
    for user_id, socket in request.app['websockets'][channel].items():
        if user_id == user:
            log.connect_logging(400, user, channel)
            await ws.send_json(M.connect(user, 400))
            await ws.close()
            return ws
    await ws.send_json(M.connect(user, 200))
    log.connect_logging(200, user, channel)
    await M.broadcast(request.app,
                      channel,
                      M.action(user, X, Y))
    request.app['websockets'][channel][user] = ws
    await M.broadcast(request.app,
                      channel,
                      M.chat("SERVER", "SERVER", f"[{user}] enter chat room"))
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
                                  M.chat(user, nickname, req.get('msg')))
            else:
                await ws.send_json(M.connect(user, 200))
    del request.app['websockets'][channel][user]
    log.disconnect_logging(user, channel)
    await ws.close()
    return ws

def router():
    return routes
