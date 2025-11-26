<template>
  <ItemCard :status="isCurrent ? 'synced' : undefined">
    <template #icon>
      {{ isCurrent ? '🌍' : '○' }}
    </template>
    <template #title>
      <div class="env-title">
        <span>{{ environmentName }}</span>
        <span v-if="isCurrent && showCurrentLabel" class="current-badge">CURRENT</span>
      </div>
    </template>
    <template #subtitle>
      <span v-if="currentBranch" class="branch-info">
        <span class="branch-icon">⎇</span>
        {{ currentBranch }}
      </span>
    </template>
    <template v-if="showDetails" #details>
      <DetailRow label="Workflows:" :value="String(workflowCount)" />
      <DetailRow label="Nodes:" :value="String(nodeCount)" />
      <DetailRow label="Models:" :value="String(modelCount)" />
      <DetailRow v-if="lastUsed && showLastUsed" label="Last used:" :value="lastUsed" />
    </template>
    <template #actions>
      <slot name="actions"></slot>
    </template>
  </ItemCard>
</template>

<script setup lang="ts">
/**
 * EnvironmentListItem Molecule
 *
 * Displays a single environment using ItemCard as base component
 * Follows the same pattern as RemoteCard for consistency
 *
 * Composes: ItemCard molecule, DetailRow molecule, ActionButton atoms (via slot)
 * Provides: Consistent environment display with current environment highlighting
 *
 * @example
 * <EnvironmentListItem
 *   environment-name="production"
 *   :is-current="true"
 *   current-branch="main"
 *   :workflow-count="12"
 *   :node-count="45"
 *   :model-count="8"
 *   last-used="2 hours ago"
 * >
 *   <template #actions>
 *     <ActionButton variant="secondary" size="sm" @click="switchEnv">
 *       Switch
 *     </ActionButton>
 *   </template>
 * </EnvironmentListItem>
 */

import ItemCard from './ItemCard.vue'
import DetailRow from './DetailRow.vue'

interface EnvironmentListItemProps {
  /** Environment name to display */
  environmentName: string
  /** Whether this is the current environment */
  isCurrent?: boolean
  /** Current branch in this environment */
  currentBranch?: string | null
  /** Number of workflows in this environment */
  workflowCount?: number
  /** Number of nodes in this environment */
  nodeCount?: number
  /** Number of models in this environment */
  modelCount?: number
  /** Last used timestamp/relative time */
  lastUsed?: string
  /** Show "current" label for current environment */
  showCurrentLabel?: boolean
  /** Show last used metadata */
  showLastUsed?: boolean
  /** Show details section (workflow/node/model counts) */
  showDetails?: boolean
}

withDefaults(defineProps<EnvironmentListItemProps>(), {
  isCurrent: false,
  currentBranch: null,
  workflowCount: 0,
  nodeCount: 0,
  modelCount: 0,
  lastUsed: undefined,
  showCurrentLabel: true,
  showLastUsed: true,
  showDetails: false
})
</script>

<style scoped>
.env-title {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  width: 100%;
}

.current-badge {
  display: inline-block;
  padding: 2px 6px;
  background: transparent;
  border: 1px solid var(--cg-color-success);
  color: var(--cg-color-success);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  border-radius: var(--cg-radius-sm);
  margin-left: auto;
}

.branch-info {
  font-family: var(--cg-font-mono);
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
  display: flex;
  align-items: center;
  gap: var(--cg-space-1);
}

.branch-icon {
  opacity: 0.7;
}
</style>
