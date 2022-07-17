import{_ as e,c as a,o as t,a as s}from"./app.ab34650d.js";const f=JSON.parse('{"title":"Project Entry","description":"","frontmatter":{},"headers":[{"level":2,"title":"Required Exports","slug":"required-exports"},{"level":3,"title":"getInitialLayers","slug":"getinitiallayers"},{"level":3,"title":"hasWon","slug":"haswon"},{"level":3,"title":"fixOldSave","slug":"fixoldsave"}],"relativePath":"guide/creating-your-project/project-entry.md","lastUpdated":1658096715000}'),o={name:"guide/creating-your-project/project-entry.md"},r=s(`<h1 id="project-entry" tabindex="-1">Project Entry <a class="header-anchor" href="#project-entry" aria-hidden="true">#</a></h1><p>This is a TypeScript file containing the non-static parts of your project, and acts as the entry point for it.</p><p>It is stored at <code>/src/data/projEntry.jsx</code>.</p><p>This file has 3 things it must export, but beyond that can export anything the creator wants it to. Typically in addition to the required 3, the initial/&quot;main&quot; layer will be exported. Typically utilites belong in <code>common.tsx</code>, which exists next to <code>projEntry.tsx</code>.</p><h2 id="required-exports" tabindex="-1">Required Exports <a class="header-anchor" href="#required-exports" aria-hidden="true">#</a></h2><h3 id="getinitiallayers" tabindex="-1">getInitialLayers <a class="header-anchor" href="#getinitiallayers" aria-hidden="true">#</a></h3><ul><li>Type: <code>(player: Partial&lt;PlayerData&gt;) =&gt; GenericLayer[]</code></li></ul><p>A function that is given a player save data object currently being loaded, and returns a list of layers that should be active for that player. If a project does not have dynamic layers, this should always return a list of all layers.</p><h3 id="haswon" tabindex="-1">hasWon <a class="header-anchor" href="#haswon" aria-hidden="true">#</a></h3><ul><li>Type: <code>ComputedRef&lt;boolean&gt;</code></li></ul><p>A computed ref whose value is true whenever the game is over.</p><p>For example, in a game where the goal is to have a resource reach 10:</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> hasWon </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">computed</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> Decimal</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">gte</span><span style="color:#A6ACCD;">(resource</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="fixoldsave" tabindex="-1">fixOldSave <a class="header-anchor" href="#fixoldsave" aria-hidden="true">#</a></h3><ul><li>Type: <code>(oldVersion: string | undefined, player: Partial&lt;PlayerData&gt;) =&gt; void</code></li></ul><p>This function will be run whenever a save is loaded that has a different version than the one in <a href="./project-info.html#versionnumber">project info</a>. It will be given the old version number, and the player save data object currently being loaded.</p><p>The purpose of this function is to perform any necessary migrations, such as capping a resource that accidentally inflated in a previous version of the project. By default it will do nothing.</p>`,17),n=[r];function l(i,p,c,d,h,y){return t(),a("div",null,n)}var g=e(o,[["render",l]]);export{f as __pageData,g as default};
