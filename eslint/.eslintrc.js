module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'semistandard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'import/order': ['warn', {
      alphabetize: { order: 'asc', caseInsensitive: true },
      'newlines-between': 'never'
    }],
    'import/no-default-export': 'warn',
    'space-before-function-paren': ['error', 'never']
  }
};
