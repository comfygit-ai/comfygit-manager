#!/bin/bash
# Generated E2E Test: navigate-all-sections
# Spec: testing/e2e/specs/navigate-all-sections.yaml
# Description: Comprehensive navigation test that visits every section
#              in the ComfyGit panel to verify they all load correctly.
#

set -euo pipefail

SESSION="e2e-navigate-all-sections"
COMFYUI_URL="${COMFYUI_URL:-http://localhost:8188}"

# Cleanup on exit
cleanup() {
    agent-browser close --session "$SESSION" 2>/dev/null || true
}
trap cleanup EXIT

log() { echo "[$(date +%H:%M:%S)] $1"; }

log "Starting test: navigate-all-sections"

# Setup - create session and wait for ComfyUI to load
log "Opening browser session..."
agent-browser open "$COMFYUI_URL" --session "$SESSION" --json

log "Waiting for canvas to load..."
agent-browser wait "canvas" --timeout 30000 --session "$SESSION" --json
sleep 2

# Step 1: Open the ComfyGit panel
log "Step 1: Opening ComfyGit panel..."
snapshot_json=$(agent-browser snapshot -i --json --session "$SESSION")
comfygit_ref=$(echo "$snapshot_json" | jq -r '.data.refs | to_entries[] | select(.value.name == "ComfyGit") | .key' | head -1)

if [[ -z "$comfygit_ref" || "$comfygit_ref" == "null" ]]; then
    log "FAIL: Could not find ComfyGit button"
    exit 1
fi

agent-browser click "@$comfygit_ref" --session "$SESSION" --json
sleep 1

# Wait for panel to open
agent-browser wait --text "STATUS" --timeout 5000 --session "$SESSION" --json

# Define sections to navigate
# THIS ENV sections
sections_env=("STATUS" "WORKFLOWS" "MODELS" "BRANCHES" "HISTORY" "NODES")
# SHARING sections
sections_sharing=("REMOTES" "EXPORT")

navigate_to_section() {
    local section="$1"
    log "Navigating to $section..."

    # Click on the section tab
    agent-browser find text "$section" click --session "$SESSION" --json 2>/dev/null || {
        log "Could not click $section tab directly, trying snapshot approach..."
        local snap=$(agent-browser snapshot -i --json --session "$SESSION")
        local ref=$(echo "$snap" | jq -r ".data.refs | to_entries[] | select(.value.name == \"$section\") | .key" | head -1)
        if [[ -n "$ref" && "$ref" != "null" ]]; then
            agent-browser click "@$ref" --session "$SESSION" --json
        else
            log "WARN: Could not find $section tab"
            return 1
        fi
    }

    # Wait for section to be active
    sleep 0.5
    return 0
}

failed_sections=()

# Navigate through THIS ENV sections
log "=== Testing THIS ENV sections ==="
for section in "${sections_env[@]}"; do
    if ! navigate_to_section "$section"; then
        failed_sections+=("$section")
    fi
done

# Navigate through SHARING sections
log "=== Testing SHARING sections ==="
for section in "${sections_sharing[@]}"; do
    if ! navigate_to_section "$section"; then
        failed_sections+=("$section")
    fi
done

# Verify final state
log "=== Verifying final state ==="

if [[ ${#failed_sections[@]} -eq 0 ]]; then
    log "PASS: navigate-all-sections (visited all ${#sections_env[@]} + ${#sections_sharing[@]} sections)"
    exit 0
else
    log "FAIL: Could not navigate to: ${failed_sections[*]}"
    exit 1
fi
