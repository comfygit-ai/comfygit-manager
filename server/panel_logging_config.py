"""Logging configuration for ComfyGit Panel."""

import logging

# Log format matching CLI for consistency
DETAILED_FORMAT = "%(asctime)s - %(name)s - %(levelname)s - %(funcName)s:%(lineno)d - %(message)s"


def configure_panel_logging() -> None:
    """Suppress noisy third-party debug logs in the ComfyUI console."""
    for logger_name in (
        "watchdog",
        "watchdog.observers",
        "watchdog.observers.inotify_buffer",
    ):
        logging.getLogger(logger_name).setLevel(logging.WARNING)


def get_logger(name: str) -> logging.Logger:
    """Get a logger instance for the given module.

    Args:
        name: Module name (typically __name__)

    Returns:
        Configured logger instance
    """
    return logging.getLogger(name)
