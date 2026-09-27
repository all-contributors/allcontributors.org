# SDD Spec: Contributor Info Change & Removal Requests (DCR & DRR)

**Document ID:** SPEC-2026-09-27-DCR-DRR  
**Status:** Approved / Ready for PR  
**Authors:** Matheus Breguêz (<matbrgz@gmail.com>)  
**Related Issue:** [allcontributors.org#19 (Contributor info change requests)](https://github.com/all-contributors/allcontributors.org/issues/19)  
**Target Repository:** `all-contributors/allcontributors.org`  
**Target Branch:** `main`  

---

## 1. Executive Summary & Context

### 1.1 Context of Issue #19

The All Contributors specification was created to recognize all contributors to open-source projects, acknowledging non-code contributions alongside code. However, over the lifetime of a project, contributors may need to:

- Update their displayed name (e.g., legal transitions, marriage, divorce, or privacy preferences).
- Update their avatar URL, website, or social profile link (due to domain expiration, platform changes, or rebranding).
- Adjust or correct attributed contribution categories.
- Completely remove themselves from the contributor list (Data Removal Requests / "Right to be Forgotten" under privacy frameworks like GDPR Article 17, CCPA, or personal preference).

Historically, this gave rise to several recurring questions in the community (issue #19):

1. **Obligation**: Should maintainers be obligated to accept data changes and removals? (Kent C. Dodds and Maximilian Berkmann strongly affirmed that rejecting legitimate requests is contrary to the open-source spirit).
2. **Legal & Platform Responsibility**: Inquiries to GitHub Staff (Jules Parker) confirmed that repository controllers (maintainers) bear direct responsibility for handling data subject requests under GDPR and data privacy laws.
3. **Contributor Confusion**: Users unfamiliar with the All Contributors toolchain (such as `simlrh` in issue #19) often discover their personal name or photo indexed by search engines from a README. When attempting to remove it, they are confronted with `<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->`, which intimidates them. Furthermore, removing text from `README.md` without updating `.all-contributorsrc` causes their data to reappear on subsequent CLI/bot runs.
4. **Content & Safety Boundaries**: What should maintainers do if a change request contains obscene, defamatory, or malicious content (e.g. phishing links)?

### 1.2 Objectives

1. **Clarify Contributor Rights in the Specification**: Formally establish in `specification.mdx` that compliant projects must honor legitimate Data Change Requests (DCR) and Data Removal Requests (DRR).
2. **Publish a Dedicated User & Maintainer Guide**: Add `src/content/docs/en/project/data-change-and-removal.mdx` with actionable instructions for both contributors (PR walkthrough, issue templates, CLI generation) and maintainers (verification, empathy, runbook).
3. **Equip Maintainers**: Update `MAINTAINERS.md` and `src/content/docs/en/project/maintain.mdx` with clear runbooks, approval rules, and response expectations.
4. **Address FAQs & Tips**: Update `src/content/docs/en/bot/faq.mdx` (explaining current bot limitations regarding removals/edits) and `src/content/docs/en/reference/usage-tips.mdx`.

---

## 2. Architecture & Data Flow

### 2.1 Single Source of Truth

```text
[ Contributor / Maintainer ]
            │
            ▼
    .all-contributorsrc  <--- (Single Source of Truth)
            │
            ▼
npx all-contributors generate
            │
            ├──> README.md (or configured files)
            └──> CONTRIBUTORS.md
```

- Manual edits only to markdown files will be reverted upon the next bot or CLI invocation.
- A valid DCR or DRR requires updating `.all-contributorsrc` and regenerating the output files.

### 2.2 Privacy & Security Workflow

```text
[ Contributor Request (PR or Issue) ]
                 │
                 ▼
       [ Identity Check ] ──(Unverified third-party)──> [ Request Confirmation ]
                 │
             (Verified)
                 ▼
     [ Content & CoC Check ] ──(Malicious / Obscene)──> [ Polite Sanitization / Reject Link ]
                 │
             (Compliant)
                 ▼
 [ Update .all-contributorsrc & Run generate ]
                 │
                 ▼
   [ Merge PR & Close Request ] (Prompt resolution: 7-14 days)
```

---

## 3. Specification Changes (`specification.mdx`)

Add a formal clause to `src/content/docs/en/reference/specification.mdx`:

- **Right to Update (DCR)**: Maintainers must process legitimate updates to display name, avatar, profile URL, and contribution types.
- **Right to Erasure (DRR)**: Maintainers must honor requests for full removal from `.all-contributorsrc` and tables without demanding justification.
- **Content Standards**: Submissions must comply with the repository's Code of Conduct. Maintainers are empowered to reject malicious, fraudulent, or obscene material.

---

## 4. Documentation Additions (`data-change-and-removal.mdx`)

A new first-class documentation page under `src/content/docs/en/project/data-change-and-removal.mdx` covering:

1. Core principles (contributor sovereignty, privacy, prompt action, CoC).
2. Architecture breakdown (source of truth vs generated table, explanation of the "Do not remove" comment).
3. Option 1: Step-by-step PR guide (editing JSON, `npx all-contributors generate`, conventional commits).
4. Option 2: Pre-formatted GitHub Issue templates for DCR and DRR.
5. Bot limitations note (bot does not support `@all-contributors please remove`).
6. Maintainer runbook (identity verification, anti-griefing, handling malicious content, CLI commands, Git history context).

---

## 5. Maintainer Guidelines Updates (`MAINTAINERS.md` & `maintain.mdx`)

- **`MAINTAINERS.md`**: Summarizes maintainer duties, SLA (7–14 days), identity verification protocol, and references the full documentation guide.
- **`src/content/docs/en/project/maintain.mdx`**: Adds DCR/DRR to "One approval required" PR list and includes a dedicated review section.
- **`src/content/docs/en/bot/faq.mdx`**: Clarifies that the bot cannot currently execute removals/edits and links to the DCR/DRR guide.
- **`src/content/docs/en/reference/usage-tips.mdx`**: Guides repository maintainers on honoring updates and removals respectfully.

---

## 6. Verification & Quality Assurance

- **Markdownlint**: Must pass `pnpm lint` without warnings or violations.
- **Astro & Starlight Build**: Must pass `pnpm build` with zero broken links and complete Pagefind search index generation (301+ pages built).
- **Internationalization**: File added under `src/content/docs/en/`, enabling Crowdin to pick up strings for localized versions without breakage.
