"""
ComfyGit Manager Server - Backend API endpoints for the Manager UI.
Provides /v2/ endpoints that the built-in Manager UI expects.
"""

import asyncio
import sys
import uuid
from pathlib import Path
from datetime import datetime

from aiohttp import web
from server import PromptServer

# Get the routes object
routes = PromptServer.instance.routes

# ============================================================================
# Feature Flag & CLI Argument Injection
# ============================================================================

# Inject --enable-manager into sys.argv so the frontend enables the Manager UI
# The frontend checks systemStats.system.argv for this flag
if '--enable-manager' not in sys.argv:
    sys.argv.append('--enable-manager')
    print("[ComfyGit] Injected --enable-manager into sys.argv")

# Inject extension.manager.supports_v4 into ComfyUI's feature flags
# This tells the frontend to use the new Manager UI
try:
    from comfy_api import feature_flags
    if hasattr(feature_flags, 'SERVER_FEATURE_FLAGS'):
        # Add our extension feature flag
        if 'extension' not in feature_flags.SERVER_FEATURE_FLAGS:
            feature_flags.SERVER_FEATURE_FLAGS['extension'] = {}
        if 'manager' not in feature_flags.SERVER_FEATURE_FLAGS['extension']:
            feature_flags.SERVER_FEATURE_FLAGS['extension']['manager'] = {}
        feature_flags.SERVER_FEATURE_FLAGS['extension']['manager']['supports_v4'] = True
        print("[ComfyGit] Injected extension.manager.supports_v4 feature flag")
except ImportError:
    print("[ComfyGit] Warning: Could not import comfy_api.feature_flags - feature flags not injected")
except Exception as e:
    print(f"[ComfyGit] Warning: Failed to inject feature flags: {e}")

# ============================================================================
# State Management
# ============================================================================

# Task queue state
task_queue: list[dict] = []
task_history: dict[str, dict] = {}
running_task: dict | None = None

# Comfygit workspace/environment references (lazy loaded)
_workspace = None
_environment = None


def get_environment_from_cwd():
    """Infer workspace and environment from ComfyUI's working directory.

    ComfyUI runs with cwd = {workspace}/environments/{env_name}/ComfyUI
    We can infer the environment from this path structure.
    """
    global _workspace, _environment

    if _environment is not None:
        return _environment

    try:
        from comfygit_core.core.workspace import Workspace, WorkspacePaths
        from comfygit_core.core.environment import Environment

        cwd = Path.cwd()

        # Expected: {workspace}/environments/{env_name}/ComfyUI
        if cwd.name == 'ComfyUI':
            env_path = cwd.parent
            env_name = env_path.name
            environments_path = env_path.parent

            if environments_path.name == 'environments':
                workspace_root = environments_path.parent
                workspace_paths = WorkspacePaths(workspace_root)

                if workspace_paths.exists():
                    _workspace = Workspace(workspace_paths)
                    _environment = Environment(
                        name=env_name,
                        path=env_path,
                        workspace=_workspace
                    )
                    print(f"[ComfyGit] Detected environment '{env_name}' from CWD")
                    return _environment

        # Fallback: try standard workspace discovery
        from comfygit_core.factories.workspace_factory import WorkspaceFactory
        _workspace = WorkspaceFactory.find()
        _environment = _workspace.get_active_environment()
        if _environment:
            print(f"[ComfyGit] Using active environment '{_environment.name}'")
        return _environment

    except Exception as e:
        print(f"[ComfyGit] Failed to detect environment: {e}")
        return None


def get_current_state() -> dict:
    """Get current task state for WebSocket events."""
    return {
        "history": task_history,
        "running_queue": [running_task] if running_task else [],
        "pending_queue": task_queue,
        "installed_packs": get_installed_packs()
    }


def get_installed_packs() -> dict[str, dict]:
    """Get installed custom nodes from the current environment."""
    env = get_environment_from_cwd()
    if not env:
        return {}

    try:
        existing_nodes = env.pyproject.nodes.get_existing()
        packs = {}
        for identifier, node_info in existing_nodes.items():
            packs[identifier] = {
                "cnr_id": identifier,
                "aux_id": node_info.repository or "",
                "ver": node_info.version or "unknown",
                "enabled": not identifier.endswith(".disabled"),
                "name": node_info.name
            }
        return packs
    except Exception as e:
        print(f"[ComfyGit] Failed to get installed packs: {e}")
        return {}


# ============================================================================
# v2 API Endpoints
# ============================================================================

@routes.get("/v2/customnode/installed")
async def list_installed(request):
    """Return installed custom nodes."""
    packs = get_installed_packs()
    return web.json_response(packs)


@routes.post("/v2/manager/queue/task")
async def queue_task(request):
    """Queue a task for execution."""
    try:
        data = await request.json()
        task_queue.append(data)
        return web.Response(status=200)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.get("/v2/manager/queue/start")
async def start_queue(request):
    """Start processing queued tasks."""
    global running_task

    while task_queue:
        running_task = task_queue.pop(0)

        # Broadcast task started
        PromptServer.instance.send_sync("cm-task-started", {
            "state": get_current_state()
        })

        # Process the task
        result = await process_task(running_task)

        # Add to history
        task_id = running_task.get("ui_id", str(uuid.uuid4()))
        task_history[task_id] = {
            **running_task,
            "result": result.get("status", "unknown"),
            "status": result,
            "timestamp": datetime.utcnow().isoformat() + "Z"
        }

        running_task = None

        # Broadcast task completed
        PromptServer.instance.send_sync("cm-task-completed", {
            "state": get_current_state()
        })

    return web.Response(status=200)


@routes.get("/v2/manager/queue/status")
async def queue_status(request):
    """Return current queue status."""
    return web.json_response(get_current_state())


@routes.get("/v2/manager/queue/history")
async def get_history(request):
    """Return task history."""
    return web.json_response({"history": task_history})


# Exit code that signals cg run to restart with sync
RESTART_EXIT_CODE = 42


@routes.get("/v2/manager/reboot")
async def reboot(request):
    """Reboot ComfyUI server with exit code 42 to trigger restart loop."""
    import os
    print(f"[ComfyGit] Reboot requested - exiting with code {RESTART_EXIT_CODE}")

    async def delayed_exit():
        await asyncio.sleep(0.3)
        os._exit(RESTART_EXIT_CODE)

    asyncio.create_task(delayed_exit())
    return web.json_response({"status": "restarting"})


@routes.get("/v2/manager/is_legacy_manager_ui")
async def is_legacy(request):
    """Check if legacy UI is enabled."""
    return web.json_response({"is_legacy_manager_ui": False})


@routes.get("/v2/customnode/import_fail_info")
async def import_fail_info(request):
    """Return import failure information."""
    return web.json_response({})


@routes.post("/v2/customnode/import_fail_info_bulk")
async def import_fail_info_bulk(request):
    """Return bulk import failure information."""
    return web.json_response({})


# ============================================================================
# Task Processing
# ============================================================================

async def process_task(task: dict) -> dict:
    """Process a single task using comfygit."""
    kind = task.get("kind")
    params = task.get("params", {})

    env = get_environment_from_cwd()
    if not env:
        return {
            "status": "error",
            "completed": True,
            "messages": ["No ComfyGit environment detected"]
        }

    try:
        if kind == "install":
            return await process_install(env, params)
        elif kind == "uninstall":
            return await process_uninstall(env, params)
        elif kind == "update":
            return await process_update(env, params)
        elif kind == "enable":
            return await process_enable(env, params)
        elif kind == "disable":
            return await process_disable(env, params)
        else:
            return {
                "status": "error",
                "completed": True,
                "messages": [f"Unknown task kind: {kind}"]
            }
    except Exception as e:
        return {
            "status": "error",
            "completed": True,
            "messages": [str(e)]
        }


async def process_install(env, params: dict) -> dict:
    """Install a custom node."""
    pack_id = params.get("id")
    version = params.get("selected_version") or params.get("version")

    # Check if already installed (use same source as get_installed_packs)
    existing_nodes = env.pyproject.nodes.get_existing()
    is_installed = pack_id in existing_nodes

    try:
        loop = asyncio.get_event_loop()

        # If installed and requesting latest, use update_node
        if is_installed and (not version or version == "latest"):
            await loop.run_in_executor(
                None,
                lambda: env.node_manager.update_node(pack_id, no_test=True)
            )
            return {
                "status": "success",
                "completed": True,
                "messages": [f"Successfully updated {pack_id} to latest"]
            }

        # Build identifier with version if specified
        if version and version != "latest":
            identifier = f"{pack_id}@{version}"
        else:
            identifier = pack_id

        await loop.run_in_executor(
            None,
            lambda: env.node_manager.add_node(identifier, force=is_installed, no_test=True)
        )

        return {
            "status": "success",
            "completed": True,
            "messages": [f"Successfully installed {identifier}"]
        }
    except Exception as e:
        return {
            "status": "error",
            "completed": True,
            "messages": [str(e)]
        }


async def process_uninstall(env, params: dict) -> dict:
    """Uninstall a custom node."""
    node_name = params.get("node_name")

    try:
        loop = asyncio.get_event_loop()
        await loop.run_in_executor(
            None,
            lambda: env.node_manager.remove_node(node_name)
        )

        return {
            "status": "success",
            "completed": True,
            "messages": [f"Successfully uninstalled {node_name}"]
        }
    except Exception as e:
        return {
            "status": "error",
            "completed": True,
            "messages": [str(e)]
        }


async def process_update(env, params: dict) -> dict:
    """Update a custom node."""
    node_name = params.get("node_name")

    try:
        loop = asyncio.get_event_loop()
        await loop.run_in_executor(
            None,
            lambda: env.node_manager.update_node(node_name, no_test=False)
        )

        return {
            "status": "success",
            "completed": True,
            "messages": [f"Successfully updated {node_name}"]
        }
    except Exception as e:
        return {
            "status": "error",
            "completed": True,
            "messages": [str(e)]
        }


async def process_enable(env, params: dict) -> dict:
    """Enable a custom node."""
    cnr_id = params.get("cnr_id")

    try:
        # Enable by renaming .disabled directory
        custom_nodes_path = env.custom_nodes_path
        disabled_path = custom_nodes_path / f"{cnr_id}.disabled"
        enabled_path = custom_nodes_path / cnr_id

        if disabled_path.exists():
            import shutil
            shutil.move(str(disabled_path), str(enabled_path))

        return {
            "status": "success",
            "completed": True,
            "messages": [f"Enabled {cnr_id}"]
        }
    except Exception as e:
        return {
            "status": "error",
            "completed": True,
            "messages": [str(e)]
        }


async def process_disable(env, params: dict) -> dict:
    """Disable a custom node."""
    node_name = params.get("node_name")

    try:
        # Disable by renaming to .disabled
        custom_nodes_path = env.custom_nodes_path
        enabled_path = custom_nodes_path / node_name
        disabled_path = custom_nodes_path / f"{node_name}.disabled"

        if enabled_path.exists():
            import shutil
            shutil.move(str(enabled_path), str(disabled_path))

        return {
            "status": "success",
            "completed": True,
            "messages": [f"Disabled {node_name}"]
        }
    except Exception as e:
        return {
            "status": "error",
            "completed": True,
            "messages": [str(e)]
        }


# ============================================================================
# Initialization
# ============================================================================

print("[ComfyGit] Manager server initialized")
print("[ComfyGit] v2 API endpoints registered")
