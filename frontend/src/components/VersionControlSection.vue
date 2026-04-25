<template>
  <PanelLayout>
    <template #header>
      <PanelHeader title="VERSION CONTROL" />
    </template>

    <template #search>
      <BaseTabs v-model="activeTab" :tabs="tabs" />
    </template>

    <template #content>
      <HistorySection
        v-if="activeTab === 'history'"
        embedded
        :commits="commits"
        :current-ref="currentRef"
        @select="emit('select', $event)"
        @checkout="emit('checkout', $event)"
      />

      <BranchSection
        v-else-if="activeTab === 'branches'"
        embedded
        :branches="branches"
        :current="current"
        @switch="emit('switch', $event)"
        @create="emit('create', $event)"
        @delete="emit('delete', $event)"
      />

      <RemotesSection
        v-else
        embedded
        @toast="(message, type) => emit('toast', message, type)"
      />
    </template>
  </PanelLayout>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { BranchInfo, CommitInfo } from '@/types/comfygit'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import BaseTabs from '@/components/base/atoms/BaseTabs.vue'
import HistorySection from './HistorySection.vue'
import BranchSection from './BranchSection.vue'
import RemotesSection from './RemotesSection.vue'

const props = defineProps<{
  commits: CommitInfo[]
  currentRef?: string | null
  branches: BranchInfo[]
  current: string | null
  initialTab?: 'history' | 'branches' | 'remotes'
}>()

const emit = defineEmits<{
  select: [commit: CommitInfo]
  checkout: [commit: CommitInfo]
  switch: [branch: string]
  create: [name: string]
  delete: [branch: string]
  toast: [message: string, type: 'info' | 'success' | 'warning' | 'error']
}>()

const tabs = [
  { id: 'remotes', label: 'Remotes' },
  { id: 'history', label: 'History' },
  { id: 'branches', label: 'Branches' }
]

const activeTab = ref<'history' | 'branches' | 'remotes'>(props.initialTab ?? 'remotes')

watch(() => props.initialTab, (value) => {
  if (value) activeTab.value = value
})
</script>
