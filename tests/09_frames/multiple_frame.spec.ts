import { test, expect , FrameLocator, Locator} from '@playwright/test';

test('Verify the muliple frame elements' , async({page})=>{
    await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');
   //main 
    const mainframe:FrameLocator = page.frameLocator("frame[name='main']");
    const headertext =await mainframe.locator('h2').innerText();
    console.log(headertext);
   //side 
    const sideframe:FrameLocator = page.frameLocator("frame[name='side']");
    await sideframe.getByTestId("side-link-overview").click();
    await sideframe.getByTestId("side-link-registration").click();
    await page.waitForTimeout(1500);
   //side
    await sideframe.getByTestId("side-link-footer").click();
   //footer
    const footerframe:FrameLocator = page.frameLocator("frame[name='footer']");
    const footertext = await footerframe.getByText("The Testing Academy").isVisible();
    console.log(footertext);

    // total number of <frame> elements on the page
    const allframes:Locator[] = await page.locator('//frame').all();
    console.log("length of frames:"+allframes.length);
    for (const frames of allframes){
        console.log(await frames.getAttribute('name') ,":",await frames.getAttribute('src'));
    }

    await page.waitForTimeout(1500);
    


})