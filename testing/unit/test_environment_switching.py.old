"""Unit tests for Phase 2: Environment switching with rollback."""

from pathlib import Path
import pytest
from unittest.mock import Mock, MagicMock, call, patch
import time


@pytest.mark.unit
class TestEnvironmentSwitching:
    """Test environment switching with health checks and rollback."""

    def test_switch_environment_success(self, mock_workspace, metadata_dir, mocker):
        """Should successfully switch to new environment after health check passes."""
        from server.orchestrator import Orchestrator

        # Create orchestrator
        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=["--port", "8188"]
        )

        # Mock environment
        target_env = Mock()
        target_env.name = "env2"
        target_env.sync = Mock()
        mocker.patch.object(orch.workspace, 'get_environment', return_value=target_env)

        # Mock _start_comfyui to return a process
        mock_proc = Mock()
        mock_proc.poll.return_value = None  # Process running
        mocker.patch.object(orch, '_start_comfyui', return_value=mock_proc)

        # Mock health check to succeed
        mocker.patch.object(orch, '_wait_for_health', return_value=True)

        # Mock status updates
        mock_update_status = mocker.patch.object(orch, '_update_switch_status')
        mock_cleanup_status = mocker.patch.object(orch, '_cleanup_switch_status')

        # Perform switch
        result = orch._switch_environment("env2")

        # Verify success
        assert result is True
        assert orch.current_env_name == "env2"

        # Verify target environment was synced
        target_env.sync.assert_called_once()

        # Verify health check was called
        orch._wait_for_health.assert_called_once_with(mock_proc, timeout=90)

        # Verify status updates
        assert mock_update_status.call_count >= 4  # preparing, syncing, starting, validating, complete
        mock_cleanup_status.assert_called_once()

    def test_switch_environment_health_check_fails_triggers_rollback(self, mock_workspace, metadata_dir, mocker):
        """Should rollback to old environment when new environment fails health check."""
        from server.orchestrator import Orchestrator

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=["--port", "8188"]
        )

        # Track environment switches
        env_requests = []

        def mock_get_environment(name, auto_sync=False):
            env = Mock()
            env.name = name
            env.sync = Mock()
            env_requests.append(name)
            return env

        mocker.patch.object(orch.workspace, 'get_environment', side_effect=mock_get_environment)

        # Mock _start_comfyui
        mock_new_proc = Mock()
        mock_new_proc.poll.return_value = None
        mock_new_proc.kill = Mock()

        mock_old_proc = Mock()
        mock_old_proc.poll.return_value = None

        start_calls = [mock_new_proc, mock_old_proc]
        mocker.patch.object(orch, '_start_comfyui', side_effect=start_calls)

        # Mock health check: fail for new env, succeed for rollback
        mocker.patch.object(orch, '_wait_for_health', side_effect=[False, True])

        # Mock status updates
        mock_update_status = mocker.patch.object(orch, '_update_switch_status')
        mock_cleanup_status = mocker.patch.object(orch, '_cleanup_switch_status')

        # Perform switch (should fail and rollback)
        result = orch._switch_environment("env2")

        # Verify rollback happened
        assert result is False
        assert orch.current_env_name == "env1"  # Stayed on original

        # Verify both environments were requested
        assert "env2" in env_requests  # Tried to switch
        assert "env1" in env_requests  # Rolled back

        # Verify new process was killed
        mock_new_proc.kill.assert_called_once()

        # Verify health checks
        assert orch._wait_for_health.call_count == 2

        # Verify rollback status update
        rollback_calls = [c for c in mock_update_status.call_args_list
                         if c[0][0] in ['rolling_back', 'rolled_back']]
        assert len(rollback_calls) >= 2

    def test_switch_environment_updates_status_through_phases(self, mock_workspace, metadata_dir, mocker):
        """Should update status file through all switch phases."""
        from server.orchestrator import Orchestrator

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        # Mock environment
        target_env = Mock()
        target_env.name = "env2"
        target_env.sync = Mock()
        mocker.patch.object(orch.workspace, 'get_environment', return_value=target_env)

        # Mock process and health check
        mock_proc = Mock()
        mocker.patch.object(orch, '_start_comfyui', return_value=mock_proc)
        mocker.patch.object(orch, '_wait_for_health', return_value=True)

        # Spy on status updates
        status_updates = []
        def capture_status(state, **kwargs):
            status_updates.append(state)

        mocker.patch.object(orch, '_update_switch_status', side_effect=capture_status)
        mocker.patch.object(orch, '_cleanup_switch_status')

        # Perform switch
        orch._switch_environment("env2")

        # Verify status progression
        assert "preparing" in status_updates
        assert "syncing" in status_updates
        assert "starting" in status_updates
        assert "validating" in status_updates
        assert "complete" in status_updates

        # Verify order
        assert status_updates.index("preparing") < status_updates.index("syncing")
        assert status_updates.index("syncing") < status_updates.index("starting")
        assert status_updates.index("starting") < status_updates.index("validating")
        assert status_updates.index("validating") < status_updates.index("complete")

    def test_switch_environment_sync_failure_triggers_rollback(self, mock_workspace, metadata_dir, mocker):
        """Should rollback when target environment sync fails."""
        from server.orchestrator import Orchestrator

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        # Track which environments were accessed
        env_accesses = []

        def mock_get_environment(name, auto_sync=False):
            env = Mock()
            env.name = name
            env_accesses.append(name)

            # Fail sync only for new environment
            if name == "env2":
                env.sync = Mock(side_effect=RuntimeError("Sync failed"))
            else:
                env.sync = Mock()

            return env

        mocker.patch.object(orch.workspace, 'get_environment', side_effect=mock_get_environment)

        # Mock rollback process and health check
        mock_rollback_proc = Mock()
        mocker.patch.object(orch, '_start_comfyui', return_value=mock_rollback_proc)
        mocker.patch.object(orch, '_wait_for_health', return_value=True)

        # Mock status updates
        mocker.patch.object(orch, '_update_switch_status')
        mocker.patch.object(orch, '_cleanup_switch_status')

        # Perform switch (should fail during sync and rollback)
        result = orch._switch_environment("env2")

        # Verify rollback
        assert result is False
        assert orch.current_env_name == "env1"

        # Verify we tried env2 and fell back to env1
        assert "env2" in env_accesses
        assert "env1" in env_accesses

    def test_switch_environment_critical_failure_when_rollback_fails(self, mock_workspace, metadata_dir, mocker):
        """Should handle critical failure when rollback also fails."""
        from server.orchestrator import Orchestrator

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        # Mock environment
        target_env = Mock()
        target_env.name = "env2"
        target_env.sync = Mock()

        old_env = Mock()
        old_env.name = "env1"
        old_env.sync = Mock()

        def mock_get_env(name, auto_sync=False):
            if name == "env2":
                return target_env
            return old_env

        mocker.patch.object(orch.workspace, 'get_environment', side_effect=mock_get_env)

        # Mock processes
        mock_new_proc = Mock()
        mock_new_proc.kill = Mock()
        mock_rollback_proc = Mock()
        mock_rollback_proc.kill = Mock()

        mocker.patch.object(orch, '_start_comfyui', side_effect=[mock_new_proc, mock_rollback_proc])

        # Both health checks fail
        mocker.patch.object(orch, '_wait_for_health', return_value=False)

        # Mock status updates
        mock_update_status = mocker.patch.object(orch, '_update_switch_status')

        # Mock get_recovery_command
        mocker.patch.object(orch, '_get_recovery_command', return_value="recovery command")

        # Perform switch (should raise due to critical failure)
        with pytest.raises(RuntimeError, match="Rollback failed"):
            orch._switch_environment("env2")

        # Verify critical_failure status was written
        critical_calls = [c for c in mock_update_status.call_args_list
                         if c[0][0] == 'critical_failure']
        assert len(critical_calls) == 1

        # Verify both processes were killed
        mock_new_proc.kill.assert_called_once()
        mock_rollback_proc.kill.assert_called_once()

    def test_switch_environment_passes_correct_timeout_to_health_check(self, mock_workspace, metadata_dir, mocker):
        """Should use 90s timeout for new env and 60s for rollback."""
        from server.orchestrator import Orchestrator

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        # Mock environment
        target_env = Mock()
        target_env.name = "env2"
        target_env.sync = Mock()

        old_env = Mock()
        old_env.name = "env1"
        old_env.sync = Mock()

        mocker.patch.object(orch.workspace, 'get_environment', side_effect=[target_env, old_env])

        # Mock processes
        mock_new_proc = Mock()
        mock_new_proc.kill = Mock()
        mock_rollback_proc = Mock()

        mocker.patch.object(orch, '_start_comfyui', side_effect=[mock_new_proc, mock_rollback_proc])

        # New env fails, rollback succeeds
        mocker.patch.object(orch, '_wait_for_health', side_effect=[False, True])
        mocker.patch.object(orch, '_update_switch_status')
        mocker.patch.object(orch, '_cleanup_switch_status')

        # Perform switch
        orch._switch_environment("env2")

        # Verify timeouts
        health_calls = orch._wait_for_health.call_args_list
        assert len(health_calls) == 2
        assert health_calls[0][1]['timeout'] == 90  # New environment
        assert health_calls[1][1]['timeout'] == 60  # Rollback

    def test_update_switch_status_writes_correct_json(self, mock_workspace, metadata_dir):
        """Should write status file with all required fields."""
        from server.orchestrator import Orchestrator
        import json

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        # Update status
        orch._update_switch_status(
            "syncing",
            progress=50,
            message="Syncing environment...",
            target_env="env2",
            source_env="env1"
        )

        # Read status file
        status_file = metadata_dir / ".switch_status.json"
        assert status_file.exists()

        with open(status_file) as f:
            status = json.load(f)

        # Verify fields
        assert status["state"] == "syncing"
        assert status["progress"] == 50
        assert status["message"] == "Syncing environment..."
        assert status["target_env"] == "env2"
        assert status["source_env"] == "env1"
        assert "updated_at" in status

    def test_get_recovery_command_generates_valid_command(self, mock_workspace, metadata_dir, mocker):
        """Should generate valid recovery command for manual restart."""
        from server.orchestrator import Orchestrator

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=["--port", "8188", "--listen", "0.0.0.0"]
        )

        # Mock environment
        env = Mock()
        env.name = "env1"
        env.comfyui_path = Path("/path/to/ComfyUI")
        env.uv_manager.python_executable = Path("/path/to/python")

        mocker.patch.object(orch.workspace, 'get_environment', return_value=env)

        # Get recovery command
        cmd = orch._get_recovery_command("env1")

        # Verify command structure
        assert "cd /path/to/ComfyUI" in cmd
        assert "/path/to/python" in cmd
        assert "main.py" in cmd
        assert "--port 8188" in cmd
        assert "--listen 0.0.0.0" in cmd
