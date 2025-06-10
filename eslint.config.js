import js from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

export default [
  // ESLint recommended rules
  js.configs.recommended,

  // Astro config
  ...eslintPluginAstro.configs.recommended,

  // Vue config from package
  ...pluginVue.configs["flat/recommended"],

  // Enhanced configuration for Astro files
  {
    files: ["**/*.astro"],
    rules: {
      /**
       * in astro it is OK to return early in frontmatter
       * e.g. to redirect, but we dont want to return in
       * the end
       */
      "consistent-return": "off",
    },
  },

  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    // Vue-specific rules
    rules: {
      "vue/no-unused-vars": "warn",
      // "@typescript-eslint/no-explicit-any": "warn", // Downgrade to warning to fix gradually
    },
  },

  // Add this new rule configuration for .d.ts files
  {
    files: ["**/*.d.ts"],
    rules: {
      "@typescript-eslint/triple-slash-reference": "off",
      //  "@typescript-eslint/no-explicit-any": "off", // Often needed in type definitions
    },
  },

  {
    ignores: [".astro/", "dist/", "**/*.guard.ts", "node_modules/"],
  },
];
