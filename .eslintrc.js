const newLocal = 'prettier';
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['next', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',

    'prettier',

  ],
  rules: {
  //   '@typescript-eslint/no-unused-vars': 'error',
  //   'import/extensions': 'off',
  //   'import/no-extraneous-dependencies': 'off',
  //   'import/no-unresolved': 'off',
  //   'import/prefer-default-export': 'off',
  //   'no-nested-ternary': 'off',
  //   'no-plusplus': 'off',
  //   'no-unused-vars': 'off',
  //   'no-use-before-define': 'off',
  //   'prettier/prettier': 'error',
  //   'react/destructuring-assignment': 'off',
  //   'react/function-component-definition': 'off',
  //   'react/jsx-filename-extension': 'off',
  //   'react/jsx-props-no-spreading': 'off',
  //   'react/require-default-props': 'off',
  //   'typescript-sort-keys/interface': 'error',
  //   'typescript-sort-keys/string-enum': 'error',
  //   'unused-imports/no-unused-imports': 'error',
  //   'prefer-arrow/prefer-arrow-functions': [
  //     'error',
  //     {
  //       disallowPrototype: true,
  //       singleReturnOnly: true,
  //       classPropertiesAllowed: false,
  //     },
  //   ],
  },
};
