const { By, until } = require('selenium-webdriver');
const logger = require('../core/logger');

class BasePage {
    constructor(driver) {
        this.driver = driver;
    }

    async open() {
        await this.driver.get(this.url);
        await this.waitForPageLoad();
    }

    async findElement(locator, timeout = 10000) {
        await this.driver.wait(until.elementLocated(locator), timeout);
        logger.info(`Element located: ${locator}`);
        return this.driver.findElement(locator);
    }

    async clickElement(locator, timeout = 10000) {
        const element = await this.findElement(locator, timeout);
        await element.click();
        logger.info(`Clicked element: ${locator}`);
    }

    async sendKeys(locator, keys, timeout = 10000) {
        const element = await this.findElement(locator, timeout);
        await element.sendKeys(keys);
        logger.info(`Sent keys to element: ${locator}`);
    }

    async clear(locator, timeout = 10000) {
        const element = await this.findElement(locator, timeout);
        element.clear();
        logger.info(`Element clear: ${locator}`);
    }

    async waitForPageLoad(timeout = 10000) {
        await this.driver.wait(() => {
            return this.driver.executeScript('return document.readyState').then(readyState => {
                return readyState === 'complete';
            });
        }, timeout);
        logger.info('Page loaded completely');
    }
}

module.exports = BasePage;
