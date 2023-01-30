
import { chromium, devices, Page } from "playwright";
import { WebdriverLauncherAbstract } from "automation-framework-abstraction";

class PlayWrightLauncher extends WebdriverLauncherAbstract {
  constructor() {
    super();
    console.log(this.setPage, this.setContext);

  }

  async $start(): Promise<any> {
    const browser = await chromium.launch({ headless: false, slowMo: 50 });
    const context = await browser.newContext();
    const page: Page = await context.newPage();
  
    this.setContext(context);
    this.setPage(page);
    this.setBrowser(browser);
    return browser;
  }

  async $end(_: any) {
    const browser = this.getBrowser();
    const context = this.getContext();
    await context.close();
    await browser.close();
  }

  async $url(_: any, url: string) {
    const page = this.getPage();
    return page.goto(url);
  }

  async $pageHasLoaded(browser: any) {}
}

export default PlayWrightLauncher;