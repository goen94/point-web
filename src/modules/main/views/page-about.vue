<script setup lang="ts">
import { ref } from 'vue'

const softwares = ref([
  'Key Performance Indicator',
  'Checkin',
  'Absensi',
  'Playbook',
  'Sales Visitation',
  'Enterprise Resource Planing'
])
const activeSoftware = ref<number>(0)

const selectSoftware = (index: number) => {
  activeSoftware.value = index
}
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
      <div class="flex-1 pt-8 space-y-4 md:pt-16 md:space-y-12">
        <h1 class="text-center text-3xl font-medium text-orange-400 md:text-5xl md:font-bold">
          Coba Gratis <span class="text-black">Software Kami!</span>
        </h1>
        <div
          class="grid grid-cols-1 w-full gap-y-8 md:grid-cols-5 md:gap-5 md:divide-x-2 md:divide-green-700"
        >
          <div class="md:col-span-2 space-y-2 md:px-8 md:space-y-5">
            <h1
              class="text-center text-lg font-bold text-green-700 md:ml-6 md:text-left md:text-2xl"
            >
              Point Software
            </h1>
            <div class="h-150px overflow-auto px-10 md:h-full space-y-4 md:px-0">
              <h1 v-for="(item, index) in softwares" :key="index">
                <h1
                  :class="[
                    activeSoftware == index
                      ? 'md:w-full rounded-8 from-green-700 to-green-500 bg-gradient-to-r text-center md:text-left py-3 md:pl-6 text-xs md:text-lg font-bold text-white'
                      : 'md:ml-6 text-xs text-center md:text-left md:text-lg font-medium text-black hover:cursor-pointer'
                  ]"
                  @click="selectSoftware(index)"
                >
                  {{ item }}
                </h1>
              </h1>
            </div>
          </div>
          <div class="col-span-3 space-y-2 md:px-10 md:space-y-5">
            <h1
              class="text-center text-lg font-medium text-black md:text-left md:text-3xl md:font-bold"
            >
              Key Performance Indicator
            </h1>
            <h1 class="text-center text-sm font-bold text-green-700 md:text-left md:text-lg">
              Monitoring Kinerja Karywan dan Target Bisnis Jadi Lebih Mudah!
            </h1>
            <p class="text-center text-xs text-gray md:text-left md:text-sm">
              Pantau performa karyawan dalam mencapai target secara transparan dan detail. Bukti
              pekerjaan dan laporan dapat terpantau lebih mudah dengan point KPI. Dilengkapi dengan
              fitur feedback untuk peningkatan dan perbaikan kinerja
            </p>
            <div class="flex pt-6 space-x-2 md:pt-0 md:space-x-4">
              <div class="w-1/3 flex flex-col">
                <img class="rounded" src="@/assets/images/Banner-Home-Point.jpg" />
              </div>
              <div class="w-1/3 flex flex-col">
                <img class="rounded" src="@/assets/images/Banner-Home-Point.jpg" />
              </div>
              <div class="w-1/3 flex flex-col">
                <img class="rounded" src="@/assets/images/Banner-Home-Point.jpg" />
              </div>
            </div>
            <div class="flex items-center text-center md:space-x-8">
              <h1 class="ml-auto mr-2 text-sm font-bold text-green-700 md:ml-0 md:mr-0">
                Pelajari Lebih Lanjut
              </h1>
              <div class="i-mdi-chevron-right mr-auto text-green-700"></div>
            </div>
            <div class="flex">
              <button
                type="button"
                class="mx-auto mt-2 rounded-8 from-orange-400 to-yellow-400 bg-gradient-to-r px-10 py-3 text-xl font-bold text-white md:mx-0"
              >
                COBA GRATIS!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-white">
    <div class="container">
      <div class="flex">
        <div class="relative w-full -mt-30">
          <div class="rounded-8 from-green-700 to-green-500 bg-gradient-to-r px-6 py-8 text-center">
            <h1 class="text-center text-lg font-bold text-yellow-400 md:text-3xl">
              Tidak Menemukan Software
              <span class="text-white">Yang Anda Butuhkan?</span>
            </h1>
            <h1 class="mt-2 text-center text-xs text-white md:text-lg">
              Tidak perlu khawatir! Jelajahi Marketplace kami untuk menemukan Software tersebut!
            </h1>
            <div class="flex">
              <button
                type="button"
                class="mx-auto mt-4 inline-flex items-center rounded-8 bg-white px-3 py-3 text-sm font-bold text-green-600 md:mt-8 md:px-5 md:text-xl"
              >
                <div class="i-mdi-magnify mr-2"></div>
                Cari di Point Marketplace
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-col py-10 md:p-10">
        <h1 class="mx-auto text-center text-3xl font-bold text-black md:text-4xl">
          Sudah Dipercaya <span class="text-orange-400">2000+</span> Pemilik Bisnis
        </h1>
        <div class="mt-8 border-b border-b-gray-200">
          <ul class="flex items-center text-center text-sm font-bold -mb-px space-x-20">
            <li class="flex-1">
              <a
                href="#"
                class="relative flex items-center justify-center gap-2 border-b-2 border-green-700 px-1 py-3 text-green-700 hover:text-green-700"
              >
                Food & Beverage
              </a>
            </li>
            <li class="flex-1">
              <a
                href="#"
                class="flex items-center justify-center gap-2 px-1 py-3 text-gray-500 hover:text-green-700"
              >
                Kategori Bisnis 1
              </a>
            </li>
            <li class="flex-1">
              <a
                href="#"
                class="flex items-center justify-center gap-2 px-1 py-3 text-gray-500 hover:text-green-700"
              >
                Kategori Bisnis 2
              </a>
            </li>
            <li class="flex-1">
              <a
                href="#"
                class="flex items-center justify-center gap-2 px-1 py-3 text-gray-500 hover:text-green-700"
              >
                Kategori Bisnis 3
              </a>
            </li>
            <li class="flex-1">
              <a
                href="#"
                class="flex items-center justify-center gap-2 px-1 py-3 text-gray-500 hover:text-green-700"
                >Kategori Bisnis 4
              </a>
            </li>
          </ul>
        </div>
        <div id="default-carousel" class="relative w-full" data-carousel="slide">
          <div
            class="mt-10 flex flex-wrap justify-between gap-x-6 gap-y-4 text-center md:flex-nowrap md:text-left"
          >
            <h1 class="w-full text-lg font-bold md:hidden">Kopi Bara</h1>
            <div class="w-full items-center md:w-1/2">
              <img class="mx-auto max-h-50" src="@/assets/images/kopibara.png" />
            </div>
            <div class="w-full flex-col md:w-1/2 space-y-2">
              <h1 class="hidden text-lg font-bold md:block">Kopi Bara</h1>
              <h1 class="text-lg font-bold text-green-700">Solusi Pointhub:</h1>
              <p class="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <button
            type="button"
            class="group absolute top-0 z-10 h-full flex cursor-pointer items-center justify-center px-4 -left-25 focus:outline-none"
            data-carousel-prev
          >
            <span
              class="h-10 w-10 inline-flex items-center justify-center rounded-full bg-gray-200"
            >
              <svg
                aria-hidden="true"
                class="h-5 w-5 text-white sm:h-6 sm:w-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            class="group absolute top-0 z-10 h-full flex cursor-pointer items-center justify-center px-4 -right-25 focus:outline-none"
            data-carousel-next
          >
            <span
              class="h-10 w-10 inline-flex items-center justify-center rounded-full bg-gray-200"
            >
              <svg
                aria-hidden="true"
                class="h-5 w-5 text-white sm:h-6 sm:w-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
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
        <div class="flex">
          <div class="relative mt-10 w-full -mb-45 md:-mb-40">
            <div
              class="flex flex-wrap items-center rounded-8 from-green-700 to-green-400 bg-gradient-to-r p-8 md:flex-nowrap"
            >
              <div class="md:w-1/2">
                <h1 class="text-center text-lg font-bold text-white md:text-left md:text-2xl">
                  Ingin Bertanya Lebih Lanjut Tentang Software Point?
                </h1>
              </div>
              <div class="mt-2 flex md:w-1/2 space-x-2 md:px-4">
                <div class="w-1/2">
                  <button
                    type="button"
                    class="inline-flex items-center rounded-8 bg-white px-5 py-2 text-xs font-bold text-green-700 md:text-lg"
                  >
                    <div class="i-ph-question-bold mr-2"></div>
                    Pusat Bantuan
                  </button>
                </div>
                <div class="w-1/2">
                  <button
                    type="button"
                    class="right-0 inline-flex items-center rounded-8 bg-white px-5 py-2 text-xs font-bold text-green-700 md:text-lg"
                  >
                    <div class="i-ic-baseline-whatsapp mr-2"></div>
                    No Whatsapp
                  </button>
                </div>
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
