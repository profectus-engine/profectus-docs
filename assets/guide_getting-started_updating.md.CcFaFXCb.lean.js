import{_ as t,c as a,a0 as i,o as s}from"./chunks/framework.P9qPzDnn.js";const u=JSON.parse('{"title":"Updating Profectus","description":"","frontmatter":{},"headers":[],"relativePath":"guide/getting-started/updating.md","filePath":"guide/getting-started/updating.md","lastUpdated":1736993723000}'),o={name:"guide/getting-started/updating.md"};function n(r,e,l,h,d,p){return s(),a("div",null,e[0]||(e[0]=[i(`<h1 id="updating-profectus" tabindex="-1">Updating Profectus <a class="header-anchor" href="#updating-profectus" aria-label="Permalink to &quot;Updating Profectus&quot;">​</a></h1><h2 id="incremental-social-code-forge" tabindex="-1">Incremental Social Code Forge <a class="header-anchor" href="#incremental-social-code-forge" aria-label="Permalink to &quot;Incremental Social Code Forge&quot;">​</a></h2><p>Due to Profectus being a template repository, your projects do not share a git history with Profectus. To update changes, you will need to run the following:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes material-theme-palenight material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#FFCB6B;--shiki-dark:#FFCB6B;">git</span><span style="--shiki-light:#C3E88D;--shiki-dark:#C3E88D;"> remote</span><span style="--shiki-light:#C3E88D;--shiki-dark:#C3E88D;"> add</span><span style="--shiki-light:#C3E88D;--shiki-dark:#C3E88D;"> template</span><span style="--shiki-light:#C3E88D;--shiki-dark:#C3E88D;"> https://code.incremental.social/profectus/Profectus</span></span>
<span class="line"><span style="--shiki-light:#FFCB6B;--shiki-dark:#FFCB6B;">git</span><span style="--shiki-light:#C3E88D;--shiki-dark:#C3E88D;"> fetch</span><span style="--shiki-light:#C3E88D;--shiki-dark:#C3E88D;"> --all</span></span>
<span class="line"><span style="--shiki-light:#FFCB6B;--shiki-dark:#FFCB6B;">git</span><span style="--shiki-light:#C3E88D;--shiki-dark:#C3E88D;"> merge</span><span style="--shiki-light:#C3E88D;--shiki-dark:#C3E88D;"> template/main</span><span style="--shiki-light:#C3E88D;--shiki-dark:#C3E88D;"> --allow-unrelated-histories</span></span></code></pre></div><p>The first command only has to be performed once. The third command may require you to merge conflicts between code both you and Profectus have changed - however, due to the modularity of Profectus, this should be fairly rare. Unfortunately, due to the unrelated histories the first time you do this <em>every</em> change will be marked as a conflict, and you&#39;ll need to accept each one.</p><h2 id="replit" tabindex="-1">Replit <a class="header-anchor" href="#replit" aria-label="Permalink to &quot;Replit&quot;">​</a></h2><p>The sidebar has a tab labeled &quot;Version Control&quot;, which you can use to merge all changes made to Profectus into your project. Unfortunately, Replit does not have a merge tool so this process may irrecoverably erase changes you&#39;ve made - I&#39;d recommend making a backup first.</p><h2 id="glitch" tabindex="-1">Glitch <a class="header-anchor" href="#glitch" aria-label="Permalink to &quot;Glitch&quot;">​</a></h2><p>Unfortunately, Glitch does not provide any method by which to update a project from a git repository. If you&#39;ve only changed things in the data folder you may consider creating a new project, importing the current version of Profectus, and then placing your data folder in the new project.</p>`,9)]))}const g=t(o,[["render",n]]);export{u as __pageData,g as default};
