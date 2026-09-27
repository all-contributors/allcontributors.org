# Specification: Sitemap Generation and robots.txt Configuration

## Overview

This specification details the SEO enhancements for `allcontributors.org` addressing issue #151. Specifically, it enables automatic XML sitemap generation via `@astrojs/sitemap`, provides a standard `robots.txt` file directing search engine crawlers, and corrects repository metadata.

## Problem Statement

During the site build, Astro outputs the following warning:

```text
[@astrojs/sitemap] The Sitemap integration requires the 'site' astro.config option. Skipping.
```

As a result:

1. No `sitemap-index.xml` or sitemap files are generated in `dist/`.
2. Search engines have no discovery mechanism for multilingual localized paths.
3. No `robots.txt` exists at `/robots.txt` to guide search engine crawlers to the sitemap.
4. `package.json` references an obsolete repository URL (`git@github.com:all-contributors/all-contributors.git`).

## Solution & Architecture

### 1. Astro Site Configuration (`astro.config.mjs`)

Define `site: "https://allcontributors.org"` in `defineConfig({...})`.
This enables `@astrojs/sitemap` to resolve canonical absolute URLs for all generated pages across supported locales and generate `sitemap-index.xml` along with individual sitemaps.

### 2. Robots File (`public/robots.txt`)

Create `public/robots.txt` with default crawl permissions and explicit reference to the sitemap index:

```txt
User-agent: *
Allow: /

Sitemap: https://allcontributors.org/sitemap-index.xml
```

Astro automatically copies files in `public/` to `dist/` verbatim during build.

### 3. Repository URL Update (`package.json`)

Update repository URL to:

```json
"repository": "https://github.com/all-contributors/allcontributors.org.git",
```

## Verification Plan

1. **Build Verification**:
   - Run `pnpm build`.
   - Confirm warning is gone and build outputs:
     `[@astrojs/sitemap] 'sitemap-index.xml' created at 'dist'`.
2. **Artifact Verification**:
   - Check `dist/sitemap-index.xml` exists and references sitemap chunks (e.g., `sitemap-0.xml`).
   - Check `dist/robots.txt` exists and matches source.
3. **Linting Verification**:
   - Run `pnpm lint` to ensure all markdown files adhere to project markdownlint rules.
