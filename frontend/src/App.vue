<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useComfyUIStore } from './stores/comfyui'

const store = useComfyUIStore()
const loading = ref(true)

onMounted(async () => {
  await store.fetchDebugInfo()
  await store.fetchInstalledPacks()
  loading.value = false
})
</script>

<template>
  <div class="app">
    <header>
      <h1>ComfyGit Manager</h1>
    </header>

    <main v-if="!loading">
      <section>
        <h2>Debug Info</h2>
        <pre>{{ JSON.stringify(store.debugInfo, null, 2) }}</pre>
      </section>

      <section>
        <h2>Installed Packs ({{ Object.keys(store.installedPacks).length }})</h2>
        <ul>
          <li v-for="(pack, id) in store.installedPacks" :key="id">
            <strong>{{ pack.name || id }}</strong>
            <span v-if="pack.ver"> @ {{ pack.ver }}</span>
            <span :class="{ enabled: pack.enabled, disabled: !pack.enabled }">
              {{ pack.enabled ? '✓' : '✗' }}
            </span>
          </li>
        </ul>
      </section>
    </main>

    <div v-else class="loading">Loading...</div>
  </div>
</template>

<style>
.app {
  font-family: system-ui, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

header {
  border-bottom: 1px solid #333;
  margin-bottom: 1rem;
}

section {
  margin-bottom: 2rem;
}

pre {
  background: #1a1a1a;
  padding: 1rem;
  overflow-x: auto;
  font-size: 0.875rem;
  border-radius: 4px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 0.5rem;
  border-bottom: 1px solid #333;
}

.enabled { color: #4ade80; margin-left: 0.5rem; }
.disabled { color: #f87171; margin-left: 0.5rem; }
.loading { text-align: center; padding: 2rem; }
</style>
