"""
Unit tests for workspace configuration (Phase 3).

Tests configuration loading, merging, and validation.
Following the revised design document from 2025-11-20.
"""

import json
import pytest
from unittest.mock import patch


@pytest.mark.unit
class TestWorkspaceConfiguration:
    """Test workspace configuration loading and merging."""

    def test_load_config_creates_default_when_missing(self, metadata_dir):
        """Should create default config file when it doesn't exist."""
        from server.orchestrator import load_workspace_config, DEFAULT_CONFIG

        # Ensure file doesn't exist
        config_file = metadata_dir / "orchestrator_config.json"
        assert not config_file.exists()

        config = load_workspace_config(metadata_dir)

        # Should have created file
        assert config_file.exists()

        # Should return default config
        assert config["version"] == DEFAULT_CONFIG["version"]
        assert config["orchestrator"]["control_port"] == DEFAULT_CONFIG["orchestrator"]["control_port"]
        assert config["orchestrator"]["enable_control_server"] == DEFAULT_CONFIG["orchestrator"]["enable_control_server"]

    def test_load_config_returns_defaults_structure(self, metadata_dir):
        """Should return complete default configuration structure."""
        from server.orchestrator import load_workspace_config

        config = load_workspace_config(metadata_dir)

        # Check all required sections exist
        assert "version" in config
        assert "orchestrator" in config
        assert "comfyui" in config
        assert "frontend" in config

        # Check orchestrator settings
        assert "control_port" in config["orchestrator"]
        assert "control_port_range" in config["orchestrator"]
        assert "enable_control_server" in config["orchestrator"]
        assert "log_level" in config["orchestrator"]
        assert "health_check_timeout_s" in config["orchestrator"]
        assert "sync_timeout_s" in config["orchestrator"]

        # Check comfyui settings
        assert "default_port" in config["comfyui"]
        assert "default_host" in config["comfyui"]

        # Check frontend settings
        assert "emergency_threshold_normal_s" in config["frontend"]
        assert "emergency_threshold_switching_s" in config["frontend"]

    def test_load_config_merges_user_values_with_defaults(self, metadata_dir):
        """Should merge user config values with defaults."""
        from server.orchestrator import load_workspace_config, DEFAULT_CONFIG

        # Write partial user config
        config_file = metadata_dir / "orchestrator_config.json"
        user_config = {
            "orchestrator": {
                "control_port": 9999,
                "health_check_timeout_s": 120
            }
        }
        with open(config_file, 'w') as f:
            json.dump(user_config, f)

        config = load_workspace_config(metadata_dir)

        # User values should override
        assert config["orchestrator"]["control_port"] == 9999
        assert config["orchestrator"]["health_check_timeout_s"] == 120

        # Defaults should still be present for non-overridden values
        assert config["orchestrator"]["enable_control_server"] == DEFAULT_CONFIG["orchestrator"]["enable_control_server"]
        assert config["orchestrator"]["control_port_range"] == DEFAULT_CONFIG["orchestrator"]["control_port_range"]
        assert config["comfyui"]["default_port"] == DEFAULT_CONFIG["comfyui"]["default_port"]
        assert config["frontend"]["emergency_threshold_normal_s"] == DEFAULT_CONFIG["frontend"]["emergency_threshold_normal_s"]

    def test_load_config_handles_corrupt_json(self, metadata_dir):
        """Should fall back to defaults on corrupt JSON."""
        from server.orchestrator import load_workspace_config, DEFAULT_CONFIG

        # Write invalid JSON
        config_file = metadata_dir / "orchestrator_config.json"
        config_file.write_text("{invalid json")

        config = load_workspace_config(metadata_dir)

        # Should return default config
        assert config["orchestrator"]["control_port"] == DEFAULT_CONFIG["orchestrator"]["control_port"]

    def test_load_config_handles_empty_file(self, metadata_dir):
        """Should handle empty config file gracefully."""
        from server.orchestrator import load_workspace_config, DEFAULT_CONFIG

        # Write empty JSON object
        config_file = metadata_dir / "orchestrator_config.json"
        with open(config_file, 'w') as f:
            json.dump({}, f)

        config = load_workspace_config(metadata_dir)

        # Should return complete defaults
        assert config["orchestrator"]["control_port"] == DEFAULT_CONFIG["orchestrator"]["control_port"]
        assert "frontend" in config

    def test_load_config_preserves_nested_structures(self, metadata_dir):
        """Should preserve nested configuration structures."""
        from server.orchestrator import load_workspace_config

        # Write config with nested values
        config_file = metadata_dir / "orchestrator_config.json"
        user_config = {
            "orchestrator": {
                "control_port_range": [9000, 9010]
            }
        }
        with open(config_file, 'w') as f:
            json.dump(user_config, f)

        config = load_workspace_config(metadata_dir)

        # Should preserve list structure
        assert isinstance(config["orchestrator"]["control_port_range"], list)
        assert config["orchestrator"]["control_port_range"] == [9000, 9010]

    def test_default_config_has_correct_types(self):
        """Should have correct data types for all config values."""
        from server.orchestrator import DEFAULT_CONFIG

        # Check types
        assert isinstance(DEFAULT_CONFIG["version"], str)
        assert isinstance(DEFAULT_CONFIG["orchestrator"]["control_port"], int)
        assert isinstance(DEFAULT_CONFIG["orchestrator"]["control_port_range"], list)
        assert isinstance(DEFAULT_CONFIG["orchestrator"]["enable_control_server"], bool)
        assert isinstance(DEFAULT_CONFIG["orchestrator"]["log_level"], str)
        assert isinstance(DEFAULT_CONFIG["orchestrator"]["health_check_timeout_s"], int)
        assert isinstance(DEFAULT_CONFIG["comfyui"]["default_port"], int)
        assert isinstance(DEFAULT_CONFIG["frontend"]["emergency_threshold_normal_s"], int)

    def test_default_config_port_range_is_valid(self):
        """Should have valid port range in default config."""
        from server.orchestrator import DEFAULT_CONFIG

        port_range = DEFAULT_CONFIG["orchestrator"]["control_port_range"]
        assert len(port_range) == 2
        assert port_range[0] <= port_range[1]
        assert 1024 <= port_range[0] < 65536
        assert 1024 <= port_range[1] < 65536

    def test_default_config_timeouts_are_positive(self):
        """Should have positive timeout values."""
        from server.orchestrator import DEFAULT_CONFIG

        assert DEFAULT_CONFIG["orchestrator"]["health_check_timeout_s"] > 0
        assert DEFAULT_CONFIG["orchestrator"]["sync_timeout_s"] > 0
        assert DEFAULT_CONFIG["frontend"]["emergency_threshold_normal_s"] > 0
        assert DEFAULT_CONFIG["frontend"]["emergency_threshold_switching_s"] > 0

    def test_load_config_does_not_mutate_defaults(self, metadata_dir):
        """Should not mutate the DEFAULT_CONFIG constant."""
        from server.orchestrator import load_workspace_config, DEFAULT_CONFIG

        # Store original value
        original_port = DEFAULT_CONFIG["orchestrator"]["control_port"]

        # Write custom config
        config_file = metadata_dir / "orchestrator_config.json"
        with open(config_file, 'w') as f:
            json.dump({"orchestrator": {"control_port": 7777}}, f)

        config = load_workspace_config(metadata_dir)

        # Returned config should have custom value
        assert config["orchestrator"]["control_port"] == 7777

        # DEFAULT_CONFIG should be unchanged
        assert DEFAULT_CONFIG["orchestrator"]["control_port"] == original_port


@pytest.mark.unit
class TestConfigurationInOrchestrator:
    """Test configuration usage in Orchestrator class."""

    def test_orchestrator_loads_config_on_init(self, mock_workspace, metadata_dir):
        """Should load workspace config during initialization."""
        from server.orchestrator import Orchestrator
        from unittest.mock import Mock

        # Create default config
        config_file = metadata_dir / "orchestrator_config.json"
        config_file.write_text('{"orchestrator": {"control_port": 8888}}')

        # Create mock workspace object with path attribute
        mock_ws_obj = Mock()
        mock_ws_obj.path = mock_workspace
        mock_ws_obj.paths = Mock()
        mock_ws_obj.paths.metadata = metadata_dir

        with patch('server.orchestrator.WorkspaceFactory.find') as mock_factory:
            mock_factory.return_value = mock_ws_obj

            orch = Orchestrator(
                workspace_root=mock_workspace,
                initial_env="test_env",
                args=["--port", "8188"]
            )

            # Should have loaded config
            assert hasattr(orch, 'config')
            assert orch.config["orchestrator"]["control_port"] == 8888

    def test_orchestrator_uses_config_for_control_server(self, mock_workspace, metadata_dir):
        """Should use config values for control server setup."""
        from server.orchestrator import Orchestrator
        from unittest.mock import Mock

        # Create config with custom port range
        config_file = metadata_dir / "orchestrator_config.json"
        config = {
            "orchestrator": {
                "control_port_range": [9100, 9110],
                "enable_control_server": True
            }
        }
        with open(config_file, 'w') as f:
            json.dump(config, f)

        # Create mock workspace object
        mock_ws_obj = Mock()
        mock_ws_obj.path = mock_workspace
        mock_ws_obj.paths = Mock()
        mock_ws_obj.paths.metadata = metadata_dir

        with patch('server.orchestrator.WorkspaceFactory.find') as mock_factory:
            mock_factory.return_value = mock_ws_obj

            with patch.object(Orchestrator, '_start_control_server') as mock_start:
                orch = Orchestrator(
                    workspace_root=mock_workspace,
                    initial_env="test_env",
                    args=[]
                )

                # Should have loaded config with custom range
                assert orch.config["orchestrator"]["control_port_range"] == [9100, 9110]

                # Control server should be started (if enabled)
                if orch.config["orchestrator"]["enable_control_server"]:
                    mock_start.assert_called_once()

    def test_orchestrator_respects_disable_control_server(self, mock_workspace, metadata_dir):
        """Should not start control server when disabled in config."""
        from server.orchestrator import Orchestrator
        from unittest.mock import Mock

        # Create config with control server disabled
        config_file = metadata_dir / "orchestrator_config.json"
        config = {
            "orchestrator": {
                "enable_control_server": False
            }
        }
        with open(config_file, 'w') as f:
            json.dump(config, f)

        # Create mock workspace object
        mock_ws_obj = Mock()
        mock_ws_obj.path = mock_workspace
        mock_ws_obj.paths = Mock()
        mock_ws_obj.paths.metadata = metadata_dir

        with patch('server.orchestrator.WorkspaceFactory.find') as mock_factory:
            mock_factory.return_value = mock_ws_obj

            with patch.object(Orchestrator, '_start_control_server') as mock_start:
                orch = Orchestrator(
                    workspace_root=mock_workspace,
                    initial_env="test_env",
                    args=[]
                )

                # Control server should NOT be started
                assert orch.config["orchestrator"]["enable_control_server"] is False
                mock_start.assert_not_called()
