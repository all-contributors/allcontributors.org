# Spec: Localized Internal Links for Documentation Pages

## Context & Problem

Issue: [all-contributors/allcontributors.org#1139](https://github.com/all-contributors/allcontributors.org/issues/1139)
Title: **Correct internal links for each localisation**

In `allcontributors.org`, documentation pages are maintained in English (`src/content/docs/en/...`) and localized across 15 locales (e.g. `fr`, `de`, `es`, `pt`, `ja`, etc.) using Starlight i18n with translations synced via Crowdin and fallback routes provided by Starlight for untranslated content.

However, internal links within page bodies (unlike sidebar links which Starlight localizes automatically) are hardcoded to `/en/...` (e.g. `[Bot](/en/bot)`, `[CLI](/en/cli)`, `[Emoji Key](/en/reference/emoji-key)`).

When a user browses the documentation in another language (such as French at `/fr/reference/emoji-key/`), clicking an internal link in the page content navigates them directly to `/en/bot` or `/en/cli`, abruptly ejecting them from the French localization back into English. This is jarring and breaks the localization experience.

Furthermore, when Starlight's link validator runs with `errorOnInconsistentLocale: true`, localized pages linking to `/en/...` can trigger inconsistent locale errors.

## Goals

1. Automatically rewrite internal documentation links in page bodies (`href="/en/..."` or `href='/en/...'`) to match the active page's locale (e.g. `href="/fr/..."` when rendered on `/fr/...`).
2. Keep English pages intact (`/en/...` remains `/en/...`).
3. Preserve external links (`https://...`, `http://...`), page anchors (`#...`), and static assets (`/favicon.png`, `/_astro/...`).
4. Ensure seamless compatibility with Starlight plugins, specifically `starlight-image-zoom`, and maintain all default Starlight markdown styling (`.sl-markdown-content`).
5. Ensure localized links point to the current locale's route, allowing Starlight to either display translated content or cleanly fall back with localized navigation and UI intact.

## Proposed Solution: Starlight `MarkdownContent` Component Override

Starlight natively supports overriding built-in components via the `components` configuration option in `astro.config.mjs`.

We will implement a custom `MarkdownContent` override at `src/components/overrides/MarkdownContent.astro` that:

1. Renders the default Markdown slot HTML using `await Astro.slots.render('default')`.
2. Inspects `Astro.locals.starlightRoute?.locale || Astro.currentLocale`:
   - If `currentLocale` is defined and `!== 'en'`, rewrites internal links (`href="/en/..."` or `href="/en"`) to `href="/${currentLocale}/..."` or `href="/${currentLocale}/"`.
3. Wraps the rendered content in Starlight's original `MarkdownContent` component to maintain styling and accessibility.
4. Includes the `<ImageZoom />` component from `starlight-image-zoom` to ensure zero regression for image zoom features.
5. Registers the override in `astro.config.mjs` under `starlight({ components: { MarkdownContent: './src/components/overrides/MarkdownContent.astro' } })`.

## Verification & Testing

1. Build the Astro site (`pnpm run build`).
2. Inspect the generated HTML in `dist/` across multiple locales (e.g. `dist/en/reference/emoji-key/index.html` vs `dist/fr/reference/emoji-key/index.html` and `dist/pt/reference/emoji-key/index.html`):
   - In `en`: links point to `/en/bot` and `/en/cli`.
   - In `fr`: links point to `/fr/bot` and `/fr/cli`.
   - In `pt`: links point to `/pt/bot` and `/pt/cli`.
3. Verify external links and anchors remain unchanged.
4. Verify markdown linting (`pnpm run lint`) and code formatting pass.
