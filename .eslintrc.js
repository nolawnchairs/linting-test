
const conventions = require('./ts-conventions')

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  ignorePatterns: ['.eslintrc.js', 'ormconfig.js'],
  plugins: [
    '@typescript-eslint/eslint-plugin',
  ],
  extends: [
    'prettier',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      ...conventions,
    ],
  },
}
