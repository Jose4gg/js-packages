### Add the following to your vscode/cursor settings.json to enable eslint auto-formatting on save

``` json
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
```