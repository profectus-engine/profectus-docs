import{_ as e,c as t,o as a,N as o}from"./chunks/framework.0799945b.js";const g=JSON.parse('{"title":"Updating Profectus","description":"","frontmatter":{},"headers":[],"relativePath":"guide/getting-started/updating.md","lastUpdated":1681878045000}'),s={name:"guide/getting-started/updating.md"},n=o(`<h1 id="updating-profectus" tabindex="-1">Updating Profectus <a class="header-anchor" href="#updating-profectus" aria-label="Permalink to &quot;Updating Profectus&quot;">​</a></h1><h2 id="github" tabindex="-1">Github <a class="header-anchor" href="#github" aria-label="Permalink to &quot;Github&quot;">​</a></h2><p>Due to Profectus being a template repository, your projects do not share a git history with Profectus. To update changes, you will need to run the following:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">template</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/profectus-engine/Profectus</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fetch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--all</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">merge</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">template/main</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--allow-unrelated-histories</span></span></code></pre></div><p>The first command only has to be performed once. The third command may require you to merge conflicts between code both you and Profectus have changed - however, due to the modularity of Profectus, this should be fairly rare. Unfortunately, due to the unrelated histories the first time you do this <em>every</em> change will be marked as a conflict, and you&#39;ll need to accept each one.</p><h2 id="replit" tabindex="-1">Replit <a class="header-anchor" href="#replit" aria-label="Permalink to &quot;Replit&quot;">​</a></h2><p>The sidebar has a tab labeled &quot;Version Control&quot;, which you can use to merge all changes made to Profectus into your project. Unfortunately, Replit does not have a merge tool so this process may irrecoverably erase changes you&#39;ve made - I&#39;d recommend making a backup first.</p><h2 id="glitch" tabindex="-1">Glitch <a class="header-anchor" href="#glitch" aria-label="Permalink to &quot;Glitch&quot;">​</a></h2><p>Unfortunately, Glitch does not provide any method by which to update a project from a Github repository. If you&#39;ve only changed things in the data folder you may consider creating a new project, importing the current version of Profectus, and then placing your data folder in the new project.</p>`,9),r=[n];function l(i,c,p,d,h,u){return a(),t("div",null,r)}const m=e(s,[["render",l]]);export{g as __pageData,m as default};