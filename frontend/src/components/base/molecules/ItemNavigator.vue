<template>
  <div class="item-navigator">
    <!-- Left side: Item title and status -->
    <div class="nav-item-info">
      <code class="item-name">{{ itemName }}</code>
      <span :class="['status-badge', statusVariant]">{{ statusLabel }}</span>
    </div>

    <!-- Right side: Navigation controls -->
    <div class="nav-controls">
      <div class="nav-arrows">
        <button
          class="nav-arrow"
          :disabled="currentIndex === 0"
          @click="emit('prev')"
          title="Previous item"
        >
          ←
        </button>
        <button
          class="nav-arrow"
          :disabled="currentIndex === totalItems - 1"
          @click="emit('next')"
          title="Next item"
        >
          →
        </button>
      </div>
      <span class="nav-position">{{ currentIndex + 1 }}/{{ totalItems }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export type ResolutionStatus =
  | 'not-found'
  | 'ambiguous'
  | 'install'
  | 'select'
  | 'download'
  | 'optional'
  | 'skip'

const props = defineProps<{
  itemName: string
  status: ResolutionStatus
  currentIndex: number
  totalItems: number
  // Optional override for badge text
  statusLabelOverride?: string
}>()

const emit = defineEmits<{
  prev: []
  next: []
}>()

const statusLabel = computed(() => {
  if (props.statusLabelOverride) return props.statusLabelOverride

  switch (props.status) {
    case 'not-found': return 'Not Found'
    case 'ambiguous': return 'Multiple Matches'
    case 'install': return 'Installing'
    case 'select': return 'Selected'
    case 'download': return 'Downloading'
    case 'optional': return 'Optional'
    case 'skip': return 'Skipped'
    default: return 'Pending'
  }
})

const statusVariant = computed(() => {
  switch (props.status) {
    case 'not-found': return 'unresolved'
    case 'ambiguous': return 'ambiguous'
    case 'install':
    case 'select':
    case 'download': return 'resolved'
    case 'optional': return 'optional'
    case 'skip': return 'skip'
    default: return 'unresolved'
  }
})
</script>

<style scoped>
.item-navigator {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--cg-space-3);
  padding: var(--cg-space-2) var(--cg-space-3);
  background: var(--cg-color-bg-tertiary);
  border-radius: var(--cg-radius-sm);
  border: 1px solid var(--cg-color-border-subtle);
}

.nav-item-info {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  flex: 1;
  min-width: 0;
  overflow: hidden;
}

.item-name {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-accent);
  background: var(--cg-color-bg-primary);
  padding: var(--cg-space-1) var(--cg-space-2);
  border-radius: var(--cg-radius-sm);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
}

.status-badge {
  padding: var(--cg-space-1) var(--cg-space-2);
  border-radius: var(--cg-radius-sm);
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-medium);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  white-space: nowrap;
  flex-shrink: 0;
}

.status-badge.unresolved {
  background: var(--cg-color-error-muted);
  color: var(--cg-color-error);
}

.status-badge.ambiguous {
  background: var(--cg-color-warning-muted);
  color: var(--cg-color-warning);
}

.status-badge.resolved {
  background: var(--cg-color-success-muted);
  color: var(--cg-color-success);
}

.status-badge.optional {
  background: var(--cg-color-info-muted);
  color: var(--cg-color-info);
}

.status-badge.skip {
  background: var(--cg-color-bg-hover);
  color: var(--cg-color-text-muted);
}

.nav-controls {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  flex-shrink: 0;
}

.nav-arrows {
  display: flex;
  gap: 4px;
}

.nav-arrow {
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-primary);
  width: 48px;
  height: 24px;
  border-radius: var(--cg-radius-sm);
  cursor: pointer;
  font-size: var(--cg-font-size-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--cg-transition-fast);
}

.nav-arrow:first-child {
  border-radius: var(--cg-radius-sm) 0 0 var(--cg-radius-sm);
}

.nav-arrow:last-child {
  border-radius: 0 var(--cg-radius-sm) var(--cg-radius-sm) 0;
}

.nav-arrow:hover:not(:disabled) {
  background: var(--cg-color-bg-hover);
  border-color: var(--cg-color-accent);
  color: var(--cg-color-accent);
}

.nav-arrow:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.nav-position {
  font-size: var(--cg-font-size-xs);
  font-family: var(--cg-font-mono);
  color: var(--cg-color-text-muted);
  min-width: 36px;
  text-align: right;
}
</style>
