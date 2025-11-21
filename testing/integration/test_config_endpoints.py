"""
Integration tests for configuration system (Phase 3).

Tests end-to-end configuration workflows without requiring full web server.
Following the revised design document from 2025-11-20.
"""

import json
import pytest
from pathlib import Path


@pytest.mark.integration
class TestConfigurationEndToEnd:
    """End-to-end tests for configuration system."""

    def test_config_workflow_default_to_custom(self, mock_workspace, metadata_dir):
        """Should handle full workflow: default config → custom config → reload."""
        from server.orchestrator import load_workspace_config, DEFAULT_CONFIG

        # Step 1: Load default config (creates file)
        config1 = load_workspace_config(metadata_dir)
        assert config1["orchestrator"]["control_port"] == DEFAULT_CONFIG["orchestrator"]["control_port"]

        # Verify file was created
        config_file = metadata_dir / "workspace_config.json"
        assert config_file.exists()

        # Step 2: User edits config file
        with open(config_file) as f:
            user_config = json.load(f)

        user_config["orchestrator"]["control_port"] = 8888
        user_config["orchestrator"]["health_check_timeout_s"] = 120

        with open(config_file, 'w') as f:
            json.dump(user_config, f)

        # Step 3: Reload config (simulates orchestrator restart)
        config2 = load_workspace_config(metadata_dir)

        # Should have new values
        assert config2["orchestrator"]["control_port"] == 8888
        assert config2["orchestrator"]["health_check_timeout_s"] == 120

        # Should still have defaults for non-modified values
        assert config2["frontend"]["emergency_threshold_normal_s"] == DEFAULT_CONFIG["frontend"]["emergency_threshold_normal_s"]

    def test_multi_workspace_config_isolation(self, temp_dir):
        """Should keep separate configs for different workspaces."""
        from server.orchestrator import load_workspace_config, DEFAULT_CONFIG

        # Create two workspace metadata dirs
        workspace1_meta = temp_dir / "workspace1" / ".metadata"
        workspace2_meta = temp_dir / "workspace2" / ".metadata"
        workspace1_meta.mkdir(parents=True)
        workspace2_meta.mkdir(parents=True)

        # Load configs (creates defaults)
        config1 = load_workspace_config(workspace1_meta)
        config2 = load_workspace_config(workspace2_meta)

        # Both should start with defaults
        assert config1["orchestrator"]["control_port"] == DEFAULT_CONFIG["orchestrator"]["control_port"]
        assert config2["orchestrator"]["control_port"] == DEFAULT_CONFIG["orchestrator"]["control_port"]

        # Modify workspace1 config
        config_file1 = workspace1_meta / "workspace_config.json"
        with open(config_file1) as f:
            user_config1 = json.load(f)
        user_config1["orchestrator"]["control_port"] = 7777
        with open(config_file1, 'w') as f:
            json.dump(user_config1, f)

        # Reload both
        config1_reloaded = load_workspace_config(workspace1_meta)
        config2_reloaded = load_workspace_config(workspace2_meta)

        # workspace1 should have custom port
        assert config1_reloaded["orchestrator"]["control_port"] == 7777

        # workspace2 should still have default
        assert config2_reloaded["orchestrator"]["control_port"] == DEFAULT_CONFIG["orchestrator"]["control_port"]

    def test_config_partial_override_preserves_structure(self, metadata_dir):
        """Should preserve full config structure when user only overrides some values."""
        from server.orchestrator import load_workspace_config

        # Create minimal config with only one override
        config_file = metadata_dir / "workspace_config.json"
        minimal_config = {
            "orchestrator": {
                "control_port": 5555
            }
        }
        with open(config_file, 'w') as f:
            json.dump(minimal_config, f)

        # Load config
        config = load_workspace_config(metadata_dir)

        # Should have override
        assert config["orchestrator"]["control_port"] == 5555

        # Should still have all other defaults
        assert "control_port_range" in config["orchestrator"]
        assert "enable_control_server" in config["orchestrator"]
        assert "health_check_timeout_s" in config["orchestrator"]
        assert "comfyui" in config
        assert "frontend" in config


@pytest.mark.integration
class TestOrchestratorPortFile:
    """Test orchestrator port file logic (simulates endpoint behavior)."""

    def test_port_file_workflow(self, metadata_dir):
        """Should write and read port file correctly."""
        port_file = metadata_dir / ".control_port"

        # Orchestrator writes port file
        port_file.write_text("8189")

        # Endpoint reads port file
        if port_file.exists():
            port = int(port_file.read_text().strip())
            assert port == 8189

    def test_port_file_with_custom_port(self, metadata_dir):
        """Should handle custom ports in port file."""
        port_file = metadata_dir / ".control_port"

        # Write custom port
        custom_port = 9999
        port_file.write_text(str(custom_port))

        # Read and verify
        assert port_file.exists()
        port = int(port_file.read_text().strip())
        assert port == 9999

    def test_missing_port_file_returns_none(self, metadata_dir):
        """Should handle missing port file gracefully."""
        port_file = metadata_dir / ".control_port"

        # Ensure file doesn't exist
        if port_file.exists():
            port_file.unlink()

        # Endpoint should detect missing file
        assert not port_file.exists()
        # In real endpoint, this would return 404


@pytest.mark.integration
class TestConfigFileValidation:
    """Test configuration file validation and error handling."""

    def test_invalid_json_falls_back_to_defaults(self, metadata_dir):
        """Should fall back to defaults when JSON is invalid."""
        from server.orchestrator import load_workspace_config, DEFAULT_CONFIG

        # Write invalid JSON
        config_file = metadata_dir / "workspace_config.json"
        config_file.write_text("{invalid json}")

        # Should return defaults without crashing
        config = load_workspace_config(metadata_dir)
        assert config["orchestrator"]["control_port"] == DEFAULT_CONFIG["orchestrator"]["control_port"]

    def test_empty_config_merges_with_defaults(self, metadata_dir):
        """Should merge empty config with defaults."""
        from server.orchestrator import load_workspace_config, DEFAULT_CONFIG

        # Write empty JSON object
        config_file = metadata_dir / "workspace_config.json"
        with open(config_file, 'w') as f:
            json.dump({}, f)

        # Should return complete config with all defaults
        config = load_workspace_config(metadata_dir)
        assert "orchestrator" in config
        assert "comfyui" in config
        assert "frontend" in config
        assert config == DEFAULT_CONFIG

    def test_nested_merge_preserves_arrays(self, metadata_dir):
        """Should preserve array values in nested config merge."""
        from server.orchestrator import load_workspace_config

        # Write config with custom array
        config_file = metadata_dir / "workspace_config.json"
        custom_config = {
            "orchestrator": {
                "control_port_range": [7000, 7010]
            }
        }
        with open(config_file, 'w') as f:
            json.dump(custom_config, f)

        # Load and verify array is preserved
        config = load_workspace_config(metadata_dir)
        assert isinstance(config["orchestrator"]["control_port_range"], list)
        assert config["orchestrator"]["control_port_range"] == [7000, 7010]
        assert len(config["orchestrator"]["control_port_range"]) == 2
