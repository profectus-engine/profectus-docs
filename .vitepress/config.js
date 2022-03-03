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
          text: "Getting Started",
          children: [
            { text: "Introduction", link: "/guide/" },
            { text: "Setting Up", link: "/guide/setup" },
            { text: "Updating Profectus", link: "/guide/updating" }
          ]
        },
        {
          text: "Creating Your Project",
          children: [
            { text: "Project Info", link: "/guide/project-info" },
            { text: "Project Entry", link: "/guide/project-entry" },
            { text: "Layers", link: "/guide/layers" },
            { text: "Changelog", link: "/guide/changelog" },
            { text: "Themes", link: "/guide/themes" }
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
