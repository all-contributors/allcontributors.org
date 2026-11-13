import { Locales } from './locales.config.ts';

// Old page paths (without a language) and the paths that replaced them.
const moved: Record<string, string> = {
  'reference': 'project',
  'reference/tooling': 'project/about/tools',
  'reference/specification': 'project/specification/requirements',
  'reference/emoji-key': 'project/specification/emoji-key',
  'reference/usage-tips': 'project/specification/usage-tips',
  'project/implementations': 'project/about/adopters',
  'project/contribute': 'project/contributing/guidelines',
  'project/code-of-conduct': 'project/contributing/code-of-conduct',
  'project/maintain': 'project/maintaining/processes',
  'cli/development': 'project/maintaining/cli',
  'bot': 'app',
  'bot/installation': 'app/getting-started/installation',
  'bot/usage': 'app/guides/usage',
  'bot/faq': 'app/guides/faq',
  'bot/configuration': 'app/reference/configuration',
  'cli/installation': 'cli/getting-started/installation',
  'cli/usage': 'cli/guides/usage',
  'cli/configuration': 'cli/reference/configuration',
};

// Addresses from before the site had a language prefix and sections.
const legacy: Record<string, string> = {
  'emoji-key': 'project/specification/emoji-key',
  overview: 'project',
  specification: 'project/specification/requirements',
  tooling: 'project/about/tools',
  'usage-tips': 'project/specification/usage-tips',
};

// Old pages without a language go to the English pages.
const withoutLocale = Object.entries({ ...moved, ...legacy }).map(
  ([from, to]) => [`/${from}`, `/en/${to}`] as const,
);

const withLocale = Object.keys(Locales).flatMap((locale) =>
  Object.entries(moved).map(
    ([from, to]) => [`/${locale}/${from}`, `/${locale}/${to}`] as const,
  ),
);

export const Redirects: Record<string, string> = Object.fromEntries([
  ...withoutLocale,
  ...withLocale,
]);
