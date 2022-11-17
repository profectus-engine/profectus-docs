import{_ as e,c as a,o as i,a as t}from"./app.ab34650d.js";const g=JSON.parse('{"title":"Project Info","description":"","frontmatter":{},"headers":[{"level":2,"title":"Basic Config","slug":"basic-config"},{"level":3,"title":"title","slug":"title"},{"level":3,"title":"description","slug":"description"},{"level":3,"title":"id","slug":"id"},{"level":3,"title":"author","slug":"author"},{"level":3,"title":"discordName","slug":"discordname"},{"level":3,"title":"discordLink","slug":"discordlink"},{"level":2,"title":"Version Config","slug":"version-config"},{"level":3,"title":"versionNumber","slug":"versionnumber"},{"level":3,"title":"versionTitle","slug":"versiontitle"},{"level":2,"title":"Display Config","slug":"display-config"},{"level":3,"title":"allowGoBack","slug":"allowgoback"},{"level":3,"title":"defaultShowSmall","slug":"defaultshowsmall"},{"level":3,"title":"defaultDecimalsShown","slug":"defaultdecimalsshown"},{"level":3,"title":"useHeader","slug":"useheader"},{"level":3,"title":"banner","slug":"banner"},{"level":3,"title":"logo","slug":"logo"},{"level":3,"title":"initialTabs","slug":"initialtabs"},{"level":2,"title":"Advanced Config","slug":"advanced-config"},{"level":3,"title":"maxTickLength","slug":"maxticklength"},{"level":3,"title":"offlineLimit","slug":"offlinelimit"},{"level":3,"title":"enablePausing","slug":"enablepausing"},{"level":3,"title":"exportEncoding","slug":"exportencoding"}],"relativePath":"guide/creating-your-project/project-info.md","lastUpdated":1668656307000}'),l={name:"guide/creating-your-project/project-info.md"},o=t('<h1 id="project-info" tabindex="-1">Project Info <a class="header-anchor" href="#project-info" aria-hidden="true">#</a></h1><p>This is a JSON file containing information that describes your project and configures parts of how Profectus should represent it.</p><p>It is stored at <code>/src/data/projInfo.json</code>.</p><h2 id="basic-config" tabindex="-1">Basic Config <a class="header-anchor" href="#basic-config" aria-hidden="true">#</a></h2><h3 id="title" tabindex="-1">title <a class="header-anchor" href="#title" aria-hidden="true">#</a></h3><ul><li>Type: <code>string</code></li><li>Default: <code>Profectus</code></li></ul><p>The name of the project, which will appear in the info tab and the header, if enabled. The page title will also be set to this value.</p><h3 id="description" tabindex="-1">description <a class="header-anchor" href="#description" aria-hidden="true">#</a></h3><ul><li>Type: <code>string</code></li><li>Default: <code>A project made in Profectus</code></li></ul><p>A description of the project, which will be used when the project is installed as a Progressive Web Application.</p><h3 id="id" tabindex="-1">id <a class="header-anchor" href="#id" aria-hidden="true">#</a></h3><ul><li>Type: <code>string</code></li><li>Default: <code>&quot;&quot;</code></li></ul><p>This is a unique ID used when saving player data. Changing this will effectively erase all save data for all players.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This ID MUST be unique to your project, and should not be left as the default value. Otherwise, your project may use the save data from another project and cause issues for both projects.</p></div><h3 id="author" tabindex="-1">author <a class="header-anchor" href="#author" aria-hidden="true">#</a></h3><ul><li>Type: <code>string</code></li><li>Default: <code>&quot;&quot;</code></li></ul><p>The author of the project, which will appear in the info tab.</p><h3 id="discordname" tabindex="-1">discordName <a class="header-anchor" href="#discordname" aria-hidden="true">#</a></h3><ul><li>Type: <code>string</code></li><li>Default: <code>The Paper Pilot Community</code></li></ul><p>The text to display for the discord server to point users to. This will appear when hovering over the discord icon, inside the info tab, the game over screen, as well as the NaN detected screen.</p><p>By default, this is The Paper Pilot Community, which can act as a catch-all for any Profectus projects without their own servers. If you change the discord server with your own, The Paper Pilot Community will still display underneath the custom server when hovering over the discord icon and within the info tab. Those places will also contain a link to the Modding Tree discord server.</p><h3 id="discordlink" tabindex="-1">discordLink <a class="header-anchor" href="#discordlink" aria-hidden="true">#</a></h3><ul><li>Type: <code>string</code></li><li>Default: <code>https://discord.gg/WzejVAx</code></li></ul><p>The link for the discord server to point users to. See <a href="#discordname">discordName</a> for more details.</p><h2 id="version-config" tabindex="-1">Version Config <a class="header-anchor" href="#version-config" aria-hidden="true">#</a></h2><h3 id="versionnumber" tabindex="-1">versionNumber <a class="header-anchor" href="#versionnumber" aria-hidden="true">#</a></h3><ul><li>Type: <code>string</code></li><li>Default: <code>0.0</code></li></ul><p>The current version of the project loaded. If the player data was last saved in a different version of the project, <a href="./project-entry.html#fixoldsave">fixOldSave</a> will be run, so you can perform any save migrations necessary. This will also appear in the nav, the info tab, and the game over screen.</p><h3 id="versiontitle" tabindex="-1">versionTitle <a class="header-anchor" href="#versiontitle" aria-hidden="true">#</a></h3><ul><li>Type: <code>string</code></li><li>Default: <code>Initial Commit</code></li></ul><p>The display name for the current version of the project loaded. This will also appear in the nav, the info tab, and the game over screen unless set to an empty string.</p><h2 id="display-config" tabindex="-1">Display Config <a class="header-anchor" href="#display-config" aria-hidden="true">#</a></h2><h3 id="allowgoback" tabindex="-1">allowGoBack <a class="header-anchor" href="#allowgoback" aria-hidden="true">#</a></h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether or not to allow tabs (besides the first) to display a &quot;back&quot; button to close them (and any other tabs to the right of them).</p><h3 id="defaultshowsmall" tabindex="-1">defaultShowSmall <a class="header-anchor" href="#defaultshowsmall" aria-hidden="true">#</a></h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether or not to allow resources to display small values (&lt;.001). If false they&#39;ll just display as 0. Individual resources can also be configured to override this value.</p><h3 id="defaultdecimalsshown" tabindex="-1">defaultDecimalsShown <a class="header-anchor" href="#defaultdecimalsshown" aria-hidden="true">#</a></h3><ul><li>Type: <code>number</code></li><li>Default: <code>2</code></li></ul><p>Default precision to display numbers at when passed into <code>format</code>. Individual <code>format</code> calls can override this value, and resources can be configured with a custom precision as well.</p><h3 id="useheader" tabindex="-1">useHeader <a class="header-anchor" href="#useheader" aria-hidden="true">#</a></h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether or not to display the nav as a header at the top of the screen. If disabled, the nav will appear on the left side of the screen laid over the first tab.</p><h3 id="banner" tabindex="-1">banner <a class="header-anchor" href="#banner" aria-hidden="true">#</a></h3><ul><li>Type: <code>string | null</code></li><li>Default: <code>null</code></li></ul><p>A path to an image file to display as the logo of the app. If null, the title will be shown instead. This will appear in the nav when <code>useHeader</code> is true.</p><h3 id="logo" tabindex="-1">logo <a class="header-anchor" href="#logo" aria-hidden="true">#</a></h3><ul><li>Type: <code>string</code></li><li>Default: <code>&quot;&quot;</code></li></ul><p>A path to an image file to display as the logo of the app within the info tab. If left blank no logo will be shown.</p><h3 id="initialtabs" tabindex="-1">initialTabs <a class="header-anchor" href="#initialtabs" aria-hidden="true">#</a></h3><ul><li>Type: <code>string[]</code></li><li>Default: <code>[&quot;main&quot;]</code></li></ul><p>The list of initial tabs to display on new saves. This value must have at least one element. Each element should be the ID of the layer to display in that tab.</p><h2 id="advanced-config" tabindex="-1">Advanced Config <a class="header-anchor" href="#advanced-config" aria-hidden="true">#</a></h2><h3 id="maxticklength" tabindex="-1">maxTickLength <a class="header-anchor" href="#maxticklength" aria-hidden="true">#</a></h3><ul><li>Type: <code>number</code></li><li>Default: <code>3600</code></li></ul><p>The longest duration a single tick can be, in seconds. When calculating things like offline time, a single tick will be forced to be this amount or lower. This will make calculating offline time spread out across many ticks as necessary. The default value is 1 hour.</p><h3 id="offlinelimit" tabindex="-1">offlineLimit <a class="header-anchor" href="#offlinelimit" aria-hidden="true">#</a></h3><ul><li>Type: <code>number</code></li><li>Default: <code>1</code></li></ul><p>The max amount of time that can be stored as offline time, in hours.</p><h3 id="enablepausing" tabindex="-1">enablePausing <a class="header-anchor" href="#enablepausing" aria-hidden="true">#</a></h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether or not to allow the player to pause the game. Turning this off disables the toggle from the options menu as well as the NaN screen. Developers can still manually pause by just running <code>player.devSpeed = 0</code> in console (or <code>= 1</code> to resume).</p><h3 id="exportencoding" tabindex="-1">exportEncoding <a class="header-anchor" href="#exportencoding" aria-hidden="true">#</a></h3><ul><li>Type: <code>base64 | lz | plain</code></li><li>Default: <code>base64</code></li></ul><p>The encoding to use when exporting to the clipboard. Plain-text is fast to generate but is easiest for the player to manipulate and cheat with. Base 64 is slightly slower and the string will be longer but will offer a small barrier to people trying to cheat. LZ-String is the slowest method, but produces the smallest strings and still offers a small barrier to those trying to cheat. Some sharing platforms like pastebin may automatically delete base64 encoded text, and some sites might not support all the characters used in lz-string exports.</p>',66),r=[o];function n(s,d,h,c,u,p){return i(),a("div",null,r)}var b=e(l,[["render",n]]);export{g as __pageData,b as default};
