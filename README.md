# Guide to working with Github Packages

## NPMRC

Add the following to your `.npmrc` file to authenticate with the github packages registry. Replace `${GITHUB_PACKAGES_ACCESS_TOKEN}` with the github packages access token found in 1password under the
same name.

```bash
@nayya-com:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_PACKAGES_ACCESS_TOKEN}
```

run `pnpm install` to install the packages.

## Creating a Changeset

```bash
pnpm changeset
```

### Changeset Process

- Select changed packages
- Choose version bump type
- Describe changes

## Version Control

- Commit changesets to repository

## Version Update

```bash
npx changeset version
```

- Updates package versions
- Generates CHANGELOG files

## Package Publishing

The workflow for publishing packages is included in the `workflows/publish.yml` file. The publish.yml file will first detect if there are any packages that have changed and then it will assert that
there are changesets for those packages. If there are no changesets for the changed packages, the workflow will fail. Once all the changesets are merged to the main branch, the workflow will publish the packages to the github packages registry found here: https://github.com/orgs/Nayya-com/packages.

## VSCode/Cursor Settings

### Add the following to your vscode/cursor settings.json to enable eslint auto-formatting on save

```json
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
```
