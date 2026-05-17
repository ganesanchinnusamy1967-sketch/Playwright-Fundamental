import { test , expect } from '@playwright/test';

test ('Verify the hovers', async ({page})=>{
     await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');

    await page.getByTestId('nav-add-ons').hover();

    //await page.getByText('Add-ons', { exact: true }).hover();
    //await expect(page.getByTestId('test-id-Wifi')).toBeVisible();
    await page.getByTestId('test-id-Wifi').click();
    const output = await page.locator('#output').innerText();
    expect(output).toContain('Wi-Fi');
    //await expect(page.getByTestId('hover-output')).innerText();
});
//     await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');
    
//     await page.getByText('Add-ons',{exact : true }).hover();
//     //await page.getByText('Wi-Fi', { exact: true }).click();
//     await page.getByTestId('test-id-Wifi').click();
//     await expect(page.getByTestId('hover-output')).toBeVisible();

// await expect(
//         page.locator('[data-testid="nav-add-ons"] .submenu-item')
//     ).toBeVisible();

//     const addons = await page
//         .locator('[data-testid="nav-add-ons"] .submenu-item')
//         .allTextContents();

//     console.log(addons);
    
// });