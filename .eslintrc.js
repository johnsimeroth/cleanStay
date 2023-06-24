module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    quotes: [1, 'single'],
    'jsx-quotes': [1, 'prefer-single'],
    'react/jsx-filename-extension': [1, { extensions: ['.jsx'] }],
    'react/prop-types': 0,
  },
};
