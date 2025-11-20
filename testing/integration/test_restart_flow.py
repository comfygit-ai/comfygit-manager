"""Integration tests for restart handling flow."""

import os
import sys
import time
import subprocess
from pathlib import Path
import pytest


@pytest.mark.integration
class TestRestartFlow:
    """Test full restart flow (exit code 42)."""

    def test_comfyui_restart_without_orchestrator(self, mock_environment, mocker):
        """ComfyUI should exit with code 42 to signal restart."""
        comfyui_path = mock_environment / "ComfyUI"
        python_exe = mock_environment / ".venv" / "bin" / "python"

        # Create script that exits with 42
        test_script = comfyui_path / "test_restart.py"
        test_script.write_text("""
import sys
sys.exit(42)
""")

        result = subprocess.run(
            [str(python_exe), str(test_script)],
            cwd=comfyui_path,
            capture_output=True
        )

        assert result.returncode == 42

    def test_orchestrator_handles_restart(self, mock_workspace, mock_environment, mocker):
        """Orchestrator should restart ComfyUI on exit code 42."""
        from server.orchestrator import Orchestrator

        restart_count = [0]
        max_restarts = 2

        def mock_comfyui_process():
            """Mock process that restarts twice then exits cleanly."""
            proc = mocker.Mock()
            restart_count[0] += 1

            if restart_count[0] <= max_restarts:
                proc.wait.return_value = 42  # Restart
            else:
                proc.wait.return_value = 0  # Clean exit

            return proc

        mocker.patch.object(Orchestrator, "_sync_environment")
        mocker.patch.object(Orchestrator, "_start_comfyui", side_effect=mock_comfyui_process)

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        orch.run_forever()

        # Should have restarted twice + initial start = 3 total
        assert orch._start_comfyui.call_count == 3

    def test_orchestrator_syncs_on_each_restart(self, mock_workspace, mocker):
        """Orchestrator should sync environment on each restart."""
        from server.orchestrator import Orchestrator

        call_count = [0]

        def mock_process():
            proc = mocker.Mock()
            call_count[0] += 1
            if call_count[0] == 1:
                proc.wait.return_value = 42  # Restart
            else:
                proc.wait.return_value = 0  # Exit
            return proc

        mock_sync = mocker.patch.object(Orchestrator, "_sync_environment")
        mocker.patch.object(Orchestrator, "_start_comfyui", side_effect=mock_process)

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        orch.run_forever()

        # Should sync twice (once per start)
        assert mock_sync.call_count == 2

    @pytest.mark.slow
    def test_orchestrator_preserves_environment_across_restarts(self, mock_workspace, mocker):
        """Orchestrator should maintain same environment across restarts."""
        from server.orchestrator import Orchestrator

        environments_used = []

        def capture_environment(env):
            environments_used.append(env.name)

        def mock_process():
            proc = mocker.Mock()
            if len(environments_used) == 1:
                proc.wait.return_value = 42  # Restart once
            else:
                proc.wait.return_value = 0
            return proc

        def mock_sync(env):
            capture_environment(env)

        mocker.patch.object(Orchestrator, "_sync_environment", side_effect=mock_sync)
        mocker.patch.object(Orchestrator, "_start_comfyui", side_effect=mock_process)

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        orch.run_forever()

        # Both starts should use env1
        assert all(env == "env1" for env in environments_used)
        assert len(environments_used) == 2

    def test_cli_restart_loop_handles_exit_42(self, mock_environment):
        """Verify that CLI-style restart loop works (for reference)."""
        comfyui_path = mock_environment / "ComfyUI"
        python_exe = mock_environment / ".venv" / "bin" / "python"

        # Create script that restarts once
        test_script = comfyui_path / "test_cli_restart.py"
        test_script.write_text("""
import sys
import os

# Check if this is a restart
restart_file = "/tmp/test_restart_marker"

if os.path.exists(restart_file):
    # Second run - exit cleanly
    os.remove(restart_file)
    sys.exit(0)
else:
    # First run - signal restart
    with open(restart_file, "w") as f:
        f.write("restarted")
    sys.exit(42)
""")

        # Simulate CLI restart loop
        restart_count = 0
        max_restarts = 5

        while restart_count < max_restarts:
            result = subprocess.run(
                [str(python_exe), str(test_script)],
                cwd=comfyui_path,
                capture_output=True
            )

            if result.returncode == 42:
                restart_count += 1
                continue
            else:
                break

        # Should have restarted once
        assert restart_count == 1
        assert result.returncode == 0

    def test_orchestrator_spawn_on_first_switch_not_restart(self, metadata_dir, mocker):
        """Orchestrator should only spawn on switch (exit 43), not restart (exit 42)."""
        from server.comfygit_panel import should_spawn_orchestrator_for_switch

        # Not supervised, no orchestrator running
        assert should_spawn_orchestrator_for_switch() is True

        # When supervised, should not spawn
        mocker.patch.dict(os.environ, {"COMFYGIT_SUPERVISED": "1"})
        assert should_spawn_orchestrator_for_switch() is False

    def test_supervised_flag_prevents_nested_orchestrators(self, mock_workspace, mocker):
        """COMFYGIT_SUPERVISED flag should prevent spawning nested orchestrators."""
        from server.orchestrator import Orchestrator

        # Set supervised flag
        mocker.patch.dict(os.environ, {"COMFYGIT_SUPERVISED": "1"})

        mock_proc = mocker.Mock()
        mock_proc.wait.side_effect = [43, 0]  # Switch request

        mocker.patch.object(Orchestrator, "_sync_environment")
        mocker.patch.object(Orchestrator, "_start_comfyui", return_value=mock_proc)
        mocker.patch.object(Orchestrator, "_handle_switch_request", return_value=True)

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        # Run loop - should handle switch without spawning new orchestrator
        orch.run_forever()

        # Switch should be handled
        orch._handle_switch_request.assert_called_once()
