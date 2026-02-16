<template>
  <PanelLayout>
    <template #header>
      <PanelHeader title="WORKFLOWS" />
    </template>

    <template #search>
      <SearchBar
        v-model="searchQuery"
        placeholder="🔍 Search workflows..."
      />
    </template>

    <template #content>
      <template v-if="loading">
        <LoadingState message="Loading workflows..." />
      </template>
      <template v-else-if="error">
        <ErrorState :message="error" :retry="true" @retry="loadWorkflows" />
      </template>
      <template v-else>
        <!-- Broken workflows (priority) -->
        <SectionGroup
          v-if="filteredBroken.length"
          title="BROKEN"
          :count="filteredBroken.length"
        >
          <ItemCard
            v-for="wf in filteredBroken"
            :key="wf.name"
            status="broken"
          >
            <template #icon>⚠</template>
            <template #title>{{ wf.name }}</template>
            <template #subtitle>
              {{ formatWorkflowIssues(wf) }}
            </template>
            <template #actions>
              <ActionButton
                variant="primary"
                size="sm"
                @click="handleResolve(wf.name)"
              >
                Resolve ▸
              </ActionButton>
              <ActionButton
                variant="secondary"
                size="sm"
                @click="handleDetails(wf.name)"
              >
                Details ▸
              </ActionButton>
            </template>
          </ItemCard>
        </SectionGroup>

        <!-- New workflows -->
        <SectionGroup
          v-if="filteredNew.length"
          title="NEW"
          :count="filteredNew.length"
        >
          <ItemCard
            v-for="wf in filteredNew"
            :key="wf.name"
            :status="wf.has_path_sync_issues ? 'warning' : 'new'"
          >
            <template #icon>{{ wf.has_path_sync_issues ? '⚡' : '●' }}</template>
            <template #title>{{ wf.name }}</template>
            <template #subtitle>{{ formatWorkflowSubtitle(wf) }}</template>
            <template #actions>
              <ActionButton
                variant="secondary"
                size="sm"
                @click="handleDetails(wf.name)"
              >
                Details
              </ActionButton>
            </template>
          </ItemCard>
        </SectionGroup>

        <!-- Modified workflows -->
        <SectionGroup
          v-if="filteredModified.length"
          title="MODIFIED"
          :count="filteredModified.length"
        >
          <ItemCard
            v-for="wf in filteredModified"
            :key="wf.name"
            :status="wf.has_path_sync_issues ? 'warning' : 'modified'"
          >
            <template #icon>⚡</template>
            <template #title>{{ wf.name }}</template>
            <template #subtitle>{{ formatWorkflowSubtitle(wf) }}</template>
            <template #actions>
              <ActionButton
                variant="secondary"
                size="sm"
                @click="handleDetails(wf.name)"
              >
                Details
              </ActionButton>
            </template>
          </ItemCard>
        </SectionGroup>

        <!-- Synced workflows (collapsible) -->
        <SectionGroup
          v-if="filteredSynced.length"
          title="SYNCED"
          :count="filteredSynced.length"
          :collapsible="true"
          :initially-expanded="syncedExpanded"
          @toggle="syncedExpanded = $event"
        >
          <ItemCard
            v-for="wf in displayedSynced"
            :key="wf.name"
            :status="wf.has_path_sync_issues ? 'warning' : 'synced'"
          >
            <template #icon>{{ wf.has_path_sync_issues ? '⚡' : '✓' }}</template>
            <template #title>{{ wf.name }}</template>
            <template #subtitle>{{ formatWorkflowSubtitle(wf) }}</template>
            <template #actions>
              <ActionButton
                variant="secondary"
                size="sm"
                @click="handleDetails(wf.name)"
              >
                Details
              </ActionButton>
            </template>
          </ItemCard>

          <!-- Show more button for synced workflows -->
          <ActionButton
            v-if="!showAllSynced && filteredSynced.length > 5"
            variant="ghost"
            size="sm"
            @click="showAllSynced = true"
            style="width: 100%; margin-top: var(--cg-space-2);"
          >
            View all {{ filteredSynced.length }} →
          </ActionButton>
        </SectionGroup>

        <!-- Empty state -->
        <EmptyState
          v-if="!filteredWorkflows.length"
          icon="📭"
          :message="searchQuery ? `No workflows match '${searchQuery}'` : 'No workflows found in this environment.'"
        />
      </template>
    </template>
  </PanelLayout>

  <!-- Workflow Details Modal -->
  <WorkflowDetailsModal
    v-if="showDetailsModal && selectedWorkflow"
    :workflow-name="selectedWorkflow"
    @close="showDetailsModal = false"
    @resolve="handleResolve(selectedWorkflow)"
    @refresh="emit('refresh')"
  />

  <!-- Workflow Resolve Modal -->
  <WorkflowResolveModal
    v-if="showResolveModal && selectedWorkflow"
    :workflow-name="selectedWorkflow"
    @close="handleResolveModalClose"
    @install="handleInstall"
    @refresh="emit('refresh')"
    @restart="handleRestart"
  />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import { useOrchestratorService } from '@/composables/useOrchestratorService'
import WorkflowDetailsModal from './WorkflowDetailsModal.vue'
import WorkflowResolveModal from './WorkflowResolveModal.vue'
import type { WorkflowInfo } from '@/types/comfygit'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import SearchBar from '@/components/base/molecules/SearchBar.vue'
import SectionGroup from '@/components/base/molecules/SectionGroup.vue'
import ItemCard from '@/components/base/molecules/ItemCard.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import EmptyState from '@/components/base/molecules/EmptyState.vue'
import LoadingState from '@/components/base/organisms/LoadingState.vue'
import ErrorState from '@/components/base/organisms/ErrorState.vue'

const emit = defineEmits<{
  refresh: []
}>()

const { getWorkflows } = useComfyGitService()
const orchestratorService = useOrchestratorService()

const workflows = ref<WorkflowInfo[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const searchQuery = ref('')
const syncedExpanded = ref(true)
const showAllSynced = ref(false)
const showDetailsModal = ref(false)
const showResolveModal = ref(false)
const selectedWorkflow = ref<string | null>(null)

// Computed filters
const brokenWorkflows = computed(() =>
  workflows.value.filter(w => w.status === 'broken')
)

const newWorkflows = computed(() =>
  workflows.value.filter(w => w.status === 'new')
)

const modifiedWorkflows = computed(() =>
  workflows.value.filter(w => w.status === 'modified')
)

const syncedWorkflows = computed(() =>
  workflows.value.filter(w => w.status === 'synced')
)

// Search filtering
const filteredWorkflows = computed(() => {
  if (!searchQuery.value.trim()) return workflows.value
  const query = searchQuery.value.toLowerCase()
  return workflows.value.filter(w => w.name.toLowerCase().includes(query))
})

const filteredBroken = computed(() =>
  brokenWorkflows.value.filter(w =>
    !searchQuery.value.trim() || w.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
)

const filteredNew = computed(() =>
  newWorkflows.value.filter(w =>
    !searchQuery.value.trim() || w.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
)

const filteredModified = computed(() =>
  modifiedWorkflows.value.filter(w =>
    !searchQuery.value.trim() || w.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
)

const filteredSynced = computed(() =>
  syncedWorkflows.value.filter(w =>
    !searchQuery.value.trim() || w.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
)

// Display limited synced workflows unless "show all" is clicked
const displayedSynced = computed(() =>
  showAllSynced.value ? filteredSynced.value : filteredSynced.value.slice(0, 5)
)

async function loadWorkflows(forceRefresh = false) {
  loading.value = true
  error.value = null
  try {
    workflows.value = await getWorkflows(forceRefresh)
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load workflows'
  } finally {
    loading.value = false
  }
}

// Expose loadWorkflows for parent components to call
defineExpose({ loadWorkflows })

function handleDetails(name: string) {
  selectedWorkflow.value = name
  showDetailsModal.value = true
}

function handleResolve(name: string) {
  selectedWorkflow.value = name
  showResolveModal.value = true
}

function handleInstall() {
  emit('refresh')
}

async function handleResolveModalClose() {
  showResolveModal.value = false
  // Refresh workflows to reflect any resolution changes (queued downloads, etc.)
  await loadWorkflows(true)
}

async function handleRestart() {
  try {
    await fetch('/v2/manager/reboot')
  } catch {
    console.error('Failed to restart:', err)
  }
}

function normalizeIssueTerminology(summary: string): string {
  return summary
    .replace(/uninstallable node mappings?/gi, (match) => match.toLowerCase().endsWith('s') ? 'community packages' : 'community package')
    .replace(/no installable package versions?/gi, 'need community packages')
    .replace(/\bare uninstallable\b/gi, 'need community packages')
    .replace(/\buninstallable\b/gi, 'community-mapped')
}

function formatWorkflowIssues(wf: WorkflowInfo): string {
  if (wf.issue_summary && wf.issue_summary.trim().length > 0) {
    return normalizeIssueTerminology(wf.issue_summary)
  }

  const parts: string[] = []

  if (wf.version_gated_count && wf.version_gated_count > 0) {
    parts.push(`${wf.version_gated_count} node${wf.version_gated_count > 1 ? 's' : ''} require newer ComfyUI`)
  }
  if (wf.uninstallable_count && wf.uninstallable_count > 0) {
    parts.push(`${wf.uninstallable_count} node${wf.uninstallable_count > 1 ? 's' : ''} need community packages`)
  }
  if (wf.missing_nodes > 0) {
    parts.push(`${wf.missing_nodes} missing node${wf.missing_nodes > 1 ? 's' : ''}`)
  }
  if (wf.missing_models > 0) {
    parts.push(`${wf.missing_models} missing model${wf.missing_models > 1 ? 's' : ''}`)
  }
  // Category mismatch - model exists but in wrong directory
  if (wf.models_with_category_mismatch && wf.models_with_category_mismatch > 0) {
    parts.push(`${wf.models_with_category_mismatch} model${wf.models_with_category_mismatch > 1 ? 's' : ''} in wrong directory`)
  }
  if (wf.pending_downloads && wf.pending_downloads > 0) {
    parts.push(`${wf.pending_downloads} pending download${wf.pending_downloads > 1 ? 's' : ''}`)
  }

  return parts.length > 0 ? parts.join(', ') : 'Has issues'
}

function formatWorkflowSubtitle(wf: WorkflowInfo): string {
  // For non-broken workflows, show sync state + path issues if any
  const syncLabel = wf.sync_state === 'new' ? 'New' :
                    wf.sync_state === 'modified' ? 'Modified' :
                    wf.sync_state === 'synced' ? 'Synced' : wf.sync_state

  if (wf.has_path_sync_issues && wf.models_needing_path_sync && wf.models_needing_path_sync > 0) {
    return `${wf.models_needing_path_sync} model path${wf.models_needing_path_sync > 1 ? 's' : ''} need${wf.models_needing_path_sync === 1 ? 's' : ''} sync`
  }

  return syncLabel || 'Unknown'
}

onMounted(loadWorkflows)
</script>

<style scoped>
/* Minimal to no custom CSS! Everything is in atomic components */
</style>
