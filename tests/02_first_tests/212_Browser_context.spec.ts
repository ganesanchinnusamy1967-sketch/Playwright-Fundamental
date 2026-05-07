import {chromium,Browser,BrowserContext,Page}from 'playwright';

async function run(){
    let browser:Browser = await chromium.launch({headless:false});
    console.log("Browser is launched",browser);

    let context:BrowserContext = await browser.newContext();
    console.log("context is launched",context);

    let page:Page = await context.newPage();
    console.log("Page is launched",page);

    await page.goto("https://app.vwo.com");
    console.log("Title:", await page.title());

    // Cleanup — reverse order
    await page.close();
    await context.close();
    await browser.close();


}