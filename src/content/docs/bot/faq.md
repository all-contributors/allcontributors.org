---
id: faq
title: Frequently Asked Questions
sidebar_label: FAQs
---

### All Contributors badge count, does not update?

To have the Badge update correctly, use the dynamic Shields badge.

#### Previously

```markdown
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-13-orange.svg?style=flat-square)](#contributors)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
```

#### Now

Replace `projectOwner` with the relevant GitHub username or organization name, and `projectName` with the relevant the GitHub repo name. Style, color, and other parameters can be customized to your liking — see <https://shields.io/>.

```markdown
[![All Contributors](https://img.shields.io/github/all-contributors/projectOwner/projectName?color=ee8449&style=flat-square)](#contributors)
```
