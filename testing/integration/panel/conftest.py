"""Panel API test fixtures."""
import sys
import pytest
from aiohttp import web
from unittest.mock import Mock, MagicMock
from pathlib import Path

# Add server directory to path
server_dir = Path(__file__).parent.parent.parent.parent / "server"
if str(server_dir) not in sys.path:
    sys.path.insert(0, str(server_dir))


@pytest.fixture
def mock_environment():
    """Mock Environment object with common methods stubbed."""
    mock_env = Mock()
    mock_env.name = "test-env"

    # Mock workspace
    mock_workspace = Mock()
    mock_workspace.path = Path("/tmp/test-workspace")
    mock_env.workspace = mock_workspace

    # Mock custom_nodes_path for legacy manager detection
    mock_env.custom_nodes_path = Path("/tmp/test-workspace/environments/test-env/ComfyUI/custom_nodes")

    # Mock workflow manager
    mock_env.workflow_manager = Mock()

    # Mock git manager
    mock_env.git_manager = Mock()
    mock_env.git_manager.list_branches = Mock(return_value=[])
    mock_env.git_manager.has_uncommitted_changes = Mock(return_value=False)
    mock_env.git_manager.switch_branch = Mock()
    mock_env.git_manager.checkout = Mock()

    # Common methods
    mock_env.status = Mock()
    mock_env.has_committable_changes = Mock(return_value=True)
    mock_env.execute_commit = Mock()
    mock_env.get_commit_history = Mock(return_value=[])
    mock_env.get_current_branch = Mock(return_value="main")
    mock_env.list_branches = Mock(return_value=[("main", True)])  # Returns (name, is_current) tuples
    mock_env.resolve_workflow = Mock()
    mock_env.get_uninstalled_nodes = Mock(return_value=[])
    mock_env.install_node = Mock()
    mock_env.sync = Mock()
    mock_env.export_environment = Mock()
    mock_env.create_branch = Mock()

    # Mock status() for sync endpoint version mismatch workaround
    mock_status = Mock()
    mock_status.comparison = Mock()
    mock_status.comparison.version_mismatches = []
    mock_env.status.return_value = mock_status

    return mock_env


@pytest.fixture
def mock_env_status():
    """Mock EnvironmentStatus object with realistic data."""
    # Create mock status with nested structure
    status = Mock()

    # Git status
    status.git = Mock()
    status.git.current_branch = "main"
    status.git.has_changes = False
    status.git.has_other_changes = False
    status.git.nodes_added = []
    status.git.nodes_removed = []
    status.git.workflow_changes = {}
    status.git.dependencies_added = []

    # Workflow status
    status.workflow = Mock()
    status.workflow.sync_status = Mock()
    status.workflow.sync_status.new = set()
    status.workflow.sync_status.modified = set()
    status.workflow.sync_status.deleted = set()
    status.workflow.sync_status.synced = {"workflow1.json"}
    status.workflow.sync_status.total_count = 1
    status.workflow.sync_status.has_changes = False
    status.workflow.is_commit_safe = True
    status.workflow.workflows_with_issues = []
    status.workflow.analyzed_workflows = []

    # Comparison status
    status.comparison = Mock()
    status.comparison.is_synced = True
    status.comparison.missing_nodes = set()
    status.comparison.extra_nodes = set()
    status.comparison.disabled_nodes = []
    status.comparison.version_mismatches = []
    status.comparison.packages_in_sync = True

    # Top-level fields
    status.is_synced = True
    status.missing_models = []

    return status


@pytest.fixture
def mock_get_environment(monkeypatch, mock_environment):
    """Patch get_environment_from_cwd() to return mock environment."""
    def _get_env():
        return mock_environment

    # Patch in the comfygit_panel module
    import comfygit_panel
    monkeypatch.setattr(
        comfygit_panel,
        "get_environment_from_cwd",
        _get_env
    )

    return mock_environment


# Module-level cache for routes and original sys.modules state
_PANEL_ROUTES = None
_ORIGINAL_SERVER_MODULE = None
_ORIGINAL_SYS_PATH = None


@pytest.fixture(scope="session")
def panel_routes(request):
    """Register panel routes once per test session.

    This fixture modifies sys.modules['server'] to inject a mock ComfyUI server.
    It properly cleans up after the session to avoid polluting other test suites.
    """
    global _PANEL_ROUTES, _ORIGINAL_SERVER_MODULE, _ORIGINAL_SYS_PATH

    if _PANEL_ROUTES is not None:
        return _PANEL_ROUTES

    # Save original state for cleanup
    _ORIGINAL_SERVER_MODULE = sys.modules.get('server')
    _ORIGINAL_SYS_PATH = sys.path.copy()

    mock_routes_list = []

    class MockRoutes:
        """Mock routes object that tracks route registration."""

        def get(self, path):
            def decorator(handler):
                mock_routes_list.append(("GET", path, handler))
                return handler
            return decorator

        def post(self, path):
            def decorator(handler):
                mock_routes_list.append(("POST", path, handler))
                return handler
            return decorator

        def put(self, path):
            def decorator(handler):
                mock_routes_list.append(("PUT", path, handler))
                return handler
            return decorator

        def delete(self, path):
            def decorator(handler):
                mock_routes_list.append(("DELETE", path, handler))
                return handler
            return decorator

        def patch(self, path):
            def decorator(handler):
                mock_routes_list.append(("PATCH", path, handler))
                return handler
            return decorator

    mock_prompt_server = MagicMock()
    mock_prompt_server.instance.routes = MockRoutes()

    # Create mock server module
    mock_server_module = MagicMock()
    mock_server_module.PromptServer = mock_prompt_server

    # Mock sys.modules to inject our fake server
    sys.modules['server'] = mock_server_module

    # Ensure server directory is on path (pytest may have modified it)
    # Force insert at position 0 to take precedence over pytest's additions
    sys.path.insert(0, str(server_dir))

    # Now import comfygit_panel which will register routes on our mock
    import comfygit_panel

    # Disable logging
    comfygit_panel.EnvironmentLogger = None
    comfygit_panel.WorkspaceLogger = None

    def cleanup():
        """Restore original sys.modules and sys.path state."""
        global _ORIGINAL_SERVER_MODULE, _ORIGINAL_SYS_PATH
        if _ORIGINAL_SERVER_MODULE is not None:
            sys.modules['server'] = _ORIGINAL_SERVER_MODULE
        elif 'server' in sys.modules:
            del sys.modules['server']
        if _ORIGINAL_SYS_PATH is not None:
            sys.path[:] = _ORIGINAL_SYS_PATH

    request.addfinalizer(cleanup)

    _PANEL_ROUTES = mock_routes_list
    return mock_routes_list


@pytest.fixture
async def app(panel_routes, mock_environment):
    """Create aiohttp Application instance with panel routes."""
    # Create a real app and register the routes
    app = web.Application()

    # Setup app state for context access (like comfygit_panel.py does)
    # Use functions that call through to the module functions
    # This allows tests to monkeypatch comfygit_panel.get_environment_from_cwd
    def get_env_from_module():
        import comfygit_panel
        return comfygit_panel.get_environment_from_cwd()

    def get_workspace_from_module():
        import comfygit_panel
        return comfygit_panel.get_workspace_from_cwd()

    app['get_environment'] = get_env_from_module
    app['get_workspace'] = get_workspace_from_module

    # Register all captured routes
    for method, path, handler in panel_routes:
        app.router.add_route(method, path, handler)

    return app


@pytest.fixture
async def client(aiohttp_client, app, mock_get_environment):
    """Create test client for making HTTP requests."""
    return await aiohttp_client(app)


@pytest.fixture(autouse=True)
def mock_loop_executor(monkeypatch):
    """Mock asyncio run_in_executor to execute synchronously."""
    import asyncio

    async def fake_executor(executor, func, *args):
        """Run function immediately instead of in executor."""
        return func(*args) if args else func()

    # Patch the run_in_executor method
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    monkeypatch.setattr(
        loop,
        "run_in_executor",
        fake_executor
    )


@pytest.fixture(autouse=True)
def reset_init_task_state():
    """Reset _init_task_state before each test to prevent state leakage."""
    import api.v2.setup as setup_module

    # Reset to idle state before test
    setup_module._init_task_state.update({
        "state": "idle",
        "task_id": None,
        "progress": 0,
        "message": "No initialization in progress",
        "models_found": None,
        "error": None
    })

    yield

    # Restore original state after test (or reset to idle)
    setup_module._init_task_state.update({
        "state": "idle",
        "task_id": None,
        "progress": 0,
        "message": "No initialization in progress",
        "models_found": None,
        "error": None
    })
