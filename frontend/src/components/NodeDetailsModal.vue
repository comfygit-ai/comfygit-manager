<template>
  <BaseModal
    :title="`NODE DETAILS: ${node.name}`"
    size="md"
    @close="emit('close')"
  >
    <template #body>
      <div class="node-details">
        <!-- Status Badge -->
        <div class="status-row">
          <span class="label">Status:</span>
          <span :class="['status-badge', statusClass]">{{ statusLabel }}</span>
        </div>

        <!-- Basic Info -->
        <div class="detail-row" v-if="node.version">
          <span class="label">Version:</span>
          <span class="value">{{ node.source === 'development' ? '' : 'v' }}{{ node.version }}</span>
        </div>

        <div class="detail-row">
          <span class="label">Source:</span>
          <span class="value">{{ sourceLabel }}</span>
        </div>

        <div v-if="hasRuntimeImportFailure" class="runtime-warning">
          <div class="runtime-warning-title">Import failed</div>
          <p>
            This node is installed, but ComfyUI did not load it during startup.
            Check the ComfyUI logs for the Python import error.
          </p>
        </div>

        <div class="detail-row" v-if="node.registry_id">
          <span class="label">Registry ID:</span>
          <span class="value mono">{{ node.registry_id }}</span>
        </div>

        <!-- Repository Link -->
        <div class="detail-row" v-if="node.repository">
          <span class="label">Repository:</span>
          <a
            :href="node.repository"
            target="_blank"
            rel="noopener noreferrer"
            class="repo-link"
          >
            {{ node.repository }}
            <svg class="external-icon" width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
              <path d="M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5z"/>
              <path d="M10 1a.75.75 0 0 0 0 1.5h2.44L7.22 7.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-.75-.75H10z"/>
            </svg>
          </a>
        </div>

        <div class="detail-row" v-if="node.download_url">
          <span class="label">Download URL:</span>
          <span class="value mono small">{{ node.download_url }}</span>
        </div>

        <!-- Usage Section -->
        <div class="section-divider"></div>
        <div class="detail-row">
          <span class="label">Used by:</span>
          <span class="value" v-if="!node.used_in_workflows || node.used_in_workflows.length === 0">
            Not used in any workflows
          </span>
          <div v-else class="workflow-list">
            <span v-for="wf in node.used_in_workflows" :key="wf" class="workflow-tag">
              {{ wf }}
            </span>
          </div>
        </div>
      </div>
    </template>

    <template #footer>
      <BaseButton variant="secondary" @click="emit('close')">
        Close
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { NodeInfo } from '@/types/comfygit'
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'

const props = defineProps<{
  node: NodeInfo
}>()

const emit = defineEmits<{
  close: []
}>()

const hasRuntimeImportFailure = computed(() => {
  return props.node.runtime_import?.status === 'failed'
})

const statusClass = computed(() => {
  if (hasRuntimeImportFailure.value) return 'error'
  if (!props.node.installed) return 'missing'
  if (!props.node.tracked) return 'warning'
  if (props.node.source === 'development') return 'dev'
  return 'installed'
})

const statusLabel = computed(() => {
  if (hasRuntimeImportFailure.value) return 'Import Failed'
  if (!props.node.installed) return 'Missing'
  if (!props.node.tracked) return 'Untracked'
  if (props.node.source === 'development') return 'Development'
  return 'Installed'
})

const sourceLabel = computed(() => {
  const labels: Record<string, string> = {
    registry: 'ComfyUI Registry',
    git: 'Git Repository',
    development: 'Local Development',
    unknown: 'Unknown',
    untracked: 'Untracked'
  }
  return labels[props.node.source] || props.node.source
})
</script>

<style scoped>
.node-details {
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

.status-badge.installed {
  background: var(--cg-color-success-muted, rgba(34, 197, 94, 0.15));
  color: var(--cg-color-success);
  border: 1px solid var(--cg-color-success);
}

.status-badge.dev {
  background: var(--cg-color-accent-muted);
  color: var(--cg-color-accent);
  border: 1px solid var(--cg-color-accent);
}

.status-badge.missing {
  background: var(--cg-color-error-muted);
  color: var(--cg-color-error);
  border: 1px solid var(--cg-color-error);
}

.status-badge.warning {
  background: rgba(245, 158, 11, 0.15);
  color: var(--cg-color-warning, #f59e0b);
  border: 1px solid var(--cg-color-warning, #f59e0b);
}

.status-badge.error {
  background: var(--cg-color-error-muted);
  color: var(--cg-color-error);
  border: 1px solid var(--cg-color-error);
}

.runtime-warning {
  padding: var(--cg-space-3);
  color: var(--cg-color-error);
  background: var(--cg-color-error-muted);
  border: 1px solid var(--cg-color-error);
  border-radius: var(--cg-radius-sm);
}

.runtime-warning-title {
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
  margin-bottom: var(--cg-space-1);
}

.runtime-warning p {
  margin: 0;
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
  line-height: 1.45;
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

.repo-link {
  color: var(--cg-color-accent);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  word-break: break-all;
}

.repo-link:hover {
  text-decoration: underline;
}

.external-icon {
  flex-shrink: 0;
  opacity: 0.7;
}

.section-divider {
  height: 1px;
  background: var(--cg-color-border-subtle);
  margin: var(--cg-space-2) 0;
}

.workflow-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.workflow-tag {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  padding: 2px 8px;
  border-radius: var(--cg-radius-sm);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-secondary);
}
</style>
