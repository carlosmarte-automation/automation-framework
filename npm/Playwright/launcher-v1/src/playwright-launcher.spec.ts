import { beforeAll, describe, it, test, afterAll, expect } from 'vitest'
import PlaywrightLauncher from "./playwright-launcher";

test("launch url", async () => {
  const driver = new PlaywrightLauncher();
  expect(driver).toBeDefined();
  expect(await driver.start()).toBeInstanceOf(PlaywrightLauncher);
  expect(await driver.url("https://webdriver.io/")).toBeInstanceOf(PlaywrightLauncher);
  expect(await driver.end()).toBeInstanceOf(PlaywrightLauncher);
});
