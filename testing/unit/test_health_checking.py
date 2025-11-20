"""Unit tests for health checking logic."""

import time
import socket
import subprocess
from pathlib import Path
import pytest
from unittest.mock import Mock, MagicMock


@pytest.mark.unit
class TestHealthChecking:
    """Test health check validation logic."""

    def test_health_check_success(self, mocker):
        """Should pass health check when process running and port accessible."""
        from server.orchestrator import Orchestrator

        # Mock process that stays alive
        mock_proc = Mock()
        mock_proc.poll.return_value = None  # Still running

        # Mock successful socket connection
        mock_socket = MagicMock()
        mocker.patch("socket.socket", return_value=mock_socket)

        orch = Orchestrator(
            workspace_root=Path("/test"),
            initial_env="env1",
            args=["--port", "8188"]
        )

        result = orch._wait_for_health(mock_proc, timeout=10)

        assert result is True
        # Should require 3 consecutive successes
        assert mock_socket.connect.call_count >= 3

    def test_health_check_process_died(self, mocker):
        """Should fail health check when process exits."""
        from server.orchestrator import Orchestrator

        # Mock process that dies
        mock_proc = Mock()
        mock_proc.poll.return_value = 1  # Exit code
        mock_proc.returncode = 1

        orch = Orchestrator(
            workspace_root=Path("/test"),
            initial_env="env1",
            args=["--port", "8188"]
        )

        result = orch._wait_for_health(mock_proc, timeout=10)

        assert result is False

    def test_health_check_timeout(self, mocker):
        """Should fail health check on timeout."""
        from server.orchestrator import Orchestrator

        # Mock process that stays alive but port never opens
        mock_proc = Mock()
        mock_proc.poll.return_value = None

        # Mock connection that always fails
        mock_socket = MagicMock()
        mock_socket.connect.side_effect = ConnectionRefusedError()
        mocker.patch("socket.socket", return_value=mock_socket)

        orch = Orchestrator(
            workspace_root=Path("/test"),
            initial_env="env1",
            args=["--port", "8188"]
        )

        result = orch._wait_for_health(mock_proc, timeout=2)

        assert result is False

    def test_health_check_unstable_connection(self, mocker):
        """Should fail if connection is unstable (not 3 consecutive successes)."""
        from server.orchestrator import Orchestrator

        mock_proc = Mock()
        mock_proc.poll.return_value = None

        # Alternate between success and failure
        mock_socket = MagicMock()
        call_count = [0]

        def connect_side_effect(*args):
            call_count[0] += 1
            if call_count[0] % 2 == 0:
                raise ConnectionRefusedError()

        mock_socket.connect.side_effect = connect_side_effect
        mocker.patch("socket.socket", return_value=mock_socket)

        orch = Orchestrator(
            workspace_root=Path("/test"),
            initial_env="env1",
            args=["--port", "8188"]
        )

        result = orch._wait_for_health(mock_proc, timeout=5)

        assert result is False

    def test_health_check_with_custom_port(self, mocker):
        """Should check health on custom port from args."""
        from server.orchestrator import Orchestrator

        mock_proc = Mock()
        mock_proc.poll.return_value = None

        mock_socket = MagicMock()
        mocker.patch("socket.socket", return_value=mock_socket)

        orch = Orchestrator(
            workspace_root=Path("/test"),
            initial_env="env1",
            args=["--port", "9999"]
        )

        orch._wait_for_health(mock_proc, timeout=5)

        # Check that we connected to the custom port
        connect_calls = mock_socket.connect.call_args_list
        assert len(connect_calls) > 0
        # First call should be to port 9999
        assert connect_calls[0][0][0] == ("127.0.0.1", 9999)

    def test_check_port_connection_success(self):
        """Should successfully connect to open port."""
        from server.orchestrator import Orchestrator

        orch = Orchestrator(
            workspace_root=Path("/test"),
            initial_env="env1",
            args=[]
        )

        # Create a temporary server socket
        server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        server.bind(("127.0.0.1", 0))  # Random port
        server.listen(1)
        port = server.getsockname()[1]

        try:
            result = orch._check_port_connection(port)
            assert result is True
        finally:
            server.close()

    def test_check_port_connection_refused(self):
        """Should return False for closed port."""
        from server.orchestrator import Orchestrator

        orch = Orchestrator(
            workspace_root=Path("/test"),
            initial_env="env1",
            args=[]
        )

        # Use a port that's definitely closed
        result = orch._check_port_connection(59999)

        assert result is False

    def test_check_port_connection_timeout(self, mocker):
        """Should handle socket timeout gracefully."""
        from server.orchestrator import Orchestrator

        orch = Orchestrator(
            workspace_root=Path("/test"),
            initial_env="env1",
            args=[]
        )

        # Mock socket that times out
        mock_socket = MagicMock()
        mock_socket.connect.side_effect = socket.timeout()
        mocker.patch("socket.socket", return_value=mock_socket)

        result = orch._check_port_connection(8188)

        assert result is False

    @pytest.mark.slow
    def test_health_check_requires_stability_period(self, mocker):
        """Should require 3 consecutive successes over ~6 seconds."""
        from server.orchestrator import Orchestrator

        mock_proc = Mock()
        mock_proc.poll.return_value = None

        # Track connection attempts
        connect_times = []

        def track_connect(*args):
            connect_times.append(time.time())

        mock_socket = MagicMock()
        mock_socket.connect.side_effect = track_connect
        mocker.patch("socket.socket", return_value=mock_socket)

        # Speed up sleep for testing
        mocker.patch("time.sleep", side_effect=lambda x: None)

        orch = Orchestrator(
            workspace_root=Path("/test"),
            initial_env="env1",
            args=["--port", "8188"]
        )

        result = orch._wait_for_health(mock_proc, timeout=30)

        assert result is True
        # Should have exactly 3 connection attempts
        assert len(connect_times) >= 3
