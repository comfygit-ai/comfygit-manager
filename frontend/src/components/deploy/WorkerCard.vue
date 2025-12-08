<template>
  <div :class="['worker-card', { offline: worker.status === 'offline' }]">
    <div class="worker-header">
      <div class="worker-status">
        <span :class="['status-dot', worker.status]"></span>
        <span class="worker-name">{{ worker.name }}</span>
      </div>
      <div class="worker-actions">
        <ActionButton
          v-if="worker.status === 'online'"
          variant="primary"
          size="xs"
          :disabled="isActionLoading"
          @click="$emit('deploy', worker)"
        >
          Deploy
        </ActionButton>
        <ActionButton
          variant="ghost"
          size="xs"
          :loading="isActionLoading"
          @click="$emit('remove', worker.name)"
        >
          Remove
        </ActionButton>
      </div>
    </div>

    <div class="worker-details">
      <span class="detail-item">
        <span class="detail-value">{{ worker.host }}:{{ worker.port }}</span>
      </span>
      <span v-if="worker.gpu_info" class="detail-item">
        <span class="detail-label">•</span>
        <span class="detail-value">{{ worker.gpu_info }}</span>
      </span>
      <span v-if="worker.mode" class="detail-item">
        <span class="detail-label">•</span>
        <span class="detail-value mode-badge">{{ worker.mode }}</span>
      </span>
    </div>

    <div v-if="worker.status === 'online'" class="worker-stats">
      <span class="stat-item">
        Status: <span class="stat-value online">Online</span>
      </span>
      <span v-if="worker.instance_count !== undefined" class="stat-item">
        • {{ worker.instance_count }} instance{{ worker.instance_count !== 1 ? 's' : '' }}
        <span v-if="worker.running_count">({{ worker.running_count }} running)</span>
      </span>
    </div>

    <div v-else class="worker-stats offline">
      <span class="stat-item">
        Status: <span class="stat-value offline">Offline</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CustomWorker } from '@/types/comfygit'
import ActionButton from '@/components/base/atoms/ActionButton.vue'

defineProps<{
  worker: CustomWorker
  isActionLoading?: boolean
}>()

defineEmits<{
  deploy: [worker: CustomWorker]
  remove: [name: string]
}>()
</script>

<style scoped>
.worker-card {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  padding: var(--cg-space-3);
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.worker-card.offline {
  opacity: 0.7;
}

.worker-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--cg-space-2);
}

.worker-status {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.status-dot.online {
  background: var(--cg-color-success);
  box-shadow: 0 0 4px var(--cg-color-success);
}

.status-dot.offline {
  background: var(--cg-color-text-muted);
}

.status-dot.unknown {
  background: var(--cg-color-warning);
}

.worker-name {
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-medium);
  color: var(--cg-color-text-primary);
}

.worker-actions {
  display: flex;
  gap: var(--cg-space-1);
}

.worker-details {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-secondary);
}

.detail-item {
  display: flex;
  align-items: center;
  gap: var(--cg-space-1);
}

.detail-label {
  color: var(--cg-color-text-muted);
}

.detail-value {
  font-family: var(--cg-font-mono);
}

.mode-badge {
  text-transform: capitalize;
  padding: 1px 6px;
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
}

.worker-stats {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  display: flex;
  align-items: center;
  gap: var(--cg-space-1);
}

.stat-item {
  display: flex;
  align-items: center;
  gap: var(--cg-space-1);
}

.stat-value {
  font-weight: var(--cg-font-weight-medium);
}

.stat-value.online {
  color: var(--cg-color-success);
}

.stat-value.offline {
  color: var(--cg-color-text-muted);
}
</style>
