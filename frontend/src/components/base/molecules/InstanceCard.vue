<template>
  <div :class="['instance-card', statusClass]">
    <!-- Header: Provider + Name + Status -->
    <div class="instance-header">
      <span class="provider-badge">{{ providerLabel }}</span>
      <span class="instance-name">{{ instance.name }}</span>
      <span :class="['status-indicator', instance.status]">
        <span v-if="instance.status === 'deploying'" class="spinner"></span>
        {{ statusLabel }}
      </span>
    </div>

    <!-- Details: GPU, Uptime, Cost -->
    <div class="instance-details">
      <span v-if="instance.gpu_type" class="detail">{{ instance.gpu_type }}</span>
      <span v-if="instance.uptime_seconds" class="detail">{{ formatUptime(instance.uptime_seconds) }}</span>
      <span v-if="instance.cost_per_hour" class="detail">${{ instance.cost_per_hour.toFixed(2) }}/hr</span>
      <span v-if="instance.total_cost" class="detail total-cost">${{ instance.total_cost.toFixed(2) }} total</span>
    </div>

    <!-- Deployment progress (when deploying) -->
    <div v-if="instance.status === 'deploying'" class="deployment-progress">
      <div class="progress-message">{{ instance.deployment_message || 'Deploying...' }}</div>
      <ProgressBar v-if="instance.deployment_progress" :progress="instance.deployment_progress" />
    </div>

    <!-- Actions -->
    <div class="instance-actions">
      <ActionButton
        v-if="instance.status === 'running' && instance.comfyui_url"
        variant="primary"
        size="xs"
        @click="openComfyUI"
      >
        Open ComfyUI
      </ActionButton>

      <ActionButton
        v-if="instance.console_url && instance.provider !== 'custom'"
        variant="ghost"
        size="xs"
        @click="openConsole"
      >
        Console
      </ActionButton>

      <ActionButton
        v-if="instance.status === 'running'"
        variant="secondary"
        size="xs"
        :loading="isLoading"
        :disabled="isLoading"
        @click="$emit('stop', instance.id)"
      >
        Stop
      </ActionButton>

      <ActionButton
        v-if="instance.status === 'stopped'"
        variant="secondary"
        size="xs"
        :loading="isLoading"
        :disabled="isLoading"
        @click="$emit('start', instance.id)"
      >
        Start
      </ActionButton>

      <ActionButton
        variant="destructive"
        size="xs"
        :loading="isLoading"
        :disabled="isLoading"
        @click="$emit('terminate', instance.id)"
      >
        Terminate
      </ActionButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Instance } from '@/types/comfygit'
import ActionButton from '../atoms/ActionButton.vue'
import ProgressBar from '../atoms/ProgressBar.vue'

const props = defineProps<{
  instance: Instance
  isLoading?: boolean  // True when any action is in progress for this instance
}>()

defineEmits<{
  stop: [id: string]
  start: [id: string]
  terminate: [id: string]
}>()

const providerLabel = computed(() => {
  const labels: Record<string, string> = {
    runpod: 'RunPod',
    vast: 'Vast.ai',
    custom: 'Custom'
  }
  return labels[props.instance.provider] || props.instance.provider
})

const statusLabel = computed(() => {
  const labels: Record<string, string> = {
    deploying: 'Deploying',
    running: 'Running',
    stopped: 'Stopped',
    error: 'Error',
    terminated: 'Terminated'
  }
  return labels[props.instance.status] || props.instance.status
})

const statusClass = computed(() => `status-${props.instance.status}`)

function openComfyUI() {
  if (props.instance.comfyui_url) {
    window.open(props.instance.comfyui_url, '_blank', 'noopener,noreferrer')
  }
}

function openConsole() {
  if (props.instance.console_url) {
    window.open(props.instance.console_url, '_blank', 'noopener,noreferrer')
  }
}

function formatUptime(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`
}
</script>

<style scoped>
.instance-card {
  border: 1px solid var(--cg-color-border-subtle);
  background: var(--cg-color-bg-tertiary);
  padding: var(--cg-space-3);
  margin-bottom: var(--cg-space-2);
  border-left-width: 3px;
  border-left-color: transparent;
}

/* Status-based border accents */
.instance-card.status-running {
  border-left-color: var(--cg-color-success);
}

.instance-card.status-deploying {
  border-left-color: var(--cg-color-info);
}

.instance-card.status-stopped {
  border-left-color: var(--cg-color-text-muted);
}

.instance-card.status-error {
  border-left-color: var(--cg-color-error);
}

.instance-card.status-terminated {
  border-left-color: var(--cg-color-border-subtle);
  opacity: 0.6;
}

/* Header */
.instance-header {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  margin-bottom: var(--cg-space-2);
}

.provider-badge {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  padding: var(--cg-space-1) var(--cg-space-2);
  background: var(--cg-color-bg-hover);
  border: 1px solid var(--cg-color-border-subtle);
  color: var(--cg-color-text-secondary);
}

.instance-name {
  flex: 1;
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-primary);
  font-weight: var(--cg-font-weight-medium);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.status-indicator {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  display: flex;
  align-items: center;
  gap: var(--cg-space-1);
}

.status-indicator.running {
  color: var(--cg-color-success);
}

.status-indicator.deploying {
  color: var(--cg-color-info);
}

.status-indicator.stopped {
  color: var(--cg-color-text-muted);
}

.status-indicator.error {
  color: var(--cg-color-error);
}

.status-indicator.terminated {
  color: var(--cg-color-text-muted);
}

.status-indicator .spinner {
  width: 10px;
  height: 10px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Details */
.instance-details {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cg-space-2);
  margin-bottom: var(--cg-space-2);
}

.instance-details .detail {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
}

.instance-details .total-cost {
  color: var(--cg-color-text-secondary);
}

/* Deployment progress */
.deployment-progress {
  margin-bottom: var(--cg-space-2);
}

.progress-message {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-info);
  margin-bottom: var(--cg-space-1);
}

/* Actions */
.instance-actions {
  display: flex;
  gap: var(--cg-space-2);
  flex-wrap: wrap;
}
</style>
