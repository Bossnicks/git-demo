const { Builder, Key } = require('selenium-webdriver');
const MainPage = require('../pages/mainPage');
const AnimeListPage = require('../pages/animeListPage');
const { describe, it } = require('mocha');
const firefox = require('selenium-webdriver/firefox');

describe('rate anime', function () {
    let driver;
    let mainPage;
    let animeListPage;
    let options = new firefox.Options();

    before(async () => {
        options.setProfile('C:\\Users\\HP\\AppData\\Roaming\\Mozilla\\Firefox\\Profiles\\jd1entp1.default-release'); // Убедитесь, что путь к профилю правильный
        options.addArguments('--disable-dev-shm-usage');
        options.addArguments('--no-sandbox');
        driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
        mainPage = new MainPage(driver);
        animeListPage = new AnimeListPage(driver);
    });

    // after(async () => {
    //     await driver.quit();
    // });

    it('Should rate anime', async () => {
        await mainPage.open();
        await mainPage.checkAnimeList();
        await animeListPage.rateAnime();
    });
});
