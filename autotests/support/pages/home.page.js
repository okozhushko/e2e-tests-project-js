import * as Constants from "../constants";
import { expect } from "@playwright/test";
export default class HomePage {
  constructor(page) {
    this.page = page;
  }

  pageTitleLocator = () => this.page.locator(Constants.PAGE_TITLE);
  homePageLogo = () => this.page.locator(Constants.HOME_PAGE_LOGO);
  allItemsBtn = () => this.page.locator(Constants.ALL_ITEMS_BTN);
  itemLocator = () => this.page.locator(Constants.ALL_ITEMS_BTN);
  menuBtn = () => this.page.locator(Constants.MENU_BTN);
  itemButtonsList = () =>
    this.page.locator(
      "//div[@class='inventory_item']//div[@class='inventory_item_name ']"
    );

  checkPageTitle = async () => {
    const pageTitleLocator = this.pageTitleLocator();
    await expect(pageTitleLocator).toBeVisible();
    await expect(pageTitleLocator).toHaveText(Constants.PAGE_TITLE_TEXT);
  };

  checkLogo = async () => {
    const logo = this.homePageLogo();
    await expect(logo).toBeVisible();
    await expect(logo).toHaveText(Constants.LOGO_TEXT);
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

  selectItemByIndex = async (expectedCount, names) => {
    const itemNames = this.itemButtonsList();
    await expect(itemNames).toHaveCount(expectedCount);
    const actualTexts = await itemNames.evaluateAll(elements =>
      elements.map(el => el.textContent.trim())
    );
    expect(actualTexts).toEqual(names);
  };
}

////div[@class='inventory_item']//div[@class='inventory_item_name ']
