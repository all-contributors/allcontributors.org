# Spec: Fix Invalid JSON Syntax in Bot Configuration Example

## Context & Problem
In `src/content/docs/en/bot/configuration.mdx`, the comprehensive JSON configuration example for `.all-contributorsrc` contains syntax errors:
1. Missing comma after `"commitType": "docs"` on line 62 before `"contributors": []` on line 63. This causes `JSON.parse` to fail when developers copy the snippet.
2. A stray comma located inside the string literal quotes for `"link": "[<%= symbol %>](<%= url %> \"<%= description %>\"),"`. This results in broken markdown links where every link text ends in a comma.
3. Empty alt tag `alt=\"\"` in the example `contributorTemplate`, whereas specifying `alt=\"<%= contributor.name %>\"` is the recommended accessible format aligning with `all-contributors-cli`.

## Proposed Solution
- Update `src/content/docs/en/bot/configuration.mdx` with:
  - Add missing comma `,` after `"commitType": "docs"`.
  - Fix template string in `"link"` by moving/removing the comma outside the markdown link syntax (`"[<%= symbol %>](<%= url %> \"<%= description %>\")"`).
  - Update `alt=\"\"` to `alt=\"<%= contributor.name %>\"` in the `contributorTemplate` example.
- Validate that the JSON block is syntactically valid via `JSON.parse`.
- Run `npm run build` and `npm run check:links` to verify documentation build.
