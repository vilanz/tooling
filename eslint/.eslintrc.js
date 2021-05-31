module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:import/recommended',
    'prettier',
  ],
  rules: {
    'import/order': ['error', { 'newlines-between': 'never' }],
  },
};
