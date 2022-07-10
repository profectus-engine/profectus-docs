import{_ as e,c as r,o as t,a}from"./app.7cfe4cf0.js";const u='{"title":"Interface: Modifier","description":"","frontmatter":{},"headers":[{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"description","slug":"description"},{"level":3,"title":"enabled","slug":"enabled"},{"level":2,"title":"Methods","slug":"methods"},{"level":3,"title":"apply","slug":"apply"},{"level":3,"title":"revert","slug":"revert"}],"relativePath":"api/interfaces/game/modifiers.Modifier.md"}',i={},o=a('<h1 id="interface-modifier" tabindex="-1">Interface: Modifier <a class="header-anchor" href="#interface-modifier" aria-hidden="true">#</a></h1><p><a href="./../../modules/game/modifiers.html">game/modifiers</a>.Modifier</p><p>An object that can be used to apply or unapply some modification to a number. Being reversible requires the operation being invertible, but some features may rely on that. Descriptions can be optionally included for displaying them to the player. The built-in modifier creators are designed to display the modifiers using. <a href="./../../modules/game/modifiers.html#createmodifiersection">createModifierSection</a>.</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><h3 id="description" tabindex="-1">description <a class="header-anchor" href="#description" aria-hidden="true">#</a></h3><p>\u2022 <code>Optional</code> <strong>description</strong>: <a href="./../../modules/util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./../../modules/features/feature.html#coercablecomponent"><code>CoercableComponent</code></a>&gt;</p><p>A description of this modifier.</p><p><strong><code>see</code></strong> <a href="./../../modules/game/modifiers.html#createmodifiersection">createModifierSection</a>.</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/0b8210c/src/game/modifiers.tsx#L33" target="_blank" rel="noopener noreferrer">profectus/src/game/modifiers.tsx:33</a></p><hr><h3 id="enabled" tabindex="-1">enabled <a class="header-anchor" href="#enabled" aria-hidden="true">#</a></h3><p>\u2022 <code>Optional</code> <strong>enabled</strong>: <a href="./../../modules/util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code>&gt;</p><p>Whether or not this modifier should be considered enabled. Typically for use with modifiers passed into <a href="./../../modules/game/modifiers.html#createsequentialmodifier">createSequentialModifier</a>.</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/0b8210c/src/game/modifiers.tsx#L28" target="_blank" rel="noopener noreferrer">profectus/src/game/modifiers.tsx:28</a></p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="apply" tabindex="-1">apply <a class="header-anchor" href="#apply" aria-hidden="true">#</a></h3><p>\u25B8 <strong>apply</strong>(<code>gain</code>): <a href="./../../modules/lib/break_eternity.html#decimalsource"><code>DecimalSource</code></a></p><p>Applies some operation on the input and returns the result.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>gain</code></td><td style="text-align:left;"><a href="./../../modules/lib/break_eternity.html#decimalsource"><code>DecimalSource</code></a></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><a href="./../../modules/lib/break_eternity.html#decimalsource"><code>DecimalSource</code></a></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/0b8210c/src/game/modifiers.tsx#L21" target="_blank" rel="noopener noreferrer">profectus/src/game/modifiers.tsx:21</a></p><hr><h3 id="revert" tabindex="-1">revert <a class="header-anchor" href="#revert" aria-hidden="true">#</a></h3><p>\u25B8 <code>Optional</code> <strong>revert</strong>(<code>gain</code>): <a href="./../../modules/lib/break_eternity.html#decimalsource"><code>DecimalSource</code></a></p><p>Reverses the operation applied by the apply property. Required by some features.</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>gain</code></td><td style="text-align:left;"><a href="./../../modules/lib/break_eternity.html#decimalsource"><code>DecimalSource</code></a></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><a href="./../../modules/lib/break_eternity.html#decimalsource"><code>DecimalSource</code></a></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/0b8210c/src/game/modifiers.tsx#L23" target="_blank" rel="noopener noreferrer">profectus/src/game/modifiers.tsx:23</a></p>',36),d=[o];function s(n,c,l,h,p,f){return t(),r("div",null,d)}var b=e(i,[["render",s]]);export{u as __pageData,b as default};