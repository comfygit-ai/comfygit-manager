<template>
  <div class="commit-popover">
    <div class="popover-header">
      <h3 class="popover-title">Commit Changes</h3>
    </div>

    <div class="popover-content">
      <!-- Changes summary -->
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
      </div>
      <div v-else-if="status" class="no-changes">
        No changes to commit
      </div>
      <div v-else class="loading">
        Loading...
      </div>

      <!-- Commit message -->
      <div class="message-section">
        <textarea
          v-model="message"
          class="commit-input"
          :placeholder="hasChanges ? 'Describe your changes...' : 'No changes'"
          :disabled="!hasChanges || isLoading"
          rows="3"
          @keydown.ctrl.enter="handleCommit"
          @keydown.meta.enter="handleCommit"
        ></textarea>
      </div>

      <!-- Result message -->
      <div v-if="result" :class="['result', result.type]">
        {{ result.message }}
      </div>
    </div>

    <div class="popover-footer">
      <button class="cancel-btn" @click="emit('close')">Cancel</button>
      <button
        class="commit-btn"
        :disabled="!hasChanges || !message.trim() || isLoading"
        @click="handleCommit"
      >
        {{ isLoading ? 'Committing...' : 'Commit' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ComfyGitStatus } from '@/types/comfygit'
import { useComfyGitService } from '@/composables/useComfyGitService'

const props = defineProps<{
  status: ComfyGitStatus | null
}>()

const emit = defineEmits<{
  close: []
  committed: []
}>()

const { commit } = useComfyGitService()

const message = ref('')
const isLoading = ref(false)
const result = ref<{ type: 'success' | 'error', message: string } | null>(null)

const hasChanges = computed(() => {
  if (!props.status) return false
  const wf = props.status.workflows
  return wf.new.length > 0 || wf.modified.length > 0 || wf.deleted.length > 0 || props.status.has_changes
})

async function handleCommit() {
  if (!hasChanges.value || !message.value.trim() || isLoading.value) return

  isLoading.value = true
  result.value = null

  try {
    const res = await commit(message.value.trim())

    if (res.status === 'success') {
      result.value = {
        type: 'success',
        message: `Committed: ${res.summary?.new || 0} new, ${res.summary?.modified || 0} modified, ${res.summary?.deleted || 0} deleted`
      }
      message.value = ''
      // Auto close after success
      setTimeout(() => emit('committed'), 1000)
    } else if (res.status === 'no_changes') {
      result.value = { type: 'error', message: 'No changes to commit' }
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
.commit-popover {
  width: 360px;
  background: var(--comfy-menu-bg, #353535);
  border: 1px solid var(--border-color, #4a4a4a);
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  color: var(--input-text, #ddd);
}

.popover-header {
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-color, #4a4a4a);
}

.popover-title {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
}

.popover-content {
  padding: 12px 16px;
}

.changes-summary {
  background: var(--comfy-input-bg, #222);
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 12px;
  font-size: 12px;
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

.change-icon.new { color: #4ade80; }
.change-icon.modified { color: #fbbf24; }
.change-icon.deleted { color: #f87171; }

.no-changes {
  text-align: center;
  padding: 12px;
  color: var(--descrip-text, #999);
  font-size: 13px;
}

.loading {
  text-align: center;
  padding: 12px;
  color: var(--descrip-text, #999);
  font-size: 13px;
}

.message-section {
  margin-bottom: 8px;
}

.commit-input {
  width: 100%;
  padding: 10px 12px;
  background: var(--cg-color-bg-tertiary, var(--comfy-input-bg, #222));
  border: 1px solid var(--cg-color-border, var(--border-color, #4a4a4a));
  border-radius: 4px;
  color: var(--cg-color-text-primary, var(--input-text, #ddd));
  font-size: 13px;
  font-family: inherit;
  resize: vertical;
  box-sizing: border-box;
  line-height: 1.4;
}

.commit-input:focus {
  outline: none;
  border-color: var(--cg-color-accent, #f97316);
  box-shadow: 0 0 0 2px var(--cg-color-accent-muted, rgba(249, 115, 22, 0.2));
}

.commit-input:disabled {
  opacity: 0.5;
}

.result {
  padding: 6px 8px;
  border-radius: 4px;
  font-size: 11px;
  margin-top: 8px;
}

.result.success {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid #22c55e;
  color: #86efac;
}

.result.error {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid #ef4444;
  color: #fca5a5;
}

.popover-footer {
  padding: 12px 16px;
  border-top: 1px solid var(--border-color, #4a4a4a);
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.cancel-btn {
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  background: transparent;
  color: var(--cg-color-text-secondary, var(--input-text, #ddd));
  border: 1px solid var(--cg-color-border, var(--border-color, #4a4a4a));
  transition: all 0.15s ease;
}

.cancel-btn:hover {
  background: var(--cg-color-bg-hover, var(--comfy-input-bg, #222));
  border-color: var(--cg-color-border-strong, var(--border-color, #5a5a5a));
}

.commit-btn {
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  background: var(--cg-color-accent, #f97316);
  color: var(--cg-color-text-inverse, white);
  transition: all 0.15s ease;
}

.commit-btn:hover:not(:disabled) {
  background: var(--cg-color-accent-hover, #ea580c);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px var(--cg-color-accent-muted, rgba(249, 115, 22, 0.3));
}

.commit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
