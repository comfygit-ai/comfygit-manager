#!/bin/bash
# Check that the frontend build version matches pyproject.toml
# Used by pre-commit hook and CI to catch forgotten frontend rebuilds

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

# Extract version from pyproject.toml
PYPROJECT_VERSION=$(grep -m1 '^version' "$PROJECT_ROOT/pyproject.toml" | sed 's/.*"\([^"]*\)".*/\1/')

# Extract version from compiled JS (format: ck = "v0.0.4" or similar)
JS_FILE="$PROJECT_ROOT/js/comfygit-panel.js"
if [[ ! -f "$JS_FILE" ]]; then
    echo "ERROR: Frontend build not found at $JS_FILE"
    echo "Run: cd frontend && npm run build"
    exit 1
fi

# The version is embedded as "v0.0.X" (with quotes) - use this to avoid matching Vue's version
# Supports PEP 440 versions: X.Y.Z, X.Y.Z.devN, X.Y.ZaN, X.Y.ZbN, X.Y.ZrcN
JS_VERSION=$(grep -oE '"v[0-9]+\.[0-9]+\.[0-9]+[^"]*"' "$JS_FILE" | head -1 | sed 's/"//g; s/^v//')

if [[ -z "$JS_VERSION" ]]; then
    echo "ERROR: Could not extract version from $JS_FILE"
    exit 1
fi

if [[ "$PYPROJECT_VERSION" != "$JS_VERSION" ]]; then
    echo "ERROR: Frontend version mismatch!"
    echo "  pyproject.toml: v$PYPROJECT_VERSION"
    echo "  js/comfygit-panel.js: v$JS_VERSION"
    echo ""
    echo "The frontend needs to be rebuilt to match the project version."
    echo "Run: cd frontend && npm run build"
    exit 1
fi

echo "Frontend version OK: v$PYPROJECT_VERSION"
exit 0
