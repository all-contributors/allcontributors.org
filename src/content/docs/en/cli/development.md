---
id: development
title: CLI Development Documentation
sidebar_label: Development
---

## Prerequisites

The CLI is built with Node.js and npm. The following are the prerequisites for working on the CLI:

- **Node.js** 22 or later (see `engines` in `package.json`)
- **npm** (the project uses npm which produces a `package-lock.json`)

## Development commands

These are the npm scripts defined within the package.json file when working on the CLI:

| Command                   | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `npm install`             | Install dependencies                                   |
| `npm run build`           | Build the CLI (output in `dist/`)                      |
| `npm run dev`             | Run the CLI from source without building               |
| `npm run start`           | Run the built CLI (`dist/cli.js`)                      |
| `npm run lint`            | Check for lint and format issues                       |
| `npm run lint-fix`        | Auto-fix lint and format issues                        |
| `npm test`                | Run the test suite (no coverage)                       |
| `npm run test-coverage`   | Run tests with coverage and generate reports           |
| `npm run commit`          | Commit changes using a commitizen-compatible interface |
| `npm run knip`            | Find unused files, dependencies, and exports           |
| `npm run add-contributor` | Add a contributor  |

## All-contributors CLI commands

When the CLI is run, either after install or using `npm run dev`, there are a set of subcommands that are available for you to use:

| Command                                           | Description                                          |
| ------------------------------------------------- | ---------------------------------------------------- |
| `all-contributors add <username> <contributions>` | Add a new contributor                                |
| `all-contributors generate`                       | Generate the contributors list in the README         |
| `all-contributors init`                           | Prepare the project to use this tool                 |
| `all-contributors check`                          | Compare repo contributors with `.all-contributorsrc` (this helps find contributors missing from your record) |

## Testing and code coverage

### Run tests

This project uses [Vitest](https://vitest.dev/) for testing.
To run the test suite use:

```bash
npm test
```

This runs all tests without coverage. For coverage (thresholds and reports), use
`npm run test-coverage` (see below).

If you want to run tests inside your editor and you use VS Code you can install
the Vitest extension so tests are discovered and runnable through the VSCode
test runner.

### Test configuration

Test configuration is in `vitest.config.ts`.

### Coverage thresholds

The project enforces minimum code coverage thresholds in the Vitest config:

| Coverage Type | Percentage |
| ------------- | ---------- |
| Branches      | 50%        |
| Functions     | 40%        |
| Lines         | 50%        |
| Statements    | 50%        |

If test coverage drops below these thresholds on a pull request, our CI build,
which runs coverage, will fail. This will block the pull request from being
mergeable.

### Coverage reports

Run `npm run test-coverage` to generate coverage reports in the `coverage/`
directory:

- **`coverage/lcov-report/index.html`** — Interactive HTML report (open in a
  browser)
- **`coverage/lcov.info`** — LCOV format (used by Codecov)

The HTML report shows which files are covered by tests.

### Codecov integration

The project uses [Codecov](https://about.codecov.io/) to track coverage over
time and on pull requests.

#### CI integration

- The workflow `.github/workflows/test-deploy.yml` runs tests with coverage and
  uploads `coverage/lcov.info` to Codecov via a `codecov/codecov-action`
  version.
- Coverage can appear in PR comments if enabled in the Codecov project.

#### Configuration

Codecov is configured in `.codecov.yml`:

- Patch coverage is tracked (coverage of changed code in PRs)
- Project-level status checks are disabled
- PR comments are disabled

Codecov now required a token to upload coverage. Uploads use the repository
secret `secrets.CODECOV_TOKEN` which is scoped to the `all-contributors` org and
CLI repository.

#### Local usage

You don't need a Codecov account to view coverage locally. Run
`npm run test-coverage` and open the HTML report. Codecov is mainly for tracking
trends and CI.

## Linting

The project uses ESLint as a linter and formatter.

### Overview

- Config: `eslint.config.mjs`
- Includes `eslint:recommended`, import rules, Vitest rules for test files, and
  project overrides

### How to run the linter

To check for issues you can run:

```bash
npm run lint
```

To auto-fix what ESLint and Prettier can fix you can run:

```bash
npm run lint-fix
```

This will fix many issues (_e.g._ Vitest aliases, unused eslint-disable
directives, formatting). Some problems still need manual fixes (_e.g._ unused
variables, tests without assertions).

### Pre-commit hooks

Husky runs a pre-commit hook that lints and fixes staged files before each
commit.

1. On `git commit`, Husky runs the pre-commit hook.
2. The hook runs `lint-staged`, which runs ESLint and Prettier on staged
   JavaScript files.
3. If that passes, the commit continues; if it fails, the commit is blocked.

If the hook gives you trouble, run `npm run lint-fix` manually, then try
committing again. As a last resort you can skip the hook with
`git commit --no-verify`; if you do, mention it in your PR so maintainers can
help.

#### Configuration

- The hook lives in `.husky/pre-commit` (it runs `npx lint-staged`).
- `lint-staged` is configured in `package.json` under the `lint-staged` field.
- Linting uses `eslint.config.mjs`.

## Build system

The build uses native NPM.

### How to build

```bash
npm run build
```

Output goes to `dist/`. To run the built CLI locally without publishing, use
`npm run start` (which runs `dist/cli.js`) or `npm link` from the repo root and then
run `all-contributors` in another directory.

## Release process

We use conventional commits for merged PRs. The
[Release Please](https://github.com/googleapis/release-please-action) GitHub
Action automates the release flow: after merges to `main`, it opens a release PR
with an updated changelog and version. A maintainer merges that PR when tests
pass and the release is ready.

Release Please needs a GitHub token to open PRs. The repo uses the secret
`ALL_CONTRIBS_RELEASE_PLEASE_TOKEN` (scoped to the all-contributors org and CLI
repo). The same pattern could be extended to the app repo later if needed.

### Release & publish to NPM process

This project uses [release-please](https://github.com/googleapis/release-please) to manage releases. Release-please maintains a running CHANGELOG.md in a pull request that it opens in our repository.  In that pull request, it also maintains the new package version in `package.json` based on [semantic versioning](https://semver.org/)(https://semver.org/) and [Angular commit message conventions](https://www.conventionalcommits.org/).

#### Creating a release

When a pull request is merged, release-please updates the changelog and determines the next version bump. This produces a release PR that tracks all pending changes.

When the release PR is merged:

* The version in `package.json` is updated on `main`
* A Git tag and GitHub release are created, formatted as `vX.X.X`

## Publishing to NPM

After a release is created, the test suite runs one final time. If it passes, the package is published to NPM via a secure [Trusted Publishing](https://docs.npmjs.com/generating-provenance-statements) pipeline.

This step is protected by a secure GitHub environment. Any maintainer can approve the deployment through the GitHub Actions interface, ensuring optimal security throughout our publication process and adding automation that reduces the burden on our maintainer team.
