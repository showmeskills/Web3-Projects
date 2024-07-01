module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'import', 'jsx-a11y', 'react-hooks', 'prettier'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warning',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'react/display-name': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
        singleQuote: true,
      },
    ],
    'no-alert': 1,
    'no-console': 0,
    'no-array-constructor': 2,
    'default-case': 1,
    eqeqeq: 0,
    'no-useless-constructor': 0,
    'no-case-declarations': 1,
    'id-match': 1,
    'no-var': 1,
    'no-empty-function': 0,
    'prefer-const': 1,
    'no-useless-escape': 1,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-inferrable-types': 0,
  },
};