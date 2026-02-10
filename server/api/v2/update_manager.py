"""Self-update endpoint for comfygit-manager.

Update mechanism: comfygit-core Environment.update_manager() (preferred).
Source of truth for available versions remains GitHub releases (handled elsewhere).
"""

from __future__ import annotations

from aiohttp import web

from cgm_core.decorators import logged_operation
from cgm_utils.async_helpers import run_sync

routes = web.RouteTableDef()


_MANUAL_INSTRUCTIONS = (
    "Manual update:\n"
    "1) Open ComfyGit panel → Nodes.\n"
    "2) Find 'comfygit-manager' and click Update.\n"
    "3) Restart the environment.\n"
)


@routes.post("/v2/comfygit/update")
@logged_operation("update manager")
async def update_manager(request: web.Request, env) -> web.Response:
    """Update comfygit-manager using comfygit-core and return restart instructions."""
    try:
        # Prefer the dedicated manager update flow (handles legacy migration).
        update_manager_fn = getattr(env, "update_manager", None)
        if callable(update_manager_fn):
            result = await run_sync(update_manager_fn, version="latest")
            changed = bool(getattr(result, "changed", False))
            old_version = getattr(result, "old_version", None)
            new_version = getattr(result, "new_version", None)
            message = getattr(result, "message", "") or (
                f"Updated from {old_version} → {new_version}" if changed else "Already up to date"
            )
        else:
            # Fallback to generic node update flow.
            update_node_fn = getattr(env, "update_node", None)
            if not callable(update_node_fn):
                raise RuntimeError("Update method not available on environment")

            result = await run_sync(update_node_fn, "comfygit-manager")
            changed = bool(getattr(result, "changed", False))
            old_version = getattr(result, "old_version", None)
            new_version = getattr(result, "new_version", None)
            message = getattr(result, "message", "") or (
                f"Updated from {old_version} → {new_version}" if changed else "Already up to date"
            )

        return web.json_response(
            {
                "status": "success",
                "changed": changed,
                "old_version": old_version,
                "new_version": new_version,
                "message": message,
                "restart_required": True,
                "manual_instructions": None,
            }
        )
    except Exception as e:
        return web.json_response(
            {
                "status": "error",
                "changed": False,
                "old_version": None,
                "new_version": None,
                "message": str(e),
                "restart_required": False,
                "manual_instructions": _MANUAL_INSTRUCTIONS,
            }
        )

