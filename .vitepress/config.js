module.exports = {
  lang: "en-US",
  title: 'Profectus',
  description: 'A game engine that grows with you.',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono' }]
  ],
  themeConfig: {
    repo: 'profectus-engine/profectus-docs',
    docsDir: '',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    nav: [
      { text: "Guide", link: "/guide/", activeMatch: "^/guide/" },
      { text: "API", link: "/api/", activeMatch: "^/api/" },
      { text: "Forums", link: "https://forums.moddingtree.com" },
      { text: "Discord", link: "https://discord.gg/F3xveHV" },
      { text: "Github", link: "https://github.com/profectus-engine/Profectus" }
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          children: [
            { text: "Introduction", link: "/guide/" },
            { text: "Getting Started", link: "/guide/getting-started" }
          ]
        },
        {
          text: "Creating Features",
          children: []
        }
      ],
    }
  }
}
