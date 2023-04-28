from .my_socket import router
import asyncio
from collections import defaultdict
from aiohttp import web
import logging


async def web_server():
    app = web.Application()
    app.add_routes(router())
    logging.basicConfig(level=logging.INFO)
    app['websockets'] = defaultdict(dict)
    return app


if __name__ == '__main__':
    app = asyncio.run(web_server())
    logging.basicConfig(level=logging.DEBUG)
    web.run_app(app)