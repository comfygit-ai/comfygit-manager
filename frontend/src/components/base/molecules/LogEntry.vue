<template>
  <div :class="['log-entry', levelClass]">
    <div class="log-entry-header">
      <LogTimestamp :timestamp="timestamp" :variant="timestampVariant" />
      <LogLevel :level="level" size="sm" />
    </div>
    <div class="log-entry-body">
      <div class="log-entry-message">{{ message }}</div>
      <div v-if="context && hasContextData" class="log-entry-context">
        <DetailRow
          v-for="(value, key) in context"
          :key="key"
          :label="`${key}:`"
          :value="formatContextValue(value)"
          :mono="isContextValueMono(value)"
          label-min-width="120px"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import LogTimestamp from '../atoms/LogTimestamp.vue'
import LogLevel from '../atoms/LogLevel.vue'
import DetailRow from './DetailRow.vue'

const props = withDefaults(defineProps<{
  timestamp: string
  level: 'ERROR' | 'WARNING' | 'INFO' | 'DEBUG' | 'error' | 'warning' | 'info' | 'debug'
  message: string
  context?: Record<string, any>
  timestampVariant?: 'relative' | 'absolute' | 'time-only'
}>(), {
  timestampVariant: 'time-only'
})

// Normalize level to uppercase for styling
const normalizedLevel = computed(() => props.level.toUpperCase() as 'ERROR' | 'WARNING' | 'INFO' | 'DEBUG')

const levelClass = computed(() => `log-entry-${normalizedLevel.value.toLowerCase()}`)

const hasContextData = computed(() => {
  return props.context && Object.keys(props.context).length > 0
})

function formatContextValue(value: any): string {
  if (value === null || value === undefined) return 'N/A'
  if (typeof value === 'object') return JSON.stringify(value)
  return String(value)
}

function isContextValueMono(value: any): boolean {
  // Use monospace for numbers, booleans, and objects
  return typeof value === 'number' || typeof value === 'boolean' || typeof value === 'object'
}
</script>

<style scoped>
.log-entry {
  border: 1px solid var(--cg-color-border-subtle);
  border-left-width: 3px;
  border-radius: var(--cg-radius-md);
  padding: var(--cg-space-3);
  background-color: var(--cg-color-bg-secondary);
  transition: background-color var(--cg-transition-fast);
  margin-bottom: var(--cg-space-2);
}

.log-entry:hover {
  background-color: var(--cg-color-bg-hover);
}

/* Level-specific border colors */
.log-entry-error {
  border-left-color: var(--cg-color-error);
}

.log-entry-warning {
  border-left-color: var(--cg-color-warning);
}

.log-entry-info {
  border-left-color: var(--cg-color-info);
}

.log-entry-debug {
  border-left-color: var(--cg-color-text-muted);
}

.log-entry-header {
  display: flex;
  align-items: center;
  gap: var(--cg-space-3);
  margin-bottom: var(--cg-space-2);
}

.log-entry-body {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.log-entry-message {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  line-height: 1.5;
  word-break: break-word;
}

.log-entry-context {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
  padding-top: var(--cg-space-2);
  border-top: 1px solid var(--cg-color-border-subtle);
  font-size: var(--cg-font-size-xs);
}
</style>
