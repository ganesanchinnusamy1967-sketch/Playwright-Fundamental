import { chromium } from "playwright";

async function multiple_context(){
    const browser = await chromium.launch({headless:true});
    const context= await browser.newContext();


    //AdminUser
    const adminContext = await browser.newContext();
    const adminPage =  await adminContext.newPage();
    await adminPage.goto("https://app.vwo.com/#login");
    console.log("Admin:User logged in")

    //viewerContext

    const viewerContext = await browser.newContext();
    const viewerPage = await viewerContext.newPage();
    await viewerPage.goto("https://app.vwo.com/#dashboard");
    console.log("Dashboard:logged on");

    await adminContext.close();
    await viewerContext.close();
    await browser.close();



}
multiple_context();