import * as Constants from "../constants";
const { expect } = require("@playwright/test");

export default class LoginPage {
  constructor(page) {
    this.page = page;
  }

  //Locators
  userName = () => this.page.locator(Constants.USER_NAME);
  userPass = () => this.page.locator(Constants.USER_PASS);
  loginBtn = () => this.page.locator(Constants.LOGIN_BTN);
  loginBtnText = () => this.page.getByText(Constants.LOGIN_BUTTON_TEXT);
  pageLogo = () => this.page.locator(Constants.LOGO);
  pageLogoText = () => this.page.getByText(Constants.LOGO_TEXT);

  //Actions
  visit = async () => await this.page.goto("https://www.saucedemo.com/");

  checkLogo = async () => {
    const logoText = this.page.getByText(Constants.LOGIN_BUTTON_TEXT);
    await expect(logoText).toBeVisible();
    const logo = this.page.locator(Constants.LOGO);
    await expect(logo).toBeVisible();
  };

  fillUserLoginField = async (userName, userPass) => {
    await this.userName().fill(userName);
    await this.userPass().fill(userPass);
  };

  clickLoginBtn = async () => {
    const loginBtnText = this.page.getByText(Constants.LOGO_TEXT);
    await expect(loginBtnText).toBeVisible();
    const loginBtnLocator = this.page.locator(Constants.LOGO);
    await expect(loginBtnLocator).toBeVisible();
    await this.loginBtn().click();
  };
}
