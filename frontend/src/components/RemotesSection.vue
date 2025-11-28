<template>
  <PanelLayout>
    <template #header>
      <PanelHeader
        title="GIT REMOTES"
        :show-info="true"
        @info-click="showInfoPopover = true"
      >
        <template #actions>
          <ActionButton
            v-if="!showForm"
            variant="primary"
            size="sm"
            @click="handleAddRemote"
          >
            + Add Remote
          </ActionButton>
        </template>
      </PanelHeader>
    </template>

    <template #search>
      <SearchBar
        v-if="!showForm"
        v-model="searchQuery"
        placeholder="🔍 Search remotes..."
      />
    </template>

    <template #content>
      <template v-if="loading">
        <LoadingState message="Loading remotes..." />
      </template>
      <template v-else-if="error">
        <ErrorState :message="error" :retry="true" @retry="loadRemotes" />
      </template>
      <template v-else>
        <!-- Add/Edit Form -->
        <RemoteForm
          v-if="showForm"
          :mode="formMode"
          :remote-name="formData.name"
          :fetch-url="formData.fetchUrl"
          :push-url="formData.pushUrl"
          @submit="handleFormSubmit"
          @cancel="cancelForm"
        />

        <!-- Summary Bar -->
        <SummaryBar v-if="remotes.length && !showForm" variant="compact">
          Total: {{ remotes.length }} remote{{ remotes.length !== 1 ? 's' : '' }}
          <span v-if="trackingInfo"> • Tracking: {{ trackingInfo.remote }}/{{ trackingInfo.branch }}</span>
        </SummaryBar>

        <!-- Remotes List -->
        <SectionGroup v-if="filteredRemotes.length && !showForm" title="REMOTES" :count="filteredRemotes.length">
          <RemoteCard
            v-for="remote in filteredRemotes"
            :key="remote.name"
            :remote="remote"
            :sync-status="syncStatuses[remote.name]"
            :tracking-branch="isTrackingRemote(remote.name) ? trackingInfo?.branch : undefined"
            :fetching-remote="fetchingRemote"
            @fetch="handleFetch"
            @edit="handleEdit"
            @remove="handleRemove"
            @pull="handlePullClick"
            @push="handlePushClick"
          />
        </SectionGroup>

        <!-- Empty State -->
        <EmptyState
          v-if="!filteredRemotes.length && !showForm"
          icon="🌐"
          :message="searchQuery ? `No remotes match '${searchQuery}'` : 'No remotes configured.'"
        >
          <template #actions>
            <ActionButton variant="primary" @click="handleAddRemote">
              Add Your First Remote
            </ActionButton>
          </template>
        </EmptyState>
      </template>
    </template>
  </PanelLayout>

  <!-- Info Popover -->
  <InfoPopover
    :show="showInfoPopover"
    title="About Git Remotes"
    @close="showInfoPopover = false"
  >
    <template #content>
      <p>
        Git remotes are named references to repositories on other servers.
        They allow you to fetch changes from and push changes to remote repositories.
      </p>
      <p>
        The <strong>"origin"</strong> remote is typically the main repository you cloned from.
        You can configure multiple remotes for collaboration workflows.
      </p>
    </template>
    <template #actions>
      <ActionButton variant="link" @click="openDocs">
        Learn more about Git remotes →
      </ActionButton>
    </template>
  </InfoPopover>

  <!-- Pull Modal -->
  <PullModal
    :show="showPullModal"
    :remote-name="activeRemote || ''"
    :preview="pullPreview"
    :loading="loadingPreview"
    :pulling="flowState === 'executing'"
    :error="pullError"
    :conflict-resolutions="workflowResolutions"
    @close="closePullModal"
    @pull="handlePull"
    @open-conflict-resolution="openWorkflowResolution"
  />

  <!-- Push Modal -->
  <PushModal
    :show="showPushModal"
    :remote-name="activeRemote || ''"
    :preview="pushPreview"
    :loading="loadingPreview"
    :pushing="pushing"
    @close="closePushModal"
    @push="handlePush"
    @pull-first="handlePullFirst"
  />

  <!-- Workflow Resolution Modal (V2) -->
  <WorkflowResolutionModal
    v-if="showWorkflowResolutionModal && pullPreviewWithConflicts"
    :workflow-conflicts="pullPreviewWithConflicts.workflow_conflicts"
    :resolutions="workflowResolutions"
    :operation-type="'pull'"
    :validating="flowState === 'validating'"
    :error="validationError"
    @close="handleWorkflowResolutionClose"
    @resolve="handleWorkflowResolve"
    @apply="handleApplyResolutions"
  />

  <!-- Validation Results Modal (V2) -->
  <ValidationResultsModal
    v-if="showValidationModal && validationResult"
    :validation="validationResult"
    :operation-type="'pull'"
    :executing="flowState === 'executing'"
    @proceed="handleProceedWithMerge"
    @go-back="handleGoBackToResolution"
    @cancel="handleCancelMerge"
  />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type {
  RemoteInfo,
  RemoteSyncStatus,
  PullPreview,
  PushPreview,
  PullPreviewWithConflicts,
  WorkflowConflict,
  WorkflowResolution,
  MergeValidation
} from '@/types/comfygit'
import { hasWorkflowConflicts } from '@/types/comfygit'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import SearchBar from '@/components/base/molecules/SearchBar.vue'
import SectionGroup from '@/components/base/molecules/SectionGroup.vue'
import RemoteCard from '@/components/base/molecules/RemoteCard.vue'
import RemoteForm from '@/components/base/molecules/RemoteForm.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import SummaryBar from '@/components/base/molecules/SummaryBar.vue'
import EmptyState from '@/components/base/molecules/EmptyState.vue'
import LoadingState from '@/components/base/organisms/LoadingState.vue'
import ErrorState from '@/components/base/organisms/ErrorState.vue'
import InfoPopover from '@/components/base/molecules/InfoPopover.vue'
import PullModal from '@/components/base/molecules/PullModal.vue'
import PushModal from '@/components/base/molecules/PushModal.vue'
import WorkflowResolutionModal from '@/components/WorkflowResolutionModal.vue'
import ValidationResultsModal from '@/components/ValidationResultsModal.vue'

const {
  getRemotes,
  addRemote,
  removeRemote,
  updateRemoteUrl,
  fetchRemote,
  getRemoteSyncStatus,
  getPullPreview,
  pullFromRemote,
  getPushPreview,
  pushToRemote,
  validateMerge
} = useComfyGitService()

const remotes = ref<RemoteInfo[]>([])
const trackingInfo = ref<{ remote: string; branch: string } | null>(null)
const syncStatuses = ref<Record<string, RemoteSyncStatus>>({})
const loading = ref(false)
const error = ref<string | null>(null)
const searchQuery = ref('')
const showInfoPopover = ref(false)
const fetchingRemote = ref<string | null>(null)

// Form state
const showForm = ref(false)
const formMode = ref<'add' | 'edit'>('add')
const formData = ref({
  name: '',
  fetchUrl: '',
  pushUrl: ''
})

const filteredRemotes = computed(() => {
  if (!searchQuery.value.trim()) return remotes.value
  const query = searchQuery.value.toLowerCase()
  return remotes.value.filter(r =>
    r.name.toLowerCase().includes(query) ||
    r.fetch_url.toLowerCase().includes(query) ||
    r.push_url.toLowerCase().includes(query)
  )
})

function isTrackingRemote(remoteName: string): boolean {
  return trackingInfo.value?.remote === remoteName
}

async function loadRemotes() {
  loading.value = true
  error.value = null
  try {
    const result = await getRemotes()
    remotes.value = result.remotes
    trackingInfo.value = result.current_branch_tracking || null

    // Load sync statuses for all remotes
    await Promise.all(
      result.remotes.map(async (remote) => {
        const status = await getRemoteSyncStatus(remote.name)
        if (status) {
          syncStatuses.value[remote.name] = status
        }
      })
    )
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load remotes'
  } finally {
    loading.value = false
  }
}

function handleAddRemote() {
  formMode.value = 'add'
  formData.value = { name: '', fetchUrl: '', pushUrl: '' }
  showForm.value = true
}

function handleEdit(remoteName: string) {
  const remote = remotes.value.find(r => r.name === remoteName)
  if (!remote) return

  formMode.value = 'edit'
  formData.value = {
    name: remote.name,
    fetchUrl: remote.fetch_url,
    pushUrl: remote.push_url
  }
  showForm.value = true
}

async function handleFormSubmit(data: { name: string; fetchUrl: string; pushUrl: string }) {
  try {
    if (formMode.value === 'add') {
      await addRemote(data.name, data.fetchUrl)
    } else {
      await updateRemoteUrl(data.name, data.fetchUrl, data.pushUrl || undefined)
    }
    showForm.value = false
    await loadRemotes()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Operation failed'
  }
}

function cancelForm() {
  showForm.value = false
  formData.value = { name: '', fetchUrl: '', pushUrl: '' }
}

async function handleFetch(remoteName: string) {
  fetchingRemote.value = remoteName
  try {
    await fetchRemote(remoteName)
    // Reload sync status after fetch
    const status = await getRemoteSyncStatus(remoteName)
    if (status) {
      syncStatuses.value[remoteName] = status
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Fetch failed'
  } finally {
    fetchingRemote.value = null
  }
}

async function handleRemove(remoteName: string) {
  if (!confirm(`Remove remote "${remoteName}"?`)) return

  try {
    await removeRemote(remoteName)
    await loadRemotes()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to remove remote'
  }
}

function openDocs() {
  window.open('https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes', '_blank')
}

// =============================================================================
// V2 State Machine for Pull/Merge Flow
// =============================================================================

type FlowState = 'idle' | 'pull_preview' | 'resolving' | 'validating' | 'validation_review' | 'executing'
const flowState = ref<FlowState>('idle')

// Derived modal visibility from flowState
const showPullModal = computed(() => flowState.value === 'pull_preview')
const showWorkflowResolutionModal = computed(() =>
  flowState.value === 'resolving' || flowState.value === 'validating'
)
const showValidationModal = computed(() =>
  flowState.value === 'validation_review' || flowState.value === 'executing'
)

// Push modal (separate flow)
const showPushModal = ref(false)
const pushPreview = ref<PushPreview | null>(null)
const pushing = ref(false)

// Shared state
const activeRemote = ref<string | null>(null)
const loadingPreview = ref(false)

// Pull-specific state
const pullPreview = ref<PullPreview | PullPreviewWithConflicts | null>(null)
const pullError = ref<string | null>(null)

// V2: Workflow resolution state
const workflowResolutions = ref<Map<string, WorkflowResolution>>(new Map())
const validationResult = ref<MergeValidation | null>(null)
const validationError = ref<string | null>(null)

// Computed: Get pull preview as conflicts version if applicable
const pullPreviewWithConflicts = computed(() => {
  if (pullPreview.value && hasWorkflowConflicts(pullPreview.value)) {
    return pullPreview.value as PullPreviewWithConflicts
  }
  return null
})

// =============================================================================
// Pull Flow Handlers
// =============================================================================

async function handlePullClick(remoteName: string) {
  activeRemote.value = remoteName
  flowState.value = 'pull_preview'
  loadingPreview.value = true
  pullPreview.value = null
  pullError.value = null

  try {
    pullPreview.value = await getPullPreview(remoteName)
  } catch (err) {
    pullError.value = err instanceof Error ? err.message : 'Failed to load pull preview'
  } finally {
    loadingPreview.value = false
  }
}

function closePullModal() {
  flowState.value = 'idle'
  pullPreview.value = null
  pullError.value = null
  activeRemote.value = null
}

async function handlePull(options: { modelStrategy: string; force: boolean; resolutions?: WorkflowResolution[] }) {
  if (!activeRemote.value) return

  flowState.value = 'executing'
  pullError.value = null

  try {
    const result = await pullFromRemote(activeRemote.value, options)

    // Check for rollback
    if (result.rolled_back) {
      pullError.value = `Pull failed and was rolled back: ${result.error || 'Unknown error'}`
      flowState.value = 'pull_preview'
      return
    }

    // Success - reset everything
    resetConflictState()
    flowState.value = 'idle'
    await loadRemotes()
  } catch (err) {
    pullError.value = err instanceof Error ? err.message : 'Pull failed'
    flowState.value = 'pull_preview'
  }
}

// =============================================================================
// Workflow Resolution Flow (V2)
// =============================================================================

function openWorkflowResolution() {
  if (!pullPreviewWithConflicts.value) return
  flowState.value = 'resolving'
  validationError.value = null
}

function handleWorkflowResolve(name: string, resolution: 'take_base' | 'take_target') {
  workflowResolutions.value.set(name, { name, resolution })
}

function handleWorkflowResolutionClose() {
  flowState.value = 'pull_preview'
  // Keep resolutions intact - they persist when going back
}

async function handleApplyResolutions() {
  flowState.value = 'validating'
  validationError.value = null

  try {
    const resolutions = Array.from(workflowResolutions.value.values())
    validationResult.value = await validateMerge(activeRemote.value!, resolutions)
    flowState.value = 'validation_review'
  } catch (err) {
    validationError.value = err instanceof Error ? err.message : 'Validation failed'
    flowState.value = 'resolving'
  }
}

// =============================================================================
// Validation Flow (V2)
// =============================================================================

async function handleProceedWithMerge() {
  flowState.value = 'executing'

  try {
    const resolutions = Array.from(workflowResolutions.value.values())
    const result = await pullFromRemote(activeRemote.value!, {
      modelStrategy: localStorage.getItem('comfygit.pullModelStrategy') || 'skip',
      force: false,
      resolutions
    })

    // Check for rollback
    if (result.rolled_back) {
      pullError.value = `Pull failed and was rolled back: ${result.error || 'Unknown error'}`
      flowState.value = 'pull_preview'
      return
    }

    // Success - reset everything
    resetConflictState()
    flowState.value = 'idle'
    await loadRemotes()
  } catch (err) {
    pullError.value = err instanceof Error ? err.message : 'Pull failed'
    flowState.value = 'validation_review'
  }
}

function handleGoBackToResolution() {
  flowState.value = 'resolving'
  // Keep resolutions intact so user can modify
}

function handleCancelMerge() {
  resetConflictState()
  flowState.value = 'idle'
}

function resetConflictState() {
  workflowResolutions.value.clear()
  validationResult.value = null
  validationError.value = null
  pullError.value = null
  pullPreview.value = null
  activeRemote.value = null
}

// =============================================================================
// Push Flow
// =============================================================================

async function handlePushClick(remoteName: string) {
  activeRemote.value = remoteName
  showPushModal.value = true
  loadingPreview.value = true
  pushPreview.value = null

  try {
    pushPreview.value = await getPushPreview(remoteName)
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load push preview'
  } finally {
    loadingPreview.value = false
  }
}

function closePushModal() {
  showPushModal.value = false
  pushPreview.value = null
  activeRemote.value = null
}

async function handlePush(options: { force: boolean }) {
  if (!activeRemote.value) return

  pushing.value = true
  try {
    await pushToRemote(activeRemote.value, options)
    closePushModal()
    await loadRemotes()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Push failed'
  } finally {
    pushing.value = false
  }
}

function handlePullFirst() {
  const remote = activeRemote.value
  closePushModal()
  if (remote) {
    handlePullClick(remote)
  }
}

onMounted(loadRemotes)
</script>

<style scoped>
/* Minimal custom CSS - all styling comes from atomic components */
</style>
