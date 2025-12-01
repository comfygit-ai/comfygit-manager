<template>
  <div class="social-buttons">
    <template v-for="link in SOCIAL_LINKS" :key="link.id">
      <!-- Sponsor button with label -->
      <button
        v-if="link.label"
        class="icon-btn sponsor-btn"
        :title="link.title"
        :aria-label="link.ariaLabel"
        @click="openLink(link.url)"
      >
        {{ link.label }}
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path :d="link.iconPath" />
        </svg>
      </button>

      <!-- Icon-only buttons -->
      <button
        v-else
        class="icon-btn social-link"
        :title="link.title"
        :aria-label="link.ariaLabel"
        @click="openLink(link.url)"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path :d="link.iconPath" />
        </svg>
      </button>
    </template>
  </div>
</template>

<script setup lang="ts">
import { SOCIAL_LINKS } from '@/constants/social'

function openLink(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer')
}
</script>

<style scoped>
.social-buttons {
  display: flex;
  align-items: center;
  gap: 4px;
}

.icon-btn {
  background: transparent;
  border: 1px solid transparent;
  color: var(--cg-color-text-primary);
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-btn:hover {
  background: var(--cg-color-bg-hover);
  border-color: var(--cg-color-border-subtle);
}

/* Sponsor button */
.sponsor-btn {
  gap: 4px;
  padding: 4px 8px;
  border: 1px solid var(--cg-color-border-subtle);
  color: var(--cg-color-text-secondary);
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  opacity: 0.7;
}

.sponsor-btn:hover {
  opacity: 1;
  border-color: #db61a2;
  color: #db61a2;
}

/* Social link icons - slightly muted until hover */
.icon-btn.social-link {
  opacity: 0.7;
}

.icon-btn.social-link:hover {
  opacity: 1;
}
</style>
