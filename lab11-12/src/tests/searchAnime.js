const { Builder, Key } = require('selenium-webdriver');
const MainPage = require('../pages/mainPage');
const { describe, it } = require('mocha');

describe('search test', function () {
    let driver;
    let mainPage;

    before(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        mainPage = new MainPage(driver);
    });

    // after(async () => {
    //     await driver.quit();
    // });

    it('Should enter anime', async () => {
        await mainPage.open();
        await mainPage.enterAnime('Higurashi no Naku Koro ni');
        await mainPage.findAnime();
    });
});