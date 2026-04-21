<template>
  <PanelLayout>
    <template #header>
      <PanelHeader
        title="DIAGNOSTICS"
        :show-info="true"
        @info-click="showPopover = true"
      />
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
        v-else-if="activeTab === 'workspace'"
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
    title="About Diagnostics"
    max-width="520px"
    @close="showPopover = false"
  >
    <template #content>
      <p>
        <strong>Diagnostics</strong> groups read-only inspection and log surfaces for the current environment and workspace.
      </p>
      <p>
        Use this area when you need to inspect what ComfyGit is tracking or debug environment and supervisor behavior without leaving the panel.
      </p>
      <p>
        <strong>Manifest</strong><br>
        Shows the live <strong>pyproject.toml</strong> from the current environment's <strong>.cec</strong> directory. This is useful for inspecting tracked workflow, model, node, and contract state.
      </p>
      <p>
        <strong>Env Logs</strong><br>
        Shows logs for the currently active environment. Use these when debugging workflow execution, model resolution, node installation, or other environment-local issues.
      </p>
      <p>
        <strong>Workspace Logs</strong><br>
        Shows workspace-wide events that affect more than one environment.
      </p>
      <p>
        <strong>Orchestrator Logs</strong><br>
        Shows supervisor and handoff logs for environment creation, switching, restarts, and other process-management behavior.
      </p>
    </template>
    <template #actions>
      <ActionButton variant="primary" size="sm" @click="showPopover = false">
        Got it
      </ActionButton>
    </template>
  </InfoPopover>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import BaseTabs from '@/components/base/atoms/BaseTabs.vue'
import InfoPopover from '@/components/base/molecules/InfoPopover.vue'
import ManifestSection from './ManifestSection.vue'
import DebugEnvSection from './DebugEnvSection.vue'
import WorkspaceDebugSection from './WorkspaceDebugSection.vue'

const props = defineProps<{
  initialTab?: 'manifest' | 'env' | 'workspace'
}>()

const tabs = [
  { id: 'manifest', label: 'Manifest' },
  { id: 'env', label: 'Env Logs' },
  { id: 'workspace', label: 'Workspace Logs' },
  { id: 'orchestrator', label: 'Orchestrator Logs' }
]

const activeTab = ref<'manifest' | 'env' | 'workspace' | 'orchestrator'>(props.initialTab ?? 'manifest')
const showPopover = ref(false)

watch(() => props.initialTab, (value) => {
  if (value) activeTab.value = value
})
</script>
