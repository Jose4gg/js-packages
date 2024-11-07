const eslintConfigReact = require('@nayya-com/eslint-config/react');

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config[]} */
module.exports = [
  ...eslintConfigReact,
  {
    ignores: [
      'eslint.config.cjs',
      '.storybook/**',
      'dist/**',
      'babel.config.js',
      'deployments/**',
      'public/mockServiceWorker.js',
      'vite.config.js',
    ],
  },
];
