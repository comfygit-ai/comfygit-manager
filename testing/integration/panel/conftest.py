"""Panel API test fixtures."""
import sys
import pytest
from collections.abc import Mapping
from aiohttp import web
from unittest.mock import Mock, MagicMock
from pathlib import Path
from comfygit_core.models import (
    EnvironmentReadiness,
    EnvironmentLifecycleStatus,
    GitBranch,
    GitSyncStatus,
    Workflow,
)

# Add server directory to path
server_dir = Path(__file__).parent.parent.parent.parent / "server"
if str(server_dir) not in sys.path:
    sys.path.insert(0, str(server_dir))


@pytest.fixture
def mock_environment():
    """Mock Environment object with common methods stubbed."""
    mock_env = Mock()
    mock_env.name = "test-env"
    mock_env.cec_path = Path("/tmp/test-workspace/environments/test-env/.cec")

    # Mock workspace
    mock_workspace = Mock()
    mock_workspace.path = Path("/tmp/test-workspace")
    mock_workspace.list_models = Mock(return_value=[])
    mock_workspace.model_has_sources = Mock(return_value=False)
    mock_workspace.model_repository = Mock()
    mock_workspace.model_repository.get_sources = Mock(return_value=[])
    mock_env.workspace = mock_workspace

    # Mock custom_nodes_path for legacy manager detection
    mock_env.custom_nodes_path = Path("/tmp/test-workspace/environments/test-env/ComfyUI/custom_nodes")

    # Mock workflow manager
    mock_env.workflow_manager = Mock()
    mock_env.workflow_manager.builtin_versions_repository = None

    # Mock pyproject manifest helpers
    mock_env.pyproject = Mock()
    mock_env.pyproject.nodes = Mock()
    mock_env.pyproject.nodes.get_existing = Mock(return_value={})
    mock_env.pyproject.nodes.set_criticality = Mock(return_value=True)
    mock_env.pyproject.workflows = Mock()
    mock_env.pyproject.workflows.get_all_with_resolutions = Mock(return_value={})
    mock_env.pyproject.workflows.get_workflow_models = Mock(return_value=[])
    mock_env.pyproject.workflows.get_custom_node_map = Mock(return_value={})
    mock_env.pyproject.models = Mock()
    mock_env.pyproject.models.get_all = Mock(return_value=[])
    mock_env.pyproject.models.get_by_hash = Mock(return_value=None)

    # Mock git manager
    mock_env.git_manager = Mock()
    mock_env.git_manager.get_version_history = Mock(return_value=[])
    mock_env.git_manager.list_branches = Mock(return_value=[])
    mock_env.git_manager.has_uncommitted_changes = Mock(return_value=False)
    mock_env.git_manager.switch_branch = Mock()
    mock_env.git_manager.checkout = Mock()
    mock_env.list_remotes = Mock(return_value=[])
    mock_env.add_remote = Mock()
    mock_env.remove_remote = Mock()
    mock_env.set_remote_url = Mock()
    mock_env.fetch_remote = Mock()
    mock_env.get_remote_sync_status = Mock(return_value=GitSyncStatus())
    mock_env.get_remote_url = Mock(return_value=None)
    mock_env.get_tracking_remote = Mock(return_value=None)

    # Common methods
    mock_env.status = Mock()
    mock_env.has_committable_changes = Mock(return_value=True)
    mock_env.execute_commit = Mock()
    mock_env.get_commit_history = Mock(return_value=[])
    mock_env.get_current_branch = Mock(return_value="main")
    mock_env.list_branches = Mock(return_value=[GitBranch(name="main", is_current=True)])
    mock_env.resolve_workflow = Mock()
    mock_env.get_uninstalled_nodes = Mock(return_value=[])
    mock_env.install_node = Mock()
    mock_env.sync = Mock()
    mock_env.export_environment = Mock()
    mock_env.create_branch = Mock()
    mock_env.update_node_criticality = Mock(return_value=True)
    mock_env.pull_remote = Mock(
        side_effect=lambda remote, branch=None, model_strategy="skip", token=None: mock_env.pull_and_repair(
            remote, branch, model_strategy
        )
    )
    mock_env.push_remote = Mock(
        side_effect=lambda remote, branch=None, force=False, token=None: mock_env.push_commits(
            remote, branch, force
        )
    )
    mock_env.check_remote_auth = Mock(return_value=True)

    def _get_readiness(*, include_blocking=True):
        try:
            from comfygit_core.readiness import (
                build_environment_readiness,
            )

            return build_environment_readiness(
                mock_env,
                include_blocking=include_blocking,
            )
        except Exception:
            return EnvironmentReadiness()

    mock_env.get_readiness = Mock(side_effect=_get_readiness)

    mock_env.get_lifecycle_status = Mock(
        return_value=EnvironmentLifecycleStatus(
            environment_name=mock_env.name,
            workspace_path=str(mock_workspace.path),
            current_branch="main",
        )
    )
    mock_env.get_workflow_execution_contract = Mock(return_value=None)
    mock_env.get_manifest_snapshot = Mock()

    def _manifest_nodes():
        nodes = getattr(getattr(mock_env.pyproject, "nodes", None), "get_existing", lambda: {})()
        return nodes if isinstance(nodes, Mapping) else {}

    def _manifest_workflows():
        workflows = getattr(
            getattr(mock_env.pyproject, "workflows", None),
            "get_all_with_resolutions",
            lambda: {},
        )()
        return workflows if isinstance(workflows, Mapping) else {}

    def _workflow_manifest_models(name):
        models = getattr(
            getattr(mock_env.pyproject, "workflows", None),
            "get_workflow_models",
            lambda _name: [],
        )(name)
        return tuple(models) if isinstance(models, list | tuple | set) else ()

    def _workflow_custom_node_map(name):
        custom_map = getattr(
            getattr(mock_env.pyproject, "workflows", None),
            "get_custom_node_map",
            lambda _name: {},
        )(name)
        return custom_map if isinstance(custom_map, Mapping) else {}

    def _manifest_models():
        models = getattr(getattr(mock_env.pyproject, "models", None), "get_all", lambda: [])()
        if not isinstance(models, list | tuple | set):
            return {}
        return {
            getattr(model, "hash", None): model
            for model in models
            if getattr(model, "hash", None)
        }

    def _manifest_model(model_hash):
        model = getattr(
            getattr(mock_env.pyproject, "models", None),
            "get_by_hash",
            lambda _hash: None,
        )(model_hash)
        return model if getattr(model, "hash", None) or getattr(model, "filename", None) else None

    mock_env.list_manifest_nodes = Mock(side_effect=_manifest_nodes)
    mock_env.get_manifest_node = Mock(
        side_effect=lambda identifier: mock_env.list_manifest_nodes().get(identifier)
    )
    mock_env.list_manifest_workflows = Mock(side_effect=_manifest_workflows)
    mock_env.get_manifest_workflow = Mock(
        side_effect=lambda name: mock_env.list_manifest_workflows().get(name)
    )
    mock_env.list_manifest_models = Mock(side_effect=_manifest_models)
    mock_env.get_manifest_model = Mock(side_effect=_manifest_model)
    mock_env.get_workflow_manifest_models = Mock(side_effect=_workflow_manifest_models)
    mock_env.get_workflow_custom_node_map = Mock(side_effect=_workflow_custom_node_map)
    mock_env.get_workflow_status = Mock(
        side_effect=lambda: mock_env.workflow_manager.get_workflow_status()
    )
    mock_env.get_existing_workflow_path = Mock(
        side_effect=lambda name: mock_env.workflow_manager.get_workflow_path(name)
    )
    mock_env.invalidate_workflow_resolution_cache = Mock(
        side_effect=lambda name: mock_env.workflow_cache.invalidate(mock_env.name, name)
        if hasattr(mock_env, "workflow_cache")
        else None
    )
    mock_env.set_workflow_manifest_models = Mock(
        side_effect=lambda name, models: mock_env.pyproject.workflows.set_workflow_models(name, models)
    )
    mock_env.add_workflow_manifest_model = Mock(
        side_effect=lambda name, model: mock_env.pyproject.workflows.add_workflow_model(name, model)
    )
    mock_env.add_manifest_model = Mock(
        side_effect=lambda model: mock_env.pyproject.models.add_model(model)
    )
    mock_env.set_workflow_custom_node_mapping = Mock(
        side_effect=lambda name, node_type, package_id: mock_env.pyproject.workflows.set_custom_node_mapping(
            name, node_type, package_id
        )
    )
    mock_env.remove_workflow_custom_node_mapping = Mock(
        side_effect=lambda name, node_type: mock_env.pyproject.workflows.remove_custom_node_mapping(
            name, node_type
        )
    )
    mock_env.update_workflow_model_criticality = Mock(
        side_effect=lambda name, model, criticality: mock_env.workflow_manager.update_model_criticality(
            name, model, criticality
        )
    )
    mock_env.add_workflow_model_dependency = Mock(
        side_effect=lambda **kwargs: mock_env.workflow_manager.add_existing_model_to_workflow(**kwargs)
    )
    mock_env.remove_workflow_model_dependency = Mock(
        side_effect=lambda **kwargs: mock_env.workflow_manager.remove_manual_model_from_workflow(**kwargs)
    )
    mock_env.analyze_workflow_dependencies = Mock(
        side_effect=lambda name: mock_env.workflow_manager.analyze_and_resolve_workflow(name)
    )
    def _analyze_workflow_json(workflow_data, workflow_name="unsaved"):
        if isinstance(workflow_data.get("nodes"), str):
            raise ValueError("Invalid workflow format")
        Workflow.from_json(workflow_data)
        return (
            Mock(workflow_name=workflow_name),
            mock_env.workflow_manager.resolve_workflow(Mock(workflow_name=workflow_name)),
        )

    mock_env.analyze_workflow_json = Mock(side_effect=_analyze_workflow_json)
    mock_env.resolve_workflow_dependencies = Mock(
        side_effect=lambda dependencies: mock_env.workflow_manager.resolve_workflow(dependencies)
    )
    mock_env.fix_workflow_resolution = Mock(
        side_effect=lambda result, node_strategy=None, model_strategy=None: mock_env.workflow_manager.fix_resolution(
            result, node_strategy, model_strategy
        )
    )
    mock_env.update_workflow_model_paths = Mock(
        side_effect=lambda result: mock_env.workflow_manager.update_workflow_model_paths(result)
    )
    mock_env.search_workflow_node_packages = Mock(
        side_effect=lambda query, include_registry=True, limit=10: mock_env.workflow_manager.global_node_resolver.search_packages(
            query,
            mock_env.list_manifest_nodes(),
            include_registry,
            limit,
        )
    )
    mock_env.search_workflow_models = Mock(
        side_effect=lambda query, node_type=None, limit=9: mock_env.workflow_manager.search_models(
            query,
            node_type,
            limit,
        )
    )

    def _workflow_package_aliases():
        resolver = getattr(mock_env.workflow_manager, "global_node_resolver", None)
        repository = getattr(resolver, "repository", None)
        global_mappings = getattr(repository, "global_mappings", None)
        aliases = getattr(global_mappings, "package_aliases", None)
        return aliases if isinstance(aliases, Mapping) else {}

    mock_env.get_workflow_package_aliases = Mock(side_effect=_workflow_package_aliases)
    mock_env.mark_workflow_model_download_resolved = Mock(return_value=True)

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
    status.comparison.dev_nodes_missing = set()
    status.comparison.extra_nodes = set()
    status.comparison.dev_nodes_untracked = set()
    status.comparison.disabled_nodes = []
    status.comparison.version_mismatches = []
    status.comparison.packages_in_sync = True
    status.comparison.package_sync_message = None

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
