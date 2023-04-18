import{_ as e,c as t,o as a,N as o}from"./chunks/framework.0799945b.js";const m=JSON.parse('{"title":"Module: data/common","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/modules/data/common.md","lastUpdated":null}'),r={name:"api/modules/data/common.md"},d=o('<h1 id="module-data-common" tabindex="-1">Module: data/common <a class="header-anchor" href="#module-data-common" aria-label="Permalink to &quot;Module: data/common&quot;">​</a></h1><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><h3 id="layertreenodeoptions" tabindex="-1">LayerTreeNodeOptions <a class="header-anchor" href="#layertreenodeoptions" aria-label="Permalink to &quot;LayerTreeNodeOptions&quot;">​</a></h3><p>• <strong>LayerTreeNodeOptions</strong>: <code>Object</code></p><p>An object that configures a <a href="./common#layertreenode">LayerTreeNode</a></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/data/common.tsx#L176" target="_blank" rel="noreferrer">profectus/src/data/common.tsx:176</a></p><hr><h3 id="resetbuttonoptions" tabindex="-1">ResetButtonOptions <a class="header-anchor" href="#resetbuttonoptions" aria-label="Permalink to &quot;ResetButtonOptions&quot;">​</a></h3><p>• <strong>ResetButtonOptions</strong>: <code>Object</code></p><p>An object that configures a <a href="./common#resetbutton">ResetButton</a></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/data/common.tsx#L34" target="_blank" rel="noreferrer">profectus/src/data/common.tsx:34</a></p><hr><h3 id="section" tabindex="-1">Section <a class="header-anchor" href="#section" aria-label="Permalink to &quot;Section&quot;">​</a></h3><p>• <strong>Section</strong>: <code>Object</code></p><p>An option object for a modifier display as a single section. *</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/data/common.tsx#L241" target="_blank" rel="noreferrer">profectus/src/data/common.tsx:241</a></p><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="genericlayertreenode" tabindex="-1">GenericLayerTreeNode <a class="header-anchor" href="#genericlayertreenode" aria-label="Permalink to &quot;GenericLayerTreeNode&quot;">​</a></h3><p>Ƭ <strong>GenericLayerTreeNode</strong>: <a href="./../features/feature#replace"><code>Replace</code></a>&lt;<a href="./common#layertreenode"><code>LayerTreeNode</code></a>&lt;<a href="./common#layertreenodeoptions"><code>LayerTreeNodeOptions</code></a>&gt;, { <code>append?</code>: <a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code>&gt; ; <code>display</code>: <a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./../features/feature#coercablecomponent"><code>CoercableComponent</code></a>&gt; }&gt;</p><p>A type that matches any valid <a href="./common#layertreenode">LayerTreeNode</a> object.</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/data/common.tsx#L201" target="_blank" rel="noreferrer">profectus/src/data/common.tsx:201</a></p><hr><h3 id="genericresetbutton" tabindex="-1">GenericResetButton <a class="header-anchor" href="#genericresetbutton" aria-label="Permalink to &quot;GenericResetButton&quot;">​</a></h3><p>Ƭ <strong>GenericResetButton</strong>: <a href="./../features/feature#replace"><code>Replace</code></a>&lt;<a href="./../features/clickable#genericclickable"><code>GenericClickable</code></a> &amp; <a href="./common#resetbutton"><code>ResetButton</code></a>&lt;<a href="./common#resetbuttonoptions"><code>ResetButtonOptions</code></a>&gt;, { <code>canClick</code>: <a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code>&gt; ; <code>display</code>: <a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./../features/feature#coercablecomponent"><code>CoercableComponent</code></a>&gt; ; <code>minimumGain</code>: <a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./../util/bignum#decimalsource"><code>DecimalSource</code></a>&gt; ; <code>resetDescription</code>: <a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>string</code>&gt; ; <code>showNextAt</code>: <a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code>&gt; }&gt;</p><p>A type that matches any valid <a href="./common#resetbutton">ResetButton</a> object.</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/data/common.tsx#L84" target="_blank" rel="noreferrer">profectus/src/data/common.tsx:84</a></p><hr><h3 id="layertreenode" tabindex="-1">LayerTreeNode <a class="header-anchor" href="#layertreenode" aria-label="Permalink to &quot;LayerTreeNode&quot;">​</a></h3><p>Ƭ <strong>LayerTreeNode</strong>&lt;<code>T</code>&gt;: <a href="./../features/feature#replace"><code>Replace</code></a>&lt;<a href="./../features/tree#treenode"><code>TreeNode</code></a>&lt;<code>T</code>&gt;, { <code>append</code>: <a href="./../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;append&quot;</code>]&gt; ; <code>display</code>: <a href="./../util/computed#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;display&quot;</code>], <code>T</code>[<code>&quot;layerID&quot;</code>]&gt; }&gt;</p><p>A tree node that is associated with a given layer, and which opens the layer when clicked.</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./common#layertreenodeoptions"><code>LayerTreeNodeOptions</code></a></td></tr></tbody></table><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/data/common.tsx#L193" target="_blank" rel="noreferrer">profectus/src/data/common.tsx:193</a></p><hr><h3 id="resetbutton" tabindex="-1">ResetButton <a class="header-anchor" href="#resetbutton" aria-label="Permalink to &quot;ResetButton&quot;">​</a></h3><p>Ƭ <strong>ResetButton</strong>&lt;<code>T</code>&gt;: <a href="./../features/feature#replace"><code>Replace</code></a>&lt;<a href="./../features/clickable#clickable"><code>Clickable</code></a>&lt;<code>T</code>&gt;, { <code>canClick</code>: <a href="./../util/computed#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;canClick&quot;</code>], <code>Ref</code>&lt;<code>boolean</code>&gt;&gt; ; <code>display</code>: <a href="./../util/computed#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;display&quot;</code>], <code>Ref</code>&lt;<code>JSX.Element</code>&gt;&gt; ; <code>minimumGain</code>: <a href="./../util/computed#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;minimumGain&quot;</code>], <code>1</code>&gt; ; <code>onClick</code>: (<code>event?</code>: <a href="https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent" target="_blank" rel="noreferrer"><code>MouseEvent</code></a> | <a href="https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent" target="_blank" rel="noreferrer"><code>TouchEvent</code></a>) =&gt; <code>void</code> ; <code>resetDescription</code>: <a href="./../util/computed#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;resetDescription&quot;</code>], <code>Ref</code>&lt;<code>string</code>&gt;&gt; ; <code>showNextAt</code>: <a href="./../util/computed#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;showNextAt&quot;</code>], <code>true</code>&gt; }&gt;</p><p>A button that is used to control a conversion. It will show how much can be converted currently, and can show when that amount will go up, as well as handle only being clickable when a sufficient amount of currency can be gained. Assumes this button is associated with a specific node on a tree, and triggers that tree&#39;s reset propagation.</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./common#resetbuttonoptions"><code>ResetButtonOptions</code></a></td></tr></tbody></table><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/data/common.tsx#L71" target="_blank" rel="noreferrer">profectus/src/data/common.tsx:71</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="colortext" tabindex="-1">colorText <a class="header-anchor" href="#colortext" aria-label="Permalink to &quot;colorText&quot;">​</a></h3><p>▸ <strong>colorText</strong>(<code>textToColor</code>, <code>color?</code>): <code>JSX.Element</code></p><p>Creates an HTML string for a span that writes some given text in a given color.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>textToColor</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">The content to change the color of</td></tr><tr><td style="text-align:left;"><code>color</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>&quot;var(--accent2)&quot;</code></td><td style="text-align:left;">The color to change the content to look like. Defaults to the current theme&#39;s accent 2 variable.</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>JSX.Element</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/data/common.tsx#L384" target="_blank" rel="noreferrer">profectus/src/data/common.tsx:384</a></p><hr><h3 id="createcollapsibleachievements" tabindex="-1">createCollapsibleAchievements <a class="header-anchor" href="#createcollapsibleachievements" aria-label="Permalink to &quot;createCollapsibleAchievements&quot;">​</a></h3><p>▸ <strong>createCollapsibleAchievements</strong>(<code>achievements</code>): <code>Object</code></p><p>Creates a collapsible display of a list of achievements</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>achievements</code></td><td style="text-align:left;"><a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type" target="_blank" rel="noreferrer"><code>Record</code></a>&lt;<code>string</code>, <a href="./../features/achievement#genericachievement"><code>GenericAchievement</code></a>&gt;</td><td style="text-align:left;">A dictionary of the achievements to display, inserted in the order from easiest to hardest</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Object</code></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>collapseAchievements</code></td><td style="text-align:left;"><a href="./../game/persistence#persistent"><code>Persistent</code></a>&lt;<code>boolean</code>&gt;</td></tr><tr><td style="text-align:left;"><code>display</code></td><td style="text-align:left;"><a href="./../features/feature#jsxfunction"><code>JSXFunction</code></a></td></tr></tbody></table><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/data/common.tsx#L392" target="_blank" rel="noreferrer">profectus/src/data/common.tsx:392</a></p><hr><h3 id="createcollapsiblemodifiersections" tabindex="-1">createCollapsibleModifierSections <a class="header-anchor" href="#createcollapsiblemodifiersections" aria-label="Permalink to &quot;createCollapsibleModifierSections&quot;">​</a></h3><p>▸ <strong>createCollapsibleModifierSections</strong>(<code>sectionsFunc</code>): [<a href="./../features/feature#jsxfunction"><code>JSXFunction</code></a>, <a href="./../game/persistence#persistent"><code>Persistent</code></a>&lt;<a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type" target="_blank" rel="noreferrer"><code>Record</code></a>&lt;<code>number</code>, <code>boolean</code>&gt;&gt;]</p><p>Takes an array of modifier &quot;sections&quot;, and creates a JSXFunction that can render all those sections, and allow each section to be collapsed. Also returns a list of persistent refs that are used to control which sections are currently collapsed.</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>sectionsFunc</code></td><td style="text-align:left;">() =&gt; <a href="./common#section"><code>Section</code></a>[]</td><td style="text-align:left;">A function that returns the sections to display.</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p>[<a href="./../features/feature#jsxfunction"><code>JSXFunction</code></a>, <a href="./../game/persistence#persistent"><code>Persistent</code></a>&lt;<a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type" target="_blank" rel="noreferrer"><code>Record</code></a>&lt;<code>number</code>, <code>boolean</code>&gt;&gt;]</p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/data/common.tsx#L265" target="_blank" rel="noreferrer">profectus/src/data/common.tsx:265</a></p><hr><h3 id="createformulapreview" tabindex="-1">createFormulaPreview <a class="header-anchor" href="#createformulapreview" aria-label="Permalink to &quot;createFormulaPreview&quot;">​</a></h3><p>▸ <strong>createFormulaPreview</strong>(<code>formula</code>, <code>showPreview</code>, <code>previewAmount?</code>): <code>ComputedRef</code>&lt;<a href="./../features/feature#coercablecomponent"><code>CoercableComponent</code></a>&gt;</p><p>Utility function for displaying the result of a formula such that it will, when told to, preview how the formula&#39;s result will change. Requires a formula with a single variable inside.</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>formula</code></td><td style="text-align:left;"><a href="./../game/formulas/types#genericformula"><code>GenericFormula</code></a></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">The formula to display the result of.</td></tr><tr><td style="text-align:left;"><code>showPreview</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<code>boolean</code>&gt;</td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">Whether or not to preview how the formula&#39;s result will change.</td></tr><tr><td style="text-align:left;"><code>previewAmount</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<a href="./../lib/break_eternity#decimalsource"><code>DecimalSource</code></a>&gt;</td><td style="text-align:left;"><code>1</code></td><td style="text-align:left;">The amount to <em>add</em> to the current formula&#39;s variable amount to preview the change in result.</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>ComputedRef</code>&lt;<a href="./../features/feature#coercablecomponent"><code>CoercableComponent</code></a>&gt;</p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/data/common.tsx#L462" target="_blank" rel="noreferrer">profectus/src/data/common.tsx:462</a></p><hr><h3 id="createlayertreenode" tabindex="-1">createLayerTreeNode <a class="header-anchor" href="#createlayertreenode" aria-label="Permalink to &quot;createLayerTreeNode&quot;">​</a></h3><p>▸ <strong>createLayerTreeNode</strong>&lt;<code>T</code>&gt;(<code>optionsFunc</code>): <a href="./common#layertreenode"><code>LayerTreeNode</code></a>&lt;<code>T</code>&gt;</p><p>Lazily creates a tree node that&#39;s associated with a specific layer, with the given options.</p><h4 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./common#layertreenodeoptions"><code>LayerTreeNodeOptions</code></a></td></tr></tbody></table><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>optionsFunc</code></td><td style="text-align:left;"><a href="./../features/feature#optionsfunc"><code>OptionsFunc</code></a>&lt;<code>T</code>&gt;</td><td style="text-align:left;">A function that returns the options object for this tree node.</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./common#layertreenode"><code>LayerTreeNode</code></a>&lt;<code>T</code>&gt;</p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/data/common.tsx#L213" target="_blank" rel="noreferrer">profectus/src/data/common.tsx:213</a></p><hr><h3 id="createresetbutton" tabindex="-1">createResetButton <a class="header-anchor" href="#createresetbutton" aria-label="Permalink to &quot;createResetButton&quot;">​</a></h3><p>▸ <strong>createResetButton</strong>&lt;<code>T</code>&gt;(<code>optionsFunc</code>): <a href="./common#resetbutton"><code>ResetButton</code></a>&lt;<code>T</code>&gt;</p><p>Lazily creates a reset button with the given options.</p><h4 id="type-parameters-3" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-3" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./../features/clickable#clickableoptions"><code>ClickableOptions</code></a> &amp; <a href="./common#resetbuttonoptions"><code>ResetButtonOptions</code></a></td></tr></tbody></table><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>optionsFunc</code></td><td style="text-align:left;"><a href="./../features/feature#optionsfunc"><code>OptionsFunc</code></a>&lt;<code>T</code>&gt;</td><td style="text-align:left;">A function that returns the options object for this reset button.</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./common#resetbutton"><code>ResetButton</code></a>&lt;<code>T</code>&gt;</p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/data/common.tsx#L99" target="_blank" rel="noreferrer">profectus/src/data/common.tsx:99</a></p><hr><h3 id="estimatetime" tabindex="-1">estimateTime <a class="header-anchor" href="#estimatetime" aria-label="Permalink to &quot;estimateTime&quot;">​</a></h3><p>▸ <strong>estimateTime</strong>(<code>resource</code>, <code>rate</code>, <code>target</code>): <code>ComputedRef</code>&lt;<code>string</code>&gt;</p><p>Utility function for getting an ETA for when a target will be reached by a resource with a known (and assumed consistent) gain.</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>resource</code></td><td style="text-align:left;"><a href="./../features/resource#resource"><code>Resource</code></a>&lt;<a href="./../lib/break_eternity#decimalsource"><code>DecimalSource</code></a>&gt;</td><td style="text-align:left;">The resource that will be increasing over time.</td></tr><tr><td style="text-align:left;"><code>rate</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<a href="./../lib/break_eternity#decimalsource"><code>DecimalSource</code></a>&gt;</td><td style="text-align:left;">The rate at which the resource is increasing.</td></tr><tr><td style="text-align:left;"><code>target</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<a href="./../lib/break_eternity#decimalsource"><code>DecimalSource</code></a>&gt;</td><td style="text-align:left;">The target amount of the resource to estimate the duration until.</td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>ComputedRef</code>&lt;<code>string</code>&gt;</p><h4 id="defined-in-13" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-13" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/data/common.tsx#L436" target="_blank" rel="noreferrer">profectus/src/data/common.tsx:436</a></p>',122),c=[d];function n(l,i,s,h,u,f){return a(),t("div",null,c)}const b=e(r,[["render",n]]);export{m as __pageData,b as default};
