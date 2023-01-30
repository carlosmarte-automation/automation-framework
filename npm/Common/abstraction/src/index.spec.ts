import { beforeAll, describe, test, it, afterAll, expect } from 'vitest'
import {WebdriverLauncherAbstract} from ".";

test("basic check", () => {
  expect(WebdriverLauncherAbstract).toBeDefined()
});
