<template>
  <PanelLayout>
    <template v-if="!embedded" #header>
      <PanelHeader title="BRANCHES">
        <template #actions>
          <ActionButton
            v-if="!showCreateInput"
            variant="primary"
            size="sm"
            @click="showCreateInput = true"
          >
            + Create Branch
          </ActionButton>
        </template>
      </PanelHeader>
    </template>

    <template #content>
      <div v-if="embedded && !showCreateInput" class="branch-toolbar">
        <ActionButton
          variant="primary"
          size="sm"
          @click="showCreateInput = true"
        >
          + Create Branch
        </ActionButton>
      </div>

      <!-- Create Branch Form -->
      <BranchCreateForm
        v-if="showCreateInput"
        @create="handleCreate"
        @cancel="cancelCreate"
      />

      <!-- Empty State -->
      <EmptyState
        v-if="branches.length === 0"
        icon="○"
        message="No branches found"
      />

      <!-- Branch List -->
      <div v-else class="branch-list">
        <BranchListItem
          v-for="branch in branches"
          :key="branch.name"
          :branch-name="branch.name"
          :is-current="branch.is_current"
          :clickable="true"
          :show-current-label="true"
          @click="openBranchDetail(branch)"
        >
          <template #actions>
            <ActionButton
              v-if="!branch.is_current"
              variant="secondary"
              size="xs"
              @click.stop="emit('switch', branch.name)"
            >
              Switch
            </ActionButton>
          </template>
        </BranchListItem>
      </div>

      <!-- Branch Detail Modal -->
      <BranchDetailModal
        v-if="selectedBranch"
        :branch-name="selectedBranch.name"
        :is-current="selectedBranch.is_current"
        @close="selectedBranch = null"
        @delete="handleDeleteFromModal"
        @switch="handleSwitchFromModal"
        @revert-current="handleRevertCurrentFromModal"
      />
    </template>
  </PanelLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { BranchInfo } from '@/types/comfygit'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import EmptyState from '@/components/base/molecules/EmptyState.vue'
import BranchCreateForm from '@/components/base/molecules/BranchCreateForm.vue'
import BranchListItem from '@/components/base/molecules/BranchListItem.vue'
import BranchDetailModal from '@/components/BranchDetailModal.vue'

defineProps<{
  branches: BranchInfo[]
  current: string | null
  embedded?: boolean
}>()

const emit = defineEmits<{
  switch: [branch: string]
  create: [name: string]
  delete: [branch: string]
  'revert-current': []
}>()

const showCreateInput = ref(false)
const selectedBranch = ref<BranchInfo | null>(null)

function handleCreate(name: string) {
  emit('create', name)
  cancelCreate()
}

function cancelCreate() {
  showCreateInput.value = false
}

function openBranchDetail(branch: BranchInfo) {
  selectedBranch.value = branch
}

function handleDeleteFromModal(branchName: string) {
  selectedBranch.value = null
  emit('delete', branchName)
}

function handleSwitchFromModal(branchName: string) {
  selectedBranch.value = null
  emit('switch', branchName)
}

function handleRevertCurrentFromModal() {
  selectedBranch.value = null
  emit('revert-current')
}
</script>

<style scoped>
.branch-toolbar {
  display: flex;
  justify-content: flex-end;
  margin-bottom: var(--cg-space-3);
}

.branch-list {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
}
</style>
