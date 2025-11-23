"""Integration tests for environment management panel endpoints."""
import pytest
from unittest.mock import Mock, patch
import json
from pathlib import Path


@pytest.mark.integration
class TestListEnvironmentsEndpoint:
    """GET /v2/comfygit/environments - List all available environments."""

    async def test_success_with_environments(self, client, monkeypatch):
        """Should return list of environments when in managed workspace."""
        # Setup: Mock orchestrator to return managed workspace
        mock_workspace = Mock()
        mock_current_env = Mock()
        mock_current_env.name = "env1"

        # Mock workspace.list_environments()
        mock_env1 = Mock()
        mock_env1.name = "env1"
        mock_env1.path = Path("/workspace/env1")

        mock_env2 = Mock()
        mock_env2.name = "env2"
        mock_env2.path = Path("/workspace/env2")

        mock_workspace.list_environments.return_value = [mock_env1, mock_env2]

        # Mock orchestrator methods
        def mock_detect():
            return (True, mock_workspace, mock_current_env)

        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        # Mock _get_environment_info to return basic info
        def mock_get_info(env, current_env):
            return {
                "name": env.name,
                "is_current": env.name == current_env.name,
                "path": str(env.path),
                "created_at": "2025-01-01T00:00:00Z",
                "workflow_count": 5,
                "node_count": 10,
                "model_count": 3,
                "current_branch": "main"
            }

        monkeypatch.setattr("api.v2.environments._get_environment_info", mock_get_info)

        # Execute
        resp = await client.get("/v2/comfygit/environments")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["is_managed"] is True
        assert data["current"] == "env1"
        assert len(data["environments"]) == 2
        assert data["environments"][0]["name"] == "env1"
        assert data["environments"][0]["is_current"] is True
        assert data["environments"][1]["name"] == "env2"
        assert data["environments"][1]["is_current"] is False

    async def test_success_not_managed(self, client, monkeypatch):
        """Should return empty list when not in managed workspace."""
        # Setup: Not managed
        def mock_detect():
            return (False, None, None)

        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        # Execute
        resp = await client.get("/v2/comfygit/environments")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["is_managed"] is False
        assert data["current"] is None
        assert data["environments"] == []

    async def test_error_list_environments_fails(self, client, monkeypatch):
        """Should return 500 when list_environments raises exception."""
        # Setup
        mock_workspace = Mock()
        mock_current_env = Mock()
        mock_current_env.name = "env1"
        mock_workspace.list_environments.side_effect = Exception("List failed")

        def mock_detect():
            return (True, mock_workspace, mock_current_env)

        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        # Execute
        resp = await client.get("/v2/comfygit/environments")

        # Verify
        assert resp.status == 500
        data = await resp.json()
        assert "error" in data


@pytest.mark.integration
class TestSwitchEnvironmentEndpoint:
    """POST /v2/comfygit/switch_environment - Initiate environment switch."""

    async def test_success_initiate_switch(self, client, monkeypatch, tmp_path):
        """Should initiate switch and return success."""
        # Setup
        mock_workspace = Mock()
        mock_workspace.path = tmp_path
        mock_current_env = Mock()
        mock_current_env.name = "env1"

        # Mock workspace.get_environment to succeed for target
        mock_target_env = Mock()
        mock_target_env.name = "env2"
        mock_workspace.get_environment.return_value = mock_target_env

        def mock_detect():
            return (True, mock_workspace, mock_current_env)

        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        # Mock orchestrator methods
        monkeypatch.setattr("orchestrator.acquire_switch_lock", lambda _: True)
        monkeypatch.setattr("orchestrator.should_spawn_orchestrator_for_switch", lambda: False)
        monkeypatch.setattr("orchestrator.write_switch_request", Mock())

        # Mock delayed exit to prevent actual exit
        async def mock_delayed_exit():
            pass

        # Execute
        resp = await client.post("/v2/comfygit/switch_environment", json={
            "target_env": "env2"
        })

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "switching"
        assert "env2" in data["message"]

    async def test_error_not_managed(self, client, monkeypatch):
        """Should return 500 when not in managed environment."""
        def mock_detect():
            return (False, None, None)

        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        # Execute
        resp = await client.post("/v2/comfygit/switch_environment", json={
            "target_env": "env2"
        })

        # Verify
        assert resp.status == 500
        data = await resp.json()
        assert "error" in data
        assert "Not in managed environment" in data["error"]

    async def test_validation_missing_target_env(self, client, monkeypatch):
        """Should return 400 when target_env is missing."""
        # Setup
        mock_workspace = Mock()
        mock_current_env = Mock()

        def mock_detect():
            return (True, mock_workspace, mock_current_env)

        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        # Execute: No target_env in body
        resp = await client.post("/v2/comfygit/switch_environment", json={})

        # Verify
        assert resp.status == 400
        data = await resp.json()
        assert "error" in data
        assert "target_env required" in data["error"]

    async def test_error_target_env_not_found(self, client, monkeypatch):
        """Should return 404 when target environment doesn't exist."""
        # Setup
        from comfygit_core.models.exceptions import CDEnvironmentNotFoundError

        mock_workspace = Mock()
        mock_current_env = Mock()
        mock_current_env.name = "env1"

        # Mock workspace.get_environment to raise not found
        mock_workspace.get_environment.side_effect = CDEnvironmentNotFoundError("Not found")

        def mock_detect():
            return (True, mock_workspace, mock_current_env)

        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        # Execute
        resp = await client.post("/v2/comfygit/switch_environment", json={
            "target_env": "nonexistent"
        })

        # Verify
        assert resp.status == 404
        data = await resp.json()
        assert "error" in data
        assert "not found" in data["error"].lower()

    async def test_error_switch_already_in_progress(self, client, monkeypatch, tmp_path):
        """Should return 409 when switch already in progress."""
        # Setup
        mock_workspace = Mock()
        mock_workspace.path = tmp_path
        mock_current_env = Mock()
        mock_current_env.name = "env1"
        mock_workspace.get_environment.return_value = Mock()

        def mock_detect():
            return (True, mock_workspace, mock_current_env)

        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        # Mock acquire_switch_lock to return False (lock already held)
        monkeypatch.setattr("orchestrator.acquire_switch_lock", lambda _: False)

        # Execute
        resp = await client.post("/v2/comfygit/switch_environment", json={
            "target_env": "env2"
        })

        # Verify
        assert resp.status == 409
        data = await resp.json()
        assert "error" in data
        assert "already in progress" in data["error"]


@pytest.mark.integration
class TestSwitchStatusEndpoint:
    """GET /v2/comfygit/switch_status - Get environment switch status."""

    async def test_success_switch_in_progress(self, client, monkeypatch, tmp_path):
        """Should return switch status when switch is in progress."""
        # Setup
        mock_workspace = Mock()
        mock_workspace.path = tmp_path
        mock_current_env = Mock()

        def mock_detect():
            return (True, mock_workspace, mock_current_env)

        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        # Create mock status file
        metadata_dir = tmp_path / ".metadata"
        metadata_dir.mkdir()
        status_file = metadata_dir / ".switch_status.json"

        status_data = {
            "state": "syncing",
            "progress": 50,
            "message": "Syncing env2...",
            "target_env": "env2",
            "source_env": "env1",
            "updated_at": 1705776150.0
        }

        status_file.write_text(json.dumps(status_data))

        # Execute
        resp = await client.get("/v2/comfygit/switch_status")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["state"] == "syncing"
        assert data["progress"] == 50
        assert data["target_env"] == "env2"
        assert data["source_env"] == "env1"

    async def test_success_no_switch_in_progress(self, client, monkeypatch, tmp_path):
        """Should return idle when no switch in progress."""
        # Setup
        mock_workspace = Mock()
        mock_workspace.path = tmp_path
        mock_current_env = Mock()

        def mock_detect():
            return (True, mock_workspace, mock_current_env)

        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        # No status file exists

        # Execute
        resp = await client.get("/v2/comfygit/switch_status")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["state"] == "idle"
        assert "No switch in progress" in data["message"]

    async def test_success_not_managed_during_restart(self, client, monkeypatch):
        """Should return unknown state when server is restarting."""
        # Setup: Not managed (happens during restart)
        def mock_detect():
            return (False, None, None)

        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        # Execute
        resp = await client.get("/v2/comfygit/switch_status")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["state"] == "unknown"
        assert "restarting" in data["message"].lower()

    async def test_error_invalid_status_file(self, client, monkeypatch, tmp_path):
        """Should return 500 when status file is corrupted."""
        # Setup
        mock_workspace = Mock()
        mock_workspace.path = tmp_path
        mock_current_env = Mock()

        def mock_detect():
            return (True, mock_workspace, mock_current_env)

        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        # Create corrupted status file
        metadata_dir = tmp_path / ".metadata"
        metadata_dir.mkdir()
        status_file = metadata_dir / ".switch_status.json"
        status_file.write_text("invalid json{")

        # Execute
        resp = await client.get("/v2/comfygit/switch_status")

        # Verify
        assert resp.status == 500
        data = await resp.json()
        assert "error" in data
