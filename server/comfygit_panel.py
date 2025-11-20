"""
ComfyGit Control Panel Server - Backend API endpoints for the Control Panel UI.
Provides /v2/comfygit/ endpoints for git operations, status, and environment management.
"""

import asyncio
from pathlib import Path
from datetime import datetime

from aiohttp import web
from server import PromptServer

from comfygit_server import get_environment_from_cwd, _workspace

routes = PromptServer.instance.routes

RESTART_EXIT_CODE = 42
SWITCH_ENV_EXIT_CODE = 43


@routes.get("/v2/comfygit/status")
async def comfygit_status(request):
    """Get full environment status."""
    env = get_environment_from_cwd()
    if not env:
        return web.json_response({"error": "No environment detected"}, status=500)

    try:
        loop = asyncio.get_event_loop()
        status = await loop.run_in_executor(None, env.status)

        # Serialize status to JSON-compatible dict
        workflow_sync = status.workflow.sync_status

        return web.json_response({
            "environment": env.name,
            "branch": status.git.current_branch,
            "is_detached_head": status.git.current_branch is None,
            "is_synced": status.is_synced,
            "has_changes": status.git.has_changes,
            "workflows": {
                "new": list(workflow_sync.new),
                "modified": list(workflow_sync.modified),
                "deleted": list(workflow_sync.deleted),
                "synced": list(workflow_sync.synced),
                "total": workflow_sync.total_count,
            },
            "git_changes": {
                "nodes_added": [n.get("name", n) if isinstance(n, dict) else str(n)
                              for n in status.git.nodes_added],
                "nodes_removed": [n.get("name", n) if isinstance(n, dict) else str(n)
                                for n in status.git.nodes_removed],
                "workflow_changes": status.git.workflow_changes,
                "has_other_changes": status.git.has_other_changes,
            },
            "comparison": {
                "is_synced": status.comparison.is_synced,
                "missing_nodes": list(status.comparison.missing_nodes),
                "extra_nodes": list(status.comparison.extra_nodes),
            },
            "missing_models_count": len(status.missing_models),
        })
    except Exception as e:
        print(f"[ComfyGit Panel] Status error: {e}")
        return web.json_response({"error": str(e)}, status=500)


@routes.post("/v2/comfygit/commit")
async def comfygit_commit(request):
    """Commit workflow changes."""
    env = get_environment_from_cwd()
    if not env:
        return web.json_response({"error": "No environment detected"}, status=500)

    try:
        json_data = await request.json()
        message = json_data.get("message", "Update workflows")
        allow_issues = json_data.get("allow_issues", False)

        loop = asyncio.get_event_loop()

        # Check for changes
        has_changes = await loop.run_in_executor(None, env.has_committable_changes)
        if not has_changes:
            return web.json_response({
                "status": "no_changes",
                "message": "No changes to commit"
            })

        # Get workflow status
        workflow_status = await loop.run_in_executor(
            None, env.workflow_manager.get_workflow_status
        )

        # Check commit safety
        if not workflow_status.is_commit_safe and not allow_issues:
            issues = [{
                "name": wf.name,
                "issue": wf.issue_summary
            } for wf in workflow_status.workflows_with_issues]
            return web.json_response({
                "status": "blocked",
                "reason": "workflows_with_issues",
                "issues": issues
            }, status=400)

        # Execute commit
        await loop.run_in_executor(
            None,
            lambda: env.execute_commit(
                workflow_status=workflow_status,
                message=message,
                allow_issues=allow_issues
            )
        )

        return web.json_response({
            "status": "success",
            "summary": {
                "new": len(workflow_status.sync_status.new),
                "modified": len(workflow_status.sync_status.modified),
                "deleted": len(workflow_status.sync_status.deleted),
            }
        })
    except Exception as e:
        print(f"[ComfyGit Panel] Commit error: {e}")
        return web.json_response({
            "status": "error",
            "message": str(e)
        }, status=500)


@routes.get("/v2/comfygit/log")
async def comfygit_log(request):
    """Get commit history."""
    env = get_environment_from_cwd()
    if not env:
        return web.json_response({"error": "No environment detected"}, status=500)

    try:
        limit = int(request.query.get("limit", "20"))
        offset = int(request.query.get("offset", "0"))

        loop = asyncio.get_event_loop()

        # Get history with extra for pagination check
        history = await loop.run_in_executor(
            None, lambda: env.get_commit_history(limit=limit + offset + 1)
        )

        # Apply offset
        if offset > 0:
            history = history[offset:]

        # Check for more and trim
        has_more = len(history) > limit
        history = history[:limit]

        # Get current branch
        current_branch = await loop.run_in_executor(None, env.get_current_branch)

        return web.json_response({
            "commits": history,
            "has_more": has_more,
            "current_branch": current_branch,
        })
    except Exception as e:
        print(f"[ComfyGit Panel] Log error: {e}")
        return web.json_response({"error": str(e)}, status=500)


@routes.post("/v2/comfygit/export")
async def comfygit_export(request):
    """Export environment to tarball."""
    env = get_environment_from_cwd()
    if not env:
        return web.json_response({"error": "No environment detected"}, status=500)

    try:
        json_data = await request.json()
        output_path = json_data.get("output_path")

        # Determine output path
        if output_path:
            path = Path(output_path)
        else:
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            path = Path.cwd().parent / f"{env.name}_export_{timestamp}.tar.gz"

        loop = asyncio.get_event_loop()

        # Track models without sources
        models_without_sources = []

        class ExportCallbacks:
            def on_models_without_sources(self, models):
                models_without_sources.extend(models)

        callbacks = ExportCallbacks()

        tarball_path = await loop.run_in_executor(
            None, lambda: env.export_environment(path, callbacks=callbacks)
        )

        return web.json_response({
            "status": "success",
            "path": str(tarball_path),
            "models_without_sources": len(models_without_sources),
        })
    except Exception as e:
        print(f"[ComfyGit Panel] Export error: {e}")
        return web.json_response({
            "status": "error",
            "message": str(e)
        }, status=500)


print("[ComfyGit] Control Panel API endpoints registered")
