const { test } = require("@playwright/test");
import LoginPage from "./support/pages/login.page";

test("Login to user page", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.visit();
  await loginPage.checkLogo();
  await loginPage.fillUserLoginField("standard_user", "secret_sauce");
  await loginPage.clickLoginBtn();
});