<template>
  <PanelLayout>
    <template #header>
      <PanelHeader
        title="CUSTOM NODES"
        :show-info="true"
        @info-click="showPopover = true"
      >
        <template #actions>
          <ActionButton
            variant="primary"
            size="sm"
            @click="openNodeManager"
          >
            Browse Nodes
          </ActionButton>
        </template>
      </PanelHeader>
    </template>

    <template #search>
      <SearchBar
        v-model="searchQuery"
        placeholder="Search custom nodes..."
      />
    </template>

    <template #content>
      <template v-if="loading">
        <LoadingState message="Loading nodes..." />
      </template>
      <template v-else-if="error">
        <ErrorState :message="error" :retry="true" @retry="loadNodes" />
      </template>
      <template v-else>
        <!-- Summary at top -->
        <SummaryBar v-if="nodesData.total_count" variant="compact">
          {{ nodesData.installed_count }} installed
          <template v-if="nodesData.missing_count"> • {{ nodesData.missing_count }} missing</template>
          <template v-if="nodesData.untracked_count"> • {{ nodesData.untracked_count }} untracked</template>
        </SummaryBar>

        <!-- Untracked Nodes (highest priority - needs attention) -->
        <SectionGroup
          v-if="filteredUntracked.length"
          title="UNTRACKED"
          :count="filteredUntracked.length"
          collapsible
          :initially-expanded="true"
        >
          <ItemCard
            v-for="node in filteredUntracked"
            :key="node.name"
            status="warning"
          >
            <template #icon>?</template>
            <template #title>{{ node.name }}</template>
            <template #subtitle>
              <span style="color: var(--cg-color-warning)">On filesystem but not tracked</span>
            </template>
            <template #details>
              <DetailRow
                label="Status:"
                value="This node exists in custom_nodes/ but is not in your environment manifest."
              />
              <DetailRow
                label="Used by:"
                :value="getUsageLabel(node)"
              />
            </template>
            <template #actions>
              <ActionButton
                variant="primary"
                size="sm"
                @click="handleTrackAsDev(node.name)"
              >
                Track as Dev
              </ActionButton>
              <ActionButton
                variant="destructive"
                size="sm"
                @click="handleRemoveUntracked(node.name)"
              >
                Remove
              </ActionButton>
            </template>
          </ItemCard>
        </SectionGroup>

        <!-- Installed Nodes (tracked + on filesystem) -->
        <SectionGroup
          v-if="filteredInstalled.length"
          title="INSTALLED"
          :count="filteredInstalled.length"
          collapsible
          :initially-expanded="true"
        >
          <ItemCard
            v-for="node in filteredInstalled"
            :key="node.name"
            status="synced"
          >
            <template #icon>{{ node.source === 'development' ? '🔧' : '📦' }}</template>
            <template #title>{{ node.name }}</template>
            <template #subtitle>
              <span v-if="node.version">{{ node.source === 'development' ? '' : 'v' }}{{ node.version }}</span>
              <span v-else style="color: var(--cg-color-text-muted)">version unknown</span>
              <span style="color: var(--cg-color-text-muted); margin-left: 8px;">
                • {{ getSourceLabel(node.source) }}
              </span>
            </template>
            <template #details>
              <DetailRow
                v-if="node.description"
                label="Description:"
                :value="node.description"
              />
              <DetailRow
                v-if="node.repository"
                label="Repository:"
                :value="node.repository"
              />
              <DetailRow
                label="Used by:"
                :value="getUsageLabel(node)"
              />
            </template>
            <template #actions>
              <ActionButton
                v-if="node.repository"
                variant="secondary"
                size="xs"
                @click="viewRepository(node.repository)"
              >
                View Repo
              </ActionButton>
              <ActionButton
                v-if="node.source === 'registry' || node.source === 'git'"
                variant="secondary"
                size="xs"
                @click="handleUpdateNode(node.name)"
              >
                Update
              </ActionButton>
              <ActionButton
                variant="destructive"
                size="xs"
                @click="handleUninstallNode(node.name)"
              >
                Uninstall
              </ActionButton>
            </template>
          </ItemCard>
        </SectionGroup>

        <!-- Missing Nodes (tracked but not installed) -->
        <SectionGroup
          v-if="filteredMissing.length"
          title="MISSING"
          :count="filteredMissing.length"
          collapsible
          :initially-expanded="true"
        >
          <ItemCard
            v-for="node in filteredMissing"
            :key="node.name"
            status="missing"
          >
            <template #icon>!</template>
            <template #title>{{ node.name }}</template>
            <template #subtitle>
              <span style="color: var(--cg-color-error)">Tracked but not installed</span>
            </template>
            <template #details>
              <DetailRow
                v-if="node.description"
                label="Description:"
                :value="node.description"
              />
              <DetailRow
                v-if="node.repository"
                label="Repository:"
                :value="node.repository"
              />
              <DetailRow
                label="Required by:"
                :value="getUsageLabel(node)"
              />
            </template>
            <template #actions>
              <ActionButton
                variant="primary"
                size="sm"
                @click="handleInstallNode(node.name)"
              >
                Install
              </ActionButton>
              <ActionButton
                v-if="node.repository"
                variant="secondary"
                size="sm"
                @click="viewRepository(node.repository)"
              >
                View Repo
              </ActionButton>
            </template>
          </ItemCard>
        </SectionGroup>

        <!-- Empty state -->
        <EmptyState
          v-if="!filteredInstalled.length && !filteredMissing.length && !filteredUntracked.length"
          icon="📭"
          :message="searchQuery ? `No nodes match '${searchQuery}'` : 'No custom nodes found.'"
        />
      </template>
    </template>
  </PanelLayout>

  <!-- Info Popover -->
  <InfoPopover
    :show="showPopover"
    title="About Custom Nodes"
    @close="showPopover = false"
  >
    <template #content>
      <p>
        Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your
        environment manifest for reproducibility.
      </p>
      <p style="margin-top: var(--cg-space-2)">
        <strong>Installed:</strong> Tracked nodes available in this environment<br>
        <strong>Missing:</strong> Tracked nodes that need to be installed<br>
        <strong>Untracked:</strong> Nodes on filesystem but not in manifest
      </p>
      <p style="margin-top: var(--cg-space-2); color: var(--cg-color-text-muted)">
        Use "Track as Dev" for local development nodes you don't want to version.
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
import type { NodeInfo, NodesResult } from '@/types/comfygit'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import SearchBar from '@/components/base/molecules/SearchBar.vue'
import SectionGroup from '@/components/base/molecules/SectionGroup.vue'
import ItemCard from '@/components/base/molecules/ItemCard.vue'
import DetailRow from '@/components/base/molecules/DetailRow.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import SummaryBar from '@/components/base/molecules/SummaryBar.vue'
import EmptyState from '@/components/base/molecules/EmptyState.vue'
import LoadingState from '@/components/base/organisms/LoadingState.vue'
import ErrorState from '@/components/base/organisms/ErrorState.vue'
import InfoPopover from '@/components/base/molecules/InfoPopover.vue'

const emit = defineEmits<{
  'open-node-manager': []
}>()

const { getNodes, trackNodeAsDev, installNode, updateNode, uninstallNode } = useComfyGitService()

const nodesData = ref<NodesResult>({
  nodes: [],
  total_count: 0,
  installed_count: 0,
  missing_count: 0,
  untracked_count: 0
})

const loading = ref(false)
const error = ref<string | null>(null)
const searchQuery = ref('')
const showPopover = ref(false)

// Computed properties for filtering by category
const filteredNodes = computed(() => {
  if (!searchQuery.value.trim()) return nodesData.value.nodes
  const query = searchQuery.value.toLowerCase()
  return nodesData.value.nodes.filter(node =>
    node.name.toLowerCase().includes(query) ||
    node.description?.toLowerCase().includes(query) ||
    node.repository?.toLowerCase().includes(query)
  )
})

// Installed: tracked AND on filesystem
const filteredInstalled = computed(() =>
  filteredNodes.value.filter(n => n.installed && n.tracked)
)

// Missing: tracked but NOT on filesystem
const filteredMissing = computed(() =>
  filteredNodes.value.filter(n => !n.installed && n.tracked)
)

// Untracked: on filesystem but NOT tracked
const filteredUntracked = computed(() =>
  filteredNodes.value.filter(n => n.installed && !n.tracked)
)

// Helper functions
function getSourceLabel(source: string): string {
  const labels: Record<string, string> = {
    registry: 'Registry',
    git: 'Git',
    development: 'Dev',
    unknown: 'Unknown',
    untracked: 'Untracked'
  }
  return labels[source] || source
}

function getUsageLabel(node: NodeInfo): string {
  if (!node.used_in_workflows || node.used_in_workflows.length === 0) {
    return 'Not used in any workflows'
  }
  if (node.used_in_workflows.length === 1) {
    return node.used_in_workflows[0]
  }
  return `${node.used_in_workflows.length} workflows`
}

function viewRepository(repoUrl: string) {
  window.open(repoUrl, '_blank')
}

function openNodeManager() {
  emit('open-node-manager')
}

async function handleTrackAsDev(nodeName: string) {
  if (!confirm(`Track "${nodeName}" as a development node?\n\nThis will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`)) {
    return
  }

  try {
    loading.value = true
    const result = await trackNodeAsDev(nodeName)
    if (result.status === 'success') {
      alert(`Node "${nodeName}" is now tracked as development!`)
      await loadNodes()
    } else {
      alert(`Failed to track node: ${result.message || 'Unknown error'}`)
    }
  } catch (err) {
    alert(`Error tracking node: ${err instanceof Error ? err.message : 'Unknown error'}`)
  } finally {
    loading.value = false
  }
}

async function handleRemoveUntracked(nodeName: string) {
  if (!confirm(`Remove untracked node "${nodeName}"?\n\nThis will delete the node directory from custom_nodes/.`)) {
    return
  }

  try {
    loading.value = true
    // For untracked nodes, we use uninstall which will remove from filesystem
    const result = await uninstallNode(nodeName)
    if (result.status === 'success') {
      alert(`Node "${nodeName}" removed!`)
      await loadNodes()
    } else {
      alert(`Failed to remove node: ${result.message || 'Unknown error'}`)
    }
  } catch (err) {
    alert(`Error removing node: ${err instanceof Error ? err.message : 'Unknown error'}`)
  } finally {
    loading.value = false
  }
}

async function handleInstallNode(nodeName: string) {
  if (!confirm(`Install node "${nodeName}"?\n\nThis will download and install the node.`)) {
    return
  }

  try {
    loading.value = true
    const result = await installNode(nodeName)
    if (result.status === 'success') {
      alert(`Node "${nodeName}" installed successfully!`)
      await loadNodes()
    } else {
      alert(`Failed to install node: ${result.message || 'Unknown error'}`)
    }
  } catch (err) {
    alert(`Error installing node: ${err instanceof Error ? err.message : 'Unknown error'}`)
  } finally {
    loading.value = false
  }
}

async function handleUpdateNode(nodeName: string) {
  if (!confirm(`Check for updates for "${nodeName}"?`)) {
    return
  }

  try {
    loading.value = true
    const result = await updateNode(nodeName)
    if (result.status === 'success') {
      alert(`Node "${nodeName}" is up to date or has been updated!`)
      await loadNodes()
    } else {
      alert(`Update check failed: ${result.message || 'Unknown error'}`)
    }
  } catch (err) {
    alert(`Error checking for updates: ${err instanceof Error ? err.message : 'Unknown error'}`)
  } finally {
    loading.value = false
  }
}

async function handleUninstallNode(nodeName: string) {
  if (!confirm(`Uninstall node "${nodeName}"?\n\nThis will remove the node from this environment.`)) {
    return
  }

  try {
    loading.value = true
    const result = await uninstallNode(nodeName)
    if (result.status === 'success') {
      alert(`Node "${nodeName}" uninstalled!`)
      await loadNodes()
    } else {
      alert(`Failed to uninstall node: ${result.message || 'Unknown error'}`)
    }
  } catch (err) {
    alert(`Error uninstalling node: ${err instanceof Error ? err.message : 'Unknown error'}`)
  } finally {
    loading.value = false
  }
}

async function loadNodes() {
  loading.value = true
  error.value = null
  try {
    nodesData.value = await getNodes()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load nodes'
  } finally {
    loading.value = false
  }
}

onMounted(loadNodes)
</script>

<style scoped>
/* Minimal CSS - everything in components */
</style>
