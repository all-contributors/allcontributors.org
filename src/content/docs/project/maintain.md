---
id: maintain
title: Maintaining the project 
sidebar_label: Help us Improve
---

This guide walks you through reviewing and merging pull requests. We've organized it to follow the typical GitHub Pull Request  workflow.

## Before You Merge - Quick Checklist

Before merging any PR (except all-contributors bot PRs), make sure:

- ✅ **CI checks are green** - All tests, linting, and link checks pass
- ✅ **Branch is current** - Synced with `main` (merge or rebase)
- ✅ **Comments resolved** - All review feedback addressed
- ✅ **Issues linked** - Related issues referenced in PR description
- ✅ **Clear description** - Follows Angular commit convention and explains changes
- ✅ **You have the right approvals** - See approval requirements below

## PR Approval Requirements

### No approval required

- **All-contributors bot PRs** - Any maintainer can merge without approval
- **Dependabot PRs** - Any maintainer can merge once CI is green

### One approval required

Most PRs fall here:
- Documentation updates
- Small bug fixes
- Maintenance work
- Non-breaking changes

### Two approvals required

For large or sensitive changes:
- API changes
- Major refactors
- Significant security fixes
- Changes affecting many consumers

💡 **Tip:** For these larger changes, please open an issue to discuss the design before submitting the PR.

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