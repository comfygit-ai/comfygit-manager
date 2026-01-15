#!/bin/bash

set -euo pipefail

get_port() {
    local test_name=${1:-}

    if [ -z "$test_name" ]; then
        echo "Usage: get_port <test_name>" >&2
        return 1
    fi

    local hash
    hash=$(printf '%s' "$test_name" | cksum | awk '{print $1}')
    local port=$((8200 + hash % 100))

    echo "$port"
}

is_port_available() {
    local port=${1:-}

    if [ -z "$port" ]; then
        echo "Usage: is_port_available <port>" >&2
        return 1
    fi

    python3 - "$port" <<'PY'
import socket
import sys

port = int(sys.argv[1])
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    try:
        sock.bind(("127.0.0.1", port))
    except OSError:
        sys.exit(1)

sys.exit(0)
PY
}
