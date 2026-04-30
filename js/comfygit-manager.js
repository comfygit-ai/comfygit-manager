/**
 * ComfyGit Manager Button compatibility fallback
 *
 * Older ComfyUI installs may need an explicit toolbar shortcut to open
 * ComfyUI-Manager. Newer ComfyUI builds expose their own extension entrypoints,
 * and installs without ComfyUI-Manager show an upgrade-required modal when this
 * command is invoked. Gate the fallback on live capabilities instead of adding
 * one unconditionally.
 */

import { app } from "../../scripts/app.js";

const FALLBACK_CLASS = "comfygit-manager-btn";

function getComfyApi() {
    return app.api || window.app?.api || window.comfyAPI?.api?.api || null;
}

app.registerExtension({
    name: "Comfy.ComfyGitManager",

    async setup() {
        let observer = null;
        let setupStatus = null;

        async function refreshSetupStatus() {
            try {
                const response = await getComfyApi()?.fetchApi?.("/v2/setup/status");
                if (response?.ok) {
                    setupStatus = await response.json();
                }
            } catch {
                setupStatus = null;
            }
        }

        function existingFallbackButtons() {
            return Array.from(document.querySelectorAll(`.${FALLBACK_CLASS}`));
        }

        function removeFallbackButtons() {
            existingFallbackButtons().forEach((button) => button.remove());
        }

        function hasBuiltInManagerEntrypoint() {
            const buttons = document.querySelectorAll("button, [role='button']");
            for (const btn of buttons) {
                if (btn.classList?.contains(FALLBACK_CLASS)) {
                    continue;
                }

                const text = btn.textContent?.trim();
                const title = btn.getAttribute?.("title")?.trim();
                const ariaLabel = btn.getAttribute?.("aria-label")?.trim();
                if (
                    text === "Extensions" ||
                    title === "Extensions" ||
                    ariaLabel === "Extensions" ||
                    text === "Manager" ||
                    title === "Manager" ||
                    ariaLabel === "Manager" ||
                    text === "Manage extensions" ||
                    title === "Manage extensions" ||
                    ariaLabel === "Manage extensions"
                ) {
                    return true;
                }
            }
            return false;
        }

        function shouldShowFallback() {
            const shouldProvideEntry =
                setupStatus?.has_comfyui_manager === true ||
                setupStatus?.state === "managed";
            return shouldProvideEntry && !hasBuiltInManagerEntrypoint();
        }

        async function openManager() {
            const commands = [
                "Comfy.OpenManagerDialog",
                "Comfy.Manager.CustomNodesManager.ShowCustomNodesMenu",
            ];

            for (const command of commands) {
                try {
                    await app.extensionManager?.command?.execute?.(command);
                    return;
                } catch {
                    // Try the next known manager command.
                }
            }

            window.dispatchEvent(new CustomEvent("comfygit:open-panel", {
                detail: { initialView: "nodes" },
            }));
        }

        function createManagerButton() {
            const managerButton = document.createElement("button");
            managerButton.className = `comfyui-button comfyui-menu-mobile-collapse primary ${FALLBACK_CLASS}`;
            managerButton.textContent = "Manager";
            managerButton.title = "Manage custom nodes";
            managerButton.onclick = openManager;
            return managerButton;
        }

        function syncManagerButton() {
            const buttons = existingFallbackButtons();
            const [existingButton, ...duplicates] = buttons;
            duplicates.forEach((button) => button.remove());

            if (!shouldShowFallback()) {
                if (existingButton) {
                    existingButton.remove();
                    console.log("[ComfyGit] Removed Manager fallback button");
                }
                return;
            }

            if (!existingButton && app.menu?.settingsGroup?.element) {
                app.menu.settingsGroup.element.before(createManagerButton());
                console.log("[ComfyGit] Manager fallback button added to toolbar");
            }
        }

        function ensureObserver() {
            if (observer || !document.body) return;
            observer = new MutationObserver(() => {
                syncManagerButton();
            });
            observer.observe(document.body, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ["title", "aria-label", "class"],
            });
        }

        const styles = document.createElement("style");
        styles.textContent = `
            .${FALLBACK_CLASS} {
                height: 32px;
                padding: 0 12px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                order: 0;
            }
        `;
        document.head.appendChild(styles);

        removeFallbackButtons();
        await refreshSetupStatus();
        syncManagerButton();
        setTimeout(syncManagerButton, 100);
        setTimeout(syncManagerButton, 500);
        setTimeout(syncManagerButton, 1500);
        ensureObserver();
    }
});
