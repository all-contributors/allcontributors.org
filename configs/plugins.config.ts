import starlightContextualMenu from "starlight-contextual-menu";
import starlightHeadingBadges from "starlight-heading-badges";
import starlightImageZoom from "starlight-image-zoom";
import starlightLinksValidator from "starlight-links-validator";
import starlightThemeFlexoki from "starlight-theme-flexoki";

export const Plugins = [
  starlightThemeFlexoki(),
  ...(process.env.CHECK_LINKS
    ? [
        starlightLinksValidator({
          errorOnFallbackPages: false,
          errorOnInconsistentLocale: true,
        }),
      ]
    : []),
  starlightImageZoom(),
  starlightContextualMenu({
    actions: ["copy", "view", "chatgpt", "claude", "lechat"],
  }),
  starlightHeadingBadges(),
];
