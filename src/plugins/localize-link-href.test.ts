import { describe, expect, it } from 'vitest';

import { localizeLinkHref } from './localize-link-href.ts';

describe(localizeLinkHref, () => {
  it('swaps a leading /en/ for the page locale', () => {
    expect(localizeLinkHref('/en/cli', 'es')).toBe('/es/cli');
    expect(localizeLinkHref('/en/cli/install#setup', 'es')).toBe(
      '/es/cli/install#setup',
    );
    expect(localizeLinkHref('/en/cli?x=1', 'fr')).toBe('/fr/cli?x=1');
    expect(localizeLinkHref('/en', 'es')).toBe('/es');
    expect(localizeLinkHref('/en#setup', 'es')).toBe('/es#setup');
  });

  it('leaves other hrefs unchanged', () => {
    expect(localizeLinkHref('https://github.com/all-contributors', 'es')).toBe(
      'https://github.com/all-contributors',
    );
    expect(localizeLinkHref('/es/cli', 'es')).toBe('/es/cli');
    expect(localizeLinkHref('/english', 'es')).toBe('/english');
    expect(localizeLinkHref('../cli', 'es')).toBe('../cli');
    expect(localizeLinkHref('#setup', 'es')).toBe('#setup');
  });
});
