"""Debug and logging endpoints."""
import re
from pathlib import Path

from aiohttp import web

from cgm_core.decorators import requires_environment
from cgm_utils.async_helpers import run_sync

routes = web.RouteTableDef()


def read_text_file(path: Path) -> str | None:
    """Read a UTF-8 text file for debug inspection."""
    if not path.exists():
        return None

    try:
        return path.read_text(encoding="utf-8")
    except Exception:
        return None


def parse_raw_log_file(log_file: Path, lines: int = 500) -> list[dict]:
    """
    Parse a raw stdout/stderr log file (like orchestrator.log).

    Returns each line as a log entry with basic level detection.
    """
    if not log_file.exists():
        return []

    try:
        with open(log_file, 'r', encoding='utf-8', errors='replace') as f:
            all_lines = f.readlines()

        # Take last N lines
        recent_lines = all_lines[-lines:] if len(all_lines) > lines else all_lines

        entries = []
        for line in recent_lines:
            line = line.rstrip('\n\r')
            if not line:
                continue

            # Detect log level from common patterns
            level = 'INFO'
            line_lower = line.lower()
            if 'error' in line_lower or 'exception' in line_lower or 'traceback' in line_lower:
                level = 'ERROR'
            elif 'warning' in line_lower or 'warn' in line_lower:
                level = 'WARNING'
            elif 'debug' in line_lower:
                level = 'DEBUG'

            entries.append({
                'timestamp': '',
                'name': 'orchestrator',
                'level': level,
                'func': '',
                'line': 0,
                'message': line
            })

        return entries

    except Exception:
        return []


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

                # Combine first line message with any continuation lines
                message = data['message']
                if len(record) > 1:
                    # Append continuation lines (multiline log content like stderr)
                    continuation = ''.join(record[1:]).rstrip()
                    if continuation:
                        message = message + '\n' + continuation

                # Return raw timestamp (matches CLI output exactly)
                # Preserve full logger name for complete context
                # Include function and line for debugging
                entries.append({
                    'timestamp': data['timestamp'],
                    'name': data['name'],
                    'level': data['level'],
                    'func': data['func'],
                    'line': data['line'],
                    'message': message
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


@routes.get("/v2/comfygit/debug/logs/path")
@requires_environment
async def get_environment_log_path(request: web.Request, env) -> web.Response:
    """Get the file path to the environment log file."""
    log_file = env.workspace.path / "logs" / env.name / "full.log"

    return web.json_response({
        "path": str(log_file),
        "exists": log_file.exists()
    })


@routes.get("/v2/comfygit/debug/manifest")
@requires_environment
async def get_environment_manifest(request: web.Request, env) -> web.Response:
    """Get the live environment manifest text for read-only inspection."""
    manifest_path = env.pyproject.path
    content = await run_sync(read_text_file, manifest_path)

    return web.json_response({
        "path": str(manifest_path),
        "exists": manifest_path.exists(),
        "content": content or "",
    })


@routes.post("/v2/comfygit/debug/metadata/refresh")
@requires_environment
async def refresh_environment_metadata(request: web.Request, env) -> web.Response:
    """Refresh generated environment metadata extracted from ComfyUI."""
    try:
        result = await run_sync(env.refresh_metadata)
    except ValueError as exc:
        return web.json_response({"status": "error", "error": str(exc)}, status=400)
    except Exception as exc:
        return web.json_response({"status": "error", "error": str(exc)}, status=500)

    return web.json_response({
        "status": "success",
        **result,
    })


@routes.get("/v2/workspace/debug/logs/path")
async def get_workspace_log_path(request: web.Request) -> web.Response:
    """Get the file path to the workspace log file."""
    from comfygit_server import get_environment_from_cwd

    env = get_environment_from_cwd()
    if not env:
        return web.json_response({"error": "No environment detected"}, status=500)

    log_file = env.workspace.path / "logs" / "workspace" / "full.log"

    return web.json_response({
        "path": str(log_file),
        "exists": log_file.exists()
    })


@routes.get("/v2/workspace/debug/orchestrator-logs")
async def get_orchestrator_logs(request: web.Request) -> web.Response:
    """
    Get orchestrator logs from <workspace>/.metadata/orchestrator.log.

    This file contains raw stdout/stderr from ComfyUI, not structured Python logs.

    Query params:
        - lines: Number of lines to return (default: 500)
    """
    from comfygit_server import get_environment_from_cwd

    lines = int(request.query.get('lines', '500'))

    env = get_environment_from_cwd()
    if not env:
        return web.json_response({"error": "No environment detected"}, status=500)

    log_file = env.workspace.path / ".metadata" / "orchestrator.log"

    logs = await run_sync(parse_raw_log_file, log_file, lines)

    return web.json_response(logs)


@routes.get("/v2/workspace/debug/orchestrator-logs/path")
async def get_orchestrator_log_path(request: web.Request) -> web.Response:
    """Get the file path to the orchestrator log file."""
    from comfygit_server import get_environment_from_cwd

    env = get_environment_from_cwd()
    if not env:
        return web.json_response({"error": "No environment detected"}, status=500)

    log_file = env.workspace.path / ".metadata" / "orchestrator.log"

    return web.json_response({
        "path": str(log_file),
        "exists": log_file.exists()
    })
