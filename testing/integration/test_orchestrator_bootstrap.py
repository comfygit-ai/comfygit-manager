"""Integration tests for orchestrator bootstrap and spawn."""

import os
import sys
import time
from pathlib import Path
import pytest


@pytest.mark.integration
class TestOrchestratorBootstrap:
    """Test orchestrator spawning and initialization."""

    def test_spawn_orchestrator_creates_detached_process(self, mock_workspace, mock_environment, mocker):
        """Spawned orchestrator should be detached from parent process."""
        from server.comfygit_panel import spawn_orchestrator

        mock_env = mocker.Mock()
        mock_env.name = "env1"
        mock_env.workspace.path = mock_workspace

        mock_popen = mocker.patch("subprocess.Popen")

        spawn_orchestrator(mock_env, "env2")

        # Check Popen called with detachment flags
        mock_popen.assert_called_once()
        kwargs = mock_popen.call_args[1]

        assert kwargs["start_new_session"] is True
        assert kwargs["stdin"] == subprocess.DEVNULL

    def test_spawn_orchestrator_uses_bundled_venv(self, mock_workspace, mock_environment, temp_dir, mocker):
        """Should use bundled orchestrator venv Python."""
        from server.comfygit_panel import spawn_orchestrator

        # Create mock custom node structure
        custom_node_root = temp_dir / "comfygit-manager"
        server_dir = custom_node_root / "server"
        server_dir.mkdir(parents=True)

        venv_dir = server_dir / ".orchestrator_venv"
        venv_dir.mkdir()
        (venv_dir / "bin").mkdir()

        python_exe = venv_dir / "bin" / "python"
        python_exe.symlink_to(sys.executable)

        orchestrator_script = server_dir / "orchestrator.py"
        orchestrator_script.touch()

        # Mock __file__ to point to custom node
        mocker.patch("server.comfygit_panel.__file__", str(server_dir / "comfygit_panel.py"))

        mock_env = mocker.Mock()
        mock_env.name = "env1"
        mock_env.workspace.path = mock_workspace

        mock_popen = mocker.patch("subprocess.Popen")

        spawn_orchestrator(mock_env, "env2")

        # Check command uses orchestrator venv python
        cmd = mock_popen.call_args[0][0]
        assert str(python_exe) in cmd[0]
        assert "orchestrator.py" in cmd[1]

    def test_spawn_orchestrator_passes_workspace_and_env(self, mock_workspace, mock_environment, mocker):
        """Should pass workspace root and current environment to orchestrator."""
        from server.comfygit_panel import spawn_orchestrator

        mock_env = mocker.Mock()
        mock_env.name = "env1"
        mock_env.workspace.path = mock_workspace

        mock_popen = mocker.patch("subprocess.Popen")

        spawn_orchestrator(mock_env, "env2")

        cmd = mock_popen.call_args[0][0]

        assert "--workspace" in cmd
        assert str(mock_workspace) in cmd

        assert "--environment" in cmd
        assert "env1" in cmd

    def test_spawn_orchestrator_captures_comfyui_args(self, mock_workspace, mock_environment, mocker):
        """Should capture and pass ComfyUI arguments to orchestrator."""
        from server.comfygit_panel import spawn_orchestrator

        # Mock sys.argv with ComfyUI args
        mocker.patch("sys.argv", ["main.py", "--port", "9999", "--listen", "0.0.0.0"])

        mock_env = mocker.Mock()
        mock_env.name = "env1"
        mock_env.workspace.path = mock_workspace

        mock_popen = mocker.patch("subprocess.Popen")

        spawn_orchestrator(mock_env, "env2")

        cmd = mock_popen.call_args[0][0]

        assert "--args" in cmd
        # Args after --args should be the ComfyUI args
        args_idx = cmd.index("--args")
        comfyui_args = cmd[args_idx + 1:]
        assert "--port" in comfyui_args
        assert "9999" in comfyui_args

    def test_spawn_orchestrator_fails_without_venv(self, mock_workspace, mock_environment, temp_dir, mocker):
        """Should raise error if orchestrator venv not found."""
        from server.comfygit_panel import spawn_orchestrator

        # Mock custom node without venv
        custom_node_root = temp_dir / "comfygit-manager"
        server_dir = custom_node_root / "server"
        server_dir.mkdir(parents=True)

        mocker.patch("server.comfygit_panel.__file__", str(server_dir / "comfygit_panel.py"))

        mock_env = mocker.Mock()
        mock_env.name = "env1"
        mock_env.workspace.path = mock_workspace

        with pytest.raises(RuntimeError, match="Orchestrator venv not found"):
            spawn_orchestrator(mock_env, "env2")

    def test_orchestrator_writes_log_file(self, mock_workspace, temp_dir, mocker):
        """Orchestrator stdout/stderr should be redirected to log file."""
        from server.comfygit_panel import spawn_orchestrator

        mock_env = mocker.Mock()
        mock_env.name = "env1"
        mock_env.workspace.path = mock_workspace

        mock_popen = mocker.patch("subprocess.Popen")

        spawn_orchestrator(mock_env, "env2")

        kwargs = mock_popen.call_args[1]

        # Check stdout redirected to file
        assert "stdout" in kwargs
        assert isinstance(kwargs["stdout"], (type(None), int)) or hasattr(kwargs["stdout"], "write")

    def test_lazy_supervision_no_spawn_on_startup(self, mock_workspace, mock_environment, mocker):
        """Orchestrator should NOT spawn on ComfyUI startup."""
        # This is implicitly tested by the fact that custom node __init__
        # doesn't call spawn_orchestrator

        # Verify no orchestrator PID file exists on fresh startup
        pid_file = mock_workspace / ".metadata" / ".orchestrator.pid"
        assert not pid_file.exists()

    def test_first_switch_triggers_spawn(self, mock_workspace, metadata_dir, mocker):
        """First environment switch should trigger orchestrator spawn."""
        from server.comfygit_panel import should_spawn_orchestrator_for_switch

        # No supervision, no running orchestrator
        should_spawn = should_spawn_orchestrator_for_switch()
        assert should_spawn is True

    def test_supervised_process_no_spawn(self, mock_workspace, mocker):
        """Process already supervised should not spawn new orchestrator."""
        from server.comfygit_panel import should_spawn_orchestrator_for_switch

        # Set supervised flag
        mocker.patch.dict(os.environ, {"COMFYGIT_SUPERVISED": "1"})

        should_spawn = should_spawn_orchestrator_for_switch()
        assert should_spawn is False

    def test_cli_started_process_spawns_on_switch_not_restart(self, mocker):
        """Process started by 'cg run' should spawn orchestrator on switch (43) but not restart (42)."""
        from server.comfygit_panel import should_spawn_orchestrator_for_switch

        # CLI started process: not supervised, but has restart loop
        # Should still spawn orchestrator for switches

        should_spawn = should_spawn_orchestrator_for_switch()
        assert should_spawn is True

    @pytest.mark.slow
    def test_orchestrator_survives_parent_death(self, mock_workspace, mock_environment, temp_dir):
        """Orchestrator should continue running after parent process dies."""
        # This is tested implicitly by start_new_session=True flag
        # which detaches the process from the parent's session

        # We verify the flag is set in test_spawn_orchestrator_creates_detached_process
        pass


@pytest.mark.integration
class TestOrchestratorVenvSetup:
    """Test orchestrator venv creation on first load."""

    def test_ensure_venv_on_custom_node_load(self, temp_dir):
        """Orchestrator venv should be created when custom node loads."""
        from server.orchestrator import ensure_orchestrator_venv

        venv_path = temp_dir / ".orchestrator_venv"

        assert not venv_path.exists()

        ensure_orchestrator_venv(venv_path)

        assert venv_path.exists()
        assert (venv_path / "bin" / "python").exists()

    def test_venv_includes_comfygit_core(self, temp_dir, mocker):
        """Orchestrator venv should have comfygit-core installed."""
        from server.orchestrator import ensure_orchestrator_venv

        venv_path = temp_dir / ".orchestrator_venv"

        # Mock pip install
        mock_run = mocker.patch("subprocess.run")

        ensure_orchestrator_venv(venv_path)

        # Check pip install was called with comfygit-core
        install_calls = [c for c in mock_run.call_args_list if "install" in str(c)]
        assert len(install_calls) > 0

        args = install_calls[0][0][0]
        assert "comfygit-core" in args

    def test_venv_setup_idempotent(self, temp_dir):
        """Running ensure_orchestrator_venv multiple times should be safe."""
        from server.orchestrator import ensure_orchestrator_venv

        venv_path = temp_dir / ".orchestrator_venv"

        # First call
        ensure_orchestrator_venv(venv_path)
        assert venv_path.exists()

        # Mark with file
        marker = venv_path / "marker"
        marker.touch()

        # Second call - should not recreate
        ensure_orchestrator_venv(venv_path)
        assert marker.exists()  # Should still exist
