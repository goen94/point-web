<template>
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
        <div class="mt-2 w-full flex md:w-1/2 space-x-2 md:px-4">
          <div class="w-1/2">
            <router-link :to="'/help'">
              <button
                type="button"
                class="inline-flex items-center rounded-8 bg-white px-5 py-2 text-2.5 font-bold text-green-700 md:text-lg"
              >
                <div class="i-ph-question-bold mr-2"></div>
                Pusat Bantuan
              </button>
            </router-link>
          </div>
          <div class="w-1/2">
            <button
              type="button"
              class="inline-flex items-center rounded-8 bg-white px-5 py-2 text-2.5 font-bold text-green-700 md:right-0 md:text-lg"
            >
              <div class="i-ic-baseline-whatsapp mr-2"></div>
              No Whatsapp
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
