"""
ComfyGit Manager - Custom node that provides Manager UI integration for ComfyGit.
Adds a Manager button to the ComfyUI toolbar that opens the built-in Manager UI.
"""

import os
import sys

# Add server module to path
sys.path.append(os.path.join(os.path.dirname(__file__), "server"))

# Import to register routes and feature flags
import comfygit_server  # noqa: F401
import comfygit_panel   # noqa: F401

# Serve frontend JS from the js directory
WEB_DIRECTORY = "js"

NODE_CLASS_MAPPINGS = {}
__all__ = ['NODE_CLASS_MAPPINGS']
