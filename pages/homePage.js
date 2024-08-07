class HomePage {
    constructor(page) {
      this.page = page;
      this.menu = "#react-burger-menu-btn";
      this.logOutBtn = "#logout_sidebar_link"

    }
    async logoutFromApp(){
        await this.page.click(this.menu)
        await this.page.click(this.logOutBtn)
    }
}
module.exports = HomePage