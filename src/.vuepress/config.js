module.exports = {
  locales: {
    "/": {
      title: "Chisel Devs | Centralized WS",
      description: "Centralized Sharing Service.",
    },
  },
  head: [
    ["link", { rel: "icon", href: "/assets/favicons/favicon.ico" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "blue" },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/assets/favicons/apple-icon-57x57.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/assets/favicons/apple-icon-60x60.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/assets/favicons/apple-icon-72x72.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/assets/favicons/apple-icon-76x76.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/assets/favicons/apple-icon-114x114.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/assets/favicons/apple-icon-120x120.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/assets/favicons/apple-icon-144x144.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/assets/favicons/apple-icon-152x152.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/assets/favicons/apple-icon-180x180.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/assets/favicons/android-icon-192x192.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/assets/favicons/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/assets/favicons/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/assets/favicons/favicon-16x16.png",
      },
    ],
    ["link", { rel: "manifest", href: "/assets/favicons/manifest.json" }],
    ["link", { rel: "shortcut icon", href: "/assets/favicons/favicon.ico" }],
    ["meta", { name: "msapplication-TileColor", content: "#1459c7" }],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "assets/favicons/ms-icon-144x144.png",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-config",
        content: "/assets/favicons/browserconfig.xml",
      },
    ],
    ["meta", { name: "theme-color", content: "#1459c7" }],
  ],
  theme: "yuu",
  plugins: [
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        popupComponent: "MySWUpdatePopup",
        updatePopup: {
          "/": {
            message: "New contents is available.",
            buttonText: "UPDATE",
          },
        },
      },
    ],
    "@vuepress/back-to-top",
    "@vuepress/last-updated",
    "@vuepress/medium-zoom",
    "@vuepress/nprogress",
  ],
  themeConfig: {
    yuu: {
      colorThemes: ["red"],
      defaultDarkTheme: true,
    },
    logo: "/assets/logo.png",
    repo: "chiseldevs/chisel",
    docsBranch: "master",
    algolia: {
      apiKey: "e4d6caaf31d6f840693811e5db8b56dc",
      appId: "5HEBRR0MXO",
      indexName: "chisel",
    },
    docsDir: "src",
    sidebarDepth: 3,
    editLinks: true,
    lastUpdated: true,
    searchPlaceholder: "Search...",
    searchMaxSuggestions: 10,
    smoothScroll: true,
    locales: {
      "/": {
        label: "Home",
        selectText: "Modules",
        ariaLabel: "Modules",
        editLinkText: "Correct mistakes >",
        nav: [
          {
            text: "Main",
            link: "/",
          },
          {
            text: "About",
            link: "/about/",
          },
          {
            text: "Issues",
            link: "https://github.com/chiseldevs/chisel/issues",
            target: "_self",
          },
          {
            text: "Links",
            ariaLabel: "Links Menu",
            items: [
              {
                text: "Telegram",
                items: [
                  {
                    text: "Community",
                    link: "tg://resolve?domain=chiseldevs",
                    target: "_blank",
                  },
                  {
                    text: "News",
                    link: "tg://resolve?domain=genestatic",
                    target: "_blank",
                  },
                  {
                    text: "Contact",
                    link: "tg://resolve?domain=genemator_bot",
                    target: "_blank",
                  },
                ],
              },
              {
                text: "Devs",
                items: [
                  {
                    text: "Group",
                    link: "https://t.me/chiseldevs",
                    target: "_blank",
                  },
                  {
                    text: "GitHub",
                    link: "https://github.com/chiseldevs",
                    target: "_blank",
                  },
                ],
              },
            ],
          },
          {
            text: "Modules",
            ariaLabel: "Modules",
            items: [
              // {
              //   text: "1st Year",
              //   items: [
              //     {
              //       text: "BIS",
              //       link: "https://bis.chisel.uz/",
              //       target: "_self",
              //     },
              //     {
              //       text: "Business",
              //       link: "https://bs.chisel.uz/",
              //       target: "_self",
              //     },
              //   ],
              // },
              {
                text: "2nd Year",
                items: [
                  {
                    text: "BIS",
                    link: "https://bis.chisel.uz/",
                    target: "_self",
                  },
                  {
                    text: "Business",
                    link: "https://bs.chisel.uz/",
                    target: "_self",
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  },
};
