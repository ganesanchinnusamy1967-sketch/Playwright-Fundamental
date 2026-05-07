import { test, expect } from '@playwright/test';

test('verify basic url test', async ({ page }) => {
    await page.goto("https://app.vwo.com");
    await expect(page).toHaveTitle("Login - VWO");
});