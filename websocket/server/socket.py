from aiohttp import web


routes = web.RouteTableDef()

@routes.get('/ws')
async def websocket_handler(request):
    ws = web.WebSocketResponse()
    await ws.prepare(request)
    
    req = await ws.receive_json()
    user = req['user']
    room = req['room']

    await ws.send_json({"status": 200, "user": user})

    if request.app['websockets'][room].get(user):
        await ws.close(message=b'Aready User')
        return ws
    else:
        request.app['websockets'][room][user] = ws
        await broadcast(request.app,
                        room,
                        message={"user": "SERVER", "message": f"[{user}] enter chat room"})

    async for msg in ws:
        if msg.type == web.WSMsgType.text:
            await broadcast(request.app, room, msg.json())

    del request.app['websockets'][room][user]
    return ws

async def broadcast(app, room, message):
    for user, ws in app['websockets'][room].items():
        await ws.send_json(message)

async def socket_routes():
    return routes
