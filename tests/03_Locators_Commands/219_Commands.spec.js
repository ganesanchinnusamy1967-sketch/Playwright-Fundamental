"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('Verify the commit test', async ({ page }) => {
    await page.goto("https://app.vwo.com", { waitUntil: "ommit" });
    console.log("Commit:Server responded");
    // Wait for HTML to be parsed
    await page.goto("https://app.vwo.com", { waitUntil: "domcontentloaded" });
    console.log("documentloaded:HTML parsed");
    // DEFAULT — wait for everything (images, CSS, scripts)
    await page.goto("https://app.vwo.com", { waitUntil: "load" });
    console.log("load:all resources are loaded");
    // SLOWEST — wait for all network activity to stop
    await page.goto("https://app.vwo.com", { waitUntil: "networkidle" });
    console.log("networkidle:no requests for 500ms");
});
