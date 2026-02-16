"""Unit tests for comfygit_server install source handling."""

import sys
from pathlib import Path
from unittest.mock import Mock

import pytest

# Add server directory to path
server_dir = Path(__file__).parent.parent.parent / "server"
if str(server_dir) not in sys.path:
    sys.path.insert(0, str(server_dir))

import comfygit_server  # noqa: E402


@pytest.fixture
def mock_env(tmp_path):
    """Create a minimal environment mock for process_install tests."""
    env = Mock()
    env.custom_nodes_path = tmp_path / "custom_nodes"
    env.custom_nodes_path.mkdir()
    env.pyproject = Mock()
    env.pyproject.nodes = Mock()
    env.pyproject.nodes.get_existing.return_value = {}
    env.node_manager = Mock()
    env.node_manager.add_node = Mock()
    env.node_manager.update_node = Mock()
    return env


@pytest.mark.unit
@pytest.mark.asyncio
async def test_process_install_defaults_to_registry_source_when_repository_present(mock_env):
    """Default install_source=registry should ignore repository field."""
    params = {
        "id": "comfyui-impact-pack",
        "selected_version": "1.2.3",
        "repository": "https://github.com/ltdrdata/ComfyUI-Impact-Pack",
    }

    result = await comfygit_server.process_install(mock_env, params)

    mock_env.node_manager.add_node.assert_called_once_with("comfyui-impact-pack@1.2.3", force=False)
    mock_env.node_manager.update_node.assert_not_called()
    assert result["status_str"] == "success"


@pytest.mark.unit
@pytest.mark.asyncio
async def test_process_install_uses_repository_for_explicit_git_source(mock_env):
    """install_source=git should install by repository identifier."""
    params = {
        "id": "kj-nodes",
        "selected_version": "1.2.0",
        "repository": "https://github.com/kijai/ComfyUI-KJNodes",
        "install_source": "git",
    }

    result = await comfygit_server.process_install(mock_env, params)

    mock_env.node_manager.add_node.assert_called_once_with(
        "https://github.com/kijai/ComfyUI-KJNodes",
        force=False,
    )
    mock_env.node_manager.update_node.assert_not_called()
    assert result["status_str"] == "success"


@pytest.mark.unit
@pytest.mark.asyncio
async def test_process_install_invalid_install_source_raises_value_error(mock_env):
    """Unknown install_source values should raise ValueError."""
    params = {
        "id": "kj-nodes",
        "install_source": "github",
    }

    with pytest.raises(ValueError, match="Invalid install_source"):
        await comfygit_server.process_install(mock_env, params)


@pytest.mark.unit
@pytest.mark.asyncio
async def test_process_install_git_source_without_repository_raises_value_error(mock_env):
    """install_source=git must include repository."""
    params = {
        "id": "kj-nodes",
        "install_source": "git",
    }

    with pytest.raises(ValueError, match="requires a non-empty repository"):
        await comfygit_server.process_install(mock_env, params)
