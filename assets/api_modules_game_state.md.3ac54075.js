import{_ as e,c as t,o as a,N as r}from"./chunks/framework.0799945b.js";const b=JSON.parse('{"title":"Module: game/state","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/modules/game/state.md","lastUpdated":null}'),l={name:"api/modules/game/state.md"},s=r('<h1 id="module-game-state" tabindex="-1">Module: game/state <a class="header-anchor" href="#module-game-state" aria-label="Permalink to &quot;Module: game/state&quot;">​</a></h1><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><h3 id="transient" tabindex="-1">Transient <a class="header-anchor" href="#transient" aria-label="Permalink to &quot;Transient&quot;">​</a></h3><p>• <strong>Transient</strong>: <code>Object</code></p><p>An object of global data that is not persistent.</p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>NaNPath?</code></td><td style="text-align:left;"><code>string</code>[]</td><td style="text-align:left;">The location within the player save data object of the NaN value.</td></tr><tr><td style="text-align:left;"><code>NaNPersistent?</code></td><td style="text-align:left;"><a href="./persistence#persistent"><code>Persistent</code></a>&lt;<a href="./../lib/break_eternity#decimalsource"><code>DecimalSource</code></a>&gt;</td><td style="text-align:left;">The ref that was being set to NaN.</td></tr><tr><td style="text-align:left;"><code>errors</code></td><td style="text-align:left;"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error" target="_blank" rel="noreferrer"><code>Error</code></a>[]</td><td style="text-align:left;">List of errors that have occurred, to show the user.</td></tr><tr><td style="text-align:left;"><code>hasNaN</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Whether or not a NaN value has been detected and undealt with.</td></tr><tr><td style="text-align:left;"><code>lastTenTicks</code></td><td style="text-align:left;"><code>number</code>[]</td><td style="text-align:left;">A list of the duration, in ms, of the last 10 game ticks. Used for calculating TPS.</td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/5c11524/src/game/state.ts#L6" target="_blank" rel="noreferrer">profectus/src/game/state.ts:6</a></p><h2 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h2><h3 id="default" tabindex="-1">default <a class="header-anchor" href="#default" aria-label="Permalink to &quot;default&quot;">​</a></h3><p>• <strong>default</strong>: <code>ShallowReactive</code>&lt;<a href="./state#transient"><code>Transient</code></a>&gt;</p><p>The global transient state object.</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/5c11524/src/game/state.ts#L26" target="_blank" rel="noreferrer">profectus/src/game/state.ts:26</a></p>',14),o=[s];function d(n,i,c,h,f,g){return a(),t("div",null,o)}const p=e(l,[["render",d]]);export{b as __pageData,p as default};
