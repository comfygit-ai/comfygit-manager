"""Environment-specific logging for ComfyGit Panel."""

import logging
import logging.handlers
from contextlib import contextmanager
from datetime import datetime
from pathlib import Path


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
