import * as Constants from "../autotests/support/constants";
import { test } from "@playwright/test";

import HomePage from "./support/pages/home.page";
import LoginPage from "./support/pages/login.page";
import SideBar from "./support/sections.js/sidebar.section";

test("[E2E], Check Add item to bucket", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const sideBar = new SideBar(page);

  await loginPage.visit();
  await loginPage.checkLogo();
  await loginPage.fillUserLoginField("standard_user", "secret_sauce");
  await loginPage.clickLoginBtn();
  await homePage.checkLogoutSuccessful()
  await homePage.clickMenuBtn();
  await sideBar.clickCloseSideBarBtn();
  await sideBar.checkMenuItems()
  await homePage.checkPageItemCount(Constants.ITEM_SELECTOR, 6);

  
});