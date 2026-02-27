---
id: overview
title: All-Contributors Command Line Overview
sidebar_label: Overview
---

| [![NPM Version](https://img.shields.io/npm/v/all-contributors-cli.svg)](https://www.npmjs.com/package/all-contributors-cli) | [![NPM Downloads](https://img.shields.io/npm/dm/all-contributors-cli.svg?color=%238b5cf6)](https://www.npmjs.com/package/all-contributors-cli) | [![Node Version](https://img.shields.io/node/v/all-contributors-cli.svg?color=%238b5cf6)](https://nodejs.org/) | [![GitHub Stars](https://img.shields.io/github/stars/all-contributors/cli?style=social)](https://github.com/all-contributors/cli) |
| --- | --- | --- | --- |

## About the All-Contributors command line interface (CLI)

The `all-contributors-cli` is a command line tool that helps you automate
adding contributor acknowledgements for your GitHub or GitLab repository.
The [All Contributors GitHub bot](/bot/overview) allows you to call our bot
in an issue or pull request.

You can use the command line to:

* Add contributors in bulk
* Add contributors as part of your project scripts
* Add contributors as part of your continuous integration (CI) workflows
* Check for unacknowledged contributors in your repository

You will mostly use four commands with the CLI: `init`, `add`, `check`, and
`generate`. You can learn more about how each of these commands work in the
[CLI usage documentation](/cli/usage).

Similar to [the bot](/bot/overview), the CLI allows you to implement the
[All Contributors](/specification) spec, without maintaining the contributor
table by hand. It also allows you to use all contributors in repositories
like GitLab where the bot is not available.
