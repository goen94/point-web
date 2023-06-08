<script setup lang="ts">
import BoxSearchMarketplace from '../component/box-search-marketplace.vue'
import BoxFaq from '../component/box-faq.vue'
import PointSoftware from '../component/point-software.vue'
import PointClient from '../component/point-client.vue'
</script>

<template>
  <section class="overflow-hidden bg-green-50">
    <div class="clip-container relative min-h-50vh rounded-b-[50%] -mx-40 md:min-h-100vh">
      <div class="h-full w-full place-items-center justify-center text-center">
        <p class="px-6 pt-30 text-sm text-yellow-500 md:px-0 md:pt-60 md:text-4xl">
          Solusi Sistem Software Fleksibel & Terintegrasi
        </p>
        <h1 class="text-3xl font-bold text-white lg:text-8xl md:text-6xl">
          Dirancang untuk<br />Bisnis <span id="spin"></span> Anda
        </h1>
        <router-link :to="'/marketplace'">
          <button
            type="button"
            class="mb-8 mt-8 rounded-8 from-orange-400 to-yellow-400 bg-gradient-to-r px-10 py-3 text-xl font-bold text-white"
          >
            Lihat Software
          </button>
        </router-link>
      </div>
    </div>
  </section>

  <section class="relative bg-green-50 pb-50">
    <div class="container">
      <PointSoftware />
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
        <img class="hidden md:block" src="@/assets/images/6-Icon-Standart-Point-Desktop.png" />
        <div class="grid grid-cols-3 md:hidden">
          <div class="mb-2 space-y-2">
            <img class="max-w-25" src="@/assets/images/Icon-Usable.png" />
            <h1 class="text-center text-sm font-bold text-black">Usable</h1>
          </div>
          <div class="mb-2 space-y-2">
            <img class="max-w-25" src="@/assets/images/Icon-Mantainable.png" />
            <h1 class="text-center text-sm font-bold text-black">Maintainable</h1>
          </div>
          <div class="mb-2 space-y-2">
            <img class="max-w-25" src="@/assets/images/Icon-Scalable.png" />
            <h1 class="text-center text-sm font-bold text-black">Scalable</h1>
          </div>
          <div class="mb-2 space-y-2">
            <img class="max-w-25" src="@/assets/images/Icon-Observable.png" />
            <h1 class="text-center text-sm font-bold text-black">Observable</h1>
          </div>
          <div class="mb-2 space-y-2">
            <img class="max-w-25" src="@/assets/images/Icon-Secure.png" />
            <h1 class="text-center text-sm font-bold text-black">Secure</h1>
          </div>
          <div class="mb-2 space-y-2">
            <img class="max-w-25" src="@/assets/images/Icon-Reliable.png" />
            <h1 class="text-center text-sm font-bold text-black">Reliable</h1>
          </div>
        </div>
        <div class="mx-auto flex flex-wrap-reverse pt-10 md:flex-nowrap space-x-4">
          <div class="flex-col px-4 md:w-1/2 space-y-6">
            <div class="relative items-center">
              <div
                class="absolute left-0 top-1/3 h-10 w-10 rotate-45 transform border-b-[0.5px] border-l-[0.5px] border-green-600 rounded-bl-1 bg-white -translate-x-1/2"
              ></div>
              <div
                class="mx-auto min-h-125px flex items-center border-[0.5px] border-green-600 rounded-8 bg-white p-8"
              >
                <h1 class="mx-auto text-left text-sm font-bold text-black md:text-lg">
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
            <img class="mx-auto -mt-10 md:h-340px" src="@/assets/images/Thumbnail-Usable.png" />
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
          <img
            class="mx-auto md:h-350px md:-mt-10"
            src="@/assets/images/Thumbnail-Mantainable.png"
          />
        </div>
        <div class="flex-col px-4 md:w-1/2 space-y-6">
          <div class="relative items-center">
            <div
              class="absolute right-0 top-1/3 h-10 w-10 translate-x-1/2 rotate-45 transform border-r-[0.5px] border-t-[0.5px] border-green-600 rounded-bl-1 bg-white"
            ></div>
            <div
              class="mx-auto min-h-125px flex items-center border-[0.5px] border-green-600 rounded-8 bg-white p-8"
            >
              <h1 class="mx-auto text-left text-sm font-bold text-black md:text-lg">
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
            <div
              class="mx-auto min-h-125px flex items-center border-[0.5px] border-green-600 rounded-8 bg-white p-8"
            >
              <h1 class="mx-auto text-left text-sm font-bold text-black md:text-lg">
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
            class="mx-auto -mb-10 md:mb-0 md:h-450px md:-mt-10 md:-mt-20"
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
          <img class="mr-auto md:h-380px md:-mt-10" src="@/assets/images/Thumbnail-Secure.png" />
        </div>
        <div class="flex-col px-4 md:w-1/2 space-y-6">
          <div class="relative items-center">
            <div
              class="absolute right-0 top-1/3 h-10 w-10 translate-x-1/2 rotate-45 transform border-r-[0.5px] border-t-[0.5px] border-green-600 rounded-bl-1 bg-white"
            ></div>
            <div
              class="mx-auto min-h-125px flex items-center border-[0.5px] border-green-600 rounded-8 bg-white p-8"
            >
              <h1 class="mx-auto text-left text-sm font-bold text-black md:text-lg">
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
      <div class="flex flex-wrap pt-16 md:flex-nowrap space-x-4 space-y-4 md:pt-16 md:space-y-0">
        <div class="flex-col px-4 md:w-1/2 space-y-4">
          <div class="text-center">
            <!-- <img class="mx-auto h-60px -mb-4" src="@/assets/images/Observable.png" /> -->
            <h1 class="mx-auto h-60px font-poppins text-5xl text-white text-stroke -mb-5 md:-mb-6">
              OBSERVABLE
            </h1>
            <div class="relative text-center">
              <div
                class="absolute left-0 top-1/3 h-10 w-10 rotate-45 transform border-b-[0.5px] border-l-[0.5px] border-green-600 rounded-bl-1 bg-white -translate-x-1/2"
              ></div>
              <div
                class="mx-auto min-h-125px flex items-center border-[0.5px] border-green-600 rounded-8 bg-white p-8"
              >
                <h1 class="mx-auto text-center text-sm font-bold text-black md:text-lg">
                  Menemui Kendala Saat Menggunakan Software
                </h1>
              </div>
            </div>
          </div>
          <div class="flex items-center text-center">
            <h1 class="mx-auto text-sm font-bold text-green-700 md:text-lg">
              Tersedia Online Customer Service!
            </h1>
            <img class="ml-2 h-4 w-4 md:h-8 md:w-8" src="@/assets/images/check.png" />
          </div>
        </div>
        <div class="flex-col px-4 md:w-1/2 space-y-4">
          <div class="text-center">
            <h1 class="mx-auto h-60px font-poppins text-5xl text-white text-stroke -mb-5 md:-mb-6">
              RELIABLE
            </h1>
            <div class="relative min-h-125px text-center">
              <div
                class="absolute right-0 top-1/3 h-10 w-10 translate-x-1/2 rotate-45 transform border-r-[0.5px] border-t-[0.5px] border-green-600 rounded-bl-1 bg-white"
              ></div>
              <div
                class="mx-auto min-h-125px flex items-center border-[0.5px] border-green-600 rounded-8 bg-white p-8"
              >
                <h1 class="mx-auto text-center text-sm font-bold text-black md:text-lg">
                  Software Tetap Bermasalah & Tidak Dapat diperbaiki?
                </h1>
              </div>
            </div>
          </div>
          <div class="flex items-center text-center">
            <h1 class="mx-auto text-sm font-bold text-green-700 md:text-lg">
              Jaminan Uang Anda Akan Kembali
            </h1>
            <img class="ml-2 h-4 w-4 md:h-8 md:w-8" src="@/assets/images/check.png" />
          </div>
        </div>
      </div>
      <div class="text-center">
        <router-link :to="'/signup'">
          <button
            type="button"
            class="mt-8 inline-flex items-center rounded-8 from-orange-400 to-yellow-400 bg-gradient-to-r px-6 py-3 text-sm font-bold text-white md:px-10 md:text-lg"
          >
            COBA GRATIS!
          </button>
        </router-link>
      </div>
    </div>
  </section>

  <section class="bg-gray-100">
    <PointClient />
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
              <h1 class="mr-auto text-3xl font-bold text-black">Developer</h1>
            </div>
            <p class="text-sm text-black">
              Point Kolaborasi adalah platform cloud gratis bagi pengembang untuk membuat aplikasi
              cloud yang siap diterapkan di platform Kami.
            </p>
            <div class="mt-6">
              <p class="text-sm font-bold text-orange-500">Pelajari Selengkapnya</p>
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
              <h1 class="mr-auto text-3xl font-bold text-black">Investor</h1>
            </div>
            <p class="text-sm text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <div class="mt-6">
              <router-link :to="'/investor'">
                <p class="text-sm font-bold text-orange-500">Pelajari Selengkapnya</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-black pb-20 md:pb-14">
    <div class="relative rounded-b-[15%] bg-white pb-25 md:rounded-b-[30%]">
      <div class="container">
        <BoxFaq />
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
