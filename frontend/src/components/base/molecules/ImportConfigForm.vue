<template>
  <div class="import-config">
    <SectionTitle>Configuration</SectionTitle>

    <div class="config-container">
      <!-- Environment Name -->
      <div class="config-field">
        <Label required>Environment Name</Label>
        <div class="input-wrapper">
          <input
            type="text"
            class="name-input"
            :class="{ error: nameError, valid: nameValid }"
            :value="name"
            placeholder="my-imported-env"
            @input="handleNameInput"
            @blur="validateName"
          />
          <span v-if="isValidating" class="validating-indicator">...</span>
          <span v-else-if="nameValid" class="valid-indicator">&#10003;</span>
        </div>
        <div v-if="nameError" class="field-error">{{ nameError }}</div>
        <div class="field-hint">Creates a new environment with this name</div>
      </div>

      <!-- Model Strategy -->
      <div class="config-field">
        <Label>Model Download Strategy</Label>
        <div class="strategy-options">
          <label
            v-for="strategy in strategies"
            :key="strategy.value"
            :class="['strategy-option', { active: modelStrategy === strategy.value }]"
          >
            <input
              type="radio"
              name="model-strategy"
              :value="strategy.value"
              :checked="modelStrategy === strategy.value"
              @change="emit('update:modelStrategy', strategy.value)"
            />
            <div class="strategy-content">
              <span class="strategy-label">{{ strategy.label }}</span>
              <span class="strategy-description">{{ strategy.description }}</span>
            </div>
          </label>
        </div>
      </div>

      <!-- Switch After Import -->
      <div class="config-field switch-field">
        <label class="switch-label">
          <input
            type="checkbox"
            :checked="switchAfterImport"
            @change="emit('update:switchAfterImport', ($event.target as HTMLInputElement).checked)"
          />
          <span>Switch to this environment after import</span>
        </label>
      </div>

      <!-- Advanced Options -->
      <details class="advanced-section">
        <summary class="advanced-toggle">Advanced Options</summary>
        <div class="advanced-content">
          <div class="config-field">
            <Label>PyTorch Backend</Label>
            <select
              class="backend-select"
              :value="torchBackend"
              @change="emit('update:torchBackend', ($event.target as HTMLSelectElement).value)"
            >
              <option v-for="backend in TORCH_BACKENDS" :key="backend" :value="backend">
                {{ backend }}{{ backend === 'auto' ? ' (detect GPU)' : '' }}
              </option>
            </select>
          </div>
        </div>
      </details>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import SectionTitle from '@/components/base/atoms/SectionTitle.vue'
import Label from '@/components/base/atoms/Label.vue'
import { TORCH_BACKENDS } from '@/constants/environment'

const props = defineProps<{
  name: string
  modelStrategy: 'all' | 'required' | 'skip'
  torchBackend: string
  switchAfterImport: boolean
  nameError: string | null
}>()

const emit = defineEmits<{
  'update:name': [value: string]
  'update:modelStrategy': [value: 'all' | 'required' | 'skip']
  'update:torchBackend': [value: string]
  'update:switchAfterImport': [value: boolean]
  'validate-name': [name: string]
}>()

const isValidating = ref(false)
const nameValid = ref(false)

// Watch for external nameError changes to update valid state
watch(() => props.nameError, (error) => {
  isValidating.value = false
  nameValid.value = !error && props.name.length > 0
})

const strategies = [
  {
    value: 'all' as const,
    label: 'Download All',
    description: 'Download all models with available sources'
  },
  {
    value: 'required' as const,
    label: 'Required Only',
    description: 'Only download models marked as required in workflows'
  },
  {
    value: 'skip' as const,
    label: 'Skip Downloads',
    description: "Don't download any models now (resolve later)"
  }
]

let debounceTimer: ReturnType<typeof setTimeout> | null = null

function handleNameInput(event: Event) {
  const value = (event.target as HTMLInputElement).value
  emit('update:name', value)
  nameValid.value = false

  // Debounce validation
  if (debounceTimer) clearTimeout(debounceTimer)
  if (value.length > 0) {
    isValidating.value = true
    debounceTimer = setTimeout(() => {
      emit('validate-name', value)
    }, 400)
  } else {
    isValidating.value = false
  }
}

function validateName() {
  if (props.name.length > 0) {
    emit('validate-name', props.name)
  }
}
</script>

<style scoped>
.import-config {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  padding: var(--cg-space-4);
}

.config-container {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
  margin-top: var(--cg-space-3);
}

.config-field {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.name-input {
  width: 100%;
  padding: var(--cg-space-2) var(--cg-space-3);
  padding-right: var(--cg-space-8);
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-base);
  font-family: var(--cg-font-mono);
}

.name-input:focus {
  outline: none;
  border-color: var(--cg-color-accent);
}

.name-input.error {
  border-color: var(--cg-color-error);
}

.name-input.valid {
  border-color: var(--cg-color-success);
}

.validating-indicator,
.valid-indicator {
  position: absolute;
  right: var(--cg-space-3);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
}

.valid-indicator {
  color: var(--cg-color-success);
}

.field-error {
  color: var(--cg-color-error);
  font-size: var(--cg-font-size-sm);
}

.field-hint {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
}

.strategy-options {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.strategy-option {
  display: flex;
  align-items: flex-start;
  gap: var(--cg-space-2);
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border-subtle);
  cursor: pointer;
  transition: all var(--cg-transition-fast);
}

.strategy-option:hover {
  background: var(--cg-color-bg-hover);
  border-color: var(--cg-color-border);
}

.strategy-option.active {
  border-color: var(--cg-color-accent);
  background: var(--cg-color-accent-muted);
}

.strategy-option input[type="radio"] {
  margin-top: 2px;
  flex-shrink: 0;
  cursor: pointer;
  accent-color: var(--cg-color-accent);
}

.strategy-content {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
  flex: 1;
}

.strategy-label {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-base);
  font-weight: var(--cg-font-weight-medium);
}

.strategy-description {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
}

.advanced-section {
  border: 1px solid var(--cg-color-border-subtle);
  background: var(--cg-color-bg-secondary);
}

.advanced-toggle {
  padding: var(--cg-space-3);
  cursor: pointer;
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
}

.advanced-toggle:hover {
  color: var(--cg-color-text-primary);
}

.advanced-content {
  padding: var(--cg-space-3);
  padding-top: 0;
}

.backend-select {
  width: 100%;
  padding: var(--cg-space-2) var(--cg-space-3);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-base);
  cursor: pointer;
}

.backend-select:focus {
  outline: none;
  border-color: var(--cg-color-accent);
}

/* Switch Field */
.switch-field {
  padding-top: var(--cg-space-2);
}

.switch-label {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  cursor: pointer;
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
}

.switch-label input[type="checkbox"] {
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: var(--cg-color-accent);
}
</style>
