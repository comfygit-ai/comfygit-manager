#!/bin/bash
# Install git hooks for comfygit-manager development
# Installs custom hooks, then chains with bd (beads) if available.

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
HOOKS_DIR="$PROJECT_ROOT/.git/hooks"

echo "Installing git hooks..."

# Install custom hooks
cp "$SCRIPT_DIR/hooks/pre-commit" "$HOOKS_DIR/pre-commit"
chmod +x "$HOOKS_DIR/pre-commit"
echo "  Installed: pre-commit"

cp "$SCRIPT_DIR/hooks/post-commit" "$HOOKS_DIR/post-commit"
chmod +x "$HOOKS_DIR/post-commit"
echo "  Installed: post-commit"

# Chain with bd (beads) if available
# This renames our pre-commit to pre-commit.old and installs a bd shim
# that calls our hook first, then runs bd's beads sync
if command -v bd &> /dev/null; then
    echo "  Chaining with bd hooks..."
    bd hooks install --chain
else
    echo "  bd not found, skipping beads hook chain"
fi

echo "Done! Git hooks installed successfully."
