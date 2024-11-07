const commonConfig = require('./common');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config[]} */
module.exports = [
  ...commonConfig,
  {
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
];
