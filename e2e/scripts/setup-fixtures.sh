#!/usr/bin/env bash
# e2e/scripts/setup-fixtures.sh
# Idempotent setup for E2E test fixtures

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
E2E_ROOT="$(dirname "$SCRIPT_DIR")"
COMFYUI_VERSION="v0.4.0"

# Directories
UV_CACHE_DIR="$E2E_ROOT/.cache/uv"
COMFYUI_BASE="$E2E_ROOT/.comfyui-base/ComfyUI"
FIXTURES_DIR="$E2E_ROOT/fixtures"

# === PHASE 1: Shared UV Cache ===
setup_uv_cache() {
    mkdir -p "$UV_CACHE_DIR"
    echo "✓ UV cache directory ready: $UV_CACHE_DIR"
}

# === PHASE 2: Clone ComfyUI Base (if not exists) ===
setup_comfyui_base() {
    if [[ -d "$COMFYUI_BASE/.git" ]]; then
        echo "✓ ComfyUI base already exists at $COMFYUI_BASE"
        return
    fi

    echo "Cloning ComfyUI $COMFYUI_VERSION..."
    mkdir -p "$(dirname "$COMFYUI_BASE")"
    git clone --branch "$COMFYUI_VERSION" --depth 1 \
        https://github.com/comfyanonymous/ComfyUI.git "$COMFYUI_BASE"
    echo "✓ Cloned ComfyUI $COMFYUI_VERSION"
}

# === PHASE 3: Create Fixture Workspace ===
create_fixture() {
    local name="$1"
    local fixture_path="$FIXTURES_DIR/$name"

    if [[ -d "$fixture_path" ]]; then
        echo "⚠ Fixture '$name' already exists. Use --reset to recreate."
        return
    fi

    echo "Creating fixture: $name"

    # Init workspace (no args needed, uses default path via COMFYGIT_HOME)
    COMFYGIT_HOME="$fixture_path" cg init --yes

    # Pre-populate ComfyUI cache
    populate_comfyui_cache "$fixture_path"

    # Create environment (will use cached ComfyUI and shared UV cache)
    UV_CACHE_DIR="$UV_CACHE_DIR" COMFYGIT_HOME="$fixture_path" cg create default --comfyui "$COMFYUI_VERSION" --yes

    # Setup git history
    setup_git_history "$fixture_path"

    echo "✓ Fixture '$name' created at $fixture_path"
}

# === PHASE 3a: Pre-populate ComfyUI Cache ===
populate_comfyui_cache() {
    local workspace="$1"
    local cache_dir="$workspace/comfygit_cache/comfyui"
    local store_dir="$cache_dir/store/release_$COMFYUI_VERSION"
    local content_dir="$store_dir/content"

    echo "  Pre-populating ComfyUI cache..."

    mkdir -p "$content_dir"

    # Copy ComfyUI from base
    cp -r "$COMFYUI_BASE/." "$content_dir/"

    # Get commit SHA
    local commit_sha
    commit_sha=$(git -C "$content_dir" rev-parse HEAD)

    # Create metadata.json
    cat > "$store_dir/metadata.json" << EOF
{
  "cache_key": "release_$COMFYUI_VERSION",
  "version": "$COMFYUI_VERSION",
  "version_type": "release",
  "commit_sha": "$commit_sha",
  "cached_at": "$(date -Iseconds)"
}
EOF

    # Create index.json
    cat > "$cache_dir/index.json" << EOF
{
  "version": "1.0",
  "content_type": "comfyui",
  "updated_at": "$(date -Iseconds)",
  "items": {
    "release_$COMFYUI_VERSION": {
      "cache_key": "release_$COMFYUI_VERSION",
      "version": "$COMFYUI_VERSION",
      "version_type": "release",
      "commit_sha": "$commit_sha"
    }
  }
}
EOF

    echo "  ✓ Pre-populated ComfyUI cache"
}

# === PHASE 3b: Setup Git History ===
setup_git_history() {
    local workspace="$1"

    echo "  Setting up git history..."

    cd "$workspace"

    # Initialize git repo if not already done
    if [[ ! -d .git ]]; then
        git init
        git config user.name "E2E Test"
        git config user.email "e2e@test.local"
    fi

    # Create initial commit
    git add .
    git commit -m "chore: initial workspace setup"

    # Add a second commit for testing history
    echo "# Test workspace" >> README.md
    git add README.md
    git commit -m "docs: add readme"

    # Create a test branch
    git checkout -b feature/test-branch
    echo "test" > test-file.txt
    git add test-file.txt
    git commit -m "feat: add test file on branch"

    # Return to main/master
    git checkout -

    echo "  ✓ Git history setup (2 commits, 2 branches)"
}

# === MAIN ===
main() {
    local reset=false

    while [[ $# -gt 0 ]]; do
        case "$1" in
            --reset)
                reset=true
                shift
                ;;
            *)
                echo "Unknown option: $1"
                exit 1
                ;;
        esac
    done

    if [[ "$reset" == true ]]; then
        echo "Resetting fixtures..."
        rm -rf "$FIXTURES_DIR"
    fi

    setup_uv_cache
    setup_comfyui_base
    create_fixture "basic"

    echo ""
    echo "=== Setup Complete ==="
    echo "UV Cache:     $UV_CACHE_DIR"
    echo "ComfyUI Base: $COMFYUI_BASE"
    echo "Fixtures:     $FIXTURES_DIR"
    echo ""
    echo "To run tests against the fixture:"
    echo "  COMFYGIT_HOME=$FIXTURES_DIR/basic cg run -e default"
    echo "  # Then in another terminal:"
    echo "  bun run test:e2e"
}

main "$@"
