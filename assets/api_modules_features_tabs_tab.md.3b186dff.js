import{_ as e,c as a,o as t,N as r}from"./chunks/framework.0799945b.js";const u=JSON.parse('{"title":"Module: features/tabs/tab","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/modules/features/tabs/tab.md","lastUpdated":null}'),o={name:"api/modules/features/tabs/tab.md"},s=r('<h1 id="module-features-tabs-tab" tabindex="-1">Module: features/tabs/tab <a class="header-anchor" href="#module-features-tabs-tab" aria-label="Permalink to &quot;Module: features/tabs/tab&quot;">​</a></h1><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><h3 id="basetab" tabindex="-1">BaseTab <a class="header-anchor" href="#basetab" aria-label="Permalink to &quot;BaseTab&quot;">​</a></h3><p>• <strong>BaseTab</strong>: <code>Object</code></p><p>The properties that are added onto a processed <a href="./tab#taboptions">TabOptions</a> to create an <a href="./tab#tab">Tab</a>.</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/tabs/tab.ts#L31" target="_blank" rel="noreferrer">profectus/src/features/tabs/tab.ts:31</a></p><hr><h3 id="taboptions" tabindex="-1">TabOptions <a class="header-anchor" href="#taboptions" aria-label="Permalink to &quot;TabOptions&quot;">​</a></h3><p>• <strong>TabOptions</strong>: <code>Object</code></p><p>An object that configures a <a href="./tab#tab">Tab</a>.</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/tabs/tab.ts#L19" target="_blank" rel="noreferrer">profectus/src/features/tabs/tab.ts:19</a></p><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="generictab" tabindex="-1">GenericTab <a class="header-anchor" href="#generictab" aria-label="Permalink to &quot;GenericTab&quot;">​</a></h3><p>Ƭ <strong>GenericTab</strong>: <a href="./tab#tab"><code>Tab</code></a>&lt;<a href="./tab#taboptions"><code>TabOptions</code></a>&gt;</p><p>A type that matches any valid <a href="./tab#tab">Tab</a> object.</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/tabs/tab.ts#L56" target="_blank" rel="noreferrer">profectus/src/features/tabs/tab.ts:56</a></p><hr><h3 id="tab" tabindex="-1">Tab <a class="header-anchor" href="#tab" aria-label="Permalink to &quot;Tab&quot;">​</a></h3><p>Ƭ <strong>Tab</strong>&lt;<code>T</code>&gt;: <a href="./../feature#replace"><code>Replace</code></a>&lt;<code>T</code> &amp; <a href="./tab#basetab"><code>BaseTab</code></a>, { <code>classes</code>: <a href="./../../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;classes&quot;</code>]&gt; ; <code>display</code>: <a href="./../../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;display&quot;</code>]&gt; ; <code>style</code>: <a href="./../../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;style&quot;</code>]&gt; }&gt;</p><p>An object representing a tab of content in a tabbed interface.</p><p><strong><code>See</code></strong></p><p>TabFamily</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./tab#taboptions"><code>TabOptions</code></a></td></tr></tbody></table><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/tabs/tab.ts#L46" target="_blank" rel="noreferrer">profectus/src/features/tabs/tab.ts:46</a></p><h2 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h2><h3 id="tabtype" tabindex="-1">TabType <a class="header-anchor" href="#tabtype" aria-label="Permalink to &quot;TabType&quot;">​</a></h3><p>• <code>Const</code> <strong>TabType</strong>: typeof <a href="./tab#tabtype"><code>TabType</code></a></p><p>A symbol used to identify <a href="./tab#tab">Tab</a> features.</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/tabs/tab.ts#L14" target="_blank" rel="noreferrer">profectus/src/features/tabs/tab.ts:14</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="createtab" tabindex="-1">createTab <a class="header-anchor" href="#createtab" aria-label="Permalink to &quot;createTab&quot;">​</a></h3><p>▸ <strong>createTab</strong>&lt;<code>T</code>&gt;(<code>optionsFunc</code>): <a href="./tab#tab"><code>Tab</code></a>&lt;<code>T</code>&gt;</p><p>Lazily creates a tab with the given options.</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./tab#taboptions"><code>TabOptions</code></a></td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>optionsFunc</code></td><td style="text-align:left;"><a href="./../feature#optionsfunc"><code>OptionsFunc</code></a>&lt;<code>T</code>, <a href="./tab#basetab"><code>BaseTab</code></a>, <a href="./tab#generictab"><code>GenericTab</code></a>&gt;</td><td style="text-align:left;">Tab options.</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./tab#tab"><code>Tab</code></a>&lt;<code>T</code>&gt;</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/tabs/tab.ts#L62" target="_blank" rel="noreferrer">profectus/src/features/tabs/tab.ts:62</a></p>',47),n=[s];function d(i,b,c,l,h,f){return t(),a("div",null,n)}const T=e(o,[["render",d]]);export{u as __pageData,T as default};
