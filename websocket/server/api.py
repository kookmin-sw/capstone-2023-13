from aiohttp import web


routes = web.RouteTableDef()

@routes.get('/')
async def return_success(request):
    return web.json_response({'rsp': 'success'})

async def api_routes():
    return routes
