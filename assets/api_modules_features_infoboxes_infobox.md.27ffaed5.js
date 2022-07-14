import{_ as e,c as o,o as t,a}from"./app.189352af.js";const p=JSON.parse('{"title":"Module: features/infoboxes/infobox","description":"","frontmatter":{"editLink":false},"headers":[{"level":2,"title":"Components","slug":"components"},{"level":2,"title":"Interfaces","slug":"interfaces"},{"level":2,"title":"Type Aliases","slug":"type-aliases"},{"level":3,"title":"GenericInfobox","slug":"genericinfobox"},{"level":3,"title":"Infobox","slug":"infobox"},{"level":2,"title":"Variables","slug":"variables"},{"level":3,"title":"InfoboxType","slug":"infoboxtype"},{"level":2,"title":"Functions","slug":"functions"},{"level":3,"title":"createInfobox","slug":"createinfobox"}],"relativePath":"api/modules/features/infoboxes/infobox.md","lastUpdated":null}'),d={name:"api/modules/features/infoboxes/infobox.md"},i=a('<h1 id="module-features-infoboxes-infobox" tabindex="-1">Module: features/infoboxes/infobox <a class="header-anchor" href="#module-features-infoboxes-infobox" aria-hidden="true">#</a></h1><h2 id="components" tabindex="-1">Components <a class="header-anchor" href="#components" aria-hidden="true">#</a></h2><ul><li><a href="./InfoboxComponent.html">Infobox</a></li></ul><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-hidden="true">#</a></h2><ul><li><a href="../../../interfaces/features/infoboxes/infobox.BaseInfobox">BaseInfobox</a></li><li><a href="../../../interfaces/features/infoboxes/infobox.InfoboxOptions">InfoboxOptions</a></li></ul><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-hidden="true">#</a></h2><h3 id="genericinfobox" tabindex="-1">GenericInfobox <a class="header-anchor" href="#genericinfobox" aria-hidden="true">#</a></h3><p>\u01AC <strong>GenericInfobox</strong>: <a href="./../feature.html#replace"><code>Replace</code></a>&lt;<a href="./infobox.html#infobox"><code>Infobox</code></a>&lt;<a href="../../../interfaces/features/infoboxes/infobox.InfoboxOptions"><code>InfoboxOptions</code></a>&gt;, { <code>visibility</code>: <a href="./../../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="../../../enums/features/feature.Visibility"><code>Visibility</code></a>&gt; }&gt;</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/1f4676d/src/features/infoboxes/infobox.ts#L51" target="_blank" rel="noopener noreferrer">profectus/src/features/infoboxes/infobox.ts:51</a></p><hr><h3 id="infobox" tabindex="-1">Infobox <a class="header-anchor" href="#infobox" aria-hidden="true">#</a></h3><p>\u01AC <strong>Infobox</strong>&lt;<code>T</code>&gt;: <a href="./../feature.html#replace"><code>Replace</code></a>&lt;<code>T</code> &amp; <a href="../../../interfaces/features/infoboxes/infobox.BaseInfobox"><code>BaseInfobox</code></a>, { <code>bodyStyle</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;bodyStyle&quot;</code>]&gt; ; <code>classes</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;classes&quot;</code>]&gt; ; <code>color</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;color&quot;</code>]&gt; ; <code>display</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;display&quot;</code>]&gt; ; <code>style</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;style&quot;</code>]&gt; ; <code>title</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;title&quot;</code>]&gt; ; <code>titleStyle</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;titleStyle&quot;</code>]&gt; ; <code>visibility</code>: <a href="./../../util/computed.html#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;visibility&quot;</code>], <a href="./../../../enums/features/feature.Visibility.html#visible"><code>Visible</code></a>&gt; }&gt;</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../../interfaces/features/infoboxes/infobox.InfoboxOptions"><code>InfoboxOptions</code></a></td></tr></tbody></table><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/1f4676d/src/features/infoboxes/infobox.ts#L37" target="_blank" rel="noopener noreferrer">profectus/src/features/infoboxes/infobox.ts:37</a></p><h2 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-hidden="true">#</a></h2><h3 id="infoboxtype" tabindex="-1">InfoboxType <a class="header-anchor" href="#infoboxtype" aria-hidden="true">#</a></h3><p>\u2022 <code>Const</code> <strong>InfoboxType</strong>: typeof <a href="./infobox.html#infoboxtype"><code>InfoboxType</code></a></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/1f4676d/src/features/infoboxes/infobox.ts#L16" target="_blank" rel="noopener noreferrer">profectus/src/features/infoboxes/infobox.ts:16</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h2><h3 id="createinfobox" tabindex="-1">createInfobox <a class="header-anchor" href="#createinfobox" aria-hidden="true">#</a></h3><p>\u25B8 <strong>createInfobox</strong>&lt;<code>T</code>&gt;(<code>optionsFunc</code>): <a href="./infobox.html#infobox"><code>Infobox</code></a>&lt;<code>T</code>&gt;</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../../interfaces/features/infoboxes/infobox.InfoboxOptions"><code>InfoboxOptions</code></a></td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>optionsFunc</code></td><td style="text-align:left;"><a href="./../feature.html#optionsfunc"><code>OptionsFunc</code></a>&lt;<code>T</code>, <a href="../../../interfaces/features/infoboxes/infobox.BaseInfobox"><code>BaseInfobox</code></a>, <a href="./infobox.html#genericinfobox"><code>GenericInfobox</code></a>&gt;</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><a href="./infobox.html#infobox"><code>Infobox</code></a>&lt;<code>T</code>&gt;</p>',31),n=[i];function r(c,s,l,f,h,b){return t(),o("div",null,n)}var x=e(d,[["render",r]]);export{p as __pageData,x as default};
