# E2E Testing with MEOW + Agent-Browser

Spec-driven E2E testing where Claude generates and fixes browser automation tests.

## Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│  Human writes YAML specs describing user workflows                      │
│  (e.g., "open panel", "navigate to remotes", "commit workflow")        │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│  meow run e2e-generate                                                  │
│  - Claude explores UI with agent-browser                                │
│  - Discovers element refs (@e17 for ComfyGit button, etc.)             │
│  - Generates deterministic bash test scripts                           │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│  meow run e2e-tests                                                     │
│  - Runs all generated tests                                             │
│  - On failure: spawns Claude agents to fix broken tests                │
│  - Verifies fixes pass                                                  │
│  - Reports results                                                      │
└─────────────────────────────────────────────────────────────────────────┘
```

## Quick Start

```bash
# 1. Make sure ComfyUI is running
cg -e <env> run

# 2. Generate tests from specs
meow run e2e-generate

# 3. Run tests and auto-fix failures
meow run e2e-tests

# Or run without fixing
meow run e2e-tests --var fix=false
```

## Directory Structure

```
testing/e2e/
├── specs/                    # Human-written YAML workflow descriptions
│   ├── schema.yaml           # Spec format reference
│   ├── open-panel.yaml       # Smoke test: open the panel
│   ├── view-remotes.yaml     # Navigate to remotes section
│   └── ...
│
├── generated/                # Claude-generated bash test scripts
│   ├── open-panel.sh         # Generated from open-panel.yaml
│   └── ...
│
├── fixtures/                 # Test data, failure screenshots
│
└── lib/
    └── runner.sh             # Shared bash functions
```

## Writing Specs

Specs are YAML files describing user workflows in plain English:

```yaml
name: view-remotes
description: |
  User opens the panel and navigates to the REMOTES section
  to view their configured git remotes.

preconditions:
  comfyui_running: true
  panel_open: false

steps:
  - action: open_panel
    description: Click the ComfyGit button in the toolbar

  - action: navigate_section
    target: REMOTES
    description: Click the REMOTES tab in the sidebar

  - action: verify_state
    checks:
      - text_contains: "GIT REMOTES"

expected_outcomes:
  - current_section: remotes

tags:
  - remotes
  - navigation
```

See `specs/schema.yaml` for full format reference.

## Workflows

### `e2e-generate`

Generates test scripts from specs.

```bash
# Generate all missing tests
meow run e2e-generate

# Generate single spec
meow run e2e-generate --var spec=open-panel

# Force regenerate all
meow run e2e-generate --var force=true
```

### `e2e-tests`

Runs tests and optionally fixes failures.

```bash
# Run all tests, fix failures (default)
meow run e2e-tests

# Run without fixing
meow run e2e-tests --var fix=false

# Run single test
meow run e2e-tests --var spec=open-panel

# Parallel fixing (2 Claude agents)
meow run e2e-tests --var parallel=2
```

## Manual Testing

Use the runner library directly:

```bash
# Source the library
source testing/e2e/lib/runner.sh

# Run all tests
run_all_tests

# Run single test
run_test open-panel

# Get failures as JSON
export_failures_json
```

## Agent-Browser Reference

The test scripts use `agent-browser` for browser automation:

```bash
# Session management
agent-browser open http://localhost:8188 --session test
agent-browser close --session test

# Element interaction
agent-browser snapshot -i --json --session test  # Get refs
agent-browser click @e17 --session test          # Click by ref
agent-browser find text "REMOTES" click --session test

# Waiting
agent-browser wait "canvas" --timeout 30000 --session test
agent-browser wait --text "STATUS" --timeout 5000 --session test

# Screenshots
agent-browser screenshot /tmp/debug.png --session test
```

## Monitoring

```bash
# Watch workflow status
meow status --watch

# Attach to agent tmux session
tmux attach -t meow-<workflow-id>-<agent>

# Check logs
ls -la .meow/logs/
```

## CI Integration

For GitHub Actions:

```yaml
- name: Run E2E Tests
  run: |
    # Start ComfyUI in background
    cg -e test run &
    sleep 30

    # Run tests (no auto-fix in CI)
    meow run e2e-tests --var fix=false

    # Check results
    cat /tmp/e2e-results-*.json
```

## When Tests Break

1. UI changed → Run `meow run e2e-generate --var force=true`
2. Timing issues → Claude will add better waits when fixing
3. New feature → Write new spec, generate test
