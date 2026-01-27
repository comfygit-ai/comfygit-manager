"""Workflow file watcher for real-time change detection.

Monitors the workflows directory and broadcasts WebSocket events when
workflow files are created, modified, or deleted.
"""

import asyncio
import logging
from datetime import datetime
from pathlib import Path
from watchdog.events import FileSystemEventHandler

try:
    from panel_logging_config import get_logger
    logger = get_logger(__name__)
except ImportError:
    # Fallback for test environment
    logger = logging.getLogger(__name__)

# Import cache invalidation function (lazy to avoid circular imports)
_invalidate_cache = None


def _get_invalidate_cache():
    """Lazily import cache invalidation function to avoid circular imports."""
    global _invalidate_cache
    if _invalidate_cache is None:
        try:
            from api.v2.workflows import invalidate_workflow_hash_cache
            _invalidate_cache = invalidate_workflow_hash_cache
        except ImportError:
            # Fallback if import fails (e.g., during tests)
            _invalidate_cache = lambda: None
    return _invalidate_cache


class WorkflowFileWatcher(FileSystemEventHandler):
    """Watch for workflow file changes and broadcast events via WebSocket."""

    def __init__(self, workflows_path: Path, prompt_server):
        """Initialize workflow file watcher.

        Args:
            workflows_path: Path to workflows directory to watch
            prompt_server: PromptServer instance for WebSocket broadcasting
        """
        self.workflows_path = workflows_path
        self.prompt_server = prompt_server
        self.debounce_tasks = {}  # workflow_name -> Task

    def on_modified(self, event):
        """Handle file modification events."""
        if event.is_directory:
            return
        if not event.src_path.endswith('.json'):
            return

        # Invalidate is-saved hash cache
        _get_invalidate_cache()()

        workflow_name = Path(event.src_path).name
        logger.debug(f"Workflow modified: {workflow_name}")
        self._broadcast_change('modified', workflow_name)

    def on_created(self, event):
        """Handle file creation events."""
        if event.is_directory:
            return
        if not event.src_path.endswith('.json'):
            return

        # Invalidate is-saved hash cache
        _get_invalidate_cache()()

        workflow_name = Path(event.src_path).name
        logger.debug(f"Workflow created: {workflow_name}")
        self._broadcast_change('created', workflow_name)

    def on_deleted(self, event):
        """Handle file deletion events."""
        if event.is_directory:
            return
        if not event.src_path.endswith('.json'):
            return

        # Invalidate is-saved hash cache
        _get_invalidate_cache()()

        workflow_name = Path(event.src_path).name
        logger.debug(f"Workflow deleted: {workflow_name}")
        self._broadcast_change('deleted', workflow_name)

    def _broadcast_change(self, change_type: str, workflow_name: str):
        """Broadcast workflow change via WebSocket with debouncing.

        Args:
            change_type: Type of change ('created', 'modified', 'deleted')
            workflow_name: Name of workflow file that changed
        """
        # Cancel previous debounce task for this workflow
        if workflow_name in self.debounce_tasks:
            self.debounce_tasks[workflow_name].cancel()

        # Create new debounced broadcast task
        async def delayed_broadcast():
            await asyncio.sleep(0.1)  # 100ms debounce

            event_data = {
                "change_type": change_type,
                "workflow_name": workflow_name,
                "timestamp": datetime.now().isoformat()
            }

            logger.info(f"Broadcasting workflow change: {change_type} - {workflow_name}")
            self.prompt_server.send_sync("comfygit:workflow-changed", event_data)

            # Clean up task reference
            if workflow_name in self.debounce_tasks:
                del self.debounce_tasks[workflow_name]

        # Schedule debounced broadcast
        try:
            loop = asyncio.get_event_loop()
            self.debounce_tasks[workflow_name] = loop.create_task(delayed_broadcast())
        except RuntimeError:
            # No event loop available (e.g., during tests without async context)
            # Fall back to sync broadcast
            logger.warning("No event loop available, broadcasting synchronously")
            event_data = {
                "change_type": change_type,
                "workflow_name": workflow_name,
                "timestamp": datetime.now().isoformat()
            }
            self.prompt_server.send_sync("comfygit:workflow-changed", event_data)
