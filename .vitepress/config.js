const fs = require("fs");
const path = require("path");

module.exports = {
  lang: "en-US",
  title: 'Profectus',
  description: 'A game engine that grows with you.',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,600;1,400' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['script', { defer: true, 'data-domain': 'moddingtree.com', src: 'https://plausible.io/js/plausible.js' }],
    ['meta', { name: 'og:description', content: 'A game engine that grows with you' }],
    ['meta', { name: 'og:image', content: '/Logo.png' }]
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
            { text: "Changelog", link: "/guide/changelog" },
            { text: "Themes", link: "/guide/themes" },
            { text: "Utilities", link: "/guide/utils" }
          ]
        },
        {
          text: "Important Concepts",
          children: [
            { text: "Layers", link: "/guide/layers" },
            { text: "Features", link: "/guide/features" },
            { text: "Coercable Components", link: "/guide/coercable" },
            { text: "Reactivity", link: "/guide/reactivity" }
          ]
        },
        {
          text: "Advanced Concepts",
          children: [
            { text: "Creating Features", link: "/guide/creating-features" }
          ]
        }
      ],
    "/api/": generateAPISidebar()
    }
  }
}

function generateAPISidebar() {
  const modules = fs.readdirSync("./api/modules").map(file => file.substr(0, file.length - 3));
  const moduleFolders = {};
  modules.forEach(file => {
    // Split by _, but not break_eternity
    const pieces = file.replace("break_eternity", "break~eternity").split(/_/).map(piece => piece === "break~eternity" ? "break_eternity" : piece);
    const lineItem = { text: camelToTitle(pieces[pieces.length - 1]), link: `/api/modules/${file}` };
    pieces.slice(0, pieces.length - 1).reduce((acc, curr) => {
      // console.log(acc, curr);
      if (!acc[curr]) {
        acc[curr] = { text: camelToTitle(curr), children: [] };
      }
      return acc[curr].children;
    }, moduleFolders).push(lineItem);
  });
  const sidebar = processFolders(moduleFolders);

  const componentFolders = [];
  walk("./api/components", componentFolders);
  sidebar.unshift({
    text: "Components",
    children: componentFolders
  });

  walk("./api/features", sidebar.find(item => item.text === "Features").children);

  sort(sidebar);

  return sidebar;
}

function sort(sidebar) {
  sidebar.filter(sidebar => !!sidebar.children).forEach(item => sort(item.children));
  sidebar.sort((a, b) => {
    if (a.children && !b.children) {
      return -1;
    } else if (!a.children && b.children) {
      return 1;
    } else if (a.text > b.text) {
      return 1;
    } else if (a.text < b.text) {
      return -1;
    } else {
      return 0;
    }
  });
}

function walk(dir, sidebar) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const resolvedFile = path.join(dir, file);
    const stat = fs.statSync(resolvedFile);
    if (stat.isDirectory()) {
      let folder = sidebar.find(item => item.text === camelToTitle(file));
      if (!folder) {
        folder = {
          text: camelToTitle(file),
          children: []
        };
        sidebar.push(folder);
      }
      walk(resolvedFile, folder.children);
    } else {
      sidebar.push({ text: camelToTitle(file.substr(0, file.length - 3)), link: resolvedFile.substr(0, resolvedFile.length - 3) + ".html" });
    }
  });
}

function camelToTitle(camel) {
    if (camel === "break_eternity") {
      return "Break Eternity";
    }
    let title = camel.replace(/([A-Z])/g, " $1");
    title = title.charAt(0).toUpperCase() + title.slice(1);
    return title;
}

function processFolders(folders) {
  return Object.values(folders).map(folder => {
    if (folder.children) {
      folder.children = processFolders(folder.children);
    }
    return folder;
  })
}
