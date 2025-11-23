"""Debug and logging endpoints."""
import re
from pathlib import Path

from aiohttp import web

from core.decorators import requires_environment
from utils.async_helpers import run_sync

routes = web.RouteTableDef()


def parse_log_file(log_file: Path, level_filter: str | None = None, lines: int = 100) -> list[dict]:
    """Parse log file and return structured entries."""
    if not log_file.exists():
        return []

    try:
        # Read last N lines from file
        with open(log_file, 'r') as f:
            all_lines = f.readlines()
            recent_lines = all_lines[-lines:] if len(all_lines) > lines else all_lines

        # Parse format: "timestamp - name - level - func:line - message"
        log_pattern = re.compile(
            r'^(?P<timestamp>\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2},\d{3})\s+-\s+'
            r'(?P<name>[\w.]+)\s+-\s+(?P<level>\w+)\s+-\s+'
            r'(?P<func>\w+):(?P<line>\d+)\s+-\s+(?P<message>.*)$'
        )

        entries = []
        for line in recent_lines:
            match = log_pattern.match(line.strip())
            if match:
                entry = match.groupdict()
                # Filter by level if specified
                if level_filter and entry['level'] != level_filter:
                    continue
                entries.append(entry)

        return entries

    except Exception:
        return []


@routes.get("/v2/comfygit/debug/logs")
@requires_environment
async def get_environment_logs(request: web.Request, env) -> web.Response:
    """
    Get environment-specific debug logs.

    Query params:
        - level: Filter by log level (ERROR, WARNING, INFO, DEBUG)
        - lines: Number of lines to return (default: 100)
    """
    level = request.query.get('level')
    lines = int(request.query.get('lines', '100'))

    log_file = env.workspace.path / "logs" / env.name / "full.log"

    logs = await run_sync(parse_log_file, log_file, level, lines)

    return web.json_response(logs)


@routes.get("/v2/workspace/debug/logs")
async def get_workspace_logs(request: web.Request) -> web.Response:
    """
    Get workspace-level debug logs.

    Query params:
        - level: Filter by log level (ERROR, WARNING, INFO, DEBUG)
        - lines: Number of lines to return (default: 100)
    """
    from comfygit_server import get_environment_from_cwd

    level = request.query.get('level')
    lines = int(request.query.get('lines', '100'))

    env = get_environment_from_cwd()
    if not env:
        return web.json_response({"error": "No environment detected"}, status=500)

    workspace = env.workspace
    log_file = workspace.path / "logs" / "workspace" / "full.log"

    logs = await run_sync(parse_log_file, log_file, level, lines)

    return web.json_response(logs)
