/**
 * ComfyGit Manager - Frontend extension that adds the Manager button
 * Opens the built-in Manager UI when clicked
 */

import { app } from "../../scripts/app.js";

app.registerExtension({
    name: "Comfy.ComfyGitManager",

    async setup() {
        // Add Manager button to the top menu bar
        const managerButton = document.createElement("button");
        managerButton.className = "comfyui-button comfyui-menu-mobile-collapse primary";
        managerButton.textContent = "Manager";
        managerButton.title = "ComfyGit Manager";

        managerButton.onclick = () => {
            // Execute the built-in command to open Manager dialog
            app.extensionManager.command.execute('Comfy.OpenManagerDialog');
        };

        // Insert before settings button in the menu bar
        if (app.menu?.settingsGroup?.element) {
            app.menu.settingsGroup.element.before(managerButton);
            console.log("[ComfyGit] Manager button added to toolbar");
        }
    }
});
