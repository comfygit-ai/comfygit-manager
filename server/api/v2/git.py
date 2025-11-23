"""Git operations API."""
from aiohttp import web

from core.decorators import requires_environment
from utils.async_helpers import run_sync

routes = web.RouteTableDef()


@routes.post("/v2/comfygit/commit")
@requires_environment
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

    # Get history with extra for pagination check
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
        "commits": history,
        "has_more": has_more,
        "current_branch": current_branch,
    })


@routes.post("/v2/comfygit/branch")
@requires_environment
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


@routes.post("/v2/comfygit/switch")
@requires_environment
async def switch_branch(request: web.Request, env) -> web.Response:
    """Switch to a different branch. Requires restart to take effect."""
    import os
    import asyncio

    json_data = await request.json()
    branch = json_data.get("branch")
    force = json_data.get("force", False)

    if not branch:
        return web.json_response({"error": "branch is required"}, status=400)

    # Check for uncommitted changes
    def check_uncommitted():
        has_git_changes = env.git_manager.has_uncommitted_changes()
        has_workflow_changes = env.workflow_manager.get_workflow_sync_status().has_changes
        return has_git_changes or has_workflow_changes

    has_uncommitted = await run_sync(check_uncommitted)

    if has_uncommitted and not force:
        return web.json_response({
            "status": "warning",
            "reason": "uncommitted_changes",
            "message": "You have uncommitted changes that will be lost"
        })

    # Do git switch
    await run_sync(env.git_manager.switch_branch, branch)

    # Trigger restart to sync the new state
    async def delayed_exit():
        await asyncio.sleep(0.3)
        os._exit(42)  # RESTART_EXIT_CODE

    asyncio.create_task(delayed_exit())

    return web.json_response({
        "status": "success",
        "message": "Restarting to sync new branch..."
    })


@routes.post("/v2/comfygit/checkout")
@requires_environment
async def checkout_commit(request: web.Request, env) -> web.Response:
    """Checkout a specific commit or ref."""
    import os
    import asyncio

    json_data = await request.json()
    ref = json_data.get("ref")
    force = json_data.get("force", False)

    if not ref:
        return web.json_response({"error": "ref is required"}, status=400)

    # Check for uncommitted changes if not forcing
    if not force:
        has_uncommitted = await run_sync(env.git_manager.has_uncommitted_changes)
        if has_uncommitted:
            return web.json_response({
                "status": "warning",
                "reason": "uncommitted_changes",
                "message": "You have uncommitted changes that will be lost"
            })

    # Do checkout
    try:
        await run_sync(env.git_manager.checkout, ref)
    except ValueError as e:
        return web.json_response({"error": str(e)}, status=404)

    # Trigger restart to sync
    async def delayed_exit():
        await asyncio.sleep(0.3)
        os._exit(42)

    asyncio.create_task(delayed_exit())

    return web.json_response({
        "status": "success",
        "message": "Restarting to apply changes..."
    })


@routes.get("/v2/comfygit/branches")
@requires_environment
async def list_branches(request: web.Request, env) -> web.Response:
    """List all git branches."""
    branch_tuples = await run_sync(env.git_manager.list_branches)
    current = await run_sync(env.get_current_branch)

    # Convert tuples to dicts
    branches = [
        {"name": name, "is_current": is_current}
        for name, is_current in branch_tuples
    ]

    return web.json_response({
        "branches": branches,
        "current": current
    })
