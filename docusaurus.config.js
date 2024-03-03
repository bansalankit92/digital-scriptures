// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Satya Bhakti',
    tagline: 'Raising Spiritual Awareness',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://satyabhakti.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'bansalankit92', // Usually your GitHub org/user name.
    projectName: 'Digital Scriptures', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en','hi'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/bansalankit92/digital-scriptures/docs/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
                gtag: {
                    trackingID: 'G-596TP1CGSV',
                },
            })
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            metadata: [
                {name: 'keywords', content: 'sant kabir books, sahibji books, sant vani, aarti, kabir mansoor, kabir sagar'},
                {name: 'twitter:card', content: 'img/india-sants.png'},
            ],
            // Replace with your project's social card
            image: 'img/india-sants.png',
            navbar: {
                title: '',
                logo: {
                    alt: 'Satya bhakti',
                    src: 'img/logo.png',
                },
                items: [
                    {
                        label: 'Sant Kabir Books',
                        items: [
                            {
                                to: '/docs/kabir-mansoor',
                                label: 'Kabir Mansoor',
                            },
                            {
                                to: '/docs/kabir-krishna-geeta/intro',
                                label: 'Kabir Krishna Geeta',
                            },
                            {
                                to: '/docs/kabir-sagar/intro',
                                label: 'Kabir Sagar',
                            },
                        ]
                    },

                    {
                        label: 'Sahibji Books',
                        items: [
                            {
                                to: '/docs/sahib-bhajanawali',
                                label: 'Bhajanawali - भजनावली',
                            },
                        ]
                    }
                    // {
                    //   type: 'search',
                    //   position: 'right',
                    // },

                    // {to: '/blog', label: 'Blog', position: 'left'},
                    // {
                    //   href: 'https://github.com/bansalankit92/digital-scriptures',
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
                    //       label: 'Kabir Krishna Geeta',
                    //       to: '/docs/kabir-krishna-geeta/intro',
                    //     },
                    //   ],
                    // },
                    // {
                    //   title: 'Community',
                    //   items: [
                    //     {
                    //       label: 'Stack Overflow',
                    //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                    //     },
                    //     {
                    //       label: 'Discord',
                    //       href: 'https://discordapp.com/invite/docusaurus',
                    //     },
                    //     {
                    //       label: 'Twitter',
                    //       href: 'https://twitter.com/docusaurus',
                    //     },
                    //   ],
                    // },
                    // {
                    //   title: 'More',
                    //   items: [
                    //     {
                    //       label: 'Blog',
                    //       to: '/blog',
                    //     },
                    //     {
                    //       label: 'GitHub',
                    //       href: 'https://github.com/bansalankit92/digital-scriptures',
                    //     },
                    //   ],
                    // },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Satya Bhakti. Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
