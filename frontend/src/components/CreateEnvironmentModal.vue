<template>
  <BaseModal
    title="CREATE NEW ENVIRONMENT"
    size="sm"
    :show-close-button="!isCreating"
    @close="handleClose"
  >
    <template #body>
      <!-- Form (hidden during creation) -->
      <div v-if="!isCreating" class="create-env-form">
        <!-- Environment Name -->
        <div class="form-field">
          <label class="form-label">Name</label>
          <div class="input-wrapper">
            <input
              ref="nameInput"
              v-model="name"
              type="text"
              :class="['form-input', { error: !!nameError, valid: nameValid }]"
              placeholder="my-environment"
              @keyup.enter="handleCreate"
              @blur="handleNameBlur"
            />
            <span v-if="isValidatingName" class="validating-indicator">...</span>
            <span v-else-if="nameValid" class="valid-indicator">&#10003;</span>
          </div>
          <div v-if="nameError" class="field-error">{{ nameError }}</div>
          <div class="field-hint">Use letters, numbers, dots, hyphens, and underscores.</div>
        </div>

        <!-- Python Version -->
        <div class="form-field">
          <label class="form-label">Python Version</label>
          <select v-model="pythonVersion" class="form-select">
            <option v-for="version in PYTHON_VERSIONS" :key="version" :value="version">
              {{ version }}
            </option>
          </select>
        </div>

        <!-- ComfyUI Version -->
        <div class="form-field">
          <label class="form-label">ComfyUI Version</label>
          <select v-model="comfyUIVersion" class="form-select" :disabled="loadingReleases">
            <option v-for="release in releases" :key="release.tag_name" :value="release.tag_name">
              {{ release.name }}
            </option>
          </select>
        </div>

        <!-- Torch Backend -->
        <div class="form-field">
          <label class="form-label">PyTorch Backend</label>
          <select v-model="torchBackend" class="form-select">
            <option v-for="backend in TORCH_BACKENDS" :key="backend" :value="backend">
              {{ backend }}{{ backend === 'auto' ? ' (detect GPU)' : '' }}
            </option>
          </select>
        </div>

        <!-- Switch After Create -->
        <div class="form-field form-field--checkbox">
          <label class="form-checkbox">
            <input type="checkbox" v-model="switchAfter" />
            <span>Switch to this environment after creation</span>
          </label>
        </div>
      </div>

      <!-- Progress Display (shown during creation) -->
      <div v-else class="create-env-progress">
        <p class="creating-intro">
          Creating environment <strong>{{ name }}</strong>...
        </p>

        <TaskProgressDisplay
          :progress="createProgress.progress"
          :message="createProgress.message"
          :current-phase="createProgress.phase"
          :variant="createProgress.error ? 'error' : 'default'"
          :show-steps="true"
          :steps="creationSteps"
        />

        <p v-if="!createProgress.error" class="progress-warning">
          This may take several minutes. Please wait...
        </p>

        <div v-if="createProgress.error" class="create-error">
          <p class="error-message">{{ createProgress.error }}</p>
        </div>
      </div>
    </template>

    <template #footer>
      <!-- Form footer -->
      <template v-if="!isCreating">
        <BaseButton
          variant="primary"
          :disabled="!canCreate"
          @click="handleCreate"
        >
          Create
        </BaseButton>
        <BaseButton variant="secondary" @click="emit('close')">
          Cancel
        </BaseButton>
      </template>

      <!-- Progress footer -->
      <template v-else>
        <BaseButton
          v-if="createProgress.error"
          variant="secondary"
          @click="resetAndClose"
        >
          Close
        </BaseButton>
        <span v-else class="footer-status">
          Creating environment...
        </span>
      </template>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, onUnmounted, computed, watch } from 'vue'
import type { ComfyUIRelease, CreateEnvironmentRequest } from '@/types/comfygit'
import { PYTHON_VERSIONS, DEFAULT_PYTHON_VERSION, TORCH_BACKENDS, DEFAULT_TORCH_BACKEND } from '@/constants/environment'
import { useComfyGitService } from '@/composables/useComfyGitService'
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'
import TaskProgressDisplay from './base/molecules/TaskProgressDisplay.vue'

const emit = defineEmits<{
  close: []
  created: [environmentName: string, switchAfter: boolean]
}>()

const { getComfyUIReleases, createEnvironment, getCreateProgress, validateEnvironmentName } = useComfyGitService()

// Form state
const name = ref('')
const pythonVersion = ref(DEFAULT_PYTHON_VERSION)
const comfyUIVersion = ref('latest')
const torchBackend = ref(DEFAULT_TORCH_BACKEND)
const switchAfter = ref(false)

// Name validation state
const nameError = ref<string | null>(null)
const isValidatingName = ref(false)
const nameValid = ref(false)
let nameValidationDebounceTimer: ReturnType<typeof setTimeout> | null = null
let latestNameValidationToken = 0

const canCreate = computed(() => {
  return !!name.value.trim() && nameValid.value && !nameError.value && !isValidatingName.value && !isCreating.value
})

// Releases loading
const releases = ref<ComfyUIRelease[]>([{ tag_name: 'latest', name: 'Latest', published_at: '' }])
const loadingReleases = ref(false)

// Progress state
const isCreating = ref(false)
const createProgress = ref<{ progress: number; message: string; phase?: string; error?: string }>({
  progress: 0,
  message: ''
})

// Polling
let pollInterval: number | null = null
const MAX_POLL_FAILURES = 10
let pollFailures = 0

// Creation steps (matches core library phases)
const creationSteps = [
  { id: 'init_structure', label: 'Initialize structure', progressThreshold: 5 },
  { id: 'resolve_version', label: 'Resolve ComfyUI version', progressThreshold: 10 },
  { id: 'clone_comfyui', label: 'Clone/restore ComfyUI', progressThreshold: 25 },
  { id: 'configure_environment', label: 'Configure environment', progressThreshold: 30 },
  { id: 'create_venv', label: 'Create virtual environment', progressThreshold: 35 },
  { id: 'install_pytorch', label: 'Install PyTorch', progressThreshold: 70 },
  { id: 'configure_pytorch', label: 'Configure PyTorch', progressThreshold: 75 },
  { id: 'install_dependencies', label: 'Install dependencies', progressThreshold: 95 },
  { id: 'finalize', label: 'Finalize environment', progressThreshold: 100 },
]

// Input ref for autofocus
const nameInput = ref<HTMLInputElement | null>(null)

watch(name, (nextName) => {
  nameValid.value = false

  if (nameValidationDebounceTimer) {
    clearTimeout(nameValidationDebounceTimer)
    nameValidationDebounceTimer = null
  }

  const trimmed = nextName.trim()
  if (!trimmed) {
    nameError.value = null
    isValidatingName.value = false
    return
  }

  isValidatingName.value = true
  nameValidationDebounceTimer = setTimeout(() => {
    void validateName(trimmed)
  }, 400)
})

async function validateName(rawName: string, forceRequiredError = false): Promise<boolean> {
  const trimmed = rawName.trim()
  if (!trimmed) {
    nameValid.value = false
    isValidatingName.value = false
    nameError.value = forceRequiredError ? 'Environment name is required' : null
    return false
  }

  const token = ++latestNameValidationToken
  isValidatingName.value = true

  try {
    const result = await validateEnvironmentName(trimmed)

    // Ignore stale validation responses
    if (token !== latestNameValidationToken) {
      return false
    }

    nameError.value = result.valid ? null : (result.error || 'Invalid name')
    nameValid.value = !!result.valid
    return !!result.valid
  } catch {
    if (token !== latestNameValidationToken) {
      return false
    }

    nameError.value = 'Failed to validate name'
    nameValid.value = false
    return false
  } finally {
    if (token === latestNameValidationToken) {
      isValidatingName.value = false
    }
  }
}

async function handleNameBlur() {
  if (nameValidationDebounceTimer) {
    clearTimeout(nameValidationDebounceTimer)
    nameValidationDebounceTimer = null
  }
  await validateName(name.value, true)
}

function handleClose() {
  if (!isCreating.value) {
    emit('close')
  }
}

async function handleCreate() {
  const trimmedName = name.value.trim()
  if (!trimmedName) {
    nameError.value = 'Environment name is required'
    return
  }

  if (nameValidationDebounceTimer) {
    clearTimeout(nameValidationDebounceTimer)
    nameValidationDebounceTimer = null
  }

  const isNameValid = await validateName(trimmedName, true)
  if (!isNameValid) {
    return
  }

  isCreating.value = true
  createProgress.value = { progress: 0, message: 'Starting...', phase: 'init' }

  try {
    const request: CreateEnvironmentRequest = {
      name: trimmedName,
      python_version: pythonVersion.value,
      comfyui_version: comfyUIVersion.value,
      torch_backend: torchBackend.value,
      switch_after: false  // We'll handle switch in parent after modal closes
    }

    const result = await createEnvironment(request)

    if (result.status === 'started') {
      startPolling()
    } else if (result.status === 'error') {
      createProgress.value = {
        progress: 0,
        message: result.message || 'Failed to start creation',
        error: result.message
      }
    }
  } catch (err) {
    createProgress.value = {
      progress: 0,
      message: err instanceof Error ? err.message : 'Unknown error',
      error: err instanceof Error ? err.message : 'Unknown error'
    }
  }
}

function startPolling() {
  if (pollInterval) return
  pollFailures = 0

  pollInterval = window.setInterval(async () => {
    try {
      const progress = await getCreateProgress()
      pollFailures = 0  // Reset on success

      createProgress.value = {
        progress: progress.progress ?? 0,
        message: progress.message,
        phase: progress.phase,
        error: progress.error
      }

      if (progress.state === 'complete') {
        stopPolling()
        emit('created', progress.environment_name || name.value.trim(), switchAfter.value)
      } else if (progress.state === 'error') {
        stopPolling()
        createProgress.value.error = progress.error || progress.message
      } else if (progress.state === 'idle' && isCreating.value) {
        stopPolling()
        createProgress.value.error = 'Creation was interrupted. Please try again.'
      }
    } catch {
      pollFailures++
      if (pollFailures >= MAX_POLL_FAILURES) {
        stopPolling()
        createProgress.value.error = 'Lost connection to server.'
      }
    }
  }, 2000)
}

function stopPolling() {
  if (pollInterval) {
    clearInterval(pollInterval)
    pollInterval = null
  }
}

function resetAndClose() {
  isCreating.value = false
  createProgress.value = { progress: 0, message: '' }
  emit('close')
}

async function loadReleases() {
  loadingReleases.value = true
  try {
    releases.value = await getComfyUIReleases()
  } catch (err) {
    console.error('Failed to load ComfyUI releases:', err)
  } finally {
    loadingReleases.value = false
  }
}

onMounted(async () => {
  await nextTick()
  nameInput.value?.focus()
  loadReleases()
})

onUnmounted(() => {
  stopPolling()
  if (nameValidationDebounceTimer) {
    clearTimeout(nameValidationDebounceTimer)
    nameValidationDebounceTimer = null
  }
})
</script>

<style scoped>
.create-env-form {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
}

.form-field--checkbox {
  flex-direction: row;
  align-items: center;
  margin-top: var(--cg-space-2);
}

.form-label {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.form-input,
.form-select {
  width: 100%;
  background: var(--cg-color-bg-primary);
  border: 1px solid var(--cg-color-border-subtle);
  color: var(--cg-color-text-primary);
  padding: var(--cg-space-2) var(--cg-space-3);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
}

.form-input {
  padding-right: var(--cg-space-8);
}

.form-input:hover,
.form-select:hover {
  border-color: var(--cg-color-border);
}

.form-input:focus,
.form-select:focus {
  outline: none;
  border-color: var(--cg-color-accent);
}

.form-input.error {
  border-color: var(--cg-color-error);
}

.form-input.valid {
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

.form-select {
  cursor: pointer;
}

.form-select:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.form-checkbox {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  cursor: pointer;
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
}

.form-checkbox input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: var(--cg-color-accent);
  cursor: pointer;
}

.creating-intro {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
  margin-bottom: var(--cg-space-4);
  text-align: center;
}

.progress-warning {
  margin-top: var(--cg-space-3);
  padding: var(--cg-space-2) var(--cg-space-3);
  background: var(--cg-color-info-muted);
  border: 1px solid var(--cg-color-info);
  border-radius: var(--cg-radius-sm);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-info);
  text-align: center;
}

.create-error {
  margin-top: var(--cg-space-3);
  padding: var(--cg-space-3);
  background: var(--cg-color-error-muted);
  border: 1px solid var(--cg-color-error);
  border-radius: var(--cg-radius-sm);
}

.error-message {
  color: var(--cg-color-error);
  font-size: var(--cg-font-size-sm);
  margin: 0;
}

.footer-status {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
}
</style>
