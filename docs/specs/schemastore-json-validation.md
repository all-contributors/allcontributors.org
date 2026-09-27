# Spec: SchemaStore JSON Schema Documentation and Validation Guide (#1012)

## 1. Overview & Problem

In `allcontributors.org`, the configuration documentation in `src/content/docs/en/bot/configuration.mdx` outlines keys available in `.all-contributorsrc`.

However, as raised in issue #1012:

1. A complete JSON Schema for the `.all-contributorsrc` configuration file was contributed to SchemaStore at `https://json.schemastore.org/all-contributors.json`, but the documentation does not mention it or provide instructions on how to use it.
2. Users and contributors editing `.all-contributorsrc` can benefit greatly from editor autocomplete, inline documentation of keys, and automatic validation in VS Code, JetBrains IDEs, and Neovim by specifying `"$schema"`.
3. In `src/content/docs/en/bot/configuration.mdx`, the sample `.all-contributorsrc` JSON block has a syntax error around line 62: missing a trailing comma after `"commitType": "docs"`.

## 2. Goals & Solutions

- Fix the syntax error in the configuration JSON example in `src/content/docs/en/bot/configuration.mdx`.
- Include `"$schema": "https://json.schemastore.org/all-contributors.json"` at the top of the sample `.all-contributorsrc` JSON.
- Add a dedicated section `## JSON Schema Validation` explaining:
  - The official SchemaStore URL.
  - How adding `"$schema"` provides instant schema verification, hover tooltips, and autocomplete in modern editors.
  - How to validate `.all-contributorsrc` programmatically in CI pipelines (e.g. using `check-jsonschema`).

## 3. Scope & Changes

### 3.1 Documentation Enhancement

- File: `src/content/docs/en/bot/configuration.mdx`
- Add `"$schema": "https://json.schemastore.org/all-contributors.json"` to example.
- Add comma after `"commitType": "docs"`.
- Add section explaining schema usage.

## 4. Verification

- Run `pnpm build`: Site builds cleanly with 0 errors.
- Run `pnpm lint`: Markdownlint passes cleanly with 0 errors.
