<template>
  <div class="base-dropdown" ref="dropdownRef">
    <button
      type="button"
      class="dropdown-trigger"
      :class="{ open: isOpen, error: !!error }"
      :disabled="disabled"
      @click="toggle"
    >
      <span class="dropdown-value">{{ displayValue }}</span>
      <span class="dropdown-arrow">▼</span>
    </button>

    <Teleport to="body">
      <div
        v-if="isOpen"
        class="dropdown-overlay"
        @click="close"
      />
      <div
        v-if="isOpen"
        ref="menuRef"
        class="dropdown-menu"
        :style="menuStyle"
      >
        <div
          v-for="option in options"
          :key="getOptionValue(option)"
          :class="['dropdown-option', { selected: getOptionValue(option) === modelValue }]"
          @click="selectOption(option)"
        >
          {{ getOptionLabel(option) }}
        </div>
      </div>
    </Teleport>

    <span v-if="error" class="dropdown-error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'

export interface DropdownOption {
  label: string
  value: string | number
}

const props = withDefaults(defineProps<{
  modelValue: string | number
  options: DropdownOption[] | string[]
  placeholder?: string
  disabled?: boolean
  error?: string
}>(), {
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)
const menuRef = ref<HTMLElement | null>(null)
const menuStyle = ref<Record<string, string>>({})

function getOptionValue(option: DropdownOption | string): string | number {
  return typeof option === 'string' ? option : option.value
}

function getOptionLabel(option: DropdownOption | string): string {
  return typeof option === 'string' ? option : option.label
}

const displayValue = computed(() => {
  if (!props.modelValue && props.placeholder) {
    return props.placeholder
  }
  const option = props.options.find(o => getOptionValue(o) === props.modelValue)
  return option ? getOptionLabel(option) : String(props.modelValue)
})

function toggle() {
  if (props.disabled) return
  isOpen.value = !isOpen.value
}

function close() {
  isOpen.value = false
}

function selectOption(option: DropdownOption | string) {
  emit('update:modelValue', getOptionValue(option))
  close()
}

function updateMenuPosition() {
  if (!dropdownRef.value) return

  const rect = dropdownRef.value.getBoundingClientRect()
  const viewportHeight = window.innerHeight
  const spaceBelow = viewportHeight - rect.bottom
  const spaceAbove = rect.top
  const menuHeight = Math.min(300, props.options.length * 36 + 8)

  // Position below by default, above if not enough space
  const showAbove = spaceBelow < menuHeight && spaceAbove > spaceBelow

  menuStyle.value = {
    position: 'fixed',
    left: `${rect.left}px`,
    width: `${rect.width}px`,
    maxHeight: '300px',
    ...(showAbove
      ? { bottom: `${viewportHeight - rect.top + 4}px` }
      : { top: `${rect.bottom + 4}px` }
    )
  }
}

watch(isOpen, async (open) => {
  if (open) {
    await nextTick()
    updateMenuPosition()
  }
})

function handleScroll() {
  if (isOpen.value) {
    updateMenuPosition()
  }
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && isOpen.value) {
    close()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, true)
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll, true)
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.base-dropdown {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 10px 12px;
  background: var(--cg-color-bg-tertiary);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-md);
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-sm);
  font-family: var(--cg-font-mono);
  cursor: pointer;
  width: 100%;
  text-align: left;
  transition: all var(--cg-transition-fast);
}

.dropdown-trigger:hover:not(:disabled) {
  border-color: var(--cg-color-accent);
}

.dropdown-trigger:focus {
  outline: none;
  border-color: var(--cg-color-accent);
  box-shadow: 0 0 0 2px var(--cg-color-accent-muted);
}

.dropdown-trigger:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.dropdown-trigger.open {
  border-color: var(--cg-color-accent);
}

.dropdown-trigger.error {
  border-color: var(--cg-color-error);
}

.dropdown-value {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dropdown-arrow {
  font-size: 10px;
  color: var(--cg-color-accent);
  transition: transform 0.15s ease;
}

.dropdown-trigger.open .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-overlay {
  position: fixed;
  inset: 0;
  z-index: 10010;
}

.dropdown-menu {
  position: fixed;
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-md);
  box-shadow: var(--cg-shadow-lg);
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10011;
  padding: 4px 0;
}

.dropdown-menu::-webkit-scrollbar {
  width: 8px;
}

.dropdown-menu::-webkit-scrollbar-track {
  background: var(--cg-color-bg-tertiary);
}

.dropdown-menu::-webkit-scrollbar-thumb {
  background: var(--cg-color-border-subtle);
  border-radius: 4px;
}

.dropdown-menu::-webkit-scrollbar-thumb:hover {
  background: var(--cg-color-accent);
}

.dropdown-option {
  padding: 8px 12px;
  cursor: pointer;
  font-size: var(--cg-font-size-sm);
  font-family: var(--cg-font-mono);
  color: var(--cg-color-text-primary);
  transition: background-color 0.1s ease;
}

.dropdown-option:hover {
  background: var(--cg-color-bg-hover);
}

.dropdown-option.selected {
  background: var(--cg-color-accent-muted);
  color: var(--cg-color-accent);
}

.dropdown-error {
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-error);
}
</style>
