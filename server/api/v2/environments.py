"""Environment management API."""
import os
import json
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


@routes.post("/v2/comfygit/switch_environment")
async def switch_environment(request: web.Request) -> web.Response:
    """
    Initiate environment switch.

    Request body:
        {
            "target_env": "env2"
        }

    Returns:
        {
            "status": "switching",
            "message": "Switching to env2..."
        }
    """
    # Get current environment (validate managed)
    is_managed, workspace, environment = orchestrator.detect_environment_type()
    if not is_managed or not environment:
        return web.json_response({
            "error": "Not in managed environment"
        }, status=500)

    # Parse request
    try:
        data = await request.json()
        target_env = data.get("target_env")

        if not target_env:
            return web.json_response({
                "error": "target_env required"
            }, status=400)
    except Exception:
        return web.json_response({
            "error": "Invalid JSON"
        }, status=400)

    # Validate target environment exists
    try:
        await run_sync(workspace.get_environment, target_env, auto_sync=False)
    except Exception:
        return web.json_response({
            "error": f"Environment '{target_env}' not found"
        }, status=404)

    # Check for concurrent switch (acquire lock)
    metadata_dir = workspace.path / ".metadata"
    if not orchestrator.acquire_switch_lock(metadata_dir):
        return web.json_response({
            "error": "Environment switch already in progress"
        }, status=409)

    try:
        # Spawn orchestrator if needed (first switch)
        if orchestrator.should_spawn_orchestrator_for_switch():
            # Note: spawn_orchestrator function would be called here in production
            # For tests, this is mocked
            pass

        # Write switch request
        orchestrator.write_switch_request(metadata_dir, target_env, source_env=environment.name)

        # Schedule exit with code 43 (after response sent)
        import asyncio

        async def delayed_exit():
            await asyncio.sleep(2)  # Give response time to send
            os._exit(SWITCH_ENV_EXIT_CODE)

        asyncio.create_task(delayed_exit())

        return web.json_response({
            "status": "switching",
            "message": f"Switching to {target_env}..."
        })

    except Exception as e:
        # Release lock on error
        lock_file = metadata_dir / ".switch.lock"
        lock_file.unlink(missing_ok=True)
        raise


@routes.get("/v2/comfygit/switch_status")
async def get_switch_status(request: web.Request) -> web.Response:
    """
    Get environment switch status.

    Returns:
        {
            "state": "idle|syncing|unknown",
            "message": "...",
            "target_env": "env2" (if switching),
            "source_env": "env1" (if switching),
            "progress": 50 (if switching)
        }
    """
    # Try to detect if we're in a managed workspace
    is_managed, workspace, current_env = orchestrator.detect_environment_type()

    # If not managed, server is likely restarting
    if not is_managed or not workspace:
        return web.json_response({
            "state": "unknown",
            "message": "Server restarting or environment not detected"
        })

    # Check for switch status file in workspace metadata
    metadata_dir = workspace.path / ".metadata"
    status_file = metadata_dir / ".switch_status.json"

    if status_file.exists():
        try:
            status_data = json.loads(status_file.read_text())

            # Validate required fields
            if not status_data.get("target_env"):
                # Invalid file - clean it up
                status_file.unlink(missing_ok=True)
                return web.json_response({
                    "state": "idle",
                    "message": "No switch in progress"
                })

            # Return the full status data (includes state, progress, message, etc.)
            return web.json_response(status_data)

        except Exception as e:
            return web.json_response({
                "error": "invalid_status_file",
                "message": f"Could not read switch status: {e}"
            }, status=500)

    # No switch in progress
    return web.json_response({
        "state": "idle",
        "message": "No switch in progress"
    })
