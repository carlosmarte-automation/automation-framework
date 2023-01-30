
const waitUntilAppReadystate = (browser: any) =>
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, //global timeout package
      timeoutMsg: "application readyState",
    }
  );

export default waitUntilAppReadystate;
