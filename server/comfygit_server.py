"""
ComfyGit Manager Server - Backend API endpoints for the Manager UI.
Provides /v2/ endpoints that the built-in Manager UI expects.
"""

import asyncio
import logging
import sys
import uuid
from pathlib import Path
from datetime import datetime

from aiohttp import web
from server import PromptServer
import orchestrator
from cgm_core.dependency_preview import (
    build_install_identifier,
    dependency_review_response,
)
from cgm_core.overlays import active_overlay_names, active_overlay_summary
from cgm_core.runtime_imports import collect_runtime_import_report
from cgm_core.runtime_context import build_runtime_context, ensure_capability

# Import panel logging infrastructure for operation logging
try:
    from panel_environment_logger import EnvironmentLogger
except ImportError:
    EnvironmentLogger = None

# Get the routes object
routes = PromptServer.instance.routes
logger = logging.getLogger(__name__)

# ============================================================================
# Feature Flag & CLI Argument Injection
# ============================================================================

# Only enable ComfyGit's Manager UI in managed environments.
# In unmanaged envs, users should continue using their existing ComfyUI-Manager.
_is_managed, _, _ = orchestrator.detect_environment_type()

if _is_managed:
    # Inject --enable-manager into sys.argv so the frontend enables the Manager UI
    if '--enable-manager' not in sys.argv:
        sys.argv.append('--enable-manager')
        print("[ComfyGit] Injected --enable-manager into sys.argv")

    # Inject extension.manager.supports_v4 into ComfyUI's feature flags
    identifier = None
    try:
        from comfy_api import feature_flags
        if hasattr(feature_flags, 'SERVER_FEATURE_FLAGS'):
            if 'extension' not in feature_flags.SERVER_FEATURE_FLAGS:
                feature_flags.SERVER_FEATURE_FLAGS['extension'] = {}
            if 'manager' not in feature_flags.SERVER_FEATURE_FLAGS['extension']:
                feature_flags.SERVER_FEATURE_FLAGS['extension']['manager'] = {}
            feature_flags.SERVER_FEATURE_FLAGS['extension']['manager']['supports_v4'] = True
            feature_flags.SERVER_FEATURE_FLAGS['extension']['manager']['supports_csrf_post'] = True
            print("[ComfyGit] Injected ComfyUI Manager compatibility feature flags")
    except ImportError:
        print("[ComfyGit] Warning: Could not import comfy_api.feature_flags")
    except Exception as e:
        print(f"[ComfyGit] Warning: Failed to inject feature flags: {e}")
else:
    print("[ComfyGit] Unmanaged environment - Manager UI disabled (use existing ComfyUI-Manager)")

# ============================================================================
# State Management
# ============================================================================

# Task queue state
task_queue: list[dict] = []
task_history: dict[str, dict] = {}
running_task: dict | None = None
_queue_lock = asyncio.Lock()

# Comfygit workspace/environment references (lazy loaded)
_workspace = None
_environment = None


def refresh_environment():
    """Force refresh the cached environment object.

    This clears the cached environment and workspace, forcing the next
    get_environment_from_cwd() call to create fresh objects with updated
    filesystem state.
    """
    global _workspace, _environment
    _workspace = None
    _environment = None
    print("[ComfyGit] Environment cache cleared - next request will reload")


def get_environment_from_cwd():
    """Infer workspace and environment from ComfyUI's working directory.

    ComfyUI runs with cwd = {workspace}/environments/{env_name}/ComfyUI
    We can infer the environment from this path structure.
    """
    global _workspace, _environment

    if _environment is not None:
        return _environment

    from comfygit_core import Workspace

    cwd = Path.cwd()

    # Expected: {workspace}/environments/{env_name}/ComfyUI
    if cwd.name == 'ComfyUI':
        env_path = cwd.parent
        env_name = env_path.name
        environments_path = env_path.parent

        if environments_path.name == 'environments':
            workspace_root = environments_path.parent
            if Workspace.exists(workspace_root):
                try:
                    _workspace = Workspace.from_path(workspace_root)
                    # Use workspace.get_environment() which handles initialization properly
                    # Pass auto_sync=False to avoid slow sync on every request
                    _environment = _workspace.get_environment(env_name, auto_sync=False)
                    print(f"[ComfyGit] Detected environment '{env_name}' from CWD")
                    return _environment
                except Exception as e:
                    print(f"[ComfyGit] Direct environment creation failed: {e}")
                    # Fall through to standard workspace discovery.

    # Fallback: try standard workspace discovery
    try:
        _workspace = Workspace.open()
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


def find_node_by_id_or_name(env, node_id: str):
    """Find a node by its identifier or name (case-insensitive).

    Returns:
        tuple: (identifier, NodeInfo) or (None, None) if not found
    """
    existing_nodes = env.list_manifest_nodes()
    node_id_lower = node_id.lower()

    for identifier, node_info in existing_nodes.items():
        if identifier == node_id or identifier.lower() == node_id_lower or node_info.name.lower() == node_id_lower:
            return identifier, node_info

    return None, None


def get_installed_packs() -> dict[str, dict]:
    """Get installed custom nodes from the current environment."""
    env = get_environment_from_cwd()
    if not env:
        return {}

    try:
        existing_nodes = env.list_manifest_nodes()
        packs = {}

        for identifier, node_info in existing_nodes.items():
            # Extract aux_id from repository URL ("user/repo" format)
            aux_id = ""
            if node_info.repository:
                parts = node_info.repository.rstrip('/').split('/')
                if len(parts) >= 2:
                    aux_id = f"{parts[-2]}/{parts[-1]}"

            # Determine cnr_id and version format based on source
            if node_info.source == "registry":
                cnr_id = node_info.registry_id or identifier
                ver = node_info.version or "latest"
            elif node_info.source == "git":
                cnr_id = node_info.registry_id or ""  # Empty if pure git
                ver = "nightly" if node_info.registry_id else "unknown"
            elif node_info.source == "development":
                cnr_id = ""
                ver = "dev"
            else:
                cnr_id = identifier
                ver = node_info.version or "unknown"

            # Check enabled status from filesystem
            dir_name = node_info.name
            node_path = env.custom_nodes_path / dir_name
            disabled_path = env.custom_nodes_path / f"{dir_name}.disabled"
            enabled = node_path.exists() and not disabled_path.exists()

            packs[identifier] = {
                "cnr_id": cnr_id,
                "aux_id": aux_id,
                "ver": ver,
                "enabled": enabled,
                "name": node_info.name
            }

        return packs
    except Exception as e:
        print(f"[ComfyGit] Failed to get installed packs: {e}")
        return {}


def get_node_mappings() -> dict[str, list]:
    """Return the node-class-to-package mapping expected by the native manager UI.

    ComfyUI's built-in manager UI uses this route mainly for workflow-package
    association. ComfyGit can reliably report installed package directories and
    known package identifiers, but it does not currently maintain a complete
    class-name index for every custom node. The package-name mappings keep the
    native manager UI usable without inventing node-class metadata.
    """
    env = get_environment_from_cwd()
    if not env:
        return {}

    try:
        mappings = {}
        existing_nodes = env.list_manifest_nodes()

        for identifier, node_info in existing_nodes.items():
            pack_ids = []
            if node_info.registry_id:
                pack_ids.append(node_info.registry_id)
            if node_info.repository:
                parts = node_info.repository.rstrip("/").split("/")
                if len(parts) >= 2:
                    pack_ids.append(f"{parts[-2]}/{parts[-1]}")
            pack_ids.append(identifier)

            deduped_pack_ids = []
            for pack_id in pack_ids:
                if pack_id and pack_id not in deduped_pack_ids:
                    deduped_pack_ids.append(pack_id)

            package_label = node_info.registry_id or identifier
            for node_key in {identifier, node_info.name, package_label}:
                if node_key:
                    mappings[node_key] = [
                        deduped_pack_ids,
                        {"title_aux": node_info.name},
                    ]

        return mappings
    except Exception as e:
        print(f"[ComfyGit] Failed to get node mappings: {e}")
        return {}


def _queue_compat_task(kind: str, params: dict | None = None, client_id: str | None = None, ui_id: str | None = None):
    task_queue.append({
        "kind": kind,
        "params": params or {},
        "client_id": client_id or "unknown",
        "ui_id": ui_id or str(uuid.uuid4()),
    })


# ============================================================================
# v2 API Endpoints
# ============================================================================

@routes.get("/v2/customnode/installed")
async def list_installed(request):
    """Return installed custom nodes."""
    packs = get_installed_packs()
    return web.json_response(packs)


@routes.get("/v2/customnode/getmappings")
async def get_mappings(request):
    """Return installed package mappings for the native manager UI."""
    return web.json_response(get_node_mappings())


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
@routes.post("/v2/manager/queue/start")
async def start_queue(request):
    """Start processing queued tasks.

    Uses a lock so concurrent requests wait rather than racing on the
    shared running_task global.  The first request drains the full queue
    (including tasks added while it runs), so subsequent requests that
    were waiting simply find an empty queue and return immediately.
    """
    global running_task

    async with _queue_lock:
        while task_queue:
            running_task = task_queue.pop(0)

            # Broadcast task started
            PromptServer.instance.send_sync("cm-task-started", {
                "ui_id": running_task.get("ui_id"),
                "state": get_current_state()
            })

            # Process the task
            result = await process_task(running_task)

            # Log errors to console
            if result.get("status_str") == "error":
                print(f"[ComfyGit] Task failed: {result.get('messages', [])}")
                if result.get("uv_error"):
                    print(f"[ComfyGit] UV Error Details:\n{result['uv_error']}")

            # Add to history
            task_id = running_task.get("ui_id", str(uuid.uuid4()))
            task_history[task_id] = {
                **running_task,
                "result": result.get("status_str", "unknown"),
                "status": result,
                "timestamp": datetime.utcnow().isoformat() + "Z"
            }

            running_task = None

            # Broadcast task completed
            PromptServer.instance.send_sync("cm-task-completed", {
                "ui_id": task_id,
                "status": result,
                "state": get_current_state()
            })

    return web.Response(status=200)


@routes.post("/v2/manager/queue/reset")
async def reset_queue(request):
    """Clear pending queued tasks.

    The native manager UI expects this route to exist. ComfyGit only clears
    tasks that have not started yet; the active operation is allowed to finish.
    """
    task_queue.clear()
    return web.Response(status=200)


@routes.post("/v2/manager/queue/update_all")
async def update_all(request):
    """Queue updates for installed ComfyGit-tracked custom nodes."""
    env = get_environment_from_cwd()
    if not env:
        return web.json_response({"message": "No ComfyGit environment detected"}, status=500)

    existing_nodes = env.list_manifest_nodes()
    ui_id = request.query.get("ui_id")
    client_id = request.query.get("client_id")

    for identifier, node_info in existing_nodes.items():
        if node_info.source == "development":
            continue
        _queue_compat_task(
            "update",
            {"node_name": identifier},
            client_id=client_id,
            ui_id=ui_id if len(existing_nodes) == 1 else None,
        )

    return web.Response(status=200)


@routes.post("/v2/manager/queue/update_comfyui")
async def update_comfyui(request):
    """Reject native ComfyUI updates from the manager UI.

    ComfyGit environments pin ComfyUI through the environment manifest. Updating
    the running ComfyUI checkout from the native manager UI would bypass that
    source of truth.
    """
    return web.json_response(
        {"message": "ComfyUI updates are managed by ComfyGit environment sync."},
        status=403,
    )


@routes.get("/v2/manager/queue/status")
async def queue_status(request):
    """Return current queue status."""
    return web.json_response(get_current_state())


@routes.get("/v2/manager/queue/history")
async def get_history(request):
    """Return task history."""
    return web.json_response({"history": task_history})


# Exit codes for orchestrator communication
RESTART_EXIT_CODE = 42  # Signals orchestrator to restart ComfyUI
STOP_EXIT_CODE = 0      # Signals orchestrator to stop cleanly (or just exits if unmanaged)


@routes.get("/v2/manager/reboot")
@routes.post("/v2/manager/reboot")
async def reboot(request):
    """Reboot ComfyUI server with exit code 42 to trigger restart loop."""
    import os
    is_managed, workspace, current_env = orchestrator.detect_environment_type()
    runtime_context = build_runtime_context(
        "managed" if is_managed else "unmanaged",
        workspace_path=str(workspace.path) if workspace else None,
        current_environment=current_env.name if current_env else None,
    )
    denial = ensure_capability(runtime_context, "can_restart_current")
    if denial:
        return denial

    print(f"[ComfyGit] Reboot requested - exiting with code {RESTART_EXIT_CODE}")

    async def delayed_exit():
        await asyncio.sleep(0.3)
        os._exit(RESTART_EXIT_CODE)

    asyncio.create_task(delayed_exit())
    return web.json_response({"status": "restarting"})


@routes.post("/v2/comfygit/stop")
async def stop_environment(request):
    """
    Stop the current environment.

    If running under orchestrator (COMFYGIT_SUPERVISED=1):
        Exit with code 0, which signals orchestrator to stop cleanly.
    If running directly (no orchestrator):
        Exit with code 0, which just terminates the process.
    """
    import os
    is_managed, workspace, current_env = orchestrator.detect_environment_type()
    runtime_context = build_runtime_context(
        "managed" if is_managed else "unmanaged",
        workspace_path=str(workspace.path) if workspace else None,
        current_environment=current_env.name if current_env else None,
    )
    denial = ensure_capability(runtime_context, "can_stop_current")
    if denial:
        return denial

    is_supervised = os.environ.get("COMFYGIT_SUPERVISED") == "1"

    if is_supervised:
        print(f"[ComfyGit] Stop requested (supervised) - exiting with code {STOP_EXIT_CODE} to stop orchestrator")
    else:
        print(f"[ComfyGit] Stop requested (unmanaged) - exiting with code {STOP_EXIT_CODE}")

    async def delayed_exit():
        await asyncio.sleep(0.3)
        os._exit(STOP_EXIT_CODE)

    asyncio.create_task(delayed_exit())
    return web.json_response({
        "status": "stopping",
        "supervised": is_supervised
    })


@routes.get("/v2/manager/is_legacy_manager_ui")
async def is_legacy(request):
    """Check if legacy UI is enabled."""
    return web.json_response({"is_legacy_manager_ui": False})


@routes.get("/v2/customnode/import_fail_info")
async def import_fail_info(request):
    """Return import failure information."""
    env = get_environment_from_cwd()
    if env is None:
        return web.json_response({})

    try:
        status = env.status()
        report = collect_runtime_import_report(
            env,
            nodes=env.list_nodes(),
            status=status,
        )
    except Exception:
        return web.json_response({})

    payload = {}
    for failure in report.failures:
        failure_payload = failure.to_dict()
        payload[failure.name] = failure_payload
        if failure.registry_id and failure.registry_id != failure.name:
            payload[failure.registry_id] = failure_payload
    return web.json_response(payload)


@routes.post("/v2/customnode/import_fail_info_bulk")
async def import_fail_info_bulk(request):
    """Return bulk import failure information."""
    env = get_environment_from_cwd()
    if env is None:
        return web.json_response({})

    try:
        params = await request.json()
    except Exception:
        params = {}

    requested_ids = {
        str(item)
        for item in params.get("cnr_ids", [])
        if item
    }

    try:
        status = env.status()
        report = collect_runtime_import_report(
            env,
            nodes=env.list_nodes(),
            status=status,
        )
    except Exception:
        return web.json_response({})

    payload = {}
    for failure in report.failures:
        keys = {failure.name}
        if failure.registry_id:
            keys.add(failure.registry_id)
        if requested_ids and not keys.intersection(requested_ids):
            continue
        failure_payload = failure.to_dict()
        for key in keys:
            payload[key] = failure_payload
    return web.json_response(payload)


@routes.get("/v2/debug/comfyui_info")
async def debug_comfyui_info(request):
    """Return all accessible ComfyUI data for debugging."""
    info = {}

    # PromptServer attributes
    info["prompt_server_attrs"] = [a for a in dir(PromptServer.instance) if not a.startswith('_')]

    # sys.argv
    info["sys_argv"] = sys.argv

    # Feature flags
    try:
        from comfy_api import feature_flags
        info["feature_flags"] = dict(feature_flags.SERVER_FEATURE_FLAGS)
    except Exception as e:
        info["feature_flags"] = f"error: {e}"

    # Environment info
    env = get_environment_from_cwd()
    if env:
        info["environment"] = {
            "name": env.name,
            "path": str(env.path),
            "custom_nodes_path": str(env.custom_nodes_path)
        }

    # Routes registered
    info["routes"] = [str(r) for r in routes]

    return web.json_response(info)


# ============================================================================
# Task Processing
# ============================================================================

def _get_operation_description(kind: str, params: dict) -> str:
    """Get a human-readable description of the operation for logging."""
    if kind == "install":
        return f"install {params.get('id', 'unknown')}"
    elif kind == "uninstall":
        return f"uninstall {params.get('node_name', 'unknown')}"
    elif kind == "update":
        return f"update {params.get('node_name', 'unknown')}"
    elif kind == "enable":
        return f"enable {params.get('cnr_id', 'unknown')}"
    elif kind == "disable":
        return f"disable {params.get('node_name', 'unknown')}"
    return kind


def _extract_uv_stderr(exc: Exception) -> str | None:
    """Extract UV stderr from exception chain.

    Walks the exception chain looking for UVCommandError to get full stderr.
    """
    from comfygit_core.models import UVCommandError

    current = exc
    while current is not None:
        if isinstance(current, UVCommandError) and current.stderr:
            return current.stderr
        current = current.__cause__
    return None


def node_removal_sync_payload(result) -> dict:
    """Return JSON-safe sync status fields for a node removal result."""
    sync_succeeded = getattr(result, "sync_succeeded", True)
    needs_sync = getattr(result, "needs_sync", False)
    sync_error = getattr(result, "sync_error", None)

    return {
        "sync_succeeded": sync_succeeded if sync_succeeded is False else True,
        "needs_sync": needs_sync if needs_sync is True else False,
        "sync_error": sync_error if isinstance(sync_error, str) else None,
    }


async def process_task(task: dict) -> dict:
    """Process a single task using comfygit."""
    kind = task.get("kind")
    params = task.get("params", {})

    env = get_environment_from_cwd()
    if not env:
        return {
            "status_str": "error",
            "completed": True,
            "messages": ["No ComfyGit environment detected"]
        }

    # Setup logging for this operation
    if EnvironmentLogger and env.workspace:
        EnvironmentLogger.set_workspace_path(env.workspace.path)
        operation_desc = _get_operation_description(kind, params)
        log_context = EnvironmentLogger.log_command(
            env.name,
            f"manager: {operation_desc}",
            kind=kind,
            **{k: v for k, v in params.items() if v is not None}
        )
    else:
        log_context = None

    command_logger = None
    result = None

    try:
        # Enter logging context if available
        if log_context:
            command_logger = log_context.__enter__()

        if kind == "install":
            result = await process_install(env, params)
        elif kind == "uninstall":
            result = await process_uninstall(env, params)
        elif kind == "update":
            result = await process_update(env, params)
        elif kind == "enable":
            result = await process_enable(env, params)
        elif kind == "disable":
            result = await process_disable(env, params)
        else:
            result = {
                "status_str": "error",
                "completed": True,
                "messages": [f"Unknown task kind: {kind}"]
            }

        if EnvironmentLogger and command_logger:
            EnvironmentLogger.record_command_result(command_logger, result)

        return result

    except Exception as e:
        result = {
            "status_str": "error",
            "completed": True,
            "messages": [str(e)]
        }
        if EnvironmentLogger and command_logger:
            EnvironmentLogger.record_command_result(command_logger, result)
        return result
    finally:
        # Exit logging context
        if log_context:
            log_context.__exit__(None, None, None)


async def process_install(env, params: dict) -> dict:
    """Install a custom node."""
    import shutil
    pack_id = params.get("id")
    identifier = None
    version = params.get("selected_version") or params.get("version")
    repository = params.get("repository")
    install_source = params.get("install_source", "registry")
    valid_install_sources = {"registry", "git"}

    if install_source not in valid_install_sources:
        raise ValueError(
            f"Invalid install_source '{install_source}'. Expected one of: registry, git"
        )

    if install_source == "git" and not repository:
        raise ValueError(
            "install_source='git' requires a non-empty repository"
        )

    # Check if already installed
    existing_nodes = env.list_manifest_nodes()
    is_installed = pack_id in existing_nodes

    # If installed, check if it's disabled (needs re-enabling, not re-installing)
    if is_installed:
        node_info = existing_nodes[pack_id]
        disabled_path = env.custom_nodes_path / f"{node_info.name}.disabled"
        enabled_path = env.custom_nodes_path / node_info.name

        if disabled_path.exists():
            # Just re-enable by renaming
            shutil.move(str(disabled_path), str(enabled_path))
            return {
                "status_str": "success",
                "completed": True,
                "messages": [f"Enabled {node_info.name}"]
            }

    try:
        loop = asyncio.get_event_loop()

        # If installed and requesting latest, use update_node
        if is_installed and (not version or version == "latest"):
            await loop.run_in_executor(
                None,
                lambda: env.update_node(pack_id)
            )
            return {
                "status_str": "success",
                "completed": True,
                "messages": [f"Successfully updated {pack_id} to latest"]
            }

        # Build install identifier using explicit source selection.
        identifier = build_install_identifier(params)
        if install_source == "git":
            logger.info(
                "process_install selecting git source for '%s' using repository '%s'",
                pack_id,
                repository,
            )
        elif version == "nightly":
            logger.info(
                "process_install selecting registry nightly/git source for '%s'",
                pack_id,
            )
        elif version and version != "latest":
            logger.info(
                "process_install selecting registry source for '%s' at version '%s'",
                pack_id,
                version,
            )
        else:
            logger.info(
                "process_install selecting registry source for '%s' at latest/default",
                pack_id,
            )

        overlay_names = active_overlay_names(env)
        logger.info(
            "process_install resolving '%s' with active overlays: %s",
            identifier,
            active_overlay_summary(env),
        )

        await loop.run_in_executor(
            None,
            lambda: env.add_node(
                identifier,
                force=is_installed,
                resolve_with_overlays=True,
            )
        )

        messages = [f"Successfully installed {identifier}"]
        if overlay_names:
            messages.append(f"Resolved with active overlays: {', '.join(overlay_names)}")

        return {
            "status_str": "success",
            "completed": True,
            "messages": messages,
            "active_overlays": overlay_names,
        }
    except Exception as e:
        if identifier:
            review_result = dependency_review_response(identifier, e)
            if review_result:
                return review_result

        result = {
            "status_str": "error",
            "completed": True,
            "messages": [str(e)]
        }
        uv_stderr = _extract_uv_stderr(e)
        if uv_stderr:
            result["uv_error"] = uv_stderr
        return result


async def process_uninstall(env, params: dict) -> dict:
    """Uninstall a custom node."""
    node_name = params.get("node_name")

    try:
        loop = asyncio.get_event_loop()
        overlay_names = active_overlay_names(env)
        logger.info(
            "process_uninstall resolving '%s' with active overlays: %s",
            node_name,
            active_overlay_summary(env),
        )

        removal_result = await loop.run_in_executor(
            None,
            lambda: env.remove_node(node_name, resolve_with_overlays=True)
        )

        messages = [f"Successfully uninstalled {node_name}"]
        sync_payload = node_removal_sync_payload(removal_result)
        if not sync_payload["sync_succeeded"]:
            messages.append(
                "Node was removed, but dependency sync still needs attention. "
                "Run sync after resolving the dependency issue."
            )
        if overlay_names:
            messages.append(f"Resolved with active overlays: {', '.join(overlay_names)}")

        return {
            "status_str": "success" if sync_payload["sync_succeeded"] else "partial_success",
            "completed": True,
            "messages": messages,
            "active_overlays": overlay_names,
            **sync_payload,
        }
    except Exception as e:
        return {
            "status_str": "error",
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
            lambda: env.update_node(node_name, no_test=False)
        )

        return {
            "status_str": "success",
            "completed": True,
            "messages": [f"Successfully updated {node_name}"]
        }
    except Exception as e:
        result = {
            "status_str": "error",
            "completed": True,
            "messages": [str(e)]
        }
        uv_stderr = _extract_uv_stderr(e)
        if uv_stderr:
            result["uv_error"] = uv_stderr
        return result


async def process_enable(env, params: dict) -> dict:
    """Enable a custom node."""
    import shutil
    node_id = params.get("cnr_id")

    _, node_info = find_node_by_id_or_name(env, node_id)
    if not node_info:
        return {
            "status_str": "error",
            "completed": True,
            "messages": [f"Node '{node_id}' not found"]
        }

    dir_name = node_info.name
    disabled_path = env.custom_nodes_path / f"{dir_name}.disabled"
    enabled_path = env.custom_nodes_path / dir_name

    if disabled_path.exists():
        shutil.move(str(disabled_path), str(enabled_path))
        return {
            "status_str": "success",
            "completed": True,
            "messages": [f"Enabled {dir_name}"]
        }
    elif enabled_path.exists():
        return {
            "status_str": "success",
            "completed": True,
            "messages": [f"{dir_name} is already enabled"]
        }
    else:
        return {
            "status_str": "error",
            "completed": True,
            "messages": [f"Directory not found for {dir_name}"]
        }


async def process_disable(env, params: dict) -> dict:
    """Disable a custom node."""
    import shutil
    node_id = params.get("node_name")

    _, node_info = find_node_by_id_or_name(env, node_id)
    if not node_info:
        return {
            "status_str": "error",
            "completed": True,
            "messages": [f"Node '{node_id}' not found"]
        }

    dir_name = node_info.name
    enabled_path = env.custom_nodes_path / dir_name
    disabled_path = env.custom_nodes_path / f"{dir_name}.disabled"

    if enabled_path.exists():
        shutil.move(str(enabled_path), str(disabled_path))
        return {
            "status_str": "success",
            "completed": True,
            "messages": [f"Disabled {dir_name}"]
        }
    elif disabled_path.exists():
        return {
            "status_str": "success",
            "completed": True,
            "messages": [f"{dir_name} is already disabled"]
        }
    else:
        return {
            "status_str": "error",
            "completed": True,
            "messages": [f"Directory not found for {dir_name}"]
        }


# ============================================================================
# Initialization
# ============================================================================

print("[ComfyGit] Manager server initialized")
print("[ComfyGit] v2 API endpoints registered")
