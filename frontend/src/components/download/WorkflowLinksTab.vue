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
        confirm-action-label="Download"
        requires-target-confirmation
        :show-match-chip="false"
        :suggested-directory="suggestedDirectory(candidate)"
        :target-filename="targetFilename(candidate)"
        :target-warning="targetWarning(candidate)"
        @select="(url, targetPath) => handleSourceSelected(candidate, url, targetPath)"
      />
    </div>
    <div v-else class="state-message">
      No likely workflow links found. Try Hugging Face or Direct URL.
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import ModelSourceCandidateCard from '@/components/model-source/ModelSourceCandidateCard.vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { ModelSourceCandidate } from '@/types/comfygit'

const emit = defineEmits<{
  queue: [items: Array<{ url: string; targetPath: string; filename: string }>]
}>()

const { getWorkflowSourceCandidates } = useComfyGitService()

const candidates = ref<ModelSourceCandidate[]>([])
const loadingCandidates = ref(false)
const candidateError = ref<string | null>(null)

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

function handleSourceSelected(candidate: ModelSourceCandidate, url: string, targetPath?: string) {
  if (!targetPath) return
  const selectedFilename = targetFilename(candidate)
  emit('queue', [{
    url,
    targetPath,
    filename: selectedFilename || 'model download'
  }])
}

function targetFilename(candidate: ModelSourceCandidate): string | null {
  const urlFilename = filenameFromUrl(candidate.url)
  if (hasModelExtension(urlFilename)) return urlFilename

  const contextFilename = filenameFromText(candidate.context || '')
  if (contextFilename) return contextFilename

  return null
}

function targetWarning(candidate: ModelSourceCandidate): string {
  if (isHuggingFaceRepoLink(candidate.url)) {
    return 'This Hugging Face link points to a repository, not a single file. Enter the exact filename here, or use the Hugging Face tab to choose the file directly.'
  }
  if (!targetFilename(candidate)) {
    return 'Enter the filename to save. This workflow link does not include a concrete model filename.'
  }
  return ''
}

function suggestedDirectory(candidate: ModelSourceCandidate): string | null {
  const context = normalizePath(candidate.context || '')
  const modelDirMatch = context.match(/(?:ComfyUI\/)?models\/([^/\s"')]+)/i)
  if (modelDirMatch?.[1]) return modelDirMatch[1]

  const combined = `${normalizePath(candidate.url)} ${context}`.toLowerCase()
  const knownDirs = [
    'checkpoints',
    'loras',
    'vae',
    'diffusion_models',
    'text_encoders',
    'controlnet',
    'clip',
    'clip_vision',
    'upscale_models',
    'embeddings'
  ]
  return knownDirs.find(dir => combined.includes(dir.toLowerCase())) || null
}

function filenameFromUrl(url: string): string {
  try {
    const parsed = new URL(url)
    return filenameFromPath(decodeURIComponent(parsed.pathname))
  } catch {
    return filenameFromPath(url.split('?', 1)[0])
  }
}

function filenameFromText(text: string): string {
  const match = normalizePath(text).match(/[A-Za-z0-9][A-Za-z0-9._+() -]*\.(?:safetensors|ckpt|pt|pth|bin|gguf|onnx)/i)
  return sanitizeFilename(match?.[0] || '')
}

function filenameFromPath(path: string): string {
  return sanitizeFilename(normalizePath(path).split('/').filter(Boolean).pop() || '')
}

function normalizePath(path: string): string {
  return path.replace(/\\/g, '/').replace(/^\/+/, '')
}

function sanitizeFilename(filename: string): string {
  return filename.trim().replace(/^[\s[\]('"`]+/, '').replace(/[\s[\])'"`,.]+$/, '')
}

function hasModelExtension(filename: string): boolean {
  return /\.(?:safetensors|ckpt|pt|pth|bin|gguf|onnx)$/i.test(filename)
}

function isHuggingFaceRepoLink(url: string): boolean {
  try {
    const parsed = new URL(url)
    if (!/(^|\.)huggingface\.co$/i.test(parsed.hostname) && parsed.hostname.toLowerCase() !== 'hf.co') {
      return false
    }
    return !parsed.pathname.includes('/resolve/') && !parsed.pathname.includes('/blob/')
  } catch {
    return false
  }
}
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

</style>
