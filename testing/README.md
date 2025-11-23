# ComfyGit Manager Test Suite

Comprehensive test suite for ComfyGit Manager backend components.

## Overview

This test suite covers two major backend systems:

### 1. Orchestrator System (Phase 1)
- Environment detection (managed vs unmanaged)
- Orchestrator venv setup
- Health checking logic
- File-based communication (IPC)
- Core orchestrator loop
- Restart handling (exit code 42)
- Lazy supervision and bootstrap

### 2. Panel API (HTTP Endpoints)
- **69 integration tests** covering 15 critical endpoints
- Environment management (list, switch, switch status)
- Git operations (commit, log, branches, checkout, create branch)
- Workflow management (list, details, resolve, install)
- Model aggregation across workflows
- Sync and export operations
- Tests HTTP contracts for refactoring protection

## Structure

```
testing/
├── pyproject.toml          # Test dependencies and pytest config
├── conftest.py             # Shared orchestrator fixtures
├── unit/                   # Unit tests (fast, isolated)
│   ├── test_environment_detection.py
│   ├── test_orchestrator_venv.py
│   ├── test_health_checking.py
│   ├── test_file_communication.py
│   └── test_orchestrator_loop.py
├── integration/            # Integration tests
│   ├── panel/              # Panel API HTTP endpoint tests (NEW)
│   │   ├── conftest.py     # Panel-specific fixtures
│   │   ├── test_status_endpoints.py       # 8 tests
│   │   ├── test_git_endpoints.py          # 21 tests
│   │   ├── test_workflow_endpoints.py     # 10 tests
│   │   ├── test_model_endpoints.py        # 7 tests
│   │   ├── test_environment_endpoints.py  # 12 tests
│   │   └── test_sync_endpoints.py         # 11 tests
│   ├── test_restart_flow.py
│   ├── test_switch_progress_polling.py
│   └── test_orchestrator_bootstrap.py
└── helpers/                # Test utilities
    ├── process_helpers.py
    ├── workspace_helpers.py
    └── mock_helpers.py     # Panel API mock helpers (NEW)
```

## Running Tests

### Setup

Install test dependencies:

```bash
cd testing/
uv pip install -e .
```

### Run All Tests

```bash
pytest
```

### Run by Test Suite

**Orchestrator tests only:**
```bash
pytest unit/ integration/ -k "not panel"
```

**Panel API tests only:**
```bash
pytest integration/panel/
```

**Specific panel endpoint category:**
```bash
pytest integration/panel/test_git_endpoints.py
pytest integration/panel/test_environment_endpoints.py
```

### Run with Coverage

```bash
pytest --cov --cov-report=html
```

Coverage report will be in `htmlcov/index.html`.

### Run Specific Test

```bash
pytest integration/panel/test_git_endpoints.py::TestCommitEndpoint::test_success_with_changes
```

### Run with Verbose Output

```bash
pytest -v
```

### Run Fast Tests Only (exclude slow)

```bash
pytest -m "not slow"
```

## Panel API Tests

### Purpose

The panel API tests protect the HTTP endpoint layer during refactoring. The current `comfygit_panel.py` is a **1,676-line monolith** that will be refactored into a **domain-driven architecture** with 15+ modules.

These tests ensure:
- HTTP contracts remain stable during refactoring
- All success and error paths are covered
- Fast feedback (<1 second for 69 tests)
- Regression detection for all endpoints

### Test Strategy

**Tests HTTP contracts, not implementation:**
- Mock at the environment boundary (`get_environment_from_cwd()`)
- Test request → response (URLs, status codes, JSON structure)
- Don't test internal function calls or module structure
- Work identically with monolithic or modular backend

**Coverage pattern per endpoint:**
- ✓ Success case (happy path)
- ✓ No environment error (500)
- ✓ Validation errors (400/404/409)
- ✓ Business logic variants (state transitions, edge cases)

### Running Panel Tests

**All panel tests (fast):**
```bash
pytest integration/panel/ -v
# 69 passed in 0.51s
```

**By domain:**
```bash
pytest integration/panel/test_status_endpoints.py      # 8 tests
pytest integration/panel/test_git_endpoints.py         # 21 tests
pytest integration/panel/test_workflow_endpoints.py    # 10 tests
pytest integration/panel/test_model_endpoints.py       # 7 tests
pytest integration/panel/test_environment_endpoints.py # 12 tests
pytest integration/panel/test_sync_endpoints.py        # 11 tests
```

**Watch mode during development:**
```bash
pytest integration/panel/ --looponfail
```

### Panel Fixtures (integration/panel/conftest.py)

**HTTP Testing:**
- `panel_routes` - Session-scoped route registration (captures routes once)
- `app` - aiohttp Application with registered panel routes
- `client` - HTTP test client for making requests

**Mocking:**
- `mock_environment` - Mock Environment object with common methods
- `mock_env_status` - Mock EnvironmentStatus with realistic nested structure
- `mock_get_environment` - Auto-patches `get_environment_from_cwd()`
- `mock_loop_executor` - Synchronous executor for fast tests

**Helper Functions (helpers/mock_helpers.py):**
- `create_mock_resolution()` - Workflow resolution with iterable fields
- `create_mock_resolved_node()` - Resolved node objects
- `create_mock_resolved_model()` - Resolved model objects
- `create_mock_environment()` - Customizable environment mock
- `create_mock_workflow()` - Workflow with sync state
- `create_mock_commit()` - Git commit object

### Writing Panel Tests

**Standard pattern:**
```python
import pytest
from unittest.mock import Mock

@pytest.mark.integration
class TestMyEndpoint:
    """GET /v2/comfygit/my-endpoint - Description."""

    async def test_success(self, client, mock_environment):
        """Should return 200 with data when successful."""
        # Arrange: Configure mocks
        mock_environment.some_method.return_value = expected_data

        # Act: Make HTTP request
        resp = await client.get("/v2/comfygit/my-endpoint")

        # Assert: Verify response
        assert resp.status == 200
        data = await resp.json()
        assert data["field"] == expected_value

    async def test_error_no_environment(self, client, monkeypatch):
        """Should return 500 when no environment detected."""
        monkeypatch.setattr(
            "comfygit_panel.get_environment_from_cwd",
            lambda: None
        )

        resp = await client.get("/v2/comfygit/my-endpoint")
        assert resp.status == 500
```

**For environment management endpoints (use orchestrator pattern):**
```python
async def test_with_orchestrator(self, client, monkeypatch):
    """Test using orchestrator.detect_environment_type()."""
    mock_workspace = Mock()
    mock_current_env = Mock()

    def mock_detect():
        return (True, mock_workspace, mock_current_env)

    monkeypatch.setattr(
        "comfygit_panel.orchestrator.detect_environment_type",
        mock_detect
    )

    resp = await client.get("/v2/comfygit/environments")
    assert resp.status == 200
```

## Test Markers

- `@pytest.mark.unit` - Unit tests (isolated, fast)
- `@pytest.mark.integration` - Integration tests (full system or HTTP)
- `@pytest.mark.slow` - Tests that take >1 second

## Orchestrator Fixtures

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
- Panel API: 100% endpoint coverage with success/error paths
- Edge cases: Test failure modes and error handling

## Panel API Coverage

| **Category** | **Endpoints** | **Tests** | **Status** |
|-------------|--------------|-----------|-----------|
| Status | 1 | 8 | ✅ Complete |
| Git Operations | 5 | 21 | ✅ Complete |
| Workflows | 3 | 10 | ✅ Complete |
| Models | 1 | 7 | ✅ Complete |
| Environments | 3 | 12 | ✅ Complete |
| Sync/Export | 2 | 11 | ✅ Complete |
| **Total** | **15** | **69** | **✅ 100%** |

**Performance**: 69 tests in 0.51s (avg 7.4ms/test)

## Common Issues

### Import Errors

If you see `ModuleNotFoundError: No module named 'server.orchestrator'`:

This is expected! The orchestrator module doesn't exist yet. Implement it to make tests pass.

### Fixture Not Found

Make sure you're using fixtures defined in `conftest.py`. They're automatically available to all tests in the same directory and subdirectories.

### Panel Tests - aiohttp_client Not Found

Ensure `pytest-aiohttp` is installed:
```bash
uv pip install pytest-aiohttp
```

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

## Documentation

### Panel API Testing Strategy
See `testing/PANEL_TEST_AUDIT.md` for:
- Test quality audit results
- Architecture analysis
- Best practices

See `testing/PHASE2_COMPLETE.md` for:
- Complete Phase 2 implementation summary
- Coverage breakdown by endpoint
- Performance metrics

### Orchestrator Design
See `.claude/context/shared/plans/ORCHESTRATOR_SYSTEM_DESIGN.md`

## Next Steps

### Orchestrator
1. Move to Phase 2: Environment switching
2. Add integration tests for switch flow
3. Test rollback scenarios

### Panel API
- Phase 3 (optional): Depth coverage with edge cases
- Phase 4 (recommended): E2E workflow tests for critical user journeys

## Questions?

For orchestrator tests, see the main design document:
`.claude/context/shared/plans/ORCHESTRATOR_SYSTEM_DESIGN.md`

For panel API tests, see the testing strategy:
`.claude/context/branches/dev/plans/panel-api-testing-strategy.md`
