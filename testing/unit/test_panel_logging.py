"""Unit tests for panel logging context manager."""

import asyncio
import logging
import pytest
import sys
from pathlib import Path
from unittest.mock import Mock, patch, MagicMock
from contextlib import asynccontextmanager


@pytest.mark.unit
class TestLogPanelRequest:
    """Tests for log_panel_request async context manager."""

    async def test_context_manager_enter_exit_cycle(self, tmp_path):
        """Should properly enter and exit logging context without AttributeError.

        This test verifies that the async context manager correctly manages
        the lifecycle of the underlying sync context manager, specifically
        that it can call both __enter__ and __exit__ on the context manager
        object (not on the yielded logger value).

        The bug was: calling __enter__() returns the yielded logger, then
        trying to call __exit__() on the logger (which doesn't have __exit__)
        instead of on the context manager itself.
        """
        # Add server path to import panel logging
        server_path = Path(__file__).parent.parent.parent / "server"
        if str(server_path) not in sys.path:
            sys.path.insert(0, str(server_path))

        # Import logging infrastructure directly
        from panel_environment_logger import EnvironmentLogger

        # Define the BUGGY implementation inline to test it fails
        @asynccontextmanager
        async def log_panel_request_buggy(env_name: str, endpoint: str, **context):
            """Buggy version that should fail."""
            if not EnvironmentLogger:
                yield None
                return

            loop = asyncio.get_event_loop()

            def enter_logging():
                return EnvironmentLogger.log_command(
                    env_name,
                    f"panel: {endpoint}",
                    **context
                ).__enter__()

            def exit_logging(cm, exc_type, exc_val, exc_tb):
                return cm.__exit__(exc_type, exc_val, exc_tb)

            # Enter context - BUG: cm is the yielded logger, not the context manager!
            cm = await loop.run_in_executor(None, enter_logging)

            try:
                yield cm
            finally:
                # Exit context - BUG: trying to call __exit__ on logger object
                await loop.run_in_executor(None, exit_logging, cm, None, None, None)

        # Setup workspace path for logging
        workspace = tmp_path / "workspace"
        workspace.mkdir()
        EnvironmentLogger.set_workspace_path(workspace)

        # Test the BUGGY version - should raise AttributeError
        with pytest.raises(AttributeError, match="'Logger' object has no attribute '__exit__'"):
            async with log_panel_request_buggy("test-env", "POST /test", param1="value1"):
                pass


    async def test_correct_implementation_works(self, tmp_path):
        """Test that a CORRECT implementation works without AttributeError.

        This defines the correct way to handle the context manager and
        serves as the specification for the fix.
        """
        server_path = Path(__file__).parent.parent.parent / "server"
        if str(server_path) not in sys.path:
            sys.path.insert(0, str(server_path))

        from panel_environment_logger import EnvironmentLogger

        # Define the CORRECT implementation
        @asynccontextmanager
        async def log_panel_request_correct(env_name: str, endpoint: str, **context):
            """Correct version that properly manages the context manager."""
            if not EnvironmentLogger:
                yield None
                return

            loop = asyncio.get_event_loop()

            # Create the context manager
            def create_context_manager():
                return EnvironmentLogger.log_command(
                    env_name,
                    f"panel: {endpoint}",
                    **context
                )

            # Get the context manager object
            context_manager = await loop.run_in_executor(None, create_context_manager)

            # Enter the context
            def enter_context(cm):
                return cm.__enter__()

            yielded_value = await loop.run_in_executor(None, enter_context, context_manager)

            try:
                yield yielded_value
            finally:
                # Exit using the CONTEXT MANAGER (not the yielded value)
                def exit_context(cm, exc_type, exc_val, exc_tb):
                    return cm.__exit__(exc_type, exc_val, exc_tb)

                await loop.run_in_executor(None, exit_context, context_manager, None, None, None)

        # Setup workspace
        workspace = tmp_path / "workspace"
        workspace.mkdir()
        EnvironmentLogger.set_workspace_path(workspace)

        # This should NOT raise AttributeError
        async with log_panel_request_correct("test-env", "POST /commit", message="test"):
            pass

        # Verify logs were created
        log_file = workspace / "logs" / "test-env" / "full.log"
        assert log_file.exists()

        log_content = log_file.read_text()
        assert "Command: panel: POST /commit" in log_content
        assert "message: test" in log_content


    async def test_actual_implementation_from_panel_module(self, tmp_path):
        """Test the actual log_panel_request from comfygit_panel.py.

        This test verifies that our fix works with the actual module,
        not just our test implementation.
        """
        server_path = Path(__file__).parent.parent.parent / "server"
        if str(server_path) not in sys.path:
            sys.path.insert(0, str(server_path))

        # Mock the aiohttp imports that comfygit_panel needs
        from unittest.mock import MagicMock
        sys.modules['aiohttp'] = MagicMock()
        sys.modules['server'] = MagicMock()

        try:
            # Now import the actual module
            import comfygit_panel
            from panel_environment_logger import EnvironmentLogger

            # Setup workspace
            workspace = tmp_path / "workspace"
            workspace.mkdir()
            EnvironmentLogger.set_workspace_path(workspace)

            # Test the actual implementation
            async with comfygit_panel.log_panel_request("test-env", "POST /commit", message="actual test"):
                pass

            # Verify logs were created
            log_file = workspace / "logs" / "test-env" / "full.log"
            assert log_file.exists()

            log_content = log_file.read_text()
            assert "Command: panel: POST /commit" in log_content
            assert "message: actual test" in log_content

        finally:
            # Clean up mocks
            if 'comfygit_panel' in sys.modules:
                del sys.modules['comfygit_panel']
            if 'aiohttp' in sys.modules:
                del sys.modules['aiohttp']
            if 'server' in sys.modules:
                del sys.modules['server']
