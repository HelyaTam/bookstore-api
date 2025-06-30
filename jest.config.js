/** @type {import('jest').Config} */
export default {
  preset: "ts-jest/presets/default-esm",
  extensionsToTreatAsEsm: [".ts"],
  testEnvironment: "node",

  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },

  transform: {
    "^.+\\.ts$": ["ts-jest", { useESM: true }],
  },

  testMatch: ["**/__tests__/**/*.test.ts"],

  clearMocks: true,
  verbose: true,
};
