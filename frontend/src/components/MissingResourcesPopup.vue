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
              {{ allPackagesInstalled ? 'All Installed' : 'Install All' }}
            </BaseButton>
          </div>
          <div class="item-list">
            <div v-for="pkg in missingPackages.slice(0, 5)" :key="pkg.package_id" class="package-item">
              <div class="package-info">
                <span class="package-name">{{ pkg.title }}</span>
                <span class="node-count">({{ pkg.node_count }} {{ pkg.node_count === 1 ? 'node' : 'nodes' }})</span>
              </div>
              <BaseButton
                v-if="!installedPackages.has(pkg.package_id)"
                size="sm"
                variant="secondary"
                :disabled="installingPackage === pkg.package_id"
                @click="installPackage(pkg.package_id)"
              >
                {{ installingPackage === pkg.package_id ? 'Installing...' : 'Install' }}
              </BaseButton>
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
            Don't show again for this workflow
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
      <BaseButton v-else variant="primary" @click="openPanel">Open ComfyGit Panel</BaseButton>
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
const queuedModels = ref<Set<string>>(new Set())       // Models queued for download
const dontShowAgain = ref(false)
const installingPackage = ref<string | null>(null)
const currentWorkflowHash = ref<string | null>(null)
const installedCount = ref(0)  // Track total installed for restart notification

const { addToQueue } = useModelDownloadQueue()
const { installNode } = useComfyGitService()

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
        node_types: []
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

// Check if all packages are installed
const allPackagesInstalled = computed(() => {
  return missingPackages.value.length > 0 &&
    missingPackages.value.every(pkg => installedPackages.value.has(pkg.package_id))
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

// Install a single package
async function installPackage(packageId: string) {
  if (installedPackages.value.has(packageId)) return

  installingPackage.value = packageId
  try {
    await installNode(packageId)
    installedPackages.value.add(packageId)
    installedCount.value++

    // Dispatch event to show restart notification
    window.dispatchEvent(new CustomEvent('comfygit:nodes-installed', {
      detail: { count: installedCount.value }
    }))
  } catch (e) {
    console.error('[ComfyGit] Failed to install package:', e)
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

// Install all missing nodes
function installAllNodes() {
  for (const pkg of missingPackages.value) {
    if (!installedPackages.value.has(pkg.package_id)) {
      installPackage(pkg.package_id)
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

// Generate a hash for the workflow (for "don't show again")
function getWorkflowHash(workflow: any): string {
  const nodeTypes = (workflow?.nodes || [])
    .map((n: any) => n.type)
    .sort()
    .join(',')
  return btoa(nodeTypes).slice(0, 16)
}

// Check if popup should be shown for this workflow
function shouldShowPopup(workflow: any): boolean {
  const hash = getWorkflowHash(workflow)
  return localStorage.getItem('comfygit:popup-dismissed:' + hash) !== 'true'
}

// Handle "don't show again" change
function handleDontShowAgainChange() {
  if (dontShowAgain.value && currentWorkflowHash.value) {
    localStorage.setItem('comfygit:popup-dismissed:' + currentWorkflowHash.value, 'true')
  }
}

async function analyzeWorkflow(workflow: any) {
  // Check if user dismissed this workflow
  if (!shouldShowPopup(workflow)) {
    return
  }

  loading.value = true
  error.value = null
  visible.value = true
  currentWorkflowHash.value = getWorkflowHash(workflow)

  // Reset state
  installedPackages.value = new Set()
  queuedModels.value = new Set()
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

    // Auto-dismiss if no issues found
    if (!hasIssues.value) {
      dismiss()
    }
  } catch (e) {
    console.error('[ComfyGit] Failed to analyze workflow:', e)
    error.value = e instanceof Error ? e.message : 'Unknown error'
    // Don't show error UI for now - just log and dismiss
    dismiss()
  } finally {
    loading.value = false
  }
}

function openPanel() {
  // Dispatch custom event for main.ts to handle
  window.dispatchEvent(new CustomEvent('comfygit:open-panel', {
    detail: { initialView: 'workflows' }
  }))
  dismiss()
}

function dismiss() {
  visible.value = false
  analysis.value = null
  currentWorkflowHash.value = null
}

function handleWorkflowLoaded(event: CustomEvent) {
  const { workflow } = event.detail
  if (workflow) {
    analyzeWorkflow(workflow)
  }
}

onMounted(() => {
  // Listen for workflow-loaded events
  window.addEventListener('comfygit:workflow-loaded', handleWorkflowLoaded as EventListener)
})

onUnmounted(() => {
  window.removeEventListener('comfygit:workflow-loaded', handleWorkflowLoaded as EventListener)
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
.installed-badge {
  color: var(--cg-color-success);
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-medium);
  padding: var(--cg-space-1) var(--cg-space-2);
  background: color-mix(in srgb, var(--cg-color-success) 15%, transparent);
  border-radius: var(--cg-radius-sm);
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
