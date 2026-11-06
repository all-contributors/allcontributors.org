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
        items: ["project", "project/about/tools", "project/about/adopters"],
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
          "project/contributing/code-of-conduct",
        ],
      },
      {
        label: "Maintaining",
        items: ["project/maintaining/processes", "project/maintaining/cli"],
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
        items: ["app", "app/getting-started/installation"],
      },
      {
        label: "Guides",
        items: ["app/guides/usage", "app/guides/faq"],
      },
      {
        label: "Reference",
        items: ["app/reference/configuration"],
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
        items: ["cli", "cli/getting-started/installation"],
      },
      {
        label: "Guides",
        items: ["cli/guides/usage"],
      },
      {
        label: "Reference",
        items: ["cli/reference/configuration"],
      },
    ],
  },
];
