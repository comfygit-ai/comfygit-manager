# Frontend - Codebase Map

## Overview
Vue 3 + TypeScript frontend for ComfyGit panel integration with ComfyUI. Uses composable services to communicate with backend APIs and organizes UI components in atomic design pattern (atoms, molecules, organisms).

---

## Entry Point (`src/`)
- **main.ts** - Registers ComfyGit extension with ComfyUI, manages panel/popover rendering and theming

---

## Core Components

### Page/Section Components (`src/components/`)
Main feature sections within the panel UI.
- **ComfyGitPanel.vue** - Root panel component managing all tabs and sections
- **StatusSection.vue** - Displays git/sync status and comparison results
- **BranchSection.vue** - Branch listing, checkout, and creation functionality
- **CommitDetailModal.vue** - Modal showing detailed commit information
- **CommitPopover.vue** - Quick commit popover with workflow changes summary
- **HistorySection.vue** - Git commit history and log viewing
- **EnvironmentsSection.vue** - Environment listing and switching
- **EnvironmentSwitcher.vue** - Environment selection dropdown
- **ModelsEnvSection.vue** - Model availability per environment
- **ModelIndexSection.vue** - Model index management and updates
- **NodesSection.vue** - Custom nodes listing and status
- **RemotesSection.vue** - Git remotes management and configuration
- **WorkspaceSettingsSection.vue** - Global workspace configuration
- **WorkflowsSection.vue** - Workflow sync and management
- **WorkflowDetailsModal.vue** - Detailed workflow information display
- **WorkflowResolveModal.vue** - Resolution UI for conflicted workflows
- **ImportSection.vue** - Workflow/model import from files
- **ExportSection.vue** - Workflow/model export functionality
- **ConfirmDialog.vue** - Generic confirmation dialog component
- **DebugEnvSection.vue** - Debug information for environment status
- **WorkspaceDebugSection.vue** - Debug information for workspace

### Base Components - Atoms (`src/components/base/atoms/`)
Smallest reusable UI building blocks.
- **ActionButton.vue** - Icon button with multiple variants
- **CommitHash.vue** - Formatted commit hash display
- **FileInput.vue** - File upload input element
- **FilePath.vue** - Formatted file path display
- **InfoButton.vue** - Info icon with tooltip
- **Label.vue** - Form label element
- **LogLevel.vue** - Log severity indicator badge
- **PanelTitle.vue** - Panel section title styling
- **ProgressBar.vue** - Horizontal progress indicator
- **RemoteUrlDisplay.vue** - Git remote URL formatter
- **SearchInput.vue** - Search box with debounce
- **SectionTitle.vue** - Section heading with styling
- **StatusIndicator.vue** - Status dot/badge with color coding
- **StatusItem.vue** - Status text with indicator
- **TextInput.vue** - Basic text input wrapper
- **Toggle.vue** - On/off toggle switch
- **Value.vue** - Formatted value display

### Base Components - Form (`src/components/base/`)
Form inputs and field wrappers.
- **BaseButton.vue** - Primary button component with variants
- **BaseCheckbox.vue** - Checkbox input with label
- **BaseDataTable.vue** - Data table with sorting and pagination
- **BaseFormField.vue** - Form field wrapper with label/error
- **BaseInput.vue** - Text input with validation styling
- **BaseModal.vue** - Modal dialog with overlay
- **BaseRadio.vue** - Radio button group
- **BaseSelect.vue** - Dropdown select component
- **BaseTextarea.vue** - Multi-line text input
- **BaseTitle.vue** - Title element with styling

### Base Components - Molecules (`src/components/base/molecules/`)
Composite components combining atoms.
- **BranchCreateForm.vue** - Form for creating new branches
- **BranchIndicator.vue** - Current branch display
- **BranchListItem.vue** - Branch list entry with actions
- **CommitItem.vue** - Single commit display in list
- **CommitList.vue** - Container for commit history
- **ConfirmSwitchModal.vue** - Confirmation for environment switch
- **DetailRow.vue** - Key-value detail display
- **EmptyState.vue** - Empty state placeholder UI
- **EnvironmentListItem.vue** - Environment list entry
- **FileDropZone.vue** - Drag-drop file upload zone
- **ImportOptions.vue** - Import settings configuration
- **ImportPreview.vue** - Preview of import before confirmation
- **InfoPopover.vue** - Popover with additional information
- **IssueCard.vue** - Issue/conflict display card
- **ItemCard.vue** - Generic item card container
- **LogFilterBar.vue** - Filter controls for logs
- **LogItem.vue** - Single log entry display
- **LogList.vue** - Container for log entries
- **PanelHeader.vue** - Section header with title/actions
- **RemoteCard.vue** - Git remote information card
- **RemoteForm.vue** - Form for adding/editing remotes
- **SearchBar.vue** - Search with filter controls
- **SectionGroup.vue** - Grouped section container
- **SettingRow.vue** - Settings item with control
- **StatusDetailModal.vue** - Modal with detailed status
- **StatusGrid.vue** - Grid of status indicators
- **SummaryBar.vue** - Summary statistics bar
- **SwitchEnvironmentModal.vue** - Environment switch progress modal
- **SyncEnvironmentModal.vue** - Environment sync progress modal

### Base Components - Organisms (`src/components/base/organisms/`)
Large page-level components.
- **ErrorState.vue** - Error display with recovery options
- **LoadingState.vue** - Loading skeleton/spinner
- **PanelLayout.vue** - Main panel layout wrapper

---

## Services & Composables

### Services (`src/services/`)
API communication and data management.
- **mockApi.ts** - Mock API implementation with realistic test data for all endpoints

### Composables (`src/composables/`)
Reusable state and logic logic.
- **useComfyGitService.ts** - Primary service composable for all API operations (commits, branches, environments, workflows, models, etc.)
- **useOrchestratorService.ts** - Service for orchestrator control operations

---

## Types (`src/types/`)
- **comfygit.ts** - TypeScript interfaces for all API models (Status, Commits, Branches, Environments, Workflows, Models, Logs, Remotes, etc.)

---

## Utilities (`src/utils/`)
- **fetchWithTimeout.ts** - HTTP fetch wrapper with configurable timeout handling

---

## Styling

### Themes (`src/themes/`)
- **index.ts** - Theme switching system with Comfy and Phosphor themes

### Configuration Files (`frontend/`)
- **vite.config.ts** - Vite build configuration
- **tsconfig.json** - TypeScript compiler settings
- **package.json** - Dependencies and npm scripts

---

## Key Entry Points
- **main.ts** - Vue app initialization and ComfyUI extension registration; manages panel modal and commit popover lifecycle
- **ComfyGitPanel.vue** - Root component routing to all feature sections
- **useComfyGitService.ts** - Central API service with ~25+ operations for git, workflows, models, environments
