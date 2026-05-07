import{test,expect}from '@playwright/test';

test("verify the error message",async({page})=>{

    await page.goto('https://app.vwo.com');
    await page.fill("#login-username");
    await page.fill("#login-password");
    await page.click("button.login-button");


});