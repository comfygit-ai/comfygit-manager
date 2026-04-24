# ComfyGit Manager Docker Dev Stack

This directory owns the local Docker stack for developing `comfygit-manager`
inside a managed ComfyGit/ComfyUI environment.

Use the repo-level wrapper instead of calling Docker Compose directly:

```bash
./scripts/setup-dev-env comfygit-cloud-test1 \
  --workspace /home/akatzfey/dev/projects/comfyui-agent-api/.comfygit-workspace \
  --docker \
  --models-dir ~/dev/models \
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
- mounts the host models directory into the container, defaulting to
  `~/dev/models -> /data/models`
- passes the host Git author name/email into the container so environment
  commits work without manually running `git config` inside Docker
- creates the ComfyGit workspace/environment when missing
- configures `comfygit-core` through `.cec/overlays/.local.toml`
- starts ComfyUI with `--overlay .local` so run sync uses the mounted editable
  core package instead of the packaged dependency
- runs `cg -e <env> run` with GPU passthrough enabled by Compose

Local editable package paths belong in `.cec/overlays/.local.toml`, not in the
tracked environment manifest and not through direct `uv pip install -e` venv
mutation. `cg sync` and `cg run` own the environment venv.
