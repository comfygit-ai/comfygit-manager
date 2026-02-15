"""Convert core library types to JSON-serializable dicts."""


def _safe_list(value) -> list:
    """Safely convert value to list, handling None and non-iterables (like Mock objects)."""
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
    if isinstance(value, str):
        return value
    return None


def serialize_workflow_details(
    workflow,
    name: str,
    criticality_map: dict | None = None,
    available_models: set | None = None
) -> dict:
    """Serialize workflow details with models and nodes.

    Args:
        workflow: Analyzed workflow object
        name: Workflow name
        criticality_map: Optional dict mapping filename -> criticality from pyproject
        available_models: Optional set of filenames that exist in the model index
    """
    models_map = {}
    criticality_map = criticality_map or {}
    available_models = available_models or set()

    def determine_model_status(resolved_model):
        if resolved_model.resolved_model is not None:
            # Category mismatch is blocking - takes precedence over path_mismatch
            has_category_mismatch = getattr(resolved_model, 'has_category_mismatch', False)
            if has_category_mismatch is True:  # Explicit check for True, not truthy (handles Mock objects)
                return "category_mismatch"
            if resolved_model.needs_path_sync:
                return "path_mismatch"
            return "available"
        elif resolved_model.model_source is not None:
            return "downloadable"
        else:
            return "missing"

    def get_importance_priority(importance):
        priorities = {"required": 0, "flexible": 1, "optional": 2}
        return priorities.get(importance, 2)

    def get_filename_from_widget_value(widget_value: str) -> str:
        """Extract filename from widget_value which may include subdirectory path."""
        # widget_value can be "checkpoints/model.safetensors" or just "model.safetensors"
        return widget_value.split("/")[-1] if "/" in widget_value else widget_value

    # Build resolution lookup map
    resolution_map = {}
    for resolved in workflow.resolution.models_resolved:
        resolution_map[resolved.reference.widget_value] = resolved

    # Process all model references
    for model_ref in workflow.dependencies.found_models:
        filename = model_ref.widget_value
        resolved = resolution_map.get(filename)

        # Get criticality from pyproject (try both full path and basename)
        base_filename = get_filename_from_widget_value(filename)
        importance = criticality_map.get(filename) or criticality_map.get(base_filename) or "required"

        # Check if model is available in model index (ground truth for file existence)
        is_in_index = base_filename in available_models or filename in available_models

        if resolved:
            status = determine_model_status(resolved)
            model_hash = resolved.resolved_model.hash if resolved.resolved_model else ""
            model_type = resolved.resolved_model.category if resolved.resolved_model else "unknown"
            model_size = resolved.resolved_model.file_size if resolved.resolved_model else 0
            # Override with "optional" only if is_optional is True and we don't have pyproject data
            if resolved.is_optional and importance == "required":
                importance = "optional"
            # If resolution says "missing" but model is actually in index, override
            if status == "missing" and is_in_index:
                status = "available"
        else:
            # Model not in resolution - use index as source of truth
            status = "available" if is_in_index else "missing"
            model_hash = ""
            model_type = "unknown"
            model_size = 0

        key = model_hash if model_hash else f"unhashed_{filename}"

        if key not in models_map:
            # Get full file path for "open file location" functionality
            file_path = None
            if resolved and resolved.resolved_model:
                base_dir = getattr(resolved.resolved_model, 'base_directory', None)
                rel_path = getattr(resolved.resolved_model, 'relative_path', None)
                if base_dir and rel_path and isinstance(base_dir, str) and isinstance(rel_path, str):
                    from pathlib import Path
                    file_path = str(Path(base_dir) / rel_path)

            models_map[key] = {
                "filename": filename,
                "hash": model_hash,
                "type": model_type,
                "size": model_size,
                "status": status,
                "used_in_workflows": [name],
                "importance": importance,
                "loaded_by": [],
                "file_path": file_path,
                # Category mismatch details for actionable UI
                "has_category_mismatch": getattr(resolved, 'has_category_mismatch', False) is True if resolved else False,
                "expected_categories": _safe_list(getattr(resolved, 'expected_categories', None)) if resolved else [],
                "actual_category": _safe_str(getattr(resolved, 'actual_category', None)) if resolved else None,
            }

        node_ref = {
            "node_type": model_ref.node_type,
            "node_id": model_ref.node_id
        }

        if node_ref not in models_map[key]["loaded_by"]:
            models_map[key]["loaded_by"].append(node_ref)

        current_importance = models_map[key]["importance"]
        if get_importance_priority(importance) < get_importance_priority(current_importance):
            models_map[key]["importance"] = importance

    models = list(models_map.values())

    # Transform nodes
    nodes = []
    seen_packages = set()
    uninstalled_set = set(workflow.uninstalled_nodes)

    for node in workflow.resolution.nodes_resolved:
        if node.package_id and node.package_id not in seen_packages:
            seen_packages.add(node.package_id)
            nodes.append({
                "name": node.package_id,
                "version": None,
                "status": "missing" if node.package_id in uninstalled_set else "installed"
            })

    for package_id in workflow.uninstalled_nodes:
        if package_id not in seen_packages:
            nodes.append({
                "name": package_id,
                "version": None,
                "status": "missing"
            })

    return {
        "name": name,
        "path": f"workflows/{name}",
        "status": "broken" if workflow.has_issues else workflow.sync_state,
        "models": models,
        "nodes": nodes
    }


def serialize_environment_status(status, env_name: str, env=None) -> dict:
    """
    Convert EnvironmentStatus to JSON dict.

    Returns structure matching current API.

    Args:
        status: EnvironmentStatus from core
        env_name: Name of the environment
        env: Optional Environment object for additional checks
    """
    workflow_sync = status.workflow.sync_status

    # Check for legacy ComfyUI-Manager (competing manager)
    has_legacy_manager = False
    if env and hasattr(env, 'custom_nodes_path'):
        legacy_manager_path = env.custom_nodes_path / "ComfyUI-Manager"
        has_legacy_manager = legacy_manager_path.exists()

    # Serialize analyzed workflows with full resolution state
    analyzed = []
    for wf in status.workflow.analyzed_workflows:
        raw_version_gated = getattr(wf.resolution, "nodes_version_gated", None)
        raw_uninstallable = getattr(wf.resolution, "nodes_uninstallable", None)
        version_gated_count = len(raw_version_gated) if isinstance(raw_version_gated, (list, tuple, set)) else 0
        uninstallable_count = len(raw_uninstallable) if isinstance(raw_uninstallable, (list, tuple, set)) else 0
        analyzed.append({
            "name": wf.name,
            "sync_state": wf.sync_state,
            "status": "broken" if wf.has_issues else wf.sync_state,
            "has_issues": wf.has_issues,
            "has_path_sync_issues": wf.has_path_sync_issues,
            "uninstalled_nodes": len(wf.uninstalled_nodes),
            "unresolved_nodes_count": len(wf.resolution.nodes_unresolved),
            "nodes_version_gated_count": version_gated_count,
            "nodes_uninstallable_count": uninstallable_count,
            "unresolved_models_count": len(wf.resolution.models_unresolved),
            "ambiguous_models_count": len(wf.resolution.models_ambiguous),
            "ambiguous_nodes_count": len(wf.resolution.nodes_ambiguous),
            "models_needing_path_sync_count": wf.models_needing_path_sync_count,
            "pending_downloads_count": wf.download_intents_count,
            "issue_summary": wf.issue_summary,  # Use core's property directly
            "node_count": wf.node_count,
            "model_count": wf.model_count,
            # Category mismatch (blocking issue)
            "has_category_mismatch_issues": getattr(wf, 'has_category_mismatch_issues', False),
            "models_with_category_mismatch_count": getattr(wf, 'models_with_category_mismatch_count', 0),
        })

    return {
        "environment": env_name,
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
            "analyzed": analyzed,
        },
        "git_changes": {
            "nodes_added": [
                n.get("name", n) if isinstance(n, dict) else str(n)
                for n in status.git.nodes_added
            ],
            "nodes_removed": [
                n.get("name", n) if isinstance(n, dict) else str(n)
                for n in status.git.nodes_removed
            ],
            "workflow_changes": bool(status.git.workflow_changes),
            "workflow_changes_detail": status.git.workflow_changes,
            "has_other_changes": status.git.has_other_changes,
        },
        "comparison": {
            "is_synced": status.comparison.is_synced,
            "missing_nodes": list(status.comparison.missing_nodes),
            "extra_nodes": list(status.comparison.extra_nodes),
            "disabled_nodes": list(status.comparison.disabled_nodes),
            "version_mismatches": status.comparison.version_mismatches,
            "packages_in_sync": status.comparison.packages_in_sync,
        },
        "missing_models_count": len(status.missing_models),
        "has_legacy_manager": has_legacy_manager,
    }
