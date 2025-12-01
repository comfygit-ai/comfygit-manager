<template>
  <div class="footer-info">
    <span class="version">{{ APP_VERSION }}</span>
    <span class="made-by">
      made with
      <svg class="heart-icon" width="10" height="10" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z"/>
      </svg>
      by {{ AUTHOR_NAME }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { APP_VERSION, AUTHOR_NAME } from '@/constants/social'
</script>

<style scoped>
.footer-info {
  display: flex;
  align-items: center;
  gap: var(--cg-space-3);
  font-size: 10px;
  color: var(--cg-color-text-muted);
}

.version {
  opacity: 0.7;
}

.made-by {
  display: flex;
  align-items: center;
  gap: 2px;
}

.heart-icon {
  color: #db61a2;
}
</style>
