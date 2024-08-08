const { expect } = require("@playwright/test");
class HomePage {
  constructor(page) {
    this.page = page;
    this.menu = "#react-burger-menu-btn";
    this.logOutBtn = "#logout_sidebar_link";
    this.homePageTitle = ".app_logo";
  }

  async checkHomePageTitle(page) {
    await expect(this.page.locator(this.homePageTitle)).toBeVisible();
  }

  async checkHomePageLogoutBtn(page) {
    await expect(this.page.locator(this.logOutBtn)).toBeVisible();
  }

  // async logoutFromApp() {
  //   await this.page.click(this.menu);
  //   await this.page.click(this.logOutBtn);
  // }
}

module.exports = HomePage;
