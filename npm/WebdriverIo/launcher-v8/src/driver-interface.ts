// window > document > element > form
// window > document > element > img

export class DriverInterfaceWindow {
  pageUrl(url: string) {}
  pageHtml() {}
  getWindowSize() {}
  takeScreenshot(filePath: string) {}
  networkThrottle(type: string) {}
  waitUntilElementIs(type: string) {}
}

export class DriverInterfaceDocument extends DriverInterfaceWindow {
  setCookies(name: string, value: string) {}
  getCookies(name: string) {}
  deleteCookies(names: Array<string>) {}
  selectByAttribute(element: any) {}
  selectByIndex(element: any) {}
  selectByVisibleText(element: any) {}
}

export class DriverInterfaceElement extends DriverInterfaceDocument {
  click(element: any) {}
  getAttribute(element: any) {}
  getCSSProperty(element: any) {}
  getProperty(element: any) {}
  getSize(element: any) {}
  getTagName(element: any) {}
  getText(element: any) {}
  isClickable(element: any) {}
  isDisplayed(element: any) {}
  isDisplayedInViewport(element: any) {}
  waitForClickable(element: any) {}
  waitForDisplayed(element: any) {}
  waitForExist(element: any) {}
}

export class DriverInterfaceForm extends DriverInterfaceElement {
  getValue(element: any) {}
  isEnabled(element: any) {}
  setValue(element: any) {}
  waitForEnabled(element: any) {}
}
