#!/bin/bash
# Generated E2E Test: open-panel
# Description: Basic smoke test that opens the ComfyGit panel
#

set -euo pipefail

SESSION="e2e-open-panel"
COMFYUI_URL="${COMFYUI_URL:-http://localhost:8188}"

# Cleanup on exit
cleanup() {
    agent-browser close --session "$SESSION" 2>/dev/null || true
}
trap cleanup EXIT

echo "Starting test: open-panel"

# Setup - create session and wait for ComfyUI to load
echo "Opening browser session..."
agent-browser open "$COMFYUI_URL" --session "$SESSION" --json

echo "Waiting for canvas to load..."
agent-browser wait "canvas" --timeout 30000 --session "$SESSION" --json

# Give the page a moment to fully render interactive elements
sleep 2

# Step 1: Find and click ComfyGit button
echo "Step 1: Opening ComfyGit panel..."

# Get snapshot to find ComfyGit button ref
snapshot_json=$(agent-browser snapshot -i --json --session "$SESSION")
comfygit_ref=$(echo "$snapshot_json" | jq -r '.data.refs | to_entries[] | select(.value.name == "ComfyGit") | .key' | head -1)

if [[ -z "$comfygit_ref" || "$comfygit_ref" == "null" ]]; then
    echo "FAIL: Could not find ComfyGit button"
    echo "Snapshot refs: $(echo "$snapshot_json" | jq '.data.refs | keys')"
    exit 1
fi

echo "Found ComfyGit button at @$comfygit_ref"

# Click the ComfyGit button
agent-browser click "@$comfygit_ref" --session "$SESSION" --json
sleep 1

# Step 2: Verify panel opened - check for STATUS tab
echo "Step 2: Verifying panel opened..."
agent-browser wait --text "STATUS" --timeout 5000 --session "$SESSION" --json || true

# Get new snapshot and verify panel sections are visible
snapshot_after=$(agent-browser snapshot -i --json --session "$SESSION")
if echo "$snapshot_after" | jq -e '.data.refs | to_entries[] | select(.value.name == "STATUS")' > /dev/null 2>&1; then
    echo "PASS: open-panel"
    exit 0
else
    echo "FAIL: Panel did not open - STATUS tab not found"
    echo "Available refs: $(echo "$snapshot_after" | jq -r '[.data.refs | to_entries[] | .value.name // .value.role] | join(", ")')"
    exit 1
fi
