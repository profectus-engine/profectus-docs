import{_ as e,c as a,o as s,N as o}from"./chunks/framework.0799945b.js";const f=JSON.parse('{"title":"Formulas","description":"","frontmatter":{},"headers":[],"relativePath":"guide/important-concepts/formulas.md","lastUpdated":1681866297000}'),n={name:"guide/important-concepts/formulas.md"},t=o(`<h1 id="formulas" tabindex="-1">Formulas <a class="header-anchor" href="#formulas" aria-label="Permalink to &quot;Formulas&quot;">​</a></h1><p>Profectus utilizes formulas for various features, such as increasing requirements for repeatables and challenges or determining resource gains in conversions. These formulas often need to be inverted or integrated to enable features like buying multiple levels of a repeatable at once or determining when a conversion will increase resource gains. The Formula class can handle these operations, supporting every function Decimal does, while tracking the operations internally.</p><p>For example, a cost function like <code>Decimal.pow(this.amount, 1.05).times(100)</code> can be represented using a Formula: <code>Formula.variable(this.amount).pow(1.05).times(100)</code>.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myRepeatable </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createRepeatable</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">requirements</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createCostRequirement</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">resource</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> points</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">cost</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Formula</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">variable</span><span style="color:#A6ACCD;">(myRepeatable</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">amount)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pow</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1.05</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">times</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">maximize</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="limitations" tabindex="-1">Limitations <a class="header-anchor" href="#limitations" aria-label="Permalink to &quot;Limitations&quot;">​</a></h2><h3 id="single-variable" tabindex="-1">Single Variable <a class="header-anchor" href="#single-variable" aria-label="Permalink to &quot;Single Variable&quot;">​</a></h3><p>For inverting and integrating, formulas should have a single variable, which serves as the input. Although other parts of the formula can be computed values, they must not be dependent on the input variable for inverting or integrating purposes. Formulas work correctly as long as changing other parts of the formula doesn&#39;t affect the input variable.</p><h3 id="invertibility-and-integrability" tabindex="-1">Invertibility and Integrability <a class="header-anchor" href="#invertibility-and-integrability" aria-label="Permalink to &quot;Invertibility and Integrability&quot;">​</a></h3><p>Certain operations may not support inverting or integrating. Functions such as rounding or clamping are non-invertible, while others like super-log are non-integrable. You may only use a single complex operation in addition to add, sub, mult, and div operations. For formulas with two complex operations, a <a href="#custom-formulas">custom formula</a> is required.</p><h3 id="spending-resources" tabindex="-1">Spending Resources <a class="header-anchor" href="#spending-resources" aria-label="Permalink to &quot;Spending Resources&quot;">​</a></h3><p>When working with formulas, the <code>spendResources</code> property determines whether the formula needs to be invertible or integrable. The property is used in two utilities: <a href="/api/modules/game/formulas/formulas#calculatemaxaffordable">calculateMaxAffordable</a> and <a href="/api/modules/game/formulas/formulas#calculatecost">calculateCost</a>. These utilities are ultimately employed wherever formulas are used, such as in cost requirements or conversions.</p><p>Spending resources refers to whether max affordability and cost calculations should account for resources spent. If spending resources is set to true, the formula will be integrated and inverted, albeit with certain limitations. For example, exponential modifiers and soft caps can make a formula non-integrable.</p><p>Consider a simple formula that returns the input value as the cost. For example, to make three sequential purchases, the costs would be 1, 2, and 3, totaling 6. When resources are spent, making three purchases in a single operation will cost a total of 6. However, if resources are not spent, the cost would only be 3, the cost of the last purchase. Accounting for resources being spent means that the overall cost calculation reflects the cumulative costs of multiple purchases.</p><p>Integration in this context is an estimation, as it calculates the area under a continuous curve, while actual purchases occur at integer values. This means that calculating max affordable might overshoot and the cost at that amount might undershoot. To help address this, the <code>summedPurchases</code> property can be used, which manually sums the last X purchases, reducing the error margin. This also ensures higher accuracy when the player makes fewer purchases at once, which is when accuracy is most relevant. For larger numbers of purchases, a slight overshoot or undershoot is typically acceptable.</p><h3 id="modifiers" tabindex="-1">Modifiers <a class="header-anchor" href="#modifiers" aria-label="Permalink to &quot;Modifiers&quot;">​</a></h3><p>When applying changes to a formula using <a href="/api/modules/game/modifiers">modifiers</a>, use the <code>modifierToFormula</code> utility to apply the modifier while preserving invertibility if the modifier is invertible.</p><h3 id="custom-formulas" tabindex="-1">Custom Formulas <a class="header-anchor" href="#custom-formulas" aria-label="Permalink to &quot;Custom Formulas&quot;">​</a></h3><p>If the existing functions are insufficient for your needs, create a custom formula by implementing your own evaluation, inversion, and integration functions. Use the operations in <code>src/game/formulas/operations.ts</code> as reference. For spending resources, the integral formula must be invertible.</p>`,18),r=[t];function l(i,p,c,u,h,m){return s(),a("div",null,r)}const y=e(n,[["render",l]]);export{f as __pageData,y as default};
