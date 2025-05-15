import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Javi Cardenas',
  tagline: 'Software Engineer',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://javicard.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'javi-cardenas', // Usually your GitHub org/user name.
  projectName: 'javicard.com', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // In order for Mermaid code blocks in Markdown to work,
  // you also need to enable the Remark plugin with this option
  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/javi-cardenas/javicard.com',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/javi-cardenas/javicard.com',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    '@docusaurus/theme-live-codeblock',
    '@docusaurus/theme-mermaid',
  ],

  scripts: [
    {
      src: 'https://javicard.statuspage.io/embed/script.js',
      async: true, // Add this if the script should load asynchronously
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    // TODO
    // image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true
    },
    docs: {
      sidebar: {hideable: true}
    },
    navbar: {
      title: 'Home',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/favicon.png',
      // },
      hideOnScroll: true,
      items: [
        {to: '/projects', label: 'Projects', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/javi-cardenas/javicard.com',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Tutorial',
        //       to: '/docs/intro',
        //     },
        //   ],
        // },
        {
          title: 'Connect',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/javi-cardenas/javicard.com',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/javicardenas/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Status',
              href: 'https://javicard.statuspage.io/',
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          ],
        },
      ],
      //copyright: `Copyright © ${new Date().getFullYear()} Javi Cardenas`,
    },
    // plugin customization
    liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: 'bottom',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
