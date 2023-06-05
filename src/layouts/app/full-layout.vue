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
  @apply w-80% md:w-75% !important mx-auto;
}

html,
body {
  max-width: 100%;
}

.text-stroke {
  -webkit-text-stroke: 1px black;
}

@font-face {
  font-family: 'Poppins-ExtraBold';
  src: local('Poppins-ExtraBold'), url(@/assets/font/Poppins-ExtraBold.ttf) format('truetype');
}
</style>
