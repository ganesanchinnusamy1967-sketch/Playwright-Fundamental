
import { test, expect } from '@playwright/test';

test('verify invalid error message', async ({ page }) => {
  await page.goto( "https://app.vwo.com/#login" );
  await page.getByRole('textbox', { name: 'email' }).fill('test@example.com');
  await page.getByRole('textbox', { name: 'password' }).fill('admin@234');
  await page.getByRole('button', { name: 'Sign in' , exact: true }).click();

  const errorMsg = page.locator('#js-notification-box-msg');
  await expect(errorMsg).toBeVisible({ timeout: 5000 });
  await expect(errorMsg).toContainText("Your email, password, IP address or location did not match");
});



