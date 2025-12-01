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
          <!-- Network Volume -->
          <div class="config-row">
            <label class="config-label">Network Volume</label>
            <div v-if="isLoadingVolumes" class="loading-inline">Loading volumes...</div>
            <template v-else-if="networkVolumes.length === 0">
              <div class="no-volumes-state">
                <span class="no-volumes-icon">⚠</span>
                <span class="no-volumes-text">No network volumes found</span>
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
                  v-for="vol in networkVolumes"
                  :key="vol.id"
                  :value="vol.id"
                >
                  {{ vol.name }} ({{ vol.size_gb }}GB, {{ vol.data_center_id }})
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
              <option v-else-if="gpuTypes.length === 0" value="">No GPUs available in this region</option>
              <option
                v-for="gpu in gpuTypes"
                :key="gpu.id"
                :value="gpu.id"
                :disabled="!gpu.available"
              >
                {{ gpu.displayName }} ({{ gpu.memoryInGb }}GB) - ${{ selectedCloudType === 'SECURE' ? gpu.securePrice.toFixed(2) : gpu.communityPrice.toFixed(2) }}/hr
                {{ !gpu.available ? ' [Unavailable]' : '' }}
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

      <!-- Deploy Actions -->
      <div v-if="isConnected" class="deploy-actions">
        <ActionButton
          variant="primary"
          size="md"
          :loading="isDeploying"
          :disabled="!canDeploy"
          @click="handleDeploy"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1L3 6h3v5h4V6h3L8 1z"/>
            <path d="M14 12v2H2v-2H0v4h16v-4h-2z"/>
          </svg>
          Deploy to RunPod
        </ActionButton>
        <ActionButton
          variant="secondary"
          size="md"
          :loading="isExporting"
          @click="handleExportPackage"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1L3 6h3v5h4V6h3L8 1z"/>
          </svg>
          Export Package
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

      <!-- Export Result -->
      <SectionGroup v-if="exportResult" title="EXPORT RESULT">
        <ItemCard :status="exportResult.status === 'success' ? 'synced' : 'broken'">
          <template #icon>{{ exportResult.status === 'success' ? '✓' : '✕' }}</template>
          <template #title>
            {{ exportResult.status === 'success' ? 'Package Created' : 'Export Failed' }}
          </template>
          <template #subtitle>
            {{ exportResult.message }}
          </template>
          <template v-if="exportResult.package_path" #details>
            <DetailRow label="Saved to:">
              <FilePath :path="exportResult.package_path" />
            </DetailRow>
            <DetailRow label="Size:" :value="`${exportResult.package_size_mb} MB`" />
          </template>
          <template #actions>
            <ActionButton
              v-if="exportResult.package_path"
              variant="secondary"
              size="sm"
              @click="copyPath(exportResult.package_path!)"
            >
              Copy Path
            </ActionButton>
            <ActionButton variant="ghost" size="sm" @click="exportResult = null">
              Dismiss
            </ActionButton>
          </template>
        </ItemCard>
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
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type {
  EnvironmentDeploySummary,
  NetworkVolume,
  RunPodGpuType,
  RunPodInstance,
  DeployResult,
  DeployPackageResult
} from '@/types/comfygit'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import SectionGroup from '@/components/base/molecules/SectionGroup.vue'
import ItemCard from '@/components/base/molecules/ItemCard.vue'
import DetailRow from '@/components/base/molecules/DetailRow.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import FilePath from '@/components/base/atoms/FilePath.vue'
import InfoPopover from '@/components/base/molecules/InfoPopover.vue'

const emit = defineEmits<{
  toast: [message: string, type: 'info' | 'success' | 'warning' | 'error']
}>()

const {
  getDeploySummary,
  testRunPodConnection,
  getNetworkVolumes,
  getRunPodGpuTypes,
  deployToRunPod,
  getRunPodPods,
  terminateRunPodPod,
  exportDeployPackage,
  getStoredRunPodKey,
  clearRunPodKey
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
const selectedVolumeId = ref('')
const selectedGpu = ref('')
const selectedCloudType = ref<'SECURE' | 'COMMUNITY'>('SECURE')
const podName = ref('my-comfyui-deploy')

// Data State
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
const isExporting = ref(false)
const exportResult = ref<DeployPackageResult | null>(null)
const terminatingPodId = ref<string | null>(null)

// Computed
const selectedVolume = computed(() => {
  return networkVolumes.value.find(v => v.id === selectedVolumeId.value) || null
})

const canDeploy = computed(() => {
  return isConnected.value && selectedVolumeId.value && selectedGpu.value && !isDeploying.value
})

const getSelectedGpuPrice = (cloudType: 'SECURE' | 'COMMUNITY') => {
  const gpu = gpuTypes.value.find(g => g.id === selectedGpu.value)
  if (!gpu) return '0.00'
  return cloudType === 'SECURE' ? gpu.securePrice.toFixed(2) : gpu.communityPrice.toFixed(2)
}

// Methods
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

      // Load additional data
      await Promise.all([
        loadNetworkVolumes(),
        loadSummary(),
        loadPods()
      ])
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

async function loadNetworkVolumes() {
  isLoadingVolumes.value = true
  try {
    const result = await getNetworkVolumes()
    networkVolumes.value = result.volumes
    // Auto-select first volume if available
    if (networkVolumes.value.length > 0) {
      selectedVolumeId.value = networkVolumes.value[0].id
    }
  } catch (err) {
    emit('toast', 'Failed to load network volumes', 'error')
  } finally {
    isLoadingVolumes.value = false
  }
}

async function loadGpuTypes(dataCenterId?: string) {
  isLoadingGpus.value = true
  try {
    const result = await getRunPodGpuTypes(dataCenterId)
    gpuTypes.value = result.gpu_types
    // Auto-select first available GPU
    const firstAvailable = gpuTypes.value.find(g => g.available)
    if (firstAvailable) {
      selectedGpu.value = firstAvailable.id
    } else {
      selectedGpu.value = ''
    }
  } catch (err) {
    emit('toast', 'Failed to load GPU types', 'error')
  } finally {
    isLoadingGpus.value = false
  }
}

// Watch for volume selection changes to filter GPUs
watch(selectedVolumeId, async (newVolumeId) => {
  if (!newVolumeId) {
    gpuTypes.value = []
    selectedGpu.value = ''
    return
  }

  const volume = networkVolumes.value.find(v => v.id === newVolumeId)
  if (volume) {
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

  isDeploying.value = true
  deployResult.value = null

  try {
    const result = await deployToRunPod({
      gpu_type_id: selectedGpu.value,
      pod_name: podName.value || 'my-comfyui-deploy',
      network_volume_id: selectedVolumeId.value,
      cloud_type: selectedCloudType.value
    })

    deployResult.value = result

    if (result.status === 'success') {
      emit('toast', 'Deployment started!', 'success')
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

async function handleExportPackage() {
  isExporting.value = true
  exportResult.value = null

  try {
    const result = await exportDeployPackage()
    exportResult.value = result

    if (result.status === 'success') {
      emit('toast', 'Package created!', 'success')
    } else {
      emit('toast', result.message || 'Export failed', 'error')
    }
  } catch (err) {
    exportResult.value = {
      status: 'error',
      message: err instanceof Error ? err.message : 'Export failed'
    }
    emit('toast', 'Export failed', 'error')
  } finally {
    isExporting.value = false
  }
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

function openComfyUI(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer')
}

function copyPath(path: string) {
  navigator.clipboard.writeText(path)
  emit('toast', 'Path copied to clipboard', 'info')
}

function formatUptime(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  if (hours > 0) {
    return `${hours}h ${minutes}m`
  }
  return `${minutes}m`
}

// Check for stored key on mount
onMounted(async () => {
  try {
    const stored = await getStoredRunPodKey()
    if (stored.has_key && stored.key_preview) {
      apiKey.value = stored.key_preview
      // Auto-connect with stored key
      await handleTestConnection()
    }
  } catch {
    // Ignore errors checking for stored key
  }
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
</style>
