import { defineConfig } from 'oxlint'
import { recommended, typescriptRules } from './eslint-recommended.mts'

export default defineConfig({
  extends: [recommended],
  plugins: ['typescript', 'import'],
  jsPlugins: ['eslint-plugin-check-file', 'eslint-plugin-oxfmt'],
  options: { typeAware: true },
  ignorePatterns: [
    '/*.{js,mjs,ts,mts}',
    '**/node_modules',
    '**/build',
    '**/dist',
  ],
  rules: { 'oxfmt/oxfmt': 'warn' },
  overrides: [
    {
      files: ['**/*.{mts,cts}'],
      rules: typescriptRules,
    },
    {
      files: ['**/*.{ts,tsx}'],
      rules: {
        ...typescriptRules,

        'import/prefer-default-export': 'off',
        'no-underscore-dangle': 'off',
        'no-plusplus': 'off',
        'no-useless-escape': 'off',
        'typescript/explicit-module-boundary-types': 'off',
        'no-void': 'off',
        'symbol-description': 'off',
        'consistent-return': 'off',
        'no-unused-vars': [
          'warn',
          {
            argsIgnorePattern: '^_',
            caughtErrors: 'all',
            caughtErrorsIgnorePattern: '^_',
            destructuredArrayIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            ignoreRestSiblings: true,
          },
        ],
        'no-param-reassign': 'error',
        'typescript/no-floating-promises': 'error',
        'prefer-arrow-callback': ['error', { allowNamedFunctions: false }],
        'func-style': ['error', 'declaration', { allowArrowFunctions: false }],
        'max-lines': [
          'error',
          { max: 200, skipBlankLines: true, skipComments: true },
        ],
        'max-lines-per-function': ['error', { max: 50 }],
        'check-file/folder-naming-convention': [
          'error',
          { '*/**': 'KEBAB_CASE' },
        ],
        'check-file/filename-naming-convention': [
          'error',
          { '**/*.*': 'KEBAB_CASE' },
          { ignoreMiddleExtensions: true },
        ],
        'import/no-default-export': 'error',
      },
    },
    {
      files: ['**/*.test.ts'],
      rules: {
        'max-lines': 'off',
        'typescript/no-unsafe-call': 'off',
        'typescript/no-unsafe-assignment': 'off',
        'typescript/no-unsafe-member-access': 'off',
        'typescript/no-require-imports': 'off',
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
})
