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
  <header
    class="top-0 z-50 w-full bg-green-700"
    :class="[
      yOffset > 50 || path === '/detail' ? 'bg-green-700 shadow' : 'md:bg-transparent',
      path === '/detail' ? 'sticky' : 'fixed'
    ]"
  >
    <div class="mx-auto flex py-6">
      <div class="ml-auto mr-10 hidden justify-center md:flex md:flex-inline">
        <router-link
          class="nav-text text-xs lg:text-base hover:text-yellow-400"
          :class="{ 'text-yellow-400': path === '/' }"
          :to="'/'"
        >
          Beranda
        </router-link>
        <a class="nav-text text-xs lg:text-base">Developer</a>
        <router-link
          class="nav-text text-xs lg:text-base hover:text-yellow-400"
          :class="{ 'text-yellow-400': path === '/marketplace' }"
          :to="'/marketplace'"
        >
          Marketplace
        </router-link>
      </div>
      <div class="w-full flex md:w-auto">
        <img
          class="mx-auto max-h-8 lg:max-h-8 md:max-h-4 hover:cursor-pointer"
          src="@/assets/images/logo.png"
        />
      </div>
      <div class="ml-10 mr-auto hidden justify-center md:flex md:flex-inline">
        <router-link
          class="nav-text text-xs lg:text-base hover:text-yellow-400"
          :class="{ 'text-yellow-400': path === '/about' }"
          :to="'/about'"
        >
          Profil
        </router-link>
        <router-link
          class="nav-text text-xs lg:text-base hover:text-yellow-400"
          :class="{ 'text-yellow-400': path === '/investor' }"
          :to="'/investor'"
        >
          Investor
        </router-link>
        <router-link
          class="nav-text text-xs lg:text-base hover:text-yellow-400"
          :class="{ 'text-yellow-400': path === '/help' }"
          :to="'/help'"
        >
          Bantuan
        </router-link>
        <router-link
          class="nav-text text-xs lg:text-base hover:text-yellow-400"
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
    <div class="absolute w-full bg-green-700 md:hidden" :class="{ hidden: !showMobile }">
      <div class="py-2 space-y-2" role="none">
        <router-link
          @click="toggleMobile(!showMobile)"
          class="nav-text block hover:text-yellow-400"
          :class="{ 'text-yellow-400': path === '/' }"
          :to="'/'"
        >
          Beranda
        </router-link>
        <a class="nav-text block">Developer</a>
        <router-link
          @click="toggleMobile(!showMobile)"
          class="nav-text block hover:text-yellow-400"
          :class="{ 'text-yellow-400': path === '/marketplace' }"
          :to="'/marketplace'"
        >
          Marketplace
        </router-link>
        <router-link
          @click="toggleMobile(!showMobile)"
          class="nav-text block hover:text-yellow-400"
          :class="{ 'text-yellow-400': path === '/investor' }"
          :to="'/investor'"
        >
          Investor
        </router-link>
        <router-link
          class="nav-text block hover:text-yellow-400"
          :class="{ 'text-yellow-400': path === '/about' }"
          :to="'/about'"
        >
          Profil
        </router-link>
        <router-link
          @click="toggleMobile(!showMobile)"
          class="nav-text block hover:text-yellow-400"
          :class="{ 'text-yellow-400': path === '/help' }"
          :to="'/help'"
        >
          Bantuan
        </router-link>
        <router-link
          @click="toggleMobile(!showMobile)"
          class="nav-text block hover:text-yellow-400"
          :class="{ 'text-yellow-400': path === '/signup' }"
          :to="'/signup'"
        >
          Sign Up
        </router-link>
      </div>
    </div>
  </header>
</template>
