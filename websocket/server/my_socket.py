from aiohttp import web
from collections import defaultdict


routes = web.RouteTableDef()


@routes.get('/')
async def return_success(request):
    return web.json_response({'rsp': 'success'})


@routes.get('/ws')
async def websocket_handler(request):
    ws = web.WebSocketResponse()
    await ws.prepare(request)
    
    req = await ws.receive_json()
    user = req.get('user_id')
    channel = req.get('channel_id')
    X = req.get('X')
    Y = req.get('Y')

    await broadcast(request.app,
                    channel,
                    {   
                        "type": "action",
                        "user_id": user,
                        "X": X,
                        "Y": Y
                    })
    await ws.send_json({
                            "type": "connect",
                            "user_id": user,
                            "status": 200
                        })

    if request.app['websockets'][channel].get(user):
        await ws.close(message=b'Aready User')
        return ws
    else:
        request.app['websockets'][channel][user] = ws
        await broadcast(request.app,
                        channel,
                        message={
                            "type": "chat",
                            "user_id": "SERVER", 
                            "msg": f"[{user}] enter chat room"
                        })

    async for msg in ws:
        if msg.type == web.WSMsgType.text:
            req = msg.json()
            if req.get('type') == 'action':
                X = req.get('X')
                Y = req.get('Y')
                await broadcast(request.app,
                                channel,
                                message={   
                                    "type": "action",
                                    "user_id": user,
                                    "X": X,
                                    "Y": Y
                                })
            elif req.get('type') == 'chat':
                await broadcast(request.app,
                                channel,
                                message={
                                    "type": "chat",
                                    "user_id": user, 
                                    "msg": req.get('msg')
                                })

    del request.app['websockets'][channel][user]
    return ws

async def broadcast(app, channel, message):
    for user, ws in app['websockets'][channel].items():
        await ws.send_json(message)


async def web_server():
    app = web.Application()
    app.add_routes(routes)
    app['websockets'] = defaultdict(dict)
    return app
