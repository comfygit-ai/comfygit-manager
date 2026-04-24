# ComfyGit Manager Docker Dev Stack

This directory owns the local Docker stack for developing `comfygit-manager`
inside a managed ComfyGit/ComfyUI environment.

Use the repo-level wrapper instead of calling Docker Compose directly:

```bash
./scripts/setup-dev-env comfygit-cloud-test1 \
  --workspace /home/akatzfey/dev/projects/comfyui-agent-api/.comfygit-workspace \
  --docker \
  --comfyui-port 8189 \
  --torch-backend cu126
```

or:

```bash
./scripts/start-dev-container comfygit-cloud-test1 --comfyui-port 8189
```

The container:

- mounts the local `comfygit-manager` repo as the active custom node
- mounts the local `comfygit` repo and installs its core/CLI packages editable
- creates the ComfyGit workspace/environment when missing
- configures `comfygit-core` through `.cec/overlays/.local.toml`
- runs `cg -e <env> run` with GPU passthrough enabled by Compose

Local editable package paths belong in `.cec/overlays/.local.toml`, not in the
tracked environment manifest and not through direct `uv pip install -e` venv
mutation. `cg sync` and `cg run` own the environment venv.
