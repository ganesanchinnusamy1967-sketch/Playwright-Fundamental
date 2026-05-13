import { test , expect , FrameLocator , Locator } from '@playwright/test';

test('Verify nested iframes' , async({page})=>{
    await page.goto('https://app.thetestingacademy.com/playwright/frames/nested-iframes');

    const frame1:FrameLocator = page.frameLocator("#pact1").first();
    const frame2:FrameLocator = frame1.frameLocator("#pact2");
    const frame3:FrameLocator = frame2.frameLocator("#pact3");

    await frame1.locator("#inp_val").fill("testing");
    await frame2.locator("#jex").fill("Selenium");
    await frame3.locator("#glaf").fill("playwright");

    console.log(await frame1.locator("h4").innerText());
    console.log(await frame3.locator("h4").innerText());

    await page.waitForTimeout(1500);
})