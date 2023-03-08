from aiohttp import web


routes = web.RouteTableDef()

@routes.get('/ws')
async def websocket_handler(request):
    ws = web.WebSocketResponse()
    await ws.prepare(request)
    
    req = await ws.receive_json()
    user = req['user_id']
    channel = req['channel_id']

    await ws.send_json({"status": 200, "user": user})

    if request.app['websockets'][channel].get(user):
        await ws.close(message=b'Aready User')
        return ws
    else:
        request.app['websockets'][channel][user] = ws
        await broadcast(request.app,
                        channel,
                        message={"user": "SERVER", "message": f"[{user}] enter chat room"})

    async for msg in ws:
        if msg.type == web.WSMsgType.text:
            await broadcast(request.app, channel, msg.json())

    del request.app['websockets'][channel][user]
    return ws

async def broadcast(app, channel, message):
    for user, ws in app['websockets'][channel].items():
        await ws.send_json(message)

async def socket_routes():
    return routes
