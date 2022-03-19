import{_ as e,c as t,o as a,a as r}from"./app.54d5a277.js";const g='{"title":"Module: features/conversion","description":"","frontmatter":{},"headers":[{"level":2,"title":"Interfaces","slug":"interfaces"},{"level":2,"title":"Type aliases","slug":"type-aliases"},{"level":3,"title":"Conversion","slug":"conversion"},{"level":3,"title":"GenericConversion","slug":"genericconversion"},{"level":3,"title":"ScalingFunction","slug":"scalingfunction"},{"level":2,"title":"Functions","slug":"functions"},{"level":3,"title":"addHardcap","slug":"addhardcap"},{"level":3,"title":"addSoftcap","slug":"addsoftcap"},{"level":3,"title":"createConversion","slug":"createconversion"},{"level":3,"title":"createCumulativeConversion","slug":"createcumulativeconversion"},{"level":3,"title":"createIndependentConversion","slug":"createindependentconversion"},{"level":3,"title":"createLinearScaling","slug":"createlinearscaling"},{"level":3,"title":"createPolynomialScaling","slug":"createpolynomialscaling"},{"level":3,"title":"setupPassiveGeneration","slug":"setuppassivegeneration"}],"relativePath":"api/modules/features/conversion.md"}',o={},n=r('<h1 id="module-features-conversion" tabindex="-1">Module: features/conversion <a class="header-anchor" href="#module-features-conversion" aria-hidden="true">#</a></h1><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-hidden="true">#</a></h2><ul><li><a href="../../interfaces/features/conversion.BaseConversion">BaseConversion</a></li><li><a href="../../interfaces/features/conversion.ConversionOptions">ConversionOptions</a></li></ul><h2 id="type-aliases" tabindex="-1">Type aliases <a class="header-anchor" href="#type-aliases" aria-hidden="true">#</a></h2><h3 id="conversion" tabindex="-1">Conversion <a class="header-anchor" href="#conversion" aria-hidden="true">#</a></h3><p>\u01AC <strong>Conversion</strong>&lt;<code>T</code>&gt;: <a href="./feature.html#replace"><code>Replace</code></a>&lt;<code>T</code> &amp; <a href="../../interfaces/features/conversion.BaseConversion"><code>BaseConversion</code></a>, { <code>buyMax</code>: <a href="./../util/computed.html#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;buyMax&quot;</code>], <code>true</code>&gt; ; <code>currentGain</code>: <a href="./../util/computed.html#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;currentGain&quot;</code>], <code>Ref</code>&lt;<a href="./../util/bignum.html#decimalsource"><code>DecimalSource</code></a>&gt;&gt; ; <code>nextAt</code>: <a href="./../util/computed.html#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;nextAt&quot;</code>], <code>Ref</code>&lt;<a href="./../util/bignum.html#decimalsource"><code>DecimalSource</code></a>&gt;&gt; ; <code>roundUpCost</code>: <a href="./../util/computed.html#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;roundUpCost&quot;</code>], <code>true</code>&gt; }&gt;</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../interfaces/features/conversion.ConversionOptions"><code>ConversionOptions</code></a></td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/305946e/src/features/conversion.ts#L30" target="_blank" rel="noopener noreferrer">profectus/src/features/conversion.ts:30</a></p><hr><h3 id="genericconversion" tabindex="-1">GenericConversion <a class="header-anchor" href="#genericconversion" aria-hidden="true">#</a></h3><p>\u01AC <strong>GenericConversion</strong>: <a href="./feature.html#replace"><code>Replace</code></a>&lt;<a href="./conversion.html#conversion"><code>Conversion</code></a>&lt;<a href="../../interfaces/features/conversion.ConversionOptions"><code>ConversionOptions</code></a>&gt;, { <code>buyMax</code>: <a href="./../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code>&gt; ; <code>currentGain</code>: <a href="./../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./../util/bignum.html#decimalsource"><code>DecimalSource</code></a>&gt; ; <code>nextAt</code>: <a href="./../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./../util/bignum.html#decimalsource"><code>DecimalSource</code></a>&gt; ; <code>roundUpCost</code>: <a href="./../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code>&gt; }&gt;</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/305946e/src/features/conversion.ts#L40" target="_blank" rel="noopener noreferrer">profectus/src/features/conversion.ts:40</a></p><hr><h3 id="scalingfunction" tabindex="-1">ScalingFunction <a class="header-anchor" href="#scalingfunction" aria-hidden="true">#</a></h3><p>\u01AC <strong>ScalingFunction</strong>: <code>Object</code></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>currentGain</code></td><td style="text-align:left;">(<code>conversion</code>: <a href="./conversion.html#genericconversion"><code>GenericConversion</code></a>) =&gt; <a href="./../lib/break_eternity.html#decimalsource"><code>DecimalSource</code></a></td></tr><tr><td style="text-align:left;"><code>nextAt</code></td><td style="text-align:left;">(<code>conversion</code>: <a href="./conversion.html#genericconversion"><code>GenericConversion</code></a>) =&gt; <a href="./../lib/break_eternity.html#decimalsource"><code>DecimalSource</code></a></td></tr></tbody></table><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/305946e/src/features/conversion.ts#L93" target="_blank" rel="noopener noreferrer">profectus/src/features/conversion.ts:93</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h2><h3 id="addhardcap" tabindex="-1">addHardcap <a class="header-anchor" href="#addhardcap" aria-hidden="true">#</a></h3><p>\u25B8 <strong>addHardcap</strong>(<code>scaling</code>, <code>cap</code>): <a href="./conversion.html#scalingfunction"><code>ScalingFunction</code></a></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>scaling</code></td><td style="text-align:left;"><a href="./conversion.html#scalingfunction"><code>ScalingFunction</code></a></td></tr><tr><td style="text-align:left;"><code>cap</code></td><td style="text-align:left;"><a href="./../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./../lib/break_eternity.html#decimalsource"><code>DecimalSource</code></a>&gt;</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><a href="./conversion.html#scalingfunction"><code>ScalingFunction</code></a></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/305946e/src/features/conversion.ts#L244" target="_blank" rel="noopener noreferrer">profectus/src/features/conversion.ts:244</a></p><hr><h3 id="addsoftcap" tabindex="-1">addSoftcap <a class="header-anchor" href="#addsoftcap" aria-hidden="true">#</a></h3><p>\u25B8 <strong>addSoftcap</strong>(<code>scaling</code>, <code>cap</code>, <code>power?</code>): <a href="./conversion.html#scalingfunction"><code>ScalingFunction</code></a></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>scaling</code></td><td style="text-align:left;"><a href="./conversion.html#scalingfunction"><code>ScalingFunction</code></a></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>cap</code></td><td style="text-align:left;"><a href="./../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./../lib/break_eternity.html#decimalsource"><code>DecimalSource</code></a>&gt;</td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>power</code></td><td style="text-align:left;"><a href="./../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./../lib/break_eternity.html#decimalsource"><code>DecimalSource</code></a>&gt;</td><td style="text-align:left;"><code>0.5</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><a href="./conversion.html#scalingfunction"><code>ScalingFunction</code></a></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/305946e/src/features/conversion.ts#L232" target="_blank" rel="noopener noreferrer">profectus/src/features/conversion.ts:232</a></p><hr><h3 id="createconversion" tabindex="-1">createConversion <a class="header-anchor" href="#createconversion" aria-hidden="true">#</a></h3><p>\u25B8 <strong>createConversion</strong>&lt;<code>T</code>&gt;(<code>optionsFunc</code>): <a href="./conversion.html#conversion"><code>Conversion</code></a>&lt;<code>T</code>&gt;</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../interfaces/features/conversion.ConversionOptions"><code>ConversionOptions</code></a></td></tr></tbody></table><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>optionsFunc</code></td><td style="text-align:left;">() =&gt; <code>T</code> &amp; <code>ThisType</code>&lt;<a href="./conversion.html#conversion"><code>Conversion</code></a>&lt;<code>T</code>&gt;&gt;</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p><a href="./conversion.html#conversion"><code>Conversion</code></a>&lt;<code>T</code>&gt;</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/305946e/src/features/conversion.ts#L50" target="_blank" rel="noopener noreferrer">profectus/src/features/conversion.ts:50</a></p><hr><h3 id="createcumulativeconversion" tabindex="-1">createCumulativeConversion <a class="header-anchor" href="#createcumulativeconversion" aria-hidden="true">#</a></h3><p>\u25B8 <strong>createCumulativeConversion</strong>&lt;<code>S</code>&gt;(<code>optionsFunc</code>): <a href="./conversion.html#conversion"><code>Conversion</code></a>&lt;<code>S</code>&gt;</p><h4 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>S</code></td><td style="text-align:left;">extends <a href="../../interfaces/features/conversion.ConversionOptions"><code>ConversionOptions</code></a></td></tr></tbody></table><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>optionsFunc</code></td><td style="text-align:left;">() =&gt; <code>S</code> &amp; <code>ThisType</code>&lt;<a href="./conversion.html#conversion"><code>Conversion</code></a>&lt;<code>S</code>&gt;&gt;</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-hidden="true">#</a></h4><p><a href="./conversion.html#conversion"><code>Conversion</code></a>&lt;<code>S</code>&gt;</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/305946e/src/features/conversion.ts#L166" target="_blank" rel="noopener noreferrer">profectus/src/features/conversion.ts:166</a></p><hr><h3 id="createindependentconversion" tabindex="-1">createIndependentConversion <a class="header-anchor" href="#createindependentconversion" aria-hidden="true">#</a></h3><p>\u25B8 <strong>createIndependentConversion</strong>&lt;<code>S</code>&gt;(<code>optionsFunc</code>): <a href="./conversion.html#conversion"><code>Conversion</code></a>&lt;<code>S</code>&gt;</p><h4 id="type-parameters-3" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-3" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>S</code></td><td style="text-align:left;">extends <a href="../../interfaces/features/conversion.ConversionOptions"><code>ConversionOptions</code></a></td></tr></tbody></table><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>optionsFunc</code></td><td style="text-align:left;">() =&gt; <code>S</code> &amp; <code>ThisType</code>&lt;<a href="./conversion.html#conversion"><code>Conversion</code></a>&lt;<code>S</code>&gt;&gt;</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-hidden="true">#</a></h4><p><a href="./conversion.html#conversion"><code>Conversion</code></a>&lt;<code>S</code>&gt;</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/305946e/src/features/conversion.ts#L172" target="_blank" rel="noopener noreferrer">profectus/src/features/conversion.ts:172</a></p><hr><h3 id="createlinearscaling" tabindex="-1">createLinearScaling <a class="header-anchor" href="#createlinearscaling" aria-hidden="true">#</a></h3><p>\u25B8 <strong>createLinearScaling</strong>(<code>base</code>, <code>coefficient</code>): <a href="./conversion.html#scalingfunction"><code>ScalingFunction</code></a></p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>base</code></td><td style="text-align:left;"><a href="./../lib/break_eternity.html#decimalsource"><code>DecimalSource</code></a> | <code>Ref</code>&lt;<a href="./../lib/break_eternity.html#decimalsource"><code>DecimalSource</code></a>&gt;</td></tr><tr><td style="text-align:left;"><code>coefficient</code></td><td style="text-align:left;"><a href="./../lib/break_eternity.html#decimalsource"><code>DecimalSource</code></a> | <code>Ref</code>&lt;<a href="./../lib/break_eternity.html#decimalsource"><code>DecimalSource</code></a>&gt;</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-hidden="true">#</a></h4><p><a href="./conversion.html#scalingfunction"><code>ScalingFunction</code></a></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/305946e/src/features/conversion.ts#L100" target="_blank" rel="noopener noreferrer">profectus/src/features/conversion.ts:100</a></p><hr><h3 id="createpolynomialscaling" tabindex="-1">createPolynomialScaling <a class="header-anchor" href="#createpolynomialscaling" aria-hidden="true">#</a></h3><p>\u25B8 <strong>createPolynomialScaling</strong>(<code>base</code>, <code>exponent</code>): <a href="./conversion.html#scalingfunction"><code>ScalingFunction</code></a></p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>base</code></td><td style="text-align:left;"><a href="./../lib/break_eternity.html#decimalsource"><code>DecimalSource</code></a> | <code>Ref</code>&lt;<a href="./../lib/break_eternity.html#decimalsource"><code>DecimalSource</code></a>&gt;</td></tr><tr><td style="text-align:left;"><code>exponent</code></td><td style="text-align:left;"><a href="./../lib/break_eternity.html#decimalsource"><code>DecimalSource</code></a> | <code>Ref</code>&lt;<a href="./../lib/break_eternity.html#decimalsource"><code>DecimalSource</code></a>&gt;</td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-hidden="true">#</a></h4><p><a href="./conversion.html#scalingfunction"><code>ScalingFunction</code></a></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/305946e/src/features/conversion.ts#L135" target="_blank" rel="noopener noreferrer">profectus/src/features/conversion.ts:135</a></p><hr><h3 id="setuppassivegeneration" tabindex="-1">setupPassiveGeneration <a class="header-anchor" href="#setuppassivegeneration" aria-hidden="true">#</a></h3><p>\u25B8 <strong>setupPassiveGeneration</strong>(<code>layer</code>, <code>conversion</code>, <code>rate?</code>): <code>void</code></p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>layer</code></td><td style="text-align:left;"><a href="./../game/layers.html#genericlayer"><code>GenericLayer</code></a></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>conversion</code></td><td style="text-align:left;"><a href="./conversion.html#genericconversion"><code>GenericConversion</code></a></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>rate</code></td><td style="text-align:left;"><a href="./../util/computed.html#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./../lib/break_eternity.html#decimalsource"><code>DecimalSource</code></a>&gt;</td><td style="text-align:left;"><code>1</code></td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/305946e/src/features/conversion.ts#L204" target="_blank" rel="noopener noreferrer">profectus/src/features/conversion.ts:204</a></p>',100),d=[n];function c(i,s,l,h,f,u){return a(),t("div",null,d)}var m=e(o,[["render",c]]);export{g as __pageData,m as default};