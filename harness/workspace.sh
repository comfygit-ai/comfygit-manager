#!/bin/bash

set -euo pipefail

harness_workspace_root() {
    echo "${HARNESS_WORKSPACE_ROOT:-${PWD}/.harness/workspaces}"
}

harness_template_root() {
    echo "${HARNESS_TEMPLATE_ROOT:-${PWD}/.harness/templates}"
}

create_workspace() {
    local template_name=${1:-}
    local test_name=${2:-}

    if [ -z "$template_name" ] || [ -z "$test_name" ]; then
        echo "Usage: create_workspace <template_name> <test_name>" >&2
        return 1
    fi

    local template_root
    template_root=$(harness_template_root)
    local workspace_root
    workspace_root=$(harness_workspace_root)
    local template_path="${template_root}/${template_name}"
    local workspace_path="${workspace_root}/${test_name}"

    if [ ! -d "$template_path" ]; then
        echo "Template not found: ${template_path}" >&2
        return 1
    fi

    if [ -e "$workspace_path" ]; then
        echo "Workspace already exists: ${workspace_path}" >&2
        return 1
    fi

    mkdir -p "$workspace_root"
    cp -a "$template_path" "$workspace_path"

    echo "$workspace_path"
}

destroy_workspace() {
    local workspace_path=${1:-}

    if [ -z "$workspace_path" ]; then
        echo "Usage: destroy_workspace <workspace_path>" >&2
        return 1
    fi

    local workspace_root
    workspace_root=$(harness_workspace_root)

    case "$workspace_path" in
        "$workspace_root"/*)
            rm -rf "$workspace_path"
            ;;
        *)
            echo "Refusing to delete outside ${workspace_root}" >&2
            return 1
            ;;
    esac
}

list_workspaces() {
    local workspace_root
    workspace_root=$(harness_workspace_root)

    if [ ! -d "$workspace_root" ]; then
        return 0
    fi

    find "$workspace_root" -mindepth 1 -maxdepth 1 -type d -printf '%f\n' | sort
}
