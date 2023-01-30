class UndefinedBrowserInstance extends Error {
  constructor() {
    const message = "Webdriver Browser instance is undefined";
    const options = {
      cause: { code: "[00102] Undefined_Browser", values: [] },
    };
    super(message, options);
  }
}

export default UndefinedBrowserInstance;