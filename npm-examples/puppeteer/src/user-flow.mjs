import {writeFileSync} from 'fs';
import puppeteer from 'puppeteer';
import {startFlow} from 'lighthouse/lighthouse-core/fraggle-rock/api.js';

(async function() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const flow = await startFlow(page);

  // Navigate with a URL
  await flow.navigate('https://github.com/');
  await flow.startTimespan({name: 'Click button'});
  await page.click('button');
  await flow.endTimespan();
  
  await browser.close();
  writeFileSync('user-flow.html', await flow.generateReport());
})();