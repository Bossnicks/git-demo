const BasePage = require('./basePage');
const { By, Key, until } = require('selenium-webdriver');

class AnimeListPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.url = 'https://shikimori.one/Bossnicks/edit/account';
        this.nickname = By.xpath('//*[@id="user_nickname"]');
        this.saveProfileButton = By.xpath('//*[starts-with(@id, "submit_user")]');
    }

    async changeNickname(nickname) {
        await this.clear(this.nickname);
        await this.sendKeys(this.nickname, nickname);
        await this.clickElement(this.saveProfileButton);
    }
}

module.exports = AnimeListPage;
