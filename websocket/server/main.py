from .my_socket import router
from .my_logging import Logging
import asyncio
from collections import defaultdict
from aiohttp import web


async def web_server():
    app = web.Application()
    app.add_routes(router())
    log = Logging()
    app['websockets'] = defaultdict(dict)
    app['logging'] = log
    return app


if __name__ == '__main__':
    app = asyncio.run(web_server())
    web.run_app(app)