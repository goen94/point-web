<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showMobile = ref(false)

const path = computed(() => route.path)
const yOffset = ref(0)

const vueOnScroll = () => {
  window.addEventListener('scroll', () => {
    var curr = window.pageYOffset
    console.log(curr)
    yOffset.value = curr
  })
}

const toggleMobile = (show: boolean) => {
  showMobile.value = show
}

onMounted(() => {
  vueOnScroll()
})
</script>

<template>
  <!-- Header Wrapper-->
  <nav
    class="sticky top-0 z-20"
    :class="[yOffset > 50 || path === '/detail' ? 'bg-green-700 shadow' : 'bg-transparent']"
  >
    <div class="mx-auto w-90% flex py-10">
      <!-- Left Navigation -->
      <div class="mr-auto hidden flex-1 justify-center md:flex">
        <router-link
          class="nav-text hover:text-yellow-400"
          :class="{ 'text-yellow-400': path === '/' }"
          :to="'/'"
        >
          Beranda
        </router-link>
        <a class="nav-text">Developer</a>
        <router-link
          class="nav-text hover:text-yellow-400"
          :class="{ 'text-yellow-400': path === '/marketplace' }"
          :to="'/marketplace'"
        >
          Marketplace
        </router-link>
      </div>
      <!-- Logo -->
      <div class="flex flex-1">
        <img class="mx-auto max-h-8" src="@/assets/images/logo.png" />
      </div>
      <!-- Right Navigation -->
      <div class="ml-auto hidden flex-1 justify-center md:flex">
        <router-link
          class="nav-text hover:text-yellow-400"
          :class="{ 'text-yellow-400': path === '/investor' }"
          :to="'/investor'"
        >
          Investor
        </router-link>
        <router-link
          class="nav-text hover:text-yellow-400"
          :class="{ 'text-yellow-400': path === '/help' }"
          :to="'/help'"
        >
          Bantuan
        </router-link>
        <router-link
          class="nav-text hover:text-yellow-400"
          :class="{ 'text-yellow-400': path === '/signup' }"
          :to="'/signup'"
        >
          Sign Up
        </router-link>
      </div>
      <button
        type="button"
        class="ml-3 inline-flex items-center text-sm"
        @click="toggleMobile(!showMobile)"
      >
        <div class="i-charm-menu-hamburger text-3xl text-white md:hidden"></div>
      </button>
    </div>
    <div class="absolute w-full bg-green-700" :class="{ hidden: !showMobile }">
      <div class="py-2 space-y-2" role="none">
        <router-link
          class="nav-text block hover:text-yellow-400"
          :class="{ 'text-yellow-400': path === '/' }"
          :to="'/'"
        >
          Beranda
        </router-link>
        <a class="nav-text block">Developer</a>
        <router-link
          class="nav-text block hover:text-yellow-400"
          :class="{ 'text-yellow-400': path === '/marketplace' }"
          :to="'/marketplace'"
        >
          Marketplace
        </router-link>
        <router-link
          class="nav-text block hover:text-yellow-400"
          :class="{ 'text-yellow-400': path === '/investor' }"
          :to="'/investor'"
        >
          Investor
        </router-link>
        <router-link
          class="nav-text block hover:text-yellow-400"
          :class="{ 'text-yellow-400': path === '/help' }"
          :to="'/help'"
        >
          Bantuan
        </router-link>
        <router-link
          class="nav-text block hover:text-yellow-400"
          :class="{ 'text-yellow-400': path === '/signup' }"
          :to="'/signup'"
        >
          Sign Up
        </router-link>
      </div>
    </div>
  </nav>
</template>
