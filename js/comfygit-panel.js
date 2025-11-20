/**
 * ComfyGit Control Panel - Frontend extension for git operations
 * Adds a blue ComfyGit button that opens the Control Panel dialog
 */

import { app } from "../../scripts/app.js";
import { api } from "../../scripts/api.js";

// Panel state
let panelDialog = null;
let currentStatus = null;
let commits = [];

// Create and inject styles
const styles = document.createElement("style");
styles.textContent = `
    .comfygit-panel-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .comfygit-panel {
        background: var(--comfy-menu-bg, #353535);
        border: 1px solid var(--border-color, #4a4a4a);
        border-radius: 8px;
        width: 600px;
        max-width: 90vw;
        max-height: 80vh;
        display: flex;
        flex-direction: column;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    }

    .comfygit-panel-header {
        padding: 16px 20px;
        border-bottom: 1px solid var(--border-color, #4a4a4a);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .comfygit-panel-title {
        font-size: 18px;
        font-weight: 600;
        color: var(--input-text, #ddd);
        margin: 0;
    }

    .comfygit-panel-subtitle {
        font-size: 12px;
        color: var(--descrip-text, #999);
        margin-top: 4px;
    }

    .comfygit-panel-close {
        background: transparent;
        border: none;
        color: var(--input-text, #ddd);
        font-size: 20px;
        cursor: pointer;
        padding: 4px 8px;
        border-radius: 4px;
    }

    .comfygit-panel-close:hover {
        background: var(--comfy-input-bg, #222);
    }

    .comfygit-panel-content {
        flex: 1;
        overflow-y: auto;
        padding: 20px;
    }

    .comfygit-section {
        margin-bottom: 20px;
    }

    .comfygit-section-title {
        font-size: 14px;
        font-weight: 600;
        color: var(--input-text, #ddd);
        margin: 0 0 12px 0;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .comfygit-card {
        background: var(--comfy-input-bg, #222);
        border: 1px solid var(--border-color, #4a4a4a);
        border-radius: 6px;
        padding: 12px;
    }

    .comfygit-status-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
    }

    .comfygit-status-item {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        color: var(--input-text, #ddd);
    }

    .comfygit-status-count {
        font-weight: 600;
        min-width: 20px;
    }

    .comfygit-status-new { color: #4ade80; }
    .comfygit-status-modified { color: #fbbf24; }
    .comfygit-status-deleted { color: #f87171; }
    .comfygit-status-synced { color: var(--descrip-text, #999); }
    .comfygit-status-ok { color: #4ade80; }
    .comfygit-status-warn { color: #fbbf24; }

    .comfygit-commit-form {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .comfygit-input {
        width: 100%;
        padding: 10px 12px;
        background: var(--comfy-input-bg, #222);
        border: 1px solid var(--border-color, #4a4a4a);
        border-radius: 4px;
        color: var(--input-text, #ddd);
        font-size: 13px;
        box-sizing: border-box;
    }

    .comfygit-input:focus {
        outline: none;
        border-color: #3b82f6;
    }

    .comfygit-btn {
        padding: 8px 16px;
        border-radius: 4px;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        border: none;
        transition: background 0.2s;
    }

    .comfygit-btn-primary {
        background: #3b82f6;
        color: white;
    }

    .comfygit-btn-primary:hover:not(:disabled) {
        background: #2563eb;
    }

    .comfygit-btn-primary:disabled {
        background: #1e40af;
        opacity: 0.5;
        cursor: not-allowed;
    }

    .comfygit-btn-secondary {
        background: var(--comfy-input-bg, #222);
        color: var(--input-text, #ddd);
        border: 1px solid var(--border-color, #4a4a4a);
    }

    .comfygit-btn-secondary:hover {
        background: var(--border-color, #4a4a4a);
    }

    .comfygit-commit-list {
        max-height: 200px;
        overflow-y: auto;
    }

    .comfygit-commit-item {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 8px 0;
        border-bottom: 1px solid var(--border-color, #4a4a4a);
    }

    .comfygit-commit-item:last-child {
        border-bottom: none;
    }

    .comfygit-commit-hash {
        font-family: monospace;
        font-size: 12px;
        color: #60a5fa;
        margin-right: 8px;
    }

    .comfygit-commit-message {
        flex: 1;
        font-size: 13px;
        color: var(--input-text, #ddd);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .comfygit-commit-date {
        font-size: 11px;
        color: var(--descrip-text, #999);
        white-space: nowrap;
        margin-left: 12px;
    }

    .comfygit-panel-footer {
        padding: 16px 20px;
        border-top: 1px solid var(--border-color, #4a4a4a);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .comfygit-loading {
        text-align: center;
        padding: 20px;
        color: var(--descrip-text, #999);
    }

    .comfygit-error {
        background: rgba(239, 68, 68, 0.1);
        border: 1px solid #ef4444;
        border-radius: 4px;
        padding: 12px;
        color: #fca5a5;
        font-size: 13px;
    }

    .comfygit-success {
        background: rgba(34, 197, 94, 0.1);
        border: 1px solid #22c55e;
        border-radius: 4px;
        padding: 12px;
        color: #86efac;
        font-size: 13px;
    }

    .comfygit-toolbar-btn {
        background: #3b82f6 !important;
        color: white !important;
        border: none !important;
    }

    .comfygit-toolbar-btn:hover {
        background: #2563eb !important;
    }

    .comfygit-refresh-btn {
        background: transparent;
        border: none;
        color: var(--input-text, #ddd);
        cursor: pointer;
        padding: 4px;
        border-radius: 4px;
        font-size: 16px;
    }

    .comfygit-refresh-btn:hover {
        background: var(--comfy-input-bg, #222);
    }

    .comfygit-refresh-btn.spinning {
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(styles);

// API functions
async function fetchStatus() {
    const response = await api.fetchApi("/v2/comfygit/status");
    if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Failed to fetch status");
    }
    return response.json();
}

async function fetchHistory(limit = 10) {
    const response = await api.fetchApi(`/v2/comfygit/log?limit=${limit}`);
    if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Failed to fetch history");
    }
    return response.json();
}

async function doCommit(message) {
    const response = await api.fetchApi("/v2/comfygit/commit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
    });
    return response.json();
}

async function doExport() {
    const response = await api.fetchApi("/v2/comfygit/export", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({})
    });
    return response.json();
}

// UI rendering
function renderPanel() {
    const hasChanges = currentStatus && (
        currentStatus.workflows.new.length > 0 ||
        currentStatus.workflows.modified.length > 0 ||
        currentStatus.workflows.deleted.length > 0 ||
        currentStatus.has_changes
    );

    return `
        <div class="comfygit-panel-header">
            <div>
                <h2 class="comfygit-panel-title">ComfyGit Control Panel</h2>
                <div class="comfygit-panel-subtitle">
                    ${currentStatus ? `${currentStatus.environment} (${currentStatus.branch || 'detached'})` : 'Loading...'}
                </div>
            </div>
            <div style="display: flex; gap: 8px; align-items: center;">
                <button class="comfygit-refresh-btn" onclick="window.comfyGitPanel.refresh()" title="Refresh">
                    ↻
                </button>
                <button class="comfygit-panel-close" onclick="window.comfyGitPanel.close()">×</button>
            </div>
        </div>
        <div class="comfygit-panel-content">
            ${currentStatus ? renderStatus() : '<div class="comfygit-loading">Loading status...</div>'}
            ${currentStatus ? renderCommitSection(hasChanges) : ''}
            ${commits.length > 0 ? renderHistory() : ''}
        </div>
        <div class="comfygit-panel-footer">
            <button class="comfygit-btn comfygit-btn-secondary" onclick="window.comfyGitPanel.export()">
                Export Environment
            </button>
        </div>
    `;
}

function renderStatus() {
    const wf = currentStatus.workflows;
    const hasWfChanges = wf.new.length > 0 || wf.modified.length > 0 || wf.deleted.length > 0;

    return `
        <div class="comfygit-section">
            <h3 class="comfygit-section-title">Status</h3>
            <div class="comfygit-card">
                <div class="comfygit-status-grid">
                    <div>
                        <div class="comfygit-status-item">
                            <span class="comfygit-status-count comfygit-status-new">${wf.new.length}</span>
                            <span>new workflows</span>
                        </div>
                        <div class="comfygit-status-item">
                            <span class="comfygit-status-count comfygit-status-modified">${wf.modified.length}</span>
                            <span>modified</span>
                        </div>
                        <div class="comfygit-status-item">
                            <span class="comfygit-status-count comfygit-status-deleted">${wf.deleted.length}</span>
                            <span>deleted</span>
                        </div>
                        <div class="comfygit-status-item">
                            <span class="comfygit-status-count comfygit-status-synced">${wf.synced.length}</span>
                            <span>synced</span>
                        </div>
                    </div>
                    <div>
                        ${currentStatus.has_changes ? `
                            <div class="comfygit-status-item comfygit-status-warn">
                                ⚠ Uncommitted changes
                            </div>
                        ` : `
                            <div class="comfygit-status-item comfygit-status-ok">
                                ✓ All changes committed
                            </div>
                        `}
                        ${currentStatus.missing_models_count > 0 ? `
                            <div class="comfygit-status-item comfygit-status-warn">
                                ⚠ ${currentStatus.missing_models_count} missing model(s)
                            </div>
                        ` : ''}
                        ${!currentStatus.comparison.is_synced ? `
                            <div class="comfygit-status-item comfygit-status-warn">
                                ⚠ Environment not synced
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderCommitSection(hasChanges) {
    return `
        <div class="comfygit-section">
            <h3 class="comfygit-section-title">Commit</h3>
            <div class="comfygit-card">
                <div class="comfygit-commit-form">
                    <input
                        type="text"
                        class="comfygit-input"
                        id="comfygit-commit-message"
                        placeholder="${hasChanges ? 'Enter commit message...' : 'No changes to commit'}"
                        ${!hasChanges ? 'disabled' : ''}
                    >
                    <button
                        class="comfygit-btn comfygit-btn-primary"
                        onclick="window.comfyGitPanel.commit()"
                        ${!hasChanges ? 'disabled' : ''}
                    >
                        Commit
                    </button>
                    <div id="comfygit-commit-result"></div>
                </div>
            </div>
        </div>
    `;
}

function renderHistory() {
    return `
        <div class="comfygit-section">
            <h3 class="comfygit-section-title">History</h3>
            <div class="comfygit-card">
                <div class="comfygit-commit-list">
                    ${commits.map(c => `
                        <div class="comfygit-commit-item">
                            <span class="comfygit-commit-hash">${c.short_hash || c.hash?.slice(0, 7) || '?'}</span>
                            <span class="comfygit-commit-message">${escapeHtml(c.message || '')}</span>
                            <span class="comfygit-commit-date">${c.date_relative || c.relative_date || ''}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Panel actions
window.comfyGitPanel = {
    async show() {
        if (panelDialog) {
            panelDialog.remove();
        }

        panelDialog = document.createElement("div");
        panelDialog.className = "comfygit-panel-overlay";
        panelDialog.innerHTML = `<div class="comfygit-panel">${renderPanel()}</div>`;

        // Close on overlay click
        panelDialog.addEventListener("click", (e) => {
            if (e.target === panelDialog) {
                this.close();
            }
        });

        // Close on Escape
        const escHandler = (e) => {
            if (e.key === "Escape") {
                this.close();
                document.removeEventListener("keydown", escHandler);
            }
        };
        document.addEventListener("keydown", escHandler);

        document.body.appendChild(panelDialog);

        // Load data
        await this.refresh();
    },

    close() {
        if (panelDialog) {
            panelDialog.remove();
            panelDialog = null;
        }
    },

    async refresh() {
        const refreshBtn = document.querySelector('.comfygit-refresh-btn');
        if (refreshBtn) refreshBtn.classList.add('spinning');

        try {
            const [status, history] = await Promise.all([
                fetchStatus(),
                fetchHistory()
            ]);
            currentStatus = status;
            commits = history.commits || [];

            if (panelDialog) {
                const panel = panelDialog.querySelector('.comfygit-panel');
                panel.innerHTML = renderPanel();
            }
        } catch (error) {
            console.error("[ComfyGit Panel] Refresh error:", error);
            currentStatus = null;
            commits = [];
            if (panelDialog) {
                const panel = panelDialog.querySelector('.comfygit-panel');
                panel.innerHTML = `
                    <div class="comfygit-panel-header">
                        <h2 class="comfygit-panel-title">ComfyGit Control Panel</h2>
                        <button class="comfygit-panel-close" onclick="window.comfyGitPanel.close()">×</button>
                    </div>
                    <div class="comfygit-panel-content">
                        <div class="comfygit-error">
                            Error loading status: ${escapeHtml(error.message)}
                        </div>
                    </div>
                `;
            }
        }
    },

    async commit() {
        const input = document.getElementById('comfygit-commit-message');
        const resultDiv = document.getElementById('comfygit-commit-result');
        const message = input?.value?.trim();

        if (!message) {
            resultDiv.innerHTML = '<div class="comfygit-error">Please enter a commit message</div>';
            return;
        }

        try {
            const result = await doCommit(message);

            if (result.status === 'success') {
                resultDiv.innerHTML = `
                    <div class="comfygit-success">
                        Committed: ${result.summary.new} new, ${result.summary.modified} modified, ${result.summary.deleted} deleted
                    </div>
                `;
                input.value = '';
                // Refresh after commit
                setTimeout(() => this.refresh(), 1000);
            } else if (result.status === 'no_changes') {
                resultDiv.innerHTML = '<div class="comfygit-error">No changes to commit</div>';
            } else {
                resultDiv.innerHTML = `<div class="comfygit-error">${escapeHtml(result.message || 'Commit failed')}</div>`;
            }
        } catch (error) {
            resultDiv.innerHTML = `<div class="comfygit-error">Error: ${escapeHtml(error.message)}</div>`;
        }
    },

    async export() {
        try {
            const result = await doExport();

            if (result.status === 'success') {
                alert(`Export successful!\n\nSaved to: ${result.path}\n\nModels without sources: ${result.models_without_sources}`);
            } else {
                alert(`Export failed: ${result.message}`);
            }
        } catch (error) {
            alert(`Export error: ${error.message}`);
        }
    }
};

// Register extension
app.registerExtension({
    name: "Comfy.ComfyGitPanel",

    async setup() {
        // Add ComfyGit button to the top menu bar (blue button)
        const panelButton = document.createElement("button");
        panelButton.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-toolbar-btn";
        panelButton.textContent = "ComfyGit";
        panelButton.title = "ComfyGit Control Panel";

        panelButton.onclick = () => {
            window.comfyGitPanel.show();
        };

        // Insert before the Manager button (or settings if Manager not found)
        if (app.menu?.settingsGroup?.element) {
            app.menu.settingsGroup.element.before(panelButton);
            console.log("[ComfyGit] Control Panel button added to toolbar");
        }
    }
});
