<template>
  <div :class="['conflict-item', { resolved: isResolved }]">
    <div class="conflict-header">
      <span class="conflict-icon">⚠</span>
      <div class="conflict-info">
        <code class="workflow-name">{{ conflict.name }}.json</code>
        <div class="conflict-description">{{ conflictDescription }}</div>
      </div>
      <div v-if="isResolved" class="resolved-badge">
        <span class="resolved-icon">✓</span>
        <span class="resolved-text">{{ resolutionLabel }}</span>
      </div>
    </div>

    <!-- Hash comparison -->
    <div class="conflict-hashes">
      <span class="hash-item">Your: <code>{{ conflict.base_hash?.slice(0, 8) || 'n/a' }}</code></span>
      <span class="hash-item">Theirs: <code>{{ conflict.target_hash?.slice(0, 8) || 'n/a' }}</code></span>
    </div>

    <div class="conflict-actions">
      <ResolutionChoiceGroup
        v-model="localResolution"
        :disabled="disabled"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { WorkflowConflict } from '@/types/comfygit'
import ResolutionChoiceGroup from '@/components/base/atoms/ResolutionChoiceGroup.vue'

const props = defineProps<{
  conflict: WorkflowConflict
  resolution: 'take_base' | 'take_target' | null
  disabled?: boolean
}>()

const emit = defineEmits<{
  resolve: [resolution: 'take_base' | 'take_target']
}>()

const localResolution = ref(props.resolution)

watch(() => props.resolution, (val) => {
  localResolution.value = val
})

watch(localResolution, (val) => {
  if (val) emit('resolve', val)
})

const isResolved = computed(() => localResolution.value !== null)

const conflictDescription = computed(() => {
  if (props.conflict.conflict_type === 'both_modified') {
    return 'Both you and remote modified this workflow'
  }
  return 'Conflicting changes detected'
})

const resolutionLabel = computed(() => {
  switch (localResolution.value) {
    case 'take_base': return 'Keep Mine'
    case 'take_target': return 'Keep Theirs'
    default: return ''
  }
})
</script>

<style scoped>
.conflict-item {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
  padding: var(--cg-space-3);
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
  border-radius: var(--cg-radius-md);
  transition: all 0.2s ease;
}

.conflict-item.resolved {
  background: var(--cg-color-bg-secondary);
  border-color: var(--cg-color-border);
}

.conflict-header {
  display: flex;
  align-items: flex-start;
  gap: var(--cg-space-3);
}

.conflict-icon {
  font-size: var(--cg-font-size-lg);
  color: var(--cg-color-warning);
  flex-shrink: 0;
}

.conflict-item.resolved .conflict-icon {
  color: var(--cg-color-text-muted);
}

.conflict-info {
  flex: 1;
  min-width: 0;
}

.workflow-name {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.conflict-description {
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
  margin-top: var(--cg-space-1);
}

.resolved-badge {
  display: flex;
  align-items: center;
  gap: var(--cg-space-1);
  padding: var(--cg-space-1) var(--cg-space-2);
  background: var(--cg-color-success-muted);
  border-radius: var(--cg-radius-sm);
  color: var(--cg-color-success);
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-medium);
  flex-shrink: 0;
}

.conflict-hashes {
  display: flex;
  gap: var(--cg-space-4);
  padding: var(--cg-space-2);
  background: var(--cg-color-bg-tertiary);
  border-radius: var(--cg-radius-sm);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
}

.hash-item code {
  font-family: var(--cg-font-mono);
  color: var(--cg-color-text-secondary);
}

.conflict-actions {
  display: flex;
  justify-content: flex-end;
}
</style>
