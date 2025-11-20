# ComfyGit Manager Orchestrator Tests

TDD test suite for the Phase 1 Orchestrator System implementation.

## Overview

This test suite covers Phase 1 deliverables from the Orchestrator System Design:
- Environment detection (managed vs unmanaged)
- Orchestrator venv setup
- Health checking logic
- File-based communication (IPC)
- Core orchestrator loop
- Restart handling (exit code 42)
- Lazy supervision and bootstrap

## Structure

```
testing/
├── pyproject.toml          # Test dependencies and pytest config
├── conftest.py             # Shared fixtures
├── unit/                   # Unit tests (fast, isolated)
│   ├── test_environment_detection.py
│   ├── test_orchestrator_venv.py
│   ├── test_health_checking.py
│   ├── test_file_communication.py
│   └── test_orchestrator_loop.py
├── integration/            # Integration tests (slower, full flow)
│   ├── test_restart_flow.py
│   └── test_orchestrator_bootstrap.py
└── helpers/                # Test utilities
    ├── process_helpers.py
    └── workspace_helpers.py
```

## Running Tests

### Setup

Install test dependencies:

```bash
cd testing/
pip install -e .
```

### Run All Tests

```bash
pytest
```

### Run Unit Tests Only

```bash
pytest unit/
```

### Run Integration Tests Only

```bash
pytest integration/
```

### Run with Coverage

```bash
pytest --cov --cov-report=html
```

Coverage report will be in `htmlcov/index.html`.

### Run Specific Test File

```bash
pytest unit/test_health_checking.py
```

### Run Specific Test

```bash
pytest unit/test_health_checking.py::TestHealthChecking::test_health_check_success
```

### Run with Verbose Output

```bash
pytest -v
```

### Run Fast Tests Only (exclude slow)

```bash
pytest -m "not slow"
```

## Test Markers

- `@pytest.mark.unit` - Unit tests (isolated, fast)
- `@pytest.mark.integration` - Integration tests (full system)
- `@pytest.mark.slow` - Tests that take >1 second

## Writing New Tests

### Unit Test Example

```python
import pytest

@pytest.mark.unit
class TestMyFeature:
    """Test my feature."""

    def test_something(self, mock_workspace):
        """Should do something."""
        # Arrange
        # Act
        # Assert
        pass
```

### Integration Test Example

```python
import pytest

@pytest.mark.integration
class TestFullFlow:
    """Test complete flow."""

    @pytest.mark.slow
    def test_end_to_end(self, mock_workspace, mock_environment):
        """Should complete full workflow."""
        # Test full system integration
        pass
```

## Fixtures Available

### Workspace Fixtures

- `temp_dir` - Temporary directory, auto-cleanup
- `mock_workspace` - Complete workspace structure
- `mock_environment` - Environment with ComfyUI and venv
- `metadata_dir` - Workspace .metadata directory

### State File Fixtures

- `mock_switch_request` - Switch request JSON file
- `mock_startup_state` - Startup state JSON file
- `mock_orchestrator_venv` - Orchestrator venv directory

### Configuration Fixtures

- `mock_comfyui_args` - Standard ComfyUI arguments
- `clean_env_vars` - Auto-cleanup of environment variables

## Test Philosophy

### TDD Approach

1. **Write tests first** - Define expected behavior before implementation
2. **Red-Green-Refactor** - Tests fail, make them pass, improve code
3. **Test behavior, not implementation** - Focus on what, not how

### Test Structure

- **Arrange**: Set up test data and mocks
- **Act**: Execute the code under test
- **Assert**: Verify expected behavior

### Coverage Goals

- Unit tests: 100% coverage of core logic
- Integration tests: Cover main workflows
- Edge cases: Test failure modes and error handling

## Implementation Workflow

As you implement Phase 1, follow this pattern:

1. **Pick a test file** (e.g., `test_environment_detection.py`)
2. **Run the tests** - They should all fail (RED)
3. **Implement the code** to make tests pass (GREEN)
4. **Refactor** if needed while keeping tests green
5. **Move to next test file**

## Common Issues

### Import Errors

If you see `ModuleNotFoundError: No module named 'server.orchestrator'`:

This is expected! The orchestrator module doesn't exist yet. Implement it to make tests pass.

### Fixture Not Found

Make sure you're using fixtures defined in `conftest.py`. They're automatically available to all tests.

### Process Tests Hanging

If process tests hang, use `pytest-timeout`:

```bash
pytest --timeout=30
```

## Continuous Integration

To run tests in CI:

```bash
pytest --cov --cov-report=xml --junit-xml=test-results.xml
```

## Next Steps

Once tests are passing:

1. Move to Phase 2: Environment switching
2. Add integration tests for switch flow
3. Test rollback scenarios
4. Add frontend integration tests (Phase 3)

## Questions?

See the main design document:
`.claude/context/shared/plans/ORCHESTRATOR_SYSTEM_DESIGN.md`
