import{_ as e,c as t,o as a,a as r}from"./app.54d5a277.js";const g='{"title":"Interface: GlobalEvents","description":"","frontmatter":{},"headers":[{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"gameWon","slug":"gamewon"},{"level":2,"title":"Methods","slug":"methods"},{"level":3,"title":"addLayer","slug":"addlayer"},{"level":3,"title":"loadSettings","slug":"loadsettings"},{"level":3,"title":"removeLayer","slug":"removelayer"},{"level":3,"title":"reset","slug":"reset"},{"level":3,"title":"setupVue","slug":"setupvue"},{"level":3,"title":"update","slug":"update"}],"relativePath":"api/interfaces/game/events.GlobalEvents.md"}',d={},n=r('<h1 id="interface-globalevents" tabindex="-1">Interface: GlobalEvents <a class="header-anchor" href="#interface-globalevents" aria-hidden="true">#</a></h1><p><a href="./../../modules/game/events.html">game/events</a>.GlobalEvents</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><h3 id="gamewon" tabindex="-1">gameWon <a class="header-anchor" href="#gamewon" aria-hidden="true">#</a></h3><p>\u2022 <strong>gameWon</strong>: <code>VoidFunction</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/305946e/src/game/events.ts#L15" target="_blank" rel="noopener noreferrer">profectus/src/game/events.ts:15</a></p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="addlayer" tabindex="-1">addLayer <a class="header-anchor" href="#addlayer" aria-hidden="true">#</a></h3><p>\u25B8 <strong>addLayer</strong>(<code>layer</code>, <code>saveData</code>): <code>void</code></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>layer</code></td><td style="text-align:left;"><a href="./../../modules/game/layers.html#genericlayer"><code>GenericLayer</code></a></td></tr><tr><td style="text-align:left;"><code>saveData</code></td><td style="text-align:left;"><code>Record</code>&lt;<code>string</code>, <code>unknown</code>&gt;</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/305946e/src/game/events.ts#L11" target="_blank" rel="noopener noreferrer">profectus/src/game/events.ts:11</a></p><hr><h3 id="loadsettings" tabindex="-1">loadSettings <a class="header-anchor" href="#loadsettings" aria-hidden="true">#</a></h3><p>\u25B8 <strong>loadSettings</strong>(<code>settings</code>): <code>void</code></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>settings</code></td><td style="text-align:left;"><code>Partial</code>&lt;<a href="./settings.Settings"><code>Settings</code></a>&gt;</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/305946e/src/game/events.ts#L14" target="_blank" rel="noopener noreferrer">profectus/src/game/events.ts:14</a></p><hr><h3 id="removelayer" tabindex="-1">removeLayer <a class="header-anchor" href="#removelayer" aria-hidden="true">#</a></h3><p>\u25B8 <strong>removeLayer</strong>(<code>layer</code>): <code>void</code></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>layer</code></td><td style="text-align:left;"><a href="./../../modules/game/layers.html#genericlayer"><code>GenericLayer</code></a></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/305946e/src/game/events.ts#L12" target="_blank" rel="noopener noreferrer">profectus/src/game/events.ts:12</a></p><hr><h3 id="reset" tabindex="-1">reset <a class="header-anchor" href="#reset" aria-hidden="true">#</a></h3><p>\u25B8 <strong>reset</strong>(<code>reset</code>): <code>void</code></p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>reset</code></td><td style="text-align:left;"><a href="./../../modules/features/reset.html#genericreset"><code>GenericReset</code></a></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/305946e/src/features/reset.ts#L93" target="_blank" rel="noopener noreferrer">profectus/src/features/reset.ts:93</a></p><hr><h3 id="setupvue" tabindex="-1">setupVue <a class="header-anchor" href="#setupvue" aria-hidden="true">#</a></h3><p>\u25B8 <strong>setupVue</strong>(<code>vue</code>): <code>void</code></p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>vue</code></td><td style="text-align:left;"><code>App</code>&lt;<code>any</code>&gt;</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/305946e/src/game/events.ts#L16" target="_blank" rel="noopener noreferrer">profectus/src/game/events.ts:16</a></p><hr><h3 id="update" tabindex="-1">update <a class="header-anchor" href="#update" aria-hidden="true">#</a></h3><p>\u25B8 <strong>update</strong>(<code>diff</code>, <code>trueDiff</code>): <code>void</code></p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>diff</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>trueDiff</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/305946e/src/game/events.ts#L13" target="_blank" rel="noopener noreferrer">profectus/src/game/events.ts:13</a></p>',61),s=[n];function o(i,h,l,c,f,u){return a(),t("div",null,s)}var b=e(d,[["render",o]]);export{g as __pageData,b as default};
