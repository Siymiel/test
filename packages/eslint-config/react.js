module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    node: true,
    browser: true,
    es2020: true,
  },
  extends: [
    '@ais/eslint-config',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
  ],
  rules: {},
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};
