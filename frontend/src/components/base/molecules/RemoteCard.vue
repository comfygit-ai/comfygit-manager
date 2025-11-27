<template>
  <ItemCard :status="isDefault ? 'synced' : undefined">
    <template #icon>
      {{ isDefault ? '🔗' : '🌐' }}
    </template>
    <template #title>
      <div class="remote-title">
        <span>{{ remote.name }}</span>
        <span v-if="isDefault" class="default-badge">DEFAULT</span>
        <span v-if="syncStatus" class="sync-badge">
          <span v-if="syncStatus.ahead > 0" class="ahead">↑{{ syncStatus.ahead }}</span>
          <span v-if="syncStatus.behind > 0" class="behind">↓{{ syncStatus.behind }}</span>
        </span>
      </div>
    </template>
    <template #subtitle>
      <span v-if="isTracking" class="tracking-info">
        Tracking: {{ trackingBranch }}
      </span>
    </template>
    <template #details>
      <DetailRow label="Fetch:">
        <RemoteUrlDisplay :url="remote.fetch_url" />
      </DetailRow>
      <DetailRow v-if="remote.push_url !== remote.fetch_url" label="Push:">
        <RemoteUrlDisplay :url="remote.push_url" />
      </DetailRow>
      <DetailRow v-if="syncStatus?.last_fetch" label="Last Fetch:">
        <span>{{ formatLastFetch(syncStatus.last_fetch) }}</span>
      </DetailRow>
    </template>
    <template #actions>
      <ActionButton
        variant="primary"
        size="xs"
        :loading="fetchingLocal"
        @click="$emit('fetch', remote.name)"
      >
        Fetch
      </ActionButton>
      <ActionButton
        :variant="canPull ? 'primary' : 'secondary'"
        size="xs"
        :disabled="!syncStatus"
        @click="$emit('pull', remote.name)"
      >
        Pull{{ syncStatus && syncStatus.behind > 0 ? ` ↓${syncStatus.behind}` : '' }}
      </ActionButton>
      <ActionButton
        :variant="canPush ? 'primary' : 'secondary'"
        size="xs"
        :disabled="!syncStatus"
        @click="$emit('push', remote.name)"
      >
        Push{{ syncStatus && syncStatus.ahead > 0 ? ` ↑${syncStatus.ahead}` : '' }}
      </ActionButton>
      <ActionButton
        variant="secondary"
        size="xs"
        @click="$emit('edit', remote.name)"
      >
        Edit URL
      </ActionButton>
      <ActionButton
        v-if="!isDefault"
        variant="destructive"
        size="xs"
        @click="$emit('remove', remote.name)"
      >
        Remove
      </ActionButton>
    </template>
  </ItemCard>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { RemoteInfo, RemoteSyncStatus } from '@/types/comfygit'
import ItemCard from './ItemCard.vue'
import DetailRow from './DetailRow.vue'
import ActionButton from '../atoms/ActionButton.vue'
import RemoteUrlDisplay from '../atoms/RemoteUrlDisplay.vue'

const props = defineProps<{
  remote: RemoteInfo
  syncStatus?: RemoteSyncStatus | null
  trackingBranch?: string
  fetchingRemote?: string | null
}>()

defineEmits<{
  fetch: [remoteName: string]
  edit: [remoteName: string]
  remove: [remoteName: string]
  pull: [remoteName: string]
  push: [remoteName: string]
}>()

const fetchingLocal = computed(() => props.fetchingRemote === props.remote.name)
const isDefault = computed(() => props.remote.is_default)
const isTracking = computed(() => !!props.trackingBranch)
const canPull = computed(() => props.syncStatus && props.syncStatus.behind > 0)
const canPush = computed(() => props.syncStatus && props.syncStatus.ahead > 0)

function formatLastFetch(isoDate: string): string {
  const date = new Date(isoDate)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)

  if (diffMins < 1) return 'Just now'
  if (diffMins < 60) return `${diffMins}m ago`

  const diffHours = Math.floor(diffMins / 60)
  if (diffHours < 24) return `${diffHours}h ago`

  const diffDays = Math.floor(diffHours / 24)
  if (diffDays < 7) return `${diffDays}d ago`

  return date.toLocaleDateString()
}
</script>

<style scoped>
.remote-title {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  flex-wrap: wrap;
}

.default-badge {
  display: inline-block;
  padding: 2px 6px;
  background: transparent;
  border: 1px solid var(--cg-color-success);
  color: var(--cg-color-success);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.sync-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--cg-space-1);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
}

.sync-badge .ahead {
  color: var(--cg-color-info);
}

.sync-badge .behind {
  color: var(--cg-color-warning);
}

.tracking-info {
  font-family: var(--cg-font-mono);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
}
</style>
