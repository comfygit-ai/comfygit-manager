<template>
  <PanelLayout>
    <template #header>
      <PanelHeader
        title="DEBUG (ENVIRONMENT LOGS)"
        :show-info="true"
        @info-click="showPopover = true"
      />
    </template>

    <template #content>
      <template v-if="loading">
        <LoadingState message="Loading environment logs..." />
      </template>
      <template v-else-if="error">
        <ErrorState :message="error" :retry="true" @retry="loadLogs" />
      </template>
      <template v-else>
        <!-- Filter Controls -->
        <LogFilter
          v-model="levelFilter"
          :line-limit="lineLimit"
          @update:line-limit="handleLineLimitChange"
          @refresh="loadLogs"
        />

        <!-- Summary Bar -->
        <SummaryBar v-if="logs.length" variant="compact">
          Total: {{ logs.length }} logs •
          <span v-if="levelCounts.ERROR" style="color: var(--cg-color-error)">{{ levelCounts.ERROR }} errors</span>
          <span v-if="levelCounts.WARNING" style="color: var(--cg-color-warning)">
            {{ levelCounts.ERROR ? ' • ' : '' }}{{ levelCounts.WARNING }} warnings
          </span>
          <span v-if="levelCounts.INFO" style="color: var(--cg-color-info)">
            {{ (levelCounts.ERROR || levelCounts.WARNING) ? ' • ' : '' }}{{ levelCounts.INFO }} info
          </span>
          <span v-if="levelCounts.DEBUG" style="color: var(--cg-color-text-muted)">
            {{ (levelCounts.ERROR || levelCounts.WARNING || levelCounts.INFO) ? ' • ' : '' }}{{ levelCounts.DEBUG }} debug
          </span>
        </SummaryBar>

        <!-- Log Entries -->
        <div v-if="filteredLogs.length" class="logs-container">
          <LogEntry
            v-for="(log, index) in filteredLogs"
            :key="`${log.timestamp}-${index}`"
            :timestamp="log.timestamp"
            :level="log.level"
            :message="log.message"
            :context="log.context"
            timestamp-variant="time-only"
          />
        </div>

        <!-- Empty State -->
        <EmptyState
          v-else
          icon="📋"
          :message="levelFilter === 'all' ? 'No logs available' : `No ${levelFilter.toLowerCase()} logs found`"
        />
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
        These are real-time logs from the current environment showing operations, warnings, and errors.
      </p>
      <p style="margin-top: var(--cg-space-2)">
        <strong>ERROR:</strong> Critical issues requiring attention<br>
        <strong>WARNING:</strong> Potential problems or important notices<br>
        <strong>INFO:</strong> General operational information<br>
        <strong>DEBUG:</strong> Detailed diagnostic information
      </p>
      <p style="margin-top: var(--cg-space-2); color: var(--cg-color-text-muted); font-size: var(--cg-font-size-xs)">
        Logs are automatically refreshed when switching environments or performing operations.
      </p>
    </template>
    <template #actions>
      <ActionButton variant="secondary" @click="clearLocalLogs">
        Clear Display
      </ActionButton>
      <ActionButton variant="primary" @click="loadLogs">
        Refresh Logs
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
import LogFilter from '@/components/base/molecules/LogFilter.vue'
import LogEntry from '@/components/base/molecules/LogEntry.vue'
import SummaryBar from '@/components/base/molecules/SummaryBar.vue'
import EmptyState from '@/components/base/molecules/EmptyState.vue'
import LoadingState from '@/components/base/organisms/LoadingState.vue'
import ErrorState from '@/components/base/organisms/ErrorState.vue'
import InfoPopover from '@/components/base/molecules/InfoPopover.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'

const { getEnvironmentLogs } = useComfyGitService()

const logs = ref<LogEntryType[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const showPopover = ref(false)
const levelFilter = ref<string>('all')
const lineLimit = ref<number>(100)

// Computed: Filter logs by level
const filteredLogs = computed(() => {
  if (levelFilter.value === 'all') {
    return logs.value
  }
  return logs.value.filter(log => log.level.toUpperCase() === levelFilter.value)
})

// Computed: Count logs by level
const levelCounts = computed(() => {
  const counts: Record<string, number> = {
    ERROR: 0,
    WARNING: 0,
    INFO: 0,
    DEBUG: 0
  }

  logs.value.forEach(log => {
    const level = log.level.toUpperCase()
    if (counts[level] !== undefined) {
      counts[level]++
    }
  })

  return counts
})

async function loadLogs() {
  loading.value = true
  error.value = null
  try {
    const level = levelFilter.value === 'all' ? undefined : levelFilter.value
    logs.value = await getEnvironmentLogs(level, lineLimit.value)
    // Sort logs by timestamp (newest first)
    logs.value.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load environment logs'
  } finally {
    loading.value = false
  }
}

function handleLineLimitChange(newLimit: number) {
  lineLimit.value = newLimit
  loadLogs()
}

function clearLocalLogs() {
  logs.value = []
  showPopover.value = false
}

onMounted(loadLogs)
</script>

<style scoped>
.logs-container {
  display: flex;
  flex-direction: column;
  gap: 0; /* LogEntry components have their own margin-bottom */
}
</style>
