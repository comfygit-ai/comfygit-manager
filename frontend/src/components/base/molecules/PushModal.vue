<template>
  <teleport to="body">
    <div v-if="show" class="modal-overlay" @click="$emit('close')">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">PUSH TO {{ remoteName.toUpperCase() }}</h3>
          <button class="modal-close" @click="$emit('close')">✕</button>
        </div>

        <div class="modal-body">
          <!-- Loading State -->
          <template v-if="loading">
            <div class="loading-state">
              <span class="spinner">⟳</span>
              Loading preview...
            </div>
          </template>

          <!-- Blocked by uncommitted changes -->
          <template v-else-if="preview?.has_uncommitted_changes">
            <div class="warning-box">
              <span class="warning-icon">⚠</span>
              <div>
                <strong>UNCOMMITTED CHANGES</strong>
                <p>Commit your changes before pushing.</p>
              </div>
            </div>
          </template>

          <!-- Remote has new commits warning -->
          <template v-else-if="preview?.remote_has_new_commits">
            <div class="warning-box">
              <span class="warning-icon">⚠</span>
              <div>
                <strong>REMOTE HAS NEW COMMITS</strong>
                <p>The remote has commits you don't have locally. You should pull first to avoid overwriting changes.</p>
              </div>
            </div>

            <!-- Outgoing commits -->
            <div v-if="preview.commits_ahead > 0" class="commits-section">
              <h4 class="section-title">OUTGOING COMMITS</h4>
              <div class="commit-list">
                <div v-for="commit in preview.commits" :key="commit.hash" class="commit-item">
                  <span class="commit-hash">{{ commit.short_hash || commit.hash.slice(0, 7) }}</span>
                  <span class="commit-message">{{ commit.message }}</span>
                  <span class="commit-date">{{ commit.date_relative || commit.relative_date }}</span>
                </div>
              </div>
            </div>

            <div class="force-option">
              <label class="checkbox-option">
                <input type="checkbox" v-model="forceChecked" />
                <span>Force push (overwrite remote)</span>
              </label>
              <p class="option-hint">Uses --force-with-lease for safety</p>
            </div>
          </template>

          <!-- Normal Preview -->
          <template v-else-if="preview">
            <div class="commit-summary">
              <span class="icon">📤</span>
              Pushing {{ preview.commits_ahead }} commit{{ preview.commits_ahead !== 1 ? 's' : '' }} to {{ preview.remote }}/{{ preview.branch }}
            </div>

            <!-- Outgoing commits -->
            <div v-if="preview.commits_ahead > 0" class="commits-section">
              <h4 class="section-title">OUTGOING COMMITS</h4>
              <div class="commit-list">
                <div v-for="commit in preview.commits" :key="commit.hash" class="commit-item">
                  <span class="commit-hash">{{ commit.short_hash || commit.hash.slice(0, 7) }}</span>
                  <span class="commit-message">{{ commit.message }}</span>
                  <span class="commit-date">{{ commit.date_relative || commit.relative_date }}</span>
                </div>
              </div>
            </div>

            <!-- Nothing to push -->
            <div v-else class="up-to-date">
              <span class="icon">✓</span>
              Nothing to push - already up to date with {{ preview.remote }}/{{ preview.branch }}
            </div>
          </template>
        </div>

        <div class="modal-actions">
          <ActionButton variant="secondary" @click="$emit('close')">
            Cancel
          </ActionButton>
          <template v-if="preview?.remote_has_new_commits">
            <ActionButton variant="secondary" @click="$emit('pull-first')">
              Pull First
            </ActionButton>
            <ActionButton
              variant="destructive"
              :disabled="!forceChecked"
              :loading="pushing"
              @click="handlePush(true)"
            >
              Force Push
            </ActionButton>
          </template>
          <template v-else-if="preview && preview.commits_ahead > 0 && !preview.has_uncommitted_changes">
            <ActionButton
              variant="primary"
              :loading="pushing"
              @click="handlePush(false)"
            >
              Push
            </ActionButton>
          </template>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { PushPreview } from '@/types/comfygit'
import ActionButton from '@/components/base/atoms/ActionButton.vue'

defineProps<{
  show: boolean
  remoteName: string
  preview: PushPreview | null
  loading: boolean
  pushing: boolean
}>()

const emit = defineEmits<{
  close: []
  push: [options: { force: boolean }]
  'pull-first': []
}>()

const forceChecked = ref(false)

function handlePush(force: boolean) {
  emit('push', { force })
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--cg-color-bg-overlay);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10005;
  backdrop-filter: blur(2px);
}

.modal-content {
  background: var(--cg-color-bg-primary);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-lg);
  box-shadow: var(--cg-shadow-lg);
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--cg-space-4);
  border-bottom: 1px solid var(--cg-color-border-subtle);
}

.modal-title {
  margin: 0;
  font-size: var(--cg-font-size-sm);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-accent);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.modal-close {
  background: transparent;
  border: none;
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xl);
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-close:hover {
  color: var(--cg-color-text-primary);
}

.modal-body {
  padding: var(--cg-space-4);
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-4);
}

.loading-state {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  justify-content: center;
  padding: var(--cg-space-6);
  color: var(--cg-color-text-muted);
}

.spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.commit-summary {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  font-size: var(--cg-font-size-base);
  color: var(--cg-color-text-primary);
}

.commit-summary .icon {
  font-size: var(--cg-font-size-lg);
}

.warning-box {
  display: flex;
  align-items: flex-start;
  gap: var(--cg-space-3);
  padding: var(--cg-space-4);
  background: var(--cg-color-warning-muted);
  border: 1px solid var(--cg-color-warning);
  border-radius: var(--cg-radius-sm);
  color: var(--cg-color-warning);
}

.warning-icon {
  font-size: var(--cg-font-size-xl);
  flex-shrink: 0;
}

.warning-box p {
  margin: var(--cg-space-1) 0 0 0;
  font-size: var(--cg-font-size-sm);
}

.commits-section {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-2);
}

.section-title {
  margin: 0;
  font-size: var(--cg-font-size-xs);
  font-weight: var(--cg-font-weight-semibold);
  color: var(--cg-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
}

.commit-list {
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-1);
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border-radius: var(--cg-radius-sm);
  max-height: 200px;
  overflow-y: auto;
}

.commit-item {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  font-size: var(--cg-font-size-sm);
}

.commit-hash {
  font-family: var(--cg-font-mono);
  color: var(--cg-color-info);
  flex-shrink: 0;
}

.commit-message {
  color: var(--cg-color-text-primary);
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.commit-date {
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-xs);
  flex-shrink: 0;
}

.force-option {
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border-radius: var(--cg-radius-sm);
}

.checkbox-option {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  cursor: pointer;
  font-size: var(--cg-font-size-sm);
}

.checkbox-option input {
  margin: 0;
}

.option-hint {
  margin: var(--cg-space-1) 0 0 var(--cg-space-5);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
}

.up-to-date {
  display: flex;
  align-items: center;
  gap: var(--cg-space-2);
  padding: var(--cg-space-4);
  color: var(--cg-color-success);
  justify-content: center;
}

.modal-actions {
  padding: var(--cg-space-4);
  border-top: 1px solid var(--cg-color-border-subtle);
  display: flex;
  gap: var(--cg-space-2);
  justify-content: flex-end;
}
</style>
