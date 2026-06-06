<template>
  <teleport to="body">
    <div v-if="show" class="modal-overlay" @click="$emit('close')">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">SYNC ENVIRONMENT</h3>
          <button class="modal-close" @click="$emit('close')">✕</button>
        </div>

        <div class="modal-body">
          <p class="sync-message">
            Materialize the tracked environment locally. Saved workflow edits will be preserved.
          </p>

          <!-- Missing nodes (will be installed) -->
          <div v-if="mismatchDetails.missing_nodes.length" class="node-section">
            <h4 class="section-title">Missing (will be installed):</h4>
            <div class="node-list">
              <div v-for="node in mismatchDetails.missing_nodes" :key="node" class="node-item add">
                + {{ node }}
              </div>
            </div>
          </div>

          <!-- Extra nodes (will be removed) -->
          <div v-if="mismatchDetails.extra_nodes.length" class="node-section">
            <h4 class="section-title">Extra (will be removed):</h4>
            <div class="node-list">
              <div v-for="node in mismatchDetails.extra_nodes" :key="node" class="node-item remove">
                - {{ node }}
              </div>
            </div>
          </div>

          <!-- Warning -->
          <div class="warning-box">
            <span class="warning-icon">⚠</span>
            <span>This may take several minutes</span>
          </div>
        </div>

        <div class="modal-actions">
          <ActionButton variant="secondary" @click="$emit('close')">
            Cancel
          </ActionButton>
          <ActionButton variant="primary" @click="$emit('confirm')">
            Sync Now
          </ActionButton>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import ActionButton from '@/components/base/atoms/ActionButton.vue'

defineProps<{
  show: boolean
  mismatchDetails: {
    missing_nodes: string[]
    extra_nodes: string[]
  }
}>()

defineEmits<{
  close: []
  confirm: []
}>()
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
  transition: color var(--cg-transition-fast);
}

.modal-close:hover {
  color: var(--cg-color-text-primary);
}

.modal-body {
  padding: var(--cg-space-4);
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.sync-message {
  margin: 0;
  font-size: var(--cg-font-size-base);
  color: var(--cg-color-text-primary);
  line-height: 1.5;
}

.node-section {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.section-title {
  margin: 0;
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-text-secondary);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.node-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
  max-height: 200px;
  overflow-y: auto;
  padding: var(--cg-space-2);
  background: var(--cg-color-bg-secondary);
  border-radius: var(--cg-radius-sm);
}

.node-item {
  font-size: var(--cg-font-size-sm);
  font-family: var(--cg-font-mono);
  line-height: 1.5;
}

.node-item.add {
  color: var(--cg-color-info);
}

.node-item.remove {
  color: var(--cg-color-warning);
}

.warning-box {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-3);
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
  border-radius: var(--cg-radius-sm);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-warning);
}

.warning-icon {
  font-size: var(--cg-font-size-lg);
  flex-shrink: 0;
}

.modal-actions {
  padding: var(--cg-space-4);
  border-top: 1px solid var(--cg-color-border-subtle);
  display: flex;
  gap: var(--cg-space-2);
  justify-content: flex-end;
}
</style>
