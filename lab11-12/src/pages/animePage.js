const BasePage = require('./basePage');
const { By, Key, until } = require('selenium-webdriver');

class AnimePage extends BasePage {
    constructor(driver) {
        super(driver);
        //this.url = 'https://shikimori.one/';
        this.animeAddList = By.xpath('/html/body/section/div/div[2]/div/div/div[1]/div[1]/div[1]/div[2]/div/div/form/div[1]/div[1]');
        this.addToListButton = By.xpath('//*[@data-status="completed"]');
    }

    async addAnime() {
        await this.clickElement(this.animeAddList);
        await this.clickElement(this.addToListButton);
    }

    // async clickRegisterButton() {
    //     await this.clickElement(this.registerButton);
    // }

}

module.exports = AnimePage;


// async searchPopular() {
//     const searchInput = await this.driver.wait(
//         until.elementLocated(this.searchField),
//         5000
//     );
//     await searchInput.click();
// }

// async details() {
//     const button = await this.findElement(this.menuButton);
//     await button.click();
// }

// async buy(){
//     const button = await this.findElement(this.buyPath);
//     await button.click();
// }
