import { test , expect ,FrameLocator , Locator} from '@playwright/test';

test('verify the nested iframe', async ({page})=>{
    await page.goto('https://selectorshub.com/iframe-scenario/');
    const frame1:FrameLocator = page.frameLocator('#pact1').first();
    const frame2:FrameLocator = frame1.frameLocator('#pact2');
    const frame3:FrameLocator = frame2.frameLocator('#pact3');

    await frame1.getByPlaceholder('First Crush').fill("Murugan");
    await frame2.getByPlaceholder('Current Crush Name').fill("Pravin");
    await frame3.getByPlaceholder('Destiny').fill("playwright Automation");

    console.log(await frame1.locator('h3').innerText());
    await page.waitForTimeout(1500);
});