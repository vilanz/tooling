module.exports = {
  extends: ['airbnb-typescript', 'airbnb/hooks', 'prettier'],
  ignorePatterns: ['.eslintrc.js', '.prettierc.js', 'jest.config.js'],
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
  },
};
