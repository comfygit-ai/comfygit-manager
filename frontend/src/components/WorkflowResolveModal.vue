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

        <ActiveOverlaysNotice
          v-if="activeOverlays.length"
          :overlays="activeOverlays"
          description="Active overlays will be applied when dependency resolution installs custom nodes or syncs the environment."
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
                  <div v-if="resolvedNodesCount > 0" class="stat-item success">
                    <span class="stat-icon">✓</span>
                    <span class="stat-count">{{ resolvedNodesCount }}</span>
                    <span class="stat-label">resolved</span>
                  </div>
                  <div v-if="analysisResult.stats.packages_needing_installation > 0" class="stat-item info">
                    <span class="stat-icon">⬇</span>
                    <span class="stat-count">{{ analysisResult.stats.packages_needing_installation }}</span>
                    <span class="stat-label">to install</span>
                  </div>
                  <div v-if="ambiguousNodesNeedingChoiceCount > 0" class="stat-item warning">
                    <span class="stat-icon">?</span>
                    <span class="stat-count">{{ ambiguousNodesNeedingChoiceCount }}</span>
                    <span class="stat-label">ambiguous</span>
                  </div>
                  <div v-if="versionGatedNodes.length > 0" class="stat-item warning">
                    <span class="stat-icon">⚠</span>
                    <span class="stat-count">{{ versionGatedNodes.length }}</span>
                    <span class="stat-label">requires newer ComfyUI</span>
                  </div>
                  <div v-if="undecidedCommunityPackageCount > 0" class="stat-item warning">
                    <span class="stat-icon">⚠</span>
                    <span class="stat-count">{{ undecidedCommunityPackageCount }}</span>
                    <span class="stat-label">community-mapped</span>
                  </div>
                  <div v-if="unresolvedNodesNeedingChoiceCount > 0" class="stat-item error">
                    <span class="stat-icon">✗</span>
                    <span class="stat-count">{{ unresolvedNodesNeedingChoiceCount }}</span>
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
                    <span class="stat-count">{{ analysisResult.models.resolved.length - analysisResult.stats.download_intents - analysisResult.stats.models_with_category_mismatch }}</span>
                    <span class="stat-label">resolved</span>
                  </div>
                  <div v-if="analysisResult.stats.download_intents > 0" class="stat-item info">
                    <span class="stat-icon">⬇</span>
                    <span class="stat-count">{{ analysisResult.stats.download_intents }}</span>
                    <span class="stat-label">pending download</span>
                  </div>
                  <div v-if="hasCategoryMismatch" class="stat-item warning">
                    <span class="stat-icon">⚠</span>
                    <span class="stat-count">{{ categoryMismatchModels.length }}</span>
                    <span class="stat-label">wrong directory</span>
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

            <div v-if="itemsNeedingInputCount > 0" class="status-message warning">
              <span class="status-icon">⚠</span>
              <span class="status-text">{{ itemsNeedingInputCount }} item{{ itemsNeedingInputCount === 1 ? '' : 's' }} need your input</span>
            </div>
            <div v-else-if="hasBlockedNodeIssues" class="status-message warning">
              <span class="status-icon">⚠</span>
              <span class="status-text">{{ versionGatedNodes.length }} node type{{ versionGatedNodes.length > 1 ? 's are' : ' is' }} blocked and require manual action</span>
            </div>
            <div v-else-if="undecidedCommunityPackageCount > 0" class="status-message info">
              <span class="status-icon">⚠</span>
              <span class="status-text">{{ undecidedCommunityPackageCount }} community-mapped node type{{ undecidedCommunityPackageCount > 1 ? 's need' : ' needs' }} installation choices</span>
            </div>
            <div v-else-if="hasNodesToInstall" class="status-message info">
              <span class="status-icon">⬇</span>
              <span class="status-text">{{ analysisResult.stats.packages_needing_installation }} package{{ analysisResult.stats.packages_needing_installation > 1 ? 's' : '' }} to install ({{ analysisResult.stats.nodes_needing_installation }} node type{{ analysisResult.stats.nodes_needing_installation > 1 ? 's' : '' }}){{ hasDownloadIntents ? `, ${analysisResult.stats.download_intents} model${analysisResult.stats.download_intents > 1 ? 's' : ''} to download` : '' }}</span>
            </div>
            <div v-else-if="hasDownloadIntents" class="status-message info">
              <span class="status-icon">⬇</span>
              <span class="status-text">{{ analysisResult.stats.download_intents }} model{{ analysisResult.stats.download_intents > 1 ? 's' : '' }} pending download - click Continue to Review to proceed</span>
            </div>
            <!-- Category mismatch warning - shown even when "resolved" -->
            <div v-else-if="hasCategoryMismatch" class="status-message warning">
              <span class="status-icon">⚠</span>
              <span class="status-text">{{ categoryMismatchModels.length }} model{{ categoryMismatchModels.length > 1 ? 's' : '' }} in wrong directory (manual move required)</span>
            </div>
            <div v-else class="status-message success">
              <span class="status-icon">✓</span>
              <span class="status-text">All dependencies are resolved!</span>
            </div>

            <!-- Category mismatch details -->
            <div v-if="hasCategoryMismatch" class="category-mismatch-section">
              <h4 class="section-subtitle">Move these files manually:</h4>
              <div class="mismatch-list">
                <div v-for="model in categoryMismatchModels" :key="model.reference.widget_value" class="mismatch-item">
                  <code class="mismatch-path">{{ model.actual_category }}/{{ model.model?.filename }}</code>
                  <span class="mismatch-arrow">→</span>
                  <code class="mismatch-target">{{ model.expected_categories?.[0] }}/</code>
                  <BaseButton
                    v-if="model.file_path"
                    variant="ghost"
                    size="sm"
                    @click="handleOpenFileLocation(model.file_path)"
                  >
                    Open File Location
                  </BaseButton>
                </div>
              </div>
            </div>

            <!-- Version-gated details -->
            <div v-if="hasBlockedNodeIssues" class="category-mismatch-section">
              <h4 class="section-subtitle">Blocked node types:</h4>
              <div class="mismatch-list">
                <div v-for="node in versionGatedNodes" :key="`vg-${node.reference.node_type}`" class="mismatch-item">
                  <code class="mismatch-path">{{ node.reference.node_type }}</code>
                  <span class="status-text">{{ node.guidance || analysisResult.node_guidance?.[node.reference.node_type] || 'Requires a newer ComfyUI version.' }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Node Resolution Step -->
        <div v-if="currentStep === 'nodes'" class="step-content node-step-content">
          <NodeResolutionStep
            :nodes="unresolvedAndAmbiguousNodes"
            :node-choices="nodeChoices"
            :auto-resolved-packages="[]"
            :skipped-packages="skippedPackages"
            :installed-node-packs="availableNodePackChoices"
            @mark-optional="handleNodeMarkOptional"
            @skip="handleNodeSkip"
            @option-selected="handleNodeOptionSelected"
            @manual-entry="handleNodeManualEntry"
            @installed-pack-selected="handleNodeInstalledPackSelected"
            @clear-choice="handleNodeClearChoice"
            @package-skip="handlePackageSkip"
          />
        </div>

        <!-- Package Resolution Step -->
        <div v-if="currentStep === 'packages'" class="step-content package-step-content">
          <div class="package-step-header">
            <div>
              <h3 class="summary-title">Review Node Packages</h3>
              <p class="summary-description">
                Choose which package-level installs should run. These decisions are separate from mapping unresolved node names.
              </p>
            </div>
            <span class="stat-badge">{{ packagesResolvedCount }}/{{ packagesTotalCount }} decided</span>
          </div>

          <div v-if="autoResolvedPackages.length > 0" class="package-section">
            <div class="package-section-header">
              <div>
                <h4 class="package-section-title">Resolved Packages ({{ autoResolvedPackages.length }})</h4>
                <p class="package-section-description">
                  These packages were matched automatically. Skip any package you do not want installed.
                </p>
              </div>
              <span class="stat-badge">{{ packagesToInstallCount }}/{{ autoResolvedPackages.length }} to install</span>
            </div>

            <div class="package-list">
              <div
                v-for="pkg in autoResolvedPackages"
                :key="pkg.package_id"
                class="package-item"
              >
                <div class="package-info">
                  <code class="item-name">{{ pkg.package_id }}</code>
                  <span class="package-meta">{{ pkg.node_types_count }} node type{{ pkg.node_types_count > 1 ? 's' : '' }}</span>
                </div>
                <div class="package-actions">
                  <span v-if="!skippedPackages.has(pkg.package_id)" class="choice-badge install">Will Install</span>
                  <span v-else class="choice-badge skip">Skipped</span>
                  <BaseButton size="sm" variant="secondary" @click="handlePackageSkip(pkg.package_id)">
                    {{ skippedPackages.has(pkg.package_id) ? 'Include' : 'Skip' }}
                  </BaseButton>
                </div>
              </div>
            </div>
          </div>

          <div v-if="uninstallableNodeOptions.length > 0" class="community-node-section">
            <div class="community-node-header">
              <h4 class="community-node-title">Community-Mapped Packages ({{ uninstallableNodeOptions.length }})</h4>
              <p class="community-node-description">
                These mappings came from community metadata. Use a registry install only when a package version exists; otherwise install from Git or skip.
              </p>
            </div>

            <div class="community-node-list">
              <div
                v-for="node in uninstallableNodeOptions"
                :key="`community-${node.reference.node_type}-${node.package.package_id}`"
                class="community-node-item"
              >
                <div class="community-node-info">
                  <div class="community-node-heading">
                    <code class="item-name">{{ node.reference.node_type }}</code>
                    <span class="community-node-package">{{ node.package.title || node.package.package_id }}</span>
                  </div>
                  <div class="community-node-meta">{{ node.package.package_id }}</div>
                  <div class="community-node-guidance">
                    Found via community mapping — registry metadata may be incomplete.
                    <span v-if="node.guidance"> {{ node.guidance }}</span>
                  </div>
                </div>

                <div v-if="getUninstallableChoice(node.reference.node_type)" class="community-node-selection">
                  <div class="community-selected-label">
                    {{ getUninstallableSelectedLabel(node.reference.node_type) }}
                  </div>
                  <BaseButton
                    class="change-selection-button"
                    size="sm"
                    variant="ghost"
                    @click="clearUninstallableChoice(node.reference.node_type)"
                  >
                    Change Selection
                  </BaseButton>
                </div>

                <div v-else class="community-node-actions">
                  <BaseButton
                    v-if="hasRegistryInstall(node)"
                    class="community-choice-button install-choice"
                    size="sm"
                    variant="secondary"
                    :disabled="!node.package.package_id"
                    @click="setUninstallableChoice(node, 'registry')"
                  >
                    Install from Registry
                  </BaseButton>
                  <BaseButton
                    v-if="node.package.repository"
                    class="community-choice-button install-choice"
                    size="sm"
                    variant="secondary"
                    :disabled="!node.package.package_id"
                    @click="setUninstallableChoice(node, 'git')"
                  >
                    Install via Git
                  </BaseButton>
                  <BaseButton
                    class="community-choice-button"
                    size="sm"
                    variant="secondary"
                    @click="setUninstallableOptional(node.reference.node_type)"
                  >
                    Optional
                  </BaseButton>
                  <BaseButton
                    class="community-choice-button"
                    size="sm"
                    variant="secondary"
                    @click="setUninstallableSkip(node.reference.node_type)"
                  >
                    Skip
                  </BaseButton>
                </div>
              </div>
            </div>
          </div>

        </div>

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

            <!-- Nodes to Install (auto-resolved, need installation) -->
            <div v-if="autoResolvedPackages.length > 0" class="review-section">
              <h4 class="section-title">Node Packages ({{ autoResolvedPackages.length }})</h4>
              <div class="review-items">
                <div
                  v-for="pkg in autoResolvedPackages"
                  :key="pkg.package_id"
                  class="review-item"
                >
                  <code class="item-name">{{ pkg.package_id }}</code>
                  <div class="item-choice">
                    <span v-if="!skippedPackages.has(pkg.package_id)" class="choice-badge install">Will Install</span>
                    <span v-else class="choice-badge skip">Skipped</span>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="uninstallableNodeOptions.length > 0" class="review-section">
              <h4 class="section-title">Community-Mapped Packages ({{ uninstallableNodeOptions.length }})</h4>
              <div class="review-items">
                <div
                  v-for="node in uninstallableNodeOptions"
                  :key="`review-community-${node.reference.node_type}-${node.package.package_id}`"
                  class="review-item"
                >
                  <code class="item-name">{{ node.reference.node_type }}</code>
                  <div class="item-choice">
                    <span
                      v-if="getUninstallableChoice(node.reference.node_type)?.action === 'install'"
                      class="choice-badge install"
                    >
                      {{ getUninstallableChoice(node.reference.node_type)?.install_source === 'git' ? 'Install via Git' : 'Install from Registry' }}
                    </span>
                    <span
                      v-else-if="getUninstallableChoice(node.reference.node_type)?.action === 'optional'"
                      class="choice-badge optional"
                    >
                      Optional
                    </span>
                    <span
                      v-else
                      class="choice-badge skip"
                    >
                      Skip
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Node Choices Review (for ambiguous/unresolved nodes that needed user input) -->
            <div v-if="unresolvedAndAmbiguousNodes.length > 0" class="review-section">
              <h4 class="section-title">Node Choices ({{ unresolvedAndAmbiguousNodes.length }})</h4>
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
                      <span v-else-if="nodeChoices.get(node.node_type)?.action === 'map-installed'" class="choice-badge mapped">
                        Mapped to {{ nodeChoices.get(node.node_type)?.package_id }}
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

            <!-- Download Intent Details Section -->
            <div v-if="pendingDownloadsForReview.length > 0" class="review-section">
              <h4 class="section-title">Models to Download ({{ pendingDownloadsForReview.length }})</h4>
              <div class="review-items download-details">
                <div
                  v-for="download in pendingDownloadsForReview"
                  :key="download.filename"
                  class="review-item download-item"
                >
                  <div class="download-info">
                    <code class="item-name">{{ download.filename }}</code>
                    <div class="download-meta">
                      <span class="download-path">→ {{ download.target_path }}</span>
                      <span v-if="download.url" class="download-url" :title="download.url">
                        {{ truncateUrl(download.url) }}
                      </span>
                    </div>
                  </div>
                  <span class="choice-badge download">Will Download</span>
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

            <div v-if="nodesToInstall.length === 0 && uninstallableNodeOptions.length === 0 && unresolvedAndAmbiguousNodes.length === 0 && allEditableModels.length === 0" class="no-choices">
              No dependencies need resolution.
            </div>
          </div>
        </div>

        <!-- Applying Step -->
        <ApplyingStep
          v-if="currentStep === 'applying'"
          :progress="progress"
          @restart="handleRestart"
          @retry-failed="handleRetryFailed"
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
        {{ nextStepFromAnalysis === 'review' ? 'Continue to Review →' : 'Continue' }}
      </BaseButton>

      <!-- Resolution Steps: Continue -->
      <BaseButton
        v-if="currentStep === 'nodes' || currentStep === 'packages' || currentStep === 'models'"
        variant="primary"
        @click="navigateToNextSection"
      >
        Continue to {{ getNextStepLabel() }} →
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
import { useComfyGitService } from '@/composables/useComfyGitService'
import type {
  FullResolutionResult,
  NodeChoice,
  ModelChoice,
  NodeInfo,
  DependencyOverlayInfo,
} from '@/types/comfygit'
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'
import ActiveOverlaysNotice from './base/molecules/ActiveOverlaysNotice.vue'
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
  restart: []
}>()

const { analyzeWorkflow, applyResolution, installNodes, queueModelDownloads, progress, resetProgress } = useWorkflowResolution()
const { loadPendingDownloads } = useModelDownloadQueue()
const { openFileLocation, queueNodeInstall, getNodes, getConfig, syncEnvironmentManually } = useComfyGitService()

// State
const analysisResult = ref<FullResolutionResult | null>(null)
const installedNodePacks = ref<Array<{ package_id: string; source: string }>>([])
const loading = ref(false)
const applying = ref(false)
const error = ref<string | null>(null)
const activeOverlays = ref<DependencyOverlayInfo[]>([])

// Wizard state
type WizardStep = 'analysis' | 'nodes' | 'packages' | 'models' | 'review' | 'applying'
const currentStep = ref<WizardStep>('analysis')
const completedSteps = ref<WizardStep[]>([])


// User choices
const nodeChoices = ref<Map<string, NodeChoice>>(new Map())
const modelChoices = ref<Map<string, ModelChoice>>(new Map())

// Track which auto-resolved packages user wants to skip
const skippedPackages = ref<Set<string>>(new Set())

// Wizard steps configuration
const wizardSteps = computed(() => {
  const steps = [
    { id: 'analysis', label: 'Analysis' }
  ]

  // Show Nodes only for node-type mapping decisions.
  if (needsNodeResolution.value) {
    steps.push({ id: 'nodes', label: 'Nodes' })
  }

  // Show Packages for package-level install/skip choices.
  if (hasPackageResolution.value) {
    steps.push({ id: 'packages', label: 'Packages' })
  }

  // Show Models step ONLY if user needs to make choices (unresolved/ambiguous)
  if (needsModelResolution.value) {
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

const undecidedCommunityPackageCount = computed(() => {
  return uninstallableNodeOptions.value.filter(
    node => !nodeChoices.value.has(node.reference.node_type)
  ).length
})

const itemsNeedingInputCount = computed(() => {
  const undecidedNodeCount = unresolvedAndAmbiguousNodes.value.filter(
    node => !nodeChoices.value.has(node.node_type)
  ).length

  return undecidedNodeCount +
    unresolvedAndAmbiguousModels.value.length +
    undecidedCommunityPackageCount.value
})

const unresolvedNodesNeedingChoiceCount = computed(() => {
  if (!analysisResult.value) return 0
  return analysisResult.value.nodes.unresolved.filter(
    node => !nodeChoices.value.has(node.reference.node_type)
  ).length
})

const ambiguousNodesNeedingChoiceCount = computed(() => {
  if (!analysisResult.value) return 0
  return analysisResult.value.nodes.ambiguous.filter(
    node => !nodeChoices.value.has(node.reference.node_type)
  ).length
})

const versionGatedNodes = computed(() => {
  if (!analysisResult.value) return []
  return analysisResult.value.nodes.version_gated || []
})

const uninstallableNodes = computed(() => {
  if (!analysisResult.value) return []
  return analysisResult.value.nodes.uninstallable || []
})

const uninstallableNodeOptions = computed(() => {
  return uninstallableNodes.value.filter(node => !!node.package?.package_id)
})

const hasBlockedNodeIssues = computed(() => {
  return versionGatedNodes.value.length > 0
})

const needsNodeResolution = computed(() => {
  if (!analysisResult.value) return false
  return analysisResult.value.nodes.unresolved.length > 0 ||
         analysisResult.value.nodes.ambiguous.length > 0 ||
         savedMappedResolvedNodes.value.length > 0
})

const needsModelResolution = computed(() => {
  if (!analysisResult.value) return false
  return analysisResult.value.models.unresolved.length > 0 ||
         analysisResult.value.models.ambiguous.length > 0 ||
         savedOptionalModels.value.length > 0
})

// Check if there are download intents that user might want to edit
const hasDownloadIntents = computed(() => {
  if (!analysisResult.value) return false
  return analysisResult.value.stats.download_intents > 0
})

// Check if there are nodes that need their packages installed
const hasNodesToInstall = computed(() => {
  if (!analysisResult.value) return false
  return analysisResult.value.stats.nodes_needing_installation > 0
})

const hasCommunityPackages = computed(() => uninstallableNodeOptions.value.length > 0)

const hasPackageResolution = computed(() => hasNodesToInstall.value || hasCommunityPackages.value)

// Count of all resolved nodes (matched to packages, may or may not be installed)
const resolvedNodesCount = computed(() => {
  if (!analysisResult.value) return 0
  return analysisResult.value.nodes.resolved.length
})

// Category mismatch detection (models in wrong directory - blocking issue)
const categoryMismatchModels = computed(() => {
  if (!analysisResult.value) return []
  return analysisResult.value.models.resolved.filter(m => m.has_category_mismatch)
})

const hasCategoryMismatch = computed(() => categoryMismatchModels.value.length > 0)

// Determine next step from Analysis
const nextStepFromAnalysis = computed(() => {
  if (needsNodeResolution.value) {
    return 'nodes'
  } else if (hasPackageResolution.value) {
    return 'packages'
  } else if (needsModelResolution.value) {
    return 'models'
  }
  return 'review'
})

// Packages that are resolved but not installed (for review/installation)
// Deduplicated by package_id since multiple node types can come from one package
const nodesToInstall = computed(() => {
  if (!analysisResult.value) return []
  const uninstalledNodes = analysisResult.value.nodes.resolved.filter(n => !n.is_installed)
  // Dedupe by package_id
  const seen = new Set<string>()
  return uninstalledNodes.filter(n => {
    if (seen.has(n.package.package_id)) return false
    seen.add(n.package.package_id)
    return true
  })
})

// Auto-resolved packages with node type counts (for NodeResolutionStep)
const autoResolvedPackages = computed(() => {
  if (!analysisResult.value) return []
  const uninstalledNodes = analysisResult.value.nodes.resolved.filter(n => !n.is_installed)
  // Group by package_id and count node types
  const packageMap = new Map<string, { package_id: string; title: string; node_types_count: number }>()
  for (const node of uninstalledNodes) {
    const pkg = packageMap.get(node.package.package_id)
    if (pkg) {
      pkg.node_types_count++
    } else {
      packageMap.set(node.package.package_id, {
        package_id: node.package.package_id,
        title: node.package.title,
        node_types_count: 1
      })
    }
  }
  return Array.from(packageMap.values())
})

const packagesToInstallCount = computed(() => {
  return autoResolvedPackages.value.filter(pkg => !skippedPackages.value.has(pkg.package_id)).length
})

const packagesTotalCount = computed(() => {
  return autoResolvedPackages.value.length + uninstallableNodeOptions.value.length
})

const packagesResolvedCount = computed(() => {
  const communityResolved = uninstallableNodeOptions.value.filter(
    node => nodeChoices.value.has(node.reference.node_type)
  ).length
  return autoResolvedPackages.value.length + communityResolved
})

// Final list of packages to install (excluding skipped)
const finalNodesToInstall = computed(() => {
  return nodesToInstall.value.filter(n => !skippedPackages.value.has(n.package.package_id))
})

// Download intents from resolved models - user can edit these
// Note: Backend returns two match types for download intents:
//   - 'download_intent': from pyproject.toml model entries
//   - 'property_download_intent': from workflow node properties (embedded URLs)
const downloadIntentModels = computed(() => {
  if (!analysisResult.value) return []
  return analysisResult.value.models.resolved
    .filter((m: { match_type: string }) =>
      m.match_type === 'download_intent' || m.match_type === 'property_download_intent'
    )
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

  const savedMapped = savedMappedResolvedNodes.value.map(node => ({
    node_type: node.reference.node_type,
    reason: 'saved_mapping',
    is_unresolved: false,
    options: undefined as undefined | { package_id: string; title: string; match_confidence: number; match_type: string; is_installed: boolean }[]
  }))

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

  return [...savedMapped, ...unresolved, ...ambiguous]
})

const savedMappedResolvedNodes = computed(() => {
  if (!analysisResult.value) return []
  return analysisResult.value.nodes.resolved.filter(
    node => node.saved_choice?.action === 'map-installed'
  )
})

const availableNodePackChoices = computed(() => {
  const packs = new Map<string, { package_id: string; source: string }>()

  for (const pack of installedNodePacks.value) {
    packs.set(pack.package_id, pack)
  }

  for (const choice of nodeChoices.value.values()) {
    if (choice.action !== 'install' || !choice.package_id) {
      continue
    }
    if (packs.has(choice.package_id)) {
      continue
    }
    packs.set(choice.package_id, {
      package_id: choice.package_id,
      source: choice.install_source === 'git' ? 'selected-git' : 'selected'
    })
  }

  return Array.from(packs.values())
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

const savedOptionalModels = computed(() => {
  if (!analysisResult.value) return []

  const reconstructed = (analysisResult.value.models.saved_optional || []).map(model => ({
    filename: model.filename || model.reference.widget_value,
    reference: model.reference,
    reason: model.reason,
    is_unresolved: true,
    is_saved_optional: true,
    options: undefined as undefined | ModelOptionType[]
  }))

  const resolvedOptional = analysisResult.value.models.resolved
    .filter(model => model.is_optional)
    .map(model => ({
      filename: model.reference.widget_value,
      reference: model.reference,
      reason: 'saved_optional',
      is_unresolved: true,
      is_saved_optional: true,
      options: undefined as undefined | ModelOptionType[]
    }))

  return [...reconstructed, ...resolvedOptional]
})

// Combined list including download intents for the Models step
const allEditableModels = computed(() => {
  const base = unresolvedAndAmbiguousModels.value
  const existingFilenames = new Set(base.map(model => model.filename))
  const savedOptional = savedOptionalModels.value.filter(
    model => !existingFilenames.has(model.filename)
  )

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

  return [...base, ...savedOptional, ...downloadIntents]
})

// Download intents that will actually be downloaded (for Review step details)
const pendingDownloadsForReview = computed(() => {
  return downloadIntentModels.value.filter(model => {
    const choice = modelChoices.value.get(model.filename)
    // Include if no choice (default = download) or explicit download action
    // Exclude if cancelled/skipped/optional
    if (!choice) return true
    return choice.action === 'download'
  }).map(model => ({
    filename: model.filename,
    url: model.download_source,
    target_path: model.target_path
  }))
})

// Helper to truncate long URLs for display
function truncateUrl(url: string, maxLen = 50): string {
  if (url.length <= maxLen) return url
  return url.slice(0, maxLen - 3) + '...'
}

// Review step computed counts
const installCount = computed(() => {
  // Start with auto-install nodes (resolved but not installed, minus skipped)
  let count = finalNodesToInstall.value.length

  // Add user-selected node installs (for ambiguous/unresolved)
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

  // Count explicit user download choices
  for (const choice of modelChoices.value.values()) {
    if (choice.action === 'download') count++
  }

  // Count download intents that haven't been cancelled or modified by user
  // These will be downloaded even without explicit user action
  for (const model of downloadIntentModels.value) {
    const choice = modelChoices.value.get(model.filename)

    // Only count if no choice was made (intent is preserved and will be downloaded)
    if (!choice) {
      count++
    }
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
  // Count items without choices + explicit skips + skipped packages
  let count = skippedPackages.value.size

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
    const unresolvedTotal = unresolvedAndAmbiguousNodes.value.length
    const unresolvedResolved = unresolvedAndAmbiguousNodes.value.filter(
      n => nodeChoices.value.has(n.node_type)
    ).length
    stats['nodes'] = { resolved: unresolvedResolved, total: unresolvedTotal }
  }

  // Package stats
  if (hasPackageResolution.value) {
    stats['packages'] = {
      resolved: packagesResolvedCount.value,
      total: packagesTotalCount.value || 1
    }
  }

  // Model stats - only for models needing user choices
  if (needsModelResolution.value) {
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

function getNextStepLabel(): string {
  const currentIndex = wizardSteps.value.findIndex(s => s.id === currentStep.value)
  const nextStep = wizardSteps.value[currentIndex + 1]
  return nextStep?.label || 'Review'
}

function hasRegistryInstall(node: (typeof uninstallableNodeOptions.value)[number]): boolean {
  return Boolean(node.package?.latest_version)
}

function sourceRank(source: string): number {
  switch (source) {
    case 'development':
      return 0
    case 'git':
      return 1
    case 'registry':
      return 2
    default:
      return 3
  }
}

function buildInstalledNodePackChoices(nodes: NodeInfo[]): Array<{ package_id: string; source: string }> {
  return nodes
    .filter((node) => node.installed && node.tracked)
    .filter((node) => node.name !== 'comfygit-manager')
    .map((node) => ({
      package_id: node.registry_id || node.name,
      source: node.source,
    }))
    .filter((node, index, arr) => arr.findIndex((item) => item.package_id === node.package_id) === index)
    .sort((a, b) => {
      const sourceDelta = sourceRank(a.source) - sourceRank(b.source)
      if (sourceDelta !== 0) return sourceDelta
      return a.package_id.localeCompare(b.package_id)
    })
}

// Methods
function setNodeChoice(nodeType: string, choice: NodeChoice) {
  const choices = new Map(nodeChoices.value)
  choices.set(nodeType, choice)
  nodeChoices.value = choices
}

function deleteNodeChoice(nodeType: string) {
  const choices = new Map(nodeChoices.value)
  choices.delete(nodeType)
  nodeChoices.value = choices
}

async function loadAnalysis() {
  loading.value = true
  error.value = null

  try {
    const [analysis, nodes] = await Promise.all([
      analyzeWorkflow(props.workflowName),
      getNodes(),
    ])
    analysisResult.value = analysis
    installedNodePacks.value = buildInstalledNodePackChoices(nodes.nodes)
    initializeSavedNodeChoices(analysis)
    initializeSavedModelChoices(analysis)
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to analyze workflow'
  } finally {
    loading.value = false
  }
}

async function loadActiveOverlays() {
  try {
    const config = await getConfig()
    activeOverlays.value = config.active_overlays || []
  } catch (err) {
    activeOverlays.value = []
    console.debug('[ComfyGit] Unable to load active overlays for workflow resolution:', err)
  }
}

function initializeSavedNodeChoices(analysis: FullResolutionResult) {
  const choices = new Map<string, NodeChoice>()

  for (const node of analysis.nodes.unresolved) {
    if (node.saved_choice) {
      choices.set(node.reference.node_type, node.saved_choice)
    }
  }

  for (const node of analysis.nodes.resolved) {
    if (node.saved_choice) {
      choices.set(node.reference.node_type, node.saved_choice)
    }
  }

  for (const node of analysis.nodes.ambiguous) {
    if (node.saved_choice) {
      choices.set(node.reference.node_type, node.saved_choice)
    }
  }

  for (const node of analysis.nodes.uninstallable) {
    if (node.saved_choice) {
      choices.set(node.reference.node_type, node.saved_choice)
    }
  }

  nodeChoices.value = choices
}

function initializeSavedModelChoices(analysis: FullResolutionResult) {
  modelChoices.value.clear()

  for (const model of analysis.models.saved_optional || []) {
    if (model.saved_choice) {
      modelChoices.value.set(model.filename || model.reference.widget_value, model.saved_choice)
    }
  }

  for (const model of analysis.models.unresolved) {
    if (model.saved_choice) {
      modelChoices.value.set(model.filename || model.reference.widget_value, model.saved_choice)
    }
  }

  for (const model of analysis.models.ambiguous) {
    if (model.saved_choice) {
      modelChoices.value.set(model.reference.widget_value, model.saved_choice)
    }
  }

  for (const model of analysis.models.resolved) {
    if (model.is_optional) {
      modelChoices.value.set(model.reference.widget_value, { action: 'optional' })
    }
  }
}

function handleContinueFromAnalysis() {
  if (!completedSteps.value.includes('analysis')) {
    completedSteps.value.push('analysis')
  }

  if (needsNodeResolution.value) {
    currentStep.value = 'nodes'
  } else if (hasPackageResolution.value) {
    currentStep.value = 'packages'
  } else if (needsModelResolution.value) {
    // Only go to models if user needs to make choices
    // Download intents don't need user input - skip to review
    currentStep.value = 'models'
  } else {
    currentStep.value = 'review'
  }
}

// Node resolution handlers
function handleNodeMarkOptional(nodeType: string) {
  setNodeChoice(nodeType, { action: 'optional' })
}

function handleNodeSkip(nodeType: string) {
  setNodeChoice(nodeType, { action: 'skip' })
}

function handleNodeOptionSelected(nodeType: string, index: number) {
  const node = unresolvedAndAmbiguousNodes.value.find(n => n.node_type === nodeType)
  if (node?.options?.[index]) {
    setNodeChoice(nodeType, {
      action: 'install',
      package_id: node.options[index].package_id
    })
  }
}

function handleNodeManualEntry(nodeType: string, packageId: string, choice: Partial<NodeChoice> = {}) {
  setNodeChoice(nodeType, {
    action: 'install',
    package_id: packageId,
    install_source: choice.install_source,
    repository: choice.repository,
    version: choice.version
  })
}

function handleNodeInstalledPackSelected(nodeType: string, packageId: string) {
  setNodeChoice(nodeType, {
    action: 'map-installed',
    package_id: packageId
  })
}

function handleNodeClearChoice(nodeType: string) {
  deleteNodeChoice(nodeType)
}

function getUninstallableChoice(nodeType: string): NodeChoice | undefined {
  return nodeChoices.value.get(nodeType)
}

function getUninstallableSelectedLabel(nodeType: string): string {
  const choice = getUninstallableChoice(nodeType)
  if (!choice) return 'Undecided'
  if (choice.action === 'optional') return 'Will be marked optional'
  if (choice.action === 'skip') return 'Will be skipped'
  if (choice.action === 'install') {
    return choice.install_source === 'git' ? 'Will install via Git' : 'Will install from Registry'
  }
  return 'Undecided'
}

function setUninstallableChoice(node: (typeof uninstallableNodeOptions.value)[number], installSource: 'registry' | 'git') {
  const packageId = node.package?.package_id
  if (!packageId) return

  const choice: NodeChoice = {
    action: 'install',
    package_id: packageId,
    version: node.package.latest_version || null,
    install_source: installSource
  }

  if (installSource === 'git' && node.package.repository) {
    choice.repository = node.package.repository
  }

  setNodeChoice(node.reference.node_type, choice)
}

function setUninstallableOptional(nodeType: string) {
  setNodeChoice(nodeType, { action: 'optional' })
}

function setUninstallableSkip(nodeType: string) {
  setNodeChoice(nodeType, { action: 'skip' })
}

function clearUninstallableChoice(nodeType: string) {
  deleteNodeChoice(nodeType)
}

// Auto-resolved package skip handler
function handlePackageSkip(packageId: string) {
  if (skippedPackages.value.has(packageId)) {
    skippedPackages.value.delete(packageId)
  } else {
    skippedPackages.value.add(packageId)
  }
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

// Category mismatch handler - open file location in file manager
async function handleOpenFileLocation(filePath: string) {
  try {
    await openFileLocation(filePath)
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to open file location'
  }
}

async function handleApply() {
  applying.value = true
  error.value = null
  resetProgress()
  progress.phase = 'resolving'
  currentStep.value = 'applying'

  try {
    // Step 1: Apply resolution (updates pyproject.toml, returns what to install/download)
    const result = await applyResolution(props.workflowName, nodeChoices.value, modelChoices.value, skippedPackages.value)

    // Step 2: Queue model downloads to background download queue (non-blocking)
    if (result.models_to_download && result.models_to_download.length > 0) {
      queueModelDownloads(props.workflowName, result.models_to_download)
    }
    progress.nodesMarkedOptional = result.nodes_marked_optional || []
    progress.nodesMapped = result.nodes_mapped || []
    progress.modelsMarkedOptional = result.models_marked_optional || []
    progress.modelDownloadIntentsChanged = result.model_download_intents_changed || []
    progress.modelPathsSynced = result.model_paths_synced || 0

    const gitInstallSpecs = Array.from(nodeChoices.value.values())
      .map(choice => {
        if (choice?.action !== 'install' || choice.install_source !== 'git') {
          return null
        }
        const repository = choice.repository
        const packageId = choice.package_id
        if (!repository || !packageId) {
          return null
        }
        return {
          id: packageId,
          repository,
          selectedVersion: choice.version || 'latest'
        }
      })
      .filter((spec): spec is { id: string; repository: string; selectedVersion: string } => Boolean(spec))

    const gitPackageIds = new Set(gitInstallSpecs.map(spec => spec.id))
    const explicitInstallPackageIds = new Set(
      Array.from(nodeChoices.value.values())
        .filter(choice => choice?.action === 'install' && Boolean(choice.package_id))
        .map(choice => choice.package_id as string)
    )

    // Step 3: Store nodes to install for UI display (include auto-install nodes, minus skipped)
    const allNodesToInstall = [
      ...(result.nodes_to_install || []),
      ...finalNodesToInstall.value
        .filter(n => !explicitInstallPackageIds.has(n.package.package_id))
        .map(n => n.package.package_id)
    ]
    // Deduplicate and remove explicit git installs from registry install list
    progress.nodesToInstall = [...new Set(allNodesToInstall)].filter(pkgId => !gitPackageIds.has(pkgId))

    // Step 4: Install registry nodes if any
    if (progress.nodesToInstall.length > 0) {
      await installNodes(props.workflowName)
    }

    // Step 5: Queue explicit git installs after apply-resolution completes
    if (gitInstallSpecs.length > 0) {
      progress.phase = 'installing'
      const existingCompleted = progress.nodeInstallProgress?.completedNodes || []
      const existingTotal = progress.nodeInstallProgress?.totalNodes || progress.nodesToInstall.length
      progress.nodesToInstall = [
        ...progress.nodesToInstall,
        ...gitInstallSpecs.map(spec => spec.id)
      ]
      progress.nodeInstallProgress = {
        completedNodes: existingCompleted,
        totalNodes: existingTotal + gitInstallSpecs.length
      }

      for (const spec of gitInstallSpecs) {
        const installIndex = progress.nodeInstallProgress.completedNodes.length
        progress.nodeInstallProgress.currentNode = spec.id
        progress.nodeInstallProgress.currentIndex = installIndex

        try {
          const queueResult = await queueNodeInstall({
            id: spec.id,
            version: spec.selectedVersion,
            selected_version: spec.selectedVersion,
            repository: spec.repository,
            install_source: 'git',
            mode: 'remote',
            channel: 'default'
          })
          if (queueResult.status?.status_str === 'dependency_review_required') {
            progress.nodeInstallProgress.completedNodes.push({
              node_id: spec.id,
              success: false,
              error: queueResult.status.messages?.[0] || 'Dependency review required',
              dependency_review: queueResult.status.dependency_review
            })
            progress.dependencyReviews = [
              ...(progress.dependencyReviews || []),
              ...(queueResult.status.dependency_review
                ? [{ node_id: spec.id, dependency_review: queueResult.status.dependency_review }]
                : [])
            ]
            continue
          }
          progress.nodeInstallProgress.completedNodes.push({
            node_id: spec.id,
            success: true
          })
          progress.nodesInstalled = [...new Set([...progress.nodesInstalled, spec.id])]
          progress.needsRestart = true
        } catch (err) {
          const message = err instanceof Error ? err.message : `Failed to install ${spec.id}`
          progress.nodeInstallProgress.completedNodes.push({
            node_id: spec.id,
            success: false,
            error: message
          })
          progress.installError = message
        }
      }
    }

    if (progress.needsRestart) {
      const syncResult = await syncEnvironmentManually('skip', false, true)
      if (syncResult.status !== 'success') {
        const details = syncResult.errors?.length
          ? syncResult.errors.join('; ')
          : syncResult.message
        throw new Error(details ? `Environment sync failed: ${details}` : 'Environment sync failed')
      }
    }

    // Step 6: Mark complete
    progress.phase = 'complete'

    // Step 7: Refresh download queue to reflect any cancelled downloads
    await loadPendingDownloads()

    window.dispatchEvent(new CustomEvent('comfygit:status-refresh'))
    emit('refresh')
    emit('install')
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to apply resolution'
    progress.error = error.value
    progress.phase = 'error'
  } finally {
    applying.value = false
  }
}

function handleRestart() {
  emit('refresh')
  emit('restart')
  emit('close')
}

async function handleRetryFailed() {
  // Get the failed package IDs
  const failedPackages = progress.nodeInstallProgress?.completedNodes
    .filter(n => !n.success)
    .map(n => n.node_id) || []

  if (failedPackages.length === 0) return

  // Reset progress for retry
  progress.phase = 'installing'
  progress.nodeInstallProgress = {
    completedNodes: [],
    totalNodes: failedPackages.length
  }
  progress.nodesToInstall = failedPackages
  progress.nodesInstalled = []
  progress.installError = undefined

  try {
    await installNodes(props.workflowName)
    progress.phase = 'complete'
  } catch (err) {
    progress.error = err instanceof Error ? err.message : 'Retry failed'
    progress.phase = 'error'
  }
}

onMounted(() => {
  void loadActiveOverlays()
  void loadAnalysis()
})
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

/* Category Mismatch Section */
.category-mismatch-section {
  margin-top: var(--cg-space-3);
  padding: var(--cg-space-3);
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
  border-radius: var(--cg-radius-md);
}

.section-subtitle {
  color: var(--cg-color-warning);
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
  margin: 0 0 var(--cg-space-2) 0;
}

.mismatch-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.mismatch-item {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  font-size: var(--cg-font-size-sm);
  flex-wrap: wrap;
}

.mismatch-path {
  font-family: var(--cg-font-mono);
  color: var(--cg-color-error);
}

.mismatch-arrow {
  color: var(--cg-color-text-muted);
}

.mismatch-target {
  font-family: var(--cg-font-mono);
  color: var(--cg-color-success);
}

.node-step-content {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.package-step-content {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.package-step-header,
.package-section-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--cg-space-3);
}

.package-section {
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-md);
  padding: var(--cg-space-3);
}

.package-section-title {
  margin: 0 0 var(--cg-space-1) 0;
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
}

.package-section-description {
  margin: 0;
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
}

.package-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
  margin-top: var(--cg-space-2);
}

.package-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--cg-space-3);
  padding: var(--cg-space-2);
  border: 1px solid var(--cg-color-border-subtle);
  border-radius: var(--cg-radius-sm);
  background: var(--cg-color-bg-tertiary);
}

.package-info {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  min-width: 0;
  flex-wrap: wrap;
}

.package-meta {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
}

.package-actions {
  display: inline-flex;
  align-items: center;
  gap: var(--cg-space-2);
  flex-wrap: wrap;
  justify-content: flex-end;
}

.stat-badge {
  padding: var(--cg-space-1) var(--cg-space-2);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-sm);
  background: var(--cg-color-bg-tertiary);
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
  white-space: nowrap;
}

.community-node-section {
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
  border-radius: var(--cg-radius-md);
  padding: var(--cg-space-3);
}

.community-node-header {
  margin-bottom: var(--cg-space-2);
}

.community-node-title {
  margin: 0 0 var(--cg-space-1) 0;
  color: var(--cg-color-warning);
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
}

.community-node-description {
  margin: 0;
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
}

.community-node-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.community-node-item {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
  padding: var(--cg-space-2);
  border: 1px solid var(--cg-color-border-subtle);
  border-radius: var(--cg-radius-sm);
  background: var(--cg-color-bg-tertiary);
}

.community-node-info {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
  min-width: 0;
  width: 100%;
}

.community-node-heading {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  flex-wrap: wrap;
}

.community-node-package {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-medium);
}

.community-node-meta {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  font-family: var(--cg-font-mono);
}

.community-node-guidance {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
}

.community-node-actions {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 100%;
}

.community-node-selection {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--cg-space-3);
  width: 100%;
}

.community-selected-label {
  color: var(--cg-color-success);
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.community-node-actions :deep(.base-btn) {
  min-width: 96px;
  white-space: nowrap;
}

.community-node-actions :deep(.install-choice) {
  min-width: 132px;
}

.community-node-selection :deep(.change-selection-button) {
  border-color: transparent;
  min-width: 0;
  color: var(--cg-color-text-muted);
}

.community-node-selection :deep(.change-selection-button:hover:not(:disabled)) {
  color: var(--cg-color-accent);
  border-color: transparent;
  background: transparent;
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

.choice-badge.mapped {
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

/* Download Intent Details */
.download-details .download-item {
  flex-direction: column;
  align-items: flex-start;
  gap: var(--cg-space-2);
}

.download-info {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
  width: 100%;
}

.download-meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cg-space-2);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
}

.download-path {
  font-family: var(--cg-font-mono);
  color: var(--cg-color-text-secondary);
}

.download-url {
  font-family: var(--cg-font-mono);
  color: var(--cg-color-info);
  cursor: help;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}

/* Footer layout */
.footer-spacer {
  flex: 1;
}
</style>
