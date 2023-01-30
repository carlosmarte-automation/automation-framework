const AxeBuilder = require('@axe-core/webdriverjs');
const WebDriver = require('selenium-webdriver');
(async () => {
  const driver = new WebDriver.Builder().forBrowser('chrome').build();
  await driver.get('https://github.com/');
  const results = await new AxeBuilder(driver, null, {
    noSandbox: true
  })
    .setLegacyMode()
    .analyze();
  console.log(results);
  await driver.quit();
})();