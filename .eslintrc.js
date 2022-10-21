module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    /* eslint:recommended */
    'semi': ["error", "always"],
    'indent': ["error", 2],
    'comma-spacing': ["error", { before: false, after: true }],
    /* plugin:vue/vue3-essential */
    'vue/html-closing-bracket-newline': ["error", {
      "singleline": "never",
      "multiline": "always"
    }],
    'vue/html-closing-bracket-spacing': ["error"],
    'vue/html-end-tags': ["error"],
    'vue/html-self-closing': ["error", {
      "html": {
        "void": "always",
        "normal": "never"
      }
    }]
  }
}
