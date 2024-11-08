const eslintConfigReact = require('@nayya-com/eslint-config/react');

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config[]} */
module.exports = [
  ...eslintConfigReact,
  {
    ignores: [
      'eslint.config.cjs',
      'lib/**',
      'babel.config.js',
      'rollup.config.mjs',
      'webpack.config.js',
    ],
  },
];
