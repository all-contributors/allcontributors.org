# Specification: Improve Example Structure in README for Contributor Types (Issue #967)

## Context & Motivation
Issue [#967](https://github.com/all-contributors/allcontributors.org/issues/967) highlights that while the repository `README.md` introduces the project and links to the emoji key, it lacks a concrete example showing how multiple contribution types are associated with a contributor in practice, and how maintainers invoke the bot or CLI to recognize them.

Additionally, several documentation links in `README.md` still point to legacy Docusaurus routes (`/bot/overview`, `/specification`, `/project/contribute`, `/emoji-key`) rather than the active Starlight `/en/...` routes.

## Scope of Changes

### 1. `README.md` - Examples Section
Add a clear example subsection under "The All Contributors Table":
- Concrete example showing a contributor with multiple contribution roles (`code`, `doc`, `test`, `review`).
- Companion bot command: `@all-contributors please add @username for code, doc, test, review`
- Companion CLI command: `npx all-contributors add username code,doc,test,review`
- Quick reference table of the most common contribution types with keys, symbols, and descriptions.
- Clear link pointing to the full 30+ contribution types on `/en/reference/emoji-key`.

### 2. `README.md` - Route & Link Modernization
Update documentation links to match Starlight URL structure:
- `/bot/overview` -> `/en/bot`
- `/specification` -> `/en/reference/specification`
- `/reference/emoji-key/` -> `/en/reference/emoji-key`
- `/project/contribute` -> `/en/project/contribute`
- `/emoji-key` -> `/en/reference/emoji-key`

## Verification & Testing
- Validate markdown syntax with `pnpm lint`.
- Validate build and links with `pnpm build`.
