# eslint-config

## Requirements

- node `>=18.17.0`
- VSCode
  -  [Install ESLint VSCode Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  -  Go to: `File -> Preferences -> Settings -> Open Setting (JSON)` set the code below
```json
"eslint.workingDirectories": [
    "src",
    "app",
],
```

## Installation

```bash
yarn add -D @douglasmatosdev/eslint-config
```

## Setup

Add in your package.json below settings
```json
"prettier": "@douglasmatosdev/eslint-config/prettier",
"eslintConfig": {
  "extends": "@douglasmatosdev/eslint-config/eslint"
}
```

> Reload VSCode
