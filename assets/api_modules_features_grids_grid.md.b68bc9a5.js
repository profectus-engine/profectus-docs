import{_ as e,c as t,o as a,N as r}from"./chunks/framework.0799945b.js";const g=JSON.parse('{"title":"Module: features/grids/grid","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/modules/features/grids/grid.md","lastUpdated":null}'),d={name:"api/modules/features/grids/grid.md"},o=r('<h1 id="module-features-grids-grid" tabindex="-1">Module: features/grids/grid <a class="header-anchor" href="#module-features-grids-grid" aria-label="Permalink to &quot;Module: features/grids/grid&quot;">​</a></h1><h2 id="components" tabindex="-1">Components <a class="header-anchor" href="#components" aria-label="Permalink to &quot;Components&quot;">​</a></h2><ul><li><a href="./GridCellComponent">GridCell</a></li><li><a href="./GridComponent">Grid</a></li></ul><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><ul><li><a href="../../../interfaces/features/grids/grid.BaseGrid">BaseGrid</a></li><li><a href="../../../interfaces/features/grids/grid.GridCell">GridCell</a></li><li><a href="../../../interfaces/features/grids/grid.GridOptions">GridOptions</a></li></ul><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="cellcomputable" tabindex="-1">CellComputable <a class="header-anchor" href="#cellcomputable" aria-label="Permalink to &quot;CellComputable&quot;">​</a></h3><p>Ƭ <strong>CellComputable</strong>&lt;<code>T</code>&gt;: <a href="./../../util/computed#computable"><code>Computable</code></a>&lt;<code>T</code>&gt; | (<code>id</code>: <code>string</code> | <code>number</code>, <code>state</code>: <a href="./../../game/persistence#state"><code>State</code></a>) =&gt; <code>T</code></p><p>A type representing a computable value for a cell in the grid.</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/grids/grid.ts#L28" target="_blank" rel="noreferrer">profectus/src/features/grids/grid.ts:28</a></p><hr><h3 id="genericgrid" tabindex="-1">GenericGrid <a class="header-anchor" href="#genericgrid" aria-label="Permalink to &quot;GenericGrid&quot;">​</a></h3><p>Ƭ <strong>GenericGrid</strong>: <a href="./../feature#replace"><code>Replace</code></a>&lt;<a href="./grid#grid"><code>Grid</code></a>&lt;<a href="../../../interfaces/features/grids/grid.GridOptions"><code>GridOptions</code></a>&gt;, { <code>getCanClick</code>: <a href="./../../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<code>boolean</code>&gt; ; <code>getVisibility</code>: <a href="./../../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="../../../enums/features/feature.Visibility"><code>Visibility</code></a> | <code>boolean</code>&gt; ; <code>visibility</code>: <a href="./../../util/computed#processedcomputable"><code>ProcessedComputable</code></a>&lt;<a href="../../../enums/features/feature.Visibility"><code>Visibility</code></a> | <code>boolean</code>&gt; }&gt;</p><p>A type that matches any valid <a href="./grid#grid">Grid</a> object.</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/grids/grid.ts#L293" target="_blank" rel="noreferrer">profectus/src/features/grids/grid.ts:293</a></p><hr><h3 id="grid" tabindex="-1">Grid <a class="header-anchor" href="#grid" aria-label="Permalink to &quot;Grid&quot;">​</a></h3><p>Ƭ <strong>Grid</strong>&lt;<code>T</code>&gt;: <a href="./../feature#replace"><code>Replace</code></a>&lt;<code>T</code> &amp; <a href="../../../interfaces/features/grids/grid.BaseGrid"><code>BaseGrid</code></a>, { <code>cols</code>: <a href="./../../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;cols&quot;</code>]&gt; ; <code>getCanClick</code>: <a href="./../../util/computed#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;getCanClick&quot;</code>], <code>true</code>&gt; ; <code>getClasses</code>: <a href="./../../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;getClasses&quot;</code>]&gt; ; <code>getDisplay</code>: <a href="./../../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;getDisplay&quot;</code>]&gt; ; <code>getStartState</code>: <a href="./../../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;getStartState&quot;</code>]&gt; ; <code>getStyle</code>: <a href="./../../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;getStyle&quot;</code>]&gt; ; <code>getTitle</code>: <a href="./../../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;getTitle&quot;</code>]&gt; ; <code>getVisibility</code>: <a href="./../../util/computed#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;getVisibility&quot;</code>], <a href="./../../../enums/features/feature.Visibility#visible"><code>Visible</code></a>&gt; ; <code>rows</code>: <a href="./../../util/computed#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;rows&quot;</code>]&gt; ; <code>visibility</code>: <a href="./../../util/computed#getcomputabletypewithdefault"><code>GetComputableTypeWithDefault</code></a>&lt;<code>T</code>[<code>&quot;visibility&quot;</code>], <a href="./../../../enums/features/feature.Visibility#visible"><code>Visible</code></a>&gt; }&gt;</p><p>An object that represents a feature that is a grid of cells that all behave according to the same rules.</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../../interfaces/features/grids/grid.GridOptions"><code>GridOptions</code></a></td></tr></tbody></table><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/grids/grid.ts#L276" target="_blank" rel="noreferrer">profectus/src/features/grids/grid.ts:276</a></p><h2 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h2><h3 id="gridtype" tabindex="-1">GridType <a class="header-anchor" href="#gridtype" aria-label="Permalink to &quot;GridType&quot;">​</a></h3><p>• <code>Const</code> <strong>GridType</strong>: typeof <a href="./grid#gridtype"><code>GridType</code></a></p><p>A symbol used to identify <a href="./grid#grid">Grid</a> features.</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/grids/grid.ts#L25" target="_blank" rel="noreferrer">profectus/src/features/grids/grid.ts:25</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="creategrid" tabindex="-1">createGrid <a class="header-anchor" href="#creategrid" aria-label="Permalink to &quot;createGrid&quot;">​</a></h3><p>▸ <strong>createGrid</strong>&lt;<code>T</code>&gt;(<code>optionsFunc</code>): <a href="./grid#grid"><code>Grid</code></a>&lt;<code>T</code>&gt;</p><p>Lazily creates a grid with the given options.</p><h4 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../../interfaces/features/grids/grid.GridOptions"><code>GridOptions</code></a></td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>optionsFunc</code></td><td style="text-align:left;"><a href="./../feature#optionsfunc"><code>OptionsFunc</code></a>&lt;<code>T</code>, <a href="../../../interfaces/features/grids/grid.BaseGrid"><code>BaseGrid</code></a>, <a href="./grid#genericgrid"><code>GenericGrid</code></a>&gt;</td><td style="text-align:left;">Grid options.</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./grid#grid"><code>Grid</code></a>&lt;<code>T</code>&gt;</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/grids/grid.ts#L306" target="_blank" rel="noreferrer">profectus/src/features/grids/grid.ts:306</a></p>',45),i=[o];function c(l,s,n,u,h,p){return a(),t("div",null,i)}const b=e(d,[["render",c]]);export{g as __pageData,b as default};
