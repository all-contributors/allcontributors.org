import { pathToFileURL } from 'node:url';
import { describe, expect, it } from 'vitest';

import { localizeLinksPlugin, pageLocale } from './localizeLinks.ts';

const esFile = pathToFileURL('/repo/src/content/docs/es/cli/install.mdx');
const enFile = pathToFileURL('/repo/src/content/docs/en/cli/install.mdx');

describe(pageLocale, () => {
  it('reads the locale folder and skips English', () => {
    expect(pageLocale(esFile)).toBe('es');
    expect(
      pageLocale(pathToFileURL('/repo/src/content/docs/zh/page.mdx')),
    ).toBe('zh');
    expect(pageLocale(enFile)).toBeNull();
    expect(pageLocale(pathToFileURL('/repo/README.md'))).toBeNull();
    expect(pageLocale(undefined)).toBeNull();
  });
});

describe(localizeLinksPlugin, () => {
  it('rewrites a Markdown link on a translated page', () => {
    const plugin = localizeLinksPlugin();
    const node = { url: '/en/cli' };

    plugin.link(node, {
      fileURL: esFile,
      setAttribute() {
        throw new Error('setAttribute should not run for a Markdown link');
      },
      setField(target, key, value) {
        target[key] = value;
      },
    });

    expect(node.url).toBe('/es/cli');
  });

  it('leaves a Markdown link alone on an English page', () => {
    const plugin = localizeLinksPlugin();
    const node = { url: '/en/cli' };

    plugin.link(node, {
      fileURL: enFile,
      setAttribute() {
        throw new Error('setAttribute should not run for a Markdown link');
      },
      setField() {
        throw new Error('setField should not run for an English page');
      },
    });

    expect(node.url).toBe('/en/cli');
  });

  it('rewrites a string href on a LinkCard', () => {
    const plugin = localizeLinksPlugin();
    const node = {
      attributes: [{ type: 'mdxJsxAttribute', name: 'href', value: '/en/cli' }],
    };
    let href = '';

    plugin.mdxJsxFlowElement(node, {
      fileURL: esFile,
      setAttribute(_target, _name, value) {
        href = value;
      },
      setField() {
        throw new Error('setField should not run for a JSX href');
      },
    });

    expect(href).toBe('/es/cli');
  });

  it('rewrites a string href on an anchor', () => {
    const plugin = localizeLinksPlugin();
    const node = {
      attributes: [{ type: 'mdxJsxAttribute', name: 'href', value: '/en/cli' }],
    };
    let href = '';

    plugin.mdxJsxTextElement(node, {
      fileURL: esFile,
      setAttribute(_target, _name, value) {
        href = value;
      },
      setField() {
        throw new Error('setField should not run for a JSX href');
      },
    });

    expect(href).toBe('/es/cli');
  });

  it('leaves an expression href unchanged', () => {
    const plugin = localizeLinksPlugin();
    const node = {
      attributes: [
        {
          type: 'mdxJsxAttribute',
          name: 'href',
          value: { type: 'mdxJsxAttributeValueExpression' },
        },
      ],
    };

    plugin.mdxJsxFlowElement(node, {
      fileURL: esFile,
      setAttribute() {
        throw new Error('setAttribute should not run for an expression href');
      },
      setField() {
        throw new Error('setField should not run for a JSX href');
      },
    });

    expect(node.attributes[0]?.value).toEqual({
      type: 'mdxJsxAttributeValueExpression',
    });
  });
});
