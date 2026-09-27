# Specification: Custom 404 Error Page (Issue #907)

## Context & Motivation
Issue [#907](https://github.com/all-contributors/allcontributors.org/issues/907) requests porting the custom 404 page from the legacy Docusaurus site (`website/static/404.html`) to Astro/Starlight.
The legacy 404 page featured:
- Friendly title: "404 Error"
- Tagline: "Whoops, couldn't find your page 😅"
- CTA button: "Go Back to Docs"
- Quick links grid:
  - "Read the Documentation"
  - "Emoji Key (Contributions Cheatsheet)"
  - "How to Use the Bot"
  - "Submit an Issue"

In Starlight, creating `src/content/docs/404.mdx` overrides the default minimalist 404 with a branded, helpful error page matching the design system.

## Scope of Changes

### 1. Create `src/content/docs/404.mdx`
- Frontmatter:
  - `title: '404'`
  - `template: splash`
  - `editUrl: false`
  - `hero`:
    - `title: '404'`
    - `tagline: "Whoops, couldn't find your page 😅"`
    - `actions`:
      - Primary button: "Explore Documentation" (`/en/reference/`)
      - Secondary button: "Emoji Key Cheatsheet" (`/en/reference/emoji-key/`)
- Content:
  - Use Starlight `<CardGrid>` and `<Card>` to provide the quick links from the original Docusaurus 404 page:
    - Documentation
    - Emoji Key Cheatsheet
    - Bot Usage
    - Issue Tracker on GitHub

## Verification & Testing
- Validate with `pnpm lint` (markdownlint).
- Validate with `pnpm build` (verify `dist/404.html` is generated and Pagefind completes).
