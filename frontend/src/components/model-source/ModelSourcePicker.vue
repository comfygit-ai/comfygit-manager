<template>
  <div class="source-picker">
    <div v-if="showModelSummary" class="model-summary">
      <div class="model-heading">
        <div class="summary-label">{{ model.hash ? 'Local model' : 'Missing model' }}</div>
        <div class="summary-name">{{ model.filename }}</div>
      </div>
      <div class="summary-meta">
        <div v-if="model.hash" class="hash-row">
          <span class="hash-label">quick hash</span>
          <span class="hash-value">{{ model.hash }}</span>
        </div>
        <div v-if="model.blake3" class="hash-row">
          <span class="hash-label">blake3</span>
          <span class="hash-value">{{ model.blake3 }}</span>
        </div>
        <div v-if="model.sha256" class="hash-row">
          <span class="hash-label">sha256</span>
          <span class="hash-value">{{ model.sha256 }}</span>
        </div>
        <BaseButton
          v-if="missingFullHashes"
          class="compute-hashes-btn"
          variant="secondary"
          size="sm"
          :loading="computingHashes"
          @click="computeHashes"
        >
          Compute full hashes
        </BaseButton>
        <p v-if="hashError" class="hash-error">{{ hashError }}</p>
      </div>
    </div>

    <div class="tab-bar">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="['tab-btn', { active: activeTab === tab.id }]"
        @click="activeTab = tab.id"
      >
        {{ tab.label }}
      </button>
    </div>

    <section v-if="activeTab === 'workflow'" class="tab-content">
      <div class="section-header-row">
        <div>
          <h4>Workflow Links</h4>
          <p>Candidate model links found in saved workflow notes or metadata.</p>
        </div>
        <BaseButton variant="secondary" size="sm" :loading="loadingCandidates" @click="loadCandidates">
          Scan
        </BaseButton>
      </div>

      <div v-if="loadingCandidates" class="state-message">Scanning workflows...</div>
      <div v-else-if="candidateError" class="error-message">{{ candidateError }}</div>
      <div v-else-if="workflowCandidates.length" class="candidate-list">
        <ModelSourceCandidateCard
          v-for="candidate in workflowCandidates"
          :key="`${candidate.workflow}:${candidate.url}`"
          :candidate="candidate"
          :action-label="actionLabel"
          :loading="loadingUrl === candidate.url"
          :requires-target-confirmation="usesDownloadTarget"
          :suggested-directory="suggestedDirectory"
          :target-filename="targetFilename"
          @select="handleCandidateSource"
        />
      </div>
      <div v-else class="state-message">
        No likely workflow links found. Try direct URL for now.
      </div>
    </section>

    <section v-else-if="activeTab === 'huggingface'" class="tab-content source-browser-content">
      <HuggingFaceTab
        mode-kind="source"
        :action-label="actionLabel"
        :overlay-z-index="overlayZIndex"
        @select-source="emit('selectSource', $event)"
      />
    </section>

    <section v-else-if="activeTab === 'civitai'" class="tab-content source-browser-content">
      <CivitaiTab
        mode-kind="source"
        :action-label="actionLabel"
        :overlay-z-index="overlayZIndex"
        @select-source="emit('selectSource', $event)"
      />
    </section>

    <section v-else-if="activeTab === 'direct'" class="tab-content">
      <div class="section-header-row">
        <div>
          <h4>Direct URL</h4>
          <p>{{ directDescription }}</p>
        </div>
      </div>

      <DirectModelUrlForm
        v-if="usesDownloadTarget"
        :initial-url="directUrl"
        label=""
        :placeholder="directPlaceholder"
        :action-label="actionLabel"
        :loading="loadingUrl === directUrl.trim()"
        :suggested-directory="suggestedDirectory"
        :target-filename="targetFilename"
        @submit="handleDirectSource"
      />

      <SourceUrlActionForm
        v-else
        v-model="directUrl"
        label=""
        :placeholder="directPlaceholder"
        :action-label="actionLabel"
        :loading="loadingUrl === directUrl.trim()"
        @submit="emit('selectSource', $event)"
      />
    </section>

  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import HuggingFaceTab from '@/components/download/HuggingFaceTab.vue'
import CivitaiTab from '@/components/download/CivitaiTab.vue'
import DirectModelUrlForm from '@/components/download/DirectModelUrlForm.vue'
import ModelSourceCandidateCard from '@/components/model-source/ModelSourceCandidateCard.vue'
import SourceUrlActionForm from '@/components/model-source/SourceUrlActionForm.vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { ModelDetails, ModelSourceCandidate } from '@/types/comfygit'

const props = withDefaults(defineProps<{
  model: ModelDetails
  actionLabel?: string
  loadingUrl?: string | null
  overlayZIndex?: number
  showModelSummary?: boolean
  directDescription?: string
  directPlaceholder?: string
  workflowName?: string | null
  nodeType?: string | null
}>(), {
  actionLabel: 'Use as Source',
  loadingUrl: null,
  overlayZIndex: 10011,
  showModelSummary: true,
  directDescription: 'Paste the download URL that another machine should use for this exact model file.',
  directPlaceholder: 'https://huggingface.co/org/repo/resolve/main/model.safetensors',
  workflowName: null,
  nodeType: null
})

const emit = defineEmits<{
  selectSource: [url: string, targetPath?: string]
  hashesComputed: [model: ModelDetails]
}>()

const { getModelSourceCandidates, getWorkflowModelSourceCandidates, computeModelHashes } = useComfyGitService()

const tabs = [
  { id: 'workflow', label: 'Workflow Links' },
  { id: 'huggingface', label: 'Hugging Face' },
  { id: 'civitai', label: 'Civitai' },
  { id: 'direct', label: 'Direct URL' }
] as const

const activeTab = ref<(typeof tabs)[number]['id']>('workflow')
const candidates = ref<ModelSourceCandidate[]>([])
const loadingCandidates = ref(false)
const candidateError = ref<string | null>(null)
const directUrl = ref('')
const computingHashes = ref(false)
const hashError = ref<string | null>(null)

const workflowCandidates = computed(() => candidates.value.filter(candidate => candidate.source === 'workflow'))
const missingFullHashes = computed(() => Boolean(props.model.hash && (!props.model.blake3 || !props.model.sha256)))
const usesDownloadTarget = computed(() => Boolean(props.workflowName || !props.model.hash))
const suggestedDirectory = computed(() => {
  const category = props.model.category?.trim()
  return category && category !== 'unknown' ? category : null
})
const targetFilename = computed(() => {
  return filenameFromPath(props.model.filename || props.model.relative_path || '')
})

async function loadCandidates() {
  loadingCandidates.value = true
  candidateError.value = null

  try {
    const response = props.workflowName
      ? await getWorkflowModelSourceCandidates(props.workflowName, {
        filename: props.model.filename,
        category: props.model.category,
        nodeType: props.nodeType
      })
      : await getModelSourceCandidates(props.model.hash)
    candidates.value = response.candidates
  } catch (err) {
    candidateError.value = err instanceof Error ? err.message : 'Failed to scan workflows'
  } finally {
    loadingCandidates.value = false
  }
}

async function computeHashes() {
  if (!props.model.hash) return

  computingHashes.value = true
  hashError.value = null

  try {
    const model = await computeModelHashes(props.model.hash)
    emit('hashesComputed', model)
  } catch (err) {
    hashError.value = err instanceof Error ? err.message : 'Failed to compute hashes'
  } finally {
    computingHashes.value = false
  }
}

function handleDirectSource(payload: { url: string; targetPath: string }) {
  directUrl.value = payload.url
  emit('selectSource', payload.url, payload.targetPath)
}

function handleCandidateSource(url: string, targetPath?: string) {
  emit('selectSource', url, targetPath)
}

function normalizePath(path: string): string {
  return path.replace(/\\/g, '/').replace(/^\/+/, '')
}

function filenameFromPath(path: string): string {
  return normalizePath(path).split('/').filter(Boolean).pop() || normalizePath(path)
}

onMounted(loadCandidates)
</script>

<style scoped>
.source-picker {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
  min-height: 100%;
}

.model-summary {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
}

.model-heading {
  min-width: 0;
}

.summary-label {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.summary-name {
  color: var(--cg-color-text-primary);
  font-family: var(--cg-font-mono);
  overflow-wrap: anywhere;
}

.summary-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--cg-space-2);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
}

.hash-row {
  display: flex;
  align-items: flex-start;
  gap: var(--cg-space-2);
}

.hash-label {
  color: var(--cg-color-text-muted);
  white-space: nowrap;
  min-width: 70px;
}

.hash-value {
  color: var(--cg-color-text-secondary);
  font-family: var(--cg-font-mono);
  overflow-wrap: anywhere;
}

.hash-error {
  color: var(--cg-color-error);
  font-size: var(--cg-font-size-xs);
  margin: var(--cg-space-1) 0 0;
}

.compute-hashes-btn {
  align-self: flex-start;
  width: auto;
}

.tab-bar {
  display: flex;
  gap: var(--cg-space-1);
  border-bottom: 1px solid var(--cg-color-border);
}

.tab-btn {
  background: transparent;
  border: 1px solid transparent;
  color: var(--cg-color-text-secondary);
  padding: var(--cg-space-2) var(--cg-space-3);
  cursor: pointer;
}

.tab-btn:hover,
.tab-btn.active {
  color: var(--cg-color-accent);
  border-bottom-color: var(--cg-color-accent);
}

.tab-content {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
  min-height: 0;
}

.source-browser-content {
  height: 430px;
}

.section-header-row {
  display: flex;
  justify-content: space-between;
  gap: var(--cg-space-3);
  align-items: flex-start;
}

.section-header-row h4 {
  margin: 0;
  color: var(--cg-color-text-primary);
}

.section-header-row p {
  margin: var(--cg-space-1) 0 0;
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
}

.candidate-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.state-message {
  padding: var(--cg-space-4);
  color: var(--cg-color-text-muted);
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
}

.error-message {
  color: var(--cg-color-error);
  font-size: var(--cg-font-size-sm);
  margin: 0;
}

.match-info-list {
  margin: 0;
  padding-left: var(--cg-space-4);
}

.match-info-list li {
  margin-bottom: var(--cg-space-2);
}

.match-info-list strong {
  color: var(--cg-color-text-primary);
}
</style>
