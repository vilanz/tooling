# tooling

JS tooling for my personal projects.

## Installing

```
yarn add vilanz/tooling#main -D

npx install-peerdeps @vilanz/tooling -D
```

### eslint

ESLint config with Airbnb's standards plus Typescript and React support.

```js
module.exports = {
  extends: './node_modules/@vilanz/tooling/eslint', // we don't have the eslint-config-* prefix
  parserOptions: {
    project: './tsconfig.json',
  },
};
```

### prettier

Prettier config.

```js
module.exports = require('@vilanz/tooling/prettier');
```

### typescript

Typescript config for Node 16+, with React support.

```json
{
  "extends": "@vilanz/tooling/typescript"
}
```
