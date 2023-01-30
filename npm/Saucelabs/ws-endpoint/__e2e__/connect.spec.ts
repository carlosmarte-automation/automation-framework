// @ts-nocheck

import { beforeAll, describe, it, test, afterAll, expect } from "vitest";
import { join } from "path";
import { fileURLToPath } from "url";
const __dirname = fileURLToPath(new URL(".", import.meta.url));
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
dotenvExpand.expand(dotenv.config({ path: join(__dirname, "../test.env") }));

import wsEndpoint from "../src";

test("connection", async () => {
  const response = await wsEndpoint({
    username: process.env.SAUCE_USERNAME,
    accesskey: process.env.SAUCE_ACCESS_KEY
  });


});
