# Panel Logging Integration Test

## Overview
The panel backend now logs all operations to the same log files as the CLI, following the pattern:
- Environment-specific operations → `logs/<env-name>/full.log`
- Workspace operations → `logs/workspace/full.log`

## How It Works

### 1. Automatic Initialization
On module load, `comfygit_panel.py` automatically initializes logging:
```python
_initialize_panel_logging()
```

This sets the workspace path for `EnvironmentLogger` so all requests log to the correct location.

### 2. Request Logging Pattern
Each wrapped endpoint uses the `log_panel_request` async context manager:
```python
async with log_panel_request(env.name, "POST /commit", message=message):
    # All code here gets logged with full context
    result = env.execute_commit(...)
```

This:
- Logs command start with all context parameters
- Captures all library-level DEBUG logs from `comfygit_core`
- Automatically logs exceptions with full tracebacks
- Logs command completion

### 3. Log Format
Logs appear as:
```
============================================================
Command: panel: POST /commit
Started: 2025-11-22T15:30:45.123456
message: Update workflows
allow_issues: False
http_method: POST
endpoint: /v2/comfygit/commit
----------------------------------------
2025-11-22 15:30:45,234 - comfygit_core.managers.workflow_manager - DEBUG - execute_commit:456 - Executing commit
...
Command 'panel: POST /commit' completed successfully
Ended: 2025-11-22T15:30:47.789012
============================================================
```

## Testing

### Manual Test (using running ComfyUI)

1. **Start ComfyUI with panel enabled**:
   ```bash
   cd ~/comfygit/environments/my-env/ComfyUI
   uv run python main.py
   ```

2. **Trigger a panel operation** (via UI or curl):
   ```bash
   curl -X POST http://localhost:8188/v2/comfygit/commit \
     -H "Content-Type: application/json" \
     -d '{"message": "Test commit from panel"}'
   ```

3. **Check the logs**:
   ```bash
   # For environment-specific operations
   tail -f ~/comfygit/logs/my-env/full.log

   # You should see detailed logs like:
   # ============================================================
   # Command: panel: POST /commit
   # Started: 2025-11-22T...
   # message: Test commit from panel
   # ...
   ```

### What to Look For

✅ **Success indicators**:
- Log file exists at `<workspace>/logs/<env-name>/full.log`
- Command header shows `Command: panel: <endpoint>`
- Request parameters are logged (message, flags, etc.)
- Core library DEBUG logs appear (from managers, services, etc.)
- Command completion or error is logged
- Full exception tracebacks on errors

❌ **Failure indicators**:
- No log file created
- Only console output (print statements)
- Missing DEBUG-level core library logs
- Exceptions not captured in log file

## Wrapped Endpoints

Currently wrapped with logging:
- ✅ `POST /v2/comfygit/commit` - Commit workflows
- ✅ `POST /v2/comfygit/sync` - Sync environment
- ✅ `POST /v2/comfygit/workflow/{name}/install` - Install workflow nodes
- ✅ `POST /v2/comfygit/checkout` - Checkout commit/branch
- ✅ `POST /v2/comfygit/switch` - Switch branch
- ✅ `POST /v2/comfygit/switch_environment` - Switch environment

Read-only endpoints (status, log, branches, etc.) are NOT wrapped as they don't modify state.

## Log Rotation

Logs automatically rotate (inherited from CLI config):
- Max file size: 10 MB
- Backup count: 5 files
- Format: `full.log`, `full.log.1`, `full.log.2`, etc.

## Troubleshooting

### Issue: No logs appearing

**Check 1**: Verify workspace path is set
```python
# Add to any endpoint temporarily
logger.info(f"Workspace path: {EnvironmentLogger._workspace_path}")
```

**Check 2**: Verify environment name
```python
logger.info(f"Environment: {env.name}")
```

**Check 3**: Check log directory permissions
```bash
ls -la ~/comfygit/logs/
```

### Issue: Only console logs, no file logs

The panel initialization may have failed. Check ComfyUI startup console for:
```
[ComfyGit Panel] Could not initialize logging: <error>
```

### Issue: Logs missing DEBUG info from core library

This means the root logger level isn't being set correctly. The `EnvironmentLogger` should temporarily set root logger to DEBUG during command execution.

## Next Steps

To wrap additional endpoints:
1. Add `async with log_panel_request(env.name, "<endpoint>", **params):`
2. Move existing try/except inside the context
3. Replace `print(f"[ComfyGit Panel] ...")` with `logger.error(...)`
4. Ensure exceptions are logged with `exc_info=True`

## Integration with CLI

The panel and CLI now share the same log files:
- CLI: `cg -e prod node add foo` → `logs/prod/full.log`
- Panel: `POST /workflow/bar/install` → `logs/prod/full.log`

This provides a complete audit trail of all operations across both interfaces.
