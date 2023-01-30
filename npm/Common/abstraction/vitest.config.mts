import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^automation-framework-([a-zA-Z0-9\-]+)$/,
        replacement: "automation-framework-$1/src",
      },
    ],
  },
  test: {
    testTimeout: 1000 * 60,
    hookTimeout: 60 * 1000,
    threads: false,
    include: ["**/(__e2e__|src|__tests__)/**/?(*.)+(spec|test).[jt]s?(x)"],
    exclude: ["dist", "**/node_modules/**"],
    coverage: {
      enabled: false,
    },
  },
});
