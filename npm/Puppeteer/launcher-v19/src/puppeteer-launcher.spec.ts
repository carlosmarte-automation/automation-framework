import { beforeAll, describe, it, test, afterAll, expect } from 'vitest'
import WebdriverIoLauncher from "./puppeteer-launcher";

test("launch url", async () => {
  const driver = new WebdriverIoLauncher();
  expect(driver).toBeDefined();
  expect(await driver.start()).toBeInstanceOf(WebdriverIoLauncher);
  expect(await driver.url("https://webdriver.io/")).toBeInstanceOf(WebdriverIoLauncher);
  expect(await driver.end()).toBeInstanceOf(WebdriverIoLauncher);
});
