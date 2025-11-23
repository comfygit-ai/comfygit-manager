"""Environment management API."""
import os
from aiohttp import web

from core.decorators import requires_workspace
from utils.async_helpers import run_sync

routes = web.RouteTableDef()

# Exit codes for orchestrator
RESTART_EXIT_CODE = 42
SWITCH_ENV_EXIT_CODE = 43


@routes.get("/v2/comfygit/environments")
@requires_workspace
async def list_environments(request: web.Request, workspace) -> web.Response:
    """List all environments in workspace."""
    environments = await run_sync(workspace.list_environments)

    envs_data = []
    for env_name in environments:
        env = await run_sync(workspace.get_environment, env_name, auto_sync=False)
        status = await run_sync(env.status)

        envs_data.append({
            "name": env.name,
            "is_active": env_name == workspace.active_environment_name,
            "branch": status.git.current_branch,
            "is_synced": status.is_synced,
            "has_changes": status.git.has_changes,
        })

    return web.json_response(envs_data)


@routes.post("/v2/comfygit/environment/switch")
@requires_workspace
async def switch_environment(request: web.Request, workspace) -> web.Response:
    """Switch to a different environment."""
    json_data = await request.json()
    env_name = json_data.get("environment")

    if not env_name:
        return web.json_response({"error": "environment required"}, status=400)

    # Switch environment
    await run_sync(workspace.switch_environment, env_name)

    # Exit with code 43 to trigger environment switch
    import asyncio

    async def delayed_exit():
        await asyncio.sleep(0.3)
        os._exit(SWITCH_ENV_EXIT_CODE)

    asyncio.create_task(delayed_exit())

    return web.json_response({
        "status": "switching",
        "environment": env_name
    })


@routes.get("/v2/comfygit/environment/switch_status")
@requires_workspace
async def get_switch_status(request: web.Request, workspace) -> web.Response:
    """Get environment switch status."""
    # Check if there's a pending switch file
    switch_file = workspace.path / ".switching"

    if switch_file.exists():
        target_env = switch_file.read_text().strip()
        return web.json_response({
            "is_switching": True,
            "target_environment": target_env
        })

    return web.json_response({
        "is_switching": False
    })
