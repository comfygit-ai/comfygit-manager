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
        <!-- Summary bar -->
        <SummaryBar v-if="logs.length > 0" variant="compact">
          Total: {{ logs.length }} entries •
          {{ errorCount }} errors •
          {{ warningCount }} warnings •
          {{ infoCount }} info •
          {{ debugCount }} debug
        </SummaryBar>

        <!-- Filter bar -->
        <LogFilterBar
          :active-levels="activeLevels"
          @toggle="toggleLevel"
          @clear="clearFilters"
        />

        <!-- Log entries -->
        <LogList v-if="filteredLogs.length > 0">
          <LogItem
            v-for="(log, index) in displayedLogs"
            :key="`${log.timestamp}-${index}`"
            :level="log.level"
            :timestamp="formatTimestamp(log.timestamp)"
            :message="log.message"
            :context="formatContext(log.context)"
          />
        </LogList>

        <!-- Load more button -->
        <div v-if="canLoadMore" class="load-more">
          <ActionButton
            variant="secondary"
            @click="loadMoreLogs"
          >
            Load More ({{ filteredLogs.length - displayLimit }} remaining)
          </ActionButton>
        </div>

        <!-- Empty state -->
        <EmptyState
          v-if="logs.length > 0 && filteredLogs.length === 0"
          icon="🔍"
          message="No logs match the current filters"
        />

        <EmptyState
          v-if="logs.length === 0"
          icon="📝"
          message="No environment logs available"
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
import LogFilterBar from '@/components/base/molecules/LogFilterBar.vue'
import LogItem from '@/components/base/molecules/LogItem.vue'
import LogList from '@/components/base/molecules/LogList.vue'
import SummaryBar from '@/components/base/molecules/SummaryBar.vue'
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
const activeLevels = ref<string[]>(['ERROR', 'WARNING', 'INFO', 'DEBUG'])
const displayLimit = ref(50)
const environmentName = ref('production')

// Computed: Filter logs by active levels
const filteredLogs = computed(() => {
  return logs.value.filter(log => activeLevels.value.includes(log.level.toUpperCase()))
})

// Computed: Displayed logs (with limit)
const displayedLogs = computed(() => {
  return filteredLogs.value.slice(0, displayLimit.value)
})

// Computed: Can load more?
const canLoadMore = computed(() => {
  return filteredLogs.value.length > displayLimit.value
})

// Computed: Count by level
const errorCount = computed(() =>
  logs.value.filter(log => log.level.toUpperCase() === 'ERROR').length
)

const warningCount = computed(() =>
  logs.value.filter(log => log.level.toUpperCase() === 'WARNING').length
)

const infoCount = computed(() =>
  logs.value.filter(log => log.level.toUpperCase() === 'INFO').length
)

const debugCount = computed(() =>
  logs.value.filter(log => log.level.toUpperCase() === 'DEBUG').length
)

function toggleLevel(level: string) {
  const index = activeLevels.value.indexOf(level)
  if (index > -1) {
    activeLevels.value.splice(index, 1)
  } else {
    activeLevels.value.push(level)
  }
}

function clearFilters() {
  activeLevels.value = ['ERROR', 'WARNING', 'INFO', 'DEBUG']
}

function loadMoreLogs() {
  displayLimit.value += 50
}

function formatTimestamp(timestamp: string): string {
  const date = new Date(timestamp)
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })
}

function formatContext(context?: Record<string, any>): string | undefined {
  if (!context) return undefined
  // Convert context object to a short string representation
  const entries = Object.entries(context)
  if (entries.length === 0) return undefined
  // Show first key-value pair or just the first key if value is complex
  const [key, value] = entries[0]
  if (typeof value === 'string' || typeof value === 'number') {
    return `${key}: ${value}`
  }
  return key
}

async function loadLogs() {
  loading.value = true
  error.value = null
  try {
    logs.value = await getEnvironmentLogs(undefined, 200)
    // Sort logs by timestamp (newest first)
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
  }
}

onMounted(loadLogs)
</script>

<style scoped>
.load-more {
  display: flex;
  justify-content: center;
  margin-top: var(--cg-space-3);
}
</style>
