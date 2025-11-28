<template>
  <BaseModal title="Compatibility Check" size="lg" @close="emit('cancel')">
    <template #body>
      <div class="validation-content">
        <!-- Compatible - no conflicts -->
        <div v-if="validation.is_compatible && validation.node_conflicts.length === 0" class="compatible-message">
          <span class="icon">✓</span>
          <div>
            <strong>All clear!</strong>
            <p>Your workflow choices are compatible. Ready to {{ operationType }}.</p>
          </div>
        </div>

        <!-- Has node version conflicts -->
        <template v-else-if="validation.node_conflicts.length > 0">
          <div class="warning-header">
            <span class="icon">⚠</span>
            <div>
              <strong>Node Version Differences</strong>
              <p>
                Your workflow choices require different versions of some nodes.
                The versions shown below will be installed.
              </p>
            </div>
          </div>

          <div class="conflicts-list">
            <NodeConflictItem
              v-for="conflict in validation.node_conflicts"
              :key="conflict.node_id"
              :conflict="conflict"
            />
          </div>

          <div class="info-box">
            <strong>What happens if you proceed?</strong>
            <p>
              The highlighted versions will be installed. Workflows built with
              different versions may need minor adjustments.
            </p>
          </div>
        </template>

        <!-- Warnings (non-blocking) -->
        <div v-if="validation.warnings.length > 0" class="warnings-section">
          <h4>Warnings</h4>
          <ul>
            <li v-for="(warning, index) in validation.warnings" :key="index">{{ warning }}</li>
          </ul>
        </div>
      </div>
    </template>

    <template #footer>
      <BaseButton variant="secondary" @click="emit('cancel')">
        Cancel
      </BaseButton>
      <div class="footer-spacer"></div>
      <BaseButton variant="secondary" @click="emit('goBack')">
        ← Change Choices
      </BaseButton>
      <BaseButton
        variant="primary"
        :loading="executing"
        @click="emit('proceed')"
      >
        {{ proceedLabel }}
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { MergeValidation } from '@/types/comfygit'
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'
import NodeConflictItem from './base/molecules/NodeConflictItem.vue'

const props = defineProps<{
  validation: MergeValidation
  operationType: 'pull' | 'merge'
  executing?: boolean
}>()

const emit = defineEmits<{
  proceed: []
  goBack: []
  cancel: []
}>()

const proceedLabel = computed(() => {
  if (props.validation.is_compatible) {
    return props.operationType === 'pull' ? 'Pull' : 'Merge'
  }
  return props.operationType === 'pull' ? 'Pull Anyway' : 'Merge Anyway'
})
</script>

<style scoped>
.validation-content {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.compatible-message {
  display: flex;
  align-items: flex-start;
  gap: var(--cg-space-3);
  padding: var(--cg-space-4);
  background: var(--cg-color-success-muted);
  border: 1px solid var(--cg-color-success);
  border-radius: var(--cg-radius-md);
  color: var(--cg-color-success);
}

.compatible-message .icon {
  font-size: var(--cg-font-size-xl);
}

.compatible-message p {
  margin: var(--cg-space-1) 0 0 0;
  font-size: var(--cg-font-size-sm);
}

.warning-header {
  display: flex;
  align-items: flex-start;
  gap: var(--cg-space-3);
  padding: var(--cg-space-4);
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
  border-radius: var(--cg-radius-md);
  color: var(--cg-color-warning);
}

.warning-header .icon {
  font-size: var(--cg-font-size-xl);
}

.warning-header p {
  margin: var(--cg-space-1) 0 0 0;
  font-size: var(--cg-font-size-sm);
}

.conflicts-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
  max-height: 300px;
  overflow-y: auto;
}

.info-box {
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border-radius: var(--cg-radius-sm);
  font-size: var(--cg-font-size-sm);
}

.info-box strong {
  display: block;
  margin-bottom: var(--cg-space-1);
  color: var(--cg-color-text-primary);
}

.info-box p {
  margin: 0;
  color: var(--cg-color-text-secondary);
}

.warnings-section {
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border-radius: var(--cg-radius-sm);
}

.warnings-section h4 {
  margin: 0 0 var(--cg-space-2) 0;
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.warnings-section ul {
  margin: 0;
  padding: 0 0 0 var(--cg-space-4);
  list-style: disc;
}

.warnings-section li {
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
  padding: var(--cg-space-1) 0;
}

.footer-spacer {
  flex: 1;
}
</style>
