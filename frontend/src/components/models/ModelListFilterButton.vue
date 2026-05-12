<template>
  <div ref="rootEl" class="filter-root">
    <button
      type="button"
      :class="['filter-button', { active: hasActiveFilters }]"
      title="Filter models"
      @click="open = !open"
    >
      <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
        <path
          d="M2 3.25h12L9.25 8.6v3.65l-2.5 1.25V8.6L2 3.25z"
          fill="currentColor"
        />
      </svg>
    </button>

    <div v-if="open" class="filter-popover">
      <div class="filter-popover-header">
        <span>Filters</span>
        <button type="button" class="filter-close" title="Close filters" @click="open = false">
          ×
        </button>
      </div>

      <label class="filter-field">
        <span>Model type</span>
        <select :value="modelType" @change="emitModelType">
          <option value="all">All types</option>
          <option v-for="type in modelTypes" :key="type" :value="type">
            {{ type }}
          </option>
        </select>
      </label>

      <label class="filter-check">
        <input
          type="checkbox"
          :checked="missingSourceOnly"
          @change="emitMissingSourceOnly"
        />
        <span>Missing source only</span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

const props = withDefaults(defineProps<{
  modelType: string
  missingSourceOnly: boolean
  modelTypes: string[]
}>(), {
  modelType: 'all',
  missingSourceOnly: false,
  modelTypes: () => []
})

const emit = defineEmits<{
  'update:modelType': [value: string]
  'update:missingSourceOnly': [value: boolean]
}>()

const open = ref(false)
const rootEl = ref<HTMLElement | null>(null)
const pointerStartedOutside = ref(false)
const hasActiveFilters = computed(() => props.modelType !== 'all' || props.missingSourceOnly)

function emitModelType(event: Event) {
  emit('update:modelType', (event.target as HTMLSelectElement).value)
}

function emitMissingSourceOnly(event: Event) {
  emit('update:missingSourceOnly', (event.target as HTMLInputElement).checked)
}

function isOutside(target: EventTarget | null): boolean {
  return Boolean(rootEl.value && target instanceof Node && !rootEl.value.contains(target))
}

function handleDocumentPointerDown(event: PointerEvent) {
  pointerStartedOutside.value = isOutside(event.target)
}

function handleDocumentClick(event: MouseEvent) {
  if (open.value && pointerStartedOutside.value && isOutside(event.target)) {
    open.value = false
  }
  pointerStartedOutside.value = false
}

function handleDocumentKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    open.value = false
  }
}

onMounted(() => {
  document.addEventListener('pointerdown', handleDocumentPointerDown)
  document.addEventListener('click', handleDocumentClick)
  document.addEventListener('keydown', handleDocumentKeydown)
})

onUnmounted(() => {
  document.removeEventListener('pointerdown', handleDocumentPointerDown)
  document.removeEventListener('click', handleDocumentClick)
  document.removeEventListener('keydown', handleDocumentKeydown)
})
</script>

<style scoped>
.filter-root {
  position: relative;
  flex: 0 0 auto;
}

.filter-button {
  width: 46px;
  height: 46px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-secondary);
  cursor: pointer;
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-base);
}

.filter-button:hover,
.filter-button.active {
  border-color: var(--cg-color-accent);
  color: var(--cg-color-accent);
}

.filter-popover {
  position: absolute;
  z-index: 20;
  right: 0;
  top: calc(100% + var(--cg-space-1));
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: var(--cg-space-3);
  padding: var(--cg-space-3);
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border-strong);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
}

.filter-popover-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--cg-space-2);
  color: var(--cg-color-text-primary);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
}

.filter-close {
  width: 26px;
  height: 26px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid transparent;
  color: var(--cg-color-text-secondary);
  cursor: pointer;
  font-size: 20px;
  line-height: 1;
}

.filter-close:hover {
  background: var(--cg-color-bg-hover);
  border-color: var(--cg-color-border);
  color: var(--cg-color-text-primary);
}

.filter-field,
.filter-check {
  display: flex;
  gap: var(--cg-space-2);
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
}

.filter-field {
  flex-direction: column;
}

.filter-field span {
  color: var(--cg-color-text-primary);
}

.filter-field select {
  width: 100%;
  padding: 8px 10px;
  background: var(--cg-color-bg-primary);
  border: 1px solid var(--cg-color-border);
  color: var(--cg-color-text-primary);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-sm);
}

.filter-check {
  align-items: center;
}
</style>
