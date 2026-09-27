# Spec: Fix Typo and Add Centering Guide in Usage Tips (#1171)

## 1. Overview & Problem

In `src/content/docs/en/reference/usage-tips.mdx`:

1. Line 6 contains a typographical error:
   `"This guide includes all possible tipcs for repository maintainers..."`
   The word `"tipcs"` should be `"tips"`.
2. Users frequently open issues (such as #800) asking how to center the All Contributors badge and table in their README files. Wrapping Markdown badges inside `<p align="center">` or `<div>` without proper spacing often results in raw Markdown text being rendered on GitHub or in documentation engines.
3. Providing clear, tested examples in `usage-tips.mdx` will help maintainers format their recognition sections cleanly.

## 2. Goals & Solutions

- Fix the typo `"tipcs"` to `"tips"`.
- Add a dedicated `## Centering the badge and table in your README` section demonstrating:
  - Customizing `badgeTemplate` in `.all-contributorsrc` to output centered HTML `<p align="center">...<p>` directly.
  - Centering Markdown badges by surrounding the Markdown image/link with blank lines inside HTML tags.
  - Centering the contributors table using `<div align="center">` or noting how default table cells already use `align="center"`.

## 3. Scope & Changes

- Target file: `src/content/docs/en/reference/usage-tips.mdx`.
- Spec file: `docs/specs/usage-tips-centering-and-fixes.md`.

## 4. Verification

- Run `pnpm build`: Verify site builds with 0 errors.
- Run `pnpm lint`: Verify markdownlint passes with 0 errors.
