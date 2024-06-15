const { Builder } = require('selenium-webdriver');

class BrowserManager {
    static async getDriver(browser = 'chrome') {
        let driver = await new Builder().forBrowser(browser).build();
        return driver;
    }
}

module.exports = BrowserManager;
