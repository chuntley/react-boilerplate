const config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "utils/(.*)$": "<rootDir>/src/utils/$1",
  },
};

module.exports = config;
