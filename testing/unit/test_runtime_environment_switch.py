"""Unit tests for runtime environment switching (exit code 43)."""

from pathlib import Path
import pytest
from unittest.mock import Mock
import subprocess


@pytest.mark.unit
class TestRuntimeEnvironmentSwitch:
    """Test environment switching triggered by exit code 43 during runtime."""

    def test_runtime_switch_performs_health_check_on_new_environment(self, mock_workspace, metadata_dir, mocker):
        """
        Should perform health check when switching environments at runtime.

        This is critical - if the new environment fails to start, we need to detect
        it immediately and handle gracefully, not just crash.
        """
        from server.orchestrator import Orchestrator
        import json

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=["--port", "8188"]
        )

        # Mock environments
        env1 = Mock()
        env1.name = "env1"
        env1.sync = Mock()
        env1.comfyui_path = Path("/env1/ComfyUI")
        env1.uv_manager.python_executable = Path("/env1/python")

        env2 = Mock()
        env2.name = "env2"
        env2.sync = Mock()
        env2.comfyui_path = Path("/env2/ComfyUI")
        env2.uv_manager.python_executable = Path("/env2/python")

        def get_env_side_effect(name, auto_sync=False):
            return env1 if name == "env1" else env2

        mocker.patch.object(orch.workspace, 'get_environment', side_effect=get_env_side_effect)

        # Mock _start_comfyui - first call returns process that exits with 43, second starts new env
        mock_proc1 = Mock(spec=subprocess.Popen)
        mock_proc1.poll.return_value = None
        mock_proc1.pid = 12345

        # Create switch request file when first process exits
        def mock_wait1(timeout=None):
            # Simulate frontend creating switch request while ComfyUI is running
            switch_file = metadata_dir / ".switch_request.json"
            with open(switch_file, 'w') as f:
                json.dump({
                    "target_env": "env2",
                    "source_env": "env1",
                    "timestamp": 1234567890
                }, f)
            if timeout is not None:
                # Simulate immediate exit (no timeout)
                return orch.EXIT_SWITCH_ENV
            return orch.EXIT_SWITCH_ENV  # Exit with 43

        mock_proc1.wait = mock_wait1

        mock_proc2 = Mock(spec=subprocess.Popen)
        mock_proc2.poll.return_value = None  # Running
        mock_proc2.wait.return_value = 0  # Eventually exits cleanly
        mock_proc2.pid = 67890

        mocker.patch.object(orch, '_start_comfyui', side_effect=[mock_proc1, mock_proc2])

        # Mock health check to succeed
        health_check_called = []
        def mock_health_check(proc, timeout):
            health_check_called.append((proc, timeout))
            return True

        mocker.patch.object(orch, '_wait_for_health', side_effect=mock_health_check)

        # Mock _cleanup to stop the infinite loop
        cleanup_called = []
        def mock_cleanup():
            cleanup_called.append(True)
        mocker.patch.object(orch, '_cleanup', side_effect=mock_cleanup)

        # Start the orchestrator loop
        try:
            orch.run_forever()
        except IndexError:
            # Expected - we run out of mock processes
            pass

        # CRITICAL ASSERTION: Health check MUST be called for the new environment
        # We should have exactly 1 health check (for the runtime switch to env2)
        assert len(health_check_called) == 1, f"Expected 1 health check, got {len(health_check_called)}"

        # Verify it was called on the NEW environment's process
        checked_proc, timeout = health_check_called[0]
        assert checked_proc == mock_proc2, "Health check was not called on the new environment's process!"
        assert timeout == 180, "Health check timeout should be 180s (default config value) for new environment"

        # Verify environment actually switched
        assert orch.current_env_name == "env2"

    def test_runtime_switch_updates_status_for_frontend_polling(self, mock_workspace, metadata_dir, mocker):
        """
        Should update .switch_status.json during runtime switch so frontend can show progress.

        The frontend polls this file to show "syncing...", "starting...", "validating..." states.
        """
        from server.orchestrator import Orchestrator
        import json

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        # Mock environments
        env1 = Mock()
        env1.name = "env1"
        env1.sync = Mock()
        env1.comfyui_path = Path("/env1")
        env1.uv_manager.python_executable = Path("/env1/python")

        env2 = Mock()
        env2.name = "env2"
        env2.sync = Mock()
        env2.comfyui_path = Path("/env2")
        env2.uv_manager.python_executable = Path("/env2/python")

        mocker.patch.object(orch.workspace, 'get_environment', side_effect=lambda n, **kw: env1 if n == "env1" else env2)

        # Track status updates
        status_updates = []
        metadata_dir / ".switch_status.json"

        original_write = json.dump
        def capture_status_writes(data, f, **kwargs):
            if hasattr(f, 'name') and '.switch_status.json' in f.name:
                status_updates.append(data.copy())
            return original_write(data, f, **kwargs)

        mocker.patch('json.dump', side_effect=capture_status_writes)

        # Mock processes
        proc1 = Mock(spec=subprocess.Popen)
        proc1.poll.return_value = None
        proc1.pid = 111

        # Create switch request when first process exits
        def mock_wait1(timeout=None):
            switch_file = metadata_dir / ".switch_request.json"
            with open(switch_file, 'w') as f:
                json.dump({"target_env": "env2", "source_env": "env1"}, f)
            if timeout is not None:
                return orch.EXIT_SWITCH_ENV
            return orch.EXIT_SWITCH_ENV

        proc1.wait = mock_wait1

        proc2 = Mock(spec=subprocess.Popen)
        proc2.wait.return_value = 0
        proc2.poll.return_value = None
        proc2.pid = 222

        mocker.patch.object(orch, '_start_comfyui', side_effect=[proc1, proc2])
        mocker.patch.object(orch, '_wait_for_health', return_value=True)
        mocker.patch.object(orch, '_cleanup')

        # Run
        try:
            orch.run_forever()
        except IndexError:
            pass

        # CRITICAL ASSERTION: Status updates must happen during runtime switch
        status_states = [s.get('state') for s in status_updates if 'state' in s]

        assert 'syncing' in status_states, "Missing 'syncing' status update for frontend!"
        assert 'starting' in status_states, "Missing 'starting' status update for frontend!"
        assert 'validating' in status_states, "Missing 'validating' status update for frontend!"
        assert 'complete' in status_states, "Missing 'complete' status update for frontend!"

    def test_runtime_switch_with_health_check_failure_stays_on_old_env(self, mock_workspace, metadata_dir, mocker):
        """
        Should stay on old environment if new environment fails health check during runtime switch.

        This is the rollback scenario - new env can't start, so we stay on the old one.
        """
        from server.orchestrator import Orchestrator
        import json

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        # Mock environments
        env1 = Mock()
        env1.name = "env1"
        env1.sync = Mock()
        env1.comfyui_path = Path("/env1")
        env1.uv_manager.python_executable = Path("/env1/python")

        env2 = Mock()
        env2.name = "env2"
        env2.sync = Mock()
        env2.comfyui_path = Path("/env2")
        env2.uv_manager.python_executable = Path("/env2/python")

        mocker.patch.object(orch.workspace, 'get_environment', side_effect=lambda n, **kw: env1 if n == "env1" else env2)

        # Mock processes
        proc1 = Mock(spec=subprocess.Popen)
        proc1.poll.return_value = None
        proc1.pid = 111

        # Create switch request when first process exits
        def mock_wait1(timeout=None):
            switch_file = metadata_dir / ".switch_request.json"
            with open(switch_file, 'w') as f:
                json.dump({"target_env": "env2", "source_env": "env1"}, f)
            if timeout is not None:
                return orch.EXIT_SWITCH_ENV
            return orch.EXIT_SWITCH_ENV

        proc1.wait = mock_wait1

        # New env process that will fail health check
        proc2_new = Mock(spec=subprocess.Popen)
        proc2_new.poll.return_value = None
        proc2_new.kill = Mock()
        proc2_new.pid = 222

        # Rollback to old env
        proc3_rollback = Mock(spec=subprocess.Popen)
        proc3_rollback.poll.return_value = None
        proc3_rollback.wait.return_value = 0
        proc3_rollback.pid = 333

        mocker.patch.object(orch, '_start_comfyui', side_effect=[proc1, proc2_new, proc3_rollback])

        # Health check fails for new env, succeeds for rollback
        mocker.patch.object(orch, '_wait_for_health', side_effect=[False, True])
        mocker.patch.object(orch, '_cleanup')

        # Run
        try:
            orch.run_forever()
        except IndexError:
            pass

        # CRITICAL ASSERTION: Should stay on env1 after failed switch
        assert orch.current_env_name == "env1", "Should rollback to env1 when env2 fails health check!"

        # Verify new environment process was killed
        proc2_new.kill.assert_called_once()

    def test_runtime_switch_syncs_new_environment_before_starting(self, mock_workspace, metadata_dir, mocker):
        """
        Should sync the new environment before starting it during runtime switch.

        This ensures nodes are installed, models downloaded, etc.
        """
        from server.orchestrator import Orchestrator
        import json

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        # Mock environments - track sync calls
        env1 = Mock()
        env1.name = "env1"
        env1.sync = Mock()
        env1.comfyui_path = Path("/env1")
        env1.uv_manager.python_executable = Path("/env1/python")

        env2 = Mock()
        env2.name = "env2"
        env2.sync = Mock()
        env2.comfyui_path = Path("/env2")
        env2.uv_manager.python_executable = Path("/env2/python")

        mocker.patch.object(orch.workspace, 'get_environment', side_effect=lambda n, **kw: env1 if n == "env1" else env2)

        # Mock processes
        proc1 = Mock(spec=subprocess.Popen)
        proc1.poll.return_value = None

        # Create switch request when first process exits
        def mock_wait1(timeout=None):
            switch_file = metadata_dir / ".switch_request.json"
            with open(switch_file, 'w') as f:
                json.dump({"target_env": "env2", "source_env": "env1"}, f)
            if timeout is not None:
                return orch.EXIT_SWITCH_ENV
            return orch.EXIT_SWITCH_ENV

        proc1.wait = mock_wait1

        proc2 = Mock(spec=subprocess.Popen)
        proc2.wait.return_value = 0
        proc2.poll.return_value = None

        mocker.patch.object(orch, '_start_comfyui', side_effect=[proc1, proc2])
        mocker.patch.object(orch, '_wait_for_health', return_value=True)
        mocker.patch.object(orch, '_cleanup')

        # Run
        try:
            orch.run_forever()
        except IndexError:
            pass

        # CRITICAL ASSERTION: env2 must be synced during runtime switch
        # Should be called exactly once (not during startup since no switch request file existed then)
        assert env2.sync.call_count == 1, f"Expected env2.sync to be called once, got {env2.sync.call_count}"
