# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 05_Allure_reporting\Login.spec.ts >> Verify that the login works
- Location: tests\05_Allure_reporting\Login.spec.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://app.vwo.com/#login", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - main "Setup content" [ref=e3]
  - main "Application main content" [ref=e6]:
    - generic [ref=e10]:
      - generic [ref=e13]:
        - img "VWO" [ref=e15]
        - paragraph [ref=e16]: Sign in to VWO platform
        - list [ref=e19]:
          - listitem [ref=e20]:
            - generic [ref=e21] [cursor=pointer]: Email address
            - textbox "Email address" [active] [ref=e23]:
              - /placeholder: Enter email ID
          - listitem [ref=e24]:
            - generic [ref=e25] [cursor=pointer]: Password
            - generic [ref=e26]:
              - textbox "Password" [ref=e27]:
                - /placeholder: Enter password
              - button "Toggle password visibility" [ref=e28] [cursor=pointer]
          - listitem [ref=e29]:
            - button "Forgot Password?" [ref=e30] [cursor=pointer]
          - listitem [ref=e31]:
            - generic [ref=e34] [cursor=pointer]: Remember me
          - listitem [ref=e35]:
            - button "Sign in" [ref=e36] [cursor=pointer]:
              - generic [ref=e37]: Sign in
          - listitem [ref=e38]:
            - heading "Or" [level=6] [ref=e40]
          - listitem [ref=e42]:
            - button "Sign in with Google" [ref=e44] [cursor=pointer]:
              - generic [ref=e47]: Sign in with Google
          - listitem [ref=e49]:
            - button "Sign in using SSO" [ref=e50] [cursor=pointer]:
              - generic [ref=e51]: Sign in using SSO
          - listitem [ref=e52]:
            - button "Sign in with Passkey" [ref=e53] [cursor=pointer]:
              - generic [ref=e54]: Sign in with Passkey
          - listitem [ref=e55]:
            - text: Don't have an account?
            - link "Start a free trial" [ref=e56] [cursor=pointer]:
              - /url: https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage
          - listitem [ref=e57]:
            - text: By continuing, you agree to VWO's
            - link "Privacy policy" [ref=e58] [cursor=pointer]:
              - /url: https://vwo.com/privacy-policy/?utm_medium=app&utm_source=login-page&utm_campaign=legal_privacy_login
            - text: "&"
            - link "Terms" [ref=e59] [cursor=pointer]:
              - /url: https://vwo.com/terms/?utm_medium=website&utm_source=login-page&utm_campaign=legal_terms_login
            - text: .
      - generic [ref=e63]:
        - img "Vwo abtasty logo" [ref=e64]
        - generic [ref=e65]:
          - heading "have joined forces to redefine the future of" [level=4] [ref=e66]
          - heading "Digital Experience Optimization" [level=4] [ref=e67]
        - img "Vwo Abtasty Shakehands" [ref=e68]
        - heading "Rest assured, your day-to-day workflow, support team, and account contacts remain exactly the same. We are growing to serve you better." [level=5] [ref=e69]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | //import * as allure from "allure-js-commons";
  3  | import * as allure from "allure-js-commons";
  4  | 
  5  | test('Verify that the login works', async ({ page }) => {
  6  | 
  7  |     await allure.epic("VWO Login Tests");
  8  |     await allure.description("Verify that the login is page works")
  9  |     await allure.feature("Essential features");
  10 |     await allure.story("Authentication");
  11 | 
  12 | 
> 13 |     await page.goto("https://app.vwo.com/#login");
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  14 |     await page.waitForTimeout(2000);
  15 | 
  16 |     await page.fill("#login-username", "opg73@singleuseemail.site");
  17 |     await page.fill("#login-password", "Wingify@4321");
  18 |     await page.waitForTimeout(1500);
  19 | 
  20 |     await page.click("#js-login-btn");
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