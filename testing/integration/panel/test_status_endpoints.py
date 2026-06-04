"""Integration tests for status panel endpoints."""
import sys
from unittest.mock import Mock

import pytest
from comfygit_core.models import (
    EnvironmentLifecycleStatus,
    LifecycleAction,
    LifecycleIssue,
)


@pytest.mark.integration
class TestStatusEndpoint:
    """GET /v2/comfygit/status - Environment status."""

    async def test_success_synced_environment(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return 200 with status when environment is synced."""
        # Setup: Environment is synced, no changes
        mock_env_status.is_synced = True
        mock_env_status.git.has_changes = False
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/status")

        # Verify HTTP response
        assert resp.status == 200
        data = await resp.json()

        # Verify JSON structure
        assert data["environment"] == "test-env"
        assert data["is_synced"] is True
        assert data["has_changes"] is False
        assert data["branch"] == "main"
        assert data["is_detached_head"] is False

        # Verify nested objects exist
        assert "workflows" in data
        assert "git_changes" in data
        assert "comparison" in data

    async def test_success_with_uncommitted_changes(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return status with git changes when uncommitted changes exist."""
        # Setup: Has uncommitted changes
        mock_env_status.git.has_changes = True
        mock_env_status.git.nodes_added = [{"name": "comfyui-node-1"}]
        mock_env_status.git.workflow_changes = {"api.json": "modified"}
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/status")
        data = await resp.json()

        # Verify
        assert data["has_changes"] is True
        assert len(data["git_changes"]["nodes_added"]) == 1
        assert data["git_changes"]["nodes_added"][0] == "comfyui-node-1"
        assert data["git_changes"]["workflow_changes"] is True
        assert data["git_changes"]["workflow_changes_detail"] == {"api.json": "modified"}

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        # Setup: get_environment_from_cwd returns None
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        # Execute
        resp = await client.get("/v2/comfygit/status")

        # Verify
        assert resp.status == 500
        data = await resp.json()
        assert "error" in data
        assert "No environment detected" in data["error"]

    async def test_error_status_call_fails(
        self,
        client,
        mock_environment
    ):
        """Should return 500 when env.status() raises exception."""
        # Setup: status() raises exception
        mock_environment.status.side_effect = Exception("Status failed")

        # Execute
        resp = await client.get("/v2/comfygit/status")

        # Verify
        assert resp.status == 500
        data = await resp.json()
        assert "error" in data

    async def test_detached_head_state(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should handle detached HEAD state."""
        # Setup: Detached HEAD
        mock_env_status.git.current_branch = None
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/status")
        data = await resp.json()

        # Verify
        assert data["branch"] is None
        assert data["is_detached_head"] is True

    async def test_workflow_sync_status(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should include workflow sync status."""
        # Setup: Some workflows modified
        mock_env_status.workflow.sync_status.modified = {"workflow1.json", "workflow2.json"}
        mock_env_status.workflow.sync_status.new = {"workflow3.json"}
        mock_env_status.workflow.sync_status.total_count = 3
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/status")
        data = await resp.json()

        # Verify
        assert "workflows" in data
        assert len(data["workflows"]["modified"]) == 2
        assert len(data["workflows"]["new"]) == 1
        assert data["workflows"]["total"] == 3

    async def test_missing_models_count(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return missing models count."""
        # Setup: Some missing models
        mock_env_status.missing_models = ["model1.safetensors", "model2.ckpt"]
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/status")
        data = await resp.json()

        # Verify
        assert data["missing_models_count"] == 2

    async def test_runtime_import_failures_in_response(
        self,
        client,
        mock_environment,
        mock_env_status,
        tmp_path,
        monkeypatch,
    ):
        """Should include live custom-node import failures as runtime issues."""
        custom_nodes_path = tmp_path / "custom_nodes"
        custom_nodes_path.mkdir()
        (custom_nodes_path / "FailedNode").mkdir()
        mock_environment.custom_nodes_path = custom_nodes_path

        monkeypatch.setitem(
            sys.modules,
            "nodes",
            Mock(LOADED_MODULE_DIRS={"LoadedNode": str(custom_nodes_path / "LoadedNode")}),
        )

        failed_node = Mock()
        failed_node.name = "FailedNode"
        failed_node.registry_id = "FailedNode"
        failed_node.criticality = "required"
        mock_environment.list_nodes.return_value = [failed_node]
        mock_env_status.comparison.missing_nodes = set()
        mock_environment.status.return_value = mock_env_status

        resp = await client.get("/v2/comfygit/status")
        data = await resp.json()

        runtime_issues = data["runtime_issues"]
        assert runtime_issues["custom_node_import_failure_count"] == 1
        assert runtime_issues["custom_node_import_failures"][0]["name"] == "FailedNode"
        assert "ComfyUI logs" in runtime_issues["custom_node_import_failures"][0]["guidance"]

    async def test_lifecycle_status_endpoint_returns_core_guidance(
        self,
        client,
        mock_environment,
        mock_env_status,
    ):
        """Should expose core lifecycle status as an additive manager API."""
        mock_env_status.comparison.is_synced = False
        mock_env_status.comparison.missing_nodes = {"rgthree-comfy"}
        mock_environment.status.return_value = mock_env_status
        mock_environment.get_lifecycle_status.return_value = EnvironmentLifecycleStatus(
            environment_name="test-env",
            workspace_path="/tmp/test-workspace",
            current_branch="main",
            issues=(
                LifecycleIssue(
                    id="missing_declared_nodes",
                    layer="filesystem",
                    severity="error",
                    message="Manifest declares custom nodes that are missing on disk.",
                    blocking=True,
                    affected_resources=("rgthree-comfy",),
                    action_ids=("sync_missing_nodes",),
                ),
            ),
            actions=(
                LifecycleAction(
                    id="sync_missing_nodes",
                    label="Sync missing nodes",
                    description="Install manifest-declared custom nodes that are missing locally.",
                    target_layer="filesystem",
                    issue_ids=("missing_declared_nodes",),
                ),
            ),
            primary_action_id="sync_missing_nodes",
        )

        resp = await client.get("/v2/comfygit/lifecycle_status")
        data = await resp.json()

        assert resp.status == 200
        assert data["environment_name"] == "test-env"
        assert data["primary_action_id"] == "sync_missing_nodes"
        assert {issue["id"] for issue in data["issues"]} == {"missing_declared_nodes"}
        assert data["runtime_state"]["comfyui_reachable"] is None

        mock_environment.get_lifecycle_status.assert_called_once()
        _, kwargs = mock_environment.get_lifecycle_status.call_args
        assert kwargs["status"] is mock_env_status
        assert kwargs["include_readiness"] is True

    async def test_lifecycle_status_endpoint_can_skip_readiness(
        self,
        client,
        mock_environment,
        mock_env_status,
    ):
        """Should let polling clients avoid readiness work when they only need lifecycle drift."""
        mock_environment.status.return_value = mock_env_status

        resp = await client.get("/v2/comfygit/lifecycle_status?include_readiness=false")

        assert resp.status == 200
        _, kwargs = mock_environment.get_lifecycle_status.call_args
        assert kwargs["include_readiness"] is False

    async def test_lifecycle_status_endpoint_includes_runtime_import_failures(
        self,
        client,
        mock_environment,
        mock_env_status,
        tmp_path,
        monkeypatch,
    ):
        """Should enrich core lifecycle guidance with Manager runtime import health."""
        custom_nodes_path = tmp_path / "custom_nodes"
        custom_nodes_path.mkdir()
        (custom_nodes_path / "FailedNode").mkdir()
        mock_environment.custom_nodes_path = custom_nodes_path

        monkeypatch.setitem(
            sys.modules,
            "nodes",
            Mock(LOADED_MODULE_DIRS={"LoadedNode": str(custom_nodes_path / "LoadedNode")}),
        )

        failed_node = Mock()
        failed_node.name = "FailedNode"
        failed_node.registry_id = "FailedNode"
        failed_node.criticality = "required"
        mock_environment.list_nodes.return_value = [failed_node]
        mock_environment.status.return_value = mock_env_status

        def _runtime_lifecycle(**kwargs):
            runtime_state = kwargs["runtime_state"]
            import_errors = tuple(runtime_state.import_errors)
            return EnvironmentLifecycleStatus(
                environment_name="test-env",
                workspace_path="/tmp/test-workspace",
                current_branch="main",
                issues=(
                    LifecycleIssue(
                        id="runtime_import_failure",
                        layer="runtime",
                        severity="warning",
                        message="ComfyUI reported custom-node import failures.",
                        affected_resources=import_errors,
                        action_ids=("view_runtime_import_error",),
                    ),
                ),
                actions=(
                    LifecycleAction(
                        id="view_runtime_import_error",
                        label="View runtime import error",
                        description="Inspect custom-node import failures from the running ComfyUI process.",
                        target_layer="runtime",
                        issue_ids=("runtime_import_failure",),
                    ),
                ),
                primary_action_id="view_runtime_import_error",
            )

        mock_environment.get_lifecycle_status.side_effect = _runtime_lifecycle

        resp = await client.get("/v2/comfygit/lifecycle_status?include_readiness=false")
        data = await resp.json()

        assert resp.status == 200
        assert data["runtime_state"]["comfyui_reachable"] is True
        assert data["runtime_state"]["import_errors"] == ["FailedNode"]

        runtime_issue = next(issue for issue in data["issues"] if issue["id"] == "runtime_import_failure")
        assert runtime_issue["blocking"] is False
        assert runtime_issue["affected_resources"] == ["FailedNode"]
        assert data["primary_action_id"] == "view_runtime_import_error"

    async def test_analyzed_workflows_in_response(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should include analyzed workflows with full resolution state."""
        from unittest.mock import Mock

        # Setup: Create broken and healthy workflows
        wf_broken = Mock()
        wf_broken.name = "broken.json"
        wf_broken.sync_state = "synced"
        wf_broken.has_issues = True
        wf_broken.has_path_sync_issues = False
        wf_broken.uninstalled_nodes = ["node-pkg-1"]
        wf_broken.models_needing_path_sync_count = 0
        wf_broken.download_intents_count = 0
        wf_broken.issue_summary = "2 unresolved nodes, 1 missing model"
        wf_broken.node_count = 10
        wf_broken.model_count = 3
        wf_broken.resolution = Mock()
        wf_broken.resolution.nodes_unresolved = [Mock(), Mock()]
        wf_broken.resolution.models_unresolved = [Mock()]
        wf_broken.resolution.models_ambiguous = []
        wf_broken.resolution.nodes_ambiguous = []
        wf_broken.has_category_mismatch_issues = False
        wf_broken.models_with_category_mismatch_count = 0

        wf_healthy = Mock()
        wf_healthy.name = "healthy.json"
        wf_healthy.sync_state = "new"
        wf_healthy.has_issues = False
        wf_healthy.has_path_sync_issues = False
        wf_healthy.uninstalled_nodes = []
        wf_healthy.models_needing_path_sync_count = 0
        wf_healthy.download_intents_count = 0
        wf_healthy.issue_summary = "No issues"
        wf_healthy.node_count = 5
        wf_healthy.model_count = 2
        wf_healthy.resolution = Mock()
        wf_healthy.resolution.nodes_unresolved = []
        wf_healthy.resolution.models_unresolved = []
        wf_healthy.resolution.models_ambiguous = []
        wf_healthy.resolution.nodes_ambiguous = []
        wf_healthy.has_category_mismatch_issues = False
        wf_healthy.models_with_category_mismatch_count = 0

        mock_env_status.workflow.analyzed_workflows = [wf_broken, wf_healthy]
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/status")
        data = await resp.json()

        # Verify: analyzed array exists in workflows
        assert "workflows" in data
        assert "analyzed" in data["workflows"]
        assert len(data["workflows"]["analyzed"]) == 2

        # Verify broken workflow
        broken = next(w for w in data["workflows"]["analyzed"] if w["name"] == "broken.json")
        assert broken["sync_state"] == "synced"
        assert broken["status"] == "broken"
        assert broken["has_issues"] is True
        assert broken["uninstalled_nodes"] == 1
        assert broken["unresolved_nodes_count"] == 2
        assert broken["unresolved_models_count"] == 1
        assert broken["node_count"] == 10
        assert broken["model_count"] == 3

        # Verify healthy workflow
        healthy = next(w for w in data["workflows"]["analyzed"] if w["name"] == "healthy.json")
        assert healthy["status"] == "new"
        assert healthy["has_issues"] is False
        assert healthy["unresolved_nodes_count"] == 0
