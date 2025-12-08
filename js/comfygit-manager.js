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
        // Add Manager button to the top menu bar
        const managerButton = document.createElement("button");
        managerButton.className = "comfyui-button comfyui-menu-mobile-collapse primary comfygit-manager-btn";
        managerButton.textContent = "Manager";
        managerButton.title = "ComfyGit Manager";

        managerButton.onclick = () => {
            // Execute the built-in command to open Manager dialog
            app.extensionManager.command.execute('Comfy.OpenManagerDialog');
        };

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

        // Insert before settings button in the menu bar
        if (app.menu?.settingsGroup?.element) {
            app.menu.settingsGroup.element.before(managerButton);
            console.log("[ComfyGit] Manager button added to toolbar");
        }
    }
});
