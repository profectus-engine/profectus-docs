import{_ as e,c as t,o as a,a as l}from"./app.189352af.js";const f=JSON.parse('{"title":"Module: features/challenges/challenge","description":"","frontmatter":{"editLink":false},"headers":[{"level":2,"title":"Components","slug":"components"},{"level":2,"title":"Interfaces","slug":"interfaces"},{"level":2,"title":"Type Aliases","slug":"type-aliases"},{"level":3,"title":"Challenge","slug":"challenge"},{"level":3,"title":"GenericChallenge","slug":"genericchallenge"},{"level":2,"title":"Variables","slug":"variables"},{"level":3,"title":"ChallengeType","slug":"challengetype"},{"level":2,"title":"Functions","slug":"functions"},{"level":3,"title":"createActiveChallenge","slug":"createactivechallenge"},{"level":3,"title":"createChallenge","slug":"createchallenge"},{"level":3,"title":"isAnyChallengeActive","slug":"isanychallengeactive"},{"level":3,"title":"setupAutoComplete","slug":"setupautocomplete"}],"relativePath":"api/modules/features/challenges/challenge.md","lastUpdated":null}'),c={name:"api/modules/features/challenges/challenge.md"},d=l('<h1 id="module-features-challenges-challenge" tabindex="-1">Module: features/challenges/challenge <a class="header-anchor" href="#module-features-challenges-challenge" aria-hidden="true">#</a></h1><h2 id="components" tabindex="-1">Components <a class="header-anchor" href="#components" aria-hidden="true">#</a></h2><ul><li><a href="./ChallengeComponent.html">Challenge</a></li></ul><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-hidden="true">#</a></h2><ul><li><a href="../../../interfaces/features/challenges/challenge.BaseChallenge">BaseChallenge</a></li><li><a href="../../../interfaces/features/challenges/challenge.ChallengeOptions">ChallengeOptions</a></li></ul><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-hidden="true">#</a></h2><h3 id="challenge" tabindex="-1">Challenge <a class="header-anchor" href="#challenge" aria-hidden="true">#</a></h3><p>\u01AC <strong>Challenge</strong>&lt;<code>T</code>&gt;: <a href="./../feature.html#replace"><code>Replace</code></a>&lt;<code>T</code> &amp; <a href="../../../interfaces/features/challenges/challenge.BaseChallenge"><code>BaseChallenge</code></a>, { <code>canComplete</code>: <a href="./../../util/computed.html#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;canComplete&quot;</code>], <code>Ref</code>&lt;<code>boolean</code>&gt;&gt; ; <code>canStart</code>: <a href="./../../util/computed.html#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;canStart&quot;</code>], <code>true</code>&gt; ; <code>classes</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;classes&quot;</code>]&gt; ; <code>completionLimit</code>: <a href="./../../util/computed.html#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;completionLimit&quot;</code>], <code>1</code>&gt; ; <code>display</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;display&quot;</code>]&gt; ; <code>goal</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;goal&quot;</code>]&gt; ; <code>mark</code>: <a href="./../../util/computed.html#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;mark&quot;</code>], <code>Ref</code>&lt;<code>boolean</code>&gt;&gt; ; <code>style</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;style&quot;</code>]&gt; ; <code>visibility</code>: <a href="./../../util/computed.html#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;visibility&quot;</code>], <a href="./../../../enums/features/feature.Visibility.html#visible"><code>Visible</code></a>&gt; }&gt;</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../../interfaces/features/challenges/challenge.ChallengeOptions"><code>ChallengeOptions</code></a></td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/1f4676d/src/features/challenges/challenge.tsx#L66" target="_blank" rel="noopener noreferrer">profectus/src/features/challenges/challenge.tsx:66</a></p><hr><h3 id="genericchallenge" tabindex="-1">GenericChallenge <a class="header-anchor" href="#genericchallenge" aria-hidden="true">#</a></h3><p>\u01AC <strong>GenericChallenge</strong>: <a href="./../feature.html#replace"><code>Replace</code></a>&lt;<a href="./challenge.html#challenge"><code>Challenge</code></a>&lt;<a href="../../../interfaces/features/challenges/challenge.ChallengeOptions"><code>ChallengeOptions</code></a>&gt;, { <code>canComplete</code>: <a href="./../../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code> | <a href="./../../util/bignum.html#decimalsource"><code>DecimalSource</code></a>&gt; ; <code>canStart</code>: <a href="./../../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code>&gt; ; <code>completionLimit</code>: <a href="./../../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./../../util/bignum.html#decimalsource"><code>DecimalSource</code></a>&gt; ; <code>mark</code>: <a href="./../../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code>&gt; ; <code>visibility</code>: <a href="./../../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="../../../enums/features/feature.Visibility"><code>Visibility</code></a>&gt; }&gt;</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/1f4676d/src/features/challenges/challenge.tsx#L81" target="_blank" rel="noopener noreferrer">profectus/src/features/challenges/challenge.tsx:81</a></p><h2 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-hidden="true">#</a></h2><h3 id="challengetype" tabindex="-1">ChallengeType <a class="header-anchor" href="#challengetype" aria-hidden="true">#</a></h3><p>\u2022 <code>Const</code> <strong>ChallengeType</strong>: typeof <a href="./challenge.html#challengetype"><code>ChallengeType</code></a></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/1f4676d/src/features/challenges/challenge.tsx#L25" target="_blank" rel="noopener noreferrer">profectus/src/features/challenges/challenge.tsx:25</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h2><h3 id="createactivechallenge" tabindex="-1">createActiveChallenge <a class="header-anchor" href="#createactivechallenge" aria-hidden="true">#</a></h3><p>\u25B8 <strong>createActiveChallenge</strong>(<code>challenges</code>): <code>Ref</code>&lt;<a href="./challenge.html#genericchallenge"><code>GenericChallenge</code></a> | <code>undefined</code>&gt;</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>challenges</code></td><td style="text-align:left;"><a href="./challenge.html#genericchallenge"><code>GenericChallenge</code></a>[]</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><code>Ref</code>&lt;<a href="./challenge.html#genericchallenge"><code>GenericChallenge</code></a> | <code>undefined</code>&gt;</p><hr><h3 id="createchallenge" tabindex="-1">createChallenge <a class="header-anchor" href="#createchallenge" aria-hidden="true">#</a></h3><p>\u25B8 <strong>createChallenge</strong>&lt;<code>T</code>&gt;(<code>optionsFunc</code>): <a href="./challenge.html#challenge"><code>Challenge</code></a>&lt;<code>T</code>&gt;</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../../interfaces/features/challenges/challenge.ChallengeOptions"><code>ChallengeOptions</code></a></td></tr></tbody></table><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>optionsFunc</code></td><td style="text-align:left;"><a href="./../feature.html#optionsfunc"><code>OptionsFunc</code></a>&lt;<code>T</code>, <a href="../../../interfaces/features/challenges/challenge.BaseChallenge"><code>BaseChallenge</code></a>, <a href="./challenge.html#genericchallenge"><code>GenericChallenge</code></a>&gt;</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><a href="./challenge.html#challenge"><code>Challenge</code></a>&lt;<code>T</code>&gt;</p><hr><h3 id="isanychallengeactive" tabindex="-1">isAnyChallengeActive <a class="header-anchor" href="#isanychallengeactive" aria-hidden="true">#</a></h3><p>\u25B8 <strong>isAnyChallengeActive</strong>(<code>challenges</code>): <code>Ref</code>&lt;<code>boolean</code>&gt;</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>challenges</code></td><td style="text-align:left;"><a href="./challenge.html#genericchallenge"><code>GenericChallenge</code></a>[] | <code>Ref</code>&lt;<code>undefined</code> | <a href="./challenge.html#genericchallenge"><code>GenericChallenge</code></a>&gt;</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p><code>Ref</code>&lt;<code>boolean</code>&gt;</p><hr><h3 id="setupautocomplete" tabindex="-1">setupAutoComplete <a class="header-anchor" href="#setupautocomplete" aria-hidden="true">#</a></h3><p>\u25B8 <strong>setupAutoComplete</strong>(<code>challenge</code>, <code>autoActive?</code>, <code>exitOnComplete?</code>): <code>WatchStopHandle</code></p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>challenge</code></td><td style="text-align:left;"><a href="./challenge.html#genericchallenge"><code>GenericChallenge</code></a></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>autoActive</code></td><td style="text-align:left;"><a href="./../../util/computed.html#computable"><code>Computable</code></a>&lt;<code>boolean</code>&gt;</td><td style="text-align:left;"><code>true</code></td></tr><tr><td style="text-align:left;"><code>exitOnComplete</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>true</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-hidden="true">#</a></h4><p><code>WatchStopHandle</code></p>',52),o=[d];function n(r,h,i,s,g,u){return a(),t("div",null,o)}var m=e(c,[["render",n]]);export{f as __pageData,m as default};
