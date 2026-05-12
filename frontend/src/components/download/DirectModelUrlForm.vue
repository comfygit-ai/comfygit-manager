<template>
  <SourceUrlActionForm
    v-model="url"
    :label="label"
    :placeholder="placeholder"
    :description="description"
    :action-label="actionLabel"
    :loading="loading"
    :disabled="!targetPath || !resolvedFilename"
    @submit="handleSubmit"
  >
    <ModelDownloadTargetPicker
      v-model="destination"
      :suggested-directory="suggestedDirectory"
      :target-filename="resolvedFilename"
      @update:target-path="targetPath = $event"
    />

    <p v-if="url.trim() && !resolvedFilename" class="error">
      Could not infer a filename from this URL.
    </p>

    <p v-if="note" class="note">{{ note }}</p>
  </SourceUrlActionForm>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import ModelDownloadTargetPicker from '@/components/download/ModelDownloadTargetPicker.vue'
import SourceUrlActionForm from '@/components/model-source/SourceUrlActionForm.vue'

const props = withDefaults(defineProps<{
  initialUrl?: string
  label?: string
  placeholder?: string
  description?: string
  actionLabel?: string
  loading?: boolean
  note?: string
  suggestedDirectory?: string | null
  targetFilename?: string | null
  clearOnSubmit?: boolean
}>(), {
  initialUrl: '',
  label: 'Download URL',
  placeholder: 'https://example.com/model.safetensors',
  description: '',
  actionLabel: 'Queue Download',
  loading: false,
  note: '',
  suggestedDirectory: null,
  targetFilename: null,
  clearOnSubmit: false
})

const emit = defineEmits<{
  submit: [payload: { url: string; targetPath: string; filename: string }]
}>()

const url = ref('')
const destination = ref('')
const targetPath = ref('')

watch(() => props.initialUrl, (value) => {
  if ((value || '') !== url.value) {
    url.value = value || ''
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

const resolvedFilename = computed(() => {
  const filename = props.targetFilename?.trim()
  return filename ? filenameFromPath(filename) : inferredFilename.value
})

function handleSubmit(sourceUrl: string) {
  if (!targetPath.value || !resolvedFilename.value) return

  emit('submit', {
    url: sourceUrl,
    targetPath: targetPath.value,
    filename: resolvedFilename.value
  })

  if (props.clearOnSubmit) {
    url.value = ''
  }
}

function normalizePath(path: string): string {
  return path.replace(/\\/g, '/').replace(/^\/+/, '')
}

function filenameFromPath(path: string): string {
  return normalizePath(path).split('/').filter(Boolean).pop() || normalizePath(path)
}
</script>

<style scoped>
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
