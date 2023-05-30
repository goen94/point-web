<script setup lang="ts"></script>

<template>
  <section class="-mt-120px">
    <div class="bg-header md:bg-[100%] relative h-full bg-cover">
      <div class="relative container">
        <div class="flex flex-wrap pt-50px md:flex-nowrap space-x-4 space-y-4 md:pt-120px">
          <div class="relative flex md:w-1/2">
            <h1
              class="mx-auto pt-16 text-center text-2xl font-bold text-white md:px-10% md:text-left md:text-4xl"
            >
              Sampaikan Apa Pertanyaan Anda Tentang Pointhub
            </h1>
          </div>
          <div class="flex-col md:w-1/2">
            <img class="mt-auto" src="@/assets/images/Thumbnail-Kontak.png" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="relative bg-white">
    <div class="py-8 container md:py-16">
      <div class="mb-30 text-center space-y-2 md:space-y-6">
        <h1 class="text-center text-3xl font-bold text-black">
          Kirimkan
          <span class="text-orange-5">Pesan</span>
        </h1>
        <p class="px-2 pb-4 text-sm md:px-8">
          Dengan senang hati menjawab setiap pesan dan pertanyaan yang Anda tinggalkan. Harap isi
          form berikut dengan data yang valid untuk mempermudah kami dalam menjangkau Anda.
        </p>
        <div class="grid mt-8 gap-4 pb-4 md:grid-cols-2 md:gap-8">
          <div>
            <input
              type="text"
              id="search"
              class="block w-full border border-green-500 rounded-lg bg-white px-5 py-2 text-lg text-gray-900 focus:outline-none"
              placeholder="Nama Anda"
            />
          </div>
          <div>
            <input
              type="text"
              id="search"
              class="block w-full border border-green-500 rounded-lg bg-white px-5 py-2 text-lg text-gray-900 focus:outline-none"
              placeholder="No. Handphone"
            />
          </div>
          <div>
            <input
              type="text"
              id="search"
              class="block w-full border border-green-500 rounded-lg bg-white px-5 py-2 text-lg text-gray-900 focus:outline-none"
              placeholder="Alamat Email"
            />
          </div>
          <div>
            <input
              type="text"
              id="search"
              class="block w-full border border-green-500 rounded-lg bg-white px-5 py-2 text-lg text-gray-900 focus:outline-none"
              placeholder="Kota"
            />
          </div>
          <div class="md:col-span-2">
            <textarea
              id="search"
              rows="8"
              class="block w-full border border-green-500 rounded-lg bg-white px-5 py-2 text-lg text-gray-900 focus:outline-none"
              placeholder="Pesan"
            ></textarea>
          </div>
        </div>
        <button
          type="button"
          class="mt-8 rounded-8 from-orange-500 to-yellow-400 bg-gradient-to-r px-10 py-3 text-xl font-bold text-white"
        >
          Kirim Pesan
        </button>
      </div>
    </div>
  </section>

  <section class="min-h-[100px] bg-green-50 pb-2">
    <div class="container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5989386037304!2d112.7324176104555!3d-7.286389171583185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb739a16e027%3A0x2ed5fc64cd02763c!2sPointHub!5e0!3m2!1sen!2sid!4v1685178291245!5m2!1sen!2sid"
        class="relative h-40vh w-full -mt-30"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div class="mt-6 flex">
        <div class="mx-auto flex items-center">
          <div class="i-mdi-map-marker text-3xl text-green-700"></div>
          <h1 class="text-center text-sm font-bold text-black md:text-xl">
            Jl Musi No 21, Surabaya, Indonesia
          </h1>
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
