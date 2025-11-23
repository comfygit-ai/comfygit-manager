"""Request context utilities for accessing workspace and environment."""
from aiohttp import web
from comfygit_core.core.environment import Environment
from comfygit_core.core.workspace import Workspace


def get_environment_from_request(request: web.Request) -> Environment | None:
    """Get current environment from request context."""
    get_env_fn = request.app.get('get_environment')
    if get_env_fn:
        return get_env_fn()
    return None


def get_workspace_from_request(request: web.Request) -> Workspace | None:
    """Get workspace from request context."""
    return request.app.get('workspace')
