from __future__ import annotations

from types import SimpleNamespace

from cgm_core import studio_launcher


class FakeProcess:
    def __init__(self, pid: int = 1234) -> None:
        self.pid = pid
        self.terminated = False
        self.killed = False

    def poll(self):
        return None

    def terminate(self):
        self.terminated = True

    def kill(self):
        self.killed = True

    def wait(self, timeout=None):
        return 0


def _fake_env(tmp_path):
    workspace_path = tmp_path / "workspace"
    env_path = workspace_path / "environments" / "demo"
    env_path.mkdir(parents=True)
    return SimpleNamespace(
        name="demo",
        path=env_path,
        workspace=SimpleNamespace(path=workspace_path),
    )


def teardown_function():
    studio_launcher.stop_all_studio_servers()


def test_open_studio_launches_cg_serve_with_workspace(monkeypatch, tmp_path):
    env = _fake_env(tmp_path)
    captured = {}

    monkeypatch.setattr(studio_launcher.importlib.util, "find_spec", lambda name: object())
    monkeypatch.setattr(studio_launcher, "_find_available_port", lambda host, preferred: 8210)
    monkeypatch.setattr(studio_launcher, "_wait_for_listen", lambda process, bind_host, port, log_path: None)

    def fake_popen(command, *, cwd, env, log_handle):
        captured["command"] = command
        captured["cwd"] = cwd
        captured["env"] = env
        return FakeProcess()

    monkeypatch.setattr(studio_launcher, "_popen", fake_popen)

    result = studio_launcher.open_studio_server(
        env,
        public_scheme="http",
        public_host="127.0.0.1",
        comfy_url="http://127.0.0.1:8188",
    )

    assert result.status == "running"
    assert result.started is True
    assert result.url == "http://127.0.0.1:8210/"
    assert captured["cwd"] == env.workspace.path
    assert captured["env"]["COMFYGIT_HOME"] == str(env.workspace.path)
    assert captured["command"][:3] == [studio_launcher.sys.executable, "-m", "comfygit_cli"]
    assert captured["command"][3:] == [
        "-e",
        "demo",
        "serve",
        "--host",
        "127.0.0.1",
        "--port",
        "8210",
        "--comfy-url",
        "http://127.0.0.1:8188",
        "--state",
        "local",
        "--gallery",
        "private",
        "--state-db",
        str(env.workspace.path / ".metadata" / "studio" / "demo.sqlite"),
    ]


def test_open_studio_reuses_running_session(monkeypatch, tmp_path):
    env = _fake_env(tmp_path)
    popen_count = 0

    monkeypatch.setattr(studio_launcher.importlib.util, "find_spec", lambda name: object())
    monkeypatch.setattr(studio_launcher, "_find_available_port", lambda host, preferred: 8210)
    monkeypatch.setattr(studio_launcher, "_wait_for_listen", lambda process, bind_host, port, log_path: None)

    def fake_popen(command, *, cwd, env, log_handle):
        nonlocal popen_count
        popen_count += 1
        return FakeProcess(pid=1000 + popen_count)

    monkeypatch.setattr(studio_launcher, "_popen", fake_popen)

    first = studio_launcher.open_studio_server(
        env,
        public_scheme="http",
        public_host="127.0.0.1",
        comfy_url="http://127.0.0.1:8188",
    )
    second = studio_launcher.open_studio_server(
        env,
        public_scheme="http",
        public_host="localhost",
        comfy_url="http://127.0.0.1:8188",
    )

    assert first.started is True
    assert second.reused is True
    assert second.url == "http://localhost:8210/"
    assert popen_count == 1
