<template>
  <div class="branch-create-form">
    <TextInput
      v-model="branchName"
      placeholder="Branch name..."
      :auto-focus="true"
      @enter="handleCreate"
      @escape="handleCancel"
    />
    <div class="form-actions">
      <ActionButton
        variant="primary"
        size="sm"
        :disabled="!isValid"
        @click="handleCreate"
      >
        Create
      </ActionButton>
      <ActionButton
        variant="secondary"
        size="sm"
        @click="handleCancel"
      >
        Cancel
      </ActionButton>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * BranchCreateForm Molecule
 *
 * Form for creating a new git branch with validation
 *
 * Composes: TextInput and ActionButton atoms
 * Provides: Branch creation interface with validation
 *
 * @example
 * <BranchCreateForm
 *   @create="handleBranchCreate"
 *   @cancel="hideForm"
 * />
 */

import { ref, computed } from 'vue'
import TextInput from '../atoms/TextInput.vue'
import ActionButton from '../atoms/ActionButton.vue'

const emit = defineEmits<{
  create: [name: string]
  cancel: []
}>()

const branchName = ref('')

const isValid = computed(() => {
  const trimmed = branchName.value.trim()
  // Basic git branch name validation
  return trimmed.length > 0 &&
         !trimmed.startsWith('-') &&
         !trimmed.endsWith('.lock') &&
         !/[\s~^:?*\[\\]/.test(trimmed)
})

function handleCreate() {
  if (isValid.value) {
    emit('create', branchName.value.trim())
    branchName.value = ''
  }
}

function handleCancel() {
  branchName.value = ''
  emit('cancel')
}
</script>

<style scoped>
.branch-create-form {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
  padding: var(--cg-space-3);
  margin-bottom: var(--cg-space-3);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
}

.form-actions {
  display: flex;
  gap: var(--cg-space-2);
}
</style>
