"""Integration tests for update notice endpoints."""

import pytest


@pytest.mark.integration
class TestUpdateCheckEndpoint:
    async def test_success_update_available(self, client, mock_environment, monkeypatch):
        """Should return update_available=true when latest > current."""
        # Arrange: current version from env.get_manager_status()
        manager_status = type("ManagerStatus", (), {"current_version": "0.0.20"})()
        mock_environment.get_manager_status = lambda: manager_status

        # Avoid real GitHub call; reset cache and patch fetcher
        import api.v2.update_check as update_check_module
        monkeypatch.setattr(update_check_module, "_cached_latest", None)

        def fake_fetch():
            return {
                "latest_version": "0.0.21",
                "release_url": "https://github.com/comfygit-ai/comfygit-manager/releases/tag/v0.0.21",
                "changelog_summary": "Fixes and improvements",
            }

        monkeypatch.setattr(update_check_module, "_fetch_latest_release_from_github", fake_fetch)

        # Act
        resp = await client.get("/v2/comfygit/update-check")

        # Assert
        assert resp.status == 200
        data = await resp.json()
        assert data["current_version"] == "0.0.20"
        assert data["latest_version"] == "0.0.21"
        assert data["update_available"] is True
        assert data["release_url"].endswith("/tag/v0.0.21")
        assert data["changelog_summary"] == "Fixes and improvements"
        assert data["checked_at"] is not None

    async def test_dev_version_does_not_show_update(self, client, mock_environment, monkeypatch):
        """Should return update_available=false for dev installs."""
        manager_status = type("ManagerStatus", (), {"current_version": "0.0.20-dev"})()
        mock_environment.get_manager_status = lambda: manager_status

        import api.v2.update_check as update_check_module
        monkeypatch.setattr(update_check_module, "_cached_latest", None)

        monkeypatch.setattr(
            update_check_module,
            "_fetch_latest_release_from_github",
            lambda: {
                "latest_version": "0.0.21",
                "release_url": "https://github.com/comfygit-ai/comfygit-manager/releases/tag/v0.0.21",
                "changelog_summary": None,
            },
        )

        resp = await client.get("/v2/comfygit/update-check")
        assert resp.status == 200
        data = await resp.json()
        assert data["current_version"] == "0.0.20-dev"
        assert data["latest_version"] == "0.0.21"
        assert data["update_available"] is False

    async def test_network_failure_is_silent(self, client, mock_environment, monkeypatch):
        """Should never 500 on GitHub failures; returns JSON with null latest fields."""
        manager_status = type("ManagerStatus", (), {"current_version": "0.0.20"})()
        mock_environment.get_manager_status = lambda: manager_status

        import api.v2.update_check as update_check_module
        monkeypatch.setattr(update_check_module, "_cached_latest", None)

        def boom():
            raise RuntimeError("rate limited")

        monkeypatch.setattr(update_check_module, "_fetch_latest_release_from_github", boom)

        resp = await client.get("/v2/comfygit/update-check")
        assert resp.status == 200
        data = await resp.json()
        assert data["current_version"] == "0.0.20"
        assert data["latest_version"] is None
        assert data["update_available"] is False
        assert data["release_url"] is None
        assert data["changelog_summary"] is None
        assert data["checked_at"] is None


@pytest.mark.integration
class TestUpdateManagerEndpoint:
    async def test_success_update_manager(self, client, mock_environment):
        """Should call env.update_manager and return restart_required=true."""
        # Arrange
        result = type(
            "ManagerUpdateResult",
            (),
            {
                "changed": True,
                "old_version": "0.0.20",
                "new_version": "0.0.21",
                "message": "Updated from 0.0.20 → 0.0.21",
            },
        )()
        mock_environment.update_manager = lambda version="latest": result

        # Act
        resp = await client.post("/v2/comfygit/update")
        assert resp.status == 200
        data = await resp.json()

        # Assert
        assert data["status"] == "success"
        assert data["changed"] is True
        assert data["old_version"] == "0.0.20"
        assert data["new_version"] == "0.0.21"
        assert data["restart_required"] is True
        assert data["manual_instructions"] is None

    async def test_fallback_to_update_node(self, client, mock_environment):
        """Should fall back to env.update_node when update_manager is unavailable."""
        # Arrange: make update_manager non-callable
        mock_environment.update_manager = None

        result = type(
            "NodeUpdateResult",
            (),
            {
                "changed": True,
                "old_version": "0.0.20",
                "new_version": "0.0.21",
                "message": "Updated",
            },
        )()
        called = {"name": None}

        def fake_update_node(name):
            called["name"] = name
            return result

        mock_environment.update_node = fake_update_node

        # Act
        resp = await client.post("/v2/comfygit/update")
        assert resp.status == 200
        data = await resp.json()

        # Assert
        assert called["name"] == "comfygit-manager"
        assert data["status"] == "success"
        assert data["changed"] is True

    async def test_failure_returns_manual_instructions(self, client, mock_environment):
        """Should return a JSON error with manual instructions on failure."""
        def boom(version="latest"):
            raise RuntimeError("update failed")

        mock_environment.update_manager = boom

        resp = await client.post("/v2/comfygit/update")
        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "error"
        assert data["manual_instructions"]

