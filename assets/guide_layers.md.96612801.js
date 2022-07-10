import{_ as e,c as a,o as t,a as r}from"./app.7cfe4cf0.js";const f='{"title":"Layers","description":"","frontmatter":{},"headers":[{"level":2,"title":"Lazy Proxies","slug":"lazy-proxies"}],"relativePath":"guide/layers.md"}',s={},o=r('<h1 id="layers" tabindex="-1">Layers <a class="header-anchor" href="#layers" aria-hidden="true">#</a></h1><p>Profectus content is organized into units called &quot;Layers&quot;. When display content to the user, it will be done so by having some number of layers appearing as sections on the screen. They are stored in <code>/src/data/layers</code>.</p><p>Each layer is ultimately a collection of different features, and a display function. While there are a couple reserved properties for layers, most of its structure is fully up to the creator.</p><p>Layers can be dynamically added or removed at any time, which also allows for effectively disabling or enabling content based on arbitrary conditions. Just make sure <a href="./project-entry.html#getinitiallayers">getInitialLayers</a> can process the player save data object and determine which layers should be currently active.</p><h2 id="lazy-proxies" tabindex="-1">Lazy Proxies <a class="header-anchor" href="#lazy-proxies" aria-hidden="true">#</a></h2><p>Layers (and features) are not actually created immediately. Instead, their options are gotten through a function which is then run the first time something <em>inside</em> the layer is accessed. This is a concept called lazy evaluation, which is also used for things like <code>computed</code>, and allows for features to reference each other without worrying about cyclical dependencies.</p>',6),i=[o];function n(c,l,d,h,y,u){return t(),a("div",null,i)}var _=e(s,[["render",n]]);export{f as __pageData,_ as default};