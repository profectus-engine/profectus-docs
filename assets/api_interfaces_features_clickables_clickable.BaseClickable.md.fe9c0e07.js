import{_ as e,c as o,o as c,a as d}from"./app.7cfe4cf0.js";const f='{"title":"Interface: BaseClickable","description":"","frontmatter":{},"headers":[{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"[Component]","slug":"component"},{"level":3,"title":"id","slug":"id"},{"level":3,"title":"type","slug":"type"},{"level":2,"title":"Methods","slug":"methods"},{"level":3,"title":"[GatherProps]","slug":"gatherprops"}],"relativePath":"api/interfaces/features/clickables/clickable.BaseClickable.md"}',t={},r=d('<h1 id="interface-baseclickable" tabindex="-1">Interface: BaseClickable <a class="header-anchor" href="#interface-baseclickable" aria-hidden="true">#</a></h1><p><a href="./../../../modules/features/clickables/clickable.html">features/clickables/clickable</a>.BaseClickable</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><h3 id="component" tabindex="-1">[Component] <a class="header-anchor" href="#component" aria-hidden="true">#</a></h3><p>\u2022 <strong>[Component]</strong>: <code>DefineComponent</code>&lt;{ <code>canClick</code>: { <code>required</code>: <code>true</code> = true; <code>type</code>: <code>PropType</code>&lt;<a href="./../../../modules/util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code>&gt;&gt; } ; <code>classes</code>: <code>PropType</code>&lt;<a href="./../../../modules/util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>Record</code>&lt;<code>string</code>, <code>boolean</code>&gt;&gt;&gt; ; <code>display</code>: { <code>required</code>: <code>true</code> = true; <code>type</code>: <code>PropType</code>&lt;<a href="./../../../modules/util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>undefined</code> | <a href="./../../../modules/features/feature.html#coercablecomponent"><code>CoercableComponent</code></a> | { <code>description</code>: <a href="./../../../modules/features/feature.html#coercablecomponent"><code>CoercableComponent</code></a> ; <code>title?</code>: <a href="./../../../modules/features/feature.html#coercablecomponent"><code>CoercableComponent</code></a> } | { <code>description</code>: <a href="./../../../modules/features/feature.html#coercablecomponent"><code>CoercableComponent</code></a> ; <code>title?</code>: <a href="./../../../modules/features/feature.html#coercablecomponent"><code>CoercableComponent</code></a> }&gt;&gt; } ; <code>id</code>: { <code>required</code>: <code>true</code> = true; <code>type</code>: <code>StringConstructor</code> = String } ; <code>mark</code>: <code>PropType</code>&lt;<a href="./../../../modules/util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>string</code> | <code>boolean</code>&gt;&gt; ; <code>onClick</code>: <code>PropType</code>&lt;(<code>e?</code>: <code>MouseEvent</code> | <code>TouchEvent</code>) =&gt; <code>void</code>&gt; ; <code>onHold</code>: <code>PropType</code>&lt;<code>VoidFunction</code>&gt; ; <code>small</code>: <code>BooleanConstructor</code> = Boolean; <code>style</code>: <code>PropType</code>&lt;<a href="./../../../modules/util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./../../../modules/features/feature.html#stylevalue"><code>StyleValue</code></a>&gt;&gt; ; <code>visibility</code>: { <code>required</code>: <code>true</code> = true; <code>type</code>: <code>PropType</code>&lt;<a href="./../../../modules/util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="../../../enums/features/feature.Visibility"><code>Visibility</code></a>&gt;&gt; } }, { <code>Visibility</code>: typeof <a href="../../../enums/features/feature.Visibility"><code>Visibility</code></a> ; <code>comp</code>: <code>ShallowRef</code>&lt;<code>string</code> | <code>Component</code>&lt;<code>any</code>, <code>any</code>, <code>any</code>, <code>ComputedOptions</code>, <code>MethodOptions</code>&gt;&gt; ; <code>start</code>: (<code>e</code>: <code>MouseEvent</code> | <code>TouchEvent</code>) =&gt; <code>void</code> ; <code>stop</code>: <code>VoidFunction</code> ; <code>unref</code>: &lt;T&gt;(<code>ref</code>: <code>T</code> | <code>Ref</code>&lt;<code>T</code>&gt;) =&gt; <code>T</code> }, <code>unknown</code>, {}, {}, <code>ComponentOptionsMixin</code>, <code>ComponentOptionsMixin</code>, <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt;, <code>string</code>, <code>PublicProps</code>, <code>Readonly</code>&lt;<code>ExtractPropTypes</code>&lt;{ <code>canClick</code>: { <code>required</code>: <code>true</code> = true; <code>type</code>: <code>PropType</code>&lt;<a href="./../../../modules/util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code>&gt;&gt; } ; <code>classes</code>: <code>PropType</code>&lt;<a href="./../../../modules/util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>Record</code>&lt;<code>string</code>, <code>boolean</code>&gt;&gt;&gt; ; <code>display</code>: { <code>required</code>: <code>true</code> = true; <code>type</code>: <code>PropType</code>&lt;<a href="./../../../modules/util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>undefined</code> | <a href="./../../../modules/features/feature.html#coercablecomponent"><code>CoercableComponent</code></a> | { <code>description</code>: <a href="./../../../modules/features/feature.html#coercablecomponent"><code>CoercableComponent</code></a> ; <code>title?</code>: <a href="./../../../modules/features/feature.html#coercablecomponent"><code>CoercableComponent</code></a> } | { <code>description</code>: <a href="./../../../modules/features/feature.html#coercablecomponent"><code>CoercableComponent</code></a> ; <code>title?</code>: <a href="./../../../modules/features/feature.html#coercablecomponent"><code>CoercableComponent</code></a> }&gt;&gt; } ; <code>id</code>: { <code>required</code>: <code>true</code> = true; <code>type</code>: <code>StringConstructor</code> = String } ; <code>mark</code>: <code>PropType</code>&lt;<a href="./../../../modules/util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>string</code> | <code>boolean</code>&gt;&gt; ; <code>onClick</code>: <code>PropType</code>&lt;(<code>e?</code>: <code>MouseEvent</code> | <code>TouchEvent</code>) =&gt; <code>void</code>&gt; ; <code>onHold</code>: <code>PropType</code>&lt;<code>VoidFunction</code>&gt; ; <code>small</code>: <code>BooleanConstructor</code> = Boolean; <code>style</code>: <code>PropType</code>&lt;<a href="./../../../modules/util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./../../../modules/features/feature.html#stylevalue"><code>StyleValue</code></a>&gt;&gt; ; <code>visibility</code>: { <code>required</code>: <code>true</code> = true; <code>type</code>: <code>PropType</code>&lt;<a href="./../../../modules/util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="../../../enums/features/feature.Visibility"><code>Visibility</code></a>&gt;&gt; } }&gt;&gt;, { <code>small</code>: <code>boolean</code> }&gt;</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/0b8210c/src/features/clickables/clickable.ts#L39" target="_blank" rel="noopener noreferrer">profectus/src/features/clickables/clickable.ts:39</a></p><hr><h3 id="id" tabindex="-1">id <a class="header-anchor" href="#id" aria-hidden="true">#</a></h3><p>\u2022 <strong>id</strong>: <code>string</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/0b8210c/src/features/clickables/clickable.ts#L37" target="_blank" rel="noopener noreferrer">profectus/src/features/clickables/clickable.ts:37</a></p><hr><h3 id="type" tabindex="-1">type <a class="header-anchor" href="#type" aria-hidden="true">#</a></h3><p>\u2022 <strong>type</strong>: typeof <a href="./../../../modules/features/clickables/clickable.html#clickabletype"><code>ClickableType</code></a></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/0b8210c/src/features/clickables/clickable.ts#L38" target="_blank" rel="noopener noreferrer">profectus/src/features/clickables/clickable.ts:38</a></p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="gatherprops" tabindex="-1">[GatherProps] <a class="header-anchor" href="#gatherprops" aria-hidden="true">#</a></h3><p>\u25B8 <strong>[GatherProps]</strong>(): <code>Record</code>&lt;<code>string</code>, <code>unknown</code>&gt;</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><code>Record</code>&lt;<code>string</code>, <code>unknown</code>&gt;</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/0b8210c/src/features/clickables/clickable.ts#L40" target="_blank" rel="noopener noreferrer">profectus/src/features/clickables/clickable.ts:40</a></p>',24),a=[r];function l(s,i,n,u,p,h){return c(),o("div",null,a)}var b=e(t,[["render",l]]);export{f as __pageData,b as default};