"""Integration tests for sync and export panel endpoints."""
import pytest
from unittest.mock import Mock
from pathlib import Path


@pytest.mark.integration
class TestSyncEndpoint:
    """POST /v2/comfygit/sync - Manually sync environment."""

    async def test_success_sync_default_params(
        self,
        client,
        mock_environment
    ):
        """Should sync environment with default parameters."""
        # Setup: Mock sync result
        mock_result = Mock()
        mock_result.success = True
        mock_result.nodes_installed = ["node1", "node2"]
        mock_result.nodes_removed = []
        mock_result.errors = []
        mock_environment.sync.return_value = mock_result

        # Execute
        resp = await client.post("/v2/comfygit/sync", json={})

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"
        assert len(data["nodes_installed"]) == 2
        assert len(data["nodes_removed"]) == 0
        assert len(data["errors"]) == 0
        assert "Sync completed" in data["message"]

        # Verify sync was called with defaults
        mock_environment.sync.assert_called_once()
        call_args = mock_environment.sync.call_args
        assert call_args[1]["model_strategy"] == "skip"
        assert call_args[1]["remove_extra_nodes"] is True

    async def test_success_sync_with_custom_params(
        self,
        client,
        mock_environment
    ):
        """Should sync with custom parameters."""
        # Setup
        mock_result = Mock()
        mock_result.success = True
        mock_result.nodes_installed = []
        mock_result.nodes_removed = ["extra_node"]
        mock_result.errors = []
        mock_environment.sync.return_value = mock_result

        # Execute
        resp = await client.post("/v2/comfygit/sync", json={
            "model_strategy": "download",
            "remove_extra_nodes": False
        })

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"

        # Verify sync was called with custom params
        call_args = mock_environment.sync.call_args
        assert call_args[1]["model_strategy"] == "download"
        assert call_args[1]["remove_extra_nodes"] is False

    async def test_success_sync_with_errors(
        self,
        client,
        mock_environment
    ):
        """Should return partial success when sync has errors."""
        # Setup: Sync completes but has errors
        mock_result = Mock()
        mock_result.success = False
        mock_result.nodes_installed = ["node1"]
        mock_result.nodes_removed = []
        mock_result.errors = ["Failed to install node2"]
        mock_environment.sync.return_value = mock_result

        # Execute
        resp = await client.post("/v2/comfygit/sync", json={})

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "error"
        assert len(data["errors"]) == 1
        assert "completed with errors" in data["message"]

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.post("/v2/comfygit/sync", json={})

        assert resp.status == 500
        data = await resp.json()
        assert "error" in data

    async def test_error_sync_fails(
        self,
        client,
        mock_environment
    ):
        """Should return 500 when sync raises exception."""
        # Setup: sync() raises exception
        mock_environment.sync.side_effect = Exception("Sync failed")

        # Execute
        resp = await client.post("/v2/comfygit/sync", json={})

        # Verify
        assert resp.status == 500
        data = await resp.json()
        assert data["status"] == "error"
        assert "Sync failed" in data["message"]


@pytest.mark.integration
class TestExportEndpoint:
    """POST /v2/comfygit/export - Export environment to tarball."""

    async def test_success_export_with_path(
        self,
        client,
        mock_environment,
        tmp_path
    ):
        """Should export environment to specified path."""
        # Setup
        output_file = tmp_path / "export.tar.gz"
        mock_environment.export_environment.return_value = output_file

        # Execute
        resp = await client.post("/v2/comfygit/export", json={
            "output_path": str(output_file)
        })

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"
        assert data["path"] == str(output_file)
        assert "models_without_sources" in data

        # Verify export was called
        mock_environment.export_environment.assert_called_once()

    async def test_success_export_default_path(
        self,
        client,
        mock_environment,
        tmp_path
    ):
        """Should use default path when none specified."""
        # Setup
        default_output = tmp_path / "env1_export_20250122_120000.tar.gz"
        mock_environment.export_environment.return_value = default_output

        # Execute: No output_path specified
        resp = await client.post("/v2/comfygit/export", json={})

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"
        assert "export" in data["path"]
        assert ".tar.gz" in data["path"]

    async def test_success_export_with_models_without_sources(
        self,
        client,
        mock_environment,
        tmp_path
    ):
        """Should report models without sources."""
        # Setup: Export callbacks will report models without sources
        output_file = tmp_path / "export.tar.gz"

        def mock_export(path, callbacks=None):
            if callbacks:
                # Simulate callback
                callbacks.on_models_without_sources(["model1.safetensors", "model2.ckpt"])
            return output_file

        mock_environment.export_environment.side_effect = mock_export

        # Execute
        resp = await client.post("/v2/comfygit/export", json={
            "output_path": str(output_file)
        })

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"
        assert data["models_without_sources"] == 2

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.post("/v2/comfygit/export", json={})

        assert resp.status == 500
        data = await resp.json()
        assert "error" in data

    async def test_error_export_fails(
        self,
        client,
        mock_environment
    ):
        """Should return 500 when export raises exception."""
        # Setup: export_environment raises exception
        mock_environment.export_environment.side_effect = Exception("Export failed")

        # Execute
        resp = await client.post("/v2/comfygit/export", json={})

        # Verify
        assert resp.status == 500
        data = await resp.json()
        assert data["status"] == "error"
        assert "Export failed" in data["message"]

    async def test_error_invalid_output_path(
        self,
        client,
        mock_environment
    ):
        """Should return 500 when output path is invalid."""
        # Setup: export_environment raises exception for invalid path
        mock_environment.export_environment.side_effect = Exception("Invalid path")

        # Execute
        resp = await client.post("/v2/comfygit/export", json={
            "output_path": "/invalid/nonexistent/path/export.tar.gz"
        })

        # Verify
        assert resp.status == 500
        data = await resp.json()
        assert data["status"] == "error"


@pytest.mark.integration
class TestExportValidateEndpoint:
    """POST /v2/comfygit/export/validate - Pre-flight validation for export."""

    async def test_success_can_export_no_warnings(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return can_export=true with no warnings for clean environment."""
        # Setup: Clean environment with no uncommitted changes
        mock_env_status.workflow.sync_status.has_changes = False
        mock_env_status.workflow.sync_status.new = []
        mock_env_status.workflow.sync_status.modified = []
        mock_env_status.workflow.sync_status.deleted = []
        mock_env_status.workflow.is_commit_safe = True
        mock_environment.workflow_manager.get_workflow_status.return_value = mock_env_status.workflow
        mock_environment.git_manager.has_uncommitted_changes.return_value = False

        # Mock pyproject with no models without sources
        mock_pyproject = Mock()
        mock_pyproject.models.get_all.return_value = []
        mock_environment.pyproject = mock_pyproject

        # Execute
        resp = await client.post("/v2/comfygit/export/validate", json={})

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["can_export"] is True
        assert len(data["blocking_issues"]) == 0
        assert len(data["warnings"]["models_without_sources"]) == 0

    async def test_blocked_uncommitted_workflows(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return can_export=false when workflows have uncommitted changes."""
        # Setup: Uncommitted workflow changes
        mock_env_status.workflow.sync_status.has_changes = True
        mock_env_status.workflow.sync_status.new = ["new-workflow.json"]
        mock_env_status.workflow.sync_status.modified = ["modified-workflow.json"]
        mock_env_status.workflow.sync_status.deleted = []
        mock_environment.workflow_manager.get_workflow_status.return_value = mock_env_status.workflow

        # Execute
        resp = await client.post("/v2/comfygit/export/validate", json={})

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["can_export"] is False
        assert len(data["blocking_issues"]) >= 1
        issue = next(i for i in data["blocking_issues"] if i["type"] == "uncommitted_workflows")
        assert "new-workflow.json" in issue["details"]
        assert "modified-workflow.json" in issue["details"]

    async def test_blocked_uncommitted_git_changes(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return can_export=false when git has uncommitted changes."""
        # Setup: No workflow changes but git has uncommitted changes
        mock_env_status.workflow.sync_status.has_changes = False
        mock_env_status.workflow.sync_status.new = []
        mock_env_status.workflow.sync_status.modified = []
        mock_env_status.workflow.sync_status.deleted = []
        mock_env_status.workflow.is_commit_safe = True
        mock_environment.workflow_manager.get_workflow_status.return_value = mock_env_status.workflow
        mock_environment.git_manager.has_uncommitted_changes.return_value = True

        # Execute
        resp = await client.post("/v2/comfygit/export/validate", json={})

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["can_export"] is False
        assert any(i["type"] == "uncommitted_git_changes" for i in data["blocking_issues"])

    async def test_blocked_unresolved_issues(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return can_export=false when workflows have unresolved issues."""
        # Setup: Workflows have unresolved issues
        mock_env_status.workflow.sync_status.has_changes = False
        mock_env_status.workflow.sync_status.new = []
        mock_env_status.workflow.sync_status.modified = []
        mock_env_status.workflow.sync_status.deleted = []
        mock_env_status.workflow.is_commit_safe = False  # Has unresolved issues
        mock_environment.workflow_manager.get_workflow_status.return_value = mock_env_status.workflow
        mock_environment.git_manager.has_uncommitted_changes.return_value = False

        # Execute
        resp = await client.post("/v2/comfygit/export/validate", json={})

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["can_export"] is False
        assert any(i["type"] == "unresolved_issues" for i in data["blocking_issues"])

    async def test_warning_models_without_sources(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return warnings for models without source URLs."""
        # Setup: Clean environment but models without sources
        mock_env_status.workflow.sync_status.has_changes = False
        mock_env_status.workflow.sync_status.new = []
        mock_env_status.workflow.sync_status.modified = []
        mock_env_status.workflow.sync_status.deleted = []
        mock_env_status.workflow.is_commit_safe = True
        mock_environment.workflow_manager.get_workflow_status.return_value = mock_env_status.workflow
        mock_environment.git_manager.has_uncommitted_changes.return_value = False

        # Mock pyproject with models without sources
        mock_model = Mock()
        mock_model.filename = "sd_xl_base_1.0.safetensors"
        mock_model.hash = "abc123"
        mock_model.sources = []  # No sources

        mock_pyproject = Mock()
        mock_pyproject.models.get_all.return_value = [mock_model]
        mock_pyproject.workflows.get_all_with_resolutions.return_value = {
            "portrait.json": Mock()
        }

        # Mock workflow models to reference the model without sources
        mock_wf_model = Mock()
        mock_wf_model.hash = "abc123"
        mock_pyproject.workflows.get_workflow_models.return_value = [mock_wf_model]

        mock_environment.pyproject = mock_pyproject

        # Execute
        resp = await client.post("/v2/comfygit/export/validate", json={})

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["can_export"] is True  # Warnings don't block export
        assert len(data["blocking_issues"]) == 0
        assert len(data["warnings"]["models_without_sources"]) == 1

        model_warning = data["warnings"]["models_without_sources"][0]
        assert model_warning["filename"] == "sd_xl_base_1.0.safetensors"
        assert model_warning["hash"] == "abc123"
        assert "portrait.json" in model_warning["workflows"]

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.post("/v2/comfygit/export/validate", json={})

        assert resp.status == 500
        data = await resp.json()
        assert "error" in data
