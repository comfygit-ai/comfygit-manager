<template>
  <div class="civitai-tab">
    <div class="placeholder">
      <div class="icon">🎨</div>
      <h3>Civitai Integration</h3>
      <p>Coming soon! Civitai model search and download will be available in a future update.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Placeholder - no logic needed yet
</script>

<style scoped>
.civitai-tab {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  padding: var(--cg-space-4);
}

.placeholder {
  text-align: center;
  color: var(--cg-color-text-muted);
}

.placeholder .icon {
  font-size: 48px;
  margin-bottom: var(--cg-space-3);
}

.placeholder h3 {
  color: var(--cg-color-text-secondary);
  margin: 0 0 var(--cg-space-2) 0;
}

.placeholder p {
  margin: 0;
  font-size: var(--cg-font-size-sm);
}
</style>
