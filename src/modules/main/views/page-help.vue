<script setup lang="ts">
import { ref } from 'vue'

const expIndex = ref(-1)
const expand = (index: number) => {
  if (index == expIndex.value) {
    expIndex.value = -1
  } else {
    expIndex.value = index
  }
}
</script>

<template>
  <section>
    <div class="bg-header md:bg-[100%] relative h-full bg-cover">
      <div class="relative container">
        <div class="flex flex-wrap pt-30px md:flex-nowrap space-x-4 space-y-4 md:pt-100px">
          <div class="relative flex md:w-1/2">
            <h1
              class="mx-auto pt-16 text-center text-2xl font-bold text-white md:px-10% md:text-left lg:text-4xl"
            >
              Dapatkan Informasi Detail Tentang Software Kami
            </h1>
          </div>
          <div class="flex-col md:w-1/2">
            <img class="mt-auto" src="@/assets/images/Thumbnail-Bantuan.png" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="relative bg-green-50">
    <div class="py-12 container">
      <div class="grid md:grid-cols-2 gap-y-4">
        <div>
          <h1 class="text-center text-3xl font-bold text-black md:text-justify">
            Apa Yang Ingin
            <span class="text-orange-5">Anda Cari?</span>
          </h1>
        </div>
        <div>
          <div class="relative w-full">
            <input
              type="text"
              id="search"
              class="block w-full border border-green-500 rounded-8 bg-white px-5 py-2 text-lg text-gray-900 focus:outline-none"
              placeholder="Tulis Pertanyaan Anda"
            />
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-green-500"
            >
              <div class="i-mdi-magnify ml-8"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="relative bg-white">
    <div class="py-6 container">
      <div class="divide-y-2">
        <div class="flex py-6" v-for="idx in 4" :key="idx">
          <div class="flex-none">
            <h5 class="font-bold text-black">{{ idx }}.</h5>
          </div>
          <div class="ml-6 grow">
            <h5 class="font-bold text-black">Apa saya bisa memakai satu software saja?</h5>
            <p class="mt-4 text-black" :class="{ hidden: expIndex != idx }">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div class="flex-none">
            <button
              type="button"
              class="h-8 w-8 border border-green-500 rounded-full text-center text-green-500"
              @click="expand(idx)"
            >
              {{ expIndex == idx ? '-' : '+' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-black pb-20 md:pb-14">
    <div class="relative rounded-b-[15%] bg-white px-4 pb-25 md:rounded-b-[30%]">
      <div class="container">
        <div class="flex">
          <div class="relative mt-10 w-full -mb-45 md:-mb-40">
            <div
              class="flex items-center rounded-8 from-green-700 to-green-400 bg-gradient-to-r p-8"
            >
              <div class="w-1/1 flex-col text-center space-y-1">
                <h1 class="text-lg font-bold text-yellow-500 md:text-2xl">
                  Anda Masih Memiliki Pertanyaan?
                </h1>
                <button
                  type="button"
                  class="mx-auto inline-flex items-center rounded-8 bg-white px-5 py-2 text-xs font-bold text-green-700 md:text-lg"
                >
                  <div class="i-ph-question-bold mr-2"></div>
                  No Whatsapp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.bg-header {
  background-image: url('@/assets/images/Banner-About.jpg');
  background-repeat: no-repeat;
  background-position: center bottom;
}
</style>
