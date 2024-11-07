# eslint-plugin-custom

custom eslint plugin

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-custom`:

```sh
npm install eslint-plugin-custom --save-dev
```

## Usage

In your [configuration file](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file), import the plugin `eslint-plugin-custom` and add `custom` to the `plugins` key:

```js
import custom from "eslint-plugin-custom";

export default [
    {
        plugins: {
            custom
        }
    }
];
```


Then configure the rules you want to use under the `rules` key.

```js
import custom from "eslint-plugin-custom";

export default [
    {
        plugins: {
            custom
        },
        rules: {
            "custom/rule-name": "warn"
        }
    }
];
```



## Configurations

<!-- begin auto-generated configs list -->
TODO: Run eslint-doc-generator to generate the configs list (or delete this section if no configs are offered).
<!-- end auto-generated configs list -->



## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


