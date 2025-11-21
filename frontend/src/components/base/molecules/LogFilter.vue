<template>
  <div class="log-filter">
    <div class="log-filter-group">
      <span class="log-filter-label">Level:</span>
      <div class="log-filter-buttons">
        <button
          v-for="level in levels"
          :key="level.value"
          :class="['log-filter-btn', level.class, { active: modelValue === level.value }]"
          @click="emit('update:modelValue', level.value)"
        >
          {{ level.label }}
        </button>
      </div>
    </div>
    <div class="log-filter-group">
      <span class="log-filter-label">Lines:</span>
      <div class="log-filter-buttons">
        <button
          v-for="limit in lineLimits"
          :key="limit"
          :class="['log-filter-btn', 'log-filter-btn-lines', { active: lineLimit === limit }]"
          @click="emit('update:lineLimit', limit)"
        >
          {{ limit }}
        </button>
      </div>
    </div>
    <button v-if="showRefresh" class="log-filter-refresh" @click="emit('refresh')" title="Refresh logs">
      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
        <path d="M13.65 2.35a8 8 0 1 0 1.4 9.65h-2.25a5.75 5.75 0 1 1-1-6.45L9.5 8H16V1.5l-2.35 2.35z"/>
      </svg>
      Refresh
    </button>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  modelValue: string // 'all' | 'ERROR' | 'WARNING' | 'INFO' | 'DEBUG'
  lineLimit: number
  showRefresh?: boolean
}>(), {
  showRefresh: true
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'update:lineLimit': [limit: number]
  'refresh': []
}>()

const levels = [
  { value: 'all', label: 'ALL', class: 'log-filter-btn-all' },
  { value: 'ERROR', label: 'ERROR', class: 'log-filter-btn-error' },
  { value: 'WARNING', label: 'WARN', class: 'log-filter-btn-warning' },
  { value: 'INFO', label: 'INFO', class: 'log-filter-btn-info' },
  { value: 'DEBUG', label: 'DEBUG', class: 'log-filter-btn-debug' }
]

const lineLimits = [50, 100, 200, 500]
</script>

<style scoped>
.log-filter {
  display: flex;
  align-items: center;
  gap: var(--cg-space-4);
  padding: var(--cg-space-3);
  background-color: var(--cg-color-bg-secondary);
  border-radius: var(--cg-radius-md);
  border: 1px solid var(--cg-color-border-subtle);
  margin-bottom: var(--cg-space-3);
  flex-wrap: wrap;
}

.log-filter-group {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
}

.log-filter-label {
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-muted);
  font-weight: var(--cg-font-weight-medium);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.log-filter-buttons {
  display: flex;
  gap: var(--cg-space-1);
}

.log-filter-btn {
  padding: 4px 10px;
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-semibold);
  font-family: var(--cg-font-mono);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-sm);
  background-color: var(--cg-color-bg-primary);
  color: var(--cg-color-text-secondary);
  cursor: pointer;
  transition: all var(--cg-transition-fast);
  letter-spacing: 0.05em;
}

.log-filter-btn:hover {
  background-color: var(--cg-color-bg-hover);
}

.log-filter-btn.active {
  border-width: 1px;
}

.log-filter-btn-all.active {
  background-color: var(--cg-color-info-muted);
  color: var(--cg-color-info);
  border-color: var(--cg-color-info);
}

.log-filter-btn-error.active {
  background-color: var(--cg-color-error-muted);
  color: var(--cg-color-error);
  border-color: var(--cg-color-error);
}

.log-filter-btn-warning.active {
  background-color: var(--cg-color-warning-muted);
  color: var(--cg-color-warning);
  border-color: var(--cg-color-warning);
}

.log-filter-btn-info.active {
  background-color: var(--cg-color-info-muted);
  color: var(--cg-color-info);
  border-color: var(--cg-color-info);
}

.log-filter-btn-debug.active {
  background-color: var(--cg-color-bg-hover);
  color: var(--cg-color-text-primary);
  border-color: var(--cg-color-border-strong);
}

.log-filter-btn-lines.active {
  background-color: var(--cg-color-accent-muted);
  color: var(--cg-color-accent);
  border-color: var(--cg-color-accent);
}

.log-filter-refresh {
  display: flex;
  align-items: center;
  gap: var(--cg-space-1);
  padding: 4px 10px;
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-medium);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-sm);
  background-color: var(--cg-color-bg-primary);
  color: var(--cg-color-text-secondary);
  cursor: pointer;
  transition: all var(--cg-transition-fast);
  margin-left: auto;
}

.log-filter-refresh:hover {
  background-color: var(--cg-color-bg-hover);
  color: var(--cg-color-text-primary);
}

.log-filter-refresh svg {
  opacity: 0.8;
}
</style>
