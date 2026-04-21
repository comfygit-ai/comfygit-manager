<template>
  <PanelLayout>
    <template #header>
      <PanelHeader title="DIAGNOSTICS" />
    </template>

    <template #search>
      <BaseTabs v-model="activeTab" :tabs="tabs" />
    </template>

    <template #content>
      <ManifestSection
        v-if="activeTab === 'manifest'"
        embedded
      />

      <DebugEnvSection
        v-else-if="activeTab === 'env'"
        embedded
      />

      <WorkspaceDebugSection
        v-else
        embedded
      />
    </template>
  </PanelLayout>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import BaseTabs from '@/components/base/atoms/BaseTabs.vue'
import ManifestSection from './ManifestSection.vue'
import DebugEnvSection from './DebugEnvSection.vue'
import WorkspaceDebugSection from './WorkspaceDebugSection.vue'

const props = defineProps<{
  initialTab?: 'manifest' | 'env' | 'workspace'
}>()

const tabs = [
  { id: 'manifest', label: 'Manifest' },
  { id: 'env', label: 'Env Logs' },
  { id: 'workspace', label: 'Workspace Logs' }
]

const activeTab = ref<'manifest' | 'env' | 'workspace'>(props.initialTab ?? 'manifest')

watch(() => props.initialTab, (value) => {
  if (value) activeTab.value = value
})
</script>
