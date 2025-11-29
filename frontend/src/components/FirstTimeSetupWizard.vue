<template>
  <BaseModal
    title="WELCOME TO COMFYGIT"
    size="lg"
    :show-close-button="currentStep > 1"
    :close-on-overlay-click="false"
    @close="$emit('close')"
  >
    <template #body>
      <!-- Step Indicator -->
      <div class="wizard-steps">
        <div :class="['step', { active: currentStep === 1, complete: currentStep > 1 }]">
          <span class="step-number">{{ currentStep > 1 ? '✓' : '1' }}</span>
          <span class="step-label">Workspace</span>
        </div>
        <div class="step-connector"></div>
        <div :class="['step', { active: currentStep === 2 }]">
          <span class="step-number">2</span>
          <span class="step-label">Environment</span>
        </div>
      </div>

      <!-- Step 1: Workspace Setup -->
      <div v-if="currentStep === 1" class="wizard-step">
        <p class="wizard-intro">
          Let's set up your ComfyGit workspace. This is where your managed environments,
          workflows, and model index will be stored.
        </p>

        <div class="form-field">
          <label class="form-label">Workspace Path</label>
          <input
            v-model="workspacePath"
            type="text"
            class="form-input"
            :placeholder="defaultPath"
            @blur="validateWorkspacePath"
          />
          <p v-if="workspaceError" class="form-error">{{ workspaceError }}</p>
        </div>

        <div class="form-field form-field--checkbox">
          <label class="form-checkbox">
            <input type="checkbox" v-model="hasExistingModels" />
            <span>I have existing ComfyUI models</span>
          </label>
        </div>

        <div v-if="hasExistingModels" class="form-field">
          <label class="form-label">Models Directory</label>
          <input
            v-model="modelsPath"
            type="text"
            class="form-input"
            :placeholder="detectedModelsDir || '/path/to/models'"
            @blur="validateModelsPath"
          />
          <p v-if="detectedModelsDir && !modelsPath" class="form-info">
            Detected: {{ detectedModelsDir }}
          </p>
          <p v-if="modelsSuggestion" class="form-suggestion">
            Did you mean: {{ modelsSuggestion }}
          </p>
          <p v-if="modelsError" class="form-error">{{ modelsError }}</p>
          <p v-if="modelsCount !== null && !modelsError" class="form-info">
            Found {{ modelsCount }} model files
          </p>
        </div>

        <!-- Progress display during workspace creation -->
        <div v-if="isCreatingWorkspace" class="wizard-progress">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: `${initProgress.progress}%` }"></div>
          </div>
          <p class="progress-message">{{ initProgress.message }}</p>
        </div>
      </div>

      <!-- Step 2: Environment Creation -->
      <div v-if="currentStep === 2" class="wizard-step">
        <p class="wizard-intro">
          Now let's create your first managed environment. This will be an isolated
          ComfyUI installation with its own nodes and workflows.
        </p>

        <div class="form-field">
          <label class="form-label">Environment Name</label>
          <input
            v-model="envName"
            type="text"
            class="form-input"
            placeholder="my-new-env"
          />
        </div>

        <div class="form-field">
          <label class="form-label">Python Version</label>
          <select v-model="pythonVersion" class="form-select">
            <option v-for="v in PYTHON_VERSIONS" :key="v" :value="v">{{ v }}</option>
          </select>
        </div>

        <div class="form-field">
          <label class="form-label">ComfyUI Version</label>
          <select v-model="comfyUIVersion" class="form-select" :disabled="loadingReleases">
            <option v-for="r in releases" :key="r.tag_name" :value="r.tag_name">{{ r.name }}</option>
          </select>
        </div>

        <div class="form-field">
          <label class="form-label">PyTorch Backend</label>
          <select v-model="torchBackend" class="form-select">
            <option v-for="b in TORCH_BACKENDS" :key="b" :value="b">
              {{ b }}{{ b === 'auto' ? ' (detect GPU)' : '' }}
            </option>
          </select>
        </div>

        <div class="form-field form-field--checkbox">
          <label class="form-checkbox">
            <input type="checkbox" v-model="switchAfter" checked />
            <span>Switch to this environment after creation</span>
          </label>
        </div>

        <!-- Progress display during environment creation -->
        <div v-if="isCreatingEnvironment" class="wizard-progress">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: `${createProgress.progress}%` }"></div>
          </div>
          <p class="progress-message">{{ createProgress.message }}</p>
        </div>

        <div v-if="envCreateError" class="form-error">
          {{ envCreateError }}
        </div>
      </div>
    </template>

    <template #footer>
      <template v-if="currentStep === 1">
        <BaseButton
          variant="primary"
          :disabled="!canProceedStep1 || isCreatingWorkspace"
          @click="handleStep1Next"
        >
          {{ isCreatingWorkspace ? 'Creating...' : 'Next' }}
        </BaseButton>
      </template>

      <template v-else-if="currentStep === 2">
        <BaseButton variant="secondary" :disabled="isCreatingEnvironment" @click="currentStep = 1">
          Back
        </BaseButton>
        <BaseButton
          variant="primary"
          :disabled="!canProceedStep2 || isCreatingEnvironment"
          @click="handleStep2Create"
        >
          {{ isCreatingEnvironment ? 'Creating...' : 'Create & Switch' }}
        </BaseButton>
      </template>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { ComfyUIRelease, CreateEnvironmentRequest } from '@/types/comfygit'
import { PYTHON_VERSIONS, DEFAULT_PYTHON_VERSION, TORCH_BACKENDS, DEFAULT_TORCH_BACKEND } from '@/constants/environment'
import { useComfyGitService } from '@/composables/useComfyGitService'
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'

const props = defineProps<{
  defaultPath: string
  detectedModelsDir?: string | null
}>()

const emit = defineEmits<{
  complete: [environmentName: string]
  close: []
}>()

const {
  initializeWorkspace,
  getInitializeProgress,
  validatePath,
  createEnvironment,
  getCreateProgress,
  getComfyUIReleases
} = useComfyGitService()

// Step 1 state
const currentStep = ref(1)
const workspacePath = ref(props.defaultPath)
const hasExistingModels = ref(!!props.detectedModelsDir)
const modelsPath = ref(props.detectedModelsDir || '')
const workspaceError = ref<string | null>(null)
const modelsError = ref<string | null>(null)
const modelsSuggestion = ref<string | null>(null)
const modelsCount = ref<number | null>(null)

// Step 2 state
const envName = ref('my-new-env')
const pythonVersion = ref(DEFAULT_PYTHON_VERSION)
const comfyUIVersion = ref('latest')
const torchBackend = ref(DEFAULT_TORCH_BACKEND)
const switchAfter = ref(true)
const envCreateError = ref<string | null>(null)

// Releases loading
const releases = ref<ComfyUIRelease[]>([{ tag_name: 'latest', name: 'Latest', published_at: '' }])
const loadingReleases = ref(false)

// Progress state
const isCreatingWorkspace = ref(false)
const isCreatingEnvironment = ref(false)
const initProgress = ref({ progress: 0, message: '' })
const createProgress = ref({ progress: 0, message: '' })

// Polling safeguards
const MAX_FAILURES = 10
const STEP1_TIMEOUT_MS = 10 * 60 * 1000  // 10 minutes
const STEP2_TIMEOUT_MS = 30 * 60 * 1000  // 30 minutes (env creation can be slow)
const step1FailureCount = ref(0)
const step1StartTime = ref<number | null>(null)
const step2FailureCount = ref(0)
const step2StartTime = ref<number | null>(null)

// Validation
const canProceedStep1 = computed(() => {
  const hasPath = workspacePath.value?.trim()
  const noError = !workspaceError.value
  const modelsOk = !hasExistingModels.value || (!modelsError.value && modelsPath.value?.trim())
  return hasPath && noError && modelsOk
})

const canProceedStep2 = computed(() => {
  return envName.value?.trim()
})

async function validateWorkspacePath() {
  workspaceError.value = null
  if (!workspacePath.value?.trim()) return

  try {
    const result = await validatePath({ path: workspacePath.value, type: 'workspace' })
    if (!result.valid) {
      workspaceError.value = result.error || 'Invalid path'
    }
  } catch (err) {
    workspaceError.value = err instanceof Error ? err.message : 'Validation failed'
  }
}

async function validateModelsPath() {
  modelsError.value = null
  modelsSuggestion.value = null
  modelsCount.value = null

  if (!modelsPath.value?.trim()) return

  try {
    const result = await validatePath({ path: modelsPath.value, type: 'models' })
    if (!result.valid) {
      modelsError.value = result.error || 'Invalid path'
      if (result.suggestion) {
        modelsSuggestion.value = result.suggestion
        // Auto-apply suggestion
        modelsPath.value = result.suggestion
        modelsError.value = null
        // Re-validate with the suggestion
        const revalidate = await validatePath({ path: result.suggestion, type: 'models' })
        if (revalidate.valid) {
          modelsCount.value = revalidate.model_count ?? null
        }
      }
    } else {
      modelsCount.value = result.model_count ?? null
    }
  } catch (err) {
    modelsError.value = err instanceof Error ? err.message : 'Validation failed'
  }
}

// Step handlers
async function handleStep1Next() {
  // Clear any existing errors
  workspaceError.value = null
  modelsError.value = null

  // Pre-submit validation
  await validateWorkspacePath()
  if (workspaceError.value) return

  if (hasExistingModels.value && modelsPath.value?.trim()) {
    await validateModelsPath()
    if (modelsError.value) return
  }

  isCreatingWorkspace.value = true

  try {
    await initializeWorkspace({
      workspace_path: workspacePath.value?.trim() || props.defaultPath,
      models_directory: hasExistingModels.value ? (modelsPath.value?.trim() || null) : null
    })

    // Initialize polling safeguards
    step1FailureCount.value = 0
    step1StartTime.value = Date.now()

    // Poll for progress with safeguards
    const poll = setInterval(async () => {
      // Check overall timeout
      if (step1StartTime.value && Date.now() - step1StartTime.value > STEP1_TIMEOUT_MS) {
        clearInterval(poll)
        isCreatingWorkspace.value = false
        workspaceError.value = 'Workspace creation timed out. Please try again or check server logs.'
        return
      }

      try {
        const progress = await getInitializeProgress()
        step1FailureCount.value = 0  // Reset on success

        // Detect unexpected idle state (backend restarted)
        if (progress.state === 'idle' && isCreatingWorkspace.value) {
          clearInterval(poll)
          isCreatingWorkspace.value = false
          workspaceError.value = 'Workspace creation was interrupted. Please try again.'
          return
        }

        initProgress.value = { progress: progress.progress, message: progress.message }

        if (progress.state === 'complete') {
          clearInterval(poll)
          isCreatingWorkspace.value = false
          currentStep.value = 2
          loadReleases()
        } else if (progress.state === 'error') {
          clearInterval(poll)
          isCreatingWorkspace.value = false
          workspaceError.value = progress.error || 'Workspace creation failed'
        }
      } catch (err) {
        step1FailureCount.value++
        console.warn(`Polling failure ${step1FailureCount.value}/${MAX_FAILURES}:`, err)

        if (step1FailureCount.value >= MAX_FAILURES) {
          clearInterval(poll)
          isCreatingWorkspace.value = false
          workspaceError.value = 'Lost connection to server. Please refresh the page and try again.'
        }
      }
    }, 500)

  } catch (err) {
    isCreatingWorkspace.value = false
    workspaceError.value = err instanceof Error ? err.message : 'Failed to create workspace'
  }
}

async function handleStep2Create() {
  isCreatingEnvironment.value = true
  envCreateError.value = null

  try {
    const request: CreateEnvironmentRequest = {
      name: envName.value.trim() || 'my-new-env',
      python_version: pythonVersion.value,
      comfyui_version: comfyUIVersion.value,
      torch_backend: torchBackend.value,
      switch_after: switchAfter.value
    }

    const result = await createEnvironment(request)

    if (result.status === 'started') {
      // Initialize polling safeguards
      step2FailureCount.value = 0
      step2StartTime.value = Date.now()

      // Poll for progress with safeguards
      const poll = setInterval(async () => {
        // Check overall timeout
        if (step2StartTime.value && Date.now() - step2StartTime.value > STEP2_TIMEOUT_MS) {
          clearInterval(poll)
          isCreatingEnvironment.value = false
          envCreateError.value = 'Environment creation timed out. Check server logs for details.'
          return
        }

        try {
          const progress = await getCreateProgress()
          step2FailureCount.value = 0  // Reset on success

          // Detect unexpected idle state
          if (progress.state === 'idle' && isCreatingEnvironment.value) {
            clearInterval(poll)
            isCreatingEnvironment.value = false
            envCreateError.value = 'Environment creation was interrupted. Please try again.'
            return
          }

          createProgress.value = {
            progress: progress.state === 'creating' ? 50 : progress.state === 'complete' ? 100 : 0,
            message: progress.message
          }

          if (progress.state === 'complete') {
            clearInterval(poll)
            emit('complete', progress.environment_name || request.name)
          } else if (progress.state === 'error') {
            clearInterval(poll)
            isCreatingEnvironment.value = false
            envCreateError.value = progress.error || 'Environment creation failed'
          }
        } catch (err) {
          step2FailureCount.value++
          console.warn(`Polling failure ${step2FailureCount.value}/${MAX_FAILURES}:`, err)

          if (step2FailureCount.value >= MAX_FAILURES) {
            clearInterval(poll)
            isCreatingEnvironment.value = false
            envCreateError.value = 'Lost connection to server. Please refresh and try again.'
          }
        }
      }, 2000)
    }
  } catch (err) {
    isCreatingEnvironment.value = false
    envCreateError.value = err instanceof Error ? err.message : 'Unknown error'
  }
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

onMounted(() => {
  // Pre-fill models path if detected
  if (props.detectedModelsDir) {
    modelsPath.value = props.detectedModelsDir
  }
})
</script>

<style scoped>
.wizard-steps {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--cg-space-3);
  margin-bottom: var(--cg-space-6);
  padding: var(--cg-space-4) 0;
  border-bottom: 1px solid var(--cg-color-border-subtle);
}

.step {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  color: var(--cg-color-text-muted);
}

.step.active {
  color: var(--cg-color-accent);
}

.step.complete {
  color: var(--cg-color-success);
}

.step-number {
  width: 24px;
  height: 24px;
  border: 2px solid currentColor;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--cg-font-size-xs);
  font-weight: bold;
}

.step.active .step-number,
.step.complete .step-number {
  background: currentColor;
  color: var(--cg-color-bg-primary);
}

.step-label {
  font-size: var(--cg-font-size-sm);
  font-weight: 500;
}

.step-connector {
  width: 60px;
  height: 2px;
  background: var(--cg-color-border-subtle);
}

.wizard-step {
  min-height: 300px;
}

.wizard-intro {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
  line-height: 1.6;
  margin-bottom: var(--cg-space-4);
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
  margin-bottom: var(--cg-space-4);
}

.form-field--checkbox {
  flex-direction: row;
  align-items: center;
}

.form-label {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.form-input,
.form-select {
  background: var(--cg-color-bg-primary);
  border: 1px solid var(--cg-color-border-subtle);
  color: var(--cg-color-text-primary);
  padding: var(--cg-space-2) var(--cg-space-3);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
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

.form-error {
  color: var(--cg-color-error);
  font-size: var(--cg-font-size-xs);
  margin-top: var(--cg-space-1);
}

.form-info {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  margin-top: var(--cg-space-1);
}

.form-suggestion {
  color: var(--cg-color-accent);
  font-size: var(--cg-font-size-xs);
  margin-top: var(--cg-space-1);
}

.wizard-progress {
  margin-top: var(--cg-space-4);
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
}

.progress-bar {
  height: 6px;
  background: var(--cg-color-bg-primary);
  border: 1px solid var(--cg-color-border-subtle);
  margin-bottom: var(--cg-space-2);
}

.progress-fill {
  height: 100%;
  background: var(--cg-color-accent);
  transition: width 0.3s ease;
}

.progress-message {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
  text-align: center;
  margin: 0;
}
</style>
