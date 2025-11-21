<template>
  <PanelLayout>
    <template #header>
      <PanelHeader title="WORKFLOWS">
        <template #actions>
          <ActionButton
            v-if="brokenWorkflows.length > 0"
            variant="primary"
            size="sm"
            @click="handleResolveAll"
          >
            Resolve All Issues
          </ActionButton>
        </template>
      </PanelHeader>
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
              Missing: {{ wf.missing_nodes }} nodes, {{ wf.missing_models }} models
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
            status="new"
          >
            <template #icon>●</template>
            <template #title>{{ wf.name }}</template>
            <template #subtitle>✓ Ready</template>
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
            status="modified"
          >
            <template #icon>⚡</template>
            <template #title>{{ wf.name }}</template>
            <template #subtitle>✓ Ready</template>
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
            status="synced"
          >
            <template #icon>✓</template>
            <template #title>{{ wf.name }}</template>
            <template #subtitle>✓ Ready</template>
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
  />

  <!-- Workflow Resolve Modal -->
  <WorkflowResolveModal
    v-if="showResolveModal && selectedWorkflow"
    :workflow-name="selectedWorkflow"
    @close="showResolveModal = false"
    @install="handleInstall"
    @refresh="emit('refresh')"
  />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
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

const workflows = ref<WorkflowInfo[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const searchQuery = ref('')
const syncedExpanded = ref(false)
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

async function loadWorkflows() {
  loading.value = true
  error.value = null
  try {
    workflows.value = await getWorkflows()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load workflows'
  } finally {
    loading.value = false
  }
}

function handleDetails(name: string) {
  selectedWorkflow.value = name
  showDetailsModal.value = true
}

function handleResolve(name: string) {
  selectedWorkflow.value = name
  showResolveModal.value = true
}

function handleResolveAll() {
  // TODO: Implement bulk resolution
  alert('Bulk resolution not yet implemented')
}

function handleInstall() {
  emit('refresh')
}

onMounted(loadWorkflows)
</script>

<style scoped>
/* Minimal to no custom CSS! Everything is in atomic components */
</style>
