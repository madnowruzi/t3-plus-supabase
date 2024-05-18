/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  singleQuote: false,
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
