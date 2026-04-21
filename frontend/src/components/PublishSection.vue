<template>
  <PanelLayout>
    <template #header>
      <PanelHeader
        title="PUBLISH REVISION"
        :show-info="true"
        @info-click="showInfo = true"
      >
        <template #actions>
          <div :class="['auth-chip', { authenticated: isAuthenticated }]">
            {{ authChipLabel }}
          </div>
        </template>
      </PanelHeader>
    </template>

    <template #content>
      <SectionGroup title="PUBLISH">
        <div v-if="!isAuthenticated" class="publish-card">
          <div class="blocked-title">SIGN IN REQUIRED</div>
          <div class="blocked-copy">
            Publishing revisions is blocked until this local panel is connected to a ComfyGit Cloud account.
          </div>
          <div class="row-actions">
            <ActionButton variant="primary" size="xs" @click="emit('navigate', 'account')">
              Sign In
            </ActionButton>
          </div>
        </div>

        <div v-else class="publish-grid">
          <div v-if="showWorkingCopyRow" class="publish-card working-copy-card">
            <div class="card-topline">WORKING COPY</div>
            <div class="card-title">{{ environmentName || 'Current environment' }}</div>
            <div class="card-copy">
              {{ workingCopyDescription }}
            </div>

            <div class="meta-grid">
              <div><span class="publish-label">Branch:</span> {{ branchName || 'Detached' }}</div>
              <div><span class="publish-label">Commit:</span> {{ currentCommitLabel }}</div>
              <div><span class="publish-label">Cloud env:</span> {{ linkedEnvironmentDisplay }}</div>
            </div>

            <div class="link-section">
              <div class="field-group">
                <label class="field-label">Linked Cloud Environment</label>
                <BaseSelect
                  v-model="selectedCloudEnvironmentId"
                  :options="cloudEnvironmentOptions"
                  placeholder="Create new cloud environment on first publish"
                  full-width
                  :disabled="isLoadingCloud || isPublishing"
                />
              </div>
              <div class="row-actions">
                <ActionButton
                  variant="secondary"
                  size="xs"
                  :disabled="isLoadingCloud || isPublishing"
                  @click="handleSaveLinkedEnvironment"
                >
                  Save Link
                </ActionButton>
                <ActionButton
                  variant="ghost"
                  size="xs"
                  :disabled="!selectedCloudEnvironmentId || isLoadingCloud || isPublishing"
                  @click="handleClearLinkedEnvironment"
                >
                  Clear
                </ActionButton>
              </div>
            </div>

            <div class="row-actions">
              <ActionButton
                variant="primary"
                size="xs"
                :loading="isValidating || isPublishing"
                :disabled="isValidating || isPublishing"
                @click="handlePublish"
              >
                {{ publishButtonLabel }}
              </ActionButton>
              <ActionButton
                variant="secondary"
                size="xs"
                :disabled="isValidating || isPublishing"
                @click="refreshCloudState"
              >
                Refresh
              </ActionButton>
            </div>

            <div v-if="publishError" class="publish-error">
              {{ publishError }}
            </div>
          </div>

          <div v-else class="publish-card">
            <div class="card-topline">WORKING COPY</div>
            <div class="card-title">Already published</div>
            <div class="card-copy">
              Current local state matches a known published revision. Make another local change or commit before publishing again.
            </div>
          </div>

          <div class="publish-card revisions-card">
            <div class="card-topline">PUBLISHED REVISIONS</div>
            <div v-if="isLoadingCloud" class="card-copy">Loading cloud revisions...</div>
            <div v-else-if="cloudLoadError" class="publish-error">{{ cloudLoadError }}</div>
            <div v-else-if="!cloudEnvironment" class="card-copy">
              No linked cloud environment is selected for <strong>{{ environmentName || 'this environment' }}</strong>.
              Publishing will create one unless you link this local environment to an existing cloud environment above.
            </div>
            <div v-else-if="!revisions.length" class="card-copy">
              Cloud environment <strong>{{ cloudEnvironment.name }}</strong> exists, but it has no immutable revisions yet.
            </div>
            <div v-else class="revision-list">
              <div
                v-for="revision in revisions"
                :key="revision.id"
                :class="['revision-row', { matched: revision.id === matchingRevision?.id }]"
              >
                <div class="revision-main">
                  <div class="revision-title">
                    <span>r{{ revision.revision_number }}</span>
                    <span v-if="revision.id === matchingRevision?.id" class="matched-badge">Matches local</span>
                  </div>
                  <div class="revision-copy">
                    {{ revision.source_message || 'No revision message.' }}
                  </div>
                  <div class="revision-meta">
                    <span>{{ revision.workflow_count }} workflows</span>
                    <span>{{ revision.node_count }} nodes</span>
                    <span>{{ revision.model_count }} models</span>
                    <span>Created {{ formatRelativeTime(revision.created_at) }}</span>
                    <span v-if="revision.source_commit_sha">Commit {{ revision.source_commit_sha }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionGroup>
    </template>
  </PanelLayout>

  <InfoPopover
    :show="showInfo"
    title="Publish"
    @close="showInfo = false"
  >
    <template #content>
      <div class="info-content">
        <p>This page publishes the current local environment state as an immutable cloud revision.</p>
        <p>It reuses export-style validation before submission so uncommitted changes and missing model source data are surfaced before publish.</p>
        <p>The cloud dashboard remains responsible for deployments, targets, and runtime operations.</p>
      </div>
    </template>
  </InfoPopover>

  <ExportBlockedModal
    v-if="showBlockedModal && validationResult"
    :issues="validationResult.blocking_issues"
    mode="publish"
    @close="showBlockedModal = false"
    @committed="handleBlockedCommitted"
  />

  <ExportWarningsModal
    v-if="showWarningsModal && validationResult"
    :models="validationResult.warnings.models_without_sources"
    mode="publish"
    @confirm="handlePublishConfirmed"
    @cancel="showWarningsModal = false"
    @revalidate="refreshValidation"
  />
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import type {
  CloudEnvironmentRevision,
  CloudEnvironmentSummary,
  ExportValidationResult,
} from '@/types/comfygit'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import InfoPopover from '@/components/base/molecules/InfoPopover.vue'
import SectionGroup from '@/components/base/molecules/SectionGroup.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import ExportBlockedModal from '@/components/ExportBlockedModal.vue'
import ExportWarningsModal from '@/components/ExportWarningsModal.vue'
import { useCloudAuth } from '@/composables/useCloudAuth'
import { useComfyGitService } from '@/composables/useComfyGitService'

const props = defineProps<{
  environmentName?: string | null
  branchName?: string | null
}>()

const emit = defineEmits<{
  navigate: [tab: string]
  toast: [message: string, type?: 'success' | 'warning' | 'error' | 'info']
}>()

const {
  getHistory,
  validateExport,
  validateEnvironmentExport,
  getCloudEnvironments,
  getCloudEnvironmentRevisions,
  publishCurrentEnvironmentToCloud,
} = useComfyGitService()
const { cloudUrl, session, user, isAuthenticated, getLinkedEnvironment, setLinkedEnvironment } = useCloudAuth()

const showInfo = ref(false)
const isLoadingCloud = ref(false)
const isValidating = ref(false)
const isPublishing = ref(false)
const cloudLoadError = ref<string | null>(null)
const publishError = ref<string | null>(null)
const cloudEnvironment = ref<CloudEnvironmentSummary | null>(null)
const revisions = ref<CloudEnvironmentRevision[]>([])
const validationResult = ref<ExportValidationResult | null>(null)
const currentCommit = ref<string | null>(null)
const currentCommitMessage = ref<string | null>(null)
const showBlockedModal = ref(false)
const showWarningsModal = ref(false)
const availableCloudEnvironments = ref<CloudEnvironmentSummary[]>([])
const selectedCloudEnvironmentId = ref('')

const authChipLabel = computed(() => user.value?.email || 'Not signed in')
const accessToken = computed(() => session.value?.access_token || '')

const matchingRevision = computed(() => {
  if (!currentCommit.value) return null
  return revisions.value.find((revision) => revision.source_commit_sha === currentCommit.value) || null
})

const showWorkingCopyRow = computed(() => {
  if (!isAuthenticated.value) return false
  if (!currentCommit.value) return true
  if (!validationResult.value?.can_export) return true
  return !matchingRevision.value
})

const currentCommitLabel = computed(() => currentCommit.value || 'No commits yet')
const linkedEnvironmentDisplay = computed(() => cloudEnvironment.value?.name || 'Will be created on first publish')
const cloudEnvironmentOptions = computed(() =>
  availableCloudEnvironments.value.map((environment) => ({
    label: environment.name,
    value: environment.id,
  }))
)

const workingCopyDescription = computed(() => {
  if (!validationResult.value) {
    return 'Checking local publish readiness...'
  }
  if (!validationResult.value.can_export) {
    return 'This local working copy is not publishable yet. Review the issues and commit or resolve them first.'
  }
  if (validationResult.value.warnings.models_without_sources.length > 0) {
    return 'This local working copy can be published, but some model source URLs are still missing and may reduce deployability.'
  }
  return 'This local working copy is ready to publish as a new immutable cloud revision.'
})

const publishButtonLabel = computed(() => {
  if (isPublishing.value) return 'Publishing...'
  if (isValidating.value) return 'Validating...'
  return 'Publish Revision'
})

async function refreshValidation(): Promise<void> {
  if (!isAuthenticated.value) {
    validationResult.value = null
    return
  }

  isValidating.value = true
  publishError.value = null
  try {
    validationResult.value = props.environmentName?.trim()
      ? await validateEnvironmentExport(props.environmentName)
      : await validateExport()
  } catch (error) {
    validationResult.value = null
    publishError.value = error instanceof Error ? error.message : 'Failed to validate publish readiness.'
  } finally {
    isValidating.value = false
  }
}

async function refreshCloudState(): Promise<void> {
  if (!isAuthenticated.value || !accessToken.value || !cloudUrl.value) {
    cloudEnvironment.value = null
    revisions.value = []
    cloudLoadError.value = null
    await refreshValidation()
    return
  }

  isLoadingCloud.value = true
  cloudLoadError.value = null
  publishError.value = null

  try {
    const [historyResult, environmentsResult] = await Promise.all([
      getHistory(1),
      getCloudEnvironments(cloudUrl.value, accessToken.value),
    ])

    currentCommit.value = historyResult.commits[0]?.hash || null
    currentCommitMessage.value = historyResult.commits[0]?.message || null

    availableCloudEnvironments.value = environmentsResult.environments || []
    const linkedEnvironment = getLinkedEnvironment(props.environmentName)
    const matchedEnvironment =
      (linkedEnvironment
        ? availableCloudEnvironments.value.find((environment) => environment.id === linkedEnvironment.id)
        : null) ||
      availableCloudEnvironments.value.find(
        (environment) => environment.name === (props.environmentName || '')
      ) ||
      null
    cloudEnvironment.value = matchedEnvironment
    selectedCloudEnvironmentId.value = matchedEnvironment?.id || ''

    if (matchedEnvironment) {
      const revisionsResult = await getCloudEnvironmentRevisions(cloudUrl.value, matchedEnvironment.id, accessToken.value)
      revisions.value = revisionsResult.revisions || []
    } else {
      revisions.value = []
    }

    await refreshValidation()
  } catch (error) {
    cloudEnvironment.value = null
    availableCloudEnvironments.value = []
    selectedCloudEnvironmentId.value = ''
    revisions.value = []
    cloudLoadError.value = error instanceof Error ? error.message : 'Failed to load cloud revision state.'
  } finally {
    isLoadingCloud.value = false
  }
}

async function executePublish(): Promise<void> {
  if (!isAuthenticated.value || !accessToken.value || !cloudUrl.value) {
    emit('navigate', 'account')
    return
  }

  isPublishing.value = true
  publishError.value = null
  try {
    const result = await publishCurrentEnvironmentToCloud(
      cloudUrl.value,
      accessToken.value,
      currentCommitMessage.value || null,
      cloudEnvironment.value?.id || null,
    )
    await refreshCloudState()
    emit(
      'toast',
      result.environment_revision
        ? `Published ${result.environment.name} r${result.environment_revision.revision_number}`
        : `Published ${result.environment.name}`,
      'success'
    )
  } catch (error) {
    publishError.value = error instanceof Error ? error.message : 'Publish failed.'
  } finally {
    isPublishing.value = false
  }
}

function handleSaveLinkedEnvironment(): void {
  const selected = availableCloudEnvironments.value.find((environment) => environment.id === selectedCloudEnvironmentId.value) || null
  setLinkedEnvironment(props.environmentName, selected ? { id: selected.id, name: selected.name } : null)
  cloudEnvironment.value = selected
  revisions.value = []
  emit(
    'toast',
    selected
      ? `Linked ${props.environmentName || 'environment'} to cloud environment ${selected.name}`
      : `Cleared linked cloud environment for ${props.environmentName || 'environment'}`,
    'success'
  )
  void refreshCloudState()
}

function handleClearLinkedEnvironment(): void {
  selectedCloudEnvironmentId.value = ''
  setLinkedEnvironment(props.environmentName, null)
  cloudEnvironment.value = null
  revisions.value = []
  emit('toast', `Cleared linked cloud environment for ${props.environmentName || 'environment'}`, 'success')
  void refreshCloudState()
}

async function handlePublish(): Promise<void> {
  if (!isAuthenticated.value) {
    emit('navigate', 'account')
    return
  }

  await refreshValidation()
  if (!validationResult.value) return

  if (!validationResult.value.can_export) {
    showBlockedModal.value = true
    return
  }

  if (validationResult.value.warnings.models_without_sources.length > 0) {
    showWarningsModal.value = true
    return
  }

  await executePublish()
}

async function handleBlockedCommitted(): Promise<void> {
  showBlockedModal.value = false
  await refreshCloudState()

  if (!validationResult.value) return

  if (!validationResult.value.can_export) {
    showBlockedModal.value = true
    return
  }

  if (validationResult.value.warnings.models_without_sources.length > 0) {
    showWarningsModal.value = true
    return
  }

  await executePublish()
}

async function handlePublishConfirmed(): Promise<void> {
  showWarningsModal.value = false
  await executePublish()
}

function formatRelativeTime(value: string): string {
  const timestamp = Date.parse(value)
  if (Number.isNaN(timestamp)) return value
  const deltaMs = Date.now() - timestamp
  const deltaMinutes = Math.floor(deltaMs / 60000)
  if (deltaMinutes < 1) return 'just now'
  if (deltaMinutes < 60) return `${deltaMinutes}m ago`
  const deltaHours = Math.floor(deltaMinutes / 60)
  if (deltaHours < 24) return `${deltaHours}h ago`
  const deltaDays = Math.floor(deltaHours / 24)
  if (deltaDays < 30) return `${deltaDays}d ago`
  return new Date(timestamp).toLocaleString()
}

onMounted(() => {
  void refreshCloudState()
})

watch(
  [isAuthenticated, cloudUrl, () => session.value?.access_token, () => props.environmentName],
  () => {
    void refreshCloudState()
  }
)
</script>

<style scoped>
.auth-chip {
  color: var(--cg-color-text-muted);
  border: 1px solid var(--cg-color-border-subtle);
  padding: var(--cg-space-1) var(--cg-space-2);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
}

.auth-chip.authenticated {
  color: var(--cg-color-success);
  border-color: var(--cg-color-success);
}

.publish-grid {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.publish-card {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
  padding: var(--cg-space-3);
  border: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg-secondary);
}

.working-copy-card {
  border-color: var(--cg-color-accent);
}

.card-topline,
.blocked-title {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  text-transform: uppercase;
}

.card-title {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-base);
  font-weight: var(--cg-font-weight-semibold);
}

.card-copy,
.info-content,
.blocked-copy,
.meta-grid,
.revision-copy,
.revision-meta {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
  line-height: 1.6;
}

.meta-grid,
.revision-meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cg-space-3);
}

.link-section {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.field-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field-label {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
}

.publish-label {
  color: var(--cg-color-text-muted);
}

.row-actions {
  display: flex;
  gap: var(--cg-space-2);
  flex-wrap: wrap;
}

.publish-error {
  color: var(--cg-color-error);
  font-size: var(--cg-font-size-xs);
  line-height: 1.5;
}

.revision-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.revision-row {
  border: 1px solid var(--cg-color-border-subtle);
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-tertiary);
}

.revision-row.matched {
  border-color: var(--cg-color-success);
}

.revision-title {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
}

.matched-badge {
  color: var(--cg-color-success);
  border: 1px solid var(--cg-color-success);
  padding: 0 6px;
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-normal);
  text-transform: uppercase;
}
</style>
