"use strict";

const babelJest = require("babel-jest").default;

module.exports = babelJest.createTransformer({
  presets: [
    "@babel/preset-env"
  ],
  babelrc: false,
  configFile: false,
});