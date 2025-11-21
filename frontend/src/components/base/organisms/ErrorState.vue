<template>
  <div class="error-state">
    <span class="error-icon">⚠</span>
    <p class="error-message">{{ message }}</p>
    <ActionButton
      v-if="retry"
      variant="secondary"
      size="sm"
      @click="$emit('retry')"
    >
      Retry
    </ActionButton>
  </div>
</template>

<script setup lang="ts">
import ActionButton from '../atoms/ActionButton.vue'

withDefaults(defineProps<{
  message: string
  retry?: boolean
}>(), {
  retry: false
})

defineEmits<{
  retry: []
}>()
</script>

<style scoped>
.error-state {
  text-align: center;
  padding: var(--cg-space-6);
  color: var(--cg-color-error);
  border: 1px solid var(--cg-color-error);
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--cg-space-3);
}

.error-icon {
  font-size: var(--cg-font-size-2xl);
}

.error-message {
  font-size: var(--cg-font-size-sm);
  margin: 0;
}
</style>
