import{_ as e,c as t,o as a,N as r}from"./chunks/framework.0799945b.js";const b=JSON.parse('{"title":"Module: features/feature","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/modules/features/feature.md","lastUpdated":null}'),o={name:"api/modules/features/feature.md"},n=r('<h1 id="module-features-feature" tabindex="-1">Module: features/feature <a class="header-anchor" href="#module-features-feature" aria-label="Permalink to &quot;Module: features/feature&quot;">​</a></h1><h2 id="enumerations" tabindex="-1">Enumerations <a class="header-anchor" href="#enumerations" aria-label="Permalink to &quot;Enumerations&quot;">​</a></h2><h3 id="visibility" tabindex="-1">Visibility <a class="header-anchor" href="#visibility" aria-label="Permalink to &quot;Visibility&quot;">​</a></h3><p>• <strong>Visibility</strong>: <code>Object</code></p><p>Enum for what the visibility of a feature or component should be</p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>Hidden</code></td><td style="text-align:left;"><code>1</code></td><td style="text-align:left;">The feature or component should not appear but still take up space</td></tr><tr><td style="text-align:left;"><code>None</code></td><td style="text-align:left;"><code>2</code></td><td style="text-align:left;">The feature or component should not appear not take up space</td></tr><tr><td style="text-align:left;"><code>Visible</code></td><td style="text-align:left;"><code>0</code></td><td style="text-align:left;">The feature or component should be visible</td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/feature.ts#L61" target="_blank" rel="noreferrer">profectus/src/features/feature.ts:61</a></p><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="coercablecomponent" tabindex="-1">CoercableComponent <a class="header-anchor" href="#coercablecomponent" aria-label="Permalink to &quot;CoercableComponent&quot;">​</a></h3><p>Ƭ <strong>CoercableComponent</strong>: <code>string</code> | <code>DefineComponent</code> | <a href="./feature#jsxfunction"><code>JSXFunction</code></a></p><p>Any value that can be coerced into (or is) a vue component</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/feature.ts#L25" target="_blank" rel="noreferrer">profectus/src/features/feature.ts:25</a></p><hr><h3 id="genericcomponent" tabindex="-1">GenericComponent <a class="header-anchor" href="#genericcomponent" aria-label="Permalink to &quot;GenericComponent&quot;">​</a></h3><p>Ƭ <strong>GenericComponent</strong>: <code>DefineComponent</code>&lt;<code>any</code>, <code>any</code>, <code>any</code>&gt;</p><p>A type that refers to any vue component</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/feature.ts#L35" target="_blank" rel="noreferrer">profectus/src/features/feature.ts:35</a></p><hr><h3 id="jsxfunction" tabindex="-1">JSXFunction <a class="header-anchor" href="#jsxfunction" aria-label="Permalink to &quot;JSXFunction&quot;">​</a></h3><p>Ƭ <strong>JSXFunction</strong>: () =&gt; <code>JSX.Element</code> &amp; { <code>[DoNotCache]</code>: <code>true</code> }</p><p>A type referring to a function that returns JSX and is marked that it shouldn&#39;t be wrapped in a ComputedRef</p><p><strong><code>See</code></strong></p><p><a href="./feature#jsx">jsx</a></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/feature.ts#L21" target="_blank" rel="noreferrer">profectus/src/features/feature.ts:21</a></p><hr><h3 id="optionsfunc" tabindex="-1">OptionsFunc <a class="header-anchor" href="#optionsfunc" aria-label="Permalink to &quot;OptionsFunc&quot;">​</a></h3><p>Ƭ <strong>OptionsFunc</strong>&lt;<code>T</code>, <code>R</code>, <code>S</code>&gt;: () =&gt; <code>T</code> &amp; <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype" target="_blank" rel="noreferrer"><code>Partial</code></a>&lt;<code>R</code>&gt; &amp; <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#thistypetype" target="_blank" rel="noreferrer"><code>ThisType</code></a>&lt;<code>T</code> &amp; <code>S</code>&gt;</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>R</code></td><td style="text-align:left;"><a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type" target="_blank" rel="noreferrer"><code>Record</code></a>&lt;<code>string</code>, <code>unknown</code>&gt;</td></tr><tr><td style="text-align:left;"><code>S</code></td><td style="text-align:left;"><code>R</code></td></tr></tbody></table><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><p>▸ (): <code>T</code> &amp; <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype" target="_blank" rel="noreferrer"><code>Partial</code></a>&lt;<code>R</code>&gt; &amp; <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#thistypetype" target="_blank" rel="noreferrer"><code>ThisType</code></a>&lt;<code>T</code> &amp; <code>S</code>&gt;</p><p>Utility function for a function that returns an object of a given type, with &quot;this&quot; bound to what the type will eventually be processed into. Intended for making lazily evaluated objects.</p><h5 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>T</code> &amp; <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype" target="_blank" rel="noreferrer"><code>Partial</code></a>&lt;<code>R</code>&gt; &amp; <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#thistypetype" target="_blank" rel="noreferrer"><code>ThisType</code></a>&lt;<code>T</code> &amp; <code>S</code>&gt;</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/feature.ts#L45" target="_blank" rel="noreferrer">profectus/src/features/feature.ts:45</a></p><hr><h3 id="replace" tabindex="-1">Replace <a class="header-anchor" href="#replace" aria-label="Permalink to &quot;Replace&quot;">​</a></h3><p>Ƭ <strong>Replace</strong>&lt;<code>T</code>, <code>S</code>&gt;: <code>S</code> &amp; <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys" target="_blank" rel="noreferrer"><code>Omit</code></a>&lt;<code>T</code>, keyof <code>S</code>&gt;</p><p>Utility type that is S, with any properties from T that aren&#39;t already present in S</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>S</code></td></tr></tbody></table><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/feature.ts#L38" target="_blank" rel="noreferrer">profectus/src/features/feature.ts:38</a></p><hr><h3 id="stylevalue" tabindex="-1">StyleValue <a class="header-anchor" href="#stylevalue" aria-label="Permalink to &quot;StyleValue&quot;">​</a></h3><p>Ƭ <strong>StyleValue</strong>: <code>string</code> | <code>CSSProperties</code> | (<code>string</code> | <code>CSSProperties</code>)[]</p><p>Any value that can be passed into an HTML element&#39;s style attribute. Note that Profectus uses its own StyleValue and CSSProperties that are extended, in order to have additional properties added to them, such as variable CSS variables.</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/feature.ts#L31" target="_blank" rel="noreferrer">profectus/src/features/feature.ts:31</a></p><h2 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h2><h3 id="component" tabindex="-1">Component <a class="header-anchor" href="#component" aria-label="Permalink to &quot;Component&quot;">​</a></h3><p>• <code>Const</code> <strong>Component</strong>: typeof <a href="./feature#component"><code>Component</code></a></p><p>A symbol to use as a key for a vue component a feature can be rendered with</p><p><strong><code>See</code></strong></p><p><a href="./../util/vue#vuefeature">VueFeature</a></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/feature.ts#L10" target="_blank" rel="noreferrer">profectus/src/features/feature.ts:10</a></p><hr><h3 id="gatherprops" tabindex="-1">GatherProps <a class="header-anchor" href="#gatherprops" aria-label="Permalink to &quot;GatherProps&quot;">​</a></h3><p>• <code>Const</code> <strong>GatherProps</strong>: typeof <a href="./feature#gatherprops"><code>GatherProps</code></a></p><p>A symbol to use as a key for a prop gathering function that a feature can use to send to its component</p><p><strong><code>See</code></strong></p><p><a href="./../util/vue#vuefeature">VueFeature</a></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/feature.ts#L15" target="_blank" rel="noreferrer">profectus/src/features/feature.ts:15</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="excludefeatures" tabindex="-1">excludeFeatures <a class="header-anchor" href="#excludefeatures" aria-label="Permalink to &quot;excludeFeatures&quot;">​</a></h3><p>▸ <strong>excludeFeatures</strong>(<code>obj</code>, <code>...types</code>): <code>unknown</code>[]</p><p>Traverses an object and returns all features that are <em>not</em> any of the given types. Features are any object with a &quot;type&quot; property that has a symbol value.</p><h5 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>obj</code></td><td style="text-align:left;"><a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type" target="_blank" rel="noreferrer"><code>Record</code></a>&lt;<code>string</code>, <code>unknown</code>&gt;</td><td style="text-align:left;">The object to traverse</td></tr><tr><td style="text-align:left;"><code>...types</code></td><td style="text-align:left;"><code>symbol</code>[]</td><td style="text-align:left;">The feature types that will be skipped over</td></tr></tbody></table><h5 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>unknown</code>[]</p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/feature.ts#L130" target="_blank" rel="noreferrer">profectus/src/features/feature.ts:130</a></p><hr><h3 id="findfeatures" tabindex="-1">findFeatures <a class="header-anchor" href="#findfeatures" aria-label="Permalink to &quot;findFeatures&quot;">​</a></h3><p>▸ <strong>findFeatures</strong>(<code>obj</code>, <code>...types</code>): <code>unknown</code>[]</p><p>Traverses an object and returns all features of the given type(s)</p><h5 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>obj</code></td><td style="text-align:left;"><a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type" target="_blank" rel="noreferrer"><code>Record</code></a>&lt;<code>string</code>, <code>unknown</code>&gt;</td><td style="text-align:left;">The object to traverse</td></tr><tr><td style="text-align:left;"><code>...types</code></td><td style="text-align:left;"><code>symbol</code>[]</td><td style="text-align:left;">The feature types that will be searched for</td></tr></tbody></table><h5 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>unknown</code>[]</p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/feature.ts#L105" target="_blank" rel="noreferrer">profectus/src/features/feature.ts:105</a></p><hr><h3 id="getuniqueid" tabindex="-1">getUniqueID <a class="header-anchor" href="#getuniqueid" aria-label="Permalink to &quot;getUniqueID&quot;">​</a></h3><p>▸ <strong>getUniqueID</strong>(<code>prefix?</code>): <code>string</code></p><p>Gets a unique ID to give to each feature, used for any sort of system that needs to identify elements in the DOM rather than references to the feature itself. (For example, branches) IDs are guaranteed unique, but <em>NOT</em> persistent - they likely will change between updates.</p><h5 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>prefix</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>&quot;feature-&quot;</code></td><td style="text-align:left;">A string to prepend to the id to make it more readable in the inspector tools</td></tr></tbody></table><h5 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>string</code></p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/feature.ts#L56" target="_blank" rel="noreferrer">profectus/src/features/feature.ts:56</a></p><hr><h3 id="ishidden" tabindex="-1">isHidden <a class="header-anchor" href="#ishidden" aria-label="Permalink to &quot;isHidden&quot;">​</a></h3><p>▸ <strong>isHidden</strong>(<code>visibility</code>): <code>boolean</code></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>visibility</code></td><td style="text-align:left;"><a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code> | <a href="./feature#visibility"><code>Visibility</code></a>&gt;</td></tr></tbody></table><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/feature.ts#L75" target="_blank" rel="noreferrer">profectus/src/features/feature.ts:75</a></p><hr><h3 id="isvisible" tabindex="-1">isVisible <a class="header-anchor" href="#isvisible" aria-label="Permalink to &quot;isVisible&quot;">​</a></h3><p>▸ <strong>isVisible</strong>(<code>visibility</code>): <code>boolean</code></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>visibility</code></td><td style="text-align:left;"><a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code> | <a href="./feature#visibility"><code>Visibility</code></a>&gt;</td></tr></tbody></table><h4 id="defined-in-13" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-13" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/feature.ts#L70" target="_blank" rel="noreferrer">profectus/src/features/feature.ts:70</a></p><hr><h3 id="jsx" tabindex="-1">jsx <a class="header-anchor" href="#jsx" aria-label="Permalink to &quot;jsx&quot;">​</a></h3><p>▸ <strong>jsx</strong>(<code>func</code>): <a href="./feature#jsxfunction"><code>JSXFunction</code></a></p><p>Takes a function and marks it as JSX so it won&#39;t get auto-wrapped into a ComputedRef. The function may also return empty string as empty JSX tags cause issues.</p><h5 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>func</code></td><td style="text-align:left;">() =&gt; <code>&quot;&quot;</code> | <code>Element</code></td></tr></tbody></table><h5 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><a href="./feature#jsxfunction"><code>JSXFunction</code></a></p><h4 id="defined-in-14" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-14" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/feature.ts#L84" target="_blank" rel="noreferrer">profectus/src/features/feature.ts:84</a></p><hr><h3 id="setdefault" tabindex="-1">setDefault <a class="header-anchor" href="#setdefault" aria-label="Permalink to &quot;setDefault&quot;">​</a></h3><p>▸ <strong>setDefault</strong>&lt;<code>T</code>, <code>K</code>&gt;(<code>object</code>, <code>key</code>, <code>value</code>): asserts object is Exclude&lt;T, K&gt; &amp; Required&lt;Pick&lt;T, K&gt;&gt;</p><p>Utility function to set a property on an object if and only if it doesn&#39;t already exist</p><h5 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>K</code></td><td style="text-align:left;">extends <code>string</code> | <code>number</code> | <code>symbol</code></td></tr></tbody></table><h5 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>object</code></td><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>key</code></td><td style="text-align:left;"><code>K</code></td></tr><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><code>T</code>[<code>K</code>]</td></tr></tbody></table><h5 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p>asserts object is Exclude&lt;T, K&gt; &amp; Required&lt;Pick&lt;T, K&gt;&gt;</p><h4 id="defined-in-15" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-15" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/feature.ts#L90" target="_blank" rel="noreferrer">profectus/src/features/feature.ts:90</a></p>',134),d=[n];function i(s,l,c,h,f,u){return a(),t("div",null,d)}const y=e(o,[["render",i]]);export{b as __pageData,y as default};
