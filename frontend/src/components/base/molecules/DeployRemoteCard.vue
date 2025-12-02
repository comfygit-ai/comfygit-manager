<template>
  <div :class="['deploy-remote-card', { selected: isSelected }]">
    <div class="remote-header">
      <div class="remote-info">
        <span class="remote-icon">{{ isDefault ? '🔗' : '🌐' }}</span>
        <span class="remote-name">{{ remote.name }}</span>
        <span v-if="isDefault" class="default-badge">DEFAULT</span>
        <span v-if="syncStatus" class="sync-badge">
          <template v-if="syncStatus.ahead > 0 || syncStatus.behind > 0">
            <span v-if="syncStatus.ahead > 0" class="ahead">↑{{ syncStatus.ahead }}</span>
            <span v-if="syncStatus.behind > 0" class="behind">↓{{ syncStatus.behind }}</span>
          </template>
          <span v-else class="synced">✓ synced</span>
        </span>
      </div>
      <a
        v-if="webUrl"
        :href="webUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="remote-url"
        @click.stop
      >{{ displayUrl }}</a>
      <span v-else class="remote-url-text">{{ displayUrl }}</span>
    </div>

    <div class="remote-actions">
      <ActionButton
        variant="secondary"
        size="xs"
        :loading="isFetching"
        @click="$emit('fetch', remote.name)"
      >
        Fetch
      </ActionButton>
      <ActionButton
        v-if="syncStatus && syncStatus.ahead > 0"
        variant="primary"
        size="xs"
        :loading="isPushing"
        @click="$emit('push', remote.name)"
      >
        Push ↑{{ syncStatus.ahead }}
      </ActionButton>
      <ActionButton
        :variant="isSelected ? 'primary' : 'secondary'"
        size="xs"
        @click="$emit('select', remote.name)"
      >
        {{ isSelected ? '● Selected' : 'Use for Deploy' }}
      </ActionButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { RemoteInfo, RemoteSyncStatus } from '@/types/comfygit'
import ActionButton from '../atoms/ActionButton.vue'

const props = defineProps<{
  remote: RemoteInfo
  syncStatus?: RemoteSyncStatus | null
  isSelected?: boolean
  isFetching?: boolean
  isPushing?: boolean
}>()

defineEmits<{
  fetch: [remoteName: string]
  push: [remoteName: string]
  select: [remoteName: string]
}>()

const isDefault = computed(() => props.remote.is_default)

const webUrl = computed(() => {
  const url = props.remote.fetch_url
  const sshMatch = url.match(/^git@([^:]+):(.+?)(?:\.git)?$/)
  if (sshMatch) return `https://${sshMatch[1]}/${sshMatch[2]}`
  if (url.startsWith('https://') || url.startsWith('http://')) {
    return url.replace(/\.git$/, '')
  }
  return null
})

const displayUrl = computed(() => {
  return props.remote.fetch_url
    .replace(/^https?:\/\//, '')
    .replace(/^git@/, '')
    .replace(/\.git$/, '')
    .replace(/:/, '/')
})
</script>

<style scoped>
.deploy-remote-card {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  transition: border-color var(--cg-transition-fast);
}

.deploy-remote-card.selected {
  border-color: var(--cg-color-accent);
  background: var(--cg-color-bg-secondary);
}

.remote-header {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
}

.remote-info {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  flex-wrap: wrap;
}

.remote-icon {
  font-size: var(--cg-font-size-sm);
}

.remote-name {
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
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

.remote-url {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-info);
  text-decoration: none;
}

.remote-url:hover {
  text-decoration: underline;
}

.remote-url-text {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
}

.remote-actions {
  display: flex;
  gap: var(--cg-space-2);
  flex-wrap: wrap;
}
</style>
