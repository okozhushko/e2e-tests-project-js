import * as Constants from "../constants";
import { expect } from "@playwright/test";


export default class SideBar {
 constructor(page) {
   this.page = page;
 }


 closeBtn = () => this.page.locator(Constants.SIDE_BAR_CLOSE_BTN);
 logOutBtn = () => this.page.locator(Constants.LOG_OUT_BTN);


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


 clickCloseSideBarBtn = async () => {
   await expect(this.closeBtn()).toBeVisible();
   await this.closeBtn().click();
 };


 checkMenuItems = async () => {
   const listOfMenuBtns = ["All Items", "About", "Logout", "Reset App State"];


   const filterLocator = this.page.locator(".bm-menu .menu-item");


   const count = await filterLocator.count();
   expect(count).toBe(listOfMenuBtns.length);


   const actualTexts = await filterLocator.evaluateAll(nodes =>
     nodes.map(node => node.innerText.trim())
   );
   expect(actualTexts).toEqual(listOfMenuBtns);


   return this;
 };
}
