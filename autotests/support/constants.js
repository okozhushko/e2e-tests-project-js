const Constants = {
  //Credentials
  USER_NAME: "standard_user",
  USER_PASS: "secret_sauce",
 
 
  //Locators
  USER_NAME_FLD: "#user-name",
  USER_PASS_FLD: "#password",
  LOGIN_BTN: "#login-button",
  LOGIN_PAGE_LOGO: ".login_logo",
  HOME_PAGE_LOGO: ".app_logo",
  MENU_BTN: "#react-burger-menu-btn",
  LOG_OUT_BTN: "#logout_sidebar_link",
  ALL_ITEMS_BTN: "#inventory_sidebar_link",
  ABOUT_BTN: "#about_sidebar_link",
  RESET_APP_BTN: "#reset_sidebar_link",
  ITEM_SELECTOR: "//div[@data-test='inventory-item']",
  SIDE_BAR_CLOSE_BTN: "#react-burger-cross-btn",
  PAGE_TITLE: "//span[@data-test='title']",
  ERROR_MSG_FLD: "//h3[@data-test='error']",
  USER_NAME_ERROR_ICON:"(//div[@class='form_group']//*[local-name()='svg'])[1]",
  USER_PASS_ERROR_ICON:"(//div[@class='form_group']//*[local-name()='svg'])[1]",
 
 
  //Text values
  LOGIN_BTN_TEXT: "Login",
  LOG_OUT_BTN_TEXT: "Logout",
  LOGO_TEXT: "Swag Labs",
  ABOUT_BTN_TEXT: "About",
  ALL_ITEMS_BTN_TEXT: "All Items",
  RESET_APP_BTN_TEXT: "Reset App State",
  PAGE_TITLE_TEXT: "Products",
  ITEM_NAMES_LIST:["Sauce Labs Backpack","Sauce Labs Bike Light","Sauce Labs Bolt T-Shirt",
  "Sauce Labs Fleece Jacket","Sauce Labs Onesie","Test.allTheThings() T-Shirt (Red)"],
 
 
  INVALID_CREDENTIALS_MSG:
    "Epic sadface: Username and password do not match any user in this service",
  USER_PASS_REQUIRED_MSG: "Epic sadface: Password is required",
  USER_REQUIRED_MSG: "Epic sadface: Username is required"
 };

 module.exports = Constants;