const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const prettier = require('eslint-config-prettier');
const turbo = require('eslint-config-turbo');

const commonConfig = require('./common');

module.exports = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  turbo,
  {
    ...commonConfig,
    plugins: {
      ...commonConfig.plugins,
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    languageOptions: {
      ...commonConfig.languageOptions,
      globals: {
        React: true,
        JSX: true,
      },
      parserOptions: {
        ...commonConfig.languageOptions.parserOptions,
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    settings: {
      ...commonConfig.settings,
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...commonConfig.rules,
      // React-specific rules
      'react/jsx-no-useless-fragment': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
      'react/memo': 'warn',
    }
  }
);
