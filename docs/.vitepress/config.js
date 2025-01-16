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
    ['meta', { name: 'og:description', content: 'A game engine that grows with you' }],
    ['meta', { name: 'og:image', content: '/Logo.png' }]
  ],
  lastUpdated: true,
  appearance: false,
  cleanUrls: 'with-subfolders',
  themeConfig: {
    logo: "/favicon.svg",
    editLink: {
      pattern: "https://code.incremental.social/profectus/profectus-docs/_edit/main/docs/:path",
      editLinkText: "Edit this page on Incremental Social"
    },
    nav: [
      { text: "Guide", link: "/guide/", activeMatch: "^/guide/" },
      { text: "API", link: "/api", activeMatch: "^/api/" },
      { text: "Forums", link: "https://forums.moddingtree.com" }
    ],
    outline: [2, 3],
    socialLinks: [
      { icon: "discord", link: "https://discord.gg/yJ4fjnjU54" },
      { icon: { svg: '<svg id="erAGSmQsg5F1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 334.73599 164" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><g transform="translate(-1.000199-.435301)"><path d="M271.24983,105.65061q-.36,4.08-.31,8.47.05,4.56-4.49,8.19-9.11,7.28-17.84-.35c-5.3-4.65-3.99-10.34-4.42-16.25-11.33-3.3-21.65-12.470005-22.8-24.590005q-.53-5.59-.95-11.21-.04-.52-.53-.64c-4.87-1.23-7.99-2.08-10.29-6.94-3.9-8.23.79-15.35,8.92-18.12.175893-.059771.287747-.229624.27-.41-.74-8.02-1.4-15.08,1.56-22.79c3.11-8.09,9.57-14.26,17.53-17.62q4.11-1.73,10.44-2.07q8.68-.46,17.4-.26q16.85.37,26.28,13.59c6.43,9.02,5.96,18.48,5.03,29.16q-.05.51.45.64c13.7,3.61,12.56,22.82-1.42,24.78-.330958.046125-.58496.316783-.61.65-.38,5.39-.17,11.34-2.1,16.46q-5.7,15.160005-22.12,19.310005Z" fill="#6b438b"/><path d="M142.39,41.700605l-31,11.57c-.187231.072269-.39801.046259-.563762-.069568s-.265293-.306667-.266238-.510432l.01-19.31q0-.55.51-.74q23.03-8.68,46.02-17.25c2.57-.96,4.78-.76,7.42-.75.129956,0,.254589.051625.346482.143518s.143518.216526.143518.346482v132.320005c.000017.211265-.084586.413735-.23491.56218s-.353842.230494-.56509.22782l-19.99-.01q-1.17,0-1.17-1.16v-104.910005c.000142-.1604-.078229-.310715-.209821-.40243s-.299742-.113219-.450179-.05757Z" fill="#eceff4"/><path d="M59.21,74.480605h33.95c.222782,0,.436439.0885.59397.24603s.24603.371188.24603.59397l-.01,18.96c0,.222782-.0885.436439-.24603.59397s-.371188.24603-.59397.24603l-33.88.03c-.222782,0-.436439.0885-.59397.24603s-.24603.371188-.24603.59397l-.08,38.580005c0,.222782-.0885.436439-.24603.59397s-.371188.24603-.59397.24603l-20.11-.01c-.222782,0-.436439-.0885-.59397-.24603s-.24603-.371188-.24603-.59397l-.01-38.580005c0-.222782-.0885-.436439-.24603-.59397s-.371188-.24603-.59397-.24603h-33.87c-.222782,0-.436439-.0885-.59397-.24603s-.24603-.371188-.24603-.59397l.02-19.02c0-.222782.0885-.436439.24603-.59397s.371188-.24603.59397-.24603l33.86.02c.222782,0,.436439-.0885.59397-.24603s.24603-.371188.24603-.59397v-35.79c0-.222782.0885-.436439.24603-.59397s.371188-.24603.59397-.24603l20.13-.02c.222782,0,.436439.0885.59397.24603s.24603.371188.24603.59397v35.83c0,.222782.0885.436439.24603.59397s.371188.24603.59397.24603Z" fill="#eceff4"/><path d="M244.18983,105.71061c.43,5.91-.88,11.6,4.42,16.25q8.73,7.63,17.84.35q4.54-3.63,4.49-8.19-.05-4.39.31-8.47q24.6,4,42.34,20.72l-.18,37.49-110.93.01-.09-37.61q17.53-16.43,41.8-20.55Z" fill="#533566"/><path d="M202.38983,126.26061l.09,37.61-21.38-.49c-.35821-.009824-.690529-.18897-.89563-.482816s-.258668-.667556-.14437-1.007184q7.21-21.29,22.33-35.63Z" fill="#6b438b"/><path d="M313.58983,126.37061q12.71,12.03,19.9,29.52q1.79,4.36,2.23,6.86.11.61-.51.62l-21.8.49.18-37.49Z" fill="#6b438b"/></g></svg>' }, link: "https://code.incremental.social/profectus/Profectus" }
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
            { text: "Profectus Changelog", link: "https://code.incremental.social/profectus/Profectus/blob/main/CHANGELOG.md" }
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
            { text: "Display Particle Effect", link: "/guide/recipes/particles" },
            { text: "Resources on Forums", link: "https://forums.moddingtree.com/tags/c/modding-help/resources/17/profectus" }
          ]
        },
        {
          text: "Advanced Concepts",
          collapsed: false,
          items: [
            { text: "Boards", link: "/guide/advanced-concepts/boards" },
            { text: "Creating Features", link: "/guide/advanced-concepts/creating-features" },
            { text: "Dynamic Layers", link: "/guide/advanced-concepts/dynamic-layers" },
            { text: "Mixins and Wrappers", link: "/guide/advanced-concepts/mixins" },
            { text: "Nodes", link: "/guide/advanced-concepts/nodes" }
          ]
        },
        {
          text: "Migrations",
          collapsed: true,
          items: [
            { text: "0.5.X to 0.6.0", link: "/guide/migrations/0-6" },
            { text: "0.6.X to 0.7.0", link: "/guide/migrations/0-7" }
          ]
        }
      ],
    "/api/": generateAPISidebar()
    }
  },
  markdown: {
    theme: {
      light: "material-theme-palenight",
      dark: "material-theme-palenight"
    }
  }
}

function generateAPISidebar() {
  return JSON.parse(fs.readFileSync("./typedoc-sidebar.json").toString().replaceAll("..\\\\docs\\\\", ""));
}
