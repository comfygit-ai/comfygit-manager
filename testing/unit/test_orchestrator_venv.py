"""Unit tests for orchestrator virtual environment setup."""

import sys
import pytest


@pytest.mark.unit
class TestOrchestratorVenv:
    """Test orchestrator venv creation and setup."""

    def test_ensure_orchestrator_venv_idempotent(self, mock_orchestrator_venv, mocker):
        """Should not recreate venv if it already exists."""
        from server.orchestrator import ensure_orchestrator_venv

        # Mark with timestamp
        marker = mock_orchestrator_venv / "bin" / ".created"
        marker.touch()
        original_mtime = marker.stat().st_mtime
        mocker.patch("server.orchestrator._orchestrator_venv_is_current", return_value=True)

        ensure_orchestrator_venv(mock_orchestrator_venv)

        # Should not have been recreated
        assert marker.exists()
        assert marker.stat().st_mtime == original_mtime

    def test_ensure_orchestrator_venv_tries_uv_first(self, temp_dir, mocker):
        """Should try UVCommand first, fall back to venv module on failure."""
        from server.orchestrator import ensure_orchestrator_venv

        venv_path = temp_dir / ".orchestrator_venv"

        # Mock _create_venv_with_uv to succeed
        mock_uv_create = mocker.patch(
            "server.orchestrator._create_venv_with_uv",
            return_value=True
        )

        # Mock venv.create as fallback (shouldn't be called if uv succeeds)
        mock_venv_create = mocker.patch("venv.create")

        ensure_orchestrator_venv(venv_path)

        # _create_venv_with_uv should have been called
        mock_uv_create.assert_called_once()
        # venv.create should NOT have been called (uv succeeded)
        mock_venv_create.assert_not_called()

    def test_ensure_orchestrator_venv_falls_back_to_stdlib(self, temp_dir, mocker):
        """Should fall back to venv module if UVCommand fails."""
        from server.orchestrator import ensure_orchestrator_venv

        venv_path = temp_dir / ".orchestrator_venv"

        # Make UVCommand raise an exception to trigger fallback
        mocker.patch(
            "server.orchestrator._create_venv_with_uv",
            return_value=False
        )

        # Mock venv.create and subprocess.run for fallback
        mock_venv_create = mocker.patch("venv.create")
        mock_run = mocker.patch("subprocess.run")

        ensure_orchestrator_venv(venv_path)

        # venv.create should have been called with symlinks=True
        mock_venv_create.assert_called_once_with(
            venv_path, with_pip=True, clear=True, symlinks=True
        )

        # pip install should have been called
        mock_run.assert_called_once()
        args = mock_run.call_args[0][0]
        assert "install" in args
        assert "comfygit-core" in args

    def test_ensure_orchestrator_venv_recreates_stale_directory(self, temp_dir, mocker):
        """Should remove a stale venv directory when its Python executable is missing."""
        from server.orchestrator import ensure_orchestrator_venv

        venv_path = temp_dir / ".orchestrator_venv"
        stale_file = venv_path / "stale.txt"
        stale_file.parent.mkdir(parents=True)
        stale_file.write_text("old")

        mock_uv_create = mocker.patch(
            "server.orchestrator._create_venv_with_uv",
            return_value=True
        )

        ensure_orchestrator_venv(venv_path)

        assert not stale_file.exists()
        mock_uv_create.assert_called_once()

    def test_orchestrator_venv_isolated_from_comfyui(self, mock_orchestrator_venv, mock_environment):
        """Orchestrator venv should be independent of ComfyUI environment."""
        orch_python = mock_orchestrator_venv / "bin" / "python"
        env_python = mock_environment / ".venv" / "bin" / "python"

        # Different paths
        assert orch_python != env_python

        # Both should point to valid python executables
        assert orch_python.exists()
        assert env_python.exists()

    def test_get_orchestrator_python_path(self, mock_orchestrator_venv, temp_dir):
        """Should correctly locate orchestrator Python executable."""
        from server.orchestrator import get_orchestrator_python

        # Mock custom node structure
        custom_node_root = temp_dir / "comfygit-manager"
        server_dir = custom_node_root / "server"
        server_dir.mkdir(parents=True)

        venv_dir = server_dir / ".orchestrator_venv"
        venv_dir.mkdir()
        (venv_dir / "bin").mkdir()

        python_exe = venv_dir / "bin" / "python"
        python_exe.symlink_to(sys.executable)

        result = get_orchestrator_python(custom_node_root)

        assert result == python_exe
        assert result.exists()

    def test_get_orchestrator_python_not_found(self, temp_dir):
        """Should raise error if orchestrator venv not found."""
        from server.orchestrator import get_orchestrator_python

        custom_node_root = temp_dir / "comfygit-manager"
        custom_node_root.mkdir()

        with pytest.raises(RuntimeError, match="Orchestrator venv not found"):
            get_orchestrator_python(custom_node_root)
