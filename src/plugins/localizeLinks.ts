import { fileURLToPath } from 'node:url';

import { localizeLinkHref } from './localizeLinkHref.ts';

const DOCS_ROOT = 'content/docs/';

export function getPageLocale(fileURL: URL | undefined): string | null {
  if (!fileURL) {
    return null;
  }

  const path = fileURLToPath(fileURL).replaceAll('\\', '/');
  const index = path.indexOf(DOCS_ROOT);
  if (index === -1) {
    return null;
  }

  const segment = path.slice(index + DOCS_ROOT.length).split('/')[0];
  if (!segment || segment === 'en') {
    return null;
  }

  return segment;
}

interface LinkNode {
  url: string;
}

interface JsxAttribute {
  type: string;
  name?: string;
  value?: unknown;
}

interface JsxNode {
  attributes?: JsxAttribute[];
}

interface PluginContext {
  fileURL?: URL;
  setField(node: LinkNode, key: 'url', value: string): void;
  setAttribute(node: JsxNode, name: string, value: string): void;
}

function localizeJsxHref(node: JsxNode, ctx: PluginContext) {
  const locale = getPageLocale(ctx.fileURL);
  if (!locale) {
    return;
  }

  for (const attr of node.attributes ?? []) {
    if (
      attr.type !== 'mdxJsxAttribute' ||
      attr.name !== 'href' ||
      typeof attr.value !== 'string'
    ) {
      continue;
    }

    const next = localizeLinkHref(attr.value, locale);
    if (next !== attr.value) {
      ctx.setAttribute(node, 'href', next);
    }
  }
}

export function localizeLinksPlugin() {
  return {
    name: 'localize-links',
    link(node: LinkNode, ctx: PluginContext) {
      const locale = getPageLocale(ctx.fileURL);
      if (!locale) {
        return;
      }

      const next = localizeLinkHref(node.url, locale);
      if (next !== node.url) {
        ctx.setField(node, 'url', next);
      }
    },
    mdxJsxFlowElement(node: JsxNode, ctx: PluginContext) {
      localizeJsxHref(node, ctx);
    },
    mdxJsxTextElement(node: JsxNode, ctx: PluginContext) {
      localizeJsxHref(node, ctx);
    },
  };
}
