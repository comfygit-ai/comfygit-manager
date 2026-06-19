"""Status and workspace configuration endpoints."""
from aiohttp import web

from cgm_core.decorators import requires_environment
from cgm_core.lifecycle import build_environment_lifecycle_status
from cgm_core.serializers import serialize_environment_status
from cgm_utils.async_helpers import run_sync

routes = web.RouteTableDef()


async def _refresh_environment_for_status(request: web.Request):
    """Refresh environment object and model index for explicit deep status calls."""
    from comfygit_server import refresh_environment
    refresh_environment()

    from cgm_core.context import get_environment_from_request
    env = get_environment_from_request(request)
    if not env:
        return None

    # Sync model index to detect filesystem changes (like deleted models). This
    # mirrors the CLI behavior where get_environment() auto-syncs, but is kept
    # behind explicit refresh so ordinary panel opens remain bounded.
    if env.workspace:
        try:
            await run_sync(env.workspace.sync_model_directory)
        except Exception as e:
            # Don't fail the whole request if model sync fails
            # (e.g., if models directory is not configured)
            print(f"[ComfyGit] Warning: Model sync failed: {e}")

    return env


@routes.get("/v2/comfygit/status")
@requires_environment
async def get_status(request: web.Request, env) -> web.Response:
    """
    Get current environment status.

    Query params:
        refresh: If "true", forces refresh of cached environment before status check.
                 This also syncs the model index to detect filesystem changes.

    Returns:
        Environment status with git, workflow, and comparison info.
    """
    try:
        # Check if refresh is requested
        if request.query.get("refresh", "").lower() == "true":
            env = await _refresh_environment_for_status(request)
            if not env:
                return web.json_response({"error": "Failed to refresh environment"}, status=500)

        status = await run_sync(env.status)
        return web.json_response(serialize_environment_status(status, env.name, env))
    except Exception as e:
        return web.json_response({
            "error": str(e)
        }, status=500)


@routes.get("/v2/comfygit/status_bundle")
@requires_environment
async def get_status_bundle(request: web.Request, env) -> web.Response:
    """Get environment status and lifecycle guidance from one status snapshot."""
    try:
        if request.query.get("refresh", "").lower() == "true":
            env = await _refresh_environment_for_status(request)
            if not env:
                return web.json_response({"error": "Failed to refresh environment"}, status=500)

        include_readiness = request.query.get("include_readiness", "true").lower() != "false"
        status = await run_sync(env.status)
        return web.json_response({
            "status": serialize_environment_status(status, env.name, env),
            "lifecycle_status": await build_environment_lifecycle_status(
                env,
                include_readiness=include_readiness,
                status=status,
            ),
        })
    except Exception as e:
        return web.json_response({
            "error": str(e)
        }, status=500)


@routes.get("/v2/comfygit/lifecycle_status")
@requires_environment
async def get_lifecycle_status(request: web.Request, env) -> web.Response:
    """Get unified lifecycle status and next-action guidance."""
    try:
        include_readiness = request.query.get("include_readiness", "true").lower() != "false"
        status = await run_sync(env.status)
        return web.json_response(
            await build_environment_lifecycle_status(
                env,
                include_readiness=include_readiness,
                status=status,
            )
        )
    except Exception as e:
        return web.json_response({
            "error": str(e)
        }, status=500)
