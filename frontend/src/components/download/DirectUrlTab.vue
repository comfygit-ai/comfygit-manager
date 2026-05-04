<template>
  <div class="direct-url-tab">
    <DirectModelUrlForm
      v-if="requiresTarget"
      :initial-url="initialUrl"
      :label="label"
      :placeholder="placeholder"
      :description="description"
      :action-label="actionLabel"
      :loading="loading"
      :note="note"
      :suggested-directory="suggestedDirectory"
      :target-filename="targetFilename"
      :clear-on-submit="clearOnSubmit"
      @submit="handleTargetedSubmit"
    />

    <SourceUrlActionForm
      v-else
      v-model="sourceUrl"
      :label="label"
      :placeholder="placeholder"
      :description="description"
      :action-label="actionLabel"
      :loading="loading"
      @submit="handleSourceSubmit"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import DirectModelUrlForm from '@/components/download/DirectModelUrlForm.vue'
import SourceUrlActionForm from '@/components/model-source/SourceUrlActionForm.vue'

const props = withDefaults(defineProps<{
  modeKind?: 'download' | 'source'
  initialUrl?: string
  label?: string
  placeholder?: string
  description?: string
  actionLabel?: string
  loading?: boolean
  note?: string
  suggestedDirectory?: string | null
  targetFilename?: string | null
  requiresTarget?: boolean
  clearOnSubmit?: boolean
}>(), {
  modeKind: 'download',
  initialUrl: '',
  label: 'Download URL',
  placeholder: 'https://example.com/model.safetensors',
  description: '',
  actionLabel: 'Queue Download',
  loading: false,
  note: 'Model will be queued for background download.',
  suggestedDirectory: null,
  targetFilename: null,
  requiresTarget: true,
  clearOnSubmit: false
})

interface Emits {
  (e: 'queue', items: Array<{ url: string; targetPath: string; filename: string }>): void
  (e: 'selectSource', url: string, targetPath?: string): void
}
const emit = defineEmits<Emits>()

const sourceUrl = ref('')

watch(() => props.initialUrl, (value) => {
  if ((value || '') !== sourceUrl.value) {
    sourceUrl.value = value || ''
  }
}, { immediate: true })

const handleTargetedSubmit = (payload: { url: string; targetPath: string; filename: string }) => {
  if (props.modeKind === 'source') {
    emit('selectSource', payload.url, payload.targetPath)
    return
  }

  emit('queue', [{
    url: payload.url,
    targetPath: payload.targetPath,
    filename: payload.filename
  }])
}

const handleSourceSubmit = (url: string) => {
  emit('selectSource', url)
}
</script>

<style scoped>
.direct-url-tab {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}
</style>
