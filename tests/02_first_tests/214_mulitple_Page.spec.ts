import { chromium }from "playwright";

async function multiple_page(){
     const browser = await chromium.launch({headless:true});
     const context = await browser.newContext();

     //newPage
    const page1 = await context.newPage();
    await page1.goto("https://app.vwo.com/#login");
    console.log("page1 is loaded");

    const page2= await context.newPage();
    await page2.goto("https://app.vwo.com/#dashboard");
    console.log("page2 is loaded");
     
    await context.close();
    await browser.close();

}
multiple_page();

