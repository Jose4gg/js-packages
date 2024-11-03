/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@nayya/config-eslint/react'],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
};
