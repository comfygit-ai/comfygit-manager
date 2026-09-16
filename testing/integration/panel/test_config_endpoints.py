"""Integration tests for configuration panel endpoints."""
import pytest
from types import SimpleNamespace
from unittest.mock import Mock
from pathlib import Path
from comfygit_core.models import CredentialStatus, CredentialSource


def _mock_workspace():
    workspace = Mock()
    workspace.test_credentials = {"civitai": None, "huggingface": None}
    workspace.get_credential_status.side_effect = lambda provider: CredentialStatus(
        provider, bool(workspace.test_credentials[provider.value]),
        CredentialSource.SECURE_STORE if workspace.test_credentials[provider.value] else CredentialSource.NONE,
    )
    return workspace



@pytest.mark.integration
class TestGetConfigEndpoint:
    """GET /v2/comfygit/config - Get workspace configuration settings."""

    async def test_success_with_config(self, client, monkeypatch):
        """Should return 200 with config when workspace has settings."""
        # Setup: Mock environment with workspace config
        mock_env = Mock()
        mock_env.name = "test-env"
        mock_env.get_manifest_node.return_value = None

        # Mock workspace with public config facade methods
        mock_workspace = _mock_workspace()
        mock_workspace.path = Path("/workspace")
        mock_env.workspace = mock_workspace

        # Mock config data
        mock_workspace.get_models_directory.return_value = Path("/workspace/models")
        mock_workspace.test_credentials["civitai"] = "test_token_1234"
        mock_workspace.test_credentials["huggingface"] = None

        # Patch get_environment_from_cwd
        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: mock_env)

        # Execute
        resp = await client.get("/v2/comfygit/config")

        # Verify
        assert resp.status == 200
        data = await resp.json()

        # Check required fields
        assert "workspace_path" in data
        assert "models_path" in data
        assert "civitai_api_key" in data
        assert "auto_sync_models" in data
        assert "confirm_destructive" in data

        # Check values
        assert data["workspace_path"] == str(Path("/workspace"))
        assert data["models_path"] == str(Path("/workspace/models"))
        # No token characters should be returned
        assert data["civitai_api_key"] == "****"
        assert isinstance(data["auto_sync_models"], bool)
        assert isinstance(data["confirm_destructive"], bool)

    async def test_success_with_active_overlays(self, client, monkeypatch):
        """Should expose active dependency overlays from the running environment."""
        mock_env = Mock()
        mock_env.name = "test-env"
        mock_env.get_manifest_node.return_value = None
        mock_env.list_overlays.return_value = [
            SimpleNamespace(
                name=".local",
                description="Local editable sources",
                is_local=True,
                is_active=True,
                requires=[],
                is_stock=False,
            )
        ]

        mock_workspace = _mock_workspace()
        mock_workspace.path = Path("/workspace")
        mock_env.workspace = mock_workspace
        mock_workspace.get_models_directory.return_value = Path("/workspace/models")
        mock_workspace.test_credentials["civitai"] = None
        mock_workspace.test_credentials["huggingface"] = None

        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: mock_env)

        resp = await client.get("/v2/comfygit/config")

        assert resp.status == 200
        data = await resp.json()
        assert data["active_overlay_names"] == [".local"]
        assert data["active_overlays"] == [{
            "name": ".local",
            "description": "Local editable sources",
            "is_local": True,
            "is_active": True,
            "requires": [],
            "is_stock": False,
        }]

    async def test_success_with_no_civitai_token(self, client, monkeypatch):
        """Should return config with None civitai_api_key when not set."""
        # Setup
        mock_env = Mock()
        mock_env.name = "test-env"
        mock_env.get_manifest_node.return_value = None
        mock_workspace = _mock_workspace()
        mock_workspace.path = Path("/workspace")
        mock_env.workspace = mock_workspace

        mock_workspace.get_models_directory.return_value = Path("/workspace/models")
        mock_workspace.test_credentials["civitai"] = None  # No token
        mock_workspace.test_credentials["huggingface"] = None

        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: mock_env)

        # Execute
        resp = await client.get("/v2/comfygit/config")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["civitai_api_key"] is None

    async def test_success_with_huggingface_token(self, client, monkeypatch):
        """Should return masked HF token when set."""
        # Setup
        mock_env = Mock()
        mock_env.name = "test-env"
        mock_env.get_manifest_node.return_value = None
        mock_workspace = _mock_workspace()
        mock_workspace.path = Path("/workspace")
        mock_env.workspace = mock_workspace

        mock_workspace.get_models_directory.return_value = Path("/workspace/models")
        mock_workspace.test_credentials["civitai"] = None
        mock_workspace.test_credentials["huggingface"] = "hf_1234567890abcdef"

        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: mock_env)

        # Execute
        resp = await client.get("/v2/comfygit/config")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        # No token characters should be returned
        assert data["huggingface_token"] == "****"

    async def test_success_with_no_huggingface_token(self, client, monkeypatch):
        """Should return None for HF token when not set."""
        # Setup
        mock_env = Mock()
        mock_env.name = "test-env"
        mock_env.get_manifest_node.return_value = None
        mock_workspace = _mock_workspace()
        mock_workspace.path = Path("/workspace")
        mock_env.workspace = mock_workspace

        mock_workspace.get_models_directory.return_value = Path("/workspace/models")
        mock_workspace.test_credentials["civitai"] = None
        mock_workspace.test_credentials["huggingface"] = None

        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: mock_env)

        # Execute
        resp = await client.get("/v2/comfygit/config")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["huggingface_token"] is None

    async def test_success_with_short_token(self, client, monkeypatch):
        """Should fully mask tokens shorter than 4 characters."""
        # Setup
        mock_env = Mock()
        mock_env.name = "test-env"
        mock_env.get_manifest_node.return_value = None
        mock_workspace = _mock_workspace()
        mock_workspace.path = Path("/workspace")
        mock_env.workspace = mock_workspace

        mock_workspace.get_models_directory.return_value = Path("/workspace/models")
        mock_workspace.test_credentials["civitai"] = "abc"  # Short token
        mock_workspace.test_credentials["huggingface"] = None

        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: mock_env)

        # Execute
        resp = await client.get("/v2/comfygit/config")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        # Short token should be fully masked
        assert data["civitai_api_key"] == "****"

    async def test_success_with_no_models_directory(self, client, monkeypatch):
        """Should return config with None models_path when not configured."""
        # Setup
        mock_env = Mock()
        mock_env.name = "test-env"
        mock_env.get_manifest_node.return_value = None
        mock_workspace = _mock_workspace()
        mock_workspace.path = Path("/workspace")
        mock_env.workspace = mock_workspace

        # Simulate ComfyDockError when models directory not set
        from comfygit_core.models import ComfyDockError
        mock_workspace.get_models_directory.side_effect = ComfyDockError("No models directory set")
        mock_workspace.test_credentials["civitai"] = None
        mock_workspace.test_credentials["huggingface"] = None

        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: mock_env)

        # Execute
        resp = await client.get("/v2/comfygit/config")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["models_path"] is None

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        # Setup: No environment
        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: None)

        # Execute
        resp = await client.get("/v2/comfygit/config")

        # Verify
        assert resp.status == 500
        data = await resp.json()
        assert "error" in data


@pytest.mark.integration
class TestUpdateConfigEndpoint:
    """POST /v2/comfygit/config - Update workspace configuration settings."""

    async def test_success_update_civitai_token(self, client, monkeypatch):
        """Should return 200 and update civitai token."""
        # Setup
        mock_env = Mock()
        mock_env.name = "test-env"
        mock_workspace = _mock_workspace()
        mock_workspace.path = Path("/workspace")
        mock_env.workspace = mock_workspace

        mock_workspace.set_civitai_token = Mock()

        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: mock_env)

        # Execute
        resp = await client.post("/v2/comfygit/config", json={
            "civitai_api_key": "new_token_5678"
        })

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "updated"

        # Verify the workspace facade was called
        mock_workspace.set_civitai_token.assert_called_once_with("new_token_5678")

    async def test_success_clear_civitai_token(self, client, monkeypatch):
        """Should clear civitai token when set to None."""
        # Setup
        mock_env = Mock()
        mock_env.name = "test-env"
        mock_workspace = _mock_workspace()
        mock_workspace.path = Path("/workspace")
        mock_env.workspace = mock_workspace

        mock_workspace.set_civitai_token = Mock()

        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: mock_env)

        # Execute
        resp = await client.post("/v2/comfygit/config", json={
            "civitai_api_key": None
        })

        # Verify
        assert resp.status == 200
        mock_workspace.set_civitai_token.assert_called_once_with(None)

    async def test_success_update_huggingface_token(self, client, monkeypatch):
        """Should return 200 and update HuggingFace token."""
        # Setup
        mock_env = Mock()
        mock_env.name = "test-env"
        mock_workspace = _mock_workspace()
        mock_workspace.path = Path("/workspace")
        mock_env.workspace = mock_workspace

        mock_workspace.set_huggingface_token = Mock()

        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: mock_env)

        # Execute
        resp = await client.post("/v2/comfygit/config", json={
            "huggingface_token": "hf_new_token_abc123"
        })

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "updated"

        # Verify the workspace facade was called
        mock_workspace.set_huggingface_token.assert_called_once_with("hf_new_token_abc123")

    async def test_success_clear_huggingface_token(self, client, monkeypatch):
        """Should clear HuggingFace token when set to None."""
        # Setup
        mock_env = Mock()
        mock_env.name = "test-env"
        mock_workspace = _mock_workspace()
        mock_workspace.path = Path("/workspace")
        mock_env.workspace = mock_workspace

        mock_workspace.set_huggingface_token = Mock()

        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: mock_env)

        # Execute
        resp = await client.post("/v2/comfygit/config", json={
            "huggingface_token": None
        })

        # Verify
        assert resp.status == 200
        mock_workspace.set_huggingface_token.assert_called_once_with(None)

    async def test_success_update_models_path(self, client, monkeypatch):
        """Should return 200 and update models directory."""
        # Setup
        mock_env = Mock()
        mock_env.name = "test-env"
        mock_workspace = _mock_workspace()
        mock_workspace.path = Path("/workspace")
        mock_workspace.set_models_directory = Mock()
        mock_env.workspace = mock_workspace

        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: mock_env)

        # Execute
        resp = await client.post("/v2/comfygit/config", json={
            "models_path": "/workspace/new_models"
        })

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "updated"

        # Verify workspace method was called
        mock_workspace.set_models_directory.assert_called_once()
        call_args = mock_workspace.set_models_directory.call_args[0]
        assert str(call_args[0]) == str(Path("/workspace/new_models"))

    async def test_success_partial_update(self, client, monkeypatch):
        """Should update only provided fields."""
        # Setup
        mock_env = Mock()
        mock_env.name = "test-env"
        mock_workspace = _mock_workspace()
        mock_workspace.path = Path("/workspace")
        mock_env.workspace = mock_workspace

        mock_workspace.set_civitai_token = Mock()

        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: mock_env)

        # Execute - only update civitai_api_key
        resp = await client.post("/v2/comfygit/config", json={
            "civitai_api_key": "partial_token"
        })

        # Verify
        assert resp.status == 200
        mock_workspace.set_civitai_token.assert_called_once_with("partial_token")

    async def test_validation_invalid_json(self, client, monkeypatch):
        """Should return 400 when request body is invalid JSON."""
        # Setup
        mock_env = Mock()
        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: mock_env)

        # Execute - send invalid JSON
        resp = await client.post("/v2/comfygit/config", data="not-json")

        # Verify
        assert resp.status == 400
        data = await resp.json()
        assert "error" in data

    async def test_validation_invalid_models_path(self, client, monkeypatch):
        """Should return 400 when models_path doesn't exist."""
        # Setup
        mock_env = Mock()
        mock_env.name = "test-env"
        mock_workspace = _mock_workspace()
        mock_workspace.path = Path("/workspace")

        # Mock set_models_directory to raise error for invalid path
        from comfygit_core.models import ComfyDockError
        mock_workspace.set_models_directory.side_effect = ComfyDockError("Directory does not exist")
        mock_env.workspace = mock_workspace

        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: mock_env)

        # Execute
        resp = await client.post("/v2/comfygit/config", json={
            "models_path": "/nonexistent/path"
        })

        # Verify
        assert resp.status == 400
        data = await resp.json()
        assert "error" in data

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        # Setup: No environment
        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: None)

        # Execute
        resp = await client.post("/v2/comfygit/config", json={
            "civitai_api_key": "test"
        })

        # Verify
        assert resp.status == 500
        data = await resp.json()
        assert "error" in data

    async def test_ignored_unsupported_fields(self, client, monkeypatch):
        """Should ignore unsupported fields like auto_sync_models and confirm_destructive."""
        # Setup
        mock_env = Mock()
        mock_env.name = "test-env"
        mock_workspace = _mock_workspace()
        mock_workspace.path = Path("/workspace")
        mock_env.workspace = mock_workspace

        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: mock_env)

        # Execute - send unsupported fields (should be ignored for now)
        resp = await client.post("/v2/comfygit/config", json={
            "auto_sync_models": True,
            "confirm_destructive": False
        })

        # Verify - should succeed but not call any setters
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "updated"


@pytest.mark.integration
class TestGetConfigWithoutEnvironment:
    """GET /v2/comfygit/config with workspace_path fallback (no running environment)."""

    async def test_success_with_workspace_path_param(self, client, monkeypatch, tmp_path):
        """Should return 200 with config when workspace_path param is provided and no env running."""
        # Setup: No environment, but workspace_path is provided
        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: None)

        # Create mock workspace with public config facade methods
        mock_workspace = _mock_workspace()
        mock_workspace.path = tmp_path
        mock_workspace.get_models_directory.return_value = tmp_path / "models"
        mock_workspace.test_credentials["civitai"] = "test_token"
        mock_workspace.test_credentials["huggingface"] = None

        # Import config module and patch Workspace class
        from api.v2 import config as config_module
        monkeypatch.setattr(config_module.Workspace, "from_path", lambda path: mock_workspace)

        # Execute with workspace_path query param
        resp = await client.get(f"/v2/comfygit/config?workspace_path={tmp_path}")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert "workspace_path" in data
        assert "models_path" in data
        assert "civitai_api_key" in data

    async def test_success_reads_orchestrator_config_with_workspace_path(self, client, monkeypatch, tmp_path):
        """Should read comfyui_extra_args from workspace config when no env running."""
        # Setup: No environment
        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: None)

        # Create real orchestrator config file
        metadata_dir = tmp_path / ".metadata"
        metadata_dir.mkdir()
        import json
        with open(metadata_dir / "orchestrator_config.json", "w") as f:
            json.dump({"comfyui": {"extra_args": ["--lowvram", "--listen", "0.0.0.0"]}}, f)

        # Create mock workspace
        mock_workspace = _mock_workspace()
        mock_workspace.path = tmp_path
        mock_workspace.get_models_directory.return_value = None
        mock_workspace.test_credentials["civitai"] = None
        mock_workspace.test_credentials["huggingface"] = None

        from api.v2 import config as config_module
        monkeypatch.setattr(config_module.Workspace, "from_path", lambda path: mock_workspace)

        # Execute
        resp = await client.get(f"/v2/comfygit/config?workspace_path={tmp_path}")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["comfyui_extra_args"] == ["--lowvram", "--listen", "0.0.0.0"]

    async def test_error_no_environment_and_no_workspace_path(self, client, monkeypatch):
        """Should return 500 when no environment and no workspace_path provided."""
        # Setup: No environment, no workspace_path param
        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: None)

        # Execute without workspace_path param
        resp = await client.get("/v2/comfygit/config")

        # Verify - should fail with 500
        assert resp.status == 500
        data = await resp.json()
        assert "error" in data


@pytest.mark.integration
class TestUpdateConfigWithoutEnvironment:
    """POST /v2/comfygit/config with workspace_path fallback (no running environment)."""

    async def test_success_update_extra_args_with_workspace_path(self, client, monkeypatch, tmp_path):
        """Should update comfyui_extra_args when workspace_path param is provided."""
        # Setup: No environment
        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: None)

        # Create metadata dir for config file
        metadata_dir = tmp_path / ".metadata"
        metadata_dir.mkdir()

        # Create mock workspace
        mock_workspace = _mock_workspace()
        mock_workspace.path = tmp_path

        from api.v2 import config as config_module
        monkeypatch.setattr(config_module.Workspace, "from_path", lambda path: mock_workspace)

        # Execute
        resp = await client.post(
            f"/v2/comfygit/config?workspace_path={tmp_path}",
            json={"comfyui_extra_args": ["--lowvram"]}
        )

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "updated"

        # Verify file was written
        import json
        with open(metadata_dir / "orchestrator_config.json") as f:
            config = json.load(f)
        assert config["comfyui"]["extra_args"] == ["--lowvram"]

    async def test_success_update_civitai_token_with_workspace_path(self, client, monkeypatch, tmp_path):
        """Should update civitai_api_key when workspace_path param is provided."""
        # Setup: No environment
        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: None)

        # Create mock workspace
        mock_workspace = _mock_workspace()
        mock_workspace.path = tmp_path
        mock_workspace.set_civitai_token = Mock()

        from api.v2 import config as config_module
        monkeypatch.setattr(config_module.Workspace, "from_path", lambda path: mock_workspace)

        # Execute
        resp = await client.post(
            f"/v2/comfygit/config?workspace_path={tmp_path}",
            json={"civitai_api_key": "new_token"}
        )

        # Verify
        assert resp.status == 200
        mock_workspace.set_civitai_token.assert_called_once_with("new_token")

    async def test_error_no_environment_and_no_workspace_path(self, client, monkeypatch):
        """Should return 500 when no environment and no workspace_path provided."""
        # Setup: No environment, no workspace_path param
        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: None)

        # Execute without workspace_path param
        resp = await client.post("/v2/comfygit/config", json={"civitai_api_key": "test"})

        # Verify - should fail with 500
        assert resp.status == 500
        data = await resp.json()
        assert "error" in data


@pytest.mark.integration
class TestCredentialSafety:
    @pytest.mark.parametrize("payload", [
        [], 4, None,
        {"huggingface_token": 123},
        {"huggingface_token": " "},
        {"huggingface_token": "****"},
        {"civitai_api_key": "new-token", "comfyui_extra_args": "--listen"},
        {"huggingface_token": "new-token", "models_path": []},
    ])
    async def test_rejects_invalid_payload_before_writes(
        self, client, monkeypatch, payload
    ):
        import json
        workspace = _mock_workspace()
        env = Mock(workspace=workspace)
        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: env)
        response = await client.post(
            "/v2/comfygit/config", data=json.dumps(payload),
            headers={"Content-Type": "application/json"},
        )
        assert response.status == 400
        workspace.set_huggingface_token.assert_not_called()
        workspace.set_civitai_token.assert_not_called()
        workspace.set_models_directory.assert_not_called()

    async def test_secure_store_failure_is_actionable_and_redacted(self, client, monkeypatch):
        from comfygit_core.models import CDCredentialStoreError
        workspace = _mock_workspace()
        workspace.set_huggingface_token.side_effect = CDCredentialStoreError(
            "backend error with submitted secret hf_private_test_value"
        )
        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: Mock(workspace=workspace))
        response = await client.post("/v2/comfygit/config", json={"huggingface_token": "hf_private_test_value"})
        assert response.status == 503
        body = await response.json()
        assert body["error_code"] == "credential_storage_unavailable"
        assert "HF_TOKEN" in body["error"]
        assert "hf_private_test_value" not in str(body)

    async def test_get_uses_only_credential_metadata(self, client, monkeypatch, tmp_path):
        workspace = _mock_workspace()
        workspace.path = tmp_path
        workspace.get_models_directory.return_value = tmp_path / "models"
        workspace.get_credential_status.side_effect = lambda provider: CredentialStatus(
            provider, True, CredentialSource.ENVIRONMENT, storage_available=False,
            message="A backend message that must not be sent to browsers",
        )
        env = Mock(workspace=workspace)
        env.get_manifest_node.return_value = None
        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: env)
        response = await client.get("/v2/comfygit/config")
        assert response.status == 200
        body = await response.json()
        assert body["huggingface_token"] == "****"
        assert body["credentials"]["huggingface"] == {
            "configured": True, "source": "environment",
            "storage_available": False, "migration_required": False,
        }
        workspace.get_huggingface_token.assert_not_called()
        workspace.get_civitai_token.assert_not_called()
        assert "backend message" not in str(body)

    async def test_real_core_secure_store_round_trip(self, client, monkeypatch, tmp_path):
        from comfygit_core import Workspace
        from comfygit_core.models import MemoryCredentialStore

        for variable in ("HF_TOKEN", "HUGGING_FACE_HUB_TOKEN", "CIVITAI_API_TOKEN"):
            monkeypatch.delenv(variable, raising=False)
        monkeypatch.setenv("HF_HOME", str(tmp_path / "hf"))
        monkeypatch.setenv("HF_TOKEN_PATH", str(tmp_path / "hf" / "token"))
        store = MemoryCredentialStore()
        workspace = Workspace.create(tmp_path / "workspace", credential_store=store)
        env = Mock(workspace=workspace)
        env.get_manifest_node.return_value = None
        monkeypatch.setattr("comfygit_panel.get_environment_from_cwd", lambda: env)

        response = await client.post("/v2/comfygit/config", json={"huggingface_token": "hf_test_round_trip"})
        assert response.status == 200
        assert "hf_test_round_trip" in store.values.values()
        status_response = await client.get("/v2/comfygit/config")
        assert status_response.status == 200
        status = await status_response.json()
        assert status["credentials"]["huggingface"]["source"] == "secure_store"
        assert status["huggingface_token"] == "****"
        assert "hf_test_round_trip" not in str(status)
        for path in workspace.path.rglob("*.json"):
            assert "hf_test_round_trip" not in path.read_text()
        clear_response = await client.post("/v2/comfygit/config", json={"huggingface_token": None})
        assert clear_response.status == 200
        assert not store.values
