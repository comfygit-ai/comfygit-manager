<template>
  <div class="mock-control-popover">
    <div class="popover-header">
      <span class="popover-title">Mock Controls</span>
      <button class="close-btn" @click="$emit('close')">×</button>
    </div>

    <div class="popover-content">
      <!-- Quick Presets -->
      <div class="section">
        <div class="section-title">QUICK PRESETS</div>
        <div class="preset-buttons">
          <button
            v-for="preset in presets"
            :key="preset.value"
            :class="['preset-btn', { active: setupState === preset.value }]"
            @click="setPreset(preset.value)"
          >
            {{ preset.label }}
          </button>
        </div>
      </div>

      <!-- Individual Toggles -->
      <div class="section">
        <div class="section-title">STATE TOGGLES</div>
        <div class="toggle-row">
          <label class="toggle-label">
            <input
              type="checkbox"
              :checked="state.hasWorkspace"
              @change="setHasWorkspace(($event.target as HTMLInputElement).checked)"
            />
            <span>Workspace exists</span>
          </label>
        </div>
        <div class="toggle-row">
          <label class="toggle-label">
            <input
              type="checkbox"
              :checked="state.hasEnvironments"
              :disabled="!state.hasWorkspace"
              @change="setHasEnvironments(($event.target as HTMLInputElement).checked)"
            />
            <span>Has environments</span>
          </label>
        </div>
        <div class="toggle-row">
          <label class="toggle-label">
            <input
              type="checkbox"
              :checked="state.isManaged"
              :disabled="!state.hasEnvironments"
              @change="setIsManaged(($event.target as HTMLInputElement).checked)"
            />
            <span>Running in managed env</span>
          </label>
        </div>
        <div class="toggle-row">
          <label class="toggle-label">
            <input
              type="checkbox"
              :checked="state.hasLegacyManager"
              @change="setHasLegacyManager(($event.target as HTMLInputElement).checked)"
            />
            <span>Legacy ComfyUI-Manager installed</span>
          </label>
        </div>
      </div>

      <!-- Current State Display -->
      <div class="section">
        <div class="section-title">CURRENT STATE</div>
        <div class="state-display">
          <code>{{ setupState }}</code>
        </div>
      </div>

      <div class="hint">
        Changes apply on next panel open or status refresh
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMockControls } from '@/composables/useMockControls'

defineEmits<{
  close: []
}>()

const {
  state,
  setupState,
  setHasWorkspace,
  setHasEnvironments,
  setIsManaged,
  setHasLegacyManager,
  setPreset
} = useMockControls()

const presets = [
  { value: 'no_workspace' as const, label: 'No Workspace' },
  { value: 'empty_workspace' as const, label: 'Empty WS' },
  { value: 'unmanaged' as const, label: 'Unmanaged' },
  { value: 'managed' as const, label: 'Managed' }
]
</script>

<style scoped>
.mock-control-popover {
  background: var(--cg-color-bg-primary, #1a1a1a);
  border: 2px solid var(--cg-color-accent, #f97316);
  border-radius: 4px;
  width: 280px;
  font-family: var(--cg-font-mono, monospace);
  font-size: 12px;
  color: var(--cg-color-text-primary, #e5e5e5);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.popover-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: var(--cg-color-bg-tertiary, #262626);
  border-bottom: 1px solid var(--cg-color-border, #404040);
}

.popover-title {
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--cg-color-accent, #f97316);
}

.close-btn {
  background: none;
  border: none;
  color: var(--cg-color-text-muted, #737373);
  font-size: 18px;
  cursor: pointer;
  padding: 0 4px;
  line-height: 1;
}

.close-btn:hover {
  color: var(--cg-color-text-primary, #e5e5e5);
}

.popover-content {
  padding: 12px;
}

.section {
  margin-bottom: 12px;
}

.section:last-of-type {
  margin-bottom: 8px;
}

.section-title {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--cg-color-text-muted, #737373);
  margin-bottom: 8px;
}

.preset-buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px;
}

.preset-btn {
  padding: 6px 8px;
  background: var(--cg-color-bg-secondary, #262626);
  border: 1px solid var(--cg-color-border, #404040);
  color: var(--cg-color-text-secondary, #a3a3a3);
  font-family: inherit;
  font-size: 11px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.preset-btn:hover {
  border-color: var(--cg-color-accent, #f97316);
  color: var(--cg-color-text-primary, #e5e5e5);
}

.preset-btn.active {
  background: var(--cg-color-accent, #f97316);
  border-color: var(--cg-color-accent, #f97316);
  color: white;
}

.toggle-row {
  margin-bottom: 6px;
}

.toggle-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.toggle-label input[type="checkbox"] {
  width: 14px;
  height: 14px;
  accent-color: var(--cg-color-accent, #f97316);
}

.toggle-label input:disabled {
  opacity: 0.4;
}

.toggle-label input:disabled + span {
  opacity: 0.4;
}

.state-display {
  background: var(--cg-color-bg-secondary, #262626);
  padding: 8px 12px;
  border: 1px solid var(--cg-color-border, #404040);
}

.state-display code {
  color: var(--cg-color-accent, #f97316);
  font-weight: 600;
}

.hint {
  font-size: 10px;
  color: var(--cg-color-text-muted, #737373);
  font-style: italic;
}
</style>
