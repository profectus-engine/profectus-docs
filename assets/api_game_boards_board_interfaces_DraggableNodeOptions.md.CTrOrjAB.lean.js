import{_ as a,c as o,a0 as r,o as t}from"./chunks/framework.P9qPzDnn.js";const b=JSON.parse('{"title":"Interface: DraggableNodeOptions<T>","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/game/boards/board/interfaces/DraggableNodeOptions.md","filePath":"api/game/boards/board/interfaces/DraggableNodeOptions.md","lastUpdated":null}'),n={name:"api/game/boards/board/interfaces/DraggableNodeOptions.md"};function d(i,e,s,c,l,h){return t(),o("div",null,e[0]||(e[0]=[r('<p><a href="./../../../../">Profectus</a> / <a href="./../">game/boards/board</a> / DraggableNodeOptions</p><h1 id="interface-draggablenodeoptions-t" tabindex="-1">Interface: DraggableNodeOptions&lt;T&gt; <a class="header-anchor" href="#interface-draggablenodeoptions-t" aria-label="Permalink to &quot;Interface: DraggableNodeOptions\\&lt;T\\&gt;&quot;">​</a></h1><p>An object that configures a <a href="./DraggableNode">DraggableNode</a>.</p><h2 id="type-parameters" tabindex="-1">Type Parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type Parameters&quot;">​</a></h2><p>• <strong>T</strong></p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="board" tabindex="-1">board <a class="header-anchor" href="#board" aria-label="Permalink to &quot;board&quot;">​</a></h3><blockquote><p><strong>board</strong>: <a href="https://vuejs.org/guide/typescript/composition-api.html#typing-ref" target="_blank" rel="noreferrer"><code>Ref</code></a>&lt;<code>any</code>, <code>any</code>&gt;</p></blockquote><p>A ref to the specific instance of the Board vue component the node will be draggable on. Obtained by passing a suitable ref as the &quot;ref&quot; attribute to the Board component.</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/game/boards/board.tsx#L55" target="_blank" rel="noreferrer">profectus/src/game/boards/board.tsx:55</a></p><hr><h3 id="droparearadius" tabindex="-1">dropAreaRadius? <a class="header-anchor" href="#droparearadius" aria-label="Permalink to &quot;dropAreaRadius?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>dropAreaRadius</strong>: <a href="./../type-aliases/NodeMaybeRefOrGetter"><code>NodeMaybeRefOrGetter</code></a>&lt;<code>T</code>, <code>number</code>, []&gt;</p></blockquote><p>The maximum distance (in pixels, before zoom) away a node can be and still drop onto a receiving node.</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/game/boards/board.tsx#L63" target="_blank" rel="noreferrer">profectus/src/game/boards/board.tsx:63</a></p><hr><h3 id="getposition" tabindex="-1">getPosition() <a class="header-anchor" href="#getposition" aria-label="Permalink to &quot;getPosition()&quot;">​</a></h3><blockquote><p><strong>getPosition</strong>: (<code>node</code>) =&gt; <a href="./../type-aliases/NodePosition"><code>NodePosition</code></a></p></blockquote><p>Getter function to go from the node (typically ID) to the position of said node.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><h5 id="node" tabindex="-1">node <a class="header-anchor" href="#node" aria-label="Permalink to &quot;node&quot;">​</a></h5><p><code>T</code></p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../type-aliases/NodePosition"><code>NodePosition</code></a></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/game/boards/board.tsx#L57" target="_blank" rel="noreferrer">profectus/src/game/boards/board.tsx:57</a></p><hr><h3 id="ondrop" tabindex="-1">onDrop()? <a class="header-anchor" href="#ondrop" aria-label="Permalink to &quot;onDrop()?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>onDrop</strong>: (<code>acceptingNode</code>, <code>draggingNode</code>) =&gt; <code>void</code></p></blockquote><p>A callback for when a node gets dropped upon a receiving node.</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><h5 id="acceptingnode" tabindex="-1">acceptingNode <a class="header-anchor" href="#acceptingnode" aria-label="Permalink to &quot;acceptingNode&quot;">​</a></h5><p><code>T</code></p><h5 id="draggingnode" tabindex="-1">draggingNode <a class="header-anchor" href="#draggingnode" aria-label="Permalink to &quot;draggingNode&quot;">​</a></h5><p><code>T</code></p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/game/boards/board.tsx#L65" target="_blank" rel="noreferrer">profectus/src/game/boards/board.tsx:65</a></p><hr><h3 id="receivingnodes" tabindex="-1">receivingNodes? <a class="header-anchor" href="#receivingnodes" aria-label="Permalink to &quot;receivingNodes?&quot;">​</a></h3><blockquote><p><code>optional</code> <strong>receivingNodes</strong>: <a href="./../type-aliases/NodeMaybeRefOrGetter"><code>NodeMaybeRefOrGetter</code></a>&lt;<code>T</code>, <code>T</code>[], []&gt;</p></blockquote><p>A list of nodes that the currently dragged node can be dropped upon.</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/game/boards/board.tsx#L61" target="_blank" rel="noreferrer">profectus/src/game/boards/board.tsx:61</a></p><hr><h3 id="setposition" tabindex="-1">setPosition() <a class="header-anchor" href="#setposition" aria-label="Permalink to &quot;setPosition()&quot;">​</a></h3><blockquote><p><strong>setPosition</strong>: (<code>node</code>, <code>position</code>) =&gt; <code>void</code></p></blockquote><p>Setter function to update the position of a node.</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><h5 id="node-1" tabindex="-1">node <a class="header-anchor" href="#node-1" aria-label="Permalink to &quot;node&quot;">​</a></h5><p><code>T</code></p><h5 id="position" tabindex="-1">position <a class="header-anchor" href="#position" aria-label="Permalink to &quot;position&quot;">​</a></h5><p><a href="./../type-aliases/NodePosition"><code>NodePosition</code></a></p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://code.incremental.social/profectus/Profectus/src/branch/main/src/game/boards/board.tsx#L59" target="_blank" rel="noreferrer">profectus/src/game/boards/board.tsx:59</a></p>',60)]))}const f=a(n,[["render",d]]);export{b as __pageData,f as default};
