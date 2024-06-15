const { By, until } = require('selenium-webdriver');

class BasePage {
    constructor(driver) {
        this.driver = driver;
    }

    async findElement(locator, timeout = 5000) {
        await this.driver.wait(until.elementLocated(locator), timeout);
        return this.driver.findElement(locator);
    }

    async searchName(locator) {
        const element = await this.findElement(locator);
        await element.click();
    }

    async sendKeys(locator, keys) {
        const element = await this.findElement(locator);
        await element.sendKeys(keys);
    }
}

module.exports = BasePage;
