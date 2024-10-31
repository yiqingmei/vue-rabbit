module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential"
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "quotes": ["error", "single"],
    "vue/muti-word-component-names": 0
  },
};
