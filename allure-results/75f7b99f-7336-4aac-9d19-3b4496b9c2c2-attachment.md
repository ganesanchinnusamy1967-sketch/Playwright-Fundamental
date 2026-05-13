# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 09_frames\iframe.spec.ts >> Verify using frames
- Location: tests\09_frames\iframe.spec.ts:2:5

# Error details

```
TimeoutError: locator.fill: Timeout 60000ms exceeded.
Call log:
  - waiting for locator('#frame-one').contentFrame().locator('#RESULT_TextField-1')

```

# Test source

```ts
  1  | import { test , expect, FrameLocator } from '@playwright/test';
  2  | test ('Verify using frames',async ({page})=>{
  3  |     const Vehicleform :FrameLocator = page.frameLocator("#frame-one");
> 4  |     await Vehicleform.locator("#RESULT_TextField-1").fill('HondaCity');
     |                                                      ^ TimeoutError: locator.fill: Timeout 60000ms exceeded.
  5  |     await Vehicleform.locator("#RESULT_TextField-2").fill("Sangeetha Ganesan");
  6  |     await Vehicleform.locator("#RESULT_TextField-3").fill("TN28-2019");
  7  |     await Vehicleform.locator("#RESULT_RadioButton-1").selectOption("Two-Wheeler");
  8  | 
  9  |     await Vehicleform.locator("#RESULT_TextField-4").fill("2026");
  10 |     await Vehicleform.getByPlaceholder("Any notes about the registration").fill("Happy  ride");
  11 | 
  12 |     await Vehicleform.getByText("Submit registration").click();
  13 |     await Vehicleform.locator("vehicle-output").allInnerTexts();
  14 | 
  15 |     await Vehicleform.getByTestId("vehicle-reset").click();
  16 | 
  17 | 
  18 | });
```