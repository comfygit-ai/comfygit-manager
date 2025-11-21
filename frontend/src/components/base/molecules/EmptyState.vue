<template>
  <div class="empty-state">
    <div v-if="icon" class="empty-icon">{{ icon }}</div>
    <p class="empty-message">{{ message }}</p>
    <ActionButton
      v-if="actionLabel"
      :variant="actionVariant || 'secondary'"
      size="sm"
      @click="$emit('action')"
    >
      {{ actionLabel }}
    </ActionButton>
  </div>
</template>

<script setup lang="ts">
import ActionButton from '../atoms/ActionButton.vue'

withDefaults(defineProps<{
  icon?: string
  message: string
  actionLabel?: string
  actionVariant?: 'primary' | 'secondary' | 'destructive' | 'ghost'
}>(), {
  actionVariant: 'secondary'
})

defineEmits<{
  action: []
}>()
</script>

<style scoped>
.empty-state {
  text-align: center;
  padding: var(--cg-space-8) var(--cg-space-6);
  color: var(--cg-color-text-muted);
}

.empty-icon {
  font-size: var(--cg-font-size-2xl);
  margin-bottom: var(--cg-space-3);
  opacity: 0.5;
}

.empty-message {
  font-size: var(--cg-font-size-sm);
  margin: 0 0 var(--cg-space-4) 0;
}
</style>
