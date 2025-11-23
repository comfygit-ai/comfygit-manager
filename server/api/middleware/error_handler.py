"""Global exception handler middleware."""
import logging
from aiohttp import web

from comfygit_core.models.exceptions import (
    CDNodeConflictError,
    CDDependencyConflictError,
    CDEnvironmentNotFoundError,
    CDExportError,
    CDWorkspaceNotFoundError,
    UVCommandError,
)

logger = logging.getLogger(__name__)


@web.middleware
async def error_handler_middleware(request: web.Request, handler):
    """
    Global exception handler middleware.

    Converts library exceptions to HTTP error responses.
    Should be registered FIRST in middleware chain.
    """
    try:
        return await handler(request)

    except CDNodeConflictError as e:
        logger.warning(f"Node conflict: {e}")
        return web.json_response({
            "error": "node_conflict",
            "message": str(e),
            "context": {
                "conflict_type": e.context.conflict_type if e.context else None,
                "node_name": e.context.node_name if e.context else None,
                "suggested_actions": [
                    {
                        "type": action.action_type,
                        "description": action.description,
                        "node_identifier": action.node_identifier,
                    }
                    for action in (e.context.suggested_actions if e.context else [])
                ]
            }
        }, status=409)

    except CDDependencyConflictError as e:
        logger.warning(f"Dependency conflict: {e}")
        return web.json_response({
            "error": "dependency_conflict",
            "message": str(e),
            "conflicts": e.context.conflict_descriptions if e.context else [],
            "suggested_actions": [
                {
                    "type": action.action_type,
                    "description": action.description,
                }
                for action in (e.context.suggested_actions if e.context else [])
            ]
        }, status=409)

    except CDEnvironmentNotFoundError as e:
        logger.warning(f"Environment not found: {e}")
        return web.json_response({
            "error": "environment_not_found",
            "message": str(e),
        }, status=404)

    except CDExportError as e:
        logger.warning(f"Export error: {e}")
        return web.json_response({
            "error": "export_failed",
            "message": str(e),
            "uncommitted_workflows": e.context.uncommitted_workflows if e.context else [],
            "uncommitted_git_changes": e.context.uncommitted_git_changes if e.context else False,
            "has_unresolved_issues": e.context.has_unresolved_issues if e.context else False,
        }, status=400)

    except CDWorkspaceNotFoundError as e:
        logger.error(f"Workspace not found: {e}")
        return web.json_response({
            "error": "workspace_not_found",
            "message": str(e),
        }, status=500)

    except UVCommandError as e:
        logger.error(f"UV command failed: {e}")
        return web.json_response({
            "error": "uv_command_failed",
            "message": str(e),
            "command": " ".join(e.command) if e.command else None,
            "returncode": e.returncode,
            "stderr": e.stderr,
        }, status=500)

    except web.HTTPException:
        # Let aiohttp exceptions pass through
        raise

    except Exception as e:
        logger.error(f"Unexpected error: {e}", exc_info=True)
        return web.json_response({
            "error": "internal_error",
            "message": str(e)
        }, status=500)
