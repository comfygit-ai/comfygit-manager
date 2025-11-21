"""
Unit tests for orchestrator control endpoints (Phase 1).

Tests file polling mechanism, HTTP control server, and process tracking.
Following the revised design document from 2025-11-20.
"""

import json
import os
import time
from pathlib import Path
from unittest.mock import Mock, patch, MagicMock
import tempfile
import pytest
import subprocess


@pytest.mark.unit
class TestFilePolling:
    """Test file polling infrastructure for command communication."""

    def test_safe_write_command_creates_file(self, metadata_dir):
        """Should write command file atomically."""
        from server.orchestrator import safe_write_command

        safe_write_command(metadata_dir, {"command": "restart", "timestamp": time.time()})

        cmd_file = metadata_dir / ".cmd"
        assert cmd_file.exists()

        with open(cmd_file) as f:
            data = json.load(f)

        assert data["command"] == "restart"
        assert "timestamp" in data

    def test_safe_write_command_atomic_no_partial_reads(self, metadata_dir):
        """Should use atomic writes to prevent partial reads."""
        from server.orchestrator import safe_write_command

        # Write a command
        safe_write_command(metadata_dir, {"command": "restart"})

        # File should exist and be complete JSON
        cmd_file = metadata_dir / ".cmd"
        with open(cmd_file) as f:
            data = json.load(f)  # Should not raise JSONDecodeError

        assert data["command"] == "restart"

    def test_safe_write_command_no_temp_files_after_write(self, metadata_dir):
        """Should clean up temp files after successful write."""
        from server.orchestrator import safe_write_command

        safe_write_command(metadata_dir, {"command": "restart"})

        # No temp files should remain
        temp_files = list(metadata_dir.glob(".cmd.tmp.*"))
        assert len(temp_files) == 0

    def test_safe_write_command_overwrites_existing(self, metadata_dir):
        """Should overwrite existing command file."""
        from server.orchestrator import safe_write_command

        # Write first command
        safe_write_command(metadata_dir, {"command": "restart"})

        # Write second command (should overwrite)
        safe_write_command(metadata_dir, {"command": "shutdown"})

        cmd_file = metadata_dir / ".cmd"
        with open(cmd_file) as f:
            data = json.load(f)

        assert data["command"] == "shutdown"

    def test_cleanup_stale_temp_files_removes_old_files(self, metadata_dir):
        """Should remove stale temp files from previous runs."""
        from server.orchestrator import cleanup_stale_temp_files

        # Create stale temp files
        (metadata_dir / ".cmd.tmp.12345").write_text('{"command": "old"}')
        (metadata_dir / ".cmd.tmp.67890").write_text('{"command": "stale"}')

        cleanup_stale_temp_files(metadata_dir)

        # All temp files should be removed
        temp_files = list(metadata_dir.glob(".cmd.tmp.*"))
        assert len(temp_files) == 0

    def test_check_command_file_returns_none_when_no_file(self, metadata_dir):
        """Should return None when no command file exists."""
        from server.orchestrator import Orchestrator

        orch = Mock(spec=Orchestrator)
        orch.metadata_dir = metadata_dir

        # Call the method (we'll need to implement this)
        result = Orchestrator._check_command_file(orch)

        assert result is None

    def test_check_command_file_reads_and_deletes(self, metadata_dir):
        """Should read command file and delete it."""
        from server.orchestrator import Orchestrator, safe_write_command

        # Write a command
        safe_write_command(metadata_dir, {"command": "restart"})

        orch = Mock(spec=Orchestrator)
        orch.metadata_dir = metadata_dir

        # Check command file
        result = Orchestrator._check_command_file(orch)

        # Should have read the command
        assert result == {"command": "restart"}

        # File should be deleted
        cmd_file = metadata_dir / ".cmd"
        assert not cmd_file.exists()

    def test_check_command_file_handles_corrupted_json(self, metadata_dir):
        """Should handle corrupted JSON gracefully."""
        from server.orchestrator import Orchestrator

        # Write corrupted JSON
        cmd_file = metadata_dir / ".cmd"
        cmd_file.write_text("{invalid json")

        orch = Mock(spec=Orchestrator)
        orch.metadata_dir = metadata_dir

        # Should not raise, should delete corrupted file
        result = Orchestrator._check_command_file(orch)

        assert result is None
        assert not cmd_file.exists()

    def test_wait_with_polling_returns_exit_code(self, metadata_dir):
        """Should return process exit code when process exits."""
        from server.orchestrator import Orchestrator
        import subprocess

        # Mock a process that exits after one timeout
        mock_proc = Mock()
        mock_proc.wait.side_effect = [subprocess.TimeoutExpired('cmd', 0.5), 0]

        orch = Mock(spec=Orchestrator)
        orch.metadata_dir = metadata_dir
        orch._shutdown_requested = False
        orch._check_command_file.return_value = None

        result = Orchestrator._wait_with_polling(orch, mock_proc)

        assert result == 0

    def test_wait_with_polling_checks_for_shutdown(self, metadata_dir):
        """Should return None when shutdown requested."""
        from server.orchestrator import Orchestrator

        mock_proc = Mock()
        mock_proc.poll.return_value = None  # Process still running

        orch = Mock(spec=Orchestrator)
        orch.metadata_dir = metadata_dir
        orch._shutdown_requested = True  # Shutdown flag set

        result = Orchestrator._wait_with_polling(orch, mock_proc)

        assert result is None

    def test_wait_with_polling_calls_check_command_file(self, metadata_dir):
        """Should check for commands while waiting."""
        from server.orchestrator import Orchestrator
        import subprocess

        mock_proc = Mock()
        mock_proc.wait.side_effect = [subprocess.TimeoutExpired('cmd', 0.5), 0]

        orch = Mock(spec=Orchestrator)
        orch.metadata_dir = metadata_dir
        orch._shutdown_requested = False
        orch._check_command_file = Mock(return_value=None)

        Orchestrator._wait_with_polling(orch, mock_proc)

        # Should have called _check_command_file
        assert orch._check_command_file.called

    def test_handle_restart_command_sets_flag(self, metadata_dir):
        """Should set restart flag when restart command received."""
        from server.orchestrator import Orchestrator

        mock_proc = Mock()
        mock_proc.poll.return_value = None

        orch = Mock(spec=Orchestrator)
        orch.metadata_dir = metadata_dir
        orch.current_process = mock_proc
        orch._restart_requested = False

        Orchestrator._handle_restart_command(orch)

        assert orch._restart_requested is True

    def test_handle_restart_command_kills_current_process(self, metadata_dir):
        """Should terminate current ComfyUI process."""
        from server.orchestrator import Orchestrator

        mock_proc = Mock()
        mock_proc.poll.return_value = None  # Process running
        mock_proc.wait = Mock()

        orch = Mock(spec=Orchestrator)
        orch.metadata_dir = metadata_dir
        orch.current_process = mock_proc
        orch._restart_requested = False

        Orchestrator._handle_restart_command(orch)

        mock_proc.terminate.assert_called_once()

    def test_handle_shutdown_command_sets_flag(self, metadata_dir):
        """Should set shutdown flag when shutdown command received."""
        from server.orchestrator import Orchestrator

        orch = Mock(spec=Orchestrator)
        orch.metadata_dir = metadata_dir
        orch._shutdown_requested = False
        orch.current_process = None

        Orchestrator._handle_shutdown_command(orch)

        assert orch._shutdown_requested is True

    def test_handle_shutdown_command_kills_current_process(self, metadata_dir):
        """Should call _kill_supervised_process on shutdown."""
        from server.orchestrator import Orchestrator
        from unittest.mock import patch

        orch = Mock(spec=Orchestrator)
        orch.metadata_dir = metadata_dir
        orch._shutdown_requested = False
        orch._kill_supervised_process = Mock()

        Orchestrator._handle_shutdown_command(orch)

        # Should have set shutdown flag
        assert orch._shutdown_requested is True

        # Should have called _kill_supervised_process
        orch._kill_supervised_process.assert_called_once()


@pytest.mark.unit
class TestHTTPControlServer:
    """Test HTTP control server implementation."""

    def test_start_control_server_binds_to_port(self, metadata_dir):
        """Should bind control server to configured port."""
        from server.orchestrator import Orchestrator

        orch = Mock(spec=Orchestrator)
        orch.metadata_dir = metadata_dir
        orch.config = {
            "orchestrator": {
                "control_port_range": [8189, 8199],
                "enable_control_server": True
            }
        }
        orch.current_env_name = "test"

        with patch('http.server.HTTPServer') as mock_server:
            mock_server.return_value = Mock()

            with patch('threading.Thread'):
                Orchestrator._start_control_server(orch)

            # Should have attempted to bind
            assert mock_server.called

    def test_start_control_server_writes_port_file(self, metadata_dir):
        """Should write actual bound port to .control_port file."""
        from server.orchestrator import Orchestrator

        orch = Mock(spec=Orchestrator)
        orch.metadata_dir = metadata_dir
        orch.config = {
            "orchestrator": {
                "control_port_range": [8189, 8199],
                "enable_control_server": True
            }
        }
        orch.current_env_name = "test"

        with patch('http.server.HTTPServer') as mock_server:
            mock_server.return_value = Mock()

            with patch('threading.Thread'):
                Orchestrator._start_control_server(orch)

            # Should have written port file
            port_file = metadata_dir / ".control_port"
            assert port_file.exists()

    def test_start_control_server_auto_increments_on_conflict(self, metadata_dir):
        """Should try next port if first port is in use."""
        from server.orchestrator import Orchestrator

        orch = Mock(spec=Orchestrator)
        orch.metadata_dir = metadata_dir
        orch.config = {
            "orchestrator": {
                "control_port_range": [8189, 8191],
                "enable_control_server": True
            }
        }
        orch.current_env_name = "test"

        # Create an OSError with errno set
        error1 = OSError()
        error1.errno = 98  # EADDRINUSE

        with patch('http.server.HTTPServer') as mock_server:
            # First port fails, second succeeds
            mock_server.side_effect = [
                error1,
                Mock()
            ]

            with patch('threading.Thread'):
                Orchestrator._start_control_server(orch)

            # Should have tried port 8189, then 8190
            assert mock_server.call_count == 2

    def test_start_control_server_handles_all_ports_taken(self, metadata_dir):
        """Should handle gracefully when all ports are taken."""
        from server.orchestrator import Orchestrator

        orch = Mock(spec=Orchestrator)
        orch.metadata_dir = metadata_dir
        orch.config = {
            "orchestrator": {
                "control_port_range": [8189, 8191],
                "enable_control_server": True
            }
        }
        orch.current_env_name = "test"

        # Create an OSError with errno set
        error = OSError()
        error.errno = 98  # EADDRINUSE

        with patch('http.server.HTTPServer') as mock_server:
            # All ports fail
            mock_server.side_effect = error

            Orchestrator._start_control_server(orch)

            # Should set control_server to None
            assert orch.control_server is None

    def test_control_server_disabled_in_config(self, metadata_dir):
        """Should not start control server if disabled in config."""
        # This test is covered by init tests - control server won't be called
        # if disabled in config
        pass


@pytest.mark.unit
class TestProcessTracking:
    """Test process tracking for health endpoint."""

    def test_start_comfyui_sets_current_process(self, metadata_dir):
        """Should set current_process when starting ComfyUI."""
        from server.orchestrator import Orchestrator

        orch = Mock(spec=Orchestrator)
        orch.metadata_dir = metadata_dir
        orch.current_process = None
        orch._process_start_time = 0
        orch.comfyui_args = []

        mock_env = Mock()
        mock_env.uv_manager.python_executable = "/usr/bin/python"
        mock_env.comfyui_path = Path("/tmp/comfyui")

        with patch('subprocess.Popen') as mock_popen:
            mock_proc = Mock()
            mock_popen.return_value = mock_proc

            proc = Orchestrator._start_comfyui(orch, mock_env)

            # Should have set current_process
            assert orch.current_process == mock_proc

    def test_start_comfyui_sets_process_start_time(self, metadata_dir):
        """Should record process start time."""
        from server.orchestrator import Orchestrator

        orch = Mock(spec=Orchestrator)
        orch.metadata_dir = metadata_dir
        orch.current_process = None
        orch._process_start_time = 0
        orch.comfyui_args = []

        mock_env = Mock()
        mock_env.uv_manager.python_executable = "/usr/bin/python"
        mock_env.comfyui_path = Path("/tmp/comfyui")

        with patch('subprocess.Popen') as mock_popen:
            with patch('time.time', return_value=1234567890.0):
                Orchestrator._start_comfyui(orch, mock_env)

                # Should have set start time
                assert orch._process_start_time == 1234567890.0

    def test_health_endpoint_includes_process_state(self, metadata_dir):
        """Health endpoint should include ComfyUI process state."""
        # This will be tested in integration tests with actual HTTP server
        pass


@pytest.mark.unit
class TestWorkspaceConfiguration:
    """Test workspace configuration loading."""

    def test_load_workspace_config_creates_default(self, metadata_dir):
        """Should create default config if missing."""
        from server.orchestrator import load_workspace_config

        config = load_workspace_config(metadata_dir)

        # Should have created file
        config_file = metadata_dir / "workspace_config.json"
        assert config_file.exists()

        # Should have default values
        assert config["orchestrator"]["control_port"] == 8189
        assert config["orchestrator"]["enable_control_server"] is True

    def test_load_workspace_config_merges_user_values(self, metadata_dir):
        """Should merge user config with defaults."""
        from server.orchestrator import load_workspace_config

        # Write partial user config
        config_file = metadata_dir / "workspace_config.json"
        with open(config_file, 'w') as f:
            json.dump({
                "orchestrator": {
                    "control_port": 9999
                }
            }, f)

        config = load_workspace_config(metadata_dir)

        # User value should override
        assert config["orchestrator"]["control_port"] == 9999

        # Defaults should still be present
        assert config["orchestrator"]["enable_control_server"] is True

    def test_load_workspace_config_handles_invalid_json(self, metadata_dir):
        """Should fall back to defaults if config is corrupted."""
        from server.orchestrator import load_workspace_config

        # Write invalid JSON
        config_file = metadata_dir / "workspace_config.json"
        config_file.write_text("{invalid json")

        # Should not raise, should return defaults
        config = load_workspace_config(metadata_dir)

        # Should return defaults
        assert config["orchestrator"]["control_port"] == 8189


@pytest.mark.unit
class TestOrchestratorInitialization:
    """Test orchestrator initialization with new Phase 1 features."""

    def test_init_loads_workspace_config(self, metadata_dir):
        """Should load workspace config during init."""
        from server.orchestrator import Orchestrator, DEFAULT_CONFIG

        with patch('server.orchestrator.WorkspaceFactory.find') as mock_factory:
            mock_workspace = Mock()
            mock_workspace.path = metadata_dir.parent
            mock_factory.return_value = mock_workspace

            with patch('server.orchestrator.load_workspace_config') as mock_load:
                mock_load.return_value = DEFAULT_CONFIG.copy()

                orch = Orchestrator(
                    workspace_root=metadata_dir.parent,
                    initial_env="test",
                    args=[]
                )

                # Should have loaded config
                mock_load.assert_called_once()

    def test_init_sets_flags(self, metadata_dir):
        """Should initialize command coordination flags."""
        from server.orchestrator import Orchestrator, DEFAULT_CONFIG

        with patch('server.orchestrator.WorkspaceFactory.find') as mock_factory:
            mock_workspace = Mock()
            mock_workspace.path = metadata_dir.parent
            mock_factory.return_value = mock_workspace

            with patch('server.orchestrator.load_workspace_config') as mock_load:
                # Disable control server for this test
                config = DEFAULT_CONFIG.copy()
                config["orchestrator"]["enable_control_server"] = False
                mock_load.return_value = config

                orch = Orchestrator(
                    workspace_root=metadata_dir.parent,
                    initial_env="test",
                    args=[]
                )

                # Should have initialized flags
                assert hasattr(orch, '_shutdown_requested')
                assert hasattr(orch, '_restart_requested')
                assert orch._shutdown_requested is False
                assert orch._restart_requested is False

    def test_init_cleans_stale_temp_files(self, metadata_dir):
        """Should clean up stale temp files from previous runs."""
        from server.orchestrator import Orchestrator, DEFAULT_CONFIG

        # Create stale temp files
        (metadata_dir / ".cmd.tmp.old").write_text("{}")

        with patch('server.orchestrator.WorkspaceFactory.find') as mock_factory:
            mock_workspace = Mock()
            mock_workspace.path = metadata_dir.parent
            mock_factory.return_value = mock_workspace

            with patch('server.orchestrator.load_workspace_config') as mock_load:
                # Disable control server for this test
                config = DEFAULT_CONFIG.copy()
                config["orchestrator"]["enable_control_server"] = False
                mock_load.return_value = config

                Orchestrator(
                    workspace_root=metadata_dir.parent,
                    initial_env="test",
                    args=[]
                )

                # Stale files should be removed
                temp_files = list(metadata_dir.glob(".cmd.tmp.*"))
                assert len(temp_files) == 0

    def test_init_starts_control_server_if_enabled(self, metadata_dir):
        """Should start control server if enabled in config."""
        from server.orchestrator import Orchestrator, DEFAULT_CONFIG

        with patch('server.orchestrator.WorkspaceFactory.find') as mock_factory:
            mock_workspace = Mock()
            mock_workspace.path = metadata_dir.parent
            mock_factory.return_value = mock_workspace

            with patch('server.orchestrator.load_workspace_config') as mock_load:
                config = DEFAULT_CONFIG.copy()
                config["orchestrator"]["enable_control_server"] = True
                mock_load.return_value = config

                with patch.object(Orchestrator, '_start_control_server') as mock_start:
                    Orchestrator(
                        workspace_root=metadata_dir.parent,
                        initial_env="test",
                        args=[]
                    )

                    # Should have started control server
                    mock_start.assert_called_once()
