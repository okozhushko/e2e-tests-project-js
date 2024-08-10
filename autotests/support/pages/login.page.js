import * as Constants from "../constants";
import { expect } from "@playwright/test";

export default class HomePage {
  constructor(page) {
    this.page = page;
  }

  userNameErroIcon = () => this.page.locator(Constants.USER_NAME_ERROR_ICON);
  userPassErroIcon = () => this.page.locator(Constants.USER_PASS_ERROR_ICON);
  loginBtnText = () => this.page.getByText(Constants.LOGIN_BTN_TEXT);
  loginPageLogo = () => this.page.locator(Constants.LOGIN_PAGE_LOGO);
  pageTitleLocator = () => this.page.locator(Constants.PAGE_TITLE);
  homePageLogo = () => this.page.locator(Constants.HOME_PAGE_LOGO);
  userNameFld = () => this.page.locator(Constants.USER_NAME_FLD);
  userPassFld = () => this.page.locator(Constants.USER_PASS_FLD);
  errorMsgFld = () => this.page.locator(Constants.ERROR_MSG_FLD);
  logOutBtn = () => this.page.locator(Constants.LOG_OUT_BTN);
  userName = () => this.page.locator(Constants.USER_NAME);
  userPass = () => this.page.locator(Constants.USER_PASS);
  loginBtn = () => this.page.locator(Constants.LOGIN_BTN);
  menuBtn = () => this.page.locator(Constants.MENU_BTN);
  pageLogoText = () => this.page.getByText("Swag Labs");

  visit = async () => await this.page.goto("https://www.saucedemo.com/");

  fillUserNameField = async userName => {
    const userNameFld = this.userNameFld();
    await expect(userNameFld).toBeVisible();
    await this.userNameFld().fill("");
    await this.userNameFld().fill(userName);
  };

  fillUserPassField = async userPass => {
    const userPassFld = this.userPassFld();
    await expect(userPassFld).toBeVisible();
    await this.userPassFld().fill("");
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
    const logo = this.loginPageLogo();
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

  checkUserNameErrorIcon = async () => {
    const icon = this.userNameErroIcon();
    await expect(icon).toBeVisible();
  };

  checkUserPassErrorIcon = async () => {
    const icon = this.userPassErroIcon();
    await expect(icon).toBeVisible();
  };
}
