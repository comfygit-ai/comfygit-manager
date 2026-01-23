<template>
  <BaseModal
    v-if="visible"
    title="Missing Dependencies"
    size="md"
    :loading="loading"
    :error="error || undefined"
    @close="dismiss"
  >
    <template #body>
      <!-- Loading State -->
      <div v-if="loading" class="loading-state">
        <div class="loading-spinner"></div>
        <span>Analyzing workflow...</span>
      </div>

      <!-- Analysis Results -->
      <div v-else-if="analysis && hasIssues" class="analysis-results">
        <!-- Missing Nodes Section -->
        <div v-if="missingNodes.length > 0" class="section">
          <div class="section-header">
            <span class="section-icon">📦</span>
            <span>Missing Custom Nodes ({{ missingNodes.length }})</span>
          </div>
          <div class="item-list">
            <div v-for="node in missingNodes.slice(0, 5)" :key="node.node_type" class="item">
              <code class="node-type">{{ node.node_type }}</code>
              <span v-if="node.package_id" class="package-info">
                → {{ node.package_title || node.package_id }}
              </span>
              <span v-else class="not-found">Not found in registry</span>
            </div>
            <div v-if="missingNodes.length > 5" class="overflow-note">
              ...and {{ missingNodes.length - 5 }} more
            </div>
          </div>
        </div>

        <!-- Missing Models Section -->
        <div v-if="missingModels.length > 0" class="section">
          <div class="section-header">
            <span class="section-icon">🎨</span>
            <span>Missing Models ({{ missingModels.length }})</span>
          </div>
          <div class="item-list">
            <div v-for="model in missingModels.slice(0, 5)" :key="model.widget_value" class="item">
              <span class="model-name">{{ model.widget_value }}</span>
              <span v-if="model.has_download_url" class="has-url">
                ⬇ Can auto-download
              </span>
              <span v-else class="no-url">Manual download required</span>
            </div>
            <div v-if="missingModels.length > 5" class="overflow-note">
              ...and {{ missingModels.length - 5 }} more
            </div>
          </div>
        </div>

        <!-- Tip -->
        <div class="tip">
          <span class="tip-icon">ℹ</span>
          <span>Save this workflow to track it in ComfyGit and enable dependency resolution.</span>
        </div>
      </div>
    </template>

    <template #footer>
      <BaseButton variant="secondary" @click="dismiss">Dismiss</BaseButton>
      <BaseButton variant="primary" @click="openPanel">Open ComfyGit Panel</BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'

interface MissingNode {
  node_type: string
  package_id?: string
  package_title?: string
}

interface MissingModel {
  widget_value: string
  has_download_url: boolean
}

const loading = ref(false)
const error = ref<string | null>(null)
const analysis = ref<any>(null)
const visible = ref(false)

const hasIssues = computed(() => {
  return missingNodes.value.length > 0 || missingModels.value.length > 0
})

const missingNodes = computed<MissingNode[]>(() => {
  if (!analysis.value?.nodes) return []
  // Nodes that aren't installed
  const resolved = (analysis.value.nodes.resolved || [])
    .filter((n: any) => !n.is_installed)
    .map((n: any) => ({
      node_type: n.reference?.node_type || n.node_type,
      package_id: n.package?.package_id,
      package_title: n.package?.title
    }))
  const unresolved = (analysis.value.nodes.unresolved || []).map((n: any) => ({
    node_type: n.reference?.node_type || n.node_type,
    package_id: undefined,
    package_title: undefined
  }))
  return [...resolved, ...unresolved]
})

const missingModels = computed<MissingModel[]>(() => {
  if (!analysis.value?.models) return []
  // Models that need download or aren't resolved
  const needsDownload = (analysis.value.models.resolved || [])
    .filter((m: any) =>
      m.match_type === 'download_intent' ||
      m.match_type === 'property_download_intent' ||
      m.match_type === 'not_found'
    )
    .map((m: any) => ({
      widget_value: m.reference?.widget_value || m.widget_value,
      has_download_url: !!m.download_source
    }))
  const unresolved = (analysis.value.models.unresolved || []).map((m: any) => ({
    widget_value: m.reference?.widget_value || m.widget_value,
    has_download_url: false
  }))
  return [...needsDownload, ...unresolved]
})

async function analyzeWorkflow(workflow: any) {
  loading.value = true
  error.value = null
  visible.value = true

  try {
    // Call our backend endpoint
    const response = await fetch('/v2/comfygit/workflow/analyze-json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ workflow, name: 'unsaved' })
    })

    if (!response.ok) {
      const err = await response.json()
      throw new Error(err.error || 'Failed to analyze workflow')
    }

    analysis.value = await response.json()

    // Auto-dismiss if no issues found
    if (!hasIssues.value) {
      dismiss()
    }
  } catch (e) {
    console.error('[ComfyGit] Failed to analyze workflow:', e)
    error.value = e instanceof Error ? e.message : 'Unknown error'
    // Don't show error UI for now - just log and dismiss
    dismiss()
  } finally {
    loading.value = false
  }
}

function openPanel() {
  // Dispatch custom event for main.ts to handle
  window.dispatchEvent(new CustomEvent('comfygit:open-panel', {
    detail: { initialView: 'workflows' }
  }))
  dismiss()
}

function dismiss() {
  visible.value = false
  analysis.value = null
}

function handleWorkflowLoaded(event: CustomEvent) {
  const { workflow } = event.detail
  if (workflow) {
    analyzeWorkflow(workflow)
  }
}

onMounted(() => {
  // Listen for workflow-loaded events
  window.addEventListener('comfygit:workflow-loaded', handleWorkflowLoaded as EventListener)
})

onUnmounted(() => {
  window.removeEventListener('comfygit:workflow-loaded', handleWorkflowLoaded as EventListener)
})
</script>

<style scoped>
.loading-state {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--cg-space-8);
  gap: var(--cg-space-3);
  color: var(--cg-color-text-muted);
}

.loading-spinner {
  width: 24px;
  height: 24px;
  border: 3px solid var(--cg-color-border);
  border-top-color: var(--cg-color-accent);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.section {
  margin-bottom: var(--cg-space-4);
}

.section-header {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  font-weight: var(--cg-font-weight-semibold);
  margin-bottom: var(--cg-space-2);
  color: var(--cg-color-text-primary);
}

.section-icon {
  font-size: var(--cg-font-size-lg);
}

.item-list {
  background: var(--cg-color-bg-tertiary);
  border-radius: var(--cg-radius-md);
  padding: var(--cg-space-2);
}

.item {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-1) var(--cg-space-2);
  font-size: var(--cg-font-size-sm);
}

.node-type {
  font-family: var(--cg-font-mono);
  background: var(--cg-color-bg-secondary);
  padding: var(--cg-space-1) var(--cg-space-2);
  border-radius: var(--cg-radius-sm);
  color: var(--cg-color-accent);
  font-size: var(--cg-font-size-xs);
}

.model-name {
  font-family: var(--cg-font-mono);
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-xs);
}

.package-info {
  color: var(--cg-color-info);
  font-size: var(--cg-font-size-xs);
}

.not-found,
.no-url {
  color: var(--cg-color-warning);
  font-style: italic;
  font-size: var(--cg-font-size-xs);
}

.has-url {
  color: var(--cg-color-success);
  font-size: var(--cg-font-size-xs);
}

.overflow-note {
  padding: var(--cg-space-1) var(--cg-space-2);
  color: var(--cg-color-text-muted);
  font-style: italic;
  font-size: var(--cg-font-size-xs);
}

.tip {
  display: flex;
  align-items: flex-start;
  gap: var(--cg-space-2);
  margin-top: var(--cg-space-4);
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-tertiary);
  border-radius: var(--cg-radius-md);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-muted);
}

.tip-icon {
  color: var(--cg-color-info);
}
</style>
