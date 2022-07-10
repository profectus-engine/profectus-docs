import{_ as e,c as t,o as a,a as r}from"./app.7cfe4cf0.js";const f='{"title":"Module: features/bars/bar","description":"","frontmatter":{},"headers":[{"level":2,"title":"Interfaces","slug":"interfaces"},{"level":2,"title":"Type aliases","slug":"type-aliases"},{"level":3,"title":"Bar","slug":"bar"},{"level":3,"title":"GenericBar","slug":"genericbar"},{"level":2,"title":"Variables","slug":"variables"},{"level":3,"title":"BarType","slug":"bartype"},{"level":2,"title":"Functions","slug":"functions"},{"level":3,"title":"createBar","slug":"createbar"}],"relativePath":"api/modules/features/bars/bar.md"}',o={},d=r('<h1 id="module-features-bars-bar" tabindex="-1">Module: features/bars/bar <a class="header-anchor" href="#module-features-bars-bar" aria-hidden="true">#</a></h1><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-hidden="true">#</a></h2><ul><li><a href="../../../interfaces/features/bars/bar.BarOptions">BarOptions</a></li><li><a href="../../../interfaces/features/bars/bar.BaseBar">BaseBar</a></li></ul><h2 id="type-aliases" tabindex="-1">Type aliases <a class="header-anchor" href="#type-aliases" aria-hidden="true">#</a></h2><h3 id="bar" tabindex="-1">Bar <a class="header-anchor" href="#bar" aria-hidden="true">#</a></h3><p>\u01AC <strong>Bar</strong>&lt;<code>T</code>&gt;: <a href="./../feature.html#replace"><code>Replace</code></a>&lt;<code>T</code> &amp; <a href="../../../interfaces/features/bars/bar.BaseBar"><code>BaseBar</code></a>, { <code>baseStyle</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;baseStyle&quot;</code>]&gt; ; <code>borderStyle</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;borderStyle&quot;</code>]&gt; ; <code>classes</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;classes&quot;</code>]&gt; ; <code>direction</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;direction&quot;</code>]&gt; ; <code>display</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;display&quot;</code>]&gt; ; <code>fillStyle</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;fillStyle&quot;</code>]&gt; ; <code>height</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;height&quot;</code>]&gt; ; <code>mark</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;mark&quot;</code>]&gt; ; <code>progress</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;progress&quot;</code>]&gt; ; <code>style</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;style&quot;</code>]&gt; ; <code>textStyle</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;textStyle&quot;</code>]&gt; ; <code>visibility</code>: <a href="./../../util/computed.html#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;visibility&quot;</code>], <a href="./../../../enums/features/feature.Visibility.html#visible"><code>Visible</code></a>&gt; ; <code>width</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;width&quot;</code>]&gt; }&gt;</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../../interfaces/features/bars/bar.BarOptions"><code>BarOptions</code></a></td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/0b8210c/src/features/bars/bar.ts#L41" target="_blank" rel="noopener noreferrer">profectus/src/features/bars/bar.ts:41</a></p><hr><h3 id="genericbar" tabindex="-1">GenericBar <a class="header-anchor" href="#genericbar" aria-hidden="true">#</a></h3><p>\u01AC <strong>GenericBar</strong>: <a href="./../feature.html#replace"><code>Replace</code></a>&lt;<a href="./bar.html#bar"><code>Bar</code></a>&lt;<a href="../../../interfaces/features/bars/bar.BarOptions"><code>BarOptions</code></a>&gt;, { <code>visibility</code>: <a href="./../../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="../../../enums/features/feature.Visibility"><code>Visibility</code></a>&gt; }&gt;</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/0b8210c/src/features/bars/bar.ts#L60" target="_blank" rel="noopener noreferrer">profectus/src/features/bars/bar.ts:60</a></p><h2 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-hidden="true">#</a></h2><h3 id="bartype" tabindex="-1">BarType <a class="header-anchor" href="#bartype" aria-hidden="true">#</a></h3><p>\u2022 <code>Const</code> <strong>BarType</strong>: typeof <a href="./bar.html#bartype"><code>BarType</code></a></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/0b8210c/src/features/bars/bar.ts#L16" target="_blank" rel="noopener noreferrer">profectus/src/features/bars/bar.ts:16</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h2><h3 id="createbar" tabindex="-1">createBar <a class="header-anchor" href="#createbar" aria-hidden="true">#</a></h3><p>\u25B8 <strong>createBar</strong>&lt;<code>T</code>&gt;(<code>optionsFunc</code>): <a href="./bar.html#bar"><code>Bar</code></a>&lt;<code>T</code>&gt;</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../../interfaces/features/bars/bar.BarOptions"><code>BarOptions</code></a></td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>optionsFunc</code></td><td style="text-align:left;"><a href="./../feature.html#optionsfunc"><code>OptionsFunc</code></a>&lt;<code>T</code>, <a href="../../../interfaces/features/bars/bar.BaseBar"><code>BaseBar</code></a>, <a href="./bar.html#genericbar"><code>GenericBar</code></a>&gt;</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><a href="./bar.html#bar"><code>Bar</code></a>&lt;<code>T</code>&gt;</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/0b8210c/src/features/bars/bar.ts#L67" target="_blank" rel="noopener noreferrer">profectus/src/features/bars/bar.ts:67</a></p>',31),c=[d];function l(s,i,h,n,u,p){return a(),t("div",null,c)}var m=e(o,[["render",l]]);export{f as __pageData,m as default};