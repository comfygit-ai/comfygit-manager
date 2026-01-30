<template>
  <teleport to="body">
    <div v-if="show" class="modal-overlay" @click="$emit('close')">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">PULL FROM {{ remoteName.toUpperCase() }}</h3>
          <button class="modal-close" @click="$emit('close')">✕</button>
        </div>

        <div class="modal-body">
          <!-- Error State -->
          <template v-if="error">
            <div class="error-box">
              <span class="error-icon">✕</span>
              <div>
                <strong>PULL FAILED</strong>
                <p>{{ error }}</p>
                <p v-if="isUnrelatedHistoriesError" class="error-hint">
                  This happens when the remote repository has no common history with your local repository.
                  Try using "Force Pull" to merge despite unrelated histories.
                </p>
              </div>
            </div>
          </template>

          <!-- Loading State -->
          <template v-else-if="loading">
            <div class="loading-state">
              <span class="spinner">⟳</span>
              Loading preview...
            </div>
          </template>

          <!-- Blocked by uncommitted changes -->
          <template v-else-if="preview?.has_uncommitted_changes">
            <div class="warning-box">
              <span class="warning-icon">⚠</span>
              <div>
                <strong>UNCOMMITTED CHANGES</strong>
                <p>You have uncommitted changes that must be committed or discarded before pulling.</p>
              </div>
            </div>

            <div class="options-section">
              <p><strong>Options:</strong></p>
              <ul>
                <li>Commit your changes first (recommended)</li>
                <li>Discard changes and force pull</li>
              </ul>
            </div>
          </template>

          <!-- Normal Preview -->
          <template v-else-if="preview">
            <div class="commit-summary">
              <span class="icon">📥</span>
              {{ preview.commits_behind }} commit{{ preview.commits_behind !== 1 ? 's' : '' }} from {{ preview.remote }}/{{ preview.branch }}
            </div>

            <!-- Incoming commits -->
            <div v-if="preview.commits && preview.commits.length > 0" class="commits-section">
              <h4 class="section-title">INCOMING COMMITS</h4>
              <div class="commit-list">
                <div v-for="commit in preview.commits" :key="commit.hash" class="commit-item">
                  <span class="commit-hash">{{ commit.short_hash || commit.hash.slice(0, 7) }}</span>
                  <span class="commit-message">{{ commit.message }}</span>
                  <span class="commit-date">{{ commit.date_relative || commit.relative_date }}</span>
                </div>
              </div>
            </div>

            <!-- Incoming Changes -->
            <div v-if="hasChanges" class="changes-section">
              <h4 class="section-title">INCOMING CHANGES</h4>

              <!-- Workflows -->
              <details v-if="workflowChangesCount > 0" class="change-group" open>
                <summary>
                  <span class="change-type">Workflows</span>
                  <span class="change-count">{{ workflowChangesCount }} changes</span>
                </summary>
                <div class="change-list">
                  <div v-for="file in preview.changes.workflows.added" :key="'a-'+file" class="change-item add">
                    + {{ file }}
                  </div>
                  <div v-for="file in preview.changes.workflows.modified" :key="'m-'+file" class="change-item modify">
                    ~ {{ file }}
                    <span v-if="itemHasConflict(file)" class="conflict-badge">CONFLICT</span>
                  </div>
                  <div v-for="file in preview.changes.workflows.deleted" :key="'d-'+file" class="change-item delete">
                    - {{ file }}
                  </div>
                </div>
              </details>

              <!-- Nodes -->
              <details v-if="nodeChangesCount > 0" class="change-group">
                <summary>
                  <span class="change-type">Nodes</span>
                  <span class="change-count">{{ nodeChangesCount }} to install</span>
                </summary>
                <div class="change-list">
                  <div v-for="node in preview.changes.nodes.to_install" :key="node" class="change-item add">
                    + {{ node }}
                  </div>
                </div>
              </details>

              <!-- Models -->
              <details v-if="preview.changes.models.count > 0" class="change-group">
                <summary>
                  <span class="change-type">Models</span>
                  <span class="change-count">{{ preview.changes.models.count }} referenced</span>
                </summary>
                <div class="change-list">
                  <div v-for="model in preview.changes.models.referenced" :key="model" class="change-item">
                    {{ model }}
                  </div>
                </div>
              </details>
            </div>

            <!-- Conflict Summary Box -->
            <ConflictSummaryBox
              v-if="previewWithConflicts"
              :conflict-count="conflictCount"
              :resolved-count="resolvedConflictCount"
              operation-type="pull"
            />

            <!-- Model Strategy -->
            <div v-if="preview.changes.models.count > 0" class="strategy-section">
              <h4 class="section-title">MODEL DOWNLOAD STRATEGY</h4>
              <div class="radio-group">
                <label class="radio-option">
                  <input type="radio" v-model="modelStrategy" value="all" />
                  <span>Download all models</span>
                </label>
                <label class="radio-option">
                  <input type="radio" v-model="modelStrategy" value="required" />
                  <span>Download required only</span>
                </label>
                <label class="radio-option">
                  <input type="radio" v-model="modelStrategy" value="skip" />
                  <span>Skip model downloads</span>
                  <span class="default-badge">default</span>
                </label>
              </div>
              <p class="strategy-hint">Models can be downloaded later from MODEL INDEX</p>
            </div>

            <!-- Up to date -->
            <div v-if="preview.commits_behind === 0" class="up-to-date">
              <span class="icon">✓</span>
              Already up to date with {{ preview.remote }}/{{ preview.branch }}
            </div>
          </template>
        </div>

        <div class="modal-actions">
          <ActionButton variant="secondary" @click="$emit('close')">
            Cancel
          </ActionButton>
          <!-- Error state - show retry/force options -->
          <template v-if="error">
            <ActionButton
              variant="secondary"
              :loading="pulling"
              @click="handlePull(false)"
            >
              Retry
            </ActionButton>
            <ActionButton
              variant="destructive"
              :loading="pulling"
              @click="handlePull(true)"
            >
              Force Pull
            </ActionButton>
          </template>
          <!-- Uncommitted changes - show force option -->
          <template v-else-if="preview?.has_uncommitted_changes">
            <ActionButton
              variant="destructive"
              :loading="pulling"
              @click="handlePull(true)"
            >
              Force Pull (Discard Changes)
            </ActionButton>
          </template>
          <!-- Normal pull -->
          <template v-else-if="preview && preview.commits_behind > 0">
            <!-- Show "Resolve Conflicts" button if conflicts exist and not all resolved -->
            <ActionButton
              v-if="previewWithConflicts && !allConflictsResolved"
              variant="primary"
              @click="emit('openConflictResolution')"
            >
              Resolve Conflicts ({{ resolvedConflictCount }}/{{ conflictCount }})
            </ActionButton>
            <!-- Show "Pull Changes" button only if no conflicts OR all resolved -->
            <ActionButton
              v-else
              variant="primary"
              :loading="pulling"
              :disabled="!canPull"
              @click="handlePull(false)"
            >
              Pull Changes
            </ActionButton>
          </template>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { PullPreview, PullPreviewWithConflicts, WorkflowResolution } from '@/types/comfygit'
import { hasWorkflowConflicts } from '@/types/comfygit'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import ConflictSummaryBox from './ConflictSummaryBox.vue'

const MODEL_STRATEGY_KEY = 'comfygit.pullModelStrategy'

const props = defineProps<{
  show: boolean
  remoteName: string
  preview: PullPreview | PullPreviewWithConflicts | null
  loading: boolean
  pulling: boolean
  error: string | null
  conflictResolutions?: Map<string, WorkflowResolution>
}>()

const emit = defineEmits<{
  close: []
  pull: [options: { modelStrategy: string; force: boolean; resolutions?: WorkflowResolution[] }]
  openConflictResolution: []
}>()

// Load saved strategy from localStorage
const modelStrategy = ref(localStorage.getItem(MODEL_STRATEGY_KEY) || 'skip')

// Save strategy when changed
watch(modelStrategy, (value) => {
  localStorage.setItem(MODEL_STRATEGY_KEY, value)
})

// Detect specific error types for helpful messages
const isUnrelatedHistoriesError = computed(() => {
  return props.error?.toLowerCase().includes('unrelated histories') ?? false
})

const workflowChangesCount = computed(() => {
  if (!props.preview) return 0
  const w = props.preview.changes.workflows
  return w.added.length + w.modified.length + w.deleted.length
})

const nodeChangesCount = computed(() => {
  if (!props.preview) return 0
  return props.preview.changes.nodes.to_install.length
})

const hasChanges = computed(() => {
  return workflowChangesCount.value > 0 || nodeChangesCount.value > 0 || (props.preview?.changes.models.count || 0) > 0
})

// Conflict-related computed properties (V2: workflow_conflicts only)
const previewWithConflicts = computed(() => {
  if (props.preview && hasWorkflowConflicts(props.preview)) {
    return props.preview as PullPreviewWithConflicts
  }
  return null
})

const conflictCount = computed(() => previewWithConflicts.value?.workflow_conflicts.length ?? 0)

const resolvedConflictCount = computed(() => props.conflictResolutions?.size ?? 0)

const allConflictsResolved = computed(() =>
  conflictCount.value > 0 && resolvedConflictCount.value === conflictCount.value
)

const canPull = computed(() => {
  if (!props.preview) return false
  if (props.preview.has_uncommitted_changes) return false
  if (previewWithConflicts.value && !allConflictsResolved.value) return false
  return true
})

function itemHasConflict(filename: string): boolean {
  if (!previewWithConflicts.value) return false
  // V2: workflow_conflicts use 'name' (without .json extension)
  const name = filename.replace(/\.json$/, '')
  return previewWithConflicts.value.workflow_conflicts.some(c => c.name === name)
}

function handlePull(force: boolean) {
  const resolutions = props.conflictResolutions
    ? Array.from(props.conflictResolutions.values())
    : undefined
  emit('pull', { modelStrategy: modelStrategy.value, force, resolutions })
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--cg-color-bg-overlay);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10005;
  backdrop-filter: blur(2px);
}

.modal-content {
  background: var(--cg-color-bg-primary);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-lg);
  box-shadow: var(--cg-shadow-lg);
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--cg-space-4);
  border-bottom: 1px solid var(--cg-color-border-subtle);
}

.modal-title {
  margin: 0;
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-accent);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.modal-close {
  background: transparent;
  border: none;
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xl);
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-close:hover {
  color: var(--cg-color-text-primary);
}

.modal-body {
  padding: var(--cg-space-4);
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.loading-state {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  justify-content: center;
  padding: var(--cg-space-6);
  color: var(--cg-color-text-muted);
}

.spinner {
  animation: spin 1s linear infinite;
}

.error-box {
  display: flex;
  align-items: flex-start;
  gap: var(--cg-space-3);
  padding: var(--cg-space-4);
  background: var(--cg-color-error-muted);
  border: 1px solid var(--cg-color-error);
  border-radius: var(--cg-radius-sm);
  color: var(--cg-color-error);
}

.error-icon {
  font-size: var(--cg-font-size-xl);
  flex-shrink: 0;
}

.error-box p {
  margin: var(--cg-space-1) 0 0 0;
  font-size: var(--cg-font-size-sm);
}

.error-hint {
  margin-top: var(--cg-space-2) !important;
  opacity: 0.9;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.commit-summary {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  font-size: var(--cg-font-size-base);
  color: var(--cg-color-text-primary);
}

.commit-summary .icon {
  font-size: var(--cg-font-size-lg);
}

.warning-box {
  display: flex;
  align-items: flex-start;
  gap: var(--cg-space-3);
  padding: var(--cg-space-4);
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
  border-radius: var(--cg-radius-sm);
  color: var(--cg-color-warning);
}

.warning-icon {
  font-size: var(--cg-font-size-xl);
  flex-shrink: 0;
}

.warning-box p {
  margin: var(--cg-space-1) 0 0 0;
  font-size: var(--cg-font-size-sm);
}

.options-section {
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border-radius: var(--cg-radius-sm);
}

.options-section ul {
  margin: var(--cg-space-2) 0 0 var(--cg-space-4);
  padding: 0;
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
}

.commits-section {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.commit-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border-radius: var(--cg-radius-sm);
  max-height: 200px;
  overflow-y: auto;
}

.commit-item {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  font-size: var(--cg-font-size-sm);
}

.commit-hash {
  font-family: var(--cg-font-mono);
  color: var(--cg-color-info);
  flex-shrink: 0;
}

.commit-message {
  color: var(--cg-color-text-primary);
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.commit-date {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  flex-shrink: 0;
}

.changes-section {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.section-title {
  margin: 0;
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.change-group {
  background: var(--cg-color-bg-secondary);
  border-radius: var(--cg-radius-sm);
  overflow: hidden;
}

.change-group summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--cg-space-2) var(--cg-space-3);
  cursor: pointer;
  user-select: none;
}

.change-group summary:hover {
  background: var(--cg-color-bg-hover);
}

.change-type {
  font-weight: var(--cg-font-weight-medium);
  color: var(--cg-color-text-primary);
}

.change-count {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
}

.change-list {
  padding: var(--cg-space-2) var(--cg-space-3);
  border-top: 1px solid var(--cg-color-border-subtle);
  max-height: 150px;
  overflow-y: auto;
}

.change-item {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
  padding: var(--cg-space-1) 0;
}

.change-item.add { color: var(--cg-color-success); }
.change-item.modify { color: var(--cg-color-info); }
.change-item.delete { color: var(--cg-color-error); }

.conflict-badge {
  margin-left: var(--cg-space-2);
  padding: 1px var(--cg-space-2);
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
  border-radius: var(--cg-radius-xs);
  color: var(--cg-color-warning);
}

.strategy-section {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.radio-group {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border-radius: var(--cg-radius-sm);
}

.radio-option {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  cursor: pointer;
  font-size: var(--cg-font-size-sm);
}

.radio-option input {
  margin: 0;
}

.default-badge {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  background: var(--cg-color-bg-tertiary);
  padding: 1px 4px;
  border-radius: var(--cg-radius-xs);
}

.strategy-hint {
  margin: 0;
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  font-style: italic;
}

.up-to-date {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-4);
  color: var(--cg-color-success);
  justify-content: center;
}

.modal-actions {
  padding: var(--cg-space-4);
  border-top: 1px solid var(--cg-color-border-subtle);
  display: flex;
  gap: var(--cg-space-2);
  justify-content: flex-end;
}
</style>
