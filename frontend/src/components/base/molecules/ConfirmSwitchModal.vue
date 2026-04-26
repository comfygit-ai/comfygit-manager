<template>
  <BaseModal
    v-if="show"
    title="Confirm Environment Switch"
    size="md"
    :overlay-z-index="10005"
    @close="$emit('close')"
  >
    <template #body>
      <div class="switch-body">
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
    </template>

    <template #footer>
      <ActionButton variant="secondary" @click="$emit('close')">
        Cancel
      </ActionButton>
      <ActionButton variant="primary" @click="$emit('confirm')">
        Switch
      </ActionButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from '@/components/base/BaseModal.vue'
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
.switch-body {
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
</style>
