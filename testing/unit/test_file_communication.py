"""Unit tests for file-based communication between processes."""

import json
import time
from pathlib import Path
import pytest


@pytest.mark.unit
class TestFileCommunication:
    """Test state file reading/writing for IPC."""

    def test_write_switch_request(self, metadata_dir):
        """Should write switch request file with target environment."""
        from server.orchestrator import write_switch_request

        write_switch_request(metadata_dir, "env2")

        request_file = metadata_dir / ".switch_request.json"
        assert request_file.exists()

        with open(request_file) as f:
            data = json.load(f)

        assert data["target_env"] == "env2"
        assert "timestamp" in data
        assert isinstance(data["timestamp"], float)

    def test_read_switch_request(self, mock_switch_request, metadata_dir):
        """Should read switch request from file."""
        from server.orchestrator import read_switch_request

        request = read_switch_request(metadata_dir)

        assert request is not None
        assert request["target_env"] == "env2"
        assert request["timestamp"] == 1705776100.0

    def test_read_switch_request_missing_file(self, metadata_dir):
        """Should return None when switch request file doesn't exist."""
        from server.orchestrator import read_switch_request

        request = read_switch_request(metadata_dir)

        assert request is None

    def test_read_switch_request_invalid_json(self, metadata_dir):
        """Should handle corrupted switch request file."""
        from server.orchestrator import read_switch_request

        # Write invalid JSON
        request_file = metadata_dir / ".switch_request.json"
        request_file.write_text("invalid json{")

        request = read_switch_request(metadata_dir)

        assert request is None

    def test_write_switch_status(self, metadata_dir):
        """Should write switch status for browser polling."""
        from server.orchestrator import write_switch_status

        write_switch_status(
            metadata_dir,
            state="syncing",
            progress=40,
            message="Syncing env2...",
            target_env="env2",
            source_env="env1"
        )

        status_file = metadata_dir / ".switch_status.json"
        assert status_file.exists()

        with open(status_file) as f:
            data = json.load(f)

        assert data["state"] == "syncing"
        assert data["progress"] == 40
        assert data["message"] == "Syncing env2..."
        assert data["target_env"] == "env2"
        assert data["source_env"] == "env1"
        assert "updated_at" in data

    def test_write_switch_status_with_error(self, metadata_dir):
        """Should include error field in switch status."""
        from server.orchestrator import write_switch_status

        write_switch_status(
            metadata_dir,
            state="critical_failure",
            progress=100,
            message="Rollback failed",
            error="Environment failed to start"
        )

        status_file = metadata_dir / ".switch_status.json"

        with open(status_file) as f:
            data = json.load(f)

        assert data["state"] == "critical_failure"
        assert data["error"] == "Environment failed to start"

    def test_read_switch_status(self, metadata_dir):
        """Should read switch status file."""
        from server.orchestrator import write_switch_status, read_switch_status

        write_switch_status(
            metadata_dir,
            state="validating",
            progress=80,
            message="Waiting for health check..."
        )

        status = read_switch_status(metadata_dir)

        assert status is not None
        assert status["state"] == "validating"
        assert status["progress"] == 80

    def test_cleanup_switch_status(self, metadata_dir):
        """Should remove switch status file."""
        from server.orchestrator import write_switch_status, cleanup_switch_status

        write_switch_status(metadata_dir, state="complete", progress=100, message="Done")

        status_file = metadata_dir / ".switch_status.json"
        assert status_file.exists()

        cleanup_switch_status(metadata_dir)

        assert not status_file.exists()

    def test_write_orchestrator_pid(self, metadata_dir):
        """Should write orchestrator PID file."""
        from server.orchestrator import write_orchestrator_pid
        import os

        write_orchestrator_pid(metadata_dir)

        pid_file = metadata_dir / ".orchestrator.pid"
        assert pid_file.exists()

        pid = int(pid_file.read_text())
        assert pid == os.getpid()

    def test_read_orchestrator_pid(self, metadata_dir):
        """Should read orchestrator PID from file."""
        from server.orchestrator import read_orchestrator_pid

        pid_file = metadata_dir / ".orchestrator.pid"
        pid_file.write_text("12345")

        pid = read_orchestrator_pid(metadata_dir)

        assert pid == 12345

    def test_read_orchestrator_pid_missing(self, metadata_dir):
        """Should return None when PID file doesn't exist."""
        from server.orchestrator import read_orchestrator_pid

        pid = read_orchestrator_pid(metadata_dir)

        assert pid is None

    def test_cleanup_orchestrator_pid(self, metadata_dir):
        """Should remove orchestrator PID file."""
        from server.orchestrator import write_orchestrator_pid, cleanup_orchestrator_pid

        write_orchestrator_pid(metadata_dir)

        pid_file = metadata_dir / ".orchestrator.pid"
        assert pid_file.exists()

        cleanup_orchestrator_pid(metadata_dir)

        assert not pid_file.exists()

    def test_write_startup_state(self, metadata_dir):
        """Should write startup state capture."""
        from server.orchestrator import write_startup_state

        write_startup_state(
            metadata_dir,
            python_executable="/usr/bin/python3",
            working_directory="/test/ComfyUI",
            argv=["main.py", "--port", "8188"],
            environment_name="env1",
            workspace_root="/test/workspace",
            port=8188
        )

        state_file = metadata_dir / ".startup_state.json"
        assert state_file.exists()

        with open(state_file) as f:
            data = json.load(f)

        assert data["python_executable"] == "/usr/bin/python3"
        assert data["environment_name"] == "env1"
        assert data["port"] == 8188
        assert data["argv"] == ["main.py", "--port", "8188"]

    def test_read_startup_state(self, mock_startup_state, metadata_dir):
        """Should read startup state from file."""
        from server.orchestrator import read_startup_state

        state = read_startup_state(metadata_dir)

        assert state is not None
        assert state["environment_name"] == "env1"
        assert state["port"] == 8188

    def test_acquire_switch_lock(self, metadata_dir):
        """Should acquire switch lock."""
        from server.orchestrator import acquire_switch_lock, release_switch_lock

        success = acquire_switch_lock(metadata_dir)

        assert success is True

        lock_file = metadata_dir / ".switch.lock"
        assert lock_file.exists()

        # Clean up
        release_switch_lock(metadata_dir)

    def test_acquire_switch_lock_already_locked(self, metadata_dir):
        """Should fail to acquire lock when already held."""
        from server.orchestrator import acquire_switch_lock

        lock_file = metadata_dir / ".switch.lock"
        lock_file.touch()

        success = acquire_switch_lock(metadata_dir)

        assert success is False

    def test_acquire_switch_lock_stale(self, metadata_dir):
        """Should acquire lock when existing lock is stale (>5 minutes old)."""
        from server.orchestrator import acquire_switch_lock

        lock_file = metadata_dir / ".switch.lock"
        lock_file.touch()

        # Make lock file stale (simulate 6 minutes old)
        old_time = time.time() - 360
        import os
        os.utime(lock_file, (old_time, old_time))

        success = acquire_switch_lock(metadata_dir)

        assert success is True

    def test_release_switch_lock(self, metadata_dir):
        """Should release switch lock."""
        from server.orchestrator import acquire_switch_lock, release_switch_lock

        acquire_switch_lock(metadata_dir)
        lock_file = metadata_dir / ".switch.lock"
        assert lock_file.exists()

        release_switch_lock(metadata_dir)

        assert not lock_file.exists()

    def test_is_switch_locked(self, metadata_dir):
        """Should detect if switch is locked."""
        from server.orchestrator import acquire_switch_lock, is_switch_locked, release_switch_lock

        assert is_switch_locked(metadata_dir) is False

        acquire_switch_lock(metadata_dir)
        assert is_switch_locked(metadata_dir) is True

        release_switch_lock(metadata_dir)
        assert is_switch_locked(metadata_dir) is False
