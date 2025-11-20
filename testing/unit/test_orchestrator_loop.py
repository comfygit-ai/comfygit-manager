"""Unit tests for orchestrator main supervision loop."""

from pathlib import Path
import pytest
from unittest.mock import Mock, MagicMock, call


@pytest.mark.unit
class TestOrchestratorLoop:
    """Test orchestrator main loop and lifecycle."""

    def test_orchestrator_init(self, mock_workspace):
        """Should initialize orchestrator with workspace and environment."""
        from server.orchestrator import Orchestrator

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=["--port", "8188"]
        )

        assert orch.workspace_root == mock_workspace
        assert orch.current_env_name == "env1"
        assert orch.comfyui_args == ["--port", "8188"]
        assert orch.metadata_dir == mock_workspace / ".metadata"

    def test_orchestrator_writes_pid_on_init(self, mock_workspace):
        """Should write PID file on initialization."""
        from server.orchestrator import Orchestrator
        import os

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        pid_file = mock_workspace / ".metadata" / ".orchestrator.pid"
        assert pid_file.exists()

        pid = int(pid_file.read_text())
        assert pid == os.getpid()

    def test_handle_restart_exit_code(self, mock_workspace, mocker):
        """Should continue loop on exit code 42 (restart)."""
        from server.orchestrator import Orchestrator

        mock_proc = Mock()
        mock_proc.wait.side_effect = [42, 0]  # Restart once, then exit

        mocker.patch.object(Orchestrator, "_sync_environment")
        mocker.patch.object(Orchestrator, "_start_comfyui", return_value=mock_proc)

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        orch.run_forever()

        # Should have started ComfyUI twice (initial + restart)
        assert orch._start_comfyui.call_count == 2

    def test_handle_switch_exit_code(self, mock_workspace, metadata_dir, mocker):
        """Should handle environment switch on exit code 43."""
        from server.orchestrator import Orchestrator

        # Write switch request
        switch_file = metadata_dir / ".switch_request.json"
        switch_file.write_text('{"target_env": "env2", "timestamp": 1234567890}')

        mock_proc = Mock()
        mock_proc.wait.side_effect = [43, 0]  # Switch, then exit

        mocker.patch.object(Orchestrator, "_sync_environment")
        mocker.patch.object(Orchestrator, "_start_comfyui", return_value=mock_proc)
        mocker.patch.object(Orchestrator, "_handle_switch_request", return_value=True)

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        orch.run_forever()

        # Should have called switch handler
        orch._handle_switch_request.assert_called_once()

    def test_handle_clean_exit(self, mock_workspace, mocker):
        """Should exit cleanly on exit code 0."""
        from server.orchestrator import Orchestrator

        mock_proc = Mock()
        mock_proc.wait.return_value = 0

        mocker.patch.object(Orchestrator, "_sync_environment")
        mocker.patch.object(Orchestrator, "_start_comfyui", return_value=mock_proc)

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        orch.run_forever()

        # Should have started once and exited
        assert orch._start_comfyui.call_count == 1

    def test_handle_crash_exit(self, mock_workspace, mocker):
        """Should exit on non-standard exit code (crash)."""
        from server.orchestrator import Orchestrator

        mock_proc = Mock()
        mock_proc.wait.return_value = 1  # Error

        mocker.patch.object(Orchestrator, "_sync_environment")
        mocker.patch.object(Orchestrator, "_start_comfyui", return_value=mock_proc)

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        orch.run_forever()

        # Should have started once and exited
        assert orch._start_comfyui.call_count == 1

    def test_sync_environment_before_start(self, mock_workspace, mocker):
        """Should sync environment before starting ComfyUI."""
        from server.orchestrator import Orchestrator

        mock_proc = Mock()
        mock_proc.wait.return_value = 0

        mock_sync = mocker.patch.object(Orchestrator, "_sync_environment")
        mock_start = mocker.patch.object(Orchestrator, "_start_comfyui", return_value=mock_proc)

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        orch.run_forever()

        # Sync should be called before start
        assert mock_sync.call_count == 1
        assert mock_start.call_count == 1

        # Verify order: sync called before start
        calls = [call[0] for call in mocker.call_args_list]
        sync_call_idx = next(i for i, c in enumerate(calls) if "sync" in str(c))
        start_call_idx = next(i for i, c in enumerate(calls) if "start" in str(c))
        assert sync_call_idx < start_call_idx

    def test_start_comfyui_uses_environment_python(self, mock_workspace, mock_environment, mocker):
        """Should use environment's UV-managed Python to start ComfyUI."""
        from server.orchestrator import Orchestrator

        mock_popen = mocker.patch("subprocess.Popen")

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=["--port", "8188"]
        )

        # Mock environment
        mock_env = Mock()
        mock_env.uv_manager.python_executable = Path("/env1/.venv/bin/python")
        mock_env.comfyui_path = Path("/env1/ComfyUI")

        orch._start_comfyui(mock_env)

        # Check Popen was called with correct python
        mock_popen.assert_called_once()
        call_args = mock_popen.call_args[0][0]
        assert call_args[0] == str(Path("/env1/.venv/bin/python"))
        assert str(Path("/env1/ComfyUI/main.py")) in call_args

    def test_start_comfyui_passes_args(self, mock_workspace, mocker):
        """Should pass ComfyUI arguments to subprocess."""
        from server.orchestrator import Orchestrator

        mock_popen = mocker.patch("subprocess.Popen")

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=["--port", "9999", "--listen", "0.0.0.0"]
        )

        mock_env = Mock()
        mock_env.uv_manager.python_executable = Path("/python")
        mock_env.comfyui_path = Path("/ComfyUI")

        orch._start_comfyui(mock_env)

        call_args = mock_popen.call_args[0][0]
        assert "--port" in call_args
        assert "9999" in call_args
        assert "--listen" in call_args
        assert "0.0.0.0" in call_args

    def test_start_comfyui_sets_supervised_env_var(self, mock_workspace, mocker):
        """Should set COMFYGIT_SUPERVISED=1 environment variable."""
        from server.orchestrator import Orchestrator

        mock_popen = mocker.patch("subprocess.Popen")

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        mock_env = Mock()
        mock_env.uv_manager.python_executable = Path("/python")
        mock_env.comfyui_path = Path("/ComfyUI")

        orch._start_comfyui(mock_env)

        call_kwargs = mock_popen.call_args[1]
        env_vars = call_kwargs["env"]
        assert env_vars["COMFYGIT_SUPERVISED"] == "1"

    def test_cleanup_removes_pid_file(self, mock_workspace):
        """Should remove PID file on cleanup."""
        from server.orchestrator import Orchestrator

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        pid_file = mock_workspace / ".metadata" / ".orchestrator.pid"
        assert pid_file.exists()

        orch._cleanup()

        assert not pid_file.exists()

    def test_handle_sigterm(self, mock_workspace, mocker):
        """Should cleanup and exit on SIGTERM."""
        from server.orchestrator import Orchestrator

        mock_cleanup = mocker.patch.object(Orchestrator, "_cleanup")
        mock_exit = mocker.patch("sys.exit")

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        orch._handle_sigterm(None, None)

        mock_cleanup.assert_called_once()
        mock_exit.assert_called_once_with(0)

    def test_handle_sigint(self, mock_workspace, mocker):
        """Should cleanup and exit on SIGINT (Ctrl+C)."""
        from server.orchestrator import Orchestrator

        mock_cleanup = mocker.patch.object(Orchestrator, "_cleanup")
        mock_exit = mocker.patch("sys.exit")

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        orch._handle_sigint(None, None)

        mock_cleanup.assert_called_once()
        mock_exit.assert_called_once_with(0)

    def test_extract_comfyui_args_from_sys_argv(self, mocker):
        """Should extract ComfyUI arguments from sys.argv."""
        from server.orchestrator import extract_comfyui_args

        mocker.patch("sys.argv", ["main.py", "--port", "8188", "--listen", "0.0.0.0"])

        args = extract_comfyui_args()

        assert args == ["--port", "8188", "--listen", "0.0.0.0"]

    def test_extract_comfyui_args_empty(self, mocker):
        """Should return empty list when no args."""
        from server.orchestrator import extract_comfyui_args

        mocker.patch("sys.argv", ["main.py"])

        args = extract_comfyui_args()

        assert args == []
