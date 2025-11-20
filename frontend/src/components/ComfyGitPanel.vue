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
import type { ComfyGitStatus, CommitInfo, BranchInfo } from '@/types/comfygit'

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

  const hasChanges = status.value && (
    status.value.workflows.new.length > 0 ||
    status.value.workflows.modified.length > 0 ||
    status.value.workflows.deleted.length > 0 ||
    status.value.has_changes
  )

  // Always confirm checkout since it restarts ComfyUI
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

  // Always confirm branch switch since it restarts ComfyUI
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
      } else if (result.status === 'warning' && result.reason === 'uncommitted_changes') {
        // This shouldn't happen since we pass force flag, but handle it
        showToast('Switch cancelled due to uncommitted changes', 'warning')
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
  background: var(--cg-color-bg-primary, var(--comfy-menu-bg, #353535));
  border: 1px solid var(--cg-color-border, var(--border-color, #4a4a4a));
  border-radius: var(--cg-radius-md, 4px);
  box-shadow: var(--cg-shadow-md, 0 4px 12px rgba(0, 0, 0, 0.3));
  font-size: 12px;
  color: var(--cg-color-text-primary, var(--input-text, #ddd));
  pointer-events: auto;
  min-width: 180px;
  max-width: 300px;
}

.toast.info {
  border-left: 3px solid var(--cg-color-info, #3b82f6);
}

.toast.success {
  border-left: 3px solid var(--cg-color-success, #22c55e);
}

.toast.warning {
  border-left: 3px solid var(--cg-color-warning, #fbbf24);
}

.toast.error {
  border-left: 3px solid var(--cg-color-error, #ef4444);
}

.toast-icon {
  font-size: 10px;
  font-weight: bold;
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  flex-shrink: 0;
}

.toast.info .toast-icon {
  color: var(--cg-color-info, #3b82f6);
}

.toast.success .toast-icon {
  color: var(--cg-color-success, #22c55e);
}

.toast.warning .toast-icon {
  color: var(--cg-color-warning, #fbbf24);
}

.toast.error .toast-icon {
  color: var(--cg-color-error, #ef4444);
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
</style>
