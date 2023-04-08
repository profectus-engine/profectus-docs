import{_ as e,c as r,o as t,N as a}from"./chunks/framework.0799945b.js";const f=JSON.parse('{"title":"Interface: CostRequirementOptions","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/interfaces/game/requirements.CostRequirementOptions.md","lastUpdated":null}'),o={name:"api/interfaces/game/requirements.CostRequirementOptions.md"},i=a('<h1 id="interface-costrequirementoptions" tabindex="-1">Interface: CostRequirementOptions <a class="header-anchor" href="#interface-costrequirementoptions" aria-label="Permalink to &quot;Interface: CostRequirementOptions&quot;">​</a></h1><p><a href="./../../modules/game/requirements">game/requirements</a>.CostRequirementOptions</p><p>An object that configures a <a href="./requirements.Requirement">Requirement</a> based on a resource cost.</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="cost" tabindex="-1">cost <a class="header-anchor" href="#cost" aria-label="Permalink to &quot;cost&quot;">​</a></h3><p>• <strong>cost</strong>: <a href="./../../modules/util/computed#computable"><code>Computable</code></a>&lt;<a href="./../../modules/lib/break_eternity#decimalsource"><code>DecimalSource</code></a>&gt; | <a href="./../../modules/game/formulas/types#genericformula"><code>GenericFormula</code></a></p><p>The amount of <a href="./requirements.CostRequirementOptions#resource">resource</a> that must be met for this requirement. You can pass a formula, in which case maximizing will work out of the box (assuming its invertible and, for more accurate calculations, its integral is invertible). If you don&#39;t pass a formula then you can still support maximizing by passing a custom <a href="./requirements.CostRequirementOptions#pay">pay</a> function.</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/requirements.tsx#L75" target="_blank" rel="noreferrer">profectus/src/game/requirements.tsx:75</a></p><hr><h3 id="pay" tabindex="-1">pay <a class="header-anchor" href="#pay" aria-label="Permalink to &quot;pay&quot;">​</a></h3><p>• <code>Optional</code> <strong>pay</strong>: (<code>amount?</code>: <a href="./../../modules/lib/break_eternity#decimalsource"><code>DecimalSource</code></a>) =&gt; <code>void</code></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><p>▸ (<code>amount?</code>): <code>void</code></p><p>Pass-through to <a href="./requirements.Requirement#pay">pay</a>. May be required for maximizing support.</p><p><strong><code>See</code></strong></p><p><a href="./requirements.CostRequirementOptions#cost">cost</a> for restrictions on maximizing support.</p><h5 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>amount?</code></td><td style="text-align:left;"><a href="./../../modules/lib/break_eternity#decimalsource"><code>DecimalSource</code></a></td></tr></tbody></table><h5 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>void</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/requirements.tsx#L93" target="_blank" rel="noreferrer">profectus/src/game/requirements.tsx:93</a></p><hr><h3 id="requirespay" tabindex="-1">requiresPay <a class="header-anchor" href="#requirespay" aria-label="Permalink to &quot;requiresPay&quot;">​</a></h3><p>• <code>Optional</code> <strong>requiresPay</strong>: <a href="./../../modules/util/computed#computable"><code>Computable</code></a>&lt;<code>boolean</code>&gt;</p><p>Pass-through to <a href="./requirements.Requirement#requirespay">requiresPay</a>. If not set to false, the default <a href="./requirements.CostRequirementOptions#pay">pay</a> function will remove <a href="./requirements.CostRequirementOptions#cost">cost</a> from <a href="./requirements.CostRequirementOptions#resource">resource</a>.</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/requirements.tsx#L83" target="_blank" rel="noreferrer">profectus/src/game/requirements.tsx:83</a></p><hr><h3 id="resource" tabindex="-1">resource <a class="header-anchor" href="#resource" aria-label="Permalink to &quot;resource&quot;">​</a></h3><p>• <strong>resource</strong>: <a href="../features/resources/resource.Resource"><code>Resource</code></a>&lt;<a href="./../../modules/lib/break_eternity#decimalsource"><code>DecimalSource</code></a>&gt;</p><p>The resource that will be checked for meeting the <a href="./requirements.CostRequirementOptions#cost">cost</a>.</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/requirements.tsx#L71" target="_blank" rel="noreferrer">profectus/src/game/requirements.tsx:71</a></p><hr><h3 id="spendresources" tabindex="-1">spendResources <a class="header-anchor" href="#spendresources" aria-label="Permalink to &quot;spendResources&quot;">​</a></h3><p>• <code>Optional</code> <strong>spendResources</strong>: <a href="./../../modules/util/computed#computable"><code>Computable</code></a>&lt;<code>boolean</code>&gt;</p><p>When calculating multiple levels to be handled at once, whether it should consider resources used for each level as spent. Setting this to false causes calculations to be faster with larger numbers and supports more math functions.</p><p><strong><code>See</code></strong></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/requirements.tsx#L88" target="_blank" rel="noreferrer">profectus/src/game/requirements.tsx:88</a></p><hr><h3 id="visibility" tabindex="-1">visibility <a class="header-anchor" href="#visibility" aria-label="Permalink to &quot;visibility&quot;">​</a></h3><p>• <code>Optional</code> <strong>visibility</strong>: <a href="./../../modules/util/computed#computable"><code>Computable</code></a>&lt;<code>boolean</code> | <a href="./../../enums/features/feature.Visibility#visible"><code>Visible</code></a> | <a href="./../../enums/features/feature.Visibility#none"><code>None</code></a>&gt;</p><p>Pass-through to <a href="./requirements.Requirement#visibility">visibility</a>.</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/requirements.tsx#L79" target="_blank" rel="noreferrer">profectus/src/game/requirements.tsx:79</a></p>',48),s=[i];function n(c,u,d,l,h,m){return t(),r("div",null,s)}const b=e(o,[["render",n]]);export{f as __pageData,b as default};