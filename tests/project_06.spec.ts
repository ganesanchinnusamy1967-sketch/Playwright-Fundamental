import { test, expect } from '@playwright/test';
test('fill the QA Profile form',async({page})=>{
    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice#page');
    await page.locator("#first-name").fill("Murugan");
    await page.locator("#last-name").fill("Kandhan");
    await page.getByTestId('gender-male').check();
    await page.waitForTimeout(1500);

    await page.getByTestId("years-experience").selectOption("7");
    await page.getByTestId("profile-date").fill("2016-05-11");
    await page.getByTestId("profession-automation").check();

    // Select the Profession as Automation Tester
    await page.getByRole('radio', { name: 'Automation Tester' }).check();

    await page.getByTestId("tool-uft").check();

    await page.getByTestId('continent-asia').check();
    await page.getByTestId('continent-europe').check();


    await page.getByTestId("tab-navigation").click();

    //await page.getByTestId("upload-image").setInputFiles("tests/test-data/sample.png");
    await page.getByTestId("profile-submit").click();



});