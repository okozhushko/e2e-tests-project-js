import * as Constants from "../constants";
const { expect } = require("@playwright/test");

export default class HomePage {
  constructor(page) {
    this.page = page;
  }

  menuBtn = () => this.page.locator(Constants.MENU_BTN);
  logOutBtn = () => this.page.locator(Constants.LOG_OUT_BTN);
  allItemsBtn = () => this.page.locator(Constants.ALL_ITEMS_BTN);
  aboutBtn = () => this.page.locator(Constants.ABOUT_BTN);
  resetAppStateBtn = () => this.page.locator(Constants.RESET_APP_BTN);
  logOutBtnText = () => this.page.getByText(Constants.LOG_OUT_BTN_TEXT);

  clickMenuBtn = async () => {
    await expect(this.menuBtn()).toBeVisible();
    await this.menuBtn().click();
  };

  clickLogOutBtn = async () => {
    const logOutBtnLocator = this.logOutBtn();
    await expect(logOutBtnLocator).toBeVisible();
    await expect(logOutBtnLocator).toHaveText(Constants.LOG_OUT_BTN_TEXT);
    await logOutBtnLocator.click();
  };

  checkAndClickButton = async (selector, expectedText) => {
    const button = this.page.locator(selector);
    await expect(button).toHaveText(expectedText);
    await expect(button).toBeVisible();
    await button.click();
  };

  logOutBtn = async (selector, buttonText) => {
    const button = this.page.locator(selector);
    await expect(button).toHaveText(buttonText);
    await expect(button).toBeVisible();
    await button.click();
  };
}

// await expect(buttonLocator).toBeVisible();
// await expect(buttonLocator).toHaveText(expectedText);
