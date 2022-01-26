module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: '@babel/eslint-parser',
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'indent': ['warn', 2],
    'quotes': ['warn', 'single'],
    'arrow-parens': 'off',
    'consistent-return': 'off',
    'func-names': 'off',
    'no-console': 'off',
    'prefer-const': 'warn',
    'radix': 'off',
    'no-unused-vars': ["off", { "vars": "local" }],
    'react/button-has-type': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
  },
  plugins: [
    'react-hooks'
  ],
  ignorePatterns: ["**/test", "**/__tests__"],
};
