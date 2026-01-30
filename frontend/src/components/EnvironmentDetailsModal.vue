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

        <!-- Workflows Collapsible -->
        <div class="collapsible-section">
          <div class="collapsible-header" @click="toggleSection('workflows')">
            <span class="label">Workflows:</span>
            <span class="value">{{ detail?.workflow_count ?? environment.workflow_count }}</span>
            <span v-if="detail?.workflows" :class="['chevron', { expanded: expandedSections.has('workflows') }]">&#9654;</span>
          </div>
          <div v-if="detail?.workflows && expandedSections.has('workflows')" class="collapsible-body">
            <div class="item-list">
              <div v-for="name in detail.workflows.synced" :key="'synced-' + name" class="list-item">
                <span class="item-name">{{ name }}</span>
                <span class="sync-badge synced">synced</span>
              </div>
              <div v-for="name in detail.workflows.new" :key="'new-' + name" class="list-item">
                <span class="item-name">{{ name }}</span>
                <span class="sync-badge new">new</span>
              </div>
              <div v-for="name in detail.workflows.modified" :key="'mod-' + name" class="list-item">
                <span class="item-name">{{ name }}</span>
                <span class="sync-badge modified">modified</span>
              </div>
              <div v-for="name in detail.workflows.deleted" :key="'del-' + name" class="list-item">
                <span class="item-name">{{ name }}</span>
                <span class="sync-badge deleted">deleted</span>
              </div>
              <div v-if="allWorkflowsEmpty" class="empty-list">No workflows</div>
            </div>
          </div>
        </div>

        <!-- Nodes Collapsible -->
        <div class="collapsible-section">
          <div class="collapsible-header" @click="toggleSection('nodes')">
            <span class="label">Nodes:</span>
            <span class="value">{{ detail?.node_count ?? environment.node_count }}</span>
            <span v-if="detail?.nodes" :class="['chevron', { expanded: expandedSections.has('nodes') }]">&#9654;</span>
          </div>
          <div v-if="detail?.nodes && expandedSections.has('nodes')" class="collapsible-body">
            <div class="item-list">
              <div v-for="node in detail.nodes" :key="node.name" class="list-item">
                <span class="item-name">{{ node.name }}</span>
                <span v-if="node.version" class="item-meta">{{ node.version }}</span>
              </div>
              <div v-if="!detail.nodes.length" class="empty-list">No nodes</div>
            </div>
          </div>
        </div>

        <!-- Models Collapsible -->
        <div class="collapsible-section">
          <div class="collapsible-header" @click="toggleSection('models')">
            <span class="label">Models:</span>
            <span class="value">
              {{ detail?.model_count ?? environment.model_count }}
              <template v-if="detail?.models?.missing.length">
                <span class="missing-count">({{ detail.models.missing.length }} missing)</span>
              </template>
            </span>
            <span v-if="detail?.models" :class="['chevron', { expanded: expandedSections.has('models') }]">&#9654;</span>
          </div>
          <div v-if="detail?.models && expandedSections.has('models')" class="collapsible-body">
            <div class="item-list">
              <div v-for="model in detail.models.missing" :key="model.filename" class="list-item model-item">
                <div class="model-row">
                  <span class="item-name">{{ model.filename }}</span>
                  <span :class="['criticality-badge', model.criticality]">{{ model.criticality }}</span>
                </div>
                <div class="model-meta">
                  <span class="item-meta">{{ model.category }}</span>
                  <span v-if="model.workflow_names.length" class="item-meta">
                    used by: {{ model.workflow_names.join(', ') }}
                  </span>
                </div>
              </div>
              <div v-if="!detail.models.missing.length" class="empty-list">No missing models</div>
            </div>
          </div>
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
      <div class="footer-actions">
        <BaseButton
          v-if="canDelete"
          variant="danger"
          size="sm"
          @click="emit('delete', environment.name)"
        >
          Delete
        </BaseButton>
        <div class="footer-spacer"></div>
        <BaseButton variant="secondary" size="sm" @click="emit('close')">
          Close
        </BaseButton>
      </div>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { EnvironmentInfo, EnvironmentDetail } from '@/types/comfygit'
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'

const props = defineProps<{
  environment: EnvironmentInfo
  detail?: EnvironmentDetail | null
  canDelete?: boolean
}>()

const emit = defineEmits<{
  close: []
  delete: [name: string]
}>()

const expandedSections = ref<Set<string>>(new Set())

function toggleSection(section: string) {
  if (expandedSections.value.has(section)) {
    expandedSections.value.delete(section)
  } else {
    expandedSections.value.add(section)
  }
  // Trigger reactivity since Set mutations aren't tracked
  expandedSections.value = new Set(expandedSections.value)
}

const allWorkflowsEmpty = computed(() => {
  if (!props.detail?.workflows) return true
  const w = props.detail.workflows
  return !w.synced.length && !w.new.length && !w.modified.length && !w.deleted.length
})

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

/* Collapsible sections */
.collapsible-section {
  font-size: var(--cg-font-size-sm);
}

.collapsible-header {
  display: flex;
  align-items: center;
  gap: var(--cg-space-3);
  cursor: pointer;
  user-select: none;
  padding: var(--cg-space-1) 0;
  border-radius: var(--cg-radius-sm);
}

.collapsible-header:hover {
  opacity: 0.8;
}

.chevron {
  margin-left: auto;
  font-size: 10px;
  color: var(--cg-color-text-muted);
  transition: transform 0.15s ease;
}

.chevron.expanded {
  transform: rotate(90deg);
}

.collapsible-body {
  max-height: 200px;
  overflow-y: auto;
  margin-top: var(--cg-space-2);
  padding-left: var(--cg-space-3);
  border-left: 2px solid var(--cg-color-border-subtle);
}

.item-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
}

.list-item {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-1) var(--cg-space-2);
  font-size: var(--cg-font-size-xs);
  border-radius: var(--cg-radius-sm);
}

.list-item:hover {
  background: var(--cg-color-bg-tertiary);
}

.item-name {
  color: var(--cg-color-text-secondary);
  font-family: var(--cg-font-mono);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
}

.item-meta {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  flex-shrink: 0;
}

.empty-list {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  font-style: italic;
  padding: var(--cg-space-1) var(--cg-space-2);
}

/* Sync state badges */
.sync-badge {
  padding: 1px 6px;
  border-radius: var(--cg-radius-sm);
  font-size: 10px;
  font-weight: var(--cg-font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.3px;
  flex-shrink: 0;
}

.sync-badge.synced {
  background: var(--cg-color-success-muted, rgba(34, 197, 94, 0.15));
  color: var(--cg-color-success);
}

.sync-badge.new {
  background: var(--cg-color-info-muted, rgba(59, 130, 246, 0.15));
  color: var(--cg-color-info);
}

.sync-badge.modified {
  background: var(--cg-color-warning-muted, rgba(245, 158, 11, 0.15));
  color: var(--cg-color-warning);
}

.sync-badge.deleted {
  background: var(--cg-color-error-muted, rgba(239, 68, 68, 0.15));
  color: var(--cg-color-error);
}

/* Criticality badges */
.criticality-badge {
  padding: 1px 6px;
  border-radius: var(--cg-radius-sm);
  font-size: 10px;
  font-weight: var(--cg-font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.3px;
  flex-shrink: 0;
}

.criticality-badge.required {
  background: var(--cg-color-error-muted, rgba(239, 68, 68, 0.15));
  color: var(--cg-color-error);
}

.criticality-badge.flexible {
  background: var(--cg-color-warning-muted, rgba(245, 158, 11, 0.15));
  color: var(--cg-color-warning);
}

.criticality-badge.optional {
  background: var(--cg-color-bg-tertiary);
  color: var(--cg-color-text-muted);
}

/* Model items */
.model-item {
  flex-direction: column;
  align-items: flex-start;
  gap: var(--cg-space-1);
}

.model-row {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  width: 100%;
}

.model-meta {
  display: flex;
  gap: var(--cg-space-2);
  padding-left: var(--cg-space-1);
}

.missing-count {
  color: var(--cg-color-warning);
  font-size: var(--cg-font-size-xs);
}

.footer-actions {
  display: flex;
  width: 100%;
  align-items: center;
}

.footer-spacer {
  flex: 1;
}
</style>
