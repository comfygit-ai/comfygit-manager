<template>
  <BaseModal
    v-if="visible"
    title="Missing Dependencies"
    size="md"
    :loading="loading"
    :error="error || undefined"
    @close="dismiss"
  >
    <template #body>
      <!-- Loading State -->
      <div v-if="loading" class="loading-state">
        <div class="loading-spinner"></div>
        <span>Analyzing workflow...</span>
      </div>

      <!-- Analysis Results -->
      <div v-else-if="analysis && hasIssues" class="analysis-results">
        <!-- Missing Nodes Section (Deduplicated Packages) -->
        <div v-if="missingPackages.length > 0" class="section">
          <div class="section-header">
            <span class="section-title">Missing Custom Nodes ({{ totalMissingNodeCount }})</span>
            <BaseButton
              v-if="missingPackages.length > 1"
              size="sm"
              variant="secondary"
              :disabled="allPackagesInstalled"
              @click="installAllNodes"
            >
              {{ allPackagesInstalled ? 'All Queued' : 'Install All' }}
            </BaseButton>
          </div>
          <div class="item-list">
            <div v-for="pkg in missingPackages.slice(0, 5)" :key="pkg.package_id" class="package-item">
              <div class="package-info">
                <span class="package-name">{{ pkg.title }}</span>
                <span class="node-count">({{ pkg.node_count }} {{ pkg.node_count === 1 ? 'node' : 'nodes' }})</span>
              </div>
              <!-- Install button: show when not installed, not queued, not failed -->
              <BaseButton
                v-if="!installedPackages.has(pkg.package_id) && !queuedPackages.has(pkg.package_id) && !failedPackages.has(pkg.package_id)"
                size="sm"
                variant="secondary"
                :disabled="installingPackage === pkg.package_id"
                @click="installPackage(pkg)"
              >
                {{ installingPackage === pkg.package_id ? 'Queueing...' : 'Install' }}
              </BaseButton>
              <!-- Installing: currently being processed by Manager -->
              <span v-else-if="installingPackage === pkg.package_id" class="installing-badge">Installing...</span>
              <!-- Queued: waiting in Manager queue -->
              <span v-else-if="queuedPackages.has(pkg.package_id)" class="queued-badge">Queued</span>
              <!-- Failed: installation failed with error -->
              <span
                v-else-if="failedPackages.has(pkg.package_id)"
                class="failed-badge"
                :title="failedPackages.get(pkg.package_id)"
              >Failed ⚠</span>
              <!-- Installed: successfully installed -->
              <span v-else class="installed-badge">Installed</span>
            </div>
            <div v-if="missingPackages.length > 5" class="overflow-note">
              ...and {{ missingPackages.length - 5 }} more packages
            </div>
          </div>
        </div>

        <!-- Unknown Nodes Section (Not in Registry) -->
        <div v-if="unresolvedNodes.length > 0" class="section">
          <div class="section-header">
            <span class="section-title">Unknown Nodes ({{ unresolvedNodes.length }})</span>
          </div>
          <div class="item-list">
            <div v-for="node in unresolvedNodes.slice(0, 5)" :key="node.node_type" class="item">
              <code class="node-type">{{ node.node_type }}</code>
              <span class="not-found">Not found in registry</span>
            </div>
            <div v-if="unresolvedNodes.length > 5" class="overflow-note">
              ...and {{ unresolvedNodes.length - 5 }} more
            </div>
          </div>
        </div>

        <!-- Missing Models Section -->
        <div v-if="missingModels.length > 0" class="section">
          <div class="section-header">
            <span class="section-title">Missing Models ({{ missingModels.length }})</span>
            <BaseButton
              v-if="downloadableModels.length > 1"
              size="sm"
              variant="secondary"
              :disabled="allModelsQueued"
              @click="downloadAllModels"
            >
              {{ allModelsQueued ? 'All Queued' : 'Download All' }}
            </BaseButton>
          </div>
          <div class="item-list">
            <div v-for="model in missingModels.slice(0, 5)" :key="model.widget_value" class="model-item">
              <div class="model-info">
                <span class="model-name">{{ model.filename }}</span>
              </div>
              <template v-if="model.canDownload">
                <BaseButton
                  v-if="!queuedModels.has(model.url!)"
                  size="sm"
                  variant="secondary"
                  @click="downloadModel(model)"
                >
                  Download
                </BaseButton>
                <span v-else class="queued-badge">Queued</span>
              </template>
              <span v-else class="no-url">Manual download required</span>
            </div>
            <div v-if="missingModels.length > 5" class="overflow-note">
              ...and {{ missingModels.length - 5 }} more
            </div>
          </div>
        </div>

        <!-- Don't Show Again -->
        <div class="dont-show-again">
          <BaseCheckbox v-model="dontShowAgain" @update:model-value="handleDontShowAgainChange">
            Don't show this popup
          </BaseCheckbox>
        </div>
      </div>
    </template>

    <template #footer>
      <BaseButton variant="secondary" @click="dismiss">Dismiss</BaseButton>
      <BaseButton
        v-if="hasDownloadableItems"
        variant="primary"
        :disabled="allItemsDone"
        @click="downloadAll"
      >
        {{ allItemsDone ? 'All Done' : 'Download All' }}
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'
import BaseCheckbox from './base/BaseCheckbox.vue'
import { useModelDownloadQueue } from '@/composables/useModelDownloadQueue'
import { useComfyGitService } from '@/composables/useComfyGitService'

interface MissingPackage {
  package_id: string
  title: string
  node_count: number
  node_types: string[]
  repository: string | null
  latest_version: string | null
}

interface MissingModelItem {
  filename: string
  widget_value: string
  url: string | null
  targetPath: string | null
  canDownload: boolean
}

interface UnresolvedNode {
  node_type: string
}

const loading = ref(false)
const error = ref<string | null>(null)
const analysis = ref<any>(null)
const visible = ref(false)
const installedPackages = ref<Set<string>>(new Set())  // Packages that have been installed
const queuedPackages = ref<Set<string>>(new Set())     // Packages queued for install (via Manager queue)
const failedPackages = ref<Map<string, string>>(new Map())  // package_id -> error message
const queuedModels = ref<Set<string>>(new Set())       // Models queued for download
const dontShowAgain = ref(false)
const installingPackage = ref<string | null>(null)     // Currently installing package (from WebSocket cm-task-started)
const installedCount = ref(0)  // Track total installed for restart notification

// Session-based suppression - workflow IDs that have shown popup this session
// Cleared on browser refresh (in-memory only)
const shownWorkflowIds = ref<Set<string>>(new Set())

// Map ui_id to package_id for tracking queue task completion
const pendingInstalls = ref<Map<string, string>>(new Map())

const { addToQueue } = useModelDownloadQueue()
const { queueNodeInstall } = useComfyGitService()

const hasIssues = computed(() => {
  return missingPackages.value.length > 0 ||
    unresolvedNodes.value.length > 0 ||
    missingModels.value.length > 0
})

// Deduplicated packages from missing nodes
const missingPackages = computed<MissingPackage[]>(() => {
  if (!analysis.value?.nodes) return []

  const packageMap = new Map<string, MissingPackage>()

  const uninstalledResolved = (analysis.value.nodes.resolved || [])
    .filter((n: any) => !n.is_installed && n.package?.package_id)

  for (const node of uninstalledResolved) {
    const pkgId = node.package.package_id
    if (!packageMap.has(pkgId)) {
      packageMap.set(pkgId, {
        package_id: pkgId,
        title: node.package.title || pkgId,
        node_count: 0,
        node_types: [],
        repository: node.package.repository || null,
        latest_version: node.package.latest_version || null
      })
    }
    const pkg = packageMap.get(pkgId)!
    pkg.node_count++
    pkg.node_types.push(node.reference?.node_type || node.node_type)
  }

  return Array.from(packageMap.values())
})

// Total missing node count (for header)
const totalMissingNodeCount = computed(() => {
  return missingPackages.value.reduce((sum, pkg) => sum + pkg.node_count, 0)
})

// Unresolved nodes (not found in registry)
const unresolvedNodes = computed<UnresolvedNode[]>(() => {
  if (!analysis.value?.nodes) return []
  return (analysis.value.nodes.unresolved || []).map((n: any) => ({
    node_type: n.reference?.node_type || n.node_type
  }))
})

// Missing models with download info
const missingModels = computed<MissingModelItem[]>(() => {
  if (!analysis.value?.models) return []

  const needsDownload = (analysis.value.models.resolved || [])
    .filter((m: any) =>
      m.match_type === 'download_intent' ||
      m.match_type === 'property_download_intent' ||
      m.match_type === 'not_found'
    )
    .map((m: any) => ({
      filename: m.reference?.widget_value?.split('/').pop() || m.reference?.widget_value || m.widget_value,
      widget_value: m.reference?.widget_value || m.widget_value,
      // Backend returns download_source as URL string directly, and target_path at top level
      url: m.download_source || null,
      targetPath: m.target_path || null,
      canDownload: !!(m.download_source && m.target_path)
    }))

  const unresolved = (analysis.value.models.unresolved || []).map((m: any) => ({
    filename: m.reference?.widget_value?.split('/').pop() || m.reference?.widget_value || m.widget_value,
    widget_value: m.reference?.widget_value || m.widget_value,
    url: null,
    targetPath: null,
    canDownload: false
  }))

  return [...needsDownload, ...unresolved]
})

// Models that can be auto-downloaded
const downloadableModels = computed(() => {
  return missingModels.value.filter(m => m.canDownload)
})

// Check if all packages are installed, queued, or failed (no more to install)
const allPackagesInstalled = computed(() => {
  return missingPackages.value.length > 0 &&
    missingPackages.value.every(pkg =>
      installedPackages.value.has(pkg.package_id) ||
      queuedPackages.value.has(pkg.package_id) ||
      failedPackages.value.has(pkg.package_id)
    )
})

// Check if all downloadable models are queued
const allModelsQueued = computed(() => {
  return downloadableModels.value.length > 0 &&
    downloadableModels.value.every(m => queuedModels.value.has(m.url!))
})

// Check if there are any downloadable items
const hasDownloadableItems = computed(() => {
  return missingPackages.value.length > 0 || downloadableModels.value.length > 0
})

// Check if all items are done (packages installed, models queued)
const allItemsDone = computed(() => {
  const packagesDone = missingPackages.value.length === 0 || allPackagesInstalled.value
  const modelsDone = downloadableModels.value.length === 0 || allModelsQueued.value
  return packagesDone && modelsDone
})

// Queue a single package install via Manager queue
async function installPackage(pkg: MissingPackage) {
  const packageId = pkg.package_id

  // Skip if already installed, queued, or failed
  if (installedPackages.value.has(packageId) ||
      queuedPackages.value.has(packageId) ||
      failedPackages.value.has(packageId)) return

  installingPackage.value = packageId
  try {
    // Queue the install via Manager queue API
    // Pass repository and version from package data
    const { ui_id } = await queueNodeInstall({
      id: packageId,
      version: pkg.latest_version || 'latest',
      selected_version: pkg.latest_version || 'latest',
      repository: pkg.repository || undefined,
      mode: 'remote',
      channel: 'default'
    })

    // Track this task for completion handling
    pendingInstalls.value.set(ui_id, packageId)
    queuedPackages.value.add(packageId)

    // Note: installedCount is updated in handleTaskCompleted on success
  } catch (e) {
    console.error('[ComfyGit] Failed to queue package install:', e)
    // Mark as failed if we couldn't even queue it
    failedPackages.value.set(packageId, 'Failed to queue install request')
  } finally {
    installingPackage.value = null
  }
}

// Download a single model
function downloadModel(model: MissingModelItem) {
  if (!model.url || !model.targetPath || queuedModels.value.has(model.url)) return

  addToQueue([{
    workflow: 'unsaved',
    filename: model.filename,
    url: model.url,
    targetPath: model.targetPath
  }])
  queuedModels.value.add(model.url)
}

// Queue all missing nodes for install
async function installAllNodes() {
  for (const pkg of missingPackages.value) {
    // Skip already installed, queued, or failed packages
    if (!installedPackages.value.has(pkg.package_id) &&
        !queuedPackages.value.has(pkg.package_id) &&
        !failedPackages.value.has(pkg.package_id)) {
      await installPackage(pkg)
    }
  }
}

// Download all models
function downloadAllModels() {
  const toDownload = downloadableModels.value.filter(
    m => !queuedModels.value.has(m.url!)
  )
  if (toDownload.length === 0) return

  addToQueue(toDownload.map(m => ({
    workflow: 'unsaved',
    filename: m.filename,
    url: m.url!,
    targetPath: m.targetPath!
  })))

  for (const m of toDownload) {
    queuedModels.value.add(m.url!)
  }
}

// Download everything (nodes + models)
function downloadAll() {
  installAllNodes()
  downloadAllModels()
}

// Handle "don't show this popup" change (global setting)
function handleDontShowAgainChange() {
  if (dontShowAgain.value) {
    localStorage.setItem('comfygit:popup-disabled', 'true')
  } else {
    localStorage.removeItem('comfygit:popup-disabled')
  }
}

async function analyzeWorkflow(workflow: any) {
  // Skip if user globally disabled popup
  if (localStorage.getItem('comfygit:popup-disabled') === 'true') {
    console.log('[ComfyGit] Popup globally disabled')
    return
  }

  // Session suppression: skip if already shown for this workflow ID this session
  const workflowId = workflow?.id
  if (workflowId && shownWorkflowIds.value.has(workflowId)) {
    console.log(`[ComfyGit] Already shown popup for workflow ${workflowId} this session`)
    return
  }

  // Check if this workflow is saved on disk via content hash
  try {
    const response = await fetch('/v2/comfygit/workflow/is-saved', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ workflow })
    })
    if (response.ok) {
      const result = await response.json()
      if (result.is_saved) {
        console.log(`[ComfyGit] Workflow matches saved file: ${result.filename}, skipping popup`)
        return
      }
    }
  } catch (e) {
    console.warn('[ComfyGit] Failed to check if workflow is saved:', e)
    // On error, proceed with popup (safe default)
  }

  // Prepare state but DON'T show modal yet - wait for analysis results
  loading.value = true
  error.value = null

  // Reset state
  installedPackages.value = new Set()
  queuedPackages.value = new Set()
  failedPackages.value = new Map()
  queuedModels.value = new Set()
  pendingInstalls.value = new Map()
  dontShowAgain.value = false
  installedCount.value = 0

  try {
    // Call our backend endpoint
    const response = await fetch('/v2/comfygit/workflow/analyze-json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ workflow, name: 'unsaved' })
    })

    if (!response.ok) {
      const err = await response.json()
      throw new Error(err.error || 'Failed to analyze workflow')
    }

    analysis.value = await response.json()

    // Only show modal if there are actual issues to display
    if (hasIssues.value) {
      visible.value = true
      // Remember this workflow ID for session suppression
      if (workflowId) {
        shownWorkflowIds.value.add(workflowId)
      }
    }
  } catch (e) {
    console.error('[ComfyGit] Failed to analyze workflow:', e)
    // Don't show error UI - just log silently
  } finally {
    loading.value = false
  }
}

function dismiss() {
  visible.value = false
  analysis.value = null
}

function handleWorkflowLoaded(event: CustomEvent) {
  const { workflow } = event.detail
  if (workflow) {
    analyzeWorkflow(workflow)
  }
}

// WebSocket event handlers for Manager queue status
function handleTaskStarted(event: CustomEvent) {
  const taskId = event.detail?.ui_id
  const packageId = pendingInstalls.value.get(taskId)
  if (packageId) {
    installingPackage.value = packageId
    console.log('[ComfyGit] Installing package:', packageId)
  }
}

function handleTaskCompleted(event: CustomEvent) {
  const taskId = event.detail?.ui_id
  const packageId = pendingInstalls.value.get(taskId)
  const status = event.detail?.status?.status_str

  if (packageId) {
    pendingInstalls.value.delete(taskId)
    queuedPackages.value.delete(packageId)

    // Clear installing state if this was the active one
    if (installingPackage.value === packageId) {
      installingPackage.value = null
    }

    if (status === 'success') {
      installedPackages.value.add(packageId)
      installedCount.value++
      console.log('[ComfyGit] Package installed successfully:', packageId)
    } else {
      const errorMsg = event.detail?.status?.messages?.[0] || event.detail?.result || 'Unknown error'
      failedPackages.value.set(packageId, errorMsg)
      console.error('[ComfyGit] Package install failed:', packageId, errorMsg)
    }

    // When all pending installs are done and at least one succeeded, show restart notification
    if (pendingInstalls.value.size === 0 && installedCount.value > 0) {
      window.dispatchEvent(new CustomEvent('comfygit:nodes-installed', {
        detail: { count: installedCount.value }
      }))
    }
  }
}

// Get ComfyUI's API for WebSocket events
function getComfyApi() {
  return (window as any).app?.api
}

// Listen for workflow save - auto-dismiss popup
function handleWorkflowSaved(event: CustomEvent) {
  const { change_type } = event.detail
  if ((change_type === 'created' || change_type === 'modified') && visible.value) {
    visible.value = false
    console.log('[ComfyGit] Workflow saved, auto-dismissing popup')
  }
}

onMounted(() => {
  // Listen for workflow-loaded events
  window.addEventListener('comfygit:workflow-loaded', handleWorkflowLoaded as EventListener)

  // Listen for Manager queue events via ComfyUI API
  const api = getComfyApi()
  if (api) {
    api.addEventListener('cm-task-started', handleTaskStarted)
    api.addEventListener('cm-task-completed', handleTaskCompleted)
    api.addEventListener('comfygit:workflow-changed', handleWorkflowSaved)
  }
})

onUnmounted(() => {
  window.removeEventListener('comfygit:workflow-loaded', handleWorkflowLoaded as EventListener)

  // Clean up Manager queue event listeners
  const api = getComfyApi()
  if (api) {
    api.removeEventListener('cm-task-started', handleTaskStarted)
    api.removeEventListener('cm-task-completed', handleTaskCompleted)
    api.removeEventListener('comfygit:workflow-changed', handleWorkflowSaved)
  }
})
</script>

<style scoped>
.loading-state {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--cg-space-8);
  gap: var(--cg-space-3);
  color: var(--cg-color-text-muted);
}

.loading-spinner {
  width: 24px;
  height: 24px;
  border: 3px solid var(--cg-color-border);
  border-top-color: var(--cg-color-accent);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.section {
  margin-bottom: var(--cg-space-4);
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--cg-space-2);
  margin-bottom: var(--cg-space-2);
}

.section-title {
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-text-primary);
}

.item-list {
  background: var(--cg-color-bg-tertiary);
  border-radius: var(--cg-radius-md);
  padding: var(--cg-space-2);
}

.item {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-1) var(--cg-space-2);
  font-size: var(--cg-font-size-sm);
}

.package-item,
.model-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--cg-space-2);
  padding: var(--cg-space-2);
}

.package-item:not(:last-child),
.model-item:not(:last-child) {
  border-bottom: 1px solid var(--cg-color-border);
}

.package-info,
.model-info {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  flex: 1;
  min-width: 0;
}

.package-name {
  font-weight: var(--cg-font-weight-medium);
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
}

.node-count {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
}

.node-type {
  font-family: var(--cg-font-mono);
  background: var(--cg-color-bg-secondary);
  padding: var(--cg-space-1) var(--cg-space-2);
  border-radius: var(--cg-radius-sm);
  color: var(--cg-color-accent);
  font-size: var(--cg-font-size-xs);
}

.model-name {
  font-family: var(--cg-font-mono);
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-xs);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.not-found,
.no-url {
  color: var(--cg-color-warning);
  font-style: italic;
  font-size: var(--cg-font-size-xs);
  white-space: nowrap;
}

.queued-badge,
.installing-badge,
.failed-badge,
.installed-badge {
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-medium);
  padding: var(--cg-space-1) var(--cg-space-2);
  border-radius: var(--cg-radius-sm);
}

.queued-badge {
  color: var(--cg-color-warning);
  background: color-mix(in srgb, var(--cg-color-warning) 15%, transparent);
}

.installing-badge {
  color: var(--cg-color-accent);
  background: color-mix(in srgb, var(--cg-color-accent) 15%, transparent);
}

.failed-badge {
  color: var(--cg-color-error);
  background: color-mix(in srgb, var(--cg-color-error) 15%, transparent);
  cursor: help;
}

.installed-badge {
  color: var(--cg-color-success);
  background: color-mix(in srgb, var(--cg-color-success) 15%, transparent);
}

.overflow-note {
  padding: var(--cg-space-1) var(--cg-space-2);
  color: var(--cg-color-text-muted);
  font-style: italic;
  font-size: var(--cg-font-size-xs);
}

.dont-show-again {
  margin-top: var(--cg-space-4);
  padding-top: var(--cg-space-3);
  border-top: 1px solid var(--cg-color-border);
}
</style>
