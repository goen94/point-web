<template>
  <div class="rounded-8 from-green-700 to-green-500 bg-gradient-to-r px-6 py-8 text-center">
    <h1 class="text-center text-lg font-bold text-yellow-500 md:text-3xl">
      Tidak Menemukan Software
      <span class="text-white">Yang Anda Butuhkan?</span>
    </h1>
    <h1 class="mt-2 text-center text-xs text-white md:text-lg">
      Tidak perlu khawatir! Jelajahi Marketplace kami untuk menemukan Software tersebut!
    </h1>
    <div class="flex">
      <router-link :to="'/marketplace'" class="mx-auto">
        <button
          type="button"
          class="mt-4 inline-flex items-center rounded-8 bg-white px-3 py-3 text-sm font-bold text-green-600 md:mt-8 md:px-5 md:text-xl"
        >
          <div class="i-mdi-magnify mr-2"></div>
          Cari di Point Marketplace
        </button>
      </router-link>
    </div>
  </div>
</template>
