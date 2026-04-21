/**
 * ComfyGit Manager Button - Adds the "Manager" button to the ComfyUI toolbar
 *
 * IMPORTANT: This file is NOT obsolete and is separate from comfygit-panel.js!
 * - comfygit-panel.js = The ComfyGit panel UI (Vue app, ~700KB)
 * - comfygit-manager.js = This file - injects the Manager button into the toolbar
 *
 * This extension registers a toolbar button that opens the built-in ComfyUI
 * Manager dialog (Comfy.OpenManagerDialog command).
 */

import { app } from "../../scripts/app.js";

app.registerExtension({
    name: "Comfy.ComfyGitManager",

    async setup() {
        let observer = null;

        function hasBuiltInExtensionsButton() {
            const buttons = document.querySelectorAll("button, [role='button']");
            for (const btn of buttons) {
                const text = btn.textContent?.trim();
                const title = btn.getAttribute?.("title")?.trim();
                const ariaLabel = btn.getAttribute?.("aria-label")?.trim();
                if (text === "Extensions" || title === "Extensions" || ariaLabel === "Extensions") {
                    return true;
                }
            }
            return false;
        }

        function createManagerButton() {
            const managerButton = document.createElement("button");
            managerButton.className = "comfyui-button comfyui-menu-mobile-collapse primary comfygit-manager-btn";
            managerButton.textContent = "Manager";
            managerButton.title = "ComfyGit Manager";
            managerButton.onclick = () => {
                app.extensionManager.command.execute('Comfy.OpenManagerDialog');
            };
            return managerButton;
        }

        function syncManagerButton() {
            const existingButton = document.querySelector(".comfygit-manager-btn");
            const hasExtensionsButton = hasBuiltInExtensionsButton();

            // Newer ComfyUI builds already expose the built-in Extensions entrypoint.
            // In that case our fallback Manager button is redundant, so remove it.
            if (hasExtensionsButton) {
                if (existingButton) {
                    existingButton.remove();
                    console.log("[ComfyGit] Removed fallback Manager button (built-in Extensions button present)");
                }
                return;
            }

            // Older installs may still need the explicit Manager shortcut.
            if (!existingButton && app.menu?.settingsGroup?.element) {
                const managerButton = createManagerButton();
                app.menu.settingsGroup.element.before(managerButton);
                console.log("[ComfyGit] Manager button added to toolbar");
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

        // Inject button styles
        const styles = document.createElement('style');
        styles.textContent = `
            .comfygit-manager-btn {
                height: 32px;
                padding: 0 12px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                order: 0;
            }
        `;
        document.head.appendChild(styles);

        syncManagerButton();
        setTimeout(syncManagerButton, 100);
        setTimeout(syncManagerButton, 500);
        setTimeout(syncManagerButton, 1500);
        ensureObserver();
    }
});
