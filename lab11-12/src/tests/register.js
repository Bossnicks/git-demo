const { Builder, Key } = require('selenium-webdriver');
const RegisterPage = require('../pages/registerPage');
const { describe, it } = require('mocha');

describe('register test', function () {
    let driver;
    let registerPage;

    before(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        registerPage = new RegisterPage(driver);
    });

    // after(async () => {
    //     await driver.quit();
    // });

    it('Should register', async () => {
        await registerPage.open();
        await registerPage.enterNickname("Bossnicks");
        await registerPage.enterEmail("nikon.chigoya@mail.ru");
        await registerPage.enterPassword("20012003");
        await registerPage.clickRegisterButton();

    });
});