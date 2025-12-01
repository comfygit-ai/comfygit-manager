<template>
  <div class="import-flow">
    <!-- Empty State: No file selected and no git URL -->
    <div v-if="!selectedFile && !gitUrl && !isImporting" class="import-empty">
      <FileDropZone
        accept=".tar.gz,.tgz,.zip"
        primary-text="Drag & drop environment export here"
        secondary-text="Supports .tar.gz, .tgz, or .zip files"
        button-text="Select Export File"
        @file-selected="handleFileSelected"
      />

      <div class="import-divider">
        <span>or</span>
      </div>

      <div class="git-import-section">
        <div class="git-import-header">Import from Git Repository</div>
        <div class="git-url-input-row">
          <input
            type="text"
            class="git-url-input"
            v-model="gitUrlInput"
            placeholder="https://github.com/user/repo.git"
            @keyup.enter="handleAnalyzeGitUrl"
            :disabled="isAnalyzingGit"
          />
          <ActionButton
            variant="primary"
            size="sm"
            :disabled="!gitUrlInput.trim() || isAnalyzingGit"
            @click="handleAnalyzeGitUrl"
          >
            {{ isAnalyzingGit ? 'Analyzing...' : 'ANALYZE' }}
          </ActionButton>
        </div>
        <div v-if="gitPreviewError" class="git-error">{{ gitPreviewError }}</div>
        <div class="git-url-hint">Paste a GitHub URL to preview the environment</div>
      </div>
    </div>

    <!-- Source Selected: Show preview and options -->
    <div v-else-if="(selectedFile || gitUrl) && !isImporting && !importComplete" class="import-configure">
      <!-- Selected Source Info -->
      <div class="selected-file-bar">
        <!-- File source -->
        <template v-if="selectedFile">
          <div class="file-bar-content">
            <div class="file-bar-icon">📦</div>
            <div class="file-bar-info">
              <div class="file-bar-name">{{ selectedFile.name }}</div>
              <div class="file-bar-size">{{ formatFileSize(selectedFile.size) }}</div>
            </div>
          </div>
        </template>
        <!-- Git source -->
        <template v-else-if="gitUrl">
          <div class="file-bar-content">
            <div class="file-bar-icon">🔗</div>
            <div class="file-bar-info">
              <div class="file-bar-name">{{ formatGitUrl(gitUrl) }}</div>
              <div class="file-bar-size">Git Repository</div>
            </div>
          </div>
        </template>
        <ActionButton
          variant="ghost"
          size="sm"
          @click="handleClearSource"
        >
          Change Source
        </ActionButton>
      </div>

      <!-- Loading Preview -->
      <div v-if="isLoadingPreview" class="preview-loading">
        <div class="loading-spinner"></div>
        <div class="loading-text">Analyzing import file...</div>
      </div>

      <!-- Preview Error -->
      <IssueCard
        v-else-if="previewError"
        type="error"
        title="Failed to Analyze File"
        :details="[previewError]"
      />

      <!-- Preview (from API) -->
      <ImportPreview
        v-else-if="importAnalysis"
        :source-environment="previewData.sourceEnvironment"
        :workflows="previewData.workflows"
        :models="previewData.models"
        :nodes="previewData.nodes"
        :git-branch="previewData.gitBranch"
        :git-commit="previewData.gitCommit"
      />

      <!-- Configuration -->
      <ImportConfigForm
        v-if="importAnalysis"
        v-model:name="importConfig.name"
        v-model:model-strategy="importConfig.modelStrategy"
        v-model:torch-backend="importConfig.torchBackend"
        v-model:switch-after-import="importConfig.switchAfterImport"
        :name-error="nameError"
        @validate-name="handleValidateName"
      />

      <!-- Warning if skipping models -->
      <IssueCard
        v-if="importConfig.modelStrategy === 'skip' && importAnalysis?.models_needing_download"
        type="warning"
        title="Models Will Not Be Downloaded"
        :details="[
          `${importAnalysis.models_needing_download} model(s) will need to be downloaded later`,
          'You can resolve missing models from the STATUS page after import'
        ]"
      />

      <!-- Action buttons -->
      <div class="import-actions">
        <ActionButton
          variant="secondary"
          size="md"
          @click="handleClearSource"
        >
          Cancel
        </ActionButton>
        <ActionButton
          variant="primary"
          size="md"
          :disabled="!canImport"
          @click="handleStartImport"
        >
          Create Environment
        </ActionButton>
      </div>
    </div>

    <!-- Importing: Show progress -->
    <div v-else-if="isImporting" class="import-progress">
      <p class="creating-intro">
        Importing environment <strong>{{ importConfig.name }}</strong>...
      </p>

      <TaskProgressDisplay
        :progress="importProgress.progress"
        :message="importProgress.message"
        :current-phase="importProgress.phase"
        :variant="importProgress.error ? 'error' : 'default'"
        :show-steps="true"
        :steps="importSteps"
      />

      <p v-if="!importProgress.error" class="progress-warning">
        This may take several minutes. Please wait...
      </p>

      <div v-if="importProgress.error" class="import-error">
        <p class="error-message">{{ importProgress.error }}</p>
      </div>
    </div>

    <!-- Complete: Show results -->
    <div v-else-if="importComplete" class="import-complete">
      <div :class="['complete-icon', importSuccess ? 'success' : 'error']">
        {{ importSuccess ? '✓' : '✕' }}
      </div>
      <div class="complete-message">
        <div class="complete-title">
          {{ importSuccess ? 'Import Successful' : 'Import Failed' }}
        </div>
        <div class="complete-details">
          {{ importResultMessage }}
        </div>
      </div>

      <div class="complete-actions">
        <ActionButton
          variant="primary"
          size="md"
          @click="handleReset"
        >
          Import Another
        </ActionButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import FileDropZone from '@/components/base/molecules/FileDropZone.vue'
import ImportPreview from '@/components/base/molecules/ImportPreview.vue'
import ImportConfigForm from '@/components/base/molecules/ImportConfigForm.vue'
import IssueCard from '@/components/base/molecules/IssueCard.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import TaskProgressDisplay from '@/components/base/molecules/TaskProgressDisplay.vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { ImportAnalysis } from '@/types/comfygit'

const props = defineProps<{
  // Optional: Allow parent to inject workspace path for first-time setup
  workspacePath?: string | null
  // If true, component starts in "resuming import" mode (shows progress immediately)
  resumeImport?: boolean
  // Initial progress data when resuming (to avoid lag)
  initialProgress?: {
    message: string
    phase: string
    progress: number
    environmentName: string
  }
}>()

const emit = defineEmits<{
  'import-complete': [environmentName: string, switchRequested: boolean]
  'import-started': []
  'source-cleared': []
}>()

const { previewTarballImport, previewGitImport, validateEnvironmentName, executeImport, executeGitImport, getImportProgress } = useComfyGitService()

// Polling interval for import progress
let importPollInterval: ReturnType<typeof setInterval> | null = null

// State - initialize isImporting from prop for immediate UI when resuming
const selectedFile = ref<File | null>(null)
const isImporting = ref(props.resumeImport ?? false)
const importComplete = ref(false)
const importSuccess = ref(false)
const importResultMessage = ref('')
const isLoadingPreview = ref(false)
const previewError = ref<string | null>(null)

// Git import state
const gitUrlInput = ref('')
const gitUrl = ref<string | null>(null) // Set after successful preview
const isAnalyzingGit = ref(false)
const gitPreviewError = ref<string | null>(null)

// Import analysis from API
const importAnalysis = ref<ImportAnalysis | null>(null)

// Import configuration - initialize name from prop if resuming
const importConfig = ref({
  name: props.initialProgress?.environmentName ?? '',
  modelStrategy: 'required' as 'all' | 'required' | 'skip',
  torchBackend: 'auto',
  switchAfterImport: true
})
const nameError = ref<string | null>(null)

// Import progress - initialize from prop if resuming
const importProgress = ref({
  message: props.initialProgress?.message ?? 'Preparing import...',
  phase: props.initialProgress?.phase ?? '',
  progress: props.initialProgress?.progress ?? 0,
  error: null as string | null
})

// Import steps (matches core library phases)
const importSteps = [
  { id: 'clone_comfyui', label: 'Clone/restore ComfyUI', progressThreshold: 15 },
  { id: 'extract_builtins', label: 'Extract builtin nodes', progressThreshold: 20 },
  { id: 'configure_pytorch', label: 'Configure PyTorch', progressThreshold: 35 },
  { id: 'install_dependencies', label: 'Install dependencies', progressThreshold: 60 },
  { id: 'sync_nodes', label: 'Sync custom nodes', progressThreshold: 70 },
  { id: 'copy_workflows', label: 'Copy workflows', progressThreshold: 80 },
  { id: 'resolve_models', label: 'Resolve models', progressThreshold: 85 },
  { id: 'download_models', label: 'Download models', progressThreshold: 95 },
  { id: 'finalize', label: 'Finalize environment', progressThreshold: 100 },
]

// Transform ImportAnalysis to the format ImportPreview expects
const previewData = computed(() => {
  if (!importAnalysis.value) {
    return {
      sourceEnvironment: '',
      workflows: [] as string[],
      models: [] as Array<{ filename: string; size: number; type: string }>,
      nodes: [] as string[],
      gitBranch: undefined,
      gitCommit: undefined
    }
  }

  const analysis = importAnalysis.value
  return {
    sourceEnvironment: analysis.comfyui_version ? `ComfyUI ${analysis.comfyui_version}` : 'Unknown',
    workflows: analysis.workflows.map(w => w.name),
    models: analysis.models.map(m => ({
      filename: m.filename,
      size: 0,
      type: m.relative_path.split('/')[0] || 'model'
    })),
    nodes: analysis.nodes.map(n => n.name),
    gitBranch: undefined,
    gitCommit: undefined
  }
})

const canImport = computed(() => {
  return !isLoadingPreview.value &&
         !previewError.value &&
         importAnalysis.value &&
         importConfig.value.name.length > 0 &&
         !nameError.value &&
         (selectedFile.value || gitUrl.value)
})

// Handlers
async function handleFileSelected(file: File) {
  selectedFile.value = file
  isLoadingPreview.value = true
  previewError.value = null
  importAnalysis.value = null

  try {
    const analysis = await previewTarballImport(file)
    importAnalysis.value = analysis
  } catch (err) {
    previewError.value = err instanceof Error ? err.message : 'Failed to analyze file'
    console.error('Preview error:', err)
  } finally {
    isLoadingPreview.value = false
  }
}

function handleClearSource() {
  selectedFile.value = null
  gitUrl.value = null
  gitUrlInput.value = ''
  gitPreviewError.value = null
  importComplete.value = false
  importSuccess.value = false
  importResultMessage.value = ''
  importAnalysis.value = null
  previewError.value = null
  importConfig.value = { name: '', modelStrategy: 'required', torchBackend: 'auto', switchAfterImport: true }
  nameError.value = null
  emit('source-cleared')
}

function handleReset() {
  stopImportPolling()
  handleClearSource()
  isImporting.value = false
  isLoadingPreview.value = false
  isAnalyzingGit.value = false
  importProgress.value = {
    message: 'Preparing import...',
    phase: '',
    progress: 0,
    error: null
  }
}

async function handleAnalyzeGitUrl() {
  if (!gitUrlInput.value.trim()) return

  isAnalyzingGit.value = true
  gitPreviewError.value = null

  try {
    const analysis = await previewGitImport(gitUrlInput.value.trim())
    gitUrl.value = gitUrlInput.value.trim()
    importAnalysis.value = analysis
  } catch (err) {
    gitPreviewError.value = err instanceof Error ? err.message : 'Failed to analyze repository'
  } finally {
    isAnalyzingGit.value = false
  }
}

function formatGitUrl(url: string): string {
  // Convert https://github.com/user/repo.git to github.com/user/repo
  try {
    const parsed = new URL(url)
    return parsed.host + parsed.pathname.replace(/\.git$/, '')
  } catch {
    return url
  }
}

async function handleValidateName(name: string) {
  if (!name) {
    nameError.value = 'Environment name is required'
    return
  }
  try {
    const result = await validateEnvironmentName(name)
    nameError.value = result.valid ? null : (result.error || 'Invalid name')
  } catch {
    nameError.value = 'Failed to validate name'
  }
}

async function handleStartImport() {
  if (!importConfig.value.name) return
  if (!selectedFile.value && !gitUrl.value) return

  isImporting.value = true
  importComplete.value = false
  importProgress.value = { message: `Creating environment '${importConfig.value.name}'...`, phase: '', progress: 0, error: null }

  // Notify parent that import has started
  emit('import-started')

  try {
    let result

    if (selectedFile.value) {
      result = await executeImport(
        selectedFile.value,
        importConfig.value.name,
        importConfig.value.modelStrategy,
        importConfig.value.torchBackend
      )
    } else if (gitUrl.value) {
      result = await executeGitImport(
        gitUrl.value,
        importConfig.value.name,
        importConfig.value.modelStrategy,
        importConfig.value.torchBackend
      )
    } else {
      throw new Error('No import source selected')
    }

    if (result.status === 'started') {
      // Start polling for progress
      startImportPolling()
    } else {
      // Error starting import
      importSuccess.value = false
      importResultMessage.value = result.message
      isImporting.value = false
      importComplete.value = true
    }
  } catch (error) {
    importSuccess.value = false
    importResultMessage.value = error instanceof Error ? error.message : 'Unknown error occurred during import'
    isImporting.value = false
    importComplete.value = true
  }
}

async function startImportPolling() {
  if (importPollInterval) return

  // Helper to process a single poll
  const processPoll = async (): Promise<boolean> => {
    try {
      const progress = await getImportProgress()

      importProgress.value = {
        message: progress.message,
        phase: progress.phase || '',
        progress: progress.progress ?? (progress.state === 'importing' ? 50 : 0),
        error: progress.error || null
      }

      if (progress.state === 'complete') {
        stopImportPolling()
        importSuccess.value = true
        importResultMessage.value = `Environment '${progress.environment_name}' created successfully`
        isImporting.value = false
        importComplete.value = true

        // Notify parent
        if (progress.environment_name) {
          emit('import-complete', progress.environment_name, importConfig.value.switchAfterImport)
        }
        return false
      } else if (progress.state === 'error') {
        stopImportPolling()
        importSuccess.value = false
        importResultMessage.value = progress.error || progress.message
        isImporting.value = false
        importComplete.value = true
        return false
      }
      return true  // Continue polling
    } catch (err) {
      console.error('Failed to poll import progress:', err)
      return true  // Continue polling - might be transient
    }
  }

  // Immediate first poll to get current state
  const shouldContinue = await processPoll()
  if (!shouldContinue) return

  // Start interval for subsequent polls
  importPollInterval = setInterval(async () => {
    const continuePolling = await processPoll()
    if (!continuePolling) {
      stopImportPolling()
    }
  }, 2000)
}

function stopImportPolling() {
  if (importPollInterval) {
    clearInterval(importPollInterval)
    importPollInterval = null
  }
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`
}

// Check for in-progress import on mount and resume if found
onMounted(async () => {
  try {
    const progress = await getImportProgress()
    console.log('[ComfyGit ImportFlow] Import progress check:', progress.state, progress)

    if (progress.state === 'importing') {
      console.log('[ComfyGit ImportFlow] Resuming in-progress import:', progress.environment_name)

      // Set up the UI to show import progress
      isImporting.value = true
      importConfig.value.name = progress.environment_name || importConfig.value.name || ''

      importProgress.value = {
        progress: progress.progress ?? 0,
        message: progress.message || 'Importing...',
        phase: progress.phase || '',
        error: null
      }

      // Start polling for progress updates
      startImportPolling()
    }
  } catch (err) {
    console.log('[ComfyGit ImportFlow] Import progress check failed:', err)
  }
})

// Expose for parent access
defineExpose({
  handleReset,
  isImporting,
  canImport
})
</script>

<style scoped>
.import-flow {
  display: flex;
  flex-direction: column;
}

/* Empty State */
.import-empty {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

/* Configure State */
.import-configure {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.selected-file-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--cg-color-success-muted);
  border: 1px solid var(--cg-color-success);
  padding: var(--cg-space-3);
}

.file-bar-content {
  display: flex;
  align-items: center;
  gap: var(--cg-space-3);
}

.file-bar-icon {
  font-size: var(--cg-font-size-2xl);
}

.file-bar-info {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
}

.file-bar-name {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-base);
  font-weight: var(--cg-font-weight-semibold);
}

.file-bar-size {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  font-family: var(--cg-font-mono);
}

.import-actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--cg-space-3);
  padding-top: var(--cg-space-3);
  border-top: 1px solid var(--cg-color-border-subtle);
}

/* Progress State */
.import-progress {
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

.import-error {
  background: var(--cg-color-error-muted);
  border: 1px solid var(--cg-color-error);
  padding: var(--cg-space-3);
}

.error-message {
  color: var(--cg-color-error);
  font-size: var(--cg-font-size-sm);
  margin: 0;
}

/* Complete State */
.import-complete {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--cg-space-4);
  padding: var(--cg-space-8) var(--cg-space-4);
}

.complete-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  border: 3px solid;
  border-radius: 50%;
}

.complete-icon.success {
  color: var(--cg-color-success);
  border-color: var(--cg-color-success);
  background: var(--cg-color-success-muted);
}

.complete-icon.error {
  color: var(--cg-color-error);
  border-color: var(--cg-color-error);
  background: var(--cg-color-error-muted);
}

.complete-message {
  text-align: center;
  max-width: 500px;
}

.complete-title {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-xl);
  font-weight: var(--cg-font-weight-bold);
  margin-bottom: var(--cg-space-2);
}

.complete-details {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-base);
}

.complete-actions {
  display: flex;
  gap: var(--cg-space-3);
  margin-top: var(--cg-space-2);
}

/* Loading Preview State */
.preview-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--cg-space-3);
  padding: var(--cg-space-6);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
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

/* Import Divider */
.import-divider {
  display: flex;
  align-items: center;
  gap: var(--cg-space-4);
  margin: var(--cg-space-2) 0;
}

.import-divider::before,
.import-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--cg-color-border-subtle);
}

.import-divider span {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  text-transform: lowercase;
}

/* Git Import Section */
.git-import-section {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  padding: var(--cg-space-4);
}

.git-import-header {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-medium);
  margin-bottom: var(--cg-space-3);
}

.git-url-input-row {
  display: flex;
  gap: var(--cg-space-2);
}

.git-url-input {
  flex: 1;
  padding: var(--cg-space-1) var(--cg-space-2);
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  font-family: var(--cg-font-mono);
  height: 28px;
}

.git-url-input:focus {
  outline: none;
  border-color: var(--cg-color-accent);
}

.git-url-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.git-url-hint {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  margin-top: var(--cg-space-2);
}

.git-error {
  color: var(--cg-color-error);
  font-size: var(--cg-font-size-sm);
  margin-top: var(--cg-space-2);
}
</style>
