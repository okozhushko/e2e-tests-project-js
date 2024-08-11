import Constants from "../constants.js";
import { expect } from "@playwright/test";

export default class HomePage {
  constructor(page) {
    this.page = page;
  }

  userNameErroIcon = () => this.page.locator(Constants.USER_NAME_ERROR_ICON);
  userPassErroIcon = () => this.page.locator(Constants.USER_PASS_ERROR_ICON);
  loginBtnText = () => this.page.getByText(Constants.LOGIN_BTN_TEXT);
  homePageLogo = () => this.page.locator(Constants.HOME_PAGE_LOGO);
  errorMsgFld = () => this.page.locator(Constants.ERROR_MSG_FLD);
  userName = () => this.page.locator(Constants.USER_NAME);
  userPass = () => this.page.locator(Constants.USER_PASS);
  pageLogoText = () => this.page.getByText("Swag Labs");

  loginPageLogo = () => this.page.getByRole("img", { name: Constants.LOGIN_PAGE_LOGO });
  pageTitleLocator = () => this.page.getByRole("heading", { name: Constants.PAGE_TITLE_TEXT });
  userNameFld = () => this.page.getByRole("textbox", { name: "name" });
  userPassFld = () => this.page.getByRole("textbox", { name: "Password" });
  logOutBtn = () => this.page.getByRole("button", { name: Constants.LOG_OUT_BTN_TEXT });
  loginBtn = () => this.page.getByRole("button", { name: Constants.LOGIN_BTN_TEXT });
  menuBtn = () => this.page.getByRole("button", { name: "Menu" });
  visit = async () => await this.page.goto("https://www.saucedemo.com/");

  fillUserNameField = async userName => {
    const userNameFld = this.userNameFld();
    await userNameFld.waitFor();
    await expect(userNameFld).toBeVisible();
    await userNameFld.fill("");
    await userNameFld.fill(userName);
  };

  fillUserPassField = async userPass => {
    const userPassFld = this.userPassFld();
    await userPassFld.waitFor();
    await expect(userPassFld).toBeVisible();
    await userPassFld.fill("");
    await userPassFld.fill(userPass);
  };

  clickLoginBtn = async () => {
    const loginBtn = this.loginBtn();
    await loginBtn.waitFor();
    await expect(loginBtn).toBeVisible();
    await expect(loginBtn).toHaveText(Constants.LOGIN_BTN_TEXT);
    await loginBtn.click();
  };

  checkLogoutSuccessful = async () => {
    const pageTitleLocator = this.pageTitleLocator();
    await pageTitleLocator.waitFor();
    await expect(pageTitleLocator).toBeVisible();
    await expect(pageTitleLocator).toHaveText(Constants.PAGE_TITLE_TEXT);
  };

  checkLogo = async () => {
    const logo = this.loginPageLogo();
    await logo.waitFor();
    await expect(logo).toBeVisible();
    await expect(logo).toHaveText(Constants.LOGO_TEXT);
  };

  clickMenuBtn = async () => {
    const menuBtnLocator = this.menuBtn();
    await menuBtnLocator.waitFor();
    await expect(menuBtnLocator).toBeVisible();
    await menuBtnLocator.click();
  };

  clickLogOutBtn = async () => {
    const logOutBtnLocator = this.logOutBtn();
    await logOutBtnLocator.waitFor();
    await expect(logOutBtnLocator).toBeVisible();
    await expect(logOutBtnLocator).toHaveText(Constants.LOG_OUT_BTN_TEXT);
    await logOutBtnLocator.click();
  };

  checkAndClickButton = async (selector, expectedText) => {
    const button = this.page.locator(selector);
    await button.waitFor();
    await expect(button).toHaveText(expectedText);
    await expect(button).toBeVisible();
    await button.click();
  };

  logOutBtn = async (selector, buttonText) => {
    const button = this.page.locator(selector);
    await button.waitFor();
    await expect(button).toHaveText(buttonText);
    await expect(button).toBeVisible();
    await button.click();
  };

  checkPageItemCount = async (itemSelector, expectedCount) => {
    const elements = this.page.locator(itemSelector);
    await elements.waitFor();
    const actualCount = await elements.count();
    expect(actualCount).toBe(expectedCount);
  };

  checkErrorMessage = async expectedMessage => {
    const errorMsgFld = this.page.locator(Constants.ERROR_MSG_FLD);
    await errorMsgFld.waitFor();
    await expect(errorMsgFld).toHaveText(expectedMessage);
  };

  checkUserNameErrorIcon = async () => {
    const icon = this.page.locator(Constants.USER_NAME_ERROR_ICON);
    await icon.waitFor();
    await expect(icon).toBeVisible();
  };

  checkUserPassErrorIcon = async () => {
    const icon = this.page.locator(Constants.USER_PASS_ERROR_ICON);
    await icon.waitFor();
    await expect(icon).toBeVisible();
  };
}
