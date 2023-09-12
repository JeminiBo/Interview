module.exports = {
  env: { browser: true, 'react-native/react-native': true },
  settings: {
    react: { version: 'detect' },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: { project: './tsconfig.json' },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native',
    'import',
    'prettier',
  ],
  rules: {
    eqeqeq: 'error',
    'no-console': 'warn',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-ignore': 'allow-with-description',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/display-name': 'off',
    'react/no-unescaped-entities': 0,
    'react-native/sort-styles': 0,
    'react-native/split-platform-components': 0,
    'react-native/no-color-literals': 0,
    'react-hooks/exhaustive-deps': 0,
    'sort-imports': [
      'error',
      { ignoreCase: true, ignoreDeclarationSort: true },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always-and-inside-groups',
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'index',
        ],
        pathGroups: [
          {
            pattern: 'react+(|-native)',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@app/**',
            group: 'internal',
          },
          {
            pattern: '^\\.\\.(?!/?$)", "^\\.\\./?$',
            group: 'parent',
          },
          {
            pattern: '^./utils',
            group: 'index',
          },
          {
            pattern: './styles',
            group: 'index',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  ignorePatterns: ['src/types'],
};
