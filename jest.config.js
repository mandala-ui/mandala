module.exports = {
  "collectCoverageFrom": [
    "packages/**/*{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/es/**",
    "!**/lib/**"
  ],
  "setupFilesAfterEnv": ["<rootDir>/jest.config-enzyme.js"],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "testEnvironment": "jsdom",
  "testMatch": [
    "**/?(*.)(spec|test).js?(x)",
    "**/?(*.)(spec|test).ts?(x)"
  ],
  "testPathIgnorePatterns": [
    "<rootDir>[/\\\\](build|docs|es|lib|node_modules)[/\\\\]"
  ],
  "testURL": "http://localhost",
  "transform": {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  "transformIgnorePatterns": [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"
  ]
};
