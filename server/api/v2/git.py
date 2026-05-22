"""Git operations API."""
import subprocess

from aiohttp import web

from cgm_core.decorators import requires_environment, logged_operation
from cgm_utils.async_helpers import run_sync

routes = web.RouteTableDef()


def _run_git(repo_path, args: list[str]) -> str:
    """Run a git command inside the environment repo and return stdout."""
    result = subprocess.run(
        ["git", *args],
        cwd=repo_path,
        capture_output=True,
        text=True,
        check=False,
    )
    if result.returncode != 0:
        raise ValueError(result.stderr.strip() or result.stdout.strip() or "Git command failed")
    return result.stdout


def _get_commit_detail(repo_path, commit_hash: str) -> dict:
    """Build a commit-detail payload for the history detail modal."""
    meta_output = _run_git(
        repo_path,
        [
            "show",
            "--quiet",
            "--format=%H%n%h%n%s%n%cI%n%cr%n%D",
            commit_hash,
        ],
    )
    meta_lines = meta_output.splitlines()
    if len(meta_lines) < 6:
        raise ValueError(f"Commit '{commit_hash}' not found")

    full_hash, short_hash, message, date_iso, date_relative, refs_raw = meta_lines[:6]
    refs = [ref.strip() for ref in refs_raw.split(",") if ref.strip()]

    numstat_output = _run_git(repo_path, ["show", "--numstat", "--format=", commit_hash])
    files_changed = 0
    insertions = 0
    deletions = 0
    for line in numstat_output.splitlines():
      parts = line.split("\t")
      if len(parts) < 3:
          continue
      files_changed += 1
      added, removed = parts[0], parts[1]
      if added.isdigit():
          insertions += int(added)
      if removed.isdigit():
          deletions += int(removed)

    name_status_output = _run_git(repo_path, ["show", "--name-status", "--format=", commit_hash])
    workflow_added: list[str] = []
    workflow_modified: list[str] = []
    workflow_deleted: list[str] = []
    node_added: list[dict] = []
    node_removed: list[dict] = []

    for line in name_status_output.splitlines():
        if not line.strip():
            continue
        parts = line.split("\t")
        if len(parts) < 2:
            continue

        status = parts[0]
        path = parts[-1]

        if path.startswith("workflows/") and path.endswith(".json"):
            workflow_name = path.split("/")[-1][:-5]
            if status.startswith("A"):
                workflow_added.append(workflow_name)
            elif status.startswith("D"):
                workflow_deleted.append(workflow_name)
            else:
                workflow_modified.append(workflow_name)
            continue

        if path.startswith("custom_nodes/"):
            segments = path.split("/")
            if len(segments) >= 2:
                node_name = segments[1]
                if status.startswith("A"):
                    node_added.append({"name": node_name})
                elif status.startswith("D"):
                    node_removed.append({"name": node_name})

    return {
        "hash": full_hash,
        "short_hash": short_hash,
        "message": message,
        "date": date_iso,
        "date_relative": date_relative,
        "refs": refs,
        "stats": {
            "files_changed": files_changed,
            "insertions": insertions,
            "deletions": deletions,
        },
        "changes": {
            "workflows": {
                "added": workflow_added,
                "modified": workflow_modified,
                "deleted": workflow_deleted,
            },
            "nodes": {
                "added": node_added,
                "removed": node_removed,
            },
            "models": {
                "resolved": 0,
            },
        },
    }


@routes.post("/v2/comfygit/commit")
@logged_operation("create commit")
async def create_commit(request: web.Request, env) -> web.Response:
    """Commit workflow changes."""
    json_data = await request.json()
    message = json_data.get("message", "Update workflows")
    allow_issues = json_data.get("allow_issues", False)

    # Check for changes
    has_changes = await run_sync(env.has_committable_changes)
    if not has_changes:
        return web.json_response({
            "status": "no_changes",
            "message": "No changes to commit"
        })

    # Get workflow status
    workflow_status = await run_sync(env.workflow_manager.get_workflow_status)

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
    await run_sync(
        env.execute_commit,
        workflow_status=workflow_status,
        message=message,
        allow_issues=allow_issues
    )

    return web.json_response({
        "status": "success",
        "summary": {
            "new": len(workflow_status.sync_status.new),
            "modified": len(workflow_status.sync_status.modified),
            "deleted": len(workflow_status.sync_status.deleted),
        }
    })


@routes.get("/v2/comfygit/log")
@requires_environment
async def get_commit_log(request: web.Request, env) -> web.Response:
    """Get commit history."""
    limit = int(request.query.get("limit", "20"))
    offset = int(request.query.get("offset", "0"))
    branch = request.query.get("branch")

    # Get history with extra for pagination check
    if branch:
        history = await run_sync(
            env.get_commit_history,
            limit + offset + 1,
            rev_range=branch,
        )
    else:
        history = await run_sync(env.get_commit_history, limit=limit + offset + 1)

    # Apply offset
    if offset > 0:
        history = history[offset:]

    # Check for more and trim
    has_more = len(history) > limit
    history = history[:limit]

    # Get current branch
    current_branch = await run_sync(env.get_current_branch)

    return web.json_response({
        "commits": [commit.to_dict() for commit in history],
        "has_more": has_more,
        "current_branch": current_branch,
    })


@routes.get("/v2/comfygit/commit/{hash}")
@requires_environment
async def get_commit_detail(request: web.Request, env) -> web.Response:
    """Get a single commit's detail payload for the history detail modal."""
    commit_hash = request.match_info["hash"]

    try:
        detail = await run_sync(_get_commit_detail, env.cec_path, commit_hash)
    except ValueError as e:
        return web.json_response({"error": str(e)}, status=404)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)

    return web.json_response(detail)


@routes.post("/v2/comfygit/branch")
@logged_operation("create branch")
async def create_branch(request: web.Request, env) -> web.Response:
    """Create a new branch."""
    json_data = await request.json()
    name = json_data.get("name")
    start_point = json_data.get("start_point", "HEAD")

    if not name:
        return web.json_response({"error": "name is required"}, status=400)

    try:
        await run_sync(env.create_branch, name, start_point)
    except Exception as e:
        return web.json_response({
            "status": "error",
            "message": str(e)
        }, status=500)

    return web.json_response({
        "status": "success",
        "branch": name
    })


@routes.delete("/v2/comfygit/branch/{name}")
@logged_operation("delete branch")
async def delete_branch(request: web.Request, env) -> web.Response:
    """Delete a branch."""
    name = request.match_info["name"]

    # Prevent deleting the current branch
    current = await run_sync(env.get_current_branch)
    if name == current:
        return web.json_response({
            "status": "error",
            "message": "Cannot delete the current branch"
        }, status=400)

    # Get force flag from body (if provided)
    force = False
    try:
        json_data = await request.json()
        force = json_data.get("force", False)
    except Exception:
        pass  # No body or invalid JSON is fine

    try:
        await run_sync(env.delete_branch, name, force)
    except Exception as e:
        return web.json_response({
            "status": "error",
            "message": str(e)
        }, status=500)

    return web.json_response({
        "status": "success",
        "branch": name
    })


@routes.post("/v2/comfygit/switch")
@logged_operation("switch branch")
async def switch_branch(request: web.Request, env) -> web.Response:
    """Switch to a different branch. Requires restart to take effect."""
    import os
    import asyncio
    from comfygit_core.models import CDEnvironmentError

    json_data = await request.json()
    branch = json_data.get("branch")
    force = json_data.get("force", False)

    if not branch:
        return web.json_response({"error": "branch is required"}, status=400)

    # Call orchestrator method to sync environment
    try:
        if force:
            # Use checkout with force to discard uncommitted changes
            await run_sync(env.checkout, branch, strategy=None, force=True)
        else:
            # Use switch_branch for safe switching (preserves or errors on conflicts)
            await run_sync(env.switch_branch, branch, create=False)
    except CDEnvironmentError as e:
        # Handle workflow conflict errors
        return web.json_response({
            "status": "error",
            "message": str(e)
        }, status=400)
    except Exception as e:
        return web.json_response({
            "status": "error",
            "message": str(e)
        }, status=500)

    # Trigger restart to reload browser state
    async def delayed_exit():
        await asyncio.sleep(0.3)
        os._exit(42)  # RESTART_EXIT_CODE

    asyncio.create_task(delayed_exit())

    return web.json_response({
        "status": "success",
        "message": "Restarting to sync new branch..."
    })


@routes.post("/v2/comfygit/checkout")
@logged_operation("checkout")
async def checkout_commit(request: web.Request, env) -> web.Response:
    """Checkout a specific commit or ref."""
    import os
    import asyncio
    from comfygit_core.models import CDEnvironmentError

    json_data = await request.json()
    ref = json_data.get("ref")
    force = json_data.get("force", False)

    if not ref:
        return web.json_response({"error": "ref is required"}, status=400)

    # Call orchestrator method
    try:
        await run_sync(env.checkout, ref, strategy=None, force=force)
    except ValueError as e:
        return web.json_response({"error": str(e)}, status=404)
    except CDEnvironmentError as e:
        # Handle uncommitted changes error
        return web.json_response({
            "status": "error",
            "message": str(e)
        }, status=400)
    except Exception as e:
        return web.json_response({
            "status": "error",
            "message": str(e)
        }, status=500)

    # Trigger restart to sync
    async def delayed_exit():
        await asyncio.sleep(0.3)
        os._exit(42)

    asyncio.create_task(delayed_exit())

    return web.json_response({
        "status": "success",
        "message": "Restarting to apply changes..."
    })


@routes.post("/v2/comfygit/revert-changes")
@logged_operation("revert changes")
async def revert_changes(request: web.Request, env) -> web.Response:
    """Discard uncommitted changes on the current branch and restart."""
    import os
    import asyncio
    from comfygit_core.models import CDEnvironmentError

    try:
        await run_sync(env.reset, "HEAD", mode="hard", strategy=None, force=True)
    except CDEnvironmentError as e:
        return web.json_response({
            "status": "error",
            "message": str(e)
        }, status=400)
    except Exception as e:
        return web.json_response({
            "status": "error",
            "message": str(e)
        }, status=500)

    async def delayed_exit():
        await asyncio.sleep(0.3)
        os._exit(42)

    asyncio.create_task(delayed_exit())

    return web.json_response({
        "status": "success",
        "message": "Restarting from current HEAD..."
    })


@routes.get("/v2/comfygit/branches")
@requires_environment
async def list_branches(request: web.Request, env) -> web.Response:
    """List all git branches."""
    branch_entries = await run_sync(env.list_branches)
    current = await run_sync(env.get_current_branch)

    return web.json_response({
        "branches": [branch.to_dict() for branch in branch_entries],
        "current": current
    })
