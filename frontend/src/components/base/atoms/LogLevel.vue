<template>
  <span :class="['log-level', levelClass]">
    <span class="log-level__icon">{{ icon }}</span>
    <span class="log-level__text">{{ level }}</span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

/**
 * LogLevel Atom
 *
 * Badge component for displaying log entry severity levels
 * Shows an icon and level text with appropriate color coding
 *
 * @example
 * <LogLevel level="ERROR" />
 * <LogLevel level="WARNING" />
 */

interface LogLevelProps {
  /** Log level severity */
  level: 'ERROR' | 'WARNING' | 'INFO' | 'DEBUG'
}

const props = defineProps<LogLevelProps>()

const levelClass = computed(() => `log-level--${props.level.toLowerCase()}`)

const icon = computed(() => {
  switch (props.level) {
    case 'ERROR': return '✕'
    case 'WARNING': return '!'
    case 'INFO': return '→'
    case 'DEBUG': return '·'
    default: return '·'
  }
})
</script>

<style scoped>
.log-level {
  display: inline-flex;
  align-items: center;
  gap: var(--cg-space-1);
  padding: 2px 8px;
  border: 1px solid;
  font-size: var(--cg-font-size-xs);
  font-family: var(--cg-font-mono);
  font-weight: var(--cg-font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  white-space: nowrap;
  flex-shrink: 0;
}

.log-level__icon {
  font-size: 10px;
  line-height: 1;
}

.log-level__text {
  font-size: 10px;
  line-height: 1;
}

/* Error level - red */
.log-level--error {
  color: var(--cg-color-error);
  border-color: var(--cg-color-error);
  background: var(--cg-color-error-muted);
}

/* Warning level - yellow */
.log-level--warning {
  color: var(--cg-color-warning);
  border-color: var(--cg-color-warning);
  background: var(--cg-color-warning-muted);
}

/* Info level - blue */
.log-level--info {
  color: var(--cg-color-info);
  border-color: var(--cg-color-info);
  background: var(--cg-color-info-muted);
}

/* Debug level - muted */
.log-level--debug {
  color: var(--cg-color-text-muted);
  border-color: var(--cg-color-border);
  background: transparent;
}
</style>
