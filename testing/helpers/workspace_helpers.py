"""Helper utilities for creating test workspace structures."""

import json
from pathlib import Path
from typing import Optional


class WorkspaceBuilder:
    """Builder for creating test workspace structures."""

    def __init__(self, root: Path):
        self.root = root
        self.environments = {}

    def create(self) -> Path:
        """Create the workspace structure."""
        self.root.mkdir(parents=True, exist_ok=True)

        # Create pyproject.toml
        (self.root / "pyproject.toml").write_text("""
[project]
name = "test-workspace"
version = "0.1.0"

[tool.comfygit]
environments = []
""")

        # Create environments directory
        (self.root / "environments").mkdir(exist_ok=True)

        # Create metadata directory
        (self.root / ".metadata").mkdir(exist_ok=True)

        return self.root

    def add_environment(self, name: str, port: int = 8188) -> "EnvironmentBuilder":
        """Add an environment to the workspace."""
        env_builder = EnvironmentBuilder(self.root / "environments" / name, name, port)
        self.environments[name] = env_builder
        return env_builder


class EnvironmentBuilder:
    """Builder for creating test environment structures."""

    def __init__(self, path: Path, name: str, port: int = 8188):
        self.path = path
        self.name = name
        self.port = port

    def create(self, with_comfyui: bool = True, with_venv: bool = True) -> Path:
        """Create the environment structure."""
        self.path.mkdir(parents=True, exist_ok=True)

        # Create .cec metadata
        (self.path / ".cec").write_text(json.dumps({
            "name": self.name,
            "created": "2025-01-20T00:00:00",
            "port": self.port,
        }))

        if with_comfyui:
            self._create_comfyui()

        if with_venv:
            self._create_venv()

        return self.path

    def _create_comfyui(self):
        """Create mock ComfyUI directory."""
        comfyui = self.path / "ComfyUI"
        comfyui.mkdir(exist_ok=True)

        # Create main.py
        (comfyui / "main.py").write_text("""
import sys
import socket
import time
import signal

def handler(signum, frame):
    sys.exit(0)

signal.signal(signal.SIGTERM, handler)
signal.signal(signal.SIGINT, handler)

port = 8188
for i, arg in enumerate(sys.argv):
    if arg == "--port" and i + 1 < len(sys.argv):
        port = int(sys.argv[i + 1])

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)

try:
    sock.bind(("127.0.0.1", port))
    sock.listen(1)
    print(f"ComfyUI listening on port {port}", flush=True)

    while True:
        time.sleep(1)
except KeyboardInterrupt:
    sys.exit(0)
finally:
    sock.close()
""")

        # Create custom_nodes directory
        (comfyui / "custom_nodes").mkdir(exist_ok=True)

    def _create_venv(self):
        """Create mock virtual environment."""
        import sys

        venv = self.path / ".venv"
        venv.mkdir(exist_ok=True)

        bin_dir = venv / "bin"
        bin_dir.mkdir(exist_ok=True)

        # Symlink system python
        python_exe = bin_dir / "python"
        if not python_exe.exists():
            python_exe.symlink_to(sys.executable)


class StateFileBuilder:
    """Builder for creating test state files."""

    def __init__(self, metadata_dir: Path):
        self.metadata_dir = metadata_dir

    def create_switch_request(self, target_env: str, timestamp: Optional[float] = None) -> Path:
        """Create a switch request file."""
        import time

        if timestamp is None:
            timestamp = time.time()

        file = self.metadata_dir / ".switch_request.json"
        file.write_text(json.dumps({
            "target_env": target_env,
            "timestamp": timestamp
        }))
        return file

    def create_switch_status(self, state: str, progress: int = 0, **kwargs) -> Path:
        """Create a switch status file."""
        import time

        data = {
            "state": state,
            "progress": progress,
            "updated_at": time.time(),
            **kwargs
        }

        file = self.metadata_dir / ".switch_status.json"
        file.write_text(json.dumps(data))
        return file

    def create_startup_state(self, env_name: str, port: int = 8188, **kwargs) -> Path:
        """Create a startup state file."""
        import time

        data = {
            "python_executable": "/usr/bin/python3",
            "working_directory": f"/test/environments/{env_name}/ComfyUI",
            "argv": ["main.py", "--port", str(port)],
            "environment_name": env_name,
            "workspace_root": "/test/workspace",
            "port": port,
            "timestamp": time.time(),
            **kwargs
        }

        file = self.metadata_dir / ".startup_state.json"
        file.write_text(json.dumps(data))
        return file

    def create_orchestrator_pid(self, pid: Optional[int] = None) -> Path:
        """Create an orchestrator PID file."""
        import os

        if pid is None:
            pid = os.getpid()

        file = self.metadata_dir / ".orchestrator.pid"
        file.write_text(str(pid))
        return file

    def create_lock_file(self) -> Path:
        """Create a switch lock file."""
        file = self.metadata_dir / ".switch.lock"
        file.touch()
        return file
