const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config[]} */
const baseConfig = [
  {
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      import: require('eslint-plugin-import'),
      'only-warn': require('eslint-plugin-only-warn'),
      prettier: require('eslint-plugin-prettier'),
      '@nayya-com/eslint-plugin-custom': require('@nayya-com/eslint-plugin-custom'),
    },
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        project,
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          project,
        },
      },
    },
    rules: {
      // Custom Rules
      '@nayya-com/eslint-plugin-custom/single-purpose-function': 'error',
      '@nayya-com/eslint-plugin-custom/require-named-parameters': 'error',

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
  },
  // require('eslint/conf/eslint-recommended'),
  // require('@typescript-eslint/eslint-plugin').configs.recommended,
  // require('eslint-config-prettier'),
];

module.exports = baseConfig;
