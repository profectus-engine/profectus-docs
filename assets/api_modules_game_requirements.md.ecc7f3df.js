import{_ as e,c as t,o as a,N as r}from"./chunks/framework.0799945b.js";const q=JSON.parse('{"title":"Module: game/requirements","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/modules/game/requirements.md","lastUpdated":null}'),i={name:"api/modules/game/requirements.md"},n=r('<h1 id="module-game-requirements" tabindex="-1">Module: game/requirements <a class="header-anchor" href="#module-game-requirements" aria-label="Permalink to &quot;Module: game/requirements&quot;">​</a></h1><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><ul><li><a href="../../interfaces/game/requirements.CostRequirementOptions">CostRequirementOptions</a></li><li><a href="../../interfaces/game/requirements.Requirement">Requirement</a></li></ul><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="costrequirement" tabindex="-1">CostRequirement <a class="header-anchor" href="#costrequirement" aria-label="Permalink to &quot;CostRequirement&quot;">​</a></h3><p>Ƭ <strong>CostRequirement</strong>: <a href="./../features/feature#replace"><code>Replace</code></a>&lt;<a href="../../interfaces/game/requirements.Requirement"><code>Requirement</code></a> &amp; <a href="../../interfaces/game/requirements.CostRequirementOptions"><code>CostRequirementOptions</code></a>, { <code>cost</code>: <a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./../lib/break_eternity#decimalsource"><code>DecimalSource</code></a>&gt; | <a href="./formulas/types#genericformula"><code>GenericFormula</code></a> ; <code>requiresPay</code>: <a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code>&gt; ; <code>spendResources</code>: <a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code>&gt; ; <code>visibility</code>: <a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="./../../enums/features/feature.Visibility#visible"><code>Visible</code></a> | <a href="./../../enums/features/feature.Visibility#none"><code>None</code></a> | <code>boolean</code>&gt; }&gt;</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/requirements.tsx#L96" target="_blank" rel="noreferrer">profectus/src/game/requirements.tsx:96</a></p><hr><h3 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements&quot;">​</a></h3><p>Ƭ <strong>Requirements</strong>: <a href="../../interfaces/game/requirements.Requirement"><code>Requirement</code></a> | <a href="../../interfaces/game/requirements.Requirement"><code>Requirement</code></a>[]</p><p>Utility type for accepting 1 or more <a href="../../interfaces/game/requirements.Requirement">Requirement</a>s.</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/requirements.tsx#L64" target="_blank" rel="noreferrer">profectus/src/game/requirements.tsx:64</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="createbooleanrequirement" tabindex="-1">createBooleanRequirement <a class="header-anchor" href="#createbooleanrequirement" aria-label="Permalink to &quot;createBooleanRequirement&quot;">​</a></h3><p>▸ <strong>createBooleanRequirement</strong>(<code>requirement</code>, <code>display?</code>): <a href="../../interfaces/game/requirements.Requirement"><code>Requirement</code></a></p><p>Creates a requirement based on a true/false value</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>requirement</code></td><td style="text-align:left;"><a href="./../util/computed#computable"><code>Computable</code></a>&lt;<code>boolean</code>&gt;</td><td style="text-align:left;">The boolean requirement to use</td></tr><tr><td style="text-align:left;"><code>display?</code></td><td style="text-align:left;"><a href="./../features/feature#coercablecomponent"><code>CoercableComponent</code></a></td><td style="text-align:left;">How to display this requirement to the user</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="../../interfaces/game/requirements.Requirement"><code>Requirement</code></a></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/requirements.tsx#L205" target="_blank" rel="noreferrer">profectus/src/game/requirements.tsx:205</a></p><hr><h3 id="createcostrequirement" tabindex="-1">createCostRequirement <a class="header-anchor" href="#createcostrequirement" aria-label="Permalink to &quot;createCostRequirement&quot;">​</a></h3><p>▸ <strong>createCostRequirement</strong>&lt;<code>T</code>&gt;(<code>optionsFunc</code>): <a href="./requirements#costrequirement"><code>CostRequirement</code></a></p><p>Lazily creates a requirement with the given options, that is based on meeting an amount of a resource.</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../interfaces/game/requirements.CostRequirementOptions"><code>CostRequirementOptions</code></a></td></tr></tbody></table><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>optionsFunc</code></td><td style="text-align:left;">() =&gt; <code>T</code></td><td style="text-align:left;">Cost requirement options.</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./requirements#costrequirement"><code>CostRequirement</code></a></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/requirements.tsx#L110" target="_blank" rel="noreferrer">profectus/src/game/requirements.tsx:110</a></p><hr><h3 id="createvisibilityrequirement" tabindex="-1">createVisibilityRequirement <a class="header-anchor" href="#createvisibilityrequirement" aria-label="Permalink to &quot;createVisibilityRequirement&quot;">​</a></h3><p>▸ <strong>createVisibilityRequirement</strong>(<code>feature</code>): <a href="../../interfaces/game/requirements.Requirement"><code>Requirement</code></a></p><p>Utility function for creating a requirement that a specified vue feature is visible</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>feature</code></td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;">The feature to check the visibility of</td></tr><tr><td style="text-align:left;"><code>feature.visibility</code></td><td style="text-align:left;"><a href="./../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code> | <a href="../../enums/features/feature.Visibility"><code>Visibility</code></a>&gt;</td><td style="text-align:left;">-</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="../../interfaces/game/requirements.Requirement"><code>Requirement</code></a></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/requirements.tsx#L190" target="_blank" rel="noreferrer">profectus/src/game/requirements.tsx:190</a></p><hr><h3 id="displayrequirements" tabindex="-1">displayRequirements <a class="header-anchor" href="#displayrequirements" aria-label="Permalink to &quot;displayRequirements&quot;">​</a></h3><p>▸ <strong>displayRequirements</strong>(<code>requirements</code>, <code>amount?</code>): <code>Element</code></p><p>Utility function for display 1+ requirements compactly.</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>requirements</code></td><td style="text-align:left;"><a href="./requirements#requirements"><code>Requirements</code></a></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">The 1+ requirements to display</td></tr><tr><td style="text-align:left;"><code>amount</code></td><td style="text-align:left;"><a href="./../lib/break_eternity#decimalsource"><code>DecimalSource</code></a></td><td style="text-align:left;"><code>1</code></td><td style="text-align:left;">The amount of levels earned to be displayed</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Element</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/requirements.tsx#L252" target="_blank" rel="noreferrer">profectus/src/game/requirements.tsx:252</a></p><hr><h3 id="maxrequirementsmet" tabindex="-1">maxRequirementsMet <a class="header-anchor" href="#maxrequirementsmet" aria-label="Permalink to &quot;maxRequirementsMet&quot;">​</a></h3><p>▸ <strong>maxRequirementsMet</strong>(<code>requirements</code>): <a href="./../lib/break_eternity#decimalsource"><code>DecimalSource</code></a></p><p>Calculates the maximum number of levels that could be acquired with the current requirement states. True/false requirements will be counted as Infinity or 0.</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>requirements</code></td><td style="text-align:left;"><a href="./requirements#requirements"><code>Requirements</code></a></td><td style="text-align:left;">The 1+ requirements to check</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../lib/break_eternity#decimalsource"><code>DecimalSource</code></a></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/requirements.tsx#L234" target="_blank" rel="noreferrer">profectus/src/game/requirements.tsx:234</a></p><hr><h3 id="paybydivision" tabindex="-1">payByDivision <a class="header-anchor" href="#paybydivision" aria-label="Permalink to &quot;payByDivision&quot;">​</a></h3><p>▸ <strong>payByDivision</strong>(<code>this</code>, <code>amount?</code>): <code>void</code></p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>this</code></td><td style="text-align:left;"><a href="./requirements#costrequirement"><code>CostRequirement</code></a></td></tr><tr><td style="text-align:left;"><code>amount?</code></td><td style="text-align:left;"><a href="./../lib/break_eternity#decimalsource"><code>DecimalSource</code></a></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/requirements.tsx#L302" target="_blank" rel="noreferrer">profectus/src/game/requirements.tsx:302</a></p><hr><h3 id="paybyreset" tabindex="-1">payByReset <a class="header-anchor" href="#paybyreset" aria-label="Permalink to &quot;payByReset&quot;">​</a></h3><p>▸ <strong>payByReset</strong>(<code>overrideDefaultValue?</code>): (<code>this</code>: <a href="./requirements#costrequirement"><code>CostRequirement</code></a>) =&gt; <code>void</code></p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>overrideDefaultValue?</code></td><td style="text-align:left;"><a href="./../lib/break_eternity#decimalsource"><code>DecimalSource</code></a></td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>fn</code></p><p>▸ (<code>this</code>): <code>void</code></p><h5 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>this</code></td><td style="text-align:left;"><a href="./requirements#costrequirement"><code>CostRequirement</code></a></td></tr></tbody></table><h5 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>void</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/requirements.tsx#L314" target="_blank" rel="noreferrer">profectus/src/game/requirements.tsx:314</a></p><hr><h3 id="payrequirements" tabindex="-1">payRequirements <a class="header-anchor" href="#payrequirements" aria-label="Permalink to &quot;payRequirements&quot;">​</a></h3><p>▸ <strong>payRequirements</strong>(<code>requirements</code>, <code>amount?</code>): <code>void</code></p><p>Utility function for paying the costs for 1+ requirements</p><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>requirements</code></td><td style="text-align:left;"><a href="./requirements#requirements"><code>Requirements</code></a></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">The 1+ requirements to pay</td></tr><tr><td style="text-align:left;"><code>amount</code></td><td style="text-align:left;"><a href="./../lib/break_eternity#decimalsource"><code>DecimalSource</code></a></td><td style="text-align:left;"><code>1</code></td><td style="text-align:left;">How many levels to pay for</td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/requirements.tsx#L294" target="_blank" rel="noreferrer">profectus/src/game/requirements.tsx:294</a></p><hr><h3 id="requirementsmet" tabindex="-1">requirementsMet <a class="header-anchor" href="#requirementsmet" aria-label="Permalink to &quot;requirementsMet&quot;">​</a></h3><p>▸ <strong>requirementsMet</strong>(<code>requirements</code>): <code>boolean</code></p><p>Utility for checking if 1+ requirements are all met</p><h4 id="parameters-9" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-9" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>requirements</code></td><td style="text-align:left;"><a href="./requirements#requirements"><code>Requirements</code></a></td><td style="text-align:left;">The 1+ requirements to check</td></tr></tbody></table><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/game/requirements.tsx#L222" target="_blank" rel="noreferrer">profectus/src/game/requirements.tsx:222</a></p>',109),o=[n];function s(l,d,c,u,h,m){return a(),t("div",null,o)}const p=e(i,[["render",s]]);export{q as __pageData,p as default};
