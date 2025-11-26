#!/usr/bin/env bash
# comfygit-worktree.sh - Create a git worktree with a matching comfygit dev environment
set -euo pipefail

# Configuration - adjust these paths as needed
COMFYGIT_HOME="/home/akatzfey/projects/comfyhub/comfygit/.comfygit_workspace_new"
COMFYGIT_CORE_PATH="/home/akatzfey/projects/comfyhub/comfygit/packages/core"
MANAGER_REPO_ROOT="/home/akatzfey/projects/comfyhub/comfygit-manager"

# Default environment creation options
PYTHON_VERSION="3.12"
COMFYUI_VERSION="v0.3.68"
TORCH_BACKEND="cu129"

usage() {
    cat <<EOF
Usage: $(basename "$0") <branch-name> [options]
       $(basename "$0") -D <branch-name>

Creates or deletes a git worktree with matching comfygit development environment.

Options:
    -D, --delete             Delete worktree, branch, and environment
    -p, --python VERSION     Python version (default: $PYTHON_VERSION)
    -c, --comfyui VERSION    ComfyUI version (default: $COMFYUI_VERSION)
    -t, --torch BACKEND      PyTorch backend (default: $TORCH_BACKEND)
    -h, --help               Show this help message

Examples:
    $(basename "$0") feature-new-panel
    $(basename "$0") fix-bug --python 3.11
    $(basename "$0") -D feature-new-panel
EOF
    exit 0
}

error() {
    echo "ERROR: $1" >&2
    exit 1
}

info() {
    echo "==> $1"
}

sanitize_branch_name() {
    # Replace / with - and remove other problematic characters
    echo "$1" | tr '/' '-' | tr -cd 'a-zA-Z0-9_-'
}

# Parse arguments
[[ $# -lt 1 ]] && usage
BRANCH_NAME=""
DELETE_MODE=false

while [[ $# -gt 0 ]]; do
    case $1 in
        -D|--delete) DELETE_MODE=true; shift ;;
        -p|--python) PYTHON_VERSION="$2"; shift 2 ;;
        -c|--comfyui) COMFYUI_VERSION="$2"; shift 2 ;;
        -t|--torch) TORCH_BACKEND="$2"; shift 2 ;;
        -h|--help) usage ;;
        -*) error "Unknown option: $1" ;;
        *) BRANCH_NAME="$1"; shift ;;
    esac
done

[[ -z "$BRANCH_NAME" ]] && error "Branch name is required"

# Derive names and paths
ENV_NAME=$(sanitize_branch_name "$BRANCH_NAME")
WORKTREE_PATH="$(dirname "$MANAGER_REPO_ROOT")/comfygit-manager-$ENV_NAME"
ENV_PATH="$COMFYGIT_HOME/environments/$ENV_NAME"

info "Branch: $BRANCH_NAME"
info "Environment: $ENV_NAME"
info "Worktree: $WORKTREE_PATH"

# DELETE MODE
if [[ "$DELETE_MODE" == true ]]; then
    cd "$MANAGER_REPO_ROOT"

    # Check for uncommitted changes in worktree
    if [[ -d "$WORKTREE_PATH" ]]; then
        if [[ -n "$(git -C "$WORKTREE_PATH" status --porcelain 2>/dev/null)" ]]; then
            error "Worktree has uncommitted changes. Commit or stash them first."
        fi
        info "Removing worktree..."
        git worktree remove "$WORKTREE_PATH"
    else
        info "Worktree not found, skipping..."
    fi

    # Delete branch
    if git show-ref --verify --quiet "refs/heads/$BRANCH_NAME"; then
        info "Deleting branch '$BRANCH_NAME'..."
        git branch -D "$BRANCH_NAME"
    else
        info "Branch '$BRANCH_NAME' not found, skipping..."
    fi

    # Delete comfygit environment
    if [[ -d "$ENV_PATH" ]]; then
        info "Deleting comfygit environment '$ENV_NAME'..."
        export COMFYGIT_HOME
        cg delete "$ENV_NAME" -y
    else
        info "Environment '$ENV_NAME' not found, skipping..."
    fi

    info "Done! Cleanup complete."
    exit 0
fi

# CREATE MODE
# Check if environment already exists
[[ -d "$ENV_PATH" ]] && error "Environment '$ENV_NAME' already exists at $ENV_PATH"

# Check if worktree path already exists
[[ -d "$WORKTREE_PATH" ]] && error "Worktree path already exists: $WORKTREE_PATH"

# Step 1: Create git worktree with new branch
info "Creating git worktree..."
cd "$MANAGER_REPO_ROOT"
git fetch origin
git worktree add "$WORKTREE_PATH" -b "$BRANCH_NAME"

# Symlink .venv from main repo to worktree (for dev tools like ruff, pytest)
# [[ -d "$MANAGER_REPO_ROOT/.venv" ]] && ln -s "$MANAGER_REPO_ROOT/.venv" "$WORKTREE_PATH/.venv"

# Step 2: Create comfygit environment
info "Creating comfygit environment '$ENV_NAME'..."
export COMFYGIT_HOME
cg create "$ENV_NAME" --python "$PYTHON_VERSION" --comfyui "$COMFYUI_VERSION" --torch-backend "$TORCH_BACKEND" -y

# Step 3: Add comfygit-core source override to environment's pyproject.toml
info "Adding comfygit-core local source to environment..."
ENV_PYPROJECT="$ENV_PATH/.cec/pyproject.toml"

# Check if [tool.uv.sources] section exists, append to it or create it
if grep -q '^\[tool\.uv\.sources\]' "$ENV_PYPROJECT" 2>/dev/null; then
    # Section exists, add the line after it
    sed -i '/^\[tool\.uv\.sources\]/a comfygit-core = { path = "'"$COMFYGIT_CORE_PATH"'" }' "$ENV_PYPROJECT"
else
    # Section doesn't exist, append it
    cat >> "$ENV_PYPROJECT" <<EOF

[tool.uv.sources]
comfygit-core = { path = "$COMFYGIT_CORE_PATH" }
EOF
fi

# Step 4: Create symlink from environment's custom_nodes to worktree
info "Symlinking worktree to environment's custom_nodes..."
CUSTOM_NODES_DIR="$ENV_PATH/ComfyUI/custom_nodes"
ln -s "$WORKTREE_PATH" "$CUSTOM_NODES_DIR/comfygit-manager"

# Step 5: Install dependencies with local core
info "Installing comfygit-manager dependencies..."
cg -e "$ENV_NAME" py uv add -r "$WORKTREE_PATH/requirements.txt" --group comfygit

info "Syncing all dependency groups..."
cg -e "$ENV_NAME" py uv sync --all-groups

# Step 6: Create .vscode/settings.json with COMFYGIT_HOME for integrated terminal
info "Configuring VS Code workspace..."
mkdir -p "$WORKTREE_PATH/.vscode"
cat > "$WORKTREE_PATH/.vscode/settings.json" <<EOF
{
    "terminal.integrated.env.linux": {
        "COMFYGIT_HOME": "$COMFYGIT_HOME"
    }
}
EOF

# Step 7: Open VS Code (with WSL remote if in WSL)
info "Opening VS Code..."
if [[ -n "${WSL_DISTRO_NAME:-}" ]]; then
    code --remote "wsl+$WSL_DISTRO_NAME" "$WORKTREE_PATH"
else
    code "$WORKTREE_PATH"
fi

info "Done! Environment '$ENV_NAME' is ready for development."
info "Run ComfyUI with: cg -e $ENV_NAME run"
