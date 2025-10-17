---
id: maintain
title: Maintaining the project 
sidebar_label: Help us Improve
---

This guide walks you through reviewing and merging pull requests. We've organized it to follow the typical GitHub Pull Request  workflow.

## Before You Merge - Quick Checklist

Before merging any PR (except all-contributors bot PRs), make sure:

* ✅ **CI checks are green**: All tests, linting, and link checks pass
* ✅ **Branch is current**: Synced with `main` (merge or rebase)
* ✅ **Comments resolved**: All review feedback addressed
* ✅ **Issues linked**: Related issues referenced in PR description
* ✅ **Clear description**: Follows Angular commit convention and explains changes
* ✅ **You have the right approvals**: See approval requirements below

## PR Approval Requirements

### No approval required

* **All-contributors bot PRs**: Any maintainer can merge without approval
* **Dependabot PRs**: Any maintainer can merge once CI is green

### One approval required

Most PRs fall here:
* Documentation updates
* Small bug fixes
* Maintenance work
* Non-breaking changes

### Two approvals required

For large or sensitive changes such as:
* API changes
* Major refactors
* Significant security fixes
* Changes affecting the bot's API and our users

💡 **Tip:** For these larger changes, please open an issue to discuss the design before submitting the PR.

## Merging PRs - Use Squash and Merge

**Always use "Squash and Merge"** to keep our commit history clean and meaningful.

### Format the squash commit message

Follow the [Conventional Commits](https://www.conventionalcommits.org/) format:
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Common types:**
* `feat:`: New feature
* `fix:`: Bug fix
* `docs:`: Documentation changes
* `style:`: Code style changes (formatting, no logic change)
* `refactor:`: Code refactoring
* `test:`: Adding or updating tests
* `chore:`: Maintenance tasks, dependency updates

**Examples:**

```md
feat(api): add support for custom headers

fix(parser): handle empty strings correctly

docs(readme): update installation instructions

chore(deps): bump tailwindcss from 4.17.20 to 4.17.21
```

💡 **Tip:** The scope is optional but helpful. Use it to indicate what part of the project changed (e.g., `api`, `cli`, `docs`, `tests`).

### Why squash merge?

We use the squash-merge approach because it provides:
* **Clean history**: One commit per PR makes the history easy to read
* **Meaningful commits**: Each commit represents a complete feature or fix
* **Easy reverts**: Can revert an entire feature with one command
* **Better changelogs**: Conventional commits enable automated changelog generation

## Merging Your Own PRs

As a maintainer, please avoid merging your own PRs when possible. Having another set of eyes review is good practice!

**If you must self-merge** (urgent/security/critical fix):
- Request a quick review if someone is available, OR
- Leave a note in the PR explaining why you're self-merging

## After Merging

### Add contributors to the all-contributors table

When you merge a PR, add the contributor using this command:
```
@all-contributors please add <github-username> for <contribution-roles>
```

Contributors are asked to do this themselves, but they often forget. Please check and add them if needed!

**Note:** If the contributor is already listed for that contribution type (e.g., they're already in the table for `bug`), you don't need to add them again.



## Need Help with Reviews?

- Ping maintainers who've been active on related issues
- As a last resort, carefully ping the `@maintainers` team

---

*Remember: This process helps us maintain code quality while keeping things moving. When in doubt, ask for a second opinion! And also, be sure to always follow our Code of Conduct*