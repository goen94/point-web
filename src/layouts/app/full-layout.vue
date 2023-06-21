<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './app-header.vue'
import AppFooter from './app-footer.vue'
</script>

<style>
.container {
  @apply w-85% md:w-75% 2xl:w-60% !important mx-auto;
}

html,
body {
  max-width: 100%;
}

.text-stroke {
  -webkit-text-stroke: 1px black;
}

.bg-header {
  background-image: url('@/assets/images/banner-about.jpg');
  background-repeat: no-repeat;
  background-position: center bottom;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.inner {
  transition: transform 0.2s;
}
</style>
