"""Tests for E2E harness shell scripts."""

import json
import os
import socket
import subprocess
import sys
import time
from pathlib import Path

import pytest


REPO_ROOT = Path(__file__).resolve().parents[2]
HARNESS_DIR = REPO_ROOT / "harness"
WORKSPACE_SCRIPT = HARNESS_DIR / "workspace.sh"
PORTS_SCRIPT = HARNESS_DIR / "ports.sh"
COMFYUI_SCRIPT = HARNESS_DIR / "comfyui.sh"
BROWSER_SCRIPT = HARNESS_DIR / "browser.sh"


def run_bash(command: str, env: dict | None = None) -> subprocess.CompletedProcess:
    """Run a bash command and return the completed process."""
    merged_env = os.environ.copy()
    if env:
        merged_env.update(env)
    return subprocess.run(
        ["bash", "-c", command],
        env=merged_env,
        capture_output=True,
        text=True,
        check=False,
    )


def reserve_port() -> tuple[socket.socket, int]:
    """Reserve a TCP port and return (socket, port)."""
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.bind(("127.0.0.1", 0))
    sock.listen(1)
    return sock, sock.getsockname()[1]


@pytest.mark.unit
class TestHarnessScripts:
    """Validate harness scripts exist and behave."""

    def test_scripts_exist(self):
        """All required harness scripts should exist."""
        assert WORKSPACE_SCRIPT.exists()
        assert PORTS_SCRIPT.exists()
        assert COMFYUI_SCRIPT.exists()
        assert BROWSER_SCRIPT.exists()

    def test_get_port_is_deterministic(self):
        """get_port should return deterministic 8200-8299 ports."""
        result_a = run_bash(f'source "{PORTS_SCRIPT}"; get_port "alpha"')
        result_b = run_bash(f'source "{PORTS_SCRIPT}"; get_port "alpha"')

        assert result_a.returncode == 0
        assert result_b.returncode == 0

        port_a = int(result_a.stdout.strip())
        port_b = int(result_b.stdout.strip())

        assert port_a == port_b
        assert 8200 <= port_a <= 8299

    def test_is_port_available(self):
        """is_port_available should detect bound ports."""
        sock, port = reserve_port()
        try:
            available = run_bash(f'source "{PORTS_SCRIPT}"; is_port_available {port}')
            assert available.returncode != 0
        finally:
            sock.close()

        available = run_bash(f'source "{PORTS_SCRIPT}"; is_port_available {port}')
        assert available.returncode == 0

    def test_workspace_create_list_destroy(self, tmp_path: Path):
        """Workspace helpers should manage templated workspaces."""
        template_root = tmp_path / "templates"
        workspace_root = tmp_path / "workspaces"
        template_dir = template_root / "basic"
        template_dir.mkdir(parents=True)
        (template_dir / "marker.txt").write_text("ok")

        env = {
            "HARNESS_TEMPLATE_ROOT": str(template_root),
            "HARNESS_WORKSPACE_ROOT": str(workspace_root),
        }

        create = run_bash(
            f'source "{WORKSPACE_SCRIPT}"; create_workspace "basic" "test-env"',
            env=env,
        )
        assert create.returncode == 0
        workspace_path = Path(create.stdout.strip())
        assert workspace_path.exists()
        assert (workspace_path / "marker.txt").exists()

        listed = run_bash(f'source "{WORKSPACE_SCRIPT}"; list_workspaces', env=env)
        assert "test-env" in listed.stdout

        destroy = run_bash(
            f'source "{WORKSPACE_SCRIPT}"; destroy_workspace "{workspace_path}"',
            env=env,
        )
        assert destroy.returncode == 0
        assert not workspace_path.exists()

    def test_comfyui_start_stop(self, tmp_path: Path):
        """ComfyUI helpers should manage a local server."""
        workspace = tmp_path / "workspace"
        comfyui_dir = workspace / "ComfyUI"
        comfyui_dir.mkdir(parents=True)
        (comfyui_dir / "main.py").write_text(
            """
import socket
import time
import sys

if __name__ == "__main__":
    port = 8188
    if "--port" in sys.argv:
        port = int(sys.argv[sys.argv.index("--port") + 1])
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    sock.bind(("127.0.0.1", port))
    sock.listen(1)
    try:
        while True:
            time.sleep(0.1)
    finally:
        sock.close()
"""
        )

        _, port = reserve_port()
        start = run_bash(
            f'source "{COMFYUI_SCRIPT}"; pid=$(start_comfyui "{workspace}" {port}); echo $pid'
        )
        assert start.returncode == 0
        pid = int(start.stdout.strip())

        wait = run_bash(f'source "{COMFYUI_SCRIPT}"; wait_comfyui {port} 2000')
        assert wait.returncode == 0

        stop = run_bash(f'source "{COMFYUI_SCRIPT}"; stop_comfyui {pid}')
        assert stop.returncode == 0

    def test_browser_session_snapshot(self, tmp_path: Path):
        """Browser helpers should capture snapshots."""
        env = {"HARNESS_BROWSER_ROOT": str(tmp_path / "browser")}
        index_file = tmp_path / "index.html"
        index_file.write_text("<html><body>ok</body></html>")

        sock, port = reserve_port()
        sock.close()

        server = subprocess.Popen(
            [sys.executable, "-m", "http.server", str(port), "--bind", "127.0.0.1"],
            cwd=tmp_path,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
        try:
            time.sleep(0.2)
            create = run_bash(
                f'source "{BROWSER_SCRIPT}"; create_browser_session "sample" {port}',
                env=env,
            )
            assert create.returncode == 0
            session_name = create.stdout.strip()
            session_dir = Path(env["HARNESS_BROWSER_ROOT"]) / session_name
            metadata = json.loads((session_dir / "session.json").read_text())
            assert metadata["port"] == port

            snapshot = run_bash(
                f'source "{BROWSER_SCRIPT}"; get_snapshot "{session_name}"',
                env=env,
            )
            assert snapshot.returncode == 0
            snapshot_path = Path(snapshot.stdout.strip())
            assert snapshot_path.exists()
            assert "ok" in snapshot_path.read_text()

            close = run_bash(
                f'source "{BROWSER_SCRIPT}"; close_browser_session "{session_name}"',
                env=env,
            )
            assert close.returncode == 0
            assert not session_dir.exists()
        finally:
            server.terminate()
            server.wait(timeout=5)
