import{_ as e,c as t,o as a,a as r}from"./app.ab34650d.js";const g=JSON.parse('{"title":"Module: features/feature","description":"","frontmatter":{"editLink":false},"headers":[{"level":2,"title":"Enumerations","slug":"enumerations"},{"level":2,"title":"Type Aliases","slug":"type-aliases"},{"level":3,"title":"CoercableComponent","slug":"coercablecomponent"},{"level":3,"title":"GenericComponent","slug":"genericcomponent"},{"level":3,"title":"JSXFunction","slug":"jsxfunction"},{"level":3,"title":"OptionsFunc","slug":"optionsfunc"},{"level":3,"title":"Replace","slug":"replace"},{"level":3,"title":"StyleValue","slug":"stylevalue"},{"level":2,"title":"Variables","slug":"variables"},{"level":3,"title":"Component","slug":"component"},{"level":3,"title":"GatherProps","slug":"gatherprops"},{"level":2,"title":"Functions","slug":"functions"},{"level":3,"title":"excludeFeatures","slug":"excludefeatures"},{"level":3,"title":"findFeatures","slug":"findfeatures"},{"level":3,"title":"getUniqueID","slug":"getuniqueid"},{"level":3,"title":"jsx","slug":"jsx"},{"level":3,"title":"setDefault","slug":"setdefault"},{"level":3,"title":"showIf","slug":"showif"}],"relativePath":"api/modules/features/feature.md","lastUpdated":null}'),d={name:"api/modules/features/feature.md"},o=r('<h1 id="module-features-feature" tabindex="-1">Module: features/feature <a class="header-anchor" href="#module-features-feature" aria-hidden="true">#</a></h1><h2 id="enumerations" tabindex="-1">Enumerations <a class="header-anchor" href="#enumerations" aria-hidden="true">#</a></h2><ul><li><a href="../../enums/features/feature.Visibility">Visibility</a></li></ul><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-hidden="true">#</a></h2><h3 id="coercablecomponent" tabindex="-1">CoercableComponent <a class="header-anchor" href="#coercablecomponent" aria-hidden="true">#</a></h3><p>\u01AC <strong>CoercableComponent</strong>: <code>string</code> | <code>DefineComponent</code> | <a href="./feature.html#jsxfunction"><code>JSXFunction</code></a></p><p>Any value that can be coerced into (or is) a vue component</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/5b3e6e3/src/features/feature.ts#L25" target="_blank" rel="noopener noreferrer">profectus/src/features/feature.ts:25</a></p><hr><h3 id="genericcomponent" tabindex="-1">GenericComponent <a class="header-anchor" href="#genericcomponent" aria-hidden="true">#</a></h3><p>\u01AC <strong>GenericComponent</strong>: <code>DefineComponent</code>&lt;<code>any</code>, <code>any</code>, <code>any</code>&gt;</p><p>A type that refers to any vue component</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/5b3e6e3/src/features/feature.ts#L35" target="_blank" rel="noopener noreferrer">profectus/src/features/feature.ts:35</a></p><hr><h3 id="jsxfunction" tabindex="-1">JSXFunction <a class="header-anchor" href="#jsxfunction" aria-hidden="true">#</a></h3><p>\u01AC <strong>JSXFunction</strong>: () =&gt; <code>JSX.Element</code> &amp; { <code>[DoNotCache]</code>: <code>true</code> }</p><p>A type referring to a function that returns JSX and is marked that it shouldn&#39;t be wrapped in a ComputedRef</p><p><strong><code>See</code></strong></p><p><a href="./feature.html#jsx">jsx</a></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/5b3e6e3/src/features/feature.ts#L21" target="_blank" rel="noopener noreferrer">profectus/src/features/feature.ts:21</a></p><hr><h3 id="optionsfunc" tabindex="-1">OptionsFunc <a class="header-anchor" href="#optionsfunc" aria-hidden="true">#</a></h3><p>\u01AC <strong>OptionsFunc</strong>&lt;<code>T</code>, <code>R</code>, <code>S</code>&gt;: () =&gt; <code>T</code> &amp; <code>Partial</code>&lt;<code>R</code>&gt; &amp; <code>ThisType</code>&lt;<code>T</code> &amp; <code>S</code>&gt;</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>R</code></td><td style="text-align:left;"><code>Record</code>&lt;<code>string</code>, <code>unknown</code>&gt;</td></tr><tr><td style="text-align:left;"><code>S</code></td><td style="text-align:left;"><code>R</code></td></tr></tbody></table><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a></h4><p>\u25B8 (): <code>T</code> &amp; <code>Partial</code>&lt;<code>R</code>&gt; &amp; <code>ThisType</code>&lt;<code>T</code> &amp; <code>S</code>&gt;</p><p>Utility function for a function that returns an object of a given type, with &quot;this&quot; bound to what the type will eventually be processed into. Intended for making lazily evaluated objects.</p><h5 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h5><p><code>T</code> &amp; <code>Partial</code>&lt;<code>R</code>&gt; &amp; <code>ThisType</code>&lt;<code>T</code> &amp; <code>S</code>&gt;</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/5b3e6e3/src/features/feature.ts#L45" target="_blank" rel="noopener noreferrer">profectus/src/features/feature.ts:45</a></p><hr><h3 id="replace" tabindex="-1">Replace <a class="header-anchor" href="#replace" aria-hidden="true">#</a></h3><p>\u01AC <strong>Replace</strong>&lt;<code>T</code>, <code>S</code>&gt;: <code>S</code> &amp; <code>Omit</code>&lt;<code>T</code>, keyof <code>S</code>&gt;</p><p>Utility type that is S, with any properties from T that aren&#39;t already present in S</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>S</code></td></tr></tbody></table><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/5b3e6e3/src/features/feature.ts#L38" target="_blank" rel="noopener noreferrer">profectus/src/features/feature.ts:38</a></p><hr><h3 id="stylevalue" tabindex="-1">StyleValue <a class="header-anchor" href="#stylevalue" aria-hidden="true">#</a></h3><p>\u01AC <strong>StyleValue</strong>: <code>string</code> | <code>CSSProperties</code> | (<code>string</code> | <code>CSSProperties</code>)[]</p><p>Any value that can be passed into an HTML element&#39;s style attribute. Note that Profectus uses its own StyleValue and CSSProperties that are extended, in order to have additional properties added to them, such as variable CSS variables.</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/5b3e6e3/src/features/feature.ts#L31" target="_blank" rel="noopener noreferrer">profectus/src/features/feature.ts:31</a></p><h2 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-hidden="true">#</a></h2><h3 id="component" tabindex="-1">Component <a class="header-anchor" href="#component" aria-hidden="true">#</a></h3><p>\u2022 <code>Const</code> <strong>Component</strong>: typeof <a href="./feature.html#component"><code>Component</code></a></p><p>A symbol to use as a key for a vue component a feature can be rendered with</p><p><strong><code>See</code></strong></p><p><a href="../../interfaces/util/vue.VueFeature">VueFeature</a></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/5b3e6e3/src/features/feature.ts#L10" target="_blank" rel="noopener noreferrer">profectus/src/features/feature.ts:10</a></p><hr><h3 id="gatherprops" tabindex="-1">GatherProps <a class="header-anchor" href="#gatherprops" aria-hidden="true">#</a></h3><p>\u2022 <code>Const</code> <strong>GatherProps</strong>: typeof <a href="./feature.html#gatherprops"><code>GatherProps</code></a></p><p>A symbol to use as a key for a prop gathering function that a feature can use to send to its component</p><p><strong><code>See</code></strong></p><p><a href="../../interfaces/util/vue.VueFeature">VueFeature</a></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/5b3e6e3/src/features/feature.ts#L15" target="_blank" rel="noopener noreferrer">profectus/src/features/feature.ts:15</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h2><h3 id="excludefeatures" tabindex="-1">excludeFeatures <a class="header-anchor" href="#excludefeatures" aria-hidden="true">#</a></h3><p>\u25B8 <strong>excludeFeatures</strong>(<code>obj</code>, ...<code>types</code>): <code>unknown</code>[]</p><p>Traverses an object and returns all features that are <em>not</em> any of the given types. Features are any object with a &quot;type&quot; property that has a symbol value.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>obj</code></td><td style="text-align:left;"><code>Record</code>&lt;<code>string</code>, <code>unknown</code>&gt;</td><td style="text-align:left;">The object to traverse</td></tr><tr><td style="text-align:left;"><code>...types</code></td><td style="text-align:left;"><code>symbol</code>[]</td><td style="text-align:left;">The feature types that will be skipped over</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><code>unknown</code>[]</p><hr><h3 id="findfeatures" tabindex="-1">findFeatures <a class="header-anchor" href="#findfeatures" aria-hidden="true">#</a></h3><p>\u25B8 <strong>findFeatures</strong>(<code>obj</code>, ...<code>types</code>): <code>unknown</code>[]</p><p>Traverses an object and returns all features of the given type(s)</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>obj</code></td><td style="text-align:left;"><code>Record</code>&lt;<code>string</code>, <code>unknown</code>&gt;</td><td style="text-align:left;">The object to traverse</td></tr><tr><td style="text-align:left;"><code>...types</code></td><td style="text-align:left;"><code>symbol</code>[]</td><td style="text-align:left;">The feature types that will be searched for</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p><code>unknown</code>[]</p><hr><h3 id="getuniqueid" tabindex="-1">getUniqueID <a class="header-anchor" href="#getuniqueid" aria-hidden="true">#</a></h3><p>\u25B8 <strong>getUniqueID</strong>(<code>prefix?</code>): <code>string</code></p><p>Gets a unique ID to give to each feature, used for any sort of system that needs to identify elements in the DOM rather than references to the feature itself. (For example, branches) IDs are guaranteed unique, but <em>NOT</em> persistent - they likely will change between updates.</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>prefix</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>&quot;feature-&quot;</code></td><td style="text-align:left;">A string to prepend to the id to make it more readable in the inspector tools</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-hidden="true">#</a></h4><p><code>string</code></p><hr><h3 id="jsx" tabindex="-1">jsx <a class="header-anchor" href="#jsx" aria-hidden="true">#</a></h3><p>\u25B8 <strong>jsx</strong>(<code>func</code>): <a href="./feature.html#jsxfunction"><code>JSXFunction</code></a></p><p>Takes a function and marks it as JSX so it won&#39;t get auto-wrapped into a ComputedRef. The function may also return empty string as empty JSX tags cause issues.</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>func</code></td><td style="text-align:left;">() =&gt; <code>&quot;&quot;</code> | <code>Element</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-hidden="true">#</a></h4><p><a href="./feature.html#jsxfunction"><code>JSXFunction</code></a></p><hr><h3 id="setdefault" tabindex="-1">setDefault <a class="header-anchor" href="#setdefault" aria-hidden="true">#</a></h3><p>\u25B8 <strong>setDefault</strong>&lt;<code>T</code>, <code>K</code>&gt;(<code>object</code>, <code>key</code>, <code>value</code>): asserts <code>object</code> is <code>Exclude</code>&lt;<code>T</code>, <code>K</code>&gt; &amp; <code>Required</code>&lt;<code>Pick</code>&lt;<code>T</code>, <code>K</code>&gt;&gt;</p><p>Utility function to set a property on an object if and only if it doesn&#39;t already exist</p><h4 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>K</code></td><td style="text-align:left;">extends <code>string</code> | <code>number</code> | <code>symbol</code></td></tr></tbody></table><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>object</code></td><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>key</code></td><td style="text-align:left;"><code>K</code></td></tr><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><code>T</code>[<code>K</code>]</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-hidden="true">#</a></h4><p>asserts <code>object</code> is <code>Exclude</code>&lt;<code>T</code>, <code>K</code>&gt; &amp; <code>Required</code>&lt;<code>Pick</code>&lt;<code>T</code>, <code>K</code>&gt;&gt;</p><hr><h3 id="showif" tabindex="-1">showIf <a class="header-anchor" href="#showif" aria-hidden="true">#</a></h3><p>\u25B8 <strong>showIf</strong>(<code>condition</code>, <code>otherwise?</code>): <a href="../../enums/features/feature.Visibility"><code>Visibility</code></a></p><p>Utility function to convert a boolean value into a Visbility value</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>condition</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>otherwise</code></td><td style="text-align:left;"><a href="../../enums/features/feature.Visibility"><code>Visibility</code></a></td><td style="text-align:left;"><code>Visibility.None</code></td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-hidden="true">#</a></h4><p><a href="../../enums/features/feature.Visibility"><code>Visibility</code></a></p>',115),n=[o];function s(i,c,l,h,u,f){return a(),t("div",null,n)}var y=e(d,[["render",s]]);export{g as __pageData,y as default};
