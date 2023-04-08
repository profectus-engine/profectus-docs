import{_ as e,c as t,o as a,N as o}from"./chunks/framework.0799945b.js";const u=JSON.parse('{"title":"Module: game/modifiers","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/modules/game/modifiers.md","lastUpdated":null}'),i={name:"api/modules/game/modifiers.md"},r=o('<h1 id="module-game-modifiers" tabindex="-1">Module: game/modifiers <a class="header-anchor" href="#module-game-modifiers" aria-label="Permalink to &quot;Module: game/modifiers&quot;">​</a></h1><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><ul><li><a href="../../interfaces/game/modifiers.AdditiveModifierOptions">AdditiveModifierOptions</a></li><li><a href="../../interfaces/game/modifiers.ExponentialModifierOptions">ExponentialModifierOptions</a></li><li><a href="../../interfaces/game/modifiers.Modifier">Modifier</a></li><li><a href="../../interfaces/game/modifiers.ModifierSectionOptions">ModifierSectionOptions</a></li><li><a href="../../interfaces/game/modifiers.MultiplicativeModifierOptions">MultiplicativeModifierOptions</a></li></ul><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="modifierfromoptionalparams" tabindex="-1">ModifierFromOptionalParams <a class="header-anchor" href="#modifierfromoptionalparams" aria-label="Permalink to &quot;ModifierFromOptionalParams&quot;">​</a></h3><p>Ƭ <strong>ModifierFromOptionalParams</strong>&lt;<code>T</code>, <code>S</code>&gt;: <code>T</code> extends <code>undefined</code> ? <code>S</code> extends <code>undefined</code> ? <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys" target="_blank" rel="noreferrer"><code>Omit</code></a>&lt;<a href="./../util/common#withrequired"><code>WithRequired</code></a>&lt;<a href="../../interfaces/game/modifiers.Modifier"><code>Modifier</code></a>, <code>&quot;revert&quot;</code>&gt;, <code>&quot;description&quot;</code> | <code>&quot;enabled&quot;</code>&gt; : <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys" target="_blank" rel="noreferrer"><code>Omit</code></a>&lt;<a href="./../util/common#withrequired"><code>WithRequired</code></a>&lt;<a href="../../interfaces/game/modifiers.Modifier"><code>Modifier</code></a>, <code>&quot;revert&quot;</code> | <code>&quot;enabled&quot;</code>&gt;, <code>&quot;description&quot;</code>&gt; : <code>S</code> extends <code>undefined</code> ? <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys" target="_blank" rel="noreferrer"><code>Omit</code></a>&lt;<a href="./../util/common#withrequired"><code>WithRequired</code></a>&lt;<a href="../../interfaces/game/modifiers.Modifier"><code>Modifier</code></a>, <code>&quot;revert&quot;</code> | <code>&quot;description&quot;</code>&gt;, <code>&quot;enabled&quot;</code>&gt; : <a href="./../util/common#withrequired"><code>WithRequired</code></a>&lt;<a href="../../interfaces/game/modifiers.Modifier"><code>Modifier</code></a>, <code>&quot;revert&quot;</code> | <code>&quot;enabled&quot;</code> | <code>&quot;description&quot;</code>&gt;</p><p>Utility type used to narrow down a modifier type that will have a description and/or enabled property based on optional parameters, T and S (respectively).</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>S</code></td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/modifiers.tsx#L40" target="_blank" rel="noreferrer">profectus/src/game/modifiers.tsx:40</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="createadditivemodifier" tabindex="-1">createAdditiveModifier <a class="header-anchor" href="#createadditivemodifier" aria-label="Permalink to &quot;createAdditiveModifier&quot;">​</a></h3><p>▸ <strong>createAdditiveModifier</strong>&lt;<code>T</code>&gt;(<code>optionsFunc</code>): <a href="./modifiers#modifierfromoptionalparams"><code>ModifierFromOptionalParams</code></a>&lt;<code>T</code>[<code>&quot;description&quot;</code>], <code>T</code>[<code>&quot;enabled&quot;</code>]&gt;</p><p>Create a modifier that adds some value to the input value.</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../interfaces/game/modifiers.AdditiveModifierOptions"><code>AdditiveModifierOptions</code></a></td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>optionsFunc</code></td><td style="text-align:left;">() =&gt; <code>T</code></td><td style="text-align:left;">Additive modifier options.</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./modifiers#modifierfromoptionalparams"><code>ModifierFromOptionalParams</code></a>&lt;<code>T</code>[<code>&quot;description&quot;</code>], <code>T</code>[<code>&quot;enabled&quot;</code>]&gt;</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/modifiers.tsx#L64" target="_blank" rel="noreferrer">profectus/src/game/modifiers.tsx:64</a></p><hr><h3 id="createexponentialmodifier" tabindex="-1">createExponentialModifier <a class="header-anchor" href="#createexponentialmodifier" aria-label="Permalink to &quot;createExponentialModifier&quot;">​</a></h3><p>▸ <strong>createExponentialModifier</strong>&lt;<code>T</code>&gt;(<code>optionsFunc</code>): <a href="./modifiers#modifierfromoptionalparams"><code>ModifierFromOptionalParams</code></a>&lt;<code>T</code>[<code>&quot;description&quot;</code>], <code>T</code>[<code>&quot;enabled&quot;</code>]&gt;</p><p>Create a modifier that raises the input value to the power of some value.</p><h4 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../interfaces/game/modifiers.ExponentialModifierOptions"><code>ExponentialModifierOptions</code></a></td></tr></tbody></table><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>optionsFunc</code></td><td style="text-align:left;">() =&gt; <code>T</code></td><td style="text-align:left;">Exponential modifier options.</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./modifiers#modifierfromoptionalparams"><code>ModifierFromOptionalParams</code></a>&lt;<code>T</code>[<code>&quot;description&quot;</code>], <code>T</code>[<code>&quot;enabled&quot;</code>]&gt;</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/modifiers.tsx#L187" target="_blank" rel="noreferrer">profectus/src/game/modifiers.tsx:187</a></p><hr><h3 id="createmodifiersection" tabindex="-1">createModifierSection <a class="header-anchor" href="#createmodifiersection" aria-label="Permalink to &quot;createModifierSection&quot;">​</a></h3><p>▸ <strong>createModifierSection</strong>(<code>options</code>): <code>Element</code></p><p>Create a JSX element that displays a modifier. Intended to be used with the output from <a href="./modifiers#createsequentialmodifier">createSequentialModifier</a>.</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><a href="../../interfaces/game/modifiers.ModifierSectionOptions"><code>ModifierSectionOptions</code></a></td><td style="text-align:left;">Modifier section options.</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Element</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/modifiers.tsx#L319" target="_blank" rel="noreferrer">profectus/src/game/modifiers.tsx:319</a></p><hr><h3 id="createmultiplicativemodifier" tabindex="-1">createMultiplicativeModifier <a class="header-anchor" href="#createmultiplicativemodifier" aria-label="Permalink to &quot;createMultiplicativeModifier&quot;">​</a></h3><p>▸ <strong>createMultiplicativeModifier</strong>&lt;<code>T</code>&gt;(<code>optionsFunc</code>): <a href="./modifiers#modifierfromoptionalparams"><code>ModifierFromOptionalParams</code></a>&lt;<code>T</code>[<code>&quot;description&quot;</code>], <code>T</code>[<code>&quot;enabled&quot;</code>]&gt;</p><p>Create a modifier that multiplies the input value by some value.</p><h4 id="type-parameters-3" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-3" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../interfaces/game/modifiers.MultiplicativeModifierOptions"><code>MultiplicativeModifierOptions</code></a></td></tr></tbody></table><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>optionsFunc</code></td><td style="text-align:left;">() =&gt; <code>T</code></td><td style="text-align:left;">Multiplicative modifier options.</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./modifiers#modifierfromoptionalparams"><code>ModifierFromOptionalParams</code></a>&lt;<code>T</code>[<code>&quot;description&quot;</code>], <code>T</code>[<code>&quot;enabled&quot;</code>]&gt;</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/modifiers.tsx#L125" target="_blank" rel="noreferrer">profectus/src/game/modifiers.tsx:125</a></p><hr><h3 id="createsequentialmodifier" tabindex="-1">createSequentialModifier <a class="header-anchor" href="#createsequentialmodifier" aria-label="Permalink to &quot;createSequentialModifier&quot;">​</a></h3><p>▸ <strong>createSequentialModifier</strong>&lt;<code>T</code>, <code>S</code>&gt;(<code>modifiersFunc</code>): <code>S</code></p><p>Takes an array of modifiers and applies and reverses them in order. Modifiers that are not enabled will not be applied nor reversed. Also joins their descriptions together.</p><p><strong><code>See</code></strong></p><p><a href="./modifiers#createmodifiersection">createModifierSection</a>.</p><h4 id="type-parameters-4" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-4" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../interfaces/game/modifiers.Modifier"><code>Modifier</code></a>[]</td></tr><tr><td style="text-align:left;"><code>S</code></td><td style="text-align:left;"><code>T</code> extends <a href="./../util/common#withrequired"><code>WithRequired</code></a>&lt;<a href="../../interfaces/game/modifiers.Modifier"><code>Modifier</code></a>, <code>&quot;revert&quot;</code>&gt;[] ? <a href="./../util/common#withrequired"><code>WithRequired</code></a>&lt;<a href="../../interfaces/game/modifiers.Modifier"><code>Modifier</code></a>, <code>&quot;revert&quot;</code> | <code>&quot;description&quot;</code>&gt; : <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys" target="_blank" rel="noreferrer"><code>Omit</code></a>&lt;<a href="./../util/common#withrequired"><code>WithRequired</code></a>&lt;<a href="../../interfaces/game/modifiers.Modifier"><code>Modifier</code></a>, <code>&quot;description&quot;</code>&gt;, <code>&quot;revert&quot;</code>&gt;</td></tr></tbody></table><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>modifiersFunc</code></td><td style="text-align:left;">() =&gt; <code>T</code></td><td style="text-align:left;">The modifiers to perform sequentially.</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>S</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/modifiers.tsx#L260" target="_blank" rel="noreferrer">profectus/src/game/modifiers.tsx:260</a></p>',71),d=[r];function l(n,s,c,f,h,m){return a(),t("div",null,d)}const g=e(i,[["render",l]]);export{u as __pageData,g as default};