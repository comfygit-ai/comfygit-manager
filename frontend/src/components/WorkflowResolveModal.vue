<template>
  <BaseModal
    :title="`RESOLVE DEPENDENCIES: ${workflowName}`"
    size="lg"
    :loading="loading"
    :error="error || undefined"
    @close="emit('close')"
  >
    <template #body>
      <!-- Wizard Stepper -->
      <ResolutionStepper
        v-if="analysisResult"
        :steps="wizardSteps"
        :current-step="currentStep"
        :completed-steps="completedSteps"
        @step-change="handleStepChange"
      >
        <!-- Analysis Step -->
        <div v-if="currentStep === 'analysis'" class="step-content">
          <div class="analysis-summary">
            <h3 class="summary-title">Analysis Complete</h3>
            <p class="summary-description">
              Found {{ analysisResult.stats.total_nodes }} nodes and {{ analysisResult.stats.total_models }} models in this workflow.
            </p>

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
                    <span class="stat-icon">⚡</span>
                    <span class="stat-count">{{ analysisResult.nodes.ambiguous.length }}</span>
                    <span class="stat-label">ambiguous</span>
                  </div>
                  <div v-if="analysisResult.nodes.unresolved.length > 0" class="stat-item error">
                    <span class="stat-icon">⚠</span>
                    <span class="stat-count">{{ analysisResult.nodes.unresolved.length }}</span>
                    <span class="stat-label">unresolved</span>
                  </div>
                </div>
              </div>

              <!-- Model Stats -->
              <div class="stat-card">
                <div class="stat-header">Models</div>
                <div class="stat-items">
                  <div class="stat-item success">
                    <span class="stat-icon">✓</span>
                    <span class="stat-count">{{ analysisResult.models.resolved.length }}</span>
                    <span class="stat-label">resolved</span>
                  </div>
                  <div v-if="analysisResult.models.ambiguous.length > 0" class="stat-item warning">
                    <span class="stat-icon">⚡</span>
                    <span class="stat-count">{{ analysisResult.models.ambiguous.length }}</span>
                    <span class="stat-label">ambiguous</span>
                  </div>
                  <div v-if="analysisResult.models.unresolved.length > 0" class="stat-item error">
                    <span class="stat-icon">⚠</span>
                    <span class="stat-count">{{ analysisResult.models.unresolved.length }}</span>
                    <span class="stat-label">unresolved</span>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="needsUserInput" class="user-action-required">
              <span class="action-icon">👤</span>
              <span class="action-text">User input required to resolve dependencies</span>
            </div>
            <div v-else class="all-resolved">
              <span class="success-icon">✓</span>
              <span class="success-text">All dependencies are resolved!</span>
            </div>
          </div>
        </div>

        <!-- Node Resolution Step -->
        <NodeResolutionStep
          v-if="currentStep === 'nodes'"
          :nodes="unresolvedAndAmbiguousNodes"
          :current-index="nodeCurrentIndex"
          :node-choices="nodeChoices"
          @next="handleNodeNext"
          @previous="handleNodePrevious"
          @complete="handleNodeComplete"
          @search="handleNodeSearch"
          @manual-entry="handleNodeManualEntry"
          @mark-optional="handleNodeMarkOptional"
          @skip="handleNodeSkip"
          @option-selected="handleNodeOptionSelected"
        />

        <!-- Model Resolution Step -->
        <ModelResolutionStep
          v-if="currentStep === 'models'"
          :models="unresolvedAndAmbiguousModels"
          :current-index="modelCurrentIndex"
          :model-choices="modelChoices"
          @next="handleModelNext"
          @previous="handleModelPrevious"
          @complete="handleModelComplete"
          @search="handleModelSearch"
          @download-url="handleModelDownloadUrl"
          @mark-optional="handleModelMarkOptional"
          @skip="handleModelSkip"
          @option-selected="handleModelOptionSelected"
        />

        <!-- Review Step -->
        <div v-if="currentStep === 'review'" class="step-content">
          <div class="review-summary">
            <h3 class="summary-title">Review Your Choices</h3>
            <p class="summary-description">
              Please review the dependencies that will be installed and the actions taken.
            </p>

            <!-- Node Choices Review -->
            <div v-if="nodeChoices.size > 0" class="review-section">
              <h4 class="section-title">Nodes ({{ nodeChoices.size }})</h4>
              <div class="review-items">
                <div v-for="[nodeType, choice] in nodeChoices" :key="nodeType" class="review-item">
                  <div class="item-name">{{ nodeType }}</div>
                  <div class="item-choice">
                    <span v-if="choice.action === 'install'" class="choice-badge install">
                      Install: {{ choice.package_id }}
                    </span>
                    <span v-else-if="choice.action === 'optional'" class="choice-badge optional">
                      Mark as Optional
                    </span>
                    <span v-else-if="choice.action === 'skip'" class="choice-badge skip">
                      Skip
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Model Choices Review -->
            <div v-if="modelChoices.size > 0" class="review-section">
              <h4 class="section-title">Models ({{ modelChoices.size }})</h4>
              <div class="review-items">
                <div v-for="[filename, choice] in modelChoices" :key="filename" class="review-item">
                  <div class="item-name">{{ filename }}</div>
                  <div class="item-choice">
                    <span v-if="choice.action === 'select'" class="choice-badge install">
                      Use: {{ choice.selected_model?.filename }}
                    </span>
                    <span v-else-if="choice.action === 'download'" class="choice-badge download">
                      Download from URL
                    </span>
                    <span v-else-if="choice.action === 'optional'" class="choice-badge optional">
                      Mark as Optional
                    </span>
                    <span v-else-if="choice.action === 'skip'" class="choice-badge skip">
                      Skip
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="nodeChoices.size === 0 && modelChoices.size === 0" class="no-choices">
              No actions selected. All items were skipped.
            </div>
          </div>
        </div>
      </ResolutionStepper>
    </template>

    <template #footer>
      <BaseButton variant="secondary" @click="emit('close')">
        Cancel
      </BaseButton>

      <!-- Analysis Step Footer -->
      <BaseButton
        v-if="currentStep === 'analysis'"
        variant="primary"
        :disabled="loading"
        @click="handleContinueFromAnalysis"
      >
        Continue
      </BaseButton>

      <!-- Review Step Footer -->
      <BaseButton
        v-if="currentStep === 'review'"
        variant="secondary"
        :disabled="applying"
        @click="goToPreviousStep"
      >
        Back
      </BaseButton>
      <BaseButton
        v-if="currentStep === 'review'"
        variant="primary"
        :disabled="applying"
        :loading="applying"
        @click="handleApply"
      >
        Apply
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useWorkflowResolution } from '@/composables/useWorkflowResolution'
import type {
  FullResolutionResult,
  UnresolvedNode,
  AmbiguousNode,
  UnresolvedModel,
  AmbiguousModel,
  NodeChoice,
  ModelChoice
} from '@/types/comfygit'
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'
import ResolutionStepper from './base/molecules/ResolutionStepper.vue'
import NodeResolutionStep from './base/organisms/NodeResolutionStep.vue'
import ModelResolutionStep from './base/organisms/ModelResolutionStep.vue'

const props = defineProps<{
  workflowName: string
}>()

const emit = defineEmits<{
  close: []
  install: []
  refresh: []
}>()

const { analyzeWorkflow, applyResolution } = useWorkflowResolution()

// State
const analysisResult = ref<FullResolutionResult | null>(null)
const loading = ref(false)
const applying = ref(false)
const error = ref<string | null>(null)

// Wizard state
type WizardStep = 'analysis' | 'nodes' | 'models' | 'review'
const currentStep = ref<WizardStep>('analysis')
const completedSteps = ref<WizardStep[]>([])
const nodeCurrentIndex = ref(0)
const modelCurrentIndex = ref(0)

// User choices
const nodeChoices = ref<Map<string, NodeChoice>>(new Map())
const modelChoices = ref<Map<string, ModelChoice>>(new Map())

// Wizard steps configuration
const wizardSteps = computed(() => {
  const steps = [
    { id: 'analysis', label: 'Analysis' }
  ]

  if (needsNodeResolution.value) {
    steps.push({ id: 'nodes', label: 'Nodes' })
  }

  if (needsModelResolution.value) {
    steps.push({ id: 'models', label: 'Models' })
  }

  steps.push({ id: 'review', label: 'Review' })

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

const unresolvedAndAmbiguousNodes = computed(() => {
  if (!analysisResult.value) return []

  // Transform unresolved nodes
  const unresolved = analysisResult.value.nodes.unresolved.map(node => ({
    node_type: node.reference.node_type,
    reason: node.reason,
    is_unresolved: true
  }))

  // Transform ambiguous nodes
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

const unresolvedAndAmbiguousModels = computed(() => {
  if (!analysisResult.value) return []

  // Transform unresolved models
  const unresolved = analysisResult.value.models.unresolved.map(model => ({
    filename: model.reference.widget_value,
    reference: model.reference,
    reason: model.reason,
    is_unresolved: true
  }))

  // Transform ambiguous models
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
  completedSteps.value.push('analysis')

  if (needsNodeResolution.value) {
    currentStep.value = 'nodes'
  } else if (needsModelResolution.value) {
    currentStep.value = 'models'
  } else {
    currentStep.value = 'review'
  }
}

function handleStepChange(stepId: string) {
  currentStep.value = stepId as WizardStep
}

function goToPreviousStep() {
  const currentIndex = wizardSteps.value.findIndex(s => s.id === currentStep.value)
  if (currentIndex > 0) {
    currentStep.value = wizardSteps.value[currentIndex - 1].id as WizardStep
  }
}

// Node resolution handlers
function handleNodeNext() {
  nodeCurrentIndex.value++
}

function handleNodePrevious() {
  if (nodeCurrentIndex.value > 0) {
    nodeCurrentIndex.value--
  } else {
    // Go back to analysis
    currentStep.value = 'analysis'
  }
}

function handleNodeComplete() {
  completedSteps.value.push('nodes')

  if (needsModelResolution.value) {
    currentStep.value = 'models'
  } else {
    currentStep.value = 'review'
  }
}

function handleNodeSearch(nodeType: string) {
  // Handle node search - to be implemented with search panel
  console.log('Node search:', nodeType)
  // For now, just allow continuing
  nodeChoices.value.set(nodeType, {
    action: 'skip'
  })
}

function handleNodeManualEntry(nodeType: string) {
  // Handle manual node entry - to be implemented with manual entry panel
  console.log('Manual entry for:', nodeType)
  // For now, mark as skipped so user can continue
  nodeChoices.value.set(nodeType, {
    action: 'skip'
  })
}

function handleNodeMarkOptional(nodeType: string) {
  console.log('[WorkflowResolveModal] handleNodeMarkOptional called with:', nodeType)
  nodeChoices.value.set(nodeType, {
    action: 'optional'
  })
  console.log('[WorkflowResolveModal] nodeChoices after optional:', Array.from(nodeChoices.value.entries()))
}

function handleNodeSkip(nodeType: string) {
  console.log('[WorkflowResolveModal] handleNodeSkip called with:', nodeType)
  nodeChoices.value.set(nodeType, {
    action: 'skip'
  })
  console.log('[WorkflowResolveModal] nodeChoices after skip:', Array.from(nodeChoices.value.entries()))
}

function handleNodeOptionSelected(nodeType: string, index: number) {
  const currentNode = unresolvedAndAmbiguousNodes.value.find(n => n.node_type === nodeType)
  if (currentNode && currentNode.options && currentNode.options[index]) {
    const selectedOption = currentNode.options[index]
    nodeChoices.value.set(nodeType, {
      action: 'install',
      package_id: selectedOption.package_id
    })
  }
}

// Model resolution handlers
function handleModelNext() {
  modelCurrentIndex.value++
}

function handleModelPrevious() {
  if (modelCurrentIndex.value > 0) {
    modelCurrentIndex.value--
  } else {
    // Go back to nodes or analysis
    currentStep.value = needsNodeResolution.value ? 'nodes' : 'analysis'
  }
}

function handleModelComplete() {
  completedSteps.value.push('models')
  currentStep.value = 'review'
}

function handleModelSearch(filename: string) {
  // Handle model search - to be implemented
  console.log('Model search:', filename)
  // For now, just allow continuing
  modelChoices.value.set(filename, {
    action: 'skip'
  })
}

function handleModelDownloadUrl(filename: string, url: string, targetPath?: string) {
  modelChoices.value.set(filename, {
    action: 'download',
    url,
    target_path: targetPath
  })
}

function handleModelMarkOptional(filename: string) {
  modelChoices.value.set(filename, {
    action: 'optional'
  })
}

function handleModelSkip(filename: string) {
  modelChoices.value.set(filename, {
    action: 'skip'
  })
}

function handleModelOptionSelected(filename: string, index: number) {
  const currentModel = unresolvedAndAmbiguousModels.value.find(m => m.filename === filename)
  if (currentModel && currentModel.options && currentModel.options[index]) {
    const selectedOption = currentModel.options[index]
    modelChoices.value.set(filename, {
      action: 'select',
      selected_model: selectedOption.model
    })
  }
}

async function handleApply() {
  applying.value = true
  error.value = null

  try {
    await applyResolution(props.workflowName, nodeChoices.value, modelChoices.value)
    emit('install')
    emit('refresh')
    emit('close')
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to apply resolution'
  } finally {
    applying.value = false
  }
}

onMounted(loadAnalysis)
</script>

<style scoped>
.step-content {
  padding: var(--cg-space-4);
}

.analysis-summary {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.summary-title {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-lg);
  font-weight: var(--cg-font-weight-semibold);
  margin: 0;
}

.summary-description {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-base);
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
  padding: var(--cg-space-3);
}

.stat-header {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
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

.stat-item.success {
  color: var(--cg-color-success);
}

.stat-item.warning {
  color: var(--cg-color-warning);
}

.stat-item.error {
  color: var(--cg-color-error);
}

.stat-icon {
  font-size: var(--cg-font-size-base);
}

.stat-count {
  font-family: var(--cg-font-mono);
  font-weight: var(--cg-font-weight-semibold);
}

.stat-label {
  color: var(--cg-color-text-secondary);
}

.user-action-required {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-warning);
  color: var(--cg-color-warning);
  font-size: var(--cg-font-size-base);
}

.action-icon {
  font-size: var(--cg-font-size-lg);
}

.all-resolved {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-success);
  color: var(--cg-color-success);
  font-size: var(--cg-font-size-base);
}

.success-icon {
  font-size: var(--cg-font-size-lg);
}

.review-summary {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.review-section {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.section-title {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-base);
  font-weight: var(--cg-font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  margin: 0;
}

.review-items {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.review-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--cg-space-2);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
}

.item-name {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  font-family: var(--cg-font-mono);
}

.item-choice {
  display: flex;
  gap: var(--cg-space-2);
}

.choice-badge {
  padding: 2px 8px;
  font-size: var(--cg-font-size-xs);
  font-family: var(--cg-font-mono);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  border: 1px solid;
}

.choice-badge.install,
.choice-badge.download {
  color: var(--cg-color-success);
  border-color: var(--cg-color-success);
}

.choice-badge.optional {
  color: var(--cg-color-info);
  border-color: var(--cg-color-info);
}

.choice-badge.skip {
  color: var(--cg-color-text-muted);
  border-color: var(--cg-color-border);
}

.no-choices {
  padding: var(--cg-space-4);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  text-align: center;
}
</style>
