# SDD Specification: Comprehensive FAQ & Non-Git Contributor Documentation

- **Issue Reference**: [all-contributors/allcontributors.org#816](https://github.com/all-contributors/allcontributors.org/issues/816), [all-contributors/cli#325](https://github.com/all-contributors/cli/issues/325), [all-contributors/all-contributors#290](https://github.com/all-contributors/all-contributors/issues/290), [all-contributors/cli#326](https://github.com/all-contributors/cli/issues/326)
- **Status**: Implemented
- **Target Repository**: `all-contributors/allcontributors.org`

## 1. Problem Statement

Community members frequently raise recurring questions across issues and discussions:
1. **Crediting non-GitHub / non-Git contributors & organizations**:
   - Issue `#816`: Users want to know how to recognize contributors who do not have a GitHub account (e.g., translators, event organizers, offline mentors, financial sponsor companies, or institutional partners).
   - CLI Issue `#325`: Maintainers need practical instructions on how to use `--name`, `--avatar-url`, `--profile`, and `--no-fetch` or how to configure `.all-contributorsrc` directly.
2. **Sparse FAQ Documentation**:
   - The current `src/content/docs/en/bot/faq.mdx` only contains a single Q&A regarding badge counts. Common questions like custom types, separate table files, manual regeneration, and crediting non-Git contributors are either absent or fragmented.
3. **CLI Usage Incompleteness**:
   - `src/content/docs/en/cli/usage.mdx` documents basic `add <username> <contributions>` but omits the flags available for custom metadata and offline crediting.

## 2. Proposed Changes

### 2.1 `src/content/docs/en/bot/faq.mdx`
Expand the FAQ into a comprehensive reference answering the most frequent questions:
- **Adding contributors without a GitHub account**:
  - Detailed guide on how to credit offline contributors, organizations, and sponsors.
  - Explains both CLI flags (`--name`, `--avatar-url`, `--profile`, `--no-fetch`) and direct configuration in `.all-contributorsrc`.
- **Custom contribution types**:
  - Clear example and syntax for defining custom types in `.all-contributorsrc` (`types` object with `symbol`, `description`, `link`).
- **Moving the contributors table to a separate file**:
  - Cross-reference and succinct instructions on setting the `files` array (e.g., `["CONTRIBUTORS.md"]`).
- **Re-generating the contributors table after config edits**:
  - How to update the markdown table using `npx all-contributors generate` or by asking the bot to add/update an entry.
- **Badge count not updating**:
  - Retain existing dynamic Shields.io badge explanation with improved formatting.

### 2.2 `src/content/docs/en/cli/usage.mdx`
- Document options under the `all-contributors add` section:
  - `--name <name>`: Custom display name.
  - `--avatar-url <url>` / `--avatar <url>`: Custom avatar or logo URL.
  - `--profile <url>`: Custom website or profile URL.
  - `--no-fetch`: Bypasses remote host API lookups.
- Provide a clear, copy-pasteable example of crediting an organization or non-GitHub contributor.

## 3. Verification & Validation

- `pnpm format:check` / `pnpm prettier`: Confirm markdown formatting complies with project standards.
- `pnpm build`: Verify Astro Starlight build succeeds without dead links or broken components.
