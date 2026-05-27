<template>
  <BaseModal
    size="lg"
    :show-close-button="false"
    :close-on-overlay-click="false"
    @close="$emit('close')"
  >
    <!-- Custom header with social buttons and settings -->
    <template #header>
      <h3 class="base-modal-title">WELCOME TO COMFYGIT</h3>
      <div class="header-actions">
        <!-- Social links -->
        <SocialButtons />

        <span class="header-divider"></span>

        <!-- Settings button: show when workspace exists (step 2, or step 1 after workspace created) -->
        <button
          v-if="showSettingsButton"
          class="icon-btn settings-btn"
          title="Workspace Settings"
          @click="showSettingsModal = true"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
        </button>
        <button class="icon-btn" @click="$emit('close')" title="Close">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z"/>
          </svg>
        </button>
      </div>
    </template>

    <template #body>
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

      <!-- Step 2: Environment Setup -->
      <div v-if="currentStep === 2" class="wizard-step">
        <!-- Loading state while checking for in-progress operations -->
        <div v-if="isCheckingProgress" class="progress-check-loading">
          <div class="loading-spinner"></div>
          <div class="loading-text">Checking for in-progress operations...</div>
        </div>

        <template v-else>
        <!-- CLI Warning Banner -->
        <div v-if="!props.cliInstalled && !cliWarningDismissed" class="cli-warning">
          <div class="cli-warning-header">
            <span class="cli-warning-icon">!</span>
            <span class="cli-warning-title">ComfyGit CLI Not Installed</span>
            <button class="cli-warning-close" @click="cliWarningDismissed = true" title="Dismiss">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <path d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z"/>
              </svg>
            </button>
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

        <!-- Landing Mode (new default) -->
        <div v-if="wizardMode === 'landing'" class="env-landing">
          <p class="wizard-intro">
            Now let's set up your first environment.
          </p>

          <!-- Create Button -->
          <button class="landing-option" @click="wizardMode = 'create'">
            <span class="option-icon">➕</span>
            <div class="option-content">
              <span class="option-title">Create New Environment</span>
              <span class="option-description">Start fresh with a new ComfyUI installation</span>
            </div>
            <span class="option-arrow">▸</span>
          </button>

          <!-- Import Button -->
          <button class="landing-option" @click="resumingImport = false; wizardMode = 'import'">
            <span class="option-icon">📦</span>
            <div class="option-content">
              <span class="option-title">Import Environment</span>
              <span class="option-description">From exported bundle (.tar.gz) or git repository</span>
            </div>
            <span class="option-arrow">▸</span>
          </button>

          <!-- Import Current Button (unmanaged local adoption path) -->
          <button
            v-if="props.setupState === 'unmanaged' || props.setupState === 'empty_workspace'"
            class="landing-option"
            @click="openCurrentImport"
          >
            <span class="option-icon">↳</span>
            <div class="option-content">
              <span class="option-title">Import Current Environment</span>
              <span class="option-description">Create a managed copy from this running ComfyUI install</span>
            </div>
            <span class="option-arrow">▸</span>
          </button>

          <!-- Existing Environments (if any) -->
          <template v-if="props.existingEnvironments?.length">
            <div class="landing-divider">
              <span>or switch to existing</span>
            </div>
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
          </template>
        </div>

        <!-- Create Mode -->
        <div v-else-if="wizardMode === 'create'" class="env-create">
          <!-- Form (only when not creating) -->
          <template v-if="!isCreatingEnvironment">
            <p class="wizard-intro">
              Create a new managed environment:
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

            <div v-if="envCreateError" class="form-error">
              {{ envCreateError }}
            </div>
          </template>

          <!-- Progress display (only when creating) -->
          <div v-else class="env-creating">
            <p class="creating-intro">
              Creating environment <strong>{{ envName }}</strong>...
            </p>

            <TaskProgressDisplay
              :progress="createProgress.progress"
              :message="createProgress.message"
              :current-phase="createProgress.phase"
              :show-steps="true"
              :steps="environmentCreationSteps"
            />

            <p class="progress-warning">
              This may take several minutes. Please wait...
            </p>
          </div>
        </div>

        <!-- Import Mode -->
        <div v-else-if="wizardMode === 'import'" class="env-import">
          <ImportFlow
            :workspace-path="createdWorkspacePath"
            :resume-import="resumingImport"
            :initial-progress="detectedImportProgress ?? undefined"
            @import-complete="handleImportComplete"
            @import-started="isImporting = true"
            @source-cleared="handleImportCleared"
          />
        </div>

        <!-- Import Current Mode -->
        <div v-else-if="wizardMode === 'import-current'" class="env-import-current">
          <div v-if="!isImporting" class="import-stepper" aria-label="Import current environment steps">
            <div :class="['import-step', { active: currentImportStep === 'review', complete: currentImportStep === 'configure' }]">
              <span class="step-index">1</span>
              <span>Review</span>
            </div>
            <div :class="['import-step', { active: currentImportStep === 'configure' }]">
              <span class="step-index">2</span>
              <span>Configure</span>
            </div>
          </div>

          <div v-if="isLoadingCurrentImportPreview" class="progress-check-loading">
            <div class="loading-spinner"></div>
            <div class="loading-text">Scanning current ComfyUI install...</div>
          </div>

          <template v-else-if="!isImporting">
            <template v-if="currentImportStep === 'review'">
              <ImportPreview
                v-if="currentImportPreview"
                :source-environment="currentImportPreviewData.sourceEnvironment"
                :source-path="currentImportPreviewData.sourcePath"
                :workflows="currentImportPreviewData.workflows"
                :models="currentImportPreviewData.models"
                :nodes="currentImportPreviewData.nodes"
                :git-branch="currentImportPreviewData.gitBranch"
                :git-commit="currentImportPreviewData.gitCommit"
                :warnings="currentImportPreviewData.warnings"
                :models-unavailable="currentImportPreviewData.modelsUnavailable"
                :model-availability-unavailable="true"
                :panel-scroll="false"
                :show-manifest="false"
              />
            </template>

            <div v-if="currentImportError" class="form-error">
              {{ currentImportError }}
            </div>

            <template v-if="currentImportStep === 'configure' && currentImportPreview">
              <div class="current-import-configure-frame">
                <div class="current-import-summary">
                  <div>
                    <span class="summary-label">Source</span>
                    <span class="summary-value">{{ currentImportPreview.source_path }}</span>
                  </div>
                  <div>
                    <span class="summary-label">Preview</span>
                    <span class="summary-value">
                      {{ currentImportPreview.total_workflows }} workflows,
                      {{ currentImportPreview.total_custom_nodes }} custom nodes,
                      {{ currentImportPreview.total_model_references ?? currentImportPreview.model_references?.length ?? 0 }} model refs
                    </span>
                  </div>
                </div>

                <ImportConfigForm
                  v-model:name="envName"
                  v-model:model-strategy="currentImportModelStrategy"
                  v-model:torch-backend="torchBackend"
                  v-model:switch-after-import="switchAfter"
                  :name-error="currentImportNameError"
                  :show-model-strategy="false"
                  @validate-name="handleValidateCurrentImportName"
                />
              </div>
            </template>
          </template>

          <div v-else class="env-creating">
            <p class="creating-intro">
              Importing current ComfyUI as <strong>{{ envName }}</strong>...
            </p>

            <LifecycleProgressDisplay
              :state="currentImportProgress.phase || 'importing'"
              :progress="currentImportProgress.progress"
              :state-label="currentImportProgress.message"
              :steps="currentImportLifecycleSteps"
              :logs="currentImportLogs"
              log-title="Import log"
              active-message="This may take several minutes. Please wait..."
              complete-message="Environment import completed. Copy logs if needed before closing."
              error-message="Environment import failed. Review logs for details."
            />
          </div>
        </div>
        </template>
      </div>
    </template>

    <template #footer>
      <div class="wizard-footer">
        <!-- Version and made by info -->
        <FooterInfo />

        <!-- Action buttons -->
        <div class="wizard-footer-actions">
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
            <!-- Back button: hide entirely during creation/import, and hide at landing if workspace already created -->
            <BaseButton
              v-if="!isCreatingEnvironment && !isImporting && (wizardMode !== 'landing' || (props.setupState === 'no_workspace' && !createdWorkspacePath))"
              variant="secondary"
              @click="handleBack"
            >
              Back
            </BaseButton>

            <!-- Create button (only in create mode) -->
            <BaseButton
              v-if="wizardMode === 'create'"
              variant="primary"
              :disabled="!canProceedStep2 || isCreatingEnvironment"
              @click="handleStep2Create"
            >
              {{ isCreatingEnvironment ? 'Creating...' : (switchAfter ? 'Create & Switch' : 'Create Environment') }}
            </BaseButton>

            <!-- Switch to existing button (only in landing mode with selection) -->
            <BaseButton
              v-if="wizardMode === 'landing' && selectedEnv"
              variant="primary"
              @click="handleSwitchToExisting"
            >
              Switch to {{ selectedEnv }}
            </BaseButton>

            <!-- Import mode has its own buttons in ImportFlow -->
            <BaseButton
              v-if="wizardMode === 'import-current' && !isImporting && currentImportStep === 'review'"
              variant="primary"
              :disabled="!canContinueCurrentImportReview"
              @click="currentImportStep = 'configure'"
            >
              Continue
            </BaseButton>

            <BaseButton
              v-if="wizardMode === 'import-current' && !isImporting && currentImportStep === 'configure'"
              variant="primary"
              :disabled="!canStartCurrentImport"
              @click="handleStartCurrentImport"
            >
              {{ switchAfter ? 'Import & Switch' : 'Import Current Environment' }}
            </BaseButton>
          </template>
        </div>
      </div>
    </template>
  </BaseModal>

  <!-- Settings Modal (overlay on top of wizard) -->
  <WorkspaceSettingsModal
    v-if="showSettingsModal"
    :workspace-path="effectiveWorkspacePath"
    @close="showSettingsModal = false"
  />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { ComfyUIRelease, CreateEnvironmentRequest, CurrentEnvironmentImportPreview, SetupState } from '@/types/comfygit'
import { PYTHON_VERSIONS, DEFAULT_PYTHON_VERSION, TORCH_BACKENDS, DEFAULT_TORCH_BACKEND } from '@/constants/environment'
import { useComfyGitService } from '@/composables/useComfyGitService'
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'
import TaskProgressDisplay from './base/molecules/TaskProgressDisplay.vue'
import LifecycleProgressDisplay from './base/molecules/LifecycleProgressDisplay.vue'
import SocialButtons from './base/molecules/SocialButtons.vue'
import FooterInfo from './base/atoms/FooterInfo.vue'
import ImportFlow from './ImportFlow.vue'
import ImportPreview from './base/molecules/ImportPreview.vue'
import ImportConfigForm from './base/molecules/ImportConfigForm.vue'
import WorkspaceSettingsModal from './WorkspaceSettingsModal.vue'
import type { ModelAnalysis, NodeAnalysis, SwitchLogEntry, WorkflowAnalysis } from '@/types/comfygit'

const props = defineProps<{
  defaultPath: string
  detectedModelsDir?: string | null
  initialStep?: 1 | 2
  existingEnvironments?: string[]
  cliInstalled?: boolean
  setupState: SetupState
  workspacePath?: string | null  // Actual workspace path from setupStatus
}>()

const emit = defineEmits<{
  complete: [environmentName: string, workspacePath: string | null]
  close: []
  'switch-environment': [environmentName: string, workspacePath: string | null]
  'environment-created-no-switch': [environmentName: string]
}>()

const {
  initializeWorkspace,
  getInitializeProgress,
  validatePath,
  validateEnvironmentName,
  createEnvironment,
  getCreateProgress,
  getImportProgress,
  previewCurrentEnvironmentImport,
  executeCurrentEnvironmentImport,
  getComfyUIReleases
} = useComfyGitService()

// Step state
const currentStep = ref(props.initialStep || 1)
const selectedEnv = ref<string | null>(null)

// Wizard mode for Step 2
type WizardMode = 'landing' | 'create' | 'import' | 'import-current'
type CurrentImportStep = 'review' | 'configure'
const wizardMode = ref<WizardMode>('landing')
const currentImportStep = ref<CurrentImportStep>('review')
const showSettingsModal = ref(false)
const isImporting = ref(false)
const cliWarningDismissed = ref(false)
const resumingImport = ref(false)  // True when resuming a detected in-progress import
const detectedImportProgress = ref<{ message: string; phase: string; progress: number; environmentName: string } | null>(null)
// True while checking for in-progress operations on step 2 mount
const isCheckingProgress = ref(props.initialStep === 2)

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
const createdWorkspacePath = ref<string | null>(null)  // Track workspace path for Step 2

// Releases loading
const releases = ref<ComfyUIRelease[]>([{ tag_name: 'latest', name: 'Latest', published_at: '' }])
const loadingReleases = ref(false)

// Progress state
const isCreatingWorkspace = ref(false)
const isCreatingEnvironment = ref(false)
const initProgress = ref({ progress: 0, message: '' })
const createProgress = ref<{ progress: number; message: string; phase?: string }>({ progress: 0, message: '' })
const currentImportProgress = ref<{ progress: number; message: string; phase?: string }>({ progress: 0, message: '' })
const currentImportLogs = ref<SwitchLogEntry[]>([])
const currentImportPreview = ref<CurrentEnvironmentImportPreview | null>(null)
const currentImportError = ref<string | null>(null)
const currentImportNameError = ref<string | null>(null)
const currentImportModelStrategy = ref<'all' | 'required' | 'skip'>('skip')
const isLoadingCurrentImportPreview = ref(false)

// Environment creation steps (matches core library phases)
const environmentCreationSteps = [
  { id: 'init_structure', label: 'Initialize structure', progressThreshold: 5 },
  { id: 'probe_pytorch', label: 'Detect PyTorch backend', progressThreshold: 10 },
  { id: 'resolve_version', label: 'Resolve ComfyUI version', progressThreshold: 15 },
  { id: 'clone_comfyui', label: 'Clone/restore ComfyUI', progressThreshold: 30, aliases: ['restore_comfyui'] },
  { id: 'configure_environment', label: 'Configure environment', progressThreshold: 40 },
  { id: 'install_dependencies', label: 'Install PyTorch and dependencies', progressThreshold: 85 },
  { id: 'install_manager', label: 'Install ComfyGit manager', progressThreshold: 90 },
  { id: 'finalize', label: 'Finalize environment', progressThreshold: 100 },
]

const currentImportSteps = [
  { id: 'clone_comfyui', label: 'Create managed environment', progressThreshold: 10 },
  { id: 'copy_workflows', label: 'Copy workflows', progressThreshold: 40 },
  { id: 'sync_nodes', label: 'Copy and register custom nodes', progressThreshold: 70 },
  { id: 'resolve_models', label: 'Resolve copied workflows', progressThreshold: 85 },
  { id: 'finalize', label: 'Finalize environment', progressThreshold: 100 },
]

const currentImportLifecycleSteps = currentImportSteps.map(step => ({
  state: step.id,
  label: step.label,
  progressThreshold: step.progressThreshold,
}))

const currentImportPreviewData = computed(() => {
  const preview = currentImportPreview.value
  if (!preview) {
    return {
      sourceEnvironment: '',
      sourcePath: '',
      workflows: [] as WorkflowAnalysis[],
      models: [] as ModelAnalysis[],
      nodes: [] as NodeAnalysis[],
      gitBranch: undefined as string | undefined,
      gitCommit: undefined as string | undefined,
      warnings: [] as string[],
      modelsUnavailable: true
    }
  }

  const versionLabel = preview.comfyui_version || 'unknown version'
  const models = currentModelReferencesForPreview(preview)
  return {
    sourceEnvironment: `Current ComfyUI (${versionLabel})`,
    sourcePath: preview.source_path,
    workflows: preview.workflows.map(workflow => ({
      name: workflow.name,
      models_required: workflow.models_required ?? modelReferenceCountForWorkflow(preview, workflow.name),
      models_optional: workflow.models_optional ?? 0
    })),
    models,
    nodes: preview.custom_nodes.map(node => ({
      name: node.name,
      source: nodeSourceForPreview(node.source_type),
      install_spec: node.install_spec ?? null,
      registry_id: node.registry_id ?? null,
      repository: node.repository ?? null,
      version: node.version ?? null,
      branch: node.branch ?? null,
      pinned_commit: node.pinned_commit ?? null,
      dependency_sources: null,
      is_dev_node: node.source_type === 'local' || node.source_type === 'development'
    })),
    gitBranch: preview.comfyui_version || undefined,
    gitCommit: preview.comfyui_commit || undefined,
    warnings: preview.warnings,
    modelsUnavailable: preview.models_scanned === false
  }
})

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

const canContinueCurrentImportReview = computed(() => {
  return Boolean(
    currentImportPreview.value &&
    !currentImportError.value &&
    !isLoadingCurrentImportPreview.value
  )
})

const canStartCurrentImport = computed(() => {
  return Boolean(
    currentImportPreview.value &&
    envName.value?.trim() &&
    !currentImportError.value &&
    !currentImportNameError.value &&
    !isLoadingCurrentImportPreview.value
  )
})

// Show settings button when workspace exists (step 2, empty_workspace, unmanaged, or after workspace created in step 1)
const showSettingsButton = computed(() => {
  // In step 2 (workspace already exists or was just created)
  if (currentStep.value === 2) return true

  // Workspace just created in this session (still on step 1 but workspace exists)
  if (createdWorkspacePath.value) return true

  // empty_workspace or unmanaged state - workspace already exists
  if (props.setupState === 'empty_workspace' || props.setupState === 'unmanaged') return true

  return false
})

// Get the effective workspace path for settings modal (from prop or from created workspace)
const effectiveWorkspacePath = computed(() => {
  return createdWorkspacePath.value || props.workspacePath || null
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

  // Defensive: if workspace already exists at this path, skip forward to step 2
  const workspaceValidationError = String(workspaceError.value ?? '')
  if (workspaceValidationError.includes('already exists')) {
    workspaceError.value = null
    createdWorkspacePath.value = workspacePath.value?.trim() || props.defaultPath
    currentStep.value = 2
    loadReleases()
    return
  }

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
          // Store the workspace path for Step 2 environment creation
          createdWorkspacePath.value = workspacePath.value?.trim() || props.defaultPath
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
      switch_after: switchAfter.value,
      workspace_path: createdWorkspacePath.value || undefined  // Pass workspace path for first-time setup
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
              emit('complete', envName, createdWorkspacePath.value)
            } else {
              // Return to landing view with new env in list
              wizardMode.value = 'landing'
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

function nodeSourceForPreview(sourceType: string): string {
  if (sourceType === 'registry') return 'registry'
  if (sourceType === 'git') return 'git'
  if (sourceType === 'local') return 'development'
  return sourceType
}

function currentModelReferencesForPreview(preview: CurrentEnvironmentImportPreview): ModelAnalysis[] {
  const grouped = new Map<string, ModelAnalysis>()
  for (const modelRef of preview.model_references || []) {
    const filename = modelRef.filename
    if (!filename) continue

    const relativePath = modelReferenceRelativePath(filename, modelRef.category)
    const key = relativePath || filename
    const existing = grouped.get(key)
    if (existing) {
      if (modelRef.workflow && !existing.workflows.includes(modelRef.workflow)) {
        existing.workflows.push(modelRef.workflow)
      }
      if (modelRef.source_url && !existing.sources.includes(modelRef.source_url)) {
        existing.sources.push(modelRef.source_url)
      }
      continue
    }

    grouped.set(key, {
      filename,
      hash: null,
      size: null,
      sources: modelRef.source_url ? [modelRef.source_url] : [],
      relative_path: relativePath,
      locally_available: false,
      needs_download: false,
      workflows: modelRef.workflow ? [modelRef.workflow] : []
    })
  }
  return [...grouped.values()]
}

function modelReferenceRelativePath(filename: string, category?: string | null): string {
  if (!category || filename.includes('/')) return filename
  return `${category}/${filename}`
}

function modelReferenceCountForWorkflow(preview: CurrentEnvironmentImportPreview, workflowName: string): number {
  return (preview.model_references || [])
    .filter(modelRef => modelRef.workflow === workflowName)
    .length
}

async function handleValidateCurrentImportName(name: string) {
  if (!name) {
    currentImportNameError.value = 'Environment name is required'
    return
  }
  try {
    const result = await validateEnvironmentName(name)
    currentImportNameError.value = result.valid ? null : (result.error || 'Invalid name')
  } catch {
    currentImportNameError.value = 'Failed to validate name'
  }
}

function handleSwitchToExisting() {
  if (!selectedEnv.value) return
  emit('switch-environment', selectedEnv.value, createdWorkspacePath.value)
}

function handleBack() {
  if (wizardMode.value === 'import-current' && currentImportStep.value === 'configure' && !isImporting.value) {
    currentImportStep.value = 'review'
    return
  }
  if (wizardMode.value === 'create' || wizardMode.value === 'import' || wizardMode.value === 'import-current') {
    wizardMode.value = 'landing'
  } else if (currentStep.value === 2 && props.setupState === 'no_workspace') {
    currentStep.value = 1
  }
  // For empty_workspace/unmanaged at landing - nothing to go back to
}

async function openCurrentImport() {
  wizardMode.value = 'import-current'
  currentImportStep.value = 'review'
  currentImportPreview.value = null
  currentImportError.value = null
  currentImportNameError.value = null
  isLoadingCurrentImportPreview.value = true
  envName.value = 'imported-comfyui'

  try {
    currentImportPreview.value = await previewCurrentEnvironmentImport()
  } catch (err) {
    currentImportError.value = err instanceof Error ? err.message : 'Failed to scan current ComfyUI install'
  } finally {
    isLoadingCurrentImportPreview.value = false
  }
}

async function handleStartCurrentImport() {
  if (!envName.value.trim()) return

  isImporting.value = true
  currentImportError.value = null
  currentImportProgress.value = {
    progress: 0,
    message: `Importing current ComfyUI as '${envName.value.trim()}'...`,
    phase: ''
  }
  currentImportLogs.value = []

  try {
    const request = {
      name: envName.value.trim(),
      workspace_path: createdWorkspacePath.value || undefined,
      torch_backend: torchBackend.value
    }
    const result = await executeCurrentEnvironmentImport(request)
    if (result.status !== 'started') {
      throw new Error(result.message || 'Failed to start import')
    }

    resumeCurrentImportPolling(request.name)
  } catch (err) {
    isImporting.value = false
    currentImportError.value = err instanceof Error ? err.message : 'Failed to import current environment'
  }
}

function resumeCurrentImportPolling(requestedName: string) {
  step2FailureCount.value = 0
  step2StartTime.value = Date.now()

  const poll = setInterval(async () => {
    if (step2StartTime.value && Date.now() - step2StartTime.value > STEP2_TIMEOUT_MS) {
      clearInterval(poll)
      isImporting.value = false
      currentImportError.value = 'Environment import timed out. Check server logs for details.'
      return
    }

    try {
      const progress = await getImportProgress()
      step2FailureCount.value = 0
      currentImportProgress.value = {
        progress: progress.progress ?? 0,
        message: progress.message,
        phase: progress.phase || undefined
      }
      currentImportLogs.value = progress.logs || currentImportLogs.value

      if (progress.state === 'complete') {
        clearInterval(poll)
        isImporting.value = false
        const completedEnvName = progress.environment_name || requestedName
        if (switchAfter.value) {
          emit('complete', completedEnvName, createdWorkspacePath.value)
        } else {
          emit('environment-created-no-switch', completedEnvName)
          wizardMode.value = 'landing'
        }
      } else if (progress.state === 'error') {
        clearInterval(poll)
        isImporting.value = false
        currentImportError.value = progress.error || progress.message || 'Environment import failed'
      }
    } catch (err) {
      step2FailureCount.value++
      console.warn(`Polling failure ${step2FailureCount.value}/${MAX_FAILURES}:`, err)

      if (step2FailureCount.value >= MAX_FAILURES) {
        clearInterval(poll)
        isImporting.value = false
        currentImportError.value = 'Lost connection to server. Please refresh and try again.'
      }
    }
  }, 2000)
}

function handleImportComplete(envName: string, switchRequested: boolean) {
  isImporting.value = false
  if (switchRequested) {
    emit('complete', envName, createdWorkspacePath.value)
  } else {
    // Refresh environments list and return to landing
    emit('environment-created-no-switch', envName)
    wizardMode.value = 'landing'
  }
}

function handleImportCleared() {
  // User cancelled import source selection - stay in import mode
}

onMounted(async () => {
  // Pre-fill models path if detected
  if (props.detectedModelsDir) {
    modelsPath.value = props.detectedModelsDir
  }

  // Initialize workspace path from prop when starting at step 2
  // (for empty_workspace or unmanaged states where workspace already exists)
  if (props.workspacePath) {
    createdWorkspacePath.value = props.workspacePath
  }

  // Load releases if starting at step 2
  if (currentStep.value === 2) {
    loadReleases()

    // Set up a 3-second timeout fallback for progress check
    const progressCheckTimeout = setTimeout(() => {
      isCheckingProgress.value = false
    }, 3000)

    // Check if there's an environment creation already in progress
    await checkAndResumeCreation()

    // Clear timeout and loading state when done
    clearTimeout(progressCheckTimeout)
    isCheckingProgress.value = false
  }
})

async function checkAndResumeCreation() {
  // Check for in-progress environment creation
  try {
    const progress = await getCreateProgress()
    console.log('[ComfyGit] Create progress check:', progress.state, progress)

    if (progress.state === 'creating') {
      console.log('[ComfyGit] Resuming in-progress environment creation:', progress.environment_name)

      wizardMode.value = 'create'
      isCreatingEnvironment.value = true
      envName.value = progress.environment_name || 'my-new-env'

      createProgress.value = {
        progress: progress.progress ?? 0,
        message: progress.message,
        phase: progress.phase
      }

      resumeCreationPolling()
      return  // Found active creation, don't check import
    }
  } catch (err) {
    console.log('[ComfyGit] Create progress check failed:', err)
  }

  // Check for in-progress import operation
  try {
    const importProgress = await getImportProgress()
    console.log('[ComfyGit] Import progress check:', importProgress.state, importProgress)

    if (importProgress.state === 'importing') {
      console.log('[ComfyGit] Resuming in-progress import:', importProgress.environment_name)

      // Store detected progress for immediate display
      detectedImportProgress.value = {
        message: importProgress.message || 'Importing...',
        phase: importProgress.phase || '',
        progress: importProgress.progress ?? 0,
        environmentName: importProgress.environment_name || ''
      }
      resumingImport.value = true  // Tell ImportFlow to start in importing state
      wizardMode.value = 'import'
      isImporting.value = true
    }
  } catch (err) {
    console.log('[ComfyGit] Import progress check failed:', err)
  }
}

async function resumeCreationPolling() {
  // Initialize polling safeguards
  step2FailureCount.value = 0
  step2StartTime.value = Date.now()

  let pollInterval: ReturnType<typeof setInterval> | null = null

  // Helper to process a single poll result
  const processPoll = async (): Promise<boolean> => {
    // Check overall timeout
    if (step2StartTime.value && Date.now() - step2StartTime.value > STEP2_TIMEOUT_MS) {
      if (pollInterval) clearInterval(pollInterval)
      isCreatingEnvironment.value = false
      envCreateError.value = 'Environment creation timed out. Check server logs for details.'
      return false
    }

    try {
      const progress = await getCreateProgress()
      step2FailureCount.value = 0  // Reset on success

      // Detect unexpected idle state
      if (progress.state === 'idle' && isCreatingEnvironment.value) {
        if (pollInterval) clearInterval(pollInterval)
        isCreatingEnvironment.value = false
        envCreateError.value = 'Environment creation was interrupted. Please try again.'
        return false
      }

      createProgress.value = {
        progress: progress.progress ?? 0,
        message: progress.message,
        phase: progress.phase
      }

      if (progress.state === 'complete') {
        if (pollInterval) clearInterval(pollInterval)
        isCreatingEnvironment.value = false
        const completedEnvName = progress.environment_name || envName.value
        // For resumed creations, assume switch was intended (safest default)
        emit('complete', completedEnvName, createdWorkspacePath.value)
        return false
      } else if (progress.state === 'error') {
        if (pollInterval) clearInterval(pollInterval)
        isCreatingEnvironment.value = false
        envCreateError.value = progress.error || 'Environment creation failed'
        return false
      }
      return true  // Continue polling
    } catch (err) {
      step2FailureCount.value++
      console.warn(`Polling failure ${step2FailureCount.value}/${MAX_FAILURES}:`, err)

      if (step2FailureCount.value >= MAX_FAILURES) {
        if (pollInterval) clearInterval(pollInterval)
        isCreatingEnvironment.value = false
        envCreateError.value = 'Lost connection to server. Please refresh and try again.'
        return false
      }
      return true  // Continue polling on transient errors
    }
  }

  // Immediate first poll to get current state
  const shouldContinue = await processPoll()
  if (!shouldContinue) return

  // Start interval for subsequent polls
  pollInterval = setInterval(async () => {
    const continuePolling = await processPoll()
    if (!continuePolling && pollInterval) {
      clearInterval(pollInterval)
    }
  }, 2000)
}
</script>

<style scoped>
.base-modal-title {
  color: var(--cg-color-accent);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  font-size: var(--cg-font-size-sm);
  margin: 0;
  flex: 1;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
}

/* Settings button inherits from .icon-btn */

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

.cli-warning-title {
  flex: 1;
}

.cli-warning-close {
  background: transparent;
  border: none;
  color: var(--cg-color-text-muted);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
}

.cli-warning-close:hover {
  opacity: 1;
  color: var(--cg-color-text-primary);
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

/* Landing View */
.env-landing {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.landing-option {
  display: flex;
  align-items: center;
  gap: var(--cg-space-3);
  padding: var(--cg-space-4);
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border-subtle);
  cursor: pointer;
  text-align: left;
  width: 100%;
  transition: all var(--cg-transition-fast);
}

.landing-option:hover {
  border-color: var(--cg-color-accent);
  background: var(--cg-color-bg-tertiary);
}

.option-icon {
  font-size: var(--cg-font-size-2xl);
  flex-shrink: 0;
}

.option-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
}

.option-title {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-base);
  font-weight: var(--cg-font-weight-semibold);
}

.option-description {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
}

.option-arrow {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-lg);
}

.landing-divider {
  display: flex;
  align-items: center;
  gap: var(--cg-space-4);
  margin: var(--cg-space-2) 0;
}

.landing-divider::before,
.landing-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--cg-color-border-subtle);
}

.landing-divider span {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  text-transform: lowercase;
}

/* Environment List */
.env-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
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

/* Create/Import modes */
.env-create,
.env-import,
.env-import-current {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.env-import-current {
  --current-import-step-height: calc(min(580px, 62vh) + 155px);
}

.import-stepper {
  display: flex;
  gap: var(--cg-space-2);
  padding-bottom: var(--cg-space-3);
  border-bottom: 1px solid var(--cg-color-border-subtle);
}

.import-step {
  display: inline-flex;
  align-items: center;
  gap: var(--cg-space-2);
  color: var(--cg-color-text-muted);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
}

.import-step.active {
  color: var(--cg-color-accent);
}

.import-step.complete {
  color: var(--cg-color-success);
}

.step-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 1px solid currentColor;
  border-radius: 999px;
}

.current-import-configure-frame {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
  height: var(--current-import-step-height);
  min-height: 580px;
  overflow-y: auto;
}

.current-import-summary {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--cg-space-3);
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border-subtle);
}

.current-import-summary > div {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
}

.summary-label {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
}

.summary-value {
  color: var(--cg-color-text-primary);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
  overflow-wrap: anywhere;
}

/* Creating progress state */
.env-creating {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
  padding: var(--cg-space-4);
}

.creating-intro {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-base);
  margin: 0;
  text-align: center;
}

.creating-intro strong {
  color: var(--cg-color-text-primary);
}

.progress-warning {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  text-align: center;
  margin: 0;
}

/* Loading state for progress check */
.progress-check-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--cg-space-3);
  padding: var(--cg-space-8);
  min-height: 200px;
}

.loading-spinner {
  width: 32px;
  height: 32px;
  border: 3px solid var(--cg-color-border);
  border-top-color: var(--cg-color-accent);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading-text {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
}

/* Icon buttons (for settings and close buttons) */
.icon-btn {
  background: transparent;
  border: 1px solid transparent;
  color: var(--cg-color-text-primary);
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-btn:hover {
  background: var(--cg-color-bg-hover);
  border-color: var(--cg-color-border-subtle);
}

/* Header divider between social links and panel controls */
.header-divider {
  width: 1px;
  height: 16px;
  background: var(--cg-color-border-subtle);
  margin: 0 4px;
  align-self: center;
}

/* Wizard footer */
.wizard-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.wizard-footer-actions {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
}
</style>
