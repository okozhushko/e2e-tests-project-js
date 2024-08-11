import Constants from "../constants.js";
import { expect } from "@playwright/test";

export default class HomePage {
  constructor(page) {
    this.page = page;
  }

  pageTitleLocator = () => this.page.getByRole('heading', { name: Constants.PAGE_TITLE });
  homePageLogo = () => this.page.getByRole('img', { name: Constants.LOGO_TEXT });
  menuBtn = () => this.page.getByRole('button', { name: 'Menu' });
  itemButtonsList = () => this.page.locator("//div[@class='inventory_item']//div[@class='inventory_item_name ']");
  descrList = () => this.page.locator("//div[@data-test='inventory-item-desc']");
  pricesList = () => this.page.locator("//div[@class='inventory_item_price']");

  checkPageTitle = async () => {
    const pageTitleLocator = this.pageTitleLocator();
    await pageTitleLocator.waitFor();
    await expect(pageTitleLocator).toBeVisible();
    await expect(pageTitleLocator).toHaveText(Constants.PAGE_TITLE_TEXT);
  };

  checkLogo = async () => {
    const logo = this.homePageLogo();
    await logo.waitFor();
    await expect(logo).toBeVisible();
    await expect(logo).toHaveText(Constants.LOGO_TEXT);
  };

  clickMenuBtn = async () => {
    const menuButton = this.menuBtn();
    await menuButton.waitFor();
    await expect(menuButton).toBeVisible();
    await menuButton.click();
  };

  checkPageItemsCount = async (itemSelector, expectedCount) => {
    const elements = this.page.locator(itemSelector);
    const actualCount = await elements.count();
    expect(actualCount).toBe(expectedCount);
  };

  checkProductNamesList = async (expectedCount, names) => {
    const itemNames = this.itemButtonsList();
    await expect(itemNames).toHaveCount(expectedCount);
    const actualTexts = await itemNames.evaluateAll(elements =>
      elements.map(el => el.textContent.trim())
    );
    expect(actualTexts).toEqual(names);
  };

  chectItemPrices = async (expectedCount, names) => {
    const pricesList = this.pricesList();
    await expect(pricesList).toHaveCount(expectedCount);
    const actualTexts = await pricesList.evaluateAll(elements =>
      elements.map(el => el.textContent.trim())
    );
    expect(actualTexts).toEqual(names);
  };

  selectItemByIndex = async (index, expectedText) => {
    const locator = this.pricesList();
    const elementCount = await locator.count();
    if (index < 0 || index >= elementCount) {
      throw new Error(
        `Index ${index} is out of range. Only ${elementCount} items found.`
      );
    }
    const item = locator.nth(index - 1);
    await expect(item).toBeVisible();
    await expect(item).toHaveText(expectedText);
    return item;
  };
}
