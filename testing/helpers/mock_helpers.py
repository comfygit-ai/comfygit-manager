"""Helper utilities for mocking panel API components."""
from unittest.mock import Mock
from pathlib import Path


def create_mock_env_status(**overrides):
    """
    Create a mock EnvironmentStatus with sensible defaults.

    Args:
        **overrides: Fields to override in the default status

    Returns:
        Mock status object with nested structure
    """
    status = Mock()

    # Git status
    status.git = Mock()
    status.git.current_branch = overrides.get("current_branch", "main")
    status.git.has_changes = overrides.get("has_changes", False)
    status.git.has_other_changes = overrides.get("has_other_changes", False)
    status.git.nodes_added = overrides.get("nodes_added", [])
    status.git.nodes_removed = overrides.get("nodes_removed", [])
    status.git.workflow_changes = overrides.get("workflow_changes", {})
    status.git.dependencies_added = overrides.get("dependencies_added", [])

    # Workflow status
    status.workflow = Mock()
    status.workflow.sync_status = Mock()
    status.workflow.sync_status.new = overrides.get("new_workflows", set())
    status.workflow.sync_status.modified = overrides.get("modified_workflows", set())
    status.workflow.sync_status.deleted = overrides.get("deleted_workflows", set())
    status.workflow.sync_status.synced = overrides.get("synced_workflows", {"workflow1.json"})
    status.workflow.sync_status.total_count = overrides.get("total_workflows", 1)
    status.workflow.sync_status.has_changes = overrides.get("workflow_has_changes", False)
    status.workflow.is_commit_safe = overrides.get("is_commit_safe", True)
    status.workflow.workflows_with_issues = overrides.get("workflows_with_issues", [])
    status.workflow.analyzed_workflows = overrides.get("analyzed_workflows", [])

    # Comparison status
    status.comparison = Mock()
    status.comparison.is_synced = overrides.get("comparison_synced", True)
    status.comparison.missing_nodes = overrides.get("missing_nodes", set())
    status.comparison.extra_nodes = overrides.get("extra_nodes", set())
    status.comparison.version_mismatches = overrides.get("version_mismatches", [])

    # Top-level fields
    status.is_synced = overrides.get("is_synced", True)
    status.missing_models = overrides.get("missing_models", [])

    return status


def create_mock_environment(name="test-env", workspace_path="/tmp/test-workspace"):
    """
    Create a mock Environment object with common methods.

    Args:
        name: Environment name
        workspace_path: Path to workspace

    Returns:
        Mock Environment object
    """
    mock_env = Mock()
    mock_env.name = name

    # Mock workspace
    mock_workspace = Mock()
    mock_workspace.path = Path(workspace_path)
    mock_env.workspace = mock_workspace

    # Mock workflow manager
    mock_env.workflow_manager = Mock()

    # Common methods
    mock_env.status = Mock()
    mock_env.has_committable_changes = Mock(return_value=False)
    mock_env.execute_commit = Mock()
    mock_env.get_commit_history = Mock(return_value=[])
    mock_env.get_current_branch = Mock(return_value="main")
    mock_env.list_branches = Mock(return_value=["main"])

    return mock_env


def create_mock_workflow(name="workflow.json", has_issues=False, sync_state="synced"):
    """
    Create a mock workflow object.

    Args:
        name: Workflow filename
        has_issues: Whether workflow has issues
        sync_state: Sync state (synced, modified, new, deleted)

    Returns:
        Mock workflow object
    """
    mock_wf = Mock()
    mock_wf.name = name
    mock_wf.has_issues = has_issues
    mock_wf.sync_state = sync_state
    mock_wf.uninstalled_count = 0
    mock_wf.models_needing_path_sync_count = 0

    # Mock resolution
    mock_resolution = Mock()
    mock_resolution.nodes_uninstalled = []
    mock_resolution.models_resolved = []
    mock_wf.resolution = mock_resolution

    return mock_wf


def create_mock_commit(hash_val="abc123", message="Test commit"):
    """
    Create a mock git commit.

    Args:
        hash_val: Commit hash
        message: Commit message

    Returns:
        Dict representing a commit
    """
    return {
        "hash": hash_val,
        "message": message,
        "author": "test@test.com",
        "date": "2025-01-22T10:00:00Z"
    }


def create_mock_resolution(
    nodes_resolved=None,
    nodes_version_gated=None,
    nodes_uninstallable=None,
    nodes_unresolved=None,
    nodes_ambiguous=None,
    node_guidance=None,
    models_resolved=None,
    models_unresolved=None,
    models_ambiguous=None
):
    """
    Create a mock WorkflowResolution object.

    Args:
        nodes_resolved: List of resolved node objects
        nodes_version_gated: List of version-gated builtin nodes
        nodes_uninstallable: List of uninstallable node package candidates
        nodes_unresolved: List of unresolved node type strings
        nodes_ambiguous: List of lists of ambiguous node options
        node_guidance: Dict of node_type -> guidance string
        models_resolved: List of resolved model objects
        models_unresolved: List of unresolved model references
        models_ambiguous: List of lists of ambiguous model options

    Returns:
        Mock resolution object with iterable fields
    """
    resolution = Mock()
    resolution.nodes_resolved = nodes_resolved or []
    resolution.nodes_version_gated = nodes_version_gated or []
    resolution.nodes_uninstallable = nodes_uninstallable or []
    resolution.nodes_unresolved = nodes_unresolved or []
    resolution.nodes_ambiguous = nodes_ambiguous or []
    resolution.node_guidance = node_guidance or {}
    resolution.models_resolved = models_resolved or []
    resolution.models_unresolved = models_unresolved or []
    resolution.models_ambiguous = models_ambiguous or []
    return resolution


def create_mock_resolved_node(package_id, package_data=None):
    """
    Create a mock resolved node.

    Args:
        package_id: Package identifier
        package_data: Optional package metadata

    Returns:
        Mock resolved node object
    """
    node = Mock()
    node.package_id = package_id
    node.package_data = package_data
    if package_data is None:
        node.package_data = Mock()
        node.package_data.repository = f"https://github.com/example/{package_id}"
        node.package_data.description = f"Mock package {package_id}"
    return node


def create_mock_resolved_model(reference, resolved_model=None, model_source=None, is_optional=False):
    """
    Create a mock resolved model.

    Args:
        reference: Model reference (mock with widget_value, node_type, node_id)
        resolved_model: Resolved model object (if found locally)
        model_source: Download URL (if downloadable)
        is_optional: Whether model is optional

    Returns:
        Mock resolved model object
    """
    model = Mock()
    model.reference = reference
    model.resolved_model = resolved_model
    model.model_source = model_source
    model.is_optional = is_optional
    model.needs_path_sync = False
    return model
