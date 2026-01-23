/**
 * Playwright Global Teardown
 *
 * Runs once after all tests to:
 * 1. Read PID from file
 * 2. Kill process group (handles child processes)
 * 3. Wait for clean exit
 * 4. Reset git state for next run
 */
import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const E2E_ROOT = path.dirname(__filename);
const FIXTURE_PATH = path.join(E2E_ROOT, 'fixtures', 'basic');
const PID_FILE = path.join(E2E_ROOT, '.comfyui-pid');
const SHUTDOWN_TIMEOUT_MS = 10_000;
const POLL_INTERVAL_MS = 500;

async function globalTeardown() {
  console.log('\n=== E2E Global Teardown ===\n');

  // 1. Read PID and kill process
  await killComfyUI();

  // 2. Reset git state for next run
  resetGitState();

  // 3. Clean up PID file
  if (fs.existsSync(PID_FILE)) {
    fs.unlinkSync(PID_FILE);
  }

  console.log('\n=== Teardown Complete ===\n');
}

async function killComfyUI(): Promise<void> {
  console.log('Stopping ComfyUI...');

  if (!fs.existsSync(PID_FILE)) {
    console.log('  No PID file found, nothing to stop');
    return;
  }

  const pid = parseInt(fs.readFileSync(PID_FILE, 'utf-8').trim());

  if (isNaN(pid)) {
    console.log('  Invalid PID in file, skipping');
    return;
  }

  console.log(`  Killing process group for PID ${pid}`);

  try {
    // Kill the entire process group (negative PID)
    // This handles child processes spawned by cg run
    process.kill(-pid, 'SIGTERM');
  } catch (error) {
    const e = error as NodeJS.ErrnoException;
    if (e.code === 'ESRCH') {
      console.log('  Process already exited');
      return;
    }
    // Try killing just the process if group kill fails
    try {
      process.kill(pid, 'SIGTERM');
    } catch {
      console.log('  Process not found');
      return;
    }
  }

  // Wait for process to exit
  const startTime = Date.now();
  while (Date.now() - startTime < SHUTDOWN_TIMEOUT_MS) {
    try {
      // Check if process exists (signal 0 doesn't kill, just checks)
      process.kill(pid, 0);
      await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL_MS));
    } catch {
      // Process no longer exists
      console.log('  Process stopped');
      return;
    }
  }

  // Force kill if still running
  console.log('  Process did not exit gracefully, sending SIGKILL');
  try {
    process.kill(-pid, 'SIGKILL');
  } catch {
    try {
      process.kill(pid, 'SIGKILL');
    } catch {
      // Process already gone
    }
  }
}

function resetGitState(): void {
  console.log('Resetting git state...');

  if (!fs.existsSync(FIXTURE_PATH)) {
    console.log('  Fixture not found, skipping git reset');
    return;
  }

  try {
    // Clean up any uncommitted changes
    execSync('git checkout -- .', { cwd: FIXTURE_PATH, stdio: 'pipe' });
    // Remove untracked files
    execSync('git clean -fd', { cwd: FIXTURE_PATH, stdio: 'pipe' });
    // Reset to main branch
    execSync('git checkout master 2>/dev/null || git checkout main', {
      cwd: FIXTURE_PATH,
      stdio: 'pipe',
      shell: true,
    });
    console.log('  Git state reset');
  } catch (error) {
    console.warn('  Warning: Could not fully reset git state:', error);
  }
}

export default globalTeardown;
