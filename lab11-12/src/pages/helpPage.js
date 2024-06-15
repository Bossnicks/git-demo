const BasePage = require('../../page_objects/BasePage');
const { By, Key, until } = require('selenium-webdriver');

class HelpPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.url = 'https://atlasbus.by/help';
        this.searchField = By.xpath('/html/body/div/div/div/div[1]/div');
        this.contactsButton = By.xpath('/html/body/div[2]/div[3]/div/div/form/div[1]/div/div/input');
    }

    async open() {
        await this.driver.get(this.url);
    }

    async getHelp (msg) {
        const searchInput = await this.driver.wait(
			until.elementLocated(this.searchField),
			50000
		);
        await searchInput.click();
    }

    async enterName(name) {
        const searchInput = await this.driver.wait(
			until.elementLocated(this.contactsButton),
			50000
		);
        await searchInput.sendKeys(name);
    }
}

module.exports = HelpPage;
