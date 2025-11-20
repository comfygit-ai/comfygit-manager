<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <div class="modal-header">
        <div class="commit-info">
          <span class="commit-hash">{{ detail?.short_hash || commit.short_hash || commit.hash?.slice(0, 7) }}</span>
          <span v-if="detail?.refs?.length" class="commit-refs">
            <span v-for="ref in detail.refs" :key="ref" class="ref-badge">{{ ref }}</span>
          </span>
        </div>
        <button class="close-btn" @click="$emit('close')">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z"/>
          </svg>
        </button>
      </div>

      <div class="modal-body">
        <div class="commit-message">{{ detail?.message || commit.message }}</div>
        <div class="commit-date">{{ detail?.date_relative || commit.date_relative || commit.relative_date }}</div>

        <div v-if="isLoading" class="loading">Loading details...</div>

        <div v-else-if="detail" class="changes-section">
          <!-- Stats summary -->
          <div class="stats-row">
            <span class="stat">{{ detail.stats.files_changed }} files</span>
            <span class="stat insertions">+{{ detail.stats.insertions }}</span>
            <span class="stat deletions">-{{ detail.stats.deletions }}</span>
          </div>

          <!-- Workflow changes -->
          <div v-if="hasWorkflowChanges" class="change-group">
            <h4 class="change-title">Workflows</h4>
            <div v-for="wf in detail.changes.workflows.added" :key="'add-'+wf" class="change-item added">
              <span class="change-icon">+</span>
              <span>{{ wf }}</span>
            </div>
            <div v-for="wf in detail.changes.workflows.modified" :key="'mod-'+wf" class="change-item modified">
              <span class="change-icon">~</span>
              <span>{{ wf }}</span>
            </div>
            <div v-for="wf in detail.changes.workflows.deleted" :key="'del-'+wf" class="change-item deleted">
              <span class="change-icon">-</span>
              <span>{{ wf }}</span>
            </div>
          </div>

          <!-- Node changes -->
          <div v-if="hasNodeChanges" class="change-group">
            <h4 class="change-title">Nodes</h4>
            <div v-for="node in detail.changes.nodes.added" :key="'add-'+node.name" class="change-item added">
              <span class="change-icon">+</span>
              <span>{{ node.name }}</span>
              <span v-if="node.version" class="version">({{ node.version }})</span>
            </div>
            <div v-for="node in detail.changes.nodes.removed" :key="'rem-'+node.name" class="change-item deleted">
              <span class="change-icon">-</span>
              <span>{{ node.name }}</span>
            </div>
          </div>

          <!-- Model changes -->
          <div v-if="detail.changes.models.resolved > 0" class="change-group">
            <h4 class="change-title">Models</h4>
            <div class="change-item">
              <span class="change-icon">●</span>
              <span>{{ detail.changes.models.resolved }} model(s) resolved</span>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button class="action-btn secondary" @click="$emit('createBranch', commit)">
          Create Branch
        </button>
        <button class="action-btn primary" @click="$emit('checkout', commit)">
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { CommitInfo, CommitDetail } from '@/types/comfygit'
import { useComfyGitService } from '@/composables/useComfyGitService'

const props = defineProps<{
  commit: CommitInfo
}>()

defineEmits<{
  close: []
  checkout: [commit: CommitInfo]
  createBranch: [commit: CommitInfo]
}>()

const { getCommitDetail } = useComfyGitService()

const detail = ref<CommitDetail | null>(null)
const isLoading = ref(true)

const hasWorkflowChanges = computed(() => {
  if (!detail.value) return false
  const wf = detail.value.changes.workflows
  return wf.added.length > 0 || wf.modified.length > 0 || wf.deleted.length > 0
})

const hasNodeChanges = computed(() => {
  if (!detail.value) return false
  const nodes = detail.value.changes.nodes
  return nodes.added.length > 0 || nodes.removed.length > 0
})

onMounted(async () => {
  try {
    detail.value = await getCommitDetail(props.commit.hash)
  } finally {
    isLoading.value = false
  }
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10002;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  width: 420px;
  max-width: 90vw;
  max-height: 70vh;
  background: var(--comfy-menu-bg, #353535);
  border: 1px solid var(--border-color, #4a4a4a);
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
}

.modal-header {
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-color, #4a4a4a);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.commit-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.commit-hash {
  font-family: monospace;
  font-size: 13px;
  color: #60a5fa;
  font-weight: 600;
}

.commit-refs {
  display: flex;
  gap: 4px;
}

.ref-badge {
  padding: 2px 6px;
  background: rgba(249, 115, 22, 0.2);
  border-radius: 3px;
  font-size: 10px;
  color: #f97316;
}

.close-btn {
  background: transparent;
  border: none;
  color: var(--input-text, #ddd);
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
}

.close-btn:hover {
  background: var(--border-color, #4a4a4a);
}

.modal-body {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}

.commit-message {
  font-size: 14px;
  font-weight: 500;
  color: var(--input-text, #ddd);
  margin-bottom: 4px;
}

.commit-date {
  font-size: 11px;
  color: var(--descrip-text, #999);
  margin-bottom: 16px;
}

.loading {
  text-align: center;
  padding: 20px;
  color: var(--descrip-text, #999);
  font-size: 12px;
}

.changes-section {
  margin-top: 8px;
}

.stats-row {
  display: flex;
  gap: 12px;
  padding: 8px 10px;
  background: var(--comfy-input-bg, #222);
  border-radius: 4px;
  margin-bottom: 12px;
  font-size: 11px;
}

.stat {
  color: var(--descrip-text, #999);
}

.stat.insertions {
  color: #4ade80;
}

.stat.deletions {
  color: #f87171;
}

.change-group {
  margin-bottom: 12px;
}

.change-title {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--descrip-text, #999);
  margin: 0 0 6px 0;
  letter-spacing: 0.5px;
}

.change-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 0;
  font-size: 12px;
  color: var(--input-text, #ddd);
}

.change-icon {
  font-family: monospace;
  font-weight: 600;
  width: 12px;
  text-align: center;
}

.change-item.added .change-icon { color: #4ade80; }
.change-item.modified .change-icon { color: #fbbf24; }
.change-item.deleted .change-icon { color: #f87171; }

.version {
  font-size: 10px;
  color: var(--descrip-text, #999);
}

.modal-footer {
  padding: 12px 16px;
  border-top: 1px solid var(--border-color, #4a4a4a);
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.action-btn {
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  border: none;
}

.action-btn.primary {
  background: #f97316;
  color: white;
}

.action-btn.primary:hover {
  background: #ea580c;
}

.action-btn.secondary {
  background: var(--comfy-input-bg, #222);
  color: var(--input-text, #ddd);
  border: 1px solid var(--border-color, #4a4a4a);
}

.action-btn.secondary:hover {
  background: var(--border-color, #4a4a4a);
}
</style>
