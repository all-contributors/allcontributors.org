import starlightHeadingBadges from "starlight-heading-badges";
import starlightImageZoom from "starlight-image-zoom";
import starlightLinksValidator from "starlight-links-validator";
import starlightSidebarTopics from "starlight-sidebar-topics";
import starlightThemeFlexoki from "starlight-theme-flexoki";

import { Topics } from "./sidebar.config.ts";

export const Plugins = [
  starlightThemeFlexoki(),
  starlightSidebarTopics(Topics),
  ...(process.env.CHECK_LINKS
    ? [
        starlightLinksValidator({
          errorOnFallbackPages: false,
          errorOnInconsistentLocale: true,
        }),
      ]
    : []),
  starlightImageZoom(),
  starlightHeadingBadges(),
];
