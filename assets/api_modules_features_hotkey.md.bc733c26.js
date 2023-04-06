import{_ as e,c as t,o as a,N as o}from"./chunks/framework.0799945b.js";const u=JSON.parse('{"title":"Module: features/hotkey","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/modules/features/hotkey.md","lastUpdated":null}'),r={name:"api/modules/features/hotkey.md"},s=o('<h1 id="module-features-hotkey" tabindex="-1">Module: features/hotkey <a class="header-anchor" href="#module-features-hotkey" aria-label="Permalink to &quot;Module: features/hotkey&quot;">​</a></h1><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><ul><li><a href="../../interfaces/features/hotkey.BaseHotkey">BaseHotkey</a></li><li><a href="../../interfaces/features/hotkey.HotkeyOptions">HotkeyOptions</a></li></ul><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="generichotkey" tabindex="-1">GenericHotkey <a class="header-anchor" href="#generichotkey" aria-label="Permalink to &quot;GenericHotkey&quot;">​</a></h3><p>Ƭ <strong>GenericHotkey</strong>: <a href="./feature#replace"><code>Replace</code></a>&lt;<code>Hotkey</code>&lt;<a href="../../interfaces/features/hotkey.HotkeyOptions"><code>HotkeyOptions</code></a>&gt;, { <code>enabled</code>: <a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code>&gt; }&gt;</p><p>A type that matches any valid <a href="./hotkey#hotkey">Hotkey</a> object.</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/hotkey.tsx#L55" target="_blank" rel="noreferrer">profectus/src/features/hotkey.tsx:55</a></p><hr><h3 id="hotkey" tabindex="-1">Hotkey <a class="header-anchor" href="#hotkey" aria-label="Permalink to &quot;Hotkey&quot;">​</a></h3><p>Ƭ <strong>Hotkey</strong>&lt;<code>T</code>&gt;: <a href="./feature#replace"><code>Replace</code></a>&lt;<code>T</code> &amp; <a href="../../interfaces/features/hotkey.BaseHotkey"><code>BaseHotkey</code></a>, { <code>description</code>: <a href="./../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;description&quot;</code>]&gt; ; <code>enabled</code>: <a href="./../util/computed#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;enabled&quot;</code>], <code>true</code>&gt; }&gt;</p><p>An object that represents a hotkey shortcut that performs an action upon a key sequence being pressed.</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../interfaces/features/hotkey.HotkeyOptions"><code>HotkeyOptions</code></a></td></tr></tbody></table><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/hotkey.tsx#L46" target="_blank" rel="noreferrer">profectus/src/features/hotkey.tsx:46</a></p><h2 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h2><h3 id="hotkeytype" tabindex="-1">HotkeyType <a class="header-anchor" href="#hotkeytype" aria-label="Permalink to &quot;HotkeyType&quot;">​</a></h3><p>• <code>Const</code> <strong>HotkeyType</strong>: typeof <a href="./hotkey#hotkeytype"><code>HotkeyType</code></a></p><p>A symbol used to identify <a href="./hotkey#hotkey">Hotkey</a> features.</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/hotkey.tsx#L21" target="_blank" rel="noreferrer">profectus/src/features/hotkey.tsx:21</a></p><hr><h3 id="hotkeys" tabindex="-1">hotkeys <a class="header-anchor" href="#hotkeys" aria-label="Permalink to &quot;hotkeys&quot;">​</a></h3><p>• <code>Const</code> <strong>hotkeys</strong>: <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type" target="_blank" rel="noreferrer"><code>Record</code></a>&lt;<code>string</code>, <a href="./hotkey#generichotkey"><code>GenericHotkey</code></a> | <code>undefined</code>&gt;</p><p>A dictionary of all hotkeys.</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/hotkey.tsx#L19" target="_blank" rel="noreferrer">profectus/src/features/hotkey.tsx:19</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="createhotkey" tabindex="-1">createHotkey <a class="header-anchor" href="#createhotkey" aria-label="Permalink to &quot;createHotkey&quot;">​</a></h3><p>▸ <strong>createHotkey</strong>&lt;<code>T</code>&gt;(<code>optionsFunc</code>): <code>Hotkey</code>&lt;<code>T</code>&gt;</p><p>Lazily creates a hotkey with the given options.</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../interfaces/features/hotkey.HotkeyOptions"><code>HotkeyOptions</code></a></td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>optionsFunc</code></td><td style="text-align:left;"><a href="./feature#optionsfunc"><code>OptionsFunc</code></a>&lt;<code>T</code>, <a href="../../interfaces/features/hotkey.BaseHotkey"><code>BaseHotkey</code></a>, <a href="./hotkey#generichotkey"><code>GenericHotkey</code></a>&gt;</td><td style="text-align:left;">Hotkey options.</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Hotkey</code>&lt;<code>T</code>&gt;</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/hotkey.tsx#L68" target="_blank" rel="noreferrer">profectus/src/features/hotkey.tsx:68</a></p>',41),d=[s];function n(c,i,h,l,f,y){return a(),t("div",null,d)}const k=e(r,[["render",n]]);export{u as __pageData,k as default};
