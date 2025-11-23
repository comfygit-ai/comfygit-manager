"""Convert core library types to JSON-serializable dicts."""


def serialize_workflow_details(workflow, name: str) -> dict:
    """Serialize workflow details with models and nodes."""
    models_map = {}

    def determine_model_status(resolved_model):
        if resolved_model.resolved_model is not None:
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

    # Build resolution lookup map
    resolution_map = {}
    for resolved in workflow.resolution.models_resolved:
        resolution_map[resolved.reference.widget_value] = resolved

    # Process all model references
    for model_ref in workflow.dependencies.found_models:
        filename = model_ref.widget_value
        resolved = resolution_map.get(filename)

        if resolved:
            status = determine_model_status(resolved)
            model_hash = resolved.resolved_model.hash if resolved.resolved_model else ""
            model_type = resolved.resolved_model.category if resolved.resolved_model else "unknown"
            model_size = resolved.resolved_model.file_size if resolved.resolved_model else 0
            importance = "required" if not resolved.is_optional else "optional"
        else:
            status = "missing"
            model_hash = ""
            model_type = "unknown"
            model_size = 0
            importance = "required"

        key = model_hash if model_hash else f"unhashed_{filename}"

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


def serialize_environment_status(status, env_name: str) -> dict:
    """
    Convert EnvironmentStatus to JSON dict.

    Returns structure matching current API.
    """
    workflow_sync = status.workflow.sync_status

    # Serialize analyzed workflows with full resolution state
    analyzed = []
    for wf in status.workflow.analyzed_workflows:
        analyzed.append({
            "name": wf.name,
            "sync_state": wf.sync_state,
            "status": "broken" if wf.has_issues else wf.sync_state,
            "has_issues": wf.has_issues,
            "uninstalled_nodes": len(wf.uninstalled_nodes),
            "unresolved_nodes_count": len(wf.resolution.nodes_unresolved),
            "unresolved_models_count": len(wf.resolution.models_unresolved),
            "ambiguous_models_count": len(wf.resolution.models_ambiguous),
            "ambiguous_nodes_count": len(wf.resolution.nodes_ambiguous),
            "issue_summary": wf.issue_summary,
            "node_count": wf.node_count,
            "model_count": wf.model_count
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
        },
        "missing_models_count": len(status.missing_models),
    }
