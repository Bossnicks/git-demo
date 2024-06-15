const { Builder, Key } = require('selenium-webdriver');
const MainPage = require('../pages/mainPage');
const { describe, it } = require('mocha');
const firefox = require('selenium-webdriver/firefox');

describe('view anime list', function () {
    let driver;
    let mainPage;
    let options = new firefox.Options();

    before(async () => {
        options.setProfile('C:\\Users\\HP\\AppData\\Roaming\\Mozilla\\Firefox\\Profiles\\jd1entp1.default-release'); // Убедитесь, что путь к профилю правильный
        options.addArguments('--disable-dev-shm-usage');
        options.addArguments('--no-sandbox');
        driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
        mainPage = new MainPage(driver);
    });

    // after(async () => {
    //     await driver.quit();
    // });

    it('Should view anime list', async () => {
        await mainPage.open();
        await mainPage.logout();
    });
});
