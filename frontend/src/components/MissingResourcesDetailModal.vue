<template>
  <BaseModal :title="title" size="md" @close="emit('close')">
    <template #body>
      <!-- Header with bulk action -->
      <div class="detail-header">
        <span class="item-count">{{ items.length }} {{ items.length === 1 ? 'item' : 'items' }}</span>
        <BaseButton
          v-if="actionableItems.length > 1"
          size="sm"
          variant="secondary"
          :disabled="allDone"
          @click="emit('bulk-action')"
        >
          {{ bulkActionLabel }}
        </BaseButton>
      </div>

      <!-- Scrollable list -->
      <div class="resource-list">
        <div v-for="item in items" :key="item.id" class="resource-item">
          <div class="item-info">
            <span class="item-name">{{ item.name }}</span>
            <span v-if="item.subtitle" class="item-subtitle">{{ item.subtitle }}</span>
          </div>

          <!-- Actionable items: show button or state badge -->
          <template v-if="item.canAction">
            <span v-if="isInstalling(item)" class="installing-badge">Installing...</span>
            <span v-else-if="isFailed(item)" class="failed-badge" :title="getFailureReason(item)">Failed ⚠</span>
            <span v-else-if="isInstalled(item)" class="installed-badge">Installed</span>
            <span v-else-if="isQueued(item)" class="queued-badge">Queued</span>
            <BaseButton v-else size="sm" variant="secondary" @click="emit('action', item)">
              {{ actionLabel }}
            </BaseButton>
          </template>

          <!-- Non-actionable items: show reason -->
          <span v-else class="no-action">{{ item.actionDisabledReason || 'Not available' }}</span>
        </div>
      </div>
    </template>

    <template #footer>
      <BaseButton variant="secondary" @click="emit('close')">Close</BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'

export interface ResourceItem {
  id: string
  name: string
  subtitle?: string
  canAction: boolean
  actionDisabledReason?: string
}

const props = defineProps<{
  title: string
  items: ResourceItem[]
  itemType: 'model' | 'package'
  queuedItems: Set<string>
  installedItems?: Set<string>
  failedItems?: Map<string, string>
  installingItem?: string | null
}>()

const emit = defineEmits<{
  close: []
  action: [item: ResourceItem]
  'bulk-action': []
}>()

const actionLabel = computed(() => props.itemType === 'model' ? 'Download' : 'Install')

const actionableItems = computed(() => props.items.filter(i => i.canAction))

const allDone = computed(() => {
  return actionableItems.value.length > 0 &&
    actionableItems.value.every(i =>
      props.queuedItems.has(i.id) ||
      props.installedItems?.has(i.id) ||
      props.failedItems?.has(i.id)
    )
})

const bulkActionLabel = computed(() => {
  if (allDone.value) return 'All Queued'
  return props.itemType === 'model' ? 'Download All' : 'Install All'
})

function isQueued(item: ResourceItem): boolean {
  return props.queuedItems.has(item.id)
}

function isInstalling(item: ResourceItem): boolean {
  return props.installingItem === item.id
}

function isInstalled(item: ResourceItem): boolean {
  return props.installedItems?.has(item.id) ?? false
}

function isFailed(item: ResourceItem): boolean {
  return props.failedItems?.has(item.id) ?? false
}

function getFailureReason(item: ResourceItem): string {
  return props.failedItems?.get(item.id) || 'Unknown error'
}
</script>

<style scoped>
.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: var(--cg-space-3);
  margin-bottom: var(--cg-space-3);
  border-bottom: 1px solid var(--cg-color-border-subtle);
}

.item-count {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
}

.resource-list {
  display: flex;
  flex-direction: column;
  background: var(--cg-color-bg-tertiary);
  border-radius: var(--cg-radius-md);
  padding: var(--cg-space-2);
}

.resource-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--cg-space-2);
  padding: var(--cg-space-2);
}

.resource-item:not(:last-child) {
  border-bottom: 1px solid var(--cg-color-border);
}

.item-info {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  flex: 1;
  min-width: 0;
}

.item-name {
  font-family: var(--cg-font-mono);
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-xs);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.item-subtitle {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  flex-shrink: 0;
}

.no-action {
  color: var(--cg-color-warning);
  font-style: italic;
  font-size: var(--cg-font-size-xs);
  white-space: nowrap;
}

/* Badge styles - consistent with MissingResourcesPopup */
.queued-badge,
.installing-badge,
.failed-badge,
.installed-badge {
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-medium);
  padding: var(--cg-space-1) var(--cg-space-2);
  border-radius: var(--cg-radius-sm);
  white-space: nowrap;
}

.queued-badge {
  color: var(--cg-color-warning);
  background: color-mix(in srgb, var(--cg-color-warning) 15%, transparent);
}

.installing-badge {
  color: var(--cg-color-accent);
  background: color-mix(in srgb, var(--cg-color-accent) 15%, transparent);
}

.failed-badge {
  color: var(--cg-color-error);
  background: color-mix(in srgb, var(--cg-color-error) 15%, transparent);
  cursor: help;
}

.installed-badge {
  color: var(--cg-color-success);
  background: color-mix(in srgb, var(--cg-color-success) 15%, transparent);
}
</style>
