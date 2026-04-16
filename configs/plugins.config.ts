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
  starlightHeadingBadges(),
];
