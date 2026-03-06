import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import eslintReact from "@eslint-react/eslint-plugin";
import prettierRecommended from "eslint-plugin-prettier/recommended";

export default defineConfig(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    ...eslintReact.configs["recommended-typescript"],
  },
  prettierRecommended,
);
