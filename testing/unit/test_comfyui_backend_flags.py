"""Unit tests for ComfyUI backend flag detection and extra_args configuration.

Tests the orchestrator's ability to:
1. Detect installed PyTorch backend and add appropriate ComfyUI flags
2. Read extra_args from workspace config and include in startup command
"""

from pathlib import Path
import pytest
from unittest.mock import Mock


@pytest.mark.unit
class TestGetComfyuiBackendFlags:
    """Test _get_comfyui_backend_flags() method."""

    def test_cpu_backend_returns_cpu_flag(self, mock_workspace, mocker):
        """Should return ['--cpu'] when PyTorch is CPU-only."""
        from server.orchestrator import Orchestrator

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        # Mock environment with CPU PyTorch
        mock_env = Mock()
        mock_env.uv_manager.python_executable = Path("/python")
        mock_env.uv_manager.show_package.return_value = "Name: torch\nVersion: 2.9.0\n"

        flags = orch._get_comfyui_backend_flags(mock_env)

        assert flags == ["--cpu"]

    def test_cuda_backend_returns_no_flags(self, mock_workspace, mocker):
        """Should return [] when PyTorch has CUDA backend."""
        from server.orchestrator import Orchestrator

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        mock_env = Mock()
        mock_env.uv_manager.python_executable = Path("/python")
        mock_env.uv_manager.show_package.return_value = "Name: torch\nVersion: 2.9.0+cu128\n"

        flags = orch._get_comfyui_backend_flags(mock_env)

        assert flags == []

    def test_rocm_backend_returns_no_flags(self, mock_workspace, mocker):
        """Should return [] when PyTorch has ROCm backend."""
        from server.orchestrator import Orchestrator

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        mock_env = Mock()
        mock_env.uv_manager.python_executable = Path("/python")
        mock_env.uv_manager.show_package.return_value = "Name: torch\nVersion: 2.9.0+rocm6.3\n"

        flags = orch._get_comfyui_backend_flags(mock_env)

        assert flags == []

    def test_torch_not_installed_returns_cpu_flag(self, mock_workspace, mocker):
        """Should return ['--cpu'] when torch is not installed (safe fallback)."""
        from server.orchestrator import Orchestrator

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        mock_env = Mock()
        mock_env.uv_manager.python_executable = Path("/python")
        mock_env.uv_manager.show_package.side_effect = Exception("Package not found")

        flags = orch._get_comfyui_backend_flags(mock_env)

        assert flags == ["--cpu"]


@pytest.mark.unit
class TestStartComfyuiWithBackendFlags:
    """Test that _start_comfyui includes backend flags in command."""

    def test_cpu_backend_adds_cpu_flag_to_command(self, mock_workspace, mocker):
        """Should add --cpu to command when PyTorch is CPU-only."""
        from server.orchestrator import Orchestrator

        mock_popen = mocker.patch("subprocess.Popen")

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=["--port", "8188"]
        )

        mock_env = Mock()
        mock_env.uv_manager.python_executable = Path("/python")
        mock_env.uv_manager.show_package.return_value = "Name: torch\nVersion: 2.9.0\n"
        mock_env.comfyui_path = Path("/ComfyUI")

        orch._start_comfyui(mock_env)

        call_args = mock_popen.call_args[0][0]
        assert "--cpu" in call_args
        # Backend flags should come before user args
        cpu_idx = call_args.index("--cpu")
        port_idx = call_args.index("--port")
        assert cpu_idx < port_idx

    def test_cuda_backend_no_extra_flags(self, mock_workspace, mocker):
        """Should not add --cpu when PyTorch has CUDA backend."""
        from server.orchestrator import Orchestrator

        mock_popen = mocker.patch("subprocess.Popen")

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=["--port", "8188"]
        )

        mock_env = Mock()
        mock_env.uv_manager.python_executable = Path("/python")
        mock_env.uv_manager.show_package.return_value = "Name: torch\nVersion: 2.9.0+cu128\n"
        mock_env.comfyui_path = Path("/ComfyUI")

        orch._start_comfyui(mock_env)

        call_args = mock_popen.call_args[0][0]
        assert "--cpu" not in call_args


@pytest.mark.unit
class TestExtraArgsFromConfig:
    """Test reading extra_args from workspace config."""

    def test_extra_args_included_in_command(self, mock_workspace, mocker):
        """Should include extra_args from config in startup command."""
        from server.orchestrator import Orchestrator
        import json

        # Write workspace config with extra_args
        config_file = mock_workspace / ".metadata" / "orchestrator_config.json"
        config_file.write_text(json.dumps({
            "version": "1.0",
            "orchestrator": {
                "control_port": 8189,
                "control_port_range": [8189, 8199],
                "enable_control_server": True
            },
            "comfyui": {
                "default_port": 8188,
                "extra_args": ["--lowvram", "--listen", "0.0.0.0"]
            }
        }))

        mock_popen = mocker.patch("subprocess.Popen")

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=["--port", "8188"]
        )

        mock_env = Mock()
        mock_env.uv_manager.python_executable = Path("/python")
        mock_env.uv_manager.show_package.return_value = "Name: torch\nVersion: 2.9.0+cu128\n"
        mock_env.comfyui_path = Path("/ComfyUI")

        orch._start_comfyui(mock_env)

        call_args = mock_popen.call_args[0][0]
        assert "--lowvram" in call_args
        assert "--listen" in call_args
        assert "0.0.0.0" in call_args

    def test_extra_args_come_after_backend_flags(self, mock_workspace, mocker):
        """Extra args should come after backend flags but before original args."""
        from server.orchestrator import Orchestrator
        import json

        config_file = mock_workspace / ".metadata" / "orchestrator_config.json"
        config_file.write_text(json.dumps({
            "version": "1.0",
            "orchestrator": {"enable_control_server": True},
            "comfyui": {"extra_args": ["--lowvram"]}
        }))

        mock_popen = mocker.patch("subprocess.Popen")

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=["--port", "9999"]
        )

        mock_env = Mock()
        mock_env.uv_manager.python_executable = Path("/python")
        mock_env.uv_manager.show_package.return_value = "Name: torch\nVersion: 2.9.0\n"  # CPU
        mock_env.comfyui_path = Path("/ComfyUI")

        orch._start_comfyui(mock_env)

        call_args = mock_popen.call_args[0][0]
        # Order should be: python, main.py, --cpu, --lowvram, --port, 9999
        cpu_idx = call_args.index("--cpu")
        lowvram_idx = call_args.index("--lowvram")
        port_idx = call_args.index("--port")

        assert cpu_idx < lowvram_idx < port_idx

    def test_empty_extra_args_works(self, mock_workspace, mocker):
        """Should work when extra_args is empty list."""
        from server.orchestrator import Orchestrator
        import json

        config_file = mock_workspace / ".metadata" / "orchestrator_config.json"
        config_file.write_text(json.dumps({
            "version": "1.0",
            "orchestrator": {"enable_control_server": True},
            "comfyui": {"extra_args": []}
        }))

        mock_popen = mocker.patch("subprocess.Popen")

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=["--port", "8188"]
        )

        mock_env = Mock()
        mock_env.uv_manager.python_executable = Path("/python")
        mock_env.uv_manager.show_package.return_value = "Name: torch\nVersion: 2.9.0+cu128\n"
        mock_env.comfyui_path = Path("/ComfyUI")

        orch._start_comfyui(mock_env)

        call_args = mock_popen.call_args[0][0]
        assert "--port" in call_args

    def test_missing_extra_args_works(self, mock_workspace, mocker):
        """Should work when extra_args key is not in config."""
        from server.orchestrator import Orchestrator
        import json

        config_file = mock_workspace / ".metadata" / "orchestrator_config.json"
        config_file.write_text(json.dumps({
            "version": "1.0",
            "orchestrator": {"enable_control_server": True},
            "comfyui": {"default_port": 8188}  # No extra_args
        }))

        mock_popen = mocker.patch("subprocess.Popen")

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=["--port", "8188"]
        )

        mock_env = Mock()
        mock_env.uv_manager.python_executable = Path("/python")
        mock_env.uv_manager.show_package.return_value = "Name: torch\nVersion: 2.9.0+cu128\n"
        mock_env.comfyui_path = Path("/ComfyUI")

        orch._start_comfyui(mock_env)

        call_args = mock_popen.call_args[0][0]
        assert "--port" in call_args


@pytest.mark.unit
class TestDefaultConfigWithExtraArgs:
    """Test that DEFAULT_CONFIG includes extra_args field."""

    def test_default_config_has_extra_args(self):
        """DEFAULT_CONFIG should include empty extra_args in comfyui section."""
        from server.orchestrator import DEFAULT_CONFIG

        assert "comfyui" in DEFAULT_CONFIG
        assert "extra_args" in DEFAULT_CONFIG["comfyui"]
        assert DEFAULT_CONFIG["comfyui"]["extra_args"] == []


# ============================================================================
# Config Reload on Restart Tests
# ============================================================================


@pytest.mark.unit
class TestConfigReloadOnRestart:
    """Test that config is reloaded before starting ComfyUI.

    Bug: Config is only loaded once in __init__ and never reloaded.
    When user changes extra_args via API and restarts, changes don't take effect.
    """

    def test_start_comfyui_reloads_config_from_disk(self, mock_workspace, mocker):
        """Should reload config before starting ComfyUI to pick up API changes."""
        from server.orchestrator import Orchestrator
        import json

        # Write initial config with no extra_args
        config_file = mock_workspace / ".metadata" / "orchestrator_config.json"
        config_file.write_text(json.dumps({
            "version": "1.0",
            "orchestrator": {"enable_control_server": True},
            "comfyui": {"extra_args": []}
        }))

        mock_popen = mocker.patch("subprocess.Popen")

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        # Now simulate API saving new config to disk (after orchestrator init)
        config_file.write_text(json.dumps({
            "version": "1.0",
            "orchestrator": {"enable_control_server": True},
            "comfyui": {"extra_args": ["--lowvram"]}
        }))

        mock_env = Mock()
        mock_env.uv_manager.python_executable = Path("/python")
        mock_env.uv_manager.show_package.return_value = "Name: torch\nVersion: 2.9.0+cu128\n"
        mock_env.comfyui_path = Path("/ComfyUI")

        # Call _start_comfyui - should reload config and pick up --lowvram
        orch._start_comfyui(mock_env)

        call_args = mock_popen.call_args[0][0]

        # After fix: --lowvram SHOULD be in the command
        assert "--lowvram" in call_args, \
            "Config should be reloaded before starting ComfyUI - extra_args changes should take effect"


# ============================================================================
# Crash Recovery with Extra Args Bypass Tests
# ============================================================================


@pytest.mark.unit
class TestCrashRecoveryFlags:
    """Test crash recovery flag initialization."""

    def test_orchestrator_has_skip_extra_args_flag(self, mock_workspace, mocker):
        """Should have _skip_extra_args instance variable initialized to False."""
        from server.orchestrator import Orchestrator

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        assert hasattr(orch, '_skip_extra_args'), \
            "Orchestrator should have _skip_extra_args flag"
        assert orch._skip_extra_args is False

    def test_orchestrator_has_used_extra_args_flag(self, mock_workspace, mocker):
        """Should have _used_extra_args instance variable initialized to False."""
        from server.orchestrator import Orchestrator

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        assert hasattr(orch, '_used_extra_args'), \
            "Orchestrator should have _used_extra_args flag"
        assert orch._used_extra_args is False


@pytest.mark.unit
class TestCrashRecoveryExtraArgsTracking:
    """Test that _start_comfyui tracks extra_args usage."""

    def test_start_comfyui_sets_used_extra_args_true_when_args_present(self, mock_workspace, mocker):
        """Should set _used_extra_args=True when extra_args are included."""
        from server.orchestrator import Orchestrator
        import json

        config_file = mock_workspace / ".metadata" / "orchestrator_config.json"
        config_file.write_text(json.dumps({
            "version": "1.0",
            "orchestrator": {"enable_control_server": True},
            "comfyui": {"extra_args": ["--lowvram"]}
        }))

        mocker.patch("subprocess.Popen")

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        mock_env = Mock()
        mock_env.uv_manager.python_executable = Path("/python")
        mock_env.uv_manager.show_package.return_value = "Name: torch\nVersion: 2.9.0+cu128\n"
        mock_env.comfyui_path = Path("/ComfyUI")

        orch._start_comfyui(mock_env)

        assert orch._used_extra_args is True, \
            "_used_extra_args should be True when extra_args were included"

    def test_start_comfyui_sets_used_extra_args_false_when_no_args(self, mock_workspace, mocker):
        """Should set _used_extra_args=False when no extra_args."""
        from server.orchestrator import Orchestrator
        import json

        config_file = mock_workspace / ".metadata" / "orchestrator_config.json"
        config_file.write_text(json.dumps({
            "version": "1.0",
            "orchestrator": {"enable_control_server": True},
            "comfyui": {"extra_args": []}
        }))

        mocker.patch("subprocess.Popen")

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        mock_env = Mock()
        mock_env.uv_manager.python_executable = Path("/python")
        mock_env.uv_manager.show_package.return_value = "Name: torch\nVersion: 2.9.0+cu128\n"
        mock_env.comfyui_path = Path("/ComfyUI")

        orch._start_comfyui(mock_env)

        assert orch._used_extra_args is False, \
            "_used_extra_args should be False when no extra_args"


@pytest.mark.unit
class TestCrashRecoverySkipExtraArgs:
    """Test that _start_comfyui skips extra_args when bypass flag is set."""

    def test_start_comfyui_skips_extra_args_when_flag_set(self, mock_workspace, mocker):
        """Should NOT include extra_args when _skip_extra_args is True."""
        from server.orchestrator import Orchestrator
        import json

        config_file = mock_workspace / ".metadata" / "orchestrator_config.json"
        config_file.write_text(json.dumps({
            "version": "1.0",
            "orchestrator": {"enable_control_server": True},
            "comfyui": {"extra_args": ["--bad-flag"]}
        }))

        mock_popen = mocker.patch("subprocess.Popen")

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=["--port", "8188"]
        )

        # Set bypass flag (simulating crash recovery)
        orch._skip_extra_args = True

        mock_env = Mock()
        mock_env.uv_manager.python_executable = Path("/python")
        mock_env.uv_manager.show_package.return_value = "Name: torch\nVersion: 2.9.0+cu128\n"
        mock_env.comfyui_path = Path("/ComfyUI")

        orch._start_comfyui(mock_env)

        call_args = mock_popen.call_args[0][0]

        # --bad-flag should NOT be in the command
        assert "--bad-flag" not in call_args, \
            "extra_args should be skipped when _skip_extra_args is True"
        # But original args should still be there
        assert "--port" in call_args
        assert "8188" in call_args

    def test_start_comfyui_includes_extra_args_when_flag_not_set(self, mock_workspace, mocker):
        """Should include extra_args when _skip_extra_args is False (normal operation)."""
        from server.orchestrator import Orchestrator
        import json

        config_file = mock_workspace / ".metadata" / "orchestrator_config.json"
        config_file.write_text(json.dumps({
            "version": "1.0",
            "orchestrator": {"enable_control_server": True},
            "comfyui": {"extra_args": ["--lowvram"]}
        }))

        mock_popen = mocker.patch("subprocess.Popen")

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        # Ensure flag is False (normal operation)
        orch._skip_extra_args = False

        mock_env = Mock()
        mock_env.uv_manager.python_executable = Path("/python")
        mock_env.uv_manager.show_package.return_value = "Name: torch\nVersion: 2.9.0+cu128\n"
        mock_env.comfyui_path = Path("/ComfyUI")

        orch._start_comfyui(mock_env)

        call_args = mock_popen.call_args[0][0]

        assert "--lowvram" in call_args, \
            "extra_args should be included when _skip_extra_args is False"


@pytest.mark.unit
class TestCrashRecoveryInRunForever:
    """Test crash recovery logic in run_forever loop."""

    def test_crash_with_extra_args_triggers_retry(self, mock_workspace, mocker):
        """When crash happens with extra_args used, should set skip flag and retry."""
        from server.orchestrator import Orchestrator
        import json

        config_file = mock_workspace / ".metadata" / "orchestrator_config.json"
        config_file.write_text(json.dumps({
            "version": "1.0",
            "orchestrator": {"enable_control_server": False},
            "comfyui": {"extra_args": ["--bad-flag"]}
        }))

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        # Simulate state after first start with extra_args
        orch._used_extra_args = True
        orch._skip_extra_args = False

        # The crash handler should:
        # 1. See exit code != 0/42/43
        # 2. Check _used_extra_args is True
        # 3. Check _skip_extra_args is False
        # 4. Set _skip_extra_args = True
        # 5. Continue (retry the loop)

        # Call the crash recovery method directly
        should_retry = orch._handle_crash_for_recovery(exit_code=1)

        assert should_retry is True, "Should retry when crash happens with extra_args"
        assert orch._skip_extra_args is True, "Should set _skip_extra_args for retry"

    def test_crash_without_extra_args_exits(self, mock_workspace, mocker):
        """When crash happens without extra_args, should not retry."""
        from server.orchestrator import Orchestrator
        import json

        config_file = mock_workspace / ".metadata" / "orchestrator_config.json"
        config_file.write_text(json.dumps({
            "version": "1.0",
            "orchestrator": {"enable_control_server": False},
            "comfyui": {"extra_args": []}
        }))

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        # Simulate state after start without extra_args
        orch._used_extra_args = False
        orch._skip_extra_args = False

        should_retry = orch._handle_crash_for_recovery(exit_code=1)

        assert should_retry is False, "Should not retry when no extra_args were used"

    def test_second_crash_after_skip_exits(self, mock_workspace, mocker):
        """When crash happens after skip already set, should not retry again."""
        from server.orchestrator import Orchestrator
        import json

        config_file = mock_workspace / ".metadata" / "orchestrator_config.json"
        config_file.write_text(json.dumps({
            "version": "1.0",
            "orchestrator": {"enable_control_server": False},
            "comfyui": {"extra_args": ["--bad-flag"]}
        }))

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        # Simulate state after retry without extra_args (skip flag already set)
        orch._used_extra_args = False  # No args used because skip was True
        orch._skip_extra_args = True   # Already bypassed

        should_retry = orch._handle_crash_for_recovery(exit_code=1)

        assert should_retry is False, "Should not retry again after already skipping"

    def test_successful_start_clears_recovery_flags(self, mock_workspace, mocker):
        """After successful start, crash recovery flags should be cleared."""
        from server.orchestrator import Orchestrator
        import json

        config_file = mock_workspace / ".metadata" / "orchestrator_config.json"
        config_file.write_text(json.dumps({
            "version": "1.0",
            "orchestrator": {"enable_control_server": False},
            "comfyui": {"extra_args": []}
        }))

        orch = Orchestrator(
            workspace_root=mock_workspace,
            initial_env="env1",
            args=[]
        )

        # Simulate recovery state
        orch._skip_extra_args = True
        orch._used_extra_args = True

        # Clear flags (as should happen after successful health check)
        orch._clear_crash_recovery_flags()

        assert orch._skip_extra_args is False
        assert orch._used_extra_args is False
