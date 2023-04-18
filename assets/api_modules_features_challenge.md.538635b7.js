import{_ as e,c as t,o as a,N as l}from"./chunks/framework.0799945b.js";const u=JSON.parse('{"title":"Module: features/challenges/challenge","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/modules/features/challenge.md","lastUpdated":null}'),o={name:"api/modules/features/challenge.md"},c=l('<h1 id="module-features-challenges-challenge" tabindex="-1">Module: features/challenges/challenge <a class="header-anchor" href="#module-features-challenges-challenge" aria-label="Permalink to &quot;Module: features/challenges/challenge&quot;">​</a></h1><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><h3 id="basechallenge" tabindex="-1">BaseChallenge <a class="header-anchor" href="#basechallenge" aria-label="Permalink to &quot;BaseChallenge&quot;">​</a></h3><p>• <strong>BaseChallenge</strong>: <code>Object</code></p><p>The properties that are added onto a processed <a href="./challenge#challengeoptions">ChallengeOptions</a> to create a <a href="./challenge#challenge">Challenge</a>.</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/challenges/challenge.tsx#L91" target="_blank" rel="noreferrer">profectus/src/features/challenges/challenge.tsx:91</a></p><hr><h3 id="challengeoptions" tabindex="-1">ChallengeOptions <a class="header-anchor" href="#challengeoptions" aria-label="Permalink to &quot;ChallengeOptions&quot;">​</a></h3><p>• <strong>ChallengeOptions</strong>: <code>Object</code></p><p>An object that configures a <a href="./challenge#challenge">Challenge</a>.</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/challenges/challenge.tsx#L45" target="_blank" rel="noreferrer">profectus/src/features/challenges/challenge.tsx:45</a></p><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="challenge" tabindex="-1">Challenge <a class="header-anchor" href="#challenge" aria-label="Permalink to &quot;Challenge&quot;">​</a></h3><p>Ƭ <strong>Challenge</strong>&lt;<code>T</code>&gt;: <a href="./feature#replace"><code>Replace</code></a>&lt;<code>T</code> &amp; <a href="./challenge#basechallenge"><code>BaseChallenge</code></a>, { <code>canStart</code>: <a href="./../util/computed#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;canStart&quot;</code>], <code>true</code>&gt; ; <code>classes</code>: <a href="./../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;classes&quot;</code>]&gt; ; <code>completionLimit</code>: <a href="./../util/computed#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;completionLimit&quot;</code>], <code>1</code>&gt; ; <code>display</code>: <a href="./../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;display&quot;</code>]&gt; ; <code>mark</code>: <a href="./../util/computed#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;mark&quot;</code>], <code>Ref</code>&lt;<code>boolean</code>&gt;&gt; ; <code>maximize</code>: <a href="./../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;maximize&quot;</code>]&gt; ; <code>requirements</code>: <a href="./../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;requirements&quot;</code>]&gt; ; <code>style</code>: <a href="./../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;style&quot;</code>]&gt; ; <code>visibility</code>: <a href="./../util/computed#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;visibility&quot;</code>], <a href="./feature#visible"><code>Visible</code></a>&gt; }&gt;</p><p>An object that represents a feature that can be entered and exited, and have one or more completions with scaling requirements.</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./challenge#challengeoptions"><code>ChallengeOptions</code></a></td></tr></tbody></table><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/challenges/challenge.tsx#L120" target="_blank" rel="noreferrer">profectus/src/features/challenges/challenge.tsx:120</a></p><hr><h3 id="genericchallenge" tabindex="-1">GenericChallenge <a class="header-anchor" href="#genericchallenge" aria-label="Permalink to &quot;GenericChallenge&quot;">​</a></h3><p>Ƭ <strong>GenericChallenge</strong>: <a href="./feature#replace"><code>Replace</code></a>&lt;<a href="./challenge#challenge"><code>Challenge</code></a>&lt;<a href="./challenge#challengeoptions"><code>ChallengeOptions</code></a>&gt;, { <code>canStart</code>: <a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code>&gt; ; <code>completionLimit</code>: <a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./../util/bignum#decimalsource"><code>DecimalSource</code></a>&gt; ; <code>mark</code>: <a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code>&gt; ; <code>visibility</code>: <a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./feature#visibility"><code>Visibility</code></a> | <code>boolean</code>&gt; }&gt;</p><p>A type that matches any valid <a href="./challenge#challenge">Challenge</a> object.</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/challenges/challenge.tsx#L136" target="_blank" rel="noreferrer">profectus/src/features/challenges/challenge.tsx:136</a></p><h2 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h2><h3 id="challengetype" tabindex="-1">ChallengeType <a class="header-anchor" href="#challengetype" aria-label="Permalink to &quot;ChallengeType&quot;">​</a></h3><p>• <code>Const</code> <strong>ChallengeType</strong>: typeof <a href="./challenge#challengetype"><code>ChallengeType</code></a></p><p>A symbol used to identify <a href="./challenge#challenge">Challenge</a> features.</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/challenges/challenge.tsx#L40" target="_blank" rel="noreferrer">profectus/src/features/challenges/challenge.tsx:40</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="createactivechallenge" tabindex="-1">createActiveChallenge <a class="header-anchor" href="#createactivechallenge" aria-label="Permalink to &quot;createActiveChallenge&quot;">​</a></h3><p>▸ <strong>createActiveChallenge</strong>(<code>challenges</code>): <code>Ref</code>&lt;<a href="./challenge#genericchallenge"><code>GenericChallenge</code></a> | <code>null</code>&gt;</p><p>Utility for taking an array of challenges where only one may be active at a time, and giving a ref to the one currently active (or null if none are active)</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>challenges</code></td><td style="text-align:left;"><a href="./challenge#genericchallenge"><code>GenericChallenge</code></a>[]</td><td style="text-align:left;">The list of challenges that are mutually exclusive</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Ref</code>&lt;<a href="./challenge#genericchallenge"><code>GenericChallenge</code></a> | <code>null</code>&gt;</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/challenges/challenge.tsx#L324" target="_blank" rel="noreferrer">profectus/src/features/challenges/challenge.tsx:324</a></p><hr><h3 id="createchallenge" tabindex="-1">createChallenge <a class="header-anchor" href="#createchallenge" aria-label="Permalink to &quot;createChallenge&quot;">​</a></h3><p>▸ <strong>createChallenge</strong>&lt;<code>T</code>&gt;(<code>optionsFunc</code>): <a href="./challenge#challenge"><code>Challenge</code></a>&lt;<code>T</code>&gt;</p><p>Lazily creates a challenge with the given options.</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./challenge#challengeoptions"><code>ChallengeOptions</code></a></td></tr></tbody></table><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>optionsFunc</code></td><td style="text-align:left;"><a href="./feature#optionsfunc"><code>OptionsFunc</code></a>&lt;<code>T</code>, <a href="./challenge#basechallenge"><code>BaseChallenge</code></a>, <a href="./challenge#genericchallenge"><code>GenericChallenge</code></a>&gt;</td><td style="text-align:left;">Challenge options.</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./challenge#challenge"><code>Challenge</code></a>&lt;<code>T</code>&gt;</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/challenges/challenge.tsx#L150" target="_blank" rel="noreferrer">profectus/src/features/challenges/challenge.tsx:150</a></p><hr><h3 id="isanychallengeactive" tabindex="-1">isAnyChallengeActive <a class="header-anchor" href="#isanychallengeactive" aria-label="Permalink to &quot;isAnyChallengeActive&quot;">​</a></h3><p>▸ <strong>isAnyChallengeActive</strong>(<code>challenges</code>): <code>Ref</code>&lt;<code>boolean</code>&gt;</p><p>Utility for reporting if any challenge in a list is currently active. Intended for preventing entering a challenge if another is already active.</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>challenges</code></td><td style="text-align:left;"><a href="./challenge#genericchallenge"><code>GenericChallenge</code></a>[] | <code>Ref</code>&lt;<code>null</code> | <a href="./challenge#genericchallenge"><code>GenericChallenge</code></a>&gt;</td><td style="text-align:left;">List of challenges that are mutually exclusive</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Ref</code>&lt;<code>boolean</code>&gt;</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/challenges/challenge.tsx#L334" target="_blank" rel="noreferrer">profectus/src/features/challenges/challenge.tsx:334</a></p><hr><h3 id="setupautocomplete" tabindex="-1">setupAutoComplete <a class="header-anchor" href="#setupautocomplete" aria-label="Permalink to &quot;setupAutoComplete&quot;">​</a></h3><p>▸ <strong>setupAutoComplete</strong>(<code>challenge</code>, <code>autoActive?</code>, <code>exitOnComplete?</code>): <code>WatchStopHandle</code></p><p>This will automatically complete a challenge when it&#39;s requirements are met.</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>challenge</code></td><td style="text-align:left;"><a href="./challenge#genericchallenge"><code>GenericChallenge</code></a></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">The challenge to auto-complete</td></tr><tr><td style="text-align:left;"><code>autoActive</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<code>boolean</code>&gt;</td><td style="text-align:left;"><code>true</code></td><td style="text-align:left;">Whether or not auto-completing should currently occur</td></tr><tr><td style="text-align:left;"><code>exitOnComplete</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>true</code></td><td style="text-align:left;">Whether or not to exit the challenge after auto-completion</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>WatchStopHandle</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/ba67ff4/src/features/challenges/challenge.tsx#L304" target="_blank" rel="noreferrer">profectus/src/features/challenges/challenge.tsx:304</a></p><h2 id="components" tabindex="-1">Components <a class="header-anchor" href="#components" aria-label="Permalink to &quot;Components&quot;">​</a></h2><h3 id="challenge-component" tabindex="-1">Challenge Component <a class="header-anchor" href="#challenge-component" aria-label="Permalink to &quot;Challenge Component&quot;">​</a></h3><h4 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>active</code>*</td><td style="text-align:left;"><code>processedPropType&lt;boolean&gt;(Boolean)</code></td></tr><tr><td style="text-align:left;"><code>maxed</code>*</td><td style="text-align:left;"><code>processedPropType&lt;boolean&gt;(Boolean)</code></td></tr><tr><td style="text-align:left;"><code>canComplete</code>*</td><td style="text-align:left;"><code>processedPropType&lt;boolean&gt;(Boolean)</code></td></tr><tr><td style="text-align:left;"><code>display</code></td><td style="text-align:left;"><code>processedPropType&lt;UnwrapRef&lt;GenericChallenge[&quot;display&quot;]&gt;&gt;(<br> String,<br> Object,<br> Function<br>)</code></td></tr><tr><td style="text-align:left;"><code>requirements</code></td><td style="text-align:left;"><code>processedPropType&lt;Requirements&gt;(Object, Array)</code></td></tr><tr><td style="text-align:left;"><code>visibility</code>*</td><td style="text-align:left;"><code>processedPropType&lt;Visibility | boolean&gt;(Number, Boolean)</code></td></tr><tr><td style="text-align:left;"><code>style</code></td><td style="text-align:left;"><code>processedPropType&lt;StyleValue&gt;(String, Object, Array)</code></td></tr><tr><td style="text-align:left;"><code>classes</code></td><td style="text-align:left;"><code>processedPropType&lt;Record&lt;string, boolean&gt;&gt;(Object)</code></td></tr><tr><td style="text-align:left;"><code>completed</code>*</td><td style="text-align:left;"><code>processedPropType&lt;boolean&gt;(Boolean)</code></td></tr><tr><td style="text-align:left;"><code>canStart</code>*</td><td style="text-align:left;"><code>processedPropType&lt;boolean&gt;(Boolean)</code></td></tr><tr><td style="text-align:left;"><code>mark</code></td><td style="text-align:left;"><code>processedPropType&lt;boolean | string&gt;(Boolean, String)</code></td></tr><tr><td style="text-align:left;"><code>id</code>*</td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>toggle</code>*</td><td style="text-align:left;"><code>VoidFunction</code></td></tr></tbody></table>',79),n=[c];function r(d,i,s,h,g,f){return a(),t("div",null,n)}const b=e(o,[["render",r]]);export{u as __pageData,b as default};