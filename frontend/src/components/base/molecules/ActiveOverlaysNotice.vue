<template>
  <div v-if="overlays.length || showEmpty" class="active-overlays-notice">
    <div class="notice-copy">
      <div class="notice-title">{{ title }}</div>
      <div class="notice-description">
        <template v-if="overlays.length">{{ description }}</template>
        <template v-else>{{ emptyMessage }}</template>
      </div>
    </div>
    <div v-if="overlays.length" class="overlay-chip-list">
      <span
        v-for="overlay in overlays"
        :key="overlay.name"
        class="overlay-chip"
        :title="overlay.description || overlay.name"
      >
        {{ overlay.name }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DependencyOverlayInfo } from '@/types/comfygit'

withDefaults(defineProps<{
  overlays?: DependencyOverlayInfo[]
  title?: string
  description?: string
  emptyMessage?: string
  showEmpty?: boolean
}>(), {
  overlays: () => [],
  title: 'Dependency overlays',
  description: 'Active overlays are applied to sync, resolve, and node install operations.',
  emptyMessage: 'No active dependency overlays.',
  showEmpty: false,
})
</script>

<style scoped>
.active-overlays-notice {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--cg-space-3);
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border-subtle);
}

.notice-copy {
  min-width: 0;
}

.notice-title {
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-text-primary);
  text-transform: uppercase;
  margin-bottom: var(--cg-space-1);
}

.notice-description {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-secondary);
  line-height: 1.4;
}

.overlay-chip-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--cg-space-1);
  max-width: 45%;
}

.overlay-chip {
  display: inline-flex;
  align-items: center;
  max-width: 180px;
  padding: 2px var(--cg-space-2);
  border: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg-primary);
  color: var(--cg-color-text-primary);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
