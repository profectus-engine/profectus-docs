import{_ as e,c as t,o as a,N as l}from"./chunks/framework.0799945b.js";const u=JSON.parse('{"title":"Module: features/clickables/clickable","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/modules/features/clickable.md","lastUpdated":null}'),c={name:"api/modules/features/clickable.md"},o=l('<h1 id="module-features-clickables-clickable" tabindex="-1">Module: features/clickables/clickable <a class="header-anchor" href="#module-features-clickables-clickable" aria-label="Permalink to &quot;Module: features/clickables/clickable&quot;">​</a></h1><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><h3 id="baseclickable" tabindex="-1">BaseClickable <a class="header-anchor" href="#baseclickable" aria-label="Permalink to &quot;BaseClickable&quot;">​</a></h3><p>• <strong>BaseClickable</strong>: <code>Object</code></p><p>The properties that are added onto a processed <a href="./clickable#clickableoptions">ClickableOptions</a> to create an <a href="./clickable#clickable">Clickable</a>.</p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>[Component]</code></td><td style="text-align:left;"><a href="./feature#genericcomponent"><code>GenericComponent</code></a></td><td style="text-align:left;">The Vue component used to render this feature.</td></tr><tr><td style="text-align:left;"><code>[GatherProps]</code></td><td style="text-align:left;">() =&gt; <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type" target="_blank" rel="noreferrer"><code>Record</code></a>&lt;<code>string</code>, <code>unknown</code>&gt;</td><td style="text-align:left;">A function to gather the props the vue component requires for this feature.</td></tr><tr><td style="text-align:left;"><code>id</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">An auto-generated ID for identifying features that appear in the DOM. Will not persist between refreshes or updates.</td></tr><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;">typeof <a href="./clickable#clickabletype"><code>ClickableType</code></a></td><td style="text-align:left;">A symbol that helps identify features of the same type.</td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/8c0a0c4/src/features/clickables/clickable.ts#L60" target="_blank" rel="noreferrer">profectus/src/features/clickables/clickable.ts:60</a></p><hr><h3 id="clickableoptions" tabindex="-1">ClickableOptions <a class="header-anchor" href="#clickableoptions" aria-label="Permalink to &quot;ClickableOptions&quot;">​</a></h3><p>• <strong>ClickableOptions</strong>: <code>Object</code></p><p>An object that configures a <a href="./clickable#clickable">Clickable</a>.</p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>canClick?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<code>boolean</code>&gt;</td><td style="text-align:left;">Whether or not the clickable may be clicked.</td></tr><tr><td style="text-align:left;"><code>classes?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type" target="_blank" rel="noreferrer"><code>Record</code></a>&lt;<code>string</code>, <code>boolean</code>&gt;&gt;</td><td style="text-align:left;">Dictionary of CSS classes to apply to this feature.</td></tr><tr><td style="text-align:left;"><code>display?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<a href="./feature#coercablecomponent"><code>CoercableComponent</code></a> | { <code>description</code>: <a href="./feature#coercablecomponent"><code>CoercableComponent</code></a> ; <code>title?</code>: <a href="./feature#coercablecomponent"><code>CoercableComponent</code></a> }&gt;</td><td style="text-align:left;">The display to use for this clickable.</td></tr><tr><td style="text-align:left;"><code>mark?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<code>string</code> | <code>boolean</code>&gt;</td><td style="text-align:left;">Shows a marker on the corner of the feature.</td></tr><tr><td style="text-align:left;"><code>onClick?</code></td><td style="text-align:left;">(<code>e?</code>: <a href="https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent" target="_blank" rel="noreferrer"><code>MouseEvent</code></a> | <a href="https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent" target="_blank" rel="noreferrer"><code>TouchEvent</code></a>) =&gt; <code>void</code></td><td style="text-align:left;">A function that is called when the clickable is clicked.</td></tr><tr><td style="text-align:left;"><code>onHold?</code></td><td style="text-align:left;"><code>VoidFunction</code></td><td style="text-align:left;">A function that is called when the clickable is held down.</td></tr><tr><td style="text-align:left;"><code>small?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Toggles a smaller design for the feature.</td></tr><tr><td style="text-align:left;"><code>style?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<a href="./feature#stylevalue"><code>StyleValue</code></a>&gt;</td><td style="text-align:left;">CSS to apply to this feature.</td></tr><tr><td style="text-align:left;"><code>visibility?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<code>boolean</code> | <a href="./feature#visibility"><code>Visibility</code></a>&gt;</td><td style="text-align:left;">Whether this clickable should be visible.</td></tr></tbody></table><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/8c0a0c4/src/features/clickables/clickable.ts#L28" target="_blank" rel="noreferrer">profectus/src/features/clickables/clickable.ts:28</a></p><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="clickable" tabindex="-1">Clickable <a class="header-anchor" href="#clickable" aria-label="Permalink to &quot;Clickable&quot;">​</a></h3><p>Ƭ <strong>Clickable</strong>&lt;<code>T</code>&gt;: <a href="./feature#replace"><code>Replace</code></a>&lt;<code>T</code> &amp; <a href="./clickable#baseclickable"><code>BaseClickable</code></a>, { <code>canClick</code>: <a href="./../util/computed#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;canClick&quot;</code>], <code>true</code>&gt; ; <code>classes</code>: <a href="./../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;classes&quot;</code>]&gt; ; <code>display</code>: <a href="./../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;display&quot;</code>]&gt; ; <code>mark</code>: <a href="./../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;mark&quot;</code>]&gt; ; <code>style</code>: <a href="./../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;style&quot;</code>]&gt; ; <code>visibility</code>: <a href="./../util/computed#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;visibility&quot;</code>], <a href="./feature#visible"><code>Visible</code></a>&gt; }&gt;</p><p>An object that represents a feature that can be clicked or held down.</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./clickable#clickableoptions"><code>ClickableOptions</code></a></td></tr></tbody></table><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/8c0a0c4/src/features/clickables/clickable.ts#L72" target="_blank" rel="noreferrer">profectus/src/features/clickables/clickable.ts:72</a></p><hr><h3 id="genericclickable" tabindex="-1">GenericClickable <a class="header-anchor" href="#genericclickable" aria-label="Permalink to &quot;GenericClickable&quot;">​</a></h3><p>Ƭ <strong>GenericClickable</strong>: <a href="./feature#replace"><code>Replace</code></a>&lt;<a href="./clickable#clickable"><code>Clickable</code></a>&lt;<a href="./clickable#clickableoptions"><code>ClickableOptions</code></a>&gt;, { <code>canClick</code>: <a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code>&gt; ; <code>visibility</code>: <a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./feature#visibility"><code>Visibility</code></a> | <code>boolean</code>&gt; }&gt;</p><p>A type that matches any valid <a href="./clickable#clickable">Clickable</a> object.</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/8c0a0c4/src/features/clickables/clickable.ts#L85" target="_blank" rel="noreferrer">profectus/src/features/clickables/clickable.ts:85</a></p><h2 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h2><h3 id="clickabletype" tabindex="-1">ClickableType <a class="header-anchor" href="#clickabletype" aria-label="Permalink to &quot;ClickableType&quot;">​</a></h3><p>• <code>Const</code> <strong>ClickableType</strong>: typeof <a href="./clickable#clickabletype"><code>ClickableType</code></a></p><p>A symbol used to identify <a href="./clickable#clickable">Clickable</a> features.</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/8c0a0c4/src/features/clickables/clickable.ts#L23" target="_blank" rel="noreferrer">profectus/src/features/clickables/clickable.ts:23</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="createclickable" tabindex="-1">createClickable <a class="header-anchor" href="#createclickable" aria-label="Permalink to &quot;createClickable&quot;">​</a></h3><p>▸ <strong>createClickable</strong>&lt;<code>T</code>&gt;(<code>optionsFunc?</code>): <a href="./clickable#clickable"><code>Clickable</code></a>&lt;<code>T</code>&gt;</p><p>Lazily creates a clickable with the given options.</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./clickable#clickableoptions"><code>ClickableOptions</code></a></td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>optionsFunc?</code></td><td style="text-align:left;"><a href="./feature#optionsfunc"><code>OptionsFunc</code></a>&lt;<code>T</code>, <a href="./clickable#baseclickable"><code>BaseClickable</code></a>, <a href="./clickable#genericclickable"><code>GenericClickable</code></a>&gt;</td><td style="text-align:left;">Clickable options.</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./clickable#clickable"><code>Clickable</code></a>&lt;<code>T</code>&gt;</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/8c0a0c4/src/features/clickables/clickable.ts#L97" target="_blank" rel="noreferrer">profectus/src/features/clickables/clickable.ts:97</a></p><p>• <strong>createClickable</strong>: &lt;T&gt;(<code>optionsFunc?</code>: <a href="./feature#optionsfunc"><code>OptionsFunc</code></a>&lt;<code>T</code>, <a href="./clickable#baseclickable"><code>BaseClickable</code></a>, <a href="./clickable#genericclickable"><code>GenericClickable</code></a>&gt;) =&gt; <a href="./clickable#clickable"><code>Clickable</code></a>&lt;<code>T</code>&gt;</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/8c0a0c4/src/features/clickables/clickable.ts#L97" target="_blank" rel="noreferrer">profectus/src/features/clickables/clickable.ts:97</a></p><hr><h3 id="setupautoclick" tabindex="-1">setupAutoClick <a class="header-anchor" href="#setupautoclick" aria-label="Permalink to &quot;setupAutoClick&quot;">​</a></h3><p>▸ <strong>setupAutoClick</strong>(<code>layer</code>, <code>clickable</code>, <code>autoActive?</code>): <code>Unsubscribe</code></p><p>Utility to auto click a clickable whenever it can be.</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>layer</code></td><td style="text-align:left;"><a href="./../game/layers#baselayer"><code>BaseLayer</code></a></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">The layer the clickable is apart of</td></tr><tr><td style="text-align:left;"><code>clickable</code></td><td style="text-align:left;"><a href="./clickable#genericclickable"><code>GenericClickable</code></a></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">The clicker to click automatically</td></tr><tr><td style="text-align:left;"><code>autoActive</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<code>boolean</code>&gt;</td><td style="text-align:left;"><code>true</code></td><td style="text-align:left;">Whether or not the clickable should currently be auto-clicking</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Unsubscribe</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/8c0a0c4/src/features/clickables/clickable.ts#L169" target="_blank" rel="noreferrer">profectus/src/features/clickables/clickable.ts:169</a></p><p>• <strong>setupAutoClick</strong>: (<code>layer</code>: <a href="./../game/layers#baselayer"><code>BaseLayer</code></a>, <code>clickable</code>: <a href="./clickable#genericclickable"><code>GenericClickable</code></a>, <code>autoActive</code>: <a href="./../util/computed#computable"><code>Computable</code></a>&lt;<code>boolean</code>&gt;) =&gt; <code>Unsubscribe</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/8c0a0c4/src/features/clickables/clickable.ts#L169" target="_blank" rel="noreferrer">profectus/src/features/clickables/clickable.ts:169</a></p><h2 id="components" tabindex="-1">Components <a class="header-anchor" href="#components" aria-label="Permalink to &quot;Components&quot;">​</a></h2><h3 id="clickable-component" tabindex="-1">Clickable Component <a class="header-anchor" href="#clickable-component" aria-label="Permalink to &quot;Clickable Component&quot;">​</a></h3><h4 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>display</code>*</td><td style="text-align:left;"><code>processedPropType&lt;UnwrapRef&lt;GenericClickable[&quot;display&quot;]&gt;&gt;(<br> Object,<br> String,<br> Function<br>)</code></td></tr><tr><td style="text-align:left;"><code>visibility</code>*</td><td style="text-align:left;"><code>processedPropType&lt;Visibility | boolean&gt;(Number, Boolean)</code></td></tr><tr><td style="text-align:left;"><code>style</code></td><td style="text-align:left;"><code>processedPropType&lt;StyleValue&gt;(Object, String, Array)</code></td></tr><tr><td style="text-align:left;"><code>classes</code></td><td style="text-align:left;"><code>processedPropType&lt;Record&lt;string, boolean&gt;&gt;(Object)</code></td></tr><tr><td style="text-align:left;"><code>onClick</code></td><td style="text-align:left;"><code>(e?: MouseEvent | TouchEvent) =&gt; void</code></td></tr><tr><td style="text-align:left;"><code>onHold</code></td><td style="text-align:left;"><code>VoidFunction</code></td></tr><tr><td style="text-align:left;"><code>canClick</code>*</td><td style="text-align:left;"><code>processedPropType&lt;boolean&gt;(Boolean)</code></td></tr><tr><td style="text-align:left;"><code>small</code></td><td style="text-align:left;"><code>boolean</code></td></tr><tr><td style="text-align:left;"><code>mark</code></td><td style="text-align:left;"><code>processedPropType&lt;boolean | string&gt;(Boolean, String)</code></td></tr><tr><td style="text-align:left;"><code>id</code>*</td><td style="text-align:left;"><code>string</code></td></tr></tbody></table>',67),d=[o];function i(r,s,n,b,h,f){return a(),t("div",null,d)}const k=e(c,[["render",i]]);export{u as __pageData,k as default};
