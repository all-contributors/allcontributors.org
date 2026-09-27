# Specification: Fix Duplicate Words and Grammatical Typos across Documentation

## Context & Motivation
High-quality documentation requires clear, accurate prose free of accidental repetitions and grammatical errors.
During an audit of the English documentation pages, several duplicate words, miscapitalizations, and inaccurate phrasing were identified:

1. `src/content/docs/en/cli/index.mdx`:
   - Duplicate word in section heading: "About the the All Contributors Command Line Interface (CLI)"
   - Capitalization and grammar typo in body: "THe GitHub bot allows you to call our bot in a issue or pull request."

2. `src/content/docs/en/project/maintain.mdx`:
   - Grammatical typo: "We value an fluid and agile development process"
   - Duplicate word: "If a PR is merged but you you'd like to see a follow-up PR"

3. `src/content/docs/en/bot/installation.mdx`:
   - Duplicate word: "and `projectName` with the relevant the GitHub repo name."

4. `src/content/docs/en/bot/faq.mdx`:
   - Duplicate word: "and `projectName` with the relevant the GitHub repo name."

5. `src/content/docs/en/reference/tooling.mdx`:
   - Duplicate word in image alt text: "A screenshot of a GitHub comment comment that calls the all contributors bot."
   - Naming inaccuracy: "Read more about the All-Contributor bot CLI here" (the CLI is not a bot; refer accurately to "All Contributors CLI").

## Proposed Changes

### `src/content/docs/en/cli/index.mdx`
- Change `## About the the All Contributors Command Line Interface (CLI)` to `## About the All Contributors Command Line Interface (CLI)`.
- Change `THe GitHub bot allows you to call our bot in a issue or pull request.` to `The GitHub bot allows you to call our bot in an issue or pull request.`.

### `src/content/docs/en/project/maintain.mdx`
- Change `We value an fluid and agile development process` to `We value a fluid and agile development process`.
- Change `If a PR is merged but you you'd like to see a follow-up PR that adjusts things,` to `If a PR is merged but you'd like to see a follow-up PR that adjusts things,`.

### `src/content/docs/en/bot/installation.mdx`
- Change `and projectName with the relevant the GitHub repo name.` to `and projectName with the relevant GitHub repo name.`.

### `src/content/docs/en/bot/faq.mdx`
- Change `and projectName with the relevant the GitHub repo name.` to `and projectName with the relevant GitHub repo name.`.

### `src/content/docs/en/reference/tooling.mdx`
- Change `![A screenshot of a GitHub comment comment that calls the all contributors bot.](@/assets/bot/usage.png)` to `![A screenshot of a GitHub comment that calls the All Contributors bot.](@/assets/bot/usage.png)`.
- Change `[Read more about the All-Contributor bot CLI here](/en/cli).` to `[Read more about the All Contributors CLI here](/en/cli).`.

## Verification & Validation
- Validate markdown formatting with `pnpm lint`.
- Validate Astro build with `pnpm build`.
