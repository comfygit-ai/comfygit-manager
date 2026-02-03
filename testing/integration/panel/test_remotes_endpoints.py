"""Integration tests for git remotes panel endpoints."""
import pytest
from unittest.mock import Mock
import sys
from pathlib import Path

# Add helpers to path
helpers_dir = Path(__file__).parent.parent.parent / "helpers"
if str(helpers_dir) not in sys.path:
    sys.path.insert(0, str(helpers_dir))


@pytest.mark.integration
class TestGetRemotesEndpoint:
    """GET /v2/comfygit/remotes - List all git remotes."""

    async def test_success_with_remotes(
        self,
        client,
        mock_environment,
        monkeypatch
    ):
        """Should return list of remotes with fetch/push URLs consolidated."""
        # Setup: git_manager.list_remotes returns separate fetch/push entries
        mock_environment.git_manager.list_remotes.return_value = [
            ("origin", "https://github.com/user/repo.git", "fetch"),
            ("origin", "https://github.com/user/repo.git", "push"),
            ("upstream", "https://github.com/other/repo.git", "fetch"),
            ("upstream", "git@github.com:other/repo.git", "push"),
        ]
        mock_environment.get_current_branch.return_value = "main"
        mock_environment.git_manager.get_current_branch.return_value = "main"

        # Mock git_config_get to return tracking remote
        def mock_config_get(repo_path, key):
            if key == "branch.main.remote":
                return "origin"
            return None

        monkeypatch.setattr(
            "api.v2.remotes.git_config_get",
            mock_config_get
        )

        # Execute
        resp = await client.get("/v2/comfygit/remotes")

        # Verify
        assert resp.status == 200
        data = await resp.json()
        assert "remotes" in data
        assert len(data["remotes"]) == 2  # Consolidated from 4 entries

        # Check origin remote
        origin = next((r for r in data["remotes"] if r["name"] == "origin"), None)
        assert origin is not None
        assert origin["fetch_url"] == "https://github.com/user/repo.git"
        assert origin["push_url"] == "https://github.com/user/repo.git"
        assert origin["is_default"] is True  # Current branch tracks origin

        # Check upstream remote
        upstream = next((r for r in data["remotes"] if r["name"] == "upstream"), None)
        assert upstream is not None
        assert upstream["fetch_url"] == "https://github.com/other/repo.git"
        assert upstream["push_url"] == "git@github.com:other/repo.git"
        assert upstream["is_default"] is False

    async def test_success_empty_remotes(
        self,
        client,
        mock_environment
    ):
        """Should return empty list when no remotes configured."""
        mock_environment.git_manager.list_remotes.return_value = []
        mock_environment.get_current_branch.return_value = "main"

        resp = await client.get("/v2/comfygit/remotes")

        assert resp.status == 200
        data = await resp.json()
        assert data["remotes"] == []

    async def test_includes_tracking_info(
        self,
        client,
        mock_environment
    ):
        """Should include current branch tracking info."""
        mock_environment.git_manager.list_remotes.return_value = [
            ("origin", "https://github.com/user/repo.git", "fetch"),
            ("origin", "https://github.com/user/repo.git", "push"),
        ]
        mock_environment.get_current_branch.return_value = "feature-branch"
        mock_environment.git_manager.get_current_branch.return_value = "feature-branch"

        resp = await client.get("/v2/comfygit/remotes")

        assert resp.status == 200
        data = await resp.json()
        # Tracking info should be present if branch tracks a remote
        assert "current_branch_tracking" in data or "remotes" in data

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.get("/v2/comfygit/remotes")

        assert resp.status == 500
        data = await resp.json()
        assert "error" in data


@pytest.mark.integration
class TestAddRemoteEndpoint:
    """POST /v2/comfygit/remotes - Add a new git remote."""

    async def test_success_add_remote(
        self,
        client,
        mock_environment
    ):
        """Should add a new remote successfully."""
        mock_environment.git_manager.add_remote.return_value = None

        resp = await client.post(
            "/v2/comfygit/remotes",
            json={"name": "upstream", "url": "https://github.com/other/repo.git"}
        )

        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"
        assert data["remote_name"] == "upstream"

        mock_environment.git_manager.add_remote.assert_called_once_with(
            "upstream", "https://github.com/other/repo.git"
        )

    async def test_error_missing_name(
        self,
        client,
        mock_environment
    ):
        """Should return 400 when name is missing."""
        resp = await client.post(
            "/v2/comfygit/remotes",
            json={"url": "https://github.com/other/repo.git"}
        )

        assert resp.status == 400
        data = await resp.json()
        assert "error" in data

    async def test_error_missing_url(
        self,
        client,
        mock_environment
    ):
        """Should return 400 when url is missing."""
        resp = await client.post(
            "/v2/comfygit/remotes",
            json={"name": "upstream"}
        )

        assert resp.status == 400
        data = await resp.json()
        assert "error" in data

    async def test_error_remote_already_exists(
        self,
        client,
        mock_environment
    ):
        """Should return 409 when remote already exists."""
        mock_environment.git_manager.add_remote.side_effect = OSError(
            "Remote 'origin' already exists"
        )

        resp = await client.post(
            "/v2/comfygit/remotes",
            json={"name": "origin", "url": "https://github.com/other/repo.git"}
        )

        assert resp.status == 409
        data = await resp.json()
        assert "error" in data

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.post(
            "/v2/comfygit/remotes",
            json={"name": "origin", "url": "https://github.com/repo.git"}
        )

        assert resp.status == 500


@pytest.mark.integration
class TestRemoveRemoteEndpoint:
    """DELETE /v2/comfygit/remotes/{name} - Remove a git remote."""

    async def test_success_remove_remote(
        self,
        client,
        mock_environment
    ):
        """Should remove a remote successfully."""
        mock_environment.git_manager.remove_remote.return_value = None

        resp = await client.delete("/v2/comfygit/remotes/upstream")

        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"
        assert data["remote_name"] == "upstream"

        mock_environment.git_manager.remove_remote.assert_called_once_with("upstream")

    async def test_error_remote_not_found(
        self,
        client,
        mock_environment
    ):
        """Should return 404 when remote doesn't exist."""
        mock_environment.git_manager.remove_remote.side_effect = ValueError(
            "Remote 'nonexistent' not found"
        )

        resp = await client.delete("/v2/comfygit/remotes/nonexistent")

        assert resp.status == 404
        data = await resp.json()
        assert "error" in data

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.delete("/v2/comfygit/remotes/origin")

        assert resp.status == 500


@pytest.mark.integration
class TestUpdateRemoteUrlEndpoint:
    """PATCH /v2/comfygit/remotes/{name} - Update remote URL(s)."""

    async def test_success_update_fetch_url(
        self,
        client,
        mock_environment
    ):
        """Should update fetch URL."""
        # Mock the set_url method (will be added)
        mock_environment.git_manager.set_remote_url = Mock(return_value=None)

        resp = await client.patch(
            "/v2/comfygit/remotes/origin",
            json={"url": "https://github.com/new/repo.git"}
        )

        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"

    async def test_success_update_both_urls(
        self,
        client,
        mock_environment
    ):
        """Should update both fetch and push URLs."""
        mock_environment.git_manager.set_remote_url = Mock(return_value=None)

        resp = await client.patch(
            "/v2/comfygit/remotes/origin",
            json={
                "url": "https://github.com/new/repo.git",
                "push_url": "git@github.com:new/repo.git"
            }
        )

        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"

    async def test_error_missing_url(
        self,
        client,
        mock_environment
    ):
        """Should return 400 when url is missing."""
        resp = await client.patch(
            "/v2/comfygit/remotes/origin",
            json={}
        )

        assert resp.status == 400
        data = await resp.json()
        assert "error" in data

    async def test_error_remote_not_found(
        self,
        client,
        mock_environment
    ):
        """Should return 404 when remote doesn't exist."""
        mock_environment.git_manager.set_remote_url = Mock(
            side_effect=ValueError("Remote 'nonexistent' not found")
        )

        resp = await client.patch(
            "/v2/comfygit/remotes/nonexistent",
            json={"url": "https://github.com/repo.git"}
        )

        assert resp.status == 404
        data = await resp.json()
        assert "error" in data

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.patch(
            "/v2/comfygit/remotes/origin",
            json={"url": "https://github.com/repo.git"}
        )

        assert resp.status == 500


@pytest.mark.integration
class TestFetchRemoteEndpoint:
    """POST /v2/comfygit/remotes/{name}/fetch - Fetch from a remote."""

    async def test_success_fetch_remote(
        self,
        client,
        mock_environment
    ):
        """Should fetch from remote successfully."""
        mock_environment.git_manager.fetch = Mock(return_value=None)

        resp = await client.post("/v2/comfygit/remotes/origin/fetch")

        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"
        assert data["remote_name"] == "origin"

        mock_environment.git_manager.fetch.assert_called_once_with("origin")

    async def test_error_remote_not_found(
        self,
        client,
        mock_environment
    ):
        """Should return 404 when remote doesn't exist."""
        mock_environment.git_manager.fetch = Mock(
            side_effect=ValueError("Remote 'nonexistent' not configured")
        )

        resp = await client.post("/v2/comfygit/remotes/nonexistent/fetch")

        assert resp.status == 404
        data = await resp.json()
        assert "error" in data

    async def test_error_fetch_failed(
        self,
        client,
        mock_environment
    ):
        """Should return 500 when fetch fails (network, auth, etc)."""
        mock_environment.git_manager.fetch = Mock(
            side_effect=OSError("Failed to connect to remote")
        )

        resp = await client.post("/v2/comfygit/remotes/origin/fetch")

        assert resp.status == 500
        data = await resp.json()
        assert "error" in data

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.post("/v2/comfygit/remotes/origin/fetch")

        assert resp.status == 500


@pytest.mark.integration
class TestRemoteSyncStatusEndpoint:
    """GET /v2/comfygit/remotes/{name}/status - Get ahead/behind status."""

    async def test_success_get_sync_status(
        self,
        client,
        mock_environment
    ):
        """Should return ahead/behind counts."""
        mock_environment.git_manager.get_sync_status = Mock(return_value={
            "ahead": 3,
            "behind": 1
        })
        mock_environment.get_current_branch.return_value = "main"

        resp = await client.get("/v2/comfygit/remotes/origin/status")

        assert resp.status == 200
        data = await resp.json()
        assert data["remote"] == "origin"
        assert data["branch"] == "main"
        assert data["ahead"] == 3
        assert data["behind"] == 1

    async def test_success_with_custom_branch(
        self,
        client,
        mock_environment
    ):
        """Should use branch from query param if provided."""
        mock_environment.git_manager.get_sync_status = Mock(return_value={
            "ahead": 0,
            "behind": 5
        })
        mock_environment.get_current_branch.return_value = "main"

        resp = await client.get("/v2/comfygit/remotes/origin/status?branch=develop")

        assert resp.status == 200
        data = await resp.json()
        assert data["branch"] == "develop"

        mock_environment.git_manager.get_sync_status.assert_called_once_with(
            "origin", "develop"
        )

    async def test_success_zero_counts(
        self,
        client,
        mock_environment
    ):
        """Should handle zero ahead/behind (in sync)."""
        mock_environment.git_manager.get_sync_status = Mock(return_value={
            "ahead": 0,
            "behind": 0
        })
        mock_environment.get_current_branch.return_value = "main"

        resp = await client.get("/v2/comfygit/remotes/origin/status")

        assert resp.status == 200
        data = await resp.json()
        assert data["ahead"] == 0
        assert data["behind"] == 0

    async def test_error_remote_not_found(
        self,
        client,
        mock_environment
    ):
        """Should return 404 when remote doesn't exist."""
        mock_environment.git_manager.get_sync_status = Mock(
            side_effect=ValueError("Remote 'nonexistent' not found")
        )
        mock_environment.get_current_branch.return_value = "main"

        resp = await client.get("/v2/comfygit/remotes/nonexistent/status")

        assert resp.status == 404
        data = await resp.json()
        assert "error" in data

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.get("/v2/comfygit/remotes/origin/status")

        assert resp.status == 500


@pytest.mark.integration
class TestPullPreviewEndpoint:
    """GET /v2/comfygit/remotes/{name}/pull-preview - Get pull preview."""

    async def test_success_with_incoming_commits(
        self,
        client,
        mock_environment
    ):
        """Should return incoming commits and changes preview."""
        mock_environment.git_manager.get_sync_status = Mock(return_value={
            "ahead": 0,
            "behind": 2
        })
        mock_environment.git_manager.get_version_history = Mock(return_value=[
            {"hash": "abc1234", "refs": "", "message": "Add new features", "date": "2025-01-15 11:00:00", "date_relative": "1 hour ago"},
            {"hash": "def5678", "refs": "", "message": "Fix bug", "date": "2025-01-15 10:00:00", "date_relative": "2 hours ago"}
        ])
        mock_environment.get_current_branch.return_value = "main"
        mock_environment.status.return_value = Mock(git=Mock(has_changes=False))

        resp = await client.get("/v2/comfygit/remotes/origin/pull-preview")

        assert resp.status == 200
        data = await resp.json()
        assert data["remote"] == "origin"
        assert data["branch"] == "main"
        assert data["commits_behind"] == 2
        assert len(data["commits"]) == 2
        assert data["commits"][0]["hash"] == "abc1234"
        assert data["commits"][0]["message"] == "Add new features"
        assert data["can_pull"] is True
        assert data["has_uncommitted_changes"] is False
        mock_environment.git_manager.get_version_history.assert_called_once_with(2, "HEAD..origin/main")

    async def test_blocked_by_uncommitted_changes(
        self,
        client,
        mock_environment
    ):
        """Should indicate blocked when uncommitted changes exist."""
        mock_environment.git_manager.get_sync_status = Mock(return_value={"ahead": 0, "behind": 1})
        mock_environment.get_current_branch.return_value = "main"
        mock_environment.status.return_value = Mock(git=Mock(has_changes=True))

        resp = await client.get("/v2/comfygit/remotes/origin/pull-preview")

        assert resp.status == 200
        data = await resp.json()
        assert data["has_uncommitted_changes"] is True
        assert data["can_pull"] is False
        assert data["block_reason"] == "uncommitted_changes"

    async def test_with_custom_branch(
        self,
        client,
        mock_environment
    ):
        """Should use branch from query param."""
        mock_environment.git_manager.get_sync_status = Mock(return_value={"ahead": 0, "behind": 0})
        mock_environment.get_current_branch.return_value = "main"
        mock_environment.status.return_value = Mock(git=Mock(has_changes=False))

        resp = await client.get("/v2/comfygit/remotes/origin/pull-preview?branch=develop")

        assert resp.status == 200
        data = await resp.json()
        assert data["branch"] == "develop"

    async def test_error_remote_not_found(
        self,
        client,
        mock_environment
    ):
        """Should return 404 when remote doesn't exist."""
        mock_environment.git_manager.get_sync_status = Mock(
            side_effect=ValueError("Remote 'nonexistent' not found")
        )
        mock_environment.get_current_branch.return_value = "main"

        resp = await client.get("/v2/comfygit/remotes/nonexistent/pull-preview")

        assert resp.status == 404
        data = await resp.json()
        assert "error" in data

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.get("/v2/comfygit/remotes/origin/pull-preview")

        assert resp.status == 500


@pytest.mark.integration
class TestPullEndpoint:
    """POST /v2/comfygit/remotes/{name}/pull - Pull from remote."""

    async def test_success_pull(
        self,
        client,
        mock_environment
    ):
        """Should pull from remote successfully."""
        mock_environment.pull_and_repair = Mock(return_value={
            "pull_output": "Updating abc123..def456\nFast-forward",
            "sync_result": Mock(
                nodes_installed=["comfyui-impact-pack"],
                nodes_removed=[],
                models_queued=2,
                errors=[]
            )
        })
        mock_environment.status.return_value = Mock(git=Mock(has_changes=False))
        mock_environment.get_current_branch.return_value = "main"

        resp = await client.post(
            "/v2/comfygit/remotes/origin/pull",
            json={"model_strategy": "skip"}
        )

        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"
        assert "pull_output" in data
        assert data["sync_result"]["nodes_installed"] == ["comfyui-impact-pack"]

    async def test_error_uncommitted_changes(
        self,
        client,
        mock_environment
    ):
        """Should return 400 when uncommitted changes exist."""
        mock_environment.status.return_value = Mock(git=Mock(has_changes=True))
        mock_environment.get_current_branch.return_value = "main"

        resp = await client.post(
            "/v2/comfygit/remotes/origin/pull",
            json={"model_strategy": "skip"}
        )

        assert resp.status == 400
        data = await resp.json()
        assert "uncommitted" in data["error"].lower()

    async def test_success_force_pull_with_uncommitted(
        self,
        client,
        mock_environment
    ):
        """Should allow force pull even with uncommitted changes."""
        mock_environment.pull_and_repair = Mock(return_value={
            "pull_output": "Force pulled",
            "sync_result": Mock(
                nodes_installed=[],
                nodes_removed=[],
                models_queued=0,
                errors=[]
            )
        })
        mock_environment.status.return_value = Mock(git=Mock(has_changes=True))
        mock_environment.get_current_branch.return_value = "main"
        mock_environment.checkout = Mock()  # Force checkout to discard changes

        resp = await client.post(
            "/v2/comfygit/remotes/origin/pull",
            json={"model_strategy": "skip", "force": True}
        )

        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"

    async def test_error_merge_conflict(
        self,
        client,
        mock_environment
    ):
        """Should return 409 when merge conflict occurs."""
        mock_environment.pull_and_repair = Mock(
            side_effect=ValueError("Merge conflict in workflows/test.json")
        )
        mock_environment.status.return_value = Mock(git=Mock(has_changes=False))
        mock_environment.get_current_branch.return_value = "main"

        resp = await client.post(
            "/v2/comfygit/remotes/origin/pull",
            json={"model_strategy": "skip"}
        )

        assert resp.status == 409
        data = await resp.json()
        assert "conflict" in data["error"].lower()

    async def test_error_remote_not_found(
        self,
        client,
        mock_environment
    ):
        """Should return 404 when remote doesn't exist."""
        mock_environment.pull_and_repair = Mock(
            side_effect=ValueError("Remote 'nonexistent' not found")
        )
        mock_environment.status.return_value = Mock(git=Mock(has_changes=False))
        mock_environment.get_current_branch.return_value = "main"

        resp = await client.post(
            "/v2/comfygit/remotes/nonexistent/pull",
            json={"model_strategy": "skip"}
        )

        assert resp.status == 404
        data = await resp.json()
        assert "error" in data

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.post(
            "/v2/comfygit/remotes/origin/pull",
            json={"model_strategy": "skip"}
        )

        assert resp.status == 500


@pytest.mark.integration
class TestPushPreviewEndpoint:
    """GET /v2/comfygit/remotes/{name}/push-preview - Get push preview."""

    async def test_success_with_outgoing_commits(
        self,
        client,
        mock_environment
    ):
        """Should return outgoing commits preview with commit details."""
        mock_environment.git_manager.get_sync_status = Mock(return_value={
            "ahead": 2,
            "behind": 0,
            "remote_branch_exists": True
        })
        mock_environment.git_manager.get_version_history = Mock(return_value=[
            {"hash": "abc1234", "refs": "", "message": "Add new feature", "date": "2025-01-15 11:00:00", "date_relative": "1 hour ago"},
            {"hash": "def5678", "refs": "", "message": "Fix bug", "date": "2025-01-15 10:00:00", "date_relative": "2 hours ago"},
        ])
        mock_environment.get_current_branch.return_value = "main"
        mock_environment.status.return_value = Mock(git=Mock(has_changes=False))

        resp = await client.get("/v2/comfygit/remotes/origin/push-preview")

        assert resp.status == 200
        data = await resp.json()
        assert data["remote"] == "origin"
        assert data["branch"] == "main"
        assert data["commits_ahead"] == 2
        assert data["can_push"] is True
        assert data["needs_force"] is False
        # Verify actual commit details are returned
        assert len(data["commits"]) == 2
        assert data["commits"][0]["hash"] == "abc1234"
        assert data["commits"][0]["message"] == "Add new feature"
        assert data["commits"][1]["hash"] == "def5678"

    async def test_success_first_push_returns_commits(
        self,
        client,
        mock_environment
    ):
        """Should return commits for first push (no remote branch)."""
        mock_environment.git_manager.get_sync_status = Mock(return_value={
            "ahead": 1,
            "behind": 0,
            "remote_branch_exists": False
        })
        mock_environment.git_manager.get_version_history = Mock(return_value=[
            {"hash": "abc1234", "refs": "HEAD -> main", "message": "Initial commit", "date": "2025-01-15 11:00:00", "date_relative": "1 hour ago"},
        ])
        mock_environment.get_current_branch.return_value = "main"
        mock_environment.status.return_value = Mock(git=Mock(has_changes=False))

        resp = await client.get("/v2/comfygit/remotes/origin/push-preview")

        assert resp.status == 200
        data = await resp.json()
        assert data["is_first_push"] is True
        assert len(data["commits"]) == 1
        assert data["commits"][0]["hash"] == "abc1234"
        assert data["commits"][0]["message"] == "Initial commit"

    async def test_needs_force_when_remote_ahead(
        self,
        client,
        mock_environment
    ):
        """Should indicate force needed when remote has new commits."""
        mock_environment.git_manager.get_sync_status = Mock(return_value={
            "ahead": 1,
            "behind": 2
        })
        mock_environment.get_current_branch.return_value = "main"
        mock_environment.status.return_value = Mock(git=Mock(has_changes=False))

        resp = await client.get("/v2/comfygit/remotes/origin/push-preview")

        assert resp.status == 200
        data = await resp.json()
        assert data["remote_has_new_commits"] is True
        assert data["needs_force"] is True

    async def test_blocked_by_uncommitted_changes(
        self,
        client,
        mock_environment
    ):
        """Should indicate blocked when uncommitted changes exist."""
        mock_environment.git_manager.get_sync_status = Mock(return_value={"ahead": 1, "behind": 0})
        mock_environment.get_current_branch.return_value = "main"
        mock_environment.status.return_value = Mock(git=Mock(has_changes=True))

        resp = await client.get("/v2/comfygit/remotes/origin/push-preview")

        assert resp.status == 200
        data = await resp.json()
        assert data["has_uncommitted_changes"] is True
        assert data["can_push"] is False
        assert data["block_reason"] == "uncommitted_changes"

    async def test_error_remote_not_found(
        self,
        client,
        mock_environment
    ):
        """Should return 404 when remote doesn't exist."""
        mock_environment.git_manager.get_sync_status = Mock(
            side_effect=ValueError("Remote 'nonexistent' not found")
        )
        mock_environment.get_current_branch.return_value = "main"

        resp = await client.get("/v2/comfygit/remotes/nonexistent/push-preview")

        assert resp.status == 404
        data = await resp.json()
        assert "error" in data

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.get("/v2/comfygit/remotes/origin/push-preview")

        assert resp.status == 500


@pytest.mark.integration
class TestPushEndpoint:
    """POST /v2/comfygit/remotes/{name}/push - Push to remote."""

    async def test_success_push(
        self,
        client,
        mock_environment
    ):
        """Should push to remote successfully."""
        mock_environment.push_commits = Mock(return_value="Pushed to origin/main")
        mock_environment.git_manager.get_sync_status = Mock(return_value={"ahead": 2, "behind": 0})
        mock_environment.status.return_value = Mock(git=Mock(has_changes=False))
        mock_environment.get_current_branch.return_value = "main"

        resp = await client.post(
            "/v2/comfygit/remotes/origin/push",
            json={}
        )

        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"
        assert "push_output" in data
        assert data["commits_pushed"] == 2

    async def test_error_uncommitted_changes(
        self,
        client,
        mock_environment
    ):
        """Should return 400 when uncommitted changes exist."""
        mock_environment.status.return_value = Mock(git=Mock(has_changes=True))
        mock_environment.get_current_branch.return_value = "main"

        resp = await client.post(
            "/v2/comfygit/remotes/origin/push",
            json={}
        )

        assert resp.status == 400
        data = await resp.json()
        assert "uncommitted" in data["error"].lower()

    async def test_success_force_push(
        self,
        client,
        mock_environment
    ):
        """Should allow force push when specified."""
        mock_environment.push_commits = Mock(return_value="Force pushed")
        mock_environment.git_manager.get_sync_status = Mock(return_value={"ahead": 1, "behind": 2})
        mock_environment.status.return_value = Mock(git=Mock(has_changes=False))
        mock_environment.get_current_branch.return_value = "main"

        resp = await client.post(
            "/v2/comfygit/remotes/origin/push",
            json={"force": True}
        )

        assert resp.status == 200
        data = await resp.json()
        assert data["status"] == "success"
        mock_environment.push_commits.assert_called_once_with("origin", "main", True)

    async def test_error_remote_ahead_without_force(
        self,
        client,
        mock_environment
    ):
        """Should return 409 when remote is ahead and force not specified."""
        mock_environment.push_commits = Mock(
            side_effect=OSError("Updates were rejected because remote has newer commits")
        )
        mock_environment.git_manager.get_sync_status = Mock(return_value={"ahead": 1, "behind": 0})
        mock_environment.status.return_value = Mock(git=Mock(has_changes=False))
        mock_environment.get_current_branch.return_value = "main"

        resp = await client.post(
            "/v2/comfygit/remotes/origin/push",
            json={}
        )

        assert resp.status == 409
        data = await resp.json()
        assert "error" in data

    async def test_error_remote_not_found(
        self,
        client,
        mock_environment
    ):
        """Should return 404 when remote doesn't exist."""
        mock_environment.push_commits = Mock(
            side_effect=ValueError("Remote 'nonexistent' not found")
        )
        mock_environment.git_manager.get_sync_status = Mock(return_value={"ahead": 0, "behind": 0})
        mock_environment.status.return_value = Mock(git=Mock(has_changes=False))
        mock_environment.get_current_branch.return_value = "main"

        resp = await client.post(
            "/v2/comfygit/remotes/nonexistent/push",
            json={}
        )

        assert resp.status == 404
        data = await resp.json()
        assert "error" in data

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.post(
            "/v2/comfygit/remotes/origin/push",
            json={}
        )

        assert resp.status == 500
