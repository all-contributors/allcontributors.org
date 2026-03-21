// @ts-check
import { defineConfig } from 'astro/config';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://allcontributors.org',
  base: '',
  markdown: {
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'append' }]],
  },
  output: 'static',
  redirects: {
    // Later we can put redirects here if needed
  },
  integrations: [
    starlight({
      customCss: [
        './src/styles/global.css',
        './src/fonts/font-face.css',
      ],
      title: '',
      logo: {
        src: './src/assets/logo-full.svg',
      },
      favicon: '/icons/favicon-16x16.png',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/all-contributors/all-contributors' }],
      sidebar: [
        {
          label: 'Specification',
          items: [
            { label: 'spec overview', slug: 'overview' },
            { label: 'specification', slug: 'specification' },
            { label: 'emoji-key', slug: 'emoji-key' },
            { label: 'usage tips', slug: 'usage-tips' },
            { label: 'tooling', slug: 'tooling' }
          ],
        },
        {
          label: '@all-contributors Bot 🤖',
          items: [
            { label: 'bot overview', slug: 'bot/overview' },
            { label: 'installation', slug: 'bot/installation' },
            { label: 'usage', slug: 'bot/usage' },
            { label: 'configuration', slug: 'bot/configuration' },
            { label: 'faq', slug: 'bot/faq' }
          ],
        },
        {
          label: 'CLI',
          items: [
            { label: 'CLI overview', slug: 'cli/overview' },
            { label: 'installation', slug: 'cli/installation' },
            { label: 'usage', slug: 'cli/usage' },
            { label: 'configuration', slug: 'cli/configuration' }
          ],
        },
        {
          label: 'Project',
          items: [
            { label: 'contribute', slug: 'project/contribute' },
            { label: 'development', slug: 'project/development' },
            { label: 'maintain', slug: 'project/maintain' },
            { label: 'code-of-conduct', slug: 'project/code-of-conduct' },
            { label: 'implementations', slug: 'project/implementations' },
          ],
        },
      ],
      // Set English default locale
      defaultLocale: 'en',
      locales: {
        en: {
          label: 'English',
        },
        // de: {
        //   // German
        //   label: 'Deutsch',
        // },
        // es: {
        //   // Spanish
        //   label: 'Español',
        // },
        // fr: {
        //   // French
        //   label: 'Français',
        // },
        // hi: {
        //   // Hindi
        //   label: 'हिन्दी',
        // },
        //id: {
        //  //Indonesian
        //  label: 'bahasa Indonesia',
        //},
        // ja: {
        //   // Japanese
        //   label: '日本語',
        // },
        // ko: {
        //   // Korean
        //   label: '한국어, 조선말',
        // },
        // nl: {
        //   // Dutch, Flemish
        //   label: 'Nederlands',
        // },
        // pl: {
        //   // Polish
        //   label: 'Polski',
        // },
        // pt: {
        //   // Portuguese
        //   label: 'Português',
        // },
        // ro: {
        //   // Romanian, Moldavian, Moldovan
        //   label: 'Română, Ромынэ',
        // },
        // ru: {
        //   // Russian
        //   label: 'Русский язык',
        // },
        // zh: {
        //   // Chinese
        //   label: '中文 (Zhōngwén), 汉语; 漢語 (Hànyǔ)',
        // },
      },
    }),
    sitemap()
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@assets': '/src/assets',
      },
    },
  },
});
