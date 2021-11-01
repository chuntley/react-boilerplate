const config = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "test/(.*)$": "<rootDir>/src/test/$1",
  },
};

module.exports = config;
