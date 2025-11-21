<template>
  <div :class="['summary-bar', variant]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'default' | 'compact'
}>(), {
  variant: 'default'
})
</script>

<style scoped>
.summary-bar {
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  margin-top: var(--cg-space-4);
}

.summary-bar.compact {
  padding: var(--cg-space-2) var(--cg-space-3);
  font-size: var(--cg-font-size-xs);
}
</style>
