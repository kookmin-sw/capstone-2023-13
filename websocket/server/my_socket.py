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
    user, nickname, channel, custom, X, Y, Z = M.get_init_data(data)
    log = request.app['logging']
    
    for user_id, socket in request.app['websockets'][channel].items():
        if user_id == user:
            log.connect_logging(400, user, nickname, channel)
            await ws.send_json(M.connect(user, 400))
            await ws.close()
            return ws
    await ws.send_json(M.connect(user, 200, X, Y, Z))
    log.connect_logging(200, user, nickname, channel)
    await M.broadcast(request.app,
                      channel,
                      M.action(user, custom, "down", X, Y, Z))
    request.app['websockets'][channel][user] = ws
    await M.broadcast(request.app,
                      channel,
                      M.chat("SERVER", "SERVER", f"[{user}] enter chat room"))
    async for msg in ws:
        if msg.type == web.WSMsgType.text:
            req = msg.json()
            type = req.get('type')
            if type == 'action':
                direction = req.get('dir')
                X = req.get('X')
                Y = req.get('Y')
                Z = req.get('Z')
                await M.broadcast(request.app,
                                  channel,
                                  M.action(user, custom, direction, X, Y, Z))
                log.action_logging(user, nickname, channel, direction, X, Y, Z)
            elif type == 'chat':
                msg = req.get('msg')
                await M.broadcast(request.app,
                                  channel,
                                  M.chat(user, nickname, msg))
                log.chat_logging(user, nickname, channel, msg)
            else:
                await ws.send_json(M.connect(user, 400))
    del request.app['websockets'][channel][user]
    log.disconnect_logging(user, nickname, channel)
    await ws.close()
    return ws

def router():
    return routes
