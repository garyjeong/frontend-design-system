module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', '**/*.test.tsx', '**/*.test.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { 
        allowConstantExport: true, 
        allowExportNames: [
          'variants', 
          'avatarVariants', 
          'buttonVariants', 
          'cardVariants', 
          'menuVariants', 
          'menuItemVariants', 
          'toastContainerVariants',
          'useToast',
          'useTheme',
        ],
      },
    ],
    '@typescript-eslint/no-unused-vars': ['warn', {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    }],
    'react-hooks/exhaustive-deps': 'warn',
  },
};
