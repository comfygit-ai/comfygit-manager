"""Integration tests for environment management panel endpoints."""
import pytest
from unittest.mock import Mock, MagicMock
import json
from pathlib import Path
from comfygit_core.models.exceptions import CDEnvironmentNotFoundError


@pytest.mark.integration
class TestListEnvironmentsEndpoint:
    """GET /v2/comfygit/environments - List all available environments."""

    async def test_success_with_environments(self, client, monkeypatch):
        """Should return list of environments when in managed workspace."""
        # Setup: Mock orchestrator to return managed workspace
        mock_workspace = Mock()
        mock_current_env = Mock()
        mock_current_env.name = "env1"
        mock_workspace.path = Path("/workspace")

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
        monkeypatch.setattr("orchestrator.read_orchestrator_pid", lambda _: None)
        monkeypatch.setenv("COMFYGIT_SUPERVISED", "1")

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
        assert data["orchestrator_active"] is False
        assert data["is_supervised"] is True

    async def test_success_not_managed(self, client, monkeypatch):
        """Should return empty list when not in managed workspace."""
        # Setup: Not managed
        def mock_detect():
            return (False, None, None)

        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)
        monkeypatch.setenv("COMFYGIT_SUPERVISED", "0")

        # Execute
        resp = await client.get("/v2/comfygit/environments")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["is_managed"] is False
        assert data["current"] is None
        assert data["environments"] == []
        assert data["orchestrator_active"] is False
        assert data["is_supervised"] is False

    async def test_orchestrator_active_flag(self, client, monkeypatch, tmp_path):
        """Should report orchestrator_active when PID is alive."""
        mock_workspace = Mock()
        mock_workspace.path = tmp_path
        mock_current_env = Mock()
        mock_current_env.name = "env1"

        mock_env = Mock()
        mock_env.name = "env1"
        mock_env.path = tmp_path / "env1"
        mock_workspace.list_environments.return_value = [mock_env]

        def mock_detect():
            return (True, mock_workspace, mock_current_env)

        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)
        monkeypatch.setattr("orchestrator.read_orchestrator_pid", lambda _: 123)
        monkeypatch.setattr("orchestrator._is_process_running", lambda _: True)
        monkeypatch.setenv("COMFYGIT_SUPERVISED", "0")

        def mock_get_info(env, current_env):
            return {
                "name": env.name,
                "is_current": True,
                "path": str(env.path),
                "created_at": "2025-01-01T00:00:00Z",
                "workflow_count": 1,
                "node_count": 1,
                "model_count": 1,
                "current_branch": "main"
            }

        monkeypatch.setattr("api.v2.environments._get_environment_info", mock_get_info)

        resp = await client.get("/v2/comfygit/environments")

        assert resp.status == 200
        data = await resp.json()
        assert data["orchestrator_active"] is True
        assert data["is_supervised"] is False

    async def test_error_list_environments_fails(self, client, monkeypatch):
        """Should return 500 when list_environments raises exception."""
        # Setup
        mock_workspace = Mock()
        mock_workspace.path = Path("/workspace")
        mock_current_env = Mock()
        mock_current_env.name = "env1"
        mock_workspace.list_environments.side_effect = Exception("List failed")

        def mock_detect():
            return (True, mock_workspace, mock_current_env)

        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)
        monkeypatch.setattr("orchestrator.read_orchestrator_pid", lambda _: None)

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
        monkeypatch.setattr("orchestrator.read_orchestrator_pid", lambda _: None)
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

    async def test_error_orchestrator_active_unsupervised(self, client, monkeypatch, tmp_path):
        """Should block switch when orchestrator is active and not supervised."""
        mock_workspace = Mock()
        mock_workspace.path = tmp_path
        mock_current_env = Mock()
        mock_current_env.name = "env1"
        mock_workspace.get_environment.return_value = Mock()

        def mock_detect():
            return (True, mock_workspace, mock_current_env)

        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)
        monkeypatch.setattr("orchestrator.acquire_switch_lock", lambda _: True)
        monkeypatch.setattr("orchestrator.read_orchestrator_pid", lambda _: 999)
        monkeypatch.setattr("orchestrator._is_process_running", lambda _: True)
        monkeypatch.setenv("COMFYGIT_SUPERVISED", "0")

        release_mock = Mock()
        monkeypatch.setattr("orchestrator.release_switch_lock", release_mock)
        should_spawn_mock = Mock()
        monkeypatch.setattr("orchestrator.should_spawn_orchestrator_for_switch", should_spawn_mock)

        resp = await client.post("/v2/comfygit/switch_environment", json={
            "target_env": "env2"
        })

        assert resp.status == 409
        data = await resp.json()
        assert data["error"] == "orchestrator_active"
        release_mock.assert_called_once()
        should_spawn_mock.assert_not_called()

    async def test_switch_allows_supervised_with_orchestrator(self, client, monkeypatch, tmp_path):
        """Supervised process should proceed even if orchestrator is active."""
        mock_workspace = Mock()
        mock_workspace.path = tmp_path
        mock_current_env = Mock()
        mock_current_env.name = "env1"
        mock_workspace.get_environment.return_value = Mock()

        def mock_detect():
            return (True, mock_workspace, mock_current_env)

        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)
        monkeypatch.setattr("orchestrator.acquire_switch_lock", lambda _: True)
        monkeypatch.setattr("orchestrator.read_orchestrator_pid", lambda _: 999)
        monkeypatch.setattr("orchestrator._is_process_running", lambda _: True)
        monkeypatch.setenv("COMFYGIT_SUPERVISED", "1")

        monkeypatch.setattr("orchestrator.should_spawn_orchestrator_for_switch", lambda: False)
        write_mock = Mock()
        monkeypatch.setattr("orchestrator.write_switch_request", write_mock)

        resp = await client.post("/v2/comfygit/switch_environment", json={
            "target_env": "env2"
        })

        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "switching"
        write_mock.assert_called_once()

    async def test_switch_allows_when_orchestrator_pid_stale(self, client, monkeypatch, tmp_path):
        """Unsupervised process should proceed when orchestrator PID is stale."""
        mock_workspace = Mock()
        mock_workspace.path = tmp_path
        mock_current_env = Mock()
        mock_current_env.name = "env1"
        mock_workspace.get_environment.return_value = Mock()

        def mock_detect():
            return (True, mock_workspace, mock_current_env)

        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)
        monkeypatch.setattr("orchestrator.acquire_switch_lock", lambda _: True)
        monkeypatch.setattr("orchestrator.read_orchestrator_pid", lambda _: 999)
        monkeypatch.setattr("orchestrator._is_process_running", lambda _: False)
        monkeypatch.setenv("COMFYGIT_SUPERVISED", "0")

        monkeypatch.setattr("orchestrator.should_spawn_orchestrator_for_switch", lambda: False)
        write_mock = Mock()
        monkeypatch.setattr("orchestrator.write_switch_request", write_mock)

        resp = await client.post("/v2/comfygit/switch_environment", json={
            "target_env": "env2"
        })

        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "switching"
        write_mock.assert_called_once()


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


@pytest.mark.integration
class TestCreateEnvironmentEndpoint:
    """POST /v2/workspace/environments - Create a new environment."""

    @pytest.fixture(autouse=True)
    def reset_create_state(self):
        """Reset global create task state before each test."""
        import api.v2.environments as env_module
        with env_module._create_task_lock:
            env_module._create_task_state = {
                "state": "idle",
                "task_id": None,
                "environment_name": None,
                "phase": None,
                "progress": 0,
                "message": "No creation in progress",
                "error": None
            }
        yield
        # Reset again after test
        with env_module._create_task_lock:
            env_module._create_task_state = {
                "state": "idle",
                "task_id": None,
                "environment_name": None,
                "phase": None,
                "progress": 0,
                "message": "No creation in progress",
                "error": None
            }

    async def test_error_without_workspace_path_in_unmanaged(self, client, monkeypatch):
        """Should return 500 when no workspace_path and orchestrator can't detect.

        This is the CURRENT (broken) behavior - environment creation fails
        during first-time setup because orchestrator.detect_environment_type()
        returns (False, None, None).
        """
        # Setup: Not managed, no explicit workspace_path
        def mock_detect():
            return (False, None, None)

        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        # Execute: POST without workspace_path
        resp = await client.post("/v2/workspace/environments", json={
            "name": "my-new-env",
            "python_version": "3.12"
        })

        # Verify: Should fail (this tests the current broken behavior)
        assert resp.status == 500
        data = await resp.json()
        assert data["status"] == "error"
        assert "Not in managed workspace" in data["message"]

    async def test_success_with_explicit_workspace_path(self, client, monkeypatch, tmp_path):
        """Should create environment when workspace_path is explicitly provided.

        Bug #3: During first-time setup, the frontend passes workspace_path
        but the backend ignores it and calls orchestrator.detect_environment_type()
        which fails because the workspace was just created and isn't detectable.
        """
        import api.v2.environments as env_module

        # Setup: Mock workspace
        mock_workspace = Mock()
        mock_workspace.path = tmp_path
        mock_workspace.list_environments.return_value = []

        # Mock WorkspaceFactory.find in the environments module
        monkeypatch.setattr(env_module.WorkspaceFactory, "find", lambda path: mock_workspace)

        # Mock orchestrator to return NOT managed (simulating first-time setup)
        monkeypatch.setattr("orchestrator.detect_environment_type", lambda: (False, None, None))

        # Mock run_sync to return immediately
        async def mock_run_sync(func, *args, **kwargs):
            return func(*args, **kwargs)
        monkeypatch.setattr(env_module, "run_sync", mock_run_sync)

        # Mock the background thread to avoid actual creation
        monkeypatch.setattr(env_module.threading, "Thread", MagicMock())

        # Execute: POST with workspace_path
        resp = await client.post("/v2/workspace/environments", json={
            "name": "my-new-env",
            "python_version": "3.12",
            "workspace_path": str(tmp_path)
        })

        # Verify: Should start creation, not fail with "Not in managed workspace"
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "started"
        assert "my-new-env" in data["message"]

    async def test_success_falls_back_to_detection_when_no_workspace_path(
        self, client, monkeypatch, tmp_path
    ):
        """Should fall back to orchestrator detection when workspace_path not provided."""
        import api.v2.environments as env_module

        # Setup: Managed workspace detected
        mock_workspace = Mock()
        mock_workspace.path = tmp_path
        mock_workspace.list_environments.return_value = []

        monkeypatch.setattr("orchestrator.detect_environment_type", lambda: (True, mock_workspace, None))

        # Mock run_sync to return immediately
        async def mock_run_sync(func, *args, **kwargs):
            return func(*args, **kwargs)
        monkeypatch.setattr(env_module, "run_sync", mock_run_sync)

        monkeypatch.setattr(env_module.threading, "Thread", MagicMock())

        # Execute: POST without workspace_path
        resp = await client.post("/v2/workspace/environments", json={
            "name": "my-new-env",
            "python_version": "3.12"
        })

        # Verify: Should work via detection
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "started"

    async def test_error_workspace_path_not_found(self, client, monkeypatch):
        """Should return 404 when explicit workspace_path doesn't exist."""
        from comfygit_core.models.exceptions import CDWorkspaceNotFoundError

        def mock_find(path):
            raise CDWorkspaceNotFoundError(f"Workspace not found at {path}")

        import api.v2.environments as env_module
        monkeypatch.setattr(env_module.WorkspaceFactory, "find", mock_find)

        # Execute: POST with invalid workspace_path
        resp = await client.post("/v2/workspace/environments", json={
            "name": "my-new-env",
            "workspace_path": "/nonexistent/path"
        })

        # Verify
        assert resp.status == 404
        data = await resp.json()
        assert "not found" in data["message"].lower()

    async def test_validation_missing_name(self, client, monkeypatch, tmp_path):
        """Should return 400 when name is missing."""
        mock_workspace = Mock()
        mock_workspace.path = tmp_path

        def mock_detect():
            return (True, mock_workspace, None)

        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        # Execute: POST without name
        resp = await client.post("/v2/workspace/environments", json={
            "python_version": "3.12"
        })

        # Verify
        assert resp.status == 400
        data = await resp.json()
        assert "name" in data["message"].lower()


@pytest.mark.integration
class TestGetEnvironmentDetailEndpoint:
    """GET /v2/comfygit/environments/{name} - Get detailed info for a single environment."""

    def _make_mock_status(self):
        """Create a mock EnvironmentStatus with populated workflow/node/model data."""
        status = Mock()

        # Git
        status.git = Mock()
        status.git.current_branch = "develop"

        # Workflow sync status
        status.workflow = Mock()
        status.workflow.sync_status = Mock()
        status.workflow.sync_status.synced = ["wf_synced.json"]
        status.workflow.sync_status.new = ["wf_new.json"]
        status.workflow.sync_status.modified = ["wf_modified.json"]
        status.workflow.sync_status.deleted = ["wf_deleted.json"]
        status.workflow.sync_status.total_count = 4

        # Missing models
        mock_model = Mock()
        mock_model.model = Mock()
        mock_model.model.filename = "sd_xl.safetensors"
        mock_model.model.category = "checkpoints"
        mock_model.workflow_names = ["wf_synced.json", "wf_new.json"]
        mock_model.criticality = "required"
        mock_model.can_download = True
        status.missing_models = [mock_model]

        # Comparison (not used by new endpoint, but present on status)
        status.comparison = Mock()
        status.comparison.missing_nodes = set()
        status.comparison.extra_nodes = set()
        status.comparison.version_mismatches = []

        return status

    def _make_mock_nodes(self):
        """Create mock NodeInfo list."""
        node1 = Mock()
        node1.name = "ComfyUI-Impact-Pack"
        node1.version = "1.2.0"
        node1.source = "registry"

        node2 = Mock()
        node2.name = "ComfyUI-Manager"
        node2.version = "0.5.0"
        node2.source = "git"

        return [node1, node2]

    def _setup_managed_workspace(self, monkeypatch, mock_env, mock_current_env=None):
        """Helper to set up managed workspace with environment."""
        mock_workspace = Mock()

        if mock_current_env is None:
            mock_current_env = Mock()
            mock_current_env.name = "current-env"

        mock_workspace.get_environment = Mock(return_value=mock_env)

        def mock_detect():
            return (True, mock_workspace, mock_current_env)

        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)
        return mock_workspace

    async def test_success_returns_full_detail(self, client, monkeypatch):
        """Should return full environment detail with workflows, nodes, models."""
        mock_env = Mock()
        mock_env.name = "my-env"
        mock_env.path = Path("/workspace/environments/my-env")
        mock_env.status = Mock(return_value=self._make_mock_status())
        mock_env.list_nodes = Mock(return_value=self._make_mock_nodes())

        mock_workspace = self._setup_managed_workspace(monkeypatch, mock_env)

        resp = await client.get("/v2/comfygit/environments/my-env")

        assert resp.status == 200
        data = await resp.json()
        assert data["name"] == "my-env"
        assert data["current_branch"] == "develop"
        assert data["path"] == str(Path("/workspace/environments/my-env"))

        # Workflows categorized by sync state
        assert data["workflows"]["synced"] == ["wf_synced.json"]
        assert data["workflows"]["new"] == ["wf_new.json"]
        assert data["workflows"]["modified"] == ["wf_modified.json"]
        assert data["workflows"]["deleted"] == ["wf_deleted.json"]

        # Nodes with detail
        assert len(data["nodes"]) == 2
        assert data["nodes"][0]["name"] == "ComfyUI-Impact-Pack"
        assert data["nodes"][0]["version"] == "1.2.0"
        assert data["nodes"][0]["source"] == "registry"

        # Models with detail
        assert len(data["models"]["missing"]) == 1
        model = data["models"]["missing"][0]
        assert model["filename"] == "sd_xl.safetensors"
        assert model["category"] == "checkpoints"
        assert model["workflow_names"] == ["wf_synced.json", "wf_new.json"]
        assert model["criticality"] == "required"
        assert model["can_download"] is True

        # Counts
        assert data["workflow_count"] == 4
        assert data["node_count"] == 2
        assert data["model_count"] == 1

    async def test_success_is_current_true(self, client, monkeypatch):
        """Should set is_current=True when environment is the active one."""
        mock_env = Mock()
        mock_env.name = "active-env"
        mock_env.path = Path("/workspace/environments/active-env")
        mock_env.status = Mock(return_value=self._make_mock_status())
        mock_env.list_nodes = Mock(return_value=[])

        mock_current_env = Mock()
        mock_current_env.name = "active-env"
        self._setup_managed_workspace(monkeypatch, mock_env, mock_current_env)

        resp = await client.get("/v2/comfygit/environments/active-env")

        assert resp.status == 200
        data = await resp.json()
        assert data["is_current"] is True

    async def test_success_is_current_false(self, client, monkeypatch):
        """Should set is_current=False when environment is not active."""
        mock_env = Mock()
        mock_env.name = "other-env"
        mock_env.path = Path("/workspace/environments/other-env")
        mock_env.status = Mock(return_value=self._make_mock_status())
        mock_env.list_nodes = Mock(return_value=[])

        mock_current_env = Mock()
        mock_current_env.name = "active-env"
        self._setup_managed_workspace(monkeypatch, mock_env, mock_current_env)

        resp = await client.get("/v2/comfygit/environments/other-env")

        assert resp.status == 200
        data = await resp.json()
        assert data["is_current"] is False

    async def test_error_not_managed_workspace(self, client, monkeypatch):
        """Should return 500 when not in managed workspace."""
        def mock_detect():
            return (False, None, None)

        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        resp = await client.get("/v2/comfygit/environments/some-env")

        assert resp.status == 500
        data = await resp.json()
        assert "error" in data

    async def test_error_environment_not_found(self, client, monkeypatch):
        """Should return 404 when environment name doesn't exist."""
        mock_workspace = Mock()
        mock_current_env = Mock()
        mock_current_env.name = "current"

        mock_workspace.get_environment = Mock(
            side_effect=CDEnvironmentNotFoundError("Not found")
        )

        def mock_detect():
            return (True, mock_workspace, mock_current_env)

        monkeypatch.setattr("orchestrator.detect_environment_type", mock_detect)

        resp = await client.get("/v2/comfygit/environments/nonexistent")

        assert resp.status == 404
        data = await resp.json()
        assert "error" in data
        assert "not found" in data["error"].lower()

    async def test_error_internal_exception(self, client, monkeypatch):
        """Should return 500 when status/list_nodes raises an exception."""
        mock_env = Mock()
        mock_env.name = "broken-env"
        mock_env.path = Path("/workspace/environments/broken-env")
        mock_env.status = Mock(side_effect=Exception("Disk read error"))

        self._setup_managed_workspace(monkeypatch, mock_env)

        resp = await client.get("/v2/comfygit/environments/broken-env")

        assert resp.status == 500
        data = await resp.json()
        assert data["error"] == "internal_error"
        assert "Disk read error" in data["message"]
