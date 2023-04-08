import{_ as e,c as a,o as t,N as r}from"./chunks/framework.0799945b.js";const u=JSON.parse('{"title":"Interface: BaseTabFamily","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/interfaces/features/tabs/tabFamily.BaseTabFamily.md","lastUpdated":null}'),o={name:"api/interfaces/features/tabs/tabFamily.BaseTabFamily.md"},n=r('<h1 id="interface-basetabfamily" tabindex="-1">Interface: BaseTabFamily <a class="header-anchor" href="#interface-basetabfamily" aria-label="Permalink to &quot;Interface: BaseTabFamily&quot;">​</a></h1><p><a href="./../../../modules/features/tabs/tabFamily">features/tabs/tabFamily</a>.BaseTabFamily</p><p>The properties that are added onto a processed <a href="./tabFamily.TabFamilyOptions">TabFamilyOptions</a> to create an <a href="./../../../modules/features/tabs/tabFamily#tabfamily">TabFamily</a>.</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="component" tabindex="-1">[Component] <a class="header-anchor" href="#component" aria-label="Permalink to &quot;[Component]&quot;">​</a></h3><p>• <strong>[Component]</strong>: <a href="./../../../modules/features/feature#genericcomponent"><code>GenericComponent</code></a></p><p>The Vue component used to render this feature.</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/tabs/tabFamily.ts#L120" target="_blank" rel="noreferrer">profectus/src/features/tabs/tabFamily.ts:120</a></p><hr><h3 id="gatherprops" tabindex="-1">[GatherProps] <a class="header-anchor" href="#gatherprops" aria-label="Permalink to &quot;[GatherProps]&quot;">​</a></h3><p>• <strong>[GatherProps]</strong>: () =&gt; <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type" target="_blank" rel="noreferrer"><code>Record</code></a>&lt;<code>string</code>, <code>unknown</code>&gt;</p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><p>▸ (): <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type" target="_blank" rel="noreferrer"><code>Record</code></a>&lt;<code>string</code>, <code>unknown</code>&gt;</p><p>A function to gather the props the vue component requires for this feature.</p><h5 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type" target="_blank" rel="noreferrer"><code>Record</code></a>&lt;<code>string</code>, <code>unknown</code>&gt;</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/tabs/tabFamily.ts#L122" target="_blank" rel="noreferrer">profectus/src/features/tabs/tabFamily.ts:122</a></p><hr><h3 id="activetab" tabindex="-1">activeTab <a class="header-anchor" href="#activetab" aria-label="Permalink to &quot;activeTab&quot;">​</a></h3><p>• <strong>activeTab</strong>: <code>Ref</code>&lt;<code>null</code> | <a href="./../../../modules/features/feature#coercablecomponent"><code>CoercableComponent</code></a> | <a href="./../../../modules/features/tabs/tab#generictab"><code>GenericTab</code></a>&gt;</p><p>The currently active tab, if any.</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/tabs/tabFamily.ts#L114" target="_blank" rel="noreferrer">profectus/src/features/tabs/tabFamily.ts:114</a></p><hr><h3 id="id" tabindex="-1">id <a class="header-anchor" href="#id" aria-label="Permalink to &quot;id&quot;">​</a></h3><p>• <strong>id</strong>: <code>string</code></p><p>An auto-generated ID for identifying features that appear in the DOM. Will not persist between refreshes or updates.</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/tabs/tabFamily.ts#L110" target="_blank" rel="noreferrer">profectus/src/features/tabs/tabFamily.ts:110</a></p><hr><h3 id="selected" tabindex="-1">selected <a class="header-anchor" href="#selected" aria-label="Permalink to &quot;selected&quot;">​</a></h3><p>• <strong>selected</strong>: <a href="./../../../modules/game/persistence#persistent"><code>Persistent</code></a>&lt;<code>string</code>&gt;</p><p>The name of the tab that is currently active.</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/tabs/tabFamily.ts#L116" target="_blank" rel="noreferrer">profectus/src/features/tabs/tabFamily.ts:116</a></p><hr><h3 id="tabs" tabindex="-1">tabs <a class="header-anchor" href="#tabs" aria-label="Permalink to &quot;tabs&quot;">​</a></h3><p>• <strong>tabs</strong>: <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type" target="_blank" rel="noreferrer"><code>Record</code></a>&lt;<code>string</code>, <a href="./tabFamily.TabButtonOptions"><code>TabButtonOptions</code></a>&gt;</p><p>All the tabs within this family.</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/tabs/tabFamily.ts#L112" target="_blank" rel="noreferrer">profectus/src/features/tabs/tabFamily.ts:112</a></p><hr><h3 id="type" tabindex="-1">type <a class="header-anchor" href="#type" aria-label="Permalink to &quot;type&quot;">​</a></h3><p>• <strong>type</strong>: typeof <a href="./../../../modules/features/tabs/tabFamily#tabfamilytype"><code>TabFamilyType</code></a></p><p>A symbol that helps identify features of the same type.</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/tabs/tabFamily.ts#L118" target="_blank" rel="noreferrer">profectus/src/features/tabs/tabFamily.ts:118</a></p>',49),s=[n];function i(d,c,l,h,f,p){return t(),a("div",null,s)}const m=e(o,[["render",i]]);export{u as __pageData,m as default};