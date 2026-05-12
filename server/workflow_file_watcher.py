"""Workflow file watcher for real-time change detection.

Monitors the workflows directory and broadcasts WebSocket events when
workflow files are created, modified, or deleted.
"""

import logging
from threading import Lock, Timer
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


def _noop():
    """No-op function for when cache invalidation is unavailable."""
    pass


def _get_invalidate_cache():
    """Lazily import cache invalidation function to avoid circular imports."""
    global _invalidate_cache
    if _invalidate_cache is None:
        try:
            from api.v2.workflows import invalidate_workflow_hash_cache
            _invalidate_cache = invalidate_workflow_hash_cache
        except ImportError:
            # Fallback if import fails (e.g., during tests)
            _invalidate_cache = _noop
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
        self.debounce_timers = {}  # workflow_name -> Timer
        self._lock = Lock()

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

    def on_moved(self, event):
        """Handle atomic-save rename events."""
        if event.is_directory:
            return

        src_is_json = event.src_path.endswith('.json')
        dest_is_json = event.dest_path.endswith('.json')
        if not src_is_json and not dest_is_json:
            return

        # Invalidate is-saved hash cache
        _get_invalidate_cache()()

        if dest_is_json:
            workflow_name = Path(event.dest_path).name
            change_type = 'modified' if src_is_json else 'created'
        else:
            workflow_name = Path(event.src_path).name
            change_type = 'deleted'

        logger.debug(f"Workflow moved: {workflow_name} ({change_type})")
        self._broadcast_change(change_type, workflow_name)

    def _broadcast_change(self, change_type: str, workflow_name: str):
        """Broadcast workflow change via WebSocket with debouncing.

        Args:
            change_type: Type of change ('created', 'modified', 'deleted')
            workflow_name: Name of workflow file that changed
        """
        # Cancel previous debounce timer for this workflow
        with self._lock:
            if workflow_name in self.debounce_timers:
                self.debounce_timers[workflow_name].cancel()

        def delayed_broadcast():
            event_data = {
                "change_type": change_type,
                "workflow_name": workflow_name,
                "timestamp": datetime.now().isoformat()
            }

            logger.info(f"Broadcasting workflow change: {change_type} - {workflow_name}")
            self.prompt_server.send_sync("comfygit:workflow-changed", event_data)

            # Clean up timer reference
            with self._lock:
                active_timer = self.debounce_timers.get(workflow_name)
                if active_timer is timer:
                    del self.debounce_timers[workflow_name]

        # Watchdog invokes handlers from its own thread, which usually has no
        # asyncio event loop. A thread timer keeps save bursts debounced without
        # falling back to immediate broadcasts on partial writes.
        timer = Timer(0.25, delayed_broadcast)
        timer.daemon = True
        with self._lock:
            self.debounce_timers[workflow_name] = timer
        timer.start()
