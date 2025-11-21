<template>
  <div
    :class="['item-card', { clickable, compact }, statusClass]"
    @click="clickable && $emit('click')"
  >
    <div class="item-header">
      <span v-if="$slots.icon" class="item-icon">
        <slot name="icon"></slot>
      </span>
      <div class="item-info">
        <div v-if="$slots.title" class="item-title">
          <slot name="title"></slot>
        </div>
        <div v-if="$slots.subtitle" class="item-subtitle">
          <slot name="subtitle"></slot>
        </div>
      </div>
    </div>

    <div v-if="$slots.details" class="item-details">
      <slot name="details"></slot>
    </div>

    <div v-if="$slots.actions" class="item-actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  status?: 'new' | 'modified' | 'deleted' | 'synced' | 'broken' | 'missing'
  clickable?: boolean
  compact?: boolean
}>(), {
  clickable: false,
  compact: false
})

const emit = defineEmits<{
  click: []
}>()

const statusClass = computed(() => {
  return props.status ? `status-${props.status}` : ''
})
</script>

<style scoped>
.item-card {
  border: 1px solid var(--cg-color-border-subtle);
  background: var(--cg-color-bg-tertiary);
  padding: var(--cg-space-3);
  margin-bottom: var(--cg-space-2);
  border-left-width: 3px;
  border-left-color: transparent;
}

.item-card.compact {
  padding: var(--cg-space-2);
}

.item-card.clickable {
  cursor: pointer;
}

.item-card.clickable:hover {
  background: var(--cg-color-bg-hover);
}

/* Status-based border accents */
.item-card.status-broken {
  border-left-color: var(--cg-color-error);
}

.item-card.status-new {
  border-left-color: var(--cg-color-info);
}

.item-card.status-modified {
  border-left-color: var(--cg-color-warning);
}

.item-card.status-synced {
  border-left-color: var(--cg-color-success);
}

.item-card.status-missing {
  border-left-color: var(--cg-color-warning);
}

.item-card.status-deleted {
  border-left-color: var(--cg-color-error);
}

.item-header {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: var(--cg-space-2);
}

.item-header:last-child {
  margin-bottom: 0;
}

.item-icon {
  font-size: var(--cg-font-size-xl);
  flex-shrink: 0;
}

.item-info {
  flex: 1;
  min-width: 0;
}

.item-title {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-base);
  margin-bottom: 2px;
}

.item-subtitle {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
}

.item-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: var(--cg-space-2);
}

.item-details:last-child {
  margin-bottom: 0;
}

.item-actions {
  display: flex;
  gap: var(--cg-space-2);
  flex-wrap: wrap;
}
</style>
