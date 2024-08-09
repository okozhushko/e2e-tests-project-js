import * as Constants from "../constants";
import { expect } from "@playwright/test";

export default class HomePage {
  constructor(page) {
    this.page = page;
  }

  menuBtn = () => this.page.locator(Constants.MENU_BTN);
  allItemsBtn = () => this.page.locator(Constants.ALL_ITEMS_BTN);
  itemLocator = () => this.page.locator(Constants.ALL_ITEMS_BTN);
  pageTitleLocator = () => this.page.locator(Constants.PAGE_TITLE);


  checkLogoutSuccessful = async () => {
    const pageTitleLocator = this.pageTitleLocator();
    await expect(pageTitleLocator).toBeVisible();
    await expect(pageTitleLocator).toHaveText(Constants.PAGE_TITLE_TEXT);
  };

  clickMenuBtn = async () => {
    await expect(this.menuBtn()).toBeVisible();
    await this.menuBtn().click();
  };

  checkPageItemCount = async (itemSelector, expectedCount) => {
    const elements = this.page.locator(itemSelector);
    const actualCount = await elements.count();
    expect(actualCount).toBe(expectedCount);
  };
}
