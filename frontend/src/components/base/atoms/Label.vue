<template>
  <span :class="['detail-label']" :style="{ minWidth }">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  minWidth?: string
}>(), {
  minWidth: '70px'
})
</script>

<style scoped>
.detail-label {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-normal);
}
</style>
