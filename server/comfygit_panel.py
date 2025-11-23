"""
ComfyGit Control Panel Server - Backend API endpoints for the Control Panel UI.
Provides /v2/comfygit/ endpoints for git operations, status, and environment management.
"""

import asyncio
import json
import logging
import re
import subprocess
import sys
from contextlib import asynccontextmanager
from pathlib import Path
from datetime import datetime

from aiohttp import web
from server import PromptServer

from comfygit_server import get_environment_from_cwd, _workspace
from comfygit_core.core.environment import Environment
from comfygit_core.models.exceptions import CDEnvironmentNotFoundError

# Import orchestrator using direct import (server dir is in sys.path from __init__.py)
import orchestrator

routes = PromptServer.instance.routes

# Import panel-specific logging infrastructure (co-located in server/ directory)
try:
    from panel_environment_logger import EnvironmentLogger, WorkspaceLogger
    from panel_logging_config import get_logger
    logger = get_logger(__name__)
except Exception as e:
    # Graceful degradation - panel still works without our logging
    print(f"[ComfyGit Panel] Could not import panel logging: {e}")
    logger = logging.getLogger(__name__)
    EnvironmentLogger = None
    WorkspaceLogger = None

RESTART_EXIT_CODE = 42
SWITCH_ENV_EXIT_CODE = 43


# ============================================================================
# Logging Setup
# ============================================================================

def _initialize_panel_logging():
    """Initialize environment logging for panel backend."""
    if not EnvironmentLogger or not WorkspaceLogger:
        return  # Logging not available

    try:
        # Detect workspace from current environment
        env = get_environment_from_cwd()
        if env and env.workspace:
            EnvironmentLogger.set_workspace_path(env.workspace.path)
            WorkspaceLogger.set_workspace_path(env.workspace.path)
            print(f"[ComfyGit Panel] Panel logging initialized for workspace: {env.workspace.path}")
        elif _workspace:
            EnvironmentLogger.set_workspace_path(_workspace.path)
            WorkspaceLogger.set_workspace_path(_workspace.path)
            print(f"[ComfyGit Panel] Panel logging initialized for workspace: {_workspace.path}")
    except Exception as e:
        # Non-fatal - log but don't crash
        print(f"[ComfyGit Panel] Could not initialize logging: {e}")


@asynccontextmanager
async def log_panel_request(env_name: str, endpoint: str, **context):
    """
    Async context manager for logging panel API requests.

    Usage:
        async with log_panel_request(env.name, "POST /commit", message=message):
            result = await execute_commit()
    """
    # If logging not available, just yield without doing anything
    if not EnvironmentLogger:
        yield None
        return

    loop = asyncio.get_event_loop()

    # Create the context manager object
    def create_context_manager():
        return EnvironmentLogger.log_command(
            env_name,
            f"panel: {endpoint}",
            **context
        )

    # Get the context manager (not the yielded value)
    context_manager = await loop.run_in_executor(None, create_context_manager)

    # Enter the context and get the yielded value
    def enter_context(cm):
        return cm.__enter__()

    yielded_value = await loop.run_in_executor(None, enter_context, context_manager)

    try:
        yield yielded_value
    finally:
        # Exit using the context manager object (not the yielded value)
        def exit_context(cm, exc_type, exc_val, exc_tb):
            return cm.__exit__(exc_type, exc_val, exc_tb)

        await loop.run_in_executor(None, exit_context, context_manager, None, None, None)


# Initialize logging on module load
_initialize_panel_logging()


# ============================================================================
# Log File Parsing
# ============================================================================

def parse_log_file(log_file: Path, level_filter: str | None = None, lines: int = 100) -> list[dict]:
    """
    Parse Python logging file and return structured log entries.

    Format: "%(asctime)s - %(name)s - %(levelname)s - %(funcName)s:%(lineno)d - %(message)s"
    Example: "2025-11-22 15:30:45,234 - comfygit_core.workflow - DEBUG - execute:456 - Starting"

    Args:
        log_file: Path to log file
        level_filter: Optional level to filter by (ERROR, WARNING, INFO, DEBUG)
        lines: Number of lines to return (from end of file)

    Returns:
        List of log entry dicts with timestamp, level, message, context
    """
    if not log_file.exists():
        return []

    try:
        # Read last N lines from file
        with open(log_file, 'r', encoding='utf-8') as f:
            # Read all lines and take last N
            all_lines = f.readlines()
            recent_lines = all_lines[-lines:] if len(all_lines) > lines else all_lines

        entries = []
        import re

        # Pattern to match log lines
        # Format: timestamp - logger_name - LEVEL - funcName:lineno - message
        pattern = re.compile(
            r'^(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2},\d{3}) - ([^ ]+) - (DEBUG|INFO|WARNING|ERROR) - ([^:]+):(\d+) - (.+)$'
        )

        for line in recent_lines:
            line = line.strip()
            if not line:
                continue

            match = pattern.match(line)
            if match:
                timestamp_str, logger_name, level, func_name, line_no, message = match.groups()

                # Filter by level if specified
                if level_filter and level != level_filter.upper():
                    continue

                # Convert timestamp to ISO format
                # Python format: "2025-11-22 15:30:45,234"
                # ISO format: "2025-11-22T15:30:45.234Z"
                timestamp_iso = timestamp_str.replace(',', '.').replace(' ', 'T') + 'Z'

                # Extract context from logger name (e.g., "comfygit_core.workflow" -> "workflow")
                context = logger_name.split('.')[-1] if '.' in logger_name else logger_name

                entries.append({
                    'timestamp': timestamp_iso,
                    'level': level,
                    'message': message,
                    'context': context
                })

        # Reverse to show newest first
        return list(reversed(entries))

    except Exception as e:
        logger.error(f"Failed to parse log file {log_file}: {e}")
        return []


# ============================================================================
# Orchestrator Management
# ============================================================================

def spawn_orchestrator(env: Environment, target_env: str) -> None:
    """
    Spawn orchestrator daemon for first switch.

    The orchestrator becomes the permanent supervisor from this point forward.
    """
    # Use bundled orchestrator venv
    custom_node_root = Path(__file__).parent.parent
    orchestrator_python = orchestrator.get_orchestrator_python(custom_node_root)
    orchestrator_script = custom_node_root / "server" / "orchestrator.py"

    if not orchestrator_python.exists():
        raise RuntimeError("Orchestrator venv not found - run setup")

    # Capture current ComfyUI args, but filter out --enable-manager
    # (that's injected by our custom node, not a real CLI arg)
    comfyui_args = [arg for arg in sys.argv[1:] if arg != '--enable-manager']

    # Build command
    cmd = [
        str(orchestrator_python),
        str(orchestrator_script),
        "--workspace", str(env.workspace.path),
        "--environment", env.name,  # Current environment
        "--args"
    ] + comfyui_args

    # Spawn detached orchestrator
    log_file = env.workspace.path / ".metadata" / "orchestrator.log"
    subprocess.Popen(
        cmd,
        start_new_session=True,  # Detach from parent
        stdin=subprocess.DEVNULL,
        stdout=open(log_file, "a"),
        stderr=subprocess.STDOUT,
        cwd=str(env.workspace.path)
    )

    print(f"[ComfyGit] Spawned orchestrator daemon (log: {log_file})")


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

    json_data = await request.json()
    message = json_data.get("message", "Update workflows")
    allow_issues = json_data.get("allow_issues", False)

    async with log_panel_request(
        env.name,
        "POST /commit",
        message=message,
        allow_issues=allow_issues
    ):
        try:
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
            logger.error(f"Commit failed: {e}", exc_info=True)
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


@routes.post("/v2/comfygit/sync")
async def comfygit_sync_environment(request):
    """Manually trigger environment sync to match git repository state."""
    env = get_environment_from_cwd()
    if not env:
        return web.json_response({"error": "No environment detected"}, status=500)

    json_data = await request.json()
    model_strategy = json_data.get("model_strategy", "skip")
    remove_extra_nodes = json_data.get("remove_extra_nodes", True)

    async with log_panel_request(
        env.name,
        "POST /sync",
        model_strategy=model_strategy,
        remove_extra_nodes=remove_extra_nodes
    ):
        try:
            loop = asyncio.get_event_loop()

            # Run sync operation
            result = await loop.run_in_executor(
                None,
                lambda: env.sync(
                    model_strategy=model_strategy,
                    remove_extra_nodes=remove_extra_nodes
                )
            )

            # Convert SyncResult to JSON
            return web.json_response({
                "status": "success" if result.success else "error",
                "nodes_installed": result.nodes_installed,
                "nodes_removed": result.nodes_removed,
                "errors": result.errors,
                "message": "Sync completed" if result.success else "Sync completed with errors"
            })
        except Exception as e:
            logger.error(f"Sync failed: {e}", exc_info=True)
            return web.json_response({
                "status": "error",
                "message": str(e)
            }, status=500)


# ============================================================================
# Workflow Endpoints
# ============================================================================

@routes.get("/v2/comfygit/workflows")
async def get_workflows(request):
    """List all workflows with analysis."""
    env = get_environment_from_cwd()
    if not env:
        return web.json_response({"error": "No environment detected"}, status=500)

    try:
        loop = asyncio.get_event_loop()
        status = await loop.run_in_executor(None, env.status)

        workflows = []
        for wf in status.workflow.analyzed_workflows:
            workflows.append({
                "name": wf.name,
                "status": "broken" if wf.has_issues else wf.sync_state,
                "missing_nodes": wf.uninstalled_count,
                "missing_models": wf.models_needing_path_sync_count,
                "sync_state": wf.sync_state
            })

        return web.json_response(workflows)
    except Exception as e:
        print(f"[ComfyGit Panel] Get workflows error: {e}")
        return web.json_response({"error": str(e)}, status=500)


@routes.get("/v2/comfygit/workflow/{name}/details")
async def get_workflow_details(request):
    """Get detailed information about a specific workflow."""
    env = get_environment_from_cwd()
    if not env:
        return web.json_response({"error": "No environment detected"}, status=500)

    name = request.match_info["name"]

    try:
        loop = asyncio.get_event_loop()
        status = await loop.run_in_executor(None, env.status)

        # Find workflow in analyzed workflows
        workflow = next((w for w in status.workflow.analyzed_workflows if w.name == name), None)
        if not workflow:
            return web.json_response({"error": "Workflow not found"}, status=404)

        # Transform models with granular status determination and node aggregation
        models_map = {}  # hash/filename -> model info with aggregated nodes

        # Helper function to determine model status
        def determine_model_status(resolved_model):
            """
            Determine model status from ResolvedModel.

            Status hierarchy (checked in order):
            1. path_mismatch - Model exists but workflow path doesn't match
            2. available - Model exists locally
            3. downloadable - Not local but has download source
            4. missing - Neither local nor downloadable
            """
            if resolved_model.resolved_model is not None:
                if resolved_model.needs_path_sync:
                    return "path_mismatch"
                return "available"
            elif resolved_model.model_source is not None:
                return "downloadable"
            else:
                return "missing"

        # Helper to determine most important importance level
        def get_importance_priority(importance):
            """Return priority value (lower = more important)."""
            priorities = {"required": 0, "flexible": 1, "optional": 2}
            return priorities.get(importance, 2)

        # Build resolution lookup map (filename -> ResolvedModel) for quick access
        resolution_map = {}
        for resolved in workflow.resolution.models_resolved:
            resolution_map[resolved.reference.widget_value] = resolved

        # Process ALL model references from dependencies (before deduplication)
        # This captures all nodes that load each model
        for model_ref in workflow.dependencies.found_models:
            filename = model_ref.widget_value

            # Look up resolution data for this model
            resolved = resolution_map.get(filename)

            if resolved:
                # Model is resolved - get details
                status = determine_model_status(resolved)
                model_hash = resolved.resolved_model.hash if resolved.resolved_model else ""
                model_type = resolved.resolved_model.category if resolved.resolved_model else "unknown"
                model_size = resolved.resolved_model.file_size if resolved.resolved_model else 0
                importance = "required" if not resolved.is_optional else "optional"
            else:
                # Model is unresolved - defaults
                status = "missing"
                model_hash = ""
                model_type = "unknown"
                model_size = 0
                importance = "required"

            # Use hash as key, fallback to filename if no hash
            key = model_hash if model_hash else f"unhashed_{filename}"

            # Initialize model entry if first time seeing this model
            if key not in models_map:
                models_map[key] = {
                    "filename": filename,
                    "hash": model_hash,
                    "type": model_type,
                    "size": model_size,
                    "status": status,
                    "used_in_workflows": [name],
                    "importance": importance,
                    "loaded_by": []
                }

            # Aggregate node reference
            node_ref = {
                "node_type": model_ref.node_type,
                "node_id": model_ref.node_id
            }

            if node_ref not in models_map[key]["loaded_by"]:
                models_map[key]["loaded_by"].append(node_ref)

            # Update importance to most important level across all nodes
            current_importance = models_map[key]["importance"]
            if get_importance_priority(importance) < get_importance_priority(current_importance):
                models_map[key]["importance"] = importance

        # Convert to list
        models = list(models_map.values())

        # Transform nodes - deduplicate by package_id since multiple node types can come from same package
        # Status determined by workflow.uninstalled_nodes (authoritative source of what's NOT installed)
        nodes = []
        seen_packages = set()
        uninstalled_set = set(workflow.uninstalled_nodes)

        # Collect all unique packages from resolved nodes
        for node in workflow.resolution.nodes_resolved:
            if node.package_id and node.package_id not in seen_packages:
                seen_packages.add(node.package_id)
                nodes.append({
                    "name": node.package_id,
                    "version": None,
                    "status": "missing" if node.package_id in uninstalled_set else "installed"
                })

        # Add any uninstalled packages that weren't in resolved nodes (e.g., unresolved)
        for package_id in workflow.uninstalled_nodes:
            if package_id not in seen_packages:
                nodes.append({
                    "name": package_id,
                    "version": None,
                    "status": "missing"
                })

        return web.json_response({
            "name": name,
            "path": f"workflows/{name}",
            "status": "broken" if workflow.has_issues else workflow.sync_state,
            "models": models,
            "nodes": nodes
        })
    except Exception as e:
        print(f"[ComfyGit Panel] Get workflow details error: {e}")
        return web.json_response({"error": str(e)}, status=500)


@routes.post("/v2/comfygit/workflow/{name}/resolve")
async def resolve_workflow(request):
    """Analyze workflow and create resolution plan."""
    env = get_environment_from_cwd()
    if not env:
        return web.json_response({"error": "No environment detected"}, status=500)

    name = request.match_info["name"]

    try:
        loop = asyncio.get_event_loop()

        # Use auto strategies for automatic resolution
        from comfygit_core.strategies.auto import AutoNodeStrategy, AutoModelStrategy

        result = await loop.run_in_executor(
            None,
            lambda: env.resolve_workflow(
                name,
                node_strategy=AutoNodeStrategy(),
                model_strategy=AutoModelStrategy(),
                fix=True
            )
        )

        # Build resolution plan
        nodes_auto = []
        nodes_manual = []

        for node in result.nodes_resolved:
            nodes_auto.append({
                "name": node.package_id,
                "version": None,
                "source": node.package_data.repository if node.package_data else "unknown",
                "description": node.package_data.description if node.package_data else None
            })

        for node_type in result.nodes_unresolved:
            nodes_manual.append({
                "name": node_type,
                "reason": "No matching package found in registry"
            })

        models_auto = []
        models_manual = []

        for model in result.models_resolved:
            if model.model_source:  # Download intent
                models_auto.append({
                    "filename": model.reference.widget_value,
                    "url": model.model_source,
                    "size": 0,  # Unknown until download
                    "type": model.resolved_model.category if model.resolved_model else "unknown"
                })

        for model in result.models_unresolved:
            models_manual.append({
                "filename": model.reference.widget_value,
                "reason": "No matching model found in index"
            })

        for model in result.models_ambiguous:
            models_manual.append({
                "filename": model.reference.widget_value,
                "reason": "Multiple matching models found - manual selection needed"
            })

        # Estimate time and size (rough estimates)
        estimated_time = len(nodes_auto) * 30 + len(models_auto) * 60
        estimated_size = len(models_auto) * 100  # Rough MB estimate

        return web.json_response({
            "workflow": name,
            "nodes": {
                "auto_installable": nodes_auto,
                "manual": nodes_manual
            },
            "models": {
                "auto_downloadable": models_auto,
                "manual": models_manual
            },
            "estimated_time": estimated_time,
            "estimated_size": estimated_size
        })
    except Exception as e:
        print(f"[ComfyGit Panel] Resolve workflow error: {e}")
        return web.json_response({"error": str(e)}, status=500)


@routes.post("/v2/comfygit/workflow/{name}/install")
async def install_workflow_dependencies(request):
    """Install workflow dependencies (nodes and models)."""
    env = get_environment_from_cwd()
    if not env:
        return web.json_response({"error": "No environment detected"}, status=500)

    name = request.match_info["name"]

    async with log_panel_request(
        env.name,
        f"POST /workflow/{name}/install",
        workflow=name
    ):
        try:
            loop = asyncio.get_event_loop()

            # Get uninstalled nodes for this workflow
            uninstalled = await loop.run_in_executor(
                None,
                lambda: env.get_uninstalled_nodes(workflow_name=name)
            )

            if not uninstalled:
                return web.json_response({
                    "status": "success",
                    "message": "No nodes to install",
                    "nodes_installed": []
                })

            # Install nodes
            def install_nodes():
                installed = []
                failed = []
                for node_id in uninstalled:
                    try:
                        env.install_node(node_id)
                        installed.append(node_id)
                    except Exception as e:
                        failed.append({"name": node_id, "error": str(e)})
                return installed, failed

            installed, failed = await loop.run_in_executor(None, install_nodes)

            logger.info(f"Workflow install complete: {len(installed)} installed, {len(failed)} failed")
            return web.json_response({
                "status": "success" if not failed else "partial",
                "message": f"Installed {len(installed)} node(s)",
                "nodes_installed": installed,
                "nodes_failed": failed
            })
        except Exception as e:
            logger.error(f"Workflow install failed: {e}", exc_info=True)
            return web.json_response({"error": str(e)}, status=500)


# ============================================================================
# Model Endpoints
# ============================================================================

@routes.get("/v2/comfygit/models/environment")
async def get_environment_models(request):
    """Get models used in current environment with workflow usage tracking."""
    env = get_environment_from_cwd()
    if not env:
        return web.json_response({"error": "No environment detected"}, status=500)

    try:
        loop = asyncio.get_event_loop()
        status = await loop.run_in_executor(None, env.status)

        # Aggregate models across all workflows, tracking which workflows use each
        models_map = {}  # hash/key -> model info with usage tracking

        # Helper function to determine model status (same as workflow details)
        def determine_model_status(resolved_model):
            """Determine model status from ResolvedModel."""
            if resolved_model.resolved_model is not None:
                if resolved_model.needs_path_sync:
                    return "path_mismatch"
                return "available"
            elif resolved_model.model_source is not None:
                return "downloadable"
            else:
                return "missing"

        # Process models from analyzed workflows
        for wf in status.workflow.analyzed_workflows:
            for resolved_model in wf.resolution.models_resolved:
                model_ref = resolved_model.resolved_model
                if not model_ref:
                    continue

                # Use CRC32 hash as canonical identifier
                model_hash = model_ref.hash

                if model_hash not in models_map:
                    # Determine category and status
                    category = model_ref.category if hasattr(model_ref, 'category') else "unknown"
                    model_status = determine_model_status(resolved_model)

                    models_map[model_hash] = {
                        "filename": model_ref.filename,
                        "hash": model_hash,
                        "type": category,
                        "size": model_ref.file_size,
                        "status": model_status,
                        "used_in_workflows": []
                    }

                # Track workflow usage
                if wf.name not in models_map[model_hash]["used_in_workflows"]:
                    models_map[model_hash]["used_in_workflows"].append(wf.name)

        # Process missing models from env status
        for missing_model in status.missing_models:
            # Use filename-based key for missing models (no hash available)
            key = f"missing_{missing_model.filename}"

            if key not in models_map:
                models_map[key] = {
                    "filename": missing_model.filename,
                    "hash": "",
                    "type": "unknown",
                    "size": 0,
                    "status": "missing",
                    "used_in_workflows": missing_model.required_by.copy()
                }

        # Convert to list sorted by filename
        models = sorted(models_map.values(), key=lambda m: m["filename"])

        return web.json_response(models)
    except Exception as e:
        print(f"[ComfyGit Panel] Get environment models error: {e}")
        return web.json_response({"error": str(e)}, status=500)


# ============================================================================
# Git Operations
# ============================================================================

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

    json_data = await request.json()
    ref = json_data.get("ref")
    force = json_data.get("force", False)

    if not ref:
        return web.json_response({"error": "ref is required"}, status=400)

    async with log_panel_request(
        env.name,
        "POST /checkout",
        ref=ref,
        force=force
    ):
        try:
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

            logger.info(f"Checked out {ref}, restarting ComfyUI")

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
            logger.error(f"Checkout failed: ref not found: {ref}")
            return web.json_response({"error": str(e)}, status=404)
        except Exception as e:
            logger.error(f"Checkout failed: {e}", exc_info=True)
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

    json_data = await request.json()
    branch = json_data.get("branch")
    force = json_data.get("force", False)

    if not branch:
        return web.json_response({"error": "branch is required"}, status=400)

    async with log_panel_request(
        env.name,
        "POST /switch",
        branch=branch,
        force=force
    ):
        try:
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

            logger.info(f"Switched to branch {branch}, restarting ComfyUI")

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
            logger.error(f"Branch switch failed: {e}", exc_info=True)
            return web.json_response({
                "status": "error",
                "message": str(e)
            }, status=500)


# Phase 3 endpoints - Environment switching

@routes.post("/v2/comfygit/switch_environment")
async def switch_environment(request):
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

    Side effects:
        - Spawns orchestrator if first switch
        - Writes .switch_request.json
        - Exits ComfyUI with code 43
    """
    # 1. Get current environment (validate managed)
    is_managed, workspace, environment = orchestrator.detect_environment_type()
    if not is_managed or not environment:
        return web.json_response({
            "error": "Not in managed environment"
        }, status=500)

    # 2. Parse request
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

    # 3. Validate target environment exists
    try:
        workspace.get_environment(target_env, auto_sync=False)
    except CDEnvironmentNotFoundError:
        return web.json_response({
            "error": f"Environment '{target_env}' not found"
        }, status=404)

    # Use workspace logger for environment switch (affects workspace, not single env)
    async with log_panel_request(
        environment.name,
        "POST /switch_environment",
        source_env=environment.name,
        target_env=target_env
    ):
        # 4. Check for concurrent switch (acquire lock)
        metadata_dir = workspace.path / ".metadata"
        if not orchestrator.acquire_switch_lock(metadata_dir):
            return web.json_response({
                "error": "Environment switch already in progress"
            }, status=409)

        try:
            # 5. Spawn orchestrator if needed (first switch)
            if orchestrator.should_spawn_orchestrator_for_switch():
                logger.info(f"Spawning orchestrator for switch to {target_env}")
                spawn_orchestrator(environment, target_env)

            # 6. Write switch request
            orchestrator.write_switch_request(metadata_dir, target_env, source_env=environment.name)
            logger.info(f"Environment switch initiated: {environment.name} -> {target_env}")

            # 7. Schedule exit with code 43 (after response sent)
            async def delayed_exit():
                await asyncio.sleep(2)  # Give response time to send
                import os
                os._exit(SWITCH_ENV_EXIT_CODE)

            asyncio.create_task(delayed_exit())

            return web.json_response({
                "status": "switching",
                "message": f"Switching to {target_env}..."
            })

        except Exception as e:
            # Release lock on error
            logger.error(f"Environment switch failed: {e}", exc_info=True)
            orchestrator.release_switch_lock(metadata_dir)
            return web.json_response({
                "error": str(e)
            }, status=500)


@routes.get("/v2/comfygit/switch_status")
async def switch_status(request):
    """
    Get current environment switch status.

    Browser polls this endpoint during switch to show progress.

    Returns:
        {
            "state": "syncing",
            "progress": 40,
            "message": "Syncing env2...",
            "target_env": "env2",
            "source_env": "env1",
            "updated_at": 1705776150.0
        }

    States:
        - idle: No switch in progress
        - preparing: Loading target environment
        - syncing: Installing nodes/models
        - starting: Starting ComfyUI
        - validating: Waiting for health check
        - complete: Switch successful
        - rolling_back: Restoring old environment
        - rolled_back: Rollback complete
        - critical_failure: Both switch and rollback failed
    """
    is_managed, workspace, environment = orchestrator.detect_environment_type()

    if not is_managed or not workspace:
        # Server might be restarting
        return web.json_response({
            "state": "unknown",
            "message": "Server restarting..."
        })

    status_file = workspace.path / ".metadata" / ".switch_status.json"

    if not status_file.exists():
        return web.json_response({
            "state": "idle",
            "message": "No switch in progress"
        })

    try:
        with open(status_file) as f:
            status = json.load(f)

        return web.json_response(status)

    except Exception as e:
        return web.json_response({
            "error": str(e)
        }, status=500)


@routes.get("/v2/comfygit/environments")
async def list_environments(request):
    """
    List all available environments in the workspace with full details.

    Returns:
        {
            "environments": [
                {
                    "name": "env1",
                    "is_current": true,
                    "path": "/path/to/env1",
                    "created_at": "2024-01-01T00:00:00Z",
                    "workflow_count": 10,
                    "node_count": 25,
                    "model_count": 5,
                    "current_branch": "main",
                    "last_commit": "abc123",
                    "last_commit_date": "2024-01-15T10:30:00Z"
                }
            ],
            "current": "env1",
            "is_managed": true
        }
    """
    is_managed, workspace, current_env = orchestrator.detect_environment_type()

    if not is_managed or not workspace:
        return web.json_response({
            "environments": [],
            "current": None,
            "is_managed": False
        })

    try:
        # Get all environment objects
        all_envs = workspace.list_environments()

        environments = []
        for env in all_envs:
            try:
                # Get environment info
                env_info = _get_environment_info(env, current_env)
                environments.append(env_info)
            except Exception as e:
                print(f"[ComfyGit Panel] Error getting info for {env.name}: {e}")
                # Include basic info even if detailed info fails
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
        print(f"[ComfyGit Panel] List environments error: {e}")
        return web.json_response({
            "error": str(e)
        }, status=500)


def _get_environment_info(env, current_env):
    """Extract detailed information from an environment object."""
    from datetime import datetime
    import os

    # Basic info
    info = {
        "name": env.name,
        "is_current": env.name == current_env.name if current_env else False,
        "path": str(env.path)
    }

    # Created at - from .cec directory creation time
    try:
        cec_stat = os.stat(env.cec_path)
        info["created_at"] = datetime.fromtimestamp(cec_stat.st_ctime).isoformat() + "Z"
    except Exception:
        info["created_at"] = None

    # Workflow count - count .json files in workflows directory
    try:
        workflows_dir = env.comfyui_path / "workflows"
        if workflows_dir.exists():
            workflow_files = list(workflows_dir.glob("*.json"))
            info["workflow_count"] = len(workflow_files)
        else:
            info["workflow_count"] = 0
    except Exception:
        info["workflow_count"] = 0

    # Node count - count directories in custom_nodes (excluding __pycache__ and .git)
    try:
        if env.custom_nodes_path.exists():
            node_dirs = [
                d for d in env.custom_nodes_path.iterdir()
                if d.is_dir() and d.name not in ("__pycache__", ".git")
            ]
            info["node_count"] = len(node_dirs)
        else:
            info["node_count"] = 0
    except Exception:
        info["node_count"] = 0

    # Model count - count symlinks in models directory
    try:
        model_count = 0
        if env.models_path.exists():
            for category_dir in env.models_path.iterdir():
                if category_dir.is_dir():
                    symlinks = [f for f in category_dir.iterdir() if f.is_symlink()]
                    model_count += len(symlinks)
        info["model_count"] = model_count
    except Exception:
        info["model_count"] = 0

    # Git info - current branch and last commit
    try:
        branch = env.get_current_branch()
        info["current_branch"] = branch
    except Exception:
        info["current_branch"] = None

    try:
        # Get last commit info
        history = env.get_commit_history(limit=1)
        if history:
            last_commit = history[0]
            info["last_commit"] = last_commit.get("short_hash") or last_commit.get("hash", "")[:7]
            info["last_commit_date"] = last_commit.get("date")
        else:
            info["last_commit"] = None
            info["last_commit_date"] = None
    except Exception:
        info["last_commit"] = None
        info["last_commit_date"] = None

    return info


# ============================================================================
# Phase 2 - Orchestrator Control Endpoints
# ============================================================================

@routes.get("/v2/comfygit/workspace_config")
async def get_workspace_config(request):
    """Get workspace configuration for frontend."""
    is_managed, workspace, env = orchestrator.detect_environment_type()

    if not is_managed or not workspace:
        return web.json_response({"error": "Not managed"}, status=404)

    config_file = workspace.path / ".metadata" / "workspace_config.json"

    if not config_file.exists():
        # Return defaults
        return web.json_response(orchestrator.DEFAULT_CONFIG)

    try:
        with open(config_file) as f:
            config = json.load(f)
        return web.json_response(config)
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


@routes.get("/v2/comfygit/orchestrator_port")
async def orchestrator_port_endpoint(request):
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


# ============================================================================
# Debug/Logs Endpoints
# ============================================================================

@routes.get("/v2/comfygit/debug/logs")
async def get_environment_debug_logs(request):
    """
    Get environment-specific debug logs.

    Query params:
        - level: Filter by log level (ERROR, WARNING, INFO, DEBUG)
        - lines: Number of lines to return (default: 100)

    Returns:
        List of LogEntry objects from logs/<env>/full.log
    """
    # Return empty array if logging modules not available
    if not EnvironmentLogger:
        return web.json_response([])

    env = get_environment_from_cwd()
    if not env:
        return web.json_response({"error": "No environment detected"}, status=500)

    try:
        # Get query params
        level = request.query.get('level')
        lines = int(request.query.get('lines', '100'))

        # Get log file path
        log_file = env.workspace.path / "logs" / env.name / "full.log"

        # Parse and return logs
        loop = asyncio.get_event_loop()
        logs = await loop.run_in_executor(
            None,
            parse_log_file,
            log_file,
            level,
            lines
        )

        return web.json_response(logs)

    except Exception as e:
        logger.error(f"Failed to get environment logs: {e}", exc_info=True)
        return web.json_response({"error": str(e)}, status=500)


@routes.get("/v2/workspace/debug/logs")
async def get_workspace_debug_logs(request):
    """
    Get workspace-level debug logs.

    Query params:
        - level: Filter by log level (ERROR, WARNING, INFO, DEBUG)
        - lines: Number of lines to return (default: 100)

    Returns:
        List of LogEntry objects from logs/workspace/full.log
    """
    # Return empty array if logging modules not available
    if not WorkspaceLogger:
        return web.json_response([])

    env = get_environment_from_cwd()
    if not env:
        # Try to get workspace from global
        if not _workspace:
            return web.json_response({"error": "No workspace detected"}, status=500)
        workspace = _workspace
    else:
        workspace = env.workspace

    try:
        # Get query params
        level = request.query.get('level')
        lines = int(request.query.get('lines', '100'))

        # Get log file path
        log_file = workspace.path / "logs" / "workspace" / "full.log"

        # Parse and return logs
        loop = asyncio.get_event_loop()
        logs = await loop.run_in_executor(
            None,
            parse_log_file,
            log_file,
            level,
            lines
        )

        return web.json_response(logs)

    except Exception as e:
        logger.error(f"Failed to get workspace logs: {e}", exc_info=True)
        return web.json_response({"error": str(e)}, status=500)


print("[ComfyGit] Control Panel API endpoints registered")
