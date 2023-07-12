module.exports = {
  root: true,
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['@react-native', 'prettier'],
  indent: ['error', 2, {offsetTernaryExpressions: true}],
  rules: {
    'prettier/prettier': 'error',
  },
};
