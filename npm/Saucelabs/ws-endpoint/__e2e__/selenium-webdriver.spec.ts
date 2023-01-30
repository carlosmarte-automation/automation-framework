// @ts-nocheck

import { beforeAll, describe, it, test, afterAll, expect } from "vitest";
import { join } from "path";
import { fileURLToPath } from "url";
const __dirname = fileURLToPath(new URL(".", import.meta.url));
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
dotenvExpand.expand(dotenv.config({ path: join(__dirname, "../test.env") }));

import webdriver from "selenium-webdriver";
import { nanoid } from "nanoid";
import wsEndpoint from "../src";

const saucelabsTestName = `integration-test ${nanoid()}`


test.skip(`selenium ${saucelabsTestName}`, async () => {
  const { saucelabHubEndpoint, httpStatusCode } = await wsEndpoint({
    username: process.env.SAUCE_USERNAME,
    accesskey: process.env.SAUCE_ACCESS_KEY,
  });

  if (httpStatusCode !== 200) throw new Error(`http code ${httpStatusCode}`);

  process.env.SELENIUM_REMOTE_URL = saucelabHubEndpoint;
  process.env.SELENIUM_REMOTE_CAPABILITIES = JSON.stringify({
    browserName: "safari",
    browserVersion: "15",
    platformName: "macOS 12",
    "sauce:options": {
      build: "sauce-js",
      name: saucelabsTestName,
    },
  });
  
  const driver = new webdriver.Builder()
    .usingServer(saucelabHubEndpoint)
    .withCapabilities({
      browserName: "safari",
      browserVersion: "15",
      platformName: "macOS 12",
      "sauce:options": {
        build: "sauce-js",
        name: saucelabsTestName,
      },
    })
    .build();


    console.log(await driver.session_);
    console.log(await driver);
  await driver.get(process.env.TEST_URL);

  try {
    // await driver.wait(webdriver.until.titleMatches(//i), 5000);
    console.log(await driver.getTitle());
    await driver.executeScript("sauce:job-result=passed");
  } catch (e) {
    await driver.executeScript("sauce:job-result=failed");
    throw new Error("failed")
  }
  await driver.quit();
});
