/**
 * Rewrites internal English documentation links (/en/...) in HTML to match the specified target locale.
 *
 * @param html - The HTML string to transform.
 * @param targetLocale - The target locale (e.g., 'fr', 'pt', 'de'). If 'en' or undefined, returns original HTML.
 * @returns The transformed HTML string with localized links.
 */
export function rewriteInternalLinks(html: string, targetLocale?: string): string {
  if (!targetLocale || targetLocale === "en" || !html) {
    return html;
  }

  // Rewrite href="/en/..." or href='/en/...' to href="/${targetLocale}/..."
  // Also rewrites href="/en" or href='/en' to href="/${targetLocale}/"
  return html.replace(
    /href=(["'])\/en(?:\/([^"']*))?\1/g,
    (_match, quote: string, subpath: string | undefined) => {
      const path = subpath ? `/${subpath}` : "/";
      return `href=${quote}/${targetLocale}${path}${quote}`;
    },
  );
}
