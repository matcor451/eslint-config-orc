module.exports = {
  settings: {
    react: {
      version: 'detect'
    },
    'import/internal-regex': '^src/'
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'react-app/jest',
    'plugin:react/recommended',
    'standard'
  ],
  plugins: [
    '@typescript-eslint',
    'no-relative-import-paths'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-trailing-spaces': 'error',
    'max-len': ['error', { code: 120 }],
    'func-style': ['error', 'expression'],
    'import/no-relative-parent-imports': 'error',
    'no-relative-import-paths/no-relative-import-paths': [
      'warn',
      { allowSameFolder: true }
    ],
    'react/hook-use-state': [2],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        offsetTernaryExpressions: true
      }
    ]
  },
  ignorePatterns: ['node_modules/*', 'build/*']
}
