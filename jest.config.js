"use strict";

module.exports = {
  transform: { "^.+\\.ts?$": "ts-jest" },
  testEnvironment: "node",
  testRegex: "/__tests__/.*\\.spec.ts",
  moduleFileExtensions: ["ts", "js"],
};
