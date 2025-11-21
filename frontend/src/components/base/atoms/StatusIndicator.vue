<template>
  <component :is="variant === 'border' ? 'span' : 'span'" :class="statusClass">
    <template v-if="variant === 'dot'">
      <span :class="['status-dot', size]" :style="{ color: statusColor }">●</span>
    </template>
    <template v-else-if="variant === 'icon'">
      <span :class="['status-icon', size]" :style="{ color: statusColor }">{{ statusIcon }}</span>
    </template>
    <template v-else-if="variant === 'text'">
      <span :class="['status-text', size]" :style="{ color: statusColor }">{{ statusText }}</span>
    </template>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  status: 'new' | 'modified' | 'deleted' | 'synced' | 'broken' | 'missing'
  variant?: 'dot' | 'icon' | 'text' | 'border'
  size?: 'sm' | 'md'
}>(), {
  variant: 'dot',
  size: 'sm'
})

const statusConfig = {
  new: {
    color: 'var(--cg-color-info)',
    icon: '●',
    text: 'New',
    class: 'status-new'
  },
  modified: {
    color: 'var(--cg-color-warning)',
    icon: '⚡',
    text: 'Modified',
    class: 'status-modified'
  },
  deleted: {
    color: 'var(--cg-color-error)',
    icon: '−',
    text: 'Deleted',
    class: 'status-deleted'
  },
  synced: {
    color: 'var(--cg-color-success)',
    icon: '✓',
    text: 'Synced',
    class: 'status-synced'
  },
  broken: {
    color: 'var(--cg-color-error)',
    icon: '⚠',
    text: 'Broken',
    class: 'status-broken'
  },
  missing: {
    color: 'var(--cg-color-warning)',
    icon: '⚠',
    text: 'Missing',
    class: 'status-missing'
  }
}

const statusColor = computed(() => statusConfig[props.status].color)
const statusIcon = computed(() => statusConfig[props.status].icon)
const statusText = computed(() => statusConfig[props.status].text)
const statusClass = computed(() => statusConfig[props.status].class)
</script>

<style scoped>
.status-dot,
.status-icon,
.status-text {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.status-dot.sm,
.status-icon.sm {
  font-size: var(--cg-font-size-xs);
}

.status-dot.md,
.status-icon.md {
  font-size: var(--cg-font-size-sm);
}

.status-text.sm {
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-semibold);
}

.status-text.md {
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
}
</style>
