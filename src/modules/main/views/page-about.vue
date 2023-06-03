<script setup lang="ts">
import BoxSearchMarketplace from '../component/box-search-marketplace.vue'
import PointSoftware from '../component/point-software.vue'
import PointClient from '../component/point-client.vue'
import BoxFaq from '../component/box-faq.vue'
</script>

<template>
  <section>
    <div class="bg-header md:bg-[100%] relative h-full bg-cover">
      <div class="relative container">
        <div class="flex flex-wrap pt-30px md:flex-nowrap md:pt-100px">
          <div class="relative flex md:w-1/2">
            <h1
              class="mx-auto px-4 pt-16 text-center text-2xl font-bold text-white md:px-10% md:text-left md:text-4xl"
            >
              Penyedia Sistem Software Fleksibel & Terintegrasi
            </h1>
          </div>
          <div class="z-2 flex-col -mb-10 md:w-1/2">
            <img src="@/assets/images/Thumbnail-About.png" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="relative z-1 mt-16 bg-white">
    <div class="container">
      <div class="flex flex-wrap pt-4 md:flex-nowrap md:space-x-4">
        <div class="w-full flex-col md:w-1/2">
          <h1 class="text-center text-2xl font-bold text-orange-500 md:text-4xl">
            Tentang <span class="text-black">Pointhub</span>
          </h1>
          <h6 class="mt-4 text-center md:text-left">
            Point adalah Startup Milenial, tetapi bisnis modelnya konvensional. Point membangun
            software dengan sistem Open Source. Inovasi dari para pebisnis/startup dimulai dari
            kebutuhan bisnis di sector riil yang ada saat ini yang kemudian didgigitalisasi
            mengikuti perkembangan teknologi yang tersedia
          </h6>
        </div>
        <div class="w-full flex-col md:w-1/2">
          <h6 class="mt-8 text-center md:mt-14 md:text-left">
            Point menawarkan platform yang menggabungkan kebutuhan pengembang, pemilik bisnis,
            infastruktur, dan pasar menjadi satu ekosistem. Dengan Point, Pelanggan tidak perlu
            berdiri sendiri dalam membuat software tertentu, kami akan tangani semua dari mulai
            maintenance sampai berdiri sendiri.
          </h6>
        </div>
      </div>
    </div>
  </section>

  <section class="relative mt-50 bg-green-50 pb-40">
    <div class="container">
      <div class="flex">
        <div class="relative w-full -mt-24">
          <div
            class="rounded-8 from-green-700 to-green-400 bg-gradient-to-r px-12 py-8 text-center md:px-32"
          >
            <div class="inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
                <path fill="#fad100" d="m10 7l-2 4h3v6H5v-6l2-4h3m8 0l-2 4h3v6h-6v-6l2-4h3Z" />
              </svg>
            </div>
            <h1 class="text-center text-lg text-white md:text-lg">
              POINT memberikan <span class="text-yellow-400">Solusi Terintegrasi</span> untuk semua
              lini bisnis dan departemen yang ada di usaha anda."
            </h1>
          </div>
        </div>
      </div>
      <PointSoftware />
    </div>
  </section>

  <section class="bg-white">
    <div class="container">
      <div class="flex">
        <div class="relative w-full -mt-30">
          <BoxSearchMarketplace />
        </div>
      </div>
    </div>
  </section>

  <section class="bg-white">
    <PointClient />
  </section>

  <section class="min-h-[100px] bg-green-50 pb-2">
    <div class="container">
      <div class="mt-6 flex py-8">
        <div class="flex-col items-center">
          <div class="flex">
            <h1 class="mx-auto text-center text-2xl font-bold text-black md:text-4xl">
              Alat Pengembangan Kami
            </h1>
          </div>
          <div class="mx-auto flex flex-wrap md:flex-nowrap">
            <div class="w-full inline-flex items-center">
              <div class="w-1/3 md:w-1/4">
                <img src="@/assets/images/gcp.png" />
              </div>
              <div class="w-1/3 md:w-1/4">
                <img src="@/assets/images/aws.png" />
              </div>
              <div class="w-1/3 md:w-1/4">
                <img src="@/assets/images/firebase.png" />
              </div>
              <div class="hidden w-1/4 md:block">
                <div class="flex items-center">
                  <div class="w-2/3">
                    <img class="max-h-30" src="@/assets/images/laravel.png" />
                  </div>
                  <div class="w-1/3">
                    <img class="max-h-10" src="@/assets/images/vue.png" />
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full inline-flex items-center md:hidden">
              <img class="ml-auto max-h-20 md:max-h-30" src="@/assets/images/laravel.png" />
              <img class="mr-auto max-h-10" src="@/assets/images/vue.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-black pb-20 md:pb-14">
    <div class="relative rounded-b-[15%] bg-green-50 px-4 pb-25 -m-4 md:rounded-b-[30%]">
      <div class="container">
        <BoxFaq />
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
