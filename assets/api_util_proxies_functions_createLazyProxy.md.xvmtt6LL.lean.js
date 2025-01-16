import{_ as a,c as t,a0 as o,o as r}from"./chunks/framework.P9qPzDnn.js";const h=JSON.parse('{"title":"Function: createLazyProxy()","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/util/proxies/functions/createLazyProxy.md","filePath":"api/util/proxies/functions/createLazyProxy.md","lastUpdated":null}'),c={name:"api/util/proxies/functions/createLazyProxy.md"};function n(s,e,i,d,p,l){return r(),t("div",null,e[0]||(e[0]=[o('<p><a href="./../../../">Profectus</a> / <a href="./../">util/proxies</a> / createLazyProxy</p><h1 id="function-createlazyproxy" tabindex="-1">Function: createLazyProxy() <a class="header-anchor" href="#function-createlazyproxy" aria-label="Permalink to &quot;Function: createLazyProxy()&quot;">​</a></h1><blockquote><p><strong>createLazyProxy</strong>&lt;<code>T</code>, <code>S</code>&gt;(<code>objectFunc</code>, <code>baseObject</code>): <code>T</code> &amp; <code>S</code></p></blockquote><p>Makes a lazily evaluated object through the use of a Proxy</p><h2 id="type-parameters" tabindex="-1">Type Parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type Parameters&quot;">​</a></h2><p>• <strong>T</strong> <em>extends</em> <code>object</code></p><p>• <strong>S</strong> <em>extends</em> <code>object</code></p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="objectfunc" tabindex="-1">objectFunc <a class="header-anchor" href="#objectfunc" aria-label="Permalink to &quot;objectFunc&quot;">​</a></h3><p>(<code>this</code>, <code>baseObject</code>) =&gt; <code>T</code></p><p>Function that constructs the object to be proxies</p><h3 id="baseobject" tabindex="-1">baseObject <a class="header-anchor" href="#baseobject" aria-label="Permalink to &quot;baseObject&quot;">​</a></h3><p><code>S</code> = <code>...</code></p><p>An optional base object to pass to objectFunc, which all return properties will be assigned onto</p><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>T</code> &amp; <code>S</code></p><p>A proxy for the object created by objectFunc</p><h2 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h2><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/util/proxies.ts#L12" target="_blank" rel="noreferrer">profectus/src/util/proxies.ts:12</a></p>',19)]))}const b=a(c,[["render",n]]);export{h as __pageData,b as default};
