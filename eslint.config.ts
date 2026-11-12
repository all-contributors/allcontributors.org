import js from '@eslint/js';
import markdown from '@eslint/markdown';
import jsonc from 'eslint-plugin-jsonc';
import packageJson from 'eslint-plugin-package-json';
import perfectionist from 'eslint-plugin-perfectionist';
import yml from 'eslint-plugin-yml';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores([
    '.astro/**',
    'coverage/**',
    'dist/**',
    '.all-contributorsrc',
    'pnpm-lock.yaml',
  ]),
  { linterOptions: { reportUnusedDisableDirectives: 'error' } },
  {
    extends: [
      js.configs.recommended,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    files: ['**/*.{mjs,js,ts}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: { perfectionist },
    rules: {
      'perfectionist/sort-exports': 'error',
      'perfectionist/sort-imports': 'error',
      'perfectionist/sort-named-exports': 'error',
      'perfectionist/sort-named-imports': 'error',
    },
    settings: { perfectionist: { partitionByComment: true, type: 'natural' } },
  },
  {
    extends: [jsonc.configs['flat/recommended-with-json']],
    files: ['**/*.json'],
  },
  {
    extends: [packageJson.configs.recommended, packageJson.configs.stylistic],
    files: ['package.json'],
    rules: {
      // TODO: Tech debt that we'll want to address in the future.
      // https://github.com/all-contributors/cli/issues/606
      'package-json/require-exports': 'off',
    },
  },
  {
    extends: [markdown.configs.recommended],
    files: ['**/*.md'],
    rules: {
      // https://github.com/eslint/markdown/issues/294
      'markdown/no-missing-label-refs': 'off',
    },
  },
  {
    extends: [yml.configs['flat/standard'], yml.configs['flat/prettier']],
    files: ['**/*.{yml,yaml}'],
    rules: {
      'yml/sort-sequence-values': [
        'error',
        { order: { type: 'asc' }, pathPattern: '^.*$' },
      ],
    },
  },
]);
