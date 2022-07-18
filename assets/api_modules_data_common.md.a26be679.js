import{_ as e,c as t,o as a,a as o}from"./app.ab34650d.js";const m=JSON.parse('{"title":"Module: data/common","description":"","frontmatter":{"editLink":false},"headers":[{"level":2,"title":"Interfaces","slug":"interfaces"},{"level":2,"title":"Type Aliases","slug":"type-aliases"},{"level":3,"title":"GenericLayerTreeNode","slug":"genericlayertreenode"},{"level":3,"title":"GenericResetButton","slug":"genericresetbutton"},{"level":3,"title":"LayerTreeNode","slug":"layertreenode"},{"level":3,"title":"ResetButton","slug":"resetbutton"},{"level":2,"title":"Functions","slug":"functions"},{"level":3,"title":"colorText","slug":"colortext"},{"level":3,"title":"createCollapsibleModifierSections","slug":"createcollapsiblemodifiersections"},{"level":3,"title":"createLayerTreeNode","slug":"createlayertreenode"},{"level":3,"title":"createResetButton","slug":"createresetbutton"}],"relativePath":"api/modules/data/common.md","lastUpdated":null}'),d={name:"api/modules/data/common.md"},r=o('<h1 id="module-data-common" tabindex="-1">Module: data/common <a class="header-anchor" href="#module-data-common" aria-hidden="true">#</a></h1><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-hidden="true">#</a></h2><ul><li><a href="../../interfaces/data/common.LayerTreeNodeOptions">LayerTreeNodeOptions</a></li><li><a href="../../interfaces/data/common.ResetButtonOptions">ResetButtonOptions</a></li><li><a href="../../interfaces/data/common.Section">Section</a></li></ul><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-hidden="true">#</a></h2><h3 id="genericlayertreenode" tabindex="-1">GenericLayerTreeNode <a class="header-anchor" href="#genericlayertreenode" aria-hidden="true">#</a></h3><p>\u01AC <strong>GenericLayerTreeNode</strong>: <a href="./../features/feature.html#replace"><code>Replace</code></a>&lt;<a href="./common.html#layertreenode"><code>LayerTreeNode</code></a>&lt;<a href="../../interfaces/data/common.LayerTreeNodeOptions"><code>LayerTreeNodeOptions</code></a>&gt;, { <code>append?</code>: <a href="./../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code>&gt; ; <code>display</code>: <a href="./../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./../features/feature.html#coercablecomponent"><code>CoercableComponent</code></a>&gt; }&gt;</p><p>A type that matches any valid <a href="./common.html#layertreenode">LayerTreeNode</a> object.</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/013092f/src/data/common.tsx#L196" target="_blank" rel="noopener noreferrer">profectus/src/data/common.tsx:196</a></p><hr><h3 id="genericresetbutton" tabindex="-1">GenericResetButton <a class="header-anchor" href="#genericresetbutton" aria-hidden="true">#</a></h3><p>\u01AC <strong>GenericResetButton</strong>: <a href="./../features/feature.html#replace"><code>Replace</code></a>&lt;<a href="./../features/clickables/clickable.html#genericclickable"><code>GenericClickable</code></a> &amp; <a href="./common.html#resetbutton"><code>ResetButton</code></a>&lt;<a href="../../interfaces/data/common.ResetButtonOptions"><code>ResetButtonOptions</code></a>&gt;, { <code>canClick</code>: <a href="./../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code>&gt; ; <code>display</code>: <a href="./../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./../features/feature.html#coercablecomponent"><code>CoercableComponent</code></a>&gt; ; <code>minimumGain</code>: <a href="./../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./../util/bignum.html#decimalsource"><code>DecimalSource</code></a>&gt; ; <code>resetDescription</code>: <a href="./../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>string</code>&gt; ; <code>showNextAt</code>: <a href="./../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code>&gt; }&gt;</p><p>A type that matches any valid <a href="./common.html#resetbutton">ResetButton</a> object.</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/013092f/src/data/common.tsx#L79" target="_blank" rel="noopener noreferrer">profectus/src/data/common.tsx:79</a></p><hr><h3 id="layertreenode" tabindex="-1">LayerTreeNode <a class="header-anchor" href="#layertreenode" aria-hidden="true">#</a></h3><p>\u01AC <strong>LayerTreeNode</strong>&lt;<code>T</code>&gt;: <a href="./../features/feature.html#replace"><code>Replace</code></a>&lt;<a href="./../features/trees/tree.html#treenode"><code>TreeNode</code></a>&lt;<code>T</code>&gt;, { <code>append</code>: <a href="./../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;append&quot;</code>]&gt; ; <code>display</code>: <a href="./../util/computed.html#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;display&quot;</code>], <code>T</code>[<code>&quot;layerID&quot;</code>]&gt; }&gt;</p><p>A tree node that is associated with a given layer, and which opens the layer when clicked.</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../interfaces/data/common.LayerTreeNodeOptions"><code>LayerTreeNodeOptions</code></a></td></tr></tbody></table><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/013092f/src/data/common.tsx#L188" target="_blank" rel="noopener noreferrer">profectus/src/data/common.tsx:188</a></p><hr><h3 id="resetbutton" tabindex="-1">ResetButton <a class="header-anchor" href="#resetbutton" aria-hidden="true">#</a></h3><p>\u01AC <strong>ResetButton</strong>&lt;<code>T</code>&gt;: <a href="./../features/feature.html#replace"><code>Replace</code></a>&lt;<a href="./../features/clickables/clickable.html#clickable"><code>Clickable</code></a>&lt;<code>T</code>&gt;, { <code>canClick</code>: <a href="./../util/computed.html#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;canClick&quot;</code>], <code>Ref</code>&lt;<code>boolean</code>&gt;&gt; ; <code>display</code>: <a href="./../util/computed.html#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;display&quot;</code>], <code>Ref</code>&lt;<code>JSX.Element</code>&gt;&gt; ; <code>minimumGain</code>: <a href="./../util/computed.html#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;minimumGain&quot;</code>], <code>1</code>&gt; ; <code>onClick</code>: <code>VoidFunction</code> ; <code>resetDescription</code>: <a href="./../util/computed.html#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;resetDescription&quot;</code>], <code>Ref</code>&lt;<code>string</code>&gt;&gt; ; <code>showNextAt</code>: <a href="./../util/computed.html#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;showNextAt&quot;</code>], <code>true</code>&gt; }&gt;</p><p>A button that is used to control a conversion. It will show how much can be converted currently, and can show when that amount will go up, as well as handle only being clickable when a sufficient amount of currency can be gained. Assumes this button is associated with a specific node on a tree, and triggers that tree&#39;s reset propagation.</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../interfaces/data/common.ResetButtonOptions"><code>ResetButtonOptions</code></a></td></tr></tbody></table><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/013092f/src/data/common.tsx#L66" target="_blank" rel="noopener noreferrer">profectus/src/data/common.tsx:66</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h2><h3 id="colortext" tabindex="-1">colorText <a class="header-anchor" href="#colortext" aria-hidden="true">#</a></h3><p>\u25B8 <strong>colorText</strong>(<code>textToColor</code>, <code>color?</code>): <code>JSX.Element</code></p><p>Creates an HTML string for a span that writes some given text in a given color.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>textToColor</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">The content to change the color of</td></tr><tr><td style="text-align:left;"><code>color</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>&quot;var(--accent2)&quot;</code></td><td style="text-align:left;">The color to change the content to look like. Defaults to the current theme&#39;s accent 2 variable.</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><code>JSX.Element</code></p><hr><h3 id="createcollapsiblemodifiersections" tabindex="-1">createCollapsibleModifierSections <a class="header-anchor" href="#createcollapsiblemodifiersections" aria-hidden="true">#</a></h3><p>\u25B8 <strong>createCollapsibleModifierSections</strong>(<code>sections</code>): [<a href="./../features/feature.html#jsxfunction"><code>JSXFunction</code></a>, <a href="./../game/persistence.html#persistent"><code>Persistent</code></a>&lt;<code>boolean</code>&gt;[]]</p><p>Takes an array of modifier &quot;sections&quot;, and creates a JSXFunction that can render all those sections, and allow each section to be collapsed. Also returns a list of persistent refs that are used to control which sections are currently collapsed.</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>sections</code></td><td style="text-align:left;"><a href="../../interfaces/data/common.Section"><code>Section</code></a>[]</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p>[<a href="./../features/feature.html#jsxfunction"><code>JSXFunction</code></a>, <a href="./../game/persistence.html#persistent"><code>Persistent</code></a>&lt;<code>boolean</code>&gt;[]]</p><hr><h3 id="createlayertreenode" tabindex="-1">createLayerTreeNode <a class="header-anchor" href="#createlayertreenode" aria-hidden="true">#</a></h3><p>\u25B8 <strong>createLayerTreeNode</strong>&lt;<code>T</code>&gt;(<code>optionsFunc</code>): <a href="./common.html#layertreenode"><code>LayerTreeNode</code></a>&lt;<code>T</code>&gt;</p><p>Lazily creates a tree node that&#39;s associated with a specific layer, with the given options.</p><h4 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../interfaces/data/common.LayerTreeNodeOptions"><code>LayerTreeNodeOptions</code></a></td></tr></tbody></table><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>optionsFunc</code></td><td style="text-align:left;"><a href="./../features/feature.html#optionsfunc"><code>OptionsFunc</code></a>&lt;<code>T</code>, <code>Record</code>&lt;<code>string</code>, <code>unknown</code>&gt;, <code>Record</code>&lt;<code>string</code>, <code>unknown</code>&gt;&gt;</td><td style="text-align:left;">A function that returns the options object for this tree node.</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p><a href="./common.html#layertreenode"><code>LayerTreeNode</code></a>&lt;<code>T</code>&gt;</p><hr><h3 id="createresetbutton" tabindex="-1">createResetButton <a class="header-anchor" href="#createresetbutton" aria-hidden="true">#</a></h3><p>\u25B8 <strong>createResetButton</strong>&lt;<code>T</code>&gt;(<code>optionsFunc</code>): <a href="./common.html#resetbutton"><code>ResetButton</code></a>&lt;<code>T</code>&gt;</p><p>Lazily creates a reset button with the given options.</p><h4 id="type-parameters-3" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-3" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../interfaces/features/clickables/clickable.ClickableOptions"><code>ClickableOptions</code></a> &amp; <a href="../../interfaces/data/common.ResetButtonOptions"><code>ResetButtonOptions</code></a></td></tr></tbody></table><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>optionsFunc</code></td><td style="text-align:left;"><a href="./../features/feature.html#optionsfunc"><code>OptionsFunc</code></a>&lt;<code>T</code>, <code>Record</code>&lt;<code>string</code>, <code>unknown</code>&gt;, <code>Record</code>&lt;<code>string</code>, <code>unknown</code>&gt;&gt;</td><td style="text-align:left;">A function that returns the options object for this reset button.</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-hidden="true">#</a></h4><p><a href="./common.html#resetbutton"><code>ResetButton</code></a>&lt;<code>T</code>&gt;</p>',67),c=[r];function n(l,s,i,h,u,p){return a(),t("div",null,c)}var g=e(d,[["render",n]]);export{m as __pageData,g as default};
