"""
ComfyGit Manager - Custom node that provides Manager UI integration for ComfyGit.
Adds a Manager button to the ComfyUI toolbar that opens the built-in Manager UI.
"""

import os
import sys
from pathlib import Path

# Add server module to path
sys.path.append(os.path.join(os.path.dirname(__file__), "server"))

# Import to register routes and feature flags
import comfygit_server  # noqa: F401
import comfygit_panel   # noqa: F401

# Setup orchestrator venv on custom node load
try:
    # Import orchestrator module to setup venv
    custom_node_root = Path(__file__).parent
    orchestrator_module_path = custom_node_root / "server" / "orchestrator.py"

    # Dynamic import to avoid module path collision
    import importlib.util
    spec = importlib.util.spec_from_file_location("comfygit_orchestrator", orchestrator_module_path)
    orchestrator = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(orchestrator)

    orchestrator_venv_path = custom_node_root / "server" / ".orchestrator_venv"
    orchestrator.ensure_orchestrator_venv(orchestrator_venv_path)
    print("[ComfyGit] Orchestrator environment ready")
except Exception as e:
    print(f"[ComfyGit] WARNING: Failed to setup orchestrator venv: {e}")

# Serve frontend JS from the js directory
WEB_DIRECTORY = "js"

NODE_CLASS_MAPPINGS = {}
__all__ = ['NODE_CLASS_MAPPINGS']
