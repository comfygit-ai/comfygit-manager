# Test Implementation Guide

This guide walks you through implementing the orchestrator system using TDD.

## Overview

We've created a comprehensive test suite that defines the expected behavior of the Phase 1 Orchestrator System. All tests currently **fail** because the implementation doesn't exist yet. Your job is to make them pass.

## Test Structure Summary

### Unit Tests (Fast, Isolated)

| Test File | Focus | Test Count | Key Functions Tested |
|-----------|-------|------------|---------------------|
| `test_environment_detection.py` | Environment type detection | 11 | `detect_environment_type()`, `find_workspace_root()`, `should_spawn_orchestrator_for_switch()` |
| `test_orchestrator_venv.py` | Virtual environment setup | 6 | `ensure_orchestrator_venv()`, `get_orchestrator_python()` |
| `test_health_checking.py` | Health validation | 10 | `_wait_for_health()`, `_check_port_connection()` |
| `test_file_communication.py` | State file IPC | 18 | `write_switch_request()`, `read_switch_status()`, `acquire_switch_lock()`, etc. |
| `test_orchestrator_loop.py` | Core supervision loop | 14 | `Orchestrator.run_forever()`, `_start_comfyui()`, `_sync_environment()` |

**Total Unit Tests: ~59 tests**

### Integration Tests (Slower, Full System)

| Test File | Focus | Test Count | What It Tests |
|-----------|-------|------------|---------------|
| `test_restart_flow.py` | Exit code 42 handling | 6 | Full restart loop, environment preservation |
| `test_orchestrator_bootstrap.py` | Lazy supervision spawn | 12 | Orchestrator spawning, detachment, venv setup |

**Total Integration Tests: ~18 tests**

**Grand Total: ~77 tests**

## Implementation Order

Follow this order to build the system incrementally:

### Step 1: Environment Detection (2-3 hours)

**File to create**: `server/orchestrator.py` (detection functions)

**Tests to pass**: `unit/test_environment_detection.py`

**Functions to implement**:
```python
def find_workspace_root() -> Optional[Path]:
    """Find workspace via env var, default location, or upward search."""

def detect_environment_type() -> tuple[bool, Optional[Workspace], Optional[Environment]]:
    """Detect if running in managed or unmanaged environment."""

def should_spawn_orchestrator_for_switch() -> bool:
    """Check if orchestrator needs to be spawned for switch."""
```

**Success criteria**: All 11 tests in `test_environment_detection.py` pass

**Tips**:
- Start with `find_workspace_root()` - it's the simplest
- Use `Path.cwd()` for current directory
- Check `COMFYGIT_HOME` env var first
- Test upward search by looking for `pyproject.toml` + `environments/` dir

### Step 2: File Communication (2-3 hours)

**File to update**: `server/orchestrator.py` (IPC functions)

**Tests to pass**: `unit/test_file_communication.py`

**Functions to implement**:
```python
def write_switch_request(metadata_dir: Path, target_env: str) -> None:
def read_switch_request(metadata_dir: Path) -> Optional[dict]:
def write_switch_status(metadata_dir: Path, state: str, progress: int, **kwargs) -> None:
def read_switch_status(metadata_dir: Path) -> Optional[dict]:
def cleanup_switch_status(metadata_dir: Path) -> None:
def write_orchestrator_pid(metadata_dir: Path) -> None:
def read_orchestrator_pid(metadata_dir: Path) -> Optional[int]:
def cleanup_orchestrator_pid(metadata_dir: Path) -> None:
def acquire_switch_lock(metadata_dir: Path) -> bool:
def release_switch_lock(metadata_dir: Path) -> None:
def is_switch_locked(metadata_dir: Path) -> bool:
def write_startup_state(metadata_dir: Path, **kwargs) -> None:
def read_startup_state(metadata_dir: Path) -> Optional[dict]:
```

**Success criteria**: All 18 tests in `test_file_communication.py` pass

**Tips**:
- These are mostly simple JSON file read/write operations
- Use `json.dumps(data, indent=2)` for pretty formatting
- Handle missing files gracefully (return None)
- Use `Path.unlink()` for cleanup
- For stale lock detection, use `Path.stat().st_mtime`

### Step 3: Orchestrator Venv Setup (1-2 hours)

**File to update**: `server/orchestrator.py`

**Tests to pass**: `unit/test_orchestrator_venv.py`

**Functions to implement**:
```python
def ensure_orchestrator_venv(venv_path: Path) -> None:
    """Create orchestrator venv if it doesn't exist."""

def get_orchestrator_python(custom_node_root: Path) -> Path:
    """Get path to orchestrator Python executable."""
```

**Success criteria**: All 6 tests in `test_orchestrator_venv.py` pass

**Tips**:
- Use Python's built-in `venv` module
- Check if venv exists before creating
- Install `comfygit-core` with subprocess: `pip install comfygit-core`
- Make function idempotent (safe to call multiple times)

### Step 4: Health Checking (2-3 hours)

**File to update**: `server/orchestrator.py` (add Orchestrator class methods)

**Tests to pass**: `unit/test_health_checking.py`

**Methods to implement**:
```python
class Orchestrator:
    def _wait_for_health(self, proc: subprocess.Popen, timeout: int) -> bool:
        """Wait for ComfyUI to become healthy."""

    def _check_port_connection(self, port: int) -> bool:
        """Check if port is accepting connections."""
```

**Success criteria**: All 10 tests in `test_health_checking.py` pass

**Tips**:
- Use `socket.socket()` to test port connectivity
- Require 3 consecutive successful connections for stability
- Check `proc.poll()` to detect if process died
- Sleep 2 seconds between checks
- Extract port from `self.comfyui_args`

### Step 5: Orchestrator Core Loop (3-4 hours)

**File to update**: `server/orchestrator.py`

**Tests to pass**: `unit/test_orchestrator_loop.py`

**Main class to implement**:
```python
class Orchestrator:
    EXIT_CLEAN = 0
    EXIT_RESTART = 42
    EXIT_SWITCH_ENV = 43

    def __init__(self, workspace_root: Path, initial_env: str, args: list[str]):
        """Initialize orchestrator."""

    def run_forever(self):
        """Main supervision loop."""

    def _sync_environment(self, env: Environment):
        """Sync environment before starting."""

    def _start_comfyui(self, env: Environment) -> subprocess.Popen:
        """Start ComfyUI subprocess."""

    def _handle_switch_request(self) -> bool:
        """Handle environment switch request."""

    def _cleanup(self):
        """Clean up orchestrator state."""

    def _handle_sigterm(self, signum, frame):
        """Handle SIGTERM signal."""

    def _handle_sigint(self, signum, frame):
        """Handle SIGINT signal."""
```

**Success criteria**: All 14 tests in `test_orchestrator_loop.py` pass

**Tips**:
- Main loop: `while True: start_comfyui() -> wait() -> handle_exit_code()`
- Exit code 42: continue loop (restart)
- Exit code 43: call `_handle_switch_request()`, then continue
- Exit code 0: break loop (clean exit)
- Other exit codes: break loop (crash)
- Set `COMFYGIT_SUPERVISED=1` env var when starting ComfyUI
- Use `subprocess.Popen()` with inherited stdout/stderr

### Step 6: Integration - Restart Flow (2 hours)

**File to update**: `server/comfygit_panel.py`

**Tests to pass**: `integration/test_restart_flow.py`

**Functions to update/add**:
```python
def extract_comfyui_args() -> list[str]:
    """Extract ComfyUI args from sys.argv."""
```

**Success criteria**: All 6 tests in `test_restart_flow.py` pass

**Tips**:
- This tests the full restart flow
- Verify orchestrator preserves environment across restarts
- Check that sync is called on each restart
- Ensure COMFYGIT_SUPERVISED flag prevents nested orchestrators

### Step 7: Integration - Bootstrap (2-3 hours)

**File to update**: `server/comfygit_panel.py`

**Tests to pass**: `integration/test_orchestrator_bootstrap.py`

**Functions to implement**:
```python
def spawn_orchestrator(env: Environment, target_env: str) -> None:
    """Spawn detached orchestrator daemon."""
```

**Success criteria**: All 12 tests in `test_orchestrator_bootstrap.py` pass

**Tips**:
- Use `subprocess.Popen()` with `start_new_session=True`
- Redirect stdout/stderr to `/tmp/comfygit_orchestrator.log`
- Pass `--workspace`, `--environment`, `--args` to orchestrator
- Use orchestrator venv Python, not environment Python

## Running Tests During Development

### Watch mode (re-run on file change)

```bash
pip install pytest-watch
ptw testing/
```

### Run specific test during development

```bash
# While working on environment detection:
pytest testing/unit/test_environment_detection.py -v

# While working on orchestrator loop:
pytest testing/unit/test_orchestrator_loop.py -v
```

### Check progress

```bash
# Show passed/failed summary:
pytest --tb=no -q

# Show coverage:
pytest --cov --cov-report=term-missing
```

## Debugging Failed Tests

### Read test output carefully

```bash
pytest -v  # Verbose shows which assertion failed
```

### Use pytest's built-in debugger

```bash
pytest --pdb  # Drop into debugger on failure
```

### Print debugging

```python
def test_something():
    result = my_function()
    print(f"Result: {result}")  # Shows in pytest output with -s
    assert result == expected
```

Run with: `pytest -s` to see print output

### Check test expectations

Read the test docstring and assertions to understand what behavior is expected.

## Common Implementation Pitfalls

### 1. Path handling

❌ **Wrong**: `Path("relative/path")`
✅ **Right**: `workspace_root / "relative" / "path"`

### 2. JSON error handling

❌ **Wrong**: Let exceptions crash
✅ **Right**: Wrap in try/except, return None on error

### 3. Process management

❌ **Wrong**: Not cleaning up spawned processes
✅ **Right**: Always use signal handlers and cleanup

### 4. File existence checks

❌ **Wrong**: Assume files exist
✅ **Right**: Check `path.exists()` before reading

### 5. Idempotency

❌ **Wrong**: Functions that fail if called twice
✅ **Right**: Check state before making changes

## Completion Checklist

After implementation, verify:

- [ ] All 77 tests pass
- [ ] Test coverage >90%
- [ ] No hanging processes in tests
- [ ] No temp files left after tests
- [ ] Tests run in <30 seconds (excluding slow tests)

## Next Steps After Phase 1

Once all Phase 1 tests pass:

1. **Manual testing**: Actually run the orchestrator with a real workspace
2. **Phase 2**: Implement environment switching (exit code 43)
3. **Phase 3**: Add frontend integration
4. **Phase 4**: Error handling and recovery

## Questions?

- Check the design doc: `.claude/context/shared/plans/ORCHESTRATOR_SYSTEM_DESIGN.md`
- Read test file docstrings for detailed behavior specs
- Look at fixture implementations in `conftest.py` for examples
