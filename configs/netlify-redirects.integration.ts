import type { AstroIntegration } from 'astro';

import { existsSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

/**
 * Writes a Netlify `_redirects` file that sends every old page address to its new one with a
 * permanent redirect, which is a real HTTP status that search engines and tools can follow.
 * The build fails when a redirect points at a page that doesn't exist.
 *
 * @see https://docs.netlify.com/manage/routing/redirects/overview/
 */
export function netlifyRedirects(
  redirects: Record<string, string>,
): AstroIntegration {
  return {
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const outDir = fileURLToPath(dir);

        const missing = Object.values(redirects).filter(
          (to) => !existsSync(`${outDir}${to.slice(1)}/index.html`),
        );

        if (missing.length > 0) {
          throw new Error(
            `Some redirects point at pages that don't exist: ${[...new Set(missing)].join(', ')}.`,
          );
        }

        const lines = Object.entries(redirects).map(
          ([from, to]) => `${from} ${to} 301`,
        );

        await writeFile(`${outDir}_redirects`, `${lines.join('\n')}\n`);
      },
    },
    name: 'netlify-redirects',
  };
}
