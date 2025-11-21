<template>
  <Teleport to="body">
    <div v-if="show" class="popover-overlay" @click="$emit('close')">
      <div
        class="popover"
        :style="{ maxWidth }"
        @click.stop
      >
        <div class="popover-header">
          <h4 class="popover-title">{{ title }}</h4>
          <button class="popover-close" @click="$emit('close')">✕</button>
        </div>
        <div class="popover-content">
          <slot name="content"></slot>
        </div>
        <div v-if="$slots.actions" class="popover-actions">
          <slot name="actions"></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  show: boolean
  title: string
  maxWidth?: string
}>(), {
  maxWidth: '400px'
})

defineEmits<{
  close: []
}>()
</script>

<style scoped>
.popover-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--cg-color-bg-overlay);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--cg-z-popover);
}

.popover {
  background: var(--cg-color-bg-secondary);
  border: 1px solid var(--cg-color-border);
  border-radius: var(--cg-radius-md);
  box-shadow: var(--cg-shadow-lg);
  width: 90%;
  animation: popoverFadeIn var(--cg-transition-normal);
}

@keyframes popoverFadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.popover-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--cg-space-3) var(--cg-space-4);
  border-bottom: 1px solid var(--cg-color-border-subtle);
}

.popover-title {
  color: var(--cg-color-text-primary);
  font-size: var(--cg-font-size-base);
  font-weight: var(--cg-font-weight-semibold);
  margin: 0;
}

.popover-close {
  background: transparent;
  border: none;
  color: var(--cg-color-text-muted);
  font-size: var(--cg-font-size-lg);
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--cg-transition-fast);
}

.popover-close:hover {
  color: var(--cg-color-text-primary);
}

.popover-content {
  padding: var(--cg-space-4);
  color: var(--cg-color-text-secondary);
  font-size: var(--cg-font-size-sm);
  line-height: var(--cg-line-height-normal);
}

.popover-content :deep(p) {
  margin: 0 0 var(--cg-space-3) 0;
}

.popover-content :deep(p:last-child) {
  margin-bottom: 0;
}

.popover-content :deep(strong) {
  color: var(--cg-color-accent);
  font-weight: var(--cg-font-weight-semibold);
}

.popover-actions {
  padding: var(--cg-space-3) var(--cg-space-4);
  border-top: 1px solid var(--cg-color-border-subtle);
  display: flex;
  gap: var(--cg-space-2);
  justify-content: flex-end;
}
</style>
