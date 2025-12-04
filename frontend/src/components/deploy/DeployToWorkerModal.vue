<template>
  <BaseModal
    :title="`DEPLOY TO: ${worker.name}`"
    size="md"
    @close="$emit('close')"
  >
    <template #body>
      <div class="deploy-content">
        <!-- Deploy Source Section -->
        <div class="section">
          <div class="section-label">DEPLOY SOURCE</div>
          <div v-if="isLoadingRemotes" class="loading-text">Loading remotes...</div>
          <div v-else-if="remotes.length === 0" class="empty-remotes">
            <span class="empty-icon">🌐</span>
            <span class="empty-text">No Git remotes configured</span>
            <p class="empty-help">Configure a remote repository to deploy.</p>
          </div>
          <div v-else class="remotes-list">
            <DeployRemoteCard
              v-for="remote in remotes"
              :key="remote.name"
              :remote="remote"
              :sync-status="syncStatuses[remote.name]"
              :is-selected="selectedRemote === remote.name"
              :is-fetching="fetchingRemote === remote.name"
              :is-pushing="pushingRemote === remote.name"
              @fetch="handleFetchRemote"
              @push="handlePushRemote"
              @select="handleSelectRemote"
            />
          </div>
        </div>

        <!-- Instance Mode Section -->
        <div class="section">
          <div class="section-label">INSTANCE MODE</div>
          <div class="mode-options">
            <label class="mode-option">
              <input
                type="radio"
                v-model="selectedMode"
                value="docker"
                :disabled="!worker.mode || worker.mode === 'native'"
              />
              <span class="mode-label">Docker (isolated container)</span>
            </label>
            <label class="mode-option">
              <input
                type="radio"
                v-model="selectedMode"
                value="native"
              />
              <span class="mode-label">Native (direct process)</span>
            </label>
          </div>
        </div>

        <!-- Instance Name Section -->
        <div class="section">
          <div class="section-label">INSTANCE NAME (optional)</div>
          <input
            v-model="instanceName"
            type="text"
            class="form-input"
            placeholder="my-deployment"
          />
        </div>

        <!-- Environment Summary -->
        <div v-if="envSummary" class="section">
          <div class="section-label">ENVIRONMENT SUMMARY</div>
          <div class="summary-row">
            ComfyUI: {{ envSummary.comfyui_version }} • {{ envSummary.node_count }} nodes • {{ envSummary.model_count }} models • {{ envSummary.workflow_count }} workflows
          </div>
        </div>

        <!-- Unpushed warning -->
        <div
          v-if="selectedRemoteStatus && selectedRemoteStatus.ahead > 0"
          class="sync-warning"
        >
          <span class="warning-icon">⚠</span>
          <div class="warning-content">
            <strong>{{ selectedRemoteStatus.ahead }} unpushed commit{{ selectedRemoteStatus.ahead !== 1 ? 's' : '' }}</strong>
            <p>Push to '{{ selectedRemote }}' before deploying to include your latest changes.</p>
          </div>
          <ActionButton
            variant="primary"
            size="xs"
            :loading="pushingRemote === selectedRemote"
            @click="selectedRemote && handlePushRemote(selectedRemote)"
          >
            Push
          </ActionButton>
        </div>
      </div>
    </template>

    <template #footer>
      <div class="modal-actions">
        <ActionButton
          variant="ghost"
          size="sm"
          @click="$emit('close')"
        >
          Cancel
        </ActionButton>
        <ActionButton
          variant="primary"
          size="sm"
          :loading="isDeploying"
          :disabled="!canDeploy || isDeploying"
          @click="handleDeploy"
        >
          Deploy to Worker
        </ActionButton>
      </div>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type {
  CustomWorker,
  RemoteInfo,
  RemoteSyncStatus,
  EnvironmentDeploySummary
} from '@/types/comfygit'
import BaseModal from '@/components/base/BaseModal.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import DeployRemoteCard from '@/components/base/molecules/DeployRemoteCard.vue'

const props = defineProps<{
  worker: CustomWorker
}>()

const emit = defineEmits<{
  close: []
  toast: [message: string, type: 'info' | 'success' | 'warning' | 'error']
  deployed: []
}>()

const {
  getRemotes,
  getRemoteSyncStatus,
  fetchRemote,
  pushToRemote,
  getDeploySummary,
  deployToWorker
} = useComfyGitService()

// State
const remotes = ref<RemoteInfo[]>([])
const syncStatuses = ref<Record<string, RemoteSyncStatus>>({})
const isLoadingRemotes = ref(false)
const selectedRemote = ref<string | null>(null)
const fetchingRemote = ref<string | null>(null)
const pushingRemote = ref<string | null>(null)

const selectedMode = ref<'docker' | 'native'>(props.worker.mode || 'native')
const instanceName = ref('')
const envSummary = ref<EnvironmentDeploySummary | null>(null)
const isDeploying = ref(false)

const selectedRemoteStatus = computed(() => {
  if (!selectedRemote.value) return null
  return syncStatuses.value[selectedRemote.value] || null
})

const selectedRemoteUrl = computed(() => {
  if (!selectedRemote.value) return null
  const remote = remotes.value.find(r => r.name === selectedRemote.value)
  return remote?.fetch_url || null
})

const canDeploy = computed(() => {
  return selectedRemoteUrl.value && !isDeploying.value
})

async function loadRemotes() {
  isLoadingRemotes.value = true
  try {
    const result = await getRemotes()
    remotes.value = result.remotes

    await Promise.all(
      result.remotes.map(async (remote) => {
        const status = await getRemoteSyncStatus(remote.name)
        if (status) {
          syncStatuses.value[remote.name] = status
        }
      })
    )

    const defaultRemote = result.remotes.find(r => r.is_default)
    if (defaultRemote) {
      selectedRemote.value = defaultRemote.name
    } else if (result.remotes.length > 0) {
      selectedRemote.value = result.remotes[0].name
    }
  } catch {
    emit('toast', 'Failed to load remotes', 'error')
  } finally {
    isLoadingRemotes.value = false
  }
}

async function loadSummary() {
  try {
    envSummary.value = await getDeploySummary()
  } catch {
    // Ignore summary load failure
  }
}

async function handleFetchRemote(remoteName: string) {
  fetchingRemote.value = remoteName
  try {
    await fetchRemote(remoteName)
    const status = await getRemoteSyncStatus(remoteName)
    if (status) {
      syncStatuses.value[remoteName] = status
    }
    emit('toast', `Fetched from ${remoteName}`, 'success')
  } catch {
    emit('toast', 'Fetch failed', 'error')
  } finally {
    fetchingRemote.value = null
  }
}

async function handlePushRemote(remoteName: string) {
  pushingRemote.value = remoteName
  try {
    await pushToRemote(remoteName, { force: false })
    const status = await getRemoteSyncStatus(remoteName)
    if (status) {
      syncStatuses.value[remoteName] = status
    }
    emit('toast', `Pushed to ${remoteName}`, 'success')
  } catch {
    emit('toast', 'Push failed', 'error')
  } finally {
    pushingRemote.value = null
  }
}

function handleSelectRemote(remoteName: string) {
  selectedRemote.value = remoteName
}

async function handleDeploy() {
  if (!selectedRemoteUrl.value) return

  isDeploying.value = true
  try {
    const result = await deployToWorker(props.worker.name, {
      import_source: selectedRemoteUrl.value,
      mode: selectedMode.value,
      name: instanceName.value || undefined
    })

    if (result.status === 'success') {
      emit('toast', 'Deployment started', 'success')
      emit('deployed')
    } else {
      emit('toast', result.message, 'error')
    }
  } catch (err) {
    emit('toast', err instanceof Error ? err.message : 'Deployment failed', 'error')
  } finally {
    isDeploying.value = false
  }
}

onMounted(() => {
  loadRemotes()
  loadSummary()
})
</script>

<style scoped>
.deploy-content {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.section {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.section-label {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.loading-text {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  padding: var(--cg-space-3);
  text-align: center;
}

.empty-remotes {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-4);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  text-align: center;
}

.empty-icon {
  font-size: var(--cg-font-size-xl);
}

.empty-text {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
}

.empty-help {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  margin: 0;
}

.remotes-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.mode-options {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.mode-option {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  cursor: pointer;
}

.mode-option input {
  accent-color: var(--cg-color-accent);
}

.mode-option input:disabled {
  opacity: 0.5;
}

.mode-label {
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-primary);
}

.form-input {
  padding: var(--cg-space-2) var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-primary);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
}

.form-input:focus {
  outline: none;
  border-color: var(--cg-color-accent);
}

.summary-row {
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
  padding: var(--cg-space-2) var(--cg-space-3);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
}

.sync-warning {
  display: flex;
  gap: var(--cg-space-3);
  align-items: flex-start;
  padding: var(--cg-space-3);
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
}

.sync-warning .warning-icon {
  flex-shrink: 0;
  font-size: var(--cg-font-size-lg);
}

.sync-warning .warning-content {
  flex: 1;
}

.sync-warning .warning-content strong {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
}

.sync-warning .warning-content p {
  margin: var(--cg-space-1) 0 0 0;
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
}

.modal-actions {
  display: flex;
  gap: var(--cg-space-2);
  justify-content: flex-end;
}
</style>
