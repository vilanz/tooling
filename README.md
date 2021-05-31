# tooling

JS tooling for my personal projects.

## eslint

ESLint config with Airbnb's standards plus Typescript and React support.

```js
module.exports = {
  ...require('@vilanz/tooling/eslint'), // can't use extends because it requires the package name to be prefixed with eslint-config-*
  parserOptions: {
    project: './tsconfig.json',
  },
};
```

## prettier

Prettier config.

```js
module.exports = require('@vilanz/tooling/prettier');
```

## typescript

Typescript config for Node 16+, with React support.

```json
{
  "extends": "@vilanz/tooling/typescript"
}
```
