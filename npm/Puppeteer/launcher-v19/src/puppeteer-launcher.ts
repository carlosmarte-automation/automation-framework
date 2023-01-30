import puppeteer from "puppeteer";

import { WebdriverLauncherAbstract } from "automation-framework-abstraction";

class PuppeteerLauncher extends WebdriverLauncherAbstract {
  constructor() {
    super();
  }

  async $start(): Promise<any> {
    const browser = await puppeteer.launch({ headless: false });
    const pages = await browser.pages()
    const page = pages[0] || await browser.newPage();
  
    this.setPage(page);
    this.setBrowser(browser);
    return browser;
  }

  async $end(_: any) {
    const browser = this.getBrowser();
    const page = this.getPage();
    await page.close();
    await browser.close();
  }

  async $url(_: any, url: string) {
    const page = this.getPage();
    return page.goto(url, {
      waitUntil: "networkidle2",
    });
  }

  async $pageHasLoaded(browser: any) {}
}

export default PuppeteerLauncher;
