<script setup lang="ts">
import { ref } from 'vue'
import sliderItem from './components/slider-item.vue'

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
          class="mx-auto h-35 w-35 w-full flex items-center rounded-full bg-white text-center md:mr-8"
        >
          <p class="mx-auto text-sm">Logo Aplikasi</p>
        </div>
        <div class="w-full text-center md:w-3/6 md:flex-col space-y-2 md:text-left">
          <h1 class="items-center text-4xl font-medium text-black md:text-5xl md:font-bold">
            Nama <span class="text-orange-500">Software</span>
          </h1>
          <h1 class="text-xl font-medium text-gray-5">
            Oleh <a class="text-blue-600" href="#">Pengembang</a>
          </h1>
          <div class="inline-flex items-center">
            <h1 class="text-lg">
              <span class="font-bold text-gray-5">00+</span>
              <span class="font-medium text-gray-5">Sales |</span>&nbsp;
            </h1>
            <div class="inline-flex">
              <div class="i-ic-outline-star text-gray-300"></div>
              <div class="i-ic-outline-star text-gray-300"></div>
              <div class="i-ic-outline-star text-yellow-400"></div>
              <div class="i-ic-outline-star text-yellow-400"></div>
              <div class="i-ic-outline-star text-yellow-400"></div>
            </div>
            <h1 class="text-lg font-medium text-gray-5">&nbsp;(00)</h1>
          </div>
        </div>
        <div class="w-full text-center md:w-2/6">
          <div class="ml-auto">
            <div class="flex">
              <button
                type="button"
                class="mx-auto mt-2 rounded-8 from-orange-400 to-yellow-400 bg-gradient-to-r px-20 py-3 text-xl font-bold text-white md:mx-0"
              >
                COBA GRATIS
              </button>
            </div>
            <div>
              <button
                class="inline-flex items-center rounded-lg bg-transparent px-4 py-2.5 text-center text-lg font-medium text-green-700"
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
        <div class="border-b border-gray-200 text-center text-lg font-bold text-gray-500">
          <ul class="flex flex-wrap -mb-px">
            <li v-for="(tab, index) in tabs" :key="index" class="mr-8">
              <a
                class="inline-block border-b-2 rounded-t-lg p-4 hover:cursor-pointer hover:text-green-700"
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
        <div class="flex flex-wrap md:flex-nowrap space-y-6 md:space-x-8 md:space-y-0">
          <div v-if="activeTab == 0" class="w-full flex-col md:w-2/3 space-y-4">
            <img
              class="max-h-[500px] w-full rounded-lg object-cover"
              src="@/assets/images/No_Image_Available.jpg"
            />
            <p class="text-gray-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p class="text-gray-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div v-if="activeTab == 1" class="w-full flex-col md:w-2/3 space-y-4">
            <div class="pb-6 space-y-4">
              <h1 class="text-sm font-bold text-black">* Halaman Utama</h1>
              <p class="text-gray-5">
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
              <h1 class="text-sm font-bold text-black">Halaman _____</h1>
              <p class="text-gray-5">
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

          <div v-if="activeTab == 2" class="w-full flex-col md:w-2/3 space-y-4">
            <div class="flex flex-wrap justify-between md:flex-nowrap">
              <div class="mb-6 inline-flex items-center">
                <h1 class="text-lg font-bold text-gray md:text-xl">00+ Reviews</h1>
                <div class="ml-4 inline-flex">
                  <div class="i-ic-outline-star text-xl text-gray-300"></div>
                  <div class="i-ic-outline-star text-xl text-gray-300"></div>
                  <div class="i-ic-outline-star text-xl text-yellow-400"></div>
                  <div class="i-ic-outline-star text-xl text-yellow-400"></div>
                  <div class="i-ic-outline-star text-xl text-yellow-400"></div>
                </div>
              </div>
              <div>
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  class="bg-white-700 inline-flex items-center border border-gray-400 rounded-8 px-4 py-2.5 text-center text-sm font-medium text-gray"
                  type="button"
                >
                  Urut Berdasarkan
                  <div class="i-mdi-chevron-down ml-8 text-black"></div>
                </button>
              </div>
            </div>

            <div v-for="num in 3" :key="num" class="border-2 border-light-600 rounded-6">
              <div
                class="flex justify-between border-b-2 border-light-600 rounded-t-6 bg-light p-4"
              >
                <div class="inline-flex items-center">
                  <h1 class="text-lg font-medium text-gray">Name</h1>
                  <div class="ml-4 inline-flex">
                    <div class="i-ic-outline-star text-lg text-gray-300"></div>
                    <div class="i-ic-outline-star text-lg text-gray-300"></div>
                    <div class="i-ic-outline-star text-lg text-yellow-400"></div>
                    <div class="i-ic-outline-star text-lg text-yellow-400"></div>
                    <div class="i-ic-outline-star text-lg text-yellow-400"></div>
                  </div>
                </div>
                <div>
                  <h1 class="text-sm font-medium text-gray">00 days ago</h1>
                </div>
              </div>
              <div class="p-4">
                <p class="text-sm text-gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
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
                  <h5 class="font-bold text-black">Apa saya bisa memakai satu software saja?</h5>
                  <p class="mt-4 text-black" :class="{ hidden: expIndex != idx }">
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
                <div class="mb-2">
                  <div v-for="radio in 3" :key="radio" class="mb-4 flex items-center">
                    <input type="radio" class="h-4 w-4 accent-green-600" />
                    <label for="default-radio-1" class="ml-2 text-sm font-bold text-black">
                      Harga Software
                    </label>
                    <p class="ml-auto font-bold text-green-600">Rp. 000.000</p>
                  </div>
                </div>
                <div>
                  <div v-for="item in 3" :key="item" class="mb-4 inline-flex items-center">
                    <div class="i-ic-outline-check mr-2 text-green-600"></div>
                    <h1 class="text-xs font-medium text-gray">
                      Fasilitas/Keunggulan Software 0{{ item }}
                    </h1>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    class="mx-auto mt-2 w-full rounded-8 from-green-600 to-green-400 bg-gradient-to-r px-3 py-3 text-xl font-bold text-white md:mx-0"
                  >
                    Beli Software
                  </button>
                </div>
                <div class="mt-4 text-center">
                  <h1 class="text-xs font-bold text-black">Bagikan Software</h1>
                  <div class="mt-2 inline-flex items-center space-x-1">
                    <div class="i-logos-facebook"></div>
                    <div class="i-mdi-twitter-circle text-xl text-blue"></div>
                    <div class="i-entypo-social-linkedin-with-circle bg-#0077B5 text-lg"></div>
                    <div class="rounded-full bg-red p-1 text-center">
                      <div class="i-material-symbols-mail-rounded bg-white text-xs"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col border-1 border-green-600 rounded-4 p-8 shadow space-y-4">
              <div class="flex space-x-2">
                <div class="w-1/2">
                  <p class="text-sm font-bold text-black">Update Terakhir</p>
                </div>
                <div class="w-1/2">
                  <p class="text-sm text-black">Tanggal</p>
                </div>
              </div>
              <div class="flex space-x-2">
                <div class="w-1/2">
                  <p class="text-sm font-bold text-black">Tanggal Rilis</p>
                </div>
                <div class="w-1/2">
                  <p class="text-sm text-black">Tanggal</p>
                </div>
              </div>
              <div class="flex space-x-2">
                <div class="w-1/2">
                  <p class="text-sm font-bold text-black">Kategori</p>
                </div>
                <div class="w-1/2">
                  <p class="text-sm text-black">Kategori 01</p>
                </div>
              </div>
              <div class="flex space-x-2">
                <div class="w-1/2">
                  <p class="text-sm font-bold text-black">Kompatibel</p>
                </div>
                <div class="w-1/2">
                  <p class="text-sm text-black">Lorem Ipsum</p>
                </div>
              </div>
              <div class="flex space-x-2">
                <div class="w-1/2">
                  <p class="text-sm font-bold text-black">Tags</p>
                </div>
                <div class="w-1/2 flex-col">
                  <p class="text-sm text-black">Lorem Ipsum</p>
                  <p class="text-sm text-black">Lorem Ipsum</p>
                  <p class="text-sm text-black">Lorem Ipsum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="relative bg-light py-10">
    <div class="flex-col">
      <div class="container">
        <div class="flex items-center py-4">
          <div class="flex-grow bg-gray-400 md:h-px"></div>
          <h1 class="title mx-4 text-center text-3xl font-bold text-black md:text-5xl">
            Software <span class="text-orange-500">Sejenis</span>
          </h1>
          <div class="flex-grow bg-gray-400 md:h-px"></div>
        </div>
      </div>
      <sliderItem />
    </div>
  </section>

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
