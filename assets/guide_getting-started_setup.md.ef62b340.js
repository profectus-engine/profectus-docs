import{_ as e,c as t,o,N as a}from"./chunks/framework.0799945b.js";const r="/assets/workflow-perms.afbb596c.png",i="/assets/actionsbutton.f1ba9d8e.png",n="/assets/gh-pages.a24cefcf.png",y=JSON.parse('{"title":"Setting Up","description":"","frontmatter":{},"headers":[],"relativePath":"guide/getting-started/setup.md","lastUpdated":1684239242000}'),s={name:"guide/getting-started/setup.md"},l=a('<h1 id="setting-up" tabindex="-1">Setting Up <a class="header-anchor" href="#setting-up" aria-label="Permalink to &quot;Setting Up&quot;">​</a></h1><p>Profectus requires a Node.js development environment for working on a project. If you are comfortable with the command line, a local development environment is recommended.</p><h2 id="local-development" tabindex="-1">Local Development <a class="header-anchor" href="#local-development" aria-label="Permalink to &quot;Local Development&quot;">​</a></h2><p>For local development, you will need the following tools:</p><ul><li><a href="https://git-scm.com/downloads" target="_blank" rel="noreferrer">git</a></li><li><a href="https://nodejs.org/en/download/" target="_blank" rel="noreferrer">node</a></li></ul><p>Create a new project from the <a href="https://github.com/profectus-engine/Profectus" target="_blank" rel="noreferrer">Profectus repository</a> by clicking the &quot;Use this template&quot; button. Then, clone the repository locally using the provided link.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The template repository allows easy creation of multiple projects from one repository. However, updating an existing project to a newer version of Profectus can be challenging. Consider <a href="./updating">updating Profectus</a> <em>before</em> starting development to avoid issues with unrelated histories.</p></div><p>It&#39;s recommended to create a new Git branch for development, allowing you to push changes without affecting the live build. The GitHub workflow will automatically rebuild the page when you push to the <code>main</code> branch.</p><p>Next, install Profectus&#39; dependencies by running <code>npm install</code>. Run <code>npm run dev</code> to start a local server hosting your project. The site will automatically reload as you modify files.</p><p>Also, follow the steps to <a href="./updating">update Profectus</a> before starting to make future updates easier without worrying about unrelated histories.</p><h3 id="deploying" tabindex="-1">Deploying <a class="header-anchor" href="#deploying" aria-label="Permalink to &quot;Deploying&quot;">​</a></h3><p>Using Git, the repository&#39;s workflow action automates deployment. However, you need to grant write permissions for the action in the repository settings. Go to Actions, General, Workflow permissions, and select &quot;Read and write permissions&quot;.</p><p><img src="'+r+'" alt="workflow permissions"></p><p>To deploy, push changes to the main branch. The site will be updated automatically in a few minutes. Check progress or errors from the Actions tab on your repository.</p><p><img src="'+i+'" alt="actions button"></p><p>Enable GitHub Pages in the repo settings to host the generated site. Select the <code>gh-pages</code> branch. Perform this step once. This will automatically start another GitHub action to deploy the website.</p><p><img src="'+n+'" alt="github pages"></p><p>Upon action completion, your project should be available at <code>https://&lt;YOUR_GITHUB_USERNAME&gt;.github.io/&lt;YOUR_REPO_NAME&gt;/</code>. For example, the TMT Demo project hosted at <a href="https://github.com/profectus-engine/TMT-Demo" target="_blank" rel="noreferrer">https://github.com/profectus-engine/TMT-Demo</a> is available at <a href="https://profectus-engine.github.io/TMT-Demo/" target="_blank" rel="noreferrer">https://profectus-engine.github.io/TMT-Demo/</a>.</p><h3 id="visual-studio-code-setup" tabindex="-1">Visual Studio Code Setup <a class="header-anchor" href="#visual-studio-code-setup" aria-label="Permalink to &quot;Visual Studio Code Setup&quot;">​</a></h3><p>If you don&#39;t have a preferred IDE, Profectus is developed in <a href="https://code.visualstudio.com" target="_blank" rel="noreferrer">Visual Studio Code</a> and is known to work well with it.</p><p>Recommendations:</p><ul><li>Use <a href="https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode" target="_blank" rel="noreferrer">Take Over Mode</a> for proper type analysis</li><li>Turn off <code>.value</code> autocomplete by running the <code>Preferences: Open Settings</code> command and setting <code>volar.autoCompleteRefs</code> to <code>false</code></li><li>Disable emmet expansions by setting <code>emmet.showExpandedAbbreviation</code> to <code>&quot;never&quot;</code>, also in the preferences</li><li>Install the <a href="https://marketplace.visualstudio.com/items?itemName=ZixuanChen.vitest-explorer&amp;ssr=false#qna" target="_blank" rel="noreferrer">Vitest VS Code extension</a> for running and debugging unit tests (if working on the engine itself)</li></ul><h2 id="replit" tabindex="-1">Replit <a class="header-anchor" href="#replit" aria-label="Permalink to &quot;Replit&quot;">​</a></h2><p>As an alternative to local development, you may use <a href="https://replit.com" target="_blank" rel="noreferrer">Replit</a>. Replit sets up your development and hosts your project.</p><p>On the free plan, you&#39;ll face limitations, and the program may need occasional startups.</p><p>To create a Profectus project on Replit, all you have to do is click this button:</p><p><a href="https://repl.it/github/profectus-engine/Profectus" target="_blank" rel="noreferrer"><img src="https://repl.it/badge/github/profectus-engine/Profectus" alt="Run on Repl.it"></a></p><p>Click the &quot;Run&quot; button at the top of the screen to start development. This will also make the project publicly accessible, essentially auto-deploying it. However, this means you cannot separate your development and production environments.</p><h2 id="glitch" tabindex="-1">Glitch <a class="header-anchor" href="#glitch" aria-label="Permalink to &quot;Glitch&quot;">​</a></h2><p><a href="https://glitch.com" target="_blank" rel="noreferrer">Glitch</a> is a site similar to Replit, with many of the same pros and cons. To create a Profectus project on Glitch, select &quot;New Project&quot;, &quot;Import from GitHub&quot;, and enter <code>profectus-engine/Profectus</code>. The new project will be automatically configured and ready to go.</p>',30),p=[l];function c(u,d,h,m,g,f){return o(),t("div",null,p)}const v=e(s,[["render",c]]);export{y as __pageData,v as default};
