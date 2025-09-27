---
id: configuration
title: Bot Configuration
sidebar_label: Configuration
---

You can configure the all-contributors bot behaviour by updating the `.all-contributorsrc` JSON file.
The data used to generate the contributors list will be stored there, and you
can configure how you want `@all-contributors` to generate the list.

> You are viewing the 🤖Bot Configuration, which is similar to the [CLI Configuration](/cli/configuration)

These are the keys you can specify:

| Option                           | Description                                                                                         | Example/Default                                                                                             |
| -------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `projectName`                    | Mandatory, name of the project.                                                                     | Example: `all-contributors-cli`                                                                             |
| `projectOwner`                   | Mandatory, name of the user the project is hosted by.                                               | Example: `tenshiAMD`                                                                                        |
| `repoType`                       | Type of repository. Must be either `github` or `gitlab`.                                            | Default: `github`                                                                                           |
| `repoHost`                       | Points to the repository hostname. Change it if you use a self-hosted repository.                   | Default: `https://github.com` if `repoType` is `github`, and `https://gitlab.com` if `repoType` is `gitlab` |
| `files`                          | Array of files to update.                                                                           | Default: `['README.md']`                                                                                    |
| `imageSize`                      | Size (in px) of the user's avatar.                                                                  | Default: `100`                                                                                              |
| `commit`                         | Auto-commit badge when adding contributors.                                                         | Default: `false`                                                                                           |
| `commitConvention`               | Commit convention ([`angular`](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit), [`atom`](https://github.com/atom/atom/blob/main/CONTRIBUTING.md#git-commit-messages), [`ember`](https://guides.emberjs.com/v1.10.0/contributing/#toc_commits), [`eslint`](https://eslint.org/docs/latest/contribute/pull-requests#step2), [`jshint`](https://jshint.com/contribute/), [`gitmoji`](https://gitmoji.carloscuesta.me/), or `none`).                                                         | Default: `angular`                                                                                           |
| `contributorsPerLine`            | Maximum number of columns for the contributors table.                                               | Default: `7`                                                                                                |
| `contributorsSortAlphabetically` | `true`: Sort alphabetically. `false`: Display in order of addition.                       | Default: `false`                                                                                            |
| `badgeTemplate`                  | Define your own lodash template to generate the badge.                                              | |
| `contributorTemplate`            | Define your own lodash template to generate the contributor.                                        | |
| `wrapperTemplate`                | Define your own lodash template to wrap the list of contributors                                    | |
| `types`                          | Specify custom symbols or link templates for contribution types. Can override the documented types. | |
| `linkToUsage`                    | Adds a footer with link to usage (either `true` or `false`)                                         | Default: `true` |
| `skipCi`                         | Makes the CI ignore the commit. (either `true` or `false`)                                          | Default: `true` |
| `contributors`                   | List of contributors for this project, this is updated by [@all-contributors add](/bot/usage#all-contributors-add) | |

```json
{
  "projectName": "all-contributors",
  "projectOwner": "all-contributors",
  "repoType": "github",
  "repoHost": "https://github.com",
  "files": ["README.md"],
  "imageSize": 100,
  "commit": false,
  "contributorsPerLine": 7,
  "contributorsSortAlphabetically": false,
  "badgeTemplate": "[![All Contributors](https://img.shields.io/github/all-contributors/<%= projectOwner %>/<%= projectName %>?color=ee8449&style=flat-square)](#contributors)",
  "contributorTemplate": "<a href=\"<%= contributor.profile %>\"><img src=\"<%= contributor.avatar_url %>\" width=\"<%= options.imageSize %>px;\" alt=\"\"/><br /><sub><b><%= contributor.name %></b></sub></a>",
  "wrapperTemplate": "\n<table>\n  <tbody><%= bodyContent %>  </tbody>\n<%= tableFooterContent %></table>\n\n",
  "types": {
    "custom": {
      "symbol": "🔭",
      "description": "A custom contribution type.",
      "link": "[<%= symbol %>](<%= url %> \"<%= description %>\"),"
    }
  },
  "linkToUsage": true,
  "skipCi": true,
  "contributors": []
}
```

#### Moving the All Contributors table into a different file

As you know, the default file for the contributors table is `README.md`. But if your project has tons of contributors, it doesn't make sense to include the All Contributors table in the `README.md` file. Instead, you can use a different file to do so.

Here are the steps that may help you in achieving that. For the sake of this tutorial, the different file that we'll use is going to be named `CONTRIBUTORS.md`.

1. Install the bot. See the [Installation](/bot/installation) page for instructions.
2. Add your first contributor. See the [Bot Usage](/bot/usage) page for instructions.
3. Create the `CONTRIBUTORS.md` file.
4. Copy the code which can be found in [this guide](/bot/installation#3-create-a-readmemd).
5. Modify the `files` key in the `.all-contributorsrc` JSON file to match your new file name.

   ```json
   {
   "files": [
      "CONTRIBUTORS.md"
   ],
   ...
   }
   ```

6. Now you should be good to go. New contributors will be added to this new file instead of the `README.md` file.
