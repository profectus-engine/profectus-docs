import{_ as e,c as t,o as r,a as o}from"./app.7cfe4cf0.js";const g='{"title":"Interface: BaseTree","description":"","frontmatter":{},"headers":[{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"[Component]","slug":"component"},{"level":3,"title":"id","slug":"id"},{"level":3,"title":"isResetting","slug":"isresetting"},{"level":3,"title":"links","slug":"links"},{"level":3,"title":"resettingNode","slug":"resettingnode"},{"level":3,"title":"type","slug":"type"},{"level":2,"title":"Methods","slug":"methods"},{"level":3,"title":"[GatherProps]","slug":"gatherprops"},{"level":3,"title":"reset","slug":"reset"}],"relativePath":"api/interfaces/features/trees/tree.BaseTree.md"}',d={},c=o('<h1 id="interface-basetree" tabindex="-1">Interface: BaseTree <a class="header-anchor" href="#interface-basetree" aria-hidden="true">#</a></h1><p><a href="./../../../modules/features/trees/tree.html">features/trees/tree</a>.BaseTree</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><h3 id="component" tabindex="-1">[Component] <a class="header-anchor" href="#component" aria-hidden="true">#</a></h3><p>\u2022 <strong>[Component]</strong>: <code>DefineComponent</code>&lt;{ <code>branches</code>: <code>PropType</code>&lt;<a href="./../../../modules/util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./tree.TreeBranch"><code>TreeBranch</code></a>[]&gt;&gt; ; <code>leftSideNodes</code>: <code>PropType</code>&lt;<a href="./../../../modules/util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./../../../modules/features/trees/tree.html#generictreenode"><code>GenericTreeNode</code></a>[]&gt;&gt; ; <code>nodes</code>: { <code>required</code>: <code>true</code> = true; <code>type</code>: <code>PropType</code>&lt;<a href="./../../../modules/util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./../../../modules/features/trees/tree.html#generictreenode"><code>GenericTreeNode</code></a>[][]&gt;&gt; } ; <code>rightSideNodes</code>: <code>PropType</code>&lt;<a href="./../../../modules/util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./../../../modules/features/trees/tree.html#generictreenode"><code>GenericTreeNode</code></a>[]&gt;&gt; }, { <code>leftNodesComp</code>: <code>ShallowRef</code>&lt;<code>undefined</code> | <code>&quot;&quot;</code> | <code>Component</code>&lt;<code>any</code>, <code>any</code>, <code>any</code>, <code>ComputedOptions</code>, <code>MethodOptions</code>&gt;&gt; ; <code>nodesComp</code>: <code>ShallowRef</code>&lt;<code>undefined</code> | <code>&quot;&quot;</code> | <code>Component</code>&lt;<code>any</code>, <code>any</code>, <code>any</code>, <code>ComputedOptions</code>, <code>MethodOptions</code>&gt;&gt; ; <code>rightNodesComp</code>: <code>ShallowRef</code>&lt;<code>undefined</code> | <code>&quot;&quot;</code> | <code>Component</code>&lt;<code>any</code>, <code>any</code>, <code>any</code>, <code>ComputedOptions</code>, <code>MethodOptions</code>&gt;&gt; ; <code>unref</code>: &lt;T&gt;(<code>ref</code>: <code>T</code> | <code>Ref</code>&lt;<code>T</code>&gt;) =&gt; <code>T</code> }, <code>unknown</code>, {}, {}, <code>ComponentOptionsMixin</code>, <code>ComponentOptionsMixin</code>, <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt;, <code>string</code>, <code>PublicProps</code>, <code>Readonly</code>&lt;<code>ExtractPropTypes</code>&lt;{ <code>branches</code>: <code>PropType</code>&lt;<a href="./../../../modules/util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./tree.TreeBranch"><code>TreeBranch</code></a>[]&gt;&gt; ; <code>leftSideNodes</code>: <code>PropType</code>&lt;<a href="./../../../modules/util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./../../../modules/features/trees/tree.html#generictreenode"><code>GenericTreeNode</code></a>[]&gt;&gt; ; <code>nodes</code>: { <code>required</code>: <code>true</code> = true; <code>type</code>: <code>PropType</code>&lt;<a href="./../../../modules/util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./../../../modules/features/trees/tree.html#generictreenode"><code>GenericTreeNode</code></a>[][]&gt;&gt; } ; <code>rightSideNodes</code>: <code>PropType</code>&lt;<a href="./../../../modules/util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./../../../modules/features/trees/tree.html#generictreenode"><code>GenericTreeNode</code></a>[]&gt;&gt; }&gt;&gt;, {}&gt;</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/0b8210c/src/features/trees/tree.ts#L160" target="_blank" rel="noopener noreferrer">profectus/src/features/trees/tree.ts:160</a></p><hr><h3 id="id" tabindex="-1">id <a class="header-anchor" href="#id" aria-hidden="true">#</a></h3><p>\u2022 <strong>id</strong>: <code>string</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/0b8210c/src/features/trees/tree.ts#L154" target="_blank" rel="noopener noreferrer">profectus/src/features/trees/tree.ts:154</a></p><hr><h3 id="isresetting" tabindex="-1">isResetting <a class="header-anchor" href="#isresetting" aria-hidden="true">#</a></h3><p>\u2022 <strong>isResetting</strong>: <code>Ref</code>&lt;<code>boolean</code>&gt;</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/0b8210c/src/features/trees/tree.ts#L157" target="_blank" rel="noopener noreferrer">profectus/src/features/trees/tree.ts:157</a></p><hr><h3 id="links" tabindex="-1">links <a class="header-anchor" href="#links" aria-hidden="true">#</a></h3><p>\u2022 <strong>links</strong>: <code>Ref</code>&lt;<a href="../links/links.Link"><code>Link</code></a>[]&gt;</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/0b8210c/src/features/trees/tree.ts#L155" target="_blank" rel="noopener noreferrer">profectus/src/features/trees/tree.ts:155</a></p><hr><h3 id="resettingnode" tabindex="-1">resettingNode <a class="header-anchor" href="#resettingnode" aria-hidden="true">#</a></h3><p>\u2022 <strong>resettingNode</strong>: <code>Ref</code>&lt;<code>null</code> | <a href="./../../../modules/features/trees/tree.html#generictreenode"><code>GenericTreeNode</code></a>&gt;</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/0b8210c/src/features/trees/tree.ts#L158" target="_blank" rel="noopener noreferrer">profectus/src/features/trees/tree.ts:158</a></p><hr><h3 id="type" tabindex="-1">type <a class="header-anchor" href="#type" aria-hidden="true">#</a></h3><p>\u2022 <strong>type</strong>: typeof <a href="./../../../modules/features/trees/tree.html#treetype"><code>TreeType</code></a></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/0b8210c/src/features/trees/tree.ts#L159" target="_blank" rel="noopener noreferrer">profectus/src/features/trees/tree.ts:159</a></p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="gatherprops" tabindex="-1">[GatherProps] <a class="header-anchor" href="#gatherprops" aria-hidden="true">#</a></h3><p>\u25B8 <strong>[GatherProps]</strong>(): <code>Record</code>&lt;<code>string</code>, <code>unknown</code>&gt;</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><code>Record</code>&lt;<code>string</code>, <code>unknown</code>&gt;</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/0b8210c/src/features/trees/tree.ts#L161" target="_blank" rel="noopener noreferrer">profectus/src/features/trees/tree.ts:161</a></p><hr><h3 id="reset" tabindex="-1">reset <a class="header-anchor" href="#reset" aria-hidden="true">#</a></h3><p>\u25B8 <strong>reset</strong>(<code>node</code>): <code>void</code></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>node</code></td><td style="text-align:left;"><a href="./../../../modules/features/trees/tree.html#generictreenode"><code>GenericTreeNode</code></a></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/0b8210c/src/features/trees/tree.ts#L156" target="_blank" rel="noopener noreferrer">profectus/src/features/trees/tree.ts:156</a></p>',48),a=[c];function s(n,i,h,l,p,u){return r(),t("div",null,a)}var m=e(d,[["render",s]]);export{g as __pageData,m as default};