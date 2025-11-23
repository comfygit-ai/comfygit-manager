"""Integration tests for status panel endpoints."""
import pytest


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
        wf_broken.uninstalled_nodes = ["node-pkg-1"]
        wf_broken.issue_summary = "2 unresolved nodes, 1 missing model"
        wf_broken.node_count = 10
        wf_broken.model_count = 3
        wf_broken.resolution = Mock()
        wf_broken.resolution.nodes_unresolved = [Mock(), Mock()]
        wf_broken.resolution.models_unresolved = [Mock()]
        wf_broken.resolution.models_ambiguous = []
        wf_broken.resolution.nodes_ambiguous = []

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
        wf_healthy.resolution.models_unresolved = []
        wf_healthy.resolution.models_ambiguous = []
        wf_healthy.resolution.nodes_ambiguous = []

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
