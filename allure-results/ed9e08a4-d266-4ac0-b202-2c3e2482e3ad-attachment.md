# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 05_Allure_reporting\Login.spec.ts >> Verify that the login works
- Location: tests\05_Allure_reporting\Login.spec.ts:5:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('#js-login-btn')
    - locator resolved to <button type="submit" id="js-login-btn" data-qa="sibequkica" onclick="login.login(event)" class="btn btn--primary btn--inverted W(100%) Mb(24px) Mb(0):lc">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | //import * as allure from "allure-js-commons";
  3  | import * as allure from "allure-js-commons";
  4  | 
  5  | test('Verify that the login works', { timeout: 60000 }, async ({ page }) => {
  6  | 
  7  |     await allure.epic("VWO Login Tests");
  8  |     await allure.description("Verify that the login is page works")
  9  |     await allure.feature("Essential features");
  10 |     await allure.story("Authentication");
  11 | 
  12 | 
  13 |     await page.goto('https://app.vwo.com/#login', { timeout: 60000 });
  14 |     await page.waitForTimeout(2000);
  15 | 
  16 |     await page.fill("#login-username", "opg73@singleuseemail.site");
  17 |     await page.fill("#login-password", "Wingify@4321");
  18 |     await page.waitForTimeout(1500);
  19 | 
> 20 |     await page.click("#js-login-btn");
     |                ^ Error: page.click: Test timeout of 60000ms exceeded.
  21 | 
  22 |     // Wait for login to actually complete before snapshotting storage —
  23 |     // otherwise the auth cookie isn't set yet and the saved state is empty.
  24 |     await page.waitForURL(/#\/(dashboard|home)/, { timeout: 15000 });
  25 |     await page.waitForTimeout(3000);
  26 |     await expect(page).toHaveTitle("Dashboard");
  27 | 
  28 | 
  29 | });
```