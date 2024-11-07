const { resolve } = require('node:path');
const eslintJs = require('@eslint/js');
const typescriptEslint = require('typescript-eslint');
const eslintConfigPrettier = require('eslint-config-prettier');
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const typescriptEslintParser = require('@typescript-eslint/parser');
const eslintPluginImport = require('eslint-plugin-import');
const eslintPluginOnlyWarn = require('eslint-plugin-only-warn');
const eslintPluginPrettier = require('eslint-plugin-prettier');
const eslintPluginCustom = require('@nayya-com/eslint-plugin-custom');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config[]} */
const baseConfig = [
  eslintJs.configs.recommended,
  ...typescriptEslint.configs.recommended,
  eslintConfigPrettier,
  {
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      import: eslintPluginImport,
      'only-warn': eslintPluginOnlyWarn,
      prettier: eslintPluginPrettier,
      '@nayya-com/eslint-plugin-custom': eslintPluginCustom,
    },
    ignores: ['**/build/**', '**/dist/**', '**/node_modules/**'],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        files: ['**/*.ts', '**/*.tsx'],
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
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',

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
];

module.exports = baseConfig;
