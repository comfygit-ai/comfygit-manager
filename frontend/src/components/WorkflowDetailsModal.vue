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
            <div class="section-heading-row">
              <BaseTitle variant="section">MODELS USED ({{ details.models.length }})</BaseTitle>
              <BaseButton variant="secondary" size="sm" @click="toggleAddModelPanel">
                {{ showAddModelPanel ? 'Cancel' : 'Add Model' }}
              </BaseButton>
            </div>
            <div v-if="showAddModelPanel" class="manual-model-panel">
              <div class="manual-model-controls">
                <input
                  v-model="modelSearch"
                  class="model-search-input"
                  type="search"
                  placeholder="Search indexed models"
                >
                <BaseSelect
                  :model-value="addModelImportance"
                  :options="importanceOptions"
                  @update:model-value="handleAddModelImportanceChange"
                />
              </div>
              <div v-if="loadingWorkspaceModels" class="empty-message">
                Loading indexed models...
              </div>
              <div v-else-if="filteredWorkspaceModels.length === 0" class="empty-message">
                No indexed models match
              </div>
              <div v-else class="manual-model-list">
                <button
                  v-for="model in filteredWorkspaceModels"
                  :key="workspaceModelKey(model)"
                  :class="['manual-model-option', { selected: selectedWorkspaceModelKey === workspaceModelKey(model) }]"
                  type="button"
                  @click="selectedWorkspaceModelKey = workspaceModelKey(model)"
                >
                  <span class="manual-model-name">{{ model.filename }}</span>
                  <span class="manual-model-path">{{ model.relative_path || model.hash }}</span>
                </button>
              </div>
              <div class="manual-model-actions">
                <BaseButton
                  variant="primary"
                  size="sm"
                  :disabled="!selectedWorkspaceModel || modelMutationInProgress"
                  :loading="modelMutationInProgress"
                  @click="handleAddManualModel"
                >
                  Add
                </BaseButton>
              </div>
            </div>
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
                <div v-if="model.declared_by === 'manual'" class="model-row">
                  <span class="label">Declared:</span>
                  <span class="value">Manual dependency</span>
                </div>
                <div v-if="model.relative_path" class="model-row">
                  <span class="label">Path:</span>
                  <span class="value model-path">{{ model.relative_path }}</span>
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
                    :model-value="importanceChanges[getModelIdentifier(model)] || model.importance"
                    :options="importanceOptions"
                    @update:model-value="handleImportanceChange(getModelIdentifier(model), $event)"
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
                <!-- Category mismatch info -->
                <div v-if="model.has_category_mismatch" class="model-row">
                  <span class="label">Location issue:</span>
                  <span class="value error">
                    In <code>{{ model.actual_category }}/</code> but loader needs <code>{{ model.expected_categories?.[0] }}/</code>
                  </span>
                </div>
              </div>
              <div v-if="model.status !== 'available' || model.declared_by === 'manual'" class="model-actions">
                <BaseButton
                  v-if="model.status === 'downloadable'"
                  variant="primary"
                  size="sm"
                  @click="emit('resolve')"
                >
                  Download
                </BaseButton>
                <BaseButton
                  v-else-if="model.status === 'category_mismatch' && model.file_path"
                  variant="secondary"
                  size="sm"
                  @click="handleOpenFileLocation(model.file_path)"
                >
                  Open File Location
                </BaseButton>
                <BaseButton
                  v-else-if="model.status !== 'path_mismatch' && model.status !== 'available'"
                  variant="secondary"
                  size="sm"
                  @click="emit('resolve')"
                >
                  Resolve
                </BaseButton>
                <BaseButton
                  v-if="model.declared_by === 'manual'"
                  variant="danger"
                  size="sm"
                  :disabled="modelMutationInProgress"
                  @click="handleRemoveManualModel(model)"
                >
                  Remove Manual Entry
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
              v-for="(node, index) in details.nodes"
              :key="`${node.name}-${node.status}-${index}`"
              class="node-item"
            >
              <span :class="['node-status', getNodeStatusClass(node.status)]">
                {{ getNodeStatusIcon(node.status) }}
              </span>
              <div class="node-content">
                <div class="node-main">
                  <span class="node-name">{{ node.name }}</span>
                  <span class="node-badge">{{ getNodeStatusLabel(node.status) }}</span>
                  <span v-if="node.version" class="node-version">v{{ node.version }}</span>
                  <button
                    v-if="node.status === 'uninstallable' && node.package_id && !queuedNodeInstalls.has(node.package_id)"
                    class="node-install-link"
                    @click="handleQueueNodeInstall(node)"
                  >
                    Install
                  </button>
                  <span
                    v-else-if="node.status === 'uninstallable' && node.package_id && queuedNodeInstalls.has(node.package_id)"
                    class="node-install-queued"
                  >
                    Queued
                  </span>
                </div>
                <div v-if="node.guidance" class="node-guidance">{{ node.guidance }}</div>
              </div>
            </div>
          </section>
        </template>
    </template>

    <template #footer>
      <div class="details-footer">
        <BaseButton variant="secondary" @click="emit('resolve')">
          Review Resolution
        </BaseButton>
        <div class="details-footer-actions">
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
        </div>
      </div>
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
import { computed, ref, onMounted } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { ModelInfo, ModelUsageInfo, WorkflowDetails } from '@/types/comfygit'
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

const {
  getWorkflowDetails,
  setModelImportance,
  addWorkflowModelDependency,
  removeWorkflowModelDependency,
  getWorkspaceModels,
  openFileLocation,
  queueNodeInstall
} = useComfyGitService()

const details = ref<WorkflowDetails | null>(null)
const loading = ref(false)
const error = ref<string | null>(null)
const hasChanges = ref(false)
const importanceChanges = ref<Record<string, string>>({})
const showImportanceInfo = ref(false)
const expandedNodeLists = ref<Set<string>>(new Set())
const queuedNodeInstalls = ref<Set<string>>(new Set())
const showAddModelPanel = ref(false)
const workspaceModels = ref<ModelInfo[]>([])
const workspaceModelsLoaded = ref(false)
const loadingWorkspaceModels = ref(false)
const modelMutationInProgress = ref(false)
const modelSearch = ref('')
const selectedWorkspaceModelKey = ref('')
const addModelImportance = ref<'required' | 'flexible' | 'optional'>('required')

const importanceOptions = [
  { label: 'Required', value: 'required' },
  { label: 'Flexible', value: 'flexible' },
  { label: 'Optional', value: 'optional' }
]

const existingModelKeys = computed(() => {
  const keys = new Set<string>()
  for (const model of details.value?.models || []) {
    if (model.hash) keys.add(`hash:${model.hash}`)
    if (model.relative_path) keys.add(`path:${model.relative_path}`)
  }
  return keys
})

const filteredWorkspaceModels = computed(() => {
  const query = modelSearch.value.trim().toLowerCase()
  return workspaceModels.value
    .filter((model) => {
      if (model.hash && existingModelKeys.value.has(`hash:${model.hash}`)) return false
      if (model.relative_path && existingModelKeys.value.has(`path:${model.relative_path}`)) return false
      return true
    })
    .filter((model) => {
      if (!query) return true
      return [
        model.filename,
        model.relative_path,
        model.hash,
        model.type
      ].some((value) => value?.toLowerCase().includes(query))
    })
    .slice(0, 50)
})

const selectedWorkspaceModel = computed(() => {
  return workspaceModels.value.find((model) => workspaceModelKey(model) === selectedWorkspaceModelKey.value) || null
})

function getStatusClass(status: string): string {
  switch (status) {
    case 'available':
      return 'success'
    case 'path_mismatch':
      return 'warning'
    case 'downloadable':
      return 'info'
    case 'category_mismatch':  // Blocking issue - show as error
      return 'error'
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
    case 'category_mismatch':
      return '✗ Wrong Directory'
    case 'downloadable':
      return '⬇ Downloadable'
    case 'missing':
    default:
      return '✗ Missing'
  }
}

function workspaceModelKey(model: ModelInfo): string {
  return model.relative_path || model.hash || model.filename
}

function getModelIdentifier(model: ModelUsageInfo): string {
  return model.hash || model.filename
}

function handleAddModelImportanceChange(importance: string) {
  if (importance === 'required' || importance === 'flexible' || importance === 'optional') {
    addModelImportance.value = importance
  }
}

function getNodeStatusClass(status: WorkflowDetails['nodes'][number]['status']): string {
  switch (status) {
    case 'installed':
      return 'installed'
    case 'version_gated':
      return 'version-gated'
    case 'uninstallable':
      return 'community-mapped'
    case 'missing':
    default:
      return 'missing'
  }
}

function getNodeStatusIcon(status: WorkflowDetails['nodes'][number]['status']): string {
  switch (status) {
    case 'installed':
      return '✓'
    case 'version_gated':
      return '⚠'
    case 'uninstallable':
      return '⚠'
    case 'missing':
    default:
      return '✕'
  }
}

function getNodeStatusLabel(status: WorkflowDetails['nodes'][number]['status']): string {
  switch (status) {
    case 'installed':
      return 'Installed'
    case 'version_gated':
      return 'Needs newer ComfyUI'
    case 'uninstallable':
      return 'Community-Mapped'
    case 'missing':
    default:
      return 'Missing'
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

async function loadWorkspaceModels() {
  if (workspaceModelsLoaded.value || loadingWorkspaceModels.value) return

  loadingWorkspaceModels.value = true
  error.value = null
  try {
    workspaceModels.value = await getWorkspaceModels()
    workspaceModelsLoaded.value = true
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load indexed models'
  } finally {
    loadingWorkspaceModels.value = false
  }
}

async function toggleAddModelPanel() {
  showAddModelPanel.value = !showAddModelPanel.value
  if (showAddModelPanel.value) {
    await loadWorkspaceModels()
  } else {
    selectedWorkspaceModelKey.value = ''
    modelSearch.value = ''
  }
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

async function handleAddManualModel() {
  const model = selectedWorkspaceModel.value
  if (!model) return

  modelMutationInProgress.value = true
  error.value = null
  try {
    await addWorkflowModelDependency(props.workflowName, {
      hash: model.hash || undefined,
      relative_path: model.relative_path || undefined,
      importance: addModelImportance.value
    })
    selectedWorkspaceModelKey.value = ''
    modelSearch.value = ''
    showAddModelPanel.value = false
    await loadDetails()
    emit('refresh')
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to add model dependency'
  } finally {
    modelMutationInProgress.value = false
  }
}

async function handleRemoveManualModel(model: ModelUsageInfo) {
  modelMutationInProgress.value = true
  error.value = null
  try {
    await removeWorkflowModelDependency(props.workflowName, {
      hash: model.hash || undefined,
      relative_path: model.relative_path || undefined
    })
    await loadDetails()
    emit('refresh')
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to remove model dependency'
  } finally {
    modelMutationInProgress.value = false
  }
}

function handleImportanceChange(hash: string, importance: string) {
  importanceChanges.value[hash] = importance
  hasChanges.value = true
}

async function handleOpenFileLocation(relativePath: string) {
  try {
    await openFileLocation(relativePath)
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to open file location'
  }
}

async function handleQueueNodeInstall(node: WorkflowDetails['nodes'][number]) {
  if (!node.package_id) return
  try {
    const selectedVersion = node.latest_version || 'latest'
    await queueNodeInstall({
      id: node.package_id,
      version: selectedVersion,
      selected_version: selectedVersion,
      mode: 'remote',
      channel: 'default'
    })
    queuedNodeInstalls.value.add(node.package_id)
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to queue node install'
  }
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

.section-heading-row {
  align-items: center;
  display: flex;
  gap: var(--cg-space-2);
  justify-content: space-between;
  margin-bottom: var(--cg-space-2);
}

.manual-model-panel {
  border: 1px solid var(--cg-color-border-subtle);
  background: var(--cg-color-bg-secondary);
  margin-bottom: var(--cg-space-3);
  padding: var(--cg-space-3);
}

.manual-model-controls {
  display: grid;
  gap: var(--cg-space-2);
  grid-template-columns: minmax(0, 1fr) 180px;
  margin-bottom: var(--cg-space-2);
}

.model-search-input {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-primary);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
  min-width: 0;
  padding: 10px 12px;
}

.model-search-input:focus {
  border-color: var(--cg-color-accent);
  box-shadow: 0 0 0 2px var(--cg-color-accent-muted);
  outline: none;
}

.manual-model-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 240px;
  overflow: auto;
}

.manual-model-option {
  align-items: flex-start;
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  color: var(--cg-color-text-primary);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 8px;
  text-align: left;
}

.manual-model-option:hover,
.manual-model-option.selected {
  border-color: var(--cg-color-accent);
  background: var(--cg-color-bg-hover);
}

.manual-model-name {
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
}

.manual-model-path,
.model-path {
  color: var(--cg-color-text-muted);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  overflow-wrap: anywhere;
}

.manual-model-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: var(--cg-space-2);
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

.model-row code {
  background: var(--cg-color-bg-secondary);
  padding: 0 var(--cg-space-1);
  border-radius: var(--cg-radius-sm, 2px);
  font-family: var(--cg-font-mono, monospace);
  font-size: var(--cg-font-size-xs, 11px);
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
  align-items: flex-start;
  gap: 8px;
  padding: 8px;
  border: 1px solid var(--cg-color-border-subtle);
  background: var(--cg-color-bg-tertiary);
  margin-bottom: 4px;
  font-size: var(--cg-font-size-sm);
}

.node-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.node-main {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
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

.node-status.version-gated {
  color: var(--cg-color-warning, #f59e0b);
}

.node-status.community-mapped {
  color: var(--cg-color-warning, #f59e0b);
}

.node-name {
  color: var(--cg-color-text-primary);
}

.node-badge {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  letter-spacing: var(--cg-letter-spacing-wide);
  text-transform: uppercase;
}

.node-version {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
}

.node-install-link {
  border: none;
  background: transparent;
  color: var(--cg-color-accent);
  cursor: pointer;
  font-size: var(--cg-font-size-xs);
  padding: 0;
  text-decoration: underline;
}

.node-install-queued {
  color: var(--cg-color-warning);
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-medium);
}

.node-guidance {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
}

.details-footer {
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.details-footer-actions {
  display: flex;
  gap: 8px;
}

@media (max-width: 640px) {
  .manual-model-controls {
    grid-template-columns: 1fr;
  }

  .section-heading-row {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
