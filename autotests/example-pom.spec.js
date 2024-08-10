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
  await loginPage.checkUserNameErrorIcon();
  await loginPage.checkUserPassErrorIcon();
  await loginPage.fillUserNameField(Constants.USER_NAME);
  await loginPage.clickLoginBtn();
  await loginPage.checkErrorMessage(Constants.USER_PASS_REQUIRED_MSG);
  await loginPage.fillUserNameField("jashdj");
  await loginPage.fillUserPassField("asdasd");
  await loginPage.clickLoginBtn();
  await loginPage.checkErrorMessage(Constants.INVALID_CREDENTIALS_MSG);
});

test("Login with valid credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  await loginPage.visit();
  await loginPage.checkLogo();
  await loginPage.fillUserNameField(Constants.USER_NAME);
  await loginPage.fillUserPassField(Constants.USER_PASS);
  await loginPage.clickLoginBtn();
  await homePage.checkPageTitle();
});

test("Check page elements", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  await loginPage.visit();
  await loginPage.fillUserNameField(Constants.USER_NAME);
  await loginPage.fillUserPassField(Constants.USER_PASS);
  await loginPage.clickLoginBtn();
  await homePage.checkLogo();
  await homePage.checkPageTitle();
  await homePage.checkPageItemCount(Constants.ITEM_SELECTOR, 6);
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
  await homePage.checkPageTitle();
  await homePage.clickMenuBtn();
  await sideBar.clickCloseSideBarBtn();
  await sideBar.checkMenuItems();
  await homePage.checkPageItemCount(Constants.ITEM_SELECTOR, 6);
});
