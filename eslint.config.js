import js from "@eslint/js";
import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';

export default [
  // ESLint recommended rules
  js.configs.recommended,

  // Astro config
  ...eslintPluginAstro.configs.recommended, // Using .recommended for v1.3.1 ESM

  // TypeScript config
  ...tseslint.configs.recommended,

  // Vue config
  ...pluginVue.configs['flat/recommended'],

  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  {
    ignores: ['.astro/', 'dist/']
  }
];
