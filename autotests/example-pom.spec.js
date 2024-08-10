import * as Constants from "../autotests/support/constants";
import { test } from "@playwright/test";

import HomePage from "./support/pages/home.page";
import LoginPage from "./support/pages/login.page";
import SideBarPage from "./support/sections/sidebar.section";

test("Login with invalid credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.visit();
  await loginPage.clickLoginBtn();
  await loginPage.checkErrorMessage(Constants.USER_REQUIRED_MSG);
  await loginPage.fillUserNameField("tests");
  await loginPage.clickLoginBtn();
  await loginPage.checkErrorMessage(Constants.USER_PASS_REQUIRED_MSG);
});

test("Login with valid credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  await loginPage.visit();
  await loginPage.checkLogo();
  await loginPage.fillUserNameField(Constants.USER_NAME);
  await loginPage.fillUserPassField(Constants.USER_PASS);
  await loginPage.clickLoginBtn();
  await homePage.checkLogoutSuccessful();
});

test("Check Add item to bucket", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const sideBar = new SideBarPage(page);

  await loginPage.visit();
  await loginPage.checkLogo();
  await loginPage.fillUserNameField(Constants.USER_NAME);
  await loginPage.fillUserPassField(Constants.USER_PASS);
  await loginPage.clickLoginBtn();
  await homePage.checkLogoutSuccessful();
  await homePage.clickMenuBtn();
  await sideBar.clickCloseSideBarBtn();
  await sideBar.checkMenuItems();
  await homePage.checkPageItemCount(Constants.ITEM_SELECTOR, 6);
});
