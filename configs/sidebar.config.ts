import type { StarlightSidebarTopicsUserConfig } from "starlight-sidebar-topics";

export const Topics: StarlightSidebarTopicsUserConfig = [
  {
    label: "Project",
    id: "project",
    link: "/project/",
    icon: "open-book",
    items: [
      {
        label: "About",
        items: [
          "project",
          "project/about/tools",
          "project/about/how-it-works",
          "project/about/repositories",
          "project/about/adopters",
        ],
      },
      {
        label: "Specification",
        items: [
          "project/specification/requirements",
          "project/specification/emoji-key",
          "project/specification/usage-tips",
        ],
      },
      {
        label: "Contributing",
        items: [
          "project/contributing/guidelines",
          "project/contributing/documentation",
          "project/contributing/code-of-conduct",
        ],
      },
      {
        label: "Maintaining",
        items: [
          "project/maintaining/processes",
          "project/maintaining/cli",
          "project/maintaining/app",
          "project/maintaining/website",
          "project/maintaining/dashboard",
        ],
      },
    ],
  },
  {
    label: "App",
    id: "app",
    link: "/app/",
    icon: "rocket",
    items: [
      {
        label: "Getting started",
        items: [
          "app",
          "app/getting-started/installation",
          "app/getting-started/first-contributor",
        ],
      },
      {
        label: "Guides",
        items: [
          "app/guides/usage",
          "app/guides/move-the-table",
          "app/guides/customize-the-table",
          "app/guides/update-badge",
          "app/guides/troubleshooting",
        ],
      },
      {
        label: "Reference",
        items: [
          "app/reference/configuration",
          "app/reference/comment-syntax",
          "app/reference/permissions",
        ],
      },
    ],
  },
  {
    label: "CLI",
    id: "cli",
    link: "/cli/",
    icon: "laptop",
    items: [
      {
        label: "Getting started",
        items: [
          "cli",
          "cli/getting-started/installation",
          "cli/getting-started/quick-start",
        ],
      },
      {
        label: "Guides",
        items: [
          "cli/guides/add-contributors",
          "cli/guides/check-contributors",
          "cli/guides/commit-automatically",
          "cli/guides/authenticate",
        ],
      },
      {
        label: "Reference",
        items: ["cli/reference/commands", "cli/reference/configuration"],
      },
    ],
  },
];
