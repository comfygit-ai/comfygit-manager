<template>
  <Teleport to="body">
    <div class="readiness-overlay" @click="emit('close')">
      <div class="readiness-modal" @click.stop>
        <div class="readiness-header">
          <div>
            <h3 class="readiness-title">Review Reproducibility Issues</h3>
            <p class="readiness-subtitle">
              Add missing source details where possible. Optional nodes are still listed as warnings, but they will not be treated as required build inputs.
            </p>
          </div>
          <button class="readiness-close" @click="emit('close')">x</button>
        </div>

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
                </div>
                <button
                  v-if="model.hash"
                  class="issue-action"
                  @click="selectedModelHash = model.hash"
                >
                  Add URL
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

        <div class="readiness-footer">
          <button class="secondary-action" @click="emit('revalidate')">
            Refresh Check
          </button>
          <button class="primary-action" @click="emit('close')">
            Done
          </button>
        </div>
      </div>
    </div>
  </Teleport>

  <ModelDetailModal
    v-if="selectedModelHash"
    :identifier="selectedModelHash"
    :overlay-z-index="10008"
    @close="handleModelDetailClose"
    @source-saved="emit('revalidate')"
  />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import ModelDetailModal from '@/components/ModelDetailModal.vue'
import type { EnvironmentReadinessWarnings } from '@/types/comfygit'

const props = defineProps<{
  warnings: EnvironmentReadinessWarnings
}>()

const emit = defineEmits<{
  close: []
  revalidate: []
}>()

const { updateNodeCriticality } = useComfyGitService()

const selectedModelHash = ref<string | null>(null)
const updatingNode = ref<string | null>(null)
const error = ref<string | null>(null)

const models = computed(() => props.warnings.models_without_sources)
const nodes = computed(() => props.warnings.nodes_without_provenance)

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

function handleModelDetailClose() {
  selectedModelHash.value = null
  emit('revalidate')
}
</script>

<style scoped>
.readiness-overlay {
  position: fixed;
  inset: 0;
  z-index: 10007;
  background: var(--cg-color-bg-overlay);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
}

.readiness-modal {
  width: min(760px, 92vw);
  max-height: 84vh;
  background: var(--cg-color-bg-primary);
  border: 1px solid var(--cg-color-border);
  box-shadow: var(--cg-shadow-xl);
  display: flex;
  flex-direction: column;
}

.readiness-header {
  display: flex;
  justify-content: space-between;
  gap: var(--cg-space-4);
  padding: var(--cg-space-4);
  border-bottom: 1px solid var(--cg-color-border-subtle);
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

.readiness-close {
  background: transparent;
  border: none;
  color: var(--cg-color-text-muted);
  cursor: pointer;
  font-size: var(--cg-font-size-lg);
  width: 28px;
  height: 28px;
}

.readiness-close:hover {
  color: var(--cg-color-text-primary);
}

.readiness-body {
  overflow-y: auto;
  padding: var(--cg-space-4);
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

.readiness-footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--cg-space-2);
  padding: var(--cg-space-4);
  border-top: 1px solid var(--cg-color-border-subtle);
}
</style>
