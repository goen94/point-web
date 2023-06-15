<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import cardItem from './components/card-item.vue'
import sliderItem from './components/slider-item.vue'
import { useMarketplaceItem } from '@/stores/marketplace-item'
import type { IMarketplaceItem } from '@/stores/marketplace-item'
import { storeToRefs } from 'pinia'

const itemStore = useMarketplaceItem()
const { items } = storeToRefs(itemStore)

const lists = ref<IMarketplaceItem[] | []>([])
const searchTerm = ref('')
const searchItems = ref<IMarketplaceItem[] | []>([])

const sortVisible = ref(false)
const searchVisible = ref(false)

const showSort = () => {
  sortVisible.value = !sortVisible.value
}

const showSearchItems = (value: boolean) => {
  searchVisible.value = value
}

function getItems(limit: number) {
  lists.value = itemStore.getItems(limit)
}

function loadMore() {
  lists.value = itemStore.getItems(8)
}

watch(searchTerm, async (searchTerm) => {
  if (searchTerm.length) {
    searchItems.value = itemStore.searchItems(searchTerm)
  } else {
    searchItems.value = []
  }
})

onMounted(() => {
  getItems(4)
})
</script>

<template>
  <section>
    <div class="bg-header lg:bg-[100%] relative h-full bg-cover">
      <div class="relative container">
        <div class="flex flex-wrap pt-50px md:flex-nowrap space-x-4 space-y-4 md:pt-100px">
          <div class="relative flex md:w-1/2">
            <h1
              class="mx-auto pt-16 text-center text-2xl font-bold text-white md:px-10% md:text-left xl:text-5xl"
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
        <h1 class="items-center text-center text-3xl font-bold text-black md:text-5xl">
          Pointhub <span class="text-orange-400">Marketplace</span>
        </h1>
        <h6 class="mt-4 text-center text-xs text-gray-5 md:text-base">
          Jelajahi software yang dibuat oleh para developer/pengembang global, dengan jaminan bahwa
          software tersebut telah melalui peninjauan Tim Pointhub.
        </h6>
        <div>
          <div class="relative mt-8 w-full">
            <input
              type="text"
              v-model="searchTerm"
              id="search"
              class="block w-full border border-green-300 rounded-8 bg-white px-5 py-3 text-xl text-gray-900 focus:outline-none"
              placeholder="Cari Software"
              @focus="showSearchItems(true)"
              @blur="showSearchItems(false)"
            />
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <div class="i-mdi-magnify mr-2 text-xl text-green-300"></div>
            </div>
          </div>
          <div
            class="z-10 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
            :class="[searchVisible ? 'block' : 'hidden']"
          >
            <div class="py-1" v-if="searchItems.length > 0">
              <a
                v-for="(item, index) in searchItems"
                :key="index"
                class="block px-4 py-2 text-left text-sm text-black hover:cursor-pointer hover:bg-light md:text-lg"
              >
                {{ item.name }}
              </a>
            </div>
            <div class="py-1" v-else-if="searchTerm.length > 0">
              <a
                class="block px-4 py-2 text-left text-sm text-black hover:cursor-pointer hover:bg-light"
              >
                no items found
              </a>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="relative bg-white">
    <div class="mx-auto md:w-75% xl:w-50%">
      <div class="flex flex-wrap py-6 md:flex-nowrap md:py-8 md:divide-x-2 md:divide-gray">
        <div class="w-1/1 md:mr-2 md:w-1/5 md:flex-col md:divide-y">
          <div class="flex items-center py-2 text-green-600">
            <div class="i-fa6-solid-sliders ml-auto mr-2 text-lg md:ml-0"></div>
            <span class="mr-auto">Filter</span>
          </div>
          <div class="hidden flex-col py-4 md:block">
            <h1 class="text-xs lg:text-sm">Kategori Software</h1>
            <div class="mt-4 flex-col space-y-4">
              <div class="mb-4 flex items-center">
                <input
                  type="radio"
                  class="h-4 w-4 border-gray-300 bg-gray-100 focus:ring-2 focus:ring-green-500"
                />
                <label
                  for="default-radio-1"
                  class="ml-2 text-xs font-medium text-gray-900 lg:text-sm dark:text-gray-300"
                  >Kategori 1</label
                >
              </div>
              <div class="mb-4 flex items-center">
                <input
                  type="radio"
                  class="h-4 w-4 border-gray-300 bg-gray-100 focus:ring-2 focus:ring-green-500"
                />
                <label
                  for="default-radio-1"
                  class="ml-2 text-xs font-medium text-gray-900 lg:text-sm dark:text-gray-300"
                  >Kategori 1</label
                >
              </div>
              <div class="mb-4 flex items-center">
                <input
                  type="radio"
                  class="h-4 w-4 border-gray-300 bg-gray-100 focus:ring-2 focus:ring-green-500"
                />
                <label
                  for="default-radio-1"
                  class="ml-2 text-xs font-medium text-gray-900 lg:text-sm dark:text-gray-300"
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
                class="bg-white-700 inline-flex items-center border border-green-500 rounded-8 px-4 py-2.5 text-center text-sm font-medium text-green-700"
                type="button"
                @click="showSort()"
              >
                Urut Berdasarkan
                <div class="i-mdi-chevron-down ml-8 text-green-700"></div>
              </button>
              <div
                class="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                :class="[sortVisible ? 'block' : 'hidden']"
              >
                <div class="py-1">
                  <a
                    v-for="sort in 3"
                    :key="sort"
                    class="block px-4 py-2 text-sm text-gray-700 hover:cursor-pointer hover:bg-light"
                  >
                    Sort {{ sort }}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            class="grid grid-cols-2 mx-2 mt-10 justify-between gap-x-2 gap-y-2 md:ml-6 md:gap-x-6 md:gap-y-8"
          >
            <cardItem v-for="(item, index) in lists" :key="index" :item="item" />
          </div>

          <div class="relative my-10 w-full text-center">
            <div class="relative inline-block text-left">
              <div>
                <button
                  v-if="items.length != lists.length"
                  @click="loadMore"
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

  <section class="relative bg-light pt-10">
    <div class="container">
      <div class="flex-col">
        <div class="flex items-center py-4">
          <div class="flex-grow bg-gray-400 md:h-px"></div>
          <h1 class="title mx-4 text-center text-3xl font-bold text-black md:text-5xl">
            Software <span class="text-orange-500">Terlaris*</span>
          </h1>
          <div class="flex-grow bg-gray-400 md:h-px"></div>
        </div>
      </div>
    </div>
    <div class="mx-auto lg:w-80%">
      <sliderItem />
    </div>
    <!-- <div class="container">
      <div class="flex-col">
        <div class="mt-16 flex items-center py-4">
          <div class="flex-grow bg-gray-400 md:h-px"></div>
          <h1 class="title mx-4 text-center text-3xl font-bold text-black md:text-5xl">
            Sedang <span class="text-orange-500">Diskon*</span>
          </h1>
          <div class="flex-grow bg-gray-400 md:h-px"></div>
        </div>
        <sliderItem />
      </div>
    </div> -->
  </section>

  <section class="bg-light pb-10"></section>

  <section class="bg-black pb-20 md:pb-14">
    <div class="relative rounded-b-[15%] bg-light px-4 pb-25 md:rounded-b-[40%]">
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
