import{_ as e,c as r,o as t,a}from"./app.189352af.js";const m=JSON.parse('{"title":"Interface: LayerTreeNodeOptions","description":"","frontmatter":{"editLink":false},"headers":[{"level":2,"title":"Hierarchy","slug":"hierarchy"},{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"append","slug":"append"},{"level":3,"title":"canClick","slug":"canclick"},{"level":3,"title":"classes","slug":"classes"},{"level":3,"title":"color","slug":"color"},{"level":3,"title":"display","slug":"display"},{"level":3,"title":"glowColor","slug":"glowcolor"},{"level":3,"title":"layerID","slug":"layerid"},{"level":3,"title":"mark","slug":"mark"},{"level":3,"title":"onClick","slug":"onclick"},{"level":3,"title":"onHold","slug":"onhold"},{"level":3,"title":"reset","slug":"reset"},{"level":3,"title":"style","slug":"style"},{"level":3,"title":"visibility","slug":"visibility"}],"relativePath":"api/interfaces/data/common.LayerTreeNodeOptions.md","lastUpdated":null}'),o={name:"api/interfaces/data/common.LayerTreeNodeOptions.md"},d=a('<h1 id="interface-layertreenodeoptions" tabindex="-1">Interface: LayerTreeNodeOptions <a class="header-anchor" href="#interface-layertreenodeoptions" aria-hidden="true">#</a></h1><p><a href="./../../modules/data/common.html">data/common</a>.LayerTreeNodeOptions</p><p>An object that configures a <a href="./../../modules/data/common.html#layertreenode">LayerTreeNode</a></p><h2 id="hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#hierarchy" aria-hidden="true">#</a></h2><ul><li><p><a href="../features/trees/tree.TreeNodeOptions"><code>TreeNodeOptions</code></a></p><p>\u21B3 <strong><code>LayerTreeNodeOptions</code></strong></p></li></ul><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><h3 id="append" tabindex="-1">append <a class="header-anchor" href="#append" aria-hidden="true">#</a></h3><p>\u2022 <code>Optional</code> <strong>append</strong>: <a href="./../../modules/util/computed.html#computable"><code>Computable</code></a>&lt;<code>boolean</code>&gt;</p><p>Whether or not to append the layer to the tabs list. If set to false, then the tree node will instead always remove all tabs to its right and then add the layer tab. Defaults to true.</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/1f4676d/src/data/common.tsx#L185" target="_blank" rel="noopener noreferrer">profectus/src/data/common.tsx:185</a></p><hr><h3 id="canclick" tabindex="-1">canClick <a class="header-anchor" href="#canclick" aria-hidden="true">#</a></h3><p>\u2022 <code>Optional</code> <strong>canClick</strong>: <a href="./../../modules/util/computed.html#computable"><code>Computable</code></a>&lt;<code>boolean</code>&gt;</p><h4 id="inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from" aria-hidden="true">#</a></h4><p><a href="../features/trees/tree.TreeNodeOptions">TreeNodeOptions</a>.<a href="./../features/trees/tree.TreeNodeOptions.html#canclick">canClick</a></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/1f4676d/src/features/trees/tree.ts#L27" target="_blank" rel="noopener noreferrer">profectus/src/features/trees/tree.ts:27</a></p><hr><h3 id="classes" tabindex="-1">classes <a class="header-anchor" href="#classes" aria-hidden="true">#</a></h3><p>\u2022 <code>Optional</code> <strong>classes</strong>: <a href="./../../modules/util/computed.html#computable"><code>Computable</code></a>&lt;<code>Record</code>&lt;<code>string</code>, <code>boolean</code>&gt;&gt;</p><h4 id="inherited-from-1" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-1" aria-hidden="true">#</a></h4><p><a href="../features/trees/tree.TreeNodeOptions">TreeNodeOptions</a>.<a href="./../features/trees/tree.TreeNodeOptions.html#classes">classes</a></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/1f4676d/src/features/trees/tree.ts#L31" target="_blank" rel="noopener noreferrer">profectus/src/features/trees/tree.ts:31</a></p><hr><h3 id="color" tabindex="-1">color <a class="header-anchor" href="#color" aria-hidden="true">#</a></h3><p>\u2022 <strong>color</strong>: <a href="./../../modules/util/computed.html#computable"><code>Computable</code></a>&lt;<code>string</code>&gt;</p><p>The color to display this tree node as</p><h4 id="overrides" tabindex="-1">Overrides <a class="header-anchor" href="#overrides" aria-hidden="true">#</a></h4><p><a href="../features/trees/tree.TreeNodeOptions">TreeNodeOptions</a>.<a href="./../features/trees/tree.TreeNodeOptions.html#color">color</a></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/1f4676d/src/data/common.tsx#L175" target="_blank" rel="noopener noreferrer">profectus/src/data/common.tsx:175</a></p><hr><h3 id="display" tabindex="-1">display <a class="header-anchor" href="#display" aria-hidden="true">#</a></h3><p>\u2022 <code>Optional</code> <strong>display</strong>: <a href="./../../modules/util/computed.html#computable"><code>Computable</code></a>&lt;<a href="./../../modules/features/feature.html#coercablecomponent"><code>CoercableComponent</code></a>&gt;</p><p>The content to display in the tree node. Defaults to the layer&#39;s ID</p><h4 id="overrides-1" tabindex="-1">Overrides <a class="header-anchor" href="#overrides-1" aria-hidden="true">#</a></h4><p><a href="../features/trees/tree.TreeNodeOptions">TreeNodeOptions</a>.<a href="./../features/trees/tree.TreeNodeOptions.html#display">display</a></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/1f4676d/src/data/common.tsx#L180" target="_blank" rel="noopener noreferrer">profectus/src/data/common.tsx:180</a></p><hr><h3 id="glowcolor" tabindex="-1">glowColor <a class="header-anchor" href="#glowcolor" aria-hidden="true">#</a></h3><p>\u2022 <code>Optional</code> <strong>glowColor</strong>: <a href="./../../modules/util/computed.html#computable"><code>Computable</code></a>&lt;<code>string</code>&gt;</p><h4 id="inherited-from-2" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-2" aria-hidden="true">#</a></h4><p><a href="../features/trees/tree.TreeNodeOptions">TreeNodeOptions</a>.<a href="./../features/trees/tree.TreeNodeOptions.html#glowcolor">glowColor</a></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/1f4676d/src/features/trees/tree.ts#L30" target="_blank" rel="noopener noreferrer">profectus/src/features/trees/tree.ts:30</a></p><hr><h3 id="layerid" tabindex="-1">layerID <a class="header-anchor" href="#layerid" aria-hidden="true">#</a></h3><p>\u2022 <strong>layerID</strong>: <code>string</code></p><p>The ID of the layer this tree node is associated with</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/1f4676d/src/data/common.tsx#L173" target="_blank" rel="noopener noreferrer">profectus/src/data/common.tsx:173</a></p><hr><h3 id="mark" tabindex="-1">mark <a class="header-anchor" href="#mark" aria-hidden="true">#</a></h3><p>\u2022 <code>Optional</code> <strong>mark</strong>: <a href="./../../modules/util/computed.html#computable"><code>Computable</code></a>&lt;<code>string</code> | <code>boolean</code>&gt;</p><h4 id="inherited-from-3" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-3" aria-hidden="true">#</a></h4><p><a href="../features/trees/tree.TreeNodeOptions">TreeNodeOptions</a>.<a href="./../features/trees/tree.TreeNodeOptions.html#mark">mark</a></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/1f4676d/src/features/trees/tree.ts#L33" target="_blank" rel="noopener noreferrer">profectus/src/features/trees/tree.ts:33</a></p><hr><h3 id="onclick" tabindex="-1">onClick <a class="header-anchor" href="#onclick" aria-hidden="true">#</a></h3><p>\u2022 <code>Optional</code> <strong>onClick</strong>: (<code>e?</code>: <code>MouseEvent</code> | <code>TouchEvent</code>) =&gt; <code>void</code></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a></h4><p>\u25B8 (<code>e?</code>): <code>void</code></p><h5 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>e?</code></td><td style="text-align:left;"><code>MouseEvent</code> | <code>TouchEvent</code></td></tr></tbody></table><h5 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h5><p><code>void</code></p><h4 id="inherited-from-4" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-4" aria-hidden="true">#</a></h4><p><a href="../features/trees/tree.TreeNodeOptions">TreeNodeOptions</a>.<a href="./../features/trees/tree.TreeNodeOptions.html#onclick">onClick</a></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/1f4676d/src/features/trees/tree.ts#L35" target="_blank" rel="noopener noreferrer">profectus/src/features/trees/tree.ts:35</a></p><hr><h3 id="onhold" tabindex="-1">onHold <a class="header-anchor" href="#onhold" aria-hidden="true">#</a></h3><p>\u2022 <code>Optional</code> <strong>onHold</strong>: <code>VoidFunction</code></p><h4 id="inherited-from-5" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-5" aria-hidden="true">#</a></h4><p><a href="../features/trees/tree.TreeNodeOptions">TreeNodeOptions</a>.<a href="./../features/trees/tree.TreeNodeOptions.html#onhold">onHold</a></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/1f4676d/src/features/trees/tree.ts#L36" target="_blank" rel="noopener noreferrer">profectus/src/features/trees/tree.ts:36</a></p><hr><h3 id="reset" tabindex="-1">reset <a class="header-anchor" href="#reset" aria-hidden="true">#</a></h3><p>\u2022 <code>Optional</code> <strong>reset</strong>: <a href="./../../modules/features/reset.html#genericreset"><code>GenericReset</code></a></p><h4 id="inherited-from-6" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-6" aria-hidden="true">#</a></h4><p><a href="../features/trees/tree.TreeNodeOptions">TreeNodeOptions</a>.<a href="./../features/trees/tree.TreeNodeOptions.html#reset">reset</a></p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/1f4676d/src/features/trees/tree.ts#L34" target="_blank" rel="noopener noreferrer">profectus/src/features/trees/tree.ts:34</a></p><hr><h3 id="style" tabindex="-1">style <a class="header-anchor" href="#style" aria-hidden="true">#</a></h3><p>\u2022 <code>Optional</code> <strong>style</strong>: <a href="./../../modules/util/computed.html#computable"><code>Computable</code></a>&lt;<a href="./../../modules/features/feature.html#stylevalue"><code>StyleValue</code></a>&gt;</p><h4 id="inherited-from-7" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-7" aria-hidden="true">#</a></h4><p><a href="../features/trees/tree.TreeNodeOptions">TreeNodeOptions</a>.<a href="./../features/trees/tree.TreeNodeOptions.html#style">style</a></p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/1f4676d/src/features/trees/tree.ts#L32" target="_blank" rel="noopener noreferrer">profectus/src/features/trees/tree.ts:32</a></p><hr><h3 id="visibility" tabindex="-1">visibility <a class="header-anchor" href="#visibility" aria-hidden="true">#</a></h3><p>\u2022 <code>Optional</code> <strong>visibility</strong>: <a href="./../../modules/util/computed.html#computable"><code>Computable</code></a>&lt;<a href="../../enums/features/feature.Visibility"><code>Visibility</code></a>&gt;</p><h4 id="inherited-from-8" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-8" aria-hidden="true">#</a></h4><p><a href="../features/trees/tree.TreeNodeOptions">TreeNodeOptions</a>.<a href="./../features/trees/tree.TreeNodeOptions.html#visibility">visibility</a></p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/1f4676d/src/features/trees/tree.ts#L26" target="_blank" rel="noopener noreferrer">profectus/src/features/trees/tree.ts:26</a></p>',102),i=[d];function n(s,h,c,l,f,p){return t(),r("div",null,i)}var b=e(o,[["render",n]]);export{m as __pageData,b as default};
