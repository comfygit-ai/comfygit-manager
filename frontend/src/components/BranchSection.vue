<template>
  <PanelLayout>
    <template #header>
      <PanelHeader title="BRANCHES">
        <template #actions>
          <ActionButton
            variant="ghost"
            size="sm"
            @click="showCreateInput = true"
            title="Create new branch"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 2v12M2 8h12" stroke="currentColor" stroke-width="2" fill="none"/>
            </svg>
          </ActionButton>
        </template>
      </PanelHeader>
    </template>

    <template #content>
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
        >
          <template #actions>
            <ActionButton
              v-if="!branch.is_current"
              variant="secondary"
              size="xs"
              @click="$emit('switch', branch.name)"
            >
              Switch
            </ActionButton>
          </template>
        </BranchListItem>
      </div>
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

defineProps<{
  branches: BranchInfo[]
  current: string | null
}>()

const emit = defineEmits<{
  switch: [branch: string]
  create: [name: string]
}>()

const showCreateInput = ref(false)

function handleCreate(name: string) {
  emit('create', name)
  cancelCreate()
}

function cancelCreate() {
  showCreateInput.value = false
}
</script>

<style scoped>
.branch-list {
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border-subtle);
}
</style>
