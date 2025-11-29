<template>
  <div class="comfygit-panel">
    <!-- Header -->
    <div class="panel-header">
      <div class="header-left">
        <h2 class="panel-title">ComfyGit</h2>
        <div v-if="status" class="header-info">
          <!-- <span class="env-name">{{ currentEnvironment?.name || status.environment }}</span> -->
          <!-- <span class="branch-name">@{{ status.branch || 'detached' }}</span> -->
          <!-- <span :class="['status-dot', statusColor]" :title="statusTooltip"></span> -->
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
      <div class="env-switcher-header">
        <div class="env-switcher-label">CURRENT ENVIRONMENT</div>
        <div class="env-control-buttons">
          <button class="env-control-btn" title="Restart environment" @click="handleRestart">
            Restart
          </button>
          <button class="env-control-btn stop" title="Stop environment" @click="handleStop">
            Stop
          </button>
        </div>
      </div>
      <button class="env-switcher-btn" @click="selectView('environments', 'all-envs')">
        <div v-if="status" class="header-info">
          <span>{{ currentEnvironment?.name || status?.environment || 'Loading...' }}</span>
          <span class="branch-name">({{ status.branch || 'detached' }})</span>
          <!-- <span :class="['status-dot', statusColor]" :title="statusTooltip"></span> -->
        </div>
        <!-- <span>{{ currentEnvironment?.name || status?.environment || 'Loading...' }}</span> -->
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
          <StatusSection
            v-if="currentView === 'status'"
            :status="status!"
            :setup-state="setupState"
            @switch-branch="handleSwitchBranchClick"
            @commit-changes="showCommitModal = true"
            @sync-environment="showSyncModal = true"
            @view-workflows="selectView('workflows', 'this-env')"
            @view-history="selectView('history', 'this-env')"
            @view-debug="selectView('debug-env', 'this-env')"
            @start-setup="showSetupWizard = true"
            @view-environments="selectView('environments', 'all-envs')"
            @create-environment="handleCreateEnvironmentFromStatus"
          />

          <!-- Workflows View -->
          <WorkflowsSection
            v-else-if="currentView === 'workflows'"
            ref="workflowsSectionRef"
            @refresh="refresh"
          />

          <!-- Models (Environment) View -->
          <ModelsEnvSection
            v-else-if="currentView === 'models-env'"
            @navigate="handleNavigate"
          />

          <!-- Branches View -->
          <BranchSection
            v-else-if="currentView === 'branches'"
            :branches="branches"
            :current="status?.branch || null"
            @switch="handleBranchSwitch"
            @create="handleBranchCreate"
            @delete="handleBranchDelete"
          />

          <!-- History View -->
          <HistorySection
            v-else-if="currentView === 'history'"
            :commits="commits"
            @select="handleCommitSelect"
            @checkout="handleCheckout"
          />

          <!-- Nodes View -->
          <NodesSection
            v-else-if="currentView === 'nodes'"
            @open-node-manager="handleOpenNodeManager"
          />

          <!-- Debug (Environment) View -->
          <DebugEnvSection v-else-if="currentView === 'debug-env'" />

          <!-- Environments View -->
          <EnvironmentsSection
            v-else-if="currentView === 'environments'"
            ref="environmentsSectionRef"
            @switch="handleEnvironmentSwitch"
            @create="handleEnvironmentCreate"
            @delete="handleEnvironmentDelete"
          />

          <!-- Model Index View -->
          <ModelIndexSection v-else-if="currentView === 'model-index'" @refresh="refresh" />

          <!-- Settings View -->
          <WorkspaceSettingsSection v-else-if="currentView === 'settings'" />

          <!-- Debug (Workspace) View -->
          <WorkspaceDebugSection v-else-if="currentView === 'debug-workspace'" />

          <!-- Export View -->
          <ExportSection v-else-if="currentView === 'export'" />

          <!-- Import View -->
          <ImportSection v-else-if="currentView === 'import'" />

          <!-- Remotes View -->
          <RemotesSection v-else-if="currentView === 'remotes'" />
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

    <!-- Environment Switching Modals -->
    <ConfirmSwitchModal
      :show="showConfirmSwitch"
      :from-environment="currentEnvironment?.name || 'unknown'"
      :to-environment="targetEnvironment"
      @confirm="confirmEnvironmentSwitch"
      @close="cancelEnvironmentSwitch"
    />

    <!-- Commit Modal (reusing CommitPopover in modal mode) -->
    <CommitPopover
      v-if="showCommitModal && status"
      :status="status"
      :as-modal="true"
      @close="showCommitModal = false"
      @committed="handleCommitSuccess"
    />

    <!-- Sync Environment Modal -->
    <SyncEnvironmentModal
      v-if="showSyncModal && status"
      :show="showSyncModal"
      :mismatch-details="{
        missing_nodes: status.comparison.missing_nodes,
        extra_nodes: status.comparison.extra_nodes
      }"
      @confirm="handleSyncConfirm"
      @close="showSyncModal = false"
    />

    <SwitchProgressModal
      :show="showSwitchProgress"
      :state="switchProgress.state"
      :progress="switchProgress.progress"
      :message="switchProgress.message"
    />

    <!-- Create Environment Progress Modal -->
    <div v-if="showCreateProgress" class="dialog-overlay">
      <div class="dialog-content create-progress-dialog">
        <div class="dialog-header">
          <h3 class="dialog-title">CREATING ENVIRONMENT</h3>
        </div>
        <div class="dialog-body create-progress-body">
          <div class="create-progress-spinner"></div>
          <p class="create-progress-message">{{ createProgress.message }}</p>
          <p class="create-progress-hint">This may take several minutes...</p>
        </div>
      </div>
    </div>

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

    <!-- First-Time Setup Wizard -->
    <FirstTimeSetupWizard
      v-if="showSetupWizard"
      :default-path="setupStatus?.default_path || '~/comfygit'"
      :detected-models-dir="setupStatus?.detected_models_dir || null"
      @complete="handleSetupComplete"
      @close="showSetupWizard = false"
    />

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
import EnvironmentSwitcher from './EnvironmentSwitcher.vue'
import StatusSection from './StatusSection.vue'
import BranchSection from './BranchSection.vue'
import HistorySection from './HistorySection.vue'
import WorkflowsSection from './WorkflowsSection.vue'
import ModelsEnvSection from './ModelsEnvSection.vue'
import ModelIndexSection from './ModelIndexSection.vue'
import NodesSection from './NodesSection.vue'
import RemotesSection from './RemotesSection.vue'
import WorkspaceSettingsSection from './WorkspaceSettingsSection.vue'
import WorkspaceDebugSection from './WorkspaceDebugSection.vue'
import DebugEnvSection from './DebugEnvSection.vue'
import EnvironmentsSection from './EnvironmentsSection.vue'
import ExportSection from './ExportSection.vue'
import ImportSection from './ImportSection.vue'
import CommitDetailModal from './CommitDetailModal.vue'
import ConfirmDialog from './ConfirmDialog.vue'
import CommitPopover from './CommitPopover.vue'
import ConfirmSwitchModal from './base/molecules/ConfirmSwitchModal.vue'
import SwitchProgressModal from './base/molecules/SwitchProgressModal.vue'
import SyncEnvironmentModal from './base/molecules/SyncEnvironmentModal.vue'
import FirstTimeSetupWizard from './FirstTimeSetupWizard.vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import { useOrchestratorService } from '@/composables/useOrchestratorService'
import type { ComfyGitStatus, CommitInfo, BranchInfo, EnvironmentInfo, CreateEnvironmentRequest, SetupStatus, SetupState } from '@/types/comfygit'

const emit = defineEmits<{
  close: []
  statusUpdate: [status: ComfyGitStatus]
}>()

const {
  getStatus,
  getHistory,
  getBranches,
  checkout,
  createBranch,
  switchBranch,
  deleteBranch,
  getEnvironments,
  switchEnvironment,
  getSwitchProgress,
  createEnvironment,
  getCreateProgress,
  deleteEnvironment,
  syncEnvironmentManually,
  getSetupStatus
} = useComfyGitService()

const orchestratorService = useOrchestratorService()

type ViewName = 'status' | 'workflows' | 'models-env' | 'branches' | 'history' | 'nodes' | 'debug-env' |
                'environments' | 'model-index' | 'settings' | 'debug-workspace' |
                'export' | 'import' | 'remotes'

type SectionName = 'this-env' | 'all-envs' | 'sharing'

const status = ref<ComfyGitStatus | null>(null)
const commits = ref<CommitInfo[]>([])
const branches = ref<BranchInfo[]>([])
const environments = ref<EnvironmentInfo[]>([])
const currentEnvironment = computed(() => environments.value.find(e => e.is_current))

// First-time setup state
const setupStatus = ref<SetupStatus | null>(null)
const showSetupWizard = ref(false)
const setupState = computed<SetupState>(() => {
  return setupStatus.value?.state || 'managed'
})
const isLoading = ref(false)
const error = ref<string | null>(null)
const selectedCommit = ref<CommitInfo | null>(null)
const showEnvironmentSelector = ref(false)

// Ref to child components for triggering reloads
const workflowsSectionRef = ref<{ loadWorkflows: (forceRefresh?: boolean) => Promise<void> } | null>(null)
const environmentsSectionRef = ref<{ loadEnvironments: () => Promise<void>; openCreateModal: () => void } | null>(null)

// Environment switching modals
const showConfirmSwitch = ref(false)
const showSwitchProgress = ref(false)
const targetEnvironment = ref<string>('')
const switchProgress = ref({ state: 'idle', progress: 0, message: '' })
let switchPollInterval: number | null = null
let progressSimulationInterval: number | null = null

// Environment creation state
const showCreateProgress = ref(false)
const createProgress = ref({ state: 'idle', message: '' })
const pendingCreateRequest = ref<CreateEnvironmentRequest | null>(null)
let createPollInterval: number | null = null

const currentView = ref<ViewName>('status')
const currentSection = ref<SectionName>('this-env')

function selectView(view: ViewName, section: SectionName) {
  currentView.value = view
  currentSection.value = section
}

function handleNavigate(view: string) {
  const viewMap: Record<string, { view: ViewName; section: SectionName }> = {
    'model-index': { view: 'model-index', section: 'all-envs' }
  }
  const target = viewMap[view]
  if (target) {
    selectView(target.view, target.section)
  }
}

function handleSwitchBranchClick() {
  selectView('branches', 'this-env')
}

function handleOpenNodeManager() {
  // Close the panel first
  emit('close')

  // Find and click the Manager button in the toolbar
  // ComfyUI-Manager adds a button with text "Manager" to the menu
  setTimeout(() => {
    const buttons = document.querySelectorAll('button.comfyui-button')
    for (const btn of buttons) {
      if (btn.textContent?.trim() === 'Manager') {
        (btn as HTMLButtonElement).click()
        return
      }
    }
    console.warn('[ComfyGit] Manager button not found in toolbar')
  }, 100) // Small delay to let panel close first
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

// Modal state
const showCommitModal = ref(false)
const showSyncModal = ref(false)

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

function handleToast(message: string, type: Toast['type']) {
  showToast(message, type)
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
    // Use forceRefresh=true to clear cached environment state
    const [statusRes, historyRes, branchesRes, envsRes] = await Promise.all([
      getStatus(true),
      getHistory(),
      getBranches(),
      getEnvironments()
    ])
    status.value = statusRes
    commits.value = historyRes.commits
    branches.value = branchesRes.branches
    environments.value = envsRes
    emit('statusUpdate', statusRes)

    // Also refresh workflows section if it's mounted
    if (workflowsSectionRef.value) {
      await workflowsSectionRef.value.loadWorkflows(true)
    }
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

      // Set flag to prompt for refresh after server restart
      setRefreshFlag()

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

      // Set flag to prompt for refresh after server restart
      setRefreshFlag()

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

async function handleBranchDelete(branchName: string, force = false) {
  const doDelete = async (forceDelete: boolean) => {
    const toastId = showToast(`Deleting branch ${branchName}...`, 'info', 0)
    try {
      const result = await deleteBranch(branchName, forceDelete)
      removeToast(toastId)

      if (result.status === 'success') {
        showToast(`Branch "${branchName}" deleted`, 'success')
        await refresh()
      } else {
        // Check if it's an unmerged branch error
        if (result.message?.includes('not fully merged')) {
          // Ask user if they want to force delete
          confirmDialog.value = {
            title: 'Branch Not Fully Merged',
            message: `The branch "${branchName}" has commits that haven't been merged.`,
            warning: 'Force deleting will permanently lose any unmerged commits.',
            confirmLabel: 'Force Delete',
            cancelLabel: 'Cancel',
            onConfirm: async () => {
              confirmDialog.value = null
              await doDelete(true)
            }
          }
        } else {
          showToast(result.message || 'Failed to delete branch', 'error')
        }
      }
    } catch (err) {
      removeToast(toastId)
      const errorMessage = err instanceof Error ? err.message : 'Failed to delete branch'
      // Check if it's an unmerged branch error
      if (errorMessage.includes('not fully merged')) {
        confirmDialog.value = {
          title: 'Branch Not Fully Merged',
          message: `The branch "${branchName}" has commits that haven't been merged.`,
          warning: 'Force deleting will permanently lose any unmerged commits.',
          confirmLabel: 'Force Delete',
          cancelLabel: 'Cancel',
          onConfirm: async () => {
            confirmDialog.value = null
            await doDelete(true)
          }
        }
      } else {
        showToast(errorMessage, 'error')
      }
    }
  }

  confirmDialog.value = {
    title: 'Delete Branch',
    message: `Delete branch "${branchName}"?`,
    warning: 'This action cannot be undone.',
    confirmLabel: 'Delete',
    cancelLabel: 'Cancel',
    onConfirm: async () => {
      confirmDialog.value = null
      await doDelete(force)
    }
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

// Set flag to show refresh notification after server restart
function setRefreshFlag() {
  sessionStorage.setItem('ComfyGit.PendingRefresh', 'true')
  console.log('[ComfyGit] Set refresh flag for post-restart notification')
}

// Restart current environment
async function handleRestart() {
  confirmDialog.value = {
    title: 'Restart Environment',
    message: 'Restart the current environment?',
    warning: 'ComfyUI will restart. Any running workflows will be interrupted.',
    confirmLabel: 'Restart',
    cancelLabel: 'Cancel',
    onConfirm: async () => {
      confirmDialog.value = null
      setRefreshFlag()
      showToast('Restarting environment...', 'info')
      try {
        // Call the reboot endpoint
        if (window.app?.api) {
          await window.app.api.fetchApi('/v2/manager/reboot')
        }
      } catch {
        // Expected - server will restart and connection will drop
      }
    }
  }
}

// Stop current environment
async function handleStop() {
  confirmDialog.value = {
    title: 'Stop Environment',
    message: 'Stop the current environment?',
    warning: 'This will completely shut down ComfyUI. You will need to restart manually.',
    confirmLabel: 'Stop',
    cancelLabel: 'Cancel',
    onConfirm: async () => {
      confirmDialog.value = null
      showToast('Stopping environment...', 'info')
      try {
        // Call the stop endpoint - works for both supervised and unmanaged environments
        if (window.app?.api) {
          await window.app.api.fetchApi('/v2/comfygit/stop', { method: 'POST' })
        }
      } catch {
        // Expected - server will shut down and connection will drop
      }
    }
  }
}

// Environment switching flow
async function handleEnvironmentSwitch(envName: string) {
  showEnvironmentSelector.value = false
  targetEnvironment.value = envName
  showConfirmSwitch.value = true
}

async function confirmEnvironmentSwitch() {
  showConfirmSwitch.value = false
  showSwitchProgress.value = true

  // Set flag to prompt for refresh after server restart
  setRefreshFlag()

  switchProgress.value = {
    progress: 10,
    state: getStateFromProgress(10),
    message: getMessageFromProgress(10)
  }

  try {
    // Initiate the switch
    await switchEnvironment(targetEnvironment.value)

    // Start smooth progress simulation (10% → 60% over 5 seconds)
    startProgressSimulation()

    // Start polling for real progress
    startSwitchPolling()
  } catch (err) {
    stopProgressSimulation()
    showSwitchProgress.value = false
    showToast(`Failed to initiate switch: ${err instanceof Error ? err.message : 'Unknown error'}`, 'error')
    switchProgress.value = { state: 'idle', progress: 0, message: '' }
  }
}

function getStateFromProgress(progress: number): string {
  if (progress >= 100) return 'complete'
  if (progress >= 80) return 'validating'
  if (progress >= 60) return 'starting'
  if (progress >= 30) return 'syncing'
  return 'preparing'
}

function getMessageFromProgress(progress: number): string {
  const messages: Record<string, string> = {
    preparing: 'Stopping current environment...',
    syncing: 'Preparing target environment...',
    starting: 'Starting new environment...',
    validating: 'Waiting for server to be ready...',
    complete: 'Switch complete!'
  }
  return messages[getStateFromProgress(progress)] || ''
}

function startProgressSimulation() {
  if (progressSimulationInterval) return

  let simulatedProgress = 10
  const targetProgress = 60
  const durationMs = 5000
  const intervalMs = 100
  const incrementPerTick = (targetProgress - simulatedProgress) / (durationMs / intervalMs)

  progressSimulationInterval = window.setInterval(() => {
    simulatedProgress += incrementPerTick

    if (simulatedProgress >= targetProgress) {
      simulatedProgress = targetProgress
      stopProgressSimulation()
    }

    // Only update if we haven't received real progress > 60% yet
    if (switchProgress.value.progress < targetProgress) {
      const progress = Math.floor(simulatedProgress)
      switchProgress.value = {
        progress,
        state: getStateFromProgress(progress),
        message: getMessageFromProgress(progress)
      }
    }
  }, intervalMs)
}

function stopProgressSimulation() {
  if (progressSimulationInterval) {
    clearInterval(progressSimulationInterval)
    progressSimulationInterval = null
  }
}

function startSwitchPolling() {
  if (switchPollInterval) return

  switchPollInterval = window.setInterval(async () => {
    try {
      // Try orchestrator first (survives ComfyUI restarts)
      let progress = await orchestratorService.getStatus()

      // Fallback to ComfyUI server if orchestrator unavailable
      if (!progress || progress.state === 'idle') {
        progress = await getSwitchProgress()
      }

      if (!progress) {
        // No progress info available, keep current state
        return
      }

      const realProgress = progress.progress || 0

      // Stop simulation once real progress reaches 60%+
      if (realProgress >= 60) {
        stopProgressSimulation()
      }

      // Calculate final progress (never go backwards)
      const finalProgress = Math.max(realProgress, switchProgress.value.progress)

      // Determine if we're using real state or derived state
      const usingRealState = progress.state && progress.state !== 'idle' && progress.state !== 'unknown'

      const finalState = usingRealState
        ? progress.state
        : getStateFromProgress(finalProgress)

      // If using derived state, also derive message. Otherwise use real message or derive.
      const finalMessage = usingRealState
        ? (progress.message || getMessageFromProgress(finalProgress))
        : getMessageFromProgress(finalProgress)

      // Update progress (simulation handles 10-60%, real handles 60%+)
      switchProgress.value = {
        state: finalState,
        progress: finalProgress,
        message: finalMessage
      }

      // Handle terminal states
      if (progress.state === 'complete') {
        stopProgressSimulation()
        stopSwitchPolling()
        showSwitchProgress.value = false
        showToast(`✓ Switched to ${targetEnvironment.value}`, 'success')
        await refresh()
        targetEnvironment.value = ''
      } else if (progress.state === 'rolled_back') {
        stopProgressSimulation()
        stopSwitchPolling()
        showSwitchProgress.value = false
        showToast('Switch failed, restored previous environment', 'warning')
        targetEnvironment.value = ''
      } else if (progress.state === 'critical_failure') {
        stopProgressSimulation()
        stopSwitchPolling()
        showSwitchProgress.value = false
        showToast(`Critical error during switch: ${progress.message}`, 'error')
        targetEnvironment.value = ''
      }
    } catch (err) {
      console.error('Failed to poll switch progress:', err)
      // Continue polling - server might be restarting
    }
  }, 1000) // Poll every 1 second
}

function stopSwitchPolling() {
  stopProgressSimulation()
  if (switchPollInterval) {
    clearInterval(switchPollInterval)
    switchPollInterval = null
  }
}

function cancelEnvironmentSwitch() {
  showConfirmSwitch.value = false
  targetEnvironment.value = ''
}

// Commit and Sync handlers
async function handleCommitSuccess() {
  showCommitModal.value = false
  await refresh()
  showToast('✓ Changes committed', 'success')
}

async function handleSyncConfirm() {
  showSyncModal.value = false
  const toastId = showToast('Syncing environment...', 'info', 0)

  try {
    const result = await syncEnvironmentManually('skip', true)

    removeToast(toastId)

    if (result.status === 'success') {
      const parts: string[] = []
      if (result.nodes_installed.length) {
        parts.push(`${result.nodes_installed.length} installed`)
      }
      if (result.nodes_removed.length) {
        parts.push(`${result.nodes_removed.length} removed`)
      }
      const summary = parts.length ? `: ${parts.join(', ')}` : ''
      showToast(`✓ Environment synced${summary}`, 'success')
      await refresh()
    } else {
      const errorMsg = result.errors.length
        ? result.errors.join('; ')
        : result.message
      showToast(`Sync failed: ${errorMsg}`, 'error')
    }
  } catch (err) {
    removeToast(toastId)
    showToast(`Sync error: ${err instanceof Error ? err.message : 'Unknown error'}`, 'error')
  }
}

async function handleEnvironmentCreate(request: CreateEnvironmentRequest) {
  pendingCreateRequest.value = request
  showCreateProgress.value = true
  createProgress.value = { state: 'creating', message: `Creating environment '${request.name}'...` }

  try {
    const result = await createEnvironment(request)

    if (result.status === 'started') {
      // Start polling for progress
      startCreatePolling()
    } else if (result.status === 'error') {
      showCreateProgress.value = false
      showToast(`Failed to create environment: ${result.message}. Check debug logs for details.`, 'error')
      pendingCreateRequest.value = null
    }
  } catch (err) {
    showCreateProgress.value = false
    showToast(`Error creating environment: ${err instanceof Error ? err.message : 'Unknown error'}. Check debug logs.`, 'error')
    pendingCreateRequest.value = null
  }
}

function startCreatePolling() {
  if (createPollInterval) return

  createPollInterval = window.setInterval(async () => {
    try {
      const progress = await getCreateProgress()
      createProgress.value = { state: progress.state, message: progress.message }

      if (progress.state === 'complete') {
        stopCreatePolling()
        showCreateProgress.value = false
        showToast(`✓ Environment '${progress.environment_name}' created`, 'success')

        // Refresh the environments list
        await refresh()
        if (environmentsSectionRef.value) {
          await environmentsSectionRef.value.loadEnvironments()
        }

        // If switch_after was requested, trigger the switch
        if (pendingCreateRequest.value?.switch_after && progress.environment_name) {
          await handleEnvironmentSwitch(progress.environment_name)
        }

        pendingCreateRequest.value = null
      } else if (progress.state === 'error') {
        stopCreatePolling()
        showCreateProgress.value = false
        showToast(`Failed to create environment: ${progress.error || progress.message}. Check debug logs.`, 'error')
        pendingCreateRequest.value = null
      }
    } catch (err) {
      console.error('Failed to poll create progress:', err)
      // Continue polling - might be transient
    }
  }, 2000) // Poll every 2 seconds
}

function stopCreatePolling() {
  if (createPollInterval) {
    clearInterval(createPollInterval)
    createPollInterval = null
  }
}

async function handleEnvironmentDelete(envName: string) {
  // Check if trying to delete current environment
  if (currentEnvironment.value?.name === envName) {
    showToast('Cannot delete the currently active environment. Switch to another environment first.', 'error')
    return
  }

  confirmDialog.value = {
    title: 'Delete Environment',
    message: `Are you sure you want to delete "${envName}"?`,
    warning: 'This will permanently delete the environment and all its data. This action cannot be undone.',
    confirmLabel: 'Delete',
    cancelLabel: 'Cancel',
    destructive: true,
    onConfirm: async () => {
      confirmDialog.value = null

      try {
        const result = await deleteEnvironment(envName)

        if (result.status === 'success') {
          showToast(`Environment "${envName}" deleted`, 'success')
          await refresh()
          if (environmentsSectionRef.value) {
            await environmentsSectionRef.value.loadEnvironments()
          }
        } else {
          showToast(result.message || 'Failed to delete environment', 'error')
        }
      } catch (err) {
        showToast(`Error deleting environment: ${err instanceof Error ? err.message : 'Unknown error'}`, 'error')
      }
    }
  }
}

async function handleSetupComplete(environmentName: string) {
  showSetupWizard.value = false

  // Refresh setup status
  try {
    setupStatus.value = await getSetupStatus()
  } catch {
    // Ignore errors
  }

  // Trigger environment switch
  await handleEnvironmentSwitch(environmentName)
}

function handleCreateEnvironmentFromStatus() {
  // Navigate to environments section and trigger create modal
  selectView('environments', 'all-envs')
  // Give time for section to mount, then open create modal
  setTimeout(() => {
    environmentsSectionRef.value?.openCreateModal()
  }, 100)
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

onMounted(async () => {
  // Check setup status first
  try {
    setupStatus.value = await getSetupStatus()

    if (setupStatus.value.state === 'no_workspace') {
      showSetupWizard.value = true
      return // Don't load normal panel data yet
    }
  } catch (err) {
    console.warn('Setup status check failed, proceeding normally:', err)
  }

  await refresh()
})
</script>

<style scoped>
.comfygit-panel {
  display: flex;
  flex-direction: column;
  height: 70vh;
  width: 100%;
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
  font-size: var(--cg-font-size-xs);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.status-dot.success { background: var(--cg-color-success); }
.status-dot.warning { background: var(--cg-color-warning); }
.status-dot.error { background: var(--cg-color-error); }
.status-dot.neutral { background: var(--cg-color-text-muted); }

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

.env-switcher-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.env-switcher-label {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.env-control-buttons {
  display: flex;
  gap: var(--cg-space-2);
}

.env-control-btn {
  padding: 2px 8px;
  font-family: var(--cg-font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  background: transparent;
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-muted);
  cursor: pointer;
  transition: all var(--cg-transition-fast);
}

.env-control-btn:hover {
  border-color: var(--cg-color-accent);
  color: var(--cg-color-accent);
}

.env-control-btn.stop {
  border-color: var(--cg-color-error);
  color: var(--cg-color-error);
  opacity: 0.7;
}

.env-control-btn.stop:hover {
  opacity: 1;
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
  width: 234px;
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
  margin: 0 0 var(--cg-space-4) 0;
}

.view-placeholder p {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-base);
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
  max-width: 780px;
  width: 90vw;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
}

.env-selector-dialog {
  width: 780px;
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
  min-width: 234px;
  max-width: 390px;
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

/* Create Progress Modal */
.create-progress-dialog {
  width: 400px;
}

.create-progress-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--cg-space-4);
  padding: var(--cg-space-6) var(--cg-space-4);
}

.create-progress-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--cg-color-border-subtle);
  border-top-color: var(--cg-color-accent);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.create-progress-message {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  text-align: center;
  margin: 0;
}

.create-progress-hint {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  text-align: center;
  margin: 0;
}
</style>
