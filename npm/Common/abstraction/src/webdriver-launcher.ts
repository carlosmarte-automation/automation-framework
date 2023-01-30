import invariant from "automation-framework-invariant";
import { UndefinedBrowserInstance } from "automation-framework-exception";

export abstract class WebdriverLauncherAbstract {
  private browser: any;
  private page: any;
  private context: any;
  abstract $start(): Promise<any>;
  abstract $end(browser: any | undefined): Promise<any>;
  abstract $url(browser: any, url: string): Promise<any>;

  
  getPage(): any {
    invariant.isObject(this.page, new UndefinedBrowserInstance());
    return this.page;
  }

  getBrowser(): any {
    invariant.isObject(this.browser, new UndefinedBrowserInstance());
    return this.browser;
  }

  getContext(context: any): this {
    invariant.isObject(this.context, new UndefinedBrowserInstance());
    return this.context;
  }

  setPage(page: any): this {
    this.page = page;
    return this;
  }

  setBrowser(browser: any): this {
    this.browser = browser;
    return this;
  }

  setContext(context: any): this {
    this.context = context;
    return this;
  }

  async start(): Promise<this> {
    this.browser = await this.$start();
    return this;
  }

  async end(): Promise<this> {
    await this.$end(this.browser);
    this.browser = null;
    return this;
  }

  async url(url: string): Promise<this> {
    invariant.isObject(this.browser, new UndefinedBrowserInstance());
    await this.$url(this.browser, url);
    return this;
  }
}
