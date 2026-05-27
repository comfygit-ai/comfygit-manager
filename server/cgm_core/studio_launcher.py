"""Launch and track local ComfyGit Studio serve processes."""

from __future__ import annotations

import atexit
import importlib.util
import os
import shutil
import socket
import subprocess
import sys
import time
from dataclasses import dataclass
from pathlib import Path
from typing import Any, TextIO

DEFAULT_STUDIO_PORT = 8190
STUDIO_PORT_SCAN_LIMIT = 100
STARTUP_TIMEOUT_SECONDS = 5.0
STARTUP_POLL_SECONDS = 0.05
LOOPBACK_HOSTS = {"localhost", "127.0.0.1", "::1", "[::1]"}


class StudioLaunchError(RuntimeError):
    """Raised when the local Studio serve process cannot be launched."""


@dataclass(frozen=True)
class StudioLaunchResult:
    """Browser-facing metadata for a launched or reused Studio server."""

    status: str
    url: str | None
    env_name: str
    pid: int | None = None
    started: bool = False
    reused: bool = False
    bind_host: str | None = None
    port: int | None = None
    comfy_url: str | None = None
    log_path: str | None = None
    message: str | None = None

    def to_dict(self) -> dict[str, Any]:
        return {
            "status": self.status,
            "url": self.url,
            "env_name": self.env_name,
            "pid": self.pid,
            "started": self.started,
            "reused": self.reused,
            "bind_host": self.bind_host,
            "port": self.port,
            "comfy_url": self.comfy_url,
            "log_path": self.log_path,
            "message": self.message,
        }


@dataclass
class _StudioSession:
    env_path: Path
    env_name: str
    bind_host: str
    port: int
    comfy_url: str
    log_path: Path
    process: subprocess.Popen
    log_handle: TextIO

    def is_running(self) -> bool:
        return self.process.poll() is None

    def result(self, *, public_scheme: str, public_host: str, reused: bool = False) -> StudioLaunchResult:
        running = self.is_running()
        return StudioLaunchResult(
            status="running" if running else "stopped",
            url=_public_url(public_scheme, public_host, self.port) if running else None,
            env_name=self.env_name,
            pid=self.process.pid if running else None,
            started=False,
            reused=reused and running,
            bind_host=self.bind_host,
            port=self.port,
            comfy_url=self.comfy_url,
            log_path=str(self.log_path),
        )


_sessions: dict[str, _StudioSession] = {}


def open_studio_server(
    env,
    *,
    public_scheme: str,
    public_host: str,
    comfy_url: str,
    requested_port: int | None = None,
    requested_bind_host: str | None = None,
) -> StudioLaunchResult:
    """Start or reuse a `cg serve` Studio process for the current environment."""

    env_path = Path(env.path).resolve()
    session_key = str(env_path)
    existing = _sessions.get(session_key)
    if existing and existing.is_running():
        return existing.result(public_scheme=public_scheme, public_host=public_host, reused=True)

    if existing:
        _close_session(existing)
        _sessions.pop(session_key, None)

    bind_host, port = _select_bind(public_host, requested_bind_host, requested_port)
    workspace_path = Path(env.workspace.path).resolve()
    log_dir = workspace_path / ".metadata" / "studio"
    log_dir.mkdir(parents=True, exist_ok=True)
    log_path = log_dir / f"{_safe_name(env.name)}.log"
    state_db = log_dir / f"{_safe_name(env.name)}.sqlite"

    command = [
        *_comfygit_cli_command(),
        "-e",
        env.name,
        "serve",
        "--host",
        bind_host,
        "--port",
        str(port),
        "--comfy-url",
        comfy_url,
        "--state",
        "local",
        "--gallery",
        "private",
        "--state-db",
        str(state_db),
    ]

    env_vars = os.environ.copy()
    env_vars["COMFYGIT_HOME"] = str(workspace_path)
    log_handle = log_path.open("a", encoding="utf-8", buffering=1)
    log_handle.write(f"\n[comfygit-manager] Launching Studio: {' '.join(command)}\n")

    try:
        process = _popen(command, cwd=workspace_path, env=env_vars, log_handle=log_handle)
    except Exception:
        log_handle.close()
        raise

    try:
        _wait_for_listen(process, bind_host, port, log_path)
    except Exception:
        _terminate_process(process)
        log_handle.close()
        raise

    session = _StudioSession(
        env_path=env_path,
        env_name=env.name,
        bind_host=bind_host,
        port=port,
        comfy_url=comfy_url,
        log_path=log_path,
        process=process,
        log_handle=log_handle,
    )
    _sessions[session_key] = session
    return StudioLaunchResult(
        status="running",
        url=_public_url(public_scheme, public_host, port),
        env_name=env.name,
        pid=process.pid,
        started=True,
        reused=False,
        bind_host=bind_host,
        port=port,
        comfy_url=comfy_url,
        log_path=str(log_path),
    )


def get_studio_server_status(
    env,
    *,
    public_scheme: str,
    public_host: str,
) -> StudioLaunchResult:
    """Return the tracked Studio process state for an environment."""

    env_path = Path(env.path).resolve()
    session = _sessions.get(str(env_path))
    if not session:
        return StudioLaunchResult(status="stopped", url=None, env_name=env.name)
    return session.result(public_scheme=public_scheme, public_host=public_host)


def stop_all_studio_servers() -> None:
    """Terminate tracked Studio processes during Manager shutdown."""

    for key, session in list(_sessions.items()):
        if session.is_running():
            _terminate_process(session.process)
        _close_session(session)
        _sessions.pop(key, None)


def _terminate_process(process: subprocess.Popen) -> None:
    if process.poll() is not None:
        return
    process.terminate()
    try:
        process.wait(timeout=3)
    except subprocess.TimeoutExpired:
        process.kill()


def _close_session(session: _StudioSession) -> None:
    try:
        session.log_handle.close()
    except OSError:
        pass


def _comfygit_cli_command() -> list[str]:
    if importlib.util.find_spec("comfygit_cli.__main__") is not None:
        return [sys.executable, "-m", "comfygit_cli"]

    for executable in ("cg", "comfygit"):
        path = shutil.which(executable)
        if path:
            return [path]

    raise StudioLaunchError(
        "ComfyGit CLI is not installed in this Python environment. "
        "Install the matching `comfygit` package to use Open Studio."
    )


def _popen(command: list[str], *, cwd: Path, env: dict[str, str], log_handle: TextIO) -> subprocess.Popen:
    kwargs: dict[str, Any] = {
        "cwd": str(cwd),
        "env": env,
        "stdin": subprocess.DEVNULL,
        "stdout": log_handle,
        "stderr": subprocess.STDOUT,
    }
    if os.name == "nt":
        kwargs["creationflags"] = getattr(subprocess, "CREATE_NEW_PROCESS_GROUP", 0)
    else:
        kwargs["start_new_session"] = True
    return subprocess.Popen(command, **kwargs)


def _wait_for_listen(
    process: subprocess.Popen,
    bind_host: str,
    port: int,
    log_path: Path,
    timeout_seconds: float = STARTUP_TIMEOUT_SECONDS,
) -> None:
    deadline = time.monotonic() + timeout_seconds
    connect_host = _startup_probe_host(bind_host)
    last_error: OSError | None = None

    while time.monotonic() < deadline:
        if process.poll() is not None:
            tail = _tail_text(log_path)
            raise StudioLaunchError(
                "ComfyGit Studio server exited during startup."
                + (f"\n\nRecent log output:\n{tail}" if tail else "")
            )

        try:
            with socket.create_connection((connect_host, port), timeout=0.2):
                return
        except OSError as exc:
            last_error = exc
            time.sleep(STARTUP_POLL_SECONDS)

    tail = _tail_text(log_path)
    detail = f" Last probe error: {last_error}" if last_error else ""
    raise StudioLaunchError(
        f"Timed out waiting for ComfyGit Studio on {connect_host}:{port}.{detail}"
        + (f"\n\nRecent log output:\n{tail}" if tail else "")
    )


def _startup_probe_host(bind_host: str) -> str:
    if bind_host in {"0.0.0.0", ""}:
        return "127.0.0.1"
    if bind_host == "::":
        return "::1"
    return bind_host


def _select_bind(
    public_host: str,
    requested_bind_host: str | None,
    requested_port: int | None,
) -> tuple[str, int]:
    preferred_port = requested_port or DEFAULT_STUDIO_PORT
    bind_candidates = _bind_candidates(public_host, requested_bind_host)
    errors: list[str] = []

    for bind_host in bind_candidates:
        try:
            return bind_host, _find_available_port(bind_host, preferred_port)
        except OSError as exc:
            errors.append(f"{bind_host}: {exc}")

    raise StudioLaunchError("No available Studio bind address found. " + "; ".join(errors))


def _bind_candidates(public_host: str, requested_bind_host: str | None) -> list[str]:
    if requested_bind_host:
        return [requested_bind_host]

    env_bind = os.environ.get("COMFYGIT_STUDIO_BIND_HOST")
    if env_bind:
        return [env_bind]

    if public_host in LOOPBACK_HOSTS:
        return ["127.0.0.1"]

    # Prefer the browser-visible host when it is bound on this machine. In
    # containerized dev stacks that host may belong to the Docker host instead,
    # so fall back to a wildcard container bind while still returning the
    # browser-visible URL to the frontend.
    return [public_host.strip("[]"), "0.0.0.0"]


def _find_available_port(bind_host: str, preferred_port: int) -> int:
    for port in range(preferred_port, preferred_port + STUDIO_PORT_SCAN_LIMIT + 1):
        with socket.socket(_socket_family(bind_host), socket.SOCK_STREAM) as sock:
            sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            sock.bind((bind_host, port))
            return port
    raise OSError(f"no available port in range {preferred_port}-{preferred_port + STUDIO_PORT_SCAN_LIMIT}")


def _socket_family(host: str) -> socket.AddressFamily:
    if ":" in host and host not in {"0.0.0.0", ""}:
        return socket.AF_INET6
    return socket.AF_INET


def _public_url(scheme: str, host: str, port: int) -> str:
    return f"{scheme}://{_format_url_host(host)}:{port}/"


def _format_url_host(host: str) -> str:
    if ":" in host and not host.startswith("["):
        return f"[{host}]"
    return host


def _safe_name(name: str) -> str:
    return "".join(char if char.isalnum() or char in {"-", "_", "."} else "_" for char in name)


def _tail_text(path: Path, max_bytes: int = 4096) -> str:
    if not path.exists():
        return ""
    with path.open("rb") as handle:
        handle.seek(0, os.SEEK_END)
        size = handle.tell()
        handle.seek(max(0, size - max_bytes), os.SEEK_SET)
        return handle.read().decode("utf-8", errors="replace").strip()


atexit.register(stop_all_studio_servers)
