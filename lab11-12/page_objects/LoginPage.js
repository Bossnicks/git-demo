const BasePage = require('./BasePage');
const { By, Key } = require('selenium-webdriver');

class LoginPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.url = 'https://web.telegram.org/k/';
        this.useNumberButton = By.xpath('//*[@id="auth-pages"]/div/div[2]/div[3]/div/div[2]/button[1]');
        this.phoneNumberInput = By.xpath('//*[@id="auth-pages"]/div/div[2]/div[2]/div/div[3]/div[2]/div[1]');
    }

    async open() {
        await this.driver.get(this.url);
    }

    async clickUseNumber() {
        await this.searchName(this.useNumberButton);
    }

    async enterPhoneNumber(phoneNumber) {
        await this.sendKeys(this.phoneNumberInput, phoneNumber);
    }

    async writeMessage() {
        const phoneNumberInputElement = await this.findElement(this.phoneNumberInput);
        await phoneNumberInputElement.sendKeys(Key.ENTER);
    }
}

module.exports = LoginPage;
