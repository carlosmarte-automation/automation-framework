import { beforeAll, describe, test, it, afterAll, expect } from "vitest";
import { WebdriverLauncherAbstract } from "./webdriver-launcher";

class AccountingDepartment extends WebdriverLauncherAbstract {
  constructor() {
    super();
  }

  async $start() {
    return {
        data: 1
    };
  }

  async $end(browser: any) {
    console.log(browser)
    return this;
  }

  async $url(browser: any, url: string) {
    return this;
  }
}

test("basic check", async () => {
  const driver = new AccountingDepartment();
  expect(driver).toBeDefined();
  expect(() => driver.getBrowser()).toThrowError(/Browser instance is undefined/)
  expect(await driver.start()).toBeInstanceOf(AccountingDepartment)
  expect(await driver.getBrowser()).toStrictEqual({ data: 1 })
  expect(await driver.end()).toBeInstanceOf(AccountingDepartment)
  expect(() => driver.getBrowser()).toThrowError(/Browser instance is undefined/)
});
