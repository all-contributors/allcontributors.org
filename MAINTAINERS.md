## Maintainers

Documentation for maintainers.

Current maintainers:

- [Jake Bolam](https://github.com/jakebolam)
- [Maximilian Berkmann](https://github.com/Berkmann18)
- [Tyler Benning](https://github.com/tbenning)
- [Jeff Wen](https://github.com/sinchang)

See [the GitHub All Contributors Core Team group](https://github.com/orgs/all-contributors/teams/core/members)

## Handling Contributor Info Changes & Data Removal Requests (DCR & DRR)

As a maintainer of an All Contributors project, you are responsible for processing requests from contributors regarding their personal data:

### Contributor Data Rights
- **Data Change Requests (DCR)**: Contributors may request updates to their name, avatar, profile link, or contributions.
- **Data Removal Requests (DRR)**: Contributors may request full removal of their entry from `.all-contributorsrc` and generated contributor tables (under privacy laws such as GDPR Article 17 "Right to Erasure", or personal preference).
- **Prompt Action**: Process these requests respectfully and promptly (recommended within 7–14 days). Never require contributors to justify or explain their personal reasons for name changes or removal.

### Verification & Security
- Ensure requests come from the legitimate account owner (PR or issue opened by the contributor's GitHub account).
- Prevent unauthorized deletion or alteration of third-party entries.

### Content Compliance
- Ensure submitted names, URLs, and avatars comply with the [Code of Conduct](CODE_OF_CONDUCT.md). Reject obscene, harassing, or malicious links.

### Maintainer Runbook
1. Open `.all-contributorsrc` and update or delete the contributor's entry in the `"contributors"` array.
2. Run `npx all-contributors generate` to synchronize all configured files (e.g. `README.md`).
3. Commit using conventional commit format: `chore(contributors): update info for @user` or `chore(contributors): remove @user from contributors list`.
4. For comprehensive contributor instructions and templates, refer to the [Contributor Data Changes & Removal Guide](https://allcontributors.org/en/project/data-change-and-removal).


## Roadmap/Goals

### Unite all contributor efforts ✅

- [x] Create central org, and move across all-contributors, all-contributors-cli, all-contributors-atom and all-contributors-bot
- [x] Add Branding, central Communication Places
- [x] Launch website and centralize documentation

### Establish an All Contributors community

- [ ] Establish a check-in ritual
- [ ] Establish a culture of gratitude ritual
- [ ] Develop more proactive information-sharing practices
- [ ] To keep engaged: Send regular (weekly) updates about the recent events related to the project
- [ ] Develop more open and inclusive decision-making processes

### Building an All Contributors presence and visibility

- [x] Switch to .org from .js.org and promote to communities outside JavaScript
- [ ] Create a video
- [ ] Improve SEO (see goals)
- [ ] Add all contributors bot to GitHub marketplace (see goals 250 app installs)

## Metrics OKR Period - Open Leaders (Mid Feb 2019 until April 2019)

### Project & Website

Date | Maintainers | Contributors | Stars | Website Languages  | Website Sessions | SEO Clicks | SEO Impressions
---|---|---|---|---|---|---|---
**TARGET for August 2019** | 5 | 50 | 3000 | 12 | 1000 | 10 | 200
Wed May 1st  | 4 | 43 | 2822 | 11 | 624 | 5 | 139
**TARGET for April 2019** | 4 | 40 | 2700 | 10 | 500 | 10 | 100
Wed Mar 20th | 4 | 37 | 2609 | 9 | 449 | 4 | 100
Wed Mar 13th | 4 | 36 | 2572 | 8 | 434 | 0 | 69
Wed Mar 6th  | 4 | 36 | - | 7 | 692 | 5 | 43
Wed Feb 27th | 4 | 35 | 2509 | 7 | 636 | 1 | -
Wed Feb 20th | 4 | 34 | 2442 | 7 | 382 | 0 | -
Wed Feb 13th | 4 | 33 | 2430 | 6 | 431 | 0 | -

### Bot Installs

Date | Installs Total | Installs this Week | Uninstalls this Week | Bot Stars
---|---|---|---|---
**TARGET for August 2019** | 250 | 20 | 0 | 200
Wed May 1st | 368 | 12 | 3 | 115
**TARGET for April 2019** | 250 | 20 | 0 | 100
Wed Mar 20th | 214 | 13* | 3* | 93
Wed Mar 13th | unavailable [bot#167](https://github.com/all-contributors/all-contributors-bot/issues/167) | - | - | 92
Wed Mar 6th | 156 | - | - | -
Wed Feb 27th | 121 | - | - | 80
Wed Feb 20th | 107 | - | - | 75
Wed Feb 13th | 82 | - | - | 71

- indicates the full data was not available on that week

### Bot Usage

Date | WebhookInvokes | WebhookErrors | Bot Messages | Bot Errors | Bot PRs | Bot PR Creation Time
---|---|---|---|---|---|---
**TARGET for August 2019** | 10k | 0 | 500 | 0 | 40 | ~10s
Wed Mar 20th | 7.53k | 0 | 257 | 23 | 168 | ~7.2s
**TARGET for April 2019** | 10k | 0 | 50 | 0 | 40 | ~10s
Wed Mar 20th | 5.49k | 13 | 31 | 0 | 31 | ~9s
Wed Mar 13th | - | - | 30 | - | 29 | -
Wed Mar 6th | - | - | 41 | - | 37 | -
Wed Feb 27th | - | - | 39 | - | 37 | -
Wed Feb 20th | - | - | 21 | - | 20 | -
Wed Feb 13th | - | - | 24 | - | 23 | -

## Metric Sources

### Bot

- [Bot Installs/Stars](https://probot.github.io/apps/all-contributors/)
- [Analytics](https://analytics.amplitude.com/all-contributors/dashboard/yh9wcyv)
- [AWS Dashboard](https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#dashboards:name=All-Contributors-Bot)

### Website

- [Google Analytics](https://analytics.google.com/analytics/web/#/dashboard/OZG_ZAFyR2-GjE4In1DVBg/a131821931w191468068p187370803/)
- [Search Console](https://search.google.com/search-console?resource_id=https%3A%2F%2Fallcontributors.org%2F)

### Other Stuff

- [Star History](https://timqian.com/star-history/#all-contributors/all-contributors)
