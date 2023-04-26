from my_socket import web_server
import asyncio
from aiohttp import web


if __name__ == '__main__':
    app = asyncio.run(web_server())
    web.run_app(app)