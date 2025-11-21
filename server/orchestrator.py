#!/usr/bin/env python3
"""
ComfyGit Environment Orchestrator.

Permanent supervisor process that manages ComfyUI environment lifecycle.
Handles restarts (exit 42) and environment switches (exit 43).
"""

import argparse
import json
import os
import signal
import socket
import subprocess
import sys
import time
import venv
from pathlib import Path
from typing import Optional

from comfygit_core.factories.workspace_factory import WorkspaceFactory
from comfygit_core.core.workspace import Workspace
from comfygit_core.core.environment import Environment
from comfygit_core.models.exceptions import CDWorkspaceNotFoundError, CDEnvironmentNotFoundError


# ============================================================================
# Environment Detection
# ============================================================================

def find_workspace_root() -> Optional[Path]:
    """
    Find workspace root via env var or default location.

    Priority:
    1. COMFYGIT_HOME environment variable
    2. ~/comfygit (default location)
    3. Search upwards from CWD (fallback)
    """
    # Try environment variable
    if 'COMFYGIT_HOME' in os.environ:
        workspace_root = Path(os.environ['COMFYGIT_HOME'])
        if workspace_root.exists():
            return workspace_root

    # Try default location
    default_workspace = Path.home() / 'comfygit'
    if default_workspace.exists() and (default_workspace / 'pyproject.toml').exists():
        return default_workspace

    # Try searching upwards from CWD
    current = Path.cwd()
    while current != current.parent:
        if (current / 'pyproject.toml').exists() and \
           (current / 'environments').is_dir():
            return current
        current = current.parent

    return None


def detect_environment_type() -> tuple[bool, Optional[Workspace], Optional[Environment]]:
    """
    Detect if running in managed or unmanaged environment.

    Returns:
        (is_managed, workspace, environment)
        - is_managed: True if in ComfyGit workspace
        - workspace: Workspace object if found, else None
        - environment: Environment object if found, else None
    """
    # Step 1: Find workspace root
    workspace_root = find_workspace_root()
    if not workspace_root:
        return (False, None, None)

    # Step 2: Load workspace
    try:
        workspace = WorkspaceFactory.find(workspace_root)
    except CDWorkspaceNotFoundError:
        return (False, None, None)

    # Step 3: Check if CWD is under workspace/environments/<env_name>
    cwd = Path.cwd()

    # Expected: workspace/environments/<env_name>/ComfyUI
    if cwd.name == 'ComfyUI':
        env_path = cwd.parent
        env_name = env_path.name
        environments_path = env_path.parent

        if environments_path.name == 'environments' and \
           environments_path.parent == workspace.path:
            # We're in a managed environment!
            try:
                environment = workspace.get_environment(env_name, auto_sync=False)
                return (True, workspace, environment)
            except CDEnvironmentNotFoundError:
                pass

    # Step 4: Not in managed environment
    return (False, workspace, None)


def should_spawn_orchestrator_for_switch() -> bool:
    """
    Determine if we need to spawn orchestrator for environment switch.

    Returns True if:
    - We're doing an environment switch (exit 43)
    - Orchestrator is not already running
    """
    # Check if orchestrator is already supervising us
    if os.environ.get("COMFYGIT_SUPERVISED") == "1":
        return False

    # Check if we can find running orchestrator process
    workspace_root = find_workspace_root()
    if not workspace_root:
        return True

    orchestrator_pid_file = workspace_root / ".metadata" / ".orchestrator.pid"
    if orchestrator_pid_file.exists():
        try:
            pid = int(orchestrator_pid_file.read_text())
            # Check if process is alive
            os.kill(pid, 0)  # Signal 0 just checks existence
            return False  # Orchestrator already running
        except (ProcessLookupError, ValueError):
            # Stale PID file
            orchestrator_pid_file.unlink()

    return True


# ============================================================================
# File Communication (IPC)
# ============================================================================

def write_switch_request(metadata_dir: Path, target_env: str) -> None:
    """Write switch request for orchestrator."""
    switch_file = metadata_dir / ".switch_request.json"
    data = {
        "target_env": target_env,
        "timestamp": time.time()
    }
    with open(switch_file, 'w') as f:
        json.dump(data, f, indent=2)


def read_switch_request(metadata_dir: Path) -> Optional[dict]:
    """Read switch request."""
    switch_file = metadata_dir / ".switch_request.json"
    if not switch_file.exists():
        return None

    try:
        with open(switch_file) as f:
            return json.load(f)
    except (json.JSONDecodeError, IOError):
        return None


def write_switch_status(metadata_dir: Path, state: str, progress: int = 0,
                       message: str = "", **kwargs) -> None:
    """Write switch status for browser to poll."""
    status_file = metadata_dir / ".switch_status.json"

    status = {
        "state": state,
        "progress": progress,
        "message": message,
        "updated_at": time.time(),
        **kwargs
    }

    with open(status_file, 'w') as f:
        json.dump(status, f, indent=2)


def read_switch_status(metadata_dir: Path) -> Optional[dict]:
    """Read switch status."""
    status_file = metadata_dir / ".switch_status.json"
    if not status_file.exists():
        return None

    try:
        with open(status_file) as f:
            return json.load(f)
    except (json.JSONDecodeError, IOError):
        return None


def cleanup_switch_status(metadata_dir: Path) -> None:
    """Remove switch status file."""
    status_file = metadata_dir / ".switch_status.json"
    if status_file.exists():
        status_file.unlink()


def write_orchestrator_pid(metadata_dir: Path) -> None:
    """Write orchestrator PID file."""
    pid_file = metadata_dir / ".orchestrator.pid"
    pid_file.write_text(str(os.getpid()))


def read_orchestrator_pid(metadata_dir: Path) -> Optional[int]:
    """Read orchestrator PID."""
    pid_file = metadata_dir / ".orchestrator.pid"
    if not pid_file.exists():
        return None

    try:
        return int(pid_file.read_text())
    except ValueError:
        return None


def cleanup_orchestrator_pid(metadata_dir: Path) -> None:
    """Remove orchestrator PID file."""
    pid_file = metadata_dir / ".orchestrator.pid"
    if pid_file.exists():
        pid_file.unlink()


def acquire_switch_lock(metadata_dir: Path, timeout: int = 300) -> bool:
    """
    Acquire switch lock.

    Returns True if lock acquired, False if already locked.
    Automatically cleans up stale locks (>timeout seconds old).
    """
    lock_file = metadata_dir / ".switch.lock"

    if lock_file.exists():
        # Check if stale
        age = time.time() - lock_file.stat().st_mtime
        if age > timeout:
            lock_file.unlink()  # Remove stale lock
        else:
            return False  # Lock held

    lock_file.touch()
    return True


def release_switch_lock(metadata_dir: Path) -> None:
    """Release switch lock."""
    lock_file = metadata_dir / ".switch.lock"
    if lock_file.exists():
        lock_file.unlink()


def is_switch_locked(metadata_dir: Path) -> bool:
    """Check if switch is locked."""
    lock_file = metadata_dir / ".switch.lock"
    return lock_file.exists()


def write_startup_state(metadata_dir: Path, **kwargs) -> None:
    """Write startup state."""
    state_file = metadata_dir / ".startup_state.json"
    data = {
        "timestamp": time.time(),
        **kwargs
    }
    with open(state_file, 'w') as f:
        json.dump(data, f, indent=2)


def read_startup_state(metadata_dir: Path) -> Optional[dict]:
    """Read startup state."""
    state_file = metadata_dir / ".startup_state.json"
    if not state_file.exists():
        return None

    try:
        with open(state_file) as f:
            return json.load(f)
    except (json.JSONDecodeError, IOError):
        return None


# ============================================================================
# Orchestrator Venv Setup
# ============================================================================

def ensure_orchestrator_venv(venv_path: Path) -> None:
    """
    Create dedicated virtual environment for orchestrator.
    This runs once when custom node first loads.
    """
    if venv_path.exists() and (venv_path / "bin" / "python").exists():
        return  # Already set up

    print("[ComfyGit] Setting up orchestrator environment...")

    # Create venv
    venv.create(venv_path, with_pip=True, clear=True)

    # Install comfygit-core in orchestrator venv
    pip_exe = venv_path / "bin" / "pip"

    subprocess.run([
        str(pip_exe),
        "install",
        "comfygit-core",
        "--quiet"
    ], check=True)

    print("[ComfyGit] Orchestrator environment ready")


def get_orchestrator_python(custom_node_root: Path) -> Path:
    """Get path to orchestrator Python executable."""
    venv_path = custom_node_root / "server" / ".orchestrator_venv"
    python_exe = venv_path / "bin" / "python"

    if not python_exe.exists():
        raise RuntimeError("Orchestrator venv not found - run setup")

    return python_exe


# ============================================================================
# Helper Functions
# ============================================================================

def extract_comfyui_args() -> list[str]:
    """
    Extract ComfyUI arguments from sys.argv.

    Returns list like: ["--port", "8188", "--listen", "0.0.0.0"]
    """
    # sys.argv is like: ["main.py", "--port", "8188", ...]
    return sys.argv[1:] if len(sys.argv) > 1 else []


# ============================================================================
# Orchestrator Class
# ============================================================================

class Orchestrator:
    """Permanent supervisor for ComfyGit environments."""

    # Exit codes
    EXIT_CLEAN = 0
    EXIT_RESTART = 42
    EXIT_SWITCH_ENV = 43

    def __init__(self, workspace_root: Path, initial_env: str, args: list[str]):
        """
        Initialize orchestrator.

        Args:
            workspace_root: Path to workspace
            initial_env: Name of initial environment
            args: ComfyUI arguments (--port, --listen, etc.)
        """
        self.workspace_root = workspace_root
        self.current_env_name = initial_env
        self.comfyui_args = args

        # Load workspace
        self.workspace = WorkspaceFactory.find(workspace_root)

        # State files
        self.metadata_dir = self.workspace.path / ".metadata"
        self.metadata_dir.mkdir(exist_ok=True)

        # Write PID file
        write_orchestrator_pid(self.metadata_dir)

        # Setup signal handlers
        signal.signal(signal.SIGTERM, self._handle_sigterm)
        signal.signal(signal.SIGINT, self._handle_sigint)

    def run_forever(self):
        """
        Main supervision loop.

        Continuously runs ComfyUI, handling restarts and environment switches.
        """
        print(f"[Orchestrator] Starting supervision of {self.current_env_name}")

        try:
            while True:
                # Get current environment
                env = self.workspace.get_environment(
                    self.current_env_name,
                    auto_sync=False
                )

                # Sync environment (install nodes, models, etc.)
                self._sync_environment(env)

                # Start ComfyUI
                proc = self._start_comfyui(env)

                # Wait for exit
                exit_code = proc.wait()

                # Handle exit codes
                if exit_code == self.EXIT_RESTART:
                    print("[Orchestrator] Restart requested (exit 42), resyncing...")
                    continue  # Loop continues with same environment

                elif exit_code == self.EXIT_SWITCH_ENV:
                    print("[Orchestrator] Environment switch requested (exit 43)...")
                    success = self._handle_switch_request()

                    if success:
                        print(f"[Orchestrator] Switched to {self.current_env_name}")
                    else:
                        print(f"[Orchestrator] Switch failed, staying on {self.current_env_name}")

                    continue  # Loop with (potentially new) environment

                elif exit_code == self.EXIT_CLEAN:
                    print("[Orchestrator] ComfyUI exited cleanly, shutting down")
                    break

                else:
                    print(f"[Orchestrator] ComfyUI crashed (exit {exit_code}), exiting")
                    break

        finally:
            self._cleanup()

    def _sync_environment(self, env: Environment):
        """Sync environment (install nodes, download models)."""
        print(f"[Orchestrator] Syncing {env.name}...")

        try:
            env.sync()
            print(f"[Orchestrator] Sync complete")
        except Exception as e:
            print(f"[Orchestrator] Sync failed: {e}")
            # Continue anyway - ComfyUI might still work

    def _start_comfyui(self, env: Environment) -> subprocess.Popen:
        """
        Start ComfyUI subprocess.

        Returns:
            Running process
        """
        # Use environment's UV-managed Python
        python_exe = env.uv_manager.python_executable
        main_py = env.comfyui_path / "main.py"

        # Build command
        cmd = [str(python_exe), str(main_py)] + self.comfyui_args

        # Set environment variables
        env_vars = os.environ.copy()
        env_vars["COMFYGIT_SUPERVISED"] = "1"  # Mark as supervised

        print(f"[Orchestrator] Starting ComfyUI: {' '.join(cmd)}")

        # Start process
        proc = subprocess.Popen(
            cmd,
            cwd=env.comfyui_path,
            env=env_vars,
            stdout=sys.stdout,  # Inherit stdout (shows in terminal)
            stderr=sys.stderr   # Inherit stderr
        )

        return proc

    def _handle_switch_request(self) -> bool:
        """
        Handle environment switch request.

        Returns:
            True if switch succeeded, False if rolled back
        """
        # Read switch request
        switch_file = self.metadata_dir / ".switch_request.json"

        if not switch_file.exists():
            print("[Orchestrator] ERROR: No switch request file found")
            return False

        try:
            with open(switch_file) as f:
                request = json.load(f)

            target_env_name = request.get("target_env")
            if not target_env_name:
                print("[Orchestrator] ERROR: Invalid switch request")
                return False

            # Clean up request file
            switch_file.unlink()

            # Perform switch with rollback
            return self._switch_environment(target_env_name)

        except Exception as e:
            print(f"[Orchestrator] ERROR reading switch request: {e}")
            return False

    def _switch_environment(self, target_env_name: str) -> bool:
        """
        Switch to different environment with rollback capability.

        Args:
            target_env_name: Name of environment to switch to

        Returns:
            True if switch succeeded, False if rolled back
        """
        old_env_name = self.current_env_name

        self._update_switch_status(
            "preparing",
            progress=10,
            message=f"Preparing to switch from {old_env_name} to {target_env_name}...",
            target_env=target_env_name,
            source_env=old_env_name
        )

        try:
            # Load target environment
            target_env = self.workspace.get_environment(target_env_name, auto_sync=False)

            # Sync target environment
            self._update_switch_status(
                "syncing",
                progress=30,
                message=f"Syncing {target_env_name}...",
                target_env=target_env_name,
                source_env=old_env_name
            )

            target_env.sync()

            # Start new environment
            self._update_switch_status(
                "starting",
                progress=60,
                message=f"Starting {target_env_name}...",
                target_env=target_env_name,
                source_env=old_env_name
            )

            proc = self._start_comfyui(target_env)

            # Wait for health check
            self._update_switch_status(
                "validating",
                progress=80,
                message="Waiting for new environment to be healthy...",
                target_env=target_env_name,
                source_env=old_env_name
            )

            if self._wait_for_health(proc, timeout=90):
                # SUCCESS!
                self.current_env_name = target_env_name

                self._update_switch_status(
                    "complete",
                    progress=100,
                    message=f"Successfully switched to {target_env_name}",
                    target_env=target_env_name,
                    source_env=old_env_name
                )

                # Clean up switch status after delay
                time.sleep(5)
                self._cleanup_switch_status()

                return True
            else:
                # Health check failed
                print(f"[Orchestrator] {target_env_name} failed health check")
                proc.kill()
                raise RuntimeError("Health check failed")

        except Exception as e:
            # ROLLBACK
            print(f"[Orchestrator] Switch failed: {e}")
            print(f"[Orchestrator] Rolling back to {old_env_name}...")

            self._update_switch_status(
                "rolling_back",
                progress=90,
                message=f"Switch failed, restoring {old_env_name}...",
                target_env=target_env_name,
                source_env=old_env_name
            )

            try:
                # Reload old environment
                old_env = self.workspace.get_environment(old_env_name, auto_sync=False)
                old_env.sync()

                rollback_proc = self._start_comfyui(old_env)

                if self._wait_for_health(rollback_proc, timeout=60):
                    print(f"[Orchestrator] Rollback successful")

                    self._update_switch_status(
                        "rolled_back",
                        progress=100,
                        message=f"Switch failed, restored {old_env_name}",
                        error="New environment failed to start",
                        target_env=target_env_name,
                        source_env=old_env_name
                    )

                    time.sleep(10)
                    self._cleanup_switch_status()

                    return False  # Switch failed, but rollback worked
                else:
                    # CRITICAL: Rollback also failed
                    rollback_proc.kill()
                    raise RuntimeError("Rollback failed")

            except Exception as rollback_error:
                print(f"[Orchestrator] CRITICAL: Rollback failed: {rollback_error}")

                self._update_switch_status(
                    "critical_failure",
                    progress=100,
                    message="CRITICAL: Rollback failed",
                    error=str(rollback_error),
                    recovery_command=self._get_recovery_command(old_env_name),
                    target_env=target_env_name,
                    source_env=old_env_name
                )

                # Don't clean up status - user needs to see it
                raise

    def _wait_for_health(self, proc: subprocess.Popen, timeout: int) -> bool:
        """
        Wait for ComfyUI to become healthy.

        Args:
            proc: Running ComfyUI process
            timeout: Max seconds to wait

        Returns:
            True if healthy, False if timeout or crash
        """
        start = time.time()
        consecutive_successes = 0

        # Extract port from args
        port = 8188  # Default
        if "--port" in self.comfyui_args:
            idx = self.comfyui_args.index("--port")
            if idx + 1 < len(self.comfyui_args):
                port = int(self.comfyui_args[idx + 1])

        while time.time() - start < timeout:
            # Check if process died
            if proc.poll() is not None:
                print(f"[Orchestrator] Process died (exit {proc.returncode})")
                return False

            # Try to connect to port
            if self._check_port_connection(port):
                consecutive_successes += 1

                # Require 3 successful connections for stability
                if consecutive_successes >= 3:
                    return True
            else:
                consecutive_successes = 0

            time.sleep(2)

        print(f"[Orchestrator] Health check timeout after {timeout}s")
        return False

    def _check_port_connection(self, port: int) -> bool:
        """Check if port is accepting connections."""
        try:
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                s.settimeout(1)
                s.connect(("127.0.0.1", port))
                return True
        except (socket.timeout, ConnectionRefusedError, OSError):
            return False

    def _update_switch_status(self, state: str, progress: int = 0,
                             message: str = "", **kwargs) -> None:
        """Write switch status for browser to poll."""
        status = {
            "state": state,
            "progress": progress,
            "message": message,
            "updated_at": time.time(),
            **kwargs
        }

        status_file = self.metadata_dir / ".switch_status.json"
        with open(status_file, 'w') as f:
            json.dump(status, f, indent=2)

    def _cleanup_switch_status(self) -> None:
        """Remove switch status file."""
        cleanup_switch_status(self.metadata_dir)

    def _get_recovery_command(self, env_name: str) -> str:
        """Generate manual recovery command."""
        env = self.workspace.get_environment(env_name, auto_sync=False)
        python_exe = env.uv_manager.python_executable
        main_py = env.comfyui_path / "main.py"
        args = ' '.join(self.comfyui_args)

        return f"cd {env.comfyui_path} && {python_exe} {main_py} {args}"

    def _cleanup(self):
        """Clean up orchestrator state."""
        cleanup_orchestrator_pid(self.metadata_dir)

    def _handle_sigterm(self, signum, frame):
        """Handle SIGTERM gracefully."""
        print("[Orchestrator] Received SIGTERM, shutting down...")
        self._cleanup()
        sys.exit(0)

    def _handle_sigint(self, signum, frame):
        """Handle SIGINT (Ctrl+C) gracefully."""
        print("[Orchestrator] Received SIGINT, shutting down...")
        self._cleanup()
        sys.exit(0)


# ============================================================================
# Main Entry Point
# ============================================================================

def main():
    """Orchestrator entry point."""
    parser = argparse.ArgumentParser(description="ComfyGit Environment Orchestrator")
    parser.add_argument("--workspace", required=True, help="Workspace root path")
    parser.add_argument("--environment", required=True, help="Initial environment name")
    parser.add_argument("--args", nargs="*", default=[], help="ComfyUI arguments")

    args = parser.parse_args()

    orchestrator = Orchestrator(
        workspace_root=Path(args.workspace),
        initial_env=args.environment,
        args=args.args
    )

    orchestrator.run_forever()


if __name__ == "__main__":
    main()
