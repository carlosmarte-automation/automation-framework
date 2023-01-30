import { beforeAll, describe, it, test, afterAll, expect } from 'vitest'
import UndefinedBrowserInstance from './undefined-browser-instance';

test("standards", async () => {
  expect(UndefinedBrowserInstance).toBeDefined();
});
