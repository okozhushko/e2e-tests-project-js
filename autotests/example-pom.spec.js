import * as Constants from "../autotests/support/constants";
const { test } = require("@playwright/test");

import HomePage from "./support/pages/home.page";
import LoginPage from "./support/pages/login.page";

test("Login to user page", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  await loginPage.visit();
  await loginPage.checkLogo();
  await loginPage.fillUserLoginField("standard_user", "secret_sauce");
  await loginPage.clickLoginBtn();
  await homePage.clickMenuBtn();
  await homePage.checkAndClickButton(Constants.RESET_APP_BTN,Constants.RESET_APP_BTN_TEXT);
  //checkLogoutSeccessfull
});
