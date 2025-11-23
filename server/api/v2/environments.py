"""Environment management API."""
import os
from aiohttp import web
from pathlib import Path

from core.context import get_workspace_from_request
from utils.async_helpers import run_sync
import orchestrator

routes = web.RouteTableDef()

# Exit codes for orchestrator
RESTART_EXIT_CODE = 42
SWITCH_ENV_EXIT_CODE = 43


def _get_environment_info(env, current_env):
    """Get detailed environment information."""
    status = env.status()

    # Get basic git info
    current_branch = status.git.current_branch

    return {
        "name": env.name,
        "is_current": env.name == current_env.name if current_env else False,
        "path": str(env.path),
        "created_at": None,  # Could add this to Environment if needed
        "workflow_count": len(status.workflow.sync_status.synced) + len(status.workflow.sync_status.new) + len(status.workflow.sync_status.modified),
        "node_count": len(status.comparison.missing_nodes) + len(status.comparison.extra_nodes) + len(status.comparison.version_mismatches),
        "model_count": len(status.missing_models),
        "current_branch": current_branch
    }


@routes.get("/v2/comfygit/environments")
async def list_environments(request: web.Request) -> web.Response:
    """List all environments in workspace."""
    is_managed, workspace, current_env = orchestrator.detect_environment_type()

    if not is_managed or not workspace:
        return web.json_response({
            "environments": [],
            "current": None,
            "is_managed": False
        })

    try:
        # Get all environment objects
        all_envs = await run_sync(workspace.list_environments)

        environments = []
        for env in all_envs:
            try:
                env_info = await run_sync(_get_environment_info, env, current_env)
                environments.append(env_info)
            except Exception as e:
                print(f"[ComfyGit Panel] Error getting info for {env.name}: {e}")
                environments.append({
                    "name": env.name,
                    "is_current": env.name == current_env.name if current_env else False,
                    "path": str(env.path),
                    "created_at": None,
                    "workflow_count": 0,
                    "node_count": 0,
                    "model_count": 0,
                    "current_branch": None
                })

        return web.json_response({
            "environments": environments,
            "current": current_env.name if current_env else None,
            "is_managed": True
        })

    except Exception as e:
        return web.json_response({
            "error": "internal_error",
            "message": str(e)
        }, status=500)


@routes.post("/v2/comfygit/environment/switch")
async def switch_environment(request: web.Request) -> web.Response:
    """Switch to a different environment."""
    is_managed, workspace, current_env = orchestrator.detect_environment_type()

    if not is_managed or not workspace:
        return web.json_response({
            "error": "not_managed",
            "message": "Not in a managed workspace"
        }, status=400)

    json_data = await request.json()
    env_name = json_data.get("environment")

    if not env_name:
        return web.json_response({
            "error": "validation_failed",
            "message": "environment field is required"
        }, status=400)

    # Check if target environment exists
    try:
        await run_sync(workspace.get_environment, env_name, auto_sync=False)
    except Exception as e:
        return web.json_response({
            "error": "environment_not_found",
            "message": f"Environment '{env_name}' not found"
        }, status=404)

    # Check if switch is already in progress
    switch_file = workspace.path / ".switching"
    if switch_file.exists():
        return web.json_response({
            "error": "switch_in_progress",
            "message": "Environment switch already in progress"
        }, status=409)

    # Write switch file
    switch_file.write_text(env_name)

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
        "target_environment": env_name
    })


@routes.get("/v2/comfygit/environment/switch_status")
async def get_switch_status(request: web.Request) -> web.Response:
    """Get environment switch status."""
    is_managed, workspace, current_env = orchestrator.detect_environment_type()

    if not is_managed or not workspace:
        # Not managed - could be during restart
        # Check default location for switch file
        from pathlib import Path
        default_workspace = Path.home() / 'comfygit'
        if default_workspace.exists():
            switch_file = default_workspace / ".switching"
            if switch_file.exists():
                try:
                    target_env = switch_file.read_text().strip()
                    return web.json_response({
                        "is_switching": True,
                        "target_environment": target_env
                    })
                except Exception:
                    pass

        return web.json_response({
            "is_switching": False
        })

    # Check if there's a pending switch file
    switch_file = workspace.path / ".switching"

    if switch_file.exists():
        try:
            # Validate the file content
            target_env = switch_file.read_text().strip()
            if not target_env:
                # Invalid file - clean it up
                switch_file.unlink(missing_ok=True)
                return web.json_response({
                    "is_switching": False
                })

            return web.json_response({
                "is_switching": True,
                "target_environment": target_env
            })
        except Exception as e:
            # Invalid status file
            return web.json_response({
                "error": "invalid_status_file",
                "message": f"Could not read switch status: {e}"
            }, status=500)

    return web.json_response({
        "is_switching": False
    })
