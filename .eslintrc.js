module.exports = {
  env: {
    es6: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: [
    "react",
    "jsx-a11y",
    "import-helpers",
    "import",
    "react-hooks",
    "prettier",
  ],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "react/jsx-one-expression-per-line": "off",
    "global-require": "off",
    "react-native/no-raw-text": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    camelcase: "off",
    "no-return-assign": "off",
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-curly-newline": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        groups: [
          "/^react/",
          "/^expo/",
          "module",
          "/^~/",
          [("parent", "sibling", "index")],
        ],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: true,
        assignment: true,
        return: true,
        arrow: true,
      },
    ],
  },
  settings: {
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathSuffix: "src",
      },
    },
  },
};
