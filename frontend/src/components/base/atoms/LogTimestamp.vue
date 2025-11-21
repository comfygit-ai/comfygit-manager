<template>
  <span :class="['log-timestamp', variant]" :title="fullTimestamp">
    {{ formattedTimestamp }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  timestamp: string
  variant?: 'relative' | 'absolute' | 'time-only'
}>(), {
  variant: 'time-only'
})

const fullTimestamp = computed(() => {
  const date = new Date(props.timestamp)
  return date.toLocaleString()
})

const formattedTimestamp = computed(() => {
  const date = new Date(props.timestamp)

  switch (props.variant) {
    case 'relative': {
      const now = new Date()
      const diff = now.getTime() - date.getTime()
      const seconds = Math.floor(diff / 1000)
      const minutes = Math.floor(seconds / 60)
      const hours = Math.floor(minutes / 60)
      const days = Math.floor(hours / 24)

      if (seconds < 60) return `${seconds}s ago`
      if (minutes < 60) return `${minutes}m ago`
      if (hours < 24) return `${hours}h ago`
      return `${days}d ago`
    }
    case 'absolute':
      return date.toLocaleString()
    case 'time-only':
      return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      })
    default:
      return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      })
  }
})
</script>

<style scoped>
.log-timestamp {
  font-family: var(--cg-font-mono);
  font-size: var(--cg-font-size-xs);
  color: var(--cg-color-text-muted);
  white-space: nowrap;
  cursor: help;
}

.log-timestamp.relative {
  min-width: 60px;
}

.log-timestamp.time-only {
  min-width: 70px;
}

.log-timestamp.absolute {
  min-width: 150px;
}
</style>
