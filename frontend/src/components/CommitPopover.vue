<template>
  <!-- Modal mode (teleport to body with overlay) -->
  <Teleport v-if="asModal" to="body">
    <div class="modal-overlay" @click="emit('close')">
      <div class="commit-popover modal" @click.stop>
        <div class="popover-header">
          <h3 class="popover-title">COMMIT CHANGES</h3>
          <button class="close-btn" @click="emit('close')">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z"/>
            </svg>
          </button>
        </div>

        <div class="popover-body">
          <div v-if="status && hasChanges" class="changes-summary">
            <div v-if="status.workflows.new.length" class="change-item">
              <span class="change-icon new">+</span>
              <span>{{ status.workflows.new.length }} new workflow(s)</span>
            </div>
            <div v-if="status.workflows.modified.length" class="change-item">
              <span class="change-icon modified">~</span>
              <span>{{ status.workflows.modified.length }} modified</span>
            </div>
            <div v-if="status.workflows.deleted.length" class="change-item">
              <span class="change-icon deleted">-</span>
              <span>{{ status.workflows.deleted.length }} deleted</span>
            </div>
            <div v-if="status.git_changes.nodes_added.length" class="change-item">
              <span class="change-icon new">+</span>
              <span>{{ status.git_changes.nodes_added.length }} node(s) added</span>
            </div>
            <div v-if="status.git_changes.nodes_removed.length" class="change-item">
              <span class="change-icon deleted">-</span>
              <span>{{ status.git_changes.nodes_removed.length }} node(s) removed</span>
            </div>
            <!-- Fallback for config-only changes (uv.lock, pyproject.toml, etc.) -->
            <div v-if="!hasSpecificChanges" class="change-item">
              <span class="change-icon modified">~</span>
              <span>Configuration updated</span>
            </div>
          </div>
          <div v-else-if="status" class="no-changes">
            No changes to commit
          </div>
          <div v-else class="loading">
            Loading...
          </div>

          <div v-if="hasUncommittedIssues" class="issues-error">
            <div class="error-header">
              <span class="error-icon">⚠</span>
              <span class="error-title">{{ uncommittedWorkflowsWithIssues.length }} workflow(s) can't run</span>
            </div>
            <div class="issues-list">
              <div v-for="workflow in uncommittedWorkflowsWithIssues" :key="workflow.name" class="issue-item">
                <strong>{{ workflow.name }}</strong>: {{ workflow.issue_summary }}
              </div>
            </div>
            <BaseCheckbox v-model="allowIssues" class="allow-issues-toggle">
              Commit anyway (ignore issues)
            </BaseCheckbox>
          </div>

          <div class="message-section">
            <BaseTextarea
              v-model="message"
              :placeholder="isBlockedByIssues ? 'Enable \'Allow issues\' to commit' : hasChanges ? 'Describe your changes...' : 'No changes'"
              :disabled="!hasChanges || isLoading || isBlockedByIssues"
              :rows="3"
              @ctrl-enter="handleCommit"
            />
          </div>

          <div v-if="result" :class="['result', result.type]">
            {{ result.message }}
          </div>
        </div>

        <div class="popover-footer">
          <BaseButton variant="secondary" @click="emit('close')">
            Cancel
          </BaseButton>
          <BaseButton
            :variant="allowIssues ? 'danger' : 'primary'"
            :disabled="!hasChanges || !message.trim() || isLoading || isBlockedByIssues"
            :loading="isLoading"
            @click="handleCommit"
          >
            {{ isLoading ? 'Committing...' : allowIssues ? '⚠️ Force Commit' : 'Commit' }}
          </BaseButton>
        </div>
      </div>
    </div>
  </Teleport>

  <!-- Popover mode (positioned inline) -->
  <div v-else class="commit-popover">
    <div class="popover-header">
      <h3 class="popover-title">COMMIT CHANGES</h3>
      <button class="close-btn" @click="emit('close')">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z"/>
        </svg>
      </button>
    </div>

    <div class="popover-body">
      <div v-if="status && hasChanges" class="changes-summary">
        <div v-if="status.workflows.new.length" class="change-item">
          <span class="change-icon new">+</span>
          <span>{{ status.workflows.new.length }} new workflow(s)</span>
        </div>
        <div v-if="status.workflows.modified.length" class="change-item">
          <span class="change-icon modified">~</span>
          <span>{{ status.workflows.modified.length }} modified</span>
        </div>
        <div v-if="status.workflows.deleted.length" class="change-item">
          <span class="change-icon deleted">-</span>
          <span>{{ status.workflows.deleted.length }} deleted</span>
        </div>
        <div v-if="status.git_changes.nodes_added.length" class="change-item">
          <span class="change-icon new">+</span>
          <span>{{ status.git_changes.nodes_added.length }} node(s) added</span>
        </div>
        <div v-if="status.git_changes.nodes_removed.length" class="change-item">
          <span class="change-icon deleted">-</span>
          <span>{{ status.git_changes.nodes_removed.length }} node(s) removed</span>
        </div>
        <!-- Fallback for config-only changes (uv.lock, pyproject.toml, etc.) -->
        <div v-if="!hasSpecificChanges" class="change-item">
          <span class="change-icon modified">~</span>
          <span>Configuration updated</span>
        </div>
      </div>
      <div v-else-if="status" class="no-changes">
        No changes to commit
      </div>
      <div v-else class="loading">
        Loading...
      </div>

      <div v-if="hasUncommittedIssues" class="issues-error">
        <div class="error-header">
          <span class="error-icon">⚠</span>
          <span class="error-title">{{ uncommittedWorkflowsWithIssues.length }} workflow(s) can't run</span>
        </div>
        <div class="issues-list">
          <div v-for="workflow in uncommittedWorkflowsWithIssues" :key="workflow.name" class="issue-item">
            <strong>{{ workflow.name }}</strong>: {{ workflow.issue_summary }}
          </div>
        </div>
        <BaseCheckbox v-model="allowIssues" class="allow-issues-toggle">
          Commit anyway (ignore issues)
        </BaseCheckbox>
      </div>

      <div class="message-section">
        <BaseTextarea
          v-model="message"
          :placeholder="isBlockedByIssues ? 'Enable \'Allow issues\' to commit' : hasChanges ? 'Describe your changes...' : 'No changes'"
          :disabled="!hasChanges || isLoading || isBlockedByIssues"
          :rows="3"
          @ctrl-enter="handleCommit"
        />
      </div>

      <div v-if="result" :class="['result', result.type]">
        {{ result.message }}
      </div>
    </div>

    <div class="popover-footer">
      <BaseButton variant="secondary" @click="emit('close')">
        Cancel
      </BaseButton>
      <BaseButton
        :variant="allowIssues ? 'danger' : 'primary'"
        :disabled="!hasChanges || !message.trim() || isLoading || isBlockedByIssues"
        :loading="isLoading"
        @click="handleCommit"
      >
        {{ isLoading ? 'Committing...' : allowIssues ? '⚠️ Force Commit' : 'Commit' }}
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ComfyGitStatus } from '@/types/comfygit'
import { useComfyGitService } from '@/composables/useComfyGitService'
import BaseButton from './base/BaseButton.vue'
import BaseTextarea from './base/BaseTextarea.vue'
import BaseCheckbox from './base/BaseCheckbox.vue'

const props = withDefaults(defineProps<{
  status: ComfyGitStatus | null
  asModal?: boolean
}>(), {
  asModal: false
})

const emit = defineEmits<{
  close: []
  committed: []
}>()

const { commit } = useComfyGitService()

const message = ref('')
const isLoading = ref(false)
const allowIssues = ref(false)
const result = ref<{ type: 'success' | 'error', message: string } | null>(null)

const hasChanges = computed(() => {
  if (!props.status) return false
  const wf = props.status.workflows
  return wf.new.length > 0 || wf.modified.length > 0 || wf.deleted.length > 0 || props.status.has_changes
})

// True when there are displayable workflow/node changes (not just config files)
const hasSpecificChanges = computed(() => {
  if (!props.status) return false
  const wf = props.status.workflows
  const gc = props.status.git_changes
  return wf.new.length > 0 || wf.modified.length > 0 || wf.deleted.length > 0 ||
         gc.nodes_added.length > 0 || gc.nodes_removed.length > 0
})

const uncommittedWorkflowsWithIssues = computed(() => {
  if (!props.status?.workflows.analyzed) return []
  return props.status.workflows.analyzed.filter(
    w => w.has_issues && (w.sync_state === 'new' || w.sync_state === 'modified')
  )
})

const hasUncommittedIssues = computed(() => uncommittedWorkflowsWithIssues.value.length > 0)

const isBlockedByIssues = computed(() => hasUncommittedIssues.value && !allowIssues.value)

async function handleCommit() {
  // Guard: prevent commit if there are unresolved issues and user hasn't explicitly allowed
  if (hasUncommittedIssues.value && !allowIssues.value) return
  if (!hasChanges.value || !message.value.trim() || isLoading.value) return

  isLoading.value = true
  result.value = null

  try {
    const res = await commit(message.value.trim(), allowIssues.value)

    if (res.status === 'success') {
      result.value = {
        type: 'success',
        message: `Committed: ${res.summary?.new || 0} new, ${res.summary?.modified || 0} modified, ${res.summary?.deleted || 0} deleted`
      }
      message.value = ''
      allowIssues.value = false
      setTimeout(() => emit('committed'), 1000)
    } else if (res.status === 'no_changes') {
      result.value = { type: 'error', message: 'No changes to commit' }
    } else if (res.status === 'blocked') {
      result.value = {
        type: 'error',
        message: 'Commit blocked - enable "Allow issues" to force commit'
      }
    } else {
      result.value = { type: 'error', message: res.message || 'Commit failed' }
    }
  } catch (err) {
    result.value = { type: 'error', message: err instanceof Error ? err.message : 'Commit failed' }
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: var(--cg-color-bg-overlay);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10005;
  backdrop-filter: blur(2px);
}

.commit-popover {
  background: var(--cg-color-bg-primary);
  border: 2px solid var(--cg-color-border);
  box-shadow: var(--cg-shadow-xl);
  min-width: 400px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
}

.commit-popover.modal {
  border-radius: var(--cg-radius-lg);
  animation: modalSlideIn 0.2s ease;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.popover-header {
  padding: var(--cg-space-3);
  border-bottom: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg-tertiary);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.popover-title {
  color: var(--cg-color-accent);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  font-size: var(--cg-font-size-sm);
  margin: 0;
  flex: 1;
}

.close-btn {
  background: transparent;
  border: 1px solid transparent;
  color: var(--cg-color-text-primary);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.close-btn:hover {
  background: var(--cg-color-bg-hover);
  border-color: var(--cg-color-border-subtle);
}

.popover-body {
  padding: var(--cg-space-3);
  max-height: 400px;
  overflow-y: auto;
}

.popover-footer {
  padding: var(--cg-space-3);
  border-top: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg-tertiary);
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.changes-summary {
  background: var(--cg-color-bg-tertiary);
  border-radius: var(--cg-radius-md);
  padding: 8px;
  margin-bottom: 12px;
  font-size: var(--cg-font-size-xs);
}

.change-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 2px 0;
}

.change-icon {
  font-family: monospace;
  font-weight: 600;
  width: 12px;
  text-align: center;
}

.change-icon.new { color: var(--cg-color-success); }
.change-icon.modified { color: var(--cg-color-warning); }
.change-icon.deleted { color: var(--cg-color-error); }

.no-changes,
.loading {
  text-align: center;
  padding: 12px;
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
}

.message-section {
  margin-bottom: 8px;
}

.result {
  padding: 6px 8px;
  border-radius: var(--cg-radius-md);
  font-size: var(--cg-font-size-xs);
  margin-top: 8px;
}

.result.success {
  background: var(--cg-color-success-muted);
  border: 1px solid var(--cg-color-success);
  color: #86efac;
}

.result.error {
  background: var(--cg-color-error-muted);
  border: 1px solid var(--cg-color-error);
  color: #fca5a5;
}

.issues-error {
  background: var(--cg-color-error-muted);
  border: 1px solid var(--cg-color-error);
  border-radius: var(--cg-radius-md);
  padding: 10px;
  margin-bottom: 12px;
}

.error-header {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
  color: var(--cg-color-error);
}

.error-icon {
  font-size: 14px;
  line-height: 1;
}

.error-title {
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-medium);
}

.issues-list {
  margin-bottom: 10px;
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-secondary);
}

.issue-item {
  padding: 4px 0;
  line-height: 1.4;
}

.issue-item strong {
  color: var(--cg-color-text-primary);
}

.allow-issues-toggle {
  margin-top: 8px;
  font-size: var(--cg-font-size-xs);
}
</style>
