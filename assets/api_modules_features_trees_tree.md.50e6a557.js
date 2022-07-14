import{_ as e,c as t,o as r,a}from"./app.189352af.js";const g=JSON.parse('{"title":"Module: features/trees/tree","description":"","frontmatter":{"editLink":false},"headers":[{"level":2,"title":"Components","slug":"components"},{"level":2,"title":"Interfaces","slug":"interfaces"},{"level":2,"title":"Type Aliases","slug":"type-aliases"},{"level":3,"title":"GenericTree","slug":"generictree"},{"level":3,"title":"GenericTreeNode","slug":"generictreenode"},{"level":3,"title":"ResetPropagation","slug":"resetpropagation"},{"level":3,"title":"Tree","slug":"tree"},{"level":3,"title":"TreeNode","slug":"treenode"},{"level":2,"title":"Variables","slug":"variables"},{"level":3,"title":"TreeNodeType","slug":"treenodetype"},{"level":3,"title":"TreeType","slug":"treetype"},{"level":2,"title":"Functions","slug":"functions"},{"level":3,"title":"branchedResetPropagation","slug":"branchedresetpropagation"},{"level":3,"title":"createResourceTooltip","slug":"createresourcetooltip"},{"level":3,"title":"createTree","slug":"createtree"},{"level":3,"title":"createTreeNode","slug":"createtreenode"},{"level":3,"title":"defaultResetPropagation","slug":"defaultresetpropagation"},{"level":3,"title":"invertedResetPropagation","slug":"invertedresetpropagation"}],"relativePath":"api/modules/features/trees/tree.md","lastUpdated":null}'),d={name:"api/modules/features/trees/tree.md"},o=a('<h1 id="module-features-trees-tree" tabindex="-1">Module: features/trees/tree <a class="header-anchor" href="#module-features-trees-tree" aria-hidden="true">#</a></h1><h2 id="components" tabindex="-1">Components <a class="header-anchor" href="#components" aria-hidden="true">#</a></h2><ul><li><a href="./TreeComponent.html">Tree</a></li><li><a href="./TreeNodeComponent.html">TreeNode</a></li></ul><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-hidden="true">#</a></h2><ul><li><a href="../../../interfaces/features/trees/tree.BaseTree">BaseTree</a></li><li><a href="../../../interfaces/features/trees/tree.BaseTreeNode">BaseTreeNode</a></li><li><a href="../../../interfaces/features/trees/tree.TreeBranch">TreeBranch</a></li><li><a href="../../../interfaces/features/trees/tree.TreeNodeOptions">TreeNodeOptions</a></li><li><a href="../../../interfaces/features/trees/tree.TreeOptions">TreeOptions</a></li></ul><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-hidden="true">#</a></h2><h3 id="generictree" tabindex="-1">GenericTree <a class="header-anchor" href="#generictree" aria-hidden="true">#</a></h3><p>\u01AC <strong>GenericTree</strong>: <a href="./../feature.html#replace"><code>Replace</code></a>&lt;<a href="./tree.html#tree"><code>Tree</code></a>&lt;<a href="../../../interfaces/features/trees/tree.TreeOptions"><code>TreeOptions</code></a>&gt;, { <code>visibility</code>: <a href="./../../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="../../../enums/features/feature.Visibility"><code>Visibility</code></a>&gt; }&gt;</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/1f4676d/src/features/trees/tree.ts#L175" target="_blank" rel="noopener noreferrer">profectus/src/features/trees/tree.ts:175</a></p><hr><h3 id="generictreenode" tabindex="-1">GenericTreeNode <a class="header-anchor" href="#generictreenode" aria-hidden="true">#</a></h3><p>\u01AC <strong>GenericTreeNode</strong>: <a href="./../feature.html#replace"><code>Replace</code></a>&lt;<a href="./tree.html#treenode"><code>TreeNode</code></a>&lt;<a href="../../../interfaces/features/trees/tree.TreeNodeOptions"><code>TreeNodeOptions</code></a>&gt;, { <code>canClick</code>: <a href="./../../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code>&gt; ; <code>visibility</code>: <a href="./../../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="../../../enums/features/feature.Visibility"><code>Visibility</code></a>&gt; }&gt;</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/1f4676d/src/features/trees/tree.ts#L60" target="_blank" rel="noopener noreferrer">profectus/src/features/trees/tree.ts:60</a></p><hr><h3 id="resetpropagation" tabindex="-1">ResetPropagation <a class="header-anchor" href="#resetpropagation" aria-hidden="true">#</a></h3><p>\u01AC <strong>ResetPropagation</strong>: (<code>tree</code>: <a href="./tree.html#generictree"><code>GenericTree</code></a>, <code>resettingNode</code>: <a href="./tree.html#generictreenode"><code>GenericTreeNode</code></a>) =&gt; <code>void</code></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a></h4><p>\u25B8 (<code>tree</code>, <code>resettingNode</code>): <code>void</code></p><h5 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>tree</code></td><td style="text-align:left;"><a href="./tree.html#generictree"><code>GenericTree</code></a></td></tr><tr><td style="text-align:left;"><code>resettingNode</code></td><td style="text-align:left;"><a href="./tree.html#generictreenode"><code>GenericTreeNode</code></a></td></tr></tbody></table><h5 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h5><p><code>void</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/1f4676d/src/features/trees/tree.ts#L224" target="_blank" rel="noopener noreferrer">profectus/src/features/trees/tree.ts:224</a></p><hr><h3 id="tree" tabindex="-1">Tree <a class="header-anchor" href="#tree" aria-hidden="true">#</a></h3><p>\u01AC <strong>Tree</strong>&lt;<code>T</code>&gt;: <a href="./../feature.html#replace"><code>Replace</code></a>&lt;<code>T</code> &amp; <a href="../../../interfaces/features/trees/tree.BaseTree"><code>BaseTree</code></a>, { <code>branches</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;branches&quot;</code>]&gt; ; <code>leftSideNodes</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;leftSideNodes&quot;</code>]&gt; ; <code>nodes</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;nodes&quot;</code>]&gt; ; <code>rightSideNodes</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;rightSideNodes&quot;</code>]&gt; ; <code>visibility</code>: <a href="./../../util/computed.html#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;visibility&quot;</code>], <a href="./../../../enums/features/feature.Visibility.html#visible"><code>Visible</code></a>&gt; }&gt;</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../../interfaces/features/trees/tree.TreeOptions"><code>TreeOptions</code></a></td></tr></tbody></table><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/1f4676d/src/features/trees/tree.ts#L164" target="_blank" rel="noopener noreferrer">profectus/src/features/trees/tree.ts:164</a></p><hr><h3 id="treenode" tabindex="-1">TreeNode <a class="header-anchor" href="#treenode" aria-hidden="true">#</a></h3><p>\u01AC <strong>TreeNode</strong>&lt;<code>T</code>&gt;: <a href="./../feature.html#replace"><code>Replace</code></a>&lt;<code>T</code> &amp; <a href="../../../interfaces/features/trees/tree.BaseTreeNode"><code>BaseTreeNode</code></a>, { <code>canClick</code>: <a href="./../../util/computed.html#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;canClick&quot;</code>], <code>true</code>&gt; ; <code>classes</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;classes&quot;</code>]&gt; ; <code>color</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;color&quot;</code>]&gt; ; <code>display</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;display&quot;</code>]&gt; ; <code>glowColor</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;glowColor&quot;</code>]&gt; ; <code>mark</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;mark&quot;</code>]&gt; ; <code>style</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;style&quot;</code>]&gt; ; <code>visibility</code>: <a href="./../../util/computed.html#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;visibility&quot;</code>], <a href="./../../../enums/features/feature.Visibility.html#visible"><code>Visible</code></a>&gt; }&gt;</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../../interfaces/features/trees/tree.TreeNodeOptions"><code>TreeNodeOptions</code></a></td></tr></tbody></table><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/1f4676d/src/features/trees/tree.ts#L46" target="_blank" rel="noopener noreferrer">profectus/src/features/trees/tree.ts:46</a></p><h2 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-hidden="true">#</a></h2><h3 id="treenodetype" tabindex="-1">TreeNodeType <a class="header-anchor" href="#treenodetype" aria-hidden="true">#</a></h3><p>\u2022 <code>Const</code> <strong>TreeNodeType</strong>: typeof <a href="./tree.html#treenodetype"><code>TreeNodeType</code></a></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/1f4676d/src/features/trees/tree.ts#L22" target="_blank" rel="noopener noreferrer">profectus/src/features/trees/tree.ts:22</a></p><hr><h3 id="treetype" tabindex="-1">TreeType <a class="header-anchor" href="#treetype" aria-hidden="true">#</a></h3><p>\u2022 <code>Const</code> <strong>TreeType</strong>: typeof <a href="./tree.html#treetype"><code>TreeType</code></a></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/1f4676d/src/features/trees/tree.ts#L23" target="_blank" rel="noopener noreferrer">profectus/src/features/trees/tree.ts:23</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h2><h3 id="branchedresetpropagation" tabindex="-1">branchedResetPropagation <a class="header-anchor" href="#branchedresetpropagation" aria-hidden="true">#</a></h3><p>\u25B8 <strong>branchedResetPropagation</strong>(<code>tree</code>, <code>resettingNode</code>): <code>void</code></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>tree</code></td><td style="text-align:left;"><a href="./tree.html#generictree"><code>GenericTree</code></a></td></tr><tr><td style="text-align:left;"><code>resettingNode</code></td><td style="text-align:left;"><a href="./tree.html#generictreenode"><code>GenericTreeNode</code></a></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><code>void</code></p><hr><h3 id="createresourcetooltip" tabindex="-1">createResourceTooltip <a class="header-anchor" href="#createresourcetooltip" aria-hidden="true">#</a></h3><p>\u25B8 <strong>createResourceTooltip</strong>(<code>resource</code>, <code>requiredResource?</code>, <code>requirement?</code>): <code>Ref</code>&lt;<code>string</code>&gt;</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>resource</code></td><td style="text-align:left;"><a href="../../../interfaces/features/resources/resource.Resource"><code>Resource</code></a>&lt;<a href="./../../lib/break_eternity.html#decimalsource"><code>DecimalSource</code></a>&gt;</td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>requiredResource</code></td><td style="text-align:left;"><code>null</code> | <a href="../../../interfaces/features/resources/resource.Resource"><code>Resource</code></a>&lt;<a href="./../../lib/break_eternity.html#decimalsource"><code>DecimalSource</code></a>&gt;</td><td style="text-align:left;"><code>null</code></td></tr><tr><td style="text-align:left;"><code>requirement</code></td><td style="text-align:left;"><a href="./../../util/computed.html#computable"><code>Computable</code></a>&lt;<a href="./../../lib/break_eternity.html#decimalsource"><code>DecimalSource</code></a>&gt;</td><td style="text-align:left;"><code>0</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p><code>Ref</code>&lt;<code>string</code>&gt;</p><hr><h3 id="createtree" tabindex="-1">createTree <a class="header-anchor" href="#createtree" aria-hidden="true">#</a></h3><p>\u25B8 <strong>createTree</strong>&lt;<code>T</code>&gt;(<code>optionsFunc</code>): <a href="./tree.html#tree"><code>Tree</code></a>&lt;<code>T</code>&gt;</p><h4 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../../interfaces/features/trees/tree.TreeOptions"><code>TreeOptions</code></a></td></tr></tbody></table><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>optionsFunc</code></td><td style="text-align:left;"><a href="./../feature.html#optionsfunc"><code>OptionsFunc</code></a>&lt;<code>T</code>, <a href="../../../interfaces/features/trees/tree.BaseTree"><code>BaseTree</code></a>, <a href="./tree.html#generictree"><code>GenericTree</code></a>&gt;</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-hidden="true">#</a></h4><p><a href="./tree.html#tree"><code>Tree</code></a>&lt;<code>T</code>&gt;</p><hr><h3 id="createtreenode" tabindex="-1">createTreeNode <a class="header-anchor" href="#createtreenode" aria-hidden="true">#</a></h3><p>\u25B8 <strong>createTreeNode</strong>&lt;<code>T</code>&gt;(<code>optionsFunc?</code>): <a href="./tree.html#treenode"><code>TreeNode</code></a>&lt;<code>T</code>&gt;</p><h4 id="type-parameters-3" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-3" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../../interfaces/features/trees/tree.TreeNodeOptions"><code>TreeNodeOptions</code></a></td></tr></tbody></table><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>optionsFunc?</code></td><td style="text-align:left;"><a href="./../feature.html#optionsfunc"><code>OptionsFunc</code></a>&lt;<code>T</code>, <a href="../../../interfaces/features/trees/tree.BaseTreeNode"><code>BaseTreeNode</code></a>, <a href="./tree.html#generictreenode"><code>GenericTreeNode</code></a>&gt;</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-hidden="true">#</a></h4><p><a href="./tree.html#treenode"><code>TreeNode</code></a>&lt;<code>T</code>&gt;</p><hr><h3 id="defaultresetpropagation" tabindex="-1">defaultResetPropagation <a class="header-anchor" href="#defaultresetpropagation" aria-hidden="true">#</a></h3><p>\u25B8 <strong>defaultResetPropagation</strong>(<code>tree</code>, <code>resettingNode</code>): <code>void</code></p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>tree</code></td><td style="text-align:left;"><a href="./tree.html#generictree"><code>GenericTree</code></a></td></tr><tr><td style="text-align:left;"><code>resettingNode</code></td><td style="text-align:left;"><a href="./tree.html#generictreenode"><code>GenericTreeNode</code></a></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-hidden="true">#</a></h4><p><code>void</code></p><hr><h3 id="invertedresetpropagation" tabindex="-1">invertedResetPropagation <a class="header-anchor" href="#invertedresetpropagation" aria-hidden="true">#</a></h3><p>\u25B8 <strong>invertedResetPropagation</strong>(<code>tree</code>, <code>resettingNode</code>): <code>void</code></p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>tree</code></td><td style="text-align:left;"><a href="./tree.html#generictree"><code>GenericTree</code></a></td></tr><tr><td style="text-align:left;"><code>resettingNode</code></td><td style="text-align:left;"><a href="./tree.html#generictreenode"><code>GenericTreeNode</code></a></td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-hidden="true">#</a></h4><p><code>void</code></p>',96),c=[o];function i(l,s,n,h,f,p){return r(),t("div",null,c)}var b=e(d,[["render",i]]);export{g as __pageData,b as default};
