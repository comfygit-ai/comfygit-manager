<template>
  <div class="runpod-tab">
    <!-- RunPod API Key Section -->
    <SectionGroup title="RUNPOD API KEY">
      <div class="api-key-card">
        <div class="api-key-row">
          <div class="api-key-input-wrapper">
            <input
              v-model="apiKey"
              :type="showApiKey ? 'text' : 'password'"
              class="api-key-input"
              placeholder="Enter your RunPod API key (rp_...)"
              :disabled="isConnected"
            />
            <button
              class="toggle-visibility-btn"
              @click="showApiKey = !showApiKey"
              :title="showApiKey ? 'Hide key' : 'Show key'"
            >
              {{ showApiKey ? '👁' : '👁‍🗨' }}
            </button>
          </div>
          <ActionButton
            v-if="!isConnected"
            variant="secondary"
            size="xs"
            :loading="isTesting"
            :disabled="!apiKey || isTesting"
            @click="handleTestConnection"
          >
            Test
          </ActionButton>
          <ActionButton
            v-if="isConnected"
            variant="ghost"
            size="xs"
            @click="handleClearKey"
          >
            Clear
          </ActionButton>
        </div>

        <!-- Connection Status -->
        <div v-if="connectionStatus" :class="['connection-status', connectionStatus.type]">
          <span class="status-icon">{{ connectionStatus.type === 'success' ? '✓' : '✕' }}</span>
          <span class="status-text">{{ connectionStatus.message }}</span>
          <span v-if="creditBalance !== null" class="credit-balance">
            ${{ creditBalance.toFixed(2) }} credit
          </span>
        </div>

        <div class="api-key-help">
          <span class="help-icon">i</span>
          <span class="help-text">
            Get your API key at <a href="https://runpod.io/console/user/settings" target="_blank" rel="noopener">runpod.io/console/user/settings</a>.
            Key stored locally, never sent to ComfyGit servers.
          </span>
        </div>
      </div>
    </SectionGroup>

    <!-- Configuration Section (only show when connected) -->
    <SectionGroup v-if="isConnected" title="CONFIGURATION">
      <div class="config-card">
        <!-- Region -->
        <div class="config-row">
          <label class="config-label">Region</label>
          <select
            v-model="selectedRegion"
            class="config-select"
            :disabled="isLoadingDataCenters"
          >
            <option v-if="isLoadingDataCenters" value="">Loading...</option>
            <option v-else-if="!selectedRegion" value="" disabled>Select a region</option>
            <option
              v-for="dc in dataCenters"
              :key="dc.id"
              :value="dc.id"
              :disabled="!dc.available"
            >
              {{ dc.id }} ({{ dc.name }}){{ !dc.available ? ' [Unavailable]' : '' }}
            </option>
          </select>
        </div>

        <!-- Network Volume -->
        <div class="config-row">
          <label class="config-label">Network Volume</label>
          <div v-if="isLoadingVolumes" class="loading-inline">Loading volumes...</div>
          <template v-else-if="filteredVolumes.length === 0">
            <div class="no-volumes-state">
              <span class="no-volumes-icon">⚠</span>
              <span class="no-volumes-text">No volumes in {{ selectedRegion || 'this region' }}</span>
            </div>
            <p class="volume-help">
              Network volumes provide persistent storage that survives pod termination.
              Create one on RunPod first:
            </p>
            <a
              href="https://www.runpod.io/console/user/storage"
              target="_blank"
              rel="noopener"
              class="create-volume-link"
            >
              Create Volume on RunPod →
            </a>
          </template>
          <template v-else>
            <select v-model="selectedVolumeId" class="config-select">
              <option
                v-for="vol in filteredVolumes"
                :key="vol.id"
                :value="vol.id"
              >
                {{ vol.name }} ({{ vol.size_gb }}GB)
              </option>
            </select>
            <a
              href="https://www.runpod.io/console/user/storage"
              target="_blank"
              rel="noopener"
              class="create-volume-inline-link"
            >
              + Create new volume
            </a>
          </template>
        </div>

        <!-- GPU Type -->
        <div class="config-row">
          <label class="config-label">GPU Type</label>
          <select
            v-model="selectedGpu"
            class="config-select"
            :disabled="isLoadingGpus || !selectedVolumeId"
          >
            <option v-if="!selectedVolumeId" value="">Select a volume first</option>
            <option v-else-if="isLoadingGpus" value="">Loading GPUs...</option>
            <option v-else-if="availableGpus.length === 0" value="">No GPUs available in this region</option>
            <option
              v-for="gpu in availableGpus"
              :key="gpu.id"
              :value="gpu.id"
            >
              {{ gpu.displayName }} ({{ gpu.memoryInGb }}GB) - ${{ selectedCloudType === 'SECURE' ? (gpu.securePrice ?? 0).toFixed(2) : (gpu.communityPrice ?? 0).toFixed(2) }}/hr
              {{ gpu.stockStatus ? `[${gpu.stockStatus}]` : '' }}
            </option>
          </select>
        </div>

        <!-- Cloud Type -->
        <div class="config-row">
          <label class="config-label">Cloud Type</label>
          <div class="radio-group">
            <label class="radio-option">
              <input type="radio" v-model="selectedCloudType" value="SECURE" />
              <span class="radio-label">Secure (${{ getSelectedGpuPrice('SECURE') }}/hr)</span>
            </label>
            <label class="radio-option disabled">
              <input type="radio" v-model="selectedCloudType" value="COMMUNITY" disabled />
              <span class="radio-label">Community (${{ getSelectedGpuPrice('COMMUNITY') }}/hr)</span>
            </label>
          </div>
        </div>

        <!-- Pricing Type -->
        <div class="config-row">
          <label class="config-label">
            Pricing
            <span class="info-tooltip" title="On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed.">ⓘ</span>
          </label>
          <div class="radio-group">
            <label class="radio-option">
              <input type="radio" v-model="selectedPricingType" value="ON_DEMAND" />
              <span class="radio-label">On-Demand (${{ getSelectedGpuPrice('ON_DEMAND') }}/hr)</span>
            </label>
            <label class="radio-option disabled">
              <input type="radio" v-model="selectedPricingType" value="SPOT" disabled />
              <span class="radio-label">Spot (${{ getSelectedGpuPrice('SPOT') }}/hr)</span>
            </label>
          </div>
        </div>

        <!-- Pod Name -->
        <div class="config-row">
          <label class="config-label">Pod Name</label>
          <input
            v-model="podName"
            type="text"
            class="config-input"
            placeholder="my-comfyui-deploy"
          />
        </div>
      </div>
    </SectionGroup>

    <!-- Deploy Source (Remote Selection) -->
    <SectionGroup v-if="isConnected" title="DEPLOY SOURCE">
      <div v-if="isLoadingRemotes" class="loading-text">Loading remotes...</div>

      <div v-else-if="remotes.length === 0" class="empty-remotes">
        <div class="empty-message">
          <span class="empty-icon">🌐</span>
          <span class="empty-text">No Git remotes configured</span>
          <p class="empty-help">Configure a remote repository to deploy your environment.</p>
        </div>
        <ActionButton variant="primary" size="xs" @click="emit('navigate', 'remotes')">
          Go to Remotes Tab →
        </ActionButton>
      </div>

      <template v-else>
        <div class="remotes-list">
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

        <!-- Warning if selected remote has unpushed commits -->
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
            Push to {{ selectedRemote }}
          </ActionButton>
        </div>

        <div class="remotes-footer">
          <ActionButton variant="link" size="xs" @click="emit('navigate', 'remotes')">
            Manage remotes →
          </ActionButton>
        </div>
      </template>
    </SectionGroup>

    <!-- Environment Summary -->
    <SectionGroup v-if="isConnected" title="ENVIRONMENT SUMMARY">
      <div class="summary-card">
        <div v-if="isLoadingSummary" class="loading-text">Loading environment summary...</div>
        <template v-else-if="envSummary">
          <div class="summary-row">
            <span class="summary-label">ComfyUI</span>
            <span class="summary-value">{{ envSummary.comfyui_version }}</span>
          </div>
          <div class="summary-row">
            <span class="summary-label">Nodes</span>
            <span class="summary-value">{{ envSummary.node_count }} custom nodes</span>
          </div>
          <div class="summary-row">
            <span class="summary-label">Models</span>
            <span class="summary-value">{{ envSummary.model_count }} models</span>
          </div>
          <div v-if="envSummary.models_with_sources > 0" class="summary-sub-row">
            <span class="summary-sub-label">└─ {{ envSummary.models_with_sources }} with sources (auto-download)</span>
          </div>
          <div v-if="envSummary.models_without_sources > 0" class="summary-sub-row warning">
            <span class="summary-sub-label">└─ {{ envSummary.models_without_sources }} without sources (manual upload)</span>
          </div>
          <div class="summary-row">
            <span class="summary-label">Workflows</span>
            <span class="summary-value">{{ envSummary.workflow_count }} committed</span>
          </div>
          <div class="summary-row">
            <span class="summary-label">Package</span>
            <span class="summary-value">~{{ envSummary.estimated_package_size_mb }} MB</span>
          </div>
        </template>
      </div>
    </SectionGroup>

    <!-- Deployment Summary (Pricing + Specs) -->
    <SectionGroup v-if="isConnected && pricingSummary" title="DEPLOYMENT SUMMARY">
      <div class="deployment-summary">
        <div class="summary-columns">
          <div class="summary-column">
            <div class="column-header">Pricing</div>
            <div class="pricing-row">
              <span class="pricing-label">GPU:</span>
              <span class="pricing-value">${{ pricingSummary.gpu.toFixed(2) }}/hr</span>
            </div>
            <div class="pricing-row">
              <span class="pricing-label">Volume:</span>
              <span class="pricing-value">${{ pricingSummary.volume.toFixed(3) }}/hr</span>
            </div>
            <div class="pricing-row">
              <span class="pricing-label">Disk:</span>
              <span class="pricing-value">${{ pricingSummary.container.toFixed(3) }}/hr</span>
            </div>
            <div class="pricing-divider"></div>
            <div class="pricing-row total">
              <span class="pricing-label">Total:</span>
              <span class="pricing-value">~${{ pricingSummary.total.toFixed(2) }}/hr</span>
            </div>
          </div>
          <div class="summary-column">
            <div class="column-header">Pod Specs</div>
            <div class="spec-row">
              <span>{{ gpuTypes.find(g => g.id === selectedGpu)?.displayName || 'GPU' }} ({{ gpuTypes.find(g => g.id === selectedGpu)?.memoryInGb || 0 }}GB VRAM)</span>
            </div>
            <div class="spec-row">
              <span>Region: {{ selectedRegion }}</span>
            </div>
            <div class="spec-row" v-if="selectedVolume">
              <span>Volume: {{ selectedVolume.name }}</span>
            </div>
            <div v-if="selectedPricingType === 'SPOT'" class="spec-row spot-warning">
              <span>⚠ Spot instance - may be interrupted</span>
            </div>
          </div>
        </div>
      </div>
    </SectionGroup>

    <!-- Deploy Actions -->
    <div v-if="isConnected" class="deploy-actions">
      <ActionButton
        variant="primary"
        size="md"
        :loading="isValidating || isDeploying"
        :disabled="!canDeploy"
        @click="handleDeploy"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 1L3 6h3v5h4V6h3L8 1z"/>
          <path d="M14 12v2H2v-2H0v4h16v-4h-2z"/>
        </svg>
        {{ isValidating ? 'Validating...' : isDeploying ? 'Deploying...' : 'Deploy to RunPod' }}
      </ActionButton>
    </div>

    <!-- Deploy Result -->
    <SectionGroup v-if="deployResult" title="DEPLOY STATUS">
      <ItemCard :status="deployResult.status === 'success' ? 'synced' : 'broken'">
        <template #icon>{{ deployResult.status === 'success' ? '✓' : '✕' }}</template>
        <template #title>
          {{ deployResult.status === 'success' ? 'Deployment Started' : 'Deployment Failed' }}
        </template>
        <template #subtitle>
          {{ deployResult.message }}
        </template>
        <template v-if="deployResult.pod_id" #details>
          <DetailRow label="Pod ID:" :value="deployResult.pod_id" />
        </template>
        <template #actions>
          <ActionButton variant="ghost" size="xs" @click="deployResult = null">
            Dismiss
          </ActionButton>
        </template>
      </ItemCard>
    </SectionGroup>
  </div>

  <!-- Deployment Progress Modal -->
  <BaseModal
    v-if="showProgressModal"
    title="Deploying to RunPod"
    size="sm"
    :show-close-button="deploymentStatus?.phase === 'READY' || deploymentStatus?.phase === 'ERROR' || deploymentStatus?.phase === 'STOPPED'"
    :close-on-overlay-click="false"
    @close="handleCloseProgressModal"
  >
    <template #body>
      <div class="progress-content">
        <div class="phase-indicator">
          <div :class="['phase-icon', deploymentStatus?.phase?.toLowerCase()]">
            <span v-if="deploymentStatus?.phase === 'READY'">✓</span>
            <span v-else-if="deploymentStatus?.phase === 'ERROR'">✕</span>
            <span v-else-if="deploymentStatus?.phase === 'STOPPED'">○</span>
            <span v-else class="spinner">⟳</span>
          </div>
          <div class="phase-text">
            <div class="phase-name">{{ getPhaseLabel(deploymentStatus?.phase) }}</div>
            <div class="phase-detail">{{ deploymentStatus?.phase_detail || 'Starting...' }}</div>
          </div>
        </div>

        <ProgressBar
          :progress="getProgressPercent(deploymentStatus?.phase)"
          :variant="deploymentStatus?.phase === 'ERROR' ? 'error' : deploymentStatus?.phase === 'READY' ? 'success' : 'default'"
        />

        <div v-if="deploymentStatus?.phase === 'READY'" class="ready-actions">
          <ActionButton variant="primary" size="md" @click="openComfyUIFromModal">
            Open ComfyUI
          </ActionButton>
        </div>

        <div class="console-link">
          <a v-if="deploymentStatus?.console_url" :href="deploymentStatus.console_url" target="_blank" rel="noopener">
            View in RunPod Console →
          </a>
        </div>
      </div>
    </template>

    <template v-if="deploymentStatus?.phase === 'READY' || deploymentStatus?.phase === 'ERROR' || deploymentStatus?.phase === 'STOPPED'" #footer>
      <ActionButton variant="ghost" size="xs" @click="handleCloseProgressModal">
        Close
      </ActionButton>
    </template>
  </BaseModal>

  <!-- Export Blocked Modal -->
  <ExportBlockedModal
    v-if="showBlockedModal && validationResult"
    :issues="validationResult.blocking_issues"
    @close="showBlockedModal = false"
  />

  <!-- Export Warnings Modal -->
  <ExportWarningsModal
    v-if="showWarningsModal && validationResult"
    :models="validationResult.warnings.models_without_sources"
    @confirm="handleDeployConfirmed"
    @cancel="showWarningsModal = false"
    @revalidate="handleRevalidate"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type {
  DataCenter,
  EnvironmentDeploySummary,
  NetworkVolume,
  RunPodGpuType,
  DeployResult,
  DeploymentStatus,
  ExportValidationResult,
  RemoteInfo,
  RemoteSyncStatus
} from '@/types/comfygit'
import SectionGroup from '@/components/base/molecules/SectionGroup.vue'
import ItemCard from '@/components/base/molecules/ItemCard.vue'
import DetailRow from '@/components/base/molecules/DetailRow.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import BaseModal from '@/components/base/BaseModal.vue'
import ProgressBar from '@/components/base/atoms/ProgressBar.vue'
import ExportBlockedModal from '@/components/ExportBlockedModal.vue'
import ExportWarningsModal from '@/components/ExportWarningsModal.vue'
import DeployRemoteCard from '@/components/base/molecules/DeployRemoteCard.vue'

const emit = defineEmits<{
  toast: [message: string, type: 'info' | 'success' | 'warning' | 'error']
  navigate: [tab: string]
  deployed: []
}>()

const {
  getDeploySummary,
  testRunPodConnection,
  getNetworkVolumes,
  getRunPodGpuTypes,
  deployToRunPod,
  getDeploymentStatus,
  getStoredRunPodKey,
  clearRunPodKey,
  validateDeploy,
  getRemotes,
  getRemoteSyncStatus,
  fetchRemote,
  pushToRemote,
  getDataCenters
} = useComfyGitService()

// UI State
const showApiKey = ref(false)

// API Key State
const apiKey = ref('')
const isConnected = ref(false)
const isTesting = ref(false)
const connectionStatus = ref<{ type: 'success' | 'error'; message: string } | null>(null)
const creditBalance = ref<number | null>(null)

// Configuration State
const selectedRegion = ref('')
const selectedVolumeId = ref('')
const selectedGpu = ref('')
const selectedCloudType = ref<'SECURE' | 'COMMUNITY'>('SECURE')
const selectedPricingType = ref<'ON_DEMAND' | 'SPOT'>('ON_DEMAND')
const podName = ref('my-comfyui-deploy')

// Remote Selection State
const remotes = ref<RemoteInfo[]>([])
const syncStatuses = ref<Record<string, RemoteSyncStatus>>({})
const isLoadingRemotes = ref(false)
const selectedRemote = ref<string | null>(null)
const fetchingRemote = ref<string | null>(null)
const pushingRemote = ref<string | null>(null)

// Data State
const dataCenters = ref<DataCenter[]>([])
const isLoadingDataCenters = ref(false)
const networkVolumes = ref<NetworkVolume[]>([])
const isLoadingVolumes = ref(false)
const gpuTypes = ref<RunPodGpuType[]>([])
const isLoadingGpus = ref(false)
const envSummary = ref<EnvironmentDeploySummary | null>(null)
const isLoadingSummary = ref(false)

// Action State
const isDeploying = ref(false)
const deployResult = ref<DeployResult | null>(null)

// Progress Modal State
const showProgressModal = ref(false)
const currentPodId = ref<string | null>(null)
const deploymentStatus = ref<DeploymentStatus | null>(null)
const pollIntervalId = ref<number | null>(null)

// Validation State
const isValidating = ref(false)
const validationResult = ref<ExportValidationResult | null>(null)
const showBlockedModal = ref(false)
const showWarningsModal = ref(false)

// Computed
const selectedVolume = computed(() => {
  return networkVolumes.value.find(v => v.id === selectedVolumeId.value) || null
})

const filteredVolumes = computed(() => {
  if (!selectedRegion.value) return networkVolumes.value
  return networkVolumes.value.filter(v => v.data_center_id === selectedRegion.value)
})

const availableGpus = computed(() => gpuTypes.value.filter(g => g.available))

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
  return isConnected.value &&
         selectedVolumeId.value &&
         selectedGpu.value &&
         selectedRemoteUrl.value &&
         !isDeploying.value &&
         !isValidating.value
})

const getSelectedGpuPrice = (type: 'SECURE' | 'COMMUNITY' | 'ON_DEMAND' | 'SPOT') => {
  const gpu = gpuTypes.value.find(g => g.id === selectedGpu.value)
  if (!gpu) return '0.00'

  if (type === 'SECURE') return (gpu.securePrice ?? 0).toFixed(2)
  if (type === 'COMMUNITY') return (gpu.communityPrice ?? 0).toFixed(2)

  const isSecure = selectedCloudType.value === 'SECURE'
  if (type === 'ON_DEMAND') {
    return isSecure ? (gpu.securePrice ?? 0).toFixed(2) : (gpu.communityPrice ?? 0).toFixed(2)
  }
  return isSecure ? (gpu.secureSpotPrice ?? 0).toFixed(2) : (gpu.communitySpotPrice ?? 0).toFixed(2)
}

const pricingSummary = computed(() => {
  const gpu = gpuTypes.value.find(g => g.id === selectedGpu.value)
  const volume = networkVolumes.value.find(v => v.id === selectedVolumeId.value)

  if (!gpu) return null

  const isSecure = selectedCloudType.value === 'SECURE'
  const isSpot = selectedPricingType.value === 'SPOT'

  let gpuPrice: number
  if (isSpot) {
    gpuPrice = isSecure ? (gpu.secureSpotPrice ?? 0) : (gpu.communitySpotPrice ?? 0)
  } else {
    gpuPrice = isSecure ? (gpu.securePrice ?? 0) : (gpu.communityPrice ?? 0)
  }

  const volumePrice = volume ? volume.size_gb * 0.00014 : 0
  const containerPrice = 0.004

  return {
    gpu: gpuPrice,
    volume: volumePrice,
    container: containerPrice,
    total: gpuPrice + volumePrice + containerPrice
  }
})

// Methods
async function loadDeployData() {
  await loadNetworkVolumes()
  await Promise.all([loadSummary(), loadRemotes()])
}

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

async function handleTestConnection() {
  if (!apiKey.value) return

  isTesting.value = true
  connectionStatus.value = null

  try {
    const result = await testRunPodConnection(apiKey.value, true)

    if (result.status === 'success') {
      isConnected.value = true
      creditBalance.value = result.credit_balance ?? null
      connectionStatus.value = { type: 'success', message: result.message }
      await loadDeployData()
    } else {
      connectionStatus.value = { type: 'error', message: result.message }
    }
  } catch (err) {
    connectionStatus.value = {
      type: 'error',
      message: err instanceof Error ? err.message : 'Connection test failed'
    }
  } finally {
    isTesting.value = false
  }
}

async function handleClearKey() {
  try {
    await clearRunPodKey()
    apiKey.value = ''
    isConnected.value = false
    connectionStatus.value = null
    creditBalance.value = null
    dataCenters.value = []
    selectedRegion.value = ''
    networkVolumes.value = []
    selectedVolumeId.value = ''
    gpuTypes.value = []
    selectedGpu.value = ''
    envSummary.value = null
    emit('toast', 'API key cleared', 'info')
  } catch {
    emit('toast', 'Failed to clear key', 'error')
  }
}

async function loadNetworkVolumes() {
  isLoadingVolumes.value = true
  isLoadingDataCenters.value = true
  try {
    const result = await getNetworkVolumes()
    networkVolumes.value = result.volumes

    const dcMap = new Map<string, DataCenter>()
    for (const vol of result.volumes) {
      if (vol.data_center_id && !dcMap.has(vol.data_center_id)) {
        dcMap.set(vol.data_center_id, {
          id: vol.data_center_id,
          name: vol.data_center_name || vol.data_center_id,
          available: true
        })
      }
    }

    if (result.volumes.length === 0) {
      const dcResult = await getDataCenters()
      dataCenters.value = dcResult.data_centers
    } else {
      dataCenters.value = Array.from(dcMap.values())
    }

    if (networkVolumes.value.length > 0) {
      const firstVolume = networkVolumes.value[0]
      selectedVolumeId.value = firstVolume.id
      if (firstVolume.data_center_id) {
        selectedRegion.value = firstVolume.data_center_id
        await loadGpuTypes(firstVolume.data_center_id)
      }
    } else if (dataCenters.value.length > 0) {
      selectedRegion.value = dataCenters.value[0].id
    }
  } catch {
    emit('toast', 'Failed to load network volumes', 'error')
  } finally {
    isLoadingVolumes.value = false
    isLoadingDataCenters.value = false
  }
}

async function loadGpuTypes(dataCenterId?: string) {
  isLoadingGpus.value = true
  try {
    const result = await getRunPodGpuTypes(dataCenterId)
    gpuTypes.value = result.gpu_types

    const firstAvailable = gpuTypes.value.find(g => g.available)
    if (firstAvailable) {
      selectedGpu.value = firstAvailable.id
    } else {
      selectedGpu.value = ''
    }
  } catch {
    emit('toast', 'Failed to load GPU types', 'error')
  } finally {
    isLoadingGpus.value = false
  }
}

watch(selectedRegion, async (newRegion) => {
  if (!newRegion || isLoadingVolumes.value) return

  const currentVolume = networkVolumes.value.find(v => v.id === selectedVolumeId.value)
  if (currentVolume && currentVolume.data_center_id !== newRegion) {
    selectedVolumeId.value = ''
  }

  await loadGpuTypes(newRegion)
})

watch(selectedVolumeId, async (volumeId) => {
  if (!volumeId) {
    gpuTypes.value = []
    selectedGpu.value = ''
    return
  }

  if (isLoadingVolumes.value) return

  const volume = networkVolumes.value.find(v => v.id === volumeId)
  if (volume && volume.data_center_id !== selectedRegion.value) {
    selectedRegion.value = volume.data_center_id
  } else if (volume) {
    await loadGpuTypes(volume.data_center_id)
  }
})

async function loadSummary() {
  isLoadingSummary.value = true
  try {
    envSummary.value = await getDeploySummary()
  } catch {
    emit('toast', 'Failed to load environment summary', 'error')
  } finally {
    isLoadingSummary.value = false
  }
}

async function handleDeploy() {
  if (!selectedGpu.value || !selectedVolumeId.value) return

  isValidating.value = true
  deployResult.value = null

  try {
    const result = await validateDeploy()
    validationResult.value = result

    if (!result.can_export) {
      showBlockedModal.value = true
    } else if (result.warnings.models_without_sources.length > 0) {
      showWarningsModal.value = true
    } else {
      await executeDeploy()
    }
  } catch (err) {
    deployResult.value = {
      status: 'error',
      message: err instanceof Error ? err.message : 'Validation failed'
    }
    emit('toast', 'Validation failed', 'error')
  } finally {
    isValidating.value = false
  }
}

async function handleDeployConfirmed() {
  showWarningsModal.value = false
  await executeDeploy()
}

async function handleRevalidate() {
  try {
    const result = await validateDeploy()
    validationResult.value = result
  } catch {
    console.error('Re-validation failed')
  }
}

async function executeDeploy() {
  isDeploying.value = true

  try {
    let spotBid: number | undefined
    if (selectedPricingType.value === 'SPOT') {
      const gpu = gpuTypes.value.find(g => g.id === selectedGpu.value)
      if (gpu) {
        spotBid = selectedCloudType.value === 'SECURE' ? gpu.secureSpotPrice : gpu.communitySpotPrice
      }
    }

    const result = await deployToRunPod({
      gpu_type_id: selectedGpu.value,
      pod_name: podName.value || 'my-comfyui-deploy',
      network_volume_id: selectedVolumeId.value,
      cloud_type: selectedCloudType.value,
      pricing_type: selectedPricingType.value,
      spot_bid: spotBid,
      import_source: selectedRemoteUrl.value!
    })

    deployResult.value = result

    if (result.status === 'success' && result.pod_id) {
      currentPodId.value = result.pod_id
      showProgressModal.value = true
      startStatusPolling(result.pod_id)
      emit('toast', 'Deployment started', 'success')
      emit('deployed')
    } else {
      emit('toast', result.message, 'error')
    }
  } catch (err) {
    deployResult.value = {
      status: 'error',
      message: err instanceof Error ? err.message : 'Deployment failed'
    }
    emit('toast', 'Deployment failed', 'error')
  } finally {
    isDeploying.value = false
  }
}

function startStatusPolling(podId: string) {
  pollDeploymentStatus(podId)
  pollIntervalId.value = window.setInterval(() => pollDeploymentStatus(podId), 3000)
}

function stopStatusPolling() {
  if (pollIntervalId.value) {
    clearInterval(pollIntervalId.value)
    pollIntervalId.value = null
  }
}

async function pollDeploymentStatus(podId: string) {
  try {
    const status = await getDeploymentStatus(podId)
    deploymentStatus.value = status

    if (status.phase === 'READY' || status.phase === 'ERROR' || status.phase === 'STOPPED') {
      stopStatusPolling()
      if (status.phase === 'READY') {
        emit('toast', 'ComfyUI is ready!', 'success')
      }
      emit('deployed')
    }
  } catch (err) {
    console.error('Failed to poll deployment status:', err)
  }
}

function handleCloseProgressModal() {
  showProgressModal.value = false
  stopStatusPolling()
  currentPodId.value = null
  deploymentStatus.value = null
}

function openComfyUIFromModal() {
  if (deploymentStatus.value?.comfyui_url) {
    window.open(deploymentStatus.value.comfyui_url, '_blank', 'noopener,noreferrer')
  }
}

function getPhaseLabel(phase: string | undefined): string {
  const labels: Record<string, string> = {
    'STARTING_POD': 'Starting Pod',
    'SETTING_UP': 'Setting Up Environment',
    'READY': 'Ready',
    'STOPPED': 'Stopped',
    'ERROR': 'Error'
  }
  return labels[phase || ''] || 'Initializing...'
}

function getProgressPercent(phase: string | undefined): number {
  const progress: Record<string, number> = {
    'STARTING_POD': 25,
    'SETTING_UP': 60,
    'READY': 100,
    'STOPPED': 0,
    'ERROR': 0
  }
  return progress[phase || ''] ?? 10
}

onMounted(async () => {
  try {
    const stored = await getStoredRunPodKey(true)

    if (stored.has_key && stored.key_preview) {
      apiKey.value = `****${stored.key_preview}`

      if (stored.valid) {
        isConnected.value = true
        creditBalance.value = stored.credit_balance ?? null
        connectionStatus.value = { type: 'success', message: 'Connected to RunPod' }
        await loadDeployData()
      } else if (stored.error) {
        connectionStatus.value = { type: 'error', message: stored.error }
      }
    }
  } catch {
    // Ignore errors checking for stored key
  }
})

onUnmounted(() => {
  stopStatusPolling()
})
</script>

<style scoped>
.runpod-tab {
  padding: var(--cg-space-3);
}

/* API Key Card */
.api-key-card {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  padding: var(--cg-space-4);
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.api-key-row {
  display: flex;
  gap: var(--cg-space-2);
  align-items: center;
}

.api-key-input-wrapper {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
}

.api-key-input {
  width: 100%;
  padding: var(--cg-space-2) var(--cg-space-3);
  padding-right: 40px;
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-primary);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
}

.api-key-input:focus {
  outline: none;
  border-color: var(--cg-color-accent);
}

.api-key-input:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.toggle-visibility-btn {
  position: absolute;
  right: 8px;
  background: transparent;
  border: none;
  color: var(--cg-color-text-muted);
  cursor: pointer;
  padding: 4px;
  font-size: 14px;
}

.toggle-visibility-btn:hover {
  color: var(--cg-color-text-primary);
}

/* Connection Status */
.connection-status {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-2);
  font-size: var(--cg-font-size-xs);
}

.connection-status.success {
  background: var(--cg-color-success-muted);
  border: 1px solid var(--cg-color-success);
}

.connection-status.error {
  background: var(--cg-color-error-muted);
  border: 1px solid var(--cg-color-error);
}

.status-icon {
  font-weight: bold;
}

.connection-status.success .status-icon {
  color: var(--cg-color-success);
}

.connection-status.error .status-icon {
  color: var(--cg-color-error);
}

.status-text {
  flex: 1;
  color: var(--cg-color-text-primary);
}

.credit-balance {
  color: var(--cg-color-accent);
  font-weight: var(--cg-font-weight-semibold);
}

/* API Key Help */
.api-key-help {
  display: flex;
  gap: var(--cg-space-2);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
}

.help-icon {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--cg-color-border-subtle);
  border-radius: 50%;
  font-size: 10px;
}

.help-text a {
  color: var(--cg-color-accent);
  text-decoration: none;
}

.help-text a:hover {
  text-decoration: underline;
}

/* Config Card */
.config-card {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  padding: var(--cg-space-4);
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.config-row {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.loading-inline {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
}

.no-volumes-state {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-2);
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
}

.no-volumes-icon {
  color: var(--cg-color-warning);
}

.no-volumes-text {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
}

.volume-help {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  margin: var(--cg-space-2) 0;
  line-height: 1.4;
}

.create-volume-link {
  display: inline-block;
  padding: var(--cg-space-2) var(--cg-space-3);
  background: var(--cg-color-accent);
  color: var(--cg-color-bg-primary);
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-medium);
  text-decoration: none;
  text-align: center;
}

.create-volume-link:hover {
  background: var(--cg-color-accent-hover);
}

.create-volume-inline-link {
  display: inline-block;
  margin-top: var(--cg-space-2);
  color: var(--cg-color-accent);
  font-size: var(--cg-font-size-xs);
  text-decoration: none;
  width: fit-content;
}

.create-volume-inline-link:hover {
  text-decoration: underline;
}

.config-label {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.config-select,
.config-input {
  padding: var(--cg-space-2) var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-primary);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
}

.config-select:focus,
.config-input:focus {
  outline: none;
  border-color: var(--cg-color-accent);
}

.config-select:disabled {
  opacity: 0.5;
}

/* Radio Group */
.radio-group {
  display: flex;
  gap: var(--cg-space-4);
}

.radio-option {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  cursor: pointer;
}

.radio-option input {
  accent-color: var(--cg-color-accent);
}

.radio-option.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.radio-option.disabled input {
  cursor: not-allowed;
}

.radio-label {
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-primary);
}

/* Summary Card */
.summary-card {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  padding: var(--cg-space-4);
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.summary-label {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
}

.summary-value {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
}

.summary-sub-row {
  padding-left: var(--cg-space-4);
}

.summary-sub-label {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
}

.summary-sub-row.warning .summary-sub-label {
  color: var(--cg-color-warning);
}

/* Deploy Actions */
.deploy-actions {
  display: flex;
  gap: var(--cg-space-3);
  padding: var(--cg-space-4) 0;
}

/* Deployment Summary Panel */
.deployment-summary {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  padding: var(--cg-space-4);
}

.summary-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--cg-space-4);
}

.summary-column {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.column-header {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  padding-bottom: var(--cg-space-2);
  border-bottom: 1px solid var(--cg-color-border-subtle);
  margin-bottom: var(--cg-space-1);
}

.pricing-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pricing-label {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
}

.pricing-value {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  font-family: var(--cg-font-mono);
}

.pricing-divider {
  height: 1px;
  background: var(--cg-color-border-subtle);
  margin: var(--cg-space-1) 0;
}

.pricing-row.total .pricing-label,
.pricing-row.total .pricing-value {
  font-weight: var(--cg-font-weight-semibold);
}

.pricing-row.total .pricing-value {
  color: var(--cg-color-accent);
}

.spec-row {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
}

.spec-row.spot-warning {
  color: var(--cg-color-warning);
  font-size: var(--cg-font-size-xs);
  margin-top: var(--cg-space-2);
}

/* Info Tooltip */
.info-tooltip {
  cursor: help;
  color: var(--cg-color-text-muted);
  font-size: 12px;
  margin-left: var(--cg-space-1);
}

/* Loading State */
.loading-text {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  text-align: center;
  padding: var(--cg-space-4);
}

/* Empty remotes state */
.empty-remotes {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--cg-space-4);
  padding: var(--cg-space-6);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  text-align: center;
}

.empty-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--cg-space-2);
}

.empty-icon {
  font-size: var(--cg-font-size-2xl);
}

.empty-text {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-medium);
}

.empty-help {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  margin: 0;
}

/* Remotes List */
.remotes-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

/* Sync Warning */
.sync-warning {
  display: flex;
  gap: var(--cg-space-3);
  align-items: flex-start;
  padding: var(--cg-space-3);
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
  margin-top: var(--cg-space-3);
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

/* Remotes footer */
.remotes-footer {
  margin-top: var(--cg-space-3);
  text-align: right;
}

/* Progress Modal */
.progress-content {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.phase-indicator {
  display: flex;
  align-items: center;
  gap: var(--cg-space-3);
}

.phase-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-radius: 50%;
  background: var(--cg-color-bg-tertiary);
  border: 2px solid var(--cg-color-border);
}

.phase-icon.ready {
  background: var(--cg-color-success-muted);
  border-color: var(--cg-color-success);
  color: var(--cg-color-success);
}

.phase-icon.error {
  background: var(--cg-color-error-muted);
  border-color: var(--cg-color-error);
  color: var(--cg-color-error);
}

.phase-icon.stopped {
  background: var(--cg-color-bg-tertiary);
  border-color: var(--cg-color-border);
  color: var(--cg-color-text-muted);
}

.phase-icon .spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.phase-text {
  flex: 1;
}

.phase-name {
  font-size: var(--cg-font-size-md);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-text-primary);
}

.phase-detail {
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-muted);
  margin-top: var(--cg-space-1);
}

.ready-actions {
  display: flex;
  justify-content: center;
  padding: var(--cg-space-2) 0;
}

.console-link {
  text-align: center;
}

.console-link a {
  color: var(--cg-color-accent);
  font-size: var(--cg-font-size-xs);
  text-decoration: none;
}

.console-link a:hover {
  text-decoration: underline;
}
</style>
