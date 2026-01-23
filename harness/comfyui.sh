#!/bin/bash

set -euo pipefail

_comfyui_resolve_dir() {
    local workspace_path=$1

    if [ -f "$workspace_path/ComfyUI/main.py" ]; then
        echo "$workspace_path/ComfyUI"
        return 0
    fi

    if [ -f "$workspace_path/main.py" ]; then
        echo "$workspace_path"
        return 0
    fi

    if [ -d "$workspace_path/environments" ]; then
        local env_dir
        env_dir=$(find "$workspace_path/environments" -mindepth 1 -maxdepth 1 -type d | head -n 1)
        if [ -n "$env_dir" ] && [ -f "$env_dir/ComfyUI/main.py" ]; then
            echo "$env_dir/ComfyUI"
            return 0
        fi
    fi

    echo "ComfyUI directory not found under $workspace_path" >&2
    return 1
}

_comfyui_resolve_python() {
    local workspace_path=$1
    local comfyui_dir=$2

    if [ -x "$comfyui_dir/.venv/bin/python" ]; then
        echo "$comfyui_dir/.venv/bin/python"
        return 0
    fi

    if [ -x "$workspace_path/.venv/bin/python" ]; then
        echo "$workspace_path/.venv/bin/python"
        return 0
    fi

    if [ -x "$comfyui_dir/../.venv/bin/python" ]; then
        echo "$comfyui_dir/../.venv/bin/python"
        return 0
    fi

    echo "python3"
}

start_comfyui() {
    local workspace_path=${1:-}
    local port=${2:-}

    if [ -z "$workspace_path" ] || [ -z "$port" ]; then
        echo "Usage: start_comfyui <workspace_path> <port>" >&2
        return 1
    fi

    local comfyui_dir
    comfyui_dir=$(_comfyui_resolve_dir "$workspace_path")
    local python_bin
    python_bin=$(_comfyui_resolve_python "$workspace_path" "$comfyui_dir")

    local log_dir="$workspace_path/.harness/logs"
    mkdir -p "$log_dir"
    local log_file="$log_dir/comfyui-${port}.log"

    (
        cd "$comfyui_dir"
        "$python_bin" "${comfyui_dir}/main.py" --port "$port" --listen 127.0.0.1 >"$log_file" 2>&1 &
        echo $!
    )
}

stop_comfyui() {
    local pid=${1:-}

    if [ -z "$pid" ]; then
        echo "Usage: stop_comfyui <pid>" >&2
        return 1
    fi

    if kill -0 "$pid" 2>/dev/null; then
        kill "$pid" 2>/dev/null || true
    fi

    local attempts=0
    while kill -0 "$pid" 2>/dev/null; do
        attempts=$((attempts + 1))
        if [ "$attempts" -ge 20 ]; then
            kill -9 "$pid" 2>/dev/null || true
            break
        fi
        sleep 0.1
    done
}

wait_comfyui() {
    local port=${1:-}
    local timeout_ms=${2:-}

    if [ -z "$port" ] || [ -z "$timeout_ms" ]; then
        echo "Usage: wait_comfyui <port> <timeout_ms>" >&2
        return 1
    fi

    local start_ms
    start_ms=$(date +%s%3N)

    while true; do
        if (echo > /dev/tcp/127.0.0.1/$port) >/dev/null 2>&1; then
            return 0
        fi

        local now_ms
        now_ms=$(date +%s%3N)
        if [ $((now_ms - start_ms)) -ge "$timeout_ms" ]; then
            return 1
        fi

        sleep 0.1
    done
}
