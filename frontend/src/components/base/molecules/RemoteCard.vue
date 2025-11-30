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
          <template v-if="syncStatus.ahead > 0 || syncStatus.behind > 0">
            <span v-if="syncStatus.ahead > 0" class="ahead">↑{{ syncStatus.ahead }}</span>
            <span v-if="syncStatus.behind > 0" class="behind">↓{{ syncStatus.behind }}</span>
          </template>
          <span v-else class="synced">✓ synced</span>
        </span>
      </div>
    </template>
    <template #subtitle>
      <a
        v-if="webUrl"
        :href="webUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="remote-url-link"
        @click.stop
      >{{ displayUrl }}</a>
      <span v-else class="remote-url-text">{{ displayUrl }}</span>
    </template>
    <template v-if="hasDetails" #details>
      <DetailRow v-if="remote.push_url !== remote.fetch_url" label="Push URL:">
        <RemoteUrlDisplay :url="remote.push_url" />
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
const canPull = computed(() => props.syncStatus && props.syncStatus.behind > 0)
const canPush = computed(() => props.syncStatus && props.syncStatus.ahead > 0)
const hasDetails = computed(() => props.remote.push_url !== props.remote.fetch_url)

// Convert git URL to browsable web URL
const webUrl = computed(() => {
  const url = props.remote.fetch_url

  // Handle SSH format: git@github.com:user/repo.git
  const sshMatch = url.match(/^git@([^:]+):(.+?)(?:\.git)?$/)
  if (sshMatch) {
    return `https://${sshMatch[1]}/${sshMatch[2]}`
  }

  // Handle HTTPS format: https://github.com/user/repo.git
  if (url.startsWith('https://') || url.startsWith('http://')) {
    return url.replace(/\.git$/, '')
  }

  // Can't convert to web URL
  return null
})

// Display URL (shortened for display)
const displayUrl = computed(() => {
  const url = props.remote.fetch_url

  // Remove protocol and .git suffix for cleaner display
  return url
    .replace(/^https?:\/\//, '')
    .replace(/^git@/, '')
    .replace(/\.git$/, '')
    .replace(/:/, '/')  // Convert SSH colon to slash
})
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

.sync-badge .synced {
  color: var(--cg-color-success);
}

.remote-url-link {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-info);
  text-decoration: none;
}

.remote-url-link:hover {
  text-decoration: underline;
}

.remote-url-text {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
}
</style>
