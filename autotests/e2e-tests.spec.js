import Constants from "./support/constants";
import { test } from "@playwright/test";
import HomePage from "./support/pages/home.page";
import LoginPage from "./support/pages/login.page";

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
  await homePage.checkPageItemsCount(Constants.ITEM_SELECTOR, 6);
  await homePage.checkProductNamesList(6, Constants.ITEM_NAMES_LIST);
  await homePage.chectItemPrices(6, Constants.ITEM_PRICES_LIST);
});

test("Check ability to create order", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  await loginPage.visit();
  await loginPage.fillUserNameField(Constants.USER_NAME);
  await loginPage.fillUserPassField(Constants.USER_PASS);
  await loginPage.clickLoginBtn();
  await homePage.checkPageTitle();
  await homePage.selectItemByIndex(1, "$29.99");
});
