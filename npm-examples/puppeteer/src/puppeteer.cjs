
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const pages = await browser.pages()
  const page = pages[0] || await browser.newPage();
  await page.goto('https://github.com/');

  await page.close();
  await browser.close();
})();

