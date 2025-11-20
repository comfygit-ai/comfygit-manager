<template>
  <div class="comfygit-panel">
    <div class="panel-header">
      <div class="header-left">
        <h2 class="panel-title">ComfyGit</h2>
        <div v-if="status" class="header-info">
          <span class="env-name">{{ status.environment }}</span>
          <span class="branch-name">({{ status.branch || 'detached' }})</span>
          <span :class="['status-dot', statusColor]" :title="statusTooltip"></span>
        </div>
        <div v-else class="header-info loading-text">Loading...</div>
      </div>
      <div class="header-actions">
        <button class="icon-btn" :class="{ spinning: isLoading }" @click="refresh" title="Refresh">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M13.65 2.35a8 8 0 1 0 1.4 9.65h-2.25a5.75 5.75 0 1 1-1-6.45L9.5 8H16V1.5l-2.35 2.35z"/>
          </svg>
        </button>
        <button class="icon-btn" @click="cycleTheme" title="Switch theme (Ctrl+Shift+T)">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1a7 7 0 0 0 0 14A7 7 0 0 0 8 1zm0 12.5V2.5a5.5 5.5 0 0 1 0 11z"/>
          </svg>
        </button>
        <button class="icon-btn" @click="emit('close')" title="Close">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="panel-content">
      <div v-if="error" class="error-message">
        {{ error }}
      </div>
      <div v-else-if="!status" class="loading">
        Loading status...
      </div>
      <template v-else>
        <StatusSection :status="status" />
        <BranchSection
          :branches="branches"
          :current="status.branch"
          @switch="handleBranchSwitch"
          @create="handleBranchCreate"
        />
        <HistorySection
          :commits="commits"
          @select="handleCommitSelect"
          @checkout="handleCheckout"
        />
      </template>
    </div>

    <div class="panel-footer">
      <button class="export-btn" @click="handleExport" :disabled="!status">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 12L3 7h3V1h4v6h3L8 12z"/>
          <path d="M14 14H2v-2h12v2z"/>
        </svg>
        Export
      </button>
    </div>

    <!-- Commit Detail Modal -->
    <CommitDetailModal
      v-if="selectedCommit"
      :commit="selectedCommit"
      @close="selectedCommit = null"
      @checkout="handleCheckout"
      @createBranch="handleBranchFromCommit"
    />

    <!-- Confirm Dialog -->
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
import { applyTheme, getAvailableThemes, getCurrentTheme, type ThemeName } from '@/themes'
import type { ComfyGitStatus, CommitInfo, BranchInfo } from '@/types/comfygit'

// Theme cycling function
function cycleTheme() {
  const themes = getAvailableThemes()
  const currentIndex = themes.findIndex(t => t.id === getCurrentTheme())
  const nextIndex = (currentIndex + 1) % themes.length
  const nextTheme = themes[nextIndex].id as ThemeName
  applyTheme(nextTheme)
}

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
  switchBranch
} = useComfyGitService()

const status = ref<ComfyGitStatus | null>(null)
const commits = ref<CommitInfo[]>([])
const branches = ref<BranchInfo[]>([])
const isLoading = ref(false)
const error = ref<string | null>(null)
const selectedCommit = ref<CommitInfo | null>(null)

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
    const [statusRes, historyRes, branchesRes] = await Promise.all([
      getStatus(),
      getHistory(),
      getBranches()
    ])
    status.value = statusRes
    commits.value = historyRes.commits
    branches.value = branchesRes.branches
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

  const result = await checkout(commit.hash)

  if (result.status === 'warning' && result.reason === 'uncommitted_changes') {
    confirmDialog.value = {
      title: 'Uncommitted Changes',
      message: 'You have uncommitted changes that will be lost.',
      details: getChangeDetails(),
      warning: 'Checking out will discard these changes.',
      confirmLabel: 'Discard & Checkout',
      cancelLabel: 'Cancel',
      destructive: true,
      onConfirm: async () => {
        confirmDialog.value = null
        await checkout(commit.hash, true)
        // Server will restart to sync
      }
    }
  } else if (result.status === 'success') {
    // Server will restart to sync
  } else {
    alert(result.message || 'Checkout failed')
  }
}

async function handleBranchSwitch(branchName: string) {
  const result = await switchBranch(branchName)

  if (result.status === 'warning') {
    if (result.reason === 'uncommitted_changes') {
      confirmDialog.value = {
        title: 'Uncommitted Changes',
        message: 'You have uncommitted changes.',
        details: getChangeDetails(),
        warning: 'Switch anyway? Changes will remain in current branch.',
        confirmLabel: 'Switch Anyway',
        cancelLabel: 'Cancel',
        onConfirm: async () => {
          confirmDialog.value = null
          // Force switch with uncommitted changes
          await switchBranch(branchName, true)
          // Server will restart after successful switch
        }
      }
    }
  } else if (result.status === 'success') {
    // Server will restart to sync new branch
  }
}

async function handleBranchCreate(name: string) {
  const result = await createBranch(name)
  if (result.status === 'success') {
    await refresh()
  } else {
    alert(result.message || 'Failed to create branch')
  }
}

async function handleBranchFromCommit(commit: CommitInfo) {
  selectedCommit.value = null
  const name = prompt('Enter branch name:')
  if (name) {
    const result = await createBranch(name, commit.hash)
    if (result.status === 'success') {
      await refresh()
    } else {
      alert(result.message || 'Failed to create branch')
    }
  }
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
  try {
    const result = await exportEnv()
    if (result.status === 'success') {
      alert(`Export successful!\n\nSaved to: ${result.path}\n\nModels without sources: ${result.models_without_sources}`)
    } else {
      alert(`Export failed: ${result.message}`)
    }
  } catch (err) {
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
  background: var(--comfy-menu-bg, #353535);
  color: var(--input-text, #ddd);
  border: 1px solid var(--border-color, #4a4a4a);
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  overflow: hidden;
}

.panel-header {
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-color, #4a4a4a);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--comfy-input-bg, #2a2a2a);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.panel-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: #f97316;
}

.header-info {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
}

.env-name {
  color: var(--input-text, #ddd);
  font-weight: 500;
}

.branch-name {
  color: var(--descrip-text, #999);
}

.loading-text {
  color: var(--descrip-text, #999);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.status-dot.success { background: #22c55e; }
.status-dot.warning { background: #fbbf24; }
.status-dot.error { background: #ef4444; }
.status-dot.neutral { background: #6b7280; }

.header-actions {
  display: flex;
  gap: 4px;
}

.icon-btn {
  background: transparent;
  border: none;
  color: var(--input-text, #ddd);
  cursor: pointer;
  padding: 6px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-btn:hover {
  background: var(--border-color, #4a4a4a);
}

.icon-btn.spinning svg {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.panel-content {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}

.loading {
  text-align: center;
  padding: 20px;
  color: var(--descrip-text, #999);
}

.error-message {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid #ef4444;
  border-radius: 4px;
  padding: 12px;
  color: #fca5a5;
  font-size: 13px;
}

.panel-footer {
  padding: 12px 16px;
  border-top: 1px solid var(--border-color, #4a4a4a);
}

.export-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  background: var(--comfy-input-bg, #222);
  color: var(--input-text, #ddd);
  border: 1px solid var(--border-color, #4a4a4a);
}

.export-btn:hover:not(:disabled) {
  background: var(--border-color, #4a4a4a);
}

.export-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
