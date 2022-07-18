import{_ as e,c as t,o as a,a as r}from"./app.ab34650d.js";const u=JSON.parse('{"title":"Interface: GlobalEvents","description":"","frontmatter":{"editLink":false},"headers":[{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"addLayer","slug":"addlayer"},{"level":3,"title":"gameWon","slug":"gamewon"},{"level":3,"title":"loadSettings","slug":"loadsettings"},{"level":3,"title":"removeLayer","slug":"removelayer"},{"level":3,"title":"reset","slug":"reset"},{"level":3,"title":"setupVue","slug":"setupvue"},{"level":3,"title":"update","slug":"update"}],"relativePath":"api/interfaces/game/events.GlobalEvents.md","lastUpdated":null}'),d={name:"api/interfaces/game/events.GlobalEvents.md"},n=r('<h1 id="interface-globalevents" tabindex="-1">Interface: GlobalEvents <a class="header-anchor" href="#interface-globalevents" aria-hidden="true">#</a></h1><p><a href="./../../modules/game/events.html">game/events</a>.GlobalEvents</p><p>All types of events able to be sent or emitted from the global event bus.</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><h3 id="addlayer" tabindex="-1">addLayer <a class="header-anchor" href="#addlayer" aria-hidden="true">#</a></h3><p>\u2022 <strong>addLayer</strong>: (<code>layer</code>: <a href="./../../modules/game/layers.html#genericlayer"><code>GenericLayer</code></a>, <code>saveData</code>: <code>Record</code>&lt;<code>string</code>, <code>unknown</code>&gt;) =&gt; <code>void</code></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a></h4><p>\u25B8 (<code>layer</code>, <code>saveData</code>): <code>void</code></p><p>Sent whenever a layer is added.</p><h5 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>layer</code></td><td style="text-align:left;"><a href="./../../modules/game/layers.html#genericlayer"><code>GenericLayer</code></a></td><td style="text-align:left;">The layer being added.</td></tr><tr><td style="text-align:left;"><code>saveData</code></td><td style="text-align:left;"><code>Record</code>&lt;<code>string</code>, <code>unknown</code>&gt;</td><td style="text-align:left;">The layer&#39;s save data object within player.</td></tr></tbody></table><h5 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h5><p><code>void</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/013092f/src/game/events.ts#L19" target="_blank" rel="noopener noreferrer">profectus/src/game/events.ts:19</a></p><hr><h3 id="gamewon" tabindex="-1">gameWon <a class="header-anchor" href="#gamewon" aria-hidden="true">#</a></h3><p>\u2022 <strong>gameWon</strong>: <code>VoidFunction</code></p><p>Sent when the game has ended.</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/013092f/src/game/events.ts#L41" target="_blank" rel="noopener noreferrer">profectus/src/game/events.ts:41</a></p><hr><h3 id="loadsettings" tabindex="-1">loadSettings <a class="header-anchor" href="#loadsettings" aria-hidden="true">#</a></h3><p>\u2022 <strong>loadSettings</strong>: (<code>settings</code>: <code>Partial</code>&lt;<a href="./settings.Settings"><code>Settings</code></a>&gt;) =&gt; <code>void</code></p><h4 id="type-declaration-1" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-1" aria-hidden="true">#</a></h4><p>\u25B8 (<code>settings</code>): <code>void</code></p><p>Sent when constructing the Settings object. Use it to add default values for custom properties to the object.</p><p><strong><code>See</code></strong></p><p>features/features.setDefault for setting default values.</p><h5 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>settings</code></td><td style="text-align:left;"><code>Partial</code>&lt;<a href="./settings.Settings"><code>Settings</code></a>&gt;</td><td style="text-align:left;">The settings object being constructed.</td></tr></tbody></table><h5 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h5><p><code>void</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/013092f/src/game/events.ts#L37" target="_blank" rel="noopener noreferrer">profectus/src/game/events.ts:37</a></p><hr><h3 id="removelayer" tabindex="-1">removeLayer <a class="header-anchor" href="#removelayer" aria-hidden="true">#</a></h3><p>\u2022 <strong>removeLayer</strong>: (<code>layer</code>: <a href="./../../modules/game/layers.html#genericlayer"><code>GenericLayer</code></a>) =&gt; <code>void</code></p><h4 id="type-declaration-2" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-2" aria-hidden="true">#</a></h4><p>\u25B8 (<code>layer</code>): <code>void</code></p><p>Sent whenever a layer is removed.</p><h5 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>layer</code></td><td style="text-align:left;"><a href="./../../modules/game/layers.html#genericlayer"><code>GenericLayer</code></a></td><td style="text-align:left;">The layer being removed.</td></tr></tbody></table><h5 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h5><p><code>void</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/013092f/src/game/events.ts#L24" target="_blank" rel="noopener noreferrer">profectus/src/game/events.ts:24</a></p><hr><h3 id="reset" tabindex="-1">reset <a class="header-anchor" href="#reset" aria-hidden="true">#</a></h3><p>\u2022 <strong>reset</strong>: (<code>reset</code>: <a href="./../../modules/features/reset.html#genericreset"><code>GenericReset</code></a>) =&gt; <code>void</code></p><h4 id="type-declaration-3" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-3" aria-hidden="true">#</a></h4><p>\u25B8 (<code>reset</code>): <code>void</code></p><h5 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>reset</code></td><td style="text-align:left;"><a href="./../../modules/features/reset.html#genericreset"><code>GenericReset</code></a></td></tr></tbody></table><h5 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-hidden="true">#</a></h5><p><code>void</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/013092f/src/features/reset.ts#L95" target="_blank" rel="noopener noreferrer">profectus/src/features/reset.ts:95</a></p><hr><h3 id="setupvue" tabindex="-1">setupVue <a class="header-anchor" href="#setupvue" aria-hidden="true">#</a></h3><p>\u2022 <strong>setupVue</strong>: (<code>vue</code>: <code>App</code>&lt;<code>any</code>&gt;) =&gt; <code>void</code></p><h4 id="type-declaration-4" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-4" aria-hidden="true">#</a></h4><p>\u25B8 (<code>vue</code>): <code>void</code></p><p>Sent when setting up the Vue Application instance. Use it to register global components or otherwise set up things that should affect Vue globally.</p><h5 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>vue</code></td><td style="text-align:left;"><code>App</code>&lt;<code>any</code>&gt;</td><td style="text-align:left;">The Vue App being constructed.</td></tr></tbody></table><h5 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-hidden="true">#</a></h5><p><code>void</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/013092f/src/game/events.ts#L47" target="_blank" rel="noopener noreferrer">profectus/src/game/events.ts:47</a></p><hr><h3 id="update" tabindex="-1">update <a class="header-anchor" href="#update" aria-hidden="true">#</a></h3><p>\u2022 <strong>update</strong>: (<code>diff</code>: <code>number</code>, <code>trueDiff</code>: <code>number</code>) =&gt; <code>void</code></p><h4 id="type-declaration-5" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-5" aria-hidden="true">#</a></h4><p>\u25B8 (<code>diff</code>, <code>trueDiff</code>): <code>void</code></p><p>Sent every game tick. Runs the life cycle of the project.</p><h5 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>diff</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">The delta time since last tick, in ms.</td></tr><tr><td style="text-align:left;"><code>trueDiff</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">The delta time since last tick, in ms. Unaffected by time modifiers like game/player.Player.devSpeed or game/player.Player.offlineTime. Intended for things like updating animations.</td></tr></tbody></table><h5 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-hidden="true">#</a></h5><p><code>void</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/013092f/src/game/events.ts#L30" target="_blank" rel="noopener noreferrer">profectus/src/game/events.ts:30</a></p>',82),o=[n];function i(s,l,c,h,f,p){return a(),t("div",null,o)}var y=e(d,[["render",i]]);export{u as __pageData,y as default};
