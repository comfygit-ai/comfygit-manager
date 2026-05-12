<template>
  <PanelLayout>
    <template #header>
      <PanelHeader
        :title="headerTitle"
        :show-info="true"
        @info-click="showPopover = true"
      />
    </template>

    <template v-if="activeTab !== 'manifest'" #search>
      <BaseTabs v-model="activeLogTab" :tabs="logTabs" />
    </template>

    <template #content>
      <ManifestSection
        v-if="activeTab === 'manifest'"
        embedded
      />

      <DebugEnvSection
        v-else-if="activeLogTab === 'env'"
        embedded
      />

      <WorkspaceDebugSection
        v-else-if="activeLogTab === 'workspace'"
        embedded
        initial-tab="workspace"
      />

      <WorkspaceDebugSection
        v-else
        embedded
        initial-tab="orchestrator"
      />
    </template>
  </PanelLayout>

  <InfoPopover
    :show="showPopover"
    :title="infoTitle"
    max-width="520px"
    @close="showPopover = false"
  >
    <template #content>
      <template v-if="activeTab === 'manifest'">
        <p>
          <strong>Manifest</strong> shows the live <strong>pyproject.toml</strong> from the current environment's <strong>.cec</strong> directory.
        </p>
        <p>
          Use it to inspect the environment state ComfyGit is tracking, including workflows, models, nodes, and workflow execution contracts.
        </p>
        <p>
          The manifest is read-only here. Change environment state through the manager actions or CLI, then commit the resulting manifest changes.
        </p>
      </template>

      <template v-else>
        <p>
          <strong>Logging</strong> groups read-only logs for the current environment, workspace, and orchestrator.
        </p>
        <p>
          <strong>Environment</strong> logs help debug workflow execution, model resolution, node installation, and other environment-local behavior.
        </p>
        <p>
          <strong>Workspace</strong> logs show workspace-wide events that affect more than one environment.
        </p>
        <p>
          <strong>Orchestrator</strong> logs show supervisor and handoff behavior for environment creation, switching, restarts, and process management.
        </p>
      </template>
    </template>
    <template #actions>
      <ActionButton variant="primary" size="sm" @click="showPopover = false">
        Got it
      </ActionButton>
    </template>
  </InfoPopover>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import BaseTabs from '@/components/base/atoms/BaseTabs.vue'
import InfoPopover from '@/components/base/molecules/InfoPopover.vue'
import ManifestSection from './ManifestSection.vue'
import DebugEnvSection from './DebugEnvSection.vue'
import WorkspaceDebugSection from './WorkspaceDebugSection.vue'

const props = defineProps<{
  initialTab?: 'manifest' | 'env' | 'workspace' | 'orchestrator'
}>()

const logTabs = [
  { id: 'env', label: 'Environment' },
  { id: 'workspace', label: 'Workspace' },
  { id: 'orchestrator', label: 'Orchestrator' }
]

const activeTab = ref<'manifest' | 'env' | 'workspace' | 'orchestrator'>(props.initialTab ?? 'manifest')
const activeLogTab = ref<'env' | 'workspace' | 'orchestrator'>(
  props.initialTab && props.initialTab !== 'manifest' ? props.initialTab : 'env'
)
const showPopover = ref(false)
const headerTitle = computed(() => activeTab.value === 'manifest' ? 'MANIFEST' : 'LOGGING')
const infoTitle = computed(() => activeTab.value === 'manifest' ? 'About Manifest' : 'About Logging')

watch(() => props.initialTab, (value) => {
  if (!value) return
  activeTab.value = value
  if (value !== 'manifest') {
    activeLogTab.value = value
  }
})

watch(activeLogTab, (value) => {
  if (activeTab.value !== 'manifest') {
    activeTab.value = value
  }
})
</script>
