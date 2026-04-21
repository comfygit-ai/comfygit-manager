<template>
  <PanelLayout>
    <template v-if="!embedded" #header>
      <PanelHeader
        title="DEBUG (LOGS)"
        :show-info="true"
        @info-click="showPopover = true"
      >
        <template #actions>
          <ActionButton
            variant="secondary"
            size="sm"
            @click="openLogFile"
            :disabled="!currentLogPath || openingLogFile"
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

    <!-- Tabs above scroll area -->
    <template v-if="!embedded" #search>
      <BaseTabs
        v-model="activeTab"
        :tabs="[
          { id: 'workspace', label: 'Workspace' },
          { id: 'orchestrator', label: 'Orchestrator' }
        ]"
      />
    </template>

    <template #content>
      <template v-if="loading">
        <LoadingState :message="`Loading ${activeTab} logs...`" />
      </template>
      <template v-else-if="error">
        <ErrorState :message="error" :retry="true" @retry="loadLogs" />
      </template>
      <template v-else>
        <EmptyState
          v-if="logs.length === 0"
          icon="📝"
          :message="`No ${activeTab} logs available`"
        />
        <LogViewer
          v-else
          :logs="logs"
          :raw-format="activeTab === 'orchestrator'"
        />
      </template>
    </template>
  </PanelLayout>

  <!-- Info Popover -->
  <InfoPopover
    :show="showPopover"
    title="About Logs"
    @close="showPopover = false"
  >
    <template #content>
      <p>
        <strong>Workspace Logs:</strong> System-level events for the entire ComfyGit workspace,
        including operations that affect multiple environments.
      </p>
      <p style="margin-top: var(--cg-space-2)">
        <strong>Orchestrator Logs:</strong> Process management events including ComfyUI
        startup, restarts, environment switches, and any errors during handoff.
      </p>
      <p style="margin-top: var(--cg-space-2)">
        <strong>Log Levels:</strong><br>
        <strong>ERROR:</strong> Critical failures requiring attention<br>
        <strong>WARNING:</strong> Potential issues or deprecated features<br>
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
import { ref, computed, onMounted, watch } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { LogEntry } from '@/types/comfygit'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import BaseTabs from '@/components/base/atoms/BaseTabs.vue'
import EmptyState from '@/components/base/molecules/EmptyState.vue'
import LoadingState from '@/components/base/organisms/LoadingState.vue'
import ErrorState from '@/components/base/organisms/ErrorState.vue'
import InfoPopover from '@/components/base/molecules/InfoPopover.vue'
import LogViewer from '@/components/base/molecules/LogViewer.vue'

const {
  getWorkspaceLogs,
  getWorkspaceLogPath,
  getOrchestratorLogs,
  getOrchestratorLogPath,
  openFile
} = useComfyGitService()

defineProps<{
  embedded?: boolean
}>()

const activeTab = ref<'workspace' | 'orchestrator'>('workspace')
const logs = ref<LogEntry[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const showPopover = ref(false)
const workspaceLogPath = ref<string | null>(null)
const orchestratorLogPath = ref<string | null>(null)
const openingLogFile = ref(false)

const currentLogPath = computed(() => {
  return activeTab.value === 'workspace' ? workspaceLogPath.value : orchestratorLogPath.value
})

async function loadLogs() {
  loading.value = true
  error.value = null
  try {
    if (activeTab.value === 'workspace') {
      logs.value = await getWorkspaceLogs(undefined, 500)
    } else {
      logs.value = await getOrchestratorLogs(undefined, 500)
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : `Failed to load ${activeTab.value} logs`
  } finally {
    loading.value = false
  }
}

async function loadLogPaths() {
  try {
    const [wsResult, orchResult] = await Promise.all([
      getWorkspaceLogPath(),
      getOrchestratorLogPath()
    ])
    if (wsResult.exists) workspaceLogPath.value = wsResult.path
    if (orchResult.exists) orchestratorLogPath.value = orchResult.path
  } catch {
    // Ignore errors, buttons will remain disabled
  }
}

async function openLogFile() {
  if (!currentLogPath.value) return

  openingLogFile.value = true
  try {
    await openFile(currentLogPath.value)
  } catch (err) {
    console.error('Failed to open log file:', err)
  } finally {
    openingLogFile.value = false
  }
}

// Reload logs when tab changes
watch(activeTab, () => {
  loadLogs()
})

onMounted(() => {
  loadLogs()
  loadLogPaths()
})
</script>
