"""Unit tests for environment detection logic."""

import os
from pathlib import Path
import pytest


@pytest.mark.unit
class TestEnvironmentDetection:
    """Test environment detection (managed vs unmanaged)."""

    def test_detect_managed_environment(self, mock_workspace, mock_environment, monkeypatch):
        """Should detect managed environment when CWD is in workspace/environments/*/ComfyUI."""
        comfyui_path = mock_environment / "ComfyUI"
        monkeypatch.chdir(comfyui_path)

        # This will test the actual detection logic once implemented
        from server.orchestrator import detect_environment_type

        is_managed, workspace, environment = detect_environment_type()

        assert is_managed is True
        assert workspace is not None
        assert environment is not None
        assert environment.name == "env1"

    def test_detect_unmanaged_environment_outside_workspace(self, temp_dir, monkeypatch):
        """Should detect unmanaged environment when outside workspace."""
        # Create standalone ComfyUI
        comfyui_path = temp_dir / "standalone" / "ComfyUI"
        comfyui_path.mkdir(parents=True)
        (comfyui_path / "main.py").touch()

        monkeypatch.chdir(comfyui_path)

        from server.orchestrator import detect_environment_type

        is_managed, workspace, environment = detect_environment_type()

        assert is_managed is False
        assert workspace is None
        assert environment is None

    def test_detect_unmanaged_environment_wrong_structure(self, mock_workspace, monkeypatch):
        """Should detect unmanaged when in workspace but wrong directory structure."""
        # Create ComfyUI in wrong location
        wrong_path = mock_workspace / "ComfyUI"
        wrong_path.mkdir()
        (wrong_path / "main.py").touch()

        monkeypatch.chdir(wrong_path)

        from server.orchestrator import detect_environment_type

        is_managed, workspace, environment = detect_environment_type()

        assert is_managed is False
        # Workspace might be found, but environment is None
        assert environment is None

    def test_find_workspace_root_via_env_var(self, mock_workspace, monkeypatch):
        """Should find workspace via COMFYGIT_HOME environment variable."""
        monkeypatch.setenv("COMFYGIT_HOME", str(mock_workspace))
        monkeypatch.chdir("/tmp")  # Different directory

        from server.orchestrator import find_workspace_root

        root = find_workspace_root()

        assert root == mock_workspace

    def test_find_workspace_root_via_default_location(self, mock_workspace, monkeypatch, temp_dir):
        """Should find workspace at ~/comfygit default location."""
        # Create mock home with comfygit
        fake_home = temp_dir / "home"
        fake_home.mkdir()
        default_workspace = fake_home / "comfygit"
        default_workspace.mkdir()
        (default_workspace / "pyproject.toml").touch()
        (default_workspace / "environments").mkdir()

        monkeypatch.setenv("HOME", str(fake_home))
        monkeypatch.chdir(temp_dir)

        from server.orchestrator import find_workspace_root

        root = find_workspace_root()

        assert root == default_workspace

    def test_find_workspace_root_via_upward_search(self, mock_workspace, mock_environment, monkeypatch):
        """Should find workspace by searching upward from CWD."""
        comfyui_path = mock_environment / "ComfyUI"
        monkeypatch.chdir(comfyui_path)

        from server.orchestrator import find_workspace_root

        root = find_workspace_root()

        assert root == mock_workspace

    def test_find_workspace_root_not_found(self, temp_dir, monkeypatch):
        """Should return None when no workspace found."""
        monkeypatch.chdir(temp_dir)
        monkeypatch.delenv("COMFYGIT_HOME", raising=False)

        from server.orchestrator import find_workspace_root

        root = find_workspace_root()

        assert root is None

    def test_should_spawn_orchestrator_not_supervised(self, mock_workspace, metadata_dir):
        """Should spawn orchestrator when not supervised and none running."""
        from server.orchestrator import should_spawn_orchestrator_for_switch

        # No COMFYGIT_SUPERVISED env var, no PID file
        should_spawn = should_spawn_orchestrator_for_switch()

        assert should_spawn is True

    def test_should_not_spawn_orchestrator_when_supervised(self, mock_workspace, metadata_dir, monkeypatch):
        """Should not spawn orchestrator when already supervised."""
        monkeypatch.setenv("COMFYGIT_SUPERVISED", "1")

        from server.orchestrator import should_spawn_orchestrator_for_switch

        should_spawn = should_spawn_orchestrator_for_switch()

        assert should_spawn is False

    def test_should_not_spawn_orchestrator_when_already_running(self, mock_workspace, metadata_dir):
        """Should not spawn orchestrator when PID file exists with running process."""
        # Write PID file with current process (guaranteed to be running)
        pid_file = metadata_dir / ".orchestrator.pid"
        pid_file.write_text(str(os.getpid()))

        from server.orchestrator import should_spawn_orchestrator_for_switch

        should_spawn = should_spawn_orchestrator_for_switch()

        assert should_spawn is False

    def test_should_spawn_orchestrator_when_stale_pid(self, mock_workspace, metadata_dir):
        """Should spawn orchestrator when PID file exists but process is dead."""
        # Write PID file with non-existent PID
        pid_file = metadata_dir / ".orchestrator.pid"
        pid_file.write_text("99999")

        from server.orchestrator import should_spawn_orchestrator_for_switch

        should_spawn = should_spawn_orchestrator_for_switch()

        assert should_spawn is True
        # Stale PID file should be cleaned up
        assert not pid_file.exists()
