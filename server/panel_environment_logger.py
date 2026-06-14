"""Environment-specific logging for ComfyGit Panel."""

import logging
import logging.handlers
from contextlib import contextmanager
from datetime import datetime
from pathlib import Path
from typing import Any


COMMAND_RESULT_ATTR = "_comfygit_command_result"
SUCCESS_STATUSES = {"success", "ok"}
ERROR_STATUSES = {"error", "failed", "failure"}


class ComfyGitLogFilter(logging.Filter):
    """Filter to only capture logs from comfygit_* loggers.

    This prevents noisy third-party libraries (watchdog, aiohttp, etc.)
    from flooding the environment log files.
    """

    # Logger name prefixes we want to capture
    ALLOWED_PREFIXES = (
        "comfygit_",      # comfygit_core, comfygit_panel, etc.
        "comfygit-",      # Alternative naming
        "cgm_",           # cgm_core, cgm_utils
        "uv",             # UV package manager (we want these errors)
    )

    def filter(self, record: logging.LogRecord) -> bool:
        """Return True if log should be captured."""
        name = record.name

        # Always capture root logger messages (our explicit logs)
        if name == "root":
            return True

        # Check if logger name starts with allowed prefix
        return any(name.startswith(prefix) for prefix in self.ALLOWED_PREFIXES)


class EnvironmentLogger:
    """Manages environment-specific logging with rotation.

    This integrates with the existing logging system by adding/removing
    handlers to the root logger, so all logging calls will automatically
    log to the environment file.
    """

    # Shared configuration
    MAX_BYTES = 10 * 1024 * 1024  # 10 MB per log file
    BACKUP_COUNT = 5  # Keep 5 old log files
    DETAILED_FORMAT = "%(asctime)s - %(name)s - %(levelname)s - %(funcName)s:%(lineno)d - %(message)s"

    _workspace_path: Path | None = None
    _active_handler: logging.handlers.RotatingFileHandler | None = None
    _current_env: str | None = None
    _original_root_level: int | None = None

    @staticmethod
    def record_command_result(logger: logging.Logger | None, result: dict[str, Any] | None) -> None:
        """Attach a structured task result to the active command logger."""
        if logger is not None:
            setattr(logger, COMMAND_RESULT_ATTR, result)

    @staticmethod
    def _result_message(result: dict[str, Any]) -> str:
        messages = result.get("messages")
        if isinstance(messages, list) and messages:
            return "; ".join(str(message) for message in messages)

        message = result.get("message")
        if message:
            return str(message)

        error = result.get("error")
        if error:
            return str(error)

        return "No message provided"

    @classmethod
    def set_workspace_path(cls, workspace_path: Path) -> None:
        """Set the workspace path for all environment loggers.

        Args:
            workspace_path: Path to ComfyGit workspace
        """
        cls._workspace_path = workspace_path

        # Create logs directory if workspace exists
        if workspace_path and workspace_path.exists():
            logs_dir = workspace_path / "logs"
            logs_dir.mkdir(exist_ok=True)

    @classmethod
    def _add_env_handler(cls, env_name: str) -> logging.Handler | None:
        """Add a file handler for the environment to the root logger.

        Args:
            env_name: Environment name

        Returns:
            The handler that was added, or None if workspace not set
        """
        if not cls._workspace_path or not cls._workspace_path.exists():
            return None

        # Remove any existing environment handler
        cls._remove_env_handler()

        # Use directory structure for consistency with CLI
        log_dir = cls._workspace_path / "logs" / env_name
        log_dir.mkdir(parents=True, exist_ok=True)
        log_file = log_dir / "full.log"

        handler = logging.handlers.RotatingFileHandler(
            log_file,
            maxBytes=cls.MAX_BYTES,
            backupCount=cls.BACKUP_COUNT,
            encoding='utf-8'
        )

        handler.setLevel(logging.DEBUG)

        # Set formatter
        formatter = logging.Formatter(cls.DETAILED_FORMAT)
        handler.setFormatter(formatter)

        # Add filter to only capture comfygit_* logs (exclude watchdog, aiohttp, etc.)
        handler.addFilter(ComfyGitLogFilter())

        # Add a name to identify this handler
        handler.set_name(f"env_handler_{env_name}")

        # Add handler to root logger and ensure it's configured
        root_logger = logging.getLogger()

        # Ensure root logger level allows DEBUG messages through
        if root_logger.level > logging.DEBUG:
            # Store original level to restore later
            cls._original_root_level = root_logger.level
            root_logger.setLevel(logging.DEBUG)
        else:
            cls._original_root_level = None

        root_logger.addHandler(handler)

        # Store reference
        cls._active_handler = handler
        cls._current_env = env_name

        return handler

    @classmethod
    def _remove_env_handler(cls) -> None:
        """Remove the current environment handler from the root logger."""
        if cls._active_handler:
            root_logger = logging.getLogger()
            root_logger.removeHandler(cls._active_handler)
            cls._active_handler.close()
            cls._active_handler = None
            cls._current_env = None

            # Restore original root logger level if we changed it
            if cls._original_root_level is not None:
                root_logger.setLevel(cls._original_root_level)
                cls._original_root_level = None

    @classmethod
    @contextmanager
    def log_command(cls, env_name: str, command: str, **context):
        """Context manager for logging a command execution.

        This adds a file handler to the root logger for the duration
        of the command, so all logging from any module will go to
        the environment's log file.

        Args:
            env_name: Environment name
            command: Command being executed
            **context: Additional context to log

        Example:
            with EnvironmentLogger.log_command("my-env", "panel: POST /commit"):
                # All logging from any module will go to my-env/full.log
                env.execute_commit(...)
        """
        handler = cls._add_env_handler(env_name)

        if not handler:
            # No workspace, yield None
            yield None
            return

        # Get root logger for command logging
        logger = logging.getLogger("comfygit_panel.command")
        setattr(logger, COMMAND_RESULT_ATTR, None)

        # Log command start
        separator = "=" * 60
        logger.info(separator)
        logger.info(f"Command: {command}")
        logger.info(f"Started: {datetime.now().isoformat()}")

        # Log any context
        for key, value in context.items():
            if value is not None:  # Only log non-None values
                logger.info(f"{key}: {value}")

        logger.info("-" * 40)

        try:
            # Yield - during this time all logging goes to the env file
            yield logger

            result = getattr(logger, COMMAND_RESULT_ATTR, None)
            if isinstance(result, dict):
                status = str(result.get("status_str") or result.get("status") or "").lower()
                message = cls._result_message(result)

                if status in SUCCESS_STATUSES:
                    logger.info(f"Command '{command}' completed successfully")
                elif status in ERROR_STATUSES:
                    logger.error(f"Command '{command}' failed with status '{status}': {message}")
                else:
                    logger.warning(f"Command '{command}' completed with status '{status or 'unknown'}': {message}")
            else:
                # Log successful completion for callers that do not return a structured result.
                logger.info(f"Command '{command}' completed successfully")

        except Exception as e:
            # Log the error
            logger.error(f"Command '{command}' failed: {e}", exc_info=True)
            raise

        finally:
            # Log command end
            logger.info(f"Ended: {datetime.now().isoformat()}")
            logger.info(separator + "\n")

            if hasattr(logger, COMMAND_RESULT_ATTR):
                delattr(logger, COMMAND_RESULT_ATTR)

            # Remove the handler
            cls._remove_env_handler()

    @classmethod
    def get_current_environment(cls) -> str | None:
        """Get the currently active environment for logging."""
        return cls._current_env


class WorkspaceLogger:
    """Manages workspace-level logging separate from environment-specific logging.

    This creates logs under logs/workspace/full.log for global workspace commands.
    """

    # Shared configuration
    MAX_BYTES = 10 * 1024 * 1024  # 10 MB per log file
    BACKUP_COUNT = 5  # Keep 5 old log files
    DETAILED_FORMAT = "%(asctime)s - %(name)s - %(levelname)s - %(funcName)s:%(lineno)d - %(message)s"

    _workspace_path: Path | None = None
    _active_handler: logging.handlers.RotatingFileHandler | None = None
    _original_root_level: int | None = None

    @classmethod
    def set_workspace_path(cls, workspace_path: Path) -> None:
        """Set the workspace path for workspace logging.

        Args:
            workspace_path: Path to ComfyGit workspace
        """
        cls._workspace_path = workspace_path

        # Create workspace logs directory if workspace exists
        if workspace_path and workspace_path.exists():
            logs_dir = workspace_path / "logs" / "workspace"
            logs_dir.mkdir(parents=True, exist_ok=True)

    @classmethod
    def _add_workspace_handler(cls) -> logging.Handler | None:
        """Add a file handler for workspace commands to the root logger.

        Returns:
            The handler that was added, or None if workspace not set
        """
        if not cls._workspace_path or not cls._workspace_path.exists():
            return None

        # Remove any existing workspace handler
        cls._remove_workspace_handler()

        # Use consistent directory structure
        log_dir = cls._workspace_path / "logs" / "workspace"
        log_dir.mkdir(parents=True, exist_ok=True)
        log_file = log_dir / "full.log"

        handler = logging.handlers.RotatingFileHandler(
            log_file,
            maxBytes=cls.MAX_BYTES,
            backupCount=cls.BACKUP_COUNT,
            encoding='utf-8'
        )

        handler.setLevel(logging.DEBUG)

        # Set formatter
        formatter = logging.Formatter(cls.DETAILED_FORMAT)
        handler.setFormatter(formatter)

        # Add filter to only capture comfygit_* logs (exclude watchdog, aiohttp, etc.)
        handler.addFilter(ComfyGitLogFilter())

        # Add a name to identify this handler
        handler.set_name("workspace_handler")

        # Add handler to root logger and ensure it's configured
        root_logger = logging.getLogger()

        # Ensure root logger level allows DEBUG messages through
        if root_logger.level > logging.DEBUG:
            # Store original level to restore later
            cls._original_root_level = root_logger.level
            root_logger.setLevel(logging.DEBUG)
        else:
            cls._original_root_level = None

        root_logger.addHandler(handler)

        # Store reference
        cls._active_handler = handler

        return handler

    @classmethod
    def _remove_workspace_handler(cls) -> None:
        """Remove the current workspace handler from the root logger."""
        if cls._active_handler:
            root_logger = logging.getLogger()
            root_logger.removeHandler(cls._active_handler)
            cls._active_handler.close()
            cls._active_handler = None

            # Restore original root logger level if we changed it
            if cls._original_root_level is not None:
                root_logger.setLevel(cls._original_root_level)
                cls._original_root_level = None

    @classmethod
    @contextmanager
    def log_command(cls, command: str, **context):
        """Context manager for logging a workspace command execution.

        This adds a file handler to the root logger for the duration
        of the command, so all logging from any module will go to
        the workspace log file.

        Args:
            command: Command being executed
            **context: Additional context to log

        Example:
            with WorkspaceLogger.log_command("panel: POST /workspace/init"):
                # All logging from any module will go to workspace/full.log
                workspace.create(...)
        """
        handler = cls._add_workspace_handler()

        if not handler:
            # No workspace, yield None
            yield None
            return

        # Get root logger for command logging
        logger = logging.getLogger("comfygit_panel.workspace")

        # Log command start
        separator = "=" * 60
        logger.info(separator)
        logger.info(f"Command: {command}")
        logger.info(f"Started: {datetime.now().isoformat()}")

        # Log any context
        for key, value in context.items():
            if value is not None:  # Only log non-None values
                logger.info(f"{key}: {value}")

        logger.info("-" * 40)

        try:
            # Yield - during this time all logging goes to the workspace file
            yield logger

            # Log successful completion
            logger.info(f"Command '{command}' completed successfully")

        except Exception as e:
            # Log the error
            logger.error(f"Command '{command}' failed: {e}", exc_info=True)
            raise

        finally:
            # Log command end
            logger.info(f"Ended: {datetime.now().isoformat()}")
            logger.info(separator + "\n")

            # Remove the handler
            cls._remove_workspace_handler()
