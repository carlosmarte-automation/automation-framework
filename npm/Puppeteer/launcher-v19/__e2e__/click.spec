import { beforeAll, describe, it, afterAll, expect } from 'vitest'
import WebDriverIoLauncher from "../src/webdriverio-launcher.js";

let webDriverIoLauncher: WebDriverIoLauncher;

beforeAll(async () => {
   webDriverIoLauncher = new WebDriverIoLauncher();
   await webDriverIoLauncher.init();
})

describe('Firefox', () => {
  it("click on button", async () => {
  })

})

afterAll(async () => {
    await webDriverIoLauncher.end();
})

// describe('happy path test', () => {
//   const webDriverIoLauncher = new WebDriverIoLauncher();

//   beforeEach(() => {
//     webDriverIoLauncher.init();
//   })
//   afterEach(() => {
//     webDriverIoLauncher.end();
//   })


// })



// test("click on button", async () => {
//   // const webDriverIoLauncher = new WebDriverIoLauncher();
//   // await webDriverIoLauncher.launch();
//   // const browser = await webDriverIoLauncher.getBrowser();

//   // console.log(browser);
//   // await browser.url("https://webdriver.io");

//   // const apiLink = await browser.$("=API");
//   // console.log(apiLink);
//   // await apiLink.click();

//   // await browser.deleteSession();
// });
