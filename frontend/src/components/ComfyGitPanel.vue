<template>
  <div class="comfygit-panel" data-comfygit-theme="phosphor">
    <!-- Header -->
    <div class="panel-header">
      <div class="header-left">
        <h2 class="panel-title">ComfyGit</h2>
        <div v-if="status" class="header-info">
          <span class="env-name">{{ currentEnvironment?.name || status.environment }}</span>
          <span class="branch-name">{{ status.branch || 'detached' }}</span>
          <span :class="['status-dot', statusColor]" :title="statusTooltip"></span>
        </div>
      </div>
      <div class="header-actions">
        <button class="icon-btn" :class="{ spinning: isLoading }" @click="refresh" title="Refresh">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M13.65 2.35a8 8 0 1 0 1.4 9.65h-2.25a5.75 5.75 0 1 1-1-6.45L9.5 8H16V1.5l-2.35 2.35z"/>
          </svg>
        </button>
        <button class="icon-btn" @click="emit('close')" title="Close">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Environment Switcher -->
    <div class="env-switcher">
      <div class="env-switcher-label">/* CURRENT ENVIRONMENT */</div>
      <button class="env-switcher-btn" @click="showEnvironmentSelector = true">
        <span>{{ currentEnvironment?.name || status?.environment || 'Loading...' }}</span>
        <span class="switch-indicator">SWITCH ▸</span>
      </button>
    </div>

    <!-- Main Content Area -->
    <div class="panel-main">
      <!-- Sidebar -->
      <div class="sidebar">
        <!-- THIS ENV Section -->
        <div class="sidebar-section">
          <div class="sidebar-section-title">THIS ENV</div>
          <button
            :class="['sidebar-item', { active: currentView === 'status' && currentSection === 'this-env' }]"
            @click="selectView('status', 'this-env')"
          >
            STATUS
          </button>
          <button
            :class="['sidebar-item', { active: currentView === 'workflows' }]"
            @click="selectView('workflows', 'this-env')"
          >
            WORKFLOWS
          </button>
          <button
            :class="['sidebar-item', { active: currentView === 'models-env' }]"
            @click="selectView('models-env', 'this-env')"
          >
            MODELS
          </button>
          <button
            :class="['sidebar-item', { active: currentView === 'branches' }]"
            @click="selectView('branches', 'this-env')"
          >
            BRANCHES
          </button>
          <button
            :class="['sidebar-item', { active: currentView === 'history' }]"
            @click="selectView('history', 'this-env')"
          >
            HISTORY
          </button>
          <button
            :class="['sidebar-item', { active: currentView === 'nodes' }]"
            @click="selectView('nodes', 'this-env')"
          >
            NODES
          </button>
          <button
            :class="['sidebar-item', { active: currentView === 'debug-env' }]"
            @click="selectView('debug-env', 'this-env')"
          >
            DEBUG
          </button>
        </div>

        <div class="sidebar-divider"></div>

        <!-- ALL ENVS Section -->
        <div class="sidebar-section">
          <div class="sidebar-section-title">ALL ENVS</div>
          <button
            :class="['sidebar-item', { active: currentView === 'environments' }]"
            @click="selectView('environments', 'all-envs')"
          >
            ENVIRONMENTS
          </button>
          <button
            :class="['sidebar-item', { active: currentView === 'model-index' }]"
            @click="selectView('model-index', 'all-envs')"
          >
            MODEL INDEX
          </button>
          <button
            :class="['sidebar-item', { active: currentView === 'settings' }]"
            @click="selectView('settings', 'all-envs')"
          >
            SETTINGS
          </button>
          <button
            :class="['sidebar-item', { active: currentView === 'debug-workspace' }]"
            @click="selectView('debug-workspace', 'all-envs')"
          >
            DEBUG
          </button>
        </div>

        <div class="sidebar-divider"></div>

        <!-- SHARING Section -->
        <div class="sidebar-section">
          <div class="sidebar-section-title">SHARING</div>
          <button
            :class="['sidebar-item', { active: currentView === 'export' }]"
            @click="selectView('export', 'sharing')"
          >
            EXPORT
          </button>
          <button
            :class="['sidebar-item', { active: currentView === 'import' }]"
            @click="selectView('import', 'sharing')"
          >
            IMPORT
          </button>
          <button
            :class="['sidebar-item', { active: currentView === 'remotes' }]"
            @click="selectView('remotes', 'sharing')"
          >
            REMOTES
          </button>
        </div>
      </div>

      <!-- Content Area -->
      <div class="content-area">
        <div v-if="error" class="error-message">
          {{ error }}
        </div>
        <div v-else-if="!status && currentView === 'status'" class="loading">
          Loading status...
        </div>
        <template v-else>
          <!-- Status View -->
          <StatusSection v-if="currentView === 'status'" :status="status!" />

          <!-- Workflows View -->
          <div v-else-if="currentView === 'workflows'" class="view-placeholder">
            <h3 class="view-title">WORKFLOWS</h3>
            <p>Workflow management UI coming soon...</p>
          </div>

          <!-- Models (Environment) View -->
          <div v-else-if="currentView === 'models-env'" class="view-placeholder">
            <h3 class="view-title">MODELS (THIS ENVIRONMENT)</h3>
            <p>Environment-scoped model view coming soon...</p>
          </div>

          <!-- Branches View -->
          <BranchSection
            v-else-if="currentView === 'branches'"
            :branches="branches"
            :current="status?.branch || null"
            @switch="handleBranchSwitch"
            @create="handleBranchCreate"
          />

          <!-- History View -->
          <HistorySection
            v-else-if="currentView === 'history'"
            :commits="commits"
            @select="handleCommitSelect"
            @checkout="handleCheckout"
          />

          <!-- Nodes View -->
          <div v-else-if="currentView === 'nodes'" class="view-placeholder">
            <h3 class="view-title">NODES (GIT-TRACKED)</h3>
            <p>Git-tracked nodes view coming soon...</p>
          </div>

          <!-- Debug (Environment) View -->
          <div v-else-if="currentView === 'debug-env'" class="view-placeholder">
            <h3 class="view-title">DEBUG (ENVIRONMENT LOGS)</h3>
            <p>Environment logs view coming soon...</p>
          </div>

          <!-- Environments View -->
          <div v-else-if="currentView === 'environments'" class="view-placeholder">
            <h3 class="view-title">ENVIRONMENTS</h3>
            <p>Environment management UI coming soon...</p>
          </div>

          <!-- Model Index View -->
          <div v-else-if="currentView === 'model-index'" class="view-placeholder">
            <h3 class="view-title">MODEL INDEX (WORKSPACE)</h3>
            <p>Workspace-wide model index coming soon...</p>
          </div>

          <!-- Settings View -->
          <div v-else-if="currentView === 'settings'" class="view-placeholder">
            <h3 class="view-title">SETTINGS</h3>
            <p>Settings UI coming soon...</p>
          </div>

          <!-- Debug (Workspace) View -->
          <div v-else-if="currentView === 'debug-workspace'" class="view-placeholder">
            <h3 class="view-title">DEBUG (WORKSPACE LOGS)</h3>
            <p>Workspace logs view coming soon...</p>
          </div>

          <!-- Export View -->
          <div v-else-if="currentView === 'export'" class="view-placeholder">
            <h3 class="view-title">EXPORT</h3>
            <button class="export-btn" @click="handleExport">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 12L3 7h3V1h4v6h3L8 12z"/>
                <path d="M14 14H2v-2h12v2z"/>
              </svg>
              EXPORT ENVIRONMENT
            </button>
          </div>

          <!-- Import View -->
          <div v-else-if="currentView === 'import'" class="view-placeholder">
            <h3 class="view-title">IMPORT</h3>
            <p>Import UI coming soon...</p>
          </div>

          <!-- Remotes View -->
          <div v-else-if="currentView === 'remotes'" class="view-placeholder">
            <h3 class="view-title">REMOTES</h3>
            <p>Git remotes UI coming soon...</p>
          </div>
        </template>
      </div>
    </div>

    <!-- Modals -->
    <CommitDetailModal
      v-if="selectedCommit"
      :commit="selectedCommit"
      @close="selectedCommit = null"
      @checkout="handleCheckout"
      @createBranch="handleBranchFromCommit"
    />

    <ConfirmDialog
      v-if="confirmDialog"
      :title="confirmDialog.title"
      :message="confirmDialog.message"
      :details="confirmDialog.details"
      :warning="confirmDialog.warning"
      :confirmLabel="confirmDialog.confirmLabel"
      :cancelLabel="confirmDialog.cancelLabel"
      :secondaryLabel="confirmDialog.secondaryLabel"
      :secondaryAction="confirmDialog.secondaryAction"
      :destructive="confirmDialog.destructive"
      @confirm="confirmDialog.onConfirm"
      @cancel="confirmDialog = null"
      @secondary="confirmDialog.onSecondary"
    />

    <!-- Environment Selector Modal -->
    <div v-if="showEnvironmentSelector" class="dialog-overlay" @click.self="showEnvironmentSelector = false">
      <div class="dialog-content env-selector-dialog">
        <div class="dialog-header">
          <h3 class="dialog-title">SWITCH ENVIRONMENT</h3>
          <button class="icon-btn" @click="showEnvironmentSelector = false">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z"/>
            </svg>
          </button>
        </div>
        <div class="dialog-body">
          <p class="dialog-message">Select environment to switch to:</p>
          <div class="env-list">
            <div
              v-for="env in environments"
              :key="env.name"
              :class="['env-item', { current: env.is_current }]"
            >
              <div class="env-info">
                <div class="env-name-row">
                  <span class="env-indicator">{{ env.is_current ? '●' : '○' }}</span>
                  <span class="env-name">{{ env.name }}</span>
                  <span v-if="env.current_branch" class="env-branch">({{ env.current_branch }})</span>
                  <span v-if="env.is_current" class="current-label">CURRENT</span>
                </div>
                <div class="env-stats">
                  {{ env.workflow_count }} workflows • {{ env.node_count }} nodes
                </div>
              </div>
              <button
                v-if="!env.is_current"
                class="switch-btn"
                @click="handleEnvironmentSwitch(env.name)"
              >
                SWITCH
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast Notifications -->
    <div class="toast-container">
      <transition-group name="toast">
        <div
          v-for="toast in toasts"
          :key="toast.id"
          :class="['toast', toast.type]"
        >
          <span class="toast-icon">{{ getToastIcon(toast.type) }}</span>
          <span class="toast-message">{{ toast.message }}</span>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import StatusSection from './StatusSection.vue'
import BranchSection from './BranchSection.vue'
import HistorySection from './HistorySection.vue'
import CommitDetailModal from './CommitDetailModal.vue'
import ConfirmDialog from './ConfirmDialog.vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { ComfyGitStatus, CommitInfo, BranchInfo, EnvironmentInfo } from '@/types/comfygit'

const emit = defineEmits<{
  close: []
  statusUpdate: [status: ComfyGitStatus]
}>()

const {
  getStatus,
  getHistory,
  exportEnv,
  getBranches,
  checkout,
  createBranch,
  switchBranch,
  getEnvironments
} = useComfyGitService()

type ViewName = 'status' | 'workflows' | 'models-env' | 'branches' | 'history' | 'nodes' | 'debug-env' |
                'environments' | 'model-index' | 'settings' | 'debug-workspace' |
                'export' | 'import' | 'remotes'

type SectionName = 'this-env' | 'all-envs' | 'sharing'

const status = ref<ComfyGitStatus | null>(null)
const commits = ref<CommitInfo[]>([])
const branches = ref<BranchInfo[]>([])
const environments = ref<EnvironmentInfo[]>([])
const currentEnvironment = computed(() => environments.value.find(e => e.is_current))
const isLoading = ref(false)
const error = ref<string | null>(null)
const selectedCommit = ref<CommitInfo | null>(null)
const showEnvironmentSelector = ref(false)

const currentView = ref<ViewName>('status')
const currentSection = ref<SectionName>('this-env')

function selectView(view: ViewName, section: SectionName) {
  currentView.value = view
  currentSection.value = section
}

interface ConfirmDialogConfig {
  title: string
  message: string
  details?: string[]
  warning?: string
  confirmLabel?: string
  cancelLabel?: string
  secondaryLabel?: string
  secondaryAction?: boolean
  destructive?: boolean
  onConfirm: () => void
  onSecondary?: () => void
}

const confirmDialog = ref<ConfirmDialogConfig | null>(null)

// Toast notification system
interface Toast {
  id: number
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
}

const toasts = ref<Toast[]>([])
let toastId = 0

function showToast(message: string, type: Toast['type'] = 'info', duration = 3000) {
  const id = ++toastId
  toasts.value.push({ id, message, type })
  if (duration > 0) {
    setTimeout(() => {
      toasts.value = toasts.value.filter(t => t.id !== id)
    }, duration)
  }
  return id
}

function removeToast(id: number) {
  toasts.value = toasts.value.filter(t => t.id !== id)
}

function getToastIcon(type: Toast['type']): string {
  switch (type) {
    case 'success': return '✓'
    case 'warning': return '!'
    case 'error': return '✕'
    default: return '→'
  }
}

const statusColor = computed(() => {
  if (!status.value) return 'neutral'
  const wf = status.value.workflows
  const hasChanges = wf.new.length > 0 || wf.modified.length > 0 || wf.deleted.length > 0 || status.value.has_changes
  if (!status.value.comparison.is_synced) return 'error'
  if (hasChanges) return 'warning'
  return 'success'
})

const statusTooltip = computed(() => {
  if (!status.value) return ''
  if (statusColor.value === 'success') return 'All synced'
  if (statusColor.value === 'warning') return 'Uncommitted changes'
  if (statusColor.value === 'error') return 'Not synced'
  return ''
})

async function refresh() {
  isLoading.value = true
  error.value = null

  try {
    const [statusRes, historyRes, branchesRes, envsRes] = await Promise.all([
      getStatus(),
      getHistory(),
      getBranches(),
      getEnvironments()
    ])
    status.value = statusRes
    commits.value = historyRes.commits
    branches.value = branchesRes.branches
    environments.value = envsRes
    emit('statusUpdate', statusRes)
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load status'
    status.value = null
    commits.value = []
    branches.value = []
  } finally {
    isLoading.value = false
  }
}

function handleCommitSelect(commit: CommitInfo) {
  selectedCommit.value = commit
}

async function handleCheckout(commit: CommitInfo) {
  selectedCommit.value = null

  const hasChanges = status.value && (
    status.value.workflows.new.length > 0 ||
    status.value.workflows.modified.length > 0 ||
    status.value.workflows.deleted.length > 0 ||
    status.value.has_changes
  )

  confirmDialog.value = {
    title: hasChanges ? 'Checkout with Uncommitted Changes' : 'Checkout Commit',
    message: hasChanges
      ? 'You have uncommitted changes that will be lost.'
      : `Checkout commit ${commit.short_hash || commit.hash?.slice(0, 7)}?`,
    details: hasChanges ? getChangeDetails() : undefined,
    warning: 'This will restart ComfyUI to apply the changes.',
    confirmLabel: hasChanges ? 'Discard & Checkout' : 'Checkout',
    cancelLabel: 'Cancel',
    destructive: hasChanges,
    onConfirm: async () => {
      confirmDialog.value = null
      const toastId = showToast(`Checking out ${commit.short_hash || commit.hash?.slice(0, 7)}...`, 'info', 0)

      const result = await checkout(commit.hash, hasChanges)
      removeToast(toastId)

      if (result.status === 'success') {
        showToast('Restarting ComfyUI...', 'success')
      } else {
        showToast(result.message || 'Checkout failed', 'error')
      }
    }
  }
}

async function handleBranchSwitch(branchName: string) {
  const hasChanges = status.value && (
    status.value.workflows.new.length > 0 ||
    status.value.workflows.modified.length > 0 ||
    status.value.workflows.deleted.length > 0 ||
    status.value.has_changes
  )

  confirmDialog.value = {
    title: hasChanges ? 'Switch Branch with Uncommitted Changes' : 'Switch Branch',
    message: hasChanges
      ? 'You have uncommitted changes.'
      : `Switch to branch "${branchName}"?`,
    details: hasChanges ? getChangeDetails() : undefined,
    warning: hasChanges
      ? 'This will restart ComfyUI. Changes will remain in current branch.'
      : 'This will restart ComfyUI to apply the changes.',
    confirmLabel: hasChanges ? 'Switch Anyway' : 'Switch',
    cancelLabel: 'Cancel',
    onConfirm: async () => {
      confirmDialog.value = null
      const toastId = showToast(`Switching to ${branchName}...`, 'info', 0)

      const result = await switchBranch(branchName, hasChanges)
      removeToast(toastId)

      if (result.status === 'success') {
        showToast('Restarting ComfyUI...', 'success')
      } else {
        showToast(result.message || 'Branch switch failed', 'error')
      }
    }
  }
}

async function handleBranchCreate(name: string) {
  const toastId = showToast(`Creating branch ${name}...`, 'info', 0)
  const result = await createBranch(name)
  removeToast(toastId)

  if (result.status === 'success') {
    showToast(`Branch "${name}" created`, 'success')
    await refresh()
  } else {
    showToast(result.message || 'Failed to create branch', 'error')
  }
}

async function handleBranchFromCommit(commit: CommitInfo) {
  selectedCommit.value = null
  const name = prompt('Enter branch name:')
  if (name) {
    const toastId = showToast(`Creating branch ${name}...`, 'info', 0)
    const result = await createBranch(name, commit.hash)
    removeToast(toastId)

    if (result.status === 'success') {
      showToast(`Branch "${name}" created from ${commit.short_hash}`, 'success')
      await refresh()
    } else {
      showToast(result.message || 'Failed to create branch', 'error')
    }
  }
}

async function handleEnvironmentSwitch(envName: string) {
  showEnvironmentSelector.value = false
  showToast(`Environment switching not yet implemented`, 'warning')
  // TODO: Implement orchestrator daemon flow
}

function getChangeDetails(): string[] {
  if (!status.value) return []
  const details: string[] = []
  const wf = status.value.workflows
  if (wf.new.length) details.push(`${wf.new.length} new workflow(s)`)
  if (wf.modified.length) details.push(`${wf.modified.length} modified workflow(s)`)
  if (wf.deleted.length) details.push(`${wf.deleted.length} deleted workflow(s)`)
  return details
}

async function handleExport() {
  const toastId = showToast('Exporting environment...', 'info', 0)
  try {
    const result = await exportEnv()
    removeToast(toastId)

    if (result.status === 'success') {
      showToast('Export complete', 'success')
      alert(`Export successful!\n\nSaved to: ${result.path}\n\nModels without sources: ${result.models_without_sources}`)
    } else {
      showToast('Export failed', 'error')
      alert(`Export failed: ${result.message}`)
    }
  } catch (err) {
    removeToast(toastId)
    showToast('Export error', 'error')
    alert(`Export error: ${err instanceof Error ? err.message : 'Unknown error'}`)
  }
}

onMounted(refresh)
</script>

<style scoped>
.comfygit-panel {
  display: flex;
  flex-direction: column;
  height: 70vh;
  width: var(--cg-panel-width, 754px);
  max-width: 90vw;
  background: var(--cg-color-bg-primary);
  color: var(--cg-color-text-primary);
  border: 2px solid var(--cg-color-border);
  overflow: hidden;
  font-family: var(--cg-font-mono);
}

/* Header */
.panel-header {
  padding: var(--cg-space-3) var(--cg-space-4);
  border-bottom: 1px solid var(--cg-color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--cg-color-bg-tertiary);
  flex-shrink: 0;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.panel-title {
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
  margin: 0;
  color: var(--cg-color-accent);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  text-shadow: 0 0 8px var(--cg-color-accent);
}

.header-info {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: var(--cg-font-size-xs);
}

.env-name {
  color: var(--cg-color-text-secondary);
}

.branch-name {
  color: var(--cg-color-text-muted);
}

.status-dot {
  width: 6px;
  height: 12px;
  border-radius: 0;
  animation: cursor-blink 1s step-end infinite;
}

.status-dot.success { background: var(--cg-color-success); }
.status-dot.warning { background: var(--cg-color-warning); }
.status-dot.error { background: var(--cg-color-error); }
.status-dot.neutral { background: var(--cg-color-text-muted); }

@keyframes cursor-blink {
  50% { opacity: 0; }
}

.header-actions {
  display: flex;
  gap: 4px;
}

.icon-btn {
  background: transparent;
  border: 1px solid transparent;
  color: var(--cg-color-text-primary);
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-btn:hover {
  background: var(--cg-color-bg-hover);
  border-color: var(--cg-color-border-subtle);
}

.icon-btn.spinning svg {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Environment Switcher */
.env-switcher {
  padding: var(--cg-space-3) var(--cg-space-4);
  border-bottom: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg-secondary);
  flex-shrink: 0;
}

.env-switcher-label {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  margin-bottom: 6px;
}

.env-switcher-btn {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border: 1px solid var(--cg-color-border-subtle);
  color: var(--cg-color-text-primary);
  padding: 8px 12px;
  cursor: pointer;
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
}

.env-switcher-btn:hover {
  border-color: var(--cg-color-accent);
  background: var(--cg-color-bg-hover);
}

.switch-indicator {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

/* Main Content Area */
.panel-main {
  display: flex;
  flex: 1;
  overflow: hidden;
}

/* Sidebar */
.sidebar {
  width: 180px;
  background: var(--cg-color-bg-tertiary);
  border-right: 1px solid var(--cg-color-border);
  overflow-y: auto;
  flex-shrink: 0;
}

.sidebar-section {
  padding: var(--cg-space-3) 0;
}

.sidebar-section-title {
  padding: 0 var(--cg-space-3);
  margin-bottom: var(--cg-space-2);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.sidebar-item {
  width: 100%;
  padding: 8px var(--cg-space-3);
  background: transparent;
  border: none;
  border-left: 2px solid transparent;
  color: var(--cg-color-text-secondary);
  text-align: left;
  cursor: pointer;
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-normal);
}

.sidebar-item:hover {
  background: var(--cg-color-bg-hover);
  color: var(--cg-color-accent);
}

.sidebar-item.active {
  border-left-color: var(--cg-color-accent);
  color: var(--cg-color-accent);
  background: var(--cg-color-bg-hover);
}

.sidebar-divider {
  height: 1px;
  background: var(--cg-color-border-subtle);
  margin: var(--cg-space-2) var(--cg-space-3);
}

/* Content Area */
.content-area {
  flex: 1;
  overflow-y: auto;
  padding: var(--cg-space-4);
}

.loading {
  text-align: center;
  padding: var(--cg-space-6);
  color: var(--cg-color-text-muted);
}

.error-message {
  background: transparent;
  border: 1px solid var(--cg-color-error);
  padding: var(--cg-space-3);
  color: var(--cg-color-error);
  font-size: var(--cg-font-size-sm);
}

.view-placeholder {
  padding: var(--cg-space-4);
}

.view-title {
  color: var(--cg-color-accent);
  font-size: var(--cg-font-size-lg);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  text-shadow: 0 0 8px var(--cg-color-accent);
  margin: 0 0 var(--cg-space-4) 0;
}

.view-title::before {
  content: '> ';
  opacity: 0.7;
}

.view-placeholder p {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-base);
}

.export-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: transparent;
  color: var(--cg-color-text-primary);
  border: 1px solid var(--cg-color-border);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  font-size: var(--cg-font-size-xs);
  font-family: var(--cg-font-mono);
  cursor: pointer;
}

.export-btn:hover {
  background: var(--cg-color-bg-hover);
  border-color: var(--cg-color-accent);
  color: var(--cg-color-accent);
  box-shadow: 0 0 8px rgba(0, 255, 65, 0.3);
}

/* Environment Selector Dialog */
.dialog-overlay {
  position: fixed;
  inset: 0;
  background: var(--cg-color-bg-overlay);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10003;
}

.dialog-content {
  background: var(--cg-color-bg-primary);
  border: 2px solid var(--cg-color-border);
  box-shadow: 0 0 16px rgba(0, 255, 65, 0.5);
  max-width: 600px;
  width: 90vw;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
}

.env-selector-dialog {
  width: 600px;
}

.dialog-header {
  padding: var(--cg-space-4);
  border-bottom: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg-tertiary);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dialog-title {
  color: var(--cg-color-accent);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  font-size: var(--cg-font-size-sm);
  text-shadow: 0 0 8px var(--cg-color-accent);
  margin: 0;
}

.dialog-body {
  padding: var(--cg-space-4);
  overflow-y: auto;
}

.dialog-message {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-base);
  margin: 0 0 var(--cg-space-4) 0;
}

.env-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.env-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--cg-space-3);
  border: 1px solid var(--cg-color-border-subtle);
  background: var(--cg-color-bg-tertiary);
}

.env-item.current {
  border-color: var(--cg-color-accent);
}

.env-info {
  flex: 1;
}

.env-name-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.env-indicator {
  color: var(--cg-color-accent);
}

.env-name {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-base);
  font-weight: var(--cg-font-weight-semibold);
}

.env-branch {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
}

.current-label {
  margin-left: auto;
  padding: 2px 8px;
  background: transparent;
  border: 1px solid var(--cg-color-border-subtle);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.env-stats {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
}

.switch-btn {
  padding: 6px 12px;
  background: transparent;
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-primary);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  cursor: pointer;
}

.switch-btn:hover {
  border-color: var(--cg-color-accent);
  color: var(--cg-color-accent);
  box-shadow: 0 0 8px rgba(0, 255, 65, 0.3);
}

/* Toast Notifications */
.toast-container {
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 10004;
  display: flex;
  flex-direction: column;
  gap: 8px;
  pointer-events: none;
}

.toast {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: var(--cg-color-bg-primary);
  border: 1px solid var(--cg-color-border);
  box-shadow: 0 0 8px rgba(0, 255, 65, 0.4);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-primary);
  pointer-events: auto;
  min-width: 180px;
  max-width: 300px;
  font-family: var(--cg-font-mono);
}

.toast.info { border-left: 3px solid var(--cg-color-info); }
.toast.success { border-left: 3px solid var(--cg-color-success); }
.toast.warning { border-left: 3px solid var(--cg-color-warning); }
.toast.error { border-left: 3px solid var(--cg-color-error); }

.toast-icon {
  font-size: 10px;
  font-weight: bold;
}

.toast-message {
  flex: 1;
}

/* Toast transitions */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.toast-move {
  transition: transform 0.3s ease;
}

/* Scrollbar */
.sidebar::-webkit-scrollbar,
.content-area::-webkit-scrollbar {
  width: 8px;
}

.sidebar::-webkit-scrollbar-track,
.content-area::-webkit-scrollbar-track {
  background: var(--cg-color-bg-tertiary);
}

.sidebar::-webkit-scrollbar-thumb,
.content-area::-webkit-scrollbar-thumb {
  background: var(--cg-color-border-subtle);
  border: 1px solid var(--cg-color-bg-tertiary);
}

.sidebar::-webkit-scrollbar-thumb:hover,
.content-area::-webkit-scrollbar-thumb:hover {
  background: var(--cg-color-accent);
}
</style>
