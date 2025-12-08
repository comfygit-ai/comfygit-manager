"""Shared pytest fixtures for orchestrator tests."""

import os
import sys
import json
import shutil
import tempfile
from pathlib import Path
from typing import Generator
from unittest.mock import MagicMock
import pytest

# Add parent directory to Python path so tests can import server module
parent_dir = Path(__file__).parent.parent
if str(parent_dir) not in sys.path:
    sys.path.insert(0, str(parent_dir))

# Add server directory to path so deploy module can be found
# Force insert at position 0 to ensure it takes precedence
server_dir = parent_dir / "server"
if str(server_dir) not in sys.path:
    sys.path.insert(0, str(server_dir))

# Import the real server package first (from parent_dir/server/)
# This prevents the mock from shadowing it
import server as real_server_package

# Now add a mock PromptServer to it for ComfyUI compatibility
# This allows comfygit_panel.py to import from server.PromptServer
if not hasattr(real_server_package, 'PromptServer'):
    real_server_package.PromptServer = MagicMock()

# Pre-import deploy modules to ensure they're cached before tests run.
# This fixes an issue where running unit and integration tests together
# would fail due to module import order issues.
from deploy.runpod_client import RunPodClient  # noqa: F401, E402


@pytest.fixture
def temp_dir() -> Generator[Path, None, None]:
    """Create a temporary directory for tests."""
    tmpdir = Path(tempfile.mkdtemp())
    yield tmpdir
    shutil.rmtree(tmpdir, ignore_errors=True)


@pytest.fixture
def mock_workspace(temp_dir: Path) -> Path:
    """Create a mock ComfyGit workspace structure."""
    workspace = temp_dir / "comfygit"
    workspace.mkdir()

    # Create workspace structure
    (workspace / "pyproject.toml").write_text("""
[project]
name = "test-workspace"
version = "0.1.0"

[tool.comfygit]
environments = ["env1", "env2"]
""")

    # Create environments directory
    envs_dir = workspace / "environments"
    envs_dir.mkdir()

    # Create metadata directory
    metadata_dir = workspace / ".metadata"
    metadata_dir.mkdir()

    # Create workspace config
    workspace_config = metadata_dir / "workspace.json"
    workspace_config.write_text(json.dumps({
        "version": 1,
        "active_environment": "env1",
        "created_at": "2025-01-20T00:00:00",
        "global_model_directory": {
            "path": str(workspace / "models"),
            "added_at": "2025-01-20T00:00:00",
            "last_sync": "2025-01-20T00:00:00"
        },
        "prefer_registry_cache": True
    }))

    # Create models directory
    (workspace / "models").mkdir()

    # Create cache directory with node mappings (required by Environment)
    cache_dir = workspace / "comfygit_cache"
    cache_dir.mkdir()
    node_mappings = cache_dir / "node_mappings.json"
    node_mappings.write_text(json.dumps({
        "nodes": {},
        "version": "1.0"
    }))

    return workspace


@pytest.fixture
def mock_environment(mock_workspace: Path) -> Path:
    """Create a mock environment with ComfyUI."""
    env_path = mock_workspace / "environments" / "env1"
    env_path.mkdir(parents=True)

    # Create ComfyUI directory
    comfyui_path = env_path / "ComfyUI"
    comfyui_path.mkdir()

    # Create main.py
    (comfyui_path / "main.py").write_text("""
import sys
import time
import socket

# Simple mock ComfyUI server for testing
if __name__ == "__main__":
    port = 8188
    for i, arg in enumerate(sys.argv):
        if arg == "--port" and i + 1 < len(sys.argv):
            port = int(sys.argv[i + 1])

    # Bind to port to simulate server
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    sock.bind(("127.0.0.1", port))
    sock.listen(1)

    print(f"Mock ComfyUI listening on port {port}")

    # Run until killed or exit code signal
    try:
        while True:
            time.sleep(0.5)
    except KeyboardInterrupt:
        sys.exit(0)
    finally:
        sock.close()
""")

    # Create venv
    venv_path = env_path / ".venv"
    venv_path.mkdir()
    (venv_path / "bin").mkdir()

    # Use system python as mock
    import sys
    python_exe = venv_path / "bin" / "python"
    python_exe.symlink_to(sys.executable)

    # Create .cec metadata
    (env_path / ".cec").write_text(json.dumps({
        "name": "env1",
        "created": "2025-01-20T00:00:00",
    }))

    return env_path


@pytest.fixture
def mock_orchestrator_venv(temp_dir: Path) -> Path:
    """Create a mock orchestrator venv."""
    venv_path = temp_dir / ".orchestrator_venv"
    venv_path.mkdir()
    (venv_path / "bin").mkdir()

    # Symlink system python
    import sys
    python_exe = venv_path / "bin" / "python"
    python_exe.symlink_to(sys.executable)

    return venv_path


@pytest.fixture
def metadata_dir(mock_workspace: Path, monkeypatch) -> Path:
    """Get metadata directory for state files."""
    # Set COMFYGIT_HOME so find_workspace_root() can locate the workspace
    monkeypatch.setenv("COMFYGIT_HOME", str(mock_workspace))
    return mock_workspace / ".metadata"


@pytest.fixture
def mock_switch_request(metadata_dir: Path) -> Path:
    """Create a mock switch request file."""
    switch_file = metadata_dir / ".switch_request.json"
    switch_file.write_text(json.dumps({
        "target_env": "env2",
        "timestamp": 1705776100.0
    }))
    return switch_file


@pytest.fixture
def mock_startup_state(metadata_dir: Path) -> Path:
    """Create a mock startup state file."""
    state_file = metadata_dir / ".startup_state.json"
    state_file.write_text(json.dumps({
        "python_executable": "/usr/bin/python3",
        "working_directory": "/test/ComfyUI",
        "argv": ["main.py", "--port", "8188"],
        "environment_name": "env1",
        "workspace_root": "/test/workspace",
        "port": 8188,
        "timestamp": 1705776000.0
    }))
    return state_file


@pytest.fixture(autouse=True)
def clean_env_vars():
    """Clean up environment variables before/after tests."""
    original_env = os.environ.copy()

    # Remove ComfyGit env vars
    for key in list(os.environ.keys()):
        if key.startswith("COMFYGIT_"):
            del os.environ[key]

    yield

    # Restore original environment
    os.environ.clear()
    os.environ.update(original_env)


@pytest.fixture
def mock_comfyui_args() -> list[str]:
    """Standard ComfyUI arguments for testing."""
    return ["--port", "8188", "--listen", "0.0.0.0"]


@pytest.fixture
def mock_workspace_factory(mocker, temp_dir):
    """Mock WorkspaceFactory for tests that don't need real workspace."""
    # Use temp directory so mkdir works
    test_workspace = temp_dir / "test_workspace"
    test_workspace.mkdir()
    (test_workspace / ".metadata").mkdir()

    mock_workspace_obj = mocker.Mock()
    mock_workspace_obj.path = test_workspace
    mock_workspace_obj.paths = mocker.Mock()
    mock_workspace_obj.paths.metadata = test_workspace / ".metadata"

    mocker.patch("server.orchestrator.WorkspaceFactory.find", return_value=mock_workspace_obj)
    # Also mock the control server to avoid port binding issues in tests
    mocker.patch("server.orchestrator.Orchestrator._start_control_server")
    return mock_workspace_obj
