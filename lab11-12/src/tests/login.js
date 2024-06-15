const { Builder, Key } = require('selenium-webdriver');
const LoginPage = require('../pages/loginPage');
const { describe, it } = require('mocha');

describe('login test', function () {
    let driver;
    let loginPage;

    before(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        loginPage = new LoginPage(driver);
    });

    // after(async () => {
    //     await driver.quit();
    // });

    it('Should login', async () => {
        await loginPage.open();
        await loginPage.enterNickname("Bossnicks");
        await loginPage.enterPassword("20012003");
        await loginPage.clickRegisterButton();

    });
});