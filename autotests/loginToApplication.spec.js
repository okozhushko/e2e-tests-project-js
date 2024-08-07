import { test, expect } from '@playwright/test';
const LoginPage = require('../pages/loginPage');
const HomePage = require('../pages/homePage')

test('has title', async ({ page }) => {
    
    await page.goto('https://www.saucedemo.com/');
    const loginPage = new LoginPage(page);

    await loginPage.loginToApplication();

    const homePage = new HomePage

    await homePage.logOutBtn

    });
