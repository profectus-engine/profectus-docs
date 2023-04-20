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
  cleanUrls: 'with-subfolders',
  themeConfig: {
    logo: "/favicon.svg",
    editLink: {
      pattern: "https://github.com/profectus-engine/profectus-docs/edit/main/docs/:path",
      editLinkText: "Edit this page on GitHub"
    },
    nav: [
      { text: "Guide", link: "/guide/", activeMatch: "^/guide/" },
      { text: "API", link: "/api/overview", activeMatch: "^/api/" },
      { text: "Forums", link: "https://forums.moddingtree.com" }
    ],
    socialLinks: [
      { icon: "discord", link: "https://discord.gg/yJ4fjnjU54" },
      { icon: "github", link: "https://github.com/profectus-engine/Profectus" }
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Getting Started",
          collapsed: false,
          items: [
            { text: "Introduction", link: "/guide/" },
            { text: "Setting Up", link: "/guide/getting-started/setup" },
            { text: "Updating Profectus", link: "/guide/getting-started/updating" },
            { text: "Your First Layer", link: "/guide/getting-started/first-layer" },
            { text: "Example Projects", link: "/guide/getting-started/examples" },
            { text: "Profectus Changelog", link: "https://github.com/profectus-engine/Profectus/blob/main/CHANGELOG.md" }
          ]
        },
        {
          text: "Creating Your Project",
          collapsed: false,
          items: [
            { text: "Project Info", link: "/guide/creating-your-project/project-info" },
            { text: "Project Entry", link: "/guide/creating-your-project/project-entry" },
            { text: "Changelog", link: "/guide/creating-your-project/changelog" },
            { text: "Themes", link: "/guide/creating-your-project/themes" },
            { text: "Utilities", link: "/guide/creating-your-project/utils" }
          ]
        },
        {
          text: "Important Concepts",
          collapsed: false,
          items: [
            { text: "Layers", link: "/guide/important-concepts/layers" },
            { text: "Features", link: "/guide/important-concepts/features" },
            { text: "Coercable Components", link: "/guide/important-concepts/coercable" },
            { text: "Reactivity", link: "/guide/important-concepts/reactivity" },
            { text: "Persistence", link: "/guide/important-concepts/persistence" },
            { text: "Requirements", link: "/guide/important-concepts/requirements" },
            { text: "Formulas", link: "/guide/important-concepts/formulas" }
          ]
        },
        {
          text: "Recipes",
          collapsed: false,
          items: [
            { text: "Prestige Mechanic", link: "/guide/recipes/prestige" },
            { text: "Display Save Progress", link: "/guide/recipes/save-progress" },
            { text: "Display Particle Effect", link: "/guide/recipes/particles" }
          ]
        },
        {
          text: "Advanced Concepts",
          collapsed: false,
          items: [
            { text: "Creating Features", link: "/guide/advanced-concepts/creating-features" },
            { text: "Dynamic Layers", link: "/guide/advanced-concepts/dynamic-layers" },
            { text: "Nodes", link: "/guide/advanced-concepts/nodes" }
          ]
        },
        {
          text: "Migrations",
          collapsed: true,
          items: [
            { text: "0.5.X to 0.6.0", link: "/guide/migrations/0-6" }
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
    const moduleSidebar = { text: camelToTitle(file), items: [], collapsed: file === "lib" };
    sidebar.push(moduleSidebar)
    walk(path.join("./docs/api/modules", file), moduleSidebar.items);
  });

  const componentFolders = [];
  walk("./docs/api/components", componentFolders);
  sidebar.unshift({
    text: "Components",
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
      const subSidebar = { text: camelToTitle(file), items: [], collapsed: true };
      sidebar.push(subSidebar);
      walk(resolvedFile, subSidebar.items);
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
