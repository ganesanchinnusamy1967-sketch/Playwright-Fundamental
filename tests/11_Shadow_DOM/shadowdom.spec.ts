import { test, expect } from '@playwright/test';

const URL = 'https://app.thetestingacademy.com/playwright/widgets/shadow-dom';

test.describe('Verify the test for Shadow DOM', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('Verify Shadow DOM test', async ({ page }) => {

        await page.getByPlaceholder('you@example.com').fill('sangee@example.com');

        await page.getByTestId('card-account-password').fill('admin@123');

        await page.getByText('Submit').click();

        const output = await page.locator('#card-output').textContent();

        console.log(output);

        // Click decrement button
        await page.getByTestId('counter-cart-dec').click();

        // Click increment button
        await page.getByTestId('counter-cart-inc').click();

        // Validate counter is visible
        await expect(page.getByTestId('counter-value')) .toBeVisible();

    });

});