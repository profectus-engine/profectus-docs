<template>
  <Layout>
    <template #home-hero-before>
      <Profectus v-if="showLogo" style="height: 30vmin; margin: auto; display: block; margin-top: 10px;" />
      <div v-else style="height: 30vmin; margin: auto; display: block" />
    </template>
  </Layout>
</template>

<script setup>
import { nextTick, ref } from 'vue';
import DefaultTheme from 'vitepress/theme';
import Profectus from './Profectus.vue';

const { Layout } = DefaultTheme;

const showLogo = ref(false);
nextTick(() => showLogo.value = true);
</script>
