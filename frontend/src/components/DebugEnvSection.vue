<template>
  <PanelLayout>
    <template #header>
      <PanelHeader
        title="DEBUG (ENVIRONMENT LOGS)"
        :show-info="true"
        @info-click="showPopover = true"
      >
        <template #actions>
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
import type { LogEntry as LogEntryType } from '@/types/comfygit'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import EmptyState from '@/components/base/molecules/EmptyState.vue'
import LoadingState from '@/components/base/organisms/LoadingState.vue'
import ErrorState from '@/components/base/organisms/ErrorState.vue'
import InfoPopover from '@/components/base/molecules/InfoPopover.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'

const { getEnvironmentLogs, getStatus } = useComfyGitService()

const logs = ref<LogEntryType[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const showPopover = ref(false)
const environmentName = ref('production')
const logOutputElement = ref<HTMLPreElement | null>(null)

// Format logs as array of colored lines (oldest first for readability)
const formattedLogs = computed(() => {
  if (logs.value.length === 0) return []

  // Sort oldest first (reverse of what we got from API)
  const sortedLogs = [...logs.value].reverse()

  return sortedLogs.map(log => {
    // Parse timestamp to readable format
    const date = new Date(log.timestamp)
    const timeStr = date.toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).replace(',', '')

    // Format: timestamp LEVEL [context] - message
    const contextStr = log.context ? `[${log.context}]` : ''
    const text = `${timeStr} ${log.level.padEnd(7)} ${contextStr} ${log.message}`

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
    logs.value = await getEnvironmentLogs(undefined, 500)
    // API returns newest first, we'll reverse when displaying
    logs.value.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

    // Get environment name
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

    // Scroll parent container to bottom after rendering completes
    setTimeout(() => {
      if (logOutputElement.value?.parentElement) {
        logOutputElement.value.parentElement.scrollTop = logOutputElement.value.parentElement.scrollHeight
      }
    }, 0)
  }
}

onMounted(loadLogs)
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
