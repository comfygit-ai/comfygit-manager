#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="${PROJECT_ROOT:-/home/akatzfey/dev/projects/comfygit-ai/comfygit-manager}"
WORKSPACE="${COMFYGIT_HOME:-$PROJECT_ROOT/.comfygit-workspace}"
ENV_NAME="${COMFYGIT_ENV_NAME:-manager-dev}"
MODELS_DIR="${SHARED_MODELS_DIR:-/data/models}"
EXTRA_DEV_NODE_PATHS="${EXTRA_DEV_NODE_PATHS:-}"
COMFYGIT_DEV_REPO_PATH="${COMFYGIT_DEV_REPO_PATH:-/home/akatzfey/dev/projects/comfygit-ai/comfygit}"
COMFYGIT_MANAGER_DEV_PATH="${COMFYGIT_MANAGER_DEV_PATH:-/home/akatzfey/dev/projects/comfygit-ai/comfygit-manager}"
COMFYUI_PORT="${COMFYUI_PORT:-8188}"
TORCH_BACKEND="${COMFYGIT_TORCH_BACKEND:-cu126}"
COMFYGIT_CREATE_ARGS="${COMFYGIT_CREATE_ARGS:-}"
COMFYUI_EXTRA_ARGS="${COMFYUI_EXTRA_ARGS:---disable-auto-launch --disable-metadata}"
GIT_AUTHOR_NAME="${GIT_AUTHOR_NAME:-}"
GIT_AUTHOR_EMAIL="${GIT_AUTHOR_EMAIL:-}"
GIT_COMMITTER_NAME="${GIT_COMMITTER_NAME:-$GIT_AUTHOR_NAME}"
GIT_COMMITTER_EMAIL="${GIT_COMMITTER_EMAIL:-$GIT_AUTHOR_EMAIL}"
COMFYUI_ARGS=()
COMFYGIT_CREATE_ARGS_ARRAY=()
EXTRA_DEV_NODE_PATHS_ARRAY=()

export COMFYGIT_HOME="$WORKSPACE"

log() {
  printf '[manager-dev-stack] %s\n' "$*"
}

configure_git_identity() {
  if [ -n "$GIT_COMMITTER_NAME" ]; then
    git config --global user.name "$GIT_COMMITTER_NAME"
  fi
  if [ -n "$GIT_COMMITTER_EMAIL" ]; then
    git config --global user.email "$GIT_COMMITTER_EMAIL"
  fi
}

install_dev_comfygit() {
  local core_pkg="$COMFYGIT_DEV_REPO_PATH/packages/core"
  local cli_pkg="$COMFYGIT_DEV_REPO_PATH/packages/cli"

  if [ ! -d "$core_pkg" ] || [ ! -d "$cli_pkg" ]; then
    log "Dev comfygit repo not found at $COMFYGIT_DEV_REPO_PATH"
    exit 1
  fi

  log "Installing dev comfygit core/cli from mounted repo"
  uv pip install --python "$VIRTUAL_ENV/bin/python" -e "$core_pkg" -e "$cli_pkg"
}

configure_dev_core_overlay() {
  local core_pkg="$COMFYGIT_DEV_REPO_PATH/packages/core"
  local cec_path="$WORKSPACE/environments/$ENV_NAME/.cec"
  local overlay_path="$cec_path/overlays/.local.toml"
  local gitignore_path="$cec_path/.gitignore"

  if [ ! -d "$core_pkg" ] || [ ! -d "$cec_path" ]; then
    return
  fi

  log "Configuring dev comfygit-core local overlay"
  mkdir -p "$(dirname "$overlay_path")"
  python3 - "$overlay_path" "$core_pkg" <<'PY'
import json
import sys
from pathlib import Path

overlay_path = Path(sys.argv[1])
core_path = sys.argv[2]
source_line = f"comfygit-core = {{ path = {json.dumps(core_path)}, editable = true }}"

if overlay_path.exists():
    lines = overlay_path.read_text(encoding="utf-8").splitlines()
else:
    lines = [
        "[overlay]",
        'description = "Local development sources"',
        'kind = "local"',
        "",
    ]

result = []
in_sources = False
sources_found = False
inserted = False

for line in lines:
    stripped = line.strip()
    is_section = stripped.startswith("[") and stripped.endswith("]")

    if is_section:
        if in_sources and not inserted:
            result.append(source_line)
            inserted = True
        in_sources = stripped == "[sources]"
        sources_found = sources_found or in_sources
        result.append(line)
        continue

    if in_sources and stripped.startswith("comfygit-core"):
        continue

    result.append(line)

if sources_found:
    if in_sources and not inserted:
        result.append(source_line)
else:
    if result and result[-1].strip():
        result.append("")
    result.extend(["[sources]", source_line])

overlay_path.write_text("\n".join(result).rstrip() + "\n", encoding="utf-8")
PY

  touch "$gitignore_path"
  grep -qxF 'overlays/.*' "$gitignore_path" || printf '\n# Local overlays and activation (machine-specific)\noverlays/.*\n' >> "$gitignore_path"
  grep -qxF '.overlay-config.toml' "$gitignore_path" || printf '.overlay-config.toml\n' >> "$gitignore_path"
}

tracked_node_source() {
  local node_name="$1"
  local pyproject_path="$WORKSPACE/environments/$ENV_NAME/.cec/pyproject.toml"

  python3 - "$pyproject_path" "$node_name" <<'PY'
import sys
import tomllib
from pathlib import Path

pyproject = Path(sys.argv[1])
node_name = sys.argv[2]
if not pyproject.exists():
    sys.exit(0)

data = tomllib.loads(pyproject.read_text())
nodes = data.get("tool", {}).get("comfygit", {}).get("nodes", {})
node = nodes.get(node_name)
if node and "source" in node:
    print(node["source"])
PY
}

attach_dev_node() {
  local source_path="$1"
  local node_name
  local custom_nodes_dir
  local target_path
  local existing_source

  node_name="$(basename "$source_path")"
  custom_nodes_dir="$WORKSPACE/environments/$ENV_NAME/ComfyUI/custom_nodes"
  target_path="$custom_nodes_dir/$node_name"

  mkdir -p "$custom_nodes_dir"

  if [ -L "$target_path" ]; then
    if [ "$(readlink -f "$target_path")" != "$(readlink -f "$source_path")" ]; then
      rm -f "$target_path"
      ln -s "$source_path" "$target_path"
    fi
  elif [ -e "$target_path" ]; then
    rm -rf "$target_path"
    ln -s "$source_path" "$target_path"
  else
    ln -s "$source_path" "$target_path"
  fi

  existing_source="$(tracked_node_source "$node_name" || true)"
  if [ -n "$existing_source" ] && [ "$existing_source" != "development" ]; then
    log "Replacing tracked node '$node_name' source '$existing_source' with development tracking"
    cg -e "$ENV_NAME" node remove "$node_name" --untrack || true
  fi

  if ! cg -e "$ENV_NAME" node add "$node_name" --dev --no-test; then
    log "Failed to track development node: $node_name"
    exit 1
  fi
}

mark_safe_directory() {
  local path="$1"
  if [ -d "$path/.git" ]; then
    git config --global --add safe.directory "$path" || true
  fi
}

log "Project root: $PROJECT_ROOT"
log "Workspace: $WORKSPACE"
log "Environment: $ENV_NAME"

mkdir -p "$WORKSPACE"

configure_git_identity
mark_safe_directory "$COMFYGIT_MANAGER_DEV_PATH"
mark_safe_directory "$COMFYGIT_DEV_REPO_PATH"

if [ -n "$EXTRA_DEV_NODE_PATHS" ]; then
  IFS=: read -r -a EXTRA_DEV_NODE_PATHS_ARRAY <<<"$EXTRA_DEV_NODE_PATHS"
  for source_path in "${EXTRA_DEV_NODE_PATHS_ARRAY[@]}"; do
    mark_safe_directory "$source_path"
  done
fi

install_dev_comfygit

if [ ! -f "$WORKSPACE/.metadata/workspace.json" ]; then
  log "Initializing ComfyGit workspace"
  cg init "$WORKSPACE" --models-dir "$MODELS_DIR" --yes
fi

if [ ! -d "$WORKSPACE/environments/$ENV_NAME" ]; then
  log "Creating ComfyGit environment"
  if [ -n "$COMFYGIT_CREATE_ARGS" ]; then
    read -r -a COMFYGIT_CREATE_ARGS_ARRAY <<<"$COMFYGIT_CREATE_ARGS"
  fi
  cg create "$ENV_NAME" --yes --torch-backend "$TORCH_BACKEND" "${COMFYGIT_CREATE_ARGS_ARRAY[@]}"
else
  log "ComfyGit environment already exists, skipping create"
fi

if [ -d "$WORKSPACE/environments/$ENV_NAME/.cec/.git" ]; then
  git config --global --add safe.directory "$WORKSPACE/environments/$ENV_NAME/.cec" || true
fi

configure_dev_core_overlay

if [ -d "$COMFYGIT_MANAGER_DEV_PATH" ]; then
  log "Attaching dev comfygit-manager node"
  attach_dev_node "$COMFYGIT_MANAGER_DEV_PATH"
else
  log "Manager dev repo does not exist: $COMFYGIT_MANAGER_DEV_PATH"
  exit 1
fi

if [ -n "$EXTRA_DEV_NODE_PATHS" ]; then
  if [ "${#EXTRA_DEV_NODE_PATHS_ARRAY[@]}" -eq 0 ]; then
    IFS=: read -r -a EXTRA_DEV_NODE_PATHS_ARRAY <<<"$EXTRA_DEV_NODE_PATHS"
  fi
  for source_path in "${EXTRA_DEV_NODE_PATHS_ARRAY[@]}"; do
    if [ -d "$source_path" ]; then
      log "Attaching extra dev node: $(basename "$source_path")"
      attach_dev_node "$source_path"
    else
      log "Skipping missing extra dev node path: $source_path"
    fi
  done
fi

log "Starting ComfyUI on port $COMFYUI_PORT"
log "ComfyGit run will perform a preserve-workflows sync before launch"
log "Applying local development overlay during run sync"
if [ -n "$COMFYUI_EXTRA_ARGS" ]; then
  read -r -a COMFYUI_ARGS <<<"$COMFYUI_EXTRA_ARGS"
fi

exec cg -e "$ENV_NAME" run --listen 0.0.0.0 --port "$COMFYUI_PORT" --torch-backend "$TORCH_BACKEND" --overlay .local "${COMFYUI_ARGS[@]}"
