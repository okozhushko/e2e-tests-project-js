import { expect } from "@playwright/test";

export const clearField = async locator => {
  await locator.click({ clickCount: 3 });
  await locator.press("Backspace");
};

export const clickElement = async locator => {
  await locator.click();
};

export const waitForVisibility = async locator => {
  await expect(locator).toBeVisible();
};

export const doubleClick = async locator => {
  await locator.dblclick();
};

export const pressEnter = async locator => {
  await locator.press("Enter");
};
