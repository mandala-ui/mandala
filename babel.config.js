module.exports = {
  "plugins": [
    "transform-es2015-modules-commonjs",
    "@babel/plugin-proposal-function-sent",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-throw-expressions",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-syntax-import-meta",
    "@babel/plugin-proposal-json-strings",
  ],
  "presets": ["@babel/preset-react", "@babel/preset-env"]
};
