const { Builder, Key } = require('selenium-webdriver');
const MainPage = require('../pages/mainPage');
const { describe, it } = require('mocha');
const AnimePage = require('../pages/animePage');
const firefox = require('selenium-webdriver/firefox');

describe('add anime', function () {
    let driver;
    let mainPage;
    let animePage;
    let options = new firefox.Options();

    before(async () => {
        options.setProfile('C:\\Users\\HP\\AppData\\Roaming\\Mozilla\\Firefox\\Profiles\\jd1entp1.default-release'); // Убедитесь, что путь к профилю правильный
        options.addArguments('--disable-dev-shm-usage');
        options.addArguments('--no-sandbox');
        driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
        mainPage = new MainPage(driver);
        animePage = new AnimePage(driver);
    });

    // after(async () => {
    //     await driver.quit();
    // });

    it('Should enter anime', async () => {
        await mainPage.open();
        await mainPage.enterAnime('Код Гиас');
        await mainPage.findAnime();
        await animePage.addAnime();
    });
});
