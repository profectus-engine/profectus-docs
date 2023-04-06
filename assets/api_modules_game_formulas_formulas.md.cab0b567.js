import{_ as e,c as t,o as a,N as r}from"./chunks/framework.0799945b.js";const b=JSON.parse('{"title":"Module: game/formulas/formulas","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/modules/game/formulas/formulas.md","lastUpdated":null}'),o={name:"api/modules/game/formulas/formulas.md"},l=r('<h1 id="module-game-formulas-formulas" tabindex="-1">Module: game/formulas/formulas <a class="header-anchor" href="#module-game-formulas-formulas" aria-label="Permalink to &quot;Module: game/formulas/formulas&quot;">​</a></h1><h2 id="classes" tabindex="-1">Classes <a class="header-anchor" href="#classes" aria-label="Permalink to &quot;Classes&quot;">​</a></h2><ul><li><a href="../../../classes/game/formulas/formulas.default">default</a></li></ul><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="calculatecost" tabindex="-1">calculateCost <a class="header-anchor" href="#calculatecost" aria-label="Permalink to &quot;calculateCost&quot;">​</a></h3><p>▸ <strong>calculateCost</strong>(<code>formula</code>, <code>amountToBuy</code>, <code>spendResources?</code>, <code>summedPurchases?</code>): <a href="./../../util/bignum#decimalsource"><code>DecimalSource</code></a></p><p>Utility for calculating the cost of a formula for a given amount of purchases. If spendResources is changed to false, the calculation will be much faster with higher numbers.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>formula</code></td><td style="text-align:left;"><a href="./types#invertibleformula"><code>InvertibleFormula</code></a></td><td style="text-align:left;">The formula to use for calculating buy max from</td></tr><tr><td style="text-align:left;"><code>amountToBuy</code></td><td style="text-align:left;"><a href="./../../lib/break_eternity#decimalsource"><code>DecimalSource</code></a></td><td style="text-align:left;">The amount of purchases to calculate the cost for</td></tr><tr><td style="text-align:left;"><code>spendResources?</code></td><td style="text-align:left;"><code>true</code></td><td style="text-align:left;">Whether or not to count spent resources on each purchase or not. If true, costs will be approximated for performance, skewing towards higher cost</td></tr><tr><td style="text-align:left;"><code>summedPurchases?</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">How many purchases to manually sum for improved accuracy. If not specified, defaults to 10 when spending resources and 0 when not</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../../util/bignum#decimalsource"><code>DecimalSource</code></a></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/formulas/formulas.ts#L1433" target="_blank" rel="noreferrer">profectus/src/game/formulas/formulas.ts:1433</a></p><p>▸ <strong>calculateCost</strong>(<code>formula</code>, <code>amountToBuy</code>, <code>spendResources</code>, <code>summedPurchases?</code>): <a href="./../../util/bignum#decimalsource"><code>DecimalSource</code></a></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>formula</code></td><td style="text-align:left;"><a href="./types#invertibleintegralformula"><code>InvertibleIntegralFormula</code></a></td></tr><tr><td style="text-align:left;"><code>amountToBuy</code></td><td style="text-align:left;"><a href="./../../lib/break_eternity#decimalsource"><code>DecimalSource</code></a></td></tr><tr><td style="text-align:left;"><code>spendResources</code></td><td style="text-align:left;"><code>boolean</code></td></tr><tr><td style="text-align:left;"><code>summedPurchases?</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../../util/bignum#decimalsource"><code>DecimalSource</code></a></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/formulas/formulas.ts#L1439" target="_blank" rel="noreferrer">profectus/src/game/formulas/formulas.ts:1439</a></p><hr><h3 id="calculatemaxaffordable" tabindex="-1">calculateMaxAffordable <a class="header-anchor" href="#calculatemaxaffordable" aria-label="Permalink to &quot;calculateMaxAffordable&quot;">​</a></h3><p>▸ <strong>calculateMaxAffordable</strong>(<code>formula</code>, <code>resource</code>, <code>spendResources?</code>, <code>summedPurchases?</code>): <code>ComputedRef</code>&lt;<a href="./../../util/bignum#decimalsource"><code>DecimalSource</code></a>&gt;</p><p>Utility for calculating the maximum amount of purchases possible with a given formula and resource. If spendResources is changed to false, the calculation will be much faster with higher numbers.</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>formula</code></td><td style="text-align:left;"><a href="./types#invertibleformula"><code>InvertibleFormula</code></a></td><td style="text-align:left;">The formula to use for calculating buy max from</td></tr><tr><td style="text-align:left;"><code>resource</code></td><td style="text-align:left;"><a href="../../../interfaces/features/resources/resource.Resource"><code>Resource</code></a>&lt;<a href="./../../lib/break_eternity#decimalsource"><code>DecimalSource</code></a>&gt;</td><td style="text-align:left;">The resource used when purchasing (is only read from)</td></tr><tr><td style="text-align:left;"><code>spendResources?</code></td><td style="text-align:left;"><code>true</code></td><td style="text-align:left;">Whether or not to count spent resources on each purchase or not. If true, costs will be approximated for performance, skewing towards fewer purchases</td></tr><tr><td style="text-align:left;"><code>summedPurchases?</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">How many of the most expensive purchases should be manually summed for better accuracy. If unspecified uses 10 when spending resources and 0 when not</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>ComputedRef</code>&lt;<a href="./../../util/bignum#decimalsource"><code>DecimalSource</code></a>&gt;</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/formulas/formulas.ts#L1365" target="_blank" rel="noreferrer">profectus/src/game/formulas/formulas.ts:1365</a></p><p>▸ <strong>calculateMaxAffordable</strong>(<code>formula</code>, <code>resource</code>, <code>spendResources</code>, <code>summedPurchases?</code>): <code>ComputedRef</code>&lt;<a href="./../../util/bignum#decimalsource"><code>DecimalSource</code></a>&gt;</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>formula</code></td><td style="text-align:left;"><a href="./types#invertibleintegralformula"><code>InvertibleIntegralFormula</code></a></td></tr><tr><td style="text-align:left;"><code>resource</code></td><td style="text-align:left;"><a href="../../../interfaces/features/resources/resource.Resource"><code>Resource</code></a>&lt;<a href="./../../lib/break_eternity#decimalsource"><code>DecimalSource</code></a>&gt;</td></tr><tr><td style="text-align:left;"><code>spendResources</code></td><td style="text-align:left;"><a href="./../../util/computed#computable"><code>Computable</code></a>&lt;<code>boolean</code>&gt;</td></tr><tr><td style="text-align:left;"><code>summedPurchases?</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>ComputedRef</code>&lt;<a href="./../../util/bignum#decimalsource"><code>DecimalSource</code></a>&gt;</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/formulas/formulas.ts#L1371" target="_blank" rel="noreferrer">profectus/src/game/formulas/formulas.ts:1371</a></p><hr><h3 id="findnoninvertible" tabindex="-1">findNonInvertible <a class="header-anchor" href="#findnoninvertible" aria-label="Permalink to &quot;findNonInvertible&quot;">​</a></h3><p>▸ <strong>findNonInvertible</strong>(<code>formula</code>): <a href="./types#genericformula"><code>GenericFormula</code></a> | <code>null</code></p><p>Utility for recursively searching through a formula for the cause of non-invertibility.</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>formula</code></td><td style="text-align:left;"><a href="./types#genericformula"><code>GenericFormula</code></a></td><td style="text-align:left;">The formula to search for a non-invertible formula within</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./types#genericformula"><code>GenericFormula</code></a> | <code>null</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/formulas/formulas.ts#L1322" target="_blank" rel="noreferrer">profectus/src/game/formulas/formulas.ts:1322</a></p><hr><h3 id="hasvariable" tabindex="-1">hasVariable <a class="header-anchor" href="#hasvariable" aria-label="Permalink to &quot;hasVariable&quot;">​</a></h3><p>▸ <strong>hasVariable</strong>(<code>value</code>): value is InvertibleFormula</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><a href="./types#formulasource"><code>FormulaSource</code></a></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p>value is InvertibleFormula</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/formulas/formulas.ts#L23" target="_blank" rel="noreferrer">profectus/src/game/formulas/formulas.ts:23</a></p><hr><h3 id="printformula" tabindex="-1">printFormula <a class="header-anchor" href="#printformula" aria-label="Permalink to &quot;printFormula&quot;">​</a></h3><p>▸ <strong>printFormula</strong>(<code>formula</code>): <code>string</code></p><p>Stringifies a formula so it&#39;s more easy to read in the console</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>formula</code></td><td style="text-align:left;"><a href="./types#formulasource"><code>FormulaSource</code></a></td><td style="text-align:left;">The formula to print</td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/formulas/formulas.ts#L1340" target="_blank" rel="noreferrer">profectus/src/game/formulas/formulas.ts:1340</a></p><hr><h3 id="unrefformulasource" tabindex="-1">unrefFormulaSource <a class="header-anchor" href="#unrefformulasource" aria-label="Permalink to &quot;unrefFormulaSource&quot;">​</a></h3><p>▸ <strong>unrefFormulaSource</strong>(<code>value</code>, <code>variable?</code>): <a href="./../../lib/break_eternity#decimalsource"><code>DecimalSource</code></a></p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><a href="./types#formulasource"><code>FormulaSource</code></a></td></tr><tr><td style="text-align:left;"><code>variable?</code></td><td style="text-align:left;"><a href="./../../lib/break_eternity#decimalsource"><code>DecimalSource</code></a></td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../../lib/break_eternity#decimalsource"><code>DecimalSource</code></a></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/formulas/formulas.ts#L27" target="_blank" rel="noreferrer">profectus/src/game/formulas/formulas.ts:27</a></p>',75),s=[l];function d(c,n,i,u,f,h){return a(),t("div",null,s)}const g=e(o,[["render",d]]);export{b as __pageData,g as default};
