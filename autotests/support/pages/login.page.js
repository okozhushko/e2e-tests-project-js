import * as Constants from "../constants";
const { expect } = require("@playwright/test");

export default class LoginPage {
  constructor(page) {
    this.page = page;
  }

  //Locators
  loginBtnText = () => this.page.getByText(Constants.LOGIN_BTN_TEXT);
  userName = () => this.page.locator(Constants.USER_NAME);
  userPass = () => this.page.locator(Constants.USER_PASS);
  loginBtn = () => this.page.locator(Constants.LOGIN_BTN);
  pageLogoText = () => this.page.getByText("Swag Labs");
  pageLogo = () => this.page.locator(Constants.LOGO);

  //Actions
  visit = async () => await this.page.goto("https://www.saucedemo.com/");

  checkLogo = async () => {
    const logo = this.pageLogo();
        await expect(logo).toBeVisible();
        await expect(logo).toHaveText(Constants.LOGO_TEXT);
  };

  fillUserLoginField = async (userName, userPass) => {
    await this.userName().fill(userName);
    await this.userPass().fill(userPass);
  };

  clickLoginBtn = async () => {      
    const loginBtn = this.loginBtn();
        await expect(loginBtn).toBeVisible();
        await expect(loginBtn).toHaveText(Constants.LOGIN_BTN_TEXT);
        await loginBtn.click();
  };
}
