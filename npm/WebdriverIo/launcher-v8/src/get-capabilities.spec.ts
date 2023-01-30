import { beforeAll, describe, it, test, afterAll, expect } from 'vitest'
import getCapabilities, { chromeCapabilities } from "./get-capabilities";


test("ensure default is chrome browser", () => {
  expect(getCapabilities()).toStrictEqual(chromeCapabilities());
});
