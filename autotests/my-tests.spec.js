// import { test, expect } from '@playwright/test';
// const URL = 'https://www.saucedemo.com/v1/';
// const userCred  = { 
//     userLogin:'standard_user', 
//     userPass:'secret_sauce'
// };

// test('Test check uder login', async ({ page }) => {
// //Open page url
//   await page.goto(URL);
// //Fill user credential filds  
//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="username"]').fill(userCred.userLogin);
//   await page.locator('[data-test="password"]').click();
//   await page.locator('[data-test="password"]').fill(userCred.userPass);
// //Click login button
//   await page.getByRole('button', { name: 'LOGIN' }).click();
// //Web-site actionss
//   await page.locator('#header_container div').nth(1).click();
//   await page.getByRole('button', { name: 'Open Menu' }).click();
// //Check in logaut element
//   await expect(page.locator('.logon logo')).toBeVisible();
// });

// test('Test check add item to card', async ({ page }) => {
//     //Open page url
//     await page.goto(URL);
//     //Fill user credential filds  
//     await page.locator('[data-test="username"]').click();
//     await page.locator('[data-test="username"]').fill(userCred.standard_user);
//     await page.locator('[data-test="password"]').click();
//     await page.locator('[data-test="password"]').fill(userCred.secret_sauce);
//     //Click login button
//     await page.getByRole('button', { name: 'LOGIN' }).click();
//     //Web-site actions
//     await page.locator('div:nth-child(3) > .pricebar > .btn_primary').click();
//     //Check item name
//     await page.getByRole('link', { name: 'Sauce Labs Bolt T-Shirt' }).click();
//     //Check item price
//     await page.getByText('$15.99').toEqual('$15.99');
//     await page.getByText('$15.99').click();
//     //Check bucket ites count
//     await page.getByRole('link', { name: '1' }).click();
//   });