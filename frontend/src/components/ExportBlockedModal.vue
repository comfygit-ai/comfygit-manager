<template>
  <BaseModal
    title="Cannot Export"
    size="md"
    @close="$emit('close')"
  >
    <template #body>
      <div class="export-blocked">
        <!-- Error Header -->
        <div class="error-header">
          <span class="error-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z"/>
            </svg>
          </span>
          <div class="error-summary">
            <h3 class="error-title">Export blocked</h3>
            <p class="error-description">
              The following issues must be resolved before exporting.
            </p>
          </div>
        </div>

        <!-- Issues List -->
        <div class="issues-list">
          <div
            v-for="(issue, index) in issues"
            :key="index"
            class="issue-item"
          >
            <div class="issue-message">{{ issue.message }}</div>
            <div v-if="issue.details.length" class="issue-details">
              <div
                v-for="(detail, i) in visibleDetails(index)"
                :key="i"
                class="issue-detail"
              >
                {{ detail }}
              </div>
              <button
                v-if="issue.details.length > 3 && !showAllDetails[index]"
                class="show-more-inline"
                @click="showAllDetails[index] = true"
              >
                +{{ issue.details.length - 3 }} more
              </button>
            </div>
            <div class="issue-fix">
              <template v-if="issue.type === 'uncommitted_workflows'">
                Commit your workflow changes before exporting.
              </template>
              <template v-else-if="issue.type === 'uncommitted_git_changes'">
                Commit your changes before exporting.
              </template>
              <template v-else-if="issue.type === 'unresolved_issues'">
                Resolve all workflow issues before exporting.
              </template>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #footer>
      <BaseButton variant="primary" @click="$emit('close')">
        Understood
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'
import type { ExportBlockingIssue } from '@/types/comfygit'

const props = defineProps<{
  issues: ExportBlockingIssue[]
}>()

defineEmits<{
  close: []
}>()

const showAllDetails = reactive<Record<number, boolean>>({})

function visibleDetails(index: number): string[] {
  const issue = props.issues[index]
  if (showAllDetails[index] || issue.details.length <= 3) {
    return issue.details
  }
  return issue.details.slice(0, 3)
}
</script>

<style scoped>
.export-blocked {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.error-header {
  display: flex;
  gap: var(--cg-space-3);
  padding: var(--cg-space-3);
  background: var(--cg-color-error-muted);
  border: 1px solid var(--cg-color-error);
  border-radius: var(--cg-radius-md);
}

.error-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: var(--cg-color-error);
  color: var(--cg-color-bg-primary);
  border-radius: 50%;
  flex-shrink: 0;
}

.error-summary {
  flex: 1;
}

.error-title {
  margin: 0 0 var(--cg-space-1) 0;
  font-size: var(--cg-font-size-base);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-text-primary);
}

.error-description {
  margin: 0;
  font-size: var(--cg-font-size-sm);
  color: var(--cg-color-text-secondary);
}

.issues-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
}

.issue-item {
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-md);
}

.issue-message {
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-medium);
  color: var(--cg-color-text-primary);
  margin-bottom: var(--cg-space-2);
}

.issue-details {
  margin-bottom: var(--cg-space-2);
  padding-left: var(--cg-space-3);
}

.issue-detail {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-secondary);
  font-family: var(--cg-font-mono);
  padding: var(--cg-space-1) 0;
}

.issue-detail::before {
  content: "\2022";
  margin-right: var(--cg-space-2);
  color: var(--cg-color-text-muted);
}

.show-more-inline {
  background: none;
  border: none;
  color: var(--cg-color-accent);
  font-size: var(--cg-font-size-xs);
  cursor: pointer;
  padding: 0;
  margin-top: var(--cg-space-1);
}

.issue-fix {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  font-style: italic;
}
</style>
