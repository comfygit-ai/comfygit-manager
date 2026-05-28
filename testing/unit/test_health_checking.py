"""Unit tests for orchestrator health-check delegation."""

from unittest.mock import Mock

import pytest


@pytest.mark.unit
class TestHealthChecking:
    """Test manager-owned readiness orchestration."""

    def test_health_check_delegates_to_core_readiness(self, mocker, mock_workspace_factory):
        """Should delegate process and endpoint readiness checks to core."""
        from server.orchestrator import Orchestrator

        mock_proc = Mock()
        mock_wait = mocker.patch(
            "server.orchestrator.wait_for_comfyui_ready",
            return_value=True,
        )

        orch = Orchestrator(
            workspace_root=mock_workspace_factory.path,
            initial_env="env1",
            args=["--port", "8188"],
        )

        result = orch._wait_for_health(mock_proc, timeout=10)

        assert result is True
        mock_wait.assert_called_once()
        args, kwargs = mock_wait.call_args
        assert args[0] is mock_proc
        assert args[1].base_url == "http://127.0.0.1:8188"
        assert kwargs["timeout"] == 10
        assert kwargs["interval"] == 2
        assert kwargs["stable_successes"] == 3
        assert callable(kwargs["log"])

    def test_health_check_returns_core_failure(self, mocker, mock_workspace_factory):
        """Should surface a failed readiness result from core."""
        from server.orchestrator import Orchestrator

        mock_proc = Mock()
        mocker.patch("server.orchestrator.wait_for_comfyui_ready", return_value=False)

        orch = Orchestrator(
            workspace_root=mock_workspace_factory.path,
            initial_env="env1",
            args=["--port", "8188"],
        )

        assert orch._wait_for_health(mock_proc, timeout=10) is False

    def test_health_check_uses_custom_port(self, mocker, mock_workspace_factory):
        """Should resolve custom launch ports before delegating to core."""
        from server.orchestrator import Orchestrator

        mock_proc = Mock()
        mock_wait = mocker.patch(
            "server.orchestrator.wait_for_comfyui_ready",
            return_value=True,
        )

        orch = Orchestrator(
            workspace_root=mock_workspace_factory.path,
            initial_env="env1",
            args=["--port", "9999"],
        )

        orch._wait_for_health(mock_proc, timeout=5)

        endpoint = mock_wait.call_args.args[1]
        assert endpoint.base_url == "http://127.0.0.1:9999"

    def test_health_check_uses_default_port_without_args(self, mocker, mock_workspace_factory):
        """Should use the configured default endpoint when no port args are supplied."""
        from server.orchestrator import Orchestrator

        mock_proc = Mock()
        mock_wait = mocker.patch(
            "server.orchestrator.wait_for_comfyui_ready",
            return_value=True,
        )

        orch = Orchestrator(
            workspace_root=mock_workspace_factory.path,
            initial_env="env1",
            args=[],
        )

        orch._wait_for_health(mock_proc, timeout=5)

        endpoint = mock_wait.call_args.args[1]
        assert endpoint.base_url == "http://127.0.0.1:8188"

    def test_health_check_maps_wildcard_listen_to_loopback(self, mocker, mock_workspace_factory):
        """Should probe loopback when ComfyUI binds all interfaces."""
        from server.orchestrator import Orchestrator

        mock_proc = Mock()
        mock_wait = mocker.patch(
            "server.orchestrator.wait_for_comfyui_ready",
            return_value=True,
        )

        orch = Orchestrator(
            workspace_root=mock_workspace_factory.path,
            initial_env="env1",
            args=["--listen", "--port=7777"],
        )

        orch._wait_for_health(mock_proc, timeout=5)

        endpoint = mock_wait.call_args.args[1]
        assert endpoint.bind_host == "0.0.0.0"
        assert endpoint.base_url == "http://127.0.0.1:7777"
