export function localizeLinkHref(href: string, locale: string): string {
  const isEnglishPath =
    href === '/en' ||
    href.startsWith('/en/') ||
    href.startsWith('/en?') ||
    href.startsWith('/en#');

  if (!isEnglishPath) {
    return href;
  }

  return `/${locale}${href.slice(3)}`;
}
