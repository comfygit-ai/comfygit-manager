/**
 * Mock Control State - Global state for simulating different environment configurations.
 * Only active when VITE_USE_MOCK_API=true
 */

import { reactive, computed } from 'vue'

export interface MockControlState {
  hasWorkspace: boolean
  hasEnvironments: boolean
  isManaged: boolean
  hasLegacyManager: boolean
}

// Global reactive state (persists across component instances)
const state = reactive<MockControlState>({
  hasWorkspace: false,
  hasEnvironments: false,
  isManaged: false,
  hasLegacyManager: false
})

export function useMockControls() {
  // Derived setup state based on toggles
  const setupState = computed(() => {
    if (!state.hasWorkspace) return 'no_workspace'
    if (!state.hasEnvironments) return 'empty_workspace'
    if (!state.isManaged) return 'unmanaged'
    return 'managed'
  })

  function setHasWorkspace(value: boolean) {
    state.hasWorkspace = value
    // If no workspace, cascade reset
    if (!value) {
      state.hasEnvironments = false
      state.isManaged = false
    }
  }

  function setHasEnvironments(value: boolean) {
    state.hasEnvironments = value
    // If no environments, can't be managed
    if (!value) {
      state.isManaged = false
    }
    // If enabling environments, must have workspace
    if (value && !state.hasWorkspace) {
      state.hasWorkspace = true
    }
  }

  function setIsManaged(value: boolean) {
    state.isManaged = value
    // If managed, must have workspace and environments
    if (value) {
      state.hasWorkspace = true
      state.hasEnvironments = true
    }
  }

  function setHasLegacyManager(value: boolean) {
    state.hasLegacyManager = value
  }

  // Quick presets
  function setPreset(preset: 'no_workspace' | 'empty_workspace' | 'unmanaged' | 'managed') {
    switch (preset) {
      case 'no_workspace':
        state.hasWorkspace = false
        state.hasEnvironments = false
        state.isManaged = false
        break
      case 'empty_workspace':
        state.hasWorkspace = true
        state.hasEnvironments = false
        state.isManaged = false
        break
      case 'unmanaged':
        state.hasWorkspace = true
        state.hasEnvironments = true
        state.isManaged = false
        break
      case 'managed':
        state.hasWorkspace = true
        state.hasEnvironments = true
        state.isManaged = true
        break
    }
  }

  return {
    state,
    setupState,
    setHasWorkspace,
    setHasEnvironments,
    setIsManaged,
    setHasLegacyManager,
    setPreset
  }
}
