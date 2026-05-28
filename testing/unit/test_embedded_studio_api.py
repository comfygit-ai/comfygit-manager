from __future__ import annotations

from types import SimpleNamespace

from aiohttp import web

from api.v2 import studio


class FakeStudioResult:
    def __init__(self, **payload):
        self.payload = payload

    def to_dict(self):
        return self.payload


def _fake_env(tmp_path):
    workspace_path = tmp_path / "workspace"
    env_path = workspace_path / "environments" / "demo"
    env_path.mkdir(parents=True)
    return SimpleNamespace(
        name="demo",
        path=env_path,
        workspace=SimpleNamespace(path=workspace_path),
    )


async def test_open_studio_uses_embedded_runtime(monkeypatch, aiohttp_client, tmp_path):
    env = _fake_env(tmp_path)
    captured = {}

    async def fake_open_embedded_studio(app, received_env, **kwargs):
        captured["app"] = app
        captured["env"] = received_env
        captured["kwargs"] = kwargs
        return FakeStudioResult(
            status="running",
            url="http://example.test/api/v2/comfygit/studio/ui/",
            env_name="demo",
            mode="embedded",
            started=True,
        )

    monkeypatch.setattr(studio, "get_environment_from_request", lambda request: env)
    monkeypatch.setattr(studio, "open_embedded_studio", fake_open_embedded_studio)

    app = web.Application()
    app.add_routes(studio.routes)
    client = await aiohttp_client(app)

    response = await client.post(
        "/v2/comfygit/studio/open",
        json={},
        headers={"Host": "example.test:8210", "X-Forwarded-Proto": "https"},
    )
    payload = await response.json()

    assert response.status == 200
    assert payload["mode"] == "embedded"
    assert payload["url"] == "http://example.test/api/v2/comfygit/studio/ui/"
    assert captured["env"] is env
    assert captured["kwargs"]["public_scheme"] == "https"
    assert captured["kwargs"]["public_host"] == "example.test:8210"
    assert captured["kwargs"]["public_ui_path"] == studio.STUDIO_PUBLIC_UI_PATH
    assert captured["kwargs"]["comfy_url"] == "http://127.0.0.1:8210"


async def test_open_studio_rejects_external_process_options(monkeypatch, aiohttp_client, tmp_path):
    monkeypatch.setattr(studio, "get_environment_from_request", lambda request: _fake_env(tmp_path))

    app = web.Application()
    app.add_routes(studio.routes)
    client = await aiohttp_client(app)

    response = await client.post("/v2/comfygit/studio/open", json={"port": 9000})
    payload = await response.json()

    assert response.status == 400
    assert payload["error"] == "Embedded Studio uses the current ComfyUI server and does not bind a new port."
