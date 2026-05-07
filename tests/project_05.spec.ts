import{ test , expect }from '@playwright/test';
test('verify the tta test' ,async({page})=>{
    await page.goto('https://tta-bank-digital-973242068062.us-west1.run.app/',{waitUntil:"networkidle"});
    await page.getByRole("button", { name: 'Sign Up'}).click();
    await page.getByRole("textbox", { name: 'John Doe'}).fill('Sangi');
    await page.getByRole("textbox", { name: 'you@example.com'}).fill('sangi@example.com');
    await page.locator("input[type='password']").fill("Sangi@12345");
    await page.getByRole("button",{ name: 'Create Account'}).click();

    //transfer funds
    await page.getByText("Transfer Funds").click();
    await page.getByPlaceholder("0.00").fill('5000');
    await page.getByPlaceholder("e.g. Rent for October").fill('Rent');
    await page.getByText("Continue").click();

    //Confirm Transfer
    await page.getByRole("button" , { name: 'Confirm Transfer' }).click();

    //back t dashboard
    await page.getByText("Dashboard").click();
    await expect(page.locator(".mt-2 text-3xl font-bold")).toBeVisible();
   // await expect(display).toHaveText("$45,000.00");  //await expect(page.getByText("$45,000.00")).toBeVisible({ timeout: 5000});
    await expect(page.locator(".mt-2 text-3xl font-bold")).toHaveText("$45,000.00");
});