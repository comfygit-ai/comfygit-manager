"""Debug and logging endpoints."""
import re
from pathlib import Path

from aiohttp import web

from cgm_core.decorators import requires_environment
from cgm_utils.async_helpers import run_sync

routes = web.RouteTableDef()


def parse_log_file(log_file: Path, level_filter: str | None = None, lines: int = 100) -> list[dict]:
    """
    Parse Python logging file and return raw log entries matching CLI format.

    Format: "%(asctime)s - %(name)s - %(levelname)s - %(funcName)s:%(lineno)d - %(message)s"
    Example: "2025-11-22 15:30:45,234 - comfygit_core.workflow - DEBUG - execute:456 - Starting"

    Args:
        log_file: Path to log file
        level_filter: Optional level to filter by (ERROR, WARNING, INFO, DEBUG)
        lines: Number of log records to return (from end of file)

    Returns:
        List of log entry dicts with raw timestamp and full module info
    """
    if not log_file.exists():
        return []

    try:
        # Read all lines from file
        with open(log_file, 'r', encoding='utf-8') as f:
            all_lines = f.readlines()

        # Group lines into complete log records (header + continuation lines)
        # This matches CLI behavior for handling multi-line entries
        log_pattern = re.compile(r'^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2},\d{3} - ')
        records = []
        current_record = []

        for line in all_lines:
            if log_pattern.match(line):
                if current_record:
                    records.append(current_record)
                current_record = [line]
            else:
                if current_record:
                    current_record.append(line)

        if current_record:
            records.append(current_record)

        # Take last N records (like CLI does)
        records = records[-lines:] if len(records) > lines else records

        # Parse format: "timestamp - name - level - func:line - message"
        detail_pattern = re.compile(
            r'^(?P<timestamp>\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2},\d{3})\s+-\s+'
            r'(?P<name>[\w.]+)\s+-\s+(?P<level>\w+)\s+-\s+'
            r'(?P<func>\w+):(?P<line>\d+)\s+-\s+(?P<message>.*)$'
        )

        entries = []
        for record in records:
            # Parse the first line of the record
            match = detail_pattern.match(record[0].strip())
            if match:
                data = match.groupdict()

                # Filter by level if specified
                if level_filter and data['level'] != level_filter.upper():
                    continue

                # Return raw timestamp (matches CLI output exactly)
                # Preserve full logger name for complete context
                # Include function and line for debugging
                entries.append({
                    'timestamp': data['timestamp'],
                    'name': data['name'],
                    'level': data['level'],
                    'func': data['func'],
                    'line': data['line'],
                    'message': data['message']
                })

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
