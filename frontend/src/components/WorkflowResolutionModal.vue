<template>
  <BaseModal
    :title="`Resolve Workflow Conflicts: ${operationType === 'pull' ? 'Pull' : 'Merge'}`"
    size="lg"
    :fixed-height="true"
    @close="handleClose"
  >
    <template #body>
      <div class="resolution-content">
        <!-- Error state -->
        <div v-if="error" class="error-box">
          <span class="error-icon">✕</span>
          <div>
            <strong>Validation Failed</strong>
            <p>{{ error }}</p>
          </div>
        </div>

        <!-- Header summary -->
        <div class="resolution-header">
          <div class="header-stats">
            <div class="stat">
              <span class="stat-value">{{ workflowConflicts.length }}</span>
              <span class="stat-label">total conflicts</span>
            </div>
            <div class="stat resolved">
              <span class="stat-value">{{ resolvedCount }}</span>
              <span class="stat-label">resolved</span>
            </div>
            <div v-if="pendingCount > 0" class="stat pending">
              <span class="stat-value">{{ pendingCount }}</span>
              <span class="stat-label">pending</span>
            </div>
          </div>
          <p class="header-hint">
            Choose which version to keep for each conflicting workflow.
          </p>
        </div>

        <!-- Workflow conflicts list (scrollable) -->
        <div class="conflicts-list">
          <WorkflowConflictItem
            v-for="conflict in workflowConflicts"
            :key="conflict.name"
            :conflict="conflict"
            :resolution="getResolution(conflict.name)"
            @resolve="(res) => handleResolve(conflict.name, res)"
          />
        </div>

        <!-- All resolved message -->
        <div v-if="allResolved" class="all-resolved-message">
          <span class="resolved-icon">✓</span>
          <span>All conflicts resolved! Click "{{ applyLabel }}" to continue.</span>
        </div>
      </div>
    </template>

    <template #footer>
      <BaseButton variant="secondary" @click="handleClose">
        Cancel
      </BaseButton>
      <div class="footer-spacer"></div>
      <BaseButton
        variant="primary"
        :disabled="!allResolved || validating"
        :loading="validating"
        @click="handleApply"
      >
        {{ applyLabel }}
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { WorkflowConflict, WorkflowResolution } from '@/types/comfygit'
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'
import WorkflowConflictItem from './base/molecules/WorkflowConflictItem.vue'

const props = defineProps<{
  workflowConflicts: WorkflowConflict[]
  resolutions: Map<string, WorkflowResolution>
  operationType: 'pull' | 'merge'
  validating?: boolean
  error?: string | null
}>()

const emit = defineEmits<{
  close: []
  resolve: [name: string, resolution: 'take_base' | 'take_target']
  apply: []
}>()

// Computed: Resolution stats
const resolvedCount = computed(() => props.resolutions.size)
const pendingCount = computed(() => props.workflowConflicts.length - resolvedCount.value)
const allResolved = computed(() => resolvedCount.value === props.workflowConflicts.length)

// Computed: Action label
const applyLabel = computed(() =>
  props.operationType === 'pull' ? 'Validate & Pull' : 'Validate & Merge'
)

// Methods
function getResolution(name: string): 'take_base' | 'take_target' | null {
  const res = props.resolutions.get(name)
  return res?.resolution ?? null
}

function handleResolve(name: string, resolution: 'take_base' | 'take_target') {
  emit('resolve', name, resolution)
}

function handleClose() {
  emit('close')
}

function handleApply() {
  emit('apply')
}
</script>

<style scoped>
.resolution-content {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
  height: 100%;
  min-height: 0;
}

.error-box {
  flex-shrink: 0;
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

.resolution-header {
  flex-shrink: 0;
  padding-bottom: var(--cg-space-3);
  border-bottom: 1px solid var(--cg-color-border-subtle);
}

.header-stats {
  display: flex;
  gap: var(--cg-space-4);
  margin-bottom: var(--cg-space-2);
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xl);
  font-weight: var(--cg-font-weight-bold);
  color: var(--cg-color-text-primary);
}

.stat.resolved .stat-value {
  color: var(--cg-color-success);
}

.stat.pending .stat-value {
  color: var(--cg-color-warning);
}

.stat-label {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.header-hint {
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
  margin: 0;
  line-height: 1.5;
}

.conflicts-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding-right: var(--cg-space-2);
}

.all-resolved-message {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-3);
  background: var(--cg-color-success-muted);
  border: 1px solid var(--cg-color-success);
  border-radius: var(--cg-radius-md);
  color: var(--cg-color-success);
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-medium);
}

.resolved-icon {
  font-size: var(--cg-font-size-lg);
}

.footer-spacer {
  flex: 1;
}
</style>
