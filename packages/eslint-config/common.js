const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config} */
const baseConfig = {
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-import',
    'eslint-plugin-only-warn',
    'prettier',
    'custom',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ['.eslintrc.cjs'],
  rules: {
    // Custom Rules
    'custom/single-purpose-function': 'error',
    'custom/require-named-parameters': 'error',

    // TypeScript Basic Rules
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'error',

    // Console Logging
    'no-console': 'error',

    // Naming Conventions
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        selector: 'function',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'class',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
      },
    ],

    // Import Rules
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],

    // Error Handling
    'no-throw-literal': 'error',
  },
};

module.exports = baseConfig;
