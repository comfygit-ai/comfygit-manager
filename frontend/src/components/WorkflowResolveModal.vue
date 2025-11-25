<template>
  <BaseModal
    :title="`Resolve Dependencies: ${workflowName}`"
    size="lg"
    :loading="loading"
    :error="error || undefined"
    :fixed-height="true"
    @close="emit('close')"
  >
    <template #body>
      <!-- Loading State -->
      <div v-if="loading && !analysisResult" class="loading-state">
        <div class="loading-spinner"></div>
        <p>Analyzing workflow dependencies...</p>
      </div>

      <!-- Wizard Content -->
      <div v-else-if="analysisResult" class="wizard-content">
        <!-- Wizard Stepper - clickable for free navigation -->
        <ResolutionStepper
          :steps="wizardSteps"
          :current-step="currentStep"
          :completed-steps="completedSteps"
          :step-stats="stepStats"
          @step-change="navigateToStep"
        />

        <!-- Analysis Step -->
        <div v-if="currentStep === 'analysis'" class="step-content">
          <div class="analysis-summary">
            <div class="analysis-header">
              <h3 class="summary-title">Analysis Complete</h3>
              <p class="summary-description">
                Found {{ analysisResult.stats.total_nodes }} nodes and {{ analysisResult.stats.total_models }} models in this workflow.
              </p>
            </div>

            <div class="stats-grid">
              <!-- Node Stats -->
              <div class="stat-card">
                <div class="stat-header">Nodes</div>
                <div class="stat-items">
                  <div class="stat-item success">
                    <span class="stat-icon">✓</span>
                    <span class="stat-count">{{ analysisResult.nodes.resolved.length }}</span>
                    <span class="stat-label">resolved</span>
                  </div>
                  <div v-if="analysisResult.nodes.ambiguous.length > 0" class="stat-item warning">
                    <span class="stat-icon">?</span>
                    <span class="stat-count">{{ analysisResult.nodes.ambiguous.length }}</span>
                    <span class="stat-label">ambiguous</span>
                  </div>
                  <div v-if="analysisResult.nodes.unresolved.length > 0" class="stat-item error">
                    <span class="stat-icon">✗</span>
                    <span class="stat-count">{{ analysisResult.nodes.unresolved.length }}</span>
                    <span class="stat-label">missing</span>
                  </div>
                </div>
              </div>

              <!-- Model Stats -->
              <div class="stat-card">
                <div class="stat-header">Models</div>
                <div class="stat-items">
                  <div class="stat-item success">
                    <span class="stat-icon">✓</span>
                    <span class="stat-count">{{ analysisResult.models.resolved.length - analysisResult.stats.download_intents }}</span>
                    <span class="stat-label">resolved</span>
                  </div>
                  <div v-if="analysisResult.stats.download_intents > 0" class="stat-item info">
                    <span class="stat-icon">⬇</span>
                    <span class="stat-count">{{ analysisResult.stats.download_intents }}</span>
                    <span class="stat-label">pending download</span>
                  </div>
                  <div v-if="analysisResult.models.ambiguous.length > 0" class="stat-item warning">
                    <span class="stat-icon">?</span>
                    <span class="stat-count">{{ analysisResult.models.ambiguous.length }}</span>
                    <span class="stat-label">ambiguous</span>
                  </div>
                  <div v-if="analysisResult.models.unresolved.length > 0" class="stat-item error">
                    <span class="stat-icon">✗</span>
                    <span class="stat-count">{{ analysisResult.models.unresolved.length }}</span>
                    <span class="stat-label">missing</span>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="needsUserInput" class="status-message warning">
              <span class="status-icon">⚠</span>
              <span class="status-text">{{ unresolvedAndAmbiguousNodes.length + unresolvedAndAmbiguousModels.length }} items need your input</span>
            </div>
            <div v-else-if="hasDownloadIntents" class="status-message info">
              <span class="status-icon">⬇</span>
              <span class="status-text">{{ analysisResult.stats.download_intents }} model{{ analysisResult.stats.download_intents > 1 ? 's' : '' }} pending download - click Continue to review</span>
            </div>
            <div v-else class="status-message success">
              <span class="status-icon">✓</span>
              <span class="status-text">All dependencies are resolved!</span>
            </div>
          </div>
        </div>

        <!-- Node Resolution Step -->
        <NodeResolutionStep
          v-if="currentStep === 'nodes'"
          :nodes="unresolvedAndAmbiguousNodes"
          :node-choices="nodeChoices"
          @mark-optional="handleNodeMarkOptional"
          @skip="handleNodeSkip"
          @option-selected="handleNodeOptionSelected"
          @manual-entry="handleNodeManualEntry"
          @clear-choice="handleNodeClearChoice"
        />

        <!-- Model Resolution Step -->
        <ModelResolutionStep
          v-if="currentStep === 'models'"
          :models="allEditableModels"
          :model-choices="modelChoices"
          @mark-optional="handleModelMarkOptional"
          @skip="handleModelSkip"
          @option-selected="handleModelOptionSelected"
          @download-url="handleModelDownloadUrl"
          @clear-choice="handleModelClearChoice"
        />

        <!-- Review Step -->
        <div v-if="currentStep === 'review'" class="step-content">
          <div class="review-summary">
            <div class="review-header">
              <h3 class="summary-title">Review Your Choices</h3>
              <p class="summary-description">
                Confirm the actions to take. Items without explicit choices will be skipped.
              </p>
            </div>

            <!-- Summary Counts -->
            <div class="review-stats">
              <div class="review-stat">
                <span class="stat-value">{{ installCount }}</span>
                <span class="stat-label">to install</span>
              </div>
              <div class="review-stat">
                <span class="stat-value">{{ downloadCount }}</span>
                <span class="stat-label">to download</span>
              </div>
              <div class="review-stat">
                <span class="stat-value">{{ optionalCount }}</span>
                <span class="stat-label">optional</span>
              </div>
              <div class="review-stat">
                <span class="stat-value">{{ skippedCount }}</span>
                <span class="stat-label">skipped</span>
              </div>
            </div>

            <!-- Node Choices Review -->
            <div v-if="unresolvedAndAmbiguousNodes.length > 0" class="review-section">
              <h4 class="section-title">Node Packages ({{ unresolvedAndAmbiguousNodes.length }})</h4>
              <div class="review-items">
                <div
                  v-for="node in unresolvedAndAmbiguousNodes"
                  :key="node.node_type"
                  class="review-item"
                >
                  <code class="item-name">{{ node.node_type }}</code>
                  <div class="item-choice">
                    <template v-if="nodeChoices.has(node.node_type)">
                      <span v-if="nodeChoices.get(node.node_type)?.action === 'install'" class="choice-badge install">
                        {{ nodeChoices.get(node.node_type)?.package_id }}
                      </span>
                      <span v-else-if="nodeChoices.get(node.node_type)?.action === 'optional'" class="choice-badge optional">
                        Optional
                      </span>
                      <span v-else-if="nodeChoices.get(node.node_type)?.action === 'skip'" class="choice-badge skip">
                        Skip
                      </span>
                    </template>
                    <span v-else class="choice-badge pending">
                      No action (skipped)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Model Choices Review -->
            <div v-if="allEditableModels.length > 0" class="review-section">
              <h4 class="section-title">Models ({{ allEditableModels.length }})</h4>
              <div class="review-items">
                <div
                  v-for="model in allEditableModels"
                  :key="model.filename"
                  class="review-item"
                >
                  <code class="item-name">{{ model.filename }}</code>
                  <div class="item-choice">
                    <template v-if="modelChoices.has(model.filename)">
                      <span v-if="modelChoices.get(model.filename)?.action === 'select'" class="choice-badge install">
                        {{ modelChoices.get(model.filename)?.selected_model?.filename }}
                      </span>
                      <span v-else-if="modelChoices.get(model.filename)?.action === 'download'" class="choice-badge download">
                        Download
                      </span>
                      <span v-else-if="modelChoices.get(model.filename)?.action === 'optional'" class="choice-badge optional">
                        Optional
                      </span>
                      <span v-else-if="modelChoices.get(model.filename)?.action === 'skip'" class="choice-badge skip">
                        Skip
                      </span>
                      <span v-else-if="modelChoices.get(model.filename)?.action === 'cancel_download'" class="choice-badge skip">
                        Cancel Download
                      </span>
                    </template>
                    <template v-else-if="model.is_download_intent">
                      <span class="choice-badge download">
                        Pending Download
                      </span>
                    </template>
                    <span v-else class="choice-badge pending">
                      No action (skipped)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="unresolvedAndAmbiguousNodes.length === 0 && allEditableModels.length === 0" class="no-choices">
              No dependencies need resolution.
            </div>
          </div>
        </div>

        <!-- Applying Step -->
        <ApplyingStep
          v-if="currentStep === 'applying'"
          :progress="progress"
        />
      </div>
    </template>

    <template #footer>
      <!-- Back button (shown on all steps except analysis and applying) -->
      <BaseButton
        v-if="currentStep !== 'analysis' && currentStep !== 'applying'"
        variant="secondary"
        :disabled="applying"
        @click="navigateToPreviousSection"
      >
        ← Back
      </BaseButton>

      <div class="footer-spacer"></div>

      <!-- Cancel/Close button - changes behavior based on step -->
      <BaseButton
        v-if="currentStep !== 'applying' || progress.phase === 'complete' || progress.phase === 'error'"
        variant="secondary"
        @click="emit('close')"
      >
        {{ progress.phase === 'complete' ? 'Close' : 'Cancel' }}
      </BaseButton>

      <!-- Analysis Step: Continue -->
      <BaseButton
        v-if="currentStep === 'analysis'"
        variant="primary"
        :disabled="loading"
        @click="handleContinueFromAnalysis"
      >
        {{ (needsUserInput || hasDownloadIntents) ? 'Continue' : 'Apply' }}
      </BaseButton>

      <!-- Nodes Step: Continue to Models or Review -->
      <BaseButton
        v-if="currentStep === 'nodes'"
        variant="primary"
        @click="navigateToNextSection"
      >
        {{ (needsModelResolution || hasDownloadIntents) ? 'Continue to Models →' : 'Continue to Review →' }}
      </BaseButton>

      <!-- Models Step: Continue to Review -->
      <BaseButton
        v-if="currentStep === 'models'"
        variant="primary"
        @click="navigateToNextSection"
      >
        Continue to Review →
      </BaseButton>

      <!-- Review Step: Apply -->
      <BaseButton
        v-if="currentStep === 'review'"
        variant="primary"
        :disabled="applying"
        :loading="applying"
        @click="handleApply"
      >
        Apply Resolution
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useWorkflowResolution } from '@/composables/useWorkflowResolution'
import { useModelDownloadQueue } from '@/composables/useModelDownloadQueue'
import type {
  FullResolutionResult,
  NodeChoice,
  ModelChoice
} from '@/types/comfygit'
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'
import ResolutionStepper from './base/molecules/ResolutionStepper.vue'
import NodeResolutionStep from './base/organisms/NodeResolutionStep.vue'
import ModelResolutionStep from './base/organisms/ModelResolutionStep.vue'
import ApplyingStep from './base/organisms/ApplyingStep.vue'

const props = defineProps<{
  workflowName: string
}>()

const emit = defineEmits<{
  close: []
  install: []
  refresh: []
}>()

const { analyzeWorkflow, applyResolution, queueModelDownloads, progress, resetProgress } = useWorkflowResolution()
const { loadPendingDownloads } = useModelDownloadQueue()

// State
const analysisResult = ref<FullResolutionResult | null>(null)
const loading = ref(false)
const applying = ref(false)
const error = ref<string | null>(null)

// Wizard state
type WizardStep = 'analysis' | 'nodes' | 'models' | 'review' | 'applying'
const currentStep = ref<WizardStep>('analysis')
const completedSteps = ref<WizardStep[]>([])


// User choices
const nodeChoices = ref<Map<string, NodeChoice>>(new Map())
const modelChoices = ref<Map<string, ModelChoice>>(new Map())

// Wizard steps configuration - always show Models if there are download intents to review
const wizardSteps = computed(() => {
  const steps = [
    { id: 'analysis', label: 'Analysis' }
  ]

  if (needsNodeResolution.value) {
    steps.push({ id: 'nodes', label: 'Nodes' })
  }

  // Show Models step if there are unresolved/ambiguous OR download intents to review
  if (needsModelResolution.value || hasDownloadIntents.value) {
    steps.push({ id: 'models', label: 'Models' })
  }

  steps.push({ id: 'review', label: 'Review' })

  // Add applying step when in applying phase
  if (currentStep.value === 'applying') {
    steps.push({ id: 'applying', label: 'Applying' })
  }

  return steps
})

// Computed properties
const needsUserInput = computed(() => {
  if (!analysisResult.value) return false
  return analysisResult.value.stats.needs_user_input
})

const needsNodeResolution = computed(() => {
  if (!analysisResult.value) return false
  return analysisResult.value.nodes.unresolved.length > 0 ||
         analysisResult.value.nodes.ambiguous.length > 0
})

const needsModelResolution = computed(() => {
  if (!analysisResult.value) return false
  return analysisResult.value.models.unresolved.length > 0 ||
         analysisResult.value.models.ambiguous.length > 0
})

// Check if there are download intents that user might want to edit
const hasDownloadIntents = computed(() => {
  if (!analysisResult.value) return false
  return analysisResult.value.stats.download_intents > 0
})

// Download intents from resolved models - user can edit these
const downloadIntentModels = computed(() => {
  if (!analysisResult.value) return []
  return analysisResult.value.models.resolved
    .filter((m: { match_type: string }) => m.match_type === 'download_intent')
    .map((m: { reference: { widget_value: string; node_id: string; node_type: string }; model: { filename: string; hash: string; size: number; category: string; relative_path: string } | null; download_source?: string; target_path?: string }) => ({
      filename: m.reference.widget_value,
      reference: m.reference,
      is_download_intent: true,
      resolved_model: m.model,
      download_source: m.download_source,
      target_path: m.target_path
    }))
})

const unresolvedAndAmbiguousNodes = computed(() => {
  if (!analysisResult.value) return []

  const unresolved = analysisResult.value.nodes.unresolved.map(node => ({
    node_type: node.reference.node_type,
    reason: node.reason,
    is_unresolved: true,
    options: undefined as undefined | { package_id: string; title: string; match_confidence: number; match_type: string; is_installed: boolean }[]
  }))

  const ambiguous = analysisResult.value.nodes.ambiguous.map(node => ({
    node_type: node.reference.node_type,
    has_multiple_options: true,
    options: node.options.map(opt => ({
      package_id: opt.package.package_id,
      title: opt.package.title,
      match_confidence: opt.match_confidence,
      match_type: opt.match_type,
      is_installed: opt.is_installed
    }))
  }))

  return [...unresolved, ...ambiguous]
})

interface ModelOptionType {
  model: { filename: string; hash: string; size: number; category: string; relative_path: string }
  match_confidence: number
  match_type: string
  has_download_source?: boolean
}

const unresolvedAndAmbiguousModels = computed(() => {
  if (!analysisResult.value) return []

  const unresolved = analysisResult.value.models.unresolved.map(model => ({
    filename: model.reference.widget_value,
    reference: model.reference,
    reason: model.reason,
    is_unresolved: true,
    options: undefined as undefined | ModelOptionType[]
  }))

  const ambiguous = analysisResult.value.models.ambiguous.map(model => ({
    filename: model.reference.widget_value,
    reference: model.reference,
    has_multiple_options: true,
    options: model.options.map(opt => ({
      model: opt.model,
      match_confidence: opt.match_confidence,
      match_type: opt.match_type,
      has_download_source: opt.has_download_source
    }))
  }))

  return [...unresolved, ...ambiguous]
})

// Combined list including download intents for the Models step
const allEditableModels = computed(() => {
  const base = unresolvedAndAmbiguousModels.value

  // Add download intents as editable items (include existing URL/path for editing)
  const downloadIntents = downloadIntentModels.value.map(m => ({
    filename: m.filename,
    reference: m.reference,
    is_download_intent: true,
    resolved_model: m.resolved_model,
    download_source: m.download_source,
    target_path: m.target_path,
    options: undefined as undefined | ModelOptionType[]
  }))

  return [...base, ...downloadIntents]
})

// Review step computed counts
const installCount = computed(() => {
  let count = 0
  for (const choice of nodeChoices.value.values()) {
    if (choice.action === 'install') count++
  }
  for (const choice of modelChoices.value.values()) {
    if (choice.action === 'select') count++
  }
  return count
})

const downloadCount = computed(() => {
  let count = 0
  for (const choice of modelChoices.value.values()) {
    if (choice.action === 'download') count++
  }
  return count
})

const optionalCount = computed(() => {
  let count = 0
  for (const choice of nodeChoices.value.values()) {
    if (choice.action === 'optional') count++
  }
  for (const choice of modelChoices.value.values()) {
    if (choice.action === 'optional') count++
  }
  return count
})

const skippedCount = computed(() => {
  // Count items without choices + explicit skips
  let count = 0

  // Explicit skips
  for (const choice of nodeChoices.value.values()) {
    if (choice.action === 'skip') count++
  }
  for (const choice of modelChoices.value.values()) {
    if (choice.action === 'skip') count++
  }

  // Items without any choice (implicitly skipped)
  for (const node of unresolvedAndAmbiguousNodes.value) {
    if (!nodeChoices.value.has(node.node_type)) count++
  }
  for (const model of unresolvedAndAmbiguousModels.value) {
    if (!modelChoices.value.has(model.filename)) count++
  }

  return count
})

// Step stats for color-coded stepper
const stepStats = computed(() => {
  const stats: Record<string, { resolved: number; total: number }> = {}

  // Analysis is always "complete" once loaded
  stats['analysis'] = { resolved: 1, total: 1 }

  // Node stats
  if (needsNodeResolution.value) {
    const total = unresolvedAndAmbiguousNodes.value.length
    const resolved = unresolvedAndAmbiguousNodes.value.filter(
      n => nodeChoices.value.has(n.node_type)
    ).length
    stats['nodes'] = { resolved, total }
  }

  // Model stats - includes download intents
  if (needsModelResolution.value || hasDownloadIntents.value) {
    const total = allEditableModels.value.length
    // For download intents without changes, consider them "resolved" (keeping current state)
    const resolved = allEditableModels.value.filter(
      m => modelChoices.value.has(m.filename) || m.is_download_intent
    ).length
    stats['models'] = { resolved, total }
  }

  // Review is always accessible
  stats['review'] = { resolved: 1, total: 1 }

  // Applying step shows download progress
  if (currentStep.value === 'applying') {
    const total = progress.totalFiles || 1
    const resolved = progress.completedFiles.length
    stats['applying'] = { resolved, total }
  }

  return stats
})

// Navigation methods
function navigateToStep(stepId: string) {
  currentStep.value = stepId as WizardStep
}

function navigateToPreviousSection() {
  const currentIndex = wizardSteps.value.findIndex(s => s.id === currentStep.value)
  if (currentIndex > 0) {
    currentStep.value = wizardSteps.value[currentIndex - 1].id as WizardStep
  }
}

function navigateToNextSection() {
  const currentIndex = wizardSteps.value.findIndex(s => s.id === currentStep.value)
  if (currentIndex < wizardSteps.value.length - 1) {
    currentStep.value = wizardSteps.value[currentIndex + 1].id as WizardStep
  }
}

// Methods
async function loadAnalysis() {
  loading.value = true
  error.value = null

  try {
    analysisResult.value = await analyzeWorkflow(props.workflowName)
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to analyze workflow'
  } finally {
    loading.value = false
  }
}

function handleContinueFromAnalysis() {
  if (!completedSteps.value.includes('analysis')) {
    completedSteps.value.push('analysis')
  }

  if (needsNodeResolution.value) {
    currentStep.value = 'nodes'
  } else if (needsModelResolution.value || hasDownloadIntents.value) {
    currentStep.value = 'models'
  } else {
    currentStep.value = 'review'
  }
}

// Node resolution handlers
function handleNodeMarkOptional(nodeType: string) {
  nodeChoices.value.set(nodeType, { action: 'optional' })
}

function handleNodeSkip(nodeType: string) {
  nodeChoices.value.set(nodeType, { action: 'skip' })
}

function handleNodeOptionSelected(nodeType: string, index: number) {
  const node = unresolvedAndAmbiguousNodes.value.find(n => n.node_type === nodeType)
  if (node?.options?.[index]) {
    nodeChoices.value.set(nodeType, {
      action: 'install',
      package_id: node.options[index].package_id
    })
  }
}

function handleNodeManualEntry(nodeType: string, packageId: string) {
  nodeChoices.value.set(nodeType, {
    action: 'install',
    package_id: packageId
  })
}

function handleNodeClearChoice(nodeType: string) {
  nodeChoices.value.delete(nodeType)
}

// Model resolution handlers
function handleModelMarkOptional(filename: string) {
  modelChoices.value.set(filename, { action: 'optional' })
}

function handleModelSkip(filename: string) {
  modelChoices.value.set(filename, { action: 'skip' })
}

function handleModelOptionSelected(filename: string, index: number) {
  const model = unresolvedAndAmbiguousModels.value.find(m => m.filename === filename)
  if (model?.options?.[index]) {
    modelChoices.value.set(filename, {
      action: 'select',
      selected_model: model.options[index].model
    })
  }
}

function handleModelDownloadUrl(filename: string, url: string, targetPath?: string) {
  modelChoices.value.set(filename, {
    action: 'download',
    url,
    target_path: targetPath
  })
}

function handleModelClearChoice(filename: string) {
  modelChoices.value.delete(filename)
}

async function handleApply() {
  applying.value = true
  error.value = null
  resetProgress()
  progress.phase = 'resolving'
  currentStep.value = 'applying'

  try {
    // Step 1: Apply resolution (updates pyproject.toml, returns what to install/download)
    const result = await applyResolution(props.workflowName, nodeChoices.value, modelChoices.value)

    // Step 2: Queue model downloads to background download queue (non-blocking)
    if (result.models_to_download && result.models_to_download.length > 0) {
      queueModelDownloads(props.workflowName, result.models_to_download)
    }

    // Step 3: Store nodes to install for UI display
    progress.nodesToInstall = result.nodes_to_install || []
    progress.phase = 'complete'

    // Step 4: Refresh download queue to reflect any cancelled downloads
    await loadPendingDownloads()

    // Close modal after short delay to show completion message
    setTimeout(() => {
      emit('refresh')
      emit('install')
      emit('close')
    }, 1000)
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to apply resolution'
    progress.error = error.value
    progress.phase = 'error'
  } finally {
    applying.value = false
  }
}

onMounted(loadAnalysis)
</script>

<style scoped>
/* Loading State */
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--cg-space-8);
  gap: var(--cg-space-3);
  color: var(--cg-color-text-muted);
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

/* Wizard Content */
.wizard-content {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.step-content {
  padding: var(--cg-space-3);
}

/* Analysis Summary */
.analysis-summary {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.analysis-header,
.review-header {
  margin-bottom: var(--cg-space-2);
}

.summary-title {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-lg);
  font-weight: var(--cg-font-weight-semibold);
  margin: 0 0 var(--cg-space-1) 0;
}

.summary-description {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  margin: 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--cg-space-3);
}

.stat-card {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-lg);
  padding: var(--cg-space-3);
}

.stat-header {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  margin-bottom: var(--cg-space-2);
}

.stat-items {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.stat-item {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  font-size: var(--cg-font-size-sm);
}

.stat-item.success { color: var(--cg-color-success); }
.stat-item.warning { color: var(--cg-color-warning); }
.stat-item.error { color: var(--cg-color-error); }
.stat-item.info { color: var(--cg-color-info); }

.stat-icon {
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-bold);
}

.stat-count {
  font-family: var(--cg-font-mono);
  font-weight: var(--cg-font-weight-semibold);
}

.stat-label {
  color: inherit;
  opacity: 0.8;
}

/* Status Messages */
.status-message {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-3);
  border-radius: var(--cg-radius-md);
  font-size: var(--cg-font-size-sm);
}

.status-message.warning {
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
  color: var(--cg-color-warning);
}

.status-message.success {
  background: var(--cg-color-success-muted);
  border: 1px solid var(--cg-color-success);
  color: var(--cg-color-success);
}

.status-message.info {
  background: var(--cg-color-info-muted);
  border: 1px solid var(--cg-color-info);
  color: var(--cg-color-info);
}

.status-icon {
  font-size: var(--cg-font-size-lg);
}

/* Review Summary */
.review-summary {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.review-stats {
  display: flex;
  gap: var(--cg-space-4);
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-tertiary);
  border-radius: var(--cg-radius-lg);
}

.review-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.review-stat .stat-value {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xl);
  font-weight: var(--cg-font-weight-bold);
  color: var(--cg-color-text-primary);
}

.review-stat .stat-label {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.review-section {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.section-title {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  margin: 0;
  padding-bottom: var(--cg-space-1);
  border-bottom: 1px solid var(--cg-color-border-subtle);
}

.review-items {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
}

.review-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--cg-space-2) var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border-radius: var(--cg-radius-sm);
}

.item-name {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-accent);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 60%;
}

.item-choice {
  display: flex;
  gap: var(--cg-space-2);
}

.choice-badge {
  padding: var(--cg-space-1) var(--cg-space-2);
  font-size: var(--cg-font-size-xs);
  font-family: var(--cg-font-mono);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  border-radius: var(--cg-radius-sm);
}

.choice-badge.install,
.choice-badge.download {
  background: var(--cg-color-success-muted);
  color: var(--cg-color-success);
}

.choice-badge.optional {
  background: var(--cg-color-info-muted);
  color: var(--cg-color-info);
}

.choice-badge.skip {
  background: var(--cg-color-bg-hover);
  color: var(--cg-color-text-muted);
}

.choice-badge.pending {
  background: var(--cg-color-bg-tertiary);
  color: var(--cg-color-text-muted);
  font-style: italic;
}

.no-choices {
  padding: var(--cg-space-4);
  background: var(--cg-color-bg-secondary);
  border-radius: var(--cg-radius-md);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  text-align: center;
}

/* Footer layout */
.footer-spacer {
  flex: 1;
}
</style>
