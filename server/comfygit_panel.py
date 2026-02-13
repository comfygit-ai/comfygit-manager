"""
ComfyGit Control Panel Server - Backend API endpoints for the Control Panel UI.
Provides /v2/comfygit/ endpoints for git operations, status, and environment management.
"""

import atexit
import logging

from server import PromptServer

from comfygit_server import get_environment_from_cwd


def get_workspace_from_cwd():
    """Get workspace from the current environment.

    This is a getter function that lazily loads the workspace,
    avoiding the issue where workspace would be None at import time.
    """
    env = get_environment_from_cwd()
    return env.workspace if env else None


# Import panel-specific logging infrastructure
try:
    from panel_environment_logger import EnvironmentLogger, WorkspaceLogger
    from panel_logging_config import get_logger
    logger = get_logger(__name__)
except Exception as e:
    # Graceful degradation
    print(f"[ComfyGit Panel] Could not import panel logging: {e}")
    logger = logging.getLogger(__name__)
    EnvironmentLogger = None
    WorkspaceLogger = None

# Import error handler middleware
from api.middleware.error_handler import error_handler_middleware  # noqa: E402

# Import all endpoint modules
from api.v2 import status, git, workflows, operations, environments, debug, models, config, nodes, remotes, import_ops, setup, deploy, custom_workers, orchestrator_proxy, update_check, update_manager  # noqa: E402

# Get routes object from ComfyUI
routes = PromptServer.instance.routes

# Register middleware
PromptServer.instance.app.middlewares.append(error_handler_middleware)

# Setup app state for context access
PromptServer.instance.app['get_environment'] = get_environment_from_cwd
PromptServer.instance.app['get_workspace'] = get_workspace_from_cwd

# Register all routes (iterate since PromptServer routes don't have add_routes)
for route_def in [status.routes, git.routes, workflows.routes, operations.routes, environments.routes, debug.routes, models.routes, config.routes, nodes.routes, remotes.routes, import_ops.routes, setup.routes, deploy.routes, custom_workers.routes, orchestrator_proxy.routes, update_check.routes, update_manager.routes]:
    for route in route_def:
        # Route is a tuple-like (method, path, handler)
        method = route.method
        path = route.path
        handler = route.handler

        # Register with PromptServer routes
        if method == 'GET':
            routes.get(path)(handler)
        elif method == 'POST':
            routes.post(path)(handler)
        elif method == 'PUT':
            routes.put(path)(handler)
        elif method == 'DELETE':
            routes.delete(path)(handler)
        elif method == 'PATCH':
            routes.patch(path)(handler)

def _initialize_panel_logging():
    """Initialize environment logging for panel backend."""
    if not EnvironmentLogger or not WorkspaceLogger:
        return

    env = get_environment_from_cwd()
    if env and env.workspace:
        # Set workspace path for loggers
        EnvironmentLogger.set_workspace_path(env.workspace.path)
        WorkspaceLogger.set_workspace_path(env.workspace.path)
        logger.info(f"Panel API initialized for environment: {env.name}")


# Initialize logging
_initialize_panel_logging()

# ============================================================================
# Workflow File Watcher
# ============================================================================

_watcher_observer = None


def _start_workflow_watcher():
    """Initialize file watcher for workflows directory."""
    global _watcher_observer

    from workflow_file_watcher import WorkflowFileWatcher
    from watchdog.observers import Observer

    env = get_environment_from_cwd()
    if not env:
        logger.debug("[ComfyGit] No environment detected, skipping workflow watcher")
        return None

    workflows_path = env.comfyui_path / "user" / "default" / "workflows"
    if not workflows_path.exists():
        logger.debug(f"[ComfyGit] Workflows directory doesn't exist: {workflows_path}")
        return None

    event_handler = WorkflowFileWatcher(workflows_path, PromptServer.instance)
    observer = Observer()
    observer.schedule(event_handler, str(workflows_path), recursive=False)
    observer.start()

    logger.info(f"[ComfyGit] Started workflow file watcher on {workflows_path}")
    return observer


def _stop_workflow_watcher():
    """Stop and cleanup workflow watcher."""
    global _watcher_observer
    if _watcher_observer:
        logger.info("[ComfyGit] Stopping workflow file watcher")
        _watcher_observer.stop()
        _watcher_observer.join(timeout=1)


# Start watcher
_watcher_observer = _start_workflow_watcher()

# Register cleanup on exit
atexit.register(_stop_workflow_watcher)

print("[ComfyGit] Control Panel API endpoints registered")
