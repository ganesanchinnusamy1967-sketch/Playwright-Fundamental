import { test , expect } from '@playwright/test';

test('Verify the svg of flipkart', async ({page})=>{
   await page.goto("https://www.flipkart.com/search");
   await page.getByPlaceholder('Search for products, brands and more').fill('macmini');
   await page.locator('svg').first().click();
   await page.getByText('Price -- Low to High').click();
   await expect(page.getByText('₹72,990')).toBeVisible();

   await page.waitForTimeout(1500);
});