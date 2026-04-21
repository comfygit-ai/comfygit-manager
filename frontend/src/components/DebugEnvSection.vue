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
      <template v-if="loading">
        <LoadingState message="Loading environment logs..." />
      </template>
      <template v-else-if="error">
        <ErrorState :message="error" :retry="true" @retry="loadLogs" />
      </template>
      <template v-else>
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

const { getEnvironmentLogs, getStatus, getEnvironmentLogPath, openFile } = useComfyGitService()

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

onMounted(() => {
  loadLogs()
  loadLogPath()
})
</script>
