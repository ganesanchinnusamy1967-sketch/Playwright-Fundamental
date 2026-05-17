import { test , expect }from '@playwright/test';

const URL = "https://selectorshub.com/xpath-practice-page/"
test.describe('Verify the Shadw dom test' , ()=>{
     test.beforeEach(async ({ page }) => {
        // Navigate to URL
        await page.goto(URL);
    });

    test('Verify the fields', async({ page })=>{
       await page.locator("#kils").fill("Sangeetha");
       await page.locator("#pizza").fill("PizzaHut");
       //await page.locator("#training").fill("playwright");
       //await page.locator("#pwd").fill("admin@12");
       await page.getByPlaceholder('enter password').fill('password@123');

       await page.waitForTimeout(1500);
    

    });
});