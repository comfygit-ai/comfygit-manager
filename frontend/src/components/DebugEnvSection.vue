<template>
  <PanelLayout>
    <template v-if="!embedded" #header>
      <PanelHeader
        title="DEBUG (ENVIRONMENT LOGS)"
        :show-info="true"
        @info-click="showPopover = true"
      >
        <template #actions>
          <ActionButton
            variant="secondary"
            size="sm"
            @click="refreshMetadata"
            :disabled="refreshingMetadata"
            title="Refresh generated ComfyUI metadata for this environment"
          >
            {{ refreshingMetadata ? 'Refreshing...' : 'Refresh Metadata' }}
          </ActionButton>
          <ActionButton
            variant="secondary"
            size="sm"
            @click="openLogFile"
            :disabled="!logFilePath || openingLogFile"
            title="Open log file in default editor"
          >
            {{ openingLogFile ? 'Opening...' : 'Open Log File' }}
          </ActionButton>
          <ActionButton
            variant="secondary"
            size="sm"
            @click="loadLogs"
            :disabled="loading"
          >
            {{ loading ? 'Loading...' : 'Refresh' }}
          </ActionButton>
        </template>
      </PanelHeader>
    </template>

    <template #content>
      <div v-if="embedded" class="debug-actions">
        <ActionButton
          variant="secondary"
          size="sm"
          @click="refreshMetadata"
          :disabled="refreshingMetadata"
          title="Refresh generated ComfyUI metadata for this environment"
        >
          {{ refreshingMetadata ? 'Refreshing...' : 'Refresh Metadata' }}
        </ActionButton>
        <ActionButton
          variant="secondary"
          size="sm"
          @click="openLogFile"
          :disabled="!logFilePath || openingLogFile"
          title="Open log file in default editor"
        >
          {{ openingLogFile ? 'Opening...' : 'Open Log File' }}
        </ActionButton>
        <ActionButton
          variant="secondary"
          size="sm"
          @click="loadLogs"
          :disabled="loading"
        >
          {{ loading ? 'Loading...' : 'Refresh' }}
        </ActionButton>
      </div>
      <template v-if="loading">
        <LoadingState message="Loading environment logs..." />
      </template>
      <template v-else-if="error">
        <ErrorState :message="error" :retry="true" @retry="loadLogs" />
      </template>
      <template v-else>
        <div
          v-if="metadataRefreshMessage"
          class="metadata-refresh-status"
          :class="{ 'metadata-refresh-status--error': metadataRefreshError }"
        >
          {{ metadataRefreshMessage }}
        </div>
        <EmptyState
          v-if="logs.length === 0"
          icon="📝"
          message="No environment logs available"
        />
        <LogViewer v-else :logs="logs" />
      </template>
    </template>
  </PanelLayout>

  <!-- Info Popover -->
  <InfoPopover
    :show="showPopover"
    title="About Environment Logs"
    @close="showPopover = false"
  >
    <template #content>
      <p>
        Environment logs show operations, warnings, and errors for the current environment.
        These logs are specific to <strong>{{ environmentName }}</strong> and help debug
        workflow execution, model loading, and node installation issues.
      </p>
      <p style="margin-top: var(--cg-space-2)">
        <strong>Log Levels:</strong><br>
        <strong>ERROR:</strong> Critical failures requiring attention<br>
        <strong>WARNING:</strong> Potential issues or important notices<br>
        <strong>INFO:</strong> General operational information<br>
        <strong>DEBUG:</strong> Detailed debugging information
      </p>
    </template>
    <template #actions>
      <ActionButton variant="primary" @click="showPopover = false">
        Got it
      </ActionButton>
    </template>
  </InfoPopover>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { LogEntry } from '@/types/comfygit'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import EmptyState from '@/components/base/molecules/EmptyState.vue'
import LoadingState from '@/components/base/organisms/LoadingState.vue'
import ErrorState from '@/components/base/organisms/ErrorState.vue'
import InfoPopover from '@/components/base/molecules/InfoPopover.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import LogViewer from '@/components/base/molecules/LogViewer.vue'

const {
  getEnvironmentLogs,
  getStatus,
  getEnvironmentLogPath,
  openFile,
  refreshEnvironmentMetadata
} = useComfyGitService()

defineProps<{
  embedded?: boolean
}>()

const logs = ref<LogEntry[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const showPopover = ref(false)
const environmentName = ref('production')
const logFilePath = ref<string | null>(null)
const openingLogFile = ref(false)
const refreshingMetadata = ref(false)
const metadataRefreshMessage = ref('')
const metadataRefreshError = ref(false)

async function loadLogs() {
  loading.value = true
  error.value = null
  try {
    logs.value = await getEnvironmentLogs(undefined, 500)

    // Get environment name for popover
    try {
      const status = await getStatus()
      environmentName.value = status.environment || 'production'
    } catch {
      // Ignore error, keep default
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load environment logs'
  } finally {
    loading.value = false
  }
}

async function loadLogPath() {
  try {
    const result = await getEnvironmentLogPath()
    if (result.exists) {
      logFilePath.value = result.path
    }
  } catch {
    // Ignore error, button will remain disabled
  }
}

async function openLogFile() {
  if (!logFilePath.value) return

  openingLogFile.value = true
  try {
    await openFile(logFilePath.value)
  } catch (err) {
    console.error('Failed to open log file:', err)
  } finally {
    openingLogFile.value = false
  }
}

async function refreshMetadata() {
  refreshingMetadata.value = true
  metadataRefreshError.value = false
  metadataRefreshMessage.value = ''

  try {
    const result = await refreshEnvironmentMetadata()
    metadataRefreshMessage.value = [
      `Metadata refreshed: ${result.builtins_count} builtin nodes`,
      `${result.folder_mappings_count} folder types`,
      `${result.model_loaders_count} model loaders`
    ].join(', ')
    await loadLogs()
  } catch (err) {
    metadataRefreshError.value = true
    metadataRefreshMessage.value = err instanceof Error
      ? err.message
      : 'Failed to refresh environment metadata'
  } finally {
    refreshingMetadata.value = false
  }
}

onMounted(() => {
  loadLogs()
  loadLogPath()
})
</script>

<style scoped>
.debug-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--cg-space-2);
  margin-bottom: var(--cg-space-3);
}

.metadata-refresh-status {
  margin-bottom: var(--cg-space-3);
  padding: var(--cg-space-2) var(--cg-space-3);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-sm);
  background: var(--cg-color-bg-secondary);
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
}

.metadata-refresh-status--error {
  border-color: var(--cg-color-error);
  color: var(--cg-color-error);
}
</style>
