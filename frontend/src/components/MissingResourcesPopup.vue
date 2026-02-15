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
            <div v-for="pkg in displayedPackages" :key="pkg.package_id" class="package-item">
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
            <!-- Show all row - appears when 5+ packages -->
            <div
              v-if="missingPackages.length >= 5"
              class="show-all-row"
              @click="activeDetailView = 'packages'"
            >
              <span>Show all {{ missingPackages.length }} packages...</span>
              <span class="show-all-arrow">→</span>
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

        <!-- Version-gated builtins -->
        <div v-if="versionGatedNodes.length > 0" class="section">
          <div class="section-header">
            <span class="section-title">Requires Newer ComfyUI ({{ versionGatedNodes.length }})</span>
          </div>
          <div class="item-list">
            <div v-for="node in versionGatedNodes.slice(0, 5)" :key="`vg-${node.node_type}`" class="item">
              <code class="node-type">{{ node.node_type }}</code>
              <span class="not-found">{{ node.guidance || 'Requires a newer ComfyUI version' }}</span>
            </div>
            <div v-if="versionGatedNodes.length > 5" class="overflow-note">
              ...and {{ versionGatedNodes.length - 5 }} more
            </div>
          </div>
        </div>

        <!-- Uninstallable nodes -->
        <div v-if="uninstallableNodes.length > 0" class="section">
          <div class="section-header">
            <span class="section-title">No Installable Package Version ({{ uninstallableNodes.length }})</span>
          </div>
          <div class="item-list">
            <div v-for="node in uninstallableNodes.slice(0, 5)" :key="`un-${node.node_type}-${node.package_id || 'none'}`" class="item">
              <code class="node-type">{{ node.node_type }}</code>
              <span class="not-found">{{ node.guidance || 'No compatible package version is available for this environment' }}</span>
            </div>
            <div v-if="uninstallableNodes.length > 5" class="overflow-note">
              ...and {{ uninstallableNodes.length - 5 }} more
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
            <div v-for="model in displayedModels" :key="model.widget_value" class="model-item">
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
            <!-- Show all row - appears when 5+ models -->
            <div
              v-if="missingModels.length >= 5"
              class="show-all-row"
              @click="activeDetailView = 'models'"
            >
              <span>Show all {{ missingModels.length }} models...</span>
              <span class="show-all-arrow">→</span>
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

  <!-- Detail Modal for full list view -->
  <MissingResourcesDetailModal
    v-if="activeDetailView"
    :title="detailModalTitle"
    :items="detailModalItems"
    :item-type="activeDetailView"
    :queued-items="activeDetailView === 'models' ? queuedModels : queuedPackages"
    :installed-items="activeDetailView === 'packages' ? installedPackages : undefined"
    :failed-items="activeDetailView === 'packages' ? failedPackages : undefined"
    :installing-item="activeDetailView === 'packages' ? installingPackage : undefined"
    @close="activeDetailView = null"
    @action="handleDetailAction"
    @bulk-action="handleDetailBulkAction"
  />
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'
import BaseCheckbox from './base/BaseCheckbox.vue'
import MissingResourcesDetailModal, { type ResourceItem } from './MissingResourcesDetailModal.vue'
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

interface VersionGatedNodeItem {
  node_type: string
  guidance: string | null
}

interface UninstallableNodeItem {
  node_type: string
  package_id: string | null
  guidance: string | null
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
const activeDetailView = ref<'models' | 'packages' | null>(null)

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
    versionGatedNodes.value.length > 0 ||
    uninstallableNodes.value.length > 0 ||
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

const versionGatedNodes = computed<VersionGatedNodeItem[]>(() => {
  if (!analysis.value?.nodes) return []
  const guidance = analysis.value.node_guidance || {}
  return (analysis.value.nodes.version_gated || []).map((n: any) => {
    const nodeType = n.reference?.node_type || n.node_type
    return {
      node_type: nodeType,
      guidance: n.guidance || guidance[nodeType] || null,
    }
  })
})

const uninstallableNodes = computed<UninstallableNodeItem[]>(() => {
  if (!analysis.value?.nodes) return []
  const guidance = analysis.value.node_guidance || {}
  return (analysis.value.nodes.uninstallable || []).map((n: any) => {
    const nodeType = n.reference?.node_type || n.node_type
    return {
      node_type: nodeType,
      package_id: n.package?.package_id || null,
      guidance: n.guidance || guidance[nodeType] || null,
    }
  })
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

// Display subsets - show 4 items when 5+, to make room for "show all" row
const displayedPackages = computed(() => {
  if (missingPackages.value.length >= 5) {
    return missingPackages.value.slice(0, 4)
  }
  return missingPackages.value
})

const displayedModels = computed(() => {
  if (missingModels.value.length >= 5) {
    return missingModels.value.slice(0, 4)
  }
  return missingModels.value
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

// Detail modal computed properties
const detailModalTitle = computed(() => {
  if (activeDetailView.value === 'models') return `Missing Models (${missingModels.value.length})`
  if (activeDetailView.value === 'packages') return `Missing Custom Nodes (${totalMissingNodeCount.value})`
  return ''
})

const detailModalItems = computed<ResourceItem[]>(() => {
  if (activeDetailView.value === 'models') {
    return missingModels.value.map(m => ({
      id: m.url || m.widget_value,
      name: m.filename,
      canAction: m.canDownload,
      actionDisabledReason: m.canDownload ? undefined : 'Manual download required'
    }))
  }
  if (activeDetailView.value === 'packages') {
    return missingPackages.value.map(p => ({
      id: p.package_id,
      name: p.title,
      subtitle: `(${p.node_count} ${p.node_count === 1 ? 'node' : 'nodes'})`,
      canAction: true
    }))
  }
  return []
})

// Detail modal handlers
function handleDetailAction(item: ResourceItem) {
  if (activeDetailView.value === 'models') {
    const model = missingModels.value.find(m => m.url === item.id || m.widget_value === item.id)
    if (model) downloadModel(model)
  } else if (activeDetailView.value === 'packages') {
    const pkg = missingPackages.value.find(p => p.package_id === item.id)
    if (pkg) installPackage(pkg)
  }
}

function handleDetailBulkAction() {
  if (activeDetailView.value === 'models') downloadAllModels()
  else if (activeDetailView.value === 'packages') installAllNodes()
}

// Queue a single package install via Manager queue
async function installPackage(pkg: MissingPackage) {
  const packageId = pkg.package_id

  // Skip if already installed, queued, or failed
  if (installedPackages.value.has(packageId) ||
      queuedPackages.value.has(packageId) ||
      failedPackages.value.has(packageId)) return

  // Ensure WebSocket listeners are registered before starting install
  // (lazy registration because window.app may not exist at mount time)
  ensureEventListeners()

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
    // IMPORTANT: This must happen BEFORE queue processing starts (handled by fire-and-forget in queueNodeInstall)
    pendingInstalls.value.set(ui_id, packageId)
    queuedPackages.value.add(packageId)
    console.log('[ComfyGit] Registered pending install:', { ui_id, packageId, pendingInstalls: Array.from(pendingInstalls.value.entries()) })

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

  // Check if workflow is saved to disk by comparing workflow IDs.
  // We poll because activeWorkflow updates AFTER our event fires.
  const appAny = window.app as any
  const workflowStore = appAny?.extensionManager?.workflow

  if (workflowStore) {
    const MAX_RETRIES = 20
    const RETRY_DELAY_MS = 50
    let foundCorrectWorkflow = false

    for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
      const activeWorkflow = workflowStore.activeWorkflow
      if (!activeWorkflow) {
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY_MS))
        continue
      }

      const activeStateId = activeWorkflow.activeState?.id
      const isCorrectWorkflow = workflowId && activeStateId === workflowId

      // If IDs don't match, activeWorkflow is stale - keep polling
      if (!isCorrectWorkflow) {
        if (attempt < MAX_RETRIES - 1) {
          await new Promise(resolve => setTimeout(resolve, RETRY_DELAY_MS))
        }
        continue
      }

      // IDs match - check persistence status
      foundCorrectWorkflow = true
      if (activeWorkflow.isPersisted === true) {
        console.log(`[ComfyGit] Skipping popup for saved workflow: ${activeWorkflow.filename}`)
        if (workflowId) {
          shownWorkflowIds.value.add(workflowId)
        }
        return
      }
      // Not persisted - proceed to show popup
      break
    }

    // Timeout fallback - show popup to be safe
    if (!foundCorrectWorkflow) {
      console.warn('[ComfyGit] Could not verify workflow state, showing popup as fallback')
    }
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
  console.log('[ComfyGit] cm-task-started received:', {
    taskId,
    pendingInstalls: Array.from(pendingInstalls.value.entries()),
    eventDetail: event.detail
  })
  const packageId = pendingInstalls.value.get(taskId)
  if (packageId) {
    installingPackage.value = packageId
    console.log('[ComfyGit] Installing package:', packageId)
  } else {
    console.warn('[ComfyGit] cm-task-started: No matching package for taskId:', taskId)
  }
}

function handleTaskCompleted(event: CustomEvent) {
  const taskId = event.detail?.ui_id
  const status = event.detail?.status?.status_str
  console.log('[ComfyGit] cm-task-completed received:', {
    taskId,
    status,
    pendingInstalls: Array.from(pendingInstalls.value.entries()),
    eventDetail: event.detail
  })
  const packageId = pendingInstalls.value.get(taskId)

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
      console.log('[ComfyGit] All installs complete, dispatching nodes-installed event:', installedCount.value)
      window.dispatchEvent(new CustomEvent('comfygit:nodes-installed', {
        detail: { count: installedCount.value }
      }))
    }
  } else {
    console.warn('[ComfyGit] cm-task-completed: No matching package for taskId:', taskId)
  }
}

// Get ComfyUI's API for WebSocket events (cached for performance)
let cachedApi: any = null
function getComfyApi() {
  if (!cachedApi) {
    cachedApi = (window as any).app?.api
  }
  return cachedApi
}

// Lazy event listener registration
// We register listeners when first install is triggered, not at mount time,
// because window.app may not exist yet when the component mounts
let listenersRegistered = false
function ensureEventListeners() {
  if (listenersRegistered) return true
  const api = getComfyApi()
  if (api) {
    api.addEventListener('cm-task-started', handleTaskStarted)
    api.addEventListener('cm-task-completed', handleTaskCompleted)
    api.addEventListener('comfygit:workflow-changed', handleWorkflowSaved)
    listenersRegistered = true
    console.log('[ComfyGit] Registered WebSocket event listeners for install tracking')
    return true
  }
  console.warn('[ComfyGit] Could not register WebSocket listeners - API not available')
  return false
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
  // Listen for workflow-loaded events (window event, always available)
  window.addEventListener('comfygit:workflow-loaded', handleWorkflowLoaded as EventListener)

  // Note: WebSocket event listeners (cm-task-started, cm-task-completed) are registered
  // lazily in ensureEventListeners() when first install is triggered, because window.app
  // may not exist yet at mount time
})

onUnmounted(() => {
  window.removeEventListener('comfygit:workflow-loaded', handleWorkflowLoaded as EventListener)

  // Clean up Manager queue event listeners if they were registered
  if (listenersRegistered) {
    const api = getComfyApi()
    if (api) {
      api.removeEventListener('cm-task-started', handleTaskStarted)
      api.removeEventListener('cm-task-completed', handleTaskCompleted)
      api.removeEventListener('comfygit:workflow-changed', handleWorkflowSaved)
    }
    listenersRegistered = false
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

.show-all-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--cg-space-2);
  color: var(--cg-color-accent);
  cursor: pointer;
  font-size: var(--cg-font-size-sm);
  border-top: 1px solid var(--cg-color-border);
}

.show-all-row:hover {
  background: var(--cg-color-bg-hover);
}

.show-all-arrow {
  opacity: 0.6;
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
