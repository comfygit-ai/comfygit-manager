<template>
  <div class="applying-step">
    <!-- Phase: Resolving -->
    <div v-if="progress.phase === 'resolving'" class="phase-content">
      <div class="phase-header">
        <div class="loading-spinner"></div>
        <h3 class="phase-title">Applying Resolution</h3>
      </div>
      <p class="phase-description">Processing your choices...</p>
    </div>

    <!-- Phase: Installing -->
    <div v-else-if="progress.phase === 'installing'" class="phase-content">
      <div class="phase-header">
        <div class="loading-spinner"></div>
        <h3 class="phase-title">Installing Node Packages</h3>
      </div>
      <p class="phase-description">
        Installing {{ (progress.nodeInstallProgress?.currentIndex ?? 0) + 1 }} of
        {{ progress.nodeInstallProgress?.totalNodes ?? progress.nodesToInstall.length }} packages...
      </p>

      <!-- Progress bar -->
      <div class="overall-progress">
        <div class="progress-bar">
          <div
            class="progress-fill"
            :style="{ width: `${installProgressPercent}%` }"
          ></div>
        </div>
        <span class="progress-label">
          {{ progress.nodeInstallProgress?.completedNodes.length ?? 0 }} /
          {{ progress.nodeInstallProgress?.totalNodes ?? progress.nodesToInstall.length }}
        </span>
      </div>

      <!-- Individual node items -->
      <div class="install-list">
        <div
          v-for="(pkg, index) in progress.nodesToInstall"
          :key="pkg"
          :class="['install-item', getNodeInstallStatus(pkg, index)]"
        >
          <span class="install-icon">
            <span v-if="getNodeInstallStatus(pkg, index) === 'pending'">○</span>
            <span v-else-if="getNodeInstallStatus(pkg, index) === 'installing'" class="spinner">◌</span>
            <span v-else-if="getNodeInstallStatus(pkg, index) === 'complete'">✓</span>
            <span v-else-if="getNodeInstallStatus(pkg, index) === 'failed'">✗</span>
          </span>
          <code>{{ pkg }}</code>
          <span v-if="getNodeInstallError(pkg)" class="install-error">{{ getNodeInstallError(pkg) }}</span>
        </div>
      </div>
    </div>

    <!-- Phase: Complete -->
    <div v-else-if="progress.phase === 'complete'" class="phase-content">
      <div class="phase-header">
        <span :class="['phase-icon', hasFailures ? 'warning' : 'success']">
          {{ hasFailures ? '⚠' : '✓' }}
        </span>
        <h3 class="phase-title">
          {{ hasFailures ? 'Resolution Completed with Errors' : 'Resolution Complete' }}
        </h3>
      </div>

      <!-- Summary -->
      <div class="completion-summary">
        <!-- Nodes installed successfully -->
        <div v-if="progress.nodesInstalled.length > 0" class="summary-item success">
          <span class="summary-icon">✓</span>
          <span class="summary-text">{{ progress.nodesInstalled.length }} node package{{ progress.nodesInstalled.length > 1 ? 's' : '' }} installed</span>
        </div>

        <!-- Nodes marked optional -->
        <div v-if="nodesMarkedOptionalCount > 0" class="summary-item success">
          <span class="summary-icon">✓</span>
          <span class="summary-text">{{ nodesMarkedOptionalCount }} node type{{ nodesMarkedOptionalCount > 1 ? 's' : '' }} marked optional</span>
        </div>

        <!-- Existing node mappings changed -->
        <div v-if="nodesMappedCount > 0" class="summary-item success">
          <span class="summary-icon">✓</span>
          <span class="summary-text">{{ nodesMappedCount }} node mapping{{ nodesMappedCount > 1 ? 's' : '' }} changed</span>
        </div>

        <!-- Failed installations summary -->
        <div v-if="failedNodes.length > 0" class="summary-item error">
          <span class="summary-icon">✗</span>
          <span class="summary-text">{{ failedNodes.length }} package{{ failedNodes.length > 1 ? 's' : '' }} failed to install</span>
        </div>

        <div v-if="dependencyReviewNodes.length > 0" class="summary-item warning">
          <span class="summary-icon">⚠</span>
          <span class="summary-text">{{ dependencyReviewNodes.length }} package{{ dependencyReviewNodes.length > 1 ? 's' : '' }} need dependency review</span>
        </div>

        <!-- Failed packages detail list -->
        <div v-if="failedNodes.length > 0" class="failed-list">
          <div v-for="node in failedNodes" :key="node.node_id" class="failed-item">
            <code class="failed-node-id">{{ node.node_id }}</code>
            <span class="failed-error">{{ node.error }}</span>
          </div>
        </div>

        <div v-if="dependencyReviewNodes.length > 0" class="failed-list dependency-review-list">
          <div v-for="node in dependencyReviewNodes" :key="node.node_id" class="failed-item dependency-review-item">
            <code class="failed-node-id">{{ node.node_id }}</code>
            <span class="failed-error">Dependency changes require review before install.</span>
            <button
              class="review-button"
              @click="openDependencyReview(node)"
            >
              View Changes
            </button>
          </div>
        </div>

        <!-- Retry failed button -->
        <button v-if="failedNodes.length > 0" class="retry-button" @click="$emit('retry-failed')">
          Retry Failed ({{ failedNodes.length }})
        </button>

        <div v-if="!hasFailures" class="summary-item success">
          <span class="summary-icon">✓</span>
          <span class="summary-text">{{ completionMessage }}</span>
        </div>

        <p v-if="hasBackgroundDownloads" class="summary-note">Model downloads will continue in the background.</p>

        <!-- Restart required message -->
        <div v-if="progress.needsRestart" class="restart-prompt">
          <div class="restart-warning">
            <span class="warning-icon">⚠</span>
            <div class="warning-content">
              <strong>Restart Required</strong>
              <p>Node packages were installed. ComfyUI needs to restart to load them.</p>
            </div>
          </div>
          <button class="restart-button" @click="$emit('restart')">
            Restart ComfyUI
          </button>
        </div>
      </div>
    </div>

    <!-- Phase: Error -->
    <div v-else-if="progress.phase === 'error'" class="phase-content error">
      <div class="phase-header">
        <span class="phase-icon error">✗</span>
        <h3 class="phase-title">Resolution Failed</h3>
      </div>
      <p class="error-message">{{ progress.error }}</p>
    </div>

    <DependencyReviewPreviewModal
      v-if="dependencyReviewModalOpen"
      :loading="dependencyReviewLoading"
      :error="dependencyReviewError"
      :preview="activeDependencyPreview"
      @close="closeDependencyReview"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import DependencyReviewPreviewModal from '@/components/DependencyReviewPreviewModal.vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { DependencyResolutionPreview, ResolutionProgressState } from '@/types/comfygit'

const props = defineProps<{
  progress: ResolutionProgressState
}>()

defineEmits<{
  restart: []
  'retry-failed': []
}>()

const { previewNodeDependencyChanges } = useComfyGitService()

const installProgressPercent = computed(() => {
  const total = props.progress.nodeInstallProgress?.totalNodes || props.progress.nodesToInstall.length
  if (!total) return 0
  const completed = props.progress.nodeInstallProgress?.completedNodes.length ?? 0
  return Math.round((completed / total) * 100)
})

const failedNodes = computed(() => {
  return props.progress.nodeInstallProgress?.completedNodes.filter(n => !n.success && !n.dependency_review) || []
})

const dependencyReviewNodes = computed(() => {
  return props.progress.nodeInstallProgress?.completedNodes.filter(n => n.dependency_review) || []
})

const hasFailures = computed(() => {
  return failedNodes.value.length > 0 || dependencyReviewNodes.value.length > 0
})

const successfulNodeInstalls = computed(() => props.progress.nodesInstalled.length)

const nodesMarkedOptionalCount = computed(() => props.progress.nodesMarkedOptional?.length || 0)

const nodesMappedCount = computed(() => props.progress.nodesMapped?.length || 0)

const hasBackgroundDownloads = computed(() => props.progress.completedFiles.length > 0)

const hasAppliedChanges = computed(() => {
  return successfulNodeInstalls.value > 0 ||
    nodesMarkedOptionalCount.value > 0 ||
    nodesMappedCount.value > 0 ||
    hasBackgroundDownloads.value ||
    Boolean(props.progress.needsRestart)
})

const completionMessage = computed(() => {
  if (!hasAppliedChanges.value) {
    return 'No changes applied'
  }
  return 'Workflow dependencies resolved'
})

function getNodeInstallStatus(nodeId: string, index: number): 'pending' | 'installing' | 'complete' | 'failed' {
  const completed = props.progress.nodeInstallProgress?.completedNodes.find(n => n.node_id === nodeId)
  if (completed) {
    return completed.success ? 'complete' : 'failed'
  }
  if (props.progress.nodeInstallProgress?.currentIndex === index) {
    return 'installing'
  }
  return 'pending'
}

function getNodeInstallError(nodeId: string): string | undefined {
  return props.progress.nodeInstallProgress?.completedNodes.find(n => n.node_id === nodeId)?.error
}

const dependencyReviewModalOpen = ref(false)
const dependencyReviewLoading = ref(false)
const dependencyReviewError = ref<string | null>(null)
const activeDependencyPreview = ref<DependencyResolutionPreview | null>(null)

async function openDependencyReview(node: NonNullable<ResolutionProgressState['nodeInstallProgress']>['completedNodes'][number]) {
  const identifier = node.dependency_review?.identifier || node.node_id
  dependencyReviewModalOpen.value = true
  dependencyReviewLoading.value = true
  dependencyReviewError.value = null
  activeDependencyPreview.value = null

  try {
    if (node.dependency_review?.preview) {
      activeDependencyPreview.value = node.dependency_review.preview
      return
    }

    const response = await previewNodeDependencyChanges({ id: identifier })
    activeDependencyPreview.value = response.preview
    if (!response.preview.success) {
      dependencyReviewError.value = response.preview.error || 'Unable to generate dependency preview'
    }
  } catch (err) {
    dependencyReviewError.value = err instanceof Error ? err.message : 'Unable to generate dependency preview'
  } finally {
    dependencyReviewLoading.value = false
  }
}

function closeDependencyReview() {
  dependencyReviewModalOpen.value = false
  dependencyReviewLoading.value = false
  dependencyReviewError.value = null
  activeDependencyPreview.value = null
}
</script>

<style scoped>
.applying-step {
  padding: var(--cg-space-4);
}

.phase-content {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.phase-header {
  display: flex;
  align-items: center;
  gap: var(--cg-space-3);
}

.phase-icon {
  font-size: var(--cg-font-size-xl);
}

.phase-icon.success {
  color: var(--cg-color-success);
}

.phase-icon.error {
  color: var(--cg-color-error);
}

.phase-icon.warning {
  color: var(--cg-color-warning);
}

.phase-title {
  margin: 0;
  font-size: var(--cg-font-size-lg);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-text-primary);
}

.phase-description {
  margin: 0;
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
}

/* Loading spinner */
.loading-spinner {
  width: 24px;
  height: 24px;
  border: 3px solid var(--cg-color-border);
  border-top-color: var(--cg-color-accent);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Completion summary */
.completion-summary {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.summary-item {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-2) var(--cg-space-3);
  border-radius: var(--cg-radius-md);
  font-size: var(--cg-font-size-sm);
}

.summary-item.success {
  background: var(--cg-color-success-muted);
  color: var(--cg-color-success);
}

.summary-item.info {
  background: var(--cg-color-info-muted);
  color: var(--cg-color-info);
}

.summary-note {
  margin: 0;
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  font-style: italic;
}

.summary-icon {
  font-size: var(--cg-font-size-base);
}

/* Error state */
.phase-content.error .error-message {
  margin: 0;
  padding: var(--cg-space-3);
  background: var(--cg-color-error-muted);
  border: 1px solid var(--cg-color-error);
  border-radius: var(--cg-radius-md);
  color: var(--cg-color-error);
  font-size: var(--cg-font-size-sm);
  font-family: var(--cg-font-mono);
}

.summary-item.error {
  background: var(--cg-color-error-muted);
  color: var(--cg-color-error);
}

.summary-item.warning {
  background: var(--cg-color-warning-muted);
  color: var(--cg-color-warning);
}

/* Overall progress bar */
.overall-progress {
  display: flex;
  align-items: center;
  gap: var(--cg-space-3);
  margin-bottom: var(--cg-space-2);
}

.progress-bar {
  flex: 1;
  height: 6px;
  background: var(--cg-color-bg-tertiary);
  border-radius: var(--cg-radius-full);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--cg-color-accent);
  border-radius: var(--cg-radius-full);
  transition: width var(--cg-transition-fast);
}

.progress-label {
  font-size: var(--cg-font-size-xs);
  font-family: var(--cg-font-mono);
  color: var(--cg-color-text-muted);
  white-space: nowrap;
}

/* Install list */
.install-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
  padding: var(--cg-space-2);
  background: var(--cg-color-bg-secondary);
  border-radius: var(--cg-radius-sm);
  max-height: 150px;
  overflow-y: auto;
}

.install-item {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
  padding: var(--cg-space-1) var(--cg-space-2);
  border-radius: var(--cg-radius-sm);
  border-left: 3px solid transparent;
}

.install-item.pending {
  border-left-color: var(--cg-color-border);
}

.install-item.installing {
  border-left-color: var(--cg-color-accent);
  background: var(--cg-color-bg-tertiary);
}

.install-item.complete {
  border-left-color: var(--cg-color-success);
}

.install-item.failed {
  border-left-color: var(--cg-color-error);
}

.install-icon {
  width: 16px;
  text-align: center;
}

.install-item.pending .install-icon { color: var(--cg-color-text-muted); }
.install-item.installing .install-icon { color: var(--cg-color-accent); }
.install-item.complete .install-icon { color: var(--cg-color-success); }
.install-item.failed .install-icon { color: var(--cg-color-error); }

.install-icon .spinner {
  display: inline-block;
  animation: spin 1s linear infinite;
}

.install-item code {
  font-family: var(--cg-font-mono);
  color: var(--cg-color-text-primary);
}

.install-error {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-error);
  margin-left: auto;
}

/* Restart prompt */
.restart-prompt {
  margin-top: var(--cg-space-4);
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.restart-warning {
  display: flex;
  align-items: flex-start;
  gap: var(--cg-space-3);
  padding: var(--cg-space-3);
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
  border-radius: var(--cg-radius-md);
  color: var(--cg-color-warning);
}

.restart-warning .warning-icon {
  font-size: var(--cg-font-size-lg);
  flex-shrink: 0;
}

.restart-warning .warning-content {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
}

.restart-warning .warning-content strong {
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
}

.restart-warning .warning-content p {
  margin: 0;
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-secondary);
}

.restart-button {
  align-self: flex-end;
  padding: var(--cg-space-2) var(--cg-space-4);
  background: var(--cg-color-warning);
  color: var(--cg-color-bg-primary);
  border: none;
  border-radius: var(--cg-radius-md);
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
  cursor: pointer;
  transition: all var(--cg-transition-fast);
}

.restart-button:hover {
  filter: brightness(1.1);
}

/* Failed packages list */
.failed-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
  padding: var(--cg-space-2);
  background: var(--cg-color-error-muted);
  border: 1px solid var(--cg-color-error);
  border-radius: var(--cg-radius-md);
  max-height: 150px;
  overflow-y: auto;
}

.dependency-review-list {
  background: var(--cg-color-warning-muted);
  border-color: var(--cg-color-warning);
}

.failed-item {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
  padding: var(--cg-space-1) var(--cg-space-2);
  background: var(--cg-color-bg-primary);
  border-radius: var(--cg-radius-sm);
}

.dependency-review-item {
  position: relative;
  padding-right: 130px;
}

.failed-node-id {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-error);
}

.failed-error {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  word-break: break-word;
}

.review-button {
  position: absolute;
  right: var(--cg-space-2);
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-primary);
  padding: 6px 10px;
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  cursor: pointer;
}

.review-button:hover:not(:disabled) {
  background: var(--cg-color-bg-hover);
  border-color: var(--cg-color-border-strong);
}

.review-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Retry button */
.retry-button {
  align-self: flex-start;
  margin-top: var(--cg-space-2);
  padding: var(--cg-space-2) var(--cg-space-4);
  background: var(--cg-color-accent);
  color: var(--cg-color-bg-primary);
  border: none;
  border-radius: var(--cg-radius-md);
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
  cursor: pointer;
  transition: all var(--cg-transition-fast);
}

.retry-button:hover {
  filter: brightness(1.1);
}
</style>
