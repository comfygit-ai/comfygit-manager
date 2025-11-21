<template>
  <div class="panel-layout">
    <div v-if="$slots.header" class="panel-layout-header">
      <slot name="header"></slot>
    </div>

    <div v-if="$slots.search" class="panel-layout-search">
      <slot name="search"></slot>
    </div>

    <div class="panel-layout-content">
      <slot name="content"></slot>
    </div>

    <div v-if="$slots.footer" class="panel-layout-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
// Pure layout component, no props needed
</script>

<style scoped>
.panel-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.panel-layout-header {
  /* PanelHeader controls its own margin */
}

.panel-layout-search {
  /* SearchBar controls its own margin */
}

.panel-layout-content {
  flex: 1;
  overflow-y: auto;
  min-height: 0;
}

.panel-layout-footer {
  /* Footer at bottom, no scroll */
}

/* Scrollbar styling */
.panel-layout-content::-webkit-scrollbar {
  width: 8px;
}

.panel-layout-content::-webkit-scrollbar-track {
  background: var(--cg-color-bg-tertiary);
}

.panel-layout-content::-webkit-scrollbar-thumb {
  background: var(--cg-color-border-subtle);
  border: 1px solid var(--cg-color-bg-tertiary);
}

.panel-layout-content::-webkit-scrollbar-thumb:hover {
  background: var(--cg-color-accent);
}
</style>
