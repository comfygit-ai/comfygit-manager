## Python Environment Management

- ALWAYS use uv and the commands below for python environment management! 
- NEVER try to run the system python!
- uv commands should be run in the root repo directory in order to use the repo's .venv

## Development

- `uv add <package>` - Install dependencies
- `uv run ruff check --fix` - Lint and auto-fix with ruff
- `uv pip list` - View dependencies
- `uv run <command>` - Run cli tools locally installed (e.g. uv run comfydock)

## Testing

- New tests should go under testing/ under their respective category.
- Read testing/README.md for comprehensive info on test structure, fixtures, and patterns.
- Try to add new tests to existing test files rather than creating new files (unless necessary)
- `uv run pytest testing/ -v` - Run all tests (full info)
- `uv run pytest <filename>` - Run specific test file

## Codebase Navigation

Before starting any work, familiarize yourself with the codebase by reviewing these key files:

### Architecture Maps (Start Here!)
- **docs/server-map.md** - Backend structure (server/, API endpoints, logging)
- **docs/frontend-map.md** - Frontend structure (Vue components, services, types)

### Testing Documentation
- **testing/README.md** - Comprehensive test guide (69 panel API tests + orchestrator tests)
  - Test structure (unit/ vs integration/)
  - Fixtures and helpers
  - Running specific test suites
  - Writing new tests

### Key Directories
- **server/** - Backend Python code (Manager API + Control Panel API + orchestrator)
- **frontend/src/** - Vue 3 + TypeScript source code (components, composables, services)
- **js/** - Built frontend assets (comfygit-panel.js + comfygit-panel.css, compiled from frontend/src/)
- **testing/** - Test suite (unit/, integration/panel/, helpers/, fixtures)
- **docs/** - Architecture documentation and design docs
- **.claude/context/shared/api/**  
  - cli-ref.md ComfyGit CLI Complete API Reference (3600 lines)
  - Core Library Quick Refs: quick-ref-environment.md, quick-ref-git.md, quick-ref-models.md, quick-ref-nodes.md, quick-ref-status-sync.md, quick-ref-workflows.md, quick-ref-workspace.md

### Additional Documentation
- **frontend/THEMES.md** - Theme system documentation

## General
Don't make any implementation overly complex. This is a one-person dev MVP project.
We are still pre-customer - any unnecessary fallbacks, unnecessary versioning, testing overkill should be avoided.
Simple, elegant, maintainable code is the goal.
We DONT want any legacy or backwards compatible code.