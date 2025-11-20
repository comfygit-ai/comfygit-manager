<template>
  <div class="branch-section">
    <div class="section-header">
      <h4 class="section-title">Branches</h4>
      <button class="add-btn" @click="showCreateInput = true" title="New Branch">
        <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 2v12M2 8h12" stroke="currentColor" stroke-width="2" fill="none"/>
        </svg>
      </button>
    </div>

    <div class="branch-card">
      <!-- Create branch input -->
      <div v-if="showCreateInput" class="create-branch-row">
        <input
          ref="createInput"
          v-model="newBranchName"
          class="branch-input"
          placeholder="Branch name..."
          @keyup.enter="handleCreate"
          @keyup.escape="cancelCreate"
        >
        <button class="action-btn create" @click="handleCreate" :disabled="!newBranchName.trim()">
          Create
        </button>
        <button class="action-btn cancel" @click="cancelCreate">
          Cancel
        </button>
      </div>

      <!-- Branch list -->
      <div v-if="branches.length === 0" class="empty">
        No branches found
      </div>
      <div v-else class="branch-list">
        <div
          v-for="branch in branches"
          :key="branch.name"
          class="branch-item"
          :class="{ current: branch.is_current }"
        >
          <span class="branch-indicator">{{ branch.is_current ? '●' : '○' }}</span>
          <span class="branch-name">{{ branch.name }}</span>
          <button
            v-if="!branch.is_current"
            class="switch-btn"
            @click="$emit('switch', branch.name)"
          >
            Switch
          </button>
          <span v-else class="current-label">current</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import type { BranchInfo } from '@/types/comfygit'

defineProps<{
  branches: BranchInfo[]
  current: string | null
}>()

const emit = defineEmits<{
  switch: [branch: string]
  create: [name: string]
}>()

const showCreateInput = ref(false)
const newBranchName = ref('')
const createInput = ref<HTMLInputElement | null>(null)

function handleCreate() {
  if (newBranchName.value.trim()) {
    emit('create', newBranchName.value.trim())
    cancelCreate()
  }
}

function cancelCreate() {
  showCreateInput.value = false
  newBranchName.value = ''
}

// Focus input when shown
nextTick(() => {
  if (showCreateInput.value && createInput.value) {
    createInput.value.focus()
  }
})
</script>

<style scoped>
.branch-section {
  margin-bottom: 16px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.section-title {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--descrip-text, #999);
  margin: 0;
  letter-spacing: 0.5px;
}

.add-btn {
  background: transparent;
  border: none;
  color: var(--descrip-text, #999);
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-btn:hover {
  background: var(--border-color, #4a4a4a);
  color: var(--input-text, #ddd);
}

.branch-card {
  background: var(--comfy-input-bg, #222);
  border: 1px solid var(--border-color, #4a4a4a);
  border-radius: 6px;
  padding: 8px;
}

.create-branch-row {
  display: flex;
  gap: 8px;
  padding-bottom: 12px;
  margin-bottom: 10px;
  border-bottom: 1px solid var(--border-color, #3a3a3a);
}

.branch-input {
  flex: 1;
  padding: 8px 12px;
  background: var(--comfy-menu-bg, #353535);
  border: 1px solid var(--border-color, #4a4a4a);
  border-radius: 4px;
  color: var(--input-text, #ddd);
  font-size: 13px;
  font-family: inherit;
}

.branch-input:focus {
  outline: none;
  border-color: var(--cg-color-accent, #f97316);
  box-shadow: 0 0 0 2px var(--cg-color-accent-muted, rgba(249, 115, 22, 0.2));
}

.action-btn {
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: all 0.15s ease;
}

.action-btn.create {
  background: var(--cg-color-accent, #f97316);
  color: var(--cg-color-text-inverse, white);
}

.action-btn.create:hover:not(:disabled) {
  background: var(--cg-color-accent-hover, #ea580c);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px var(--cg-color-accent-muted, rgba(249, 115, 22, 0.3));
}

.action-btn.create:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.action-btn.cancel {
  background: transparent;
  color: var(--cg-color-text-secondary, var(--descrip-text, #999));
  border: 1px solid var(--cg-color-border, var(--border-color, #4a4a4a));
}

.action-btn.cancel:hover {
  background: var(--cg-color-bg-hover, var(--border-color, #4a4a4a));
  border-color: var(--cg-color-border-strong, var(--border-color, #5a5a5a));
}

.empty {
  color: var(--descrip-text, #999);
  font-size: 12px;
  text-align: center;
  padding: 12px;
}

.branch-list {
  max-height: 120px;
  overflow-y: auto;
}

.branch-item {
  display: flex;
  align-items: center;
  padding: 6px 4px;
  font-size: 12px;
  border-radius: 4px;
}

.branch-item:hover {
  background: rgba(255, 255, 255, 0.02);
}

.branch-item.current {
  background: rgba(249, 115, 22, 0.1);
}

.branch-indicator {
  font-size: 8px;
  margin-right: 8px;
  color: var(--descrip-text, #999);
}

.branch-item.current .branch-indicator {
  color: #f97316;
}

.branch-name {
  flex: 1;
  color: var(--input-text, #ddd);
}

.switch-btn {
  padding: 2px 8px;
  border-radius: 3px;
  font-size: 10px;
  cursor: pointer;
  background: var(--border-color, #4a4a4a);
  color: var(--input-text, #ddd);
  border: none;
}

.switch-btn:hover {
  background: #525252;
}

.current-label {
  font-size: 10px;
  color: var(--descrip-text, #999);
  padding: 2px 8px;
}
</style>
