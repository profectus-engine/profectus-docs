import{_ as e,c as t,o as a,a as r}from"./app.e5a3543f.js";const g='{"title":"Module: game/persistence","description":"","frontmatter":{},"headers":[{"level":2,"title":"Type aliases","slug":"type-aliases"},{"level":3,"title":"Persistent","slug":"persistent"},{"level":3,"title":"State","slug":"state"},{"level":2,"title":"Variables","slug":"variables"},{"level":3,"title":"DefaultValue","slug":"defaultvalue"},{"level":3,"title":"Deleted","slug":"deleted"},{"level":3,"title":"PersistentState","slug":"persistentstate"},{"level":3,"title":"StackTrace","slug":"stacktrace"},{"level":2,"title":"Functions","slug":"functions"},{"level":3,"title":"deletePersistent","slug":"deletepersistent"},{"level":3,"title":"persistent","slug":"persistent-1"}],"relativePath":"api/modules/game/persistence.md"}',s={},d=r('<h1 id="module-game-persistence" tabindex="-1">Module: game/persistence <a class="header-anchor" href="#module-game-persistence" aria-hidden="true">#</a></h1><h2 id="type-aliases" tabindex="-1">Type aliases <a class="header-anchor" href="#type-aliases" aria-hidden="true">#</a></h2><h3 id="persistent" tabindex="-1">Persistent <a class="header-anchor" href="#persistent" aria-hidden="true">#</a></h3><p>\u01AC <strong>Persistent</strong>&lt;<code>T</code>&gt;: <code>Ref</code>&lt;<code>T</code>&gt; &amp; { <code>[DefaultValue]</code>: <code>T</code> ; <code>[Deleted]</code>: <code>boolean</code> ; <code>[PersistentState]</code>: <code>Ref</code>&lt;<code>T</code>&gt; ; <code>[StackTrace]</code>: <code>string</code> }</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./persistence.html#state"><code>State</code></a> = <a href="./persistence.html#state"><code>State</code></a></td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/2e3f1de/src/game/persistence.ts#L25" target="_blank" rel="noopener noreferrer">profectus/src/game/persistence.ts:25</a></p><hr><h3 id="state" tabindex="-1">State <a class="header-anchor" href="#state" aria-hidden="true">#</a></h3><p>\u01AC <strong>State</strong>: <code>string</code> | <code>number</code> | <code>boolean</code> | <a href="./../util/bignum.html#decimalsource"><code>DecimalSource</code></a> | { <code>[key: string]</code>: <a href="./persistence.html#state"><code>State</code></a>; } | { <code>[key: number]</code>: <a href="./persistence.html#state"><code>State</code></a>; }</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/2e3f1de/src/game/persistence.ts#L17" target="_blank" rel="noopener noreferrer">profectus/src/game/persistence.ts:17</a></p><h2 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-hidden="true">#</a></h2><h3 id="defaultvalue" tabindex="-1">DefaultValue <a class="header-anchor" href="#defaultvalue" aria-hidden="true">#</a></h3><p>\u2022 <code>Const</code> <strong>DefaultValue</strong>: typeof <a href="./persistence.html#defaultvalue"><code>DefaultValue</code></a></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/2e3f1de/src/game/persistence.ts#L9" target="_blank" rel="noopener noreferrer">profectus/src/game/persistence.ts:9</a></p><hr><h3 id="deleted" tabindex="-1">Deleted <a class="header-anchor" href="#deleted" aria-hidden="true">#</a></h3><p>\u2022 <code>Const</code> <strong>Deleted</strong>: typeof <a href="./persistence.html#deleted"><code>Deleted</code></a></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/2e3f1de/src/game/persistence.ts#L11" target="_blank" rel="noopener noreferrer">profectus/src/game/persistence.ts:11</a></p><hr><h3 id="persistentstate" tabindex="-1">PersistentState <a class="header-anchor" href="#persistentstate" aria-hidden="true">#</a></h3><p>\u2022 <code>Const</code> <strong>PersistentState</strong>: typeof <a href="./persistence.html#persistentstate"><code>PersistentState</code></a></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/2e3f1de/src/game/persistence.ts#L8" target="_blank" rel="noopener noreferrer">profectus/src/game/persistence.ts:8</a></p><hr><h3 id="stacktrace" tabindex="-1">StackTrace <a class="header-anchor" href="#stacktrace" aria-hidden="true">#</a></h3><p>\u2022 <code>Const</code> <strong>StackTrace</strong>: typeof <a href="./persistence.html#stacktrace"><code>StackTrace</code></a></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/2e3f1de/src/game/persistence.ts#L10" target="_blank" rel="noopener noreferrer">profectus/src/game/persistence.ts:10</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h2><h3 id="deletepersistent" tabindex="-1">deletePersistent <a class="header-anchor" href="#deletepersistent" aria-hidden="true">#</a></h3><p>\u25B8 <strong>deletePersistent</strong>(<code>persistent</code>): <code>void</code></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>persistent</code></td><td style="text-align:left;"><a href="./persistence.html#persistent"><code>Persistent</code></a>&lt;<a href="./persistence.html#state"><code>State</code></a>&gt;</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/2e3f1de/src/game/persistence.ts#L65" target="_blank" rel="noopener noreferrer">profectus/src/game/persistence.ts:65</a></p><hr><h3 id="persistent-1" tabindex="-1">persistent <a class="header-anchor" href="#persistent-1" aria-hidden="true">#</a></h3><p>\u25B8 <strong>persistent</strong>&lt;<code>T</code>&gt;(<code>defaultValue</code>): <a href="./persistence.html#persistent"><code>Persistent</code></a>&lt;<code>T</code>&gt;</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./persistence.html#state"><code>State</code></a></td></tr></tbody></table><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>defaultValue</code></td><td style="text-align:left;"><code>T</code> | <code>Ref</code>&lt;<code>T</code>&gt;</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><a href="./persistence.html#persistent"><code>Persistent</code></a>&lt;<code>T</code>&gt;</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/2e3f1de/src/game/persistence.ts#L42" target="_blank" rel="noopener noreferrer">profectus/src/game/persistence.ts:42</a></p>',53),n=[d];function i(c,o,h,l,p,f){return a(),t("div",null,n)}var b=e(s,[["render",i]]);export{g as __pageData,b as default};
