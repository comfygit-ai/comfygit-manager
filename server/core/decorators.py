"""Handler decorators for common patterns."""
import functools
from aiohttp import web
from core.context import get_environment_from_request, get_workspace_from_request


def requires_environment(handler):
    """
    Decorator that injects environment into handler.

    Transforms:
        async def handler(request) -> Response
    Into:
        async def handler(request, env: Environment) -> Response
    """
    @functools.wraps(handler)
    async def wrapper(request: web.Request, *args, **kwargs):
        env = get_environment_from_request(request)
        if not env:
            return web.json_response({
                "error": "No environment detected"
            }, status=500)
        return await handler(request, env, *args, **kwargs)
    return wrapper


def requires_workspace(handler):
    """
    Decorator that injects workspace into handler.

    Transforms:
        async def handler(request) -> Response
    Into:
        async def handler(request, workspace: Workspace) -> Response
    """
    @functools.wraps(handler)
    async def wrapper(request: web.Request, *args, **kwargs):
        workspace = get_workspace_from_request(request)
        if not workspace:
            return web.json_response({
                "error": "No workspace detected"
            }, status=500)
        return await handler(request, workspace, *args, **kwargs)
    return wrapper
