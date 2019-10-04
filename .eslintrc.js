module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json'
  },
  rules: {
    quotes: ['error', 'double'],

    // React
    // Disable in favor of typescript-eslint
    'react/prop-types': 'off',
    'react/display-name': 'off',

    // More react
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] }
    ],
    'react/jsx-props-no-spreading': 'off',

    // Rules for ts
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/object-literal-key-quotes': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },

  env: {
    browser: true
  }
};
