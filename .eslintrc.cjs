module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'prettier.config.cjs', 'postcss.config.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/order': [
      "error",
      {
        "groups": ["builtin","external","internal",["parent", "sibling"],"index","object","type","unknown"],
        "pathGroups": [
          {
            "pattern": "@/**",
            "group": "unknown"
          },
        ],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ],
  },
  settings: {
    "import/resolver": {
      "typescript": {}
    }
  }
}
