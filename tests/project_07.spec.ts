import { test , expect } from '@playwright/test';
test('Search and verify names' , async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/webtable");
    await page.locator("#employee-search").fill("kabir");
    await page.getByText('Select Cloud QA').click();
    const checkbox = page.locator('tr' ,{ hasText:"Kabir"}).first().locator('input[type="checkbox"]');
    //another way
    // Search the results and click on the checkbox for 'Kabir.Khan'
    //await page.locator("tr:has(td:text('Kabir.Khan'))").locator("td").first().click();
    
    // Validate the Selected Output has the text 'Kabir.Khan'
   // await expect(page.locator('#selected-output')).toHaveText('Kabir.Khan');

    await checkbox.check();
    await expect(checkbox).toBeChecked();
    await page.waitForTimeout(1500);
});