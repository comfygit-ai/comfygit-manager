<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="['action-btn', variant, size, { loading }]"
  >
    <span v-if="loading" class="spinner"></span>
    <slot v-if="!loading"></slot>
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'destructive' | 'ghost' | 'link'
  size?: 'xs' | 'sm' | 'md'
  loading?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}>(), {
  variant: 'primary',
  size: 'sm',
  loading: false,
  disabled: false,
  type: 'button'
})

</script>

<style scoped>
.action-btn {
  font-family: var(--cg-font-mono);
  text-transform: uppercase;
  letter-spacing: var(--cg-letter-spacing-wide);
  cursor: pointer;
  transition: all var(--cg-transition-fast);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--cg-space-1);
  white-space: nowrap;
  border: 1px solid;
}

.action-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.action-btn.loading {
  pointer-events: none;
}

.spinner {
  width: 12px;
  height: 12px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Sizes */
.action-btn.xs {
  padding: var(--cg-space-1) var(--cg-space-2);
  font-size: var(--cg-font-size-xs);
}

.action-btn.sm {
  padding: var(--cg-space-1) var(--cg-space-3);
  font-size: var(--cg-font-size-xs);
}

.action-btn.md {
  padding: var(--cg-space-2) var(--cg-space-4);
  font-size: var(--cg-font-size-sm);
}

/* Primary variant */
.action-btn.primary {
  background: transparent;
  color: var(--cg-color-accent);
  border-color: var(--cg-color-accent);
}

.action-btn.primary:hover:not(:disabled) {
  background: var(--cg-color-bg-hover);
  box-shadow: 0 0 8px var(--cg-shadow-accent);
}

/* Secondary variant */
.action-btn.secondary {
  background: transparent;
  color: var(--cg-color-text-secondary);
  border-color: var(--cg-color-border);
}

.action-btn.secondary:hover:not(:disabled) {
  color: var(--cg-color-text-primary);
  border-color: var(--cg-color-text-primary);
}

/* Destructive variant */
.action-btn.destructive {
  background: transparent;
  color: var(--cg-color-error);
  border-color: var(--cg-color-error);
}

.action-btn.destructive:hover:not(:disabled) {
  background: var(--cg-color-bg-hover);
  box-shadow: 0 0 8px var(--cg-shadow-error);
}

/* Ghost variant */
.action-btn.ghost {
  background: transparent;
  color: var(--cg-color-text-muted);
  border-color: transparent;
}

.action-btn.ghost:hover:not(:disabled) {
  background: var(--cg-color-bg-hover);
  border-color: var(--cg-color-border-subtle);
  color: var(--cg-color-accent);
}

/* Link variant */
.action-btn.link {
  background: transparent;
  color: var(--cg-color-info);
  border: none;
  text-decoration: underline;
  padding: 0;
}

.action-btn.link:hover:not(:disabled) {
  color: var(--cg-color-accent);
}
</style>
