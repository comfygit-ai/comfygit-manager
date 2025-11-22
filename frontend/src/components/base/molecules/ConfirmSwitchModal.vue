<template>
  <teleport to="body">
    <div v-if="show" class="modal-overlay" @click="$emit('close')">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">CONFIRM ENVIRONMENT SWITCH</h3>
          <button class="modal-close" @click="$emit('close')">✕</button>
        </div>

        <div class="modal-body">
          <p class="switch-message">
            Switch from <strong>{{ fromEnvironment }}</strong> to <strong>{{ toEnvironment }}</strong>?
          </p>

          <div class="warning-box">
            <span class="warning-icon">⚠</span>
            <span>This will restart ComfyUI</span>
          </div>

          <p class="switch-details">
            Your current work will be preserved. You can switch back to "{{ fromEnvironment }}" anytime.
          </p>

          <p class="switch-eta">
            Estimated downtime: ~30 seconds
          </p>
        </div>

        <div class="modal-actions">
          <ActionButton variant="secondary" @click="$emit('close')">
            Cancel
          </ActionButton>
          <ActionButton variant="primary" @click="$emit('confirm')">
            Switch
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
  fromEnvironment: string
  toEnvironment: string
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
  max-width: 500px;
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

.switch-message {
  margin: 0;
  font-size: var(--cg-font-size-base);
  color: var(--cg-color-text-primary);
  line-height: 1.5;
}

.switch-message strong {
  color: var(--cg-color-accent);
  font-family: var(--cg-font-mono);
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

.switch-details {
  margin: 0;
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
  line-height: 1.5;
}

.switch-eta {
  margin: 0;
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-muted);
  font-style: italic;
}

.modal-actions {
  padding: var(--cg-space-4);
  border-top: 1px solid var(--cg-color-border-subtle);
  display: flex;
  gap: var(--cg-space-2);
  justify-content: flex-end;
}
</style>
