"""
ComfyGit Control Panel Server - Backend API endpoints for the Control Panel UI.
Provides /v2/comfygit/ endpoints for git operations, status, and environment management.
"""

import asyncio
import re
import subprocess
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


# Phase 2 endpoints

@routes.get("/v2/comfygit/branches")
async def comfygit_branches(request):
    """List all branches."""
    env = get_environment_from_cwd()
    if not env:
        return web.json_response({"error": "No environment detected"}, status=500)

    try:
        loop = asyncio.get_event_loop()

        branches_raw = await loop.run_in_executor(None, env.list_branches)
        current = await loop.run_in_executor(None, env.get_current_branch)

        branches = [
            {"name": name, "is_current": is_current}
            for name, is_current in branches_raw
        ]

        return web.json_response({
            "branches": branches,
            "current": current
        })
    except Exception as e:
        print(f"[ComfyGit Panel] Branches error: {e}")
        return web.json_response({"error": str(e)}, status=500)


@routes.get("/v2/comfygit/commit/{hash}")
async def comfygit_commit_detail(request):
    """Get commit details with diff stats."""
    env = get_environment_from_cwd()
    if not env:
        return web.json_response({"error": "No environment detected"}, status=500)

    commit_hash = request.match_info["hash"]

    try:
        loop = asyncio.get_event_loop()

        def get_commit_detail():
            import subprocess
            repo_path = env.git_manager.repo_path

            # Get commit info
            result = subprocess.run(
                ["git", "show", "--no-patch", "--format=%H|%h|%s|%ai|%cr|%D", commit_hash],
                cwd=repo_path, capture_output=True, text=True, check=True
            )
            full_hash, short_hash, message, date, date_relative, refs = result.stdout.strip().split('|', 5)

            # Get diff stats
            result = subprocess.run(
                ["git", "show", "--stat", "--format=", commit_hash],
                cwd=repo_path, capture_output=True, text=True, check=True
            )
            stat_output = result.stdout.strip()

            # Parse stats from last line like "3 files changed, 45 insertions(+), 12 deletions(-)"
            files_changed = insertions = deletions = 0
            if stat_output:
                lines = stat_output.split('\n')
                if lines:
                    summary = lines[-1]
                    import re
                    if match := re.search(r'(\d+) files? changed', summary):
                        files_changed = int(match.group(1))
                    if match := re.search(r'(\d+) insertions?\(\+\)', summary):
                        insertions = int(match.group(1))
                    if match := re.search(r'(\d+) deletions?\(-\)', summary):
                        deletions = int(match.group(1))

            # Get changed files to categorize
            result = subprocess.run(
                ["git", "diff-tree", "--no-commit-id", "--name-status", "-r", commit_hash],
                cwd=repo_path, capture_output=True, text=True, check=True
            )

            workflows_added = []
            workflows_modified = []
            workflows_deleted = []
            nodes_added = []
            nodes_removed = []

            for line in result.stdout.strip().split('\n'):
                if not line:
                    continue
                parts = line.split('\t')
                if len(parts) < 2:
                    continue
                status, filepath = parts[0], parts[1]

                # Categorize by file type
                if filepath.startswith('workflows/') and filepath.endswith('.json'):
                    name = Path(filepath).stem
                    if status == 'A':
                        workflows_added.append(name)
                    elif status == 'M':
                        workflows_modified.append(name)
                    elif status == 'D':
                        workflows_deleted.append(name)
                elif filepath == 'pyproject.toml':
                    # Parse pyproject changes for node info
                    # Get the diff to see node changes
                    try:
                        diff_result = subprocess.run(
                            ["git", "diff", f"{commit_hash}^", commit_hash, "--", "pyproject.toml"],
                            cwd=repo_path, capture_output=True, text=True, check=True
                        )
                        diff_text = diff_result.stdout

                        # Simple parsing: look for added/removed lines with node names
                        for diff_line in diff_text.split('\n'):
                            if diff_line.startswith('+') and 'git = "' in diff_line:
                                # Extract node name from line like '+comfyui-impact-pack = { git = "..."}'
                                if match := re.match(r'\+([a-z0-9-]+)\s*=', diff_line):
                                    nodes_added.append({"name": match.group(1)})
                            elif diff_line.startswith('-') and 'git = "' in diff_line:
                                if match := re.match(r'-([a-z0-9-]+)\s*=', diff_line):
                                    nodes_removed.append({"name": match.group(1)})
                    except:
                        pass  # First commit won't have parent

            return {
                "hash": full_hash,
                "short_hash": short_hash,
                "message": message,
                "date": date,
                "date_relative": date_relative,
                "refs": [r.strip() for r in refs.split(',') if r.strip()],
                "stats": {
                    "files_changed": files_changed,
                    "insertions": insertions,
                    "deletions": deletions
                },
                "changes": {
                    "workflows": {
                        "added": workflows_added,
                        "modified": workflows_modified,
                        "deleted": workflows_deleted
                    },
                    "nodes": {
                        "added": nodes_added,
                        "removed": nodes_removed
                    },
                    "models": {
                        "resolved": 0  # Could parse from pyproject changes
                    }
                }
            }

        detail = await loop.run_in_executor(None, get_commit_detail)
        return web.json_response(detail)

    except subprocess.CalledProcessError as e:
        return web.json_response({"error": f"Commit not found: {commit_hash}"}, status=404)
    except Exception as e:
        print(f"[ComfyGit Panel] Commit detail error: {e}")
        return web.json_response({"error": str(e)}, status=500)


@routes.post("/v2/comfygit/checkout")
async def comfygit_checkout(request):
    """Checkout a commit or branch. Requires restart to take effect."""
    env = get_environment_from_cwd()
    if not env:
        return web.json_response({"error": "No environment detected"}, status=500)

    try:
        json_data = await request.json()
        ref = json_data.get("ref")
        force = json_data.get("force", False)

        if not ref:
            return web.json_response({"error": "ref is required"}, status=400)

        loop = asyncio.get_event_loop()

        # Check for uncommitted changes using same logic as core
        def check_uncommitted():
            has_git_changes = env.git_manager.has_uncommitted_changes()
            has_workflow_changes = env.workflow_manager.get_workflow_sync_status().has_changes
            return has_git_changes or has_workflow_changes

        has_uncommitted = await loop.run_in_executor(None, check_uncommitted)

        if has_uncommitted and not force:
            return web.json_response({
                "status": "warning",
                "reason": "uncommitted_changes",
                "message": "You have uncommitted changes that will be lost"
            })

        # Just do git checkout - let cg run handle sync on restart
        def git_checkout():
            from comfygit_core.utils.git import _git
            repo_path = env.git_manager.repo_path
            _git(["checkout", "--force", ref], repo_path)
            if force:
                _git(["clean", "-fd"], repo_path)

        await loop.run_in_executor(None, git_checkout)

        # Trigger restart to sync the new state
        async def delayed_exit():
            await asyncio.sleep(0.3)
            import os
            os._exit(RESTART_EXIT_CODE)

        asyncio.create_task(delayed_exit())

        return web.json_response({
            "status": "success",
            "message": "Restarting to apply changes..."
        })

    except ValueError as e:
        return web.json_response({"error": str(e)}, status=404)
    except Exception as e:
        print(f"[ComfyGit Panel] Checkout error: {e}")
        return web.json_response({"error": str(e)}, status=500)


@routes.post("/v2/comfygit/branch")
async def comfygit_create_branch(request):
    """Create a new branch."""
    env = get_environment_from_cwd()
    if not env:
        return web.json_response({"error": "No environment detected"}, status=500)

    try:
        json_data = await request.json()
        name = json_data.get("name")
        start_point = json_data.get("start_point", "HEAD")

        if not name:
            return web.json_response({"error": "name is required"}, status=400)

        loop = asyncio.get_event_loop()

        await loop.run_in_executor(None, lambda: env.create_branch(name, start_point))

        return web.json_response({
            "status": "success",
            "branch": name
        })

    except Exception as e:
        print(f"[ComfyGit Panel] Create branch error: {e}")
        return web.json_response({
            "status": "error",
            "message": str(e)
        }, status=500)


@routes.post("/v2/comfygit/switch")
async def comfygit_switch_branch(request):
    """Switch to a different branch. Requires restart to take effect."""
    env = get_environment_from_cwd()
    if not env:
        return web.json_response({"error": "No environment detected"}, status=500)

    try:
        json_data = await request.json()
        branch = json_data.get("branch")
        force = json_data.get("force", False)

        if not branch:
            return web.json_response({"error": "branch is required"}, status=400)

        loop = asyncio.get_event_loop()

        # Check for uncommitted changes using same logic as core
        def check_uncommitted():
            has_git_changes = env.git_manager.has_uncommitted_changes()
            has_workflow_changes = env.workflow_manager.get_workflow_sync_status().has_changes
            return has_git_changes or has_workflow_changes

        has_uncommitted = await loop.run_in_executor(None, check_uncommitted)

        if has_uncommitted and not force:
            return web.json_response({
                "status": "warning",
                "reason": "uncommitted_changes",
                "message": "You have uncommitted changes that will be lost"
            })

        # Just do git switch - let cg run handle sync on restart
        def git_switch():
            env.git_manager.switch_branch(branch)

        await loop.run_in_executor(None, git_switch)

        # Trigger restart to sync the new state
        async def delayed_exit():
            await asyncio.sleep(0.3)
            import os
            os._exit(RESTART_EXIT_CODE)

        asyncio.create_task(delayed_exit())

        return web.json_response({
            "status": "success",
            "message": "Restarting to sync new branch..."
        })

    except Exception as e:
        print(f"[ComfyGit Panel] Switch branch error: {e}")
        return web.json_response({
            "status": "error",
            "message": str(e)
        }, status=500)


print("[ComfyGit] Control Panel API endpoints registered")
