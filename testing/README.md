# ComfyGit Manager tests

Run backend checks from the repository root with the published, exact Core and
Studio pins in `pyproject.toml` and the frozen root lockfile:

```bash
uv sync --frozen
uv run --frozen ruff check .
uv run --frozen python scripts/sync-requirements.py --check
uv run --frozen pytest testing/unit testing/integration/panel -q
```

`testing/unit` covers orchestrator, context, readiness, and API helpers.
`testing/integration/panel` runs the registered aiohttp routes with controlled
Core fixtures. These protect HTTP contracts without starting a live ComfyUI or
using a GPU. They do not prove a real ComfyUI environment loads the extension.

The remaining `testing/integration` tests cover subprocess/bootstrap/restart
behavior. Run them separately in an isolated development environment; inspect
individual prerequisites first. `e2e/` contains the browser harness requiring a
running test ComfyUI. Neither replaces the fast CI checks above.

For unpublished Core/Studio work, opt in explicitly:

```bash
./scripts/test-local-core testing/unit testing/integration/panel -q
```

The helper defaults to sibling `../comfygit/packages/core` and
`../comfygit/packages/studio-runtime`. Override `COMFYGIT_CORE_PATH` and
`COMFYGIT_STUDIO_PATH` for another checkout. It supplies both as uv editable
overlays, without changing release pins or lockfiles. Ordinary runs in `testing/`
use its frozen published pins; no sibling checkout is required.

Frontend development requires Node 22.12 or newer:

```bash
cd frontend
npm ci
npm audit --audit-level=moderate
npm run test:run
npm run build
../scripts/check-frontend-version.sh
```

Commit regenerated `js/comfygit-panel.js` and CSS with frontend/version changes.
CI rebuilds and checks for a clean generated diff. Keep the npm lockfile current;
the obsolete frontend Bun lockfile is no longer maintained. Root Playwright
tooling is separate.

For a targeted regression, pass a test file or `-k expression` to pytest. Use
`--cov=server --cov-report=html` for local coverage. Avoid hardcoded test counts in
docs; `uv run --frozen pytest testing/unit testing/integration/panel --collect-only -q`
shows the current inventory.
