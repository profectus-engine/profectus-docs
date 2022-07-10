import{_ as e,c as t,o as a,a as r}from"./app.7cfe4cf0.js";const b='{"title":"Module: features/particles/particles","description":"","frontmatter":{},"headers":[{"level":2,"title":"Interfaces","slug":"interfaces"},{"level":2,"title":"Type aliases","slug":"type-aliases"},{"level":3,"title":"GenericParticles","slug":"genericparticles"},{"level":3,"title":"Particles","slug":"particles"},{"level":2,"title":"Variables","slug":"variables"},{"level":3,"title":"ParticlesType","slug":"particlestype"},{"level":2,"title":"Functions","slug":"functions"},{"level":3,"title":"createParticles","slug":"createparticles"}],"relativePath":"api/modules/features/particles/particles.md"}',s={},c=r('<h1 id="module-features-particles-particles" tabindex="-1">Module: features/particles/particles <a class="header-anchor" href="#module-features-particles-particles" aria-hidden="true">#</a></h1><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-hidden="true">#</a></h2><ul><li><a href="../../../interfaces/features/particles/particles.BaseParticles">BaseParticles</a></li><li><a href="../../../interfaces/features/particles/particles.ParticlesOptions">ParticlesOptions</a></li></ul><h2 id="type-aliases" tabindex="-1">Type aliases <a class="header-anchor" href="#type-aliases" aria-hidden="true">#</a></h2><h3 id="genericparticles" tabindex="-1">GenericParticles <a class="header-anchor" href="#genericparticles" aria-hidden="true">#</a></h3><p>\u01AC <strong>GenericParticles</strong>: <a href="./particles.html#particles"><code>Particles</code></a>&lt;<a href="../../../interfaces/features/particles/particles.ParticlesOptions"><code>ParticlesOptions</code></a>&gt;</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/0b8210c/src/features/particles/particles.tsx#L37" target="_blank" rel="noopener noreferrer">profectus/src/features/particles/particles.tsx:37</a></p><hr><h3 id="particles" tabindex="-1">Particles <a class="header-anchor" href="#particles" aria-hidden="true">#</a></h3><p>\u01AC <strong>Particles</strong>&lt;<code>T</code>&gt;: <a href="./../feature.html#replace"><code>Replace</code></a>&lt;<code>T</code> &amp; <a href="../../../interfaces/features/particles/particles.BaseParticles"><code>BaseParticles</code></a>, { <code>classes</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;classes&quot;</code>]&gt; ; <code>style</code>: <a href="./../../util/computed.html#getcomputabletype"><code>GetComputableType</code></a>&lt;<code>T</code>[<code>&quot;style&quot;</code>]&gt; }&gt;</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../../interfaces/features/particles/particles.ParticlesOptions"><code>ParticlesOptions</code></a></td></tr></tbody></table><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/0b8210c/src/features/particles/particles.tsx#L29" target="_blank" rel="noopener noreferrer">profectus/src/features/particles/particles.tsx:29</a></p><h2 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-hidden="true">#</a></h2><h3 id="particlestype" tabindex="-1">ParticlesType <a class="header-anchor" href="#particlestype" aria-hidden="true">#</a></h3><p>\u2022 <code>Const</code> <strong>ParticlesType</strong>: typeof <a href="./particles.html#particlestype"><code>ParticlesType</code></a></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/0b8210c/src/features/particles/particles.tsx#L11" target="_blank" rel="noopener noreferrer">profectus/src/features/particles/particles.tsx:11</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h2><h3 id="createparticles" tabindex="-1">createParticles <a class="header-anchor" href="#createparticles" aria-hidden="true">#</a></h3><p>\u25B8 <strong>createParticles</strong>&lt;<code>T</code>&gt;(<code>optionsFunc?</code>): <a href="./particles.html#particles"><code>Particles</code></a>&lt;<code>T</code>&gt;</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="../../../interfaces/features/particles/particles.ParticlesOptions"><code>ParticlesOptions</code></a></td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>optionsFunc?</code></td><td style="text-align:left;"><a href="./../feature.html#optionsfunc"><code>OptionsFunc</code></a>&lt;<code>T</code>, <a href="../../../interfaces/features/particles/particles.BaseParticles"><code>BaseParticles</code></a>, <a href="./particles.html#genericparticles"><code>GenericParticles</code></a>&gt;</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><a href="./particles.html#particles"><code>Particles</code></a>&lt;<code>T</code>&gt;</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p><a href="https://github.com/profectus-engine/Profectus/blob/0b8210c/src/features/particles/particles.tsx#L39" target="_blank" rel="noopener noreferrer">profectus/src/features/particles/particles.tsx:39</a></p>',31),i=[c];function l(d,n,o,p,h,f){return a(),t("div",null,i)}var g=e(s,[["render",l]]);export{b as __pageData,g as default};