<template>
  <div class="dialog-overlay" @click.self="$emit('cancel')">
    <div class="dialog-content">
      <div class="dialog-header">
        <h3 class="dialog-title">{{ title }}</h3>
      </div>

      <div class="dialog-body">
        <p class="dialog-message">{{ message }}</p>

        <div v-if="details && details.length" class="dialog-details">
          <div v-for="(detail, i) in details" :key="i" class="detail-item">
            • {{ detail }}
          </div>
        </div>

        <p v-if="warning" class="dialog-warning">
          <span class="warning-icon">⚠</span>
          {{ warning }}
        </p>
      </div>

      <div class="dialog-footer">
        <button class="dialog-btn cancel" @click="$emit('cancel')">
          {{ cancelLabel }}
        </button>
        <button
          v-if="secondaryAction"
          class="dialog-btn secondary"
          @click="$emit('secondary')"
        >
          {{ secondaryLabel }}
        </button>
        <button
          class="dialog-btn primary"
          :class="{ destructive }"
          @click="$emit('confirm')"
        >
          {{ confirmLabel }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  message: string
  details?: string[]
  warning?: string
  confirmLabel?: string
  cancelLabel?: string
  secondaryLabel?: string
  secondaryAction?: boolean
  destructive?: boolean
}>(), {
  confirmLabel: 'Confirm',
  cancelLabel: 'Cancel',
  secondaryLabel: 'Alternative',
  secondaryAction: false,
  destructive: false
})

defineEmits<{
  confirm: []
  cancel: []
  secondary: []
}>()
</script>

<style scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10003;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dialog-content {
  width: 380px;
  max-width: 90vw;
  background: var(--comfy-menu-bg, #353535);
  border: 1px solid var(--border-color, #4a4a4a);
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
}

.dialog-header {
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-color, #4a4a4a);
}

.dialog-title {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--input-text, #ddd);
}

.dialog-body {
  padding: 16px;
}

.dialog-message {
  margin: 0 0 12px 0;
  font-size: 13px;
  color: var(--input-text, #ddd);
  line-height: 1.4;
}

.dialog-details {
  background: var(--comfy-input-bg, #222);
  border-radius: 4px;
  padding: 8px 12px;
  margin-bottom: 12px;
}

.detail-item {
  font-size: 12px;
  color: var(--descrip-text, #999);
  padding: 2px 0;
}

.dialog-warning {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin: 0;
  padding: 8px 10px;
  background: rgba(251, 191, 36, 0.1);
  border: 1px solid #fbbf24;
  border-radius: 4px;
  font-size: 12px;
  color: #fbbf24;
}

.warning-icon {
  flex-shrink: 0;
}

.dialog-footer {
  padding: 12px 16px;
  border-top: 1px solid var(--border-color, #4a4a4a);
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.dialog-btn {
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  border: none;
}

.dialog-btn.cancel {
  background: transparent;
  color: var(--descrip-text, #999);
  border: 1px solid var(--border-color, #4a4a4a);
}

.dialog-btn.cancel:hover {
  background: var(--comfy-input-bg, #222);
}

.dialog-btn.secondary {
  background: var(--comfy-input-bg, #222);
  color: var(--input-text, #ddd);
  border: 1px solid var(--border-color, #4a4a4a);
}

.dialog-btn.secondary:hover {
  background: var(--border-color, #4a4a4a);
}

.dialog-btn.primary {
  background: #f97316;
  color: white;
}

.dialog-btn.primary:hover {
  background: #ea580c;
}

.dialog-btn.primary.destructive {
  background: #ef4444;
}

.dialog-btn.primary.destructive:hover {
  background: #dc2626;
}
</style>
