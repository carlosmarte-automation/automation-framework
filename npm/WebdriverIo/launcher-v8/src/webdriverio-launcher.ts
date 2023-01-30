import { beforeAll, describe, test, it, afterAll, expect } from "vitest";
import { remote, Browser } from "webdriverio";

import { WebdriverLauncherAbstract } from "automation-framework-abstraction";
import waitUntilAppReadystate from "./wait-until-app-readystate";
import waitUntilNetworkIdle from "./wait-until-networkidle";

class WebdriverIoLauncher extends WebdriverLauncherAbstract {
  constructor() {
    super();
  }

  async $start(): Promise<Browser> {
    return remote({
      capabilities: {
        browserName: "chrome",
      },
    });
  }

  async $end(browser: any) {
    return browser.deleteSession();
  }

  async $url(browser: any, url: string) {
    return browser.url(url);
  }

  async $pageHasLoaded(browser: any) {
    await waitUntilAppReadystate(browser);
    await waitUntilNetworkIdle(browser);
  }
}

export default WebdriverIoLauncher