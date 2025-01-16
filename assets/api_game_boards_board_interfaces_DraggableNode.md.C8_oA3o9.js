import{_ as a,c as r,a0 as o,o as t}from"./chunks/framework.P9qPzDnn.js";const p=JSON.parse('{"title":"Interface: DraggableNode<T>","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/game/boards/board/interfaces/DraggableNode.md","filePath":"api/game/boards/board/interfaces/DraggableNode.md","lastUpdated":null}'),d={name:"api/game/boards/board/interfaces/DraggableNode.md"};function n(i,e,s,c,l,h){return t(),r("div",null,e[0]||(e[0]=[o('<p><a href="./../../../../">Profectus</a> / <a href="./../">game/boards/board</a> / DraggableNode</p><h1 id="interface-draggablenode-t" tabindex="-1">Interface: DraggableNode&lt;T&gt; <a class="header-anchor" href="#interface-draggablenode-t" aria-label="Permalink to &quot;Interface: DraggableNode\\&lt;T\\&gt;&quot;">​</a></h1><p>An object that represents a system for moving nodes on a board by dragging them.</p><h2 id="type-parameters" tabindex="-1">Type Parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type Parameters&quot;">​</a></h2><p>• <strong>T</strong></p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="drag" tabindex="-1">drag() <a class="header-anchor" href="#drag" aria-label="Permalink to &quot;drag()&quot;">​</a></h3><blockquote><p><strong>drag</strong>: (<code>e</code>) =&gt; <code>void</code></p></blockquote><p>A function to call when the mouse moves during a drag, typically attached to the Board&#39;s onDrag listener.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><h5 id="e" tabindex="-1">e <a class="header-anchor" href="#e" aria-label="Permalink to &quot;e&quot;">​</a></h5><p><a href="https://developer.mozilla.org/docs/Web/API/MouseEvent" target="_blank" rel="noreferrer"><code>MouseEvent</code></a> | <a href="https://developer.mozilla.org/docs/Web/API/TouchEvent" target="_blank" rel="noreferrer"><code>TouchEvent</code></a></p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/game/boards/board.tsx#L85" target="_blank" rel="noreferrer">profectus/src/game/boards/board.tsx:85</a></p><hr><h3 id="dragdelta" tabindex="-1">dragDelta <a class="header-anchor" href="#dragdelta" aria-label="Permalink to &quot;dragDelta&quot;">​</a></h3><blockquote><p><strong>dragDelta</strong>: <a href="https://vuejs.org/guide/typescript/composition-api.html#typing-ref" target="_blank" rel="noreferrer"><code>Ref</code></a>&lt;<a href="./../type-aliases/NodePosition"><code>NodePosition</code></a>, <a href="./../type-aliases/NodePosition"><code>NodePosition</code></a>&gt;</p></blockquote><p>The position of the node being dragged relative to where it started at the beginning of the drag.</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/game/boards/board.tsx#L77" target="_blank" rel="noreferrer">profectus/src/game/boards/board.tsx:77</a></p><hr><h3 id="enddrag" tabindex="-1">endDrag <a class="header-anchor" href="#enddrag" aria-label="Permalink to &quot;endDrag&quot;">​</a></h3><blockquote><p><strong>endDrag</strong>: <code>VoidFunction</code></p></blockquote><p>A function to call whenever a drag should end, typically attached to the Board&#39;s onMouseUp and onMouseLeave listeners.</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/game/boards/board.tsx#L83" target="_blank" rel="noreferrer">profectus/src/game/boards/board.tsx:83</a></p><hr><h3 id="hasdragged" tabindex="-1">hasDragged <a class="header-anchor" href="#hasdragged" aria-label="Permalink to &quot;hasDragged&quot;">​</a></h3><blockquote><p><strong>hasDragged</strong>: <a href="https://vuejs.org/guide/typescript/composition-api.html#typing-ref" target="_blank" rel="noreferrer"><code>Ref</code></a>&lt;<code>boolean</code>, <code>boolean</code>&gt;</p></blockquote><p>A ref to whether or not the node being dragged has actually been dragged away from its starting position.</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/game/boards/board.tsx#L75" target="_blank" rel="noreferrer">profectus/src/game/boards/board.tsx:75</a></p><hr><h3 id="nodebeingdragged" tabindex="-1">nodeBeingDragged <a class="header-anchor" href="#nodebeingdragged" aria-label="Permalink to &quot;nodeBeingDragged&quot;">​</a></h3><blockquote><p><strong>nodeBeingDragged</strong>: <a href="https://vuejs.org/guide/typescript/composition-api.html#typing-ref" target="_blank" rel="noreferrer"><code>Ref</code></a>&lt;<code>undefined</code> | <code>T</code>, <code>undefined</code> | <code>T</code>&gt;</p></blockquote><p>A ref to the node currently being moved.</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/game/boards/board.tsx#L71" target="_blank" rel="noreferrer">profectus/src/game/boards/board.tsx:71</a></p><hr><h3 id="receivingnode" tabindex="-1">receivingNode <a class="header-anchor" href="#receivingnode" aria-label="Permalink to &quot;receivingNode&quot;">​</a></h3><blockquote><p><strong>receivingNode</strong>: <a href="https://vuejs.org/guide/typescript/composition-api.html#typing-ref" target="_blank" rel="noreferrer"><code>Ref</code></a>&lt;<code>undefined</code> | <code>T</code>, <code>undefined</code> | <code>T</code>&gt;</p></blockquote><p>A ref to the node the node being dragged could be dropped upon if let go, if any. The node closest to the node being dragged if there are more than one within the drop area radius.</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/game/boards/board.tsx#L73" target="_blank" rel="noreferrer">profectus/src/game/boards/board.tsx:73</a></p><hr><h3 id="receivingnodes" tabindex="-1">receivingNodes <a class="header-anchor" href="#receivingnodes" aria-label="Permalink to &quot;receivingNodes&quot;">​</a></h3><blockquote><p><strong>receivingNodes</strong>: <a href="https://vuejs.org/guide/typescript/composition-api.html#typing-ref" target="_blank" rel="noreferrer"><code>Ref</code></a>&lt;<code>T</code>[], <code>T</code>[]&gt;</p></blockquote><p>The nodes that can receive the node currently being dragged.</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/game/boards/board.tsx#L79" target="_blank" rel="noreferrer">profectus/src/game/boards/board.tsx:79</a></p><hr><h3 id="startdrag" tabindex="-1">startDrag() <a class="header-anchor" href="#startdrag" aria-label="Permalink to &quot;startDrag()&quot;">​</a></h3><blockquote><p><strong>startDrag</strong>: (<code>e</code>, <code>node</code>) =&gt; <code>void</code></p></blockquote><p>A function to call whenever a drag should start, that takes the mouse event that triggered it. Typically attached to each node&#39;s onMouseDown listener.</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><h5 id="e-1" tabindex="-1">e <a class="header-anchor" href="#e-1" aria-label="Permalink to &quot;e&quot;">​</a></h5><p><a href="https://developer.mozilla.org/docs/Web/API/MouseEvent" target="_blank" rel="noreferrer"><code>MouseEvent</code></a> | <a href="https://developer.mozilla.org/docs/Web/API/TouchEvent" target="_blank" rel="noreferrer"><code>TouchEvent</code></a></p><h5 id="node" tabindex="-1">node <a class="header-anchor" href="#node" aria-label="Permalink to &quot;node&quot;">​</a></h5><p><code>T</code></p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/game/boards/board.tsx#L81" target="_blank" rel="noreferrer">profectus/src/game/boards/board.tsx:81</a></p>',65)]))}const f=a(d,[["render",n]]);export{p as __pageData,f as default};
