<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { useRoute, withBase } from 'vitepress'
import { useNavLink } from '../composables/navLink'
import OutboundLink from './icons/OutboundLink.vue'

const props = defineProps<{
  item: {
    text: string
    target?: string
    rel?: string
    ariaLabel?: string
    activeMatch?: string
    link: string
  }
}>()

const propsRefs = toRefs(props)

const route = useRoute()
const linkProps = computed(() => {
  const routePath = normalizePath(`/${route.data.relativePath}`)

  let active = false
  if (propsRefs.item.value.activeMatch) {
    active = new RegExp(propsRefs.item.value.activeMatch).test(routePath)
  } else {
    const itemPath = normalizePath(propsRefs.item.value.link)
    active =
      itemPath === '/'
        ? itemPath === routePath
        : routePath.startsWith(itemPath)
  }

  return {
    class: {
      active
    },
    href: withBase(propsRefs.item.value.link),
    target: propsRefs.item.value.target || null,
    rel: propsRefs.item.value.rel || null,
    'aria-label': propsRefs.item.value.ariaLabel
  }
})

function normalizePath(path: string): string {
  return path
    .replace(/#.*$/, '')
    .replace(/\?.*$/, '')
    .replace(/\.(html|md)$/, '')
    .replace(/\/index$/, '/')
}
</script>

<template>
  <div class="nav-link">
    <a class="item" v-bind="linkProps">
      {{ item.text }}
    </a>
  </div>
</template>

<style scoped>
.item {
  display: block;
  padding: 0 1.5rem;
  line-height: 36px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--c-text);
  white-space: nowrap;
}

.item:hover,
.item.active {
  text-decoration: none;
  color: var(--c-brand);
}

.item.external:hover {
  border-bottom-color: transparent;
  color: var(--c-text);
}

@media (min-width: 720px) {
  .item {
    border-bottom: 2px solid transparent;
    padding: 0;
    line-height: 24px;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .item:hover,
  .item.active {
    border-bottom-color: var(--c-brand);
    color: var(--c-text);
  }
}
</style>