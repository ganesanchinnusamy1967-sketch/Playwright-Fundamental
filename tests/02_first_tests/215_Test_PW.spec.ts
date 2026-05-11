import { test , expect } from '@playwright/test';
test("verify the url" , async({page})=>{
    await page.goto("https://app.vwo.com/#login");
    await page.fill("#login-username","GanesaSa");
    await page.fill("#login-password" , "admin@123");
    await page.click("#-js-login-btn");
    await expect(page).toHaveURL("/#dashboard");
})
