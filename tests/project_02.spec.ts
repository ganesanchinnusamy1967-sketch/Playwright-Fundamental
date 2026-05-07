import { test, expect } from '@playwright/test';

test('verify Playwright first test', async ({ page }) => {
    await page.goto('https://katalon-demo-cura.herokuapp.com/');
    await page.fill('#txt-username', 'John Doe');
    await page.fill('#txt-password', 'ThisIsNotAPassword');
    await page.click('button#btn-login');
    await expect(page).toHaveTitle('CURA Healthcare Service');
    await expect(page).toHaveURL('https://katalon-demo-cura.herokuapp.com/#appointment');
});
//'https://katalon-demo-cura.herokuapp.com/profile.php#login