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
  lastUpdated: true,
  appearance: false,
  themeConfig: {
    logo: "/favicon.svg",
    editLink: {
      pattern: "https://github.com/profectus-engine/profectus-docs/edit/main/docs/:path",
      editLinkText: "Edit this page on GitHub"
    },
    nav: [
      { text: "Guide", link: "/guide/", activeMatch: "^/guide/" },
      { text: "API", link: "/api/", activeMatch: "^/api/" },
      { text: "Forums", link: "https://forums.moddingtree.com" }
    ],
    socialLinks: [
      { icon: "discord", link: "https://discord.gg/F3xveHV" },
      { icon: "github", link: "https://github.com/profectus-engine/Profectus" }
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Getting Started",
          collapsible: true,
          items: [
            { text: "Introduction", link: "/guide/" },
            { text: "Setting Up", link: "/guide/setup" },
            { text: "Updating Profectus", link: "/guide/updating" },
            { text: "Example Projects", link: "/guide/examples" }
          ]
        },
        {
          text: "Creating Your Project",
          collapsible: true,
          items: [
            { text: "Project Info", link: "/guide/project-info" },
            { text: "Project Entry", link: "/guide/project-entry" },
            { text: "Changelog", link: "/guide/changelog" },
            { text: "Themes", link: "/guide/themes" },
            { text: "Utilities", link: "/guide/utils" }
          ]
        },
        {
          text: "Important Concepts",
          collapsible: true,
          items: [
            { text: "Layers", link: "/guide/layers" },
            { text: "Features", link: "/guide/features" },
            { text: "Coercable Components", link: "/guide/coercable" },
            { text: "Reactivity", link: "/guide/reactivity" },
            { text: "Persistence", link: "/guide/persistence" }
          ]
        },
        {
          text: "Advanced Concepts",
          collapsible: true,
          items: [
            { text: "Creating Features", link: "/guide/creating-features" },
            { text: "Dynamic Layers", link: "/guide/dynamic-layers" }
          ]
        }
      ],
    "/api/": generateAPISidebar()
    }
  }
}

function generateAPISidebar() {
  const sidebar = [];

  const modules = fs.readdirSync("./docs/api/modules");
  modules.forEach(file => {
    const moduleSidebar = { text: camelToTitle(file), collapsible: true, items: [], collapsed: file === "lib" };
    sidebar.push(moduleSidebar)
    walk(path.join("./docs/api/modules", file), moduleSidebar.items);
  });

  const componentFolders = [];
  walk("./docs/api/components", componentFolders);
  sidebar.unshift({
    text: "Components",
    collapsible: true,
    collapsed: true,
    items: componentFolders
  });

  sort(sidebar);

  return sidebar;
}

function sort(sidebar) {
  sidebar.filter(sidebar => !!sidebar.items).forEach(item => sort(item.items));
  sidebar.sort((a, b) => {
    if (a.items && !b.items) {
      return -1;
    } else if (!a.items && b.items) {
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
      walk(resolvedFile, sidebar);
    } else if (!file.includes("Component") || dir.includes("components")) {
      sidebar.push({ text: camelToTitle(file.substr(0, file.length - 3)), link: "/" + resolvedFile.substr(5, resolvedFile.length - 8).replace(/\\/g, "/") + ".html" });
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
