/**
 * Playwright Global Setup
 *
 * Runs once before all tests to:
 * 1. Verify fixture exists
 * 2. Reset git state for test isolation
 * 3. Start ComfyUI via cg run
 * 4. Wait for server to be ready
 * 5. Store PID for teardown
 */
import { spawn, execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const E2E_ROOT = path.dirname(__filename);
const FIXTURE_PATH = path.join(E2E_ROOT, 'fixtures', 'basic');
const PID_FILE = path.join(E2E_ROOT, '.comfyui-pid');
const COMFYUI_URL = 'http://localhost:8188';
const STARTUP_TIMEOUT_MS = 120_000;
const POLL_INTERVAL_MS = 1000;

async function globalSetup() {
  console.log('\n=== E2E Global Setup ===\n');

  // 1. Verify fixture exists
  verifyFixture();

  // 2. Reset git state for isolation
  resetGitState();

  // 3. Start ComfyUI
  const pid = await startComfyUI();

  // 4. Wait for server ready
  await waitForServerReady();

  // 5. Store PID
  fs.writeFileSync(PID_FILE, pid.toString());
  console.log(`\nComfyUI running with PID ${pid}, saved to ${PID_FILE}`);
  console.log('\n=== Setup Complete ===\n');
}

function verifyFixture() {
  console.log('Verifying fixture...');

  if (!fs.existsSync(FIXTURE_PATH)) {
    throw new Error(
      `Fixture not found at ${FIXTURE_PATH}\n` +
        'Run: ./e2e/scripts/setup-fixtures.sh'
    );
  }

  const envPath = path.join(FIXTURE_PATH, 'environments', 'default');
  if (!fs.existsSync(envPath)) {
    throw new Error(
      `Environment 'default' not found at ${envPath}\n` +
        'Run: ./e2e/scripts/setup-fixtures.sh --reset'
    );
  }

  console.log('  Fixture verified');
}

function resetGitState() {
  console.log('Resetting git state...');

  try {
    // Clean up any uncommitted changes
    execSync('git checkout -- .', { cwd: FIXTURE_PATH, stdio: 'pipe' });
    // Remove untracked files (but keep ignored ones)
    execSync('git clean -fd', { cwd: FIXTURE_PATH, stdio: 'pipe' });
    // Reset to main branch
    execSync('git checkout master 2>/dev/null || git checkout main', {
      cwd: FIXTURE_PATH,
      stdio: 'pipe',
      shell: true,
    });
    console.log('  Git state reset to clean');
  } catch (error) {
    console.warn('  Warning: Could not fully reset git state:', error);
  }
}

async function startComfyUI(): Promise<number> {
  console.log('Starting ComfyUI...');

  // Check if already running
  try {
    const response = await fetch(`${COMFYUI_URL}/api/system_stats`);
    if (response.ok) {
      console.log('  ComfyUI already running - checking for stale PID file');
      if (fs.existsSync(PID_FILE)) {
        const existingPid = parseInt(fs.readFileSync(PID_FILE, 'utf-8').trim());
        console.log(`  Using existing process (PID ${existingPid})`);
        return existingPid;
      }
      throw new Error(
        'ComfyUI already running but no PID file found. Kill existing process first.'
      );
    }
  } catch {
    // Not running, proceed with startup
  }

  // Start via cg run with --no-sync flag and --cpu to avoid CUDA issues
  // Note: -e flag must come before the subcommand
  const proc = spawn('cg', ['-e', 'default', 'run', '--no-sync', '--cpu'], {
    cwd: FIXTURE_PATH,
    env: {
      ...process.env,
      COMFYGIT_HOME: FIXTURE_PATH,
      // Disable CUDA to avoid driver version mismatches in test fixtures
      CUDA_VISIBLE_DEVICES: '',
    },
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: true, // Run in own process group for clean teardown
  });

  // Unref to allow setup to exit while ComfyUI keeps running
  proc.unref();

  // Log output for debugging
  proc.stdout?.on('data', (data) => {
    const line = data.toString().trim();
    if (line) console.log(`  [ComfyUI] ${line}`);
  });

  proc.stderr?.on('data', (data) => {
    const line = data.toString().trim();
    if (line) console.error(`  [ComfyUI ERROR] ${line}`);
  });

  proc.on('error', (err) => {
    throw new Error(`Failed to start ComfyUI: ${err.message}`);
  });

  if (!proc.pid) {
    throw new Error('Failed to get ComfyUI process PID');
  }

  console.log(`  Started with PID ${proc.pid}`);
  return proc.pid;
}

async function waitForServerReady(): Promise<void> {
  console.log('Waiting for server...');

  const startTime = Date.now();
  let lastError: Error | null = null;

  while (Date.now() - startTime < STARTUP_TIMEOUT_MS) {
    try {
      const response = await fetch(`${COMFYUI_URL}/api/system_stats`);
      if (response.ok) {
        const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
        console.log(`  Server ready in ${elapsed}s`);
        return;
      }
    } catch (error) {
      lastError = error as Error;
    }

    await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL_MS));
  }

  throw new Error(
    `ComfyUI failed to start within ${STARTUP_TIMEOUT_MS / 1000}s. ` +
      `Last error: ${lastError?.message || 'unknown'}`
  );
}

export default globalSetup;
