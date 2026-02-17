## Python Environment Management

- ALWAYS use uv and the commands below for python environment management! 
- NEVER try to run the system python!
- uv commands should be run in the root repo directory in order to use the repo's .venv

## Development

- `uv add <package>` - Install dependencies
- `uv run ruff check --fix` - Lint and auto-fix with ruff
- `uv pip list` - View dependencies
- `uv run <command>` - Run cli tools locally installed (e.g. uv run comfydock)

## Frontend Development

- Frontend source is in `frontend/src/` (Vue 3 + TypeScript)
- Built assets go to `js/` directory (committed to repo)
- `cd frontend && npm run build` - Rebuild frontend after changes
- `cd frontend && npm run dev` - Start dev server with hot reload
- **IMPORTANT**: Always rebuild frontend before committing if you changed:
  - Any file in `frontend/src/`
  - The `version` in `pyproject.toml`
- Version displayed in UI is injected from `pyproject.toml` at build time
- Pre-commit hook will block commits if frontend version doesn't match pyproject.toml
- Install hooks: `./scripts/install-hooks.sh`

## Testing

- New tests should go under testing/ under their respective category.
- Read testing/README.md for comprehensive info on test structure, fixtures, and patterns.
- Try to add new tests to existing test files rather than creating new files (unless necessary)
- `uv run pytest testing/ -v` - Run all tests (full info)
- `uv run pytest <filename>` - Run specific test file
- INSTALL CORE IN EDITABLE MODE: `uv pip install -e /home/akatzfey/projects/comfyhub/comfygit/packages/core`

## Codebase Navigation

Before starting any work, familiarize yourself with the codebase by reviewing these key files:

### Architecture Maps (Start Here!)
- @docs/server-map.md - Backend structure (server/, API endpoints, logging)
- @docs/frontend-map.md - Frontend structure (Vue components, services, types)

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
- **CORE LIBRARY** - /home/akatzfey/projects/comfyhub/comfygit/packages/core
- **CLI LIBRARY** - /home/akatzfey/projects/comfyhub/comfygit/packages/cli

### Additional Documentation
- **frontend/THEMES.md** - Theme system documentation

## Dependencies

- **Pin comfygit-core to exact versions** - Always use `==X.Y.Z` (not `>=`) for the core dependency in pyproject.toml. This ensures reproducible builds and prevents unexpected breakage from core updates.

## Version Bump Protocol

When asked to "bump core and version" or similar, follow this sequence:

1. Bump `comfygit-core==X.Y.Z` in `pyproject.toml` dependencies
2. Bump `version` in `pyproject.toml`
3. `uv lock` - Update the lockfile
4. `cd frontend && npm run build` - Rebuild frontend (version is injected at build time)
5. Stage `pyproject.toml`, `uv.lock`, `js/`, `requirements.txt` and commit
6. Push to remote

## General
Don't make any implementation overly complex. This is a one-person dev MVP project.
We are still pre-customer - any unnecessary fallbacks, unnecessary versioning, testing overkill should be avoided.
Simple, elegant, maintainable code is the goal.
We DONT want any legacy or backwards compatible code.

## Issue Tracking (Beads)

Uses beads (`bd`) with prefix **`cgm-`**. Use for multi-session or dependent work; skip for simple single-session fixes.

```bash
bd ready              # Find available work
bd show cgm-xxx       # View issue details
bd close cgm-xxx      # Complete work
bd sync               # Sync with git
```

### Commit Convention — Bead References

**When a commit implements, fixes, or closes a bead, include the bead ID(s) in the commit message.** This creates traceability between git history and issue tracking.

Format: `<description> [<bead-id>]` or `<description> [<bead-id>, <bead-id>]`

```
Add accelerator packages panel [cgm-2v9]
Fix switch lock stale errors [cgm-abc]
```

- Place bead ID(s) at the end of the first line in square brackets
- Use this for commits that directly address bead work — skip for unrelated housekeeping commits
- If a commit fully resolves a bead, also close it with `bd close`

## Cross-Platform Compatibility
This codebase must run on **Windows, Linux, and macOS**. All engineering choices should consider cross-platform compatibility:
- Use `pathlib.Path` instead of string concatenation for file paths
- Use `os.path.join()` or `Path` objects, never hardcode `/` or `\\` separators
- Use `shutil` for file operations instead of shell commands when possible
- Avoid platform-specific shell commands; when unavoidable, handle all platforms explicitly
- Use `subprocess` with lists (not shell strings) to avoid shell escaping issues
- Be mindful of case sensitivity differences (Linux/macOS case-sensitive, Windows case-insensitive)
- Test path handling with spaces and special characters
- Use `sys.executable` for Python interpreter path, not hardcoded paths