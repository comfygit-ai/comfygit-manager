"""Unit tests for serializer functions."""
import pytest
from unittest.mock import Mock
import sys
from pathlib import Path

# Add server directory to path
server_dir = Path(__file__).parent.parent.parent / "server"
if str(server_dir) not in sys.path:
    sys.path.insert(0, str(server_dir))

from cgm_core.serializers import serialize_environment_status, serialize_workflow_details  # noqa: E402


@pytest.mark.unit
class TestSerializeEnvironmentStatus:
    """Unit tests for serialize_environment_status function."""

    def test_workflow_changes_empty_dict(self):
        """Should serialize workflow_changes as false when dict is empty."""
        # Arrange: Create mock status with empty workflow_changes
        status = Mock()
        status.is_synced = True

        status.git = Mock()
        status.git.current_branch = "main"
        status.git.has_changes = False
        status.git.has_other_changes = False
        status.git.nodes_added = []
        status.git.nodes_removed = []
        status.git.workflow_changes = {}  # Empty dict

        status.workflow = Mock()
        status.workflow.sync_status = Mock()
        status.workflow.sync_status.new = set()
        status.workflow.sync_status.modified = set()
        status.workflow.sync_status.deleted = set()
        status.workflow.sync_status.synced = {"test.json"}
        status.workflow.sync_status.total_count = 1
        status.workflow.analyzed_workflows = []  # Add empty analyzed workflows

        status.comparison = Mock()
        status.comparison.is_synced = True
        status.comparison.missing_nodes = set()
        status.comparison.extra_nodes = set()
        status.comparison.disabled_nodes = []
        status.comparison.version_mismatches = []
        status.comparison.packages_in_sync = True

        status.missing_models = []

        # Act
        result = serialize_environment_status(status, "test-env")

        # Assert
        assert result["git_changes"]["workflow_changes"] is False
        assert result["git_changes"]["workflow_changes_detail"] == {}

    def test_workflow_changes_with_modifications(self):
        """Should serialize workflow_changes as true with detail dict when changes exist."""
        # Arrange: Create mock status with workflow changes
        status = Mock()
        status.is_synced = True

        status.git = Mock()
        status.git.current_branch = "main"
        status.git.has_changes = True
        status.git.has_other_changes = False
        status.git.nodes_added = []
        status.git.nodes_removed = []
        status.git.workflow_changes = {
            "api.json": "modified",
            "new.json": "added",
            "old.json": "deleted"
        }

        status.workflow = Mock()
        status.workflow.sync_status = Mock()
        status.workflow.sync_status.new = {"new.json"}
        status.workflow.sync_status.modified = {"api.json"}
        status.workflow.sync_status.deleted = {"old.json"}
        status.workflow.sync_status.synced = set()
        status.workflow.sync_status.total_count = 3
        status.workflow.analyzed_workflows = []

        status.comparison = Mock()
        status.comparison.is_synced = True
        status.comparison.missing_nodes = set()
        status.comparison.extra_nodes = set()
        status.comparison.disabled_nodes = []
        status.comparison.version_mismatches = []
        status.comparison.packages_in_sync = True

        status.missing_models = []

        # Act
        result = serialize_environment_status(status, "test-env")

        # Assert
        assert result["git_changes"]["workflow_changes"] is True
        assert result["git_changes"]["workflow_changes_detail"] == {
            "api.json": "modified",
            "new.json": "added",
            "old.json": "deleted"
        }
        assert len(result["git_changes"]["workflow_changes_detail"]) == 3

    def test_workflow_changes_preserves_change_types(self):
        """Should preserve change type strings in workflow_changes_detail."""
        # Arrange
        status = Mock()
        status.is_synced = True

        status.git = Mock()
        status.git.current_branch = "main"
        status.git.has_changes = True
        status.git.has_other_changes = False
        status.git.nodes_added = []
        status.git.nodes_removed = []
        status.git.workflow_changes = {
            "added.json": "added",
            "modified.json": "modified",
            "deleted.json": "deleted"
        }

        status.workflow = Mock()
        status.workflow.sync_status = Mock()
        status.workflow.sync_status.new = set()
        status.workflow.sync_status.modified = set()
        status.workflow.sync_status.deleted = set()
        status.workflow.sync_status.synced = set()
        status.workflow.sync_status.total_count = 0
        status.workflow.analyzed_workflows = []

        status.comparison = Mock()
        status.comparison.is_synced = True
        status.comparison.missing_nodes = set()
        status.comparison.extra_nodes = set()
        status.comparison.disabled_nodes = []
        status.comparison.version_mismatches = []
        status.comparison.packages_in_sync = True

        status.missing_models = []

        # Act
        result = serialize_environment_status(status, "test-env")

        # Assert
        detail = result["git_changes"]["workflow_changes_detail"]
        assert detail["added.json"] == "added"
        assert detail["modified.json"] == "modified"
        assert detail["deleted.json"] == "deleted"

    def test_nodes_serialization_with_dict_structure(self):
        """Should handle nodes_added/removed as list of dicts."""
        # Arrange
        status = Mock()
        status.is_synced = True

        status.git = Mock()
        status.git.current_branch = "main"
        status.git.has_changes = True
        status.git.has_other_changes = False
        status.git.nodes_added = [
            {"name": "node1", "is_development": False},
            {"name": "node2", "is_development": True}
        ]
        status.git.nodes_removed = [
            {"name": "old-node", "is_development": False}
        ]
        status.git.workflow_changes = {}

        status.workflow = Mock()
        status.workflow.sync_status = Mock()
        status.workflow.sync_status.new = set()
        status.workflow.sync_status.modified = set()
        status.workflow.sync_status.deleted = set()
        status.workflow.sync_status.synced = set()
        status.workflow.sync_status.total_count = 0
        status.workflow.analyzed_workflows = []

        status.comparison = Mock()
        status.comparison.is_synced = True
        status.comparison.missing_nodes = set()
        status.comparison.extra_nodes = set()
        status.comparison.disabled_nodes = []
        status.comparison.version_mismatches = []
        status.comparison.packages_in_sync = True

        status.missing_models = []

        # Act
        result = serialize_environment_status(status, "test-env")

        # Assert: Should extract just the name strings
        assert result["git_changes"]["nodes_added"] == ["node1", "node2"]
        assert result["git_changes"]["nodes_removed"] == ["old-node"]

    def test_analyzed_workflows_included_in_response(self):
        """Should include analyzed_workflows with full resolution state."""
        # Arrange: Create mock with analyzed workflows
        status = Mock()
        status.is_synced = False

        status.git = Mock()
        status.git.current_branch = "main"
        status.git.has_changes = True
        status.git.has_other_changes = False
        status.git.nodes_added = []
        status.git.nodes_removed = []
        status.git.workflow_changes = {}

        # Create mock workflow analysis with issues
        wf_broken = Mock()
        wf_broken.name = "broken.json"
        wf_broken.sync_state = "synced"
        wf_broken.has_issues = True
        wf_broken.uninstalled_nodes = ["node-pkg-1"]
        wf_broken.issue_summary = "2 unresolved nodes, 1 missing model"
        wf_broken.node_count = 10
        wf_broken.model_count = 3
        wf_broken.resolution = Mock()
        wf_broken.resolution.nodes_unresolved = [Mock(), Mock()]  # 2 unresolved
        vg_1 = Mock()
        vg_1.guidance = "Requires ComfyUI >= 0.3.10"
        vg_1.reference = Mock()
        vg_1.reference.node_type = "SetNode"
        vg_2 = Mock()
        vg_2.guidance = "Requires ComfyUI >= 0.3.10"  # duplicate guidance should be deduped
        vg_2.reference = Mock()
        vg_2.reference.node_type = "SetNode"
        vg_3 = Mock()
        vg_3.guidance = "Requires ComfyUI >= 0.3.12"
        vg_3.reference = Mock()
        vg_3.reference.node_type = "AnotherNode"
        wf_broken.resolution.nodes_version_gated = [vg_1, vg_2, vg_3]  # 3 version-gated
        wf_broken.resolution.nodes_uninstallable = [Mock()]  # 1 uninstallable
        wf_broken.resolution.models_unresolved = [Mock()]  # 1 unresolved
        wf_broken.resolution.models_ambiguous = []
        wf_broken.resolution.nodes_ambiguous = []
        wf_broken.resolution.node_guidance = {}

        # Create mock workflow analysis without issues
        wf_healthy = Mock()
        wf_healthy.name = "healthy.json"
        wf_healthy.sync_state = "new"
        wf_healthy.has_issues = False
        wf_healthy.uninstalled_nodes = []
        wf_healthy.issue_summary = "No issues"
        wf_healthy.node_count = 5
        wf_healthy.model_count = 2
        wf_healthy.resolution = Mock()
        wf_healthy.resolution.nodes_unresolved = []
        wf_healthy.resolution.nodes_version_gated = []
        wf_healthy.resolution.nodes_uninstallable = []
        wf_healthy.resolution.models_unresolved = []
        wf_healthy.resolution.models_ambiguous = []
        wf_healthy.resolution.nodes_ambiguous = []
        wf_healthy.resolution.node_guidance = {}

        status.workflow = Mock()
        status.workflow.sync_status = Mock()
        status.workflow.sync_status.new = {"healthy.json"}
        status.workflow.sync_status.modified = set()
        status.workflow.sync_status.deleted = set()
        status.workflow.sync_status.synced = {"broken.json"}
        status.workflow.sync_status.total_count = 2
        status.workflow.analyzed_workflows = [wf_broken, wf_healthy]

        status.comparison = Mock()
        status.comparison.is_synced = True
        status.comparison.missing_nodes = set()
        status.comparison.extra_nodes = set()
        status.comparison.disabled_nodes = []
        status.comparison.version_mismatches = []
        status.comparison.packages_in_sync = True

        status.missing_models = []

        # Act
        result = serialize_environment_status(status, "test-env")

        # Assert: analyzed_workflows should be present
        assert "workflows" in result
        assert "analyzed" in result["workflows"]
        assert len(result["workflows"]["analyzed"]) == 2

        # Check broken workflow details
        broken = next(w for w in result["workflows"]["analyzed"] if w["name"] == "broken.json")
        assert broken["sync_state"] == "synced"
        assert broken["status"] == "broken"  # has_issues overrides sync_state
        assert broken["has_issues"] is True
        assert broken["uninstalled_nodes"] == 1
        assert broken["unresolved_nodes_count"] == 2
        assert broken["nodes_version_gated_count"] == 3
        assert broken["nodes_uninstallable_count"] == 1
        assert broken["version_gated_guidance"] == [
            "Requires ComfyUI >= 0.3.10",
            "Requires ComfyUI >= 0.3.12",
        ]
        assert broken["unresolved_models_count"] == 1
        assert broken["ambiguous_models_count"] == 0
        assert broken["ambiguous_nodes_count"] == 0
        assert broken["issue_summary"] == "2 unresolved nodes, 1 missing model"
        assert broken["node_count"] == 10
        assert broken["model_count"] == 3

        # Check healthy workflow details
        healthy = next(w for w in result["workflows"]["analyzed"] if w["name"] == "healthy.json")
        assert healthy["sync_state"] == "new"
        assert healthy["status"] == "new"  # No issues, so status = sync_state
        assert healthy["has_issues"] is False
        assert healthy["uninstalled_nodes"] == 0
        assert healthy["unresolved_nodes_count"] == 0
        assert healthy["nodes_version_gated_count"] == 0
        assert healthy["nodes_uninstallable_count"] == 0
        assert healthy["version_gated_guidance"] == []
        assert healthy["unresolved_models_count"] == 0

    def test_analyzed_workflows_with_ambiguous_matches(self):
        """Should include counts for ambiguous node/model matches."""
        # Arrange
        status = Mock()
        status.is_synced = False

        status.git = Mock()
        status.git.current_branch = "main"
        status.git.has_changes = False
        status.git.has_other_changes = False
        status.git.nodes_added = []
        status.git.nodes_removed = []
        status.git.workflow_changes = {}

        wf = Mock()
        wf.name = "ambiguous.json"
        wf.sync_state = "synced"
        wf.has_issues = True
        wf.uninstalled_nodes = []
        wf.issue_summary = "2 ambiguous models, 1 ambiguous node"
        wf.node_count = 8
        wf.model_count = 4
        wf.resolution = Mock()
        wf.resolution.nodes_unresolved = []
        wf.resolution.nodes_version_gated = []
        wf.resolution.nodes_uninstallable = []
        wf.resolution.models_unresolved = []
        wf.resolution.models_ambiguous = [[Mock(), Mock()], [Mock(), Mock()]]  # 2 ambiguous
        wf.resolution.nodes_ambiguous = [[Mock(), Mock()]]  # 1 ambiguous

        status.workflow = Mock()
        status.workflow.sync_status = Mock()
        status.workflow.sync_status.new = set()
        status.workflow.sync_status.modified = set()
        status.workflow.sync_status.deleted = set()
        status.workflow.sync_status.synced = {"ambiguous.json"}
        status.workflow.sync_status.total_count = 1
        status.workflow.analyzed_workflows = [wf]

        status.comparison = Mock()
        status.comparison.is_synced = True
        status.comparison.missing_nodes = set()
        status.comparison.extra_nodes = set()
        status.comparison.disabled_nodes = []
        status.comparison.version_mismatches = []
        status.comparison.packages_in_sync = True

        status.missing_models = []

        # Act
        result = serialize_environment_status(status, "test-env")

        # Assert
        analyzed = result["workflows"]["analyzed"][0]
        assert analyzed["status"] == "broken"
        assert analyzed["ambiguous_models_count"] == 2
        assert analyzed["ambiguous_nodes_count"] == 1
        assert analyzed["unresolved_models_count"] == 0
        assert analyzed["unresolved_nodes_count"] == 0
        assert analyzed["nodes_version_gated_count"] == 0
        assert analyzed["nodes_uninstallable_count"] == 0


@pytest.mark.unit
class TestSerializeWorkflowDetails:
    """Unit tests for serialize_workflow_details node status serialization."""

    def test_includes_version_gated_and_uninstallable_nodes(self):
        """Workflow details should include blocked node entries with guidance text."""
        workflow = Mock()
        workflow.has_issues = True
        workflow.sync_state = "synced"
        workflow.uninstalled_nodes = []
        workflow.dependencies = Mock()
        workflow.dependencies.found_models = []
        workflow.resolution = Mock()
        workflow.resolution.models_resolved = []
        workflow.resolution.nodes_resolved = []
        workflow.resolution.node_guidance = {}

        version_gated = Mock()
        version_gated.reference = Mock()
        version_gated.reference.node_type = "SetNode"
        version_gated.guidance = "Requires ComfyUI >= 0.3.10"

        uninstallable = Mock()
        uninstallable.reference = Mock()
        uninstallable.reference.node_type = "LegacyNode"
        uninstallable.package_id = "legacy-node-pack"
        uninstallable.package_data = Mock()
        uninstallable.package_data.repository = "https://github.com/example/legacy-node-pack"
        uninstallable.package_data.versions = {
            "1.2.0": {},
            "1.10.0": {},
            "1.3.0": {},
        }
        uninstallable.guidance = "No compatible package version for this ComfyUI"

        workflow.resolution.nodes_version_gated = [version_gated]
        workflow.resolution.nodes_uninstallable = [uninstallable]

        result = serialize_workflow_details(workflow, "test.json")

        nodes_by_status = {node["status"]: node for node in result["nodes"]}
        assert "version_gated" in nodes_by_status
        assert nodes_by_status["version_gated"]["name"] == "SetNode"
        assert nodes_by_status["version_gated"]["guidance"] == "Requires ComfyUI >= 0.3.10"

        assert "uninstallable" in nodes_by_status
        assert nodes_by_status["uninstallable"]["name"] == "LegacyNode"
        assert nodes_by_status["uninstallable"]["guidance"] == "No compatible package version for this ComfyUI"
        assert nodes_by_status["uninstallable"]["package_id"] == "legacy-node-pack"
        assert nodes_by_status["uninstallable"]["repository"] == "https://github.com/example/legacy-node-pack"
        assert nodes_by_status["uninstallable"]["latest_version"] == "1.10.0"

    def test_uninstallable_node_metadata_null_safe(self):
        """Workflow details should return null uninstallable metadata when package data is missing."""
        workflow = Mock()
        workflow.has_issues = True
        workflow.sync_state = "synced"
        workflow.uninstalled_nodes = []
        workflow.dependencies = Mock()
        workflow.dependencies.found_models = []
        workflow.resolution = Mock()
        workflow.resolution.models_resolved = []
        workflow.resolution.nodes_resolved = []
        workflow.resolution.node_guidance = {}
        workflow.resolution.nodes_version_gated = []

        uninstallable = Mock()
        uninstallable.reference = Mock()
        uninstallable.reference.node_type = "LegacyNode"
        uninstallable.package_id = None
        uninstallable.package_data = None
        uninstallable.guidance = None
        workflow.resolution.nodes_uninstallable = [uninstallable]

        result = serialize_workflow_details(workflow, "test.json")
        uninstallable_node = next(node for node in result["nodes"] if node["status"] == "uninstallable")

        assert uninstallable_node["package_id"] is None
        assert uninstallable_node["repository"] is None
        assert uninstallable_node["latest_version"] is None
