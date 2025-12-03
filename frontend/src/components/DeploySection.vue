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
      <!-- Tabs -->
      <BaseTabs
        v-model="activeTab"
        :tabs="tabs"
      />

      <!-- Instances Tab -->
      <InstancesTab
        v-if="activeTab === 'instances'"
        :instances="instances"
        :is-loading="isLoading"
        :action-loading-id="actionLoadingId"
        @refresh="refreshInstances"
        @stop="handleStopInstance"
        @start="handleStartInstance"
        @terminate="handleTerminateInstance"
      />

      <!-- RunPod Tab -->
      <RunPodTab
        v-if="activeTab === 'runpod'"
        @toast="(msg, type) => emit('toast', msg, type)"
        @navigate="(tab) => emit('navigate', tab)"
        @deployed="handleDeployed"
      />
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useDeployInstances } from '@/composables/useDeployInstances'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import InfoPopover from '@/components/base/molecules/InfoPopover.vue'
import BaseTabs from '@/components/base/atoms/BaseTabs.vue'
import InstancesTab from '@/components/deploy/InstancesTab.vue'
import RunPodTab from '@/components/deploy/RunPodTab.vue'

const emit = defineEmits<{
  toast: [message: string, type: 'info' | 'success' | 'warning' | 'error']
  navigate: [tab: string]
}>()

// Use shared instances composable
const {
  instances,
  isLoading,
  liveInstanceCount,
  refreshInstances,
  stopInstance,
  startInstance,
  terminateInstance,
  startPolling,
  stopPolling
} = useDeployInstances()

// UI State
const showInfo = ref(false)
const activeTab = ref('instances')
const actionLoadingId = ref<string | null>(null)

// Tabs with dynamic badge
const tabs = computed(() => [
  {
    id: 'instances',
    label: 'Instances',
    badge: liveInstanceCount.value > 0 ? String(liveInstanceCount.value) : undefined
  },
  {
    id: 'runpod',
    label: 'RunPod'
  }
])

// Action handlers with loading state
async function handleStopInstance(id: string) {
  actionLoadingId.value = id
  try {
    await stopInstance(id)
    emit('toast', 'Instance stopped', 'success')
  } catch (err) {
    emit('toast', err instanceof Error ? err.message : 'Failed to stop instance', 'error')
  } finally {
    actionLoadingId.value = null
  }
}

async function handleStartInstance(id: string) {
  actionLoadingId.value = id
  try {
    await startInstance(id)
    emit('toast', 'Instance starting...', 'success')
  } catch (err) {
    emit('toast', err instanceof Error ? err.message : 'Failed to start instance', 'error')
  } finally {
    actionLoadingId.value = null
  }
}

async function handleTerminateInstance(id: string) {
  actionLoadingId.value = id
  try {
    await terminateInstance(id)
    emit('toast', 'Instance terminated', 'success')
  } catch (err) {
    emit('toast', err instanceof Error ? err.message : 'Failed to terminate instance', 'error')
  } finally {
    actionLoadingId.value = null
  }
}

async function handleDeployed() {
  // Refresh instances when a new deployment is started
  await refreshInstances()
  // Switch to instances tab to show the new deployment
  activeTab.value = 'instances'
}

// Lifecycle
onMounted(() => {
  refreshInstances()
  startPolling()
})

onUnmounted(() => {
  stopPolling()
})
</script>

<style scoped>
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
