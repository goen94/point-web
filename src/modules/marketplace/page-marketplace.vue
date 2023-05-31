<script setup lang="ts">
import { onMounted, ref } from 'vue'
import cardItem from './components/card-item.vue'
import slider from './components/slider.vue'

const yOffset = ref(0)
const arrItems = ref(4)

const vueOnScroll = () => {
  window.addEventListener('scroll', () => {
    var curr = window.pageYOffset
    yOffset.value = curr
  })
}

onMounted(() => {
  vueOnScroll()
})
</script>

<template>
  <section class="-mt-120px">
    <div class="bg-header md:bg-[100%] relative h-full bg-cover">
      <div class="relative container">
        <div class="flex flex-wrap pt-50px md:flex-nowrap space-x-4 space-y-4 md:pt-120px">
          <div class="relative flex md:w-1/2">
            <h1
              class="mx-auto pt-16 text-center text-2xl font-bold text-white md:px-10% md:text-left md:text-4xl"
            >
              Jelajahi Software Sesuai Dengan Kebutuhan Anda
            </h1>
          </div>
          <div class="flex-col md:w-1/2">
            <img class="mt-auto" src="@/assets/images/Thumbnail-Marketplace.png" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="relative bg-green-50">
    <div class="container md:px-10%">
      <div class="flex-col py-10 text-center space-y-6 md:space-x-4">
        <h1
          class="items-center text-center text-3xl font-medium text-black md:text-5xl md:font-bold"
        >
          Pointhub <span class="text-orange-400">Marketplace</span>
        </h1>
        <h6 class="mt-4 text-center text-xs md:text-base">
          Jelajahi software yang dibuat oleh para developer/pengembang global, dengan jaminan bahwa
          software tersebut telah melalui peninjauan Tim Pointhub.
        </h6>
        <div class="relative mt-8 w-full">
          <input
            type="text"
            id="search"
            class="block w-full border border-green-300 rounded-8 bg-white px-5 py-3 text-xl text-gray-900 focus:outline-none"
            placeholder="Cari Software"
          />
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <div class="i-mdi-magnify mr-2 text-xl text-green-300"></div>
          </div>
        </div>
        <div class="relative w-full text-center">
          <div class="relative inline-block text-left text-green-600">
            <div>
              <button
                class="inline-flex items-center rounded-lg bg-transparent px-4 py-2.5 text-center text-sm font-medium"
                type="button"
              >
                Cari Berdasarkan Kategori
                <div class="i-mdi-chevron-down ml-8 text-lg"></div>
              </button>
            </div>
            <div
              class="absolute right-0 z-10 mt-2 hidden w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div class="py-1" role="none">
                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                  >Account settings</a
                >
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                  >Support</a
                >
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                  >License</a
                >
                <form method="POST" action="#" role="none">
                  <button
                    type="submit"
                    class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-3"
                  >
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="relative bg-white">
    <div class="container">
      <div class="flex flex-wrap py-6 md:flex-nowrap md:py-8 md:divide-x-2 md:divide-gray">
        <div class="w-1/1 md:mr-2 md:w-1/5 md:flex-col md:divide-y">
          <div class="flex items-center py-2 text-green-600">
            <div class="i-fa6-solid-sliders ml-auto mr-2 text-lg md:ml-0"></div>
            <span class="mr-auto">Filter</span>
          </div>
          <div class="hidden flex-col py-4 md:block">
            Kategori Software
            <div class="mt-4 flex-col space-y-4">
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
                  >Kategori 1</label
                >
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
                  >Kategori 1</label
                >
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
                  >Kategori 1</label
                >
              </div>
            </div>
          </div>
        </div>
        <div class="flex-col md:w-4/5">
          <div class="flex">
            <div class="ml-auto hidden md:block">
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                class="bg-white-700 inline-flex items-center border border-green-500 rounded-8 px-4 py-2.5 text-center text-sm font-medium text-green-700"
                type="button"
              >
                Urut Berdasarkan
                <div class="i-mdi-chevron-down ml-8 text-green-700"></div>
              </button>
            </div>
          </div>

          <div class="grid mt-10 justify-between gap-x-6 gap-y-8 md:grid-cols-2 md:ml-6">
            <cardItem />
            <cardItem />
            <cardItem />
            <cardItem />
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
      </div>
    </div>
  </section>

  <section class="relative bg-light py-10">
    <div class="container">
      <div class="flex-col">
        <div class="flex items-center py-4">
          <div class="flex-grow bg-gray-400 md:h-px"></div>
          <h1 class="title mx-4 text-center text-3xl font-bold text-black md:text-5xl">
            Software <span class="text-orange-500">Terlaris*</span>
          </h1>
          <div class="flex-grow bg-gray-400 md:h-px"></div>
        </div>
        <slider />

        <div class="mt-16 flex items-center py-4">
          <div class="flex-grow bg-gray-400 md:h-px"></div>
          <h1 class="title mx-4 text-center text-3xl font-bold text-black md:text-5xl">
            Sedang <span class="text-orange-500">Diskon*</span>
          </h1>
          <div class="h-px flex-grow bg-gray-400"></div>
        </div>
        <slider />
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
