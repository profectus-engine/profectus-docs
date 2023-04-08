import{_ as e,c as t,o as a,N as r}from"./chunks/framework.0799945b.js";const b=JSON.parse('{"title":"Module: game/persistence","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/modules/game/persistence.md","lastUpdated":null}'),s={name:"api/modules/game/persistence.md"},n=r('<h1 id="module-game-persistence" tabindex="-1">Module: game/persistence <a class="header-anchor" href="#module-game-persistence" aria-label="Permalink to &quot;Module: game/persistence&quot;">​</a></h1><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="nonpersistent" tabindex="-1">NonPersistent <a class="header-anchor" href="#nonpersistent" aria-label="Permalink to &quot;NonPersistent&quot;">​</a></h3><p>Ƭ <strong>NonPersistent</strong>&lt;<code>T</code>&gt;: <code>WritableComputedRef</code>&lt;<code>T</code>&gt; &amp; { <code>[DefaultValue]</code>: <code>T</code> }</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./persistence#state"><code>State</code></a> = <a href="./persistence#state"><code>State</code></a></td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/persistence.ts#L37" target="_blank" rel="noreferrer">profectus/src/game/persistence.ts:37</a></p><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/persistence.ts#L92" target="_blank" rel="noreferrer">profectus/src/game/persistence.ts:92</a></p><hr><h3 id="persistent" tabindex="-1">Persistent <a class="header-anchor" href="#persistent" aria-label="Permalink to &quot;Persistent&quot;">​</a></h3><p>Ƭ <strong>Persistent</strong>&lt;<code>T</code>&gt;: <code>Ref</code>&lt;<code>T</code>&gt; &amp; { <code>[CheckNaN]</code>: <code>boolean</code> ; <code>[DefaultValue]</code>: <code>T</code> ; <code>[Deleted]</code>: <code>boolean</code> ; <code>[NonPersistent]</code>: <a href="./persistence#nonpersistent-1"><code>NonPersistent</code></a>&lt;<code>T</code>&gt; ; <code>[PersistentState]</code>: <code>Ref</code>&lt;<code>T</code>&gt; ; <code>[SaveDataPath]</code>: <code>string</code>[] | <code>undefined</code> ; <code>[StackTrace]</code>: <code>string</code> ; <code>value</code>: <code>T</code> }</p><p>A Ref that has been augmented with properties to allow it to be saved and loaded within the player save data object.</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./persistence#state"><code>State</code></a> = <a href="./persistence#state"><code>State</code></a></td></tr></tbody></table><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/persistence.ts#L65" target="_blank" rel="noreferrer">profectus/src/game/persistence.ts:65</a></p><hr><h3 id="state" tabindex="-1">State <a class="header-anchor" href="#state" aria-label="Permalink to &quot;State&quot;">​</a></h3><p>Ƭ <strong>State</strong>: <code>string</code> | <code>number</code> | <code>boolean</code> | <a href="./../util/bignum#decimalsource"><code>DecimalSource</code></a> | { <code>[key: string]</code>: <a href="./persistence#state"><code>State</code></a>; } | { <code>[key: number]</code>: <a href="./persistence#state"><code>State</code></a>; }</p><p>This is a union of things that should be safely stringifiable without needing special processes or knowing what to load them in as.</p><ul><li>Decimals aren&#39;t allowed because we&#39;d need to know to parse them back.</li><li>DecimalSources are allowed because the string is a valid value for them</li></ul><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/persistence.ts#L54" target="_blank" rel="noreferrer">profectus/src/game/persistence.ts:54</a></p><h2 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h2><h3 id="checknan" tabindex="-1">CheckNaN <a class="header-anchor" href="#checknan" aria-label="Permalink to &quot;CheckNaN&quot;">​</a></h3><p>• <code>Const</code> <strong>CheckNaN</strong>: typeof <a href="./persistence#checknan"><code>CheckNaN</code></a></p><p>A symbol used in <a href="./persistence#persistent">Persistent</a> objects.</p><p><strong><code>See</code></strong></p><p><a href="./persistence#persistent">[CheckNaN]</a></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/persistence.ts#L47" target="_blank" rel="noreferrer">profectus/src/game/persistence.ts:47</a></p><hr><h3 id="defaultvalue" tabindex="-1">DefaultValue <a class="header-anchor" href="#defaultvalue" aria-label="Permalink to &quot;DefaultValue&quot;">​</a></h3><p>• <code>Const</code> <strong>DefaultValue</strong>: typeof <a href="./persistence#defaultvalue"><code>DefaultValue</code></a></p><p>A symbol used in <a href="./persistence#persistent">Persistent</a> objects.</p><p><strong><code>See</code></strong></p><p><a href="./persistence#persistent">[DefaultValue]</a></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/persistence.ts#L22" target="_blank" rel="noreferrer">profectus/src/game/persistence.ts:22</a></p><hr><h3 id="deleted" tabindex="-1">Deleted <a class="header-anchor" href="#deleted" aria-label="Permalink to &quot;Deleted&quot;">​</a></h3><p>• <code>Const</code> <strong>Deleted</strong>: typeof <a href="./persistence#deleted"><code>Deleted</code></a></p><p>A symbol used in <a href="./persistence#persistent">Persistent</a> objects.</p><p><strong><code>See</code></strong></p><p><a href="./persistence#persistent">[Deleted]</a></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/persistence.ts#L32" target="_blank" rel="noreferrer">profectus/src/game/persistence.ts:32</a></p><hr><h3 id="nonpersistent-1" tabindex="-1">NonPersistent <a class="header-anchor" href="#nonpersistent-1" aria-label="Permalink to &quot;NonPersistent&quot;">​</a></h3><p>• <code>Const</code> <strong>NonPersistent</strong>: typeof <a href="./persistence#nonpersistent-1"><code>NonPersistent</code></a></p><p>A symbol used in <a href="./persistence#persistent">Persistent</a> objects.</p><p><strong><code>See</code></strong></p><p><a href="./persistence#persistent">[NonPersistent]</a></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/persistence.ts#L37" target="_blank" rel="noreferrer">profectus/src/game/persistence.ts:37</a></p><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/persistence.ts#L92" target="_blank" rel="noreferrer">profectus/src/game/persistence.ts:92</a></p><hr><h3 id="persistentstate" tabindex="-1">PersistentState <a class="header-anchor" href="#persistentstate" aria-label="Permalink to &quot;PersistentState&quot;">​</a></h3><p>• <code>Const</code> <strong>PersistentState</strong>: typeof <a href="./persistence#persistentstate"><code>PersistentState</code></a></p><p>A symbol used in <a href="./persistence#persistent">Persistent</a> objects.</p><p><strong><code>See</code></strong></p><p><a href="./persistence#persistent">[PersistentState]</a></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/persistence.ts#L17" target="_blank" rel="noreferrer">profectus/src/game/persistence.ts:17</a></p><hr><h3 id="savedatapath" tabindex="-1">SaveDataPath <a class="header-anchor" href="#savedatapath" aria-label="Permalink to &quot;SaveDataPath&quot;">​</a></h3><p>• <code>Const</code> <strong>SaveDataPath</strong>: typeof <a href="./persistence#savedatapath"><code>SaveDataPath</code></a></p><p>A symbol used in <a href="./persistence#persistent">Persistent</a> objects.</p><p><strong><code>See</code></strong></p><p><a href="./persistence#persistent">[SaveDataPath]</a></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/persistence.ts#L42" target="_blank" rel="noreferrer">profectus/src/game/persistence.ts:42</a></p><hr><h3 id="stacktrace" tabindex="-1">StackTrace <a class="header-anchor" href="#stacktrace" aria-label="Permalink to &quot;StackTrace&quot;">​</a></h3><p>• <code>Const</code> <strong>StackTrace</strong>: typeof <a href="./persistence#stacktrace"><code>StackTrace</code></a></p><p>A symbol used in <a href="./persistence#persistent">Persistent</a> objects.</p><p><strong><code>See</code></strong></p><p><a href="./persistence#persistent">[StackTrace]</a></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/persistence.ts#L27" target="_blank" rel="noreferrer">profectus/src/game/persistence.ts:27</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="deletepersistent" tabindex="-1">deletePersistent <a class="header-anchor" href="#deletepersistent" aria-label="Permalink to &quot;deletePersistent&quot;">​</a></h3><p>▸ <strong>deletePersistent</strong>(<code>persistent</code>): <code>void</code></p><p>Mark a <a href="./persistence#persistent">Persistent</a> as deleted, so it won&#39;t be saved and loaded. Since persistent refs must be created during a layer&#39;s options func, features can not create persistent refs after evaluating their own options funcs. As a result, it must create any persistent refs it <em>might</em> need. This function can then be called after the options func is evaluated to mark the persistent ref to not be saved or loaded.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>persistent</code></td><td style="text-align:left;"><a href="./persistence#persistent"><code>Persistent</code></a>&lt;<a href="./persistence#state"><code>State</code></a>&gt;</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/persistence.ts#L213" target="_blank" rel="noreferrer">profectus/src/game/persistence.ts:213</a></p><hr><h3 id="ispersistent" tabindex="-1">isPersistent <a class="header-anchor" href="#ispersistent" aria-label="Permalink to &quot;isPersistent&quot;">​</a></h3><p>▸ <strong>isPersistent</strong>(<code>value</code>): value is Persistent&lt;State&gt;</p><p>Type guard for whether an arbitrary value is a persistent ref</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><code>unknown</code></td><td style="text-align:left;">The value that may or may not be a persistent ref</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p>value is Persistent&lt;State&gt;</p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/persistence.ts#L193" target="_blank" rel="noreferrer">profectus/src/game/persistence.ts:193</a></p><hr><h3 id="nopersist" tabindex="-1">noPersist <a class="header-anchor" href="#nopersist" aria-label="Permalink to &quot;noPersist&quot;">​</a></h3><p>▸ <strong>noPersist</strong>&lt;<code>T</code>, <code>S</code>&gt;(<code>persistent</code>): <code>T</code>[typeof <a href="./persistence#nonpersistent-1"><code>NonPersistent</code></a>]</p><p>Unwraps the non-persistent ref inside of persistent refs, to be passed to other features without duplicating values in the save data object.</p><h4 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <code>Ref</code>&lt;<code>S</code>, <code>T</code>&gt; &amp; { <code>[CheckNaN]</code>: <code>boolean</code> ; <code>[DefaultValue]</code>: <code>S</code> ; <code>[Deleted]</code>: <code>boolean</code> ; <code>[NonPersistent]</code>: <a href="./persistence#nonpersistent-1"><code>NonPersistent</code></a>&lt;<code>S</code>&gt; ; <code>[PersistentState]</code>: <code>Ref</code>&lt;<code>S</code>&gt; ; <code>[SaveDataPath]</code>: <code>undefined</code> | <code>string</code>[] ; <code>[StackTrace]</code>: <code>string</code> ; <code>value</code>: <code>S</code> }</td></tr><tr><td style="text-align:left;"><code>S</code></td><td style="text-align:left;">extends <a href="./persistence#state"><code>State</code></a></td></tr></tbody></table><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>persistent</code></td><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">The persistent ref to unwrap</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>T</code>[typeof <a href="./persistence#nonpersistent-1"><code>NonPersistent</code></a>]</p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/persistence.ts#L201" target="_blank" rel="noreferrer">profectus/src/game/persistence.ts:201</a></p><hr><h3 id="persistent-1" tabindex="-1">persistent <a class="header-anchor" href="#persistent-1" aria-label="Permalink to &quot;persistent&quot;">​</a></h3><p>▸ <strong>persistent</strong>&lt;<code>T</code>&gt;(<code>defaultValue</code>, <code>checkNaN?</code>): <a href="./persistence#persistent"><code>Persistent</code></a>&lt;<code>T</code>&gt;</p><p>Create a persistent ref, which can be saved and loaded. All (non-deleted) persistent refs must be included somewhere within the layer object returned by that layer&#39;s options func.</p><h4 id="type-parameters-3" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-3" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./persistence#state"><code>State</code></a></td></tr></tbody></table><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>defaultValue</code></td><td style="text-align:left;"><code>T</code> | <code>Ref</code>&lt;<code>T</code>&gt;</td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">The value the persistent ref should start at on fresh saves or when reset.</td></tr><tr><td style="text-align:left;"><code>checkNaN</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>true</code></td><td style="text-align:left;">Whether or not to check this ref for being NaN on set. Only use on refs that should always be DecimalSources.</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./persistence#persistent"><code>Persistent</code></a>&lt;<code>T</code>&gt;</p><h4 id="defined-in-13" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-13" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/persistence.ts#L129" target="_blank" rel="noreferrer">profectus/src/game/persistence.ts:129</a></p>',125),o=[n];function d(i,c,l,h,p,f){return a(),t("div",null,o)}const g=e(s,[["render",d]]);export{b as __pageData,g as default};