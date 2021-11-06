module.exports = {
  "plugins": [
    "svelte3",
    "@typescript-eslint"
  ],
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module",
    "project": ['./jsconfig.json'],
    "extraFileExtensions": ['.svelte'],
    "checkJs": true
  },
  "ignorePatterns": ['node_modules'],
  "rules": {
    "no-use-before-define": ["error", "nofunc"]
  },
  "overrides": [
    {
      "files": ["*.svelte"],
      "processor": 'svelte3/svelte3',
      "rules": {
      },
      "settings": {
        "svelte3/ignore-styles": () => true,
      }
    },
    {
      "files": ["*.ts"],
      "extends": [
        "plugin:@typescript-eslint/recommended"
      ],
      "parser": "@typescript-eslint/parser",
      "rules": {
      }
    },
  ]
};