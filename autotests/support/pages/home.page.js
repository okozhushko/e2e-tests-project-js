import * as Constants from "../constants";
const { expect } = require("@playwright/test");

export default class HomePage {
  constructor(page) {
    this.page = page;
  }

  menuBtn = () => this.page.locator(Constants.MENU_BTN);
  logOutBtn = () => this.page.locator(Constants.LOG_OUT_BTN);
  logOutBtnText = () => this.page.getByText(Constants.LOG_OUT_BTN_TEXT);

  allItemsBtn = () => this.page.locator(Constants.ALL_ITEMS_BTN);
  aboutBtn = () => this.page.locator(Constants.ABOUT_BTN);
  resetAppStateBtn = () => this.page.locator(Constants.RESET_APP_BTN);

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

  //Fix method
  checkAndClicktMenuItem = async menuItem => {
    switch (menuItem) {
      case "All Items":
        await this.checkButton(this.allItemsBtn(),Constants.ALL_ITEMS_BTN_TEXT);
        await this.allItemsBtn().click();
        break;

      case "About":
        await this.checkButton(this.aboutBtn(), Constants.ABOUT_BTN_TEXT);
        await this.aboutBtn().click();
        break;

      case "Logout":
        await this.checkButton(this.logOutBtn(), Constants.LOG_OUT_BTN_TEXT);
        await this.logOutBtn().click();
        break;

      case "Reset App State":
        await this.checkButton(this.resetAppStateBtn(),Constants.RESET_APP_BTN_TEXT);
        await this.resetAppStateBtn().click();
        break;

      default:
        throw new Error(`Unknown menu item: ${menuItem}`);
    }
  };

  checkButton = async (buttonLocator, expectedText) => {
    await expect(buttonLocator).toBeVisible();
    await expect(buttonLocator).toHaveText(expectedText);
  };
}
