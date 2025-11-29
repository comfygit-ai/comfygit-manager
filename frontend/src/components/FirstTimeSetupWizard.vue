<template>
  <BaseModal
    title="WELCOME TO COMFYGIT"
    size="lg"
    :show-close-button="true"
    :close-on-overlay-click="false"
    @close="$emit('close')"
  >
    <template #body>
      <!-- Step Indicator - full 2-step for no_workspace, single step otherwise -->
      <div v-if="props.setupState === 'no_workspace'" class="wizard-steps">
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
      <div v-else class="wizard-steps wizard-steps--single">
        <div class="step active">
          <span class="step-number">1</span>
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
        <TaskProgressDisplay
          v-if="isCreatingWorkspace"
          :progress="initProgress.progress"
          :message="initProgress.message"
        />
      </div>

      <!-- Step 2: Environment Creation -->
      <div v-if="currentStep === 2" class="wizard-step">
        <!-- CLI Warning Banner -->
        <div v-if="!props.cliInstalled" class="cli-warning">
          <div class="cli-warning-header">
            <span class="cli-warning-icon">!</span>
            <span class="cli-warning-title">ComfyGit CLI Not Installed</span>
          </div>
          <p class="cli-warning-text">
            To start managed environments from the command line, you'll need the ComfyGit CLI.
            This is required to restart ComfyUI in managed mode after switching environments.
          </p>
          <div class="cli-warning-commands">
            <code>pipx install comfygit</code>
            <span class="cli-warning-or">or</span>
            <code>uv tool install comfygit</code>
          </div>
        </div>

        <!-- Environment Selection (for unmanaged state with existing envs) -->
        <div v-if="props.existingEnvironments?.length && !showCreateForm" class="env-selection">
          <p class="wizard-intro">
            You have existing managed environments. Switch to one, or create a new environment:
          </p>

          <div class="env-list">
            <label
              v-for="env in props.existingEnvironments"
              :key="env"
              class="env-option"
              :class="{ selected: selectedEnv === env }"
            >
              <input
                type="radio"
                name="env-select"
                :value="env"
                v-model="selectedEnv"
              />
              <span class="env-name">{{ env }}</span>
            </label>
          </div>

          <div class="env-actions">
            <BaseButton
              v-if="selectedEnv"
              variant="primary"
              @click="handleSwitchToExisting"
            >
              Switch to {{ selectedEnv }}
            </BaseButton>
            <BaseButton
              variant="secondary"
              @click="showCreateForm = true"
            >
              + Create New Environment
            </BaseButton>
          </div>
        </div>

        <!-- Create Environment Form -->
        <div v-if="showCreateForm || !props.existingEnvironments?.length">
          <p class="wizard-intro">
            {{ props.existingEnvironments?.length ? 'Create a new managed environment:' : 'Now let\'s create your first managed environment. This will be an isolated ComfyUI installation with its own nodes and workflows.' }}
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
              <input type="checkbox" v-model="switchAfter" />
              <span>Switch to this environment after creation</span>
            </label>
          </div>

          <!-- Progress display during environment creation -->
          <TaskProgressDisplay
            v-if="isCreatingEnvironment"
            :progress="createProgress.progress"
            :message="createProgress.message"
            :current-phase="createProgress.phase"
            :show-steps="true"
            :steps="environmentCreationSteps"
          />

          <div v-if="envCreateError" class="form-error">
            {{ envCreateError }}
          </div>
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
        <!-- Back button: only for no_workspace or when create form is shown for unmanaged -->
        <BaseButton
          v-if="props.setupState === 'no_workspace'"
          variant="secondary"
          :disabled="isCreatingEnvironment"
          @click="currentStep = 1"
        >
          Back
        </BaseButton>
        <BaseButton
          v-else-if="props.existingEnvironments?.length && showCreateForm"
          variant="secondary"
          :disabled="isCreatingEnvironment"
          @click="showCreateForm = false"
        >
          Back
        </BaseButton>

        <!-- Create button: only show when in create mode -->
        <BaseButton
          v-if="showCreateForm || !props.existingEnvironments?.length"
          variant="primary"
          :disabled="!canProceedStep2 || isCreatingEnvironment"
          @click="handleStep2Create"
        >
          {{ isCreatingEnvironment ? 'Creating...' : (switchAfter ? 'Create & Switch' : 'Create Environment') }}
        </BaseButton>
      </template>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { ComfyUIRelease, CreateEnvironmentRequest, SetupState } from '@/types/comfygit'
import { PYTHON_VERSIONS, DEFAULT_PYTHON_VERSION, TORCH_BACKENDS, DEFAULT_TORCH_BACKEND } from '@/constants/environment'
import { useComfyGitService } from '@/composables/useComfyGitService'
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'
import TaskProgressDisplay from './base/molecules/TaskProgressDisplay.vue'

const props = defineProps<{
  defaultPath: string
  detectedModelsDir?: string | null
  initialStep?: 1 | 2
  existingEnvironments?: string[]
  cliInstalled?: boolean
  setupState: SetupState
}>()

const emit = defineEmits<{
  complete: [environmentName: string]
  close: []
  'switch-environment': [environmentName: string]
  'environment-created-no-switch': [environmentName: string]
}>()

const {
  initializeWorkspace,
  getInitializeProgress,
  validatePath,
  createEnvironment,
  getCreateProgress,
  getComfyUIReleases
} = useComfyGitService()

// Step state
const currentStep = ref(props.initialStep || 1)
const selectedEnv = ref<string | null>(null)
const showCreateForm = ref(false)

// Step 1 state
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
const createProgress = ref<{ progress: number; message: string; phase?: string }>({ progress: 0, message: '' })

// Environment creation steps (matches core library phases)
const environmentCreationSteps = [
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
            progress: progress.progress ?? 0,
            message: progress.message,
            phase: progress.phase
          }

          if (progress.state === 'complete') {
            clearInterval(poll)
            isCreatingEnvironment.value = false
            const envName = progress.environment_name || request.name
            if (switchAfter.value) {
              emit('complete', envName)
            } else {
              // Return to environment selection view with new env in list
              showCreateForm.value = false
              emit('environment-created-no-switch', envName)
            }
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

function handleSwitchToExisting() {
  if (!selectedEnv.value) return
  emit('switch-environment', selectedEnv.value)
}

onMounted(() => {
  // Pre-fill models path if detected
  if (props.detectedModelsDir) {
    modelsPath.value = props.detectedModelsDir
  }

  // Load releases if starting at step 2
  if (currentStep.value === 2) {
    loadReleases()
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

/* Single step indicator styling */
.wizard-steps--single {
  justify-content: center;
}

.wizard-steps--single .step-connector {
  display: none;
}

/* CLI Warning Banner */
.cli-warning {
  background: rgba(255, 193, 7, 0.1);
  border: 1px solid var(--cg-color-warning);
  border-radius: var(--cg-radius-md);
  padding: var(--cg-space-3);
  margin-bottom: var(--cg-space-4);
}

.cli-warning-header {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  margin-bottom: var(--cg-space-2);
}

.cli-warning-icon {
  color: var(--cg-color-warning);
  font-size: var(--cg-font-size-lg);
  font-weight: bold;
}

.cli-warning-title {
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-text-primary);
}

.cli-warning-text {
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
  margin: 0 0 var(--cg-space-2) 0;
  line-height: 1.5;
}

.cli-warning-commands {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  flex-wrap: wrap;
}

.cli-warning-commands code {
  background: var(--cg-color-bg-primary);
  padding: var(--cg-space-1) var(--cg-space-2);
  border-radius: var(--cg-radius-sm);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
}

.cli-warning-or {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
}

/* Environment Selection */
.env-selection {
  margin-bottom: var(--cg-space-4);
}

.env-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
  margin: var(--cg-space-3) 0;
}

.env-option {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-2) var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border-subtle);
  border-radius: var(--cg-radius-sm);
  cursor: pointer;
  transition: all var(--cg-transition-fast);
}

.env-option:hover {
  border-color: var(--cg-color-border);
}

.env-option.selected {
  border-color: var(--cg-color-accent);
  background: var(--cg-color-bg-tertiary);
}

.env-option input[type="radio"] {
  accent-color: var(--cg-color-accent);
}

.env-name {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-primary);
}

.env-actions {
  display: flex;
  gap: var(--cg-space-2);
  margin-top: var(--cg-space-3);
}
</style>
