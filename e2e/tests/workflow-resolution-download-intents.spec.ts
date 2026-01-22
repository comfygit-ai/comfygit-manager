/**
 * E2E Test: Workflow Resolution - Download Intents Only
 *
 * Tests the UX flow where workflows with only download intents
 * skip the Models step and show accurate counts in Review.
 *
 * Scenario: A workflow has models that are resolved via download intents
 * (they exist in pyproject.toml with download sources but aren't downloaded yet).
 * No unresolved/ambiguous nodes or models exist, so no user input is needed.
 *
 * IMPORTANT: Backend returns TWO match types for download intents:
 *   - 'download_intent': from pyproject.toml model entries
 *   - 'property_download_intent': from workflow node properties (embedded URLs)
 * This test covers BOTH types to prevent regression.
 *
 * Expected flow:
 * 1. Analysis step shows "X pending download" count
 * 2. Clicking Continue skips Models step (goes directly to Review)
 * 3. Review step shows "X to download" count
 * 4. "Models to Download" section shows download details
 */

import { test, expect } from '@playwright/test';
import type { Page, Route } from '@playwright/test';

// Mock data for a download-intent-only workflow
const MOCK_WORKFLOW_NAME = 'test-download-intents.json';

const MOCK_WORKFLOWS_RESPONSE = {
  workflows: [
    {
      name: MOCK_WORKFLOW_NAME,
      status: 'broken',
      missing_nodes: 0,
      missing_models: 0, // Not "missing" - they have download intents
      node_count: 5,
      model_count: 2,
      sync_state: 'synced',
      has_download_intents: true
    }
  ]
};

// Mock analyze response with download intents only (no unresolved/ambiguous items)
const MOCK_ANALYZE_RESPONSE = {
  workflow: MOCK_WORKFLOW_NAME,
  nodes: {
    resolved: [
      {
        reference: { node_type: 'KSampler', workflow: MOCK_WORKFLOW_NAME },
        package: { package_id: 'comfyui-core', title: 'ComfyUI Core' },
        match_confidence: 1.0,
        match_type: 'builtin',
        is_installed: true
      },
      {
        reference: { node_type: 'CheckpointLoaderSimple', workflow: MOCK_WORKFLOW_NAME },
        package: { package_id: 'comfyui-core', title: 'ComfyUI Core' },
        match_confidence: 1.0,
        match_type: 'builtin',
        is_installed: true
      }
    ],
    unresolved: [],
    ambiguous: []
  },
  models: {
    resolved: [
      // Model 1: Already downloaded and resolved
      {
        reference: {
          workflow: MOCK_WORKFLOW_NAME,
          node_id: '1',
          node_type: 'CheckpointLoaderSimple',
          widget_name: 'ckpt_name',
          widget_value: 'flux1-dev.safetensors'
        },
        model: {
          filename: 'flux1-dev.safetensors',
          hash: 'abc123def456',
          size: 11725000000,
          category: 'checkpoints',
          relative_path: 'checkpoints/flux1-dev.safetensors'
        },
        match_confidence: 1.0,
        match_type: 'exact',
        has_category_mismatch: false
      },
      // Model 2: Download intent from pyproject.toml (queued but not downloaded yet)
      {
        reference: {
          workflow: MOCK_WORKFLOW_NAME,
          node_id: '2',
          node_type: 'VAELoader',
          widget_name: 'vae_name',
          widget_value: 'ae.safetensors'
        },
        model: {
          filename: 'ae.safetensors',
          hash: 'pending_download',
          size: 335000000,
          category: 'vae',
          relative_path: 'vae/ae.safetensors'
        },
        match_confidence: 1.0,
        match_type: 'download_intent',
        download_source: 'https://huggingface.co/black-forest-labs/FLUX.1-dev/resolve/main/ae.safetensors',
        target_path: 'vae/ae.safetensors'
      },
      // Model 3: Property download intent from workflow node properties (embedded URL)
      // Tests that frontend handles BOTH match types: 'download_intent' and 'property_download_intent'
      {
        reference: {
          workflow: MOCK_WORKFLOW_NAME,
          node_id: '3',
          node_type: 'LoraLoader',
          widget_name: 'lora_name',
          widget_value: 'detail-enhancer.safetensors'
        },
        model: {
          filename: 'detail-enhancer.safetensors',
          hash: 'pending_download_2',
          size: 150000000,
          category: 'loras',
          relative_path: 'loras/detail-enhancer.safetensors'
        },
        match_confidence: 1.0,
        match_type: 'property_download_intent',
        download_source: 'https://civitai.com/api/download/models/123456',
        target_path: 'loras/detail-enhancer.safetensors'
      }
    ],
    unresolved: [],
    ambiguous: []
  },
  stats: {
    total_nodes: 5,
    total_models: 3,
    download_intents: 2, // 2 models pending download
    nodes_needing_installation: 0,
    packages_needing_installation: 0,
    needs_user_input: false, // Key: no user input needed
    is_fully_resolved: true,
    models_with_category_mismatch: 0
  }
};

/**
 * Helper to set up API route interception for the test
 */
async function setupApiMocks(page: Page) {
  // Intercept status endpoint to show we're in a managed environment
  await page.route('**/v2/setup/status', async (route: Route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        state: 'managed',
        has_comfyui_manager: false
      })
    });
  });

  // Intercept status endpoint for git/workflow status
  await page.route('**/v2/comfygit/status', async (route: Route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        environment: 'default',
        branch: 'main',
        is_detached_head: false,
        is_synced: true,
        has_changes: false,
        workflows: {
          new: [],
          modified: [],
          deleted: [],
          synced: [MOCK_WORKFLOW_NAME],
          total: 1,
          analyzed: [{
            name: MOCK_WORKFLOW_NAME,
            sync_state: 'synced',
            status: 'broken',
            has_issues: true,
            has_path_sync_issues: false,
            uninstalled_nodes: 0,
            unresolved_nodes_count: 0,
            unresolved_models_count: 0,
            ambiguous_models_count: 0,
            ambiguous_nodes_count: 0,
            models_needing_path_sync_count: 0,
            pending_downloads_count: 2,
            issue_summary: '2 models pending download',
            node_count: 5,
            model_count: 3,
            has_category_mismatch_issues: false,
            models_with_category_mismatch_count: 0
          }]
        },
        git_changes: {
          nodes_added: [],
          nodes_removed: [],
          workflow_changes: false,
          workflow_changes_detail: {},
          has_other_changes: false
        },
        comparison: {
          is_synced: true,
          missing_nodes: [],
          extra_nodes: [],
          disabled_nodes: [],
          version_mismatches: [],
          packages_in_sync: true
        },
        missing_models_count: 0,
        has_legacy_manager: false
      })
    });
  });

  // Intercept workflows list endpoint
  await page.route('**/v2/comfygit/workflows', async (route: Route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(MOCK_WORKFLOWS_RESPONSE)
    });
  });

  // Intercept analyze workflow endpoint
  await page.route(`**/v2/comfygit/workflow/${MOCK_WORKFLOW_NAME}/analyze`, async (route: Route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(MOCK_ANALYZE_RESPONSE)
    });
  });
}

test.describe('Workflow Resolution - Download Intents Only', () => {
  test.beforeEach(async ({ page }) => {
    await setupApiMocks(page);
  });

  test('skips Models step and shows correct download counts', async ({ page }) => {
    // Navigate to ComfyUI
    await page.goto('/');

    // Wait for the page to load and ComfyGit button to appear
    await page.waitForSelector('.comfygit-panel-btn', { timeout: 30000 });

    // Click the ComfyGit button to open the panel
    await page.click('.comfygit-panel-btn');

    // Wait for the panel to open
    await page.waitForSelector('.comfygit-panel-overlay', { timeout: 5000 });

    // Navigate to Workflows section (click on tab if needed)
    const workflowsTab = page.locator('text=Workflows').first();
    if (await workflowsTab.isVisible()) {
      await workflowsTab.click();
    }

    // Wait for workflow list to load and find the "Resolve" button
    await page.waitForSelector('text=Resolve', { timeout: 10000 });

    // Click "Resolve" button on the broken workflow
    await page.click('text=Resolve');

    // Wait for the Workflow Resolve Modal to open and analysis to complete
    await page.waitForSelector('.wizard-content', { timeout: 10000 });

    // ========== STEP 1: Verify Analysis Step ==========

    // Verify we're on the Analysis step
    await expect(page.locator('text=Analysis Complete')).toBeVisible();

    // Verify the download intents count is shown in Models section
    // The Analysis step shows "X pending download" for download intents
    const pendingDownloadStat = page.locator('.stat-item.info').filter({ hasText: 'pending download' });
    await expect(pendingDownloadStat).toBeVisible();
    await expect(pendingDownloadStat.locator('.stat-count')).toHaveText('2');

    // Verify the status message indicates downloads pending
    const statusMessage = page.locator('.status-message.info');
    await expect(statusMessage).toBeVisible();
    await expect(statusMessage).toContainText('pending download');

    // ========== STEP 2: Click Continue and Verify Skip to Review ==========

    // Click the Continue button
    await page.click('button:has-text("Continue")');

    // Wait for step transition
    await page.waitForTimeout(300);

    // Verify we're now on the Review step (NOT the Models step)
    // The Review step has "Review Your Choices" title
    await expect(page.locator('text=Review Your Choices')).toBeVisible({ timeout: 5000 });

    // ========== STEP 3: Verify Review Shows Correct Download Count ==========

    // The review-stats section shows counts for install, download, optional, skipped
    const downloadStatValue = page.locator('.review-stat').filter({ hasText: 'to download' }).locator('.stat-value');
    await expect(downloadStatValue).toHaveText('2');

    // ========== STEP 4: Verify "Models to Download" Section ==========

    // Verify the "Models to Download" section header exists
    const downloadSection = page.locator('.review-section').filter({ hasText: 'Models to Download' });
    await expect(downloadSection).toBeVisible();

    // Verify it shows "(2)" count
    await expect(downloadSection.locator('.section-title')).toContainText('(2)');

    // Verify download details are shown for each model
    const downloadItems = downloadSection.locator('.review-item');
    await expect(downloadItems).toHaveCount(2);

    // Verify first download item shows filename
    const firstItem = downloadItems.first();
    await expect(firstItem.locator('.item-name')).toContainText('ae.safetensors');
    await expect(firstItem.locator('.download-path')).toContainText('vae/ae.safetensors');
    await expect(firstItem.locator('.choice-badge')).toContainText('Will Download');

    // Verify second download item
    const secondItem = downloadItems.nth(1);
    await expect(secondItem.locator('.item-name')).toContainText('detail-enhancer.safetensors');
    await expect(secondItem.locator('.download-path')).toContainText('loras/detail-enhancer.safetensors');
  });

  test('wizard stepper does not show Models step', async ({ page }) => {
    // Navigate and open the resolve modal
    await page.goto('/');
    await page.waitForSelector('.comfygit-panel-btn', { timeout: 30000 });
    await page.click('.comfygit-panel-btn');
    await page.waitForSelector('.comfygit-panel-overlay');

    const workflowsTab = page.locator('text=Workflows').first();
    if (await workflowsTab.isVisible()) {
      await workflowsTab.click();
    }

    await page.waitForSelector('text=Resolve', { timeout: 10000 });
    await page.click('text=Resolve');
    await page.waitForSelector('.wizard-content', { timeout: 10000 });

    // Verify wizard stepper shows Analysis and Review but NOT Models
    const stepper = page.locator('[class*="stepper"], [class*="step"]').first();

    // Analysis step should be visible
    await expect(page.locator('text=Analysis')).toBeVisible();

    // Review step should be visible
    await expect(page.locator('text=Review')).toBeVisible();

    // Models step should NOT be visible in the stepper
    // (There might be other "Models" text on the page, so be specific)
    const modelsStepInStepper = page.locator('.step, [class*="stepper-item"]').filter({ hasText: /^Models$/ });
    await expect(modelsStepInStepper).toHaveCount(0);
  });

  test('Analysis step shows correct message for download-intent-only', async ({ page }) => {
    // Navigate and open the resolve modal
    await page.goto('/');
    await page.waitForSelector('.comfygit-panel-btn', { timeout: 30000 });
    await page.click('.comfygit-panel-btn');
    await page.waitForSelector('.comfygit-panel-overlay');

    const workflowsTab = page.locator('text=Workflows').first();
    if (await workflowsTab.isVisible()) {
      await workflowsTab.click();
    }

    await page.waitForSelector('text=Resolve', { timeout: 10000 });
    await page.click('text=Resolve');
    await page.waitForSelector('.wizard-content', { timeout: 10000 });

    // Verify the info message specifically mentions clicking Continue to review
    const infoMessage = page.locator('.status-message.info');
    await expect(infoMessage).toContainText('pending download');
    await expect(infoMessage).toContainText('click Continue to review');
  });
});
