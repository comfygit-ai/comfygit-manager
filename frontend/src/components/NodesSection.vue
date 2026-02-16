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
          <template v-if="blockedVersionGatedCount"> • {{ blockedVersionGatedCount }} blocked</template>
          <template v-if="actionableCommunityCount"> • {{ actionableCommunityCount }} community-mapped</template>
          <template v-if="nodesData.untracked_count"> • {{ nodesData.untracked_count }} untracked</template>
        </SummaryBar>

        <!-- Version Mismatches (highest priority - needs repair) -->
        <SectionGroup
          v-if="hasMismatches"
          title="VERSION MISMATCHES"
          :count="versionMismatches.length"
          collapsible
          :initially-expanded="true"
        >
          <div class="mismatch-warning">
            <span class="warning-icon">⚠</span>
            <span>{{ versionMismatches.length }} node(s) have wrong versions. Environment needs repair.</span>
          </div>
          <ItemCard
            v-for="mismatch in versionMismatches"
            :key="mismatch.name"
            status="warning"
          >
            <template #icon>⚠</template>
            <template #title>{{ mismatch.name }}</template>
            <template #subtitle>
              <span class="version-mismatch">
                <span class="version-actual">{{ mismatch.actual }}</span>
                <span class="version-arrow">→</span>
                <span class="version-expected">{{ mismatch.expected }}</span>
              </span>
            </template>
            <template #actions>
              <ActionButton
                variant="warning"
                size="sm"
                @click="emit('repair-environment')"
              >
                Repair
              </ActionButton>
            </template>
          </ItemCard>
        </SectionGroup>

        <!-- Blocked Nodes (version-gated only) -->
        <SectionGroup
          v-if="filteredBlocked.length"
          title="BLOCKED"
          :count="filteredBlocked.length"
          collapsible
          :initially-expanded="true"
        >
          <ItemCard
            v-for="node in filteredBlocked"
            :key="`blocked-${node.name}`"
            status="warning"
          >
            <template #icon>⛔</template>
            <template #title>{{ node.name }}</template>
            <template #subtitle>
              <span style="color: var(--cg-color-warning)">{{ getBlockedSubtitle(node) }}</span>
            </template>
            <template #details>
              <DetailRow
                label="Guidance:"
                :value="node.issue_guidance || getBlockedGuidance(node)"
              />
              <DetailRow
                label="Used by:"
                :value="getUsageLabel(node)"
              />
            </template>
            <template #actions>
              <ActionButton
                variant="secondary"
                size="xs"
                @click="showDetails(node)"
              >
                View Details
              </ActionButton>
            </template>
          </ItemCard>
        </SectionGroup>

        <SectionGroup
          v-if="filteredCommunity.length"
          title="COMMUNITY-MAPPED"
          :count="filteredCommunity.length"
          collapsible
          :initially-expanded="true"
        >
          <ItemCard
            v-for="node in filteredCommunity"
            :key="`community-${node.name}`"
            status="warning"
          >
            <template #icon>⚠</template>
            <template #title>{{ node.name }}</template>
            <template #subtitle>
              <span style="color: var(--cg-color-warning)">{{ getCommunitySubtitle(node) }}</span>
            </template>
            <template #details>
              <DetailRow
                label="Guidance:"
                :value="node.issue_guidance || getCommunityGuidance(node)"
              />
              <DetailRow
                label="Used by:"
                :value="getUsageLabel(node)"
              />
            </template>
            <template #actions>
              <ActionButton
                variant="secondary"
                size="xs"
                @click="showDetails(node)"
              >
                View Details
              </ActionButton>
              <template v-if="isCommunityQueued(node)">
                <span class="community-status-badge">Queued</span>
              </template>
              <template v-else>
                <ActionButton
                  v-if="node.registry_id"
                  variant="primary"
                  size="sm"
                  @click="handleInstallCommunityRegistry(node)"
                >
                  Install
                </ActionButton>
                <ActionButton
                  v-if="node.repository"
                  variant="secondary"
                  size="sm"
                  @click="handleInstallCommunityGit(node)"
                >
                  Install via Git
                </ActionButton>
              </template>
            </template>
          </ItemCard>
        </SectionGroup>

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
                label="Used by:"
                :value="getUsageLabel(node)"
              />
            </template>
            <template #actions>
              <ActionButton
                variant="secondary"
                size="xs"
                @click="showDetails(node)"
              >
                View Details
              </ActionButton>
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
                label="Used by:"
                :value="getUsageLabel(node)"
              />
            </template>
            <template #actions>
              <ActionButton
                variant="secondary"
                size="xs"
                @click="showDetails(node)"
              >
                View Details
              </ActionButton>
              <ActionButton
                variant="secondary"
                size="xs"
                @click="openNodeManager"
              >
                Manage
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
                label="Required by:"
                :value="getUsageLabel(node)"
              />
            </template>
            <template #actions>
              <ActionButton
                variant="secondary"
                size="xs"
                @click="showDetails(node)"
              >
                View Details
              </ActionButton>
              <ActionButton
                variant="primary"
                size="sm"
                @click="handleInstallNode(node.name)"
              >
                Install
              </ActionButton>
            </template>
          </ItemCard>
        </SectionGroup>

        <!-- Empty state -->
        <EmptyState
          v-if="!filteredInstalled.length && !filteredMissing.length && !filteredBlocked.length && !filteredCommunity.length && !filteredUntracked.length"
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
        <strong>Blocked:</strong> Node types that require newer ComfyUI<br>
        <strong>Community-Mapped:</strong> Actionable package mappings from community metadata<br>
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

  <!-- Node Details Modal -->
  <NodeDetailsModal
    v-if="selectedNode"
    :node="selectedNode"
    @close="selectedNode = null"
  />

  <!-- Confirmation Dialog -->
  <ConfirmDialog
    v-if="confirmDialog"
    :title="confirmDialog.title"
    :message="confirmDialog.message"
    :warning="confirmDialog.warning"
    :confirm-label="confirmDialog.confirmLabel"
    :destructive="confirmDialog.destructive"
    @confirm="confirmDialog.onConfirm"
    @cancel="confirmDialog = null"
  />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { NodeInfo, NodesResult, VersionMismatch } from '@/types/comfygit'
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
import NodeDetailsModal from '@/components/NodeDetailsModal.vue'
import ConfirmDialog from '@/components/ConfirmDialog.vue'

interface Props {
  versionMismatches?: VersionMismatch[]
}

const props = withDefaults(defineProps<Props>(), {
  versionMismatches: () => []
})

const emit = defineEmits<{
  'open-node-manager': []
  'repair-environment': []
  toast: [message: string, type: 'info' | 'success' | 'warning' | 'error']
}>()

const { getNodes, trackNodeAsDev, installNode, uninstallNode, queueNodeInstall } = useComfyGitService()

const nodesData = ref<NodesResult>({
  nodes: [],
  total_count: 0,
  installed_count: 0,
  missing_count: 0,
  untracked_count: 0,
  blocked_count: 0
})

const loading = ref(false)
const error = ref<string | null>(null)
const searchQuery = ref('')
const showPopover = ref(false)
const selectedNode = ref<NodeInfo | null>(null)
const queuedCommunityInstalls = ref<Set<string>>(new Set())

// Confirmation dialog state
interface ConfirmDialogConfig {
  title: string
  message: string
  warning?: string
  confirmLabel: string
  destructive: boolean
  onConfirm: () => void
}
const confirmDialog = ref<ConfirmDialogConfig | null>(null)

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
  filteredNodes.value.filter(n => !n.installed && n.tracked && !n.issue_type)
)

// Untracked: on filesystem but NOT tracked
const filteredUntracked = computed(() =>
  filteredNodes.value.filter(n => n.installed && !n.tracked)
)

// Blocked: version-gated node types
const filteredBlocked = computed(() =>
  filteredNodes.value.filter(n => n.issue_type === 'version_gated')
)

const filteredCommunity = computed(() =>
  filteredNodes.value.filter(n => n.issue_type === 'uninstallable')
)

const blockedVersionGatedCount = computed(() => filteredBlocked.value.length)
const actionableCommunityCount = computed(() => filteredCommunity.value.length)

function getCommunityInstallKey(node: NodeInfo): string {
  return node.registry_id || node.name
}

function isCommunityQueued(node: NodeInfo): boolean {
  return queuedCommunityInstalls.value.has(getCommunityInstallKey(node))
}

async function queueCommunityInstall(node: NodeInfo, installSource: 'registry' | 'git') {
  const packageId = node.registry_id
  if (!packageId) {
    emit('toast', `Node "${node.name}" has no package id for install`, 'warning')
    return
  }
  if (installSource === 'git' && !node.repository) {
    emit('toast', `Node "${node.name}" has no repository URL for git install`, 'warning')
    return
  }

  const installParams: {
    id: string
    version: string
    selected_version: string
    mode: string
    channel: string
    repository?: string
    install_source?: 'registry' | 'git'
  } = {
    id: packageId,
    version: 'latest',
    selected_version: 'latest',
    mode: 'remote',
    channel: 'default'
  }

  if (installSource === 'git' && node.repository) {
    installParams.repository = node.repository
    installParams.install_source = 'git'
  }

  await queueNodeInstall(installParams)
  queuedCommunityInstalls.value.add(getCommunityInstallKey(node))
  emit('toast', `✓ Queued install for "${node.name}"`, 'success')
}

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

function getVersionMismatch(nodeName: string): VersionMismatch | undefined {
  return props.versionMismatches.find(m => m.name === nodeName)
}

const hasMismatches = computed(() => props.versionMismatches.length > 0)

function getUsageLabel(node: NodeInfo): string {
  if (!node.used_in_workflows || node.used_in_workflows.length === 0) {
    return 'Not used in any workflows'
  }
  if (node.used_in_workflows.length === 1) {
    return node.used_in_workflows[0]
  }
  return `${node.used_in_workflows.length} workflows`
}

function getBlockedSubtitle(node: NodeInfo): string {
  if (node.issue_type === 'version_gated') {
    return 'Requires newer ComfyUI version'
  }
  return 'Blocked'
}

function getBlockedGuidance(node: NodeInfo): string {
  if (node.issue_type === 'version_gated') {
    return 'Upgrade ComfyUI to a version that includes this builtin node.'
  }
  return 'Manual intervention required.'
}

function getCommunitySubtitle(node: NodeInfo): string {
  if (node.registry_id) {
    return `Community-mapped package: ${node.registry_id}`
  }
  return 'Community-mapped package'
}

function getCommunityGuidance(_node: NodeInfo): string {
  return 'Found via community mapping. Install from registry by default, or use git when needed.'
}

function showDetails(node: NodeInfo) {
  selectedNode.value = node
}

function openNodeManager() {
  emit('open-node-manager')
}

function handleTrackAsDev(nodeName: string) {
  confirmDialog.value = {
    title: 'Track as Development Node',
    message: `Track "${nodeName}" as a development node? This will add it to your environment manifest with source='development'.`,
    warning: 'Development nodes are tracked locally but not version-controlled.',
    confirmLabel: 'Track as Dev',
    destructive: false,
    onConfirm: async () => {
      confirmDialog.value = null
      try {
        loading.value = true
        const result = await trackNodeAsDev(nodeName)
        if (result.status === 'success') {
          emit('toast', `✓ Node "${nodeName}" tracked as development`, 'success')
          await loadNodes()
        } else {
          emit('toast', `Failed to track node: ${result.message || 'Unknown error'}`, 'error')
        }
      } catch (err) {
        emit('toast', `Error tracking node: ${err instanceof Error ? err.message : 'Unknown error'}`, 'error')
      } finally {
        loading.value = false
      }
    }
  }
}

function handleRemoveUntracked(nodeName: string) {
  confirmDialog.value = {
    title: 'Remove Untracked Node',
    message: `Remove "${nodeName}" from custom_nodes/?`,
    warning: 'This will permanently delete the node directory.',
    confirmLabel: 'Remove',
    destructive: true,
    onConfirm: async () => {
      confirmDialog.value = null
      try {
        loading.value = true
        const result = await uninstallNode(nodeName)
        if (result.status === 'success') {
          emit('toast', `✓ Node "${nodeName}" removed`, 'success')
          await loadNodes()
        } else {
          emit('toast', `Failed to remove node: ${result.message || 'Unknown error'}`, 'error')
        }
      } catch (err) {
        emit('toast', `Error removing node: ${err instanceof Error ? err.message : 'Unknown error'}`, 'error')
      } finally {
        loading.value = false
      }
    }
  }
}

function handleInstallNode(nodeName: string) {
  confirmDialog.value = {
    title: 'Install Missing Node',
    message: `Install "${nodeName}"?`,
    warning: 'This will download and install the node from the registry.',
    confirmLabel: 'Install',
    destructive: false,
    onConfirm: async () => {
      confirmDialog.value = null
      try {
        loading.value = true
        const result = await installNode(nodeName)
        if (result.status === 'success') {
          emit('toast', `✓ Node "${nodeName}" installed`, 'success')
          await loadNodes()
        } else {
          emit('toast', `Failed to install node: ${result.message || 'Unknown error'}`, 'error')
        }
      } catch (err) {
        emit('toast', `Error installing node: ${err instanceof Error ? err.message : 'Unknown error'}`, 'error')
      } finally {
        loading.value = false
      }
    }
  }
}

function handleInstallCommunityRegistry(node: NodeInfo) {
  confirmDialog.value = {
    title: 'Install Community-Mapped Package',
    message: `Install "${node.name}" from the registry?`,
    warning: 'This will queue a registry install through the manager queue.',
    confirmLabel: 'Install',
    destructive: false,
    onConfirm: async () => {
      confirmDialog.value = null
      try {
        loading.value = true
        await queueCommunityInstall(node, 'registry')
      } catch (err) {
        emit('toast', `Error queueing install: ${err instanceof Error ? err.message : 'Unknown error'}`, 'error')
      } finally {
        loading.value = false
      }
    }
  }
}

function handleInstallCommunityGit(node: NodeInfo) {
  confirmDialog.value = {
    title: 'Install Community-Mapped Package via Git',
    message: `Install "${node.name}" from git?`,
    warning: 'Use git install only when you explicitly need the repository source.',
    confirmLabel: 'Install via Git',
    destructive: false,
    onConfirm: async () => {
      confirmDialog.value = null
      try {
        loading.value = true
        await queueCommunityInstall(node, 'git')
      } catch (err) {
        emit('toast', `Error queueing git install: ${err instanceof Error ? err.message : 'Unknown error'}`, 'error')
      } finally {
        loading.value = false
      }
    }
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
.mismatch-warning {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-3);
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
  border-radius: var(--cg-radius-sm);
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-warning);
  margin-bottom: var(--cg-space-3);
}

.warning-icon {
  font-size: var(--cg-font-size-lg);
  flex-shrink: 0;
}

.version-mismatch {
  display: flex;
  align-items: center;
  gap: var(--cg-space-1);
  font-family: var(--cg-font-mono);
}

.version-actual {
  color: var(--cg-color-error);
  text-decoration: line-through;
}

.version-arrow {
  color: var(--cg-color-text-muted);
}

.version-expected {
  color: var(--cg-color-success);
}

.community-status-badge {
  display: inline-flex;
  align-items: center;
  padding: var(--cg-space-1) var(--cg-space-2);
  border-radius: var(--cg-radius-sm);
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-medium);
  color: var(--cg-color-warning);
  background: color-mix(in srgb, var(--cg-color-warning) 15%, transparent);
}
</style>
