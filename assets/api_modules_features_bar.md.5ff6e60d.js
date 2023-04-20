import{_ as e,c as t,o as a,N as o}from"./chunks/framework.0799945b.js";const u=JSON.parse('{"title":"Module: features/bars/bar","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/modules/features/bar.md","lastUpdated":null}'),r={name:"api/modules/features/bar.md"},d=o('<h1 id="module-features-bars-bar" tabindex="-1">Module: features/bars/bar <a class="header-anchor" href="#module-features-bars-bar" aria-label="Permalink to &quot;Module: features/bars/bar&quot;">​</a></h1><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><h3 id="baroptions" tabindex="-1">BarOptions <a class="header-anchor" href="#baroptions" aria-label="Permalink to &quot;BarOptions&quot;">​</a></h3><p>• <strong>BarOptions</strong>: <code>Object</code></p><p>An object that configures a <a href="./bar#bar">Bar</a>.</p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>baseStyle?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<a href="./feature#stylevalue"><code>StyleValue</code></a>&gt;</td><td style="text-align:left;">CSS to apply to the bar&#39;s base.</td></tr><tr><td style="text-align:left;"><code>borderStyle?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<a href="./feature#stylevalue"><code>StyleValue</code></a>&gt;</td><td style="text-align:left;">CSS to apply to the bar&#39;s border.</td></tr><tr><td style="text-align:left;"><code>classes?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type" target="_blank" rel="noreferrer"><code>Record</code></a>&lt;<code>string</code>, <code>boolean</code>&gt;&gt;</td><td style="text-align:left;">Dictionary of CSS classes to apply to this feature.</td></tr><tr><td style="text-align:left;"><code>direction</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<a href="./../util/common#direction"><code>Direction</code></a>&gt;</td><td style="text-align:left;">The direction in which the bar progresses.</td></tr><tr><td style="text-align:left;"><code>display?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<a href="./feature#coercablecomponent"><code>CoercableComponent</code></a>&gt;</td><td style="text-align:left;">The display to use for this bar.</td></tr><tr><td style="text-align:left;"><code>fillStyle?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<a href="./feature#stylevalue"><code>StyleValue</code></a>&gt;</td><td style="text-align:left;">CSS to apply to the bar&#39;s fill.</td></tr><tr><td style="text-align:left;"><code>height</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<code>number</code>&gt;</td><td style="text-align:left;">The height of the bar.</td></tr><tr><td style="text-align:left;"><code>mark?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<code>string</code> | <code>boolean</code>&gt;</td><td style="text-align:left;">Shows a marker on the corner of the feature.</td></tr><tr><td style="text-align:left;"><code>progress</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<a href="./../lib/break_eternity#decimalsource"><code>DecimalSource</code></a>&gt;</td><td style="text-align:left;">The progress value of the bar, from 0 to 1.</td></tr><tr><td style="text-align:left;"><code>style?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<a href="./feature#stylevalue"><code>StyleValue</code></a>&gt;</td><td style="text-align:left;">CSS to apply to this feature.</td></tr><tr><td style="text-align:left;"><code>textStyle?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<a href="./feature#stylevalue"><code>StyleValue</code></a>&gt;</td><td style="text-align:left;">CSS to apply to the bar&#39;s text.</td></tr><tr><td style="text-align:left;"><code>visibility?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<code>boolean</code> | <a href="./feature#visibility"><code>Visibility</code></a>&gt;</td><td style="text-align:left;">Whether this bar should be visible.</td></tr><tr><td style="text-align:left;"><code>width</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<code>number</code>&gt;</td><td style="text-align:left;">The width of the bar.</td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/b5e7e77/src/features/bars/bar.ts#L29" target="_blank" rel="noreferrer">profectus/src/features/bars/bar.ts:29</a></p><hr><h3 id="basebar" tabindex="-1">BaseBar <a class="header-anchor" href="#basebar" aria-label="Permalink to &quot;BaseBar&quot;">​</a></h3><p>• <strong>BaseBar</strong>: <code>Object</code></p><p>The properties that are added onto a processed <a href="./bar#baroptions">BarOptions</a> to create a <a href="./bar#bar">Bar</a>.</p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>[Component]</code></td><td style="text-align:left;"><a href="./feature#genericcomponent"><code>GenericComponent</code></a></td><td style="text-align:left;">The Vue component used to render this feature.</td></tr><tr><td style="text-align:left;"><code>[GatherProps]</code></td><td style="text-align:left;">() =&gt; <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type" target="_blank" rel="noreferrer"><code>Record</code></a>&lt;<code>string</code>, <code>unknown</code>&gt;</td><td style="text-align:left;">A function to gather the props the vue component requires for this feature.</td></tr><tr><td style="text-align:left;"><code>id</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">An auto-generated ID for identifying features that appear in the DOM. Will not persist between refreshes or updates.</td></tr><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;">typeof <a href="./bar#bartype"><code>BarType</code></a></td><td style="text-align:left;">A symbol that helps identify features of the same type.</td></tr></tbody></table><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/b5e7e77/src/features/bars/bar.ts#L61" target="_blank" rel="noreferrer">profectus/src/features/bars/bar.ts:61</a></p><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="bar" tabindex="-1">Bar <a class="header-anchor" href="#bar" aria-label="Permalink to &quot;Bar&quot;">​</a></h3><p>Ƭ <strong>Bar</strong>&lt;<code>T</code>&gt;: <a href="./feature#replace"><code>Replace</code></a>&lt;<code>T</code> &amp; <a href="./bar#basebar"><code>BaseBar</code></a>, { <code>baseStyle</code>: <a href="./../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;baseStyle&quot;</code>]&gt; ; <code>borderStyle</code>: <a href="./../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;borderStyle&quot;</code>]&gt; ; <code>classes</code>: <a href="./../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;classes&quot;</code>]&gt; ; <code>direction</code>: <a href="./../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;direction&quot;</code>]&gt; ; <code>display</code>: <a href="./../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;display&quot;</code>]&gt; ; <code>fillStyle</code>: <a href="./../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;fillStyle&quot;</code>]&gt; ; <code>height</code>: <a href="./../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;height&quot;</code>]&gt; ; <code>mark</code>: <a href="./../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;mark&quot;</code>]&gt; ; <code>progress</code>: <a href="./../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;progress&quot;</code>]&gt; ; <code>style</code>: <a href="./../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;style&quot;</code>]&gt; ; <code>textStyle</code>: <a href="./../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;textStyle&quot;</code>]&gt; ; <code>visibility</code>: <a href="./../util/computed#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;visibility&quot;</code>], <a href="./feature#visible"><code>Visible</code></a>&gt; ; <code>width</code>: <a href="./../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;width&quot;</code>]&gt; }&gt;</p><p>An object that represents a feature that displays some sort of progress or completion or resource with a cap.</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./bar#baroptions"><code>BarOptions</code></a></td></tr></tbody></table><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/b5e7e77/src/features/bars/bar.ts#L73" target="_blank" rel="noreferrer">profectus/src/features/bars/bar.ts:73</a></p><hr><h3 id="genericbar" tabindex="-1">GenericBar <a class="header-anchor" href="#genericbar" aria-label="Permalink to &quot;GenericBar&quot;">​</a></h3><p>Ƭ <strong>GenericBar</strong>: <a href="./feature#replace"><code>Replace</code></a>&lt;<a href="./bar#bar"><code>Bar</code></a>&lt;<a href="./bar#baroptions"><code>BarOptions</code></a>&gt;, { <code>visibility</code>: <a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./feature#visibility"><code>Visibility</code></a> | <code>boolean</code>&gt; }&gt;</p><p>A type that matches any valid <a href="./bar#bar">Bar</a> object.</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/b5e7e77/src/features/bars/bar.ts#L93" target="_blank" rel="noreferrer">profectus/src/features/bars/bar.ts:93</a></p><h2 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h2><h3 id="bartype" tabindex="-1">BarType <a class="header-anchor" href="#bartype" aria-label="Permalink to &quot;BarType&quot;">​</a></h3><p>• <code>Const</code> <strong>BarType</strong>: typeof <a href="./bar#bartype"><code>BarType</code></a></p><p>A symbol used to identify <a href="./bar#bar">Bar</a> features.</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/b5e7e77/src/features/bars/bar.ts#L24" target="_blank" rel="noreferrer">profectus/src/features/bars/bar.ts:24</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="createbar" tabindex="-1">createBar <a class="header-anchor" href="#createbar" aria-label="Permalink to &quot;createBar&quot;">​</a></h3><p>▸ <strong>createBar</strong>&lt;<code>T</code>&gt;(<code>optionsFunc</code>, <code>...decorators</code>): <a href="./bar#bar"><code>Bar</code></a>&lt;<code>T</code>&gt;</p><p>Lazily creates a bar with the given options.</p><h5 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./bar#baroptions"><code>BarOptions</code></a></td></tr></tbody></table><h5 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>optionsFunc</code></td><td style="text-align:left;"><a href="./feature#optionsfunc"><code>OptionsFunc</code></a>&lt;<code>T</code>, <a href="./bar#basebar"><code>BaseBar</code></a>, <a href="./bar#genericbar"><code>GenericBar</code></a>&gt;</td><td style="text-align:left;">Bar options.</td></tr><tr><td style="text-align:left;"><code>...decorators</code></td><td style="text-align:left;"><a href="./decorators/common#genericdecorator"><code>GenericDecorator</code></a>[]</td><td style="text-align:left;">-</td></tr></tbody></table><h5 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><a href="./bar#bar"><code>Bar</code></a>&lt;<code>T</code>&gt;</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/b5e7e77/src/features/bars/bar.ts#L104" target="_blank" rel="noreferrer">profectus/src/features/bars/bar.ts:104</a></p><h2 id="components" tabindex="-1">Components <a class="header-anchor" href="#components" aria-label="Permalink to &quot;Components&quot;">​</a></h2><h3 id="bar-component" tabindex="-1">Bar Component <a class="header-anchor" href="#bar-component" aria-label="Permalink to &quot;Bar Component&quot;">​</a></h3><h4 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>progress</code>*</td><td style="text-align:left;"><code>processedPropType&lt;DecimalSource&gt;(String, Object, Number)</code></td></tr><tr><td style="text-align:left;"><code>width</code>*</td><td style="text-align:left;"><code>processedPropType&lt;number&gt;(Number)</code></td></tr><tr><td style="text-align:left;"><code>height</code>*</td><td style="text-align:left;"><code>processedPropType&lt;number&gt;(Number)</code></td></tr><tr><td style="text-align:left;"><code>direction</code>*</td><td style="text-align:left;"><code>processedPropType&lt;Direction&gt;(String)</code></td></tr><tr><td style="text-align:left;"><code>display</code></td><td style="text-align:left;"><code>processedPropType&lt;CoercableComponent&gt;(Object, String, Function)</code></td></tr><tr><td style="text-align:left;"><code>visibility</code>*</td><td style="text-align:left;"><code>processedPropType&lt;Visibility | boolean&gt;(Number, Boolean)</code></td></tr><tr><td style="text-align:left;"><code>style</code></td><td style="text-align:left;"><code>processedPropType&lt;StyleValue&gt;(Object, String, Array)</code></td></tr><tr><td style="text-align:left;"><code>classes</code></td><td style="text-align:left;"><code>processedPropType&lt;Record&lt;string, boolean&gt;&gt;(Object)</code></td></tr><tr><td style="text-align:left;"><code>borderStyle</code></td><td style="text-align:left;"><code>processedPropType&lt;StyleValue&gt;(Object, String, Array)</code></td></tr><tr><td style="text-align:left;"><code>textStyle</code></td><td style="text-align:left;"><code>processedPropType&lt;StyleValue&gt;(Object, String, Array)</code></td></tr><tr><td style="text-align:left;"><code>baseStyle</code></td><td style="text-align:left;"><code>processedPropType&lt;StyleValue&gt;(Object, String, Array)</code></td></tr><tr><td style="text-align:left;"><code>fillStyle</code></td><td style="text-align:left;"><code>processedPropType&lt;StyleValue&gt;(Object, String, Array)</code></td></tr><tr><td style="text-align:left;"><code>mark</code></td><td style="text-align:left;"><code>processedPropType&lt;boolean | string&gt;(Boolean, String)</code></td></tr><tr><td style="text-align:left;"><code>id</code>*</td><td style="text-align:left;"><code>string</code></td></tr></tbody></table>',51),l=[d];function c(s,i,n,p,f,b){return a(),t("div",null,l)}const y=e(r,[["render",c]]);export{u as __pageData,y as default};