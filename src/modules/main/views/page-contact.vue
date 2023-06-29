<script setup lang="ts">
import BoxFaq from '../component/box-faq.vue'
</script>

<template>
  <section>
    <div class="bg-header md:bg-[100%] relative h-full bg-cover">
      <div class="relative container">
        <div class="flex flex-wrap pt-30px md:flex-nowrap space-x-4 space-y-4 md:pt-100px">
          <div class="relative flex md:w-1/2">
            <h1
              class="mx-auto pt-16 text-center text-2xl font-bold text-white md:px-10% md:text-left md:text-4xl"
            >
              Sampaikan Apa Pertanyaan Anda Tentang Pointhub
            </h1>
          </div>
          <div class="flex-col md:w-1/2">
            <img class="mt-auto" src="@/assets/images/contact/thumbnail-kontak.png" />
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
        <p class="px-2 pb-4 text-sm text-black md:px-8">
          Dengan senang hati menjawab setiap pesan dan pertanyaan yang Anda tinggalkan. Harap isi
          form berikut dengan data yang valid untuk mempermudah kami dalam menjangkau Anda.
        </p>
        <div class="grid mt-8 gap-4 pb-4 md:grid-cols-2 md:gap-8">
          <div>
            <input
              type="text"
              class="block w-full border border-green-500 rounded-lg bg-white px-5 py-2 text-lg text-gray-900 focus:outline-none"
              placeholder="Nama Anda"
            />
          </div>
          <div>
            <input
              type="text"
              class="block w-full border border-green-500 rounded-lg bg-white px-5 py-2 text-lg text-gray-900 focus:outline-none"
              placeholder="No. Handphone"
            />
          </div>
          <div>
            <input
              type="text"
              class="block w-full border border-green-500 rounded-lg bg-white px-5 py-2 text-lg text-gray-900 focus:outline-none"
              placeholder="Alamat Email"
            />
          </div>
          <div>
            <input
              type="text"
              class="block w-full border border-green-500 rounded-lg bg-white px-5 py-2 text-lg text-gray-900 focus:outline-none"
              placeholder="Kota"
            />
          </div>
          <div class="md:col-span-2">
            <textarea
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

  <section class="min-h-[100px] bg-green-50 pb-5">
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
    <div class="rounded-b-[15%] bg-green-50 pb-25 md:rounded-b-[25%]">
      <div class="container">
        <BoxFaq />
      </div>
    </div>
  </section>
</template>
