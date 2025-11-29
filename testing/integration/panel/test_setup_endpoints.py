"""Integration tests for first-time setup panel endpoints."""
import pytest
from unittest.mock import Mock, patch
from pathlib import Path


@pytest.mark.integration
class TestSetupStatusEndpoint:
    """GET /v2/setup/status - Get current setup status."""

    async def test_success_no_workspace(self, client, monkeypatch, tmp_path):
        """Should return no_workspace state when no workspace exists."""
        from comfygit_core.models.exceptions import CDWorkspaceNotFoundError

        # Mock orchestrator to return not managed
        def mock_detect():
            return (False, None, None)

        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        # Mock WorkspaceFactory.find to raise not found
        def mock_find(*args, **kwargs):
            raise CDWorkspaceNotFoundError("No workspace found")

        monkeypatch.setattr(
            "api.v2.setup.WorkspaceFactory.find",
            mock_find
        )

        # Execute
        resp = await client.get("/v2/setup/status")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["state"] == "no_workspace"
        assert data["workspace_path"] is None
        assert "default_path" in data
        assert data["environments"] == []
        assert data["current_environment"] is None

    async def test_success_empty_workspace(self, client, monkeypatch, tmp_path):
        """Should return empty_workspace when workspace exists but has no envs."""
        # Mock orchestrator to return not managed
        def mock_detect():
            return (False, None, None)

        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        # Mock WorkspaceFactory.find to return workspace with no envs
        mock_workspace = Mock()
        mock_workspace.path = tmp_path
        mock_workspace.list_environments.return_value = []

        def mock_find(*args, **kwargs):
            return mock_workspace

        monkeypatch.setattr(
            "api.v2.setup.WorkspaceFactory.find",
            mock_find
        )

        # Execute
        resp = await client.get("/v2/setup/status")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["state"] == "empty_workspace"
        assert data["workspace_path"] == str(tmp_path)
        assert data["environments"] == []

    async def test_success_unmanaged(self, client, monkeypatch, tmp_path):
        """Should return unmanaged when workspace + envs exist but not managed."""
        # Mock orchestrator to return not managed
        def mock_detect():
            return (False, None, None)

        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        # Mock workspace with environments
        mock_workspace = Mock()
        mock_workspace.path = tmp_path
        mock_env1 = Mock()
        mock_env1.name = "dev"
        mock_env2 = Mock()
        mock_env2.name = "prod"
        mock_workspace.list_environments.return_value = [mock_env1, mock_env2]

        def mock_find(*args, **kwargs):
            return mock_workspace

        monkeypatch.setattr(
            "api.v2.setup.WorkspaceFactory.find",
            mock_find
        )

        # Execute
        resp = await client.get("/v2/setup/status")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["state"] == "unmanaged"
        assert data["workspace_path"] == str(tmp_path)
        assert data["environments"] == ["dev", "prod"]
        assert data["current_environment"] is None

    async def test_success_managed(self, client, monkeypatch, tmp_path):
        """Should return managed when running under orchestrator."""
        # Mock orchestrator to return fully managed
        mock_workspace = Mock()
        mock_workspace.path = tmp_path
        mock_current_env = Mock()
        mock_current_env.name = "dev"

        mock_env1 = Mock()
        mock_env1.name = "dev"
        mock_env2 = Mock()
        mock_env2.name = "prod"
        mock_workspace.list_environments.return_value = [mock_env1, mock_env2]

        def mock_detect():
            return (True, mock_workspace, mock_current_env)

        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        # Execute
        resp = await client.get("/v2/setup/status")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["state"] == "managed"
        assert data["workspace_path"] == str(tmp_path)
        assert data["environments"] == ["dev", "prod"]
        assert data["current_environment"] == "dev"

    async def test_detected_models_dir(self, client, monkeypatch, tmp_path):
        """Should auto-detect models directory from current ComfyUI."""
        from comfygit_core.models.exceptions import CDWorkspaceNotFoundError

        # Create models directory structure
        models_dir = tmp_path / "models"
        models_dir.mkdir()

        def mock_detect():
            return (False, None, None)

        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        def mock_find(*args, **kwargs):
            raise CDWorkspaceNotFoundError("No workspace")

        monkeypatch.setattr("api.v2.setup.WorkspaceFactory.find", mock_find)

        # Mock Path.cwd() to return tmp_path
        monkeypatch.setattr("api.v2.setup.Path.cwd", lambda: tmp_path)

        # Execute
        resp = await client.get("/v2/setup/status")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["detected_models_dir"] == str(models_dir)


@pytest.mark.integration
class TestValidatePathEndpoint:
    """POST /v2/setup/validate_path - Validate workspace or models path."""

    async def test_validation_missing_path(self, client):
        """Should return 400 when path is missing."""
        resp = await client.post("/v2/setup/validate_path", json={
            "type": "workspace"
        })

        assert resp.status == 400
        data = await resp.json()
        assert "error" in data

    async def test_validation_missing_type(self, client):
        """Should return 400 when type is missing."""
        resp = await client.post("/v2/setup/validate_path", json={
            "path": "/some/path"
        })

        assert resp.status == 400
        data = await resp.json()
        assert "error" in data

    async def test_validation_invalid_type(self, client):
        """Should return 400 for invalid type."""
        resp = await client.post("/v2/setup/validate_path", json={
            "path": "/some/path",
            "type": "invalid"
        })

        assert resp.status == 400
        data = await resp.json()
        assert "error" in data

    async def test_workspace_path_valid(self, client, monkeypatch, tmp_path):
        """Should return valid for valid workspace path."""
        from comfygit_core.models.exceptions import CDWorkspaceNotFoundError

        # New empty directory
        new_dir = tmp_path / "comfygit"
        new_dir.mkdir()

        # Mock WorkspaceFactory.find to raise not found
        def mock_find(*args, **kwargs):
            raise CDWorkspaceNotFoundError("Not found")

        monkeypatch.setattr("api.v2.setup.WorkspaceFactory.find", mock_find)

        resp = await client.post("/v2/setup/validate_path", json={
            "path": str(new_dir),
            "type": "workspace"
        })

        assert resp.status == 200
        data = await resp.json()
        assert data["valid"] is True

    async def test_workspace_path_already_exists(self, client, monkeypatch, tmp_path):
        """Should return invalid when workspace already exists."""
        # Mock WorkspaceFactory.find to return workspace
        mock_workspace = Mock()

        def mock_find(*args, **kwargs):
            return mock_workspace

        monkeypatch.setattr("api.v2.setup.WorkspaceFactory.find", mock_find)

        resp = await client.post("/v2/setup/validate_path", json={
            "path": str(tmp_path),
            "type": "workspace"
        })

        assert resp.status == 200
        data = await resp.json()
        assert data["valid"] is False
        assert "already exists" in data["error"]

    async def test_workspace_path_not_empty(self, client, monkeypatch, tmp_path):
        """Should return invalid when directory is not empty."""
        from comfygit_core.models.exceptions import CDWorkspaceNotFoundError

        # Create non-empty directory
        (tmp_path / "some_file.txt").write_text("content")

        def mock_find(*args, **kwargs):
            raise CDWorkspaceNotFoundError("Not found")

        monkeypatch.setattr("api.v2.setup.WorkspaceFactory.find", mock_find)

        resp = await client.post("/v2/setup/validate_path", json={
            "path": str(tmp_path),
            "type": "workspace"
        })

        assert resp.status == 200
        data = await resp.json()
        assert data["valid"] is False
        assert "not empty" in data["error"]

    async def test_models_path_valid(self, client, tmp_path):
        """Should return valid for valid models directory."""
        # Create models directory with model files
        (tmp_path / "model.safetensors").write_bytes(b"fake model")

        resp = await client.post("/v2/setup/validate_path", json={
            "path": str(tmp_path),
            "type": "models"
        })

        assert resp.status == 200
        data = await resp.json()
        assert data["valid"] is True
        assert data["model_count"] >= 1

    async def test_models_path_not_exists(self, client, tmp_path):
        """Should return invalid when models path doesn't exist."""
        resp = await client.post("/v2/setup/validate_path", json={
            "path": str(tmp_path / "nonexistent"),
            "type": "models"
        })

        assert resp.status == 200
        data = await resp.json()
        assert data["valid"] is False
        assert "does not exist" in data["error"]

    async def test_models_path_suggests_comfyui_models(self, client, tmp_path):
        """Should suggest models subdir when given ComfyUI root."""
        # Create ComfyUI-like structure
        (tmp_path / "main.py").write_text("comfy")
        models_dir = tmp_path / "models"
        models_dir.mkdir()

        resp = await client.post("/v2/setup/validate_path", json={
            "path": str(tmp_path),
            "type": "models"
        })

        assert resp.status == 200
        data = await resp.json()
        assert data["valid"] is False
        assert "suggestion" in data
        assert data["suggestion"] == str(models_dir)


@pytest.mark.integration
class TestInitializeWorkspaceEndpoint:
    """POST /v2/setup/initialize_workspace - Start workspace initialization."""

    async def test_success_start_initialization(self, client, monkeypatch, tmp_path):
        """Should start initialization and return task ID."""
        resp = await client.post("/v2/setup/initialize_workspace", json={
            "workspace_path": str(tmp_path / "comfygit"),
            "models_directory": None
        })

        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "started"
        assert "task_id" in data

    async def test_error_already_in_progress(self, client, monkeypatch, tmp_path):
        """Should return 409 when initialization already in progress."""
        # First call succeeds
        resp1 = await client.post("/v2/setup/initialize_workspace", json={
            "workspace_path": str(tmp_path / "comfygit1")
        })
        assert resp1.status == 200

        # Mock state to show in progress
        import api.v2.setup as setup_module
        monkeypatch.setattr(
            setup_module, "_init_task_state",
            {"state": "scanning_models", "progress": 50, "message": "...", "task_id": "test"}
        )

        # Second call should fail
        resp2 = await client.post("/v2/setup/initialize_workspace", json={
            "workspace_path": str(tmp_path / "comfygit2")
        })

        assert resp2.status == 409
        data = await resp2.json()
        assert "already in progress" in data["error"]

    async def test_validation_invalid_json(self, client):
        """Should return 400 for invalid JSON body."""
        resp = await client.post(
            "/v2/setup/initialize_workspace",
            data=b"not json",
            headers={"Content-Type": "application/json"}
        )

        assert resp.status == 400


@pytest.mark.integration
class TestInitializeStatusEndpoint:
    """GET /v2/setup/initialize_status - Get initialization progress."""

    async def test_success_idle(self, client, monkeypatch):
        """Should return idle state when no initialization in progress."""
        import api.v2.setup as setup_module
        monkeypatch.setattr(
            setup_module, "_init_task_state",
            {
                "state": "idle",
                "task_id": None,
                "progress": 0,
                "message": "No initialization in progress",
                "models_found": None,
                "error": None
            }
        )

        resp = await client.get("/v2/setup/initialize_status")

        assert resp.status == 200
        data = await resp.json()
        assert data["state"] == "idle"
        assert data["progress"] == 0

    async def test_success_in_progress(self, client, monkeypatch):
        """Should return progress when initialization is running."""
        import api.v2.setup as setup_module
        monkeypatch.setattr(
            setup_module, "_init_task_state",
            {
                "state": "scanning_models",
                "task_id": "test-task-id",
                "progress": 65,
                "message": "Scanning models (126/194)...",
                "models_found": None,
                "error": None
            }
        )

        resp = await client.get("/v2/setup/initialize_status")

        assert resp.status == 200
        data = await resp.json()
        assert data["state"] == "scanning_models"
        assert data["progress"] == 65
        assert "Scanning" in data["message"]

    async def test_success_complete(self, client, monkeypatch):
        """Should return complete state with models count."""
        import api.v2.setup as setup_module
        monkeypatch.setattr(
            setup_module, "_init_task_state",
            {
                "state": "complete",
                "task_id": "test-task-id",
                "progress": 100,
                "message": "Complete! 194 models indexed",
                "models_found": 194,
                "error": None
            }
        )

        resp = await client.get("/v2/setup/initialize_status")

        assert resp.status == 200
        data = await resp.json()
        assert data["state"] == "complete"
        assert data["progress"] == 100
        assert data["models_found"] == 194

    async def test_success_error_state(self, client, monkeypatch):
        """Should return error state with error message."""
        import api.v2.setup as setup_module
        monkeypatch.setattr(
            setup_module, "_init_task_state",
            {
                "state": "error",
                "task_id": "test-task-id",
                "progress": 15,
                "message": "Failed: Permission denied",
                "models_found": None,
                "error": "Permission denied: /home/user/comfygit"
            }
        )

        resp = await client.get("/v2/setup/initialize_status")

        assert resp.status == 200
        data = await resp.json()
        assert data["state"] == "error"
        assert data["error"] == "Permission denied: /home/user/comfygit"


@pytest.mark.integration
class TestResetInitializationEndpoint:
    """POST /v2/setup/reset - Reset stuck initialization state."""

    async def test_reset_from_stuck_state(self, client, monkeypatch):
        """Should reset initialization state when stuck in non-terminal state."""
        import api.v2.setup as setup_module

        # Simulate stuck state
        monkeypatch.setattr(
            setup_module, "_init_task_state",
            {
                "state": "scanning_models",
                "task_id": "stuck-task-id",
                "progress": 50,
                "message": "Scanning models...",
                "models_found": None,
                "error": None
            }
        )

        resp = await client.post("/v2/setup/reset")

        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "reset"

        # Verify state was actually reset
        status_resp = await client.get("/v2/setup/initialize_status")
        status_data = await status_resp.json()
        assert status_data["state"] == "idle"

    async def test_reset_from_creating_workspace(self, client, monkeypatch):
        """Should reset when stuck in creating_workspace state."""
        import api.v2.setup as setup_module

        monkeypatch.setattr(
            setup_module, "_init_task_state",
            {
                "state": "creating_workspace",
                "task_id": "stuck-task-id",
                "progress": 10,
                "message": "Creating...",
                "models_found": None,
                "error": None
            }
        )

        resp = await client.post("/v2/setup/reset")

        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "reset"

    async def test_reset_from_setting_models_dir(self, client, monkeypatch):
        """Should reset when stuck in setting_models_dir state."""
        import api.v2.setup as setup_module

        monkeypatch.setattr(
            setup_module, "_init_task_state",
            {
                "state": "setting_models_dir",
                "task_id": "stuck-task-id",
                "progress": 25,
                "message": "Setting models dir...",
                "models_found": None,
                "error": None
            }
        )

        resp = await client.post("/v2/setup/reset")

        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "reset"

    async def test_no_reset_from_idle(self, client, monkeypatch):
        """Should not reset from idle state - no action needed."""
        import api.v2.setup as setup_module

        monkeypatch.setattr(
            setup_module, "_init_task_state",
            {
                "state": "idle",
                "task_id": None,
                "progress": 0,
                "message": "No initialization in progress",
                "models_found": None,
                "error": None
            }
        )

        resp = await client.post("/v2/setup/reset")

        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "no_action"

    async def test_no_reset_from_complete(self, client, monkeypatch):
        """Should not reset from complete state - no action needed."""
        import api.v2.setup as setup_module

        monkeypatch.setattr(
            setup_module, "_init_task_state",
            {
                "state": "complete",
                "task_id": "completed-task-id",
                "progress": 100,
                "message": "Complete!",
                "models_found": 50,
                "error": None
            }
        )

        resp = await client.post("/v2/setup/reset")

        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "no_action"

    async def test_no_reset_from_error(self, client, monkeypatch):
        """Should not reset from error state - already terminal."""
        import api.v2.setup as setup_module

        monkeypatch.setattr(
            setup_module, "_init_task_state",
            {
                "state": "error",
                "task_id": "failed-task-id",
                "progress": 15,
                "message": "Failed",
                "models_found": None,
                "error": "Some error"
            }
        )

        resp = await client.post("/v2/setup/reset")

        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "no_action"
