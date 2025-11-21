<template>
  <div class="loading-state">
    <div class="spinner"></div>
    <p class="loading-message">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  message?: string
}>(), {
  message: 'Loading...'
})
</script>

<style scoped>
.loading-state {
  text-align: center;
  padding: var(--cg-space-8) var(--cg-space-6);
  color: var(--cg-color-text-muted);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--cg-space-3);
}

.spinner {
  width: 32px;
  height: 32px;
  border: 3px solid var(--cg-color-border-subtle);
  border-top-color: var(--cg-color-accent);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading-message {
  font-size: var(--cg-font-size-sm);
  margin: 0;
}
</style>
