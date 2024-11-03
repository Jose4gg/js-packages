/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@nayya/config-eslint/react.js", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
