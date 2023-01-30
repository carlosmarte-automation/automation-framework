
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setJavaScriptEnabled(false);

  await page.goto('https://github.com/');

  await page.close();
  await browser.close();
})();

