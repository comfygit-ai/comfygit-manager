<template>
  <PanelLayout>
    <template #header>
      <PanelHeader
        title="DEBUG (WORKSPACE LOGS)"
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
        <LoadingState message="Loading workspace logs..." />
      </template>
      <template v-else-if="error">
        <ErrorState :message="error" :retry="true" @retry="loadLogs" />
      </template>
      <template v-else>
        <EmptyState
          v-if="logs.length === 0"
          icon="📝"
          message="No workspace logs available"
        />

        <!-- Simple text output for logs -->
        <div v-else ref="logOutputElement" class="log-output">
          <div
            v-for="(line, index) in formattedLogs"
            :key="index"
            :class="`log-line log-level-${line.level.toLowerCase()}`"
          >
            {{ line.text }}
          </div>
        </div>
      </template>
    </template>
  </PanelLayout>

  <!-- Info Popover -->
  <InfoPopover
    :show="showPopover"
    title="About Workspace Logs"
    @close="showPopover = false"
  >
    <template #content>
      <p>
        Workspace logs show system-level events and operations for the entire ComfyGit workspace,
        including operations that affect multiple environments.
      </p>
      <p style="margin-top: var(--cg-space-2)">
        <strong>Log Levels:</strong><br>
        <strong>ERROR:</strong> Critical failures requiring attention<br>
        <strong>WARNING:</strong> Potential issues or deprecated features<br>
        <strong>INFO:</strong> General operational information<br>
        <strong>DEBUG:</strong> Detailed debugging information
      </p>
      <p style="margin-top: var(--cg-space-2)">
        Use the filter bar to show/hide specific log levels.
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
import { ref, computed, onMounted } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { LogEntry } from '@/types/comfygit'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import EmptyState from '@/components/base/molecules/EmptyState.vue'
import LoadingState from '@/components/base/organisms/LoadingState.vue'
import ErrorState from '@/components/base/organisms/ErrorState.vue'
import InfoPopover from '@/components/base/molecules/InfoPopover.vue'

const { getWorkspaceLogs, getWorkspaceLogPath, openFile } = useComfyGitService()

const logs = ref<LogEntry[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const showPopover = ref(false)
const logOutputElement = ref<HTMLPreElement | null>(null)
const logFilePath = ref<string | null>(null)
const openingLogFile = ref(false)

// Format logs to match CLI output exactly
const formattedLogs = computed(() => {
  if (logs.value.length === 0) return []

  // Display in order received (already oldest->newest from backend)
  return logs.value.map(log => {
    // Match CLI format: timestamp - name - level - func:line - message
    const text = `${log.timestamp} - ${log.name} - ${log.level} - ${log.func}:${log.line} - ${log.message}`

    return {
      text,
      level: log.level
    }
  })
})

async function loadLogs() {
  loading.value = true
  error.value = null
  try {
    // Backend returns logs in file order (oldest->newest), display as-is
    logs.value = await getWorkspaceLogs(undefined, 500)
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load workspace logs'
  } finally {
    loading.value = false

    // Scroll parent container to bottom after rendering completes
    setTimeout(() => {
      if (logOutputElement.value?.parentElement) {
        logOutputElement.value.parentElement.scrollTop = logOutputElement.value.parentElement.scrollHeight
      }
    }, 0)
  }
}

async function loadLogPath() {
  try {
    const result = await getWorkspaceLogPath()
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

<style scoped>
.log-output {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
  padding: var(--cg-space-3);
  margin: 0;
}

.log-line {
  line-height: 1.5;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.log-level-error {
  color: #ff5555;
}

.log-level-warning {
  color: #ffb86c;
}

.log-level-info {
  color: #50fa7b;
}

.log-level-debug {
  color: #6272a4;
}
</style>
