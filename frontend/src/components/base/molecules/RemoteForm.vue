<template>
  <div class="remote-form">
    <div class="form-header">
      <SectionTitle>{{ mode === 'add' ? 'ADD NEW REMOTE' : 'EDIT REMOTE' }}</SectionTitle>
    </div>

    <div class="form-body">
      <BaseFormField label="Remote Name" required>
        <BaseInput
          v-model="formData.name"
          :disabled="mode === 'edit'"
          placeholder="e.g., origin, upstream"
        />
      </BaseFormField>

      <BaseFormField label="Fetch URL" required>
        <BaseInput
          v-model="formData.fetchUrl"
          placeholder="https://github.com/user/repo.git"
        />
      </BaseFormField>

      <BaseFormField label="Push URL (optional)">
        <BaseInput
          v-model="formData.pushUrl"
          placeholder="Leave empty to use fetch URL"
        />
      </BaseFormField>

      <div v-if="error" class="form-error">
        {{ error }}
      </div>
    </div>

    <div class="form-actions">
      <ActionButton
        variant="primary"
        size="md"
        :disabled="!isValid"
        :loading="submitting"
        @click="handleSubmit"
      >
        {{ mode === 'add' ? 'Add Remote' : 'Update URL' }}
      </ActionButton>
      <ActionButton
        variant="ghost"
        size="md"
        @click="$emit('cancel')"
      >
        Cancel
      </ActionButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import SectionTitle from '../atoms/SectionTitle.vue'
import BaseFormField from '../BaseFormField.vue'
import BaseInput from '../BaseInput.vue'
import ActionButton from '../atoms/ActionButton.vue'

interface RemoteFormData {
  name: string
  fetchUrl: string
  pushUrl: string
}

const props = withDefaults(defineProps<{
  mode: 'add' | 'edit'
  remoteName?: string
  fetchUrl?: string
  pushUrl?: string
}>(), {
  mode: 'add',
  remoteName: '',
  fetchUrl: '',
  pushUrl: ''
})

const emit = defineEmits<{
  submit: [data: RemoteFormData]
  cancel: []
}>()

const formData = ref<RemoteFormData>({
  name: props.remoteName,
  fetchUrl: props.fetchUrl,
  pushUrl: props.pushUrl
})

const submitting = ref(false)
const error = ref<string | null>(null)

// Watch props to update form when editing a different remote
watch(() => [props.remoteName, props.fetchUrl, props.pushUrl], () => {
  formData.value = {
    name: props.remoteName,
    fetchUrl: props.fetchUrl,
    pushUrl: props.pushUrl
  }
})

const isValid = computed(() => {
  return formData.value.name.trim() !== '' && formData.value.fetchUrl.trim() !== ''
})

async function handleSubmit() {
  if (!isValid.value || submitting.value) return

  error.value = null
  submitting.value = true

  try {
    emit('submit', formData.value)
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to submit form'
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.remote-form {
  border: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg-tertiary);
  padding: var(--cg-space-4);
  margin-bottom: var(--cg-space-4);
}

.form-header {
  margin-bottom: var(--cg-space-4);
}

.form-body {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
  margin-bottom: var(--cg-space-4);
}

.form-error {
  padding: var(--cg-space-2) var(--cg-space-3);
  background: var(--cg-color-error-muted);
  border: 1px solid var(--cg-color-error);
  color: var(--cg-color-error);
  font-size: var(--cg-font-size-sm);
}

.form-actions {
  display: flex;
  gap: var(--cg-space-2);
}
</style>
