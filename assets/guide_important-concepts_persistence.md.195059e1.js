import{_ as e,c as t,o as a,N as s}from"./chunks/framework.0799945b.js";const m=JSON.parse('{"title":"Persistence","description":"","frontmatter":{},"headers":[],"relativePath":"guide/important-concepts/persistence.md","lastUpdated":1680758145000}'),r={name:"guide/important-concepts/persistence.md"},n=s('<h1 id="persistence" tabindex="-1">Persistence <a class="header-anchor" href="#persistence" aria-label="Permalink to &quot;Persistence&quot;">​</a></h1><p>Persistence refers to data that is saved, so that it <em>persists</em> when the user closes the tab and opens it again in the future.</p><p>In Profectus, this is handled by creating &quot;persistent refs&quot;, which act like <a href="./reactivity">refs</a> but whose value is stored in an object that gets saved to localStorage. Other than that you can treat them like any other ref - when adding the layer, any persistent refs will automatically have their values updated to the ones saved in localStorage. If there isn&#39;t a saved value, it&#39;ll use the default value passed to the persistent ref constructor.</p><p>Many features in Profectus, such as upgrades, milestones, and challenges, internally have persistent refs to save things like whether the upgrade has been purchased, the milestone achieved, or the challenge completed. Creators can also create their own custom persistent refs to store any arbitrary (but serializable) data they need - that means Numbers (including big numbers), strings, booleans, or objects containing only serializable values. Another notable function is the resource constructor. If you pass a default value into its contructor, it will automatically create a persistent ref for that resource. If you pass in a ref, it will NOT make the ref persistent.</p><p>It&#39;s important for saving and loading these properties for these refs to be in a well known location. This is implemented based on the location of the persistent ref within a layer. That means its important that <strong>all persistent refs are located within the object returned by the createLayer options function</strong>. If a persistent ref is not within that object, it will NOT be saved and loaded - regardless of whether its a persistent ref within a feature, one you manually created, or otherwise.</p><p>Additionally, this structure should typically remain consistent between project versions. If a value is in a new location, it will not load the value from localStorage correctly. This is exacerbated if two values swap places, such as when an array is re-ordered. In the event a creator changes this structure anyways, the <a href="./../creating-your-project/project-entry#fixoldsave">fixOldSave</a> function can be used to migrate the old player save data to the new structure expected by the current version of the project.</p>',6),i=[n];function o(c,l,h,d,u,p){return a(),t("div",null,i)}const y=e(r,[["render",o]]);export{m as __pageData,y as default};
