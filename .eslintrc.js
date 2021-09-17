module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/recommended', '@vue/airbnb', 'plugin:vuejs-accessibility/recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: ['vuejs-accessibility'],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': 'off',
    'import/prefer-default-export': 'off',
    'max-len': ['error', { code: 150 }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-underscore-dangle': 'off',
    'operator-linebreak': 'off',
    semi: 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
      },
    ],
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
}
