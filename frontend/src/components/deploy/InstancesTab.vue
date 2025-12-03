<template>
  <div class="instances-tab">
    <!-- Header with refresh -->
    <div class="instances-header">
      <SectionTitle>Active Instances</SectionTitle>
      <ActionButton
        variant="ghost"
        size="xs"
        :loading="isLoading"
        @click="$emit('refresh')"
      >
        Refresh
      </ActionButton>
    </div>

    <!-- Loading state -->
    <div v-if="isLoading && instances.length === 0" class="loading-state">
      <span class="spinner"></span>
      Loading instances...
    </div>

    <!-- Empty state -->
    <div v-else-if="instances.length === 0" class="empty-state">
      <span class="empty-icon">○</span>
      <span class="empty-text">No active instances</span>
      <p class="empty-help">Deploy an instance from the RunPod tab to get started.</p>
    </div>

    <!-- Instance list -->
    <div v-else class="instances-list">
      <InstanceCard
        v-for="instance in sortedInstances"
        :key="instance.id"
        :instance="instance"
        :is-loading="actionLoadingId === instance.id"
        @stop="id => $emit('stop', id)"
        @start="id => $emit('start', id)"
        @terminate="id => $emit('terminate', id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Instance } from '@/types/comfygit'
import InstanceCard from '../base/molecules/InstanceCard.vue'
import ActionButton from '../base/atoms/ActionButton.vue'
import SectionTitle from '../base/atoms/SectionTitle.vue'

const props = defineProps<{
  instances: Instance[]
  isLoading: boolean
  // Action loading states (managed by parent)
  actionLoadingId?: string | null
}>()

defineEmits<{
  refresh: []
  stop: [id: string]
  start: [id: string]
  terminate: [id: string]
}>()

// Sort: deploying first, then running, then stopped
const sortedInstances = computed(() => {
  const order: Record<string, number> = {
    deploying: 0,
    running: 1,
    stopped: 2,
    error: 3,
    terminated: 4
  }
  return [...props.instances].sort((a, b) =>
    (order[a.status] ?? 5) - (order[b.status] ?? 5)
  )
})
</script>

<style scoped>
.instances-tab {
  padding: var(--cg-space-3);
}

.instances-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--cg-space-3);
}

.loading-state,
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--cg-space-6);
  color: var(--cg-color-text-muted);
  text-align: center;
}

.loading-state .spinner {
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-bottom: var(--cg-space-2);
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.empty-icon {
  font-size: var(--cg-font-size-2xl);
  margin-bottom: var(--cg-space-2);
}

.empty-text {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  margin-bottom: var(--cg-space-2);
}

.empty-help {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
}

.instances-list {
  display: flex;
  flex-direction: column;
}
</style>
