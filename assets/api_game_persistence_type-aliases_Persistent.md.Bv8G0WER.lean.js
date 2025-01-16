import{_ as t,c as a,a0 as r,o}from"./chunks/framework.P9qPzDnn.js";const u=JSON.parse('{"title":"Type Alias: Persistent<T>","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/game/persistence/type-aliases/Persistent.md","filePath":"api/game/persistence/type-aliases/Persistent.md","lastUpdated":null}'),s={name:"api/game/persistence/type-aliases/Persistent.md"};function n(i,e,l,c,d,h){return o(),a("div",null,e[0]||(e[0]=[r('<p><a href="./../../../">Profectus</a> / <a href="./../">game/persistence</a> / Persistent</p><h1 id="type-alias-persistent-t" tabindex="-1">Type Alias: Persistent&lt;T&gt; <a class="header-anchor" href="#type-alias-persistent-t" aria-label="Permalink to &quot;Type Alias: Persistent\\&lt;T\\&gt;&quot;">​</a></h1><blockquote><p><strong>Persistent</strong>&lt;<code>T</code>&gt;: <a href="https://vuejs.org/guide/typescript/composition-api.html#typing-ref" target="_blank" rel="noreferrer"><code>Ref</code></a>&lt;<code>T</code>&gt; &amp; <code>object</code></p></blockquote><p>A <a href="https://vuejs.org/api/reactivity-core.html#ref" target="_blank" rel="noreferrer">Ref</a> that has been augmented with properties to allow it to be saved and loaded within the player save data object.</p><h2 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h2><h3 id="checknan" tabindex="-1">[CheckNaN] <a class="header-anchor" href="#checknan" aria-label="Permalink to &quot;\\[CheckNaN\\]&quot;">​</a></h3><blockquote><p><strong>[CheckNaN]</strong>: <code>boolean</code></p></blockquote><p>Whether or not to NaN-check this ref. Should only be true on values expected to always be DecimalSources.</p><h3 id="defaultvalue" tabindex="-1">[DefaultValue] <a class="header-anchor" href="#defaultvalue" aria-label="Permalink to &quot;\\[DefaultValue\\]&quot;">​</a></h3><blockquote><p><strong>[DefaultValue]</strong>: <code>T</code></p></blockquote><p>The value the ref should be set to in a fresh save, or when updating an old save to the current version.</p><h3 id="deleted" tabindex="-1">[Deleted] <a class="header-anchor" href="#deleted" aria-label="Permalink to &quot;\\[Deleted\\]&quot;">​</a></h3><blockquote><p><strong>[Deleted]</strong>: <code>boolean</code></p></blockquote><p>This is a flag that can be set once the option func is evaluated, to mark that a persistent ref should <em>not</em> be saved to the player save data object.</p><h4 id="see" tabindex="-1">See <a class="header-anchor" href="#see" aria-label="Permalink to &quot;See&quot;">​</a></h4><p><a href="./../functions/deletePersistent">deletePersistent</a> for marking a persistent ref as deleted.</p><h3 id="nonpersistent" tabindex="-1">[NonPersistent] <a class="header-anchor" href="#nonpersistent" aria-label="Permalink to &quot;\\[NonPersistent\\]&quot;">​</a></h3><blockquote><p><strong>[NonPersistent]</strong>: <a href="./NonPersistent"><code>NonPersistent</code></a>&lt;<code>T</code>&gt;</p></blockquote><p>A non-persistent ref that just reads and writes ot the persistent ref. Used for passing to other features without duplicating the persistent ref in the constructed save data object.</p><h3 id="persistentstate" tabindex="-1">[PersistentState] <a class="header-anchor" href="#persistentstate" aria-label="Permalink to &quot;\\[PersistentState\\]&quot;">​</a></h3><blockquote><p><strong>[PersistentState]</strong>: <a href="https://vuejs.org/guide/typescript/composition-api.html#typing-ref" target="_blank" rel="noreferrer"><code>Ref</code></a>&lt;<code>T</code>&gt;</p></blockquote><p>A flag that this is a persistent property. Typically a circular reference.</p><h3 id="savedatapath" tabindex="-1">[SaveDataPath] <a class="header-anchor" href="#savedatapath" aria-label="Permalink to &quot;\\[SaveDataPath\\]&quot;">​</a></h3><blockquote><p><strong>[SaveDataPath]</strong>: <code>string</code>[] | <code>undefined</code></p></blockquote><p>The path this persistent appears in within the save data object. Predominantly used to ensure it&#39;s only placed in there one time.</p><h3 id="stacktrace" tabindex="-1">[StackTrace] <a class="header-anchor" href="#stacktrace" aria-label="Permalink to &quot;\\[StackTrace\\]&quot;">​</a></h3><blockquote><p><strong>[StackTrace]</strong>: <code>string</code></p></blockquote><p>The stack trace of where the persistent ref was created. This is used for debugging purposes when a persistent ref is created but not placed in its layer object.</p><h3 id="value" tabindex="-1">value <a class="header-anchor" href="#value" aria-label="Permalink to &quot;value&quot;">​</a></h3><blockquote><p><strong>value</strong>: <code>T</code></p></blockquote><h2 id="type-parameters" tabindex="-1">Type Parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type Parameters&quot;">​</a></h2><p>• <strong>T</strong> <em>extends</em> <a href="./State"><code>State</code></a> = <a href="./State"><code>State</code></a></p><h2 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h2><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/game/persistence.ts#L72" target="_blank" rel="noreferrer">profectus/src/game/persistence.ts:72</a></p>',34)]))}const f=t(s,[["render",n]]);export{u as __pageData,f as default};
