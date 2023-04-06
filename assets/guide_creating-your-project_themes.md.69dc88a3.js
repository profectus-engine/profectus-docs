import{_ as e,c as t,o as a,N as o}from"./chunks/framework.0799945b.js";const g=JSON.parse('{"title":"Themes","description":"","frontmatter":{},"headers":[],"relativePath":"guide/creating-your-project/themes.md","lastUpdated":1680758145000}'),i={name:"guide/creating-your-project/themes.md"},s=o('<h1 id="themes" tabindex="-1">Themes <a class="header-anchor" href="#themes" aria-label="Permalink to &quot;Themes&quot;">​</a></h1><p>Themes are objects that change how the project&#39;s interface should look. This is done mostly by changing the values of various CSS variables. You can look at the existing themes as a reference for the kind of values these CSS variables expect. They can also set various theme options that change how parts of the screen are laid out, which are described <a href="#theme-options">below</a>.</p><p>They are stored in <code>/src/data/themes.ts</code>.</p><h2 id="modifying-themes" tabindex="-1">Modifying Themes <a class="header-anchor" href="#modifying-themes" aria-label="Permalink to &quot;Modifying Themes&quot;">​</a></h2><p>You can add a theme by adding a property to the <code>Themes</code> enum and then including the theme in the exported object. It&#39;s recommended to use the spread operator if you&#39;d like to have a theme look like another, but override specific options / CSS variables.</p><p>Themes added in this way will be automatically included in the Themes dropdown in the Options tab. Removing themes from the enum and exported object will similarly hide them from the dropdown.</p><p>If you&#39;d like to change which theme is the default, you may modify the initial player settings object in the <code>/src/game/settings.ts</code> file. Keep in mind you&#39;ll also want to change it in the <code>hardResetSettings</code> function in the same file.</p><h2 id="theme-options" tabindex="-1">Theme Options <a class="header-anchor" href="#theme-options" aria-label="Permalink to &quot;Theme Options&quot;">​</a></h2><h3 id="floatingtabs" tabindex="-1">floatingTabs <a class="header-anchor" href="#floatingtabs" aria-label="Permalink to &quot;floatingTabs&quot;">​</a></h3><ul><li>Type: <code>boolean</code></li></ul><p>Toggles whether to display tab buttons in a tab list, similar to how a browser displays tabs; or to display them as floating buttons, similar to how TMT displays buttons.</p><h3 id="mergeadjacent" tabindex="-1">mergeAdjacent <a class="header-anchor" href="#mergeadjacent" aria-label="Permalink to &quot;mergeAdjacent&quot;">​</a></h3><ul><li>Type: <code>boolean</code></li></ul><p>If true, elements in a row or column will have their margins removed and border radiuses set to 0 between elements. This will cause the elements to appear as segments in a single object.</p><p>Currently, this can only merge in a single dimension. Rows of columns or columns of rows will not merge into a single rectangular object.</p>',15),n=[s];function r(h,l,d,c,m,p){return a(),t("div",null,n)}const b=e(i,[["render",r]]);export{g as __pageData,b as default};
