import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default {
  roots: ["<rootDir>/"],
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
  setupFilesAfterEnv: [require.resolve("jest-config/jest-setup-standard.js")],
  testMatch: ["**/(src|__tests__|test)/**/?(*.)+(spec|test).[jt]s?(x)"],
  testEnvironment: "node",
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": require.resolve(
      "jest-config/jest-babel-transform.js"
    ),
    "^.+\\.css$": require.resolve("jest-config/css-transform.mjs"),
    "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)": require.resolve(
      "jest-config/file-transform.mjs"
    ),
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  modulePaths: [],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
  },
  moduleFileExtensions: [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node",
  ],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  resetMocks: true,
};
