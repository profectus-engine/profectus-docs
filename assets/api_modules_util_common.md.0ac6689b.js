import{_ as o,c as r,o as l,N as a,x as e,a as t}from"./chunks/framework.0799945b.js";const x=JSON.parse('{"title":"Module: util/common","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/modules/util/common.md","lastUpdated":null}'),d={name:"api/modules/util/common.md"},n=a('<h1 id="module-util-common" tabindex="-1">Module: util/common <a class="header-anchor" href="#module-util-common" aria-label="Permalink to &quot;Module: util/common&quot;">​</a></h1><h2 id="enumerations" tabindex="-1">Enumerations <a class="header-anchor" href="#enumerations" aria-label="Permalink to &quot;Enumerations&quot;">​</a></h2><h3 id="direction" tabindex="-1">Direction <a class="header-anchor" href="#direction" aria-label="Permalink to &quot;Direction&quot;">​</a></h3><p>• <strong>Direction</strong>: <code>Object</code></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>Default</code></td><td style="text-align:left;"><code>&quot;Up&quot;</code></td></tr><tr><td style="text-align:left;"><code>Down</code></td><td style="text-align:left;"><code>&quot;Down&quot;</code></td></tr><tr><td style="text-align:left;"><code>Left</code></td><td style="text-align:left;"><code>&quot;Left&quot;</code></td></tr><tr><td style="text-align:left;"><code>Right</code></td><td style="text-align:left;"><code>&quot;Right&quot;</code></td></tr><tr><td style="text-align:left;"><code>Up</code></td><td style="text-align:left;"><code>&quot;Up&quot;</code></td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/util/common.ts#L21" target="_blank" rel="noreferrer">profectus/src/util/common.ts:21</a></p><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="arrayelements" tabindex="-1">ArrayElements <a class="header-anchor" href="#arrayelements" aria-label="Permalink to &quot;ArrayElements&quot;">​</a></h3><p>Ƭ <strong>ArrayElements</strong>&lt;<code>T</code>&gt;: <code>T</code> extends <code>ReadonlyArray</code>&lt;infer S&gt; ? <code>S</code> : <code>never</code></p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <code>ReadonlyArray</code>&lt;<code>unknown</code>&gt;</td></tr></tbody></table><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/util/common.ts#L3" target="_blank" rel="noreferrer">profectus/src/util/common.ts:3</a></p><hr><h3 id="withrequired" tabindex="-1">WithRequired <a class="header-anchor" href="#withrequired" aria-label="Permalink to &quot;WithRequired&quot;">​</a></h3>',16),i=e("p",{"[P":"",in:"","K]-?:":"","T[P]":""},[t("Ƭ "),e("strong",null,"WithRequired"),t("<"),e("code",null,"T"),t(", "),e("code",null,"K"),t(">: "),e("code",null,"T"),t(" &")],-1),c=a('<h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>K</code></td><td style="text-align:left;">extends keyof <code>T</code></td></tr></tbody></table><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/util/common.ts#L1" target="_blank" rel="noreferrer">profectus/src/util/common.ts:1</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="cameltotitle" tabindex="-1">camelToTitle <a class="header-anchor" href="#cameltotitle" aria-label="Permalink to &quot;camelToTitle&quot;">​</a></h3><p>▸ <strong>camelToTitle</strong>(<code>camel</code>): <code>string</code></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>camel</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/util/common.ts#L9" target="_blank" rel="noreferrer">profectus/src/util/common.ts:9</a></p><hr><h3 id="isfunction" tabindex="-1">isFunction <a class="header-anchor" href="#isfunction" aria-label="Permalink to &quot;isFunction&quot;">​</a></h3><p>▸ <strong>isFunction</strong>&lt;<code>T</code>, <code>S</code>, <code>R</code>&gt;(<code>functionOrValue</code>): functionOrValue is Function</p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>functionOrValue</code></td><td style="text-align:left;"><code>R</code> | (...<code>args</code>: <code>S</code>) =&gt; <code>T</code></td></tr></tbody></table><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/util/common.ts#L15" target="_blank" rel="noreferrer">profectus/src/util/common.ts:15</a></p>',16),s=[n,i,c];function h(u,f,m,b,p,y){return l(),r("div",null,s)}const _=o(d,[["render",h]]);export{x as __pageData,_ as default};
