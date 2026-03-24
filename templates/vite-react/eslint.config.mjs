import { includeIgnoreFile } from '@eslint/compat'
import pluginJs from '@eslint/js'
import pluginCheckFile from 'eslint-plugin-check-file'
import pluginImport from 'eslint-plugin-import'
import pluginJsxA11Y from 'eslint-plugin-jsx-a11y'
import pluginPrettier from 'eslint-plugin-prettier'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import { defineConfig } from 'eslint/config'
import { fileURLToPath } from 'node:url'
import typescriptESLint from 'typescript-eslint'

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url))

export default defineConfig([
  includeIgnoreFile(gitignorePath),

  pluginJs.configs.recommended,
  typescriptESLint.configs.recommended,

  pluginImport.flatConfigs.recommended,
  pluginJsxA11Y.flatConfigs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReactHooks.configs.flat.recommended,

  {
    plugins: {
      prettier: pluginPrettier,
      'check-file': pluginCheckFile,
    },

    rules: {
      'no-void': 0,
      'no-empty': 0,
      'no-empty-pattern': 0,
      'no-useless-escape': 0,
      'no-case-declarations': 0,

      'no-eval': 2,
      'no-alert': 2,
      'no-unreachable': 2,
      'no-param-reassign': 2,
      'no-empty-function': 2,
      'no-useless-rename': 2,
      'no-useless-return': 2,
      'no-empty-static-block': 2,

      'max-lines': [2, { max: 500, skipComments: true, skipBlankLines: true }],
      '@typescript-eslint/max-params': [2, { max: 5, countVoidThis: false }],

      'arrow-body-style': 0,
      'prettier/prettier': 1,
      'prefer-arrow-callback': [2, { allowNamedFunctions: false }],
      'func-style': [2, 'declaration', { allowArrowFunctions: false }],

      'import/named': 0,
      'import/no-default-export': 2,

      'react/prop-types': 0,
      'react/react-in-jsx-scope': 0,
      'react/no-danger-with-children': 1,

      'react-hooks/refs': 0,
      'react-hooks/purity': 0,
      'react-hooks/set-state-in-effect': 0,
      'react-hooks/incompatible-library': 0,

      'jsx-a11y/click-events-have-key-events': 0,
      'jsx-a11y/label-has-associated-control': 0,
      'jsx-a11y/no-static-element-interactions': 0,

      '@typescript-eslint/no-floating-promises': 2,
      '@typescript-eslint/no-unused-vars': [
        1,
        {
          argsIgnorePattern: '^__?',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^__?',
          destructuredArrayIgnorePattern: '^__?',
          varsIgnorePattern: '^__?',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/naming-convention': [
        2,
        {
          selector: ['typeLike', 'interface'],
          leadingUnderscore: 'allowSingleOrDouble',
          trailingUnderscore: 'allowSingleOrDouble',
          format: ['PascalCase'],
        },
        {
          selector: 'parameter',
          leadingUnderscore: 'allowSingleOrDouble',
          trailingUnderscore: 'allowSingleOrDouble',
          format: ['camelCase'],
        },
        {
          selector: 'variable',
          leadingUnderscore: 'allowSingleOrDouble',
          trailingUnderscore: 'allowSingleOrDouble',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },
      ],

      'check-file/folder-naming-convention': [
        2,
        { '*/**': 'KEBAB_CASE' },
        { ignoreWords: ['__tests__', '__trash__', '.gql'] },
      ],
      'check-file/filename-naming-convention': [
        2,
        { '**/*.*': 'KEBAB_CASE' },
        { ignoreMiddleExtensions: true },
      ],
    },

    languageOptions: {
      parser: typescriptESLint.parser,
      parserOptions: {
        project: 'tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },

    settings: {
      react: {
        version: 'detect',
      },

      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
  },

  {
    files: ['./src/app/**'],
    rules: {
      'check-file/folder-naming-convention': [
        2,
        { './src/app/**': 'NEXT_JS_APP_ROUTER_CASE' },
      ],
    },
  },

  {
    files: ['*.config.{js,ts,mjs}', './src/app/**'],
    rules: {
      'import/no-default-export': 0,
    },
  },
])
