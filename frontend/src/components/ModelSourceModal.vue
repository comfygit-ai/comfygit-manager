<template>
  <BaseModal
    :title="`Find Source: ${model.filename}`"
    size="lg"
    fixed-height
    :overlay-z-index="overlayZIndex"
    @close="emit('close')"
  >
    <template #body>
      <ModelSourcePicker
        :model="currentModel"
        :loading-url="savingUrl"
        :overlay-z-index="overlayZIndex"
        :action-label="actionLabel"
        @select-source="useSource"
        @hashes-computed="handleHashesComputed"
      />

      <p v-if="saveError" class="error-message">{{ saveError }}</p>
    </template>

    <template #footer>
      <BaseButton variant="secondary" @click="emit('close')">
        Close
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import BaseModal from '@/components/base/BaseModal.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import ModelSourcePicker from '@/components/model-source/ModelSourcePicker.vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { ModelDetails } from '@/types/comfygit'

const props = withDefaults(defineProps<{
  model: ModelDetails
  overlayZIndex?: number
  deferSave?: boolean
  actionLabel?: string
}>(), {
  overlayZIndex: 10011,
  deferSave: false,
  actionLabel: 'Use as Source'
})

const emit = defineEmits<{
  close: []
  saved: []
  selected: [url: string]
  hashesComputed: []
}>()

const { addModelSource } = useComfyGitService()

const currentModel = ref<ModelDetails>(props.model)
const savingUrl = ref<string | null>(null)
const saveError = ref<string | null>(null)

watch(() => props.model, (model) => {
  currentModel.value = model
})

async function useSource(url: string) {
  if (!url || !props.model.hash) return

  if (props.deferSave) {
    emit('selected', url)
    emit('close')
    return
  }

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

function handleHashesComputed(model: ModelDetails) {
  currentModel.value = model
  emit('hashesComputed')
}
</script>

<style scoped>
.error-message {
  color: var(--cg-color-error);
  font-size: var(--cg-font-size-sm);
  margin: var(--cg-space-3) 0 0;
}
</style>
