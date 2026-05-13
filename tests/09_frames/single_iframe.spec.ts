import { test , expect, FrameLocator } from '@playwright/test';
test ('Verify using frames',async ({page})=>{
    await page.goto('https://app.thetestingacademy.com/playwright/frames/');
    const Vehicleform :FrameLocator = page.frameLocator("#frame-one");
    await Vehicleform.locator("#RESULT_TextField-1").fill('HondaCity');
    await Vehicleform.locator("#RESULT_TextField-2").fill("Sangeetha Ganesan");
    await Vehicleform.locator("#RESULT_TextField-3").fill("TN28-2019");
    await Vehicleform.locator("#RESULT_RadioButton-1").selectOption('SUV');

    await Vehicleform.locator("#RESULT_TextField-4").fill("2026");
    await Vehicleform.getByPlaceholder("Any notes about the registration").fill("Happy  ride");

    await Vehicleform.getByText("Submit registration").click();
    await Vehicleform.locator("vehicle-output").allInnerTexts();

    await Vehicleform.getByTestId("vehicle-reset").click();

    
  // page.frames() includes the main page frame too
    console.log(page.frames().length);

    await page.waitForTimeout(5000);


});