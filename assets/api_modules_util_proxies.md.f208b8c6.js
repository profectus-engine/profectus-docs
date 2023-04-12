import{_ as e,c as t,o as a,N as r}from"./chunks/framework.0799945b.js";const b=JSON.parse('{"title":"Module: util/proxies","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/modules/util/proxies.md","lastUpdated":null}'),o={name:"api/modules/util/proxies.md"},d=r('<h1 id="module-util-proxies" tabindex="-1">Module: util/proxies <a class="header-anchor" href="#module-util-proxies" aria-label="Permalink to &quot;Module: util/proxies&quot;">​</a></h1><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="proxied" tabindex="-1">Proxied <a class="header-anchor" href="#proxied" aria-label="Permalink to &quot;Proxied&quot;">​</a></h3><p>Ƭ <strong>Proxied</strong>&lt;<code>T</code>&gt;: <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype" target="_blank" rel="noreferrer"><code>NonNullable</code></a>&lt;<code>T</code>&gt; extends <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type" target="_blank" rel="noreferrer"><code>Record</code></a>&lt;<code>PropertyKey</code>, <code>unknown</code>&gt; ? <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype" target="_blank" rel="noreferrer"><code>NonNullable</code></a>&lt;<code>T</code>&gt; extends <a href="./../game/persistence#persistent"><code>Persistent</code></a>&lt;infer S&gt; ? <a href="./../game/persistence#nonpersistent-1"><code>NonPersistent</code></a>&lt;<code>S</code>&gt; : <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype" target="_blank" rel="noreferrer"><code>NonNullable</code></a>&lt;<code>T</code>&gt; extends <a href="./../lib/break_eternity#default"><code>default</code></a> ? <code>T</code> : { [K in keyof T]: Proxied&lt;T[K]&gt; } &amp; { <code>[ProxyState]</code>: <code>T</code> } : <code>T</code></p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/8c0a0c4/src/util/proxies.ts#L19" target="_blank" rel="noreferrer">profectus/src/util/proxies.ts:19</a></p><hr><h3 id="proxiedwithstate" tabindex="-1">ProxiedWithState <a class="header-anchor" href="#proxiedwithstate" aria-label="Permalink to &quot;ProxiedWithState&quot;">​</a></h3><p>Ƭ <strong>ProxiedWithState</strong>&lt;<code>T</code>&gt;: <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype" target="_blank" rel="noreferrer"><code>NonNullable</code></a>&lt;<code>T</code>&gt; extends <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type" target="_blank" rel="noreferrer"><code>Record</code></a>&lt;<code>PropertyKey</code>, <code>unknown</code>&gt; ? <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype" target="_blank" rel="noreferrer"><code>NonNullable</code></a>&lt;<code>T</code>&gt; extends <a href="./../lib/break_eternity#default"><code>default</code></a> ? <code>T</code> : { [K in keyof T]: ProxiedWithState&lt;T[K]&gt; } &amp; { <code>[ProxyPath]</code>: <code>string</code>[] ; <code>[ProxyState]</code>: <code>T</code> } : <code>T</code></p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/8c0a0c4/src/util/proxies.ts#L8" target="_blank" rel="noreferrer">profectus/src/util/proxies.ts:8</a></p><h2 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h2><h3 id="proxypath" tabindex="-1">ProxyPath <a class="header-anchor" href="#proxypath" aria-label="Permalink to &quot;ProxyPath&quot;">​</a></h3><p>• <code>Const</code> <strong>ProxyPath</strong>: typeof <a href="./proxies#proxypath"><code>ProxyPath</code></a></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/8c0a0c4/src/util/proxies.ts#L6" target="_blank" rel="noreferrer">profectus/src/util/proxies.ts:6</a></p><hr><h3 id="proxystate" tabindex="-1">ProxyState <a class="header-anchor" href="#proxystate" aria-label="Permalink to &quot;ProxyState&quot;">​</a></h3><p>• <code>Const</code> <strong>ProxyState</strong>: typeof <a href="./proxies#proxystate"><code>ProxyState</code></a></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/8c0a0c4/src/util/proxies.ts#L5" target="_blank" rel="noreferrer">profectus/src/util/proxies.ts:5</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="createlazyproxy" tabindex="-1">createLazyProxy <a class="header-anchor" href="#createlazyproxy" aria-label="Permalink to &quot;createLazyProxy&quot;">​</a></h3><p>▸ <strong>createLazyProxy</strong>&lt;<code>T</code>, <code>S</code>&gt;(<code>objectFunc</code>, <code>baseObject?</code>): <code>T</code></p><h4 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <code>object</code></td></tr><tr><td style="text-align:left;"><code>S</code></td><td style="text-align:left;">extends <code>object</code></td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>objectFunc</code></td><td style="text-align:left;">(<code>baseObject</code>: <code>S</code>) =&gt; <code>T</code> &amp; <code>S</code></td></tr><tr><td style="text-align:left;"><code>baseObject</code></td><td style="text-align:left;"><code>S</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>T</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/8c0a0c4/src/util/proxies.ts#L33" target="_blank" rel="noreferrer">profectus/src/util/proxies.ts:33</a></p>',36),l=[d];function i(n,c,s,h,p,u){return a(),t("div",null,l)}const y=e(o,[["render",i]]);export{b as __pageData,y as default};
