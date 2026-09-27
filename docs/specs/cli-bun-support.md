# Specification: Add Bun Support to CLI Installation and Usage Documentation

## Context & Motivation
Modern JavaScript and TypeScript developers increasingly use [Bun](https://bun.sh/) as an all-in-one JavaScript runtime, bundler, test runner, and package manager.
In the All Contributors CLI documentation:
- `src/content/docs/en/cli/installation.mdx`
- `src/content/docs/en/cli/usage.mdx`

The documentation relies on Starlight's `<Tabs syncKey="pkg">` component to present command variations across package managers (`npm`, `pnpm`, `Yarn`). However, Bun is currently absent from these tabs, requiring Bun users to translate the commands manually.

Adding Bun tabs alongside `npm`, `pnpm`, and `Yarn` aligns with modern documentation practices (seen across Vite, Astro, Starlight, and Next.js) and improves developer experience.

## Scope of Changes

### 1. `src/content/docs/en/cli/installation.mdx`
- **Step 1 (How to Install the CLI tool)**:
  Add `<TabItem label="Bun">`:
  ```sh
  bun add -d all-contributors-cli
  ```
- **Step 2 (Initialize the Project)**:
  Add `<TabItem label="Bun">`:
  ```sh
  bunx all-contributors init
  ```
- **Step 3 (Add some contributors)**:
  Add `<TabItem label="Bun">`:
  ```sh
  bunx all-contributors add jfmengels doc
  bunx all-contributors generate
  ```
- **Step 5 (Optionally add shortcut scripts)**:
  Add `<TabItem label="Bun">`:
  ```sh
  bun contributors:add jfmengels doc
  ```

### 2. `src/content/docs/en/cli/usage.mdx`
- **Introduction Tip**:
  Update tip text:
  "These examples run the CLI without installing it by using `npx`, `pnpm dlx`, `yarn dlx`, or `bunx`. If you prefer to add it to your project, follow the [CLI installation steps](/en/cli/installation)."
- **Command: `all-contributors init`**:
  Add `<TabItem label="Bun">`:
  ```sh
  bunx all-contributors init
  ```
- **Command: `all-contributors add`**:
  Add `<TabItem label="Bun">`:
  ```sh
  # Add new contributor <username>, who made a contribution of type <contribution>
  bunx all-contributors add <username> <contribution>
  # Example:
  bunx all-contributors add jfmengels code,doc
  ```
- **Command: `all-contributors check`**:
  Add `<TabItem label="Bun">`:
  ```sh
  bunx all-contributors check
  ```
- **Command: `all-contributors generate`**:
  Add `<TabItem label="Bun">`:
  ```sh
  bunx all-contributors generate
  ```

## Verification & Testing
- Validate markdown syntax and lint rules (`pnpm lint`).
- Validate Astro build (`pnpm build`).
- Verify links with Lychee or local validation.
