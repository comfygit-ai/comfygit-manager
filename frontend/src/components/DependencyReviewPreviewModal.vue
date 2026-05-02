<template>
  <BaseModal
    title="Dependency Review"
    size="lg"
    :loading="loading"
    :error="error || undefined"
    @close="emit('close')"
  >
    <template #body>
      <div v-if="preview" class="dependency-preview">
        <div class="intro">
          <h3>{{ preview.node_name }}</h3>
          <p>
            Installing this node package would change Python dependencies in the environment.
            Review is informational for now; applying risky changes is not enabled yet.
          </p>
        </div>

        <div class="summary-strip">
          <div class="summary-item">
            <strong>{{ preview.summary.total }}</strong>
            <span>Total</span>
          </div>
          <div class="summary-item danger">
            <strong>{{ preview.summary.downgraded }}</strong>
            <span>Downgraded</span>
          </div>
          <div class="summary-item">
            <strong>{{ preview.summary.upgraded }}</strong>
            <span>Upgraded</span>
          </div>
          <div class="summary-item">
            <strong>{{ preview.summary.added }}</strong>
            <span>Added</span>
          </div>
          <div class="summary-item">
            <strong>{{ preview.summary.removed }}</strong>
            <span>Removed</span>
          </div>
        </div>

        <div v-if="preview.requirements.length > 0" class="requirements">
          <div class="section-title">Node Requirements</div>
          <div class="chips">
            <code v-for="requirement in preview.requirements" :key="requirement" class="chip">
              {{ requirement }}
            </code>
          </div>
        </div>

        <div class="changes">
          <div class="section-title">Proposed Package Changes</div>
          <div v-if="preview.changes.length === 0" class="empty-state">
            No package version changes found.
          </div>
          <div v-else class="change-list">
            <div
              v-for="change in visibleChanges"
              :key="`${change.name}-${change.kind}`"
              :class="['change-row', change.kind]"
            >
              <code class="package-name">{{ change.name }}</code>
              <span class="change-kind">{{ labelForKind(change.kind) }}</span>
              <span class="version current">{{ change.current || 'not installed' }}</span>
              <span class="arrow">→</span>
              <span class="version proposed">{{ change.proposed || 'removed' }}</span>
            </div>
          </div>
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
import type { DependencyPackageChangeKind, DependencyResolutionPreview } from '@/types/comfygit'

const props = defineProps<{
  loading?: boolean
  error?: string | null
  preview?: DependencyResolutionPreview | null
}>()

const emit = defineEmits<{
  close: []
}>()

const changeRank: Record<DependencyPackageChangeKind, number> = {
  downgraded: 0,
  removed: 1,
  upgraded: 2,
  added: 3,
  changed: 4
}

const visibleChanges = computed(() => {
  return [...(props.preview?.changes || [])].sort((left, right) => {
    const rankDiff = changeRank[left.kind] - changeRank[right.kind]
    return rankDiff || left.name.localeCompare(right.name)
  })
})

function labelForKind(kind: DependencyPackageChangeKind): string {
  if (kind === 'downgraded') return 'Downgrade'
  if (kind === 'upgraded') return 'Upgrade'
  if (kind === 'added') return 'Add'
  if (kind === 'removed') return 'Remove'
  return 'Change'
}
</script>

<style scoped>
.dependency-preview {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.intro h3 {
  margin: 0 0 var(--cg-space-2);
  color: var(--cg-color-text-primary);
}

.intro p {
  margin: 0;
  color: var(--cg-color-text-muted);
  line-height: 1.4;
}

.summary-strip {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1px;
  background: var(--cg-color-border);
  border: 1px solid var(--cg-color-border);
}

.summary-item {
  background: var(--cg-color-bg-tertiary);
  padding: var(--cg-space-3);
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
  align-items: center;
}

.summary-item strong {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-lg);
}

.summary-item span {
  color: var(--cg-color-text-muted);
  text-transform: uppercase;
  font-size: var(--cg-font-size-xs);
}

.summary-item.danger strong {
  color: var(--cg-color-warning);
}

.section-title {
  margin-bottom: var(--cg-space-2);
  color: var(--cg-color-text-secondary);
  font-weight: var(--cg-font-weight-semibold);
  text-transform: uppercase;
  font-size: var(--cg-font-size-sm);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cg-space-2);
}

.chip {
  border: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg-secondary);
  color: var(--cg-color-text-primary);
  padding: 4px 8px;
}

.change-list {
  border: 1px solid var(--cg-color-border);
}

.change-row {
  display: grid;
  grid-template-columns: minmax(120px, 1fr) 96px minmax(80px, auto) 20px minmax(80px, auto);
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-2) var(--cg-space-3);
  border-bottom: 1px solid var(--cg-color-border-subtle);
  color: var(--cg-color-text-secondary);
}

.change-row:last-child {
  border-bottom: none;
}

.package-name {
  color: var(--cg-color-accent);
}

.change-kind {
  text-transform: uppercase;
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
}

.change-row.downgraded .change-kind {
  color: var(--cg-color-warning);
}

.change-row.removed .change-kind {
  color: var(--cg-color-error);
}

.version {
  font-family: var(--cg-font-mono);
  color: var(--cg-color-text-primary);
}

.current {
  color: var(--cg-color-text-muted);
}

.arrow {
  color: var(--cg-color-text-muted);
}

.empty-state {
  border: 1px solid var(--cg-color-border);
  padding: var(--cg-space-4);
  color: var(--cg-color-text-muted);
}
</style>
