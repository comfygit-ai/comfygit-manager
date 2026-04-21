<template>
  <PanelLayout>
    <template v-if="!embedded" #header>
      <PanelHeader
        title="IMPORT ENVIRONMENT"
        :show-info="true"
        @info-click="showInfoPopover = true"
      />
    </template>

    <template #content>
      <ImportFlow @import-complete="handleImportComplete" />
    </template>
  </PanelLayout>

  <!-- Info Popover -->
  <InfoPopover
    :show="showInfoPopover"
    title="How Import Works"
    @close="showInfoPopover = false"
  >
    <template #content>
      <div class="help-steps">
        <div class="help-step">
          <span class="step-number">1</span>
          <div class="step-content">
            <strong>Creates a New Environment</strong>
            <p>Import does not modify your current environment - it creates a brand new one</p>
          </div>
        </div>
        <div class="help-step">
          <span class="step-number">2</span>
          <div class="step-content">
            <strong>Preview Before Import</strong>
            <p>See what nodes, models, and workflows will be set up</p>
          </div>
        </div>
        <div class="help-step">
          <span class="step-number">3</span>
          <div class="step-content">
            <strong>Choose Model Strategy</strong>
            <p>Download all models, only required ones, or skip for later</p>
          </div>
        </div>
        <div class="help-step">
          <span class="step-number">4</span>
          <div class="step-content">
            <strong>Switch When Ready</strong>
            <p>After creation, switch to the new environment to start using it</p>
          </div>
        </div>
      </div>
    </template>
  </InfoPopover>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import ImportFlow from './ImportFlow.vue'
import InfoPopover from '@/components/base/molecules/InfoPopover.vue'

defineProps<{
  embedded?: boolean
}>()

const emit = defineEmits<{
  'import-complete-switch': [environmentName: string]
}>()

const showInfoPopover = ref(false)

function handleImportComplete(envName: string, switchRequested: boolean) {
  if (switchRequested) {
    emit('import-complete-switch', envName)
  }
}
</script>

<style scoped>
/* Info Popover Steps */
.help-steps {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.help-step {
  display: flex;
  gap: var(--cg-space-3);
  align-items: flex-start;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: var(--cg-color-accent-muted);
  color: var(--cg-color-accent);
  border: 1px solid var(--cg-color-accent);
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-bold);
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-content strong {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  display: block;
  margin-bottom: var(--cg-space-1);
}

.step-content p {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
  margin: 0;
}
</style>
