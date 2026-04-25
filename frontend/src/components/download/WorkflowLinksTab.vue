<template>
  <div class="workflow-links-tab">
    <div class="section-header-row">
      <div>
        <h4>Workflow Links</h4>
        <p>Model links found in saved workflow notes or metadata.</p>
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
        action-label="Use URL"
        @select="emit('selectUrl', $event)"
        @show-match-info="showMatchInfo = true"
      />
    </div>
    <div v-else class="state-message">
      No likely workflow links found. Try Hugging Face or Direct URL.
    </div>

    <InfoPopover
      :show="showMatchInfo"
      title="About Match Reasons"
      max-width="460px"
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
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import InfoPopover from '@/components/base/molecules/InfoPopover.vue'
import ModelSourceCandidateCard from '@/components/model-source/ModelSourceCandidateCard.vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { ModelSourceCandidate } from '@/types/comfygit'

const emit = defineEmits<{
  selectUrl: [url: string]
}>()

const { getWorkflowSourceCandidates } = useComfyGitService()

const candidates = ref<ModelSourceCandidate[]>([])
const loadingCandidates = ref(false)
const candidateError = ref<string | null>(null)
const showMatchInfo = ref(false)

const workflowCandidates = computed(() => candidates.value.filter(candidate => candidate.source === 'workflow'))

async function loadCandidates() {
  loadingCandidates.value = true
  candidateError.value = null

  try {
    const response = await getWorkflowSourceCandidates()
    candidates.value = response.candidates
  } catch (err) {
    candidateError.value = err instanceof Error ? err.message : 'Failed to scan workflows'
  } finally {
    loadingCandidates.value = false
  }
}

onMounted(loadCandidates)
</script>

<style scoped>
.workflow-links-tab {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
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
