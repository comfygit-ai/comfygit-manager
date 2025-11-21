<template>
  <div
    :class="['branch-list-item', { current: isCurrent, clickable }]"
    @click="clickable && $emit('click')"
  >
    <span class="branch-list-item__indicator">
      {{ isCurrent ? '●' : '○' }}
    </span>
    <span class="branch-list-item__name">
      {{ branchName }}
    </span>
    <div v-if="$slots.actions || showCurrentLabel" class="branch-list-item__actions">
      <slot name="actions"></slot>
      <span v-if="isCurrent && showCurrentLabel" class="branch-list-item__current-label">
        current
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * BranchListItem Molecule
 *
 * Displays a single git branch in a list with optional actions
 *
 * Composes: ActionButton atoms (via slot)
 * Provides: Consistent branch list item with current branch highlighting
 *
 * @example
 * <BranchListItem
 *   branch-name="feature/new-ui"
 *   :is-current="false"
 * >
 *   <template #actions>
 *     <ActionButton variant="secondary" size="xs" @click="switchBranch">
 *       Switch
 *     </ActionButton>
 *   </template>
 * </BranchListItem>
 */

interface BranchListItemProps {
  /** Branch name to display */
  branchName: string
  /** Whether this is the current branch */
  isCurrent?: boolean
  /** Whether the item is clickable */
  clickable?: boolean
  /** Show "current" label for current branch */
  showCurrentLabel?: boolean
}

withDefaults(defineProps<BranchListItemProps>(), {
  isCurrent: false,
  clickable: false,
  showCurrentLabel: true
})

defineEmits<{
  click: []
}>()
</script>

<style scoped>
.branch-list-item {
  display: flex;
  align-items: center;
  padding: var(--cg-space-2) var(--cg-space-3);
  border-bottom: 1px solid var(--cg-color-border-subtle);
  font-size: var(--cg-font-size-sm);
  transition: background var(--cg-transition-fast);
}

.branch-list-item:last-child {
  border-bottom: none;
}

.branch-list-item:hover {
  background: var(--cg-color-bg-hover);
}

.branch-list-item.clickable {
  cursor: pointer;
}

.branch-list-item.current {
  background: var(--cg-color-accent-muted);
  border-left: 3px solid var(--cg-color-accent);
  padding-left: calc(var(--cg-space-3) - 3px);
}

.branch-list-item__indicator {
  font-size: 10px;
  margin-right: var(--cg-space-2);
  color: var(--cg-color-text-muted);
  flex-shrink: 0;
}

.branch-list-item.current .branch-list-item__indicator {
  color: var(--cg-color-accent);
}

.branch-list-item__name {
  flex: 1;
  color: var(--cg-color-text-primary);
  font-family: var(--cg-font-mono);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.branch-list-item__actions {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  flex-shrink: 0;
}

.branch-list-item__current-label {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  padding: var(--cg-space-1) var(--cg-space-2);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  font-family: var(--cg-font-mono);
}
</style>
