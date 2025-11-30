<template>
  <PanelLayout>
    <template #header>
      <PanelHeader
        title="IMPORT ENVIRONMENT"
        :show-info="true"
        @info-click="showInfoPopover = true"
      />
    </template>

    <template #content>
      <!-- Empty State: No file selected -->
      <div v-if="!selectedFile && !isImporting" class="import-empty">
        <FileDropZone
          accept=".tar.gz,.tgz,.zip"
          primary-text="Drag & drop environment export here"
          secondary-text="Supports .tar.gz, .tgz, or .zip files"
          button-text="Select Export File"
          @file-selected="handleFileSelected"
        />
      </div>

      <!-- File Selected: Show preview and options -->
      <div v-else-if="selectedFile && !isImporting && !importComplete" class="import-configure">
        <!-- Selected File Info -->
        <div class="selected-file-bar">
          <div class="file-bar-content">
            <div class="file-bar-icon">📦</div>
            <div class="file-bar-info">
              <div class="file-bar-name">{{ selectedFile.name }}</div>
              <div class="file-bar-size">{{ formatFileSize(selectedFile.size) }}</div>
            </div>
          </div>
          <ActionButton
            variant="ghost"
            size="sm"
            @click="handleClearFile"
          >
            Change File
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
            variant="primary"
            size="md"
            :disabled="!canImport"
            @click="handleStartImport"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 12.5a5.5 5.5 0 110-11 5.5 5.5 0 010 11zM8 4v4h3l-4 4-4-4h3V4h2z"/>
            </svg>
            Create Environment
          </ActionButton>
          <ActionButton
            variant="secondary"
            size="md"
            @click="handleClearFile"
          >
            Cancel
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
    </template>
  </PanelLayout>

  <!-- Info Popover -->
  <InfoPopover
    :show="showInfoPopover"
    title="How Import Works"
    @close="showInfoPopover = false"
  >
    <template #content>
      <div class="help-steps">
        <div class="help-step">
          <span class="step-number">1</span>
          <div class="step-content">
            <strong>Creates a New Environment</strong>
            <p>Import does not modify your current environment - it creates a brand new one</p>
          </div>
        </div>
        <div class="help-step">
          <span class="step-number">2</span>
          <div class="step-content">
            <strong>Preview Before Import</strong>
            <p>See what nodes, models, and workflows will be set up</p>
          </div>
        </div>
        <div class="help-step">
          <span class="step-number">3</span>
          <div class="step-content">
            <strong>Choose Model Strategy</strong>
            <p>Download all models, only required ones, or skip for later</p>
          </div>
        </div>
        <div class="help-step">
          <span class="step-number">4</span>
          <div class="step-content">
            <strong>Switch When Ready</strong>
            <p>After creation, switch to the new environment to start using it</p>
          </div>
        </div>
      </div>
    </template>
  </InfoPopover>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import FileDropZone from '@/components/base/molecules/FileDropZone.vue'
import ImportPreview from '@/components/base/molecules/ImportPreview.vue'
import ImportConfigForm from '@/components/base/molecules/ImportConfigForm.vue'
import IssueCard from '@/components/base/molecules/IssueCard.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import InfoPopover from '@/components/base/molecules/InfoPopover.vue'
import TaskProgressDisplay from '@/components/base/molecules/TaskProgressDisplay.vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { ImportAnalysis } from '@/types/comfygit'

const { previewTarballImport, validateEnvironmentName, executeImport, getImportProgress } = useComfyGitService()

// Emit for parent component communication
const emit = defineEmits<{
  'import-complete-switch': [environmentName: string]
}>()

// Polling interval for import progress
let importPollInterval: ReturnType<typeof setInterval> | null = null

// State
const showInfoPopover = ref(false)
const selectedFile = ref<File | null>(null)
const isImporting = ref(false)
const importComplete = ref(false)
const importSuccess = ref(false)
const importResultMessage = ref('')
const isLoadingPreview = ref(false)
const previewError = ref<string | null>(null)

// Import analysis from API
const importAnalysis = ref<ImportAnalysis | null>(null)

// Import configuration (replaces old options)
const importConfig = ref({
  name: '',
  modelStrategy: 'required' as 'all' | 'required' | 'skip',
  torchBackend: 'auto',
  switchAfterImport: true
})
const nameError = ref<string | null>(null)

// Import progress
const importProgress = ref({
  message: 'Preparing import...',
  phase: '',
  progress: 0,
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
         !nameError.value
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

function handleClearFile() {
  selectedFile.value = null
  importComplete.value = false
  importSuccess.value = false
  importResultMessage.value = ''
  importAnalysis.value = null
  previewError.value = null
  importConfig.value = { name: '', modelStrategy: 'required', torchBackend: 'auto', switchAfterImport: true }
  nameError.value = null
}

function handleReset() {
  stopImportPolling()
  handleClearFile()
  isImporting.value = false
  isLoadingPreview.value = false
  importProgress.value = {
    message: 'Preparing import...',
    phase: '',
    progress: 0,
    error: null
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
  if (!selectedFile.value || !importConfig.value.name) return

  isImporting.value = true
  importComplete.value = false
  importProgress.value = { message: `Creating environment '${importConfig.value.name}'...`, phase: '', progress: 0, error: null }

  try {
    const result = await executeImport(
      selectedFile.value,
      importConfig.value.name,
      importConfig.value.modelStrategy,
      importConfig.value.torchBackend
    )

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

function startImportPolling() {
  if (importPollInterval) return

  importPollInterval = setInterval(async () => {
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

        // Auto-switch if enabled
        if (importConfig.value.switchAfterImport && progress.environment_name) {
          emit('import-complete-switch', progress.environment_name)
        }
      } else if (progress.state === 'error') {
        stopImportPolling()
        importSuccess.value = false
        importResultMessage.value = progress.error || progress.message
        isImporting.value = false
        importComplete.value = true
      }
    } catch (err) {
      console.error('Failed to poll import progress:', err)
      // Continue polling - might be transient
    }
  }, 2000) // Poll every 2 seconds
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
</script>

<style scoped>
/* Empty State */
.import-empty {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-6);
}

/* Info Popover Steps */
.help-steps {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.help-step {
  display: flex;
  gap: var(--cg-space-3);
  align-items: flex-start;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: var(--cg-color-accent-muted);
  color: var(--cg-color-accent);
  border: 1px solid var(--cg-color-accent);
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-bold);
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-content strong {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  display: block;
  margin-bottom: var(--cg-space-1);
}

.step-content p {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
  margin: 0;
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

.loading-text {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
}
</style>
