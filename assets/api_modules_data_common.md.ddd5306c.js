import{_ as e,c as t,o as a,N as o}from"./chunks/framework.0799945b.js";const m=JSON.parse('{"title":"Module: data/common","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/modules/data/common.md","lastUpdated":null}'),r={name:"api/modules/data/common.md"},d=o('<h1 id="module-data-common" tabindex="-1">Module: data/common <a class="header-anchor" href="#module-data-common" aria-label="Permalink to &quot;Module: data/common&quot;">​</a></h1><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><h3 id="layertreenodeoptions" tabindex="-1">LayerTreeNodeOptions <a class="header-anchor" href="#layertreenodeoptions" aria-label="Permalink to &quot;LayerTreeNodeOptions&quot;">​</a></h3><p>• <strong>LayerTreeNodeOptions</strong>: <code>Object</code></p><p>An object that configures a <a href="./common#layertreenode">LayerTreeNode</a></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>append?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<code>boolean</code>&gt;</td><td style="text-align:left;">Whether or not to append the layer to the tabs list. If set to false, then the tree node will instead always remove all tabs to its right and then add the layer tab. Defaults to true.</td></tr><tr><td style="text-align:left;"><code>canClick?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<code>boolean</code>&gt;</td><td style="text-align:left;">Whether or not this tree node can be clicked.</td></tr><tr><td style="text-align:left;"><code>classes?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type" target="_blank" rel="noreferrer"><code>Record</code></a>&lt;<code>string</code>, <code>boolean</code>&gt;&gt;</td><td style="text-align:left;">Dictionary of CSS classes to apply to this feature.</td></tr><tr><td style="text-align:left;"><code>color</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<code>string</code>&gt;</td><td style="text-align:left;">The color to display this tree node as</td></tr><tr><td style="text-align:left;"><code>display?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<a href="./../features/feature#coercablecomponent"><code>CoercableComponent</code></a>&gt;</td><td style="text-align:left;">The content to display in the tree node. Defaults to the layer&#39;s ID</td></tr><tr><td style="text-align:left;"><code>glowColor?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<code>string</code>&gt;</td><td style="text-align:left;">The color of the glow effect shown to notify the user there&#39;s something to do with this node.</td></tr><tr><td style="text-align:left;"><code>layerID</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The ID of the layer this tree node is associated with</td></tr><tr><td style="text-align:left;"><code>mark?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<code>string</code> | <code>boolean</code>&gt;</td><td style="text-align:left;">Shows a marker on the corner of the feature.</td></tr><tr><td style="text-align:left;"><code>onClick?</code></td><td style="text-align:left;">(<code>e?</code>: <a href="https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent" target="_blank" rel="noreferrer"><code>MouseEvent</code></a> | <a href="https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent" target="_blank" rel="noreferrer"><code>TouchEvent</code></a>) =&gt; <code>void</code></td><td style="text-align:left;">A function that is called when the tree node is clicked.</td></tr><tr><td style="text-align:left;"><code>onHold?</code></td><td style="text-align:left;"><code>VoidFunction</code></td><td style="text-align:left;">A function that is called when the tree node is held down.</td></tr><tr><td style="text-align:left;"><code>reset?</code></td><td style="text-align:left;"><a href="./../features/reset#genericreset"><code>GenericReset</code></a></td><td style="text-align:left;">A reset object attached to this node, used for propagating resets through the tree.</td></tr><tr><td style="text-align:left;"><code>style?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<a href="./../features/feature#stylevalue"><code>StyleValue</code></a>&gt;</td><td style="text-align:left;">CSS to apply to this feature.</td></tr><tr><td style="text-align:left;"><code>visibility?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<code>boolean</code> | <a href="./../features/feature#visibility"><code>Visibility</code></a>&gt;</td><td style="text-align:left;">Whether this tree node should be visible.</td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/425e85a/src/data/common.tsx#L175" target="_blank" rel="noreferrer">profectus/src/data/common.tsx:175</a></p><hr><h3 id="resetbuttonoptions" tabindex="-1">ResetButtonOptions <a class="header-anchor" href="#resetbuttonoptions" aria-label="Permalink to &quot;ResetButtonOptions&quot;">​</a></h3><p>• <strong>ResetButtonOptions</strong>: <code>Object</code></p><p>An object that configures a <a href="./common#resetbutton">ResetButton</a></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>canClick?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<code>boolean</code>&gt;</td><td style="text-align:left;">Whether or not this button can currently be clicked. Defaults to checking the current gain amount is greater than <a href="./common#minimumgain">minimumGain</a></td></tr><tr><td style="text-align:left;"><code>classes?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type" target="_blank" rel="noreferrer"><code>Record</code></a>&lt;<code>string</code>, <code>boolean</code>&gt;&gt;</td><td style="text-align:left;">Dictionary of CSS classes to apply to this feature.</td></tr><tr><td style="text-align:left;"><code>conversion</code></td><td style="text-align:left;"><a href="./../features/conversion#genericconversion"><code>GenericConversion</code></a></td><td style="text-align:left;">The conversion the button uses to calculate how much resources will be gained on click</td></tr><tr><td style="text-align:left;"><code>display?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<a href="./../features/feature#coercablecomponent"><code>CoercableComponent</code></a>&gt;</td><td style="text-align:left;">The content to display on the button. By default, this includes the reset description, and amount of currency to be gained.</td></tr><tr><td style="text-align:left;"><code>mark?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<code>string</code> | <code>boolean</code>&gt;</td><td style="text-align:left;">Shows a marker on the corner of the feature.</td></tr><tr><td style="text-align:left;"><code>minimumGain?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<a href="./../lib/break_eternity#decimalsource"><code>DecimalSource</code></a>&gt;</td><td style="text-align:left;">When <a href="./common#canclick">canClick</a> is left to its default, minimumGain is used to only enable the reset button when a sufficient amount of currency to gain is available.</td></tr><tr><td style="text-align:left;"><code>onClick?</code></td><td style="text-align:left;">(<code>e?</code>: <a href="https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent" target="_blank" rel="noreferrer"><code>MouseEvent</code></a> | <a href="https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent" target="_blank" rel="noreferrer"><code>TouchEvent</code></a>) =&gt; <code>void</code></td><td style="text-align:left;">A function that is called when the clickable is clicked.</td></tr><tr><td style="text-align:left;"><code>onHold?</code></td><td style="text-align:left;"><code>VoidFunction</code></td><td style="text-align:left;">A function that is called when the clickable is held down.</td></tr><tr><td style="text-align:left;"><code>resetDescription?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<code>string</code>&gt;</td><td style="text-align:left;">Text to display on low conversion amounts, describing what &quot;resetting&quot; is in this context. Defaults to &quot;Reset for &quot;.</td></tr><tr><td style="text-align:left;"><code>resetTime?</code></td><td style="text-align:left;"><a href="./../game/persistence#persistent"><code>Persistent</code></a>&lt;<a href="./../lib/break_eternity#decimalsource"><code>DecimalSource</code></a>&gt;</td><td style="text-align:left;">A persistent ref to track how much time has passed since the last time this tree node was reset.</td></tr><tr><td style="text-align:left;"><code>showNextAt?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<code>boolean</code>&gt;</td><td style="text-align:left;">Whether or not to show how much currency would be required to make the gain amount increase.</td></tr><tr><td style="text-align:left;"><code>small?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Toggles a smaller design for the feature.</td></tr><tr><td style="text-align:left;"><code>style?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<a href="./../features/feature#stylevalue"><code>StyleValue</code></a>&gt;</td><td style="text-align:left;">CSS to apply to this feature.</td></tr><tr><td style="text-align:left;"><code>tree</code></td><td style="text-align:left;"><a href="./../features/tree#generictree"><code>GenericTree</code></a></td><td style="text-align:left;">The tree this reset button is apart of</td></tr><tr><td style="text-align:left;"><code>treeNode</code></td><td style="text-align:left;"><a href="./../features/tree#generictreenode"><code>GenericTreeNode</code></a></td><td style="text-align:left;">The specific tree node associated with this reset button</td></tr><tr><td style="text-align:left;"><code>visibility?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<code>boolean</code> | <a href="./../features/feature#visibility"><code>Visibility</code></a>&gt;</td><td style="text-align:left;">Whether this clickable should be visible.</td></tr></tbody></table><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/425e85a/src/data/common.tsx#L33" target="_blank" rel="noreferrer">profectus/src/data/common.tsx:33</a></p><hr><h3 id="section" tabindex="-1">Section <a class="header-anchor" href="#section" aria-label="Permalink to &quot;Section&quot;">​</a></h3><p>• <strong>Section</strong>: <code>Object</code></p><p>An option object for a modifier display as a single section. *</p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>base?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<a href="./../lib/break_eternity#decimalsource"><code>DecimalSource</code></a>&gt;</td><td style="text-align:left;">The base value being modified. *</td></tr><tr><td style="text-align:left;"><code>baseText?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<a href="./../features/feature#coercablecomponent"><code>CoercableComponent</code></a>&gt;</td><td style="text-align:left;">The label to call the base amount. Defaults to &quot;Base&quot;. *</td></tr><tr><td style="text-align:left;"><code>modifier</code></td><td style="text-align:left;"><a href="./../util/common#withrequired"><code>WithRequired</code></a>&lt;<a href="./../game/modifiers#modifier"><code>Modifier</code></a>, <code>&quot;description&quot;</code>&gt;</td><td style="text-align:left;">The modifier to be displaying in this section. *</td></tr><tr><td style="text-align:left;"><code>smallerIsBetter?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Determines if numbers larger or smaller than the base should be displayed as red.</td></tr><tr><td style="text-align:left;"><code>subtitle?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<code>string</code>&gt;</td><td style="text-align:left;">A subtitle for this modifier, e.g. to explain the context for the modifier. *</td></tr><tr><td style="text-align:left;"><code>title</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<code>string</code>&gt;</td><td style="text-align:left;">The header for this modifier. *</td></tr><tr><td style="text-align:left;"><code>unit?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The unit of measurement for the base. *</td></tr><tr><td style="text-align:left;"><code>visible?</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<code>boolean</code>&gt;</td><td style="text-align:left;">Whether or not this section should be currently visible to the player. *</td></tr></tbody></table><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/425e85a/src/data/common.tsx#L240" target="_blank" rel="noreferrer">profectus/src/data/common.tsx:240</a></p><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="genericlayertreenode" tabindex="-1">GenericLayerTreeNode <a class="header-anchor" href="#genericlayertreenode" aria-label="Permalink to &quot;GenericLayerTreeNode&quot;">​</a></h3><p>Ƭ <strong>GenericLayerTreeNode</strong>: <a href="./../features/feature#replace"><code>Replace</code></a>&lt;<a href="./common#layertreenode"><code>LayerTreeNode</code></a>&lt;<a href="./common#layertreenodeoptions"><code>LayerTreeNodeOptions</code></a>&gt;, { <code>append?</code>: <a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code>&gt; ; <code>display</code>: <a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./../features/feature#coercablecomponent"><code>CoercableComponent</code></a>&gt; }&gt;</p><p>A type that matches any valid <a href="./common#layertreenode">LayerTreeNode</a> object.</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/425e85a/src/data/common.tsx#L200" target="_blank" rel="noreferrer">profectus/src/data/common.tsx:200</a></p><hr><h3 id="genericresetbutton" tabindex="-1">GenericResetButton <a class="header-anchor" href="#genericresetbutton" aria-label="Permalink to &quot;GenericResetButton&quot;">​</a></h3><p>Ƭ <strong>GenericResetButton</strong>: <a href="./../features/feature#replace"><code>Replace</code></a>&lt;<a href="./../features/clickable#genericclickable"><code>GenericClickable</code></a> &amp; <a href="./common#resetbutton"><code>ResetButton</code></a>&lt;<a href="./common#resetbuttonoptions"><code>ResetButtonOptions</code></a>&gt;, { <code>canClick</code>: <a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code>&gt; ; <code>display</code>: <a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./../features/feature#coercablecomponent"><code>CoercableComponent</code></a>&gt; ; <code>minimumGain</code>: <a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./../util/bignum#decimalsource"><code>DecimalSource</code></a>&gt; ; <code>resetDescription</code>: <a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>string</code>&gt; ; <code>showNextAt</code>: <a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code>&gt; }&gt;</p><p>A type that matches any valid <a href="./common#resetbutton">ResetButton</a> object.</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/425e85a/src/data/common.tsx#L83" target="_blank" rel="noreferrer">profectus/src/data/common.tsx:83</a></p><hr><h3 id="layertreenode" tabindex="-1">LayerTreeNode <a class="header-anchor" href="#layertreenode" aria-label="Permalink to &quot;LayerTreeNode&quot;">​</a></h3><p>Ƭ <strong>LayerTreeNode</strong>&lt;<code>T</code>&gt;: <a href="./../features/feature#replace"><code>Replace</code></a>&lt;<a href="./../features/tree#treenode"><code>TreeNode</code></a>&lt;<code>T</code>&gt;, { <code>append</code>: <a href="./../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;append&quot;</code>]&gt; ; <code>display</code>: <a href="./../util/computed#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;display&quot;</code>], <code>T</code>[<code>&quot;layerID&quot;</code>]&gt; }&gt;</p><p>A tree node that is associated with a given layer, and which opens the layer when clicked.</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./common#layertreenodeoptions"><code>LayerTreeNodeOptions</code></a></td></tr></tbody></table><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/425e85a/src/data/common.tsx#L192" target="_blank" rel="noreferrer">profectus/src/data/common.tsx:192</a></p><hr><h3 id="resetbutton" tabindex="-1">ResetButton <a class="header-anchor" href="#resetbutton" aria-label="Permalink to &quot;ResetButton&quot;">​</a></h3><p>Ƭ <strong>ResetButton</strong>&lt;<code>T</code>&gt;: <a href="./../features/feature#replace"><code>Replace</code></a>&lt;<a href="./../features/clickable#clickable"><code>Clickable</code></a>&lt;<code>T</code>&gt;, { <code>canClick</code>: <a href="./../util/computed#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;canClick&quot;</code>], <code>Ref</code>&lt;<code>boolean</code>&gt;&gt; ; <code>display</code>: <a href="./../util/computed#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;display&quot;</code>], <code>Ref</code>&lt;<code>JSX.Element</code>&gt;&gt; ; <code>minimumGain</code>: <a href="./../util/computed#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;minimumGain&quot;</code>], <code>1</code>&gt; ; <code>onClick</code>: (<code>event?</code>: <a href="https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent" target="_blank" rel="noreferrer"><code>MouseEvent</code></a> | <a href="https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent" target="_blank" rel="noreferrer"><code>TouchEvent</code></a>) =&gt; <code>void</code> ; <code>resetDescription</code>: <a href="./../util/computed#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;resetDescription&quot;</code>], <code>Ref</code>&lt;<code>string</code>&gt;&gt; ; <code>showNextAt</code>: <a href="./../util/computed#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;showNextAt&quot;</code>], <code>true</code>&gt; }&gt;</p><p>A button that is used to control a conversion. It will show how much can be converted currently, and can show when that amount will go up, as well as handle only being clickable when a sufficient amount of currency can be gained. Assumes this button is associated with a specific node on a tree, and triggers that tree&#39;s reset propagation.</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./common#resetbuttonoptions"><code>ResetButtonOptions</code></a></td></tr></tbody></table><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/425e85a/src/data/common.tsx#L70" target="_blank" rel="noreferrer">profectus/src/data/common.tsx:70</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="colortext" tabindex="-1">colorText <a class="header-anchor" href="#colortext" aria-label="Permalink to &quot;colorText&quot;">​</a></h3><p>▸ <strong>colorText</strong>(<code>textToColor</code>, <code>color?</code>): <code>JSX.Element</code></p><p>Creates an HTML string for a span that writes some given text in a given color.</p><h5 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>textToColor</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">The content to change the color of</td></tr><tr><td style="text-align:left;"><code>color</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>&quot;var(--accent2)&quot;</code></td><td style="text-align:left;">The color to change the content to look like. Defaults to the current theme&#39;s accent 2 variable.</td></tr></tbody></table><h5 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>JSX.Element</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/425e85a/src/data/common.tsx#L383" target="_blank" rel="noreferrer">profectus/src/data/common.tsx:383</a></p><hr><h3 id="createcollapsibleachievements" tabindex="-1">createCollapsibleAchievements <a class="header-anchor" href="#createcollapsibleachievements" aria-label="Permalink to &quot;createCollapsibleAchievements&quot;">​</a></h3><p>▸ <strong>createCollapsibleAchievements</strong>(<code>achievements</code>): <code>Object</code></p><p>Creates a collapsible display of a list of achievements</p><h5 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>achievements</code></td><td style="text-align:left;"><a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type" target="_blank" rel="noreferrer"><code>Record</code></a>&lt;<code>string</code>, <a href="./../features/achievement#genericachievement"><code>GenericAchievement</code></a>&gt;</td><td style="text-align:left;">A dictionary of the achievements to display, inserted in the order from easiest to hardest</td></tr></tbody></table><h5 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>Object</code></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>collapseAchievements</code></td><td style="text-align:left;"><a href="./../game/persistence#persistent"><code>Persistent</code></a>&lt;<code>boolean</code>&gt;</td></tr><tr><td style="text-align:left;"><code>display</code></td><td style="text-align:left;"><a href="./../features/feature#jsxfunction"><code>JSXFunction</code></a></td></tr></tbody></table><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/425e85a/src/data/common.tsx#L391" target="_blank" rel="noreferrer">profectus/src/data/common.tsx:391</a></p><hr><h3 id="createcollapsiblemodifiersections" tabindex="-1">createCollapsibleModifierSections <a class="header-anchor" href="#createcollapsiblemodifiersections" aria-label="Permalink to &quot;createCollapsibleModifierSections&quot;">​</a></h3><p>▸ <strong>createCollapsibleModifierSections</strong>(<code>sectionsFunc</code>): [<a href="./../features/feature#jsxfunction"><code>JSXFunction</code></a>, <a href="./../game/persistence#persistent"><code>Persistent</code></a>&lt;<a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type" target="_blank" rel="noreferrer"><code>Record</code></a>&lt;<code>number</code>, <code>boolean</code>&gt;&gt;]</p><p>Takes an array of modifier &quot;sections&quot;, and creates a JSXFunction that can render all those sections, and allow each section to be collapsed. Also returns a list of persistent refs that are used to control which sections are currently collapsed.</p><h5 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>sectionsFunc</code></td><td style="text-align:left;">() =&gt; <a href="./common#section"><code>Section</code></a>[]</td><td style="text-align:left;">A function that returns the sections to display.</td></tr></tbody></table><h5 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p>[<a href="./../features/feature#jsxfunction"><code>JSXFunction</code></a>, <a href="./../game/persistence#persistent"><code>Persistent</code></a>&lt;<a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type" target="_blank" rel="noreferrer"><code>Record</code></a>&lt;<code>number</code>, <code>boolean</code>&gt;&gt;]</p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/425e85a/src/data/common.tsx#L264" target="_blank" rel="noreferrer">profectus/src/data/common.tsx:264</a></p><hr><h3 id="createformulapreview" tabindex="-1">createFormulaPreview <a class="header-anchor" href="#createformulapreview" aria-label="Permalink to &quot;createFormulaPreview&quot;">​</a></h3><p>▸ <strong>createFormulaPreview</strong>(<code>formula</code>, <code>showPreview</code>, <code>previewAmount?</code>): <a href="./../features/feature#jsxfunction"><code>JSXFunction</code></a></p><p>Utility function for displaying the result of a formula such that it will, when told to, preview how the formula&#39;s result will change. Requires a formula with a single variable inside.</p><h5 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>formula</code></td><td style="text-align:left;"><a href="./../game/formulas/types#genericformula"><code>GenericFormula</code></a></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">The formula to display the result of.</td></tr><tr><td style="text-align:left;"><code>showPreview</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<code>boolean</code>&gt;</td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">Whether or not to preview how the formula&#39;s result will change.</td></tr><tr><td style="text-align:left;"><code>previewAmount</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<a href="./../lib/break_eternity#decimalsource"><code>DecimalSource</code></a>&gt;</td><td style="text-align:left;"><code>1</code></td><td style="text-align:left;">The amount to <em>add</em> to the current formula&#39;s variable amount to preview the change in result.</td></tr></tbody></table><h5 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><a href="./../features/feature#jsxfunction"><code>JSXFunction</code></a></p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/425e85a/src/data/common.tsx#L461" target="_blank" rel="noreferrer">profectus/src/data/common.tsx:461</a></p><hr><h3 id="createlayertreenode" tabindex="-1">createLayerTreeNode <a class="header-anchor" href="#createlayertreenode" aria-label="Permalink to &quot;createLayerTreeNode&quot;">​</a></h3><p>▸ <strong>createLayerTreeNode</strong>&lt;<code>T</code>&gt;(<code>optionsFunc</code>): <a href="./common#layertreenode"><code>LayerTreeNode</code></a>&lt;<code>T</code>&gt;</p><p>Lazily creates a tree node that&#39;s associated with a specific layer, with the given options.</p><h5 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./common#layertreenodeoptions"><code>LayerTreeNodeOptions</code></a></td></tr></tbody></table><h5 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>optionsFunc</code></td><td style="text-align:left;"><a href="./../features/feature#optionsfunc"><code>OptionsFunc</code></a>&lt;<code>T</code>&gt;</td><td style="text-align:left;">A function that returns the options object for this tree node.</td></tr></tbody></table><h5 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><a href="./common#layertreenode"><code>LayerTreeNode</code></a>&lt;<code>T</code>&gt;</p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/425e85a/src/data/common.tsx#L212" target="_blank" rel="noreferrer">profectus/src/data/common.tsx:212</a></p><hr><h3 id="createresetbutton" tabindex="-1">createResetButton <a class="header-anchor" href="#createresetbutton" aria-label="Permalink to &quot;createResetButton&quot;">​</a></h3><p>▸ <strong>createResetButton</strong>&lt;<code>T</code>&gt;(<code>optionsFunc</code>): <a href="./common#resetbutton"><code>ResetButton</code></a>&lt;<code>T</code>&gt;</p><p>Lazily creates a reset button with the given options.</p><h5 id="type-parameters-3" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-3" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./../features/clickable#clickableoptions"><code>ClickableOptions</code></a> &amp; <a href="./common#resetbuttonoptions"><code>ResetButtonOptions</code></a></td></tr></tbody></table><h5 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>optionsFunc</code></td><td style="text-align:left;"><a href="./../features/feature#optionsfunc"><code>OptionsFunc</code></a>&lt;<code>T</code>&gt;</td><td style="text-align:left;">A function that returns the options object for this reset button.</td></tr></tbody></table><h5 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><a href="./common#resetbutton"><code>ResetButton</code></a>&lt;<code>T</code>&gt;</p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/425e85a/src/data/common.tsx#L98" target="_blank" rel="noreferrer">profectus/src/data/common.tsx:98</a></p><hr><h3 id="estimatetime" tabindex="-1">estimateTime <a class="header-anchor" href="#estimatetime" aria-label="Permalink to &quot;estimateTime&quot;">​</a></h3><p>▸ <strong>estimateTime</strong>(<code>resource</code>, <code>rate</code>, <code>target</code>): <code>ComputedRef</code>&lt;<code>string</code>&gt;</p><p>Utility function for getting an ETA for when a target will be reached by a resource with a known (and assumed consistent) gain.</p><h5 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>resource</code></td><td style="text-align:left;"><a href="./../features/resource#resource"><code>Resource</code></a>&lt;<a href="./../lib/break_eternity#decimalsource"><code>DecimalSource</code></a>&gt;</td><td style="text-align:left;">The resource that will be increasing over time.</td></tr><tr><td style="text-align:left;"><code>rate</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<a href="./../lib/break_eternity#decimalsource"><code>DecimalSource</code></a>&gt;</td><td style="text-align:left;">The rate at which the resource is increasing.</td></tr><tr><td style="text-align:left;"><code>target</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<a href="./../lib/break_eternity#decimalsource"><code>DecimalSource</code></a>&gt;</td><td style="text-align:left;">The target amount of the resource to estimate the duration until.</td></tr></tbody></table><h5 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>ComputedRef</code>&lt;<code>string</code>&gt;</p><h4 id="defined-in-13" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-13" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/425e85a/src/data/common.tsx#L435" target="_blank" rel="noreferrer">profectus/src/data/common.tsx:435</a></p>',125),l=[d];function c(n,i,s,h,f,u){return a(),t("div",null,l)}const g=e(r,[["render",c]]);export{m as __pageData,g as default};
