"""Integration tests for node-related panel endpoints."""
import pytest
from unittest.mock import Mock
import sys
from pathlib import Path

# Add helpers to path
helpers_dir = Path(__file__).parent.parent.parent / "helpers"
if str(helpers_dir) not in sys.path:
    sys.path.insert(0, str(helpers_dir))



def create_mock_node_info(
    name,
    registry_id=None,
    source="registry",
    version="1.0.0",
    repository=None
):
    """Create a mock NodeInfo object."""
    node = Mock()
    node.name = name
    node.registry_id = registry_id or name
    node.source = source
    node.version = version
    node.repository = repository or f"https://github.com/example/{name}"
    return node


@pytest.mark.integration
class TestGetNodesEndpoint:
    """GET /v2/comfygit/nodes - List all nodes (tracked, installed, untracked)."""

    async def test_success_with_installed_nodes(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return installed nodes from list_nodes()."""
        # Setup: Nodes installed on filesystem and tracked in manifest
        mock_node1 = create_mock_node_info("rgthree-comfy", registry_id="rgthree-comfy")
        mock_node2 = create_mock_node_info("comfyui-manager", source="git", version="abc1234")

        mock_environment.list_nodes.return_value = [mock_node1, mock_node2]
        mock_env_status.comparison.missing_nodes = set()
        mock_env_status.comparison.extra_nodes = set()
        mock_env_status.workflow.analyzed_workflows = []
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/nodes")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert "nodes" in data
        assert data["total_count"] == 2
        assert data["installed_count"] == 2
        assert data["missing_count"] == 0
        assert data["untracked_count"] == 0

        # Check node structure
        node = next((n for n in data["nodes"] if n["name"] == "rgthree-comfy"), None)
        assert node is not None
        assert node["installed"] is True
        assert node["tracked"] is True
        assert node["source"] == "registry"
        assert node["version"] == "1.0.0"

    async def test_success_with_missing_nodes(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return missing nodes from comparison.missing_nodes."""
        # Setup: Nodes tracked in manifest but not installed
        mock_environment.list_nodes.return_value = []
        mock_env_status.comparison.missing_nodes = {"missing-node-1", "missing-node-2"}
        mock_env_status.comparison.extra_nodes = set()
        mock_env_status.workflow.analyzed_workflows = []
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/nodes")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["total_count"] == 2
        assert data["installed_count"] == 0
        assert data["missing_count"] == 2
        assert data["untracked_count"] == 0

        # Check missing node structure
        node = next((n for n in data["nodes"] if n["name"] == "missing-node-1"), None)
        assert node is not None
        assert node["installed"] is False
        assert node["tracked"] is True  # In manifest but not installed
        assert node["source"] == "unknown"

    async def test_success_with_untracked_nodes(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return untracked nodes from comparison.extra_nodes."""
        # Setup: Nodes on filesystem but NOT in manifest (like symlinked dev node)
        mock_environment.list_nodes.return_value = []
        mock_env_status.comparison.missing_nodes = set()
        mock_env_status.comparison.extra_nodes = {"comfygit-manager", "my-dev-node"}
        mock_env_status.workflow.analyzed_workflows = []
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/nodes")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["total_count"] == 2
        assert data["installed_count"] == 0
        assert data["missing_count"] == 0
        assert data["untracked_count"] == 2

        # Check untracked node structure
        node = next((n for n in data["nodes"] if n["name"] == "comfygit-manager"), None)
        assert node is not None
        assert node["installed"] is True  # On filesystem
        assert node["tracked"] is False  # NOT in manifest
        assert node["source"] == "untracked"

    async def test_success_all_three_categories(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should correctly categorize installed, missing, and untracked nodes."""
        # Setup: Mix of all categories
        mock_node = create_mock_node_info("tracked-installed")
        mock_environment.list_nodes.return_value = [mock_node]
        mock_env_status.comparison.missing_nodes = {"tracked-missing"}
        mock_env_status.comparison.extra_nodes = {"untracked-extra"}
        mock_env_status.workflow.analyzed_workflows = []
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/nodes")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["total_count"] == 3
        assert data["installed_count"] == 1
        assert data["missing_count"] == 1
        assert data["untracked_count"] == 1

    async def test_success_with_workflow_usage(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should include used_in_workflows from workflow analysis."""
        # Setup: Node used in workflows
        mock_node = create_mock_node_info("rgthree-comfy")
        mock_environment.list_nodes.return_value = [mock_node]

        # Mock workflow that uses this node
        mock_wf = Mock()
        mock_wf.name = "my_workflow"
        mock_resolved_node = Mock()
        mock_resolved_node.package_id = "rgthree-comfy"
        mock_wf.resolution = Mock()
        mock_wf.resolution.nodes_resolved = [mock_resolved_node]

        mock_env_status.comparison.missing_nodes = set()
        mock_env_status.comparison.extra_nodes = set()
        mock_env_status.workflow.analyzed_workflows = [mock_wf]
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/nodes")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        node = next((n for n in data["nodes"] if n["name"] == "rgthree-comfy"), None)
        assert node is not None
        assert "my_workflow" in node["used_in_workflows"]

    async def test_success_with_blocked_nodes(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should include blocked nodes from version-gated/uninstallable resolution states."""
        mock_environment.list_nodes.return_value = []
        mock_env_status.comparison.missing_nodes = set()
        mock_env_status.comparison.extra_nodes = set()

        mock_version_gated = Mock()
        mock_version_gated.type = "SetNode"

        mock_uninstallable = Mock()
        mock_uninstallable.node_type = "GetNode"
        mock_uninstallable.package_id = "kj-nodes"
        mock_uninstallable.package_data = Mock()
        mock_uninstallable.package_data.repository = "https://github.com/kijai/ComfyUI-KJNodes"

        mock_uninstallable_no_repo = Mock()
        mock_uninstallable_no_repo.node_type = "LegacyNode"
        mock_uninstallable_no_repo.package_id = "legacy-pack"
        mock_uninstallable_no_repo.package_data = None

        mock_wf = Mock()
        mock_wf.name = "workflow.json"
        mock_wf.resolution = Mock()
        mock_wf.resolution.nodes_resolved = []
        mock_wf.resolution.nodes_version_gated = [mock_version_gated]
        mock_wf.resolution.nodes_uninstallable = [mock_uninstallable, mock_uninstallable_no_repo]
        mock_wf.resolution.node_guidance = {
            "SetNode": "Upgrade ComfyUI to >= v0.3.18",
            "GetNode": "No compatible package version for your current environment",
            "LegacyNode": "No compatible package version for your current environment",
        }
        mock_env_status.workflow.analyzed_workflows = [mock_wf]
        mock_environment.status.return_value = mock_env_status

        resp = await client.get("/v2/comfygit/nodes")

        assert resp.status == 200
        data = await resp.json()
        assert data["blocked_count"] == 3

        version_gated = next((n for n in data["nodes"] if n["name"] == "SetNode"), None)
        uninstallable = next((n for n in data["nodes"] if n["name"] == "GetNode"), None)
        uninstallable_no_repo = next((n for n in data["nodes"] if n["name"] == "LegacyNode"), None)

        assert version_gated is not None
        assert version_gated["issue_type"] == "version_gated"
        assert "Upgrade ComfyUI" in version_gated["issue_guidance"]
        assert version_gated["repository"] is None
        assert version_gated["tracked"] is False
        assert version_gated["installed"] is False

        assert uninstallable is not None
        assert uninstallable["issue_type"] == "uninstallable"
        assert uninstallable["registry_id"] == "kj-nodes"
        assert uninstallable["repository"] == "https://github.com/kijai/ComfyUI-KJNodes"
        assert "No compatible package version" in uninstallable["issue_guidance"]
        assert uninstallable["tracked"] is False
        assert uninstallable["installed"] is False

        assert uninstallable_no_repo is not None
        assert uninstallable_no_repo["repository"] is None

    async def test_success_development_node(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should correctly identify development nodes."""
        # Setup: Dev node (tracked with source=development)
        mock_node = create_mock_node_info(
            "my-dev-node",
            source="development",
            version="dev"
        )
        mock_environment.list_nodes.return_value = [mock_node]
        mock_env_status.comparison.missing_nodes = set()
        mock_env_status.comparison.extra_nodes = set()
        mock_env_status.workflow.analyzed_workflows = []
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/nodes")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        node = next((n for n in data["nodes"] if n["name"] == "my-dev-node"), None)
        assert node is not None
        assert node["source"] == "development"
        assert node["installed"] is True
        assert node["tracked"] is True

    async def test_success_empty_environment(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return empty list when no nodes."""
        # Setup: No nodes
        mock_environment.list_nodes.return_value = []
        mock_env_status.comparison.missing_nodes = set()
        mock_env_status.comparison.extra_nodes = set()
        mock_env_status.workflow.analyzed_workflows = []
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/nodes")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["nodes"] == []
        assert data["total_count"] == 0

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.get("/v2/comfygit/nodes")

        assert resp.status == 500
        data = await resp.json()
        assert "error" in data


@pytest.mark.integration
class TestTrackNodeAsDevEndpoint:
    """POST /v2/comfygit/nodes/{name}/track-dev - Track untracked node as development."""

    async def test_success_track_untracked_node(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should track an untracked node as development."""
        # Setup: Node is in extra_nodes (untracked)
        mock_env_status.comparison.extra_nodes = {"comfygit-manager"}
        mock_environment.status.return_value = mock_env_status

        # Mock add_node to return a NodeInfo
        mock_result = create_mock_node_info(
            "comfygit-manager",
            source="development",
            version="dev"
        )
        mock_environment.add_node.return_value = mock_result

        # Execute
        resp = await client.post("/v2/comfygit/nodes/comfygit-manager/track-dev")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"
        assert data["node"]["name"] == "comfygit-manager"
        assert data["node"]["source"] == "development"

        # Verify add_node was called with is_development=True
        mock_environment.add_node.assert_called_once_with(
            "comfygit-manager",
            is_development=True
        )

    async def test_error_node_not_untracked(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return 400 when node is not untracked."""
        # Setup: Node is NOT in extra_nodes and NOT already tracked
        mock_env_status.comparison.extra_nodes = set()
        mock_environment.status.return_value = mock_env_status
        mock_environment.list_nodes.return_value = []  # Not tracked either

        # Execute
        resp = await client.post("/v2/comfygit/nodes/some-node/track-dev")

        # Verify - should fail because node isn't untracked
        assert resp.status == 400
        data = await resp.json()
        assert "error" in data
        assert "not found" in data["error"].lower() or "untracked" in data["error"].lower()

    async def test_error_node_already_tracked(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return 400 when trying to track already-tracked node."""
        # Setup: Node is already tracked (in list_nodes)
        mock_node = create_mock_node_info("already-tracked")
        mock_environment.list_nodes.return_value = [mock_node]
        mock_env_status.comparison.extra_nodes = set()
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.post("/v2/comfygit/nodes/already-tracked/track-dev")

        # Verify
        assert resp.status == 400
        data = await resp.json()
        assert "error" in data

    async def test_error_add_node_fails(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return 500 when add_node raises exception."""
        # Setup: Node is untracked but add_node fails
        mock_env_status.comparison.extra_nodes = {"failing-node"}
        mock_environment.status.return_value = mock_env_status
        mock_environment.add_node.side_effect = Exception("Failed to add node")

        # Execute
        resp = await client.post("/v2/comfygit/nodes/failing-node/track-dev")

        # Verify
        assert resp.status == 500
        data = await resp.json()
        assert "error" in data

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.post("/v2/comfygit/nodes/any-node/track-dev")

        assert resp.status == 500
        data = await resp.json()
        assert "error" in data


@pytest.mark.integration
class TestInstallNodeEndpoint:
    """POST /v2/comfygit/nodes/{name}/install - Install a missing node."""

    async def test_success_install_missing_node(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should install a missing (tracked but not installed) node."""
        # Setup: Node in missing_nodes
        mock_env_status.comparison.missing_nodes = {"missing-node"}
        mock_env_status.comparison.extra_nodes = set()
        mock_environment.status.return_value = mock_env_status

        mock_result = create_mock_node_info("missing-node")
        mock_environment.add_node.return_value = mock_result

        # Execute
        resp = await client.post("/v2/comfygit/nodes/missing-node/install")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.post("/v2/comfygit/nodes/any-node/install")

        assert resp.status == 500


@pytest.mark.integration
class TestUpdateNodeEndpoint:
    """POST /v2/comfygit/nodes/{name}/update - Update an installed node."""

    async def test_success_update_node(
        self,
        client,
        mock_environment
    ):
        """Should update an installed node."""
        # Setup
        mock_result = Mock()
        mock_result.changed = True
        mock_result.old_version = "1.0.0"
        mock_result.new_version = "1.1.0"
        mock_result.message = "Updated successfully"
        mock_environment.update_node.return_value = mock_result

        # Execute
        resp = await client.post("/v2/comfygit/nodes/some-node/update")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.post("/v2/comfygit/nodes/any-node/update")

        assert resp.status == 500


@pytest.mark.integration
class TestUninstallNodeEndpoint:
    """DELETE /v2/comfygit/nodes/{name} - Uninstall/remove a node."""

    async def test_success_uninstall_tracked_node(
        self,
        client,
        mock_environment
    ):
        """Should uninstall a tracked node."""
        # Setup
        mock_result = Mock()
        mock_result.identifier = "some-node"
        mock_result.name = "some-node"
        mock_result.source = "registry"
        mock_result.filesystem_action = "disabled"
        mock_environment.remove_node.return_value = mock_result

        # Execute
        resp = await client.delete("/v2/comfygit/nodes/some-node")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"
        assert data["filesystem_action"] == "disabled"

    async def test_success_uninstall_untracked_node(
        self,
        client,
        mock_environment
    ):
        """Should remove an untracked node (on filesystem but not in manifest).

        The core library's remove_node() now handles untracked nodes by
        falling back to _remove_untracked_node() when the node isn't tracked.
        """
        # Setup: remove_node returns result with source='untracked'
        mock_result = Mock()
        mock_result.identifier = "orphaned-node"
        mock_result.name = "orphaned-node"
        mock_result.source = "untracked"
        mock_result.filesystem_action = "deleted"
        mock_environment.remove_node.return_value = mock_result

        # Execute
        resp = await client.delete("/v2/comfygit/nodes/orphaned-node")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"
        assert data["filesystem_action"] == "deleted"

    async def test_success_remove_disabled_node(
        self,
        client,
        mock_environment
    ):
        """Should remove a .disabled node directory.

        When a node is disabled, it gets renamed to node_name.disabled/
        The remove_node() should handle removing these as well.
        """
        # Setup
        mock_result = Mock()
        mock_result.identifier = "disabled-node"
        mock_result.name = "disabled-node"
        mock_result.source = "untracked"
        mock_result.filesystem_action = "deleted"
        mock_environment.remove_node.return_value = mock_result

        # Execute
        resp = await client.delete("/v2/comfygit/nodes/disabled-node")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"

    async def test_error_node_not_found(
        self,
        client,
        mock_environment
    ):
        """Should return 500 when node not found anywhere."""
        from comfygit_core.models.exceptions import CDNodeNotFoundError

        mock_environment.remove_node.side_effect = CDNodeNotFoundError(
            "Node 'nonexistent' not found in environment"
        )

        # Execute
        resp = await client.delete("/v2/comfygit/nodes/nonexistent")

        # Verify
        assert resp.status == 500
        data = await resp.json()
        assert "error" in data
        assert "not found" in data["error"].lower()

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.delete("/v2/comfygit/nodes/any-node")

        assert resp.status == 500
