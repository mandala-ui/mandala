module.exports = {
  "collectCoverageFrom": [
    "packages/**/*{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/es/**",
    "!**/lib/**"
  ],
  "moduleNameMapper": {
    "\\.(css|less)$": "<rootDir>/node_modules/jest-css-modules",
    "react-native$": "react-native-web"
  },
  "setupFilesAfterEnv": ["<rootDir>/jestConfig.js"],
  "testEnvironment": "node",
  "testMatch": [
    "**/?(*.)(spec|test).js?(x)"
  ],
  "testPathIgnorePatterns": [
    "<rootDir>[/\\\\](build|docs|es|lib|node_modules)[/\\\\]"
  ],
  "testURL": "http://localhost",
  "transform": {
    ".+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest"
  },
  "transformIgnorePatterns": [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"
  ]
};
