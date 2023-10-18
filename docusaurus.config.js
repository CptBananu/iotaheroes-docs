// @ts-check
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "IOTA Heroes Documentation",
  tagline: "Explore the world of IOTA Heroes",
  favicon: "img/favicon.png",


  url: "https://docs.iotaheroes.com",
  baseUrl: "/",

  organizationName: "iotaheroes-community", // Adjust this to your GitHub organization name
  projectName: "docs", // Adjust this to your repository name

  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/iotaheroes-community/docs/tree/main/", // Adjust this to your repository URL
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    image: "img/iota-heroes-social-card.png", // Replace with your project's social card
    navbar: {
      logo: {
        alt: "IOTA Heroes Logo",
        src: "img/logo.webp",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar", // Adjust the sidebarId to match your sidebar file
          position: "left",
          label: "Docs",
        },
        {
          href: "https://game.iotaheroes.com",
          label: "Game",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/getting-started/introduction",
            },
            {
              label: "Tokenomics",
              to: "/category/tokenomics",
            },
            {
              label: "FAQ",
              to: "/faq",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "X.com",
              to: "https://twitter.com/IotaHeroes",
            },
            {
              label: "Discord",
              to: "https://discord.gg/92JHZzFvdA",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Website",
              href: "https://www.iotaheroes.com/",
            },
            {
              label: "Game",
              href: "https://game.iotaheroes.com/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IOTA Heroes. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
