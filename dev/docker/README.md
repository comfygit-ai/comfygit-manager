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
- mounts the host `~/.git-credentials` file read-only when present, so HTTPS
  GitHub remotes can reuse the host credential-store token
- forwards the host SSH agent when `SSH_AUTH_SOCK` is available, so private
  GitHub remotes work through SSH without mounting private keys
- creates the ComfyGit workspace/environment when missing
- configures `comfygit-core` through `.cec/overlays/.local.toml`
- starts ComfyUI with `--overlay .local` so run sync uses the mounted editable
  core package instead of the packaged dependency
- runs `cg -e <env> run` with GPU passthrough enabled by Compose

Local editable package paths belong in `.cec/overlays/.local.toml`, not in the
tracked environment manifest and not through direct `uv pip install -e` venv
mutation. `cg sync` and `cg run` own the environment venv.

## GitHub remotes

HTTPS GitHub remotes work when the host has a credential-store token in
`~/.git-credentials`; the wrapper mounts that file read-only and configures Git
inside the container to read from it:

```bash
git remote set-url origin https://github.com/OWNER/REPO.git
```

SSH GitHub remotes work when the forwarded host SSH agent has a
GitHub-authorized key:

```bash
git remote set-url origin git@github.com:OWNER/REPO.git
```

The wrapper mounts the host SSH agent socket at `/ssh-agent` when the launching
shell has `SSH_AUTH_SOCK` set. No private key files are copied into the image or
mounted into the container. If the script reports SSH forwarding is disabled,
run `ssh-add -l` on the host shell and make sure an agent with a GitHub key is
available before recreating the container.
