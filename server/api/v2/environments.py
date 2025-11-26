"""Environment management API."""
import os
import sys
import json
import subprocess
import threading
import uuid
from aiohttp import web
from pathlib import Path

from cgm_utils.async_helpers import run_sync
import orchestrator

routes = web.RouteTableDef()

# Exit codes for orchestrator
RESTART_EXIT_CODE = 42
SWITCH_ENV_EXIT_CODE = 43

# Global state for environment creation task
_create_task_lock = threading.Lock()
_create_task_state = {
    "state": "idle",
    "task_id": None,
    "environment_name": None,
    "message": "No creation in progress",
    "error": None
}


def spawn_orchestrator(environment, target_env: str) -> None:
    """
    Spawn orchestrator daemon for first switch.

    The orchestrator becomes the permanent supervisor from this point forward.
    """
    # From server/api/v2/environments.py → go up 4 levels to comfygit-manager/
    custom_node_root = Path(__file__).parent.parent.parent.parent
    orchestrator_python = orchestrator.get_orchestrator_python(custom_node_root)
    orchestrator_script = custom_node_root / "server" / "orchestrator.py"

    if not orchestrator_python.exists():
        raise RuntimeError("Orchestrator venv not found - run setup")

    # Capture current ComfyUI args, filter out --enable-manager (injected by custom node)
    comfyui_args = [arg for arg in sys.argv[1:] if arg != '--enable-manager']

    # Build command
    cmd = [
        str(orchestrator_python),
        str(orchestrator_script),
        "--workspace", str(environment.workspace.path),
        "--environment", environment.name,
        "--args"
    ] + comfyui_args

    # Spawn detached orchestrator
    log_file = environment.workspace.path / ".metadata" / "orchestrator.log"
    subprocess.Popen(
        cmd,
        start_new_session=True,  # Detach from parent
        stdin=subprocess.DEVNULL,
        stdout=open(log_file, "a"),
        stderr=subprocess.STDOUT,
        cwd=str(environment.workspace.path)
    )

    print(f"[ComfyGit] Spawned orchestrator daemon (log: {log_file})")


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
            spawn_orchestrator(environment, target_env)

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

    except Exception:
        # Release lock on error
        lock_file = metadata_dir / ".switch.lock"
        lock_file.unlink(missing_ok=True)
        raise


@routes.get("/v2/comfygit/orchestrator_port")
async def get_orchestrator_port(request: web.Request) -> web.Response:
    """Get orchestrator control server port."""
    is_managed, workspace, environment = orchestrator.detect_environment_type()

    if not is_managed or not workspace:
        return web.json_response({"error": "Not managed"}, status=404)

    port_file = workspace.path / ".metadata" / ".control_port"

    if not port_file.exists():
        return web.json_response({"error": "Control server not running"}, status=404)

    try:
        port = int(port_file.read_text().strip())
        return web.json_response({"port": port})
    except Exception:
        return web.json_response({"error": "Invalid port file"}, status=500)


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


def _run_create_environment(workspace, name: str, python_version: str, comfyui_version: str, torch_backend: str):
    """Background thread function to create environment."""
    global _create_task_state

    try:
        with _create_task_lock:
            _create_task_state["state"] = "creating"
            _create_task_state["message"] = f"Creating environment '{name}'..."

        # Call the core library to create the environment
        workspace.create_environment(
            name=name,
            python_version=python_version,
            comfyui_version=comfyui_version if comfyui_version != "latest" else None,
            torch_backend=torch_backend
        )

        with _create_task_lock:
            _create_task_state["state"] = "complete"
            _create_task_state["message"] = f"Environment '{name}' created successfully"
            _create_task_state["error"] = None

    except Exception as e:
        with _create_task_lock:
            _create_task_state["state"] = "error"
            _create_task_state["message"] = "Failed to create environment"
            _create_task_state["error"] = str(e)
        print(f"[ComfyGit] Environment creation failed: {e}")


@routes.post("/v2/workspace/environments")
async def create_environment(request: web.Request) -> web.Response:
    """
    Create a new environment.

    Request body:
        {
            "name": "my-env",
            "python_version": "3.12",
            "comfyui_version": "latest",
            "torch_backend": "auto",
            "switch_after": false
        }

    Returns:
        {
            "status": "started",
            "task_id": "uuid",
            "message": "Creating environment..."
        }
    """
    global _create_task_state

    is_managed, workspace, _ = orchestrator.detect_environment_type()
    if not is_managed or not workspace:
        return web.json_response({
            "status": "error",
            "message": "Not in managed workspace"
        }, status=500)

    # Check if creation already in progress
    with _create_task_lock:
        if _create_task_state["state"] == "creating":
            return web.json_response({
                "status": "error",
                "message": "Environment creation already in progress"
            }, status=409)

    # Parse request
    try:
        data = await request.json()
        name = data.get("name", "").strip()
        python_version = data.get("python_version", "3.12")
        comfyui_version = data.get("comfyui_version", "latest")
        torch_backend = data.get("torch_backend", "auto")

        if not name:
            return web.json_response({
                "status": "error",
                "message": "Environment name is required"
            }, status=400)

    except Exception:
        return web.json_response({
            "status": "error",
            "message": "Invalid JSON"
        }, status=400)

    # Check if environment already exists
    try:
        existing_envs = await run_sync(workspace.list_environments)
        if any(env.name == name for env in existing_envs):
            return web.json_response({
                "status": "error",
                "message": f"Environment '{name}' already exists"
            }, status=409)
    except Exception as e:
        return web.json_response({
            "status": "error",
            "message": f"Failed to check existing environments: {e}"
        }, status=500)

    # Initialize task state
    task_id = str(uuid.uuid4())
    with _create_task_lock:
        _create_task_state = {
            "state": "creating",
            "task_id": task_id,
            "environment_name": name,
            "message": f"Starting creation of '{name}'...",
            "error": None
        }

    # Start background thread
    thread = threading.Thread(
        target=_run_create_environment,
        args=(workspace, name, python_version, comfyui_version, torch_backend),
        daemon=True
    )
    thread.start()

    return web.json_response({
        "status": "started",
        "task_id": task_id,
        "message": f"Creating environment '{name}'..."
    })


@routes.get("/v2/workspace/environments/create_status")
async def get_create_status(request: web.Request) -> web.Response:
    """
    Get environment creation status.

    Returns:
        {
            "state": "idle|creating|complete|error",
            "task_id": "uuid",
            "environment_name": "my-env",
            "message": "...",
            "error": "..." (if error)
        }
    """
    with _create_task_lock:
        return web.json_response(_create_task_state.copy())


@routes.get("/v2/workspace/comfyui_releases")
async def get_comfyui_releases(request: web.Request) -> web.Response:
    """
    Get available ComfyUI releases from GitHub.

    Query params:
        limit: int (default 20)

    Returns:
        [
            {"tag_name": "v0.3.69", "name": "v0.3.69", "published_at": "2025-01-15T..."},
            ...
        ]
    """
    import urllib.request
    import ssl

    limit = int(request.query.get("limit", "20"))

    try:
        # Fetch releases from GitHub API
        url = f"https://api.github.com/repos/comfyanonymous/ComfyUI/releases?per_page={limit}"
        req = urllib.request.Request(url, headers={"User-Agent": "ComfyGit"})

        # Create SSL context that doesn't verify (for corporate proxies)
        ctx = ssl.create_default_context()

        with urllib.request.urlopen(req, context=ctx, timeout=10) as response:
            releases_data = json.loads(response.read().decode())

        # Add "latest" as first option
        releases = [{"tag_name": "latest", "name": "Latest", "published_at": None}]

        for release in releases_data:
            releases.append({
                "tag_name": release.get("tag_name"),
                "name": release.get("name") or release.get("tag_name"),
                "published_at": release.get("published_at")
            })

        return web.json_response(releases)

    except Exception as e:
        print(f"[ComfyGit] Failed to fetch ComfyUI releases: {e}")
        # Return fallback with just "latest"
        return web.json_response([
            {"tag_name": "latest", "name": "Latest", "published_at": None}
        ])
