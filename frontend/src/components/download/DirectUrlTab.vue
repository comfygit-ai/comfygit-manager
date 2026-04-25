<template>
  <div class="direct-url-tab">
    <SourceUrlActionForm
      v-model="url"
      label="Download URL"
      placeholder="https://example.com/model.safetensors"
      action-label="Queue Download"
      :disabled="!destination.trim() || !inferredFilename"
      @submit="handleQueue"
    >
      <DownloadDestinationPicker v-model="destination" />

      <p v-if="url.trim() && !inferredFilename" class="error">
        Could not infer a filename from this URL.
      </p>

      <p class="note">Model will be queued for background download.</p>
    </SourceUrlActionForm>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import DownloadDestinationPicker from '@/components/download/DownloadDestinationPicker.vue'
import SourceUrlActionForm from '@/components/model-source/SourceUrlActionForm.vue'

const props = defineProps<{
  initialUrl?: string
}>()

interface Emits {
  (e: 'queue', items: Array<{ url: string; targetPath: string; filename: string }>): void
}
const emit = defineEmits<Emits>()

const url = ref('')
const destination = ref('')

watch(() => props.initialUrl, (value) => {
  if (value && value !== url.value) {
    url.value = value
  }
}, { immediate: true })

const inferredFilename = computed(() => {
  const sourceUrl = url.value.trim()
  if (!sourceUrl) return ''

  try {
    const parsed = new URL(sourceUrl)
    const pathname = decodeURIComponent(parsed.pathname)
    return pathname.replace(/\\/g, '/').split('/').filter(Boolean).pop() || ''
  } catch {
    const path = sourceUrl.split('?', 1)[0].replace(/\\/g, '/')
    return path.split('/').filter(Boolean).pop() || ''
  }
})

const handleQueue = (sourceUrl: string) => {
  if (!destination.value.trim() || !inferredFilename.value) return
  const targetPath = joinPath(destination.value, inferredFilename.value)

  emit('queue', [{
    url: sourceUrl,
    targetPath,
    filename: inferredFilename.value
  }])

  url.value = ''
}

function joinPath(directory: string, filename: string): string {
  return `${directory.replace(/\/+$/, '')}/${filename.replace(/^\/+/, '')}`
}
</script>

<style scoped>
.direct-url-tab {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.note {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  margin: 0;
}

.error {
  color: var(--cg-color-error);
  font-size: var(--cg-font-size-sm);
  margin: 0;
}
</style>
