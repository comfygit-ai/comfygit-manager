"""Status and workspace configuration endpoints."""
from aiohttp import web

from core.decorators import requires_environment
from core.serializers import serialize_environment_status
from utils.async_helpers import run_sync

routes = web.RouteTableDef()


@routes.get("/v2/comfygit/status")
@requires_environment
async def get_status(request: web.Request, env) -> web.Response:
    """
    Get current environment status.

    Returns:
        Environment status with git, workflow, and comparison info.
    """
    status = await run_sync(env.status)
    return web.json_response(serialize_environment_status(status, env.name))
