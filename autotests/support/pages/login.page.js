import * as Constants from "../constants";
import { expect } from "@playwright/test";

export default class HomePage {
  constructor(page) {
    this.page = page;
  }

  menuBtn = () => this.page.locator(Constants.MENU_BTN);
  logOutBtn = () => this.page.locator(Constants.LOG_OUT_BTN);
  pageTitleLocator = () => this.page.locator(Constants.PAGE_TITLE);
  loginBtnText = () => this.page.getByText(Constants.LOGIN_BTN_TEXT);
  userName = () => this.page.locator(Constants.USER_NAME);
  userPass = () => this.page.locator(Constants.USER_PASS);
  userNameFld = () => this.page.locator(Constants.USER_NAME_FLD);
  userPassFld = () => this.page.locator(Constants.USER_PASS_FLD);
  loginBtn = () => this.page.locator(Constants.LOGIN_BTN);
  pageLogoText = () => this.page.getByText("Swag Labs");
  pageLogo = () => this.page.locator(Constants.LOGO);
  errorMsgFld = () => this.page.locator(Constants.ERROR_MSG_FLD);

  visit = async () => await this.page.goto("https://www.saucedemo.com/");

  fillUserNameField = async (userName) => {
    const userNameFld = this.userNameFld();
    await expect(userNameFld).toBeVisible();
    await this.userNameFld().fill(userName);
  };

  fillUserPassField = async (userPass) => {
    const userPassFld = this.userPassFld();
    await expect(userPassFld).toBeVisible();
    await this.userPassFld().fill(userPass);
  };

  clickLoginBtn = async () => {
    const loginBtn = this.loginBtn();
    await expect(loginBtn).toBeVisible();
    await expect(loginBtn).toHaveText(Constants.LOGIN_BTN_TEXT);
    await loginBtn.click();
  };

  checkLogoutSuccessful = async () => {
    const pageTitleLocator = this.pageTitleLocator();
    await expect(pageTitleLocator).toBeVisible();
    await expect(pageTitleLocator).toHaveText(Constants.PAGE_TITLE_TEXT);
  };

  checkLogo = async () => {
    const logo = this.pageLogo();
    await expect(logo).toBeVisible();
    await expect(logo).toHaveText(Constants.LOGO_TEXT);
  };

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

  checkPageItemCount = async (itemSelector, expectedCount) => {
    const elements = this.page.locator(itemSelector);
    const actualCount = await elements.count();
    expect(actualCount).toBe(expectedCount);
  };

  checkErrorMessage = async expectedMessage => {
    const elements = this.errorMsgFld();
    await expect(elements).toHaveText(expectedMessage);
  };
}
