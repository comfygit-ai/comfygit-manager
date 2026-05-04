<template>
  <div class="destination-section">
    <h4 class="section-label">{{ label }}</h4>
    <div class="destination-row">
      <BaseDropdown
        v-model="destBase"
        :options="destinationOptions"
        placeholder="Select directory..."
        class="dest-select"
      />
      <span v-if="destBase !== '__custom__'" class="path-separator">/</span>
      <BaseInput
        v-if="destBase !== '__custom__'"
        v-model="destSubfolder"
        placeholder="subfolder (optional)"
        class="dest-subfolder"
      />
      <template v-if="destBase !== '__custom__' && showFilename">
        <span class="path-separator">/</span>
        <BaseInput
          v-model="filename"
          :placeholder="filenamePlaceholder"
          class="dest-filename"
        />
      </template>
    </div>
    <BaseInput
      v-if="destBase === '__custom__'"
      v-model="destCustom"
      placeholder="Enter directory relative to models folder..."
      class="dest-custom"
      full-width
    />
    <BaseInput
      v-if="destBase === '__custom__' && showFilename"
      v-model="filename"
      :placeholder="filenamePlaceholder"
      class="dest-custom filename-custom"
      full-width
    />
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import BaseDropdown from '@/components/base/BaseDropdown.vue'
import type { DropdownOption } from '@/components/base/BaseDropdown.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import { useComfyGitService } from '@/composables/useComfyGitService'

const props = withDefaults(defineProps<{
  modelValue: string
  label?: string
  suggestedDirectory?: string | null
  showFilename?: boolean
  filenameValue?: string
  filenamePlaceholder?: string
}>(), {
  label: 'Download Destination',
  suggestedDirectory: null,
  showFilename: false,
  filenameValue: '',
  filenamePlaceholder: 'model.safetensors'
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'update:filenameValue': [value: string]
}>()

const { getModelsSubdirectories } = useComfyGitService()

const destBase = ref('')
const destSubfolder = ref('')
const destCustom = ref('')
const filename = ref('')
const directories = ref<string[]>([])
const userOverrodeDestination = ref(false)
let autoDetectInProgress = false

const destinationOptions = computed<DropdownOption[]>(() => {
  const opts: DropdownOption[] = directories.value.map(d => ({
    label: d,
    value: d
  }))
  opts.push({ label: 'Custom path...', value: '__custom__' })
  return opts
})

const destination = computed(() => {
  if (destBase.value === '__custom__') {
    return destCustom.value.trim()
  }
  if (!destBase.value) {
    return ''
  }
  if (destSubfolder.value.trim()) {
    return `${destBase.value}/${destSubfolder.value.trim()}`
  }
  return destBase.value
})

function applySuggestedDirectory() {
  if (userOverrodeDestination.value || !props.suggestedDirectory) return

  const match = directories.value.find(
    d => d.toLowerCase() === props.suggestedDirectory?.toLowerCase()
  )

  if (match && match !== destBase.value) {
    autoDetectInProgress = true
    destBase.value = match
    nextTick(() => { autoDetectInProgress = false })
  }
}

async function loadDirectories() {
  try {
    const response = await getModelsSubdirectories()
    directories.value = response.directories
    if (response.directories.length > 0 && !destBase.value) {
      destBase.value = response.directories[0]
    }
  } catch {
    directories.value = ['checkpoints', 'loras', 'vae', 'controlnet', 'unet']
    if (!destBase.value) {
      destBase.value = 'checkpoints'
    }
  }
}

watch(destination, (value) => {
  emit('update:modelValue', value)
}, { immediate: true })

watch(() => props.suggestedDirectory, applySuggestedDirectory)

watch(() => props.filenameValue, (value) => {
  if ((value || '') !== filename.value) {
    filename.value = value || ''
  }
}, { immediate: true })

watch(directories, applySuggestedDirectory)

watch(destBase, (_newVal, oldVal) => {
  if (autoDetectInProgress || oldVal === '') return
  userOverrodeDestination.value = true
})

watch(filename, (value) => {
  emit('update:filenameValue', value)
})

onMounted(loadDirectories)
</script>

<style scoped>
.destination-section {
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
  padding: var(--cg-space-3);
}

.section-label {
  color: var(--cg-color-accent);
  text-transform: uppercase;
  font-size: var(--cg-font-size-xs);
  letter-spacing: var(--cg-letter-spacing-wide);
  margin: 0 0 var(--cg-space-2) 0;
}

.destination-row {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
}

.dest-select {
  min-width: 220px;
}

.path-separator {
  color: var(--cg-color-text-muted);
  font-family: var(--cg-font-mono);
}

.dest-subfolder {
  flex: 1;
}

.dest-filename {
  flex: 1;
}

.dest-custom {
  margin-top: var(--cg-space-2);
}

.filename-custom {
  margin-top: var(--cg-space-2);
}
</style>
