module.exports = {
  extends: ['universe/native', 'universe/shared/typescript-analysis', 'expo', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
