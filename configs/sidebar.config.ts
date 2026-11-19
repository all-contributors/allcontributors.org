import type { StarlightSidebarTopicsUserConfig } from 'starlight-sidebar-topics';

export const Topics: StarlightSidebarTopicsUserConfig = [
  {
    icon: 'rocket',
    id: 'app',
    items: [
      {
        items: [
          'app',
          'app/getting-started/installation',
          'app/getting-started/first-contributor',
        ],
        label: 'Get started',
      },
      {
        items: [
          'app/guides/usage',
          'app/guides/troubleshooting',
        ],
        label: 'Guides',
      },
      {
        items: [
          'app/reference/permissions',
        ],
        label: 'Reference',
      },
    ],
    label: 'App',
    link: '/app/',
  },
  {
    icon: 'laptop',
    id: 'cli',
    items: [
      {
        items: [
          'cli',
          'cli/getting-started/installation',
          'cli/getting-started/quick-start',
        ],
        label: 'Get started',
      },
      {
        items: [
          'cli/guides/add-contributors',
          'cli/guides/check-contributors',
          'cli/guides/commit-automatically',
          'cli/guides/authenticate',
        ],
        label: 'Guides',
      },
      {
        items: [
          'cli/reference/commands',
        ],
        label: 'Reference',
      },
    ],
    label: 'CLI',
    link: '/cli/',
  },
  {
    icon: 'setting',
    id: 'configuration',
    items: [
      {
        items: [
          'configuration',
        ],
        label: 'Get started',
      },
      {
        items: [
          'configuration/guides/customize-table',
          'configuration/guides/move-table',
          'configuration/guides/badge',
        ],
        label: 'Guides',
      },
      {
        items: [
          'configuration/reference/options',
        ],
        label: 'Reference',
      },
    ],
    label: 'Configuration',
    link: '/configuration/',
  },
  {
    icon: 'open-book',
    id: 'project',
    items: [
      {
        items: [
          'project',
          'project/about/tools',
          'project/about/adopters',
        ],
        label: 'About',
      },
      {
        items: [
          'project/specification/requirements',
          'project/specification/emoji-key',
          'project/specification/usage-tips',
        ],
        label: 'Specification',
      },
      {
        items: [
          'project/contributing/guidelines',
          'project/contributing/code-of-conduct',
        ],
        label: 'Contributing',
      },
      {
        items: [
          'project/maintaining/processes',
          'project/maintaining/cli',
        ],
        label: 'Maintaining',
      },
    ],
    label: 'Project',
    link: '/project/',
  },
];
