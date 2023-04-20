import{_ as e,c as t,o as a,N as r}from"./chunks/framework.0799945b.js";const u=JSON.parse('{"title":"Module: game/settings","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/modules/game/settings.md","lastUpdated":null}'),o={name:"api/modules/game/settings.md"},n=r('<h1 id="module-game-settings" tabindex="-1">Module: game/settings <a class="header-anchor" href="#module-game-settings" aria-label="Permalink to &quot;Module: game/settings&quot;">​</a></h1><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><h3 id="settings" tabindex="-1">Settings <a class="header-anchor" href="#settings" aria-label="Permalink to &quot;Settings&quot;">​</a></h3><p>• <strong>Settings</strong>: <code>Object</code></p><p>The player&#39;s settings object.</p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>active</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The ID of the active save.</td></tr><tr><td style="text-align:left;"><code>alignUnits</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Whether to align modifiers to the unit.</td></tr><tr><td style="text-align:left;"><code>hideChallenges</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>msDisplay</code></td><td style="text-align:left;"><a href="./../features/achievement#achievementdisplay"><code>AchievementDisplay</code></a></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>saves</code></td><td style="text-align:left;"><code>string</code>[]</td><td style="text-align:left;">The IDs of all created saves.</td></tr><tr><td style="text-align:left;"><code>showTPS</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Whether or not to show the current ticks per second in the lower left corner of the page.</td></tr><tr><td style="text-align:left;"><code>theme</code></td><td style="text-align:left;"><a href="./../data/themes#themes"><code>Themes</code></a></td><td style="text-align:left;">The current theme to display the game in.</td></tr><tr><td style="text-align:left;"><code>unthrottled</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Whether or not to cap the project at 20 ticks per second.</td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/87a2d6b/src/game/settings.ts#L10" target="_blank" rel="noreferrer">profectus/src/game/settings.ts:10</a></p><p><a href="https://github.com/profectus-engine/Profectus/blob/87a2d6b/src/features/achievements/achievement.tsx#L292" target="_blank" rel="noreferrer">profectus/src/features/achievements/achievement.tsx:292</a></p><p><a href="https://github.com/profectus-engine/Profectus/blob/87a2d6b/src/features/challenges/challenge.tsx#L365" target="_blank" rel="noreferrer">profectus/src/features/challenges/challenge.tsx:365</a></p><h2 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h2><h3 id="default" tabindex="-1">default <a class="header-anchor" href="#default" aria-label="Permalink to &quot;default&quot;">​</a></h3><p>• <strong>default</strong>: <a href="./settings#settings"><code>Settings</code></a></p><p>The player settings object. Stores data that persists across all saves. Automatically saved to localStorage whenever changed.</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/87a2d6b/src/game/settings.ts#L56" target="_blank" rel="noreferrer">profectus/src/game/settings.ts:56</a></p><hr><h3 id="gamecomponents" tabindex="-1">gameComponents <a class="header-anchor" href="#gamecomponents" aria-label="Permalink to &quot;gameComponents&quot;">​</a></h3><p>• <code>Const</code> <strong>gameComponents</strong>: <a href="./../features/feature#coercablecomponent"><code>CoercableComponent</code></a>[]</p><p>A list of components to add to the root of the page.</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/87a2d6b/src/game/settings.ts#L119" target="_blank" rel="noreferrer">profectus/src/game/settings.ts:119</a></p><hr><h3 id="infocomponents" tabindex="-1">infoComponents <a class="header-anchor" href="#infocomponents" aria-label="Permalink to &quot;infoComponents&quot;">​</a></h3><p>• <code>Const</code> <strong>infoComponents</strong>: <a href="./../features/feature#coercablecomponent"><code>CoercableComponent</code></a>[]</p><p>A list of components to show in the info modal.</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/87a2d6b/src/game/settings.ts#L112" target="_blank" rel="noreferrer">profectus/src/game/settings.ts:112</a></p><hr><h3 id="settingfields" tabindex="-1">settingFields <a class="header-anchor" href="#settingfields" aria-label="Permalink to &quot;settingFields&quot;">​</a></h3><p>• <code>Const</code> <strong>settingFields</strong>: <a href="./../features/feature#coercablecomponent"><code>CoercableComponent</code></a>[]</p><p>A list of fields to append to the settings modal.</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/87a2d6b/src/game/settings.ts#L105" target="_blank" rel="noreferrer">profectus/src/game/settings.ts:105</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="hardresetsettings" tabindex="-1">hardResetSettings <a class="header-anchor" href="#hardresetsettings" aria-label="Permalink to &quot;hardResetSettings&quot;">​</a></h3><p>▸ <strong>hardResetSettings</strong>(): <code>void</code></p><p>A function that erases all player settings, including all saves.</p><h5 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>void</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/87a2d6b/src/game/settings.ts#L58" target="_blank" rel="noreferrer">profectus/src/game/settings.ts:58</a></p><hr><h3 id="loadsettings" tabindex="-1">loadSettings <a class="header-anchor" href="#loadsettings" aria-label="Permalink to &quot;loadSettings&quot;">​</a></h3><p>▸ <strong>loadSettings</strong>(): <code>void</code></p><p>Loads the player settings from localStorage. Calls the GlobalEvents.loadSettings event for custom properties to be included. Custom properties should be added by the file they relate to, so they won&#39;t be included if the file is tree shaken away. Custom properties should also register the field to modify said setting using <a href="./settings#registersettingfield">registerSettingField</a>.</p><h5 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>void</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/87a2d6b/src/game/settings.ts#L77" target="_blank" rel="noreferrer">profectus/src/game/settings.ts:77</a></p><hr><h3 id="registergamecomponent" tabindex="-1">registerGameComponent <a class="header-anchor" href="#registergamecomponent" aria-label="Permalink to &quot;registerGameComponent&quot;">​</a></h3><p>▸ <strong>registerGameComponent</strong>(<code>component</code>): <code>void</code></p><p>Register a component to be displayed at the root of the page.</p><h5 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>component</code></td><td style="text-align:left;"><a href="./../features/feature#coercablecomponent"><code>CoercableComponent</code></a></td></tr></tbody></table><h5 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>void</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/87a2d6b/src/game/settings.ts#L121" target="_blank" rel="noreferrer">profectus/src/game/settings.ts:121</a></p><hr><h3 id="registerinfocomponent" tabindex="-1">registerInfoComponent <a class="header-anchor" href="#registerinfocomponent" aria-label="Permalink to &quot;registerInfoComponent&quot;">​</a></h3><p>▸ <strong>registerInfoComponent</strong>(<code>component</code>): <code>void</code></p><p>Register a component to be displayed in the info modal.</p><h5 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>component</code></td><td style="text-align:left;"><a href="./../features/feature#coercablecomponent"><code>CoercableComponent</code></a></td></tr></tbody></table><h5 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>void</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/87a2d6b/src/game/settings.ts#L114" target="_blank" rel="noreferrer">profectus/src/game/settings.ts:114</a></p><hr><h3 id="registersettingfield" tabindex="-1">registerSettingField <a class="header-anchor" href="#registersettingfield" aria-label="Permalink to &quot;registerSettingField&quot;">​</a></h3><p>▸ <strong>registerSettingField</strong>(<code>component</code>): <code>void</code></p><p>Register a field to be displayed in the settings modal.</p><h5 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>component</code></td><td style="text-align:left;"><a href="./../features/feature#coercablecomponent"><code>CoercableComponent</code></a></td></tr></tbody></table><h5 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>void</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/87a2d6b/src/game/settings.ts#L107" target="_blank" rel="noreferrer">profectus/src/game/settings.ts:107</a></p>',80),s=[n];function i(d,l,c,h,f,g){return a(),t("div",null,s)}const m=e(o,[["render",i]]);export{u as __pageData,m as default};