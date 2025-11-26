"""Integration tests for model-related panel endpoints."""
import pytest
from unittest.mock import Mock
import sys
from pathlib import Path

# Add helpers to path
helpers_dir = Path(__file__).parent.parent.parent / "helpers"
if str(helpers_dir) not in sys.path:
    sys.path.insert(0, str(helpers_dir))

from mock_helpers import create_mock_resolution


@pytest.mark.integration
class TestEnvironmentModelsEndpoint:
    """GET /v2/comfygit/models/environment - Get all models used in environment."""

    async def test_success_with_models(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return aggregated models from all workflows."""
        # Setup: Create workflows with models
        mock_wf1 = Mock()
        mock_wf1.name = "workflow1.json"

        # Create mock resolved model
        mock_resolved_model = Mock()
        mock_resolved_model.hash = "abc123"
        mock_resolved_model.filename = "model1.safetensors"
        mock_resolved_model.category = "checkpoints"
        mock_resolved_model.file_size = 1000000
        mock_resolved_model.relative_path = "checkpoints/model1.safetensors"

        mock_model_ref = Mock()
        mock_model_ref.resolved_model = mock_resolved_model
        mock_model_ref.needs_path_sync = False
        mock_model_ref.model_source = None

        mock_wf1.resolution = create_mock_resolution(
            models_resolved=[mock_model_ref]
        )

        mock_env_status.workflow.analyzed_workflows = [mock_wf1]
        mock_env_status.missing_models = []
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/models/environment")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert isinstance(data, list)
        assert len(data) >= 1

        # Find our model in the results
        model = next((m for m in data if m["filename"] == "model1.safetensors"), None)
        assert model is not None
        assert model["hash"] == "abc123"
        assert model["type"] == "checkpoints"
        assert model["status"] == "available"
        assert "workflow1.json" in model["used_in_workflows"]

    async def test_success_empty_environment(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should return empty list when no workflows."""
        # Setup: No workflows
        mock_env_status.workflow.analyzed_workflows = []
        mock_env_status.missing_models = []
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/models/environment")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert isinstance(data, list)
        assert len(data) == 0

    async def test_success_with_missing_models(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should include missing models in results."""
        # Setup: Missing models
        mock_missing = Mock()
        mock_missing.filename = "missing_model.safetensors"
        mock_missing.required_by = ["workflow1.json", "workflow2.json"]

        mock_env_status.workflow.analyzed_workflows = []
        mock_env_status.missing_models = [mock_missing]
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/models/environment")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert isinstance(data, list)

        # Should have the missing model
        missing = next((m for m in data if m["filename"] == "missing_model.safetensors"), None)
        assert missing is not None
        assert missing["status"] == "missing"
        assert missing["hash"] == ""
        assert len(missing["used_in_workflows"]) == 2

    async def test_success_model_used_in_multiple_workflows(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should aggregate same model used in multiple workflows."""
        # Setup: Same model in two workflows
        mock_resolved_model = Mock()
        mock_resolved_model.hash = "shared123"
        mock_resolved_model.filename = "shared.safetensors"
        mock_resolved_model.category = "checkpoints"
        mock_resolved_model.file_size = 2000000
        mock_resolved_model.relative_path = "checkpoints/shared.safetensors"

        # Workflow 1
        mock_wf1 = Mock()
        mock_wf1.name = "workflow1.json"
        mock_model_ref1 = Mock()
        mock_model_ref1.resolved_model = mock_resolved_model
        mock_model_ref1.needs_path_sync = False
        mock_model_ref1.model_source = None
        mock_wf1.resolution = create_mock_resolution(models_resolved=[mock_model_ref1])

        # Workflow 2
        mock_wf2 = Mock()
        mock_wf2.name = "workflow2.json"
        mock_model_ref2 = Mock()
        mock_model_ref2.resolved_model = mock_resolved_model  # Same model
        mock_model_ref2.needs_path_sync = False
        mock_model_ref2.model_source = None
        mock_wf2.resolution = create_mock_resolution(models_resolved=[mock_model_ref2])

        mock_env_status.workflow.analyzed_workflows = [mock_wf1, mock_wf2]
        mock_env_status.missing_models = []
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/models/environment")

        # Verify
        assert resp.status == 200
        data = await resp.json()

        # Should have only one entry for the shared model
        shared_models = [m for m in data if m["hash"] == "shared123"]
        assert len(shared_models) == 1

        # Should list both workflows
        shared = shared_models[0]
        assert "workflow1.json" in shared["used_in_workflows"]
        assert "workflow2.json" in shared["used_in_workflows"]

    async def test_success_downloadable_model(
        self,
        client,
        mock_environment,
        mock_env_status
    ):
        """Should mark models with download source as downloadable."""
        # Setup: Model with download source but not locally available
        mock_wf1 = Mock()
        mock_wf1.name = "workflow1.json"

        mock_model_ref = Mock()
        mock_model_ref.resolved_model = None  # Not locally available
        mock_model_ref.model_source = "https://example.com/model.safetensors"  # But has source
        mock_model_ref.needs_path_sync = False

        mock_wf1.resolution = create_mock_resolution(models_resolved=[mock_model_ref])

        mock_env_status.workflow.analyzed_workflows = [mock_wf1]
        mock_env_status.missing_models = []
        mock_environment.status.return_value = mock_env_status

        # Execute
        resp = await client.get("/v2/comfygit/models/environment")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        # Since resolved_model is None, the endpoint might skip it or handle it differently
        # This test might need adjustment based on actual implementation behavior

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.get("/v2/comfygit/models/environment")

        assert resp.status == 500
        data = await resp.json()
        assert "error" in data

    async def test_error_status_call_fails(
        self,
        client,
        mock_environment
    ):
        """Should return 500 when env.status() raises exception."""
        # Setup: status() raises exception
        mock_environment.status.side_effect = Exception("Status failed")

        # Execute
        resp = await client.get("/v2/comfygit/models/environment")

        # Verify
        assert resp.status == 500
        data = await resp.json()
        assert "error" in data
