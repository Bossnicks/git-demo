const BasePage = require('./basePage');
const { By, Key } = require('selenium-webdriver');

class LoginPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.url = 'https://shikimori.one/users/sign_up';
        this.nickname = By.xpath('//*[@id="user_nickname"]');
        this.email = By.xpath('//*[@id="user_email"]');
        this.password = By.xpath('//*[@id="user_password"]');
        this.registerButton = By.css('[id^="submit_user"]');
    }

    async open() {
        await this.driver.get(this.url);
        await this.waitForPageLoad();
    }

    async clickRegisterButton() {
        await this.clickElement(this.registerButton);
    }

    async enterNickname(nickname) {
        await this.sendKeys(this.nickname, nickname);
    }

    async enterEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error('Некорректный формат');
        }
        await this.sendKeys(this.email, email);
    }

    async enterPassword(password) {
        if (password.length < 8) {
            throw new Error('Символов должно быть 8 или больше');
        }
        await this.sendKeys(this.password, password);
    }
}

module.exports = LoginPage;
