# Scripts

This repo owns the local development flow for running `comfygit-manager` inside
a Dockerized ComfyGit/ComfyUI environment.

## Recommended dev container flow

From the repo root:

```bash
./scripts/setup-dev-env comfygit-cloud-test1 \
  --workspace /home/akatzfey/dev/projects/comfyui-agent-api/.comfygit-workspace \
  --docker \
  --models-dir ~/dev/models \
  --comfyui-port 8189 \
  --torch-backend cu126
```

For a fresh environment name, the Docker entrypoint creates the environment. If
the environment already exists in the workspace, it reuses it.

The dev stack:

- mounts this `comfygit-manager` repo into the container
- mounts the sibling `comfygit` repo and installs its core, Studio runtime, and
  CLI packages editable
- mounts the host models directory into the container, defaulting to
  `~/dev/models -> /data/models`
- passes the host Git author name/email into the container so environment
  commits work without manually running `git config` inside Docker
- mounts the host `~/.git-credentials` file read-only when present, so HTTPS
  GitHub remotes can reuse the host credential-store token
- forwards the host SSH agent when `SSH_AUTH_SOCK` is available, so private
  GitHub remotes work with SSH URLs without copying private keys into Docker
- symlinks this manager repo into `ComfyUI/custom_nodes`
- tracks `comfygit-manager` as a development node
- writes the local editable core and Studio runtime paths to
  `.cec/overlays/.local.toml`
- starts ComfyUI with `--overlay .local` so the environment venv uses the
  mounted editable `comfygit-core` and `comfygit-studio` packages during run
  sync
- runs `cg -e <env> run` with GPU passthrough from Docker Compose

Local editable package paths should live in `.cec/overlays/.local.toml`, not in
tracked `pyproject.toml` and not as direct `uv pip install -e` mutations inside
the environment venv. `cg sync` and `cg run` own the venv.

## Main scripts

### `setup-dev-env`

Configures an existing managed ComfyGit environment for manager development.

Without `--docker`, it only mutates the selected local workspace environment:

```bash
./scripts/setup-dev-env --workspace ~/comfygit my-env
```

With `--docker`, it also starts or recreates the manager-owned Docker dev stack:

```bash
./scripts/setup-dev-env my-env --docker --comfyui-port 8189
```

Useful options:

- `--workspace PATH`: ComfyGit workspace to use.
- `--comfygit PATH`: local `comfygit` repo to mount/use.
- `--models-dir PATH`: host models directory to mount at `/data/models`.
- `--torch-backend B`: backend for `cg create` and `cg run`, for example `cu126`.
- `--extra-node PATH`: mount and track another local custom node repo.
- `--ssh-agent PATH`: host SSH agent socket to forward. Defaults to
  `$SSH_AUTH_SOCK`.
- `--no-ssh-agent`: disable SSH agent forwarding.
- `--git-credentials PATH`: host git credential-store file to mount read-only.
  Defaults to `~/.git-credentials`.
- `--no-git-credentials`: disable host HTTPS git credential mounting.
- `--no-build`: recreate the container without rebuilding the image.

## GitHub remotes from the dev container

The dev container supports two host-backed GitHub auth paths.

HTTPS remotes work when the host has a credential-store token in
`~/.git-credentials`, which is the default for `gh auth setup-git` or
`git config --global credential.helper store` setups:

```bash
git remote set-url origin https://github.com/OWNER/REPO.git
```

SSH remotes work when the forwarded host SSH agent has a GitHub-authorized key:

```bash
git remote set-url origin git@github.com:OWNER/REPO.git
```

The wrapper forwards the host SSH agent only when the shell that starts the
container has `SSH_AUTH_SOCK` set and the agent has a key loaded. Check the host
with:

```bash
ssh-add -l
```

If the script prints `SSH agent: disabled`, start or attach an agent in that
shell first, then recreate the container. The container bootstraps
`github.com` into `known_hosts` automatically.

### `start-dev-container`

Lower-level Docker wrapper used by `setup-dev-env --docker`.

Use this directly when the environment already has the local overlay/symlink
state you want and you only need to manage the container:

```bash
./scripts/start-dev-container my-env --comfyui-port 8189 --no-build
```

### `install-hooks.sh`

Installs repo git hooks and the local clean filter for stripping local uv source
sections from committed `pyproject.toml` files.

### `strip-dev-sources.py`

Helper used by hooks/filtering to avoid committing machine-local uv source
overrides.

### `test-local-core`

Runs backend tests through the repo-local testing project against local editable
`comfygit-core` and `comfygit-studio` checkouts without changing the tracked
Manager `pyproject.toml` dependency pins:

```bash
./scripts/test-local-core
./scripts/test-local-core testing/unit/test_readiness.py -q
```

By default it uses the sibling checkout at `../comfygit`. Set
`COMFYGIT_CORE_PATH=/path/to/comfygit/packages/core` and
`COMFYGIT_STUDIO_PATH=/path/to/comfygit/packages/studio-runtime` for different
local package paths.

## Legacy and specialized helpers

These scripts predate the manager-owned Docker dev stack and are still useful
for narrower workflows:

- `comfygit-worktree.sh`: creates a manager git worktree paired with a ComfyGit
  environment.
- `sync-requirements.py`: syncs dependency metadata from project files.
- `check-frontend-version.sh`: checks bundled frontend/version state.

Prefer `setup-dev-env --docker` for normal manager development.
