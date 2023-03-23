from collections import defaultdict
from aiohttp import web
from .socket import socket_routes
from .api import api_routes


async def web_server():
    app = web.Application()
    socket = await socket_routes()
    api = await api_routes()
    routes = [socket, api]
    for route in routes:
        app.add_routes(route)
    app['websockets'] = defaultdict(dict)
    return app

if __name__ == '__main__':
    app = web_server()
    web.run_app(app)