<template>
  <BaseModal
    :title="hasCommittableIssues ? 'Commit & Export' : 'Cannot Export'"
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
              {{ hasCommittableIssues
                ? 'Commit your changes to proceed with export.'
                : 'The following issues must be resolved before exporting.' }}
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

        <!-- Commit Section (only when there are committable issues) -->
        <div v-if="hasCommittableIssues" class="commit-section">
          <!-- Allow issues checkbox (only when unresolved issues also present) -->
          <div v-if="hasUnresolvedIssues" class="issues-warning">
            <div class="warning-header">
              <span class="warning-icon-badge">!</span>
              <span class="warning-label">Some workflow issues cannot be fixed by committing</span>
            </div>
            <BaseCheckbox v-model="allowIssues" class="allow-issues-toggle">
              Commit anyway (ignore issues)
            </BaseCheckbox>
          </div>

          <BaseTextarea
            v-model="message"
            placeholder="Describe your changes..."
            :disabled="isCommitting || isBlockedByIssues"
            :rows="3"
            :submit-on-enter="true"
            @submit="handleCommitAndExport"
            @ctrl-enter="handleCommitAndExport"
          />

          <div v-if="commitError" class="commit-error">
            {{ commitError }}
          </div>
        </div>
      </div>
    </template>

    <template #footer>
      <template v-if="hasCommittableIssues">
        <BaseButton variant="secondary" @click="$emit('close')">
          Cancel
        </BaseButton>
        <BaseButton
          :variant="allowIssues ? 'danger' : 'primary'"
          :disabled="!canCommit"
          :loading="isCommitting"
          @click="handleCommitAndExport"
        >
          {{ isCommitting ? 'Committing...' : allowIssues ? 'Force Commit & Export' : 'Commit & Export' }}
        </BaseButton>
      </template>
      <template v-else>
        <BaseButton variant="primary" @click="$emit('close')">
          Understood
        </BaseButton>
      </template>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import BaseModal from './base/BaseModal.vue'
import BaseButton from './base/BaseButton.vue'
import BaseTextarea from './base/BaseTextarea.vue'
import BaseCheckbox from './base/BaseCheckbox.vue'
import { useComfyGitService } from '@/composables/useComfyGitService'
import type { ExportBlockingIssue } from '@/types/comfygit'

const props = defineProps<{
  issues: ExportBlockingIssue[]
}>()

const emit = defineEmits<{
  close: []
  committed: []
}>()

const { commit } = useComfyGitService()

const message = ref('')
const isCommitting = ref(false)
const allowIssues = ref(false)
const commitError = ref('')
const showAllDetails = reactive<Record<number, boolean>>({})

const hasCommittableIssues = computed(() =>
  props.issues.some(i => i.type === 'uncommitted_workflows' || i.type === 'uncommitted_git_changes')
)

const hasUnresolvedIssues = computed(() =>
  props.issues.some(i => i.type === 'unresolved_issues')
)

const isBlockedByIssues = computed(() =>
  hasUnresolvedIssues.value && !allowIssues.value
)

const canCommit = computed(() =>
  hasCommittableIssues.value && message.value.trim() !== '' && !isCommitting.value && !isBlockedByIssues.value
)

function visibleDetails(index: number): string[] {
  const issue = props.issues[index]
  if (showAllDetails[index] || issue.details.length <= 3) {
    return issue.details
  }
  return issue.details.slice(0, 3)
}

async function handleCommitAndExport() {
  if (!canCommit.value) return

  isCommitting.value = true
  commitError.value = ''

  try {
    const res = await commit(message.value.trim(), allowIssues.value)

    if (res.status === 'success') {
      emit('committed')
    } else if (res.status === 'blocked') {
      const issuesList = res.issues?.map(i => `${i.name}: ${i.issue}`).join('; ') || 'Unknown issues'
      commitError.value = `Commit blocked: ${issuesList}`
    } else {
      commitError.value = res.message || 'Commit failed'
    }
  } catch (err) {
    commitError.value = err instanceof Error ? err.message : 'Commit failed'
  } finally {
    isCommitting.value = false
  }
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

/* Commit Section */
.commit-section {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
  padding-top: var(--cg-space-3);
  border-top: 1px solid var(--cg-color-border);
}

.issues-warning {
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
  border-radius: var(--cg-radius-md);
  padding: var(--cg-space-3);
}

.warning-header {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  margin-bottom: var(--cg-space-2);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-secondary);
}

.warning-icon-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  background: var(--cg-color-warning);
  color: var(--cg-color-bg-primary);
  border-radius: 50%;
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-bold);
  flex-shrink: 0;
}

.allow-issues-toggle {
  font-size: var(--cg-font-size-xs);
}

.commit-error {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-error);
  padding: var(--cg-space-2);
  background: var(--cg-color-error-muted);
  border: 1px solid var(--cg-color-error);
  border-radius: var(--cg-radius-md);
}
</style>
