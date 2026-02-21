// @ts-check
import { defineConfig } from 'astro/config';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://all-contributors.github.io',
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
        // ar: {
        //   label: 'العربية',
        //   dir: 'rtl',
        // },
        // bn: {
        //   // Bengali
        //   label: 'বাং',
        // },
        // da: {
        //   // Danish
        //   label: 'Dansk',
        // },
        de: {
          // German
          label: 'Deutsch',
        },
        // el: {
        //   // Greek
        //   label: 'Νέα Ελληνικά',
        // },
        es: {
          // Spanish
          label: 'Español',
        },
        // fa: {
        //   // Farsi (Persian)
        //   label: 'فارسی',
        // },
        // fi: {
        //   // Finnish
        //   label: 'Suomi',
        // },
        // fil: {
        //   // Filipino (Tagalog)},
        //   label: 'Wikang Tagalog',
        // },
        fr: {
          // French
          label: 'Français',
        },
        // gl: {
        //   // Galician
        //   label: 'Galego',
        // },
        // he: {
        //   // Hebrew
        //   label: 'עברית',
        // },
        hi: {
          // Hindi
          label: 'हिन्दी',
        },
        // hr: {
        //   // Croatian
        //   label: 'Hrvatski',
        // },
        id: {
          //Indonesian
          label: 'bahasa Indonesia',
        },
        // it: {
        //   // Italian
        //   label: 'Italiano',
        // },
        ja: {
          // Japanese
          label: '日本語',
        },
        ko: {
          // Korean
          label: '한국어, 조선말',
        },
        // ml: {
        //   // Malayalam
        //   label: 'മലയാള',
        // },
        nl: {
          // Dutch, Flemish
          label: 'Nederlands',
        },
        no: {
          // Norwegian
          label: 'Norsk',
        },
        pl: {
          // Polish
          label: 'Polski',
        },
        pt: {
          // Portuguese
          label: 'Português',
        },
        ro: {
          // Romanian, Moldavian, Moldovan
          label: 'Română, Ромынэ',
        },
        ru: {
          // Russian
          label: 'Русский язык',
        },
        // si: {
        //   // Sinhala, Sinhalese
        //   label: 'සිංහල',
        // },
        // sk: {
        //   // Slovak
        //   label: 'Solvenčina',
        // },
        // sv: {
        //   // Swedish
        //   label: 'Svenska',
        // },
        // sw: {
        //   // Swahili
        //   label: 'Kiswahili; كِسوَحِيلِ',
        // },
        // ta: {
        //   // Tamil
        //   label: 'தமிழ்',
        // },
        // th: {
        //   // Thai
        //   label: 'ภาษาไทย',
        // },
        // tr: {
        //   // Turkish
        //   label: 'Türkçe',
        // },
        // uk: {
        //   // Ukrainian
        //   label: 'Українська (Ukraїnska)',
        // },
        // ur: {
        //   // Urdu
        //   label: 'اُردُو',
        //   dir: 'rtl',
        // },
        // vi: {
        //   // Vietnamese
        //   label: 'tiếng Việt',
        // },
        zh: {
          // Chinese
          label: '中文 (Zhōngwén), 汉语; 漢語 (Hànyǔ)',
        },
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
