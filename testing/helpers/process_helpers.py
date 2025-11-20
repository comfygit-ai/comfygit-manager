"""Helper utilities for process and subprocess testing."""

import os
import signal
import subprocess
import time
from pathlib import Path
from typing import Optional


class ProcessMonitor:
    """Helper for monitoring and controlling test processes."""

    def __init__(self, proc: subprocess.Popen):
        self.proc = proc
        self.start_time = time.time()

    def is_alive(self) -> bool:
        """Check if process is still running."""
        return self.proc.poll() is None

    def wait_for_exit(self, timeout: int = 10) -> int:
        """Wait for process to exit, return exit code."""
        try:
            return self.proc.wait(timeout=timeout)
        except subprocess.TimeoutExpired:
            self.kill()
            raise

    def kill(self):
        """Kill the process."""
        if self.is_alive():
            self.proc.kill()
            self.proc.wait()

    def terminate(self):
        """Gracefully terminate the process."""
        if self.is_alive():
            self.proc.terminate()
            try:
                self.proc.wait(timeout=5)
            except subprocess.TimeoutExpired:
                self.proc.kill()
                self.proc.wait()

    def runtime(self) -> float:
        """Get process runtime in seconds."""
        return time.time() - self.start_time


class MockComfyUIServer:
    """Helper for creating mock ComfyUI servers for testing."""

    def __init__(self, port: int = 8188, exit_code: int = 0, delay: float = 0):
        self.port = port
        self.exit_code = exit_code
        self.delay = delay
        self.proc: Optional[subprocess.Popen] = None

    def start(self, script_path: Path, python_exe: Path) -> ProcessMonitor:
        """Start mock ComfyUI server."""
        # Create mock server script
        script_path.write_text(f"""
import sys
import socket
import time
import signal

def handler(signum, frame):
    sys.exit(0)

signal.signal(signal.SIGTERM, handler)
signal.signal(signal.SIGINT, handler)

# Bind to port
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)

try:
    sock.bind(("127.0.0.1", {self.port}))
    sock.listen(1)
    print(f"Mock server listening on port {self.port}", flush=True)

    # Run for specified delay
    time.sleep({self.delay})

    sys.exit({self.exit_code})
except KeyboardInterrupt:
    sys.exit(0)
finally:
    sock.close()
""")

        self.proc = subprocess.Popen(
            [str(python_exe), str(script_path)],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE
        )

        # Wait for server to bind
        time.sleep(0.5)

        return ProcessMonitor(self.proc)

    def stop(self):
        """Stop the mock server."""
        if self.proc and self.proc.poll() is None:
            self.proc.terminate()
            try:
                self.proc.wait(timeout=2)
            except subprocess.TimeoutExpired:
                self.proc.kill()


def wait_for_port(port: int, timeout: int = 10) -> bool:
    """Wait for a port to become available."""
    import socket

    start = time.time()
    while time.time() - start < timeout:
        try:
            sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            sock.settimeout(1)
            sock.connect(("127.0.0.1", port))
            sock.close()
            return True
        except (ConnectionRefusedError, OSError):
            time.sleep(0.2)

    return False


def is_port_open(port: int) -> bool:
    """Check if a port is currently open."""
    import socket

    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(0.5)
        sock.connect(("127.0.0.1", port))
        sock.close()
        return True
    except (ConnectionRefusedError, OSError):
        return False


def get_free_port() -> int:
    """Get a random free port."""
    import socket

    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.bind(("127.0.0.1", 0))
    port = sock.getsockname()[1]
    sock.close()
    return port


def kill_process_tree(pid: int):
    """Kill a process and all its children."""
    try:
        parent = psutil.Process(pid)
        children = parent.children(recursive=True)

        for child in children:
            try:
                child.kill()
            except psutil.NoSuchProcess:
                pass

        parent.kill()
    except (psutil.NoSuchProcess, ImportError):
        # Fallback if psutil not available
        try:
            os.kill(pid, signal.SIGKILL)
        except ProcessLookupError:
            pass
