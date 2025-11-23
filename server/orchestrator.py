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


def detect_manual_start_during_orchestrator() -> bool:
    """
    Detect if user manually started ComfyUI while orchestrator is active.

    Returns True if:
    - Orchestrator is running (PID file exists)
    - We are NOT supervised (COMFYGIT_SUPERVISED != 1)
    - Orchestrator is in middle of a switch (lock file exists)
    """
    workspace_root = find_workspace_root()
    if not workspace_root:
        return False

    metadata_dir = workspace_root / ".metadata"

    # Check if orchestrator is running
    orch_pid_file = metadata_dir / ".orchestrator.pid"
    if not orch_pid_file.exists():
        return False

    try:
        orch_pid = int(orch_pid_file.read_text())
        os.kill(orch_pid, 0)  # Check if alive
    except (ProcessLookupError, ValueError):
        return False  # Orchestrator dead

    # Check if we're supervised by that orchestrator
    if os.environ.get("COMFYGIT_SUPERVISED") == "1":
        return False  # We're the child process of orchestrator - normal

    # Check if orchestrator is mid-switch
    lock_file = metadata_dir / ".switch.lock"
    if lock_file.exists():
        # Orchestrator is doing a switch, but we're a manual start
        return True

    return False


def force_cleanup_orchestrator_state(metadata_dir: Path) -> None:
    """
    Force cleanup of orchestrator state files.

    ⚠️ ONLY use if orchestrator is confirmed dead/stuck.
    """
    print("[ComfyGit] Force cleaning orchestrator state...")

    files_to_remove = [
        ".switch.lock",
        ".switch_status.json",
        ".switch_request.json",
    ]

    for filename in files_to_remove:
        file_path = metadata_dir / filename
        if file_path.exists():
            try:
                file_path.unlink()
                print(f"[ComfyGit]   ✓ Removed {filename}")
            except Exception as e:
                print(f"[ComfyGit]   ✗ Could not remove {filename}: {e}")

    # Try to kill orchestrator process
    pid_file = metadata_dir / ".orchestrator.pid"
    if pid_file.exists():
        try:
            pid = int(pid_file.read_text())
            print(f"[ComfyGit]   Attempting to kill orchestrator process {pid}")

            try:
                os.kill(pid, signal.SIGTERM)
                time.sleep(2)

                # Check if still alive
                try:
                    os.kill(pid, 0)
                    # Still alive - force kill
                    print(f"[ComfyGit]   Process didn't exit, force killing...")
                    os.kill(pid, signal.SIGKILL)
                except ProcessLookupError:
                    print(f"[ComfyGit]   ✓ Process terminated successfully")
            except ProcessLookupError:
                print(f"[ComfyGit]   Process already dead")

            pid_file.unlink()
        except Exception as e:
            print(f"[ComfyGit]   Could not kill orchestrator: {e}")

    print("[ComfyGit] Force cleanup complete")


# ============================================================================
# File Communication (IPC)
# ============================================================================

def write_switch_request(metadata_dir: Path, target_env: str, source_env: str = None) -> None:
    """Write switch request for orchestrator."""
    switch_file = metadata_dir / ".switch_request.json"
    data = {
        "target_env": target_env,
        "source_env": source_env,
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
# File Polling & Command Communication (Phase 1 - Control Endpoints)
# ============================================================================

def safe_write_command(metadata_dir: Path, command: dict) -> None:
    """
    Atomically write command file (thread-safe).

    Uses atomic rename pattern to prevent partial reads.
    """
    import tempfile

    # Write to temp file in same directory (atomic rename requirement)
    temp_file = metadata_dir / f".cmd.tmp.{os.getpid()}"

    try:
        with open(temp_file, 'w') as f:
            json.dump(command, f)

        # Atomic rename (POSIX + Windows 3.3+)
        temp_file.replace(metadata_dir / ".cmd")
    finally:
        # Clean up temp file if rename failed
        if temp_file.exists():
            temp_file.unlink()


def cleanup_stale_temp_files(metadata_dir: Path) -> None:
    """Remove stale temp files from previous runs."""
    for temp_file in metadata_dir.glob(".cmd.tmp.*"):
        try:
            temp_file.unlink()
        except OSError:
            pass  # Ignore errors on cleanup


# ============================================================================
# Workspace Configuration (Phase 1 - Control Endpoints)
# ============================================================================

DEFAULT_CONFIG = {
    "version": "1.0",
    "orchestrator": {
        "control_port": 8189,
        "control_port_range": [8189, 8199],
        "enable_control_server": True,
        "log_level": "info",
        "health_check_timeout_s": 90,
        "sync_timeout_s": 600,
    },
    "comfyui": {
        "default_port": 8188,
        "default_host": "127.0.0.1",
    },
    "frontend": {
        "emergency_threshold_normal_s": 10,
        "emergency_threshold_switching_s": 60,
    }
}


def load_workspace_config(metadata_dir: Path) -> dict:
    """Load workspace configuration, falling back to defaults."""
    config_file = metadata_dir / "workspace_config.json"

    if not config_file.exists():
        # Create default config
        with open(config_file, 'w') as f:
            json.dump(DEFAULT_CONFIG, f, indent=2)
        print(f"[Orchestrator] Created default config: {config_file}")
        return DEFAULT_CONFIG.copy()

    try:
        with open(config_file) as f:
            user_config = json.load(f)

        # Deep merge with defaults (create fresh copy to avoid mutation)
        import copy
        config = copy.deepcopy(DEFAULT_CONFIG)
        for section in user_config:
            if section in config and isinstance(config[section], dict):
                config[section].update(user_config[section])
            else:
                config[section] = user_config[section]

        return config

    except Exception as e:
        print(f"[Orchestrator] Error loading config: {e}")
        print(f"[Orchestrator] Using default configuration")
        import copy
        return copy.deepcopy(DEFAULT_CONFIG)


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

        # Load workspace configuration
        self.config = load_workspace_config(self.metadata_dir)

        # Setup flags for command coordination
        self._shutdown_requested = False
        self._restart_requested = False

        # Cleanup stale temp files from previous runs
        cleanup_stale_temp_files(self.metadata_dir)

        # Track current process and start time
        self.current_process = None
        self._process_start_time = 0

        # Write PID file
        write_orchestrator_pid(self.metadata_dir)

        # Start control server (if enabled in config)
        if self.config["orchestrator"]["enable_control_server"]:
            self._start_control_server()

        # Setup signal handlers
        signal.signal(signal.SIGTERM, self._handle_sigterm)
        signal.signal(signal.SIGINT, self._handle_sigint)

    def run_forever(self):
        """
        Main supervision loop.

        Continuously runs ComfyUI, handling restarts and environment switches.
        """
        # Check for pending switch request on startup
        switch_request = read_switch_request(self.metadata_dir)
        if switch_request:
            target_env = switch_request.get("target_env")
            if target_env and target_env != self.current_env_name:
                print(f"[Orchestrator] Found pending switch request to {target_env}")
                old_env = self.current_env_name
                self.current_env_name = target_env
                # Write initial status
                write_switch_status(
                    self.metadata_dir,
                    state="preparing",
                    progress=10,
                    message=f"Preparing to switch from {old_env} to {target_env}...",
                    target_env=target_env,
                    source_env=old_env
                )
                # Clean up the request file since we're handling it
                switch_file = self.metadata_dir / ".switch_request.json"
                if switch_file.exists():
                    switch_file.unlink()

        print(f"[Orchestrator] Starting supervision of {self.current_env_name}")

        # Track if this is the first start (for status reporting) and source env for rollback
        first_start = switch_request is not None
        source_env = switch_request.get("source_env") if switch_request else None

        try:
            while True:
                # Get current environment
                env = self.workspace.get_environment(
                    self.current_env_name,
                    auto_sync=False
                )

                # Update status if this is from a switch
                if first_start:
                    write_switch_status(
                        self.metadata_dir,
                        state="syncing",
                        progress=30,
                        message=f"Syncing {self.current_env_name}...",
                        target_env=self.current_env_name,
                        source_env=source_env
                    )

                # Sync environment (install nodes, models, etc.)
                self._sync_environment(env)

                # Update status if this is from a switch
                if first_start:
                    write_switch_status(
                        self.metadata_dir,
                        state="starting",
                        progress=60,
                        message=f"Starting {self.current_env_name}...",
                        target_env=self.current_env_name,
                        source_env=source_env
                    )

                # Start ComfyUI
                proc = self._start_comfyui(env)

                # If this is first start from a switch, validate health
                if first_start:
                    write_switch_status(
                        self.metadata_dir,
                        state="validating",
                        progress=80,
                        message=f"Waiting for {self.current_env_name} to be healthy...",
                        target_env=self.current_env_name,
                        source_env=source_env
                    )

                    if self._wait_for_health(proc, timeout=90):
                        print(f"[Orchestrator] {self.current_env_name} is healthy")
                        write_switch_status(
                            self.metadata_dir,
                            state="complete",
                            progress=100,
                            message=f"Successfully switched to {self.current_env_name}",
                            target_env=self.current_env_name,
                            source_env=source_env
                        )
                        # Clean up status and lock after delay
                        import time
                        time.sleep(5)
                        cleanup_switch_status(self.metadata_dir)
                        release_switch_lock(self.metadata_dir)
                        source_env = None  # Clear source after successful switch
                    else:
                        # Health check failed - rollback if we have a source env
                        print(f"[Orchestrator] Health check failed for {self.current_env_name}")
                        proc.kill()  # Kill the failed process

                        if source_env:
                            print(f"[Orchestrator] Rolling back to {source_env}...")
                            write_switch_status(
                                self.metadata_dir,
                                state="rolling_back",
                                progress=90,
                                message=f"Health check failed, rolling back to {source_env}...",
                                target_env=self.current_env_name,
                                source_env=source_env
                            )
                            self.current_env_name = source_env
                            first_start = False  # Don't health check the rollback env
                            source_env = None  # Clear source after rollback
                            # Loop will retry with old environment
                            continue
                        else:
                            # No source to rollback to, just continue
                            write_switch_status(
                                self.metadata_dir,
                                state="failed",
                                progress=100,
                                message=f"Health check failed for {self.current_env_name}",
                                error="No source environment to rollback to"
                            )
                            release_switch_lock(self.metadata_dir)

                    first_start = False  # Only check health on first start

                # Wait for exit (with command polling)
                exit_code = self._wait_with_polling(proc)

                # Handle shutdown request
                if exit_code is None:
                    # Shutdown requested via command
                    print("[Orchestrator] Shutdown requested, exiting")
                    break

                # Handle restart request from command
                if self._restart_requested:
                    print("[Orchestrator] Restart requested via command, resyncing...")
                    self._restart_requested = False  # Clear flag
                    continue  # Loop continues with same environment

                # Handle exit codes
                if exit_code == self.EXIT_RESTART:
                    print("[Orchestrator] Restart requested (exit 42), resyncing...")
                    continue  # Loop continues with same environment

                elif exit_code == self.EXIT_SWITCH_ENV:
                    print("[Orchestrator] Environment switch requested (exit 43)...")
                    old_env = self.current_env_name
                    success = self._handle_switch_request()

                    if success:
                        print(f"[Orchestrator] Switched to {self.current_env_name}")
                        # Set first_start flag so main loop does health check and status updates
                        first_start = True
                        source_env = old_env  # Track source for rollback
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
            env.sync(preserve_workflows=True, remove_extra_nodes=False)
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

        # Track current process and start time (Phase 1 - Control Endpoints)
        self.current_process = proc
        self._process_start_time = time.time()

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
        Switch to different environment.

        Just updates current_env_name. Main loop handles starting the new env.

        Args:
            target_env_name: Name of environment to switch to

        Returns:
            True if target environment exists, False otherwise
        """
        old_env_name = self.current_env_name

        try:
            # Validate target environment exists
            self.workspace.get_environment(target_env_name, auto_sync=False)

            # Update current environment name
            self.current_env_name = target_env_name
            print(f"[Orchestrator] Switching from {old_env_name} to {target_env_name}")

            return True

        except Exception as e:
            print(f"[Orchestrator] Switch failed: {e}")
            print(f"[Orchestrator] Staying on {old_env_name}")
            return False

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

    # ========================================================================
    # File Polling Methods (Phase 1 - Control Endpoints)
    # ========================================================================

    def _check_command_file(self) -> Optional[dict]:
        """Check for command file and process if exists."""
        cmd_file = self.metadata_dir / ".cmd"
        if not cmd_file.exists():
            return None

        try:
            with open(cmd_file) as f:
                cmd = json.load(f)

            # Delete immediately (idempotent)
            cmd_file.unlink()

            return cmd

        except (json.JSONDecodeError, IOError) as e:
            # Partial write or corrupted file - ignore and delete
            print(f"[Orchestrator] Command file error: {e}")
            if cmd_file.exists():
                cmd_file.unlink()
            return None

    def _wait_with_polling(self, proc: subprocess.Popen) -> Optional[int]:
        """
        Wait for process to exit, checking for commands periodically.

        Returns:
            Exit code of process, or None if shutdown requested
        """
        while True:
            # Check for shutdown FIRST (highest priority)
            if self._shutdown_requested:
                print("[Orchestrator] Shutdown requested during wait")
                return None

            # Check for commands BEFORE checking process state
            # This ensures commands are processed even if process is zombie
            cmd = self._check_command_file()
            if cmd:
                command = cmd.get("command")
                if command == "restart":
                    self._handle_restart_command()
                elif command == "shutdown":
                    self._handle_shutdown_command()
                elif command == "abort_switch":
                    self._handle_abort_switch_command(cmd)
                else:
                    print(f"[Orchestrator] Unknown command: {command}")

            # Use wait with timeout to properly reap zombies
            try:
                exit_code = proc.wait(timeout=0.5)
                # Process exited
                return exit_code
            except subprocess.TimeoutExpired:
                # Process still running, continue polling
                continue

    def _handle_restart_command(self):
        """Handle restart command from control server."""
        print("[Orchestrator] Restart command received")
        self._restart_requested = True

        # Kill current ComfyUI gracefully
        if self.current_process and self.current_process.poll() is None:
            print("[Orchestrator] Terminating ComfyUI...")
            self.current_process.terminate()

            try:
                self.current_process.wait(timeout=5)
                print("[Orchestrator] ComfyUI terminated gracefully")
            except subprocess.TimeoutExpired:
                print("[Orchestrator] Timeout, force killing...")
                self.current_process.kill()
                self.current_process.wait(timeout=2)  # Reap zombie

    def _handle_shutdown_command(self):
        """Handle shutdown command from control server."""
        print("[Orchestrator] Shutdown command received")
        self._shutdown_requested = True
        self._kill_supervised_process()

    def _handle_abort_switch_command(self, cmd: dict):
        """
        Handle abort switch command from manual ComfyUI start.

        This means user got impatient and manually started ComfyUI.
        We should:
        1. Kill the new environment process (if running)
        2. Clean up state files
        3. Shut down orchestrator gracefully
        """
        print("[Orchestrator] ⚠️  Abort switch command received")
        print(f"[Orchestrator] Reason: {cmd.get('reason')}")
        print(f"[Orchestrator] Manual process PID: {cmd.get('pid')}")

        # Check if we're actually in a switch
        status = read_switch_status(self.metadata_dir)

        if status and status.get("state") in ["complete", "rolled_back"]:
            print("[Orchestrator] Abort received but switch already finished")
            print("[Orchestrator] Shutting down to avoid conflict with manual process")
            self._shutdown_requested = True
            return

        # Kill the environment we were trying to start
        if self.current_process and self.current_process.poll() is None:
            print(f"[Orchestrator] Terminating {self.current_env_name} process...")
            self.current_process.terminate()

            try:
                self.current_process.wait(timeout=3)
            except subprocess.TimeoutExpired:
                print("[Orchestrator] Force killing...")
                self.current_process.kill()
                self.current_process.wait(timeout=2)

        # Update switch status to aborted
        write_switch_status(
            self.metadata_dir,
            state="aborted",
            progress=100,
            message="Switch aborted by user (manual restart detected)",
            target_env=getattr(self, '_switch_target_env', 'unknown'),
            source_env=getattr(self, '_switch_source_env', 'unknown')
        )

        # Clean up state files
        release_switch_lock(self.metadata_dir)

        # Wait a moment for status to be visible
        time.sleep(2)
        cleanup_switch_status(self.metadata_dir)

        # Set shutdown flag
        print("[Orchestrator] Shutting down to allow manual process to take over")
        self._shutdown_requested = True

    # ========================================================================
    # HTTP Control Server (Phase 1 - Control Endpoints)
    # ========================================================================

    def _start_control_server(self):
        """Start HTTP control server with automatic port selection."""
        from http.server import HTTPServer, BaseHTTPRequestHandler
        import threading

        # Get port range from config
        start_port, end_port = self.config["orchestrator"]["control_port_range"]

        orchestrator = self  # Closure reference

        class ControlHandler(BaseHTTPRequestHandler):
            ALLOWED_ORIGINS = [
                'http://127.0.0.1:8188',
                'http://localhost:8188',
            ]

            def log_message(self, format, *args):
                """Add timestamps to logs."""
                from datetime import datetime
                timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
                message = format % args
                print(f"[{timestamp}] [ControlServer] {message}")

            def _check_origin(self) -> bool:
                """Check if request origin is allowed (CORS protection)."""
                origin = self.headers.get('Origin')
                if not origin:
                    return True  # Non-browser requests (curl) allowed
                return origin in self.ALLOWED_ORIGINS

            def do_OPTIONS(self):
                """Handle CORS preflight."""
                origin = self.headers.get('Origin')

                if origin in self.ALLOWED_ORIGINS:
                    self.send_response(200)
                    self.send_header('Access-Control-Allow-Origin', origin)
                    self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
                    self.send_header('Access-Control-Allow-Headers', 'Content-Type')
                    self.send_header('Access-Control-Max-Age', '86400')
                    self.end_headers()
                else:
                    self.send_error(403, "Origin not allowed")

            def do_GET(self):
                """Handle GET requests."""
                if not self._check_origin():
                    self.send_error(403, "Origin not allowed")
                    return

                if self.path == '/health':
                    current_proc = orchestrator.current_process

                    health_data = {
                        "status": "alive",
                        "pid": os.getpid(),
                        "current_env": orchestrator.current_env_name,
                        "supervised": current_proc is not None,
                    }

                    # Add ComfyUI process state
                    if current_proc:
                        health_data["comfyui"] = {
                            "pid": current_proc.pid,
                            "running": current_proc.poll() is None,
                            "uptime_seconds": int(time.time() - orchestrator._process_start_time),
                        }

                    self._send_json_with_cors(health_data)

                elif self.path == '/status':
                    # Read status from file
                    status = read_switch_status(orchestrator.metadata_dir)
                    if status:
                        self._send_json_with_cors(status)
                    else:
                        self._send_json_with_cors({
                            "state": "idle",
                            "current_env": orchestrator.current_env_name,
                            "message": "No switch in progress"
                        })

                else:
                    self.send_error(404, "Not Found")

            def do_POST(self):
                """Handle POST requests."""
                if not self._check_origin():
                    self.send_error(403, "Origin not allowed")
                    return

                if self.path == '/restart':
                    # Write restart command (atomic)
                    safe_write_command(orchestrator.metadata_dir, {
                        "command": "restart",
                        "timestamp": time.time()
                    })

                    self._send_json_with_cors({
                        "status": "restart_requested",
                        "message": "Restart command queued (will process within 500ms)"
                    })

                elif self.path == '/kill':
                    # Write shutdown command (atomic)
                    safe_write_command(orchestrator.metadata_dir, {
                        "command": "shutdown",
                        "timestamp": time.time()
                    })

                    self._send_json_with_cors({
                        "status": "shutting_down",
                        "message": "Shutdown command queued (will process within 500ms)"
                    })

                else:
                    self.send_error(404, "Not Found")

            def _send_json_with_cors(self, data: dict):
                """Send JSON response with appropriate CORS headers."""
                origin = self.headers.get('Origin')

                self.send_response(200)
                self.send_header('Content-Type', 'application/json')

                if origin in self.ALLOWED_ORIGINS:
                    self.send_header('Access-Control-Allow-Origin', origin)
                    self.send_header('Access-Control-Allow-Credentials', 'true')

                self.end_headers()
                self.wfile.write(json.dumps(data).encode())

        # Try ports in configured range
        for port in range(start_port, end_port + 1):
            try:
                server = HTTPServer(('127.0.0.1', port), ControlHandler)

                # Success! Write port to file for frontend discovery
                port_file = self.metadata_dir / ".control_port"
                port_file.write_text(str(port))

                # Start server thread
                thread = threading.Thread(
                    target=server.serve_forever,
                    daemon=True,
                    name="OrchestratorControlServer"
                )
                thread.start()

                # Store for cleanup
                self.control_server = server
                self.control_port = port

                print(f"[Orchestrator] Control server listening on http://127.0.0.1:{port}")
                return

            except OSError as e:
                # Port already in use - try next
                if e.errno in (48, 98, 10048):  # EADDRINUSE on macOS/Linux/Windows
                    continue
                else:
                    print(f"[Orchestrator] Port {port} failed: {e}")
                    continue

        # All ports exhausted
        print(f"[Orchestrator] WARNING: Could not bind control server (ports {start_port}-{end_port} all in use)")
        print("[Orchestrator] Emergency controls will not be available via UI")

        self.control_server = None
        self.control_port = None

    def _handle_sigterm(self, signum, frame):
        """Handle SIGTERM gracefully."""
        print("[Orchestrator] Received SIGTERM, shutting down...")
        self._kill_supervised_process()
        self._cleanup()
        sys.exit(0)

    def _handle_sigint(self, signum, frame):
        """Handle SIGINT (Ctrl+C) gracefully."""
        print("[Orchestrator] Received SIGINT, shutting down...")
        self._kill_supervised_process()
        self._cleanup()
        sys.exit(0)

    def _kill_supervised_process(self):
        """Kill supervised ComfyUI process if running."""
        if not self.current_process or self.current_process.poll() is not None:
            return  # No process or already dead

        print(f"[Orchestrator] Terminating supervised process (PID {self.current_process.pid})...")
        self.current_process.terminate()

        try:
            self.current_process.wait(timeout=3)
            print("[Orchestrator] Process terminated gracefully")
        except subprocess.TimeoutExpired:
            print("[Orchestrator] Timeout, force killing...")
            self.current_process.kill()
            self.current_process.wait()  # Reap zombie


# ============================================================================
# Main Entry Point
# ============================================================================

def main():
    """Orchestrator entry point."""
    parser = argparse.ArgumentParser(description="ComfyGit Environment Orchestrator")
    parser.add_argument("--workspace", required=True, help="Workspace root path")
    parser.add_argument("--environment", required=True, help="Initial environment name")
    parser.add_argument("--args", nargs=argparse.REMAINDER, default=[], help="ComfyUI arguments")

    args = parser.parse_args()

    orchestrator = Orchestrator(
        workspace_root=Path(args.workspace),
        initial_env=args.environment,
        args=args.args
    )

    orchestrator.run_forever()


if __name__ == "__main__":
    main()
