<script setup lang="ts">
import { ref } from 'vue'
import sliderItem from './components/slider-item.vue'
import slider from './components/slider.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const tabs = ref(['Detail Software', 'Screenshots', 'Rating & Reviews', 'Pusat Bantuan'])
const activeTab = ref(0)

const selectedTab = (index: number) => {
  activeTab.value = index
}

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
  <section class="relative bg-green-50">
    <div class="container">
      <div class="flex flex-wrap items-center py-8 md:flex-nowrap space-y-6">
        <div
          class="mx-auto h-32 w-32 w-full flex items-center rounded-full bg-white text-center md:mr-8"
        >
          <p class="mx-auto text-sm">Logo Aplikasi</p>
        </div>
        <div class="w-full text-center md:w-3/6 md:flex-col space-y-2 md:text-left">
          <h1 class="items-center text-4xl font-medium text-black md:font-bold">
            Nama <span class="text-orange-500">Software</span>
          </h1>
          <h1 class="text-xl">Oleh <a class="text-blue-600" href="#">Pengembang</a></h1>
          <h1 class="text-lg">00+ Sales | (00)</h1>
        </div>
        <div class="w-full text-center md:w-2/6">
          <div class="ml-auto">
            <div class="flex">
              <button
                type="button"
                class="mx-auto mt-2 rounded-8 from-orange-400 to-yellow-400 bg-gradient-to-r px-20 py-3 text-xl font-bold text-white md:mx-0"
              >
                COBA GRATIS!
              </button>
            </div>
            <div>
              <button
                class="inline-flex items-center rounded-lg bg-transparent px-4 py-2.5 text-center text-sm font-medium text-green-700"
                type="button"
              >
                Lihat Harga Software
                <div class="i-mdi-chevron-down ml-6 text-lg"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-white">
    <div class="container">
      <div class="flex-col py-8 space-y-6">
        <div class="border-b border-gray-200 text-center text-sm font-medium text-gray-500">
          <ul class="flex flex-wrap -mb-px">
            <li v-for="(tab, index) in tabs" :key="index" class="mr-8">
              <a
                href="#"
                class="inline-block border-b-2 rounded-t-lg p-4 hover:text-green-700"
                :class="[
                  activeTab === index ? 'border-green-700 text-green-700' : 'border-transparent'
                ]"
                @click="selectedTab(index)"
              >
                {{ tab }}
              </a>
            </li>
          </ul>
        </div>
        <div class="flex flex-wrap md:flex-nowrap space-y-6 md:space-x-8">
          <div v-if="activeTab == 0" class="w-full flex-col md:w-2/3 space-y-4">
            <img
              class="max-h-[500px] w-full rounded-lg object-cover"
              src="@/assets/images/No_Image_Available.jpg"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div v-if="activeTab == 1" class="w-full flex-col md:w-2/3 space-y-4">
            <div class="pb-6 space-y-4">
              <h1 class="text-sm font-bold">* Halaman Utama</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <img
                class="max-h-[500px] w-full rounded-lg object-cover"
                src="@/assets/images/No_Image_Available.jpg"
              />
            </div>
            <div class="h-px flex-grow bg-gray-400"></div>
            <div class="py-6 space-y-4">
              <h1 class="text-sm font-bold">Halaman _____</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <img
                class="max-h-[500px] w-full rounded-lg object-cover"
                src="@/assets/images/No_Image_Available.jpg"
              />
            </div>
            <div class="relative my-10 w-full text-center">
              <div class="relative inline-block text-left">
                <div>
                  <button
                    class="inline-flex items-center rounded-8 from-green-700 to-green-500 bg-gradient-to-r px-8 py-3 text-center text-lg font-medium text-white"
                    type="button"
                  >
                    Lihat Lebih Banyak
                    <div class="i-mdi-chevron-down ml-8"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div v-if="activeTab == 3" class="w-full flex-col md:w-2/3 space-y-4">
            <div class="divide-y-2">
              <div class="flex py-6" v-for="idx in 4" :key="idx">
                <div class="flex-none">
                  <h5 class="font-bold">{{ idx }}.</h5>
                </div>
                <div class="ml-6 grow">
                  <h5 class="font-bold">Apa saya bisa memakai satu software saja?</h5>
                  <p class="mt-4" :class="{ hidden: expIndex != idx }">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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

          <div class="w-full flex-col md:w-1/3 space-y-4">
            <div class="flex flex-col border-1 border-green-600 rounded-4 p-8 shadow">
              <div class="flex flex-col">
                <div class="mb-4 flex items-center">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="h-4 w-4 border-gray-300 bg-gray-100 focus:ring-2 focus:ring-green-500"
                  />
                  <label
                    for="default-radio-1"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Harga Software
                  </label>
                  <p class="ml-auto">Rp. 000.000</p>
                </div>
                <div class="mb-4 flex items-center">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="h-4 w-4 border-gray-300 bg-gray-100 focus:ring-2 focus:ring-green-500"
                  />
                  <label
                    for="default-radio-1"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Harga Software
                  </label>
                  <p class="ml-auto">Rp. 000.000</p>
                </div>
                <div class="mb-4 flex items-center">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="h-4 w-4 border-gray-300 bg-gray-100 focus:ring-2 focus:ring-green-500"
                  />
                  <label
                    for="default-radio-1"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Harga Software
                  </label>
                  <p class="ml-auto">Rp. 000.000</p>
                </div>
              </div>
            </div>
            <div class="flex flex-col border-1 border-green-600 rounded-4 p-8 shadow">
              <div class="flex flex-col">
                <div class="mb-4 flex items-center">
                  <p class="mr-auto">Update Terakhir</p>
                  <p>Rp. 000.000</p>
                </div>
                <div class="mb-4 flex items-center">
                  <p class="mr-auto">Tanggal Rilis</p>
                  <p>Rp. 000.000</p>
                </div>
                <div class="mb-4 flex items-center">
                  <p class="mr-auto">Kategori</p>
                  <p>Rp. 000.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="relative bg-light py-10">
    <div class="container">
      <div class="flex-col">
        <div class="flex items-center py-4">
          <div class="flex-grow bg-gray-400 md:h-px"></div>
          <h1 class="title mx-4 text-center text-3xl font-bold text-black md:text-5xl">
            Software <span class="text-orange-500">Sejenis</span>
          </h1>
          <div class="flex-grow bg-gray-400 md:h-px"></div>
        </div>
        <sliderItem />
      </div>
    </div>
  </section>

  <section class="bg-black pb-20 md:pb-14">
    <div class="relative rounded-b-[15%] bg-light px-4 pb-25 -m-4 md:rounded-b-[30%]">
      <div class="container">
        <div class="flex">
          <div class="relative mt-10 w-full -mb-45 md:-mb-40">
            <div
              class="flex items-center rounded-8 from-green-700 to-green-400 bg-gradient-to-r p-8"
            >
              <div class="w-1/1 flex-col text-center space-y-1">
                <h1 class="text-sm font-bold text-white md:text-2xl">
                  Ingin Kustomisasi/Membuat
                  <span class="text-yellow-500">Software Sendiri?</span>
                </h1>
                <h1 class="mx-auto text-xs font-bold text-white md:text-xl">
                  Kami menyediakan layanan pembuatan software sesuai permintaan anda!
                </h1>
                <button
                  type="button"
                  class="mx-auto inline-flex items-center rounded-8 bg-white px-5 py-2 text-xs font-bold text-green-700 md:text-lg"
                >
                  <div class="i-ph-question-bold mr-2"></div>
                  Buat Software
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="bg-footer">
      <div class="container">
        <div class="relative flex flex-wrap py-8 md:flex-nowrap space-y-4 md:space-x-6">
          <div class="flex-col md:w-1/3 space-y-4">
            <img class="max-h-8" src="@/assets/images/logo.png" />
            <p class="text-sm text-white">
              Point adalah Startup Milenial, tetapi bisnis modelnya konvensional. Point membangun
              teknologi dengan sistem Open Source.
            </p>
          </div>
          <div class="flex flex-wrap md:w-2/3 md:flex-nowrap space-y-4 md:space-x-4">
            <div class="w-1/1 flex flex-col md:w-1/3 space-y-4">
              <a class="text-sm text-white md:text-lg">Beranda</a>
              <a class="text-sm text-white md:text-lg">Develv</a>
              <a class="text-sm text-white md:text-lg">Marketplace</a>
              <a class="text-sm text-white md:text-lg">Investor</a>
            </div>
            <div class="w-1/1 flex flex-col md:w-1/3 space-y-4">
              <a class="text-sm text-white md:text-lg">Tentang Kami</a>
              <a class="text-sm text-white md:text-lg">Bantuan</a>
              <a class="text-sm text-white md:text-lg">Kontak</a>
            </div>
            <div class="w-1/1 flex flex-col md:w-1/3 space-y-4">
              <p class="text-sm text-white md:text-lg">We are in Social</p>
              <div class="flex text-sm text-green-600 space-x-6 md:text-xl">
                <div class="i-cib-facebook-f"></div>
                <div class="i-cib-instagram"></div>
                <div class="i-cib-twitter"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black">
      <div class="flex-1 py-4">
        <h1 class="text-center text-xs text-white md:text-sm">
          Copyright ©2023 Point. All Right Reserved. <br class="md:hidden" />Please send bug report
          and feedback to: Gradin Digital Agency
        </h1>
      </div>
    </div>
  </footer>
</template>

<style>
.bg-header {
  min-height: 400px;
  background-image: url('@/assets/images/Banner-About.jpg');
  background-repeat: no-repeat;
  background-position: center bottom;
}

.bg-footer {
  background-image: url('@/assets/images/Footer-Web-Point.jpg');
  background-size: cover;
  background-position: center;
}
</style>
