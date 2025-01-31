import{_ as r,c as a,a0 as o,o as t}from"./chunks/framework.P9qPzDnn.js";const f=JSON.parse('{"title":"Interface: ConversionOptions","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/features/conversion/interfaces/ConversionOptions.md","filePath":"api/features/conversion/interfaces/ConversionOptions.md","lastUpdated":null}'),n={name:"api/features/conversion/interfaces/ConversionOptions.md"};function i(s,e,c,l,u,h){return t(),a("div",null,e[0]||(e[0]=[o('<p><a href="./../../../">Profectus</a> / <a href="./../">features/conversion</a> / ConversionOptions</p><h1 id="interface-conversionoptions" tabindex="-1">Interface: ConversionOptions <a class="header-anchor" href="#interface-conversionoptions" aria-label="Permalink to &quot;Interface: ConversionOptions&quot;">​</a></h1><p>An object that configures a <a href="./Conversion">Conversion</a>.</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="actualgain" tabindex="-1">actualGain? <a class="header-anchor" href="#actualgain" aria-label="Permalink to &quot;actualGain?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>actualGain</strong>: <a href="https://vuejs.org/api/utility-types.html#maybereforgetter" target="_blank" rel="noreferrer"><code>MaybeRefOrGetter</code></a>&lt;<a href="./../../../lib/break_eternity/type-aliases/DecimalSource"><code>DecimalSource</code></a>&gt;</p></blockquote><p>The absolute amount the output resource will be changed by. Typically this will be set for you in a conversion constructor. This will differ from <a href="./ConversionOptions#currentgain">currentGain</a> in the cases where the conversion isn&#39;t just adding the converted amount to the output resource.</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/features/conversion.ts#L72" target="_blank" rel="noreferrer">profectus/src/features/conversion.ts:72</a></p><hr><h3 id="baseresource" tabindex="-1">baseResource <a class="header-anchor" href="#baseresource" aria-label="Permalink to &quot;baseResource&quot;">​</a></h3><blockquote><p><strong>baseResource</strong>: <a href="./../../resources/resource/interfaces/Resource"><code>Resource</code></a></p></blockquote><p>The input <a href="./../../resources/resource/interfaces/Resource">features/resources/resource.Resource</a> for this conversion.</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/features/conversion.ts#L87" target="_blank" rel="noreferrer">profectus/src/features/conversion.ts:87</a></p><hr><h3 id="buymax" tabindex="-1">buyMax? <a class="header-anchor" href="#buymax" aria-label="Permalink to &quot;buyMax?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>buyMax</strong>: <a href="https://vuejs.org/api/utility-types.html#maybereforgetter" target="_blank" rel="noreferrer"><code>MaybeRefOrGetter</code></a>&lt;<code>boolean</code>&gt;</p></blockquote><p>Whether or not to cap the amount of the output resource gained by converting at 1. Defaults to true.</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/features/conversion.ts#L96" target="_blank" rel="noreferrer">profectus/src/features/conversion.ts:96</a></p><hr><h3 id="convert" tabindex="-1">convert? <a class="header-anchor" href="#convert" aria-label="Permalink to &quot;convert?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>convert</strong>: <code>VoidFunction</code></p></blockquote><p>The function that performs the actual conversion from <a href="./ConversionOptions#baseresource">baseResource</a> to <a href="./ConversionOptions#gainresource">gainResource</a>. Typically this will be set for you in a conversion constructor.</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/features/conversion.ts#L101" target="_blank" rel="noreferrer">profectus/src/features/conversion.ts:101</a></p><hr><h3 id="currentat" tabindex="-1">currentAt? <a class="header-anchor" href="#currentat" aria-label="Permalink to &quot;currentAt?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>currentAt</strong>: <a href="https://vuejs.org/api/utility-types.html#maybereforgetter" target="_blank" rel="noreferrer"><code>MaybeRefOrGetter</code></a>&lt;<a href="./../../../lib/break_eternity/type-aliases/DecimalSource"><code>DecimalSource</code></a>&gt;</p></blockquote><p>The amount of the input resource currently being required in order to produce the <a href="./ConversionOptions#currentgain">currentGain</a>. That is, if it went below this value then <a href="./ConversionOptions#currentgain">currentGain</a> would decrease. Typically this will be set for you in a conversion constructor.</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/features/conversion.ts#L78" target="_blank" rel="noreferrer">profectus/src/features/conversion.ts:78</a></p><hr><h3 id="currentgain" tabindex="-1">currentGain? <a class="header-anchor" href="#currentgain" aria-label="Permalink to &quot;currentGain?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>currentGain</strong>: <a href="https://vuejs.org/api/utility-types.html#maybereforgetter" target="_blank" rel="noreferrer"><code>MaybeRefOrGetter</code></a>&lt;<a href="./../../../lib/break_eternity/type-aliases/DecimalSource"><code>DecimalSource</code></a>&gt;</p></blockquote><p>How much of the output resource the conversion can currently convert for. Typically this will be set for you in a conversion constructor.</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/features/conversion.ts#L66" target="_blank" rel="noreferrer">profectus/src/features/conversion.ts:66</a></p><hr><h3 id="formula" tabindex="-1">formula() <a class="header-anchor" href="#formula" aria-label="Permalink to &quot;formula()&quot;">​</a></h3><blockquote><p><strong>formula</strong>: (<code>variable</code>) =&gt; <a href="./../../../game/formulas/types/type-aliases/InvertibleFormula"><code>InvertibleFormula</code></a></p></blockquote><p>The formula used to determine how much <a href="./ConversionOptions#gainresource">gainResource</a> should be earned by this converting. The passed value will be a Formula representing the <a href="./ConversionOptions#baseresource">baseResource</a> variable.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><h5 id="variable" tabindex="-1">variable <a class="header-anchor" href="#variable" aria-label="Permalink to &quot;variable&quot;">​</a></h5><p><a href="./../../../game/formulas/types/type-aliases/InvertibleIntegralFormula"><code>InvertibleIntegralFormula</code></a></p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../../../game/formulas/types/type-aliases/InvertibleFormula"><code>InvertibleFormula</code></a></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/features/conversion.ts#L61" target="_blank" rel="noreferrer">profectus/src/features/conversion.ts:61</a></p><hr><h3 id="gainresource" tabindex="-1">gainResource <a class="header-anchor" href="#gainresource" aria-label="Permalink to &quot;gainResource&quot;">​</a></h3><blockquote><p><strong>gainResource</strong>: <a href="./../../resources/resource/interfaces/Resource"><code>Resource</code></a></p></blockquote><p>The output <a href="./../../resources/resource/interfaces/Resource">features/resources/resource.Resource</a> for this conversion. i.e. the resource being generated.</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/features/conversion.ts#L91" target="_blank" rel="noreferrer">profectus/src/features/conversion.ts:91</a></p><hr><h3 id="nextat" tabindex="-1">nextAt? <a class="header-anchor" href="#nextat" aria-label="Permalink to &quot;nextAt?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>nextAt</strong>: <a href="https://vuejs.org/api/utility-types.html#maybereforgetter" target="_blank" rel="noreferrer"><code>MaybeRefOrGetter</code></a>&lt;<a href="./../../../lib/break_eternity/type-aliases/DecimalSource"><code>DecimalSource</code></a>&gt;</p></blockquote><p>The amount of the input resource required to make <a href="./ConversionOptions#currentgain">currentGain</a> increase. Typically this will be set for you in a conversion constructor.</p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/features/conversion.ts#L83" target="_blank" rel="noreferrer">profectus/src/features/conversion.ts:83</a></p><hr><h3 id="onconvert" tabindex="-1">onConvert()? <a class="header-anchor" href="#onconvert" aria-label="Permalink to &quot;onConvert()?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>onConvert</strong>: (<code>amountGained</code>) =&gt; <code>void</code></p></blockquote><p>A callback that happens after a conversion has been completed. Receives the amount gained via conversion. This will not be called whenever using currentGain without calling convert (e.g. passive generation)</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><h5 id="amountgained" tabindex="-1">amountGained <a class="header-anchor" href="#amountgained" aria-label="Permalink to &quot;amountGained&quot;">​</a></h5><p><a href="./../../../lib/break_eternity/type-aliases/DecimalSource"><code>DecimalSource</code></a></p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/features/conversion.ts#L112" target="_blank" rel="noreferrer">profectus/src/features/conversion.ts:112</a></p><hr><h3 id="spend" tabindex="-1">spend()? <a class="header-anchor" href="#spend" aria-label="Permalink to &quot;spend()?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>spend</strong>: (<code>amountGained</code>) =&gt; <code>void</code></p></blockquote><p>The function that spends the <a href="./ConversionOptions#baseresource">baseResource</a> as part of the conversion. Defaults to setting the <a href="./ConversionOptions#baseresource">baseResource</a> amount to 0.</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><h5 id="amountgained-1" tabindex="-1">amountGained <a class="header-anchor" href="#amountgained-1" aria-label="Permalink to &quot;amountGained&quot;">​</a></h5><p><a href="./../../../lib/break_eternity/type-aliases/DecimalSource"><code>DecimalSource</code></a></p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/features/conversion.ts#L106" target="_blank" rel="noreferrer">profectus/src/features/conversion.ts:106</a></p>',84)]))}const p=r(n,[["render",i]]);export{f as __pageData,p as default};
