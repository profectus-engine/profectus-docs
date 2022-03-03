<template>
  <Layout>
    <template #home>
      <main class="home" aria-labelledby="main-title">
        <Profectus v-if="showLogo" style="height: 30vmin; margin: auto; display: block" />
        <div v-else style="height: 30vmin; margin: auto; display: block" />
        <HomeHero />
        <HomeFeatures />
        <div class="home-content">
          <Content />
        </div>
        <HomeFooter />
      </main>
    </template>
  </Layout>
</template>

<script setup>
import { nextTick, ref } from 'vue';
import DefaultTheme from 'vitepress/theme';
import Profectus from './Profectus.vue';
// I want Profectus above the hero text, so I effectively need to recreate the Home class now
import HomeHero from './home/HomeHero.vue';
import HomeFeatures from './home/HomeFeatures.vue';
import HomeFooter from './home/HomeFooter.vue';
const { Layout } = DefaultTheme;
const showLogo = ref(false);
nextTick(() => showLogo.value = true);
</script>

<style scoped>
.home {
  padding-top: var(--header-height);
}
.home-content {
  max-width: 960px;
  margin: 0px auto;
  padding: 0 1.5rem;
}
</style>
