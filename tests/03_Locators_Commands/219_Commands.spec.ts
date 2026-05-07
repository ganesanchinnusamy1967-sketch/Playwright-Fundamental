import { test , expect }from '@playwright/test';
test('Verify the commit test',async({page})=>{
    await page.goto("https://app.vwo.com" , { waitUntil:"commit"});
    console.log("Commit:Server responded");
    // Wait for HTML to be parsed
    await page.goto("https://app.vwo.com" , { waitUntil: "domcontentloaded"});
    console.log("documentloaded:HTML parsed");
    // DEFAULT — wait for everything (images, CSS, scripts)
    await page.goto("https://app.vwo.com" , { waitUntil:"load"});
    console.log("load:all resources are loaded");  
    // SLOWEST — wait for all network activity to stop
    await page.goto("https://app.vwo.com" , { waitUntil: "networkidle"});
    console.log("networkidle:no requests for 500ms");




})
