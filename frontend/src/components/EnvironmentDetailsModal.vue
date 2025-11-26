<template>
  <BaseModal
    :title="`ENVIRONMENT DETAILS: ${environment.name.toUpperCase()}`"
    size="md"
    @close="emit('close')"
  >
    <template #body>
      <div class="env-details">
        <!-- Status Badge -->
        <div class="status-row">
          <span class="label">Status:</span>
          <span :class="['status-badge', environment.is_current ? 'current' : 'inactive']">
            {{ environment.is_current ? 'Current' : 'Inactive' }}
          </span>
        </div>

        <!-- Branch -->
        <div class="detail-row" v-if="environment.current_branch">
          <span class="label">Branch:</span>
          <span class="value mono">{{ environment.current_branch }}</span>
        </div>

        <!-- Path -->
        <div class="detail-row" v-if="environment.path">
          <span class="label">Path:</span>
          <span class="value mono small">{{ environment.path }}</span>
        </div>

        <!-- Stats Section -->
        <div class="section-divider"></div>

        <div class="detail-row">
          <span class="label">Workflows:</span>
          <span class="value">{{ environment.workflow_count }}</span>
        </div>

        <div class="detail-row">
          <span class="label">Nodes:</span>
          <span class="value">{{ environment.node_count }}</span>
        </div>

        <div class="detail-row">
          <span class="label">Models:</span>
          <span class="value">{{ environment.model_count }}</span>
        </div>

        <!-- Created/Last Used -->
        <div class="section-divider" v-if="environment.created_at || environment.last_used"></div>

        <div class="detail-row" v-if="environment.created_at">
          <span class="label">Created:</span>
          <span class="value">{{ formatDate(environment.created_at) }}</span>
        </div>

        <div class="detail-row" v-if="environment.last_used">
          <span class="label">Last Used:</span>
          <span class="value">{{ formatDate(environment.last_used) }}</span>
        </div>
      </div>
    </template>

    <template #footer>
      <BaseButton
        v-if="!environment.is_current"
        variant="primary"
        @click="emit('switch', environment.name)"
      >
        Switch to Environment
      </BaseButton>
      <BaseButton variant="secondary" @click="emit('close')">
        Close
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import type { EnvironmentInfo } from '@/types/comfygit'
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'

defineProps<{
  environment: EnvironmentInfo
}>()

const emit = defineEmits<{
  close: []
  switch: [name: string]
}>()

function formatDate(timestamp?: string | null): string {
  if (!timestamp) return 'Unknown'

  try {
    const date = new Date(timestamp)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)

    if (diffMins < 1) return 'just now'
    if (diffMins < 60) return `${diffMins} ${diffMins === 1 ? 'minute' : 'minutes'} ago`
    if (diffHours < 24) return `${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ago`
    if (diffDays < 30) return `${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago`

    return date.toLocaleDateString()
  } catch {
    return timestamp
  }
}
</script>

<style scoped>
.env-details {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.status-row {
  display: flex;
  align-items: center;
  gap: var(--cg-space-3);
  padding-bottom: var(--cg-space-3);
  border-bottom: 1px solid var(--cg-color-border-subtle);
}

.status-badge {
  padding: 4px 12px;
  border-radius: var(--cg-radius-sm);
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.status-badge.current {
  background: var(--cg-color-success-muted, rgba(34, 197, 94, 0.15));
  color: var(--cg-color-success);
  border: 1px solid var(--cg-color-success);
}

.status-badge.inactive {
  background: var(--cg-color-bg-tertiary);
  color: var(--cg-color-text-muted);
  border: 1px solid var(--cg-color-border-subtle);
}

.detail-row {
  display: flex;
  align-items: flex-start;
  gap: var(--cg-space-3);
  font-size: var(--cg-font-size-sm);
}

.label {
  color: var(--cg-color-text-muted);
  min-width: 100px;
  flex-shrink: 0;
}

.value {
  color: var(--cg-color-text-secondary);
  word-break: break-word;
}

.value.mono {
  font-family: var(--cg-font-mono);
}

.value.small {
  font-size: var(--cg-font-size-xs);
}

.section-divider {
  height: 1px;
  background: var(--cg-color-border-subtle);
  margin: var(--cg-space-2) 0;
}
</style>
