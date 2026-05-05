<template>
  <div class="import-preview">
    <div class="preview-header">
      <SectionTitle>Import Preview</SectionTitle>
      <span v-if="sourceEnvironment" class="source-env">
        From: <Value>{{ sourceEnvironment }}</Value>
      </span>
    </div>

    <div class="preview-tabs" role="tablist" aria-label="Import preview sections">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        type="button"
        :class="['tab-button', { active: activeTab === tab.id }]"
        role="tab"
        :aria-selected="activeTab === tab.id"
        @click="activeTab = tab.id"
      >
        {{ tab.label }}
        <span v-if="tab.count !== null" class="tab-count">{{ tab.count }}</span>
      </button>
    </div>

    <div class="preview-panel-frame">
      <section v-if="activeTab === 'overview'" class="preview-panel overview-panel" role="tabpanel">
        <div :class="['safety-notice', safetySummary.tone]">
          <div>
            <div class="notice-label">Safety level</div>
            <div class="notice-title">{{ safetySummary.label }}</div>
          </div>
          <p>{{ safetySummary.message }}</p>
        </div>

        <div class="overview-grid">
          <div class="overview-card">
            <div class="overview-value">{{ workflowCount }}</div>
            <div class="overview-label">Workflows</div>
            <div class="overview-subtle">{{ totalRequiredModels }} required model references</div>
          </div>
          <div class="overview-card">
            <div class="overview-value">{{ modelCount }}</div>
            <div class="overview-label">Models</div>
            <div class="overview-subtle">{{ totalModelSizeLabel }} declared</div>
          </div>
          <div class="overview-card">
            <div class="overview-value">{{ nodeCount }}</div>
            <div class="overview-label">Custom nodes</div>
            <div class="overview-subtle">{{ registryNodeCount }} registry, {{ gitNodeCount }} git</div>
          </div>
          <div class="overview-card">
            <div class="overview-value">{{ modelLocalCount }}</div>
            <div class="overview-label">Local models</div>
            <div class="overview-subtle">{{ modelDownloadCount }} download{{ modelDownloadCount !== 1 ? 's' : '' }} needed</div>
          </div>
        </div>

        <div class="overview-columns">
          <div class="overview-section">
            <h4>Model categories</h4>
            <div v-if="modelCategoryStats.length" class="stat-list">
              <div v-for="stat in modelCategoryStats" :key="stat.label" class="stat-row">
                <span>{{ stat.label }}</span>
                <Value>{{ stat.count }}</Value>
              </div>
            </div>
            <div v-else class="empty-list">No models declared.</div>
          </div>

          <div class="overview-section">
            <h4>Trust signals</h4>
            <div class="stat-list">
              <div class="stat-row">
                <span>Registry nodes</span>
                <Value>{{ registryNodeCount }}</Value>
              </div>
              <div class="stat-row">
                <span>Git nodes</span>
                <Value>{{ gitNodeCount }}</Value>
              </div>
              <div class="stat-row">
                <span>Development nodes</span>
                <Value>{{ devNodeCount }}</Value>
              </div>
              <div class="stat-row">
                <span>Trusted model sources</span>
                <Value>{{ trustedSourceModelCount }}</Value>
              </div>
              <div class="stat-row">
                <span>Unknown model sources</span>
                <Value>{{ unknownSourceModelCount }}</Value>
              </div>
              <div class="stat-row">
                <span>Models without sources</span>
                <Value>{{ modelsWithoutSourceCount }}</Value>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section v-else-if="activeTab === 'workflows'" class="preview-panel" role="tabpanel">
        <div v-if="workflows.length" class="rows">
          <article v-for="workflow in workflows" :key="workflow.name" class="preview-row">
            <div class="row-title">{{ workflow.name }}</div>
            <div class="detail-grid">
              <div class="detail-line">
                <span class="detail-label">Required models</span>
                <span>{{ workflow.models_required }}</span>
              </div>
              <div class="detail-line">
                <span class="detail-label">Optional models</span>
                <span>{{ workflow.models_optional }}</span>
              </div>
            </div>
          </article>
        </div>
        <div v-else class="empty-list">No workflows declared.</div>
      </section>

      <section v-else-if="activeTab === 'models'" class="preview-panel" role="tabpanel">
        <div v-if="models.length" class="rows">
          <article v-for="model in models" :key="model.hash || model.relative_path || model.filename" class="preview-row">
            <div class="row-title">{{ model.filename }}</div>
            <div class="row-chips">
              <span class="chip">{{ modelCategory(model) }}</span>
              <span v-if="modelSizeLabel(model)" class="chip muted">{{ modelSizeLabel(model) }}</span>
              <span :class="['chip', model.locally_available ? 'success' : model.needs_download ? 'warning' : 'muted']">
                {{ modelStatusLabel(model) }}
              </span>
            </div>
            <div class="detail-grid model-compact-details">
              <div v-if="model.hash" class="detail-line">
                <span class="detail-label">Hash</span>
                <span class="mono">{{ model.hash }}</span>
              </div>
              <div v-if="model.workflows.length" class="detail-line">
                <span class="detail-label">Used by</span>
                <span>{{ model.workflows.join(', ') }}</span>
              </div>
            </div>
            <div v-if="model.relative_path" class="detail-stack">
              <span class="detail-label">Path</span>
              <span class="mono">{{ model.relative_path }}</span>
            </div>
            <div class="detail-stack">
              <span class="detail-label">Sources</span>
              <div v-if="model.sources.length" class="source-list">
                <a
                  v-for="source in model.sources"
                  :key="source"
                  class="source-link"
                  :href="source"
                  target="_blank"
                  rel="noreferrer"
                >
                  {{ source }}
                </a>
              </div>
              <span v-else class="muted-text">No download source recorded.</span>
            </div>
          </article>
        </div>
        <div v-else class="empty-list">No models declared.</div>
      </section>

      <section v-else-if="activeTab === 'nodes'" class="preview-panel" role="tabpanel">
        <div v-if="nodes.length" class="rows">
          <article v-for="node in nodes" :key="node.name" class="preview-row">
            <div class="row-title">{{ node.name }}</div>
            <div class="row-chips">
              <span class="chip">{{ nodeSourceLabel(node) }}</span>
              <span v-if="node.version" class="chip muted">{{ node.version }}</span>
            </div>
            <div class="detail-grid">
              <div class="detail-line">
                <span class="detail-label">Source</span>
                <span>{{ nodeSourceLabel(node) }}</span>
              </div>
              <div v-if="node.registry_id" class="detail-line">
                <span class="detail-label">Registry ID</span>
                <span class="mono">{{ node.registry_id }}</span>
              </div>
              <div v-if="node.version" class="detail-line">
                <span class="detail-label">Version</span>
                <span class="mono">{{ node.version }}</span>
              </div>
              <div v-if="node.branch" class="detail-line">
                <span class="detail-label">Branch</span>
                <span class="mono">{{ node.branch }}</span>
              </div>
              <div v-if="node.pinned_commit" class="detail-line">
                <span class="detail-label">Commit</span>
                <span class="mono">{{ node.pinned_commit }}</span>
              </div>
              <div v-if="node.install_spec" class="detail-line">
                <span class="detail-label">Install spec</span>
                <span class="mono">{{ node.install_spec }}</span>
              </div>
            </div>
            <div v-if="node.repository" class="detail-stack">
              <span class="detail-label">Repository</span>
              <a class="source-link" :href="node.repository" target="_blank" rel="noreferrer">{{ node.repository }}</a>
            </div>
            <div v-if="node.dependency_sources?.length" class="detail-stack">
              <span class="detail-label">Dependency sources</span>
              <span class="mono">{{ node.dependency_sources.join(', ') }}</span>
            </div>
          </article>
        </div>
        <div v-else class="empty-list">No custom nodes declared.</div>
      </section>

      <section v-else-if="activeTab === 'git'" class="preview-panel" role="tabpanel">
        <div class="preview-row">
          <div class="row-title">Git information</div>
          <div class="detail-grid">
            <div class="detail-line">
              <span class="detail-label">Branch or tag</span>
              <span v-if="gitBranch" class="mono">{{ gitBranch }}</span>
              <span v-else class="muted-text">Not specified</span>
            </div>
            <div class="detail-line">
              <span class="detail-label">Commit</span>
              <CommitHash v-if="gitCommit" :hash="gitCommit" />
              <span v-else class="muted-text">Not specified</span>
            </div>
          </div>
          <div v-if="gitUrl" class="detail-stack">
            <span class="detail-label">Repo</span>
            <a class="source-link" :href="gitUrl" target="_blank" rel="noreferrer">{{ gitUrl }}</a>
          </div>
        </div>
      </section>

      <section v-else class="preview-panel manifest-panel" role="tabpanel">
        <pre v-if="manifestToml" class="manifest-code">{{ manifestToml }}</pre>
        <div v-else class="empty-list">
          Manifest preview is not available from this running backend yet.
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import SectionTitle from '@/components/base/atoms/SectionTitle.vue'
import Value from '@/components/base/atoms/Value.vue'
import CommitHash from '@/components/base/atoms/CommitHash.vue'
import type { ModelAnalysis, NodeAnalysis, WorkflowAnalysis } from '@/types/comfygit'

type PreviewTab = 'overview' | 'workflows' | 'models' | 'nodes' | 'git' | 'manifest'

const props = withDefaults(defineProps<{
  sourceEnvironment?: string
  workflows?: WorkflowAnalysis[]
  models?: ModelAnalysis[]
  nodes?: NodeAnalysis[]
  gitBranch?: string
  gitCommit?: string
  gitUrl?: string
  manifestToml?: string
}>(), {
  workflows: () => [],
  models: () => [],
  nodes: () => [],
  manifestToml: ''
})

const activeTab = ref<PreviewTab>('overview')

const workflowCount = computed(() => props.workflows.length)
const modelCount = computed(() => props.models.length)
const nodeCount = computed(() => props.nodes.length)
const registryNodeCount = computed(() => props.nodes.filter(node => node.source === 'registry').length)
const gitNodeCount = computed(() => props.nodes.filter(node => node.source === 'git').length)
const devNodeCount = computed(() => props.nodes.filter(node => node.is_dev_node || node.source === 'development').length)
const modelLocalCount = computed(() => props.models.filter(model => model.locally_available).length)
const modelDownloadCount = computed(() => props.models.filter(model => model.needs_download).length)
const modelsWithoutSourceCount = computed(() => props.models.filter(model => !model.locally_available && model.sources.length === 0).length)
const totalRequiredModels = computed(() => props.workflows.reduce((sum, workflow) => sum + workflow.models_required, 0))
const totalModelSize = computed(() => props.models.reduce((sum, model) => sum + Math.max(0, model.size || 0), 0))
const totalModelSizeLabel = computed(() => totalModelSize.value > 0 ? formatSize(totalModelSize.value) : 'unknown size')

const modelCategoryStats = computed(() => {
  const counts = new Map<string, number>()
  for (const model of props.models) {
    const category = modelCategory(model)
    counts.set(category, (counts.get(category) || 0) + 1)
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([label, count]) => ({ label, count }))
})

const trustedSourceModelCount = computed(() => {
  return props.models.filter(model => model.sources.length > 0 && model.sources.every(isTrustedModelSource)).length
})

const unknownSourceModelCount = computed(() => {
  return props.models.filter(model => model.sources.some(source => !isTrustedModelSource(source))).length
})

const safetySummary = computed(() => {
  const highRiskSignals = modelsWithoutSourceCount.value + unknownSourceModelCount.value + devNodeCount.value
  const reviewSignals = gitNodeCount.value + modelDownloadCount.value

  if (highRiskSignals > 0) {
    return {
      tone: 'warning',
      label: 'Review required',
      message: 'This import includes unresolved model sources, unknown model hosts, or development nodes. Inspect the relevant tabs before importing.'
    }
  }

  if (reviewSignals > 0) {
    return {
      tone: 'caution',
      label: 'Review recommended',
      message: 'This import installs Git nodes or downloads models from known hosts. Review source URLs and pinned commits before importing.'
    }
  }

  return {
    tone: 'ok',
    label: 'Low risk',
    message: 'This import uses local models and registry metadata only based on the available preview data.'
  }
})

const tabs = computed(() => [
  { id: 'overview' as const, label: 'Overview', count: null },
  { id: 'workflows' as const, label: 'Workflows', count: workflowCount.value },
  { id: 'models' as const, label: 'Models', count: modelCount.value },
  { id: 'nodes' as const, label: 'Custom Nodes', count: nodeCount.value },
  { id: 'git' as const, label: 'Git Info', count: null },
  { id: 'manifest' as const, label: 'Manifest', count: null },
])

function modelCategory(model: ModelAnalysis): string {
  return model.relative_path.split('/')[0] || 'model'
}

function modelSizeLabel(model: ModelAnalysis): string | null {
  if (!model.size || model.size <= 0) return null
  return formatSize(model.size)
}

function modelStatusLabel(model: ModelAnalysis): string {
  if (model.locally_available) return 'local'
  if (model.needs_download) return 'download'
  if (!model.sources.length) return 'no source'
  return 'declared'
}

function nodeSourceLabel(node: NodeAnalysis): string {
  if (node.source === 'registry') return 'Registry'
  if (node.source === 'git') return 'Git'
  if (node.source === 'development') return 'Development'
  return node.source || 'Unknown'
}

function isTrustedModelSource(source: string): boolean {
  try {
    const hostname = new URL(source).hostname.toLowerCase()
    return hostname === 'huggingface.co' ||
      hostname.endsWith('.huggingface.co') ||
      hostname === 'civitai.com' ||
      hostname.endsWith('.civitai.com')
  } catch {
    return false
  }
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`
}
</script>

<style scoped>
.import-preview {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  padding: var(--cg-space-4);
}

.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--cg-space-3);
  margin-bottom: var(--cg-space-3);
  padding-bottom: var(--cg-space-3);
  border-bottom: 1px solid var(--cg-color-border-subtle);
}

.source-env {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
}

.preview-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cg-space-2);
  margin-bottom: var(--cg-space-3);
}

.tab-button {
  display: inline-flex;
  align-items: center;
  gap: var(--cg-space-1);
  padding: var(--cg-space-2) var(--cg-space-3);
  color: var(--cg-color-text-secondary);
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  cursor: pointer;
}

.tab-button:hover,
.tab-button.active {
  color: var(--cg-color-accent);
  border-color: var(--cg-color-accent);
}

.tab-count {
  color: var(--cg-color-text-muted);
}

.preview-panel-frame {
  height: min(520px, 52vh);
  min-height: 380px;
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border-subtle);
  overflow: hidden;
}

.preview-panel {
  height: 100%;
  overflow-y: auto;
  padding: var(--cg-space-3);
}

.overview-panel {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.safety-notice {
  display: grid;
  grid-template-columns: minmax(160px, max-content) minmax(0, 1fr);
  gap: var(--cg-space-3);
  padding: var(--cg-space-3);
  border: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg-tertiary);
}

.safety-notice.ok {
  border-color: var(--cg-color-success);
}

.safety-notice.caution,
.safety-notice.warning {
  border-color: var(--cg-color-warning);
}

.notice-label {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
}

.notice-title {
  color: var(--cg-color-text-primary);
  font-weight: var(--cg-font-weight-semibold);
}

.safety-notice p {
  margin: 0;
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--cg-space-2);
}

.overview-card,
.overview-section,
.preview-row {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
}

.overview-card {
  padding: var(--cg-space-3);
}

.overview-value {
  color: var(--cg-color-text-primary);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xl);
}

.overview-label {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
  text-transform: uppercase;
}

.overview-subtle,
.muted-text {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
}

.overview-columns {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--cg-space-3);
}

.overview-section {
  padding: var(--cg-space-3);
}

.overview-section h4 {
  margin: 0 0 var(--cg-space-2);
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  text-transform: uppercase;
}

.stat-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.stat-row {
  display: flex;
  justify-content: space-between;
  gap: var(--cg-space-3);
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
}

.rows {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.preview-row {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
  min-width: 0;
  padding: var(--cg-space-3);
}

.row-title {
  width: 100%;
  min-width: 0;
  color: var(--cg-color-text-primary);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
  word-break: break-word;
}

.row-chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cg-space-1);
}

.chip {
  color: var(--cg-color-accent);
  border: 1px solid var(--cg-color-border);
  padding: 1px var(--cg-space-1);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
}

.chip.success {
  color: var(--cg-color-success);
}

.chip.warning {
  color: var(--cg-color-warning);
}

.chip.muted {
  color: var(--cg-color-text-muted);
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--cg-space-2) var(--cg-space-4);
}

.model-compact-details {
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
}

.detail-line {
  display: grid;
  grid-template-columns: 130px minmax(0, 1fr);
  gap: var(--cg-space-2);
  min-width: 0;
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
}

.detail-line > span:last-child {
  min-width: 0;
  overflow-wrap: anywhere;
}

.detail-stack {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
  min-width: 0;
}

.detail-label {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
}

.mono {
  font-family: var(--cg-font-mono);
  word-break: break-all;
}

.source-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
  min-width: 0;
}

.source-link {
  color: var(--cg-color-accent);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  word-break: break-all;
}

.empty-list {
  padding: var(--cg-space-4);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
}

.manifest-panel {
  padding: 0;
}

.manifest-code {
  min-height: 100%;
  margin: 0;
  padding: var(--cg-space-3);
  color: var(--cg-color-text-secondary);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  line-height: 1.45;
  white-space: pre-wrap;
  word-break: break-word;
}

@media (max-width: 900px) {
  .overview-grid,
  .overview-columns,
  .detail-grid {
    grid-template-columns: 1fr;
  }

  .safety-notice {
    grid-template-columns: 1fr;
  }
}
</style>
