# Specification: Translation Policy Documentation (Issue #917)

## Context & Motivation
Issue [#917](https://github.com/all-contributors/allcontributors.org/issues/917) asks to add the translation policy to the project section of the website.
This originates from the discussion in [#911](https://github.com/all-contributors/allcontributors.org/issues/911) ("docs(translation): set a translation release policy") between maintainers (@flpm, @lwasser, @JimMadge), where consensus was established:
- Translations should reach a "critical mass" before going live on the site to avoid confusing readers with largely untranslated English text.
- The agreed release threshold is **50% of strings translated** on Crowdin, aligning with historical precedent ([#143](https://github.com/all-contributors/allcontributors.org/issues/143)).
- The homepage and section landing pages must be fully translated.
- Language coordinators and proofreaders help verify translation quality on Crowdin.
- Once eligible, maintainers configure the locale in the site build configuration.

## Scope of Changes

### 1. New Documentation Page: `src/content/docs/en/project/translation-policy.mdx`
- **Frontmatter**:
  - `title: Translation Policy`
  - `description: Guidelines, quality standards, and release criteria for publishing localized versions of the All Contributors documentation.`
  - `sidebar: label: Translation Policy`
- **Sections**:
  - **Overview**: Mission to support contributors globally in their native language.
  - **Release Criteria (When does a language go live?)**:
    1. **50% Translation Progress**: Minimum 50% translated strings on Crowdin.
    2. **Core Pages Complete**: Full translation of the homepage and key section landing pages (`reference`, `bot`, `cli`, `project`).
    3. **Quality & Proofreading**: Validation by native speakers or Crowdin proofreaders.
  - **Translation Platform & Workflow**:
    - Crowdin as the single source of truth for localization.
    - Automated sync with the `main` branch.
    - Guidelines on translating prose while keeping code, variables, and XPATH tags (`@href`, `@src`) intact.
  - **Becoming a Language Coordinator**: How contributors can step up to maintain and review translations for their language.
  - **How to Contribute**: Direct links to Crowdin, issue tracker, and discussions.

### 2. Update `src/content/docs/en/project/contribute.mdx`
- In the **Translations** section, add a link to the new Translation Policy page so contributors and translators understand the criteria for their language appearing live.

## Verification & Testing
- Validate with `pnpm lint` (markdownlint).
- Validate with `pnpm build` (Astro/Starlight page generation).
- Verify routing at `/en/project/translation-policy/`.
