"""
Unit tests for orchestrator signal handling (bugfix).

Tests that SIGTERM/SIGINT properly terminate supervised processes.
This addresses the bug where orchestrator shut down but left zombie ComfyUI processes.
"""

import pytest
import signal
from unittest.mock import Mock, patch, MagicMock
from pathlib import Path


@pytest.mark.unit
class TestSignalHandling:
    """Test signal handlers properly clean up supervised processes."""

    def test_sigterm_kills_supervised_process(self, mock_workspace, metadata_dir):
        """Should terminate supervised process when receiving SIGTERM."""
        from server.orchestrator import Orchestrator

        # Create mock process
        mock_process = Mock()
        mock_process.pid = 12345
        mock_process.poll.return_value = None  # Process is running
        mock_process.wait.return_value = None  # Terminates gracefully

        # Create mock workspace object
        mock_ws_obj = Mock()
        mock_ws_obj.path = mock_workspace
        mock_ws_obj.paths = Mock()
        mock_ws_obj.paths.metadata = metadata_dir

        with patch('server.orchestrator.WorkspaceFactory.find') as mock_factory:
            mock_factory.return_value = mock_ws_obj

            with patch.object(Orchestrator, '_start_control_server'):
                orch = Orchestrator(
                    workspace_root=mock_workspace,
                    initial_env="test_env",
                    args=[]
                )

                # Set current process
                orch.current_process = mock_process

                # Simulate SIGTERM (call handler directly)
                with pytest.raises(SystemExit) as exc_info:
                    orch._handle_sigterm(signal.SIGTERM, None)

                # Should have terminated process
                mock_process.terminate.assert_called_once()
                mock_process.wait.assert_called_once_with(timeout=3)

                # Should exit with code 0
                assert exc_info.value.code == 0

    def test_sigint_kills_supervised_process(self, mock_workspace, metadata_dir):
        """Should terminate supervised process when receiving SIGINT (Ctrl+C)."""
        from server.orchestrator import Orchestrator

        mock_process = Mock()
        mock_process.pid = 12345
        mock_process.poll.return_value = None
        mock_process.wait.return_value = None

        mock_ws_obj = Mock()
        mock_ws_obj.path = mock_workspace
        mock_ws_obj.paths = Mock()
        mock_ws_obj.paths.metadata = metadata_dir

        with patch('server.orchestrator.WorkspaceFactory.find') as mock_factory:
            mock_factory.return_value = mock_ws_obj

            with patch.object(Orchestrator, '_start_control_server'):
                orch = Orchestrator(
                    workspace_root=mock_workspace,
                    initial_env="test_env",
                    args=[]
                )

                orch.current_process = mock_process

                with pytest.raises(SystemExit):
                    orch._handle_sigint(signal.SIGINT, None)

                mock_process.terminate.assert_called_once()
                mock_process.wait.assert_called_once_with(timeout=3)

    def test_signal_handler_force_kills_on_timeout(self, mock_workspace, metadata_dir):
        """Should force kill process if termination times out."""
        from server.orchestrator import Orchestrator
        import subprocess

        mock_process = Mock()
        mock_process.pid = 12345
        mock_process.poll.return_value = None
        mock_process.wait.side_effect = [
            subprocess.TimeoutExpired("cmd", 3),  # First wait times out
            None  # Second wait (after kill) succeeds
        ]

        mock_ws_obj = Mock()
        mock_ws_obj.path = mock_workspace
        mock_ws_obj.paths = Mock()
        mock_ws_obj.paths.metadata = metadata_dir

        with patch('server.orchestrator.WorkspaceFactory.find') as mock_factory:
            mock_factory.return_value = mock_ws_obj

            with patch.object(Orchestrator, '_start_control_server'):
                orch = Orchestrator(
                    workspace_root=mock_workspace,
                    initial_env="test_env",
                    args=[]
                )

                orch.current_process = mock_process

                with pytest.raises(SystemExit):
                    orch._handle_sigterm(signal.SIGTERM, None)

                # Should have tried terminate first
                mock_process.terminate.assert_called_once()

                # Should have force killed after timeout
                mock_process.kill.assert_called_once()

                # Should have reaped zombie
                assert mock_process.wait.call_count == 2

    def test_signal_handler_does_nothing_if_no_process(self, mock_workspace, metadata_dir):
        """Should handle signal gracefully when no process is supervised."""
        from server.orchestrator import Orchestrator

        mock_ws_obj = Mock()
        mock_ws_obj.path = mock_workspace
        mock_ws_obj.paths = Mock()
        mock_ws_obj.paths.metadata = metadata_dir

        with patch('server.orchestrator.WorkspaceFactory.find') as mock_factory:
            mock_factory.return_value = mock_ws_obj

            with patch.object(Orchestrator, '_start_control_server'):
                orch = Orchestrator(
                    workspace_root=mock_workspace,
                    initial_env="test_env",
                    args=[]
                )

                # No current process
                orch.current_process = None

                with pytest.raises(SystemExit):
                    orch._handle_sigterm(signal.SIGTERM, None)

                # Should not crash, just exit cleanly

    def test_signal_handler_skips_already_dead_process(self, mock_workspace, metadata_dir):
        """Should skip termination if process already exited."""
        from server.orchestrator import Orchestrator

        mock_process = Mock()
        mock_process.poll.return_value = 0  # Already dead

        mock_ws_obj = Mock()
        mock_ws_obj.path = mock_workspace
        mock_ws_obj.paths = Mock()
        mock_ws_obj.paths.metadata = metadata_dir

        with patch('server.orchestrator.WorkspaceFactory.find') as mock_factory:
            mock_factory.return_value = mock_ws_obj

            with patch.object(Orchestrator, '_start_control_server'):
                orch = Orchestrator(
                    workspace_root=mock_workspace,
                    initial_env="test_env",
                    args=[]
                )

                orch.current_process = mock_process

                with pytest.raises(SystemExit):
                    orch._handle_sigterm(signal.SIGTERM, None)

                # Should not try to terminate already-dead process
                mock_process.terminate.assert_not_called()
                mock_process.kill.assert_not_called()

    def test_shutdown_command_uses_same_kill_logic(self, mock_workspace, metadata_dir):
        """Should use same kill logic for shutdown command as signals."""
        from server.orchestrator import Orchestrator

        mock_process = Mock()
        mock_process.pid = 12345
        mock_process.poll.return_value = None
        mock_process.wait.return_value = None

        mock_ws_obj = Mock()
        mock_ws_obj.path = mock_workspace
        mock_ws_obj.paths = Mock()
        mock_ws_obj.paths.metadata = metadata_dir

        with patch('server.orchestrator.WorkspaceFactory.find') as mock_factory:
            mock_factory.return_value = mock_ws_obj

            with patch.object(Orchestrator, '_start_control_server'):
                orch = Orchestrator(
                    workspace_root=mock_workspace,
                    initial_env="test_env",
                    args=[]
                )

                orch.current_process = mock_process

                # Call shutdown command handler
                orch._handle_shutdown_command()

                # Should have terminated process
                mock_process.terminate.assert_called_once()
                mock_process.wait.assert_called_once_with(timeout=3)

                # Should have set shutdown flag
                assert orch._shutdown_requested is True


@pytest.mark.unit
class TestKillSupervisedProcess:
    """Test the _kill_supervised_process helper method."""

    def test_kills_running_process_gracefully(self):
        """Should terminate process and wait for graceful exit."""
        from server.orchestrator import Orchestrator

        mock_process = Mock()
        mock_process.pid = 12345
        mock_process.poll.return_value = None  # Running
        mock_process.wait.return_value = None  # Exits gracefully

        orch = Mock(spec=Orchestrator)
        orch.current_process = mock_process

        # Call the actual method
        Orchestrator._kill_supervised_process(orch)

        mock_process.terminate.assert_called_once()
        mock_process.wait.assert_called_once_with(timeout=3)
        mock_process.kill.assert_not_called()  # No force kill needed

    def test_force_kills_stubborn_process(self):
        """Should force kill if process doesn't exit gracefully."""
        from server.orchestrator import Orchestrator
        import subprocess

        mock_process = Mock()
        mock_process.pid = 12345
        mock_process.poll.return_value = None
        mock_process.wait.side_effect = [
            subprocess.TimeoutExpired("cmd", 3),
            None  # Exits after kill
        ]

        orch = Mock(spec=Orchestrator)
        orch.current_process = mock_process

        Orchestrator._kill_supervised_process(orch)

        mock_process.terminate.assert_called_once()
        mock_process.kill.assert_called_once()
        assert mock_process.wait.call_count == 2

    def test_does_nothing_if_no_process(self):
        """Should return immediately if no process to kill."""
        from server.orchestrator import Orchestrator

        orch = Mock(spec=Orchestrator)
        orch.current_process = None

        # Should not raise exception
        Orchestrator._kill_supervised_process(orch)

    def test_does_nothing_if_process_already_dead(self):
        """Should return immediately if process already exited."""
        from server.orchestrator import Orchestrator

        mock_process = Mock()
        mock_process.poll.return_value = 0  # Already dead

        orch = Mock(spec=Orchestrator)
        orch.current_process = mock_process

        Orchestrator._kill_supervised_process(orch)

        mock_process.terminate.assert_not_called()
        mock_process.kill.assert_not_called()
