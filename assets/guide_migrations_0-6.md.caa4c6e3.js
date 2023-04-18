import{_ as s,c as e,o as a,N as n}from"./chunks/framework.0799945b.js";const o="/assets/persistence-error.537e237b.png",C=JSON.parse('{"title":"Migrating to Profectus 0.6","description":"","frontmatter":{},"headers":[],"relativePath":"guide/migrations/0-6.md","lastUpdated":1681792078000}'),t={name:"guide/migrations/0-6.md"},l=n(`<h1 id="migrating-to-profectus-0-6" tabindex="-1">Migrating to Profectus 0.6 <a class="header-anchor" href="#migrating-to-profectus-0-6" aria-label="Permalink to &quot;Migrating to Profectus 0.6&quot;">​</a></h1><p>Alongside the standard steps for <a href="./../getting-started/updating">Updating Profectus</a>, this update contains numerous large or breaking changes. This guide will cover additional steps to follow after updating Profectus.</p><h2 id="fixing-save-data" tabindex="-1">Fixing save data <a class="header-anchor" href="#fixing-save-data" aria-label="Permalink to &quot;Fixing save data&quot;">​</a></h2><p>This update introduces a major change in save data collection and storage. The change reduces save data size and fixes issues that can cause persistent values to reset to default values. Unfortunately, developers will need to mark which persistent value uses should be included in the save data and which are merely references. Let&#39;s go through an example:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> flowers </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createResource</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">DecimalSource</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">moly</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> job </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createJob</span><span style="color:#A6ACCD;">(name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">/** snip **/</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">resource</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flowers</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/** snip **/</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">/** snip **/</span></span>
<span class="line"><span style="color:#A6ACCD;">	flowers</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	job</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>This example stores the same persistent data in two locations - <code>flowers.flowers</code> and <code>flowers.job.resource</code>. We can mark the latter usage as a reference by wrapping it in the <a href="./../../api/modules/game/persistence#nopersist">noPersist</a> utility, so it&#39;d look like <code>resource: noPersist(flowers)</code>. Otherwise, you will encounter an error in the console when the layer is loaded:</p><p><img src="`+o+`" alt="Persistence Error"></p><p>Use these console errors to identify save data redundancy that needs correction. It is recommended to run the app and use the errors as a guide rather than trying to identify redundancies manually.</p><p>In addition to obtaining non-persistent refs from your persistent refs, you may need to wrap entire features containing persistent refs. For example, in Kronos, there are seven layers with &quot;Job&quot; features, which are combined into a dictionary in the main layer. This would cause the persistent state to appear in both layers, but you can wrap the dictionary in a noPersist call to bypass serialization, ensuring it only uses the jobs within their respective layers. Here&#39;s an example from Kronos:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> jobs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">noPersist</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">flowers</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flowers</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">job</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">distill</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> distill</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">job</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">study</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> study</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">job</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">experiments</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> experiments</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">job</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">generators</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> generators</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">job</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">breeding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> breeding</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">job</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">rituals</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> rituals</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">job</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Record</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">JobKeys</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GenericJob</span><span style="color:#89DDFF;">&gt;;</span></span></code></pre></div><p>The time required for this step depends on your project structure. You can use <a href="https://github.com/thepaperpilot/Kronos/commit/6e8bfc1a78df0a7957de06bacdabf87c688b917c" target="_blank" rel="noreferrer">this commit</a> to see all the changes made for Kronos, which used a utility function for similar features that limited the number of required changes.</p><h2 id="breaking-feature-changes" tabindex="-1">Breaking feature changes <a class="header-anchor" href="#breaking-feature-changes" aria-label="Permalink to &quot;Breaking feature changes&quot;">​</a></h2><p>This update includes several breaking feature changes. Here are a few minor fixes:</p><ul><li>Buyables have been renamed to repeatables. Simply replace all instances of <code>Buyable</code> with <code>Repeatable</code>.</li><li>Achievements and Milestones have been merged. Add <code>small: true</code> to the options for existing achievements, and replace <code>createMilestone</code> calls with <code>createAchievement</code>.</li></ul><p>Additionally, there are changes with more significant impact on your code: Requirements, Formulas, and Modifiers.</p><h3 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements&quot;">​</a></h3><p>Many features no longer use <code>cost</code> and <code>resource</code> properties but instead utilize a <code>requirements</code> property, which can consist of one or more <code>Requirement</code> objects. This makes it easier to support features requiring multiple currencies or other conditions. To update an existing cost requirement, wrap your current cost function and resource property as follows:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">requirements</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createCostRequirement</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">cost</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> Decimal</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pow</span><span style="color:#A6ACCD;">(priceRatio</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">unref</span><span style="color:#A6ACCD;">(machines</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">amount))</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">resource</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> generators</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">energeia</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">))</span></span></code></pre></div><p>Learn more about requirements and their capabilities in <a href="./../important-concepts/requirements">this guide page</a>.</p><h3 id="formulas" tabindex="-1">Formulas <a class="header-anchor" href="#formulas" aria-label="Permalink to &quot;Formulas&quot;">​</a></h3><p>Formulas are a new feature that allows for scaling cost or effect functions to be inverted or integrated without requiring the developer to code anything beyond the original formula. They can simplify support for &quot;buy max&quot; functionalities and make conversions easier to read and write.</p><p>Any cost requirements can now accept a formula instead of a cost function. The formula system can then handle determining how many purchases can be made at once. To continue the example above, here&#39;s how it would be rewritten:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">requirements</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createCostRequirement</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">cost</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Formula</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">variable</span><span style="color:#A6ACCD;">(machines</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">amount)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pow_base</span><span style="color:#A6ACCD;">(priceRatio)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">resource</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> generators</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">energeia</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">))</span></span></code></pre></div><p>Conversions work a bit differently. Their scaling function system has been replaced with a <code>formula</code> property that takes a lambda - it provides the input formula variable, representing the base resource, as a parameter, and you return a formula representing the amount of the gain resource that could be converted. For example, if you previously had code like this:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">scaling</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">addSoftcap</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">createPolynomialScaling</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.5</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1e100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.5</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><p>you can now write this:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">formula</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> x</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">div</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sqrt</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">step</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1e100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">f</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sqrt</span><span style="color:#A6ACCD;">())</span></span></code></pre></div><p>Learn more about formulas and their capabilities in <a href="./../important-concepts/formulas">this guide page</a>.</p><h3 id="modifiers" tabindex="-1">Modifiers <a class="header-anchor" href="#modifiers" aria-label="Permalink to &quot;Modifiers&quot;">​</a></h3><p>Modifiers now display negative effects in red. The current implementation assumes any value that reduces the result is negative, and the output being less than the base value is a negative outcome. However, for some modifiers, this may be the opposite of what you want - for example, a cooldown being reduced below its base value is a positive effect. For those modifiers, set the <code>smallerIsBetter</code> property to <code>true</code>. This property also exists when creating collapsible modifier sections.</p><p>Modifiers have renamed their <code>revert</code> property to <code>invert</code> to match the terms used by formulas. Update any custom modifiers you&#39;ve created accordingly.</p><h2 id="fixing-visibility-changes" tabindex="-1">Fixing visibility changes <a class="header-anchor" href="#fixing-visibility-changes" aria-label="Permalink to &quot;Fixing visibility changes&quot;">​</a></h2><p>Visibility properties now work with booleans, which has several implications.</p><p>The <code>showIf</code> util is no longer necessary and has been removed - simply return the boolean value itself. In fact, if you were previously passing a computed boolean into <code>showIf</code>, you can now use the computed ref directly, reducing overhead. Here&#39;s an example:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">visibility</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">showIf</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">spellExpMilestone</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">earned</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>This code can now be simplified to:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">visibility</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> spellExpMilestone</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">earned</span></span></code></pre></div><p>Be aware that using the computed ref directly instead of a function can cause circular dependency issues. If you encounter one while simplifying a visibility property, resolve the issue or continue using a function, returning the computed ref value.</p><h3 id="custom-components" tabindex="-1">Custom Components <a class="header-anchor" href="#custom-components" aria-label="Permalink to &quot;Custom Components&quot;">​</a></h3><p>If you created any custom features with their own Vue components, you&#39;ll need to update them to support booleans for visibility values. This means replacing <strong>ALL</strong> equality checks for specific visibilities with calls to <a href="./../../api/modules/features/feature#isvisible">isVisible</a> and <a href="./../../api/modules/features/feature#ishidden">isHidden</a>.</p><p>While updating your component, you may need to cast the component to <a href="./../../api/modules/features/feature#genericcomponent">GenericComponent</a>.</p>`,41),p=[l];function r(c,i,y,d,u,D){return a(),e("div",null,p)}const A=s(t,[["render",r]]);export{C as __pageData,A as default};