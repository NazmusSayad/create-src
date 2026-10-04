import { defineConfig } from 'oxlint'
import { recommended, typescriptRules } from './eslint-recommended.mts'

export default defineConfig({
  extends: [recommended],
  plugins: ['typescript', 'import', 'jsx-a11y', 'react'],
  jsPlugins: [
    { name: 'import-js', specifier: 'eslint-plugin-import' },
    { name: 'react-js', specifier: 'eslint-plugin-react' },
    'eslint-plugin-check-file',
    'eslint-plugin-oxfmt',
  ],
  options: { typeAware: true },
  ignorePatterns: ['*.config.{js,ts,mjs,mts}'],
  settings: {
    react: { version: '19' },
    'import/resolver': { typescript: true, node: true },
  },
  rules: {
    'oxfmt/oxfmt': 'warn',
  },
  overrides: [
    {
      files: ['**/*.{mts,cts}'],
      rules: typescriptRules,
    },
    {
      files: ['**/*.{ts,tsx}'],
      rules: {
        ...typescriptRules,

        'no-void': 'off',
        'no-empty': 'off',
        'no-empty-pattern': 'off',
        'no-useless-escape': 'off',
        'no-case-declarations': 'off',

        'no-eval': 'error',
        'no-alert': 'error',
        'no-unreachable': 'error',
        'no-param-reassign': 'error',
        'no-empty-function': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',

        'max-lines': [
          'error',
          { max: 500, skipComments: true, skipBlankLines: true },
        ],
        'max-params': ['error', { max: 5, countVoidThis: false }],

        'arrow-body-style': 'off',
        'prefer-arrow-callback': ['error', { allowNamedFunctions: false }],
        'func-style': ['error', 'declaration', { allowArrowFunctions: false }],

        'import/named': 'off',
        'import/no-default-export': 'error',

        'react/react-in-jsx-scope': 'off',
        'react/no-danger-with-children': 'warn',
        'react/refs': 'off',
        'react/purity': 'off',
        'react/set-state-in-effect': 'off',
        'react/incompatible-library': 'off',

        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',

        'typescript/no-floating-promises': 'error',
        'no-unused-vars': [
          'warn',
          {
            argsIgnorePattern: '^__?',
            caughtErrors: 'all',
            caughtErrorsIgnorePattern: '^__?',
            destructuredArrayIgnorePattern: '^__?',
            varsIgnorePattern: '^__?',
            ignoreRestSiblings: true,
          },
        ],

        'check-file/folder-naming-convention': [
          'error',
          { '*/**': 'KEBAB_CASE' },
          { ignoreWords: ['__tests__', '__trash__', '.gql'] },
        ],
        'check-file/filename-naming-convention': [
          'error',
          { '**/*.*': 'KEBAB_CASE' },
          { ignoreMiddleExtensions: true },
        ],
      },
    },
    {
      files: ['*.config.{js,ts,mjs}', './src/app/**'],
      rules: { 'import/no-default-export': 'off' },
    },
  ],
})
