module.exports = {
  customSyntax: "postcss-scss",
  extends: ["stylelint-config-standard",
    "stylelint-config-rational-order",
    "stylelint-prettier/recommended"],
  plugins: ["stylelint-order", "stylelint-scss"],
};
