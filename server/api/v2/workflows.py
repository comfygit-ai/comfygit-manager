"""Workflow operations API."""
import asyncio
import json
from pathlib import Path

from aiohttp import web

from comfygit_core.strategies.auto import AutoNodeStrategy, AutoModelStrategy
from comfygit_core.models.workflow import (
    NodeResolutionContext, ModelResolutionContext,
    ResolvedNodePackage, ResolvedModel, WorkflowNodeWidgetRef,
    BatchDownloadCallbacks
)

from cgm_core.decorators import requires_environment, logged_operation
from cgm_core.serializers import serialize_workflow_details
from cgm_utils.async_helpers import run_sync

routes = web.RouteTableDef()


# =============================================================================
# Serialization Helpers for Interactive Resolution Wizard
# =============================================================================

def _serialize_resolved_node(node: ResolvedNodePackage, workflow_name: str, uninstalled_set: set = None) -> dict:
    """Convert ResolvedNodePackage to frontend ResolvedNode format."""
    uninstalled_set = uninstalled_set or set()
    return {
        "reference": {
            "node_type": node.node_type,
            "workflow": workflow_name
        },
        "package": {
            "package_id": node.package_id,
            "title": node.package_data.display_name if node.package_data else node.package_id
        },
        "match_confidence": node.match_confidence,
        "match_type": node.match_type,
        "is_installed": node.package_id not in uninstalled_set
    }


def _serialize_unresolved_node(node, workflow_name: str) -> dict:
    """Convert WorkflowNode to frontend UnresolvedNode format."""
    return {
        "reference": {
            "node_type": node.type,
            "workflow": workflow_name,
            "node_id": node.id
        },
        "reason": "not_found_in_registry"
    }


def _serialize_ambiguous_node(options: list[ResolvedNodePackage], workflow_name: str, uninstalled_set: set = None) -> dict:
    """Convert ambiguous node options to frontend AmbiguousNode format."""
    if not options:
        return None
    uninstalled_set = uninstalled_set or set()
    return {
        "reference": {
            "node_type": options[0].node_type,
            "workflow": workflow_name
        },
        "options": [
            {
                "package": {
                    "package_id": opt.package_id,
                    "title": opt.package_data.display_name if opt.package_data else opt.package_id
                },
                "match_confidence": opt.match_confidence,
                "match_type": opt.match_type,
                "is_installed": opt.package_id not in uninstalled_set
            }
            for opt in options
        ]
    }


def _serialize_resolved_model(model: ResolvedModel) -> dict:
    """Convert ResolvedModel to frontend format."""
    # Build full file path for "open file location" functionality
    file_path = None
    if model.resolved_model:
        base_dir = getattr(model.resolved_model, 'base_directory', None)
        rel_path = getattr(model.resolved_model, 'relative_path', None)
        if base_dir and rel_path and isinstance(base_dir, str) and isinstance(rel_path, str):
            file_path = str(Path(base_dir) / rel_path)

    return {
        "reference": {
            "workflow": model.workflow,
            "node_id": model.reference.node_id,
            "node_type": model.reference.node_type,
            "widget_name": getattr(model.reference, 'widget_name', None),
            "widget_value": model.reference.widget_value
        },
        "model": {
            "filename": model.resolved_model.filename if model.resolved_model else None,
            "hash": model.resolved_model.hash if model.resolved_model else None,
            "size": model.resolved_model.file_size if model.resolved_model else 0,
            "category": model.resolved_model.category if model.resolved_model else "unknown",
            "relative_path": model.resolved_model.relative_path if model.resolved_model else None
        } if model.resolved_model else None,
        "match_confidence": model.match_confidence,
        "match_type": model.match_type,
        "needs_path_sync": model.needs_path_sync,
        "has_download_source": bool(model.model_source),
        "download_source": model.model_source,  # Include actual URL for download intents
        "target_path": str(model.target_path) if model.target_path else None,
        "is_optional": model.is_optional,
        # Category mismatch (blocking issue)
        "has_category_mismatch": getattr(model, 'has_category_mismatch', False) is True,
        "expected_categories": _safe_list(getattr(model, 'expected_categories', None)),
        "actual_category": _safe_str(getattr(model, 'actual_category', None)),
        "file_path": file_path,
    }


def _safe_list(value) -> list:
    """Safely convert value to list, handling None and non-iterables."""
    if value is None:
        return []
    try:
        return list(value)
    except (TypeError, ValueError):
        return []


def _safe_str(value) -> str | None:
    """Safely convert value to string, handling Mock objects."""
    if value is None:
        return None
    # Check if it looks like a real string (not a Mock)
    if isinstance(value, str):
        return value
    return None


def _safe_int(value) -> int:
    """Safely convert value to int, handling Mock objects."""
    if isinstance(value, int):
        return value
    try:
        return int(value)
    except (TypeError, ValueError):
        return 0


def _serialize_unresolved_model(ref: WorkflowNodeWidgetRef, workflow_name: str) -> dict:
    """Convert WorkflowNodeWidgetRef to frontend UnresolvedModel format."""
    return {
        "reference": {
            "workflow": workflow_name,
            "node_id": ref.node_id,
            "node_type": ref.node_type,
            "widget_name": getattr(ref, 'widget_name', None),
            "widget_value": ref.widget_value
        },
        "reason": "not_found_in_index"
    }


def _serialize_ambiguous_model(options: list[ResolvedModel]) -> dict:
    """Convert ambiguous model options to frontend AmbiguousModel format."""
    if not options:
        return None
    ref = options[0].reference
    return {
        "reference": {
            "workflow": options[0].workflow,
            "node_id": ref.node_id,
            "node_type": ref.node_type,
            "widget_name": getattr(ref, 'widget_name', None),
            "widget_value": ref.widget_value
        },
        "options": [
            {
                "model": {
                    "filename": opt.resolved_model.filename,
                    "hash": opt.resolved_model.hash,
                    "size": opt.resolved_model.file_size,
                    "category": opt.resolved_model.category,
                    "relative_path": opt.resolved_model.relative_path
                },
                "match_confidence": opt.match_confidence,
                "match_type": opt.match_type,
                "has_download_source": bool(opt.model_source)
            }
            for opt in options if opt.resolved_model
        ]
    }


# =============================================================================
# Panel Strategy Classes for Interactive Resolution
# =============================================================================

class PanelNodeStrategy:
    """Apply user's node choices from the panel wizard."""

    def __init__(self, choices: dict[str, dict]):
        """
        Args:
            choices: Dict mapping node_type to choice dict:
                {
                    "action": "install" | "optional" | "skip" | "manual",
                    "package_id": str (for install/manual),
                    "manual_url": str (for manual)
                }
        """
        self.choices = choices

    def resolve_unknown_node(
        self,
        node_type: str,
        possible: list[ResolvedNodePackage],
        context: NodeResolutionContext
    ) -> ResolvedNodePackage | None:
        choice = self.choices.get(node_type)

        if not choice or choice.get("action") == "skip":
            return None

        action = choice.get("action")

        if action == "optional":
            return ResolvedNodePackage(
                node_type=node_type,
                match_type="optional",
                package_id=None
            )

        if action in ("install", "manual"):
            package_id = choice.get("package_id") or choice.get("manual_url")
            if not package_id:
                return None

            # Find matching package from possible list if available
            for pkg in possible:
                if pkg.package_id == package_id:
                    return ResolvedNodePackage(
                        node_type=node_type,
                        package_id=package_id,
                        package_data=pkg.package_data,
                        match_type="user_confirmed",
                        match_confidence=1.0
                    )

            # User selected a package not in the suggestions (manual entry)
            return ResolvedNodePackage(
                node_type=node_type,
                package_id=package_id,
                package_data=None,
                match_type="manual",
                match_confidence=1.0
            )

        return None

    def confirm_node_install(self, package: ResolvedNodePackage) -> bool:
        return True


class PanelModelStrategy:
    """Apply user's model choices from the panel wizard."""

    def __init__(self, choices: dict[str, dict]):
        """
        Args:
            choices: Dict mapping filename to choice dict:
                {
                    "action": "download" | "select" | "optional" | "skip",
                    "url": str (for download),
                    "target_path": str (for download),
                    "selected_model": dict (for select)
                }
        """
        self.choices = choices

    def resolve_model(
        self,
        reference: WorkflowNodeWidgetRef,
        candidates: list[ResolvedModel],
        context: ModelResolutionContext
    ) -> ResolvedModel | None:
        # Use widget_value as the key (the filename reference in workflow)
        choice = self.choices.get(reference.widget_value)

        if not choice or choice.get("action") == "skip":
            return None

        action = choice.get("action")

        if action == "optional":
            return ResolvedModel(
                workflow=context.workflow_name,
                reference=reference,
                resolved_model=None,
                is_optional=True,
                match_type="optional_unresolved",
                match_confidence=1.0
            )

        if action == "select":
            selected = choice.get("selected_model")
            if not selected:
                return None

            # Find matching candidate
            for candidate in candidates:
                if (candidate.resolved_model and
                    candidate.resolved_model.filename == selected.get("filename")):
                    return ResolvedModel(
                        workflow=context.workflow_name,
                        reference=reference,
                        resolved_model=candidate.resolved_model,
                        is_optional=False,
                        match_type="user_confirmed",
                        match_confidence=1.0
                    )

            return None

        if action == "download":
            url = choice.get("url")
            target_path = choice.get("target_path")

            if not url:
                return None

            return ResolvedModel(
                workflow=context.workflow_name,
                reference=reference,
                resolved_model=None,
                model_source=url,
                is_optional=False,
                match_type="download_intent",
                target_path=Path(target_path) if target_path else None
            )

        return None


@routes.get("/v2/comfygit/workflows")
@requires_environment
async def get_workflows(request: web.Request, env) -> web.Response:
    """List all workflows with analysis.

    Query params:
        refresh: If "true", forces refresh of cached environment before listing.
                 This also syncs the model index to detect filesystem changes.
    """
    # Check if refresh is requested
    if request.query.get("refresh", "").lower() == "true":
        from comfygit_server import refresh_environment
        refresh_environment()
        # Re-get the environment after refresh
        from cgm_core.context import get_environment_from_request
        env = get_environment_from_request(request)
        if not env:
            return web.json_response({"error": "Failed to refresh environment"}, status=500)

        # Sync model index to detect filesystem changes (like deleted/added models)
        # This mirrors the CLI behavior where get_environment() auto-syncs
        if env.workspace:
            try:
                await run_sync(env.workspace.sync_model_directory)
            except Exception as e:
                # Don't fail the whole request if model sync fails
                # (e.g., if models directory is not configured)
                print(f"[ComfyGit] Warning: Model sync failed: {e}")

    status = await run_sync(env.status)

    workflows = []
    for wf in status.workflow.analyzed_workflows:
        workflows.append({
            "name": wf.name,
            "status": "broken" if wf.has_issues else wf.sync_state,
            "missing_nodes": wf.uninstalled_count,
            "missing_models": len(wf.resolution.models_unresolved) + len(wf.resolution.models_ambiguous),
            "pending_downloads": wf.download_intents_count,
            "sync_state": wf.sync_state,
            "has_path_sync_issues": wf.has_path_sync_issues,
            "models_needing_path_sync": wf.models_needing_path_sync_count,
            # Category mismatch (blocking issue)
            "has_category_mismatch_issues": getattr(wf, 'has_category_mismatch_issues', False) is True,
            "models_with_category_mismatch": _safe_int(getattr(wf, 'models_with_category_mismatch_count', 0)),
        })

    return web.json_response(workflows)


@routes.get("/v2/comfygit/workflow/{name}/details")
@requires_environment
async def get_workflow_details(request: web.Request, env) -> web.Response:
    """Get detailed information about a specific workflow."""
    name = request.match_info["name"]

    status = await run_sync(env.status)

    # Find workflow in analyzed workflows
    workflow = next((w for w in status.workflow.analyzed_workflows if w.name == name), None)
    if not workflow:
        return web.json_response({"error": "Workflow not found"}, status=404)

    # Get criticality map from pyproject (filename -> criticality)
    criticality_map = {}
    try:
        manifest_models = env.pyproject.workflows.get_workflow_models(name)
        for model in manifest_models:
            criticality_map[model.filename] = model.criticality or "required"
    except Exception:
        pass  # Fallback to default behavior if pyproject read fails

    # Get set of available model filenames from the model index
    available_models = set()
    try:
        all_models = env.workspace.list_models()
        for model in all_models:
            available_models.add(model.filename)
    except Exception:
        pass  # Fallback if model index unavailable

    return web.json_response(serialize_workflow_details(workflow, name, criticality_map, available_models))


@routes.post("/v2/comfygit/workflow/{name}/model-importance")
@logged_operation("set model importance")
async def set_model_importance(request: web.Request, env) -> web.Response:
    """Update model importance/criticality for a workflow."""
    name = request.match_info["name"]

    try:
        body = await request.json()
    except Exception:
        return web.json_response({"error": "Invalid JSON"}, status=400)

    model = body.get("model")
    importance = body.get("importance")

    # Validate required fields
    if not model:
        return web.json_response({"error": "Missing 'model' field"}, status=400)
    if not importance:
        return web.json_response({"error": "Missing 'importance' field"}, status=400)

    # Validate importance value
    valid_values = ("required", "flexible", "optional")
    if importance not in valid_values:
        return web.json_response(
            {"error": f"Invalid importance value. Must be one of: {', '.join(valid_values)}"},
            status=400
        )

    # Call core library
    success = await run_sync(
        env.workflow_manager.update_model_criticality,
        name,
        model,
        importance
    )

    if not success:
        return web.json_response(
            {"error": f"Model '{model}' not found in workflow '{name}'"},
            status=404
        )

    return web.json_response({"status": "success"})


@routes.post("/v2/comfygit/workflow/{name}/resolve")
@logged_operation("resolve workflow")
async def resolve_workflow(request: web.Request, env) -> web.Response:
    """Analyze workflow and create resolution plan."""
    name = request.match_info["name"]

    result = await run_sync(
        env.resolve_workflow,
        name,
        node_strategy=AutoNodeStrategy(),
        model_strategy=AutoModelStrategy(),
        fix=True
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
        if model.model_source:
            models_auto.append({
                "filename": model.reference.widget_value,
                "url": model.model_source,
                "size": 0,
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

    # Estimate time and size
    estimated_time = len(nodes_auto) * 30 + len(models_auto) * 60
    estimated_size = len(models_auto) * 100

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


@routes.post("/v2/comfygit/workflow/{name}/install")
@logged_operation("install workflow deps")
async def install_workflow(request: web.Request, env) -> web.Response:
    """Install missing dependencies for a workflow.

    Optionally accepts a JSON body with 'packages' array to install specific packages.
    If not provided, installs all uninstalled packages for the workflow.
    """
    name = request.match_info["name"]

    try:
        # Check if specific packages were requested
        packages_to_install = None
        try:
            body = await request.json()
            packages_to_install = body.get("packages")
        except Exception:
            pass  # No body or invalid JSON - use default behavior

        if packages_to_install is not None:
            # Install only the requested packages
            uninstalled = packages_to_install
        else:
            # Get uninstalled nodes for workflow
            uninstalled = await run_sync(env.get_uninstalled_nodes, workflow_name=name)

        if not uninstalled:
            return web.json_response({
                "status": "success",
                "message": "All dependencies already installed",
                "nodes_installed": [],
                "failed": []
            })

        # Install each node, continuing on failure
        installed = []
        failed = []
        for node_id in uninstalled:
            try:
                await run_sync(env.add_node, node_id)
                installed.append(node_id)
            except Exception as e:
                failed.append({"node_id": node_id, "error": str(e)})

        # Determine overall status
        if len(failed) == 0:
            status = "success"
            message = f"Installed {len(installed)} node packages"
        elif len(installed) == 0:
            status = "error"
            message = f"All {len(failed)} packages failed to install"
        else:
            status = "partial"
            message = f"Installed {len(installed)} packages, {len(failed)} failed"

        return web.json_response({
            "status": status,
            "message": message,
            "nodes_installed": installed,
            "failed": failed
        })
    except Exception as e:
        return web.json_response({
            "status": "error",
            "message": str(e),
            "nodes_installed": [],
            "failed": []
        }, status=500)


# =============================================================================
# Interactive Resolution Wizard Endpoints
# =============================================================================

@routes.post("/v2/comfygit/workflow/{name}/analyze")
@logged_operation("analyze workflow")
async def analyze_workflow(request: web.Request, env) -> web.Response:
    """Analyze workflow for interactive resolution wizard.

    Uses workflow_manager.analyze_and_resolve_workflow directly to avoid
    triggering any pending downloads - we just want the analysis data.
    """
    name = request.match_info["name"]

    # Call analyze_and_resolve_workflow directly (NOT env.resolve_workflow)
    # This gives us analysis + resolution WITHOUT executing downloads
    _, result = await run_sync(
        env.workflow_manager.analyze_and_resolve_workflow,
        name
    )

    # Get uninstalled nodes from environment status
    # This is more reliable than get_uninstalled_nodes() which may not find the workflow
    status = await run_sync(env.status)
    workflow_status = next(
        (wf for wf in status.workflow.analyzed_workflows if wf.name == name or wf.name == f"{name}.json"),
        None
    )
    uninstalled_set = set(workflow_status.uninstalled_nodes) if workflow_status else set()

    # Count node types that need their packages installed
    # (may be more than package count if one package provides multiple node types)
    nodes_needing_installation = sum(
        1 for n in result.nodes_resolved if n.package_id in uninstalled_set
    )

    # Count unique packages to install (for display purposes)
    packages_needing_installation = len(uninstalled_set)

    # needs_user_input: user must make choices for unresolved/ambiguous items
    needs_user_input = bool(
        result.nodes_unresolved or result.nodes_ambiguous or
        result.models_unresolved or result.models_ambiguous
    )

    # Count download intents (both from pyproject and from node properties)
    download_intents_count = sum(
        1 for m in result.models_resolved
        if m.match_type in ("download_intent", "property_download_intent")
    )

    # is_fully_resolved: workflow is ready to run (no user input needed AND all nodes installed AND no pending downloads)
    is_fully_resolved = (
        not needs_user_input
        and nodes_needing_installation == 0
        and download_intents_count == 0
    )

    # Transform to frontend format
    response = {
        "workflow": name,
        "nodes": {
            "resolved": [_serialize_resolved_node(n, name, uninstalled_set) for n in result.nodes_resolved],
            "unresolved": [_serialize_unresolved_node(n, name) for n in result.nodes_unresolved],
            "ambiguous": [
                amb for amb in [_serialize_ambiguous_node(opts, name, uninstalled_set) for opts in result.nodes_ambiguous]
                if amb is not None
            ]
        },
        "models": {
            "resolved": [_serialize_resolved_model(m) for m in result.models_resolved],
            "unresolved": [_serialize_unresolved_model(m, name) for m in result.models_unresolved],
            "ambiguous": [
                amb for amb in [_serialize_ambiguous_model(opts) for opts in result.models_ambiguous]
                if amb is not None
            ]
        },
        "stats": {
            "total_nodes": len(result.nodes_resolved) + len(result.nodes_unresolved) + len(result.nodes_ambiguous),
            "total_models": len(result.models_resolved) + len(result.models_unresolved) + len(result.models_ambiguous),
            "download_intents": download_intents_count,
            "nodes_needing_installation": nodes_needing_installation,  # Node types count
            "packages_needing_installation": packages_needing_installation,  # Unique packages count
            "needs_user_input": needs_user_input,
            "is_fully_resolved": is_fully_resolved,
            "models_with_category_mismatch": sum(1 for m in result.models_resolved if getattr(m, 'has_category_mismatch', False))
        }
    }

    return web.json_response(response)


@routes.post("/v2/comfygit/workflow/search-nodes")
@requires_environment
async def search_nodes(request: web.Request, env) -> web.Response:
    """Search node registry for packages matching query."""
    try:
        body = await request.json()
    except Exception:
        return web.json_response({"error": "Invalid JSON body"}, status=400)

    query = body.get("query", "")
    limit = body.get("limit", 10)

    if not query:
        return web.json_response({"results": [], "total": 0})

    # Get installed packages for marking
    installed = env.pyproject.nodes.get_existing()

    # Search using core library
    matches = await run_sync(
        env.workflow_manager.global_node_resolver.search_packages,
        query,
        installed,
        True,  # include_registry
        limit
    )

    results = []
    for match in matches:
        results.append({
            "package_id": match.package_id,
            "match_confidence": match.score,
            "match_type": match.confidence,  # "high", "medium", "low"
            "description": match.package_data.description if match.package_data else None,
            "repository": match.package_data.repository if match.package_data else None,
            "is_installed": match.package_id in installed
        })

    return web.json_response({
        "results": results,
        "total": len(results)
    })


@routes.post("/v2/comfygit/workflow/search-models")
@requires_environment
async def search_models(request: web.Request, env) -> web.Response:
    """Search workspace models matching query."""
    try:
        body = await request.json()
    except Exception:
        return web.json_response({"error": "Invalid JSON body"}, status=400)

    query = body.get("query", "")
    limit = body.get("limit", 10)

    if not query:
        return web.json_response({"results": [], "total": 0})

    # Search using core library
    matches = await run_sync(
        env.workflow_manager.search_models,
        query,
        None,  # node_type filter
        limit
    )

    # Get global models for download source info
    global_models = {}
    try:
        all_global = env.pyproject.models.get_all()
        for m in all_global:
            global_models[m.hash] = m
    except Exception:
        pass

    results = []
    for match in matches:
        model = match.model
        global_model = global_models.get(model.hash)
        has_source = bool(global_model and global_model.sources) if global_model else False

        results.append({
            "filename": model.filename,
            "hash": model.hash,
            "size": model.file_size,
            "category": model.category,
            "relative_path": model.relative_path,
            "has_download_source": has_source,
            "match_confidence": match.score
        })

    return web.json_response({
        "results": results,
        "total": len(results)
    })


@routes.post("/v2/comfygit/workflow/{name}/apply-resolution")
@logged_operation("apply resolution")
async def apply_resolution(request: web.Request, env) -> web.Response:
    """Apply user's resolution choices from the wizard.

    IMPORTANT: Does NOT execute downloads inline. Returns models_to_download
    for the frontend to queue in the async download manager.
    """
    name = request.match_info["name"]

    try:
        body = await request.json()
    except Exception:
        return web.json_response({"error": "Invalid JSON body"}, status=400)

    node_choices = body.get("node_choices", {})
    model_choices = body.get("model_choices", {})
    skipped_packages = set(body.get("skipped_packages", []))

    # Create strategies from user choices
    node_strategy = PanelNodeStrategy(node_choices)
    model_strategy = PanelModelStrategy(model_choices)

    # Get current resolution state (does NOT execute downloads)
    _, result = await run_sync(
        env.workflow_manager.analyze_and_resolve_workflow,
        name
    )

    # Apply strategies to fix unresolved issues (writes to pyproject.toml)
    if result.has_issues:
        result = await run_sync(
            env.workflow_manager.fix_resolution,
            result,
            node_strategy,
            model_strategy
        )

    # Collect what needs to be installed (excluding user-skipped packages)
    nodes_to_install = []
    installed = env.pyproject.nodes.get_existing()
    for node in result.nodes_resolved:
        if node.package_id and node.match_type != "optional":
            if node.package_id not in installed and node.package_id not in skipped_packages:
                nodes_to_install.append(node.package_id)

    # Handle user overrides for existing download intents
    # Get current workflow models from pyproject to check for download intents
    try:
        current_models = env.pyproject.workflows.get_workflow_models(name)
        updated_models = False

        for model in current_models:
            if model.status == "unresolved" and model.sources:
                # This is a download intent - check if user wants to change it
                choice = model_choices.get(model.filename)
                if choice:
                    action = choice.get("action")
                    if action in ("skip", "cancel_download"):
                        # Cancel the download intent - clear sources and mark unresolved
                        model.sources = []
                        model.relative_path = None
                        updated_models = True
                    elif action == "optional":
                        # Mark as optional and clear download intent
                        # Status remains 'unresolved' - model has no hash (never downloaded)
                        model.status = "unresolved"
                        model.criticality = "optional"
                        model.sources = []
                        model.relative_path = None
                        updated_models = True
                    elif action == "download":
                        # Update download intent with new URL/path
                        new_url = choice.get("url")
                        new_path = choice.get("target_path")
                        if new_url:
                            model.sources = [new_url]
                            if new_path:
                                model.relative_path = new_path
                            updated_models = True

        if updated_models:
            env.pyproject.workflows.set_workflow_models(name, current_models)
    except Exception:
        pass  # Continue even if update fails

    # Get models directory for checking if files already exist
    models_dir = env.workspace.workspace_config_manager.get_models_directory()

    # Collect models that need downloading (download_intent/property_download_intent with model_source)
    # Skip models where user chose to cancel/optional, or file already exists
    models_to_download = []
    for model in result.models_resolved:
        if model.model_source and model.match_type in ("download_intent", "property_download_intent"):
            filename = model.reference.widget_value
            choice = model_choices.get(filename)

            # Check if user cancelled this download
            if choice and choice.get("action") in ("skip", "cancel_download", "optional"):
                continue  # User cancelled this download

            # Use user's URL if they provided a new one, otherwise use existing
            url = model.model_source
            target_path = str(model.target_path) if model.target_path else None
            if choice and choice.get("action") == "download" and choice.get("url"):
                url = choice["url"]
                if choice.get("target_path"):
                    target_path = choice["target_path"]

            # Skip if file already exists at target path
            if target_path and models_dir and (models_dir / target_path).exists():
                continue  # File already downloaded

            models_to_download.append({
                "filename": filename,
                "url": url,
                "size": 0,  # Unknown until download starts
                "target_path": target_path
            })

    # Also check pyproject.toml for any unresolved models with sources
    # (in case they weren't picked up from resolution result)
    try:
        all_workflows = env.pyproject.workflows.get_all_with_resolutions()
        workflow_data = all_workflows.get(name, {})
        for manifest_model in workflow_data.get("models", []):
            if manifest_model.get("status") == "unresolved" and manifest_model.get("sources"):
                sources = manifest_model.get("sources", [])
                filename = manifest_model.get("filename")
                rel_path = manifest_model.get("relative_path")

                # Check if user cancelled this download
                choice = model_choices.get(filename)
                if choice and choice.get("action") in ("skip", "cancel_download", "optional"):
                    continue  # User cancelled this download

                # Skip if file already exists
                if rel_path and models_dir and (models_dir / rel_path).exists():
                    continue  # File already downloaded

                # Avoid duplicates in list
                if sources and not any(m["filename"] == filename for m in models_to_download):
                    models_to_download.append({
                        "filename": filename,
                        "url": sources[0],
                        "size": 0,
                        "target_path": rel_path
                    })
    except Exception:
        pass  # Fallback if pyproject read fails

    # Estimate time (rough: 30s per node, 120s per model)
    estimated_time = len(nodes_to_install) * 30 + len(models_to_download) * 120

    return web.json_response({
        "status": "success",
        "nodes_to_install": nodes_to_install,
        "models_to_download": models_to_download,
        "estimated_time_seconds": estimated_time
    })


@routes.post("/v2/comfygit/workflow/{name}/apply-resolution-stream")
@logged_operation("apply resolution stream")
async def apply_resolution_stream(request: web.Request, env) -> web.StreamResponse:
    """Apply user's resolution choices and stream progress via SSE.

    Streams events for download progress, allowing frontend to show real-time updates.
    Event types: batch_start, file_start, file_progress, file_complete, batch_complete, done, error
    """
    name = request.match_info["name"]

    try:
        body = await request.json()
    except Exception:
        return web.json_response({"error": "Invalid JSON body"}, status=400)

    node_choices = body.get("node_choices", {})
    model_choices = body.get("model_choices", {})

    # Set up SSE response
    response = web.StreamResponse(
        status=200,
        headers={
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no"  # Disable nginx buffering
        }
    )
    await response.prepare(request)

    # Queue for passing events from sync callbacks to async response
    event_queue: asyncio.Queue = asyncio.Queue()

    async def send_event(event_type: str, data: dict):
        """Send an SSE event."""
        event_data = json.dumps({"type": event_type, **data})
        await response.write(f"event: {event_type}\ndata: {event_data}\n\n".encode())

    def queue_event(event_type: str, data: dict):
        """Queue an event from sync context."""
        asyncio.get_event_loop().call_soon_threadsafe(
            event_queue.put_nowait, (event_type, data)
        )

    # Create callbacks that queue events
    callbacks = BatchDownloadCallbacks(
        on_batch_start=lambda total: queue_event("batch_start", {"total": total}),
        on_file_start=lambda filename, idx, total: queue_event("file_start", {
            "filename": filename,
            "index": idx,
            "total": total
        }),
        on_file_progress=lambda downloaded, total: queue_event("file_progress", {
            "downloaded": downloaded,
            "total": total
        }),
        on_file_complete=lambda filename, success, error: queue_event("file_complete", {
            "filename": filename,
            "success": success,
            "error": error
        }),
        on_batch_complete=lambda success_count, total: queue_event("batch_complete", {
            "success_count": success_count,
            "total": total
        })
    )

    # Create strategies from user choices
    node_strategy = PanelNodeStrategy(node_choices)
    model_strategy = PanelModelStrategy(model_choices)

    async def run_resolution():
        """Run resolution in thread pool and signal completion."""
        try:
            result = await run_sync(
                env.resolve_workflow,
                name,
                node_strategy=node_strategy,
                model_strategy=model_strategy,
                fix=True,
                download_callbacks=callbacks
            )

            # Collect nodes to install
            nodes_to_install = []
            for node in result.nodes_resolved:
                if node.package_id and node.match_type != "optional":
                    installed = env.pyproject.nodes.get_existing()
                    if node.package_id not in installed:
                        nodes_to_install.append(node.package_id)

            # Get download results
            download_results = []
            if result.download_results:
                for dr in result.download_results:
                    download_results.append({
                        "filename": dr.filename,
                        "success": dr.success,
                        "error": dr.error,
                        "reused": getattr(dr, 'reused', False)
                    })

            queue_event("done", {
                "status": "success",
                "nodes_to_install": nodes_to_install,
                "download_results": download_results
            })
        except Exception as e:
            queue_event("error", {"message": str(e)})

    # Start resolution in background
    resolution_task = asyncio.create_task(run_resolution())

    # Stream events until done
    try:
        done = False
        while not done:
            try:
                # Wait for event with timeout to allow checking task status
                event_type, data = await asyncio.wait_for(event_queue.get(), timeout=0.5)
                await send_event(event_type, data)
                if event_type in ("done", "error"):
                    done = True
            except asyncio.TimeoutError:
                # Check if resolution task failed unexpectedly
                if resolution_task.done():
                    exc = resolution_task.exception()
                    if exc:
                        await send_event("error", {"message": str(exc)})
                    done = True
    finally:
        if not resolution_task.done():
            resolution_task.cancel()
            try:
                await resolution_task
            except asyncio.CancelledError:
                pass

    return response


# =============================================================================
# Pending Downloads Endpoint (for async download queue)
# =============================================================================

@routes.get("/v2/comfygit/models/pending-downloads")
@requires_environment
async def get_pending_downloads(request: web.Request, env) -> web.Response:
    """Get all pending download intents across all workflows.

    Returns models that have download URLs but haven't been downloaded yet.
    Reads directly from pyproject.toml for reliability.
    Used by the frontend to populate the download queue on app startup.
    """
    pending_downloads = []

    try:
        # Read directly from pyproject.toml - more reliable than resolution flow
        all_workflows = env.pyproject.workflows.get_all_with_resolutions()

        for workflow_name, workflow_data in all_workflows.items():
            models = workflow_data.get("models", [])

            for model in models:
                # Check for unresolved models with sources (download URLs)
                if model.get("status") == "unresolved" and model.get("sources"):
                    sources = model.get("sources", [])
                    if sources:
                        pending_downloads.append({
                            "workflow": workflow_name,
                            "filename": model.get("filename", "unknown"),
                            "url": sources[0],  # Use first source URL
                            "target_path": model.get("relative_path"),
                            "size": 0  # Unknown until download starts
                        })

        return web.json_response({
            "pending_downloads": pending_downloads,
            "count": len(pending_downloads)
        })

    except Exception as e:
        return web.json_response({
            "error": str(e),
            "pending_downloads": [],
            "count": 0
        }, status=500)


# =============================================================================
# Model Download Endpoint (for async download queue)
# =============================================================================

# Track active downloads to prevent duplicates and allow reconnection
_active_downloads: dict[str, dict] = {}  # url -> {task, queues, result, cancelled, env, workflow, filename}


class DownloadCancelled(Exception):
    """Raised when download is cancelled by user."""
    pass


@routes.delete("/v2/comfygit/models/download")
@logged_operation("cancel download")
async def cancel_download(request: web.Request, env) -> web.Response:
    """Cancel an active download."""
    url = request.query.get("url")
    if not url:
        return web.json_response({"error": "Missing url parameter"}, status=400)

    if url not in _active_downloads:
        return web.json_response({"error": "No active download for this URL"}, status=404)

    # Set cancellation flag - progress callback will raise exception
    _active_downloads[url]["cancelled"] = True
    return web.json_response({"status": "cancelled"})


@routes.get("/v2/comfygit/models/download-stream")
@logged_operation("download model")
async def download_model_stream(request: web.Request, env) -> web.StreamResponse:
    """Download a model with progress via SSE, then update pyproject.toml.

    Uses core library's ModelDownloader for proper indexing and state management.
    Supports reconnection: if download is already in progress, client joins existing download.

    Query params:
        url: Download URL
        target_path: Where to save the file (relative to models dir)
        filename: Display name for the file
        workflow: Workflow name (for updating pyproject.toml)
    """
    url = request.query.get("url")
    target_path = request.query.get("target_path")
    filename = request.query.get("filename", "model.safetensors")
    workflow_name = request.query.get("workflow")

    if not url or not target_path:
        return web.json_response(
            {"error": "Missing url or target_path parameter"},
            status=400
        )

    # Set up SSE response
    response = web.StreamResponse(
        status=200,
        headers={
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no"
        }
    )
    await response.prepare(request)

    # Track if client is still connected
    client_connected = True

    async def send_event(event_type: str, data: dict) -> bool:
        """Send an SSE event. Returns False if client disconnected."""
        nonlocal client_connected
        if not client_connected:
            return False
        try:
            event_data = json.dumps({"type": event_type, **data})
            await response.write(f"data: {event_data}\n\n".encode())
            return True
        except (ConnectionResetError, BrokenPipeError):
            client_connected = False
            return False
        except Exception:
            client_connected = False
            return False

    # Check if this URL is already being downloaded
    if url in _active_downloads:
        # Join existing download
        active = _active_downloads[url]
        my_queue: asyncio.Queue = asyncio.Queue()
        active["queues"].append(my_queue)

        try:
            # Stream progress until download completes or client disconnects
            while not active["task"].done() and client_connected:
                try:
                    event_type, data = await asyncio.wait_for(my_queue.get(), timeout=0.5)
                    await send_event(event_type, data)
                except asyncio.TimeoutError:
                    continue

            # If download completed while we were watching, send final result
            if client_connected and active.get("result"):
                result = active["result"]
                if result.success and result.model:
                    await send_event("complete", {
                        "downloaded": result.model.file_size,
                        "total": result.model.file_size,
                        "hash": result.model.hash,
                        "path": result.model.relative_path
                    })
                else:
                    await send_event("error", {"message": result.error or "Download failed"})
        except Exception:
            client_connected = False
        finally:
            if my_queue in active.get("queues", []):
                active["queues"].remove(my_queue)

        return response

    # Start new download
    loop = asyncio.get_running_loop()
    active = {"queues": [], "result": None, "cancelled": False, "env": env, "workflow": workflow_name, "filename": filename}
    _active_downloads[url] = active

    def broadcast_progress(downloaded: int, total: int | None):
        """Broadcast progress to all connected clients. Raises if cancelled."""
        if active["cancelled"]:
            raise DownloadCancelled("Download cancelled by user")
        for q in active["queues"]:
            loop.call_soon_threadsafe(q.put_nowait, ("progress", {"downloaded": downloaded, "total": total or 0}))

    async def run_download():
        """Run download in thread pool."""
        from comfygit_core.services.model_downloader import DownloadRequest

        downloader = env.workflow_manager.downloader
        models_dir = downloader.models_dir
        full_target = models_dir / target_path

        request_obj = DownloadRequest(
            url=url,
            target_path=full_target,
            workflow_name=workflow_name
        )

        return await run_sync(downloader.download, request_obj, broadcast_progress)

    # Add our queue to subscribers
    my_queue: asyncio.Queue = asyncio.Queue()
    active["queues"].append(my_queue)

    try:
        # Start download
        download_task = asyncio.create_task(run_download())
        active["task"] = download_task

        # Stream progress until download completes or client disconnects
        while not download_task.done() and client_connected:
            try:
                event_type, data = await asyncio.wait_for(my_queue.get(), timeout=0.5)
                await send_event(event_type, data)
            except asyncio.TimeoutError:
                continue

        # Get result (may raise if cancelled)
        result = await download_task
        active["result"] = result

        # Send final result to THIS client directly (we've exited the queue reading loop)
        # Also broadcast to other subscribers who may have joined
        if result.success and result.model:
            complete_data = {
                "downloaded": result.model.file_size,
                "total": result.model.file_size,
                "hash": result.model.hash,
                "path": result.model.relative_path
            }
            # Send directly to this client
            await send_event("complete", complete_data)
            # Broadcast to other subscribers (not us - we already sent)
            for q in active["queues"]:
                if q is not my_queue:
                    loop.call_soon_threadsafe(q.put_nowait, ("complete", complete_data))
            # Finalize if any client is watching
            if active["queues"] and workflow_name:
                await _finalize_download(env, workflow_name, filename, result.model.hash)
        else:
            error_msg = result.error or "Download failed"
            # Send directly to this client
            await send_event("error", {"message": error_msg})
            # Broadcast to other subscribers
            for q in active["queues"]:
                if q is not my_queue:
                    loop.call_soon_threadsafe(q.put_nowait, ("error", {"message": error_msg}))

    except DownloadCancelled:
        # Download was cancelled - notify all subscribers
        for q in active.get("queues", []):
            loop.call_soon_threadsafe(q.put_nowait, ("error", {"message": "Download cancelled"}))
    except asyncio.CancelledError:
        client_connected = False
    except Exception as e:
        # Check if it's a wrapped DownloadCancelled
        if "cancelled" in str(e).lower():
            for q in active.get("queues", []):
                loop.call_soon_threadsafe(q.put_nowait, ("error", {"message": "Download cancelled"}))
        client_connected = False
    finally:
        # Clean up tracking
        if my_queue in active.get("queues", []):
            active["queues"].remove(my_queue)
        # Remove from active downloads when complete or cancelled
        if url in _active_downloads:
            task = active.get("task")
            if (not active.get("queues") and task and task.done()) or active.get("cancelled"):
                del _active_downloads[url]

    return response


async def _finalize_download(env, workflow_name: str, filename: str, model_hash: str):
    """Update pyproject.toml after successful download.

    Finds the workflow model by filename and updates it to resolved status.
    """
    from comfygit_core.models.manifest import ManifestModel

    models = env.pyproject.workflows.get_workflow_models(workflow_name)

    for model in models:
        if model.filename == filename and model.status == "unresolved" and model.sources:
            # Get model from repository
            resolved_model = env.workflow_manager.model_repository.get_model(model_hash)
            if not resolved_model:
                return  # Model not indexed yet - skip update

            # Create global table entry with download source preserved
            manifest_model = ManifestModel(
                hash=model_hash,
                filename=resolved_model.filename,
                relative_path=resolved_model.relative_path,
                category=model.category,
                size=resolved_model.file_size,
                sources=model.sources  # Preserve download URL
            )
            env.pyproject.models.add_model(manifest_model)

            # Update workflow model to resolved
            model.hash = model_hash
            model.status = "resolved"
            model.sources = []
            model.relative_path = None

            # Save changes
            env.pyproject.workflows.set_workflow_models(workflow_name, models)
            return
