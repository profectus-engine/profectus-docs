import{_ as e,c as t,o as r,a}from"./app.ab34650d.js";const p=JSON.parse('{"title":"Module: features/resources/resource","description":"","frontmatter":{"editLink":false},"headers":[{"level":2,"title":"Components","slug":"components"},{"level":2,"title":"Interfaces","slug":"interfaces"},{"level":2,"title":"Functions","slug":"functions"},{"level":3,"title":"createResource","slug":"createresource"},{"level":3,"title":"displayResource","slug":"displayresource"},{"level":3,"title":"trackBest","slug":"trackbest"},{"level":3,"title":"trackOOMPS","slug":"trackoomps"},{"level":3,"title":"trackTotal","slug":"tracktotal"},{"level":3,"title":"unwrapResource","slug":"unwrapresource"}],"relativePath":"api/modules/features/resources/resource.md","lastUpdated":null}'),d={name:"api/modules/features/resources/resource.md"},c=a('<h1 id="module-features-resources-resource" tabindex="-1">Module: features/resources/resource <a class="header-anchor" href="#module-features-resources-resource" aria-hidden="true">#</a></h1><h2 id="components" tabindex="-1">Components <a class="header-anchor" href="#components" aria-hidden="true">#</a></h2><ul><li><a href="./MainDisplayComponent.html">MainDisplay</a></li><li><a href="./ResourceComponent.html">Resource</a></li></ul><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-hidden="true">#</a></h2><ul><li><a href="../../../interfaces/features/resources/resource.Resource">Resource</a></li></ul><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h2><h3 id="createresource" tabindex="-1">createResource <a class="header-anchor" href="#createresource" aria-hidden="true">#</a></h3><p>\u25B8 <strong>createResource</strong>&lt;<code>T</code>&gt;(<code>defaultValue</code>, <code>displayName?</code>, <code>precision?</code>, <code>small?</code>): <a href="../../../interfaces/features/resources/resource.Resource"><code>Resource</code></a>&lt;<code>T</code>&gt;</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./../../game/persistence.html#state"><code>State</code></a></td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>defaultValue</code></td><td style="text-align:left;"><code>T</code> | <code>Ref</code>&lt;<code>T</code>&gt;</td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>displayName</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>&quot;points&quot;</code></td></tr><tr><td style="text-align:left;"><code>precision</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>0</code></td></tr><tr><td style="text-align:left;"><code>small</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;"><code>undefined</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><a href="../../../interfaces/features/resources/resource.Resource"><code>Resource</code></a>&lt;<code>T</code>&gt;</p><hr><h3 id="displayresource" tabindex="-1">displayResource <a class="header-anchor" href="#displayresource" aria-hidden="true">#</a></h3><p>\u25B8 <strong>displayResource</strong>(<code>resource</code>, <code>overrideAmount?</code>): <code>string</code></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>resource</code></td><td style="text-align:left;"><a href="../../../interfaces/features/resources/resource.Resource"><code>Resource</code></a>&lt;<a href="./../../lib/break_eternity.html#decimalsource"><code>DecimalSource</code></a>&gt;</td></tr><tr><td style="text-align:left;"><code>overrideAmount?</code></td><td style="text-align:left;"><a href="./../../lib/break_eternity.html#decimalsource"><code>DecimalSource</code></a></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><code>string</code></p><hr><h3 id="trackbest" tabindex="-1">trackBest <a class="header-anchor" href="#trackbest" aria-hidden="true">#</a></h3><p>\u25B8 <strong>trackBest</strong>(<code>resource</code>): <code>Ref</code>&lt;<a href="./../../util/bignum.html#decimalsource"><code>DecimalSource</code></a>&gt;</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>resource</code></td><td style="text-align:left;"><a href="../../../interfaces/features/resources/resource.Resource"><code>Resource</code></a>&lt;<a href="./../../lib/break_eternity.html#decimalsource"><code>DecimalSource</code></a>&gt;</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p><code>Ref</code>&lt;<a href="./../../util/bignum.html#decimalsource"><code>DecimalSource</code></a>&gt;</p><hr><h3 id="trackoomps" tabindex="-1">trackOOMPS <a class="header-anchor" href="#trackoomps" aria-hidden="true">#</a></h3><p>\u25B8 <strong>trackOOMPS</strong>(<code>resource</code>, <code>pointGain?</code>): <code>Ref</code>&lt;<code>string</code>&gt;</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>resource</code></td><td style="text-align:left;"><a href="../../../interfaces/features/resources/resource.Resource"><code>Resource</code></a>&lt;<a href="./../../lib/break_eternity.html#decimalsource"><code>DecimalSource</code></a>&gt;</td></tr><tr><td style="text-align:left;"><code>pointGain?</code></td><td style="text-align:left;"><code>ComputedRef</code>&lt;<a href="./../../lib/break_eternity.html#decimalsource"><code>DecimalSource</code></a>&gt;</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-hidden="true">#</a></h4><p><code>Ref</code>&lt;<code>string</code>&gt;</p><hr><h3 id="tracktotal" tabindex="-1">trackTotal <a class="header-anchor" href="#tracktotal" aria-hidden="true">#</a></h3><p>\u25B8 <strong>trackTotal</strong>(<code>resource</code>): <code>Ref</code>&lt;<a href="./../../util/bignum.html#decimalsource"><code>DecimalSource</code></a>&gt;</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>resource</code></td><td style="text-align:left;"><a href="../../../interfaces/features/resources/resource.Resource"><code>Resource</code></a>&lt;<a href="./../../lib/break_eternity.html#decimalsource"><code>DecimalSource</code></a>&gt;</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-hidden="true">#</a></h4><p><code>Ref</code>&lt;<a href="./../../util/bignum.html#decimalsource"><code>DecimalSource</code></a>&gt;</p><hr><h3 id="unwrapresource" tabindex="-1">unwrapResource <a class="header-anchor" href="#unwrapresource" aria-hidden="true">#</a></h3><p>\u25B8 <strong>unwrapResource</strong>(<code>resource</code>): <a href="../../../interfaces/features/resources/resource.Resource"><code>Resource</code></a></p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>resource</code></td><td style="text-align:left;"><a href="./../../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="../../../interfaces/features/resources/resource.Resource"><code>Resource</code></a>&lt;<a href="./../../lib/break_eternity.html#decimalsource"><code>DecimalSource</code></a>&gt;&gt;</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-hidden="true">#</a></h4><p><a href="../../../interfaces/features/resources/resource.Resource"><code>Resource</code></a></p>',49),o=[c];function s(l,i,n,h,u,f){return r(),t("div",null,o)}var g=e(d,[["render",s]]);export{p as __pageData,g as default};
