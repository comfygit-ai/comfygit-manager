# Quick Reference

## Test Commands

```bash
# Run all tests
pytest

# Run with coverage
pytest --cov --cov-report=html

# Run unit tests only
pytest unit/

# Run integration tests only
pytest integration/

# Run fast tests (exclude slow)
pytest -m "not slow"

# Run specific file
pytest unit/test_health_checking.py

# Run specific test
pytest unit/test_health_checking.py::TestHealthChecking::test_health_check_success

# Verbose output
pytest -v

# Show print statements
pytest -s

# Stop on first failure
pytest -x

# Run last failed tests
pytest --lf

# Drop into debugger on failure
pytest --pdb

# Run with timeout (prevent hanging)
pytest --timeout=30
```

## Using Test Script

```bash
# Make executable (first time)
chmod +x run_tests.sh

# Run all tests
./run_tests.sh

# Run with coverage
./run_tests.sh --cov

# Run verbose
./run_tests.sh -v

# Run fast tests only
./run_tests.sh --fast

# Run unit tests only
./run_tests.sh --unit

# Run integration tests only
./run_tests.sh --integration

# Run specific file
./run_tests.sh unit/test_health_checking.py
```

## Key Files to Implement

### Core Module: `server/orchestrator.py`

```python
# Environment Detection
def find_workspace_root() -> Optional[Path]
def detect_environment_type() -> tuple[bool, Optional[Workspace], Optional[Environment]]
def should_spawn_orchestrator_for_switch() -> bool

# File Communication (IPC)
def write_switch_request(metadata_dir: Path, target_env: str) -> None
def read_switch_request(metadata_dir: Path) -> Optional[dict]
def write_switch_status(metadata_dir: Path, state: str, progress: int, **kwargs) -> None
def read_switch_status(metadata_dir: Path) -> Optional[dict]
def cleanup_switch_status(metadata_dir: Path) -> None
def write_orchestrator_pid(metadata_dir: Path) -> None
def read_orchestrator_pid(metadata_dir: Path) -> Optional[int]
def cleanup_orchestrator_pid(metadata_dir: Path) -> None
def acquire_switch_lock(metadata_dir: Path, timeout: int = 300) -> bool
def release_switch_lock(metadata_dir: Path) -> None
def is_switch_locked(metadata_dir: Path) -> bool
def write_startup_state(metadata_dir: Path, **kwargs) -> None
def read_startup_state(metadata_dir: Path) -> Optional[dict]

# Venv Setup
def ensure_orchestrator_venv(venv_path: Path) -> None
def get_orchestrator_python(custom_node_root: Path) -> Path

# Orchestrator Class
class Orchestrator:
    EXIT_CLEAN = 0
    EXIT_RESTART = 42
    EXIT_SWITCH_ENV = 43

    def __init__(self, workspace_root: Path, initial_env: str, args: list[str])
    def run_forever(self)
    def _sync_environment(self, env: Environment)
    def _start_comfyui(self, env: Environment) -> subprocess.Popen
    def _wait_for_health(self, proc: subprocess.Popen, timeout: int) -> bool
    def _check_port_connection(self, port: int) -> bool
    def _handle_switch_request(self) -> bool
    def _cleanup(self)
    def _handle_sigterm(self, signum, frame)
    def _handle_sigint(self, signum, frame)

# Helper Functions
def extract_comfyui_args() -> list[str]
```

### Panel Module: `server/comfygit_panel.py`

```python
def spawn_orchestrator(env: Environment, target_env: str) -> None
```

## Test Fixtures Available

```python
# Directories
temp_dir: Path                    # Temporary directory, auto-cleanup
mock_workspace: Path              # Complete workspace structure
mock_environment: Path            # Environment with ComfyUI
metadata_dir: Path                # Workspace .metadata directory
mock_orchestrator_venv: Path      # Orchestrator venv

# State Files
mock_switch_request: Path         # Switch request JSON
mock_startup_state: Path          # Startup state JSON

# Configuration
mock_comfyui_args: list[str]      # ["--port", "8188", "--listen", "0.0.0.0"]
clean_env_vars: None              # Auto-cleanup env vars (autouse)
```

## Helper Classes

```python
from helpers import (
    # Process helpers
    ProcessMonitor,           # Monitor subprocess
    MockComfyUIServer,        # Mock server for testing
    wait_for_port,            # Wait for port to open
    is_port_open,             # Check if port is open
    get_free_port,            # Get random free port
    kill_process_tree,        # Kill process and children

    # Workspace helpers
    WorkspaceBuilder,         # Build test workspace
    EnvironmentBuilder,       # Build test environment
    StateFileBuilder,         # Build state files
)
```

## Expected File Structure

```
server/
├── orchestrator.py          # NEW: Core orchestrator (main implementation)
├── comfygit_panel.py       # UPDATE: Add spawn_orchestrator()
└── comfygit_server.py      # EXISTING: No changes needed

testing/
├── pyproject.toml
├── conftest.py
├── run_tests.sh
├── README.md
├── TEST_IMPLEMENTATION_GUIDE.md
├── QUICK_REFERENCE.md
├── unit/
│   ├── test_environment_detection.py
│   ├── test_orchestrator_venv.py
│   ├── test_health_checking.py
│   ├── test_file_communication.py
│   └── test_orchestrator_loop.py
├── integration/
│   ├── test_restart_flow.py
│   └── test_orchestrator_bootstrap.py
└── helpers/
    ├── __init__.py
    ├── process_helpers.py
    └── workspace_helpers.py
```

## State Files Reference

All in `<workspace>/.metadata/`:

```
.switch_request.json     # Pending switch request
.switch_status.json      # Current switch progress
.startup_state.json      # Captured startup state
.orchestrator.pid        # Running orchestrator PID
.switch.lock            # Concurrent switch prevention
```

## Exit Codes

```python
0   # Clean exit - stop supervision
42  # Restart - resync and restart same environment
43  # Switch - change to different environment
```

## Test Markers

```python
@pytest.mark.unit          # Fast, isolated unit tests
@pytest.mark.integration   # Full system integration tests
@pytest.mark.slow          # Tests taking >1 second
```

## Coverage Commands

```bash
# Generate HTML coverage report
pytest --cov --cov-report=html
open htmlcov/index.html

# Show coverage in terminal
pytest --cov --cov-report=term-missing

# Generate XML for CI
pytest --cov --cov-report=xml
```

## Debugging Tips

```bash
# Show full error traces
pytest -v --tb=long

# Show only short traces
pytest --tb=short

# Show only line numbers
pytest --tb=line

# No traceback (just pass/fail)
pytest --tb=no

# Run with print output visible
pytest -s

# Stop on first failure
pytest -x

# Show local variables in traceback
pytest -l
```

## Watch Mode (Auto Re-run)

```bash
# Install pytest-watch
pip install pytest-watch

# Watch all tests
ptw testing/

# Watch specific directory
ptw testing/unit/

# Watch with coverage
ptw -- --cov
```

## Common Test Patterns

### Arrange-Act-Assert

```python
def test_something():
    # Arrange
    workspace = create_workspace()
    env = create_environment()

    # Act
    result = function_under_test(workspace, env)

    # Assert
    assert result.success is True
```

### Using Mocks

```python
def test_with_mock(mocker):
    # Mock external call
    mock_subprocess = mocker.patch("subprocess.run")
    mock_subprocess.return_value = Mock(returncode=0)

    # Test
    result = function_that_calls_subprocess()

    # Verify
    mock_subprocess.assert_called_once()
```

### Testing Exceptions

```python
def test_raises_error():
    with pytest.raises(ValueError, match="expected error message"):
        function_that_should_raise()
```

### Testing File Operations

```python
def test_file_created(temp_dir):
    output_file = temp_dir / "output.json"

    # Function creates file
    create_file(output_file)

    # Verify
    assert output_file.exists()
    assert output_file.read_text() == "expected content"
```

## Implementation Checklist

Phase 1 Functions:

- [ ] `find_workspace_root()`
- [ ] `detect_environment_type()`
- [ ] `should_spawn_orchestrator_for_switch()`
- [ ] `write_switch_request()`
- [ ] `read_switch_request()`
- [ ] `write_switch_status()`
- [ ] `read_switch_status()`
- [ ] `cleanup_switch_status()`
- [ ] `write_orchestrator_pid()`
- [ ] `read_orchestrator_pid()`
- [ ] `cleanup_orchestrator_pid()`
- [ ] `acquire_switch_lock()`
- [ ] `release_switch_lock()`
- [ ] `is_switch_locked()`
- [ ] `write_startup_state()`
- [ ] `read_startup_state()`
- [ ] `ensure_orchestrator_venv()`
- [ ] `get_orchestrator_python()`
- [ ] `Orchestrator.__init__()`
- [ ] `Orchestrator.run_forever()`
- [ ] `Orchestrator._sync_environment()`
- [ ] `Orchestrator._start_comfyui()`
- [ ] `Orchestrator._wait_for_health()`
- [ ] `Orchestrator._check_port_connection()`
- [ ] `Orchestrator._handle_switch_request()`
- [ ] `Orchestrator._cleanup()`
- [ ] `Orchestrator._handle_sigterm()`
- [ ] `Orchestrator._handle_sigint()`
- [ ] `extract_comfyui_args()`
- [ ] `spawn_orchestrator()`

Total: 30 functions/methods

## Progress Tracking

```bash
# Count passing tests
pytest --co -q | wc -l          # Total tests
pytest --tb=no -q | grep passed # Passing tests

# Show test status summary
pytest --tb=no -q
```

## Getting Help

1. Read test docstrings - they explain expected behavior
2. Check `TEST_IMPLEMENTATION_GUIDE.md` - step-by-step walkthrough
3. Look at design doc - `.claude/context/shared/plans/ORCHESTRATOR_SYSTEM_DESIGN.md`
4. Examine fixtures in `conftest.py` - see test setup examples
5. Check helper classes - they show how to work with processes/files
