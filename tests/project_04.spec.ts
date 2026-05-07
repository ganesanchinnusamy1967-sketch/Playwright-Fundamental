import { test, expect } from '@playwright/test';

test('Verify error msg', async ({ page }) => {
    await page.goto('https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage', { waitUntil: 'networkidle' });
    await page.getByRole('textbox', { name: 'email' }).fill('sange@gmail.com');
    await page.getByRole('checkbox', { name: 'I agree to VWO\'s Privacy' }).check();
    await page.getByRole('button', { name: 'Create a Free Trial Account' }).click();
    const errmsg =  page.getByText("gmail.com doesn't look like a business domain. Please use your business email.");
    await expect(errmsg).toBeVisible({ timeout: 1000 });
    await expect(errmsg).toContainText("gmail.com doesn't look like a business domain. Please use your business email.");
});
