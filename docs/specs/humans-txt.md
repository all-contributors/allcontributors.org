# Humans Document Specification (humans.txt)

## Overview

This specification addresses issue [#83](https://github.com/all-contributors/allcontributors.org/issues/83) by implementing a standard `humans.txt` file at the root of `allcontributors.org` and linking it in the `<head>` of all pages.

`humans.txt` is an open initiative to acknowledge the people behind a website. In keeping with the core mission of All Contributors—"Recognize all contributors, not just the ones who push code"—this file acknowledges core maintainers, project contributors, and site technical details.

## Objectives

1. Expose a standard `humans.txt` at `/humans.txt` ([humanstxt.org standard](http://humanstxt.org/Standard.html)).
2. Dynamically generate the contributor list from `.all-contributorsrc` during build time, so any future contributors added by the `@all-contributors` bot or CLI are automatically included without manual intervention.
3. Include project maintainers, technology stack, and repository metadata.
4. Add `<link rel="author" type="text/plain" href="/humans.txt" />` to the site `<head>` across all pages using Starlight's configuration.

## Architecture & Design

### 1. Endpoint: `src/pages/humans.txt.ts`

- Implemented as an Astro static endpoint route returning `GET: APIRoute`.
- Reads `.all-contributorsrc` from the repository root via Node filesystem (`fs.readFileSync`).
- Generates standard `humans.txt` sections:
  - `/* TEAM */`: Maintainers from `MAINTAINERS.md`.
  - `/* CONTRIBUTORS */`: All contributors from `.all-contributorsrc` formatted with name, GitHub username/profile, and contribution categories.
  - `/* SITE */`: Software, standards, and repository information.
- Response header: `Content-Type: text/plain; charset=utf-8`.

### 2. Configuration: `astro.config.mjs`

- In Starlight configuration, add `head` option:

  ```js
  head: [
    {
      tag: "link",
      attrs: {
        rel: "author",
        type: "text/plain",
        href: "/humans.txt",
      },
    },
  ],
  ```

## Verification & Test Plan

1. **Build verification**: Run `pnpm build` to verify `dist/humans.txt` is produced without errors.
2. **Content inspection**:
   - Verify `dist/humans.txt` contains sections `/* TEAM */`, `/* CONTRIBUTORS */`, and `/* SITE */`.
   - Verify contributors from `.all-contributorsrc` are listed accurately.
3. **Head tag inspection**: Verify `dist/en/index.html` (and other localized pages) contains `<link rel="author" href="/humans.txt" type="text/plain">`.
4. **Lint verification**: Run `pnpm lint` to ensure all markdown files comply with project lint rules.
