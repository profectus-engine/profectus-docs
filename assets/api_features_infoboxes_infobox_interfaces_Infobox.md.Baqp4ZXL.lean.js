import{_ as a,c as t,a0 as r,o}from"./chunks/framework.P9qPzDnn.js";const u=JSON.parse('{"title":"Interface: Infobox","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/features/infoboxes/infobox/interfaces/Infobox.md","filePath":"api/features/infoboxes/infobox/interfaces/Infobox.md","lastUpdated":null}'),i={name:"api/features/infoboxes/infobox/interfaces/Infobox.md"};function n(s,e,l,c,d,f){return o(),t("div",null,e[0]||(e[0]=[r('<p><a href="./../../../../">Profectus</a> / <a href="./../">features/infoboxes/infobox</a> / Infobox</p><h1 id="interface-infobox" tabindex="-1">Interface: Infobox <a class="header-anchor" href="#interface-infobox" aria-label="Permalink to &quot;Interface: Infobox&quot;">​</a></h1><p>An object that represents a feature that displays information in a collapsible way.</p><h2 id="extends" tabindex="-1">Extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;Extends&quot;">​</a></h2><ul><li><a href="./../../../../util/vue/interfaces/VueFeature"><code>VueFeature</code></a></li></ul><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="vuefeature" tabindex="-1">[VueFeature] <a class="header-anchor" href="#vuefeature" aria-label="Permalink to &quot;\\[VueFeature\\]&quot;">​</a></h3><blockquote><p><strong>[VueFeature]</strong>: <code>true</code></p></blockquote><p>Used to identify Vue Features</p><h4 id="inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./../../../../util/vue/interfaces/VueFeature"><code>VueFeature</code></a>.<a href="./../../../../util/vue/interfaces/VueFeature#[vuefeature]"><code>[VueFeature]</code></a></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/util/vue.tsx#L43" target="_blank" rel="noreferrer">profectus/src/util/vue.tsx:43</a></p><hr><h3 id="bodystyle" tabindex="-1">bodyStyle? <a class="header-anchor" href="#bodystyle" aria-label="Permalink to &quot;bodyStyle?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>bodyStyle</strong>: <a href="https://vuejs.org/api/utility-types.html#mayberef" target="_blank" rel="noreferrer"><code>MaybeRef</code></a>&lt;<a href="https://vuejs.org/api/utility-types.html#cssproperties" target="_blank" rel="noreferrer"><code>CSSProperties</code></a>&gt;</p></blockquote><p>CSS to apply to the body of the infobox.</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/features/infoboxes/infobox.tsx#L35" target="_blank" rel="noreferrer">profectus/src/features/infoboxes/infobox.tsx:35</a></p><hr><h3 id="classes" tabindex="-1">classes? <a class="header-anchor" href="#classes" aria-label="Permalink to &quot;classes?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>classes</strong>: <a href="https://vuejs.org/api/utility-types.html#mayberef" target="_blank" rel="noreferrer"><code>MaybeRef</code></a>&lt;<a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type" target="_blank" rel="noreferrer"><code>Record</code></a>&lt;<code>string</code>, <code>boolean</code>&gt;&gt;</p></blockquote><p>Dictionary of CSS classes to apply to this feature.</p><h4 id="inherited-from-1" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-1" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./../../../../util/vue/interfaces/VueFeature"><code>VueFeature</code></a>.<a href="./../../../../util/vue/interfaces/VueFeature#classes"><code>classes</code></a></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/util/vue.tsx#L35" target="_blank" rel="noreferrer">profectus/src/util/vue.tsx:35</a></p><hr><h3 id="collapsed" tabindex="-1">collapsed <a class="header-anchor" href="#collapsed" aria-label="Permalink to &quot;collapsed&quot;">​</a></h3><blockquote><p><strong>collapsed</strong>: <a href="./../../../../game/persistence/type-aliases/Persistent"><code>Persistent</code></a>&lt;<code>boolean</code>&gt;</p></blockquote><p>Whether or not this infobox is collapsed.</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/features/infoboxes/infobox.tsx#L41" target="_blank" rel="noreferrer">profectus/src/features/infoboxes/infobox.tsx:41</a></p><hr><h3 id="color" tabindex="-1">color? <a class="header-anchor" href="#color" aria-label="Permalink to &quot;color?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>color</strong>: <a href="https://vuejs.org/api/utility-types.html#mayberef" target="_blank" rel="noreferrer"><code>MaybeRef</code></a>&lt;<code>string</code>&gt;</p></blockquote><p>The background color of the Infobox.</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/features/infoboxes/infobox.tsx#L31" target="_blank" rel="noreferrer">profectus/src/features/infoboxes/infobox.tsx:31</a></p><hr><h3 id="components" tabindex="-1">components <a class="header-anchor" href="#components" aria-label="Permalink to &quot;components&quot;">​</a></h3><blockquote><p><strong>components</strong>: <a href="./../../../../util/computed/type-aliases/MaybeGetter"><code>MaybeGetter</code></a>&lt;<a href="./../../../../util/vue/type-aliases/Renderable"><code>Renderable</code></a>&gt;[]</p></blockquote><p>The components to render inside the vue feature</p><h4 id="inherited-from-2" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-2" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./../../../../util/vue/interfaces/VueFeature"><code>VueFeature</code></a>.<a href="./../../../../util/vue/interfaces/VueFeature#components"><code>components</code></a></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/util/vue.tsx#L39" target="_blank" rel="noreferrer">profectus/src/util/vue.tsx:39</a></p><hr><h3 id="display" tabindex="-1">display <a class="header-anchor" href="#display" aria-label="Permalink to &quot;display&quot;">​</a></h3><blockquote><p><strong>display</strong>: <a href="./../../../../util/computed/type-aliases/MaybeGetter"><code>MaybeGetter</code></a>&lt;<a href="./../../../../util/vue/type-aliases/Renderable"><code>Renderable</code></a>&gt;</p></blockquote><p>The main text that appears in the display.</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/features/infoboxes/infobox.tsx#L39" target="_blank" rel="noreferrer">profectus/src/features/infoboxes/infobox.tsx:39</a></p><hr><h3 id="id" tabindex="-1">id <a class="header-anchor" href="#id" aria-label="Permalink to &quot;id&quot;">​</a></h3><blockquote><p><strong>id</strong>: <code>string</code></p></blockquote><p>An auto-generated ID for identifying features that appear in the DOM. Will not persist between refreshes or updates.</p><h4 id="inherited-from-3" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-3" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./../../../../util/vue/interfaces/VueFeature"><code>VueFeature</code></a>.<a href="./../../../../util/vue/interfaces/VueFeature#id"><code>id</code></a></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/util/vue.tsx#L31" target="_blank" rel="noreferrer">profectus/src/util/vue.tsx:31</a></p><hr><h3 id="style" tabindex="-1">style? <a class="header-anchor" href="#style" aria-label="Permalink to &quot;style?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>style</strong>: <a href="https://vuejs.org/api/utility-types.html#mayberef" target="_blank" rel="noreferrer"><code>MaybeRef</code></a>&lt;<a href="https://vuejs.org/api/utility-types.html#cssproperties" target="_blank" rel="noreferrer"><code>CSSProperties</code></a>&gt;</p></blockquote><p>CSS to apply to this feature.</p><h4 id="inherited-from-4" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-4" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./../../../../util/vue/interfaces/VueFeature"><code>VueFeature</code></a>.<a href="./../../../../util/vue/interfaces/VueFeature#style"><code>style</code></a></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/util/vue.tsx#L37" target="_blank" rel="noreferrer">profectus/src/util/vue.tsx:37</a></p><hr><h3 id="title" tabindex="-1">title <a class="header-anchor" href="#title" aria-label="Permalink to &quot;title&quot;">​</a></h3><blockquote><p><strong>title</strong>: <a href="./../../../../util/computed/type-aliases/MaybeGetter"><code>MaybeGetter</code></a>&lt;<a href="./../../../../util/vue/type-aliases/Renderable"><code>Renderable</code></a>&gt;</p></blockquote><p>A header to appear at the top of the display.</p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/features/infoboxes/infobox.tsx#L37" target="_blank" rel="noreferrer">profectus/src/features/infoboxes/infobox.tsx:37</a></p><hr><h3 id="titlestyle" tabindex="-1">titleStyle? <a class="header-anchor" href="#titlestyle" aria-label="Permalink to &quot;titleStyle?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>titleStyle</strong>: <a href="https://vuejs.org/api/utility-types.html#mayberef" target="_blank" rel="noreferrer"><code>MaybeRef</code></a>&lt;<a href="https://vuejs.org/api/utility-types.html#cssproperties" target="_blank" rel="noreferrer"><code>CSSProperties</code></a>&gt;</p></blockquote><p>CSS to apply to the title of the infobox.</p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/features/infoboxes/infobox.tsx#L33" target="_blank" rel="noreferrer">profectus/src/features/infoboxes/infobox.tsx:33</a></p><hr><h3 id="type" tabindex="-1">type <a class="header-anchor" href="#type" aria-label="Permalink to &quot;type&quot;">​</a></h3><blockquote><p><strong>type</strong>: <em>typeof</em> <a href="./../variables/InfoboxType"><code>InfoboxType</code></a></p></blockquote><p>A symbol that helps identify features of the same type.</p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/features/infoboxes/infobox.tsx#L43" target="_blank" rel="noreferrer">profectus/src/features/infoboxes/infobox.tsx:43</a></p><hr><h3 id="visibility" tabindex="-1">visibility? <a class="header-anchor" href="#visibility" aria-label="Permalink to &quot;visibility?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>visibility</strong>: <a href="https://vuejs.org/api/utility-types.html#mayberef" target="_blank" rel="noreferrer"><code>MaybeRef</code></a>&lt;boolean | Visibility&gt;</p></blockquote><p>Whether this feature should be visible.</p><h4 id="inherited-from-5" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-5" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./../../../../util/vue/interfaces/VueFeature"><code>VueFeature</code></a>.<a href="./../../../../util/vue/interfaces/VueFeature#visibility"><code>visibility</code></a></p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/util/vue.tsx#L33" target="_blank" rel="noreferrer">profectus/src/util/vue.tsx:33</a></p><hr><h3 id="wrappers" tabindex="-1">wrappers <a class="header-anchor" href="#wrappers" aria-label="Permalink to &quot;wrappers&quot;">​</a></h3><blockquote><p><strong>wrappers</strong>: <a href="./../../../../util/vue/type-aliases/Wrapper"><code>Wrapper</code></a>[]</p></blockquote><p>The components to render wrapped around the vue feature</p><h4 id="inherited-from-6" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-6" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./../../../../util/vue/interfaces/VueFeature"><code>VueFeature</code></a>.<a href="./../../../../util/vue/interfaces/VueFeature#wrappers"><code>wrappers</code></a></p><h4 id="defined-in-13" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-13" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/util/vue.tsx#L41" target="_blank" rel="noreferrer">profectus/src/util/vue.tsx:41</a></p>',103)]))}const p=a(i,[["render",n]]);export{u as __pageData,p as default};
