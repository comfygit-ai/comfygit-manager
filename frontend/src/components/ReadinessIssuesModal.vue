<template>
  <BaseModal
    size="lg"
    :overlay-z-index="10007"
    @close="emit('close')"
  >
    <template #header>
      <div class="readiness-heading">
        <h3 class="readiness-title">Review Reproducibility Issues</h3>
        <p class="readiness-subtitle">
          Add missing source details where possible. Required development nodes can also be marked optional when they should stay local but not be part of portable builds.
        </p>
      </div>
    </template>

    <template #body>
      <div class="readiness-body">
          <section v-if="models.length" class="issue-section">
            <div class="section-heading">
              <h4>Models Missing Source URLs</h4>
              <span>{{ models.length }}</span>
            </div>
            <div class="issue-list">
              <article
                v-for="model in models"
                :key="model.hash || model.filename"
                class="issue-item"
              >
                <div class="issue-main">
                  <div class="issue-name">{{ model.filename }}</div>
                  <div class="issue-meta">
                    <span v-if="model.hash">hash {{ model.hash }}</span>
                    <span v-if="model.workflows.length">used by {{ model.workflows.join(', ') }}</span>
                    <span>{{ model.criticality || 'required' }}</span>
                  </div>
                  <p
                    v-if="model.hash && stagedModelSources[model.hash]"
                    class="issue-staged-source"
                  >
                    Will add source: {{ stagedModelSources[model.hash] }}
                  </p>
                  <p
                    v-else-if="model.source_candidates?.length"
                    class="issue-candidate-note"
                  >
                    Source candidate found in model index.
                  </p>
                </div>
                <button
                  v-if="model.hash"
                  class="issue-action"
                  :disabled="loadingModelHash === model.hash || applyingSources"
                  @click="openModelSource(model.hash)"
                >
                  {{ modelSourceActionLabel(model.hash) }}
                </button>
                <span v-else class="issue-note">Missing hash</span>
              </article>
            </div>
          </section>

          <section v-if="nodes.length" class="issue-section">
            <div class="section-heading">
              <h4>Custom Nodes Missing Portable Provenance</h4>
              <span>{{ nodes.length }}</span>
            </div>
            <div class="issue-list">
              <article
                v-for="node in nodes"
                :key="node.name"
                class="issue-item"
              >
                <div class="issue-main">
                  <div class="issue-name">{{ node.name }}</div>
                  <div class="issue-meta">
                    <span>{{ node.source }}</span>
                    <span>{{ node.criticality }}</span>
                  </div>
                  <p class="issue-reason">{{ node.reason }}</p>
                </div>
                <button
                  v-if="node.criticality === 'required'"
                  class="issue-action"
                  :disabled="updatingNode === node.name"
                  @click="markNodeOptional(node.name)"
                >
                  {{ updatingNode === node.name ? 'Saving...' : 'Mark Optional' }}
                </button>
                <span v-else class="issue-note">Optional warning</span>
              </article>
            </div>
          </section>

          <div v-if="!models.length && !nodes.length" class="empty-state">
            No reproducibility issues remain.
          </div>

          <div v-if="error" class="error-message">{{ error }}</div>
      </div>
    </template>

    <template #footer>
      <button class="secondary-action" @click="emit('close')">
        Close
      </button>
      <button
        v-if="stagedSourceCount > 0"
        class="primary-action"
        :disabled="applyingSources"
        @click="applyStagedModelSources"
      >
        {{ applyingSources ? 'Applying...' : `Apply Source Changes (${stagedSourceCount})` }}
      </button>
      <button v-else class="primary-action" @click="emit('close')">
        Done
      </button>
    </template>
  </BaseModal>

  <ModelSourceModal
    v-if="selectedModel"
    :model="selectedModel"
    :overlay-z-index="10008"
    defer-save
    action-label="Stage Source"
    @close="closeModelSource"
    @selected="handleModelSourceSelected"
    @hashes-computed="handleModelHashesComputed"
  />
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import BaseModal from '@/components/base/BaseModal.vue'
import ModelSourceModal from '@/components/ModelSourceModal.vue'
import type { EnvironmentReadinessWarnings, ModelDetails } from '@/types/comfygit'

const props = defineProps<{
  warnings: EnvironmentReadinessWarnings
}>()

const emit = defineEmits<{
  close: []
  revalidate: []
  applied: []
}>()

const {
  getModelDetails,
  updateNodeCriticality,
  applyEnvironmentModelSources
} = useComfyGitService()

const selectedModel = ref<ModelDetails | null>(null)
const selectedModelHash = ref<string | null>(null)
const loadingModelHash = ref<string | null>(null)
const updatingNode = ref<string | null>(null)
const applyingSources = ref(false)
const error = ref<string | null>(null)
const stagedModelSources = ref<Record<string, string>>({})

const models = computed(() => props.warnings.models_without_sources)
const nodes = computed(() => props.warnings.nodes_without_provenance)
const stagedSourceCount = computed(() => Object.keys(stagedModelSources.value).length)

watch(
  models,
  (nextModels) => {
    const validHashes = new Set(
      nextModels
        .map((model) => model.hash)
        .filter((hash): hash is string => Boolean(hash))
    )
    const nextStaged: Record<string, string> = {}

    for (const model of nextModels) {
      if (!model.hash) continue
      const existing = stagedModelSources.value[model.hash]
      const candidate = model.source_candidates?.find((source) => source.url)
      const sourceUrl = existing || candidate?.url
      if (sourceUrl) {
        nextStaged[model.hash] = sourceUrl
      }
    }

    for (const [hash, sourceUrl] of Object.entries(stagedModelSources.value)) {
      if (validHashes.has(hash) && sourceUrl) {
        nextStaged[hash] = sourceUrl
      }
    }

    stagedModelSources.value = nextStaged
  },
  { immediate: true }
)

async function openModelSource(modelHash: string) {
  loadingModelHash.value = modelHash
  error.value = null

  try {
    selectedModel.value = await getModelDetails(modelHash)
    selectedModelHash.value = modelHash
  } catch (err) {
    error.value = err instanceof Error ? err.message : `Failed to load ${modelHash}`
  } finally {
    loadingModelHash.value = null
  }
}

async function markNodeOptional(nodeName: string) {
  updatingNode.value = nodeName
  error.value = null

  try {
    const result = await updateNodeCriticality(nodeName, 'optional')
    if (result.status !== 'success') {
      error.value = result.message || `Failed to update ${nodeName}`
      return
    }
    emit('revalidate')
  } catch (err) {
    error.value = err instanceof Error ? err.message : `Failed to update ${nodeName}`
  } finally {
    updatingNode.value = null
  }
}

function closeModelSource() {
  selectedModel.value = null
  selectedModelHash.value = null
}

function handleModelSourceSelected(url: string) {
  if (selectedModelHash.value) {
    stagedModelSources.value = {
      ...stagedModelSources.value,
      [selectedModelHash.value]: url
    }
  }
}

function modelSourceActionLabel(modelHash: string) {
  if (loadingModelHash.value === modelHash) return 'Loading...'
  return stagedModelSources.value[modelHash] ? 'Change Source' : 'Add Source'
}

function handleModelHashesComputed() {
  emit('revalidate')
}

async function applyStagedModelSources() {
  const sources = Object.entries(stagedModelSources.value).map(([identifier, source_url]) => ({
    identifier,
    source_url
  }))
  if (!sources.length) return

  applyingSources.value = true
  error.value = null

  try {
    const result = await applyEnvironmentModelSources({ sources })
    if (result.status === 'error') {
      error.value = result.errors[0]?.message || 'Failed to apply model sources'
      return
    }

    const appliedHashes = new Set(
      result.applied.map((item) => item.identifier || item.model_hash)
    )
    stagedModelSources.value = Object.fromEntries(
      Object.entries(stagedModelSources.value).filter(([hash]) => !appliedHashes.has(hash))
    )

    if (result.status === 'partial') {
      error.value = result.errors[0]?.message || 'Some model sources failed to apply'
    }

    emit('revalidate')
    emit('applied')
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to apply model sources'
  } finally {
    applyingSources.value = false
  }
}
</script>

<style scoped>
.readiness-heading {
  min-width: 0;
}

.readiness-title {
  margin: 0;
  color: var(--cg-color-accent);
  font-size: var(--cg-font-size-sm);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.readiness-subtitle {
  margin: var(--cg-space-2) 0 0 0;
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
  line-height: 1.45;
}

.readiness-body {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.issue-section {
  border: 1px solid var(--cg-color-border-subtle);
  background: var(--cg-color-bg-secondary);
}

.section-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--cg-space-3);
  border-bottom: 1px solid var(--cg-color-border-subtle);
}

.section-heading h4 {
  margin: 0;
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.section-heading span {
  color: var(--cg-color-warning);
  font-size: var(--cg-font-size-xs);
}

.issue-list {
  display: flex;
  flex-direction: column;
}

.issue-item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--cg-space-3);
  padding: var(--cg-space-3);
  border-bottom: 1px solid var(--cg-color-border-subtle);
}

.issue-item:last-child {
  border-bottom: none;
}

.issue-main {
  min-width: 0;
}

.issue-name {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  font-family: var(--cg-font-mono);
  word-break: break-word;
}

.issue-meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cg-space-2);
  margin-top: var(--cg-space-1);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
}

.issue-reason {
  margin: var(--cg-space-2) 0 0 0;
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
  line-height: 1.4;
}

.issue-staged-source,
.issue-candidate-note {
  margin: var(--cg-space-2) 0 0 0;
  font-size: var(--cg-font-size-xs);
  line-height: 1.4;
  word-break: break-word;
}

.issue-staged-source {
  color: var(--cg-color-success);
}

.issue-candidate-note {
  color: var(--cg-color-text-secondary);
}

.issue-action,
.secondary-action,
.primary-action {
  border: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg-tertiary);
  color: var(--cg-color-accent);
  padding: var(--cg-space-2) var(--cg-space-3);
  cursor: pointer;
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  white-space: nowrap;
}

.issue-action:hover:not(:disabled),
.secondary-action:hover:not(:disabled) {
  border-color: var(--cg-color-accent);
}

.issue-action:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.primary-action {
  background: var(--cg-color-accent);
  border-color: var(--cg-color-accent);
  color: var(--cg-color-bg-primary);
}

.primary-action:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.issue-note {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  white-space: nowrap;
}

.empty-state {
  color: var(--cg-color-success);
  border: 1px solid var(--cg-color-success);
  padding: var(--cg-space-4);
}

.error-message {
  color: var(--cg-color-error);
  border: 1px solid var(--cg-color-error);
  padding: var(--cg-space-3);
  font-size: var(--cg-font-size-sm);
}
</style>
