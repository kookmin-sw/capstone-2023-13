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
    flag = False
    for user_id, socket in request.app['websockets'][channel].items():
        if user_id == user: flag = True
    if flag: del request.app['websockets'][channel][user]
    request.app['websockets'][channel][user] = ws
    await ws.send_json(M.connect(user, 200, custom))
    log.connect_logging(200, user, nickname, channel, custom)
    await M.broadcast(request.app,
                      channel,
                      M.action(user, custom, "down", X, Y, Z))
    await M.broadcast(request.app,
                      channel,
                      M.chat("SERVER", "SERVER", f"[{nickname}] enter chat room"))
    async for msg in ws:
        if msg.type == web.WSMsgType.text:
            req = msg.json()
            type = req.get('type')
            if type == 'action':
                direction = req.get('dir')
                custom = req.get('custom')
                X = req.get('X')
                Y = req.get('Y')
                Z = req.get('Z')
                await M.broadcast(request.app,
                                  channel,
                                  M.action(user, custom, direction, X, Y, Z))
            elif type == 'chat':
                msg = req.get('msg')
                await M.broadcast(request.app,
                                  channel,
                                  M.chat(user, nickname, msg))
            elif type == 'connect':
                del request.app['websockets'][channel][user]
                req = msg.json()
                channel = req.get('channel_id')
                X = req.get('X')
                Y = req.get('Y')
                Z = req.get('Z')
                request.app['websockets'][channel][user] = ws
                await ws.send_json(M.connect(user, 200, custom))
                log.connect_logging(200, user, nickname, channel, custom)
                await M.broadcast(request.app,
                                  channel,
                                  M.action(user, custom, "down", X, Y, Z))
                await M.broadcast(request.app,
                                  channel,
                                  M.chat("SERVER", "SERVER", f"[{user}] enter chat room"))
            else:
                await ws.send_json(M.connect(user, 400))

    del request.app['websockets'][channel][user]
    log.disconnect_logging(user, nickname, channel)
    return ws

def router():
    return routes
