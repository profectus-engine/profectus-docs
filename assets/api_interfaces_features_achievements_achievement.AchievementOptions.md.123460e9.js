import{_ as e,c as a,o as t,N as o}from"./chunks/framework.0799945b.js";const m=JSON.parse('{"title":"Interface: AchievementOptions","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"api/interfaces/features/achievements/achievement.AchievementOptions.md","lastUpdated":null}'),r={name:"api/interfaces/features/achievements/achievement.AchievementOptions.md"},i=o('<h1 id="interface-achievementoptions" tabindex="-1">Interface: AchievementOptions <a class="header-anchor" href="#interface-achievementoptions" aria-label="Permalink to &quot;Interface: AchievementOptions&quot;">​</a></h1><p><a href="./../../../modules/features/achievements/achievement">features/achievements/achievement</a>.AchievementOptions</p><p>An object that configures an <a href="./../../../modules/features/achievements/achievement#achievement">Achievement</a>.</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="classes" tabindex="-1">classes <a class="header-anchor" href="#classes" aria-label="Permalink to &quot;classes&quot;">​</a></h3><p>• <code>Optional</code> <strong>classes</strong>: <a href="./../../../modules/util/computed#computable"><code>Computable</code></a>&lt;<a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type" target="_blank" rel="noreferrer"><code>Record</code></a>&lt;<code>string</code>, <code>boolean</code>&gt;&gt;</p><p>Dictionary of CSS classes to apply to this feature.</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/achievements/achievement.tsx#L87" target="_blank" rel="noreferrer">profectus/src/features/achievements/achievement.tsx:87</a></p><hr><h3 id="display" tabindex="-1">display <a class="header-anchor" href="#display" aria-label="Permalink to &quot;display&quot;">​</a></h3><p>• <code>Optional</code> <strong>display</strong>: <a href="./../../../modules/util/computed#computable"><code>Computable</code></a>&lt;<a href="./../../../modules/features/feature#coercablecomponent"><code>CoercableComponent</code></a> | { <code>effectDisplay?</code>: <a href="./../../../modules/features/feature#coercablecomponent"><code>CoercableComponent</code></a> ; <code>optionsDisplay?</code>: <a href="./../../../modules/features/feature#coercablecomponent"><code>CoercableComponent</code></a> ; <code>requirement?</code>: <a href="./../../../modules/features/feature#coercablecomponent"><code>CoercableComponent</code></a> }&gt;</p><p>The display to use for this achievement.</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/achievements/achievement.tsx#L67" target="_blank" rel="noreferrer">profectus/src/features/achievements/achievement.tsx:67</a></p><hr><h3 id="image" tabindex="-1">image <a class="header-anchor" href="#image" aria-label="Permalink to &quot;image&quot;">​</a></h3><p>• <code>Optional</code> <strong>image</strong>: <a href="./../../../modules/util/computed#computable"><code>Computable</code></a>&lt;<code>string</code>&gt;</p><p>An image to display as the background for this achievement.</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/achievements/achievement.tsx#L83" target="_blank" rel="noreferrer">profectus/src/features/achievements/achievement.tsx:83</a></p><hr><h3 id="mark" tabindex="-1">mark <a class="header-anchor" href="#mark" aria-label="Permalink to &quot;mark&quot;">​</a></h3><p>• <code>Optional</code> <strong>mark</strong>: <a href="./../../../modules/util/computed#computable"><code>Computable</code></a>&lt;<code>string</code> | <code>boolean</code>&gt;</p><p>Shows a marker on the corner of the feature.</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/achievements/achievement.tsx#L79" target="_blank" rel="noreferrer">profectus/src/features/achievements/achievement.tsx:79</a></p><hr><h3 id="oncomplete" tabindex="-1">onComplete <a class="header-anchor" href="#oncomplete" aria-label="Permalink to &quot;onComplete&quot;">​</a></h3><p>• <code>Optional</code> <strong>onComplete</strong>: <code>VoidFunction</code></p><p>A function that is called when the achievement is completed.</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/achievements/achievement.tsx#L91" target="_blank" rel="noreferrer">profectus/src/features/achievements/achievement.tsx:91</a></p><hr><h3 id="requirements" tabindex="-1">requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;requirements&quot;">​</a></h3><p>• <code>Optional</code> <strong>requirements</strong>: <a href="./../../../modules/game/requirements#requirements"><code>Requirements</code></a></p><p>The requirement(s) to earn this achievement. Can be left null if using <a href="./achievement.BaseAchievement#complete">complete</a>.</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/achievements/achievement.tsx#L65" target="_blank" rel="noreferrer">profectus/src/features/achievements/achievement.tsx:65</a></p><hr><h3 id="showpopups" tabindex="-1">showPopups <a class="header-anchor" href="#showpopups" aria-label="Permalink to &quot;showPopups&quot;">​</a></h3><p>• <code>Optional</code> <strong>showPopups</strong>: <a href="./../../../modules/util/computed#computable"><code>Computable</code></a>&lt;<code>boolean</code>&gt;</p><p>Whether or not to display a notification popup when this achievement is earned.</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/achievements/achievement.tsx#L89" target="_blank" rel="noreferrer">profectus/src/features/achievements/achievement.tsx:89</a></p><hr><h3 id="small" tabindex="-1">small <a class="header-anchor" href="#small" aria-label="Permalink to &quot;small&quot;">​</a></h3><p>• <code>Optional</code> <strong>small</strong>: <a href="./../../../modules/util/computed#computable"><code>Computable</code></a>&lt;<code>boolean</code>&gt;</p><p>Toggles a smaller design for the feature.</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/achievements/achievement.tsx#L81" target="_blank" rel="noreferrer">profectus/src/features/achievements/achievement.tsx:81</a></p><hr><h3 id="style" tabindex="-1">style <a class="header-anchor" href="#style" aria-label="Permalink to &quot;style&quot;">​</a></h3><p>• <code>Optional</code> <strong>style</strong>: <a href="./../../../modules/util/computed#computable"><code>Computable</code></a>&lt;<a href="./../../../modules/features/feature#stylevalue"><code>StyleValue</code></a>&gt;</p><p>CSS to apply to this feature.</p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/achievements/achievement.tsx#L85" target="_blank" rel="noreferrer">profectus/src/features/achievements/achievement.tsx:85</a></p><hr><h3 id="visibility" tabindex="-1">visibility <a class="header-anchor" href="#visibility" aria-label="Permalink to &quot;visibility&quot;">​</a></h3><p>• <code>Optional</code> <strong>visibility</strong>: <a href="./../../../modules/util/computed#computable"><code>Computable</code></a>&lt;<code>boolean</code> | <a href="../../../enums/features/feature.Visibility"><code>Visibility</code></a>&gt;</p><p>Whether this achievement should be visible.</p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/70cda5f/src/features/achievements/achievement.tsx#L63" target="_blank" rel="noreferrer">profectus/src/features/achievements/achievement.tsx:63</a></p>',63),n=[i];function s(c,h,d,l,f,p){return t(),a("div",null,n)}const b=e(r,[["render",s]]);export{m as __pageData,b as default};