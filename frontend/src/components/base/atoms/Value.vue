<template>
  <span :class="['detail-value', variant, { mono, truncate }]">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  mono?: boolean
  variant?: 'default' | 'hash' | 'warning' | 'error'
  truncate?: boolean
}>(), {
  mono: false,
  variant: 'default',
  truncate: false
})
</script>

<style scoped>
.detail-value {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
  flex: 1;
  word-break: break-word;
}

.detail-value.mono {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
}

.detail-value.hash {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  word-break: break-all;
}

.detail-value.warning {
  color: var(--cg-color-warning);
}

.detail-value.error {
  color: var(--cg-color-error);
}

.detail-value.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
