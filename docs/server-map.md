# ComfyGit Server - Codebase Map

## Overview
The server directory contains the backend API layer that integrates with ComfyUI's server infrastructure. It provides two main endpoint groups: the Manager API (v2/) for ComfyUI's built-in Manager UI compatibility, and the Control Panel API (v2/comfygit/) for git operations and environment management. The orchestrator process manages environment lifecycle and handles restarts/switches.

## Core Application Files

### Entry Points & Server Integration
- **comfygit_server.py** - Manager API backend providing /v2/ endpoints for ComfyUI Manager UI compatibility; injects feature flags and system argument flags
- **comfygit_panel.py** - Control Panel API backend providing /v2/comfygit/ endpoints for git operations, status checks, branch management, environment switching, and workspace info

### Process Management
- **orchestrator.py** - Permanent supervisor process that manages ComfyUI environment lifecycle, handles restart signals (exit 42) and environment switches (exit 43), manages workspace/environment discovery and venv creation

## Logging Infrastructure

- **panel_logging_config.py** - Shared logging configuration providing consistent log formatting for panel operations
- **panel_environment_logger.py** - Environment-specific logging with rotating file handlers; integrates with root logger to capture all operations per environment

## Key Entry Points

- **orchestrator.py** - Process entry point; run via `./orchestrator.py --workspace /path/to/workspace --environment env_name` to start the managed ComfyUI environment
- **comfygit_server.py** - Automatically imported by ComfyUI server to register Manager API routes
- **comfygit_panel.py** - Automatically imported by ComfyUI server to register Control Panel API routes
