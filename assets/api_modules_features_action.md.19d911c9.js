import{_ as e,c as t,o as a,N as o}from"./chunks/framework.0799945b.js";const b=JSON.parse('{"title":"Module: features/action","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/modules/features/action.md","lastUpdated":null}'),c={name:"api/modules/features/action.md"},i=o('<h1 id="module-features-action" tabindex="-1">Module: features/action <a class="header-anchor" href="#module-features-action" aria-label="Permalink to &quot;Module: features/action&quot;">​</a></h1><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><ul><li><a href="../../interfaces/features/action.ActionOptions">ActionOptions</a></li><li><a href="../../interfaces/features/action.BaseAction">BaseAction</a></li></ul><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="action" tabindex="-1">Action <a class="header-anchor" href="#action" aria-label="Permalink to &quot;Action&quot;">​</a></h3><p>Ƭ <strong>Action</strong>&lt;<code>T</code>&gt;: <a href="./feature#replace"><code>Replace</code></a>&lt;<code>T</code> &amp; <a href="../../interfaces/features/action.BaseAction"><code>BaseAction</code></a>, { <code>autoStart</code>: <a href="./../util/computed#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;autoStart&quot;</code>], <code>false</code>&gt; ; <code>canClick</code>: <a href="./../util/computed#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;canClick&quot;</code>], <code>true</code>&gt; ; <code>classes</code>: <a href="./../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;classes&quot;</code>]&gt; ; <code>display</code>: <a href="./feature#jsxfunction"><code>JSXFunction</code></a> ; <code>duration</code>: <a href="./../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;duration&quot;</code>]&gt; ; <code>mark</code>: <a href="./../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;mark&quot;</code>]&gt; ; <code>onClick</code>: <code>VoidFunction</code> ; <code>style</code>: <a href="./../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;style&quot;</code>]&gt; ; <code>visibility</code>: <a href="./../util/computed#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;visibility&quot;</code>], <a href="./../../enums/features/feature.Visibility#visible"><code>Visible</code></a>&gt; }&gt;</p><p>An object that represens a feature that can be clicked upon, and then have a cooldown before they can be clicked again.</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../interfaces/features/action.ActionOptions"><code>ActionOptions</code></a></td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/action.tsx#L75" target="_blank" rel="noreferrer">profectus/src/features/action.tsx:75</a></p><hr><h3 id="genericaction" tabindex="-1">GenericAction <a class="header-anchor" href="#genericaction" aria-label="Permalink to &quot;GenericAction&quot;">​</a></h3><p>Ƭ <strong>GenericAction</strong>: <a href="./feature#replace"><code>Replace</code></a>&lt;<a href="./action#action"><code>Action</code></a>&lt;<a href="../../interfaces/features/action.ActionOptions"><code>ActionOptions</code></a>&gt;, { <code>autoStart</code>: <a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code>&gt; ; <code>canClick</code>: <a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code>&gt; ; <code>visibility</code>: <a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="../../enums/features/feature.Visibility"><code>Visibility</code></a> | <code>boolean</code>&gt; }&gt;</p><p>A type that matches any valid <a href="./action#action">Action</a> object.</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/action.tsx#L91" target="_blank" rel="noreferrer">profectus/src/features/action.tsx:91</a></p><h2 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h2><h3 id="actiontype" tabindex="-1">ActionType <a class="header-anchor" href="#actiontype" aria-label="Permalink to &quot;ActionType&quot;">​</a></h3><p>• <code>Const</code> <strong>ActionType</strong>: typeof <a href="./action#actiontype"><code>ActionType</code></a></p><p>A symbol used to identify <a href="./action#action">Action</a> features.</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/action.tsx#L36" target="_blank" rel="noreferrer">profectus/src/features/action.tsx:36</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="createaction" tabindex="-1">createAction <a class="header-anchor" href="#createaction" aria-label="Permalink to &quot;createAction&quot;">​</a></h3><p>▸ <strong>createAction</strong>&lt;<code>T</code>&gt;(<code>optionsFunc?</code>): <a href="./action#action"><code>Action</code></a>&lt;<code>T</code>&gt;</p><p>Lazily creates an action with the given options.</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../interfaces/features/action.ActionOptions"><code>ActionOptions</code></a>&lt;<code>T</code>&gt;</td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>optionsFunc?</code></td><td style="text-align:left;"><a href="./feature#optionsfunc"><code>OptionsFunc</code></a>&lt;<code>T</code>, <a href="../../interfaces/features/action.BaseAction"><code>BaseAction</code></a>, <a href="./action#genericaction"><code>GenericAction</code></a>&gt;</td><td style="text-align:left;">Action options.</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./action#action"><code>Action</code></a>&lt;<code>T</code>&gt;</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/action.tsx#L104" target="_blank" rel="noreferrer">profectus/src/features/action.tsx:104</a></p>',35),r=[i];function n(d,l,s,u,h,f){return a(),t("div",null,r)}const m=e(c,[["render",n]]);export{b as __pageData,m as default};