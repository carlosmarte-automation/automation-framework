//https://www.npmjs.com/package/selenium-webdriver

const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get('https://github.com/');
  } finally {
    await driver.quit();
  }
})();