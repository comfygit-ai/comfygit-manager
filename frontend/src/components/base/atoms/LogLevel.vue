<template>
  <span :class="['log-level', levelClass, size]">
    {{ levelText }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  level: 'ERROR' | 'WARNING' | 'INFO' | 'DEBUG' | 'error' | 'warning' | 'info' | 'debug'
  size?: 'sm' | 'md'
}>(), {
  size: 'sm'
})

// Normalize level to uppercase for consistency
const normalizedLevel = computed(() => props.level.toUpperCase() as 'ERROR' | 'WARNING' | 'INFO' | 'DEBUG')

const levelConfig = {
  ERROR: {
    class: 'log-level-error',
    text: 'ERROR'
  },
  WARNING: {
    class: 'log-level-warning',
    text: 'WARN'
  },
  INFO: {
    class: 'log-level-info',
    text: 'INFO'
  },
  DEBUG: {
    class: 'log-level-debug',
    text: 'DEBUG'
  }
}

const levelClass = computed(() => levelConfig[normalizedLevel.value].class)
const levelText = computed(() => levelConfig[normalizedLevel.value].text)
</script>

<style scoped>
.log-level {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--cg-font-mono);
  font-weight: var(--cg-font-weight-semibold);
  border-radius: var(--cg-radius-sm);
  padding: 2px 6px;
  letter-spacing: 0.05em;
}

.log-level.sm {
  font-size: var(--cg-font-size-xs);
  min-width: 50px;
}

.log-level.md {
  font-size: var(--cg-font-size-sm);
  min-width: 60px;
}

.log-level-error {
  background-color: var(--cg-color-error-muted);
  color: var(--cg-color-error);
  border: 1px solid var(--cg-color-error);
}

.log-level-warning {
  background-color: var(--cg-color-warning-muted);
  color: var(--cg-color-warning);
  border: 1px solid var(--cg-color-warning);
}

.log-level-info {
  background-color: var(--cg-color-info-muted);
  color: var(--cg-color-info);
  border: 1px solid var(--cg-color-info);
}

.log-level-debug {
  background-color: var(--cg-color-bg-hover);
  color: var(--cg-color-text-muted);
  border: 1px solid var(--cg-color-border);
}
</style>
