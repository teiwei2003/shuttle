module.exports = {
    locales: {
        '/': {
            title: "Shuttle Docs",
            description: "Shuttle is an open source, public blockchain protocol that provides fundamental infrastructure for a decentralized economy and enables open participation in the creation of new financial primitives to power the innovation of money.",
        },
        '/zh/': {
            title: "Shuttle 文档",
            description: "Shuttle is an open source, public blockchain protocol that provides fundamental infrastructure for a decentralized economy and enables open participation in the creation of new financial primitives to power the innovation of money.",
        },
        '/ja/': {
            title: "Shuttle ドキュメント",
            description: "Shuttle is an open source, public blockchain protocol that provides fundamental infrastructure for a decentralized economy and enables open participation in the creation of new financial primitives to power the innovation of money.",
        }
    },
    markdown: {
        extendMarkdown: (md) => {
            md.use(require("markdown-it-footnote"));
        },
    },
    plugins: [
        [
            "@vuepress/register-components",
            {
                componentsDir: "theme/components",
            },
        ],
        [
            "vuepress-plugin-mathjax",
            {
                target: "svg",
                macros: {
                    "*": "\\times",
                },
            },
        ],
    ],
    head: [
        [
            "link",
            {
                rel: "stylesheet",
                type: "text/css",
                href: "https://cloud.typography.com/7420256/6416592/css/fonts.css",
            },
        ],
        [
            "link",
            {
                rel: "stylesheet",
                type: "text/css",
                href: "https://www.terra.money/static/fonts/jetbrainsMono.css?updated=190220"
            },
        ],
        [
            "link",
            {
                rel: "stylesheet",
                type: "text/css",
                href: "https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined",
            },
        ],

        [
            "link",
            {
                rel: "stylesheet",
                type: "text/css",
                href: "https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,500,700&display=swap",
            },
        ],
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                href: "/img/favicon.png",
            },
        ],
        [
            "script",
            {},
            `window.onload = function() {
requestAnimationFrame(function() {
    if (location.hash) {
    const element = document.getElementById(location.hash.slice(1))

    if (element) {
        element.scrollIntoView()
    }
    }
})
}`,
        ],
    ],
    themeConfig: {
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                nav: [
                    { text: "Top", link: "/" },
                    { text: "Contracts", link: "/contracts/" },
                    { text: "Eth", link: "/eth/" },
                    { text: "Fee", link: "/fee/" },
                    { text: "Terra", link: "/terra/" },
                    {
                        text: "GitHub",
                        link: "https://github.com/highwayns/cosmos-sdk",
                        icon: "/img/github.svg",
                    },
                ],
                sidebar: {
                    "/contracts/": [
                        "/contracts/",
                    ],
                    "/eth/": [
                        "/eth/",
                    ],
                    "/fee/": [
                        "/fee/",
                    ],
                    "/terra/": [
                        "/terra/",
                    ],
                    "/": [{
                        title: "Overview",
                        children: [
                            "/ETH_ASSET",
                            "/TERRA_ASSET",
                        ],
                        collapsable: false,
                    }, ],
                },
            },
            '/zh/': {
                selectText: '选择语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
                nav: [
                    { text: "首页", link: "/zh/" },
                    { text: "Contracts", link: "/zh/contracts/" },
                    { text: "Eth", link: "/zh/eth/" },
                    { text: "Fee", link: "/zh/fee/" },
                    { text: "Terra", link: "/zh/terra/" },
                    {
                        text: "GitHub",
                        link: "https://github.com/highwayns/cosmos-sdk",
                        icon: "/img/github.svg",
                    },
                ],
                sidebar: {
                    "/zh/contracts/": [
                        "/zh/contracts/",
                    ],
                    "/zh/eth/": [
                        "/zh/eth/",
                    ],
                    "/zh/fee/": [
                        "/zh/fee/",
                    ],
                    "/zh/terra/": [
                        "/zh/terra/",
                    ],
                    "/zh/": [{
                        title: "Overview",
                        children: [
                            "/zh/ETH_ASSET",
                            "/zh/TERRA_ASSET",
                        ],
                        collapsable: false,
                    }, ],
                },
            },
            '/ja/': {
                selectText: '言語選択',
                // 该语言在下拉菜单中的标签
                label: '日本語',
                nav: [
                    { text: "トップ", link: "/ja/" },
                    { text: "Contracts", link: "/ja/contracts/" },
                    { text: "Eth", link: "/ja/eth/" },
                    { text: "Fee", link: "/ja/fee/" },
                    { text: "Terra", link: "/ja/terra/" },
                    {
                        text: "GitHub",
                        link: "https://github.com/highwayns/cosmos-sdk",
                        icon: "/img/github.svg",
                    },
                ],
                sidebar: {
                    "/ja/contracts/": [
                        "/ja/contracts/",
                    ],
                    "/ja/eth/": [
                        "/ja/eth/",
                    ],
                    "/ja/fee/": [
                        "/ja/fee/",
                    ],
                    "/ja/terra/": [
                        "/ja/terra/",
                    ],
                    "/ja/": [{
                        title: "Overview",
                        children: [
                            "/ja/ETH_ASSET",
                            "/ja/TERRA_ASSET",
                        ],
                        collapsable: false,
                    }, ],
                },
            },
        },
        sidebarDepth: 3,
        // overrideTheme: 'dark',
        // prefersTheme: 'dark',
        // overrideTheme: { light: [6, 18], dark: [18, 6] },
        // theme: 'default-prefers-color-scheme',
        logo: "/img/logo-cosmos.svg",
        lastUpdated: "Updated on",
        repo: "teiwei2003/shuttle",
        editLinks: true,
        editLinkText: "Edit this page on GitHub",
        docsBranch: 'main',
        docsDir: "docs",
        algolia: {
            apiKey: "5957091e293f7b97f2994bde312aed99",
            indexName: "terra-project",
        },
    },
};