const BasePage = require('./basePage');
const { By, Key, until } = require('selenium-webdriver');

class AnimeListPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.url = 'https://shikimori.one/Bossnicks/list/anime?order=rate_score';
        this.firstAnimeListMember = By.xpath('//*[@data-target_russian="Твоё имя"]/td[2]/a');
        this.secondAnimeListMember = By.xpath('//*[@data-target_russian="Девять"]/td[2]/a');
        this.rateList = By.xpath('//*[@id="user_rate_score"]');
        this.rate = By.xpath('//*[@id="user_rate_score"]//*[@value="9"]');
        this.deleteAnimeFromListButton = By.xpath('//*[starts-with(@id, "edit_user_rate_")]//*[@title="Удалить из списка"]');
        this.saveRateButton = By.xpath('//*[starts-with(@id, "submit_user_rate")]');

    }
    
    async rateAnime() {
        this.clickElement(this.firstAnimeListMembers);
        this.clickElement(this.rateList);
        this.clickElement(this.rate);
        this.clickElement(this.saveRateButton);
    }

    async dropAnime() {
        this.clickElement(this.secondAnimeListMember);
        this.clickElement(this.deleteAnimeFromListButton);
    }
}

module.exports = AnimeListPage;
