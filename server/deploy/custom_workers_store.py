"""Custom Workers Store - Persistence for registered GPU workers.

Stores worker configuration in workspace metadata directory as JSON.
"""
import json
from datetime import datetime
from pathlib import Path
from typing import Dict, Any


class CustomWorkersStore:
    """Manages persistence of custom worker registrations."""

    def __init__(self, workspace_path: Path):
        self.workspace_path = workspace_path
        self.config_path = workspace_path / ".comfygit" / "custom_workers.json"

    def _load(self) -> Dict[str, Any]:
        """Load workers from disk."""
        if not self.config_path.exists():
            return {"workers": {}}
        try:
            with self.config_path.open("r") as f:
                return json.load(f)
        except (json.JSONDecodeError, OSError):
            return {"workers": {}}

    def _save(self, data: Dict[str, Any]) -> None:
        """Save workers to disk."""
        self.config_path.parent.mkdir(parents=True, exist_ok=True)
        temp_path = self.config_path.with_suffix(".tmp")
        with temp_path.open("w") as f:
            json.dump(data, f, indent=2)
        temp_path.replace(self.config_path)

    def get_all_workers(self) -> list[dict]:
        """Get all registered workers."""
        data = self._load()
        return [
            {
                "name": name,
                **worker,
                "api_key_preview": worker.get("api_key", "")[-4:] if worker.get("api_key") else ""
            }
            for name, worker in data.get("workers", {}).items()
        ]

    def get_worker(self, name: str) -> dict | None:
        """Get a single worker by name."""
        data = self._load()
        worker = data.get("workers", {}).get(name)
        if worker:
            return {"name": name, **worker}
        return None

    def add_worker(self, name: str, host: str, port: int, api_key: str) -> None:
        """Register a new worker."""
        data = self._load()
        if "workers" not in data:
            data["workers"] = {}

        data["workers"][name] = {
            "host": host,
            "port": port,
            "api_key": api_key,
            "added_at": datetime.now().isoformat()
        }
        self._save(data)

    def remove_worker(self, name: str) -> bool:
        """Remove a registered worker. Returns True if removed."""
        data = self._load()
        if name in data.get("workers", {}):
            del data["workers"][name]
            self._save(data)
            return True
        return False
