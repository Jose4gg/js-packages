# `@nayya-com/eslint-config`

## Example usage

For react projects

```js
const eslintConfigReact = require('@nayya-com/eslint-config/react');

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config[]} */
module.exports = [
  ...eslintConfigReact,
  {
    ignores: [
      /** all files that eslint should ignore */
    ],
  },
];
```

For non-react projects:

```js
const eslintConfigCommon = require('@nayya-com/eslint-config/common');

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config[]} */
module.exports = [
  ...eslintConfigCommon,
  {
    ignores: [
      /** all files that eslint should ignore */
    ],
  },
];
```
