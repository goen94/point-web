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
  <section class="-mt-120px">
    <div class="bg-header md:bg-[100%] relative h-full min-h-300px bg-cover md:min-h-400px">
      <div class="relative container">
        <div class="relative flex pt-120px">
          <h1
            class="mx-auto text-center text-xl font-bold text-white md:px-10% md:text-left md:text-4xl"
          >
            Kenali Kami Lebih Dulu!
          </h1>
        </div>
      </div>
    </div>
  </section>

  <section class="relative bg-white">
    <div class="container">
      <div class="flex-col py-10 text-center space-x-4 space-y-6">
        <iframe
          class="h-250px w-full rounded-4 -mt-40 md:h-500px md:rounded-8 md:-mt-60"
          src="https://www.youtube.com/embed/rdCwC7GBOcM"
        >
        </iframe>
        <div class="grid py-8 md:grid-cols-2">
          <div class="space-y-6">
            <h1 class="text-center text-sm font-bold text-green-700 md:text-justify md:text-2xl">
              Saat ini Pointhub Sedang Beroperasi Dalam
              <span class="text-orange-5">Stealth Mode.</span>
            </h1>
            <img class="ml-auto md:hidden" src="@/assets/images/Thumbnail-Developer.png" />
            <p class="text-center text-sm md:text-start md:text-lg">
              Mengacu pada keputusan perusahaan untuk tidak mempublikasikan secara masif mengenai
              bisnis dan rencana kami kepada publik. Hal ini memungkinkan kami menghindari
              publisistas dini dan mempertahankan kendali atas kekayaan intelektual yang kami
              miliki. Ini menjadi sangat penting bagi kami yang sedang mengembangkan teknologi baru
              atau memasuki pasar yang sangat kompetitif. Stealth Mode adalah keputusan strategis
              yang bergantung pada tujuan, sumber daya, dan lanskap perusahaan Kami.
            </p>
          </div>
          <div>
            <img
              class="ml-auto hidden h-380px md:block"
              src="@/assets/images/Thumbnail-Developer.png"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-black pb-20 md:pb-14">
    <div class="relative rounded-b-[15%] bg-white px-4 pb-25 -m-4 md:rounded-b-[30%]">
      <div class="container">
        <div class="flex">
          <div class="relative w-full -mb-45 md:mt-10 md:-mb-40">
            <div
              class="flex items-center rounded-8 from-green-700 to-green-400 bg-gradient-to-r p-8"
            >
              <div class="w-1/1 flex-col text-center space-y-4">
                <h1 class="text-lg font-bold text-yellow-400 md:text-2xl">
                  Dapatkan Info Terbaru Dari Kami!
                </h1>
                <h1 class="text-sm font-medium text-white md:text-xl">
                  Setiap Perkembangan & Info Terbaru tentang Pointhub akan dikirimkan ke Email Anda!
                </h1>
                <input
                  type="text"
                  id="search"
                  class="mx-auto block w-full border border-green-700 rounded-8 bg-white px-5 py-2 text-lg text-gray-900 md:w-1/2 focus:outline-none"
                  placeholder="Masukan Email Anda"
                />
                <button
                  type="button"
                  class="mt-8 rounded-8 from-orange-500 to-yellow-400 bg-gradient-to-r px-10 py-3 text-xl font-bold text-white"
                >
                  Subscribe
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
