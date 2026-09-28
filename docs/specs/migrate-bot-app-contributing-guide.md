# Spec: Migrate Bot Application Contributing Guide to Documentation Website

## Context & Motivation
Issue: [all-contributors/allcontributors.org#964](https://github.com/all-contributors/allcontributors.org/issues/964)  
Maintainer Leah Wasser requested:
> "I would really like to figure out how to update the app to align with the CLI, but we need to be able to test things first. Let's begin to migrate the docs here:  
> https://github.com/all-contributors/app/tree/main/contributing  
> To our documentation website for easier access. we can then link to that section of the docs in that repo."

Currently, the All Contributors bot documentation on `allcontributors.org` covers usage, installation, configuration, and FAQs, but lacks documentation on how to develop, test, debug, and run the bot application itself. Developers and prospective maintainers had to dig through markdown files in `all-contributors/app/contributing/` in the bot repository.

## Scope of Changes
1. **New Documentation Page**:
   Create `src/content/docs/en/bot/contributing.mdx` with:
   - Complete bot architecture and components breakdown (`processIssueComment`, `CommentReply`, `ContentFiles`, `OptionsConfig`, `Repository`, `utils/parse-comment`, Probot + Octokit API).
   - Step-by-step local development setup with GitHub Apps, webhook configuration, private key encoding, and `.env` setup.
   - Live testing workflows: manual webhook dispatch via `curl`/JSON payloads and automatic proxying via `smee.io`.
   - Deployment environments (`all-contributors-sandbox`), production monitoring (Sentry, AWS CloudWatch, Lambda, stats), and fork management workflow.
2. **Visual Assets**:
   Download and store relevant screenshots in `src/assets/bot/`:
   - `where-can-this-app-be-installed.png`
   - `app-created.png`
   - `delivery-comment.png`
   Ensure informative, accessible alt text and proper Starlight image imports/references.
3. **Cross-linking & Navigation**:
   - Update `src/content/docs/en/bot/index.mdx` with a link card or callout guiding developers to the new Contributing & Development guide.
   - Update `src/content/docs/en/project/contribute.mdx` to link to `/en/bot/contributing/`.

## Verification Plan
1. Download assets cleanly using curl.
2. Build the documentation site using `pnpm build` or `npm run build` to ensure Starlight compiles without errors.
3. Run formatters / linters to ensure consistency with project standards.
