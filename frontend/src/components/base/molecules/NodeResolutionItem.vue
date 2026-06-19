<template>
  <div :class="['node-resolution-item', { selected: isSelected, ambiguous: hasMultipleOptions, resolved: hasChoice }]">
    <div class="item-body">
      <!-- Already resolved state - show change option -->
      <div v-if="hasChoice" class="resolved-state">
        <span class="resolved-message">{{ choiceSummary }}</span>
        <BaseButton variant="ghost" size="sm" @click="emit('clear-choice')">
          Change Selection
        </BaseButton>
      </div>

      <!-- Unresolved or ambiguous - require explicit mapping/search choice -->
      <div v-else class="unresolved">
        <div v-if="availableInstalledNodePacks.length > 0" class="installed-packs-section">
          <p class="options-prompt">Map to an installed node pack:</p>
          <div class="installed-packs-list">
            <button
              v-for="pack in availableInstalledNodePacks"
              :key="pack.package_id"
              type="button"
              class="installed-pack-chip"
              @click="emit('installed-pack-selected', pack.package_id)"
            >
              <span class="installed-pack-name">{{ pack.package_id }}</span>
              <span class="installed-pack-source">{{ getSourceLabel(pack.source) }}</span>
            </button>
          </div>
        </div>

        <div class="action-buttons">
          <BaseButton variant="secondary" size="sm" @click="emit('search')">
            Search Registry
          </BaseButton>
          <BaseButton variant="secondary" size="sm" @click="emit('manual-entry')">
            Enter Manually
          </BaseButton>
          <BaseButton variant="secondary" size="sm" @click="emit('mark-optional')">
            Mark Optional
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseButton from '../BaseButton.vue'

interface InstalledNodePack {
  package_id: string
  source: string
}

interface NodeChoice {
  action: 'install' | 'optional' | 'skip' | 'manual' | 'map-installed'
  package_id?: string
  install_source?: 'registry' | 'git'
}

export type ResolutionStatus =
  | 'not-found'
  | 'ambiguous'
  | 'install'
  | 'optional'
  | 'skip'

const props = defineProps<{
  nodeType: string
  packageId?: string
  confidence?: number
  matchType?: string
  description?: string
  repository?: string
  source?: string
  isInstalled?: boolean
  isOptional?: boolean
  isSelected?: boolean
  hasMultipleOptions?: boolean
  choice?: NodeChoice
  installedNodePacks?: InstalledNodePack[]
}>()

const emit = defineEmits<{
  (e: 'mark-optional'): void
  (e: 'skip'): void
  (e: 'manual-entry'): void
  (e: 'search'): void
  (e: 'clear-choice'): void
  (e: 'installed-pack-selected', packageId: string): void
}>()

// Computed properties for choice state
const hasChoice = computed(() => !!props.choice)
const choiceAction = computed(() => props.choice?.action)
const choicePackageId = computed(() => props.choice?.package_id)
const availableInstalledNodePacks = computed(() => props.installedNodePacks || [])

const choiceSummary = computed(() => {
  switch (choiceAction.value) {
    case 'install':
      if (props.choice?.install_source === 'git') {
        return choicePackageId.value ? `Will install ${choicePackageId.value} from GitHub` : 'Will install from GitHub'
      }
      if (props.choice?.install_source === 'registry') {
        return choicePackageId.value ? `Will install ${choicePackageId.value} from Registry` : 'Will install from Registry'
      }
      return choicePackageId.value ? `Will install ${choicePackageId.value}` : 'Will install selected package'
    case 'map-installed':
      return choicePackageId.value ? `Mapped to ${choicePackageId.value}` : 'Mapped to installed node pack'
    case 'manual':
      return choicePackageId.value ? `Will use ${choicePackageId.value}` : 'Will use manual package'
    case 'optional':
      return 'Marked optional'
    case 'skip':
      return 'Will be skipped'
    default:
      return 'Decision saved'
  }
})

function getSourceLabel(source: string): string {
  switch (source) {
    case 'development':
      return 'dev'
    case 'git':
      return 'git'
    case 'registry':
      return 'registry'
    case 'selected':
      return 'selected'
    case 'selected-git':
      return 'selected git'
    default:
      return source || 'unknown'
  }
}
</script>

<style scoped>
.node-resolution-item {
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-lg);
  background: var(--cg-color-bg-secondary);
  overflow: hidden;
  transition: all var(--cg-transition-fast);
}

.node-resolution-item.ambiguous {
  border-color: var(--cg-color-warning);
}

.node-resolution-item.resolved {
  border-color: var(--cg-color-success);
  background: var(--cg-color-success-muted);
}

.item-body {
  padding: var(--cg-space-3);
}

.resolved-state {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--cg-space-3);
}

.resolved-message {
  color: var(--cg-color-success);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
  overflow-wrap: anywhere;
}

.options-prompt {
  margin: 0;
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
}

.action-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cg-space-2);
  justify-content: flex-start;
  padding-top: var(--cg-space-2);
  border-top: 1px solid var(--cg-color-border-subtle);
}

.unresolved {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.installed-packs-section {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.installed-packs-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cg-space-2);
}

.installed-pack-chip {
  display: inline-flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: 6px 10px;
  border: 1px solid var(--cg-color-border-subtle);
  border-radius: 999px;
  background: var(--cg-color-bg-primary);
  color: var(--cg-color-text-secondary);
  cursor: pointer;
  transition: all var(--cg-transition-fast);
}

.installed-pack-chip:hover {
  border-color: var(--cg-color-accent);
  background: var(--cg-color-bg-hover);
  color: var(--cg-color-text-primary);
}

.installed-pack-name {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-semibold);
}

.installed-pack-source {
  padding: 2px 6px;
  border-radius: var(--cg-radius-sm);
  background: var(--cg-color-bg-tertiary);
  color: var(--cg-color-text-muted);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}
</style>
