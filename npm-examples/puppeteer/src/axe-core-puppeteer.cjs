const { AxePuppeteer } = require('@axe-core/puppeteer');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setBypassCSP(true);

  await page.goto('https://dequeuniversity.com/demo/mars/');

  try {
    const results = await new AxePuppeteer(page)
      // enables legacy mode
      .setLegacyMode()
      .analyze();
    console.log(results);
  } catch (e) {
    // do something with the error
  }

  await page.close();
  await browser.close();
})();