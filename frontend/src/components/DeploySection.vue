<template>
  <PanelLayout>
    <template #header>
      <PanelHeader
        title="DEPLOY TO CLOUD"
        :show-info="true"
        @info-click="showInfo = true"
      />
    </template>

    <template #content>
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
              size="sm"
              :loading="isTesting"
              :disabled="!apiKey || isTesting"
              @click="handleTestConnection"
            >
              Test
            </ActionButton>
            <ActionButton
              v-if="isConnected"
              variant="ghost"
              size="sm"
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
                {{ gpu.displayName }} ({{ gpu.memoryInGb }}GB) - ${{ selectedCloudType === 'SECURE' ? gpu.securePrice.toFixed(2) : gpu.communityPrice.toFixed(2) }}/hr
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
              <label class="radio-option">
                <input type="radio" v-model="selectedCloudType" value="COMMUNITY" />
                <span class="radio-label">Community (${{ getSelectedGpuPrice('COMMUNITY') }}/hr)</span>
              </label>
            </div>
          </div>

          <!-- Pricing Type -->
          <div class="config-row">
            <label class="config-label">
              Pricing
              <span class="info-tooltip" title="On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed. Good for experimentation.">ⓘ</span>
            </label>
            <div class="radio-group">
              <label class="radio-option">
                <input type="radio" v-model="selectedPricingType" value="ON_DEMAND" />
                <span class="radio-label">On-Demand (${{ getSelectedGpuPrice('ON_DEMAND') }}/hr)</span>
              </label>
              <label class="radio-option">
                <input type="radio" v-model="selectedPricingType" value="SPOT" />
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
        <!-- Loading state -->
        <div v-if="isLoadingRemotes" class="loading-text">
          Loading remotes...
        </div>

        <!-- Empty state -->
        <div v-else-if="remotes.length === 0" class="empty-remotes">
          <div class="empty-message">
            <span class="empty-icon">🌐</span>
            <span class="empty-text">No Git remotes configured</span>
            <p class="empty-help">
              Configure a remote repository to deploy your environment.
            </p>
          </div>
          <ActionButton variant="primary" size="sm" @click="emit('navigate', 'remotes')">
            Go to Remotes Tab →
          </ActionButton>
        </div>

        <!-- Remote cards -->
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
              size="sm"
              :loading="pushingRemote === selectedRemote"
              @click="selectedRemote && handlePushRemote(selectedRemote)"
            >
              Push to {{ selectedRemote }}
            </ActionButton>
          </div>

          <!-- Link to add more remotes -->
          <div class="remotes-footer">
            <ActionButton variant="link" size="sm" @click="emit('navigate', 'remotes')">
              Manage remotes →
            </ActionButton>
          </div>
        </template>
      </SectionGroup>

      <!-- Environment Summary (only show when connected) -->
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
            <ActionButton variant="ghost" size="sm" @click="deployResult = null">
              Dismiss
            </ActionButton>
          </template>
        </ItemCard>
      </SectionGroup>

      <!-- Active Pods Section -->
      <SectionGroup v-if="isConnected" title="ACTIVE PODS">
        <div class="pods-header">
          <ActionButton
            variant="ghost"
            size="sm"
            :loading="isLoadingPods"
            @click="loadPods"
          >
            Refresh
          </ActionButton>
        </div>

        <div v-if="isLoadingPods && pods.length === 0" class="loading-text">
          Loading pods...
        </div>

        <div v-else-if="pods.length === 0" class="empty-state">
          <span class="empty-icon">○</span>
          <span class="empty-text">No active pods</span>
        </div>

        <div v-else class="pods-list">
          <div
            v-for="pod in pods"
            :key="pod.id"
            class="pod-card"
          >
            <div class="pod-header">
              <span class="pod-name">{{ pod.name }}</span>
              <span :class="['pod-status', pod.status.toLowerCase()]">
                {{ pod.status === 'RUNNING' ? '●' : '○' }} {{ pod.status }}
              </span>
            </div>
            <div class="pod-details">
              <span class="pod-gpu">{{ pod.gpu_type }}</span>
              <span class="pod-separator">•</span>
              <span class="pod-uptime">{{ formatUptime(pod.uptime_seconds) }}</span>
              <span class="pod-separator">•</span>
              <span class="pod-cost">${{ pod.total_cost.toFixed(2) }}</span>
            </div>
            <div class="pod-actions">
              <ActionButton
                v-if="pod.comfyui_url && pod.status === 'RUNNING'"
                variant="primary"
                size="sm"
                @click="openComfyUI(pod.comfyui_url)"
              >
                Open ComfyUI
              </ActionButton>
              <ActionButton
                v-if="pod.status === 'RUNNING'"
                variant="secondary"
                size="sm"
                :loading="stoppingPodId === pod.id"
                @click="handleStopPod(pod.id)"
                title="Stop pod (saves money, keeps storage)"
              >
                Stop
              </ActionButton>
              <ActionButton
                v-if="pod.status === 'EXITED' || pod.status === 'STOPPED'"
                variant="secondary"
                size="sm"
                :loading="startingPodId === pod.id"
                @click="handleStartPod(pod.id)"
                title="Start stopped pod"
              >
                Start
              </ActionButton>
              <ActionButton
                variant="ghost"
                size="sm"
                :loading="terminatingPodId === pod.id"
                @click="handleTerminatePod(pod.id)"
              >
                Terminate
              </ActionButton>
            </div>
          </div>
        </div>
      </SectionGroup>

    </template>
  </PanelLayout>

  <!-- Info Popover -->
  <InfoPopover
    :show="showInfo"
    title="Deploy to Cloud"
    @close="showInfo = false"
  >
    <template #content>
      <div class="deploy-info">
        <div class="info-section">
          <strong>What is Deploy?</strong>
          <p>Deploy lets you run your ComfyUI environment on cloud GPU instances using your own RunPod account (BYOK - Bring Your Own Key).</p>
        </div>
        <div class="info-section">
          <strong>What gets deployed:</strong>
          <ul>
            <li><strong>Workflows</strong> - All committed workflows</li>
            <li><strong>Custom Nodes</strong> - Installed automatically</li>
            <li><strong>Models</strong> - Downloaded from sources (when available)</li>
            <li><strong>Configuration</strong> - Environment settings</li>
          </ul>
        </div>
        <div class="info-section">
          <strong>Cost Information:</strong>
          <p>You pay RunPod directly for GPU time. Costs vary by GPU type and cloud tier. Monitor your spend at runpod.io.</p>
        </div>
      </div>
    </template>
  </InfoPopover>

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
        <!-- Phase indicator -->
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

        <!-- Progress bar -->
        <ProgressBar
          :progress="getProgressPercent(deploymentStatus?.phase)"
          :variant="deploymentStatus?.phase === 'ERROR' ? 'error' : deploymentStatus?.phase === 'READY' ? 'success' : 'default'"
        />

        <!-- Ready state actions -->
        <div v-if="deploymentStatus?.phase === 'READY'" class="ready-actions">
          <ActionButton variant="primary" size="md" @click="openComfyUIFromModal">
            Open ComfyUI
          </ActionButton>
        </div>

        <!-- Console link -->
        <div class="console-link">
          <a v-if="deploymentStatus?.console_url" :href="deploymentStatus.console_url" target="_blank" rel="noopener">
            View in RunPod Console →
          </a>
        </div>
      </div>
    </template>

    <template v-if="deploymentStatus?.phase === 'READY' || deploymentStatus?.phase === 'ERROR' || deploymentStatus?.phase === 'STOPPED'" #footer>
      <ActionButton variant="ghost" size="sm" @click="handleCloseProgressModal">
        Close
      </ActionButton>
    </template>
  </BaseModal>

  <!-- Export Blocked Modal (reused for deploy validation) -->
  <ExportBlockedModal
    v-if="showBlockedModal && validationResult"
    :issues="validationResult.blocking_issues"
    @close="showBlockedModal = false"
  />

  <!-- Export Warnings Modal (reused for deploy validation) -->
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
  RunPodInstance,
  DeployResult,
  DeploymentStatus,
  ExportValidationResult,
  RemoteInfo,
  RemoteSyncStatus
} from '@/types/comfygit'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import SectionGroup from '@/components/base/molecules/SectionGroup.vue'
import ItemCard from '@/components/base/molecules/ItemCard.vue'
import DetailRow from '@/components/base/molecules/DetailRow.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import InfoPopover from '@/components/base/molecules/InfoPopover.vue'
import BaseModal from '@/components/base/BaseModal.vue'
import ProgressBar from '@/components/base/atoms/ProgressBar.vue'
import ExportBlockedModal from '@/components/ExportBlockedModal.vue'
import ExportWarningsModal from '@/components/ExportWarningsModal.vue'
import DeployRemoteCard from '@/components/base/molecules/DeployRemoteCard.vue'

const emit = defineEmits<{
  toast: [message: string, type: 'info' | 'success' | 'warning' | 'error']
  navigate: [tab: string]
}>()

const {
  getDeploySummary,
  getDataCenters,
  testRunPodConnection,
  getNetworkVolumes,
  getRunPodGpuTypes,
  deployToRunPod,
  getRunPodPods,
  terminateRunPodPod,
  stopRunPodPod,
  startRunPodPod,
  getDeploymentStatus,
  getStoredRunPodKey,
  clearRunPodKey,
  validateExport,
  getRemotes,
  getRemoteSyncStatus,
  fetchRemote,
  pushToRemote
} = useComfyGitService()

// UI State
const showInfo = ref(false)
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
const pods = ref<RunPodInstance[]>([])
const isLoadingPods = ref(false)

// Action State
const isDeploying = ref(false)
const deployResult = ref<DeployResult | null>(null)
const terminatingPodId = ref<string | null>(null)
const stoppingPodId = ref<string | null>(null)
const startingPodId = ref<string | null>(null)

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

// Filter volumes by selected region
const filteredVolumes = computed(() => {
  if (!selectedRegion.value) return networkVolumes.value
  return networkVolumes.value.filter(v => v.data_center_id === selectedRegion.value)
})

// Filter to only available GPUs
const availableGpus = computed(() => gpuTypes.value.filter(g => g.available))

// Remote selection computed properties
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

  // Handle cloud type selection (SECURE/COMMUNITY)
  if (type === 'SECURE') return gpu.securePrice.toFixed(2)
  if (type === 'COMMUNITY') return gpu.communityPrice.toFixed(2)

  // Handle pricing type selection (ON_DEMAND/SPOT) - uses current cloud type
  const isSecure = selectedCloudType.value === 'SECURE'
  if (type === 'ON_DEMAND') {
    return isSecure ? gpu.securePrice.toFixed(2) : gpu.communityPrice.toFixed(2)
  }
  // SPOT pricing
  return isSecure ? gpu.secureSpotPrice.toFixed(2) : gpu.communitySpotPrice.toFixed(2)
}

// Pricing summary for deployment
const pricingSummary = computed(() => {
  const gpu = gpuTypes.value.find(g => g.id === selectedGpu.value)
  const volume = networkVolumes.value.find(v => v.id === selectedVolumeId.value)

  if (!gpu) return null

  const isSecure = selectedCloudType.value === 'SECURE'
  const isSpot = selectedPricingType.value === 'SPOT'

  // Use actual spot prices from API
  let gpuPrice: number
  if (isSpot) {
    gpuPrice = isSecure ? gpu.secureSpotPrice : gpu.communitySpotPrice
  } else {
    gpuPrice = isSecure ? gpu.securePrice : gpu.communityPrice
  }

  // Network volume: ~$0.10/GB/month = ~$0.00014/GB/hr
  const volumePrice = volume ? volume.size_gb * 0.00014 : 0

  // Container disk: ~$0.004/hr for 30GB
  const containerPrice = 0.004

  return {
    gpu: gpuPrice,
    volume: volumePrice,
    container: containerPrice,
    total: gpuPrice + volumePrice + containerPrice
  }
})

// Methods

/**
 * Load all deploy data. Volumes drive everything - data centers are derived from volumes.
 */
async function loadDeployData() {
  console.log('[Deploy] Loading deploy data...')

  // Load volumes first - they determine available regions
  await loadNetworkVolumes()
  console.log('[Deploy] Volumes loaded, region:', selectedRegion.value, 'GPUs:', gpuTypes.value.length)

  // Summary, pods, and remotes can load in parallel
  await Promise.all([loadSummary(), loadPods(), loadRemotes()])
}

async function loadRemotes() {
  isLoadingRemotes.value = true
  try {
    const result = await getRemotes()
    remotes.value = result.remotes

    // Load sync status for each remote
    await Promise.all(
      result.remotes.map(async (remote) => {
        const status = await getRemoteSyncStatus(remote.name)
        if (status) {
          syncStatuses.value[remote.name] = status
        }
      })
    )

    // Auto-select default remote or first one
    const defaultRemote = result.remotes.find(r => r.is_default)
    if (defaultRemote) {
      selectedRemote.value = defaultRemote.name
    } else if (result.remotes.length > 0) {
      selectedRemote.value = result.remotes[0].name
    }
  } catch (err) {
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
  } catch (err) {
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
  } catch (err) {
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
    pods.value = []
    emit('toast', 'API key cleared', 'info')
  } catch (err) {
    emit('toast', 'Failed to clear key', 'error')
  }
}

async function loadDataCenters() {
  isLoadingDataCenters.value = true
  try {
    const result = await getDataCenters()
    dataCenters.value = result.data_centers
    // Don't auto-select region - let volume selection drive it
    // The volume watcher will set region when a volume is selected
  } catch (err) {
    emit('toast', 'Failed to load data centers', 'error')
  } finally {
    isLoadingDataCenters.value = false
  }
}

async function loadNetworkVolumes() {
  isLoadingVolumes.value = true
  isLoadingDataCenters.value = true
  try {
    const result = await getNetworkVolumes()
    networkVolumes.value = result.volumes
    console.log('[Deploy] Network volumes:', result.volumes.map(v => ({ id: v.id, name: v.name, dc: v.data_center_id })))

    // Build data centers list from volumes (users can only deploy where they have volumes)
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
    dataCenters.value = Array.from(dcMap.values())
    console.log('[Deploy] Data centers from volumes:', dataCenters.value)

    // Auto-select first volume if available and set region from it
    if (networkVolumes.value.length > 0) {
      const firstVolume = networkVolumes.value[0]
      selectedVolumeId.value = firstVolume.id
      console.log('[Deploy] Auto-selected volume:', firstVolume.name, 'data_center_id:', firstVolume.data_center_id)

      // Explicitly set region and load GPUs (don't rely on watchers during initial load)
      if (firstVolume.data_center_id) {
        selectedRegion.value = firstVolume.data_center_id
        console.log('[Deploy] Set region to:', selectedRegion.value)
        await loadGpuTypes(firstVolume.data_center_id)
      } else {
        console.warn('[Deploy] Volume has no data_center_id!')
      }
    }
  } catch (err) {
    emit('toast', 'Failed to load network volumes', 'error')
  } finally {
    isLoadingVolumes.value = false
    isLoadingDataCenters.value = false
  }
}

async function loadGpuTypes(dataCenterId?: string) {
  console.log('[Deploy] loadGpuTypes called with dataCenterId:', dataCenterId)
  isLoadingGpus.value = true
  try {
    const result = await getRunPodGpuTypes(dataCenterId)
    gpuTypes.value = result.gpu_types
    console.log('[Deploy] GPU types loaded:', result.gpu_types.length, 'GPUs,',
      result.gpu_types.filter(g => g.available).length, 'available')

    // Auto-select first available GPU
    const firstAvailable = gpuTypes.value.find(g => g.available)
    if (firstAvailable) {
      selectedGpu.value = firstAvailable.id
      console.log('[Deploy] Auto-selected GPU:', firstAvailable.displayName)
    } else {
      selectedGpu.value = ''
      console.log('[Deploy] No available GPUs in this region')
    }
  } catch (err) {
    emit('toast', 'Failed to load GPU types', 'error')
  } finally {
    isLoadingGpus.value = false
  }
}

// Watch for region changes: filter volumes, clear GPU if region changes, reload GPUs
// Skip during initial load (isLoadingVolumes) to prevent double GPU loads
watch(selectedRegion, async (newRegion) => {
  console.log('[Deploy] Region watcher fired:', newRegion, '(loading volumes:', isLoadingVolumes.value, ')')
  if (!newRegion) return

  // Skip GPU reload during initial volume load - loadNetworkVolumes handles it
  if (isLoadingVolumes.value) {
    console.log('[Deploy] Skipping GPU load - volumes still loading')
    return
  }

  // If current volume is in a different region, clear it
  const currentVolume = networkVolumes.value.find(v => v.id === selectedVolumeId.value)
  if (currentVolume && currentVolume.data_center_id !== newRegion) {
    selectedVolumeId.value = ''
  }

  // Reload GPUs for this region
  await loadGpuTypes(newRegion)
})

// Watch for volume changes: update region to match volume's data center
// Skip during initial load (isLoadingVolumes) to prevent double GPU loads
watch(selectedVolumeId, async (volumeId) => {
  console.log('[Deploy] Volume watcher fired:', volumeId, '(loading volumes:', isLoadingVolumes.value, ')')

  if (!volumeId) {
    gpuTypes.value = []
    selectedGpu.value = ''
    return
  }

  // Skip during initial volume load - loadNetworkVolumes handles region/GPU setup
  if (isLoadingVolumes.value) {
    console.log('[Deploy] Skipping - volumes still loading')
    return
  }

  const volume = networkVolumes.value.find(v => v.id === volumeId)
  if (volume && volume.data_center_id !== selectedRegion.value) {
    // Update region to match volume's data center (will trigger loadGpuTypes via region watcher)
    selectedRegion.value = volume.data_center_id
  } else if (volume) {
    // Same region, just load GPUs for this region
    await loadGpuTypes(volume.data_center_id)
  }
})

async function loadSummary() {
  isLoadingSummary.value = true
  try {
    envSummary.value = await getDeploySummary()
  } catch (err) {
    emit('toast', 'Failed to load environment summary', 'error')
  } finally {
    isLoadingSummary.value = false
  }
}

async function loadPods() {
  isLoadingPods.value = true
  try {
    const result = await getRunPodPods()
    pods.value = result.pods
  } catch (err) {
    emit('toast', 'Failed to load pods', 'error')
  } finally {
    isLoadingPods.value = false
  }
}

async function handleDeploy() {
  if (!selectedGpu.value || !selectedVolumeId.value) return

  // Validate environment before deploying (same as export)
  isValidating.value = true
  deployResult.value = null

  try {
    const result = await validateExport()
    validationResult.value = result

    if (!result.can_export) {
      // Show blocking issues modal
      showBlockedModal.value = true
    } else if (result.warnings.models_without_sources.length > 0) {
      // Show warnings modal for confirmation
      showWarningsModal.value = true
    } else {
      // No issues, proceed directly
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
    const result = await validateExport()
    validationResult.value = result
  } catch (err) {
    console.error('Re-validation failed:', err)
  }
}

async function executeDeploy() {
  isDeploying.value = true

  try {
    // Get spot bid price if using spot pricing
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
      // Show progress modal and start polling
      currentPodId.value = result.pod_id
      showProgressModal.value = true
      startStatusPolling(result.pod_id)
      // Refresh pods list
      await loadPods()
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
  // Poll immediately
  pollDeploymentStatus(podId)
  // Then poll every 3 seconds
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

    // Stop polling on terminal states
    if (status.phase === 'READY' || status.phase === 'ERROR' || status.phase === 'STOPPED') {
      stopStatusPolling()
      if (status.phase === 'READY') {
        emit('toast', 'ComfyUI is ready!', 'success')
      }
      // Refresh pods list
      await loadPods()
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

function openConsoleFromModal() {
  if (deploymentStatus.value?.console_url) {
    window.open(deploymentStatus.value.console_url, '_blank', 'noopener,noreferrer')
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

async function handleTerminatePod(podId: string) {
  terminatingPodId.value = podId

  try {
    const result = await terminateRunPodPod(podId)

    if (result.status === 'success') {
      emit('toast', 'Pod terminated', 'success')
      await loadPods()
    } else {
      emit('toast', result.message, 'error')
    }
  } catch (err) {
    emit('toast', 'Failed to terminate pod', 'error')
  } finally {
    terminatingPodId.value = null
  }
}

async function handleStopPod(podId: string) {
  stoppingPodId.value = podId

  try {
    const result = await stopRunPodPod(podId)

    if (result.status === 'success') {
      emit('toast', 'Pod stopped', 'success')
      await loadPods()
    } else {
      emit('toast', result.message, 'error')
    }
  } catch (err) {
    emit('toast', 'Failed to stop pod', 'error')
  } finally {
    stoppingPodId.value = null
  }
}

async function handleStartPod(podId: string) {
  startingPodId.value = podId

  try {
    const result = await startRunPodPod(podId)

    if (result.status === 'success') {
      emit('toast', 'Pod starting...', 'success')
      await loadPods()
    } else {
      emit('toast', result.message, 'error')
    }
  } catch (err) {
    emit('toast', 'Failed to start pod', 'error')
  } finally {
    startingPodId.value = null
  }
}

function openComfyUI(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer')
}

function formatUptime(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  if (hours > 0) {
    return `${hours}h ${minutes}m`
  }
  return `${minutes}m`
}

// Check for stored key on mount and verify it server-side
onMounted(async () => {
  try {
    // Use verify=true to test the stored key server-side
    // This avoids sending the 4-char preview as the API key
    const stored = await getStoredRunPodKey(true)

    if (stored.has_key && stored.key_preview) {
      // Display masked key for UI
      apiKey.value = `****${stored.key_preview}`

      if (stored.valid) {
        // Key is valid - set connected state
        isConnected.value = true
        creditBalance.value = stored.credit_balance ?? null
        connectionStatus.value = { type: 'success', message: 'Connected to RunPod' }

        await loadDeployData()
      } else if (stored.error) {
        // Key exists but is invalid/expired
        connectionStatus.value = { type: 'error', message: stored.error }
      }
    }
  } catch {
    // Ignore errors checking for stored key
  }
})

// Cleanup on unmount
onUnmounted(() => {
  stopStatusPolling()
})
</script>

<style scoped>
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

/* Network Volume States */
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

/* Pods Section */
.pods-header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: var(--cg-space-3);
}

.pods-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.pod-card {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  padding: var(--cg-space-3);
}

.pod-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--cg-space-2);
}

.pod-name {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
}

.pod-status {
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.pod-status.running {
  color: var(--cg-color-success);
}

.pod-status.exited {
  color: var(--cg-color-text-muted);
}

.pod-status.created {
  color: var(--cg-color-warning);
}

.pod-status.terminated {
  color: var(--cg-color-error);
}

.pod-status.stopped {
  color: var(--cg-color-warning);
}

.pod-details {
  display: flex;
  gap: var(--cg-space-2);
  align-items: center;
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  margin-bottom: var(--cg-space-3);
}

.pod-separator {
  color: var(--cg-color-border-subtle);
}

.pod-actions {
  display: flex;
  gap: var(--cg-space-2);
}

/* Empty State */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-6);
  color: var(--cg-color-text-muted);
}

.empty-icon {
  font-size: var(--cg-font-size-xl);
}

.empty-text {
  font-size: var(--cg-font-size-sm);
}

/* Loading State */
.loading-text {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-sm);
  text-align: center;
  padding: var(--cg-space-4);
}

/* Info Popover Content */
.deploy-info {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.info-section strong {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
}

.info-section p {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
  margin: var(--cg-space-1) 0 0 0;
  line-height: 1.5;
}

.info-section ul {
  margin: var(--cg-space-2) 0 0 0;
  padding-left: var(--cg-space-4);
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
  line-height: 1.6;
}

.info-section li {
  margin-bottom: var(--cg-space-1);
}

.info-section li strong {
  font-size: var(--cg-font-size-xs);
}

/* Info Tooltip */
.info-tooltip {
  cursor: help;
  color: var(--cg-color-text-muted);
  font-size: 12px;
  margin-left: var(--cg-space-1);
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

/* Field Help Text */
.field-help {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  margin-top: var(--cg-space-1);
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

/* Remotes footer */
.remotes-footer {
  margin-top: var(--cg-space-3);
  text-align: right;
}
</style>
