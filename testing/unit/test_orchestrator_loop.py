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

        # Mock environment
        mock_env = Mock()
        mock_env.name = "env1"

        mocker.patch.object(Orchestrator, "_sync_environment")
        mocker.patch.object(Orchestrator, "_start_comfyui", return_value=mock_proc)

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        # Mock workspace.get_environment to return our mock environment
        orch.workspace.get_environment = Mock(return_value=mock_env)

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

        # Mock environments
        mock_env1 = Mock()
        mock_env1.name = "env1"
        mock_env2 = Mock()
        mock_env2.name = "env2"

        mocker.patch.object(Orchestrator, "_sync_environment")
        mocker.patch.object(Orchestrator, "_start_comfyui", return_value=mock_proc)
        mocker.patch.object(Orchestrator, "_handle_switch_request", return_value=True)

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        # Mock workspace.get_environment to return appropriate env
        def get_env_side_effect(name, auto_sync=True):
            return mock_env1 if name == "env1" else mock_env2

        orch.workspace.get_environment = Mock(side_effect=get_env_side_effect)

        orch.run_forever()

        # Should have called switch handler
        orch._handle_switch_request.assert_called_once()

    def test_handle_clean_exit(self, mock_workspace, mocker):
        """Should exit cleanly on exit code 0."""
        from server.orchestrator import Orchestrator

        mock_proc = Mock()
        mock_proc.wait.return_value = 0

        # Mock environment
        mock_env = Mock()
        mock_env.name = "env1"

        mocker.patch.object(Orchestrator, "_sync_environment")
        mocker.patch.object(Orchestrator, "_start_comfyui", return_value=mock_proc)

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        # Mock workspace.get_environment
        orch.workspace.get_environment = Mock(return_value=mock_env)

        orch.run_forever()

        # Should have started once and exited
        assert orch._start_comfyui.call_count == 1

    def test_handle_crash_exit(self, mock_workspace, mocker):
        """Should exit on non-standard exit code (crash)."""
        from server.orchestrator import Orchestrator

        mock_proc = Mock()
        mock_proc.wait.return_value = 1  # Error

        # Mock environment
        mock_env = Mock()
        mock_env.name = "env1"

        mocker.patch.object(Orchestrator, "_sync_environment")
        mocker.patch.object(Orchestrator, "_start_comfyui", return_value=mock_proc)

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        # Mock workspace.get_environment
        orch.workspace.get_environment = Mock(return_value=mock_env)

        orch.run_forever()

        # Should have started once and exited
        assert orch._start_comfyui.call_count == 1

    def test_sync_environment_before_start(self, mock_workspace, mocker):
        """Should sync environment before starting ComfyUI."""
        from server.orchestrator import Orchestrator

        mock_proc = Mock()
        mock_proc.wait.return_value = 0

        # Mock environment
        mock_env = Mock()
        mock_env.name = "env1"

        mock_sync = mocker.patch.object(Orchestrator, "_sync_environment")
        mock_start = mocker.patch.object(Orchestrator, "_start_comfyui", return_value=mock_proc)

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        # Mock workspace.get_environment
        orch.workspace.get_environment = Mock(return_value=mock_env)

        orch.run_forever()

        # Sync should be called before start
        assert mock_sync.call_count == 1
        assert mock_start.call_count == 1

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

    def test_multiple_consecutive_restarts(self, mock_workspace, mocker):
        """Should handle multiple consecutive restarts (exit 42 multiple times)."""
        from server.orchestrator import Orchestrator

        mock_proc = Mock()
        # Restart 3 times, then exit cleanly
        mock_proc.wait.side_effect = [42, 42, 42, 0]

        mock_env = Mock()
        mock_env.name = "env1"

        mocker.patch.object(Orchestrator, "_sync_environment")
        mocker.patch.object(Orchestrator, "_start_comfyui", return_value=mock_proc)

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        orch.workspace.get_environment = Mock(return_value=mock_env)

        orch.run_forever()

        # Should have started ComfyUI 4 times (3 restarts + 1 initial)
        assert orch._start_comfyui.call_count == 4
        # Should have synced 4 times (once before each start)
        assert orch._sync_environment.call_count == 4

    def test_sync_failure_continues_startup(self, mock_workspace, mocker):
        """Should continue to start ComfyUI even if sync fails."""
        from server.orchestrator import Orchestrator

        mock_proc = Mock()
        mock_proc.wait.return_value = 0

        mock_env = Mock()
        mock_env.name = "env1"
        # Make sync fail
        mock_env.sync.side_effect = Exception("Sync failed")

        mock_start = mocker.patch.object(Orchestrator, "_start_comfyui", return_value=mock_proc)

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        orch.workspace.get_environment = Mock(return_value=mock_env)

        orch.run_forever()

        # Should still have started ComfyUI despite sync failure
        assert mock_start.call_count == 1

    def test_workspace_get_environment_failure_exits(self, mock_workspace, mocker):
        """Should exit if environment cannot be loaded from workspace."""
        from server.orchestrator import Orchestrator
        from comfygit_core.models.exceptions import CDEnvironmentNotFoundError

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        # Make get_environment fail
        orch.workspace.get_environment = Mock(
            side_effect=CDEnvironmentNotFoundError("env1 not found")
        )

        # Should raise exception and exit
        with pytest.raises(CDEnvironmentNotFoundError):
            orch.run_forever()

    def test_environment_switch_updates_current_env(self, mock_workspace, metadata_dir, mocker):
        """Should update current_env_name after successful switch request."""
        from server.orchestrator import Orchestrator
        import json

        # Mock process for env1 that exits with code 43 to trigger runtime switch
        mock_proc1 = Mock()
        mock_proc1.poll.return_value = None

        # Create switch request when proc1 exits
        def mock_wait1():
            switch_file = metadata_dir / ".switch_request.json"
            with open(switch_file, 'w') as f:
                json.dump({"target_env": "env2", "source_env": "env1"}, f)
            return 43  # EXIT_SWITCH_ENV

        mock_proc1.wait = mock_wait1

        # Mock process for env2 that exits cleanly
        mock_proc2 = Mock()
        mock_proc2.poll.return_value = None
        mock_proc2.wait.return_value = 0  # Clean exit

        mock_env1 = Mock()
        mock_env1.name = "env1"
        mock_env1.sync = Mock()
        mock_env1.comfyui_path = mock_workspace / "environments" / "env1" / "ComfyUI"
        mock_env1.uv_manager.python_executable = mock_workspace / "bin" / "python"

        mock_env2 = Mock()
        mock_env2.name = "env2"
        mock_env2.sync = Mock()
        mock_env2.comfyui_path = mock_workspace / "environments" / "env2" / "ComfyUI"
        mock_env2.uv_manager.python_executable = mock_workspace / "bin" / "python"

        mocker.patch.object(Orchestrator, "_sync_environment")
        mocker.patch.object(Orchestrator, "_start_comfyui", side_effect=[mock_proc1, mock_proc2])
        mocker.patch.object(Orchestrator, "_wait_for_health", return_value=True)  # Health check succeeds
        mocker.patch.object(Orchestrator, "_update_switch_status")
        mocker.patch.object(Orchestrator, "_cleanup_switch_status")

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        # Track which environment is requested
        requested_envs = []

        def get_env_side_effect(name, auto_sync=False):
            requested_envs.append(name)
            return mock_env1 if name == "env1" else mock_env2

        orch.workspace.get_environment = Mock(side_effect=get_env_side_effect)

        orch.run_forever()

        # Should have requested env1 initially, then env2 for switch
        # (and potentially env2 again for recovery command generation, but that's ok)
        assert "env1" in requested_envs
        assert "env2" in requested_envs
        # Current env should be updated
        assert orch.current_env_name == "env2"

    def test_switch_request_with_missing_file_returns_false(self, mock_workspace, mocker):
        """Should return False from _handle_switch_request when file missing."""
        from server.orchestrator import Orchestrator

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        # No switch request file exists
        result = orch._handle_switch_request()

        assert result is False
        assert orch.current_env_name == "env1"  # Unchanged

    def test_switch_request_with_invalid_json(self, mock_workspace, metadata_dir, mocker):
        """Should return False from _handle_switch_request with corrupt file."""
        from server.orchestrator import Orchestrator

        # Write invalid JSON
        switch_file = metadata_dir / ".switch_request.json"
        switch_file.write_text("invalid json{")

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        result = orch._handle_switch_request()

        assert result is False
        assert orch.current_env_name == "env1"  # Unchanged

    def test_switch_request_missing_target_env(self, mock_workspace, metadata_dir, mocker):
        """Should return False when switch request lacks target_env field."""
        from server.orchestrator import Orchestrator

        # Write request without target_env
        switch_file = metadata_dir / ".switch_request.json"
        switch_file.write_text('{"timestamp": 1234567890}')

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        result = orch._handle_switch_request()

        assert result is False
        assert orch.current_env_name == "env1"  # Unchanged
