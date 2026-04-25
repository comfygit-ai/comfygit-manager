<template>
  <BaseModal
    :title="`Find Source: ${model.filename}`"
    size="lg"
    fixed-height
    :overlay-z-index="overlayZIndex"
    @close="emit('close')"
  >
    <template #body>
      <div class="source-modal">
        <div class="model-summary">
          <div>
            <div class="summary-label">Local model</div>
            <div class="summary-name">{{ model.filename }}</div>
          </div>
          <div class="summary-meta">
            <span v-if="model.hash">quick hash {{ model.hash }}</span>
            <span v-if="model.blake3">blake3 {{ model.blake3 }}</span>
            <span v-if="model.sha256">sha256 {{ model.sha256 }}</span>
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
            <article
              v-for="candidate in workflowCandidates"
              :key="`${candidate.workflow}:${candidate.url}`"
              class="candidate-card"
            >
              <div class="candidate-main">
                <div class="candidate-url">{{ candidate.url }}</div>
                <div class="candidate-meta">
                  <span class="meta-chip">
                    <span class="chip-label">Provider</span>
                    <span>{{ formatProvider(candidate.source_type) }}</span>
                  </span>
                  <span v-if="candidate.workflow" class="meta-chip">
                    <span class="chip-label">Workflow</span>
                    <span>{{ candidate.workflow }}</span>
                  </span>
                  <span v-if="candidate.confidence" class="meta-chip">
                    <span class="chip-label">Match</span>
                    <span>{{ formatConfidence(candidate.confidence) }}</span>
                  </span>
                </div>
                <div v-if="candidate.reasons?.length" class="reason-list" aria-label="Why this link matched">
                  <div class="reason-heading">
                    <span class="reason-label">Matched by</span>
                    <InfoButton
                      :size="14"
                      title="About match reasons"
                      @click="showMatchInfo = true"
                    />
                  </div>
                  <span
                    v-for="reason in candidate.reasons"
                    :key="reason"
                    class="reason-chip"
                  >
                    {{ reason }}
                  </span>
                </div>
                <details v-if="candidate.context" class="candidate-context">
                  <summary>Workflow snippet</summary>
                  <p>{{ candidate.context }}</p>
                </details>
              </div>
              <div class="candidate-actions">
                <BaseButton
                  variant="primary"
                  size="sm"
                  :loading="savingUrl === candidate.url"
                  @click="useSource(candidate.url)"
                >
                  Use as Source
                </BaseButton>
              </div>
            </article>
          </div>
          <div v-else class="state-message">
            No likely workflow links found. Try direct URL for now.
          </div>
        </section>

        <section v-else-if="activeTab === 'direct'" class="tab-content">
          <div class="section-header-row">
            <div>
              <h4>Direct URL</h4>
              <p>Paste the download URL that another machine should use for this exact model file.</p>
            </div>
          </div>

          <div class="direct-form">
            <BaseInput
              v-model="directUrl"
              placeholder="https://huggingface.co/org/repo/resolve/main/model.safetensors"
              full-width
            />
            <p v-if="directUrlError" class="error-message">{{ directUrlError }}</p>
            <BaseButton
              variant="primary"
              :disabled="!directUrl.trim() || Boolean(directUrlError)"
              :loading="savingUrl === directUrl.trim()"
              @click="useSource(directUrl.trim())"
            >
              Use as Source
            </BaseButton>
          </div>
        </section>

        <p v-if="saveError" class="error-message">{{ saveError }}</p>
      </div>
    </template>

    <template #footer>
      <BaseButton variant="secondary" @click="emit('close')">
        Close
      </BaseButton>
    </template>
  </BaseModal>

  <InfoPopover
    :show="showMatchInfo"
    title="About Match Reasons"
    max-width="460px"
    :overlay-z-index="overlayZIndex + 2"
    @close="showMatchInfo = false"
  >
    <template #content>
      <ul class="match-info-list">
        <li><strong>Filename match</strong> means the link or nearby workflow text includes the exact model filename.</li>
        <li><strong>Model name match</strong> means the link or nearby workflow text includes the filename without its extension.</li>
        <li><strong>Hash match</strong> means a known quick, Blake3, or SHA256 hash appears near the link.</li>
        <li><strong>Category nearby</strong> means the workflow text near the link mentions the model folder/category.</li>
        <li><strong>Model file URL</strong> means the URL itself ends like a model file.</li>
        <li><strong>Known model host</strong> means the URL points at a recognized model host such as Hugging Face or Civitai.</li>
      </ul>
    </template>
  </InfoPopover>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import BaseModal from '@/components/base/BaseModal.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import InfoButton from '@/components/base/atoms/InfoButton.vue'
import InfoPopover from '@/components/base/molecules/InfoPopover.vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { ModelDetails, ModelSourceCandidate } from '@/types/comfygit'

const props = withDefaults(defineProps<{
  model: ModelDetails
  overlayZIndex?: number
}>(), {
  overlayZIndex: 10011
})

const emit = defineEmits<{
  close: []
  saved: []
}>()

const { getModelSourceCandidates, addModelSource } = useComfyGitService()

const tabs = [
  { id: 'workflow', label: 'Workflow Links' },
  { id: 'direct', label: 'Direct URL' }
] as const

const activeTab = ref<(typeof tabs)[number]['id']>('workflow')
const candidates = ref<ModelSourceCandidate[]>([])
const loadingCandidates = ref(false)
const candidateError = ref<string | null>(null)
const directUrl = ref('')
const savingUrl = ref<string | null>(null)
const saveError = ref<string | null>(null)
const showMatchInfo = ref(false)

const workflowCandidates = computed(() => candidates.value.filter(candidate => candidate.source === 'workflow'))

function formatProvider(provider: string): string {
  if (provider === 'huggingface') return 'Hugging Face'
  if (provider === 'civitai') return 'Civitai'
  return 'Direct URL'
}

function formatConfidence(confidence: number): string {
  if (confidence >= 75) return 'Strong'
  if (confidence >= 45) return 'Possible'
  return 'Weak'
}

const directUrlError = computed(() => {
  const value = directUrl.value.trim()
  if (!value) return null
  try {
    const parsed = new URL(value)
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return 'Use an HTTP or HTTPS URL.'
    }
  } catch {
    return 'Enter a valid URL.'
  }
  return null
})

async function loadCandidates() {
  loadingCandidates.value = true
  candidateError.value = null

  try {
    const response = await getModelSourceCandidates(props.model.hash)
    candidates.value = response.candidates
  } catch (err) {
    candidateError.value = err instanceof Error ? err.message : 'Failed to scan workflows'
  } finally {
    loadingCandidates.value = false
  }
}

async function useSource(url: string) {
  if (!url || !props.model.hash) return

  savingUrl.value = url
  saveError.value = null

  try {
    await addModelSource(props.model.hash, url)
    emit('saved')
    emit('close')
  } catch (err) {
    saveError.value = err instanceof Error ? err.message : 'Failed to save source'
  } finally {
    savingUrl.value = null
  }
}

onMounted(loadCandidates)
</script>

<style scoped>
.source-modal {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
  min-height: 100%;
}

.model-summary {
  display: flex;
  justify-content: space-between;
  gap: var(--cg-space-3);
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
}

.summary-label {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.summary-name,
.candidate-url {
  color: var(--cg-color-text-primary);
  font-family: var(--cg-font-mono);
  overflow-wrap: anywhere;
}

.summary-meta,
.candidate-meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cg-space-2);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
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

.candidate-card {
  display: flex;
  gap: var(--cg-space-3);
  justify-content: space-between;
  align-items: flex-start;
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
}

.candidate-main {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
}

.candidate-meta,
.reason-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cg-space-2);
  align-items: center;
  font-size: var(--cg-font-size-xs);
}

.candidate-meta {
  margin-bottom: var(--cg-space-2);
}

.meta-chip,
.reason-chip {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 8px;
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-secondary);
}

.chip-label,
.reason-label {
  color: var(--cg-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.reason-heading {
  flex-basis: 100%;
  display: flex;
  align-items: center;
  gap: var(--cg-space-1);
  margin-bottom: var(--cg-space-1);
}

.reason-chip {
  color: var(--cg-color-accent);
  border-color: var(--cg-color-border-subtle);
}

.candidate-context {
  margin-top: var(--cg-space-1);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  line-height: 1.4;
}

.candidate-context summary {
  cursor: pointer;
  color: var(--cg-color-text-secondary);
}

.candidate-context summary:hover {
  color: var(--cg-color-accent);
}

.candidate-context p {
  margin: var(--cg-space-2) 0 0;
  max-height: 110px;
  overflow: auto;
  padding: var(--cg-space-2);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  font-family: var(--cg-font-mono);
  overflow-wrap: anywhere;
}

.candidate-actions {
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
}

.state-message {
  padding: var(--cg-space-4);
  color: var(--cg-color-text-muted);
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
}

.direct-form {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
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
