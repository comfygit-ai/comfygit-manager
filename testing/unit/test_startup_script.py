"""Tests for RunPod startup script generator.

Tests the generation of bash scripts that set up ComfyGit environments
on RunPod pods using the cg CLI.
"""
import sys
from pathlib import Path


# Add server directory to path for imports
server_dir = Path(__file__).parent.parent.parent / "server"
if str(server_dir) not in sys.path:
    sys.path.insert(0, str(server_dir))


class TestStartupScriptGenerator:
    """Test startup script generation for RunPod deployments."""

    def test_module_exists(self):
        """Startup script module should exist."""
        from deploy.startup_script import generate_startup_script
        assert callable(generate_startup_script)

    def test_generates_bash_script(self):
        """Should generate a valid bash script string."""
        from deploy.startup_script import generate_startup_script

        script = generate_startup_script(
            deployment_id="deploy-test-20250101-120000-abc1",
            import_source="https://github.com/user/repo.git#envs/my-env",
        )

        assert isinstance(script, str)
        assert script.startswith("#!/bin/bash")
        assert len(script) > 100  # Should have substantial content

    def test_includes_comfygit_home_env_var(self):
        """Should set COMFYGIT_HOME=/workspace/comfygit."""
        from deploy.startup_script import generate_startup_script

        script = generate_startup_script(
            deployment_id="deploy-test-20250101-120000-abc1",
            import_source="https://github.com/user/repo.git",
        )

        assert "COMFYGIT_HOME=/workspace/comfygit" in script
        assert "export COMFYGIT_HOME" in script

    def test_includes_cg_init_command(self):
        """Should include cg init --yes command for workspace initialization."""
        from deploy.startup_script import generate_startup_script

        script = generate_startup_script(
            deployment_id="deploy-test-20250101-120000-abc1",
            import_source="https://github.com/user/repo.git",
        )

        # Should run cg init with --yes to avoid interactive prompts
        assert "cg init" in script
        assert "--yes" in script or "-y" in script

    def test_includes_cg_import_command(self):
        """Should include cg import command with deployment ID name."""
        from deploy.startup_script import generate_startup_script

        deployment_id = "deploy-test-20250101-120000-abc1"
        import_source = "https://github.com/user/repo.git#envs/my-env"

        script = generate_startup_script(
            deployment_id=deployment_id,
            import_source=import_source,
        )

        # Should run cg import with --name, --yes, --use, and --models all flags
        assert "cg import" in script
        assert f"--name {deployment_id}" in script or f'--name "{deployment_id}"' in script
        assert "--yes" in script or "-y" in script
        assert "--models all" in script
        # Import source should be in the script
        assert import_source in script

    def test_includes_cg_run_command(self):
        """Should include cg run command with environment flag."""
        from deploy.startup_script import generate_startup_script

        deployment_id = "deploy-test-20250101-120000-abc1"

        script = generate_startup_script(
            deployment_id=deployment_id,
            import_source="https://github.com/user/repo.git",
        )

        # Should run cg with -e flag to specify environment and run command
        assert f"cg -e {deployment_id} run" in script or f'cg -e "{deployment_id}" run' in script

    def test_includes_listen_address(self):
        """Should configure ComfyUI to listen on 0.0.0.0 for external access."""
        from deploy.startup_script import generate_startup_script

        script = generate_startup_script(
            deployment_id="deploy-test-20250101-120000-abc1",
            import_source="https://github.com/user/repo.git",
        )

        # ComfyUI needs to listen on all interfaces for RunPod proxy access
        assert "--listen 0.0.0.0" in script

    def test_includes_port_8188(self):
        """Should configure ComfyUI to listen on port 8188."""
        from deploy.startup_script import generate_startup_script

        script = generate_startup_script(
            deployment_id="deploy-test-20250101-120000-abc1",
            import_source="https://github.com/user/repo.git",
        )

        # Port 8188 is the standard ComfyUI port
        assert "--port 8188" in script or ":8188" in script

    def test_includes_status_file_updates(self):
        """Should write status updates to status file for progress tracking."""
        from deploy.startup_script import generate_startup_script

        script = generate_startup_script(
            deployment_id="deploy-test-20250101-120000-abc1",
            import_source="https://github.com/user/repo.git",
        )

        # Status file should be at the expected path
        status_file_path = "/workspace/.comfygit_deploy_status.json"
        assert status_file_path in script or "STATUS_FILE" in script

    def test_includes_phase_tracking(self):
        """Should include phase markers for progress tracking."""
        from deploy.startup_script import generate_startup_script

        script = generate_startup_script(
            deployment_id="deploy-test-20250101-120000-abc1",
            import_source="https://github.com/user/repo.git",
        )

        # Should track phases as per deploy spec
        expected_phases = ["INITIALIZING", "WORKSPACE_INIT", "IMPORTING", "STARTING_COMFYUI", "READY"]
        for phase in expected_phases:
            assert phase in script

    def test_includes_error_handling(self):
        """Should include error handling with set -e or equivalent."""
        from deploy.startup_script import generate_startup_script

        script = generate_startup_script(
            deployment_id="deploy-test-20250101-120000-abc1",
            import_source="https://github.com/user/repo.git",
        )

        # Script should fail on errors
        assert "set -e" in script or "set_error" in script

    def test_uses_uv_for_cli_installation(self):
        """Should use uv tool install for comfygit CLI."""
        from deploy.startup_script import generate_startup_script

        script = generate_startup_script(
            deployment_id="deploy-test-20250101-120000-abc1",
            import_source="https://github.com/user/repo.git",
        )

        # Should install comfygit via uv
        assert "uv tool install comfygit" in script

    def test_installs_uv_before_using_it(self):
        """Should install uv before trying to use uv tool install.

        The default RunPod PyTorch template does NOT have uv pre-installed.
        The script must install uv first using the official install script.
        """
        from deploy.startup_script import generate_startup_script

        script = generate_startup_script(
            deployment_id="deploy-test-20250101-120000-abc1",
            import_source="https://github.com/user/repo.git",
        )

        # Must install uv using official astral.sh script
        assert "astral.sh/uv/install.sh" in script

        # uv install MUST come BEFORE uv tool install comfygit
        uv_install_pos = script.find("astral.sh/uv/install.sh")
        uv_tool_pos = script.find("uv tool install comfygit")

        assert uv_install_pos != -1, "uv install script not found"
        assert uv_tool_pos != -1, "uv tool install comfygit not found"
        assert uv_install_pos < uv_tool_pos, "uv must be installed BEFORE using uv tool"

    def test_sources_uv_env_after_install(self):
        """Should source uv's env file after installing uv.

        The uv installer creates ~/.local/bin/env which sets up PATH properly.
        We must source this file after installing uv to ensure uv and uv-installed
        tools are available in PATH.
        """
        from deploy.startup_script import generate_startup_script

        script = generate_startup_script(
            deployment_id="deploy-test-20250101-120000-abc1",
            import_source="https://github.com/user/repo.git",
        )

        # Should source the env file that uv creates
        assert "source" in script and ".local/bin/env" in script

        # Source should come AFTER uv install and BEFORE uv tool install
        uv_install_pos = script.find("astral.sh/uv/install.sh")
        source_env_pos = script.find(".local/bin/env")
        uv_tool_pos = script.find("uv tool install comfygit")

        assert uv_install_pos < source_env_pos < uv_tool_pos, \
            "env file must be sourced after uv install and before uv tool install"

    def test_verifies_cg_available_after_install(self):
        """Should verify cg command is available after uv tool install.

        After installing comfygit via uv, we must verify the cg command
        is actually available before trying to use it. This catches PATH
        issues that would otherwise cause silent failures.
        """
        from deploy.startup_script import generate_startup_script

        script = generate_startup_script(
            deployment_id="deploy-test-20250101-120000-abc1",
            import_source="https://github.com/user/repo.git",
        )

        # Should have an explicit check that cg is available after installation
        # Look for pattern like: command -v cg ... || set_error
        uv_tool_pos = script.find("uv tool install comfygit")
        cg_init_pos = script.find("cg init")

        # Find verification between uv tool install and cg init
        verification_section = script[uv_tool_pos:cg_init_pos]

        # Should verify cg is available (with error on failure)
        assert "command -v cg" in verification_section or "which cg" in verification_section, \
            "Must verify cg is available after uv tool install"
        assert "set_error" in verification_section or "Failed" in verification_section, \
            "Must error if cg is not available"

    def test_handles_tarball_import_source(self):
        """Should handle tarball (.tar.gz) import source."""
        from deploy.startup_script import generate_startup_script

        import_source = "/tmp/deploy-package.tar.gz"
        script = generate_startup_script(
            deployment_id="deploy-test-20250101-120000-abc1",
            import_source=import_source,
        )

        # Should include the tarball path in import command
        assert import_source in script

    def test_handles_git_with_branch(self):
        """Should handle git import with branch specification."""
        from deploy.startup_script import generate_startup_script

        script = generate_startup_script(
            deployment_id="deploy-test-20250101-120000-abc1",
            import_source="https://github.com/user/repo.git",
            branch="v1.0.0",
        )

        # Should include --branch flag for git imports
        assert "-b v1.0.0" in script or "--branch v1.0.0" in script

    def test_custom_comfyui_port(self):
        """Should support custom ComfyUI port."""
        from deploy.startup_script import generate_startup_script

        script = generate_startup_script(
            deployment_id="deploy-test-20250101-120000-abc1",
            import_source="https://github.com/user/repo.git",
            comfyui_port=8189,
        )

        assert "--port 8189" in script

    def test_deployment_id_in_status_json(self):
        """Should include deployment_id in status file updates."""
        from deploy.startup_script import generate_startup_script

        deployment_id = "deploy-test-20250101-120000-abc1"
        script = generate_startup_script(
            deployment_id=deployment_id,
            import_source="https://github.com/user/repo.git",
        )

        # Deployment ID should appear in status JSON updates
        assert deployment_id in script


class TestStartupScriptWithPackage:
    """Test startup script generation with embedded deploy package."""

    def test_supports_embedded_package(self):
        """Should support embedded base64-encoded deploy package."""
        from deploy.startup_script import generate_startup_script

        # A small base64 string for testing
        package_base64 = "SGVsbG8gV29ybGQh"  # "Hello World!" in base64

        script = generate_startup_script(
            deployment_id="deploy-test-20250101-120000-abc1",
            import_source=None,  # Using embedded package instead
            deploy_package_base64=package_base64,
        )

        # Should include the base64 package
        assert package_base64 in script
        # Should extract the package
        assert "base64" in script


class TestStartupScriptRestartDetection:
    """Test restart detection logic in startup script."""

    def test_detects_existing_environment(self):
        """Script should check for existing environment directory."""
        from deploy.startup_script import generate_startup_script

        deployment_id = "deploy-test-20250101-120000-abc1"
        script = generate_startup_script(
            deployment_id=deployment_id,
            import_source="https://github.com/user/repo.git",
        )

        # Should check if environment exists before importing
        assert 'ENV_PATH="$COMFYGIT_HOME/environments/' in script
        assert f'environments/{deployment_id}"' in script
        assert '[ -d "$ENV_PATH" ]' in script

    def test_skips_import_on_restart(self):
        """Script should skip import if environment already exists."""
        from deploy.startup_script import generate_startup_script

        script = generate_startup_script(
            deployment_id="deploy-test-20250101-120000-abc1",
            import_source="https://github.com/user/repo.git",
        )

        # Should have conditional logic to skip import
        assert "Skipping import" in script
        assert "existing environment" in script.lower() or "RESTARTING" in script

    def test_imports_on_fresh_deploy(self):
        """Script should import on fresh deploy (environment doesn't exist)."""
        from deploy.startup_script import generate_startup_script

        script = generate_startup_script(
            deployment_id="deploy-test-20250101-120000-abc1",
            import_source="https://github.com/user/repo.git",
        )

        # Should still have import command for fresh case
        assert "cg import" in script

    def test_restart_uses_cg_use_command(self):
        """Script should set active environment on restart."""
        from deploy.startup_script import generate_startup_script

        deployment_id = "deploy-test-20250101-120000-abc1"
        script = generate_startup_script(
            deployment_id=deployment_id,
            import_source="https://github.com/user/repo.git",
        )

        # Should activate the existing environment on restart
        assert f"cg use {deployment_id}" in script

    def test_checks_comfyui_dir_exists(self):
        """Script should verify ComfyUI directory exists for restart."""
        from deploy.startup_script import generate_startup_script

        script = generate_startup_script(
            deployment_id="deploy-test-20250101-120000-abc1",
            import_source="https://github.com/user/repo.git",
        )

        # Should check both environment dir AND ComfyUI subdir
        assert "$ENV_PATH/ComfyUI" in script

    def test_restarting_phase_in_status(self):
        """Script should report RESTARTING phase on restart."""
        from deploy.startup_script import generate_startup_script

        script = generate_startup_script(
            deployment_id="deploy-test-20250101-120000-abc1",
            import_source="https://github.com/user/repo.git",
        )

        # Should have RESTARTING phase for status tracking
        assert 'update_status "RESTARTING"' in script


class TestGenerateDeploymentId:
    """Test deployment ID generation."""

    def test_module_has_function(self):
        """Should have generate_deployment_id function."""
        from deploy.startup_script import generate_deployment_id
        assert callable(generate_deployment_id)

    def test_generates_valid_id(self):
        """Should generate a valid deployment ID."""
        from deploy.startup_script import generate_deployment_id

        deployment_id = generate_deployment_id(env_name="myenv")

        assert deployment_id.startswith("deploy-myenv-")
        # Should contain timestamp-like pattern (YYYYMMDD-HHMMSS)
        parts = deployment_id.split("-")
        assert len(parts) >= 5  # deploy, envname, date, time, random

    def test_sanitizes_env_name(self):
        """Should sanitize environment name for use in ID."""
        from deploy.startup_script import generate_deployment_id

        # Test with special characters
        deployment_id = generate_deployment_id(env_name="my env/with:special")

        # Should not contain problematic characters
        assert "/" not in deployment_id
        assert ":" not in deployment_id
        assert " " not in deployment_id

    def test_includes_random_suffix(self):
        """Should include random suffix for uniqueness."""
        from deploy.startup_script import generate_deployment_id

        id1 = generate_deployment_id(env_name="test")
        id2 = generate_deployment_id(env_name="test")

        # Generated at same second might be same, but let's check the format
        # at least has a suffix part
        assert len(id1.split("-")) >= 5
        assert len(id2.split("-")) >= 5
