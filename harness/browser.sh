#!/bin/bash

set -euo pipefail

harness_browser_root() {
    echo "${HARNESS_BROWSER_ROOT:-${PWD}/.harness/browser}"
}

create_browser_session() {
    local test_name=${1:-}
    local port=${2:-}

    if [ -z "$test_name" ] || [ -z "$port" ]; then
        echo "Usage: create_browser_session <test_name> <port>" >&2
        return 1
    fi

    local browser_root
    browser_root=$(harness_browser_root)
    mkdir -p "$browser_root"

    local session_dir
    session_dir=$(mktemp -d "${browser_root}/${test_name}-XXXXXX")
    local session_name
    session_name=$(basename "$session_dir")

    local session_file="$session_dir/session.json"
    local created_at
    created_at=$(date -u +%Y-%m-%dT%H:%M:%SZ)

    cat >"$session_file" <<EOF
{"name":"$session_name","test_name":"$test_name","port":$port,"url":"http://127.0.0.1:$port","created_at":"$created_at"}
EOF

    echo "$session_name"
}

close_browser_session() {
    local session_name=${1:-}

    if [ -z "$session_name" ]; then
        echo "Usage: close_browser_session <session_name>" >&2
        return 1
    fi

    local browser_root
    browser_root=$(harness_browser_root)
    local session_dir="$browser_root/$session_name"

    case "$session_dir" in
        "$browser_root"/*)
            rm -rf "$session_dir"
            ;;
        *)
            echo "Refusing to delete outside ${browser_root}" >&2
            return 1
            ;;
    esac
}

get_snapshot() {
    local session_name=${1:-}

    if [ -z "$session_name" ]; then
        echo "Usage: get_snapshot <session_name>" >&2
        return 1
    fi

    local browser_root
    browser_root=$(harness_browser_root)
    local session_dir="$browser_root/$session_name"
    local session_file="$session_dir/session.json"

    if [ ! -f "$session_file" ]; then
        echo "Session not found: $session_name" >&2
        return 1
    fi

    local url
    url=$(python3 - "$session_file" <<'PY'
import json
import sys

with open(sys.argv[1], "r", encoding="utf-8") as handle:
    data = json.load(handle)

print(data["url"])
PY
)

    local snapshots_dir="$session_dir/snapshots"
    mkdir -p "$snapshots_dir"
    local snapshot_path="$snapshots_dir/$(date +%s%3N).html"

    python3 - "$url" "$snapshot_path" <<'PY'
import sys
import urllib.request

url = sys.argv[1]
output_path = sys.argv[2]

with urllib.request.urlopen(url, timeout=5) as response:
    data = response.read()

with open(output_path, "wb") as handle:
    handle.write(data)
PY

    echo "$snapshot_path"
}
