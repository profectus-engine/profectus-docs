import{_ as i,c as a,a0 as e,o as t}from"./chunks/framework.P9qPzDnn.js";const d=JSON.parse('{"title":"features/resources/resource","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/features/resources/resource/index.md","filePath":"api/features/resources/resource/index.md","lastUpdated":null}'),n={name:"api/features/resources/resource/index.md"};function h(l,s,r,p,k,D){return t(),a("div",null,s[0]||(s[0]=[e(`<p><a href="./../../../">Profectus</a> / features/resources/resource</p><h1 id="features-resources-resource" tabindex="-1">features/resources/resource <a class="header-anchor" href="#features-resources-resource" aria-label="Permalink to &quot;features/resources/resource&quot;">​</a></h1><p>This feature represents a resource the player can accumulate, spend, etc.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes material-theme-palenight material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#C792EA;--shiki-dark:#C792EA;">const</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;"> points </span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">=</span><span style="--shiki-light:#82AAFF;--shiki-dark:#82AAFF;"> createResource</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">&lt;</span><span style="--shiki-light:#FFCB6B;--shiki-dark:#FFCB6B;">DecimalSource</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">&gt;</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;">(</span><span style="--shiki-light:#F78C6C;--shiki-dark:#F78C6C;">10</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;"> &quot;</span><span style="--shiki-light:#C3E88D;--shiki-dark:#C3E88D;">points</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;">)</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">;</span></span></code></pre></div><p>When passing this resource into <em>other features</em>, make sure to wrap it in <code>noPersist</code> to ensure there&#39;s no issues when saving/loading.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes material-theme-palenight material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#C792EA;--shiki-dark:#C792EA;">const</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;"> upgrade </span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">=</span><span style="--shiki-light:#82AAFF;--shiki-dark:#82AAFF;"> createUpgrade</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;">(</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">()</span><span style="--shiki-light:#C792EA;--shiki-dark:#C792EA;"> =&gt;</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;"> (</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">{</span></span>
<span class="line"><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">    ...,</span></span>
<span class="line"><span style="--shiki-light:#F07178;--shiki-dark:#F07178;">    requirements</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#82AAFF;--shiki-dark:#82AAFF;"> createCostRequirement</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;">(</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">()</span><span style="--shiki-light:#C792EA;--shiki-dark:#C792EA;"> =&gt;</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;"> (</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">{</span></span>
<span class="line"><span style="--shiki-light:#F07178;--shiki-dark:#F07178;">        cost</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#F78C6C;--shiki-dark:#F78C6C;"> 10</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="--shiki-light:#F07178;--shiki-dark:#F07178;">        resource</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#82AAFF;--shiki-dark:#82AAFF;"> noPersist</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;">(points)</span></span>
<span class="line"><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">    }</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;">))</span></span>
<span class="line"><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">}</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;">))</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">;</span></span></code></pre></div><p>You can also turn refs from other features into resources, to still benefit from them having a name and precision:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes material-theme-palenight material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#C792EA;--shiki-dark:#C792EA;">const</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;"> repeatable </span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">=</span><span style="--shiki-light:#82AAFF;--shiki-dark:#82AAFF;"> createRepeatable</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;">(</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">()</span><span style="--shiki-light:#C792EA;--shiki-dark:#C792EA;"> =&gt;</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;"> (</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">{</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;"> ...</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;"> }</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;">))</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C792EA;--shiki-dark:#C792EA;">const</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;"> repeatableLevels </span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">=</span><span style="--shiki-light:#82AAFF;--shiki-dark:#82AAFF;"> createResource</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;">(repeatable</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;">amount</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;"> &quot;</span><span style="--shiki-light:#C3E88D;--shiki-dark:#C3E88D;">levels</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;">)</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">;</span></span></code></pre></div><h2 id="index" tabindex="-1">Index <a class="header-anchor" href="#index" aria-label="Permalink to &quot;Index&quot;">​</a></h2><h3 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h3><ul><li><a href="./interfaces/Resource">Resource</a></li></ul><h3 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h3><ul><li><a href="./functions/createResource">createResource</a></li><li><a href="./functions/displayResource">displayResource</a></li><li><a href="./functions/trackBest">trackBest</a></li><li><a href="./functions/trackOOMPS">trackOOMPS</a></li><li><a href="./functions/trackTotal">trackTotal</a></li><li><a href="./functions/unwrapResource">unwrapResource</a></li></ul>`,13)]))}const o=i(n,[["render",h]]);export{d as __pageData,o as default};
