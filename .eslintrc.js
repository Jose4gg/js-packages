/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  // extends: ['./packages/config-eslint/react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
};
