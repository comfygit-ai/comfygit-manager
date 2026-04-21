<template>
  <PanelLayout>
    <template #header>
      <PanelHeader
        title="PUBLISH REVISION"
        :show-info="true"
        @info-click="showInfo = true"
      >
        <template #actions>
          <div :class="['auth-chip', { authenticated: isAuthenticated }]">
            {{ authChipLabel }}
          </div>
        </template>
      </PanelHeader>
    </template>

    <template #content>
      <SectionGroup title="PUBLISH">
        <div class="publish-card">
          <template v-if="!isAuthenticated">
            <div class="blocked-title">SIGN IN REQUIRED</div>
            <div class="blocked-copy">
              Publishing revisions is blocked until this local panel is connected to a ComfyGit Cloud account.
            </div>
            <div class="row-actions">
              <ActionButton variant="primary" size="xs" @click="emit('navigate', 'account')">
                Sign In
              </ActionButton>
            </div>
          </template>

          <template v-else>
            <div class="blocked-title">PUBLICATION FLOW NEXT</div>
            <div class="blocked-copy">
              The local account bridge is active. Revision packaging and publish submission should be wired here next, using the current environment manifest and workflow contracts.
            </div>
            <div class="publish-meta">
              <div><span class="publish-label">Environment:</span> {{ environmentName || 'Unknown' }}</div>
              <div><span class="publish-label">Branch:</span> {{ branchName || 'Detached' }}</div>
            </div>
          </template>
        </div>
      </SectionGroup>
    </template>
  </PanelLayout>

  <InfoPopover
    :show="showInfo"
    title="Publish"
    @close="showInfo = false"
  >
    <template #content>
      <div class="info-content">
        <p>This page is the local bridge into ComfyGit Cloud publication.</p>
        <p>Use <strong>Account</strong> to sign in. This page should then publish immutable revisions to cloud and show lightweight publication status.</p>
        <p>Targets, deployments, and runtime management remain cloud-owned.</p>
      </div>
    </template>
  </InfoPopover>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import PanelLayout from '@/components/base/organisms/PanelLayout.vue'
import PanelHeader from '@/components/base/molecules/PanelHeader.vue'
import InfoPopover from '@/components/base/molecules/InfoPopover.vue'
import SectionGroup from '@/components/base/molecules/SectionGroup.vue'
import ActionButton from '@/components/base/atoms/ActionButton.vue'
import { useCloudAuth } from '@/composables/useCloudAuth'

const props = defineProps<{
  environmentName?: string | null
  branchName?: string | null
}>()

const emit = defineEmits<{
  navigate: [tab: string]
}>()

const { user, isAuthenticated } = useCloudAuth()
const showInfo = ref(false)

const authChipLabel = computed(() => user.value?.email || 'Not signed in')
</script>

<style scoped>
.auth-chip {
  color: var(--cg-color-text-muted);
  border: 1px solid var(--cg-color-border-subtle);
  padding: var(--cg-space-1) var(--cg-space-2);
  font-size: var(--cg-font-size-xs);
  text-transform: uppercase;
}

.auth-chip.authenticated {
  color: var(--cg-color-success);
  border-color: var(--cg-color-success);
}

.publish-card {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
  padding: var(--cg-space-3);
  border: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg-secondary);
}

.publish-meta,
.info-content,
.blocked-copy {
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-xs);
  line-height: 1.6;
}

.blocked-title {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  text-transform: uppercase;
}

.row-actions {
  display: flex;
  gap: var(--cg-space-2);
  flex-wrap: wrap;
}
</style>
