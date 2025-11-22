<template>
  <PanelLayout>
    <template #header>
      <PanelHeader
        title="MODELS IN THIS ENVIRONMENT"
        :show-info="true"
        @info-click="showPopover = true"
      />
      <!-- No actions slot - environment section has no header actions -->
    </template>

    <template #search>
      <SearchBar
        v-model="searchQuery"
        placeholder="🔍 Search models used in this environment..."
      />
    </template>

    <template #content>
      <template v-if="loading">
        <LoadingState message="Loading environment models..." />
      </template>
      <template v-else-if="error">
        <ErrorState :message="error" :retry="true" @retry="loadModels" />
      </template>
      <template v-else>
        <!-- Summary at top -->
        <SummaryBar v-if="models.length" variant="compact">
          Total: {{ models.length }} models • {{ formatSize(totalSize) }} (symlinked from workspace)
        </SummaryBar>

        <!-- Checkpoints -->
        <SectionGroup v-if="filteredCheckpoints.length" title="CHECKPOINTS" :count="filteredCheckpoints.length">
          <ItemCard
            v-for="model in filteredCheckpoints"
            :key="model.hash || model.filename"
            status="synced"
          >
            <template #icon>📦</template>
            <template #title>{{ model.filename }}</template>
            <template #subtitle>{{ formatSize(model.size) }}</template>
            <template #details>
              <DetailRow label="Used by:" :value="(model.used_in_workflows || []).join(', ') || 'Not used'" />
              <DetailRow label="Source:" value="Workspace index" />
            </template>
            <template #actions>
              <ActionButton variant="secondary" size="xs" @click="viewInWorkspace(model.hash)">
                View in Workspace Index ↗
              </ActionButton>
            </template>
          </ItemCard>
        </SectionGroup>

        <!-- LoRAs -->
        <SectionGroup v-if="filteredLoras.length" title="LORAS" :count="filteredLoras.length">
          <ItemCard
            v-for="model in filteredLoras"
            :key="model.hash || model.filename"
            status="synced"
          >
            <template #icon>📦</template>
            <template #title>{{ model.filename }}</template>
            <template #subtitle>{{ formatSize(model.size) }}</template>
            <template #details>
              <DetailRow label="Used by:" :value="(model.used_in_workflows || []).join(', ') || 'Not used'" />
              <DetailRow label="Source:" value="Workspace index" />
            </template>
            <template #actions>
              <ActionButton variant="secondary" size="xs" @click="viewInWorkspace(model.hash)">
                View in Workspace Index ↗
              </ActionButton>
            </template>
          </ItemCard>
        </SectionGroup>

        <!-- Other Models -->
        <SectionGroup v-if="filteredOther.length" title="OTHER" :count="filteredOther.length">
          <ItemCard
            v-for="model in filteredOther"
            :key="model.hash || model.filename"
            status="synced"
          >
            <template #icon>📦</template>
            <template #title>{{ model.filename }}</template>
            <template #subtitle>{{ formatSize(model.size) }}</template>
            <template #details>
              <DetailRow label="Type:" :value="model.type" />
              <DetailRow label="Used by:" :value="(model.used_in_workflows || []).join(', ') || 'Not used'" />
            </template>
            <template #actions>
              <ActionButton variant="secondary" size="xs" @click="viewInWorkspace(model.hash)">
                View in Workspace Index ↗
              </ActionButton>
            </template>
          </ItemCard>
        </SectionGroup>

        <!-- Missing Models (unique to environment view) -->
        <SectionGroup v-if="filteredMissing.length" title="MISSING" :count="filteredMissing.length">
          <ItemCard
            v-for="model in filteredMissing"
            :key="model.filename"
            status="broken"
          >
            <template #icon>⚠</template>
            <template #title>{{ model.filename }}</template>
            <template #subtitle>
              <span style="color: var(--cg-color-error)">Not found in workspace index</span>
            </template>
            <template #details>
              <DetailRow label="Required by:" :value="model.workflow_names?.join(', ') || 'Unknown'" />
            </template>
            <template #actions>
              <ActionButton variant="primary" size="sm" @click="downloadModel(model.filename)">
                Download
              </ActionButton>
              <ActionButton variant="secondary" size="sm" @click="searchInWorkspace(model.filename)">
                Search Workspace Index
              </ActionButton>
            </template>
          </ItemCard>
        </SectionGroup>

        <!-- Empty state -->
        <EmptyState
          v-if="!filteredModels.length && !filteredMissing.length"
          icon="📭"
          :message="searchQuery ? `No models match '${searchQuery}'` : 'No models in this environment.'"
        />
      </template>
    </template>
  </PanelLayout>

  <!-- Info Popover -->
  <InfoPopover
    :show="showPopover"
    title="About Environment Models"
    @close="showPopover = false"
  >
    <template #content>
      <p>
        These are models currently used by workflows in <strong>"{{ environmentName }}"</strong>.
        All models are symlinked from the workspace model index.
      </p>
    </template>
    <template #actions>
      <ActionButton variant="primary" @click="navigateToIndex">
        View Workspace Model Index →
      </ActionButton>
    </template>
  </InfoPopover>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { ModelInfo } from '@/types/comfygit'
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

// No extended interface needed - use ModelInfo directly

interface MissingModelInfo {
  filename: string
  workflow_names?: string[]
}

const emit = defineEmits<{
  navigate: [view: string]
}>()

const { getEnvironmentModels, getStatus } = useComfyGitService()

const models = ref<ModelInfo[]>([])
const missingModels = ref<MissingModelInfo[]>([])
const environmentName = ref('production')
const loading = ref(false)
const error = ref<string | null>(null)
const searchQuery = ref('')
const showPopover = ref(false)

function navigateToIndex() {
  showPopover.value = false
  emit('navigate', 'model-index')
}

const totalSize = computed(() =>
  models.value.reduce((sum, m) => sum + (m.size || 0), 0)
)

// Search filtering for models
const filteredModels = computed(() => {
  if (!searchQuery.value.trim()) return models.value
  const query = searchQuery.value.toLowerCase()
  return models.value.filter(m => m.filename.toLowerCase().includes(query))
})

// Search filtering for missing models
const filteredMissing = computed(() => {
  if (!searchQuery.value.trim()) return missingModels.value
  const query = searchQuery.value.toLowerCase()
  return missingModels.value.filter(m => m.filename.toLowerCase().includes(query))
})

const filteredCheckpoints = computed(() =>
  filteredModels.value.filter(m => m.type === 'checkpoints')
)

const filteredLoras = computed(() =>
  filteredModels.value.filter(m => m.type === 'loras')
)

const filteredOther = computed(() =>
  filteredModels.value.filter(m => m.type !== 'checkpoints' && m.type !== 'loras')
)

function formatSize(bytes: number | undefined): string {
  if (!bytes) return 'Unknown'
  const mb = bytes / (1024 * 1024)
  if (mb >= 1024) {
    return `${(mb / 1024).toFixed(1)} GB`
  }
  return `${mb.toFixed(0)} MB`
}

function viewInWorkspace(_hash: string) {
  // TODO: Navigate to model index with hash filter
  emit('navigate', 'model-index')
}

function searchInWorkspace(_filename: string) {
  // TODO: Navigate to model index with search query
  emit('navigate', 'model-index')
}

function downloadModel(filename: string) {
  // TODO: Open download modal
  alert(`Download functionality not yet implemented for ${filename}`)
}

async function loadModels() {
  loading.value = true
  error.value = null
  try {
    const envModels = await getEnvironmentModels()
    models.value = envModels

    // TODO: Get missing models from workflow details API when available
    // For now, missingModels stays empty until the API is implemented
    missingModels.value = []

    const status = await getStatus()
    environmentName.value = status.environment || 'production'
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load models'
  } finally {
    loading.value = false
  }
}

onMounted(loadModels)
</script>

<style scoped>
/* Minimal to no custom CSS! Everything is in components */
</style>
