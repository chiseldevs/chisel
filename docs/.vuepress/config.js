module.exports = {
    locales: {
        '/': {
            title: 'Chisel Devs',
            description: 'Biz bilan birga rivojlantiring.'
        },
    },
    head: [
        ['link', {rel: 'icon', href: '/assets/favicons/favicon.ico'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'blue'}],
        ['link', {rel: "apple-touch-icon", sizes: "57x57", href: "/assets/favicons/apple-icon-57x57.png"}],
        ['link', {rel: "apple-touch-icon", sizes: "60x60", href: "/assets/favicons/apple-icon-60x60.png"}],
        ['link', {rel: "apple-touch-icon", sizes: "72x72", href: "/assets/favicons/apple-icon-72x72.png"}],
        ['link', {rel: "apple-touch-icon", sizes: "76x76", href: "/assets/favicons/apple-icon-76x76.png"}],
        ['link', {rel: "apple-touch-icon", sizes: "114x114", href: "/assets/favicons/apple-icon-114x114.png"}],
        ['link', {rel: "apple-touch-icon", sizes: "120x120", href: "/assets/favicons/apple-icon-120x120.png"}],
        ['link', {rel: "apple-touch-icon", sizes: "144x144", href: "/assets/favicons/apple-icon-144x144.png"}],
        ['link', {rel: "apple-touch-icon", sizes: "152x152", href: "/assets/favicons/apple-icon-152x152.png"}],
        ['link', {rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-icon-180x180.png"}],
        ['link', {rel: "icon", type: "image/png", sizes: "192x192", href: "/assets/favicons/android-icon-192x192.png"}],
        ['link', {rel: "icon", type: "image/png", sizes: "96x96", href: "/assets/favicons/favicon-32x32.png"}],
        ['link', {rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png"}],
        ['link', {rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png"}],
        ['link', {rel: "manifest", href: "/assets/favicons/manifest.json"}],
        ['link', {rel: "shortcut icon", href: "/assets/favicons/favicon.ico"}],
        ['meta', {name: "msapplication-TileColor", content: "#1459c7"}],
        ['meta', {name: "msapplication-TileImage", content: "assets/favicons/ms-icon-144x144.png"}],
        ['meta', {name: "msapplication-config", content: "/assets/favicons/browserconfig.xml"}],
        ['meta', {name: "theme-color", content: "#1459c7"}],
    ],
    theme: 'yuu',
    plugins: [
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: {
                    '/': {
                        message: "Yangi kontentlar mavjud.",
                        buttonText: "Yangilash"
                    },
                },
            },
        ],
        [],
        '@vuepress/back-to-top',
        '@vuepress/last-updated',
        '@vuepress/medium-zoom',
        '@vuepress/nprogress',
    ],
    themeConfig: {
        yuu: {
            defaultColorTheme: 'blue',
            colorThemes: ['red', 'purple'],
            defaultDarkTheme: true,
        },
        logo: '/assets/logo.png',
        repo: 'genemators/chisel',
        docsBranch: 'master',
        docsDir: 'docs',
        sidebarDepth: 3,
        lastUpdated: true,
        searchPlaceholder: 'Qidirish...',
        searchMaxSuggestions: 10,
        smoothScroll: true,
        locales: {
            '/': {
                label: 'Asosiy',
                selectText: 'Platformalar',
                ariaLabel: 'Platformalar',
                editLinks: true,
                editLinkText: 'Biz bilan birga rivojlantirishni xohlaysizmi?',
                nav: [
                    {
                        text: 'Asosiy',
                        link: '/'
                    },
                    {
                        text: 'Biz Haqimizda',
                        link: '/about/'
                    },                    {
                        text: 'Blog',
                        link: 'https://bsba.uz', target: '_self'
                    },
                    {
                        text: 'Ssilkalar',
                        ariaLabel: 'Ssilkalar Menusi',
                        items: [
                            {
                                text: 'Telegram', items: [
                                    {text: 'Community', link: 'tg://resolve?domain=iBlogs_community', target: '_blank'}, //_self
                                    {text: 'Habarlar', link: 'tg://resolve?domain=iBlogs', target: '_blank'},
                                    {text: 'Aloqa uchun', link: 'tg://resolve?domain=chiseler', target: '_blank'},
                                ]
                            },
                            {
                                text: 'Web Saytlar', items: [
                                    {text: 'Guruhimiz', link: 'https://bsba.uz/whoarewe', target: '_blank'},
                                    {text: 'GitHub', link: 'https://github.com/bsba-team', target: '_blank'}
                                ]
                            },
                        ]
                    },
                    {
                        text: 'Tillar',
                        ariaLabel: 'Dasturlash Tillari',
                        items: [
                            {
                                text: 'Python', items: [
                                    {text: 'CPython', link: 'https://www.python.org/', target: '_self'},
                                    {text: 'Brython', link: 'https://brython.info/', target: '_self'},
                                    {text: 'PyJS', link: 'http://pyjs.org/', target: '_self'},
                                ]
                            },
                            {
                                text: 'JavaScript', items: [
                                    {text: 'Deno', link: 'https://deno.land/', target: '_blank'},
                                    {text: 'Node.JS', link: 'https://nodejs.org/en/', target: '_blank'},
                                ]
                            },
                        ]
                    },
                ]
            },
        }
    }
};