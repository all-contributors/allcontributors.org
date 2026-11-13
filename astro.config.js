import { satteri } from '@astrojs/markdown-satteri';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

import { Locales } from './configs/locales.config.ts';
import { netlifyRedirects } from './configs/netlify-redirects.integration.ts';
import { Plugins } from './configs/plugins.config.ts';
import { Redirects } from './configs/redirects.config.ts';

// https://astro.build/config
export default defineConfig({
  markdown: {
    processor: satteri(),
  },
  integrations: [
    sitemap(),
    netlifyRedirects(Redirects),
    starlight({
      title: 'All Contributors',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/all-contributors/allcontributors.org',
        },
      ],
      editLink: {
        baseUrl:
          'https://github.com/all-contributors/allcontributors.org/edit/main/',
      },
      favicon: '/favicon.png',
      head: [
        {
          tag: 'script',
          attrs: {
            src: 'https://static.cloudflareinsights.com/beacon.min.js',
            type: 'module',
            'data-cf-beacon':
              '{"token": "f457e44b13094ae39c748c2e90a3ca43"}',
          },
        },
      ],
      logo: {
        src: './src/assets/logo.png',
      },
      lastUpdated: true,
      defaultLocale: 'en',
      locales: Locales,
      customCss: ['./src/styles/custom.css', './src/styles/landing.css'],
      plugins: Plugins,
      credits: true,
      components: {
        Hero: './src/components/Hero.astro',
      },
    }),
  ],
  redirects: {
    '/': {
      status: 301,
      destination: '/en/',
    },
    '/en/app/getting-started/installation': '/en/app/get-started/installation',
    '/en/app/getting-started/first-contributor':
      '/en/app/get-started/first-contributor',
  },
});
