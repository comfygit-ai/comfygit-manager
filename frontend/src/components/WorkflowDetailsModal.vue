<template>
  <BaseModal
    :title="`WORKFLOW DETAILS: ${workflowName}`"
    size="lg"
    :loading="loading"
    :error="error || undefined"
    @close="emit('close')"
  >
    <template #body>
        <template v-if="details">
          <!-- Models Section -->
          <section class="detail-section">
            <BaseTitle variant="section">MODELS USED ({{ details.models.length }})</BaseTitle>
            <div v-if="details.models.length === 0" class="empty-message">
              No models used in this workflow
            </div>
            <div
              v-for="model in details.models"
              :key="model.hash || model.filename"
              class="model-card"
            >
              <div class="model-header">
                <span class="model-icon">📦</span>
                <span class="model-name">{{ model.filename }}</span>
              </div>
              <div class="model-details">
                <div class="model-row">
                  <span class="label">Status:</span>
                  <span :class="['value', getStatusClass(model.status)]">
                    {{ getStatusLabel(model.status) }}
                  </span>
                </div>
                <div class="model-row">
                  <span class="label">
                    Importance:
                    <InfoButton
                      :size="14"
                      title="About importance levels"
                      @click="showImportanceInfo = true"
                    />
                  </span>
                  <BaseSelect
                    :model-value="importanceChanges[model.filename] || model.importance"
                    :options="importanceOptions"
                    @update:model-value="handleImportanceChange(model.filename, $event)"
                  />
                </div>
                <div v-if="model.loaded_by && model.loaded_by.length > 0" class="model-row model-row-nodes">
                  <span class="label">Loaded by:</span>
                  <div class="node-list">
                    <div
                      v-for="(node, index) in getVisibleNodes(model)"
                      :key="`${node.node_id}-${index}`"
                      class="node-reference"
                    >
                      {{ node.node_type }} (Node #{{ node.node_id }})
                    </div>
                    <button
                      v-if="model.loaded_by.length > 3"
                      class="expand-toggle"
                      @click="toggleNodeExpansion(model.hash || model.filename)"
                    >
                      {{ isNodeListExpanded(model.hash || model.filename) ? '▼ Show less' : `▶ View all (${model.loaded_by.length})` }}
                    </button>
                  </div>
                </div>
                <div v-if="model.size_mb" class="model-row">
                  <span class="label">Size:</span>
                  <span class="value">{{ model.size_mb }} MB</span>
                </div>
              </div>
              <div v-if="model.status !== 'available'" class="model-actions">
                <BaseButton
                  v-if="model.status === 'downloadable'"
                  variant="primary"
                  size="sm"
                  @click="emit('resolve')"
                >
                  Download
                </BaseButton>
                <BaseButton
                  v-else-if="model.status === 'path_mismatch'"
                  variant="secondary"
                  size="sm"
                  @click="emit('resolve')"
                >
                  Sync Path
                </BaseButton>
                <BaseButton
                  v-else
                  variant="secondary"
                  size="sm"
                  @click="emit('resolve')"
                >
                  Resolve
                </BaseButton>
              </div>
            </div>
          </section>

          <!-- Nodes Section -->
          <section class="detail-section">
            <BaseTitle variant="section">NODES USED ({{ details.nodes.length }})</BaseTitle>
            <div v-if="details.nodes.length === 0" class="empty-message">
              No custom nodes used in this workflow
            </div>
            <div
              v-for="node in details.nodes"
              :key="node.name"
              class="node-item"
            >
              <span :class="['node-status', node.status === 'installed' ? 'installed' : 'missing']">
                {{ node.status === 'installed' ? '✓' : '✕' }}
              </span>
              <span class="node-name">{{ node.name }}</span>
              <span v-if="node.version" class="node-version">v{{ node.version }}</span>
            </div>
          </section>
        </template>
    </template>

    <template #footer>
      <BaseButton variant="secondary" @click="emit('close')">
        Close
      </BaseButton>
      <BaseButton
        v-if="hasChanges"
        variant="primary"
        @click="handleSave"
      >
        Save Changes
      </BaseButton>
    </template>
  </BaseModal>

  <!-- Importance Info Popover -->
  <InfoPopover
    :show="showImportanceInfo"
    title="Model Importance Levels"
    @close="showImportanceInfo = false"
  >
    <template #content>
      <ul class="importance-info-list">
        <li><strong>Required</strong> — Must have for workflow to run</li>
        <li><strong>Flexible</strong> — Workflow adapts if missing</li>
        <li><strong>Optional</strong> — Nice to have, can be skipped</li>
      </ul>
    </template>
  </InfoPopover>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { WorkflowDetails } from '@/types/comfygit'
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'
import BaseTitle from './base/BaseTitle.vue'
import BaseSelect from './base/BaseSelect.vue'
import InfoButton from './base/atoms/InfoButton.vue'
import InfoPopover from './base/molecules/InfoPopover.vue'

const props = defineProps<{
  workflowName: string
}>()

const emit = defineEmits<{
  close: []
  resolve: []
  refresh: []
}>()

const { getWorkflowDetails, setModelImportance } = useComfyGitService()

const details = ref<WorkflowDetails | null>(null)
const loading = ref(false)
const error = ref<string | null>(null)
const hasChanges = ref(false)
const importanceChanges = ref<Record<string, string>>({})
const showImportanceInfo = ref(false)
const expandedNodeLists = ref<Set<string>>(new Set())

const importanceOptions = [
  { label: 'Required', value: 'required' },
  { label: 'Flexible', value: 'flexible' },
  { label: 'Optional', value: 'optional' }
]

function getStatusClass(status: string): string {
  switch (status) {
    case 'available':
      return 'success'
    case 'path_mismatch':
      return 'warning'
    case 'downloadable':
      return 'info'
    case 'missing':
    default:
      return 'error'
  }
}

function getStatusLabel(status: string): string {
  switch (status) {
    case 'available':
      return '✓ Available'
    case 'path_mismatch':
      return '⚠ Path Mismatch'
    case 'downloadable':
      return '⬇ Downloadable'
    case 'missing':
    default:
      return '✗ Missing'
  }
}

function getVisibleNodes(model: any) {
  if (!model.loaded_by || model.loaded_by.length === 0) return []

  const key = model.hash || model.filename
  const isExpanded = expandedNodeLists.value.has(key)

  // Show first 3 nodes by default, or all if expanded
  return isExpanded ? model.loaded_by : model.loaded_by.slice(0, 3)
}

function isNodeListExpanded(key: string): boolean {
  return expandedNodeLists.value.has(key)
}

function toggleNodeExpansion(key: string) {
  if (expandedNodeLists.value.has(key)) {
    expandedNodeLists.value.delete(key)
  } else {
    expandedNodeLists.value.add(key)
  }
  // Force reactivity update
  expandedNodeLists.value = new Set(expandedNodeLists.value)
}

async function loadDetails() {
  loading.value = true
  error.value = null
  try {
    details.value = await getWorkflowDetails(props.workflowName)
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load workflow details'
  } finally {
    loading.value = false
  }
}

function handleImportanceChange(hash: string, importance: string) {
  importanceChanges.value[hash] = importance
  hasChanges.value = true
}

async function handleSave() {
  if (!hasChanges.value) {
    emit('close')
    return
  }

  loading.value = true
  error.value = null

  try {
    // Save all importance changes
    for (const [hash, importance] of Object.entries(importanceChanges.value)) {
      await setModelImportance(props.workflowName, hash, importance as any)
    }
    // Refresh status since importance changes can affect workflow resolution status
    emit('refresh')
    emit('close')
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to save changes'
  } finally {
    loading.value = false
  }
}

onMounted(loadDetails)
</script>

<style scoped>
.empty-message {
  text-align: center;
  padding: var(--cg-space-4);
  color: var(--cg-color-text-muted);
}

.detail-section {
  margin-bottom: var(--cg-space-5);
}

.model-card {
  border: 1px solid var(--cg-color-border-subtle);
  background: var(--cg-color-bg-tertiary);
  padding: var(--cg-space-3);
  margin-bottom: var(--cg-space-3);
}

.model-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: var(--cg-space-2);
}

.model-icon {
  font-size: var(--cg-font-size-lg);
}

.model-name {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-base);
  font-weight: var(--cg-font-weight-semibold);
}

.model-details {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: var(--cg-space-2);
}

.model-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: var(--cg-font-size-sm);
}

.model-row .label {
  color: var(--cg-color-text-muted);
  min-width: 80px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.model-row .value {
  color: var(--cg-color-text-secondary);
}

.model-row .value.success {
  color: var(--cg-color-success);
}

.model-row .value.error {
  color: var(--cg-color-error);
}

.model-row .value.warning {
  color: var(--cg-color-warning, #f59e0b);
}

.model-row .value.info {
  color: var(--cg-color-info, #3b82f6);
}

.model-row-nodes {
  align-items: flex-start;
}

.node-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.node-reference {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
  padding: 2px 0;
}

.expand-toggle {
  background: none;
  border: none;
  color: var(--cg-color-accent);
  cursor: pointer;
  font-size: var(--cg-font-size-sm);
  padding: 4px 0;
  text-align: left;
  margin-top: 2px;
}

.expand-toggle:hover {
  text-decoration: underline;
}

.model-actions {
  margin-top: var(--cg-space-2);
}

.importance-info-list {
  margin: 0;
  padding-left: var(--cg-space-4);
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
  list-style-type: '• ';
}

.importance-info-list li {
  margin-bottom: var(--cg-space-2);
}

.importance-info-list strong {
  color: var(--cg-color-accent);
}

.node-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border: 1px solid var(--cg-color-border-subtle);
  background: var(--cg-color-bg-tertiary);
  margin-bottom: 4px;
  font-size: var(--cg-font-size-sm);
}

.node-status {
  font-weight: bold;
  font-size: var(--cg-font-size-base);
}

.node-status.installed {
  color: var(--cg-color-success);
}

.node-status.missing {
  color: var(--cg-color-error);
}

.node-name {
  color: var(--cg-color-text-primary);
  flex: 1;
}

.node-version {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
}
</style>
