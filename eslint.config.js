import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import security from "eslint-plugin-security";
import n from "eslint-plugin-n";

export default [
  js.configs.recommended, // Active les règles JS recommandées par ESLint
  ...tseslint.configs.recommended, // Active les règles TypeScript recommandées
  {
    files: ["src/**/*.ts"],
    plugins: { prettier, security, n },
    rules: {
      // Règles TypeScript
      "@typescript-eslint/no-unused-vars": "error", // interdit les variables non utilisées
      "@typescript-eslint/no-explicit-any": "error", // interdit le type "any"
      "@typescript-eslint/explicit-function-return-type": "warn", // avertit si une fonction n'a pas de type de retour explicite

      // Sécurité
      "security/detect-object-injection": "error", // protège contre des attaques via injection d'objet
      "security/detect-unsafe-regex": "error", // signale les regex dangereuses

      // Node.js
      "n/no-missing-import": "error", // interdit d'importer des modules inexistants
      "n/no-unused-vars": "error", // interdit les variables inutilisées dans un contexte node

      // Qualité de code générale
      "no-console": "warn", // met un warning si console.log utilisé
      "prettier/prettier": "error", // considère tout non-respect du format Prettier comme une erreur
      quotes: ["error", "single"], // impose les simples quotes pour les chaînes
      semi: ["error", "always"], // impose les points-virgules
    },
    languageOptions: {
      parser: tseslint.parser, // indique le parser TypeScript à ESLint
      parserOptions: {
        project: "./tsconfig.json", // fournit le chemin vers la config TS
      },
    },
  },
  // 🧪 AJOUT : Configuration Jest spécifique
  {
    files: ["**/__tests__/**/*.test.ts"],
    languageOptions: {
      globals: {
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
        jest: "readonly",
      },
    },
    rules: {
      "no-console": "off", // autorise le console.log dans les tests
      "@typescript-eslint/no-explicit-any": "warn", // relâche la règle: seulement un avertissement
    },
  },
];
