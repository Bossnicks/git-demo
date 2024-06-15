const BasePage = require('./basePage');
const { By, Key, until } = require('selenium-webdriver');

class MainPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.url = 'https://shikimori.one/';
        this.searchField = By.xpath('//input[@placeholder="Поиск..."]');
        this.firstSuggestion = By.xpath('/html/body/header/div[3]/div/div/a[1]');
        this.enterButton = By.xpath('/html/body/header/a[2]');
        this.profileButton = By.xpath('/html/body/header/div[4]/span/a');
        this.listAnimeButton = By.xpath('/html/body/header/div[4]/div[1]/a[2]');
        this.settingsButton = By.xpath('/html/body/header/div[4]/div[1]/a[7]');
        this.logoutButton = By.xpath('/html/body/header/div[4]/div[1]/a[10]');
    }

    async enterAnime(anime) {
        if (typeof anime !== 'string') {
            throw new Error('The "anime" parameter must be a string');
        }
        await this.sendKeys(this.searchField, anime);
    }

    async clickEnter() {
        await this.sendKeys(this.searchField, Key.ENTER);
    }

    async findAnime() {
        if(this.findElement(this.firstSuggestion) != null) {
            await this.clickElement(this.firstSuggestion);
        }
        else {
            await this.clickEnter();
        }
    }

    async openProfile() {
        await this.clickElement(this.profileButton);
    }

    async checkAnimeList() {
        await this.clickElement(this.profileButton);
        await this.clickElement(this.listAnimeButton);
    }

    async checkSettings() {
        await this.clickElement(this.profileButton);
        await this.clickElement(this.settingsButton);
    }

    async logout() {
        await this.clickElement(this.profileButton);
        await this.clickElement(this.logoutButton);
    }


}

module.exports = MainPage;


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
