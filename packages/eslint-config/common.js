const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config} */
const baseConfig = {
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-import',
    'eslint-plugin-only-warn',
    'custom',
    'prettier',
  ],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
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
  ignorePatterns: ['src/**/*.test.ts', 'src/frontend/generated/*'],
  rules: {
    // Prettier
    'prettier/prettier': [
      'error',
      {
        // Your prettier options - these will be used by ESLint
        printWidth: 80,
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        arrowParens: 'avoid',
      },
    ],
    // Custom Rules
    'custom/single-purpose-function': 'error',
    'custom/require-named-parameters': 'error',

    // TypeScript Basic Rules
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'error',

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
