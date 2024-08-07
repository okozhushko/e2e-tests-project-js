class LoginPage {
  constructor(page) {
    this.page = page;
    this.userName = "#user-name";
    this.userPass = "#password";
    this.loginButton = "#login-button";
  }

  async loginToApplication() {
    await this.page.fill(this.userName, "standard_user");
    await this.page.fill(this.userPass, "secret_sauce");
    await this.page.click(this.loginButton);
  }
}
module.exports = LoginPage;
