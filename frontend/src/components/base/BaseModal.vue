<template>
  <Teleport to="body">
    <div class="base-modal-overlay" @click="handleOverlayClick">
      <div :class="['base-modal-content', size, { 'fixed-height': fixedHeight }]" @click.stop>
        <div class="base-modal-header">
          <slot name="header">
            <h3 v-if="title" class="base-modal-title">{{ title }}</h3>
          </slot>
          <button
            v-if="showCloseButton"
            class="base-modal-close"
            @click="$emit('close')"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z"/>
            </svg>
          </button>
        </div>

        <div class="base-modal-body">
          <div v-if="loading" class="base-modal-loading">Loading...</div>
          <div v-else-if="error" class="base-modal-error">{{ error }}</div>
          <slot v-else name="body"></slot>
        </div>

        <div v-if="$slots.footer" class="base-modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showCloseButton?: boolean
  closeOnOverlayClick?: boolean
  loading?: boolean
  error?: string
  fixedHeight?: boolean
}>(), {
  size: 'md',
  showCloseButton: true,
  closeOnOverlayClick: true,
  loading: false,
  fixedHeight: false
})

const emit = defineEmits<{
  close: []
}>()

function handleOverlayClick() {
  if (props.closeOnOverlayClick) {
    emit('close')
  }
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.showCloseButton) {
    emit('close')
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.base-modal-overlay {
  position: fixed;
  inset: 0;
  background: var(--cg-color-bg-overlay);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10003;
  animation: fadeIn 0.15s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.base-modal-content {
  background: var(--cg-color-bg-primary);
  border: 2px solid var(--cg-color-border);
  box-shadow: var(--cg-shadow-xl);
  max-height: 80vh;
  width: 90vw;
  display: flex;
  flex-direction: column;
  animation: slideIn 0.2s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.base-modal-content.sm { max-width: 400px; }
.base-modal-content.md { max-width: 600px; }
.base-modal-content.lg { max-width: 800px; }
.base-modal-content.xl { max-width: 1000px; }

/* Fixed height mode - prevents modal from jumping when content changes */
.base-modal-content.fixed-height {
  height: 70vh;
  max-height: 70vh;
}

.base-modal-header {
  padding: var(--cg-space-4);
  border-bottom: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg-tertiary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--cg-space-2);
}

.base-modal-title {
  color: var(--cg-color-accent);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  font-size: var(--cg-font-size-sm);
  margin: 0;
  flex: 1;
}

.base-modal-close {
  background: transparent;
  border: 1px solid transparent;
  color: var(--cg-color-text-primary);
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.base-modal-close:hover {
  background: var(--cg-color-bg-hover);
  border-color: var(--cg-color-border-subtle);
}

.base-modal-body {
  flex: 1;
  overflow-y: auto;
  padding: var(--cg-space-4);
}

.base-modal-body::-webkit-scrollbar {
  width: 8px;
}

.base-modal-body::-webkit-scrollbar-track {
  background: var(--cg-color-bg-tertiary);
}

.base-modal-body::-webkit-scrollbar-thumb {
  background: var(--cg-color-border-subtle);
  border: 1px solid var(--cg-color-bg-tertiary);
}

.base-modal-body::-webkit-scrollbar-thumb:hover {
  background: var(--cg-color-accent);
}

.base-modal-loading,
.base-modal-error {
  text-align: center;
  padding: var(--cg-space-4);
  color: var(--cg-color-text-muted);
}

.base-modal-error {
  color: var(--cg-color-error);
  border: 1px solid var(--cg-color-error);
  background: var(--cg-color-error-muted);
}

.base-modal-footer {
  padding: var(--cg-space-4);
  border-top: 1px solid var(--cg-color-border);
  background: var(--cg-color-bg-tertiary);
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
</style>
