<script setup lang="ts">
import { ref } from 'vue'
import BoxSearchMarketplace from '../component/box-search-marketplace.vue'

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
  <section class="overflow-hidden bg-green-50">
    <div class="clip-container relative min-h-50vh rounded-b-[50%] -mx-40 md:min-h-100vh">
      <div class="h-full w-full place-items-center justify-center text-center">
        <p class="px-6 text-sm text-yellow-500 pt-30 md:px-0 md:pt-60 md:text-4xl">
          Solusi Sistem Software Fleksibel & Terintegrasi
        </p>
        <h1 class="text-3xl font-bold text-white lg:text-8xl md:text-6xl">
          Dirancang untuk<br />Bisnis <span id="spin"></span> Anda
        </h1>
        <button
          type="button"
          class="mb-8 mt-8 rounded-8 from-orange-400 to-yellow-400 bg-gradient-to-r px-10 py-3 text-xl font-bold text-white"
        >
          Lihat Software
        </button>
      </div>
    </div>
  </section>

  <section class="relative bg-green-50 pb-50">
    <div class="container">
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

  <section class="relative bg-white pb-8">
    <div class="container">
      <div class="flex">
        <div class="relative w-full -mt-30">
          <BoxSearchMarketplace />
        </div>
      </div>
      <div class="flex-1 pt-4 space-y-2 md:pt-16 md:space-y-4">
        <h1 class="px-2 text-center text-3xl font-bold text-orange-400 md:text-5xl">
          6 Standar <span class="text-black">Pointhub</span>
        </h1>
        <h1 class="text-center text-xs font-medium text-black md:text-sm">
          Standar produk dan jasa yang kami terapkan dan jadi pembeda Pointhub dengan layanan
          lainnya
        </h1>
        <img src="@/assets/images/6-Icon-Standart-Point-Desktop.png" />
        <div class="mx-auto flex flex-wrap-reverse pt-10 md:flex-nowrap space-x-4">
          <div class="flex-col px-4 md:w-1/2 space-y-6">
            <div class="relative items-center">
              <div
                class="absolute left-0 top-1/3 h-10 w-10 rotate-45 transform border-b-[0.5px] border-l-[0.5px] border-green-600 rounded-bl-1 bg-white -translate-x-1/2"
              ></div>
              <div class="border-[0.5px] border-green-600 rounded-8 bg-white p-8">
                <h1 class="text-sm font-bold text-black md:text-xl">
                  Ingin Menggunakan Software, Tapi Bingung Mulainya Harus Darimana?
                </h1>
              </div>
            </div>
            <div class="space-y-4">
              <div class="flex items-center">
                <h1 class="text-sm font-bold text-green-700 md:text-xl">
                  Software Point Mudah Digunakan
                </h1>
                <img class="ml-2 h-4 w-4 md:h-8 md:w-8" src="@/assets/images/check.png" />
              </div>
              <h1 class="text-justify text-xs text-black md:text-sm">
                Software dirancang dengan mempertingankan kemudahan Anda serta fitur-fitur
                didalamnya menyesuaikan dengan kebutuhan Bisnis Anda
              </h1>
            </div>
          </div>
          <div class="relative md:w-1/2">
            <img class="mx-auto h-340px -mt-10" src="@/assets/images/Thumbnail-Usable.png" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="relative bg-green-50 pb-8">
    <div
      class="absolute left-1/2 right-1/2 top-0 h-12 w-12 origin-top-left rotate-45 transform rounded-br-1 bg-white -mt-9 md:h-15 md:w-15 md:-mt-11"
    ></div>
    <div class="container">
      <div class="flex flex-wrap pt-8 md:flex-nowrap space-x-4 md:pt-16">
        <div class="relative md:w-1/2">
          <img class="mx-auto h-350px md:-mt-10" src="@/assets/images/Thumbnail-Mantainable.png" />
        </div>
        <div class="flex-col px-4 md:w-1/2 space-y-6">
          <div class="relative items-center">
            <div
              class="absolute right-0 top-1/3 h-10 w-10 translate-x-1/2 rotate-45 transform border-r-[0.5px] border-t-[0.5px] border-green-600 rounded-bl-1 bg-white"
            ></div>
            <div class="border-[0.5px] border-green-600 rounded-8 bg-white p-8">
              <h1 class="text-sm font-bold text-black md:text-lg">
                Developer Bermasalah Ketika Proses Pembuatan Software?
              </h1>
            </div>
          </div>
          <div class="space-y-4">
            <div class="flex items-end">
              <h1 class="text-sm font-bold text-green-700 md:text-lg">
                Software Point Bisa Dilanjutkan Oleh Developer Manapun (No Vendor Lock)
              </h1>
              <img class="ml-2 h-4 w-4 md:h-8 md:w-8" src="@/assets/images/check.png" />
            </div>
            <h1 class="text-justify text-xs text-black md:text-sm">
              Software tidak terikat ke satu developer tertentu saja. Anda bahkan dapat memilih
              developer sendiri untuk melanjutkan pengembangan software anda.
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="relative bg-white pb-8">
    <div
      class="absolute left-1/2 right-1/2 top-0 h-12 w-12 origin-top-left rotate-45 transform rounded-br-1 bg-green-50 -mt-9 md:h-15 md:w-15 md:-mt-11"
    ></div>
    <div class="container">
      <div class="flex flex-wrap-reverse md:flex-nowrap space-x-4 md:pt-16">
        <div class="flex-col px-4 md:w-1/2 space-y-6">
          <div class="relative items-center">
            <div
              class="absolute left-0 top-1/3 h-10 w-10 rotate-45 transform border-b-[0.5px] border-l-[0.5px] border-green-600 rounded-bl-1 bg-white -translate-x-1/2"
            ></div>
            <div class="border-[0.5px] border-green-600 rounded-8 bg-white p-8">
              <h1 class="text-sm font-bold text-black md:text-lg">
                Bisnis Semakin Berkembang, Tapi Softwarenya Ketinggalan?
              </h1>
            </div>
          </div>
          <div class="space-y-4">
            <div class="flex items-end">
              <h1 class="text-sm font-bold text-green-700 md:text-lg">
                Software Point Bisa Dicustom Mengikuti Perkembangan Bisnis
              </h1>
              <img class="mb-1 ml-2 h-4 w-4 md:h-8 md:w-8" src="@/assets/images/check.png" />
            </div>
            <h1 class="text-justify text-xs text-black md:text-sm">
              Open Source Community memberikan keuntungan untuk dapat mengembangkan software lebih
              cepat dan mudah, sehingga perkembangan software dapat sesuai dengan perkembangan
              bisnis anda.
            </h1>
          </div>
        </div>
        <div class="relative md:w-1/2">
          <img
            class="mx-auto h-450px -mb-10 -mt-10 md:mb-0 md:-mt-20"
            src="@/assets/images/Thumbnail-Scalable.png"
          />
        </div>
      </div>
    </div>
  </section>

  <section class="relative bg-green-50 pb-8">
    <div
      class="absolute left-1/2 right-1/2 top-0 h-12 w-12 origin-top-left rotate-45 transform rounded-br-1 bg-white -mt-9 md:h-15 md:w-15 md:-mt-11"
    ></div>
    <div class="container">
      <div class="flex flex-wrap md:flex-nowrap space-x-4 md:pt-16">
        <div class="relative flex md:w-1/2">
          <img class="mr-auto h-380px md:-mt-10" src="@/assets/images/Thumbnail-Secure.png" />
        </div>
        <div class="flex-col px-4 md:w-1/2 space-y-6">
          <div class="relative items-center">
            <div
              class="absolute right-0 top-1/3 h-10 w-10 translate-x-1/2 rotate-45 transform border-r-[0.5px] border-t-[0.5px] border-green-600 rounded-bl-1 bg-white"
            ></div>
            <div class="border-[0.5px] border-green-600 rounded-8 bg-white p-8">
              <h1 class="text-sm font-bold text-black md:text-lg">
                Khawatir Dengan Keamanan Data Anda?
              </h1>
            </div>
          </div>
          <div class="space-y-4">
            <div class="flex items-start">
              <h1 class="text-sm font-bold text-green-700 md:text-lg">
                Anda Memiliki Kuasa Penuh Atas Penyimpanan Data Anda
              </h1>
              <img class="ml-2 mt-1 h-4 w-4 md:h-8 md:w-8" src="@/assets/images/check.png" />
            </div>
            <h1 class="text-justify text-xs text-black md:text-sm">
              Anda dapat memilih dan menentukan sendiri data anda akan disimpan dimana dan tidak
              dapat diakses oleh pihak Point sekalipun.
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="relative bg-white pb-8">
    <div
      class="absolute left-1/2 right-1/2 top-0 h-12 w-12 origin-top-left rotate-45 transform rounded-br-1 bg-green-50 -mt-9 md:h-15 md:w-15 md:-mt-11"
    ></div>
    <div class="container">
      <div class="flex flex-wrap pt-16 md:flex-nowrap space-x-4 space-y-4 md:pt-16">
        <div class="flex-col px-4 md:w-1/2 space-y-4">
          <div>
            <img class="mx-auto h-60px -mb-4" src="@/assets/images/Observable.png" />
            <div class="relative text-center">
              <div
                class="absolute left-0 top-1/3 h-10 w-10 rotate-45 transform border-b-[0.5px] border-l-[0.5px] border-green-600 rounded-bl-1 bg-white -translate-x-1/2"
              ></div>
              <div class="border-[0.5px] border-green-600 rounded-8 bg-white p-8">
                <h1 class="text-sm font-bold text-black md:text-lg">
                  Menemui Kendala Saat Menggunakan Software
                </h1>
              </div>
            </div>
          </div>
          <div class="flex items-center text-center">
            <h1 class="ml-auto text-sm font-bold text-green-700 md:text-lg">
              Tersedia Online Customer Service!
            </h1>
            <img class="ml-2 h-4 w-4 md:h-8 md:w-8" src="@/assets/images/check.png" />
          </div>
        </div>
        <div class="flex-col px-4 md:w-1/2 space-y-4">
          <div>
            <img class="mx-auto h-60px -mb-4" src="@/assets/images/Reliable.png" />
            <div class="relative text-center">
              <div
                class="absolute right-0 top-1/3 h-10 w-10 translate-x-1/2 rotate-45 transform border-r-[0.5px] border-t-[0.5px] border-green-600 rounded-bl-1 bg-white"
              ></div>
              <div class="border-[0.5px] border-green-600 rounded-8 bg-white p-8">
                <h1 class="text-sm font-bold text-black md:text-lg">
                  Software Tetap Bermasalah & Tidak Dapat diperbaiki?
                </h1>
              </div>
            </div>
          </div>
          <div class="flex items-center text-center">
            <h1 class="ml-auto text-sm font-bold text-green-700 md:text-lg">
              Jaminan Uang Anda Akan Kembali
            </h1>
            <img class="ml-2 h-4 w-4 md:h-8 md:w-8" src="@/assets/images/check.png" />
          </div>
        </div>
      </div>
      <div class="text-center">
        <button
          type="button"
          class="mt-8 inline-flex items-center rounded-8 from-orange-400 to-yellow-400 bg-gradient-to-r px-6 py-3 text-sm font-bold text-white md:px-10 md:text-lg"
        >
          COBA GRATIS!
        </button>
      </div>
    </div>
  </section>

  <section class="bg-gray-100">
    <div class="container">
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

  <section class="bg-white pb-10">
    <div class="container">
      <div class="flex flex-wrap pt-16 md:flex-nowrap space-y-6 md:pt-16 md:space-x-4 md:space-y-0">
        <div class="relative w-full flex md:w-1/2 md:space-x-4">
          <div class="hidden flex-none md:block">
            <img class="h-10 w-10" src="@/assets/images/Developer.png" />
          </div>
          <div class="grow flex-col text-center space-y-4 md:text-left">
            <div class="flex items-center">
              <img class="ml-auto mr-4 h-10 w-10 md:hidden" src="@/assets/images/Developer.png" />
              <h1 class="mr-auto text-3xl font-bold">Developer</h1>
            </div>
            <p class="text-sm">
              Point Kolaborasi adalah platform cloud gratis bagi pengembang untuk membuat aplikasi
              cloud yang siap diterapkan di platform Kami.
            </p>
            <div class="mt-6">
              <a href="#" class="text-sm font-bold text-orange-500">Pelajari Selengkapnya</a>
            </div>
          </div>
        </div>
        <div class="relative w-full flex md:w-1/2 md:space-x-4">
          <div class="hidden flex-none md:block">
            <img class="h-10 w-10" src="@/assets/images/Investor.png" />
          </div>
          <div class="grow flex-col text-center space-y-4 md:text-left">
            <div class="flex text-center">
              <img class="ml-auto mr-4 h-10 w-10 md:hidden" src="@/assets/images/Investor.png" />
              <h1 class="mr-auto text-3xl font-bold">Investor</h1>
            </div>
            <p class="text-sm">Lorem ipsum dolor sit amet,</p>
            <div class="mt-6">
              <a href="#" class="text-sm font-bold text-orange-500">Pelajari Selengkapnya</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-black pb-20 md:pb-14">
    <div class="relative rounded-b-[15%] bg-white pb-25 md:rounded-b-[30%]">
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
                    class="inline-flex items-center rounded-8 bg-white px-5 py-2 text-xs font-bold text-green-700 md:right-0 md:text-lg"
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
.clip-container {
  background-image: url('@/assets/images/Banner-Home-Point.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

#spin:after {
  content: 'UMKM';
  animation: spin infinite 3s;
}
@keyframes spin {
  0% {
    content: 'UMKM';
  }
  50% {
    content: 'Distribusi';
  }
  75% {
    content: 'Produksi';
  }
}
</style>
